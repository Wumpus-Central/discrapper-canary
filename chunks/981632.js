n.d(t, { Z: () => u }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(607070),
    l = n(409302),
    c = n(474936);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: d, idleAnimationState: f } = e,
        p = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [_, h] = i.useState(d),
        m = i.useRef((0, l._)(t, _)),
        [g, E] = i.useState(null == f),
        [v, b] = i.useState(!1),
        [y, O] = i.useState(-1),
        S = () => {
            (m.current = (0, l._)(t, _)), O((e) => e + 1);
        },
        I = () => {
            E(!1), b(!0), O(-1), h(d);
        };
    i.useEffect(() => {
        null == f && h(d);
    }, [f, d]);
    let T = {
            applyAnimation: S,
            idleAnimationState: f,
            isChanging: v,
            resetAnimation: I,
            versionKey: y
        },
        N = i.useRef(T);
    i.useEffect(() => {
        N.current = T;
    }),
        i.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = N.current;
            if (null != f && t >= 0) {
                e();
                return;
            }
            n();
        }, [t, f]),
        i.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = N.current;
            (t && null != n) || e();
        }, [_]),
        i.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = N.current;
            v && (E(null == t), b(!1), e());
        }, [v]);
    let A = () => {
        null != f && (h(f), E(!0));
    };
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, r.jsx)(a.Fmz, {
        importData: m.current,
        shouldAnimate: !p && u,
        className: n,
        versionKey: y,
        onComplete: null != f ? A : void 0,
        loop: g
    });
}
