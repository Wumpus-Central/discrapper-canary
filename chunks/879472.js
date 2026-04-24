t.d(l, { w: () => f });
var s = t(627968),
    i = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(17928),
    c = t(834730),
    o = t(3666),
    d = t(565645),
    m = t(775602),
    u = t(713517),
    x = t(690521),
    h = t(446445);
function v(e) {
    let { emoji: l, shouldAnimate: t } = e;
    if (null == l) return null;
    let i = x.Ay.isCustomEmoji(l) ? l.name : l.surrogates;
    return (0, s.jsx)(d.A, { className: h.Pw, emojiId: l.id, emojiName: i, animated: l.animated, shouldAnimate: t });
}
function j(e) {
    let { trait: l, ellipsize: t, traitColor: a } = e,
        o = i.useRef(null),
        d = (0, u.M)(o),
        x = (0, r.bG)([m.A], () => m.A.useReducedMotion);
    return null == l.label || l.label.length <= 0
        ? null
        : (0, s.jsxs)("div", {
              ref: o,
              className: n()(h.Bj, { [h.mc]: t }),
              children: [
                  (0, s.jsx)(v, { emoji: l.emoji, shouldAnimate: !x && d }),
                  (0, s.jsx)(c.E, {
                      tag: "span",
                      className: t ? h.mc : void 0,
                      variant: "text-sm/normal",
                      color: a,
                      children: l.label,
                  }),
              ],
          });
}
function f(e) {
    let { items: l, traitColor: t = "text-default" } = e,
        a = i.useCallback(
            (e, l) =>
                "string" == typeof e
                    ? (0, s.jsx)(
                          "div",
                          {
                              className: n()(h.Bj, { [h.mc]: l.ellipsize }),
                              children: (0, s.jsx)(c.E, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: t,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, s.jsx)(j, { trait: e, ellipsize: l.ellipsize, traitColor: t }, e.key),
            [t],
        ),
        r = i.useCallback((e) => a(e, { ellipsize: !0 }), [a]),
        d = i.useCallback((e) => a(e, { ellipsize: !1 }), [a]),
        m = i.useCallback((e) => (0, s.jsx)(o.g2, { items: e, renderItem: d }), [d]);
    return 0 === l.length
        ? null
        : (0, s.jsx)(o.ZV, { className: h.kL, items: l, renderItem: r, renderOverflow: m, maxLines: 2, itemGapPx: 4 });
}
