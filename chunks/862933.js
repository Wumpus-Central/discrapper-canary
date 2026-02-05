"use strict";
n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(417597),
    a = n(554146),
    s = n(397927),
    o = n(565645),
    l = n(775602),
    u = n(826673),
    c = n(724511),
    d = n(151271),
    _ = n(338464),
    f = n(71393),
    p = n(532624),
    h = n(531685),
    m = n(723702),
    g = n(350535),
    E = n(209932),
    A = n(652215),
    I = n(985018),
    T = n(735141);
function y(e) {
    let { soundboardSound: t, closePicker: y } = e,
        S = (0, d.RQ)((e) => e.searchQuery),
        v = (0, i.bG)([E.A], () => null != t && E.A.isFavoriteSound(t.soundId)),
        C = (0, i.bG)([f.A], () => f.A.getGuild(t?.guildId)),
        b = (0, i.bG)([l.A], () => l.A.useReducedMotion, []),
        N = (0, i.bG)([h.A], () => h.A.isFocused()),
        R = (0, i.bG)([p.Ay], () => p.Ay.getKeybindForAction(A.hCu.SOUNDBOARD_HOLD));
    if (null != t && S.length > 0)
        return (0, r.jsx)(_.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(o.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: T.Zg })
                    : (0, r.jsx)(s.xfq, { size: "md", color: "currentColor", className: T.Zg }),
            graphicSecondary: null != C ? (0, r.jsx)(c.A, { guild: C, shouldAnimate: !b && N }) : null,
            titlePrimary: t.name,
            titleSecondary: C?.name,
            isFavorite: v,
        });
    let O = () => {
            y(),
                (0, s.mMO)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        },
        D = (0, u.k8)(a.M.SOUNDBOARD_KEYBIND_TIP),
        L = () => (0, u.Dr)(a.M.SOUNDBOARD_KEYBIND_TIP),
        w =
            null != R && (0, m.isWindows)() && !D
                ? I.intl.format(I.t.udMTth, {
                      keybind: (0, g.dI)(R.shortcut, !0),
                      openSettingsHook: (e, t) => (0, r.jsx)(s.MzZ, { onClick: O, children: e }, t),
                  })
                : null;
    return null == w
        ? null
        : (0, r.jsxs)("div", {
              className: T.g,
              children: [
                  (0, r.jsx)(s.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: T.QW }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      className: T.L5,
                      children: w,
                  }),
                  (0, r.jsx)(s.DUT, {
                      className: T.b,
                      onClick: L,
                      children: (0, r.jsx)(s.PGe, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
