"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(311907),
    a = n(834730),
    o = n(709066),
    c = n(71393),
    u = n(763754),
    d = n(643204),
    _ = n(809115),
    E = n(888675),
    A = n(705751),
    m = n(985018),
    I = n(393239);
function T(e) {
    let { message: t, compact: n, usernameHook: r, channel: T } = e,
        N = (0, s.bG)([c.A], () => c.A.getGuild(T.guild_id)),
        g = (0, u.Ay)(t),
        p = r(g),
        {
            avatarSrc: C,
            eventHandlers: { onMouseEnter: f, onMouseLeave: R },
        } = (0, _.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: f,
        onMouseLeave: R,
        children: (0, i.jsx)(E.A, {
            className: l()(I.rs, { [I.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(_.l, { src: C }),
            iconContainerClassName: I.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: l()(I.Qs, { [I.oE]: n }),
                children: [
                    (0, i.jsx)(d.ix, {
                        message: t,
                        messageClassname: I.he,
                        className: l()(I.QV, I.he, { [I.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: I.he,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: I.Xh,
                                    children: m.intl.string(m.t.hG1StD),
                                }),
                                (0, i.jsx)(o.A, { type: A.nu.SYSTEM_DM, className: I.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: l()(I.__invalid_messageContent, { [I.oE]: n }),
                        children: m.intl.format(m.t.W0UBI3, {
                            username: g.nick,
                            usernameHook: p,
                            guildName: N?.name ?? "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
