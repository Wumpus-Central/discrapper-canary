"use strict";
n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(554146),
    r = n(191023),
    a = n(192308),
    o = n(349288),
    c = n(695366),
    u = n(834730),
    d = n(939249),
    h = n(789645),
    m = n(565645),
    p = n(775602),
    f = n(826673),
    g = n(724511),
    _ = n(151271),
    x = n(338464),
    A = n(71393),
    C = n(532624),
    E = n(531685),
    I = n(723702),
    v = n(350535),
    y = n(209932),
    S = n(652215),
    b = n(985018),
    N = n(319518);
function T(e) {
    let { soundboardSound: t, closePicker: T } = e,
        j = (0, _.RQ)((e) => e.searchQuery),
        R = (0, l.bG)([y.A], () => null != t && y.A.isFavoriteSound(t.soundId)),
        w = (0, l.bG)([A.A], () => A.A.getGuild(t?.guildId)),
        L = (0, l.bG)([p.A], () => p.A.useReducedMotion, []),
        M = (0, l.bG)([E.A], () => E.A.isFocused()),
        k = (0, l.bG)([C.Ay], () => C.Ay.getKeybindForAction(S.hCu.SOUNDBOARD_HOLD));
    if (null != t && j.length > 0)
        return (0, i.jsx)(x.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(m.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: N.Zg })
                    : (0, i.jsx)(r.x, { size: "md", color: "currentColor", className: N.Zg }),
            graphicSecondary: null != w ? (0, i.jsx)(g.A, { guild: w, shouldAnimate: !L && M }) : null,
            titlePrimary: t.name,
            titleSecondary: w?.name,
            isFavorite: R,
        });
    let O = () => {
            T(),
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        P = (0, f.k8)(s.M.SOUNDBOARD_KEYBIND_TIP),
        D =
            null != k && (0, I.isWindows)() && !P
                ? b.intl.format(b.t.udMTth, {
                      keybind: (0, v.dI)(k.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(o.Anchor, { onClick: O, children: e }, t),
                  })
                : null;
    return null == D
        ? null
        : (0, i.jsxs)("div", {
              className: N.g,
              children: [
                  (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: N.QW }),
                  (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", className: N.L5, children: D }),
                  (0, i.jsx)(d.D, {
                      className: N.b,
                      onClick: () => (0, f.Dr)(s.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, i.jsx)(h.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
