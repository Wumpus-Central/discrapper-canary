n.d(t, { Z: () => f }), n(47120), n(724458);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(392711),
    l = n.n(i),
    c = n(442837),
    d = n(481060),
    u = n(451478),
    p = n(302221),
    m = n(554804);
let x = [0, 0.5, 1],
    h = {
        'layers[1].shapes[1].g.k.k': [0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278, 0.776],
        'layers[2].shapes[1].g.k.k': [0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271, 0.757]
    };
async function g(e, t) {
    let s = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
    return (
        (function (e, t, n) {
            for (let s in t) {
                let t = l().get(e, s);
                if (null == t) continue;
                let r = t.map((e, t) => {
                    var s;
                    return null !== (s = n[t]) && void 0 !== s ? s : e;
                });
                l().set(e, s, r);
            }
        })(s, h, t),
        s
    );
}
function f(e) {
    var t;
    let { animationClassName: n, className: a, quest: i, useReducedMotion: l } = e,
        h = (0, c.e7)([u.Z], () => u.Z.isFocused()),
        f = r.useRef(null),
        [v, _] = r.useState(!1),
        C = r.useMemo(() => {
            if (null == i) return null;
            let e = (0, p.oo)(i.config.colors.primary),
                t = {
                    r: e.r / 255,
                    g: e.g / 255,
                    b: e.b / 255
                },
                n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return g(i.id, n);
        }, [i]),
        j = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        b = !l && h;
    r.useEffect(() => {
        var e, t, n, s;
        h ? b && (null === (s = f.current) || void 0 === s || null === (n = s.animation) || void 0 === n || n.play()) : null === (t = f.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0);
    }, [b, h]);
    let T = r.useCallback(() => {
        _(!0);
    }, []);
    return null == C || j
        ? (0, s.jsx)('div', {
              className: m.backgroundFallback,
              style: { backgroundImage: 'linear-gradient(90deg, '.concat(i.config.colors.primary, ', ').concat(i.config.colors.secondary, ')') }
          })
        : (0, s.jsx)('div', {
              className: o()(m.lottieAnimationBackgroundWrapper, a),
              children: (0, s.jsx)(
                  d.Fmz,
                  {
                      ref: f,
                      onComplete: T,
                      importData: () => C,
                      shouldAnimate: !v && b,
                      className: o()(m.lottieAnimation, m.lottieAnimationBackground, n),
                      loop: 0,
                      rendererSettings: { preserveAspectRatio: 'none' }
                  },
                  i.config.colors.primary
              )
          });
}
