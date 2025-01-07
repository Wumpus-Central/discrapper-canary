n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(607070),
    o = n(409302),
    c = n(474936);
function u(e) {
    let { giftStyle: t, className: n, shouldAnimate: u = !0, defaultAnimationState: d, idleAnimationState: h } = e,
        g = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        [m, p] = r.useState(d),
        f = r.useRef((0, o._)(t, m)),
        [_, x] = r.useState(null == h),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(-1);
    r.useEffect(() => {
        null == h && p(d);
    }, [h, d]);
    let b = {
            applyAnimation: () => {
                (f.current = (0, o._)(t, m)), N((e) => e + 1);
            },
            idleAnimationState: h,
            isChanging: E,
            resetAnimation: () => {
                x(!1), I(!0), N(-1), p(d);
            },
            versionKey: v
        },
        C = r.useRef(b);
    r.useEffect(() => {
        C.current = b;
    }),
        r.useEffect(() => {
            let { resetAnimation: e, versionKey: t, applyAnimation: n } = C.current;
            if (null != h && t >= 0) {
                e();
                return;
            }
            n();
        }, [t, h]),
        r.useEffect(() => {
            let { applyAnimation: e, isChanging: t, idleAnimationState: n } = C.current;
            (!t || null == n) && e();
        }, [m]),
        r.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = C.current;
            E && (x(null == t), I(!1), e());
        }, [E]);
    if (!c.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
    return (0, i.jsx)(l.LottieAnimation, {
        importData: f.current,
        shouldAnimate: !g && u,
        className: n,
        versionKey: v,
        onComplete:
            null != h
                ? () => {
                      null != h && (p(h), x(!0));
                  }
                : void 0,
        loop: _
    });
}
