n.d(t, {
    w: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(565645),
    u = n(775602),
    d = n(713517),
    f = n(690521),
    p = n(328370);

function _(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = f.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(c.A, {
        className: p.Pw,
        emojiId: t.id,
        emojiName: i,
        animated: t.animated,
        shouldAnimate: n,
    });
}

function h(e) {
    let { trait: t, ellipsize: n } = e,
        a = i.useRef(null),
        c = (0, d.M)(a),
        f = !(0, o.bG)([u.A], () => u.A.useReducedMotion) && c;
    return null == t.label || t.label.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              ref: a,
              className: s()(p.Bj, {
                  [p.mc]: n,
              }),
              children: [
                  (0, r.jsx)(_, {
                      emoji: t.emoji,
                      shouldAnimate: f,
                  }),
                  (0, r.jsx)(l.Text, {
                      tag: "span",
                      className: n ? p.mc : void 0,
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: t.label,
                  }),
              ],
          });
}

function m(e) {
    let { items: t } = e,
        n = i.useCallback(
            (e, t) =>
                "string" == typeof e
                    ? (0, r.jsx)(
                          "div",
                          {
                              className: s()(p.Bj, {
                                  [p.mc]: t.ellipsize,
                              }),
                              children: (0, r.jsx)(l.Text, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, r.jsx)(
                          h,
                          {
                              trait: e,
                              ellipsize: t.ellipsize,
                          },
                          e.key,
                      ),
            [],
        ),
        a = i.useCallback(
            (e) =>
                n(e, {
                    ellipsize: !0,
                }),
            [n],
        ),
        o = i.useCallback(
            (e) =>
                n(e, {
                    ellipsize: !1,
                }),
            [n],
        ),
        c = i.useCallback(
            (e) =>
                (0, r.jsx)(l.g2v, {
                    items: e,
                    renderItem: o,
                }),
            [o],
        );
    return 0 === t.length
        ? null
        : (0, r.jsx)(l.ZVu, {
              className: p.kL,
              items: t,
              renderItem: a,
              renderOverflow: c,
              maxLines: 2,
              itemGapPx: 4,
          });
}
