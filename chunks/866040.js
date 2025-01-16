n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(411104);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(239091),
    s = n(751688),
    c = n(184301),
    d = n(347475),
    u = n(210887),
    m = n(5192),
    p = n(217248);
function g(e) {
    let { participants: t, channel: i } = e;
    return (0, r.jsx)(l.Scroller, {
        className: p.popout,
        children: t.map((e) =>
            (0, r.jsx)(
                s.Z,
                {
                    guildId: null == i ? void 0 : i.guild_id,
                    user: e,
                    nick: m.ZP.getNickname(null == i ? void 0 : i.guild_id, null == i ? void 0 : i.id, e),
                    onContextMenu: (t) => {
                        (0, o.jW)(t, async () => {
                            let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
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
function f(e) {
    let { children: t, participants: n, channel: o, onPopoutClosed: s } = e,
        m = (0, a.e7)([u.Z], () => u.Z.theme),
        p = 1 === n.length ? n[0] : null,
        f = (0, i.useCallback)(
            (e) => {
                if (null != p)
                    return (0, r.jsx)(d.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == s || s();
                        },
                        userId: p.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: null == o ? void 0 : o.id
                    });
                if (null != n)
                    return (0, r.jsx)(g, {
                        participants: n,
                        channel: o
                    });
                throw Error('One of participant or participants is required');
            },
            [o, s, n, p]
        );
    return (0, r.jsx)(l.ThemeContextProvider, {
        theme: m,
        children: (0, r.jsx)(l.Popout, {
            renderPopout: f,
            preload: () =>
                null != p
                    ? (0, c.Z)(p, {
                          guildId: null == o ? void 0 : o.guild_id,
                          channelId: null == o ? void 0 : o.id
                      })
                    : Promise.resolve(),
            children: t
        })
    });
}
