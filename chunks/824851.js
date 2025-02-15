a.d(e, { V: () => o });
var r = a(899517),
    n = a(578346);
let _ = null;
function o(t) {
    let e = 'error';
    (0, n.Hj)(e, t), (0, n.D2)(e, i);
}
function i() {
    (_ = r.n.onerror),
        (r.n.onerror = function (t, e, a, r, o) {
            return (
                (0, n.rK)('error', {
                    column: r,
                    error: o,
                    line: a,
                    msg: t,
                    url: e
                }),
                !!_ && !_.__SENTRY_LOADER__ && _.apply(this, arguments)
            );
        }),
        (r.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
