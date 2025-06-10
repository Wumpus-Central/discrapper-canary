a.d(e, { V: () => o });
var r = a(899517),
    _ = a(578346);
let n = null;
function o(t) {
    let e = 'error';
    (0, _.Hj)(e, t), (0, _.D2)(e, i);
}
function i() {
    (n = r.n.onerror),
        (r.n.onerror = function (t, e, a, r, o) {
            return (
                (0, _.rK)('error', {
                    column: r,
                    error: o,
                    line: a,
                    msg: t,
                    url: e
                }),
                !!n && !n.__SENTRY_LOADER__ && n.apply(this, arguments)
            );
        }),
        (r.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
