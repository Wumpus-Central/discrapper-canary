n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(704215),
    d = n(582019),
    c = n(481060),
    u = n(239091),
    h = n(100527),
    m = n(906732),
    p = n(540059),
    g = n(706140),
    _ = n(294629),
    f = n(131951),
    E = n(459273),
    I = n(242291),
    C = n(792165),
    N = n(603074),
    v = n(981631),
    T = n(921944),
    S = n(388032),
    A = n(74671);
function Z(e) {
    let { channel: t, iconClassName: r, className: Z, innerClassName: x, ...b } = e,
        L = (0, p.Q3)('SoundBoardRTCPanelButton'),
        { mute: y, suppress: O } = (0, _.Z)(t),
        P = (0, s.e7)([f.Z], () => f.Z.isDeaf()),
        R = y || O || P,
        [j, D] = l.useState(!1),
        w = t.getGuildId(),
        M = (0, I.sR)({ isSoundboardButtonDisabled: R }),
        [k, U] = (0, g.cv)(M),
        { analyticsLocations: G } = (0, m.ZP)(h.Z.SOUNDBOARD_BUTTON);
    function B(e) {
        null != w &&
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: w,
                        ...t
                    });
            });
    }
    let {
            Component: V,
            play: H,
            events: { onMouseEnter: F, onMouseLeave: z }
        } = (0, d.j)(),
        W = (e) =>
            (0, i.jsx)(c.yRy, {
                animation: c.yRy.Animation.FADE,
                shouldShow: j,
                position: 'top',
                onRequestClose: () => D(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(N.Z, {
                        guildId: w,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            k === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, i.jsx)(C.o, {
                                onClose: n,
                                markAsDismissed: U
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(c.zxk, {
                            ...e,
                            ...t,
                            className: a()(Z, {
                                [A.buttonActive]: j,
                                [A.disabled]: R
                            }),
                            wrapperClassName: Z,
                            innerClassName: x,
                            disabled: R,
                            onClick: () => {
                                var t;
                                null != k && k !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(T.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!j), H();
                            },
                            onMouseEnter: (t) => {
                                var n, i;
                                null === (n = b.onMouseEnter) || void 0 === n || n.call(b, t), null == e || null === (i = e.onMouseEnter) || void 0 === i || i.call(e), F();
                            },
                            onMouseLeave: (t) => {
                                var n, i;
                                null === (n = b.onMouseLeave) || void 0 === n || n.call(b, t), null == e || null === (i = e.onMouseLeave) || void 0 === i || i.call(e), z();
                            },
                            onContextMenu: B,
                            fullWidth: !0,
                            size: L ? c.zxk.Sizes.MEDIUM : c.zxk.Sizes.SMALL,
                            ...b,
                            children: (0, i.jsx)(V, {
                                className: r,
                                size: 'sm',
                                color: j ? 'white' : c.TVs.colors.INTERACTIVE_ACTIVE
                            })
                        })
                    })
            }),
        Y = l.useCallback(() => {
            R || D(!j);
        }, [R, j]);
    return (
        (0, E.yp)({
            event: v.CkL.TOGGLE_SOUNDBOARD,
            handler: Y
        }),
        (0, i.jsx)(m.Gt, {
            value: G,
            children: (0, i.jsx)(c.ua7, {
                text: y ? S.intl.string(S.t['Ox4/zc']) : O ? S.intl.string(S.t['+YBKYG']) : P ? S.intl.string(S.t.X1lQlp) : S.intl.string(S.t['6EJvHh']),
                children: (e) => W(e)
            })
        })
    );
}
