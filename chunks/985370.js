n.d(t, { Z: () => v }), n(47120);
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
    f = n(221241),
    m = n(82965),
    g = n(643720),
    b = n(127379),
    _ = n(981631),
    C = n(657452);
let v = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: v } = e,
        { isHovered: y, setIsHovered: x, onMouseEnter: j, onMouseLeave: O, cancelTimers: N } = (0, u.Z)(200, 300),
        [E, I] = i.useState(!1),
        P = (0, a.e7)([p.Z], () => p.Z.effectCooldownEndTime),
        S = i.useMemo(() => (null != P ? (P.getTime() - Date.now()) / 1000 : 0), [P]),
        { seconds: Z } = (0, c.Z)(null != P ? P : new Date()),
        T = Z > 0,
        { mode: A } = (0, h.ZP)({ location: 'ActionBarSoundboardButton' }),
        w = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        { coloredIconsEnabled: R, squareButtonsEnabled: M } = (0, f.Z)({ location: 'ActionBarSoundboardButton' }),
        k = i.useCallback(
            (e) => {
                'focus' !== e.type && (E || T || j());
            },
            [E, T, j]
        ),
        L = i.useCallback(() => {
            E || O();
        }, [O, E]),
        D = i.useCallback(
            (e, t) => {
                N(), I(!E), l === b.D.EMOJI ? null == v || v(void 0) : null == v || v(b.D.EMOJI), (!y || E) && (null == t || t(e));
            },
            [N, E, y, v, l]
        ),
        W = (y || E) && (l === b.D.EMOJI || null == l);
    return (0, r.jsx)(s.yRy, {
        shouldShow: W,
        animation: w ? s.yRy.Animation.FADE : s.yRy.Animation.TRANSLATE,
        animationPosition: w ? 'top' : 'bottom',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            x(!1), I(!1), null == v || v(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(g.Z, {
                isHovered: W,
                channel: t,
                closePopout: n,
                onMouseEnter: j,
                onMouseLeave: L,
                onFocus: () => I(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: i } = e;
            return (0, r.jsx)(d.Z, {
                isCenterButton: !0,
                color: E ? (R ? 'primaryDark' : A === h.BK.GroupedButtonsRedMic || M ? 'green' : void 0) : void 0,
                totalCooldownSeconds: S,
                remainingCooldownSeconds: Z,
                className: o()(!w && C.controlButton, n),
                onKeyDown: (e) => {
                    e.keyCode === _.yXg.ENTER && e.keyCode === _.yXg.SPACE && D(e, i);
                },
                onClick: (e) => {
                    D(e, t);
                },
                onMouseEnter: k,
                onMouseLeave: L,
                isActive: E
            });
        }
    });
};
