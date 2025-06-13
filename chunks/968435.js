n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800),
    a = n(70097),
    o = n(921948),
    s = n(475595);
let l = function (e) {
    let { quest: t, dimensions: n, className: l } = e,
        c = (0, s.fh)(t, s.eC.HERO_IMAGE),
        u = i.useMemo(() => {
            if (null != n) {
                let e = (0, o.Z)();
                return (0, s.f0)(c.url, {
                    width: n.width * e,
                    height: n.height * e
                });
            }
            return (0, s.f0)(c.url, n);
        }, [c.url, n]);
    return null != u
        ? (0, r.jsx)('img', {
              src: u,
              alt: t.config.messages.questName,
              className: l
          })
        : c.isAnimated
          ? (0, r.jsx)(a.Z, {
                className: l,
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                controls: !1,
                src: c.url
            })
          : null;
};
