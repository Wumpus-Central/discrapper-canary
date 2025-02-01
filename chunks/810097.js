n.d(t, {
    ZP: () => N,
    _1: () => b,
    jd: () => S
}),
    n(627341),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n(278074),
    u = n(442837),
    c = n(704215),
    d = n(481060),
    f = n(951394),
    _ = n(605236),
    p = n(314897),
    h = n(837411),
    m = n(369566),
    g = n(565640),
    E = n(510659),
    v = n(652853),
    y = n(228168),
    I = n(388032),
    T = n(518919);
let b = 2700,
    S = '> -# *',
    A = (e, t) =>
        (0, l.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: y.P.REPLY,
                    sourceType: y.n_.AVATAR
                },
                () => I.intl.string(I.t.xvN0fX)
            )
            .with(
                {
                    interactionType: y.P.REACT,
                    sourceType: y.n_.AVATAR
                },
                () => I.intl.string(I.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: y.P.REPLY,
                    sourceType: y.n_.STATUS
                },
                () => I.intl.string(I.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: y.P.REACT,
                    sourceType: y.n_.STATUS
                },
                () => I.intl.string(I.t.TKdBCw)
            )
            .with(
                {
                    interactionType: y.P.REPLY,
                    sourceType: y.n_.ACTIVITY
                },
                () => I.intl.string(I.t.ObfsSk)
            )
            .with(
                {
                    interactionType: y.P.REACT,
                    sourceType: y.n_.ACTIVITY
                },
                () => I.intl.string(I.t.bSe71N)
            )
            .exhaustive();
function N(e) {
    let { user: t, sourceType: n, isVisible: a, isExpandable: b, interactionSourceId: S, onAction: N, renderMoreButtonPopout: C } = e,
        R = (0, u.e7)([p.default], () => p.default.getId() === t.id),
        O = (0, h.Z)(t.id),
        { profileType: D } = (0, v.z)(),
        { onInteraction: x } = (0, E.Xo)(),
        { live: L, stream: P } = (0, m.Z)(t.id),
        w = (0, g.Z)(n === y.n_.STATUS ? t.id : null, 'UserProfileInteractionToolbar'),
        M =
            !a &&
            D !== y.y0.FULL_SIZE &&
            (0, l.EQ)(n)
                .with(y.n_.STATUS, () => 0 === L.length && null == P && null == w)
                .with(y.n_.ACTIVITY, () => !0)
                .with(y.n_.AVATAR, () => !1)
                .exhaustive(),
        [k, U] = r.useState(M);
    if (
        (r.useEffect(() => {
            k && !M && U(!1);
        }, [k, M]),
        t.bot || R || !O)
    )
        return null;
    let G = () => {
            n === y.n_.AVATAR ? N({ action: 'PRESS_REACT_AVATAR' }) : n === y.n_.STATUS ? N({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : N({ action: 'PRESS_REACT_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: y.P.REACT,
                        interactionSource: n,
                        interactionSourceId: S
                    }),
                D === y.y0.BITE_SIZE && (0, _.EW)(c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        B = () => {
            n === y.n_.AVATAR ? N({ action: 'PRESS_REPLY_AVATAR' }) : n === y.n_.STATUS ? N({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : N({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: y.P.REPLY,
                        interactionSource: n,
                        interactionSourceId: S
                    }),
                D === y.y0.BITE_SIZE && (0, _.EW)(c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        Z = (e) => {
            e.animationName === (0, o.get)(T, 'fadeInAndOut') && U(!1);
        };
    return (0, i.jsxs)(f.ZP, {
        className: s()(T.popover, {
            [T.fadeInAndOut]: k,
            [T.visible]: a,
            [T.expandable]: b,
            [T.statusPopover]: n === y.n_.STATUS,
            [T.avatarPopover]: n === y.n_.AVATAR,
            [T.activityPopover]: n === y.n_.ACTIVITY
        }),
        onAnimationEnd: k ? Z : void 0,
        children: [
            (0, i.jsx)(d.DY3, {
                text: I.intl.string(I.t.nhaI4e),
                shouldShow: a,
                className: T.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, i.jsx)(f.zx, {
                    onClick: G,
                    className: T.button,
                    'aria-label': A(y.P.REACT, n),
                    'aria-haspopup': 'dialog',
                    children: (0, i.jsx)(d.EO4, {
                        size: 'xs',
                        className: T.icon
                    })
                })
            }),
            (0, i.jsx)(d.DY3, {
                text: I.intl.string(I.t.RmDYKC),
                shouldShow: a,
                className: T.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, i.jsx)(f.zx, {
                    onClick: B,
                    className: T.button,
                    'aria-label': A(y.P.REPLY, n),
                    'aria-haspopup': 'dialog',
                    children: (0, i.jsx)(d.n$P, {
                        size: 'xs',
                        className: T.icon
                    })
                })
            }),
            null == C
                ? void 0
                : C((e) =>
                      (0, i.jsx)(d.DY3, {
                          text: I.intl.string(I.t.UKOtz8),
                          shouldShow: a,
                          className: T.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, i.jsx)(f.zx, {
                              ...e,
                              className: T.button,
                              'aria-label': I.intl.string(I.t.UKOtz8),
                              children: (0, i.jsx)(d.xhG, {
                                  size: 'xs',
                                  className: T.icon
                              })
                          })
                      })
                  )
        ]
    });
}
