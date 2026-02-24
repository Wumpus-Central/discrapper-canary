"use strict";
n.d(t, { A: () => S });
var r = n(627968);
n(64700);
var i = n(417597),
    s = n(554146),
    a = n(397927),
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
    E = n(350535),
    g = n(209932),
    A = n(652215),
    I = n(985018),
    T = n(82347);
function S(e) {
    let { soundboardSound: t, closePicker: S } = e,
        y = (0, d.RQ)((e) => e.searchQuery),
        v = (0, i.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        N = (0, i.bG)([f.A], () => f.A.getGuild(t?.guildId)),
        C = (0, i.bG)([l.A], () => l.A.useReducedMotion, []),
        b = (0, i.bG)([h.A], () => h.A.isFocused()),
        R = (0, i.bG)([p.Ay], () => p.Ay.getKeybindForAction(A.hCu.SOUNDBOARD_HOLD));
    if (null != t && y.length > 0)
        return (0, r.jsx)(_.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(o.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: T.Zg })
                    : (0, r.jsx)(a.xfq, { size: "md", color: "currentColor", className: T.Zg }),
            graphicSecondary: null != N ? (0, r.jsx)(c.A, { guild: N, shouldAnimate: !C && b }) : null,
            titlePrimary: t.name,
            titleSecondary: N?.name,
            isFavorite: v,
        });
    let O = () => {
            S(),
                (0, a.mMO)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        },
        D = (0, u.k8)(s.M.SOUNDBOARD_KEYBIND_TIP),
        L = () => (0, u.Dr)(s.M.SOUNDBOARD_KEYBIND_TIP),
        w =
            null != R && (0, m.isWindows)() && !D
                ? I.intl.format(I.t.udMTth, {
                      keybind: (0, E.dI)(R.shortcut, !0),
                      openSettingsHook: (e, t) => (0, r.jsx)(a.MzZ, { onClick: O, children: e }, t),
                  })
                : null;
    return null == w
        ? null
        : (0, r.jsxs)("div", {
              className: T.g,
              children: [
                  (0, r.jsx)(a.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: T.QW }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      className: T.L5,
                      children: w,
                  }),
                  (0, r.jsx)(a.DUT, {
                      className: T.b,
                      onClick: L,
                      children: (0, r.jsx)(a.PGe, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
