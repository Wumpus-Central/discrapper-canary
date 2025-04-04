a.d(e, { a: () => E });
var r = a(824851),
    n = a(753642),
    _ = a(622916),
    o = a(255768),
    i = a(696486),
    c = a(793373);
let s = !1;
function E() {
    s || ((s = !0), (0, r.V)(l), (0, n.h)(l));
}
function l() {
    let t = (0, i.HN)(),
        e = t && (0, i.Gx)(t);
    if (e) {
        let t = 'internal_error';
        o.X && _.kg.log(`[Tracing] Root span: ${t} -> Global error occured`),
            e.setStatus({
                code: c.jt,
                message: t
            });
    }
}
l.tag = 'sentry_tracingErrorCallback';
