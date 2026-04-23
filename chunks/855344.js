"use strict";
n.d(t, { A: () => S });
var l = n(627968);
n(64700);
var a = n(311907),
    s = n(3026),
    i = n(305866),
    r = n(534514),
    o = n(834730),
    c = n(821609),
    u = n(104510),
    d = n(964486),
    m = n(58149),
    g = n(376304),
    h = n(509536),
    p = n(98318),
    A = n(657048),
    _ = n(976860),
    f = n(734057),
    v = n(317525),
    x = n(309010),
    C = n(954571),
    I = n(652176),
    N = n(652215),
    E = n(746080),
    b = n(985018),
    T = n(433211);
let S = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: S } = t;
    (0, d.Ay)(() => {
        C.default.track(N.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, m.dI)(f.A.getChannel(x.A.getChannelId(n.id))),
        });
    });
    let y = (0, a.bG)([v.A], () => (null != t.roleId ? v.A.getRole(n.id, t.roleId) : void 0)),
        j = (0, p.U)(y),
        R = j
            ? b.intl.formatToPlainString(b.t.t0928V, { name: S })
            : b.intl.formatToPlainString(b.t.UDDkGy, { name: S }),
        M = { ...t, src: null == t.src ? t.src : (0, g.ux)(t.src, 40), size: 40 },
        w = j
            ? () => {
                  (0, _.pX)(N.BVt.CHANNEL(n.id, E.VV.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, h.K4)({ guildId: n.id, location: { section: N.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, l.jsx)(i.l, {
        children: (0, l.jsx)(I.Uq, {
            children: (0, l.jsxs)("div", {
                className: T.jC,
                children: [
                    (0, l.jsxs)("div", {
                        className: T.rb,
                        children: [
                            (0, l.jsx)("div", {
                                className: T.Xq,
                                children: (0, l.jsx)(A.A, {
                                    ...M,
                                    enableTooltip: !1,
                                    className: T.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: T.bM,
                                children: [
                                    (0, l.jsx)(r.D, {
                                        variant: "heading-md/semibold",
                                        className: T.S3,
                                        children: (0, l.jsx)(s.A, { children: S }),
                                    }),
                                    (0, l.jsx)(o.E, { variant: "text-sm/normal", children: R }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(c.$, {
                        size: "sm",
                        variant: "secondary",
                        text: b.intl.string(b.t["H930+H"]),
                        onClick: w,
                        icon: u._,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
