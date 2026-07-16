"use strict";
n.d(t, { A: () => D, k: () => y });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(3026),
    s = n(342952),
    l = n(866665),
    o = n(834730),
    d = n(939249),
    c = n(320448),
    u = n(661531),
    _ = n(778712),
    E = n(730852),
    A = n(963027),
    h = n(47167),
    I = n(548118),
    f = n(378570),
    p = n(345942),
    T = n(576705),
    m = n(575731),
    g = n(21241),
    S = n(939496),
    N = n(10862),
    C = n(652215),
    R = n(996988),
    O = n(375708),
    L = n(514566);
let y = 3;
function D(e) {
    let { user: t, guild: n, channel: D, onAction: v, onClose: b } = e,
        { themeType: M } = (0, S.E)(),
        P = (0, m.A)(D),
        U = (0, h.Ay)(D),
        { canViewChannel: w, canConnect: G } = (0, r.cf)([T.A], () => ({
            canViewChannel: T.A.can(C.xBc.VIEW_CHANNEL, D),
            canConnect: D.isPrivate() || T.A.can(C.xBc.CONNECT, D),
        }));
    if (!w) return null;
    let x = M !== R.d.MODAL && M !== R.d.MODAL_V2 && M !== R.d.SIDEBAR;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.A, { className: L.Ph }),
            (0, i.jsxs)("div", {
                className: L.gx,
                children: [
                    (0, i.jsx)(l.m, {
                        asContainer: !0,
                        text: n.name,
                        "aria-label": !1,
                        children: (0, i.jsx)(I.Ay, {
                            guild: n,
                            size: I.Ay.Sizes.SMOL,
                            className: L.$f,
                            onClick: (e) => {
                                e.stopPropagation(), (0, p.u)(n.id), v?.({ action: "OPEN_VOICE_GUILD" }), b?.();
                            },
                        }),
                    }),
                    (0, i.jsx)(c._, { size: "xxs", color: u.A.colors.TEXT_SUBTLE }),
                    (0, i.jsxs)("div", {
                        className: L.FH,
                        children: [
                            (0, i.jsx)(N.A, {
                                channel: D,
                                size: "xxs",
                                color: u.A.colors.TEXT_SUBTLE,
                                className: L.Ow,
                            }),
                            G
                                ? (0, i.jsx)(d.D, {
                                      onClick: (e) => {
                                          e.stopPropagation(),
                                              E.default.selectVoiceChannel(D.id),
                                              (0, f.iN)(D.id),
                                              v?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              b?.();
                                      },
                                      className: L.sd,
                                      "aria-label": (0, A.Ay)({ channel: D }),
                                      children: (0, i.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          lineClamp: 1,
                                          children: (0, i.jsx)(a.A, { children: U }),
                                      }),
                                  })
                                : (0, i.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(a.A, { children: U }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)(s.A, {
                        users: P,
                        guildId: n.id,
                        channelId: D.id,
                        maxUsers: y,
                        size: _._3.SIZE_16,
                        overflowCountColor: "text-subtle",
                        overflowCountClassName: L.NS,
                        onClickOverflow: (e) => {
                            e.stopPropagation(), v?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: !!x || ((e) => e === t.id),
                        "aria-label": O.intl.string(O.t["jNqDh/"]),
                    }),
                ],
            }),
        ],
    });
}
