n.d(t, { V: () => u });
var i = n(730602),
    r = n(627363),
    a = n(982844),
    s = n(197184),
    l = n(153207),
    o = n(260498),
    d = n(754027),
    c = n(165610);
function u(e) {
    let { known: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = o.Ay.getProject(e),
        r = n?.preview_application_id;
    if (null == r || (0, c.x1)((0, d.Rc)(r))) return;
    if (!t) {
        let t = o.Ay.getIntegrationStatus(e) ?? l.A.getIntegrationStatus(e);
        if (t?.preview_ready !== !0 || !0 !== t.has_activity) return;
    }
    let a = (0, d.Op)((0, d.jS)(n));
    ((0, i.M)(r, (0, s.A)(a), a.type), _(r));
}
async function _(e) {
    await Promise.allSettled([(0, a.A)(e), r.YY.fetchMany([e])]);
}
