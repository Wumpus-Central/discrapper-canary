"use strict";
n.d(t, { A: () => C });
var l = n(627968);
n(64700);
var s = n(311907),
    i = n(3026),
    r = n(397927),
    a = n(964486),
    o = n(58149),
    u = n(376304),
    c = n(509536),
    d = n(98318),
    m = n(657048),
    h = n(976860),
    g = n(734057),
    p = n(317525),
    A = n(309010),
    f = n(954571),
    x = n(652176),
    v = n(652215),
    N = n(746080),
    b = n(985018),
    j = n(530358);
let C = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: C } = t;
    (0, a.Ay)(() => {
        f.default.track(v.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(g.A.getChannel(A.A.getChannelId(n.id))),
        });
    });
    let E = (0, s.bG)([p.A], () => (null != t.roleId ? p.A.getRole(n.id, t.roleId) : void 0)),
        R = (0, d.U)(E),
        I = R
            ? b.intl.formatToPlainString(b.t.t0928V, { name: C })
            : b.intl.formatToPlainString(b.t.UDDkGy, { name: C }),
        T = { ...t, src: null == t.src ? t.src : (0, u.ux)(t.src, 40), size: 40 },
        y = R
            ? () => {
                  (0, h.pX)(v.BVt.CHANNEL(n.id, N.VV.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, c.K)({ guildId: n.id, location: { section: v.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, l.jsx)(r.lGe, {
        children: (0, l.jsx)(x.Uq, {
            children: (0, l.jsxs)("div", {
                className: j.jC,
                children: [
                    (0, l.jsxs)("div", {
                        className: j.rb,
                        children: [
                            (0, l.jsx)("div", {
                                className: j.Xq,
                                children: (0, l.jsx)(m.A, {
                                    ...T,
                                    enableTooltip: !1,
                                    className: j.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: j.bM,
                                children: [
                                    (0, l.jsx)(r.Heading, {
                                        variant: "heading-md/semibold",
                                        className: j.S3,
                                        children: (0, l.jsx)(i.A, { children: C }),
                                    }),
                                    (0, l.jsx)(r.Text, { variant: "text-sm/normal", children: I }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(r.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: b.intl.string(b.t["H930+H"]),
                        onClick: y,
                        icon: r._Jp,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
