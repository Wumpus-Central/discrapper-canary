"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(311907),
    a = n(397927),
    c = n(709066),
    o = n(71393),
    u = n(763754),
    d = n(643204),
    _ = n(809115),
    E = n(888675),
    A = n(705751),
    m = n(985018),
    I = n(240775);
function T(e) {
    let { message: t, compact: n, usernameHook: r, channel: T } = e,
        g = (0, l.bG)([o.A], () => o.A.getGuild(T.guild_id)),
        N = (0, u.Ay)(t),
        f = r(N),
        {
            avatarSrc: p,
            eventHandlers: { onMouseEnter: C, onMouseLeave: h },
        } = (0, _.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: C,
        onMouseLeave: h,
        children: (0, i.jsx)(E.A, {
            className: s()(I.rs, { [I.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(_.l, { src: p }),
            iconContainerClassName: I.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(I.Qs, { [I.oE]: n }),
                children: [
                    (0, i.jsx)(d.ix, {
                        message: t,
                        messageClassname: I.he,
                        className: s()(I.QV, I.he, { [I.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: I.he,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: I.Xh,
                                    children: m.intl.string(m.t.hG1StD),
                                }),
                                (0, i.jsx)(c.A, { type: A.nu.SYSTEM_DM, className: I.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: s()(I.__invalid_messageContent, { [I.oE]: n }),
                        children: m.intl.format(m.t.W0UBI3, {
                            username: N.nick,
                            usernameHook: f,
                            guildName: g?.name ?? "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
