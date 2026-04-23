l.d(t, { w: () => v });
var i = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(311907),
    c = l(834730),
    o = l(3666),
    u = l(565645),
    d = l(775602),
    m = l(713517),
    h = l(690521),
    A = l(446445);
function x(e) {
    let { emoji: t, shouldAnimate: l } = e;
    if (null == t) return null;
    let n = h.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, i.jsx)(u.A, { className: A.Pw, emojiId: t.id, emojiName: n, animated: t.animated, shouldAnimate: l });
}
function f(e) {
    let { trait: t, ellipsize: l, traitColor: s } = e,
        o = n.useRef(null),
        u = (0, m.M)(o),
        h = (0, r.bG)([d.A], () => d.A.useReducedMotion);
    return null == t.label || t.label.length <= 0
        ? null
        : (0, i.jsxs)("div", {
              ref: o,
              className: a()(A.Bj, { [A.mc]: l }),
              children: [
                  (0, i.jsx)(x, { emoji: t.emoji, shouldAnimate: !h && u }),
                  (0, i.jsx)(c.E, {
                      tag: "span",
                      className: l ? A.mc : void 0,
                      variant: "text-sm/normal",
                      color: s,
                      children: t.label,
                  }),
              ],
          });
}
function v(e) {
    let { items: t, traitColor: l = "text-default" } = e,
        s = n.useCallback(
            (e, t) =>
                "string" == typeof e
                    ? (0, i.jsx)(
                          "div",
                          {
                              className: a()(A.Bj, { [A.mc]: t.ellipsize }),
                              children: (0, i.jsx)(c.E, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: l,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, i.jsx)(f, { trait: e, ellipsize: t.ellipsize, traitColor: l }, e.key),
            [l],
        ),
        r = n.useCallback((e) => s(e, { ellipsize: !0 }), [s]),
        u = n.useCallback((e) => s(e, { ellipsize: !1 }), [s]),
        d = n.useCallback((e) => (0, i.jsx)(o.g2, { items: e, renderItem: u }), [u]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(o.ZV, { className: A.kL, items: t, renderItem: r, renderOverflow: d, maxLines: 2, itemGapPx: 4 });
}
