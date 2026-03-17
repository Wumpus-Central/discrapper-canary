"use strict";
n.d(t, { w: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(565645),
    c = n(775602),
    d = n(713517),
    _ = n(690521),
    f = n(328370);
function p(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = _.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(u.A, { className: f.Pw, emojiId: t.id, emojiName: i, animated: t.animated, shouldAnimate: n });
}
function h(e) {
    let { trait: t, ellipsize: n, traitColor: s } = e,
        u = i.useRef(null),
        _ = (0, d.M)(u),
        h = !(0, o.bG)([c.A], () => c.A.useReducedMotion) && _;
    return null == t.label || t.label.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              ref: u,
              className: a()(f.Bj, { [f.mc]: n }),
              children: [
                  (0, r.jsx)(p, { emoji: t.emoji, shouldAnimate: h }),
                  (0, r.jsx)(l.Text, {
                      tag: "span",
                      className: n ? f.mc : void 0,
                      variant: "text-sm/normal",
                      color: s,
                      children: t.label,
                  }),
              ],
          });
}
function m(e) {
    let { items: t, traitColor: n = "text-default" } = e,
        s = i.useCallback(
            (e, t) =>
                "string" == typeof e
                    ? (0, r.jsx)(
                          "div",
                          {
                              className: a()(f.Bj, { [f.mc]: t.ellipsize }),
                              children: (0, r.jsx)(l.Text, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: n,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, r.jsx)(h, { trait: e, ellipsize: t.ellipsize, traitColor: n }, e.key),
            [n],
        ),
        o = i.useCallback((e) => s(e, { ellipsize: !0 }), [s]),
        u = i.useCallback((e) => s(e, { ellipsize: !1 }), [s]),
        c = i.useCallback((e) => (0, r.jsx)(l.g2v, { items: e, renderItem: u }), [u]);
    return 0 === t.length
        ? null
        : (0, r.jsx)(l.ZVu, { className: f.kL, items: t, renderItem: o, renderOverflow: c, maxLines: 2, itemGapPx: 4 });
}
