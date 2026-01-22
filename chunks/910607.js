n.d(t, {
    A: () => S,
    k: () => v,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(3026),
    s = n(342952),
    o = n(990078),
    l = n(397927),
    c = n(956793),
    u = n(47167),
    d = n(263063),
    f = n(378570),
    p = n(345942),
    _ = n(576705),
    h = n(575731),
    m = n(21241),
    g = n(939496),
    E = n(10862),
    b = n(652215),
    y = n(996988),
    O = n(985018),
    A = n(380297);
let v = 3;
function S(e) {
    let { user: t, guild: n, channel: S, onAction: I, onClose: T } = e,
        { themeType: C } = (0, g.E)(),
        N = (0, h.A)(S),
        R = (0, u.Ay)(S),
        { canViewChannel: w, canConnect: P } = (0, i.cf)([_.A], () => ({
            canViewChannel: _.A.can(b.xBc.VIEW_CHANNEL, S),
            canConnect: S.isPrivate() || _.A.can(b.xBc.CONNECT, S),
        }));
    if (!w) return null;
    let D = () => {
            let e = (e) => {
                e.stopPropagation(), (0, p.u)(n.id), null == I || I({ action: "OPEN_VOICE_GUILD" }), null == T || T();
            };
            return (0, r.jsx)(o.m, {
                asContainer: !0,
                text: n.name,
                "aria-label": !1,
                children: (0, r.jsx)(d.A, {
                    guild: n,
                    size: d.A.Sizes.SMOL,
                    className: A.$f,
                    onClick: e,
                }),
            });
        },
        x = () => {
            if (!P)
                return (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.A, { children: R }),
                });
            let e = (e) => {
                e.stopPropagation(),
                    c.default.selectVoiceChannel(S.id),
                    (0, f.iN)(S.id),
                    null == I || I({ action: "OPEN_VOICE_CHANNEL" }),
                    null == T || T();
            };
            return (0, r.jsx)(l.DUT, {
                onClick: e,
                className: A.sd,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: (0, r.jsx)(a.A, { children: R }),
                }),
            });
        },
        L = C !== y.d.MODAL && C !== y.d.MODAL_V2 && C !== y.d.SIDEBAR;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.A, { className: A.Ph }),
            (0, r.jsxs)("div", {
                className: A.gx,
                children: [
                    D(),
                    (0, r.jsx)(l._BQ, {
                        size: "xxs",
                        color: l.LU0.colors.TEXT_SUBTLE,
                    }),
                    (0, r.jsxs)("div", {
                        className: A.FH,
                        children: [
                            (0, r.jsx)(E.A, {
                                channel: S,
                                size: "xxs",
                                color: l.LU0.colors.TEXT_SUBTLE,
                                className: A.Ow,
                            }),
                            x(),
                        ],
                    }),
                    (0, r.jsx)(s.A, {
                        users: N,
                        guildId: n.id,
                        channelId: S.id,
                        maxUsers: v,
                        size: l._3J.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: A.NS,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), null == I || I({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!L || ((e) => e === t.id),
                        "aria-label": O.intl.string(O.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
