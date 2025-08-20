n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(451478),
    f = n(302221),
    _ = n(746887);
let p = [0, 0.5, 1],
    h = {
        "layers[1].shapes[1].g.k.k": [0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278, 0.776],
        "layers[2].shapes[1].g.k.k": [0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271, 0.757],
    };
async function m(e, t) {
    let r = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
    return g(r, h, t), r;
}
function g(e, t, n) {
    for (let r in t) {
        let t = l().get(e, r);
        if (null == t) continue;
        let i = t.map((e, t) => {
            var r;
            return null != (r = n[t]) ? r : e;
        });
        l().set(e, r, i);
    }
}
function E(e) {
    var t;
    let { animationClassName: n, className: a, quest: s, useReducedMotion: l } = e,
        h = (0, c.e7)([d.Z], () => d.Z.isFocused()),
        g = i.useRef(null),
        [E, b] = i.useState(!1),
        y = i.useMemo(() => {
            if (null == s) return null;
            let e = (0, f.oo)(s.config.colors.primary),
                t = {
                    r: e.r / 255,
                    g: e.g / 255,
                    b: e.b / 255,
                },
                n = p.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return m(s.id, n);
        }, [s]),
        O = (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null,
        v = !l && h;
    i.useEffect(() => {
        var e, t, n, r;
        h
            ? v && (null == (r = g.current) || null == (n = r.animation) || n.play())
            : null == (t = g.current) || null == (e = t.animation) || e.goToAndStop(0, !0);
    }, [v, h]);
    let I = i.useCallback(() => {
        b(!0);
    }, []);
    return null == y || O
        ? (0, r.jsx)("div", {
              className: _.backgroundFallback,
              style: {
                  backgroundImage: "linear-gradient(90deg, "
                      .concat(s.config.colors.primary, ", ")
                      .concat(s.config.colors.secondary, ")"),
              },
          })
        : (0, r.jsx)("div", {
              className: o()(_.lottieAnimationBackgroundWrapper, a),
              children: (0, r.jsx)(
                  u.Fmz,
                  {
                      ref: g,
                      onComplete: I,
                      importData: () => y,
                      shouldAnimate: !E && v,
                      className: o()(_.lottieAnimation, _.lottieAnimationBackground, n),
                      loop: 0,
                      rendererSettings: { preserveAspectRatio: "none" },
                  },
                  s.config.colors.primary,
              ),
          });
}
