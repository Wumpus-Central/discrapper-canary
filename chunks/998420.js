n.r(t);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    o = n(100527),
    l = n(906732),
    c = n(252618),
    s = n(598077),
    d = n(430824),
    u = n(693546),
    m = n(863249),
    f = n(328977),
    x = n(208257),
    b = n(853486),
    h = n(388032),
    p = n(251806);
t.default = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(o.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        C = (0, f.L)({ guildId: t }),
        { user: _ } = null != C ? C : {},
        g = r.useMemo(() => (null != _ ? new s.Z(_) : null), [_]),
        v = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, c.Tt)({
        subsection: h.intl.string(h.t.nqrK8f),
        location: null == v ? void 0 : v.name
    }),
        r.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let j = null != C && null != v && null != g;
    return (0, i.jsxs)(l.Gt, {
        value: n,
        children: [
            (0, i.jsx)('div', {
                className: p.content,
                children: (0, i.jsx)(x.Z, {
                    guildId: t,
                    isSidebarOpen: j
                })
            }),
            j &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', { className: p.sidebarSeparator }),
                        (0, i.jsx)('section', {
                            className: p.sidebar,
                            children: (0, i.jsx)(b.Z, {
                                guild: v,
                                guildJoinRequest: C,
                                guildJoinRequestUser: g,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
