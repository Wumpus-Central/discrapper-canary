r.d(t, { a: () => E });
var n = r(824851),
    a = r(753642),
    i = r(622916),
    o = r(255768),
    _ = r(696486),
    s = r(793373);
let c = !1;
function E() {
    c || ((c = !0), (0, n.V)(l), (0, a.h)(l));
}
function l() {
    let e = (0, _.HN)(),
        t = e && (0, _.Gx)(e);
    if (t) {
        let e = "internal_error";
        o.X && i.kg.log(`[Tracing] Root span: ${e} -> Global error occured`),
            t.setStatus({
                code: s.jt,
                message: e,
            });
    }
}
l.tag = "sentry_tracingErrorCallback";
