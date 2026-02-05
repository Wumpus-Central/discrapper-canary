"use strict";
n.d(t, { A: () => v, k: () => S });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(3026),
    s = n(342952),
    o = n(990078),
    l = n(397927),
    u = n(956793),
    c = n(47167),
    d = n(263063),
    _ = n(378570),
    f = n(345942),
    p = n(576705),
    h = n(575731),
    m = n(21241),
    g = n(939496),
    E = n(10862),
    A = n(652215),
    I = n(996988),
    T = n(985018),
    y = n(380297);
let S = 3;
function v(e) {
    let { user: t, guild: n, channel: v, onAction: C, onClose: b } = e,
        { themeType: N } = (0, g.E)(),
        R = (0, h.A)(v),
        O = (0, c.Ay)(v),
        { canViewChannel: D, canConnect: L } = (0, i.cf)([p.A], () => ({
            canViewChannel: p.A.can(A.xBc.VIEW_CHANNEL, v),
            canConnect: v.isPrivate() || p.A.can(A.xBc.CONNECT, v),
        }));
    if (!D) return null;
    let w = () => {
            let e = (e) => {
                e.stopPropagation(), (0, f.u)(n.id), C?.({ action: "OPEN_VOICE_GUILD" }), b?.();
            };
            return (0, r.jsx)(o.m, {
                asContainer: !0,
                text: n.name,
                "aria-label": !1,
                children: (0, r.jsx)(d.A, { guild: n, size: d.A.Sizes.SMOL, className: y.$f, onClick: e }),
            });
        },
        x = () => {
            if (!L)
                return (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.A, { children: O }),
                });
            let e = (e) => {
                e.stopPropagation(),
                    u.default.selectVoiceChannel(v.id),
                    (0, _.iN)(v.id),
                    C?.({ action: "OPEN_VOICE_CHANNEL" }),
                    b?.();
            };
            return (0, r.jsx)(l.DUT, {
                onClick: e,
                className: y.sd,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.A, { children: O }),
                }),
            });
        },
        P = N !== I.d.MODAL && N !== I.d.MODAL_V2 && N !== I.d.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.A, { className: y.Ph }),
            (0, r.jsxs)("div", {
                className: y.gx,
                children: [
                    w(),
                    (0, r.jsx)(l._BQ, { size: "xxs", color: l.LU0.colors.TEXT_SUBTLE }),
                    (0, r.jsxs)("div", {
                        className: y.FH,
                        children: [
                            (0, r.jsx)(E.A, {
                                channel: v,
                                size: "xxs",
                                color: l.LU0.colors.TEXT_SUBTLE,
                                className: y.Ow,
                            }),
                            x(),
                        ],
                    }),
                    (0, r.jsx)(s.A, {
                        users: R,
                        guildId: n.id,
                        channelId: v.id,
                        maxUsers: S,
                        size: l._3J.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: y.NS,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), C?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!P || ((e) => e === t.id),
                        "aria-label": T.intl.string(T.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
