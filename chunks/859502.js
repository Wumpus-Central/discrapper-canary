a.d(e, { a: () => s });
var r = a(824851),
    _ = a(753642),
    n = a(622916),
    o = a(255768),
    i = a(696486),
    E = a(793373);
let c = !1;
function s() {
    c || ((c = !0), (0, r.V)(l), (0, _.h)(l));
}
function l() {
    let t = (0, i.HN)(),
        e = t && (0, i.Gx)(t);
    if (e) {
        let t = "internal_error";
        o.X && n.kg.log(`[Tracing] Root span: ${t} -> Global error occured`),
            e.setStatus({
                code: E.jt,
                message: t,
            });
    }
}
l.tag = "sentry_tracingErrorCallback";
