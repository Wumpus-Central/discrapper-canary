(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(392711),
    l = n.n(i),
    c = n(442837),
    u = n(481060),
    d = n(451478),
    p = n(302221),
    m = n(464121);
let f = [0, 0.5, 1],
    g = {
        'layers[1].shapes[1].g.k.k': [0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278, 0.776],
        'layers[2].shapes[1].g.k.k': [0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271, 0.757]
    };
async function x(e, t) {
    let r = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
    return (
        (function (e, t, n) {
            for (let r in t) {
                let t = l().get(e, r);
                if (null == t) continue;
                let s = t.map((e, t) => {
                    var r;
                    return null != (r = n[t]) ? r : e;
                });
                l().set(e, r, s);
            }
        })(r, g, t),
        r
    );
}
function h(e) {
    var t;
    let { animationClassName: n, className: o, quest: i, useReducedMotion: l } = e,
        g = (0, c.e7)([d.Z], () => d.Z.isFocused()),
        h = s.useRef(null),
        [b, j] = s.useState(!1),
        _ = s.useMemo(() => {
            if (null == i) return null;
            let e = (0, p.oo)(i.config.colors.primary),
                t = {
                    r: e.r / 255,
                    g: e.g / 255,
                    b: e.b / 255
                },
                n = f.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return x(i.id, n);
        }, [i]),
        v = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        y = !l && g;
    s.useEffect(() => {
        var e, t, n, r;
        g ? y && (null == (r = h.current) || null == (n = r.animation) || n.play()) : null == (t = h.current) || null == (e = t.animation) || e.goToAndStop(0, !0);
    }, [y, g]);
    let C = s.useCallback(() => {
        j(!0);
    }, []);
    return null == _ || v
        ? (0, r.jsx)('div', {
              className: m.backgroundFallback,
              style: { backgroundImage: 'linear-gradient(90deg, '.concat(i.config.colors.primary, ', ').concat(i.config.colors.secondary, ')') }
          })
        : (0, r.jsx)('div', {
              className: a()(m.lottieAnimationBackgroundWrapper, o),
              children: (0, r.jsx)(
                  u.Fmz,
                  {
                      ref: h,
                      onComplete: C,
                      importData: () => _,
                      shouldAnimate: !b && y,
                      className: a()(m.lottieAnimation, m.lottieAnimationBackground, n),
                      loop: 0,
                      rendererSettings: { preserveAspectRatio: 'none' }
                  },
                  i.config.colors.primary
              )
          });
}
