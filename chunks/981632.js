r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(409302),
    f = r(474936);
function p(e) {
    let { giftStyle: n, className: r, shouldAnimate: i = !0, defaultAnimationState: a, idleAnimationState: p } = e,
        h = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [_, m] = s.useState(a),
        g = s.useRef((0, d._)(n, _)),
        [E, v] = s.useState(null == p),
        [y, b] = s.useState(!1),
        [I, T] = s.useState(-1),
        S = () => {
            (g.current = (0, d._)(n, _)), T((e) => e + 1);
        },
        A = () => {
            v(!1), b(!0), T(-1), m(a);
        };
    s.useEffect(() => {
        null == p && m(a);
    }, [p, a]);
    let C = {
            applyAnimation: S,
            idleAnimationState: p,
            isChanging: y,
            resetAnimation: A,
            versionKey: I
        },
        N = s.useRef(C);
    s.useEffect(() => {
        N.current = C;
    }),
        s.useEffect(() => {
            let { resetAnimation: e, versionKey: n, applyAnimation: r } = N.current;
            if (null != p && n >= 0) {
                e();
                return;
            }
            r();
        }, [n, p]),
        s.useEffect(() => {
            let { applyAnimation: e, isChanging: n, idleAnimationState: r } = N.current;
            (!n || null == r) && e();
        }, [_]),
        s.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: n } = N.current;
            y && (v(null == n), b(!1), e());
        }, [y]);
    let R = () => {
        null != p && (m(p), v(!0));
    };
    if (!f.Cj.hasOwnProperty(n)) throw Error('Unexpected giftStyle '.concat(n));
    return (0, o.jsx)(u.LottieAnimation, {
        importData: g.current,
        shouldAnimate: !h && i,
        className: r,
        versionKey: I,
        onComplete: null != p ? R : void 0,
        loop: E
    });
}
