n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(709066),
    d = n(71393),
    c = n(763754),
    u = n(643204),
    m = n(809115),
    _ = n(888675),
    h = n(705751),
    p = n(985018),
    g = n(234054);
function A(e) {
    let { message: t, compact: n, usernameHook: l, channel: A } = e,
        f = (0, r.bG)([d.A], () => d.A.getGuild(A.guild_id)),
        x = (0, c.Ay)(t),
        E = l(x),
        {
            avatarSrc: C,
            eventHandlers: { onMouseEnter: I, onMouseLeave: T },
        } = (0, m.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: I,
        onMouseLeave: T,
        children: (0, i.jsx)(_.A, {
            className: a()(g.rs, { [g.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(m.l, { src: C }),
            iconContainerClassName: g.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(g.Qs, { [g.oE]: n }),
                children: [
                    (0, i.jsx)(u.ix, {
                        message: t,
                        messageClassname: g.he,
                        className: a()(g.QV, g.he, { [g.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: g.he,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: g.Xh,
                                    children: p.intl.string(p.t.hG1StD),
                                }),
                                (0, i.jsx)(o.A, { type: h.nu.SYSTEM_DM, className: g.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(g.__invalid_messageContent, { [g.oE]: n }),
                        children: p.intl.format(p.t.W0UBI3, {
                            username: x.nick,
                            usernameHook: E,
                            guildName: f?.name ?? "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
