n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(802433),
    s = n(680295),
    c = n(313305),
    u = n(241822);
let d = (e) => {
    let { profileEffectId: t, isHovering: n, forCollectedModal: a = !1, isPurchased: d, removeSetHeight: p = !1 } = e,
        g = a ? 250 : 0.1,
        [f, b] = l.useState(!0);
    return (l.useEffect(() => {
        if (!0 !== a) b(!1);
        else {
            let e = setTimeout(() => {
                b(!1);
            }, g);
            return () => {
                clearTimeout(e);
            };
        }
    }, [g, a]),
    null != t)
        ? (0, r.jsxs)("div", {
              className: i()(c.previewContainer, {
                  [c.previewContainerAnimation]: a,
                  [c.previewContainerSetHeight]: !p,
              }),
              children: [
                  (0, r.jsx)("img", {
                      src: u,
                      alt: " ",
                      className: a ? c.previewForCollected : c.preview,
                      "aria-hidden": !0,
                  }),
                  !f &&
                      (0, r.jsx)("div", {
                          className: d ? c.purchasedEffect : void 0,
                          children: (0, r.jsx)(s.Z, {
                              profileEffectId: t,
                              useThumbnail: !0,
                              autoPlay: a,
                              restartMethod: o.j.FromStart,
                              resetOnHover: !0,
                              isHovering: n,
                              introDelay: g,
                              useOpacityOnHover: !1,
                              shopPreview: !0,
                          }),
                      }),
              ],
          })
        : null;
};
