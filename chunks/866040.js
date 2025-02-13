n.d(t, { Z: () => p }), n(411104);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(239091),
    s = n(751688),
    c = n(184301),
    d = n(347475),
    u = n(210887),
    m = n(5192),
    _ = n(682219);
function g(e) {
    let { participants: t, channel: a } = e;
    return (0, r.jsx)(o.Ttm, {
        className: _.popout,
        children: t.map((e) =>
            (0, r.jsx)(
                s.Z,
                {
                    user: e,
                    guildId: null == a ? void 0 : a.guild_id,
                    channelId: null == a ? void 0 : a.id,
                    nick: m.ZP.getNickname(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, e),
                    onContextMenu: (t) => {
                        (0, l.jW)(t, async () => {
                            let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('34272')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, r.jsx)(t, {
                                    ...n,
                                    user: e
                                });
                        });
                    }
                },
                e.id
            )
        )
    });
}
function p(e) {
    let { children: t, participants: n, channel: l, onPopoutClosed: s } = e,
        m = (0, i.e7)([u.Z], () => u.Z.theme),
        _ = 1 === n.length ? n[0] : null,
        p = (0, a.useCallback)(
            (e) => {
                if (null != _)
                    return (0, r.jsx)(d.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == s || s();
                        },
                        userId: _.id,
                        guildId: null == l ? void 0 : l.guild_id,
                        channelId: null == l ? void 0 : l.id
                    });
                if (null != n)
                    return (0, r.jsx)(g, {
                        participants: n,
                        channel: l
                    });
                throw Error('One of participant or participants is required');
            },
            [l, s, n, _]
        );
    return (0, r.jsx)(o.ze6, {
        theme: m,
        children: (0, r.jsx)(o.yRy, {
            renderPopout: p,
            preload: () =>
                null != _
                    ? (0, c.Z)(_, {
                          guildId: null == l ? void 0 : l.guild_id,
                          channelId: null == l ? void 0 : l.id
                      })
                    : Promise.resolve(),
            children: t
        })
    });
}
