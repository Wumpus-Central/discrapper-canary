n.d(t, {
    ZP: () => P,
    _1: () => A,
    jd: () => N
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
    v = n(388032),
    y = n(831098);
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
let A = 2700,
    N = '> -# *',
    C = {
        [b.n_.AVATAR]: () => v.NW.string(v.t['fEUP/v']),
        [b.n_.STATUS]: () => v.NW.string(v.t.TKdBCw),
        [b.n_.ACTIVITY]: () => v.NW.string(v.t.bSe71N)
    },
    R = {
        [b.n_.AVATAR]: () => v.NW.string(v.t.xvN0fX),
        [b.n_.STATUS]: () => v.NW.string(v.t['C/vzS0']),
        [b.n_.ACTIVITY]: () => v.NW.string(v.t.ObfsSk)
    };
function P(e) {
    let { user: t, sourceType: n, isVisible: o, isExpandable: O, interactionSourceId: S, onAction: A, renderMoreButtonPopout: N } = e,
        P = (0, c.e7)([p.default], () => p.default.getId() === t.id),
        w = (0, h.Z)(t.id),
        { profileType: D } = (0, E.z)(),
        { onInteraction: L } = (0, g.Xo)(),
        { live: x, stream: M } = (0, m.Z)(t.id),
        k =
            !o &&
            D !== b.y0.FULL_SIZE &&
            (0, l.EQ)(n)
                .with(b.n_.STATUS, () => 0 === x.length && null == M)
                .with(b.n_.ACTIVITY, () => !0)
                .with(b.n_.AVATAR, () => !1)
                .exhaustive(),
        [j, U] = i.useState(k);
    if (
        (i.useEffect(() => {
            j && !k && U(!1);
        }, [j, k]),
        t.bot || P || !w)
    )
        return null;
    let G = () => {
            n === b.n_.AVATAR ? A({ action: 'PRESS_REACT_AVATAR' }) : n === b.n_.STATUS ? A({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : A({ action: 'PRESS_REACT_ACTIVITY' }),
                null == L ||
                    L({
                        interactionType: b.P.REACT,
                        interactionSource: n,
                        interactionSourceId: S
                    }),
                D === b.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        B = () => {
            n === b.n_.AVATAR ? A({ action: 'PRESS_REPLY_AVATAR' }) : n === b.n_.STATUS ? A({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : A({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == L ||
                    L({
                        interactionType: b.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: S
                    }),
                D === b.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        F = (e) => {
            e.animationName === (0, s.get)(y, 'fadeInAndOut') && U(!1);
        };
    return (0, r.jsxs)(f.ZP, {
        className: a()(y.popover, {
            [y.fadeInAndOut]: j,
            [y.visible]: o,
            [y.expandable]: O,
            [y.statusPopover]: n === b.n_.STATUS,
            [y.avatarPopover]: n === b.n_.AVATAR,
            [y.activityPopover]: n === b.n_.ACTIVITY
        }),
        onAnimationEnd: j ? F : void 0,
        children: [
            (0, r.jsx)(d.DY3, {
                text: v.NW.string(v.t.nhaI4e),
                shouldShow: o,
                className: y.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: G,
                    className: y.button,
                    'aria-label': C[n](),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.EO4, {
                        size: 'xs',
                        className: y.icon
                    })
                })
            }),
            (0, r.jsx)(d.DY3, {
                text: v.NW.string(v.t.RmDYKC),
                shouldShow: o,
                className: y.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: B,
                    className: y.button,
                    'aria-label': R[n](),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.n$P, {
                        size: 'xs',
                        className: y.icon
                    })
                })
            }),
            null == N
                ? void 0
                : N((e) =>
                      (0, r.jsx)(d.DY3, {
                          text: v.NW.string(v.t.UKOtz8),
                          shouldShow: o,
                          className: y.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, r.jsx)(
                              f.zx,
                              T(I({}, e), {
                                  className: y.button,
                                  'aria-label': v.NW.string(v.t.UKOtz8),
                                  children: (0, r.jsx)(d.xhG, {
                                      size: 'xs',
                                      className: y.icon
                                  })
                              })
                          )
                      })
                  )
        ]
    });
}
