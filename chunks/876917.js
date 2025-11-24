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
            withScaleAnimation: _ = !1,
            delayProfileEffectIntro: p = !1,
        } = e,
        [h, m] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== _) m(!1);
        else {
            let e = setTimeout(() => {
                m(!1);
            }, s.JH);
            return () => {
                clearTimeout(e);
            };
        }
    }, [_]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(u.previewContainer, {
                  [u.previewContainerAnimation]: _,
                  [u.previewContainerSetHeight]: !f,
              }),
              children: [
                  (0, r.jsx)("img", {
                      src: d,
                      alt: " ",
                      className: u.preview,
                      "aria-hidden": !0,
                  }),
                  !h &&
                      (0, r.jsx)("div", {
                          className: a ? u.purchasedEffect : void 0,
                          children: (0, r.jsx)(c.Z, {
                              skuId: t,
                              useThumbnail: !0,
                              autoPlay: _,
                              restartMethod: l.Q.FromStart,
                              resetOnHover: !0,
                              isHovering: n,
                              useOpacityOnHover: !1,
                              urlQueryString: "ProfileEffectShopPreview",
                              delayIntro: p,
                              shopPreview: !0,
                          }),
                      }),
              ],
          });
};
