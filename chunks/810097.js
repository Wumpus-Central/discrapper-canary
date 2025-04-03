n.d(t, {
    ZP: () => P,
    _1: () => N,
    jd: () => A
}),
    n(627341),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(278074),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    f = n(951394),
    _ = n(605236),
    p = n(314897),
    h = n(837411),
    m = n(369566),
    g = n(510659),
    E = n(652853),
    b = n(228168),
    y = n(388032),
    v = n(341969);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 2700,
    A = '> -# *',
    C = {
        [b.n_.AVATAR]: () => y.NW.string(y.t['fEUP/v']),
        [b.n_.STATUS]: () => y.NW.string(y.t.TKdBCw),
        [b.n_.ACTIVITY]: () => y.NW.string(y.t.bSe71N)
    },
    R = {
        [b.n_.AVATAR]: () => y.NW.string(y.t.xvN0fX),
        [b.n_.STATUS]: () => y.NW.string(y.t['C/vzS0']),
        [b.n_.ACTIVITY]: () => y.NW.string(y.t.ObfsSk)
    };
function P(e) {
    let { user: t, sourceType: n, isVisible: o, isExpandable: O, interactionSourceId: S, targetRef: N, onAction: A, renderMoreButtonPopout: P } = e,
        w = i.useRef(null),
        D = (0, c.e7)([p.default], () => p.default.getId() === t.id),
        L = (0, h.Z)(t.id),
        { profileType: x } = (0, E.z)(),
        { onInteraction: M, onInteractionPopoutTargetRefChange: k } = (0, g.Xo)(),
        { live: j, stream: U } = (0, m.Z)(t.id),
        G =
            !o &&
            x !== b.y0.FULL_SIZE &&
            (0, l.EQ)(n)
                .with(b.n_.STATUS, () => 0 === j.length && null == U)
                .with(b.n_.ACTIVITY, () => !0)
                .with(b.n_.AVATAR, () => !1)
                .exhaustive(),
        [B, F] = i.useState(G);
    if (
        (i.useEffect(() => {
            B && !G && F(!1);
        }, [B, G]),
        t.bot || D || !L)
    )
        return null;
    let V = () => {
            k(N),
                n === b.n_.AVATAR ? A({ action: 'PRESS_REACT_AVATAR' }) : n === b.n_.STATUS ? A({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : A({ action: 'PRESS_REACT_ACTIVITY' }),
                null == M ||
                    M({
                        interactionType: b.P.REACT,
                        interactionSource: n,
                        interactionSourceId: S
                    }),
                x === b.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        Z = () => {
            k(N),
                n === b.n_.AVATAR ? A({ action: 'PRESS_REPLY_AVATAR' }) : n === b.n_.STATUS ? A({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : A({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == M ||
                    M({
                        interactionType: b.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: S
                    }),
                x === b.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        H = (e) => {
            e.animationName === (0, s.get)(v, 'fadeInAndOut') && F(!1);
        };
    return (0, r.jsxs)(f.ZP, {
        className: a()(v.popover, {
            [v.fadeInAndOut]: B,
            [v.visible]: o,
            [v.expandable]: O,
            [v.statusPopover]: n === b.n_.STATUS,
            [v.avatarPopover]: n === b.n_.AVATAR,
            [v.activityPopover]: n === b.n_.ACTIVITY
        }),
        onAnimationEnd: B ? H : void 0,
        children: [
            (0, r.jsx)(d.DY3, {
                text: y.NW.string(y.t.nhaI4e),
                shouldShow: o,
                className: v.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: V,
                    className: v.button,
                    'aria-label': C[n](),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.EO4, {
                        size: 'xs',
                        className: v.icon
                    })
                })
            }),
            (0, r.jsx)(d.DY3, {
                text: y.NW.string(y.t.RmDYKC),
                shouldShow: o,
                className: v.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: Z,
                    className: v.button,
                    'aria-label': R[n](),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.n$P, {
                        size: 'xs',
                        className: v.icon
                    })
                })
            }),
            null == P
                ? void 0
                : P((e) => {
                      let t = () => {
                          var t;
                          k(w), null == (t = e.onClick) || t.call(e);
                      };
                      return (0, r.jsx)(d.DY3, {
                          text: y.NW.string(y.t.UKOtz8),
                          shouldShow: o,
                          className: v.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, r.jsx)(
                              f.zx,
                              T(I({ ref: w }, e), {
                                  onClick: t,
                                  className: v.button,
                                  'aria-label': y.NW.string(y.t.UKOtz8),
                                  children: (0, r.jsx)(d.xhG, {
                                      size: 'xs',
                                      className: v.icon
                                  })
                              })
                          )
                      });
                  })
        ]
    });
}
