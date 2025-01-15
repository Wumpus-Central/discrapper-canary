n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(829769);
t.Z = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: r, setWhichPopoutIsOpen: x } = e,
        { isHovered: v, setIsHovered: _, onMouseEnter: I, onMouseLeave: E, cancelTimers: b } = (0, d.Z)(200, 300),
        [Z, S] = l.useState(!1),
        N = (0, s.e7)([h.Z], () => h.Z.effectCooldownEndTime),
        T = l.useMemo(() => (null != N ? (N.getTime() - Date.now()) / 1000 : 0), [N]),
        { seconds: j } = (0, c.Z)(null != N ? N : new Date()),
        A = j > 0,
        { groupedButtons: y, mode: P } = (0, p.ZP)({ location: 'ActionBarSoundboardButton' }),
        M = P === p.BK.GroupedButtonsRedMic ? 'green' : void 0,
        R = l.useCallback(
            (e) => {
                if ('focus' !== e.type) !Z && !A && I();
            },
            [Z, A, I]
        ),
        L = l.useCallback(() => {
            !Z && E();
        }, [E, Z]),
        k = l.useCallback(
            (e, t) => {
                b(), S(!Z), r === f.D.EMOJI ? null == x || x(void 0) : null == x || x(f.D.EMOJI), (!v || Z) && (null == t || t(e));
            },
            [b, Z, v, x, r]
        ),
        O = (v || Z) && (r === f.D.EMOJI || null == r);
    return (0, i.jsx)(o.Popout, {
        shouldShow: O,
        animation: y ? o.Popout.Animation.FADE : o.Popout.Animation.TRANSLATE,
        animationPosition: y ? 'top' : 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            _(!1), S(!1), null == x || x(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(m.Z, {
                isHovered: O,
                channel: t,
                closePopout: n,
                onMouseEnter: I,
                onMouseLeave: L,
                onFocus: () => S(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: l } = e;
            return (0, i.jsx)(u.Z, {
                isCenterButton: !0,
                color: Z ? M : void 0,
                totalCooldownSeconds: T,
                remainingCooldownSeconds: j,
                className: a()(!y && C.controlButton, n),
                onKeyDown: (e) => {
                    var t, n;
                    return (t = e), (n = l), void (t.keyCode === g.yXg.ENTER && t.keyCode === g.yXg.SPACE && k(t, n));
                },
                onClick: (e) => {
                    k(e, t);
                },
                onMouseEnter: R,
                onMouseLeave: L,
                isActive: Z
            });
        }
    });
};
