n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(70097),
    a = n(921948),
    o = n(475595);
function s(e) {
    let t = (0, a.Z)();
    return {
        width: e.width * t,
        height: e.height * t
    };
}
let l = function (e) {
    let { quest: t, dimensions: n, className: a } = e,
        l = (0, o.fh)(t, o.eC.HERO_IMAGE),
        c = null != n ? s(n) : void 0,
        u = (0, o.f0)(l.url, c);
    return null != u
        ? (0, r.jsx)('img', {
              src: u,
              alt: t.config.messages.questName,
              className: a
          })
        : l.isAnimated
          ? (0, r.jsx)(i.Z, {
                className: a,
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                controls: !1,
                src: l.url
            })
          : null;
};
