n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(119837),
    l = n(802433),
    c = n(680295),
    u = n(803580),
    d = n(241822);
let f = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            isPurchased: a,
            removeSetHeight: f = !1,
            withScaleAnimation: p = !1,
            delayProfileEffectIntro: _ = !1,
        } = e,
        [m, h] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== p) h(!1);
        else {
            let e = setTimeout(() => {
                h(!1);
            }, s.JH);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(u.previewContainer, {
                  [u.previewContainerAnimation]: p,
                  [u.previewContainerSetHeight]: !f,
              }),
              children: [
                  (0, r.jsx)("img", {
                      src: d,
                      alt: " ",
                      className: u.preview,
                      "aria-hidden": !0,
                  }),
                  !m &&
                      (0, r.jsx)("div", {
                          className: a ? u.purchasedEffect : void 0,
                          children: (0, r.jsx)(c.Z, {
                              skuId: t,
                              useThumbnail: !0,
                              autoPlay: p,
                              restartMethod: l.Q.FromStart,
                              resetOnHover: !0,
                              isHovering: n,
                              useOpacityOnHover: !1,
                              urlQueryString: "ProfileEffectShopPreview",
                              delayIntro: _,
                              shopPreview: !0,
                          }),
                      }),
              ],
          });
};
