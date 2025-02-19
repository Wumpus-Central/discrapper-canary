n.d(t, {
    ZP: () => P,
    _1: () => A,
    jd: () => C
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
    p = n(605236),
    _ = n(314897),
    h = n(837411),
    m = n(369566),
    g = n(565640),
    E = n(510659),
    v = n(652853),
    b = n(228168),
    y = n(388032),
    O = n(965075);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 2700,
    C = '> -# *',
    R = (e, t) =>
        (0, l.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: b.P.REPLY,
                    sourceType: b.n_.AVATAR
                },
                () => y.NW.string(y.t.xvN0fX)
            )
            .with(
                {
                    interactionType: b.P.REACT,
                    sourceType: b.n_.AVATAR
                },
                () => y.NW.string(y.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: b.P.REPLY,
                    sourceType: b.n_.STATUS
                },
                () => y.NW.string(y.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: b.P.REACT,
                    sourceType: b.n_.STATUS
                },
                () => y.NW.string(y.t.TKdBCw)
            )
            .with(
                {
                    interactionType: b.P.REPLY,
                    sourceType: b.n_.ACTIVITY
                },
                () => y.NW.string(y.t.ObfsSk)
            )
            .with(
                {
                    interactionType: b.P.REACT,
                    sourceType: b.n_.ACTIVITY
                },
                () => y.NW.string(y.t.bSe71N)
            )
            .exhaustive();
function P(e) {
    let { user: t, sourceType: n, isVisible: o, isExpandable: S, interactionSourceId: T, onAction: A, renderMoreButtonPopout: C } = e,
        P = (0, c.e7)([_.default], () => _.default.getId() === t.id),
        w = (0, h.Z)(t.id),
        { profileType: D } = (0, v.z)(),
        { onInteraction: x } = (0, E.Xo)(),
        { live: L, stream: M } = (0, m.Z)(t.id),
        k = (0, g.Z)(n === b.n_.STATUS ? t.id : null, 'UserProfileInteractionToolbar'),
        j =
            !o &&
            D !== b.y0.FULL_SIZE &&
            (0, l.EQ)(n)
                .with(b.n_.STATUS, () => 0 === L.length && null == M && null == k)
                .with(b.n_.ACTIVITY, () => !0)
                .with(b.n_.AVATAR, () => !1)
                .exhaustive(),
        [U, G] = i.useState(j);
    if (
        (i.useEffect(() => {
            U && !j && G(!1);
        }, [U, j]),
        t.bot || P || !w)
    )
        return null;
    let B = () => {
            n === b.n_.AVATAR ? A({ action: 'PRESS_REACT_AVATAR' }) : n === b.n_.STATUS ? A({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : A({ action: 'PRESS_REACT_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: b.P.REACT,
                        interactionSource: n,
                        interactionSourceId: T
                    }),
                D === b.y0.BITE_SIZE && (0, p.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        Z = () => {
            n === b.n_.AVATAR ? A({ action: 'PRESS_REPLY_AVATAR' }) : n === b.n_.STATUS ? A({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : A({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: b.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: T
                    }),
                D === b.y0.BITE_SIZE && (0, p.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        F = (e) => {
            e.animationName === (0, s.get)(O, 'fadeInAndOut') && G(!1);
        };
    return (0, r.jsxs)(f.ZP, {
        className: a()(O.popover, {
            [O.fadeInAndOut]: U,
            [O.visible]: o,
            [O.expandable]: S,
            [O.statusPopover]: n === b.n_.STATUS,
            [O.avatarPopover]: n === b.n_.AVATAR,
            [O.activityPopover]: n === b.n_.ACTIVITY
        }),
        onAnimationEnd: U ? F : void 0,
        children: [
            (0, r.jsx)(d.DY3, {
                text: y.NW.string(y.t.nhaI4e),
                shouldShow: o,
                className: O.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: B,
                    className: O.button,
                    'aria-label': R(b.P.REACT, n),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.EO4, {
                        size: 'xs',
                        className: O.icon
                    })
                })
            }),
            (0, r.jsx)(d.DY3, {
                text: y.NW.string(y.t.RmDYKC),
                shouldShow: o,
                className: O.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: Z,
                    className: O.button,
                    'aria-label': R(b.P.REPLY, n),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.n$P, {
                        size: 'xs',
                        className: O.icon
                    })
                })
            }),
            null == C
                ? void 0
                : C((e) =>
                      (0, r.jsx)(d.DY3, {
                          text: y.NW.string(y.t.UKOtz8),
                          shouldShow: o,
                          className: O.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, r.jsx)(
                              f.zx,
                              N(I({}, e), {
                                  className: O.button,
                                  'aria-label': y.NW.string(y.t.UKOtz8),
                                  children: (0, r.jsx)(d.xhG, {
                                      size: 'xs',
                                      className: O.icon
                                  })
                              })
                          )
                      })
                  )
        ]
    });
}
