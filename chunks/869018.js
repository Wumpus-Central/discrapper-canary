var i = n(182025),
    r = n(534645),
    a = n(153207),
    s = n(260498),
    l = n(754027),
    o = n(165610);
n.d(
    t,
    {},
    {
        V: function (e) {
            let { known: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = s.Ay.getProject(e),
                d = n?.preview_application_id;
            if (null == d || (0, o.x1)((0, l.Rc)(d))) return;
            if (!t) {
                let t = s.Ay.getIntegrationStatus(e) ?? a.A.getIntegrationStatus(e);
                if (t?.preview_ready !== !0 || !0 !== t.has_activity) return;
            }
            let c = (0, l.jS)(n),
                u = (0, l.Op)(c);
            (0, r.a)(i.cu.CONJURE_PREVIEW_PREFETCH, d, u);
        },
    },
);
