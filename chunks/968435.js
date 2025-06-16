n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(70097),
    a = n(475595);
let o = function (e) {
    let { quest: t, dimensions: n, className: o } = e,
        s = (0, a.fh)(t, a.eC.HERO_IMAGE),
        l = null != n ? (0, a.nK)(n.width, n.height) : void 0,
        c = (0, a.f0)(s.url, l);
    return null != c
        ? (0, r.jsx)('img', {
              src: c,
              alt: t.config.messages.questName,
              className: o
          })
        : s.isAnimated
          ? (0, r.jsx)(i.Z, {
                className: o,
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                controls: !1,
                src: s.url
            })
          : null;
};
