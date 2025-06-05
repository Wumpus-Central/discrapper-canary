n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(774078),
    s = n(906732),
    c = n(522651),
    u = n(579185),
    d = n(272929),
    p = n(456631),
    h = n(643720),
    f = n(127379),
    m = n(981631);
let g = (e) => {
    let { channel: t, className: n, whichPopoutIsOpen: g, setWhichPopoutIsOpen: b } = e,
        { isHovered: _, setIsHovered: y, onMouseEnter: x, onMouseLeave: C, cancelTimers: v } = (0, u.Z)(200, 300),
        [j, O] = i.useState(!1),
        E = (0, l.e7)([p.Z], () => p.Z.effectCooldownEndTime),
        I = i.useMemo(() => (null != E ? (E.getTime() - Date.now()) / 1000 : 0), [E]),
        { seconds: P } = (0, o.Z)(null != E ? E : new Date()),
        S = P > 0,
        { parentAnalyticsLocation: Z } = (0, s.ZP)(),
        N = i.useCallback(
            (e) => {
                'focus' !== e.type && (j || S || x());
            },
            [j, S, x]
        ),
        T = i.useCallback(() => {
            j || C();
        }, [C, j]),
        A = i.useCallback(
            (e, t) => {
                v(), O(!j), g === f.D.EMOJI ? null == b || b(void 0) : null == b || b(f.D.EMOJI), (!_ || j) && (null == t || t(e));
            },
            [v, j, _, b, g]
        ),
        w = (_ || j) && (g === f.D.EMOJI || null == g),
        R = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: R,
        shouldShow: w,
        animation: a.yRy.Animation.FADE,
        animationPosition: 'top',
        position: 'bottom',
        align: 'center',
        spacing: 16,
        onRequestClose: () => {
            y(!1), O(!1), null == b || b(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(h.Z, {
                isHovered: w,
                channel: t,
                closePopout: n,
                onMouseEnter: x,
                onMouseLeave: T,
                onFocus: () => O(!0)
            });
        },
        children: (e) => {
            let { onClick: t, onKeyDown: i } = e;
            return (0, r.jsx)(d.Z, {
                isCenterButton: !0,
                color: j ? 'primaryDark' : void 0,
                totalCooldownSeconds: I,
                remainingCooldownSeconds: P,
                className: n,
                onKeyDown: (e) => {
                    e.keyCode === m.yXg.ENTER && e.keyCode === m.yXg.SPACE && A(e, i);
                },
                onClick: (e) => {
                    (0, c.v)(Z, c.d.EMOJI), A(e, t);
                },
                onMouseEnter: N,
                onMouseLeave: T,
                isActive: j,
                ref: R
            });
        }
    });
};
