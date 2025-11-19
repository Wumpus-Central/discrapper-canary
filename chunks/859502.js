_.d(e, { a: () => s });
var a = _(824851),
    r = _(753642),
    n = _(622916),
    o = _(255768),
    E = _(696486),
    i = _(793373);
let c = !1;
function s() {
    c || ((c = !0), (0, a.V)(l), (0, r.h)(l));
}
function l() {
    let t = (0, E.HN)(),
        e = t && (0, E.Gx)(t);
    if (e) {
        let t = "internal_error";
        o.X && n.kg.log(`[Tracing] Root span: ${t} -> Global error occured`),
            e.setStatus({
                code: i.jt,
                message: t,
            });
    }
}
l.tag = "sentry_tracingErrorCallback";
