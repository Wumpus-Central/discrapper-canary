_.d(e, { V: () => o });
var a = _(899517),
    r = _(578346);
let n = null;
function o(t) {
    let e = "error";
    (0, r.Hj)(e, t), (0, r.D2)(e, E);
}
function E() {
    (n = a.n.onerror),
        (a.n.onerror = function (t, e, _, a, o) {
            return (
                (0, r.rK)("error", {
                    column: a,
                    error: o,
                    line: _,
                    msg: t,
                    url: e,
                }),
                !!n && !n.__SENTRY_LOADER__ && n.apply(this, arguments)
            );
        }),
        (a.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
