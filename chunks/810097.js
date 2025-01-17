r.d(n, {
    ZP: function () {
        return O;
    },
    _1: function () {
        return N;
    },
    jd: function () {
        return C;
    }
});
var i = r(627341);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711);
var d = r(278074),
    f = r(442837),
    _ = r(704215),
    h = r(481060),
    p = r(951394),
    m = r(605236),
    g = r(314897),
    E = r(837411),
    v = r(369566),
    I = r(565640),
    T = r(510659),
    b = r(652853),
    y = r(228168),
    S = r(388032),
    A = r(518919);
let N = 2700,
    C = '> -# *',
    R = (e, n) =>
        (0, d.EQ)({
            interactionType: e,
            sourceType: n
        })
            .with(
                {
                    interactionType: y.P.REPLY,
                    sourceType: y.n_.AVATAR
                },
                () => S.intl.string(S.t.xvN0fX)
            )
            .with(
                {
                    interactionType: y.P.REACT,
                    sourceType: y.n_.AVATAR
                },
                () => S.intl.string(S.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: y.P.REPLY,
                    sourceType: y.n_.STATUS
                },
                () => S.intl.string(S.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: y.P.REACT,
                    sourceType: y.n_.STATUS
                },
                () => S.intl.string(S.t.TKdBCw)
            )
            .with(
                {
                    interactionType: y.P.REPLY,
                    sourceType: y.n_.ACTIVITY
                },
                () => S.intl.string(S.t.ObfsSk)
            )
            .with(
                {
                    interactionType: y.P.REACT,
                    sourceType: y.n_.ACTIVITY
                },
                () => S.intl.string(S.t.bSe71N)
            )
            .exhaustive();
function O(e) {
    let { user: n, sourceType: r, isVisible: i, isExpandable: a, interactionSourceId: l, onAction: N, renderMoreButtonPopout: C } = e,
        O = (0, f.e7)([g.default], () => g.default.getId() === n.id),
        D = (0, E.Z)(n.id),
        { profileType: L } = (0, b.z)(),
        { onInteraction: x } = (0, T.Xo)(),
        { live: w, stream: P } = (0, v.Z)(n.id),
        M = (0, I.Z)(r === y.n_.STATUS ? n.id : null, 'UserProfileInteractionToolbar'),
        k =
            !i &&
            L !== y.y0.FULL_SIZE &&
            (0, d.EQ)(r)
                .with(y.n_.STATUS, () => 0 === w.length && null == P && null == M)
                .with(y.n_.ACTIVITY, () => !0)
                .with(y.n_.AVATAR, () => !1)
                .exhaustive(),
        [U, B] = o.useState(k);
    if (
        (o.useEffect(() => {
            U && !k && B(!1);
        }, [U, k]),
        n.bot || O || !D)
    )
        return null;
    let G = () => {
            r === y.n_.AVATAR ? N({ action: 'PRESS_REACT_AVATAR' }) : r === y.n_.STATUS ? N({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : N({ action: 'PRESS_REACT_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: y.P.REACT,
                        interactionSource: r,
                        interactionSourceId: l
                    }),
                L === y.y0.BITE_SIZE && (0, m.EW)(_.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        Z = () => {
            r === y.n_.AVATAR ? N({ action: 'PRESS_REPLY_AVATAR' }) : r === y.n_.STATUS ? N({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : N({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: y.P.REPLY,
                        interactionSource: r,
                        interactionSourceId: l
                    }),
                L === y.y0.BITE_SIZE && (0, m.EW)(_.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        F = (e) => {
            e.animationName === (0, c.get)(A, 'fadeInAndOut') && B(!1);
        };
    return (0, s.jsxs)(p.ZP, {
        className: u()(A.popover, {
            [A.fadeInAndOut]: U,
            [A.visible]: i,
            [A.expandable]: a,
            [A.statusPopover]: r === y.n_.STATUS,
            [A.avatarPopover]: r === y.n_.AVATAR,
            [A.activityPopover]: r === y.n_.ACTIVITY
        }),
        onAnimationEnd: U ? F : void 0,
        children: [
            (0, s.jsx)(h.TooltipContainer, {
                text: S.intl.string(S.t.nhaI4e),
                shouldShow: i,
                className: A.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, s.jsx)(p.zx, {
                    onClick: G,
                    className: A.button,
                    'aria-label': R(y.P.REACT, r),
                    'aria-haspopup': 'dialog',
                    children: (0, s.jsx)(h.ReactionIcon, {
                        size: 'xs',
                        className: A.icon
                    })
                })
            }),
            (0, s.jsx)(h.TooltipContainer, {
                text: S.intl.string(S.t.RmDYKC),
                shouldShow: i,
                className: A.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, s.jsx)(p.zx, {
                    onClick: Z,
                    className: A.button,
                    'aria-label': R(y.P.REPLY, r),
                    'aria-haspopup': 'dialog',
                    children: (0, s.jsx)(h.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: A.icon
                    })
                })
            }),
            null == C
                ? void 0
                : C((e) =>
                      (0, s.jsx)(h.TooltipContainer, {
                          text: S.intl.string(S.t.UKOtz8),
                          shouldShow: i,
                          className: A.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, s.jsx)(p.zx, {
                              ...e,
                              className: A.button,
                              'aria-label': S.intl.string(S.t.UKOtz8),
                              children: (0, s.jsx)(h.MoreHorizontalIcon, {
                                  size: 'xs',
                                  className: A.icon
                              })
                          })
                      })
                  )
        ]
    });
}
