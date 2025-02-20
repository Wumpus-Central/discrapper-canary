a.d(e, { V: () => _ });
var r = a(899517),
    n = a(578346);
let o = null;
function _(t) {
    let e = 'error';
    (0, n.Hj)(e, t), (0, n.D2)(e, i);
}
function i() {
    (o = r.n.onerror),
        (r.n.onerror = function (t, e, a, r, _) {
            return (
                (0, n.rK)('error', {
                    column: r,
                    error: _,
                    line: a,
                    msg: t,
                    url: e
                }),
                !!o && !o.__SENTRY_LOADER__ && o.apply(this, arguments)
            );
        }),
        (r.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
