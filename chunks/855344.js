"use strict";
n.d(t, { A: () => T });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(3026),
    r = n(397927),
    a = n(964486),
    o = n(58149),
    u = n(376304),
    c = n(509536),
    d = n(98318),
    m = n(657048),
    h = n(976860),
    g = n(734057),
    A = n(317525),
    f = n(309010),
    p = n(954571),
    x = n(652176),
    C = n(652215),
    N = n(746080),
    v = n(985018),
    E = n(183819);
let T = (e) => {
    let { roleIcon: t, guild: n } = e,
        { name: T } = t;
    (0, a.Ay)(() => {
        p.default.track(C.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, o.dI)(g.A.getChannel(f.A.getChannelId(n.id))),
        });
    });
    let b = (0, i.bG)([A.A], () => (null != t.roleId ? A.A.getRole(n.id, t.roleId) : void 0)),
        _ = (0, d.U)(b),
        j = _
            ? v.intl.formatToPlainString(v.t.t0928V, { name: T })
            : v.intl.formatToPlainString(v.t.UDDkGy, { name: T }),
        I = { ...t, src: null == t.src ? t.src : (0, u.ux)(t.src, 40), size: 40 },
        S = _
            ? () => {
                  (0, h.pX)(C.BVt.CHANNEL(n.id, N.VV.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, c.K4)({ guildId: n.id, location: { section: C.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, l.jsx)(r.lGe, {
        children: (0, l.jsx)(x.Uq, {
            children: (0, l.jsxs)("div", {
                className: E.jC,
                children: [
                    (0, l.jsxs)("div", {
                        className: E.rb,
                        children: [
                            (0, l.jsx)("div", {
                                className: E.Xq,
                                children: (0, l.jsx)(m.A, {
                                    ...I,
                                    enableTooltip: !1,
                                    className: E.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: E.bM,
                                children: [
                                    (0, l.jsx)(r.Heading, {
                                        variant: "heading-md/semibold",
                                        className: E.S3,
                                        children: (0, l.jsx)(s.A, { children: T }),
                                    }),
                                    (0, l.jsx)(r.Text, { variant: "text-sm/normal", children: j }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(r.Button, {
                        size: "sm",
                        variant: "secondary",
                        text: v.intl.string(v.t["H930+H"]),
                        onClick: S,
                        icon: r._Jp,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
