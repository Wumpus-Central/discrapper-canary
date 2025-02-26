n.d(t, {
    ZP: () => R,
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
    g = n(369566),
    m = n(510659),
    E = n(652853),
    v = n(228168),
    b = n(388032),
    y = n(965075);
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
function S(e) {
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
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 2700,
    A = '> -# *',
    C = (e, t) =>
        (0, l.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: v.P.REPLY,
                    sourceType: v.n_.AVATAR
                },
                () => b.NW.string(b.t.xvN0fX)
            )
            .with(
                {
                    interactionType: v.P.REACT,
                    sourceType: v.n_.AVATAR
                },
                () => b.NW.string(b.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: v.P.REPLY,
                    sourceType: v.n_.STATUS
                },
                () => b.NW.string(b.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: v.P.REACT,
                    sourceType: v.n_.STATUS
                },
                () => b.NW.string(b.t.TKdBCw)
            )
            .with(
                {
                    interactionType: v.P.REPLY,
                    sourceType: v.n_.ACTIVITY
                },
                () => b.NW.string(b.t.ObfsSk)
            )
            .with(
                {
                    interactionType: v.P.REACT,
                    sourceType: v.n_.ACTIVITY
                },
                () => b.NW.string(b.t.bSe71N)
            )
            .exhaustive();
function R(e) {
    let { user: t, sourceType: n, isVisible: o, isExpandable: O, interactionSourceId: I, onAction: N, renderMoreButtonPopout: A } = e,
        R = (0, c.e7)([p.default], () => p.default.getId() === t.id),
        P = (0, h.Z)(t.id),
        { profileType: D } = (0, E.z)(),
        { onInteraction: w } = (0, m.Xo)(),
        { live: L, stream: x } = (0, g.Z)(t.id),
        M =
            !o &&
            D !== v.y0.FULL_SIZE &&
            (0, l.EQ)(n)
                .with(v.n_.STATUS, () => 0 === L.length && null == x)
                .with(v.n_.ACTIVITY, () => !0)
                .with(v.n_.AVATAR, () => !1)
                .exhaustive(),
        [k, j] = i.useState(M);
    if (
        (i.useEffect(() => {
            k && !M && j(!1);
        }, [k, M]),
        t.bot || R || !P)
    )
        return null;
    let U = () => {
            n === v.n_.AVATAR ? N({ action: 'PRESS_REACT_AVATAR' }) : n === v.n_.STATUS ? N({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : N({ action: 'PRESS_REACT_ACTIVITY' }),
                null == w ||
                    w({
                        interactionType: v.P.REACT,
                        interactionSource: n,
                        interactionSourceId: I
                    }),
                D === v.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        G = () => {
            n === v.n_.AVATAR ? N({ action: 'PRESS_REPLY_AVATAR' }) : n === v.n_.STATUS ? N({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : N({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == w ||
                    w({
                        interactionType: v.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: I
                    }),
                D === v.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        B = (e) => {
            e.animationName === (0, s.get)(y, 'fadeInAndOut') && j(!1);
        };
    return (0, r.jsxs)(f.ZP, {
        className: a()(y.popover, {
            [y.fadeInAndOut]: k,
            [y.visible]: o,
            [y.expandable]: O,
            [y.statusPopover]: n === v.n_.STATUS,
            [y.avatarPopover]: n === v.n_.AVATAR,
            [y.activityPopover]: n === v.n_.ACTIVITY
        }),
        onAnimationEnd: k ? B : void 0,
        children: [
            (0, r.jsx)(d.DY3, {
                text: b.NW.string(b.t.nhaI4e),
                shouldShow: o,
                className: y.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: U,
                    className: y.button,
                    'aria-label': C(v.P.REACT, n),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.EO4, {
                        size: 'xs',
                        className: y.icon
                    })
                })
            }),
            (0, r.jsx)(d.DY3, {
                text: b.NW.string(b.t.RmDYKC),
                shouldShow: o,
                className: y.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, r.jsx)(f.zx, {
                    onClick: G,
                    className: y.button,
                    'aria-label': C(v.P.REPLY, n),
                    'aria-haspopup': 'dialog',
                    children: (0, r.jsx)(d.n$P, {
                        size: 'xs',
                        className: y.icon
                    })
                })
            }),
            null == A
                ? void 0
                : A((e) =>
                      (0, r.jsx)(d.DY3, {
                          text: b.NW.string(b.t.UKOtz8),
                          shouldShow: o,
                          className: y.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, r.jsx)(
                              f.zx,
                              T(S({}, e), {
                                  className: y.button,
                                  'aria-label': b.NW.string(b.t.UKOtz8),
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
