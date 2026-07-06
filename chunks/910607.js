"use strict";
n.d(t, { A: () => b, k: () => v });
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
    E = n(47167),
    p = n(548118),
    m = n(378570),
    g = n(345942),
    A = n(576705),
    I = n(575731),
    T = n(21241),
    S = n(939496),
    N = n(10862),
    C = n(652215),
    y = n(996988),
    O = n(375708),
    R = n(514566);
let v = 3;
function b(e) {
    let { user: t, guild: n, channel: b, onAction: L, onClose: D } = e,
        { themeType: w } = (0, S.E)(),
        P = (0, I.A)(b),
        M = (0, E.Ay)(b),
        { canViewChannel: x, canConnect: U } = (0, r.cf)([A.A], () => ({
            canViewChannel: A.A.can(C.xBc.VIEW_CHANNEL, b),
            canConnect: b.isPrivate() || A.A.can(C.xBc.CONNECT, b),
        }));
    if (!x) return null;
    let k = w !== y.d.MODAL && w !== y.d.MODAL_V2 && w !== y.d.SIDEBAR;
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
                        children: (0, i.jsx)(p.Ay, {
                            guild: n,
                            size: p.Ay.Sizes.SMOL,
                            className: R.$f,
                            onClick: (e) => {
                                e.stopPropagation(), (0, g.u)(n.id), L?.({ action: "OPEN_VOICE_GUILD" }), D?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(c._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: R.FH,
                        children: [
                            (0, i.jsx)(N.A, {
                                channel: b,
                                size: "xxs",
                                color: d.A.colors.TEXT_SUBTLE,
                                className: R.Ow,
                            }),
                            U
                                ? (0, i.jsx)(u.D, {
                                      onClick: (e) => {
                                          e.stopPropagation(),
                                              h.default.selectVoiceChannel(b.id),
                                              (0, m.iN)(b.id),
                                              L?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              D?.();
                                      },
                                      className: R.sd,
                                      "aria-label": (0, f.Ay)({ channel: b }),
                                      children: (0, i.jsx)(l.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, i.jsx)(s.A, { children: M }),
                                      }),
                                  })
                                : (0, i.jsx)(l.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(s.A, { children: M }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(a.A, {
                        users: P,
                        guildId: n.id,
                        channelId: b.id,
                        maxUsers: v,
                        size: _._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: R.NS,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), L?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!k || ((e) => e === t.id),
                        "aria-label": O.intl.string(O.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
