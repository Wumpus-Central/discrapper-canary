t.d(n, { Z: () => i });
var a = t(54381);
t(473749);
var o = t(70097),
    r = t(475595);
let i = function (e) {
    let { quest: n, dimensions: t, className: i, assetRef: s } = e,
        l = (0, r.fh)(n, r.eC.HERO_IMAGE),
        d = null != t ? (0, r.nK)(t.width, t.height) : void 0,
        c = (0, r.f0)(l.url, d);
    return null != c
        ? (0, a.jsx)("img", {
              ref: s,
              src: c,
              alt: n.config.messages.questName,
              className: i,
          })
        : l.isAnimated
          ? (0, a.jsx)(o.Z, {
                ref: s,
                className: i,
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                controls: !1,
                src: l.url,
            })
          : null;
};
