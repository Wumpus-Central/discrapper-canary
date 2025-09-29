n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var a = n(70097),
    i = n(475595);
let l = function (e) {
    let { quest: t, dimensions: n, className: l, assetRef: s } = e,
        o = (0, i.fh)(t, i.eC.HERO_IMAGE),
        c = null != n ? (0, i.nK)(n.width, n.height) : void 0,
        d = (0, i.f0)(o.url, c);
    return null != d
        ? (0, r.jsx)("img", {
              ref: s,
              src: d,
              alt: t.config.messages.questName,
              className: l,
          })
        : o.isAnimated
          ? (0, r.jsx)(a.Z, {
                ref: s,
                className: l,
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                controls: !1,
                src: o.url,
            })
          : null;
};
