n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(774078),
    u = n(906732),
    d = n(522651),
    p = n(579185),
    h = n(272929),
    f = n(456631),
    m = n(861254),
    g = n(221241),
    b = n(82965),
    _ = n(643720),
    y = n(127379),
    x = n(981631),
    C = n(393740);
let v = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: v } = e,
        { isHovered: j, setIsHovered: O, onMouseEnter: E, onMouseLeave: I, cancelTimers: P } = (0, p.Z)(200, 300),
        [S, Z] = i.useState(!1),
        N = (0, a.e7)([f.Z], () => f.Z.effectCooldownEndTime),
        T = i.useMemo(() => (null != N ? (N.getTime() - Date.now()) / 1000 : 0), [N]),
        { seconds: A } = (0, c.Z)(null != N ? N : new Date()),
        w = A > 0,
        { mode: R } = (0, m.ZP)({ location: 'ActionBarSoundboardButton' }),
        k = (0, b.Z)({ location: 'ActionBarSoundboardButton' }),
        { coloredIconsEnabled: M, squareButtonsEnabled: L } = (0, g.Z)({ location: 'ActionBarSoundboardButton' }),
        { parentAnalyticsLocation: D } = (0, u.ZP)(),
        U = i.useCallback(
            (e) => {
                'focus' !== e.type && (S || w || E());
            },
            [S, w, E]
        ),
        B = i.useCallback(() => {
            S || I();
        }, [I, S]),
        G = i.useCallback(
            (e, t) => {
                P(), Z(!S), l === y.D.EMOJI ? null == v || v(void 0) : null == v || v(y.D.EMOJI), (!j || S) && (null == t || t(e));
            },
            [P, S, j, v, l]
        ),
        F = (j || S) && (l === y.D.EMOJI || null == l);
    return (0, r.jsx)(s.yRy, {
        shouldShow: F,
        animation: k ? s.yRy.Animation.FADE : s.yRy.Animation.TRANSLATE,
        animationPosition: k ? 'top' : 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            O(!1), Z(!1), null == v || v(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(_.Z, {
                isHovered: F,
                channel: t,
                closePopout: n,
                onMouseEnter: E,
                onMouseLeave: B,
                onFocus: () => Z(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: i } = e;
            return (0, r.jsx)(h.Z, {
                isCenterButton: !0,
                color: S ? (M ? 'primaryDark' : R === m.BK.GroupedButtonsRedMic || L ? 'green' : void 0) : void 0,
                totalCooldownSeconds: T,
                remainingCooldownSeconds: A,
                className: o()(!k && C.controlButton, n),
                onKeyDown: (e) => {
                    e.keyCode === x.yXg.ENTER && e.keyCode === x.yXg.SPACE && G(e, i);
                },
                onClick: (e) => {
                    (0, d.v)(D, d.d.EMOJI), G(e, t);
                },
                onMouseEnter: U,
                onMouseLeave: B,
                isActive: S
            });
        }
    });
};
