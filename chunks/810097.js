r.d(n, {
    ZP: function () {
        return O;
    },
    _1: function () {
        return C;
    },
    jd: function () {
        return N;
    }
});
var i = r(627341);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711);
var d = r(278074),
    f = r(442837),
    p = r(704215),
    h = r(481060),
    _ = r(951394),
    m = r(605236),
    g = r(314897),
    E = r(837411),
    v = r(369566),
    y = r(565640),
    b = r(510659),
    I = r(652853),
    T = r(228168),
    S = r(388032),
    A = r(518919);
let C = 2700,
    N = '> -# *',
    R = (e, n) =>
        (0, d.EQ)({
            interactionType: e,
            sourceType: n
        })
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.AVATAR
                },
                () => S.intl.string(S.t.xvN0fX)
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.AVATAR
                },
                () => S.intl.string(S.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.STATUS
                },
                () => S.intl.string(S.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.STATUS
                },
                () => S.intl.string(S.t.TKdBCw)
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.ACTIVITY
                },
                () => S.intl.string(S.t.ObfsSk)
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.ACTIVITY
                },
                () => S.intl.string(S.t.bSe71N)
            )
            .exhaustive();
function O(e) {
    let { user: n, sourceType: r, isVisible: i, isExpandable: a, interactionSourceId: l, onAction: C, renderMoreButtonPopout: N } = e,
        O = (0, f.e7)([g.default], () => g.default.getId() === n.id),
        D = (0, E.Z)(n.id),
        { profileType: x } = (0, I.z)(),
        { onInteraction: L } = (0, b.Xo)(),
        { live: w, stream: P } = (0, v.Z)(n.id),
        M = (0, y.Z)(r === T.n_.STATUS ? n.id : null, 'UserProfileInteractionToolbar'),
        k =
            !i &&
            x !== T.y0.FULL_SIZE &&
            (0, d.EQ)(r)
                .with(T.n_.STATUS, () => 0 === w.length && null == P && null == M)
                .with(T.n_.ACTIVITY, () => !0)
                .with(T.n_.AVATAR, () => !1)
                .exhaustive(),
        [U, B] = s.useState(k);
    if (
        (s.useEffect(() => {
            U && !k && B(!1);
        }, [U, k]),
        n.bot || O || !D)
    )
        return null;
    let G = () => {
            r === T.n_.AVATAR ? C({ action: 'PRESS_REACT_AVATAR' }) : r === T.n_.STATUS ? C({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : C({ action: 'PRESS_REACT_ACTIVITY' }),
                null == L ||
                    L({
                        interactionType: T.P.REACT,
                        interactionSource: r,
                        interactionSourceId: l
                    }),
                x === T.y0.BITE_SIZE && (0, m.EW)(p.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        Z = () => {
            r === T.n_.AVATAR ? C({ action: 'PRESS_REPLY_AVATAR' }) : r === T.n_.STATUS ? C({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : C({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == L ||
                    L({
                        interactionType: T.P.REPLY,
                        interactionSource: r,
                        interactionSourceId: l
                    }),
                x === T.y0.BITE_SIZE && (0, m.EW)(p.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        F = (e) => {
            e.animationName === (0, c.get)(A, 'fadeInAndOut') && B(!1);
        };
    return (0, o.jsxs)(_.ZP, {
        className: u()(A.popover, {
            [A.fadeInAndOut]: U,
            [A.visible]: i,
            [A.expandable]: a,
            [A.statusPopover]: r === T.n_.STATUS,
            [A.avatarPopover]: r === T.n_.AVATAR,
            [A.activityPopover]: r === T.n_.ACTIVITY
        }),
        onAnimationEnd: U ? F : void 0,
        children: [
            (0, o.jsx)(h.TooltipContainer, {
                text: S.intl.string(S.t.nhaI4e),
                shouldShow: i,
                className: A.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, o.jsx)(_.zx, {
                    onClick: G,
                    className: A.button,
                    'aria-label': R(T.P.REACT, r),
                    'aria-haspopup': 'dialog',
                    children: (0, o.jsx)(h.ReactionIcon, {
                        size: 'xs',
                        className: A.icon
                    })
                })
            }),
            (0, o.jsx)(h.TooltipContainer, {
                text: S.intl.string(S.t.RmDYKC),
                shouldShow: i,
                className: A.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, o.jsx)(_.zx, {
                    onClick: Z,
                    className: A.button,
                    'aria-label': R(T.P.REPLY, r),
                    'aria-haspopup': 'dialog',
                    children: (0, o.jsx)(h.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: A.icon
                    })
                })
            }),
            null == N
                ? void 0
                : N((e) =>
                      (0, o.jsx)(h.TooltipContainer, {
                          text: S.intl.string(S.t.UKOtz8),
                          shouldShow: i,
                          className: A.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, o.jsx)(_.zx, {
                              ...e,
                              className: A.button,
                              'aria-label': S.intl.string(S.t.UKOtz8),
                              children: (0, o.jsx)(h.MoreHorizontalIcon, {
                                  size: 'xs',
                                  className: A.icon
                              })
                          })
                      })
                  )
        ]
    });
}
