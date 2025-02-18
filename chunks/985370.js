n.d(t, { Z: () => x }), n(47120);
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
    m = n(82965),
    f = n(643720),
    g = n(127379),
    _ = n(981631),
    C = n(131175);
let x = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: a, setWhichPopoutIsOpen: x } = e,
        { isHovered: v, setIsHovered: E, onMouseEnter: I, onMouseLeave: b, cancelTimers: Z } = (0, d.Z)(200, 300),
        [N, T] = l.useState(!1),
        S = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        j = l.useMemo(() => (null != S ? (S.getTime() - Date.now()) / 1000 : 0), [S]),
        { seconds: y } = (0, c.Z)(null != S ? S : new Date()),
        A = y > 0,
        { mode: P } = (0, p.ZP)({ location: 'ActionBarSoundboardButton' }),
        R = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        M = P === p.BK.GroupedButtonsRedMic ? 'green' : void 0,
        L = l.useCallback(
            (e) => {
                'focus' !== e.type && (N || A || I());
            },
            [N, A, I]
        ),
        k = l.useCallback(() => {
            N || b();
        }, [b, N]),
        O = l.useCallback(
            (e, t) => {
                Z(), T(!N), a === g.D.EMOJI ? null == x || x(void 0) : null == x || x(g.D.EMOJI), (!v || N) && (null == t || t(e));
            },
            [Z, N, v, x, a]
        ),
        D = (v || N) && (a === g.D.EMOJI || null == a);
    return (0, i.jsx)(o.yRy, {
        shouldShow: D,
        animation: R ? o.yRy.Animation.FADE : o.yRy.Animation.TRANSLATE,
        animationPosition: R ? 'top' : 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            E(!1), T(!1), null == x || x(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(f.Z, {
                isHovered: D,
                channel: t,
                closePopout: n,
                onMouseEnter: I,
                onMouseLeave: k,
                onFocus: () => T(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(u.Z, {
                isCenterButton: !0,
                color: N ? M : void 0,
                totalCooldownSeconds: j,
                remainingCooldownSeconds: y,
                className: r()(!R && C.controlButton, n),
                onKeyDown: (e) => {
                    e.keyCode === _.yXg.ENTER && e.keyCode === _.yXg.SPACE && O(e, l);
                },
                onClick: (e) => {
                    O(e, t);
                },
                onMouseEnter: L,
                onMouseLeave: k,
                isActive: N
            });
        }
    });
};
