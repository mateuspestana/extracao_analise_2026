"""Executa a célula recebida pelo worker e devolve uma saída serializável."""

import ast
import io
import json
import traceback
from contextlib import redirect_stderr, redirect_stdout

_fgv_stdout = io.StringIO()
_fgv_stderr = io.StringIO()
_fgv_result = None
_fgv_error = None

try:
    _fgv_tree = ast.parse(student_code, mode="exec")
    with redirect_stdout(_fgv_stdout), redirect_stderr(_fgv_stderr):
        if _fgv_tree.body and isinstance(_fgv_tree.body[-1], ast.Expr):
            _fgv_prefix = ast.Module(body=_fgv_tree.body[:-1], type_ignores=[])
            ast.fix_missing_locations(_fgv_prefix)
            exec(compile(_fgv_prefix, "<celula>", "exec"), globals())
            _fgv_last = ast.Expression(_fgv_tree.body[-1].value)
            ast.fix_missing_locations(_fgv_last)
            _fgv_result = eval(compile(_fgv_last, "<celula>", "eval"), globals())
        else:
            exec(compile(_fgv_tree, "<celula>", "exec"), globals())
except Exception:
    _fgv_error = traceback.format_exc()

json.dumps({
    "stdout": _fgv_stdout.getvalue(),
    "stderr": _fgv_stderr.getvalue(),
    "error": _fgv_error,
    "result": None if _fgv_result is None else repr(_fgv_result)[:12000],
}, default=str)
