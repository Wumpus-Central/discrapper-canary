n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(774078),
    d = n(579185),
    u = n(272929),
    h = n(456631),
    p = n(861254),
    m = n(643720),
    f = n(127379),
    g = n(981631),
    _ = n(812801);
let C = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: a, setWhichPopoutIsOpen: C } = e,
        { isHovered: x, setIsHovered: v, onMouseEnter: E, onMouseLeave: I, cancelTimers: b } = (0, d.Z)(200, 300),
        [Z, N] = l.useState(!1),
        T = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        S = l.useMemo(() => (null != T ? (T.getTime() - Date.now()) / 1000 : 0), [T]),
        { seconds: j } = (0, c.Z)(null != T ? T : new Date()),
        A = j > 0,
        { groupedButtons: y, mode: P } = (0, p.ZP)({ location: 'ActionBarSoundboardButton' }),
        R = P === p.BK.GroupedButtonsRedMic ? 'green' : void 0,
        M = l.useCallback(
            (e) => {
                'focus' !== e.type && (Z || A || E());
            },
            [Z, A, E]
        ),
        L = l.useCallback(() => {
            Z || I();
        }, [I, Z]),
        k = l.useCallback(
            (e, t) => {
                b(), N(!Z), a === f.D.EMOJI ? null == C || C(void 0) : null == C || C(f.D.EMOJI), (!x || Z) && (null == t || t(e));
            },
            [b, Z, x, C, a]
        ),
        O = (x || Z) && (a === f.D.EMOJI || null == a);
    return (0, i.jsx)(o.yRy, {
        shouldShow: O,
        animation: y ? o.yRy.Animation.FADE : o.yRy.Animation.TRANSLATE,
        animationPosition: y ? 'top' : 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            v(!1), N(!1), null == C || C(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(m.Z, {
                isHovered: O,
                channel: t,
                closePopout: n,
                onMouseEnter: E,
                onMouseLeave: L,
                onFocus: () => N(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(u.Z, {
                isCenterButton: !0,
                color: Z ? R : void 0,
                totalCooldownSeconds: S,
                remainingCooldownSeconds: j,
                className: r()(!y && _.controlButton, n),
                onKeyDown: (e) => {
                    e.keyCode === g.yXg.ENTER && e.keyCode === g.yXg.SPACE && k(e, l);
                },
                onClick: (e) => {
                    k(e, t);
                },
                onMouseEnter: M,
                onMouseLeave: L,
                isActive: Z
            });
        }
    });
};
