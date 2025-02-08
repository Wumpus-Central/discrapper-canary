n.r(t), n.d(t, { default: () => C });
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
    x = n(328977),
    h = n(208257),
    _ = n(853486),
    p = n(388032),
    f = n(251806);
let C = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(l.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        C = (0, x.L)({ guildId: t }),
        { user: j } = null != C ? C : {},
        v = i.useMemo(() => (null != j ? new c.Z(j) : null), [j]),
        b = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, s.Tt)({
        subsection: p.intl.string(p.t.nqrK8f),
        location: null == b ? void 0 : b.name
    }),
        i.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let g = null != C && null != b && null != v;
    return (0, a.jsxs)(o.Gt, {
        value: n,
        children: [
            (0, a.jsx)('div', {
                className: f.content,
                children: (0, a.jsx)(h.Z, {
                    guildId: t,
                    isSidebarOpen: g
                })
            }),
            g &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)('div', { className: f.sidebarSeparator }),
                        (0, a.jsx)('section', {
                            className: f.sidebar,
                            children: (0, a.jsx)(_.Z, {
                                guild: b,
                                guildJoinRequest: C,
                                guildJoinRequestUser: v,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
