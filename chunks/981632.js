n.d(t, { Z: () => c }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(607070),
    l = n(409302),
    u = n(474936);
function c(e) {
    let { giftStyle: t, className: n, shouldAnimate: c = !0, defaultAnimationState: d, idleAnimationState: f } = e,
        _ = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        [p, h] = r.useState(d),
        m = r.useRef((0, l._)(t, p)),
        [g, E] = r.useState(null == f),
        [v, y] = r.useState(!1),
        [I, b] = r.useState(-1),
        T = () => {
            (m.current = (0, l._)(t, p)), b((e) => e + 1);
        },
        S = () => {
            E(!1), y(!0), b(-1), h(d);
        };
    r.useEffect(() => {
        null == f && h(d);
    }, [f, d]);
    let A = {
            applyAnimation: T,
            idleAnimationState: f,
            isChanging: v,
            resetAnimation: S,
            versionKey: I
        },
        N = r.useRef(A);
    r.useEffect(() => {
        N.current = A;
    }),
        r.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = N.current;
            if (null != f && t >= 0) {
                e();
                return;
            }
            n();
        }, [t, f]),
        r.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = N.current;
            (t && null != n) || e();
        }, [p]),
        r.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = N.current;
            v && (E(null == t), y(!1), e());
        }, [v]);
    let C = () => {
        null != f && (h(f), E(!0));
    };
    if (!u.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(s.Fmz, {
        importData: m.current,
        shouldAnimate: !_ && c,
        className: n,
        versionKey: I,
        onComplete: null != f ? C : void 0,
        loop: g
    });
}
