n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(70097),
    o = n(475595);
let a = function (e) {
    let { quest: t, dimensions: n, className: a } = e,
        s = (0, o.fh)(t, o.eC.HERO_IMAGE),
        l = null != n ? (0, o.nK)(n.width, n.height) : void 0,
        c = (0, o.f0)(s.url, l);
    return null != c
        ? (0, r.jsx)("img", {
              src: c,
              alt: t.config.messages.questName,
              className: a,
          })
        : s.isAnimated
          ? (0, r.jsx)(i.Z, {
                className: a,
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                controls: !1,
                src: s.url,
            })
          : null;
};
