n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(119837),
    l = n(802433),
    c = n(680295),
    u = n(585258),
    d = n(241822);
let f = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: a = !1,
            withScaleAnimation: f = !1,
            delayProfileEffectIntro: p = !1,
        } = e,
        [_, m] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== f) m(!1);
        else {
            let e = setTimeout(() => {
                m(!1);
            }, s.JH);
            return () => {
                clearTimeout(e);
            };
        }
    }, [f]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(u.previewContainer, {
                  [u.previewContainerAnimation]: f,
                  [u.previewContainerSetHeight]: !a,
              }),
              children: [
                  (0, r.jsx)("img", {
                      src: d,
                      alt: "",
                      className: u.preview,
                      "aria-hidden": !0,
                      draggable: !1,
                  }),
                  !_ &&
                      (0, r.jsx)(c.Z, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: f,
                          restartMethod: l.Q.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: p,
                          shopPreview: !0,
                      }),
              ],
          });
};
