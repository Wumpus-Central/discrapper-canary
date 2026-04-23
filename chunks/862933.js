"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(417597),
    s = n(554146),
    a = n(191023),
    o = n(192308),
    l = n(349288),
    u = n(695366),
    c = n(834730),
    d = n(939249),
    _ = n(789645),
    f = n(565645),
    p = n(775602),
    h = n(826673),
    E = n(724511),
    m = n(151271),
    g = n(338464),
    A = n(71393),
    I = n(532624),
    T = n(531685),
    S = n(723702),
    y = n(350535),
    N = n(209932),
    v = n(652215),
    C = n(985018),
    O = n(319518);
function R(e) {
    let { soundboardSound: t, closePicker: R } = e,
        b = (0, m.RQ)((e) => e.searchQuery),
        D = (0, i.bG)([N.A], () => null != t && N.A.isFavoriteSound(t.soundId)),
        L = (0, i.bG)([A.A], () => A.A.getGuild(t?.guildId)),
        w = (0, i.bG)([p.A], () => p.A.useReducedMotion, []),
        M = (0, i.bG)([T.A], () => T.A.isFocused()),
        P = (0, i.bG)([I.Ay], () => I.Ay.getKeybindForAction(v.hCu.SOUNDBOARD_HOLD));
    if (null != t && b.length > 0)
        return (0, r.jsx)(g.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(f.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: O.Zg })
                    : (0, r.jsx)(a.x, { size: "md", color: "currentColor", className: O.Zg }),
            graphicSecondary: null != L ? (0, r.jsx)(E.A, { guild: L, shouldAnimate: !w && M }) : null,
            titlePrimary: t.name,
            titleSecondary: L?.name,
            isFavorite: D,
        });
    let x = () => {
            R(),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        },
        k = (0, h.k8)(s.M.SOUNDBOARD_KEYBIND_TIP),
        U =
            null != P && (0, S.isWindows)() && !k
                ? C.intl.format(C.t.udMTth, {
                      keybind: (0, y.dI)(P.shortcut, !0),
                      openSettingsHook: (e, t) => (0, r.jsx)(l.Anchor, { onClick: x, children: e }, t),
                  })
                : null;
    return null == U
        ? null
        : (0, r.jsxs)("div", {
              className: O.g,
              children: [
                  (0, r.jsx)(u.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: O.QW }),
                  (0, r.jsx)(c.E, { variant: "text-sm/medium", color: "text-default", className: O.L5, children: U }),
                  (0, r.jsx)(d.D, {
                      className: O.b,
                      onClick: () => (0, h.Dr)(s.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, r.jsx)(_.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
