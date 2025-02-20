n.r(t), n.d(t, { default: () => j });
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(100527),
    l = n(906732),
    s = n(252618),
    c = n(598077),
    d = n(430824),
    u = n(693546),
    m = n(863249),
    p = n(328977),
    f = n(208257),
    x = n(853486),
    h = n(388032),
    b = n(514806);
let j = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(o.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        j = (0, p.L)({ guildId: t }),
        { user: _ } = null != j ? j : {},
        g = a.useMemo(() => (null != _ ? new c.Z(_) : null), [_]),
        v = (0, i.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, s.Tt)({
        subsection: h.NW.string(h.t.nqrK8f),
        location: null == v ? void 0 : v.name
    }),
        a.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let C = null != j && null != v && null != g;
    return (0, r.jsxs)(l.Gt, {
        value: n,
        children: [
            (0, r.jsx)('div', {
                className: b.content,
                children: (0, r.jsx)(f.Z, {
                    guildId: t,
                    isSidebarOpen: C
                })
            }),
            C &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', { className: b.sidebarSeparator }),
                        (0, r.jsx)('section', {
                            className: b.sidebar,
                            children: (0, r.jsx)(x.Z, {
                                guild: v,
                                guildJoinRequest: j,
                                guildJoinRequestUser: g,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
