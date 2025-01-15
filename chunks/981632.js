n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    u = n(192379),
    a = n(442837),
    l = n(481060),
    i = n(607070),
    d = n(409302),
    c = n(474936);
function s(e) {
    let { giftStyle: t, className: n, shouldAnimate: s = !0, defaultAnimationState: f, idleAnimationState: h } = e,
        b = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
        [o, E] = u.useState(f),
        R = u.useRef((0, d._)(t, o)),
        [S, k] = u.useState(null == h),
        [I, O] = u.useState(!1),
        [m, p] = u.useState(-1);
    u.useEffect(() => {
        null == h && E(f);
    }, [h, f]);
    let _ = {
            applyAnimation: () => {
                (R.current = (0, d._)(t, o)), p((e) => e + 1);
            },
            idleAnimationState: h,
            isChanging: I,
            resetAnimation: () => {
                k(!1), O(!0), p(-1), E(f);
            },
            versionKey: m
        },
        A = u.useRef(_);
    u.useEffect(() => {
        A.current = _;
    }),
        u.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = A.current;
            if (null != h && t >= 0) {
                e();
                return;
            }
            n();
        }, [t, h]),
        u.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = A.current;
            (!t || null == n) && e();
        }, [o]),
        u.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = A.current;
            I && (k(null == t), O(!1), e());
        }, [I]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, r.jsx)(l.LottieAnimation, {
        importData: R.current,
        shouldAnimate: !b && s,
        className: n,
        versionKey: m,
        onComplete:
            null != h
                ? () => {
                      null != h && (E(h), k(!0));
                  }
                : void 0,
        loop: S
    });
}
