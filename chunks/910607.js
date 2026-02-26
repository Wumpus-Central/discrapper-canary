"use strict";
n.d(t, { A: () => N, k: () => v });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(3026),
    a = n(342952),
    o = n(990078),
    l = n(397927),
    u = n(956793),
    c = n(963027),
    d = n(47167),
    _ = n(263063),
    f = n(378570),
    p = n(345942),
    h = n(576705),
    m = n(575731),
    E = n(21241),
    g = n(939496),
    A = n(10862),
    I = n(652215),
    T = n(996988),
    S = n(985018),
    y = n(482831);
let v = 3;
function N(e) {
    let { user: t, guild: n, channel: N, onAction: C, onClose: b } = e,
        { themeType: R } = (0, g.E)(),
        O = (0, m.A)(N),
        D = (0, d.Ay)(N),
        { canViewChannel: L, canConnect: w } = (0, i.cf)([h.A], () => ({
            canViewChannel: h.A.can(I.xBc.VIEW_CHANNEL, N),
            canConnect: N.isPrivate() || h.A.can(I.xBc.CONNECT, N),
        }));
    if (!L) return null;
    let x = () => {
            let e = (e) => {
                e.stopPropagation(), (0, p.u)(n.id), C?.({ action: "OPEN_VOICE_GUILD" }), b?.();
            };
            return (0, r.jsx)(o.m, {
                asContainer: !0,
                text: n.name,
                "aria-label": !1,
                children: (0, r.jsx)(_.Ay, { guild: n, size: _.Ay.Sizes.SMOL, className: y.$f, onClick: e }),
            });
        },
        M = () => {
            if (!w)
                return (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(s.A, { children: D }),
                });
            let e = (e) => {
                e.stopPropagation(),
                    u.default.selectVoiceChannel(N.id),
                    (0, f.iN)(N.id),
                    C?.({ action: "OPEN_VOICE_CHANNEL" }),
                    b?.();
            };
            return (0, r.jsx)(l.DUT, {
                onClick: e,
                className: y.sd,
                "aria-label": (0, c.Ay)({ channel: N }),
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(s.A, { children: D }),
                }),
            });
        },
        P = R !== T.d.MODAL && R !== T.d.MODAL_V2 && R !== T.d.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(E.A, { className: y.Ph }),
            (0, r.jsxs)("div", {
                className: y.gx,
                children: [
                    x(),
                    (0, r.jsx)(l._BQ, { size: "xxs", color: l.LU0.colors.TEXT_SUBTLE }),
                    (0, r.jsxs)("div", {
                        className: y.FH,
                        children: [
                            (0, r.jsx)(A.A, {
                                channel: N,
                                size: "xxs",
                                color: l.LU0.colors.TEXT_SUBTLE,
                                className: y.Ow,
                            }),
                            M(),
                        ],
                    }),
                    (0, r.jsx)(a.A, {
                        users: O,
                        guildId: n.id,
                        channelId: N.id,
                        maxUsers: v,
                        size: l._3J.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: y.NS,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), C?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!P || ((e) => e === t.id),
                        "aria-label": S.intl.string(S.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
