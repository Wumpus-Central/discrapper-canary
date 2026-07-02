"use strict";
n.d(t, { A: () => b, k: () => O });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(3026),
    a = n(342952),
    o = n(990078),
    l = n(834730),
    u = n(939249),
    c = n(320448),
    d = n(661531),
    _ = n(778712),
    h = n(730852),
    f = n(963027),
    p = n(47167),
    E = n(548118),
    m = n(378570),
    g = n(345942),
    A = n(576705),
    I = n(575731),
    T = n(21241),
    S = n(939496),
    y = n(10862),
    C = n(652215),
    N = n(996988),
    v = n(375708),
    R = n(514566);
let O = 3;
function b(e) {
    let { user: t, guild: n, channel: b, onAction: D, onClose: L } = e,
        { themeType: w } = (0, S.E)(),
        M = (0, I.A)(b),
        P = (0, p.Ay)(b),
        { canViewChannel: x, canConnect: k } = (0, r.cf)([A.A], () => ({
            canViewChannel: A.A.can(C.xBc.VIEW_CHANNEL, b),
            canConnect: b.isPrivate() || A.A.can(C.xBc.CONNECT, b),
        }));
    if (!x) return null;
    let U = w !== N.d.MODAL && w !== N.d.MODAL_V2 && w !== N.d.SIDEBAR;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.A, { className: R.Ph }),
            (0, i.jsxs)("div", {
                className: R.gx,
                children: [
                    (0, i.jsx)(o.m, {
                        asContainer: !0,
                        text: n.name,
                        "aria-label": !1,
                        children: (0, i.jsx)(E.Ay, {
                            guild: n,
                            size: E.Ay.Sizes.SMOL,
                            className: R.$f,
                            onClick: (e) => {
                                e.stopPropagation(), (0, g.u)(n.id), D?.({ action: "OPEN_VOICE_GUILD" }), L?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(c._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: R.FH,
                        children: [
                            (0, i.jsx)(y.A, {
                                channel: b,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: R.Ow,
                            }),
                            k
                                ? (0, i.jsx)(u.D, {
                                      onClick: (e) => {
                                          e.stopPropagation(),
                                              h.default.selectVoiceChannel(b.id),
                                              (0, m.iN)(b.id),
                                              D?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              L?.();
                                      },
                                      className: R.sd,
                                      "aria-label": (0, f.Ay)({ channel: b }),
                                      children: (0, i.jsx)(l.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, i.jsx)(s.A, { children: P }),
                                      }),
                                  })
                                : (0, i.jsx)(l.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(s.A, { children: P }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(a.A, {
                        users: M,
                        guildId: n.id,
                        channelId: b.id,
                        maxUsers: O,
                        size: _._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: R.NS,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), D?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!U || ((e) => e === t.id),
                        "aria-label": v.intl.string(v.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
