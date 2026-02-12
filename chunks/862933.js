"use strict";
n.d(t, { A: () => S });
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
    h = n(532624),
    p = n(531685),
    g = n(723702),
    E = n(350535),
    A = n(209932),
    I = n(652215),
    T = n(985018),
    y = n(735141);
function S(e) {
    let { soundboardSound: t, closePicker: S } = e,
        v = (0, d.RQ)((e) => e.searchQuery),
        C = (0, i.bG)([A.A], () => null != t && A.A.isFavoriteSound(t.soundId)),
        b = (0, i.bG)([f.A], () => f.A.getGuild(t?.guildId)),
        N = (0, i.bG)([l.A], () => l.A.useReducedMotion, []),
        R = (0, i.bG)([p.A], () => p.A.isFocused()),
        O = (0, i.bG)([h.Ay], () => h.Ay.getKeybindForAction(I.hCu.SOUNDBOARD_HOLD));
    if (null != t && v.length > 0)
        return (0, r.jsx)(_.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(o.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: y.Zg })
                    : (0, r.jsx)(s.xfq, { size: "md", color: "currentColor", className: y.Zg }),
            graphicSecondary: null != b ? (0, r.jsx)(c.A, { guild: b, shouldAnimate: !N && R }) : null,
            titlePrimary: t.name,
            titleSecondary: b?.name,
            isFavorite: C,
        });
    let D = () => {
            S(),
                (0, s.mMO)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        },
        L = (0, u.k8)(a.M.SOUNDBOARD_KEYBIND_TIP),
        w = () => (0, u.Dr)(a.M.SOUNDBOARD_KEYBIND_TIP),
        x =
            null != O && (0, g.isWindows)() && !L
                ? T.intl.format(T.t.udMTth, {
                      keybind: (0, E.dI)(O.shortcut, !0),
                      openSettingsHook: (e, t) => (0, r.jsx)(s.MzZ, { onClick: D, children: e }, t),
                  })
                : null;
    return null == x
        ? null
        : (0, r.jsxs)("div", {
              className: y.g,
              children: [
                  (0, r.jsx)(s.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: y.QW }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      className: y.L5,
                      children: x,
                  }),
                  (0, r.jsx)(s.DUT, {
                      className: y.b,
                      onClick: w,
                      children: (0, r.jsx)(s.PGe, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
