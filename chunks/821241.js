n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(709066),
    c = n(71393),
    u = n(763754),
    d = n(643204),
    f = n(809115),
    p = n(888675),
    _ = n(705751),
    h = n(985018),
    m = n(234054);

function g(e) {
    var t;
    let { message: n, compact: i, usernameHook: g, channel: E } = e,
        b = (0, s.bG)([c.A], () => c.A.getGuild(E.guild_id)),
        y = (0, u.Ay)(n),
        O = g(y),
        {
            avatarSrc: A,
            eventHandlers: { onMouseEnter: v, onMouseLeave: S },
        } = (0, f.a)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: v,
        onMouseLeave: S,
        children: (0, r.jsx)(p.A, {
            className: a()(m.rs, {
                [m.oE]: i,
            }),
            iconNode: i
                ? null
                : (0, r.jsx)(f.l, {
                      src: A,
                  }),
            iconContainerClassName: m.zc,
            compact: i,
            children: (0, r.jsxs)("div", {
                className: a()(m.Qs, {
                    [m.oE]: i,
                }),
                children: [
                    (0, r.jsx)(d.ix, {
                        message: n,
                        messageClassname: m.he,
                        className: a()(m.QV, m.he, {
                            [m.oE]: i,
                        }),
                        username: (0, r.jsxs)("div", {
                            className: m.he,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: m.Xh,
                                    children: h.intl.string(h.t.hG1StD),
                                }),
                                (0, r.jsx)(l.A, {
                                    type: _.nu.SYSTEM_DM,
                                    className: m.Al,
                                }),
                            ],
                        }),
                        compact: i,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(m.__invalid_messageContent, {
                            [m.oE]: i,
                        }),
                        children: h.intl.format(h.t.W0UBI3, {
                            username: y.nick,
                            usernameHook: O,
                            guildName: null != (t = null == b ? void 0 : b.name) ? t : "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
