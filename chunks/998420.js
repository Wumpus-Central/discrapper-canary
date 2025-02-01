n.r(t), n.d(t, { default: () => b });
var a = n(200651),
    i = n(192379),
    r = n(442837),
    l = n(100527),
    o = n(906732),
    s = n(252618),
    c = n(598077),
    d = n(430824),
    u = n(693546),
    m = n(863249),
    _ = n(328977),
    x = n(208257),
    f = n(853486),
    h = n(388032),
    p = n(251806);
let b = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(l.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        b = (0, _.L)({ guildId: t }),
        { user: g } = null != b ? b : {},
        C = i.useMemo(() => (null != g ? new c.Z(g) : null), [g]),
        v = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, s.Tt)({
        subsection: h.intl.string(h.t.nqrK8f),
        location: null == v ? void 0 : v.name
    }),
        i.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let j = null != b && null != v && null != C;
    return (0, a.jsxs)(o.Gt, {
        value: n,
        children: [
            (0, a.jsx)('div', {
                className: p.content,
                children: (0, a.jsx)(x.Z, {
                    guildId: t,
                    isSidebarOpen: j
                })
            }),
            j &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)('div', { className: p.sidebarSeparator }),
                        (0, a.jsx)('section', {
                            className: p.sidebar,
                            children: (0, a.jsx)(f.Z, {
                                guild: v,
                                guildJoinRequest: b,
                                guildJoinRequestUser: C,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
