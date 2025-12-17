n.r(e), n.d(e, { default: () => u });
var r = n(54381);
n(473749);
var s = n(848118),
    l = n(180339);
function u(a) {
    var e;
    let { imageUrl: n, backgroundImageUrl: u, altText: d, customClassNames: c } = a;
    return null == n
        ? null
        : (0, r.jsx)(s.p, {
              cardImage: n,
              cardBackgroundImage: u,
              altText: d,
              shape: null != c ? "custom" : "square",
              containerClassName: null != (e = null == c ? void 0 : c.containerClassName) ? e : l.cardImage,
              backgroundImageClassName: null == c ? void 0 : c.backgroundImageClassName,
              foregroundImageClassName: null == c ? void 0 : c.foregroundImageClassName,
          });
}
