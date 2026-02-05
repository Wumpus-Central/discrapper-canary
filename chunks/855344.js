"use strict";
n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(3026),
    s = n(397927),
    o = n(964486),
    l = n(58149),
    u = n(376304),
    c = n(509536),
    d = n(98318),
    _ = n(657048),
    f = n(976860),
    p = n(734057),
    h = n(317525),
    m = n(309010),
    g = n(954571),
    E = n(652176),
    A = n(652215),
    I = n(746080),
    T = n(985018),
    y = n(530358);
let S = 40,
    v = (e) => {
        let { roleIcon: t, guild: n } = e,
            { name: v } = t;
        (0, o.Ay)(() => {
            g.default.track(A.HAw.OPEN_POPOUT, {
                type: "Role Icon Popout",
                guild_id: n.id,
                ...(0, l.dI)(p.A.getChannel(m.A.getChannelId(n.id))),
            });
        });
        let C = (0, i.bG)([h.A], () => (null != t.roleId ? h.A.getRole(n.id, t.roleId) : void 0)),
            b = (0, d.U)(C),
            N = b
                ? T.intl.formatToPlainString(T.t.t0928V, { name: v })
                : T.intl.formatToPlainString(T.t.UDDkGy, { name: v }),
            R = { ...t, src: null == t.src ? t.src : (0, u.ux)(t.src, S), size: S },
            O = () => {
                (0, c.K)({ guildId: n.id, location: { section: A.JJy.ROLE_ICON_POPOUT } });
            },
            D = () => {
                (0, f.pX)(A.BVt.CHANNEL(n.id, I.VV.ROLE_SUBSCRIPTIONS));
            },
            L = b ? D : O;
        return (0, r.jsx)(s.lGe, {
            children: (0, r.jsx)(E.Uq, {
                children: (0, r.jsxs)("div", {
                    className: y.jC,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.rb,
                            children: [
                                (0, r.jsx)("div", {
                                    className: y.Xq,
                                    children: (0, r.jsx)(_.A, {
                                        ...R,
                                        enableTooltip: !1,
                                        className: y.__invalid_roleIcon,
                                        enableHeight: !1,
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: y.bM,
                                    children: [
                                        (0, r.jsx)(s.Heading, {
                                            variant: "heading-md/semibold",
                                            className: y.S3,
                                            children: (0, r.jsx)(a.A, { children: v }),
                                        }),
                                        (0, r.jsx)(s.Text, { variant: "text-sm/normal", children: N }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Button, {
                            size: "sm",
                            variant: "secondary",
                            text: T.intl.string(T.t["H930+H"]),
                            onClick: L,
                            icon: s._Jp,
                            fullWidth: !0,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
        });
    };
