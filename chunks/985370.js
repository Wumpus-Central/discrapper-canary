n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(774078),
    u = n(579185),
    d = n(272929),
    p = n(456631),
    h = n(861254),
    f = n(82965),
    m = n(643720),
    g = n(127379),
    b = n(981631),
    _ = n(657452);
let C = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: C } = e,
        { isHovered: v, setIsHovered: y, onMouseEnter: x, onMouseLeave: j, cancelTimers: O } = (0, u.Z)(200, 300),
        [N, E] = i.useState(!1),
        P = (0, a.e7)([p.Z], () => p.Z.effectCooldownEndTime),
        I = i.useMemo(() => (null != P ? (P.getTime() - Date.now()) / 1000 : 0), [P]),
        { seconds: S } = (0, c.Z)(null != P ? P : new Date()),
        Z = S > 0,
        { mode: T } = (0, h.ZP)({ location: 'ActionBarSoundboardButton' }),
        A = (0, f.Z)({ location: 'ActionBarSoundboardButton' }),
        w = T === h.BK.GroupedButtonsRedMic ? 'green' : void 0,
        R = i.useCallback(
            (e) => {
                'focus' !== e.type && (N || Z || x());
            },
            [N, Z, x]
        ),
        k = i.useCallback(() => {
            N || j();
        }, [j, N]),
        M = i.useCallback(
            (e, t) => {
                O(), E(!N), l === g.D.EMOJI ? null == C || C(void 0) : null == C || C(g.D.EMOJI), (!v || N) && (null == t || t(e));
            },
            [O, N, v, C, l]
        ),
        L = (v || N) && (l === g.D.EMOJI || null == l);
    return (0, r.jsx)(s.yRy, {
        shouldShow: L,
        animation: A ? s.yRy.Animation.FADE : s.yRy.Animation.TRANSLATE,
        animationPosition: A ? 'top' : 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            y(!1), E(!1), null == C || C(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(m.Z, {
                isHovered: L,
                channel: t,
                closePopout: n,
                onMouseEnter: x,
                onMouseLeave: k,
                onFocus: () => E(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: i } = e;
            return (0, r.jsx)(d.Z, {
                isCenterButton: !0,
                color: N ? w : void 0,
                totalCooldownSeconds: I,
                remainingCooldownSeconds: S,
                className: o()(!A && _.controlButton, n),
                onKeyDown: (e) => {
                    e.keyCode === b.yXg.ENTER && e.keyCode === b.yXg.SPACE && M(e, i);
                },
                onClick: (e) => {
                    M(e, t);
                },
                onMouseEnter: R,
                onMouseLeave: k,
                isActive: N
            });
        }
    });
};
