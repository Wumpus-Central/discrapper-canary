n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(704215),
    c = n(582019),
    d = n(481060),
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
    A = n(110696);
function Z(e) {
    let { channel: t, iconClassName: r, className: Z, innerClassName: b, ...x } = e,
        L = (0, p.Q3)('SoundBoardRTCPanelButton'),
        { mute: y, suppress: P } = (0, _.Z)(t),
        O = (0, s.e7)([f.Z], () => f.Z.isDeaf()),
        R = y || P || O,
        [j, D] = l.useState(!1),
        w = t.getGuildId(),
        k = (0, I.sR)({ isSoundboardButtonDisabled: R }),
        [M, U] = (0, g.cv)(k),
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
        } = (0, c.j)(),
        W = (e) =>
            (0, i.jsx)(d.yRy, {
                animation: d.yRy.Animation.FADE,
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
                            M === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, i.jsx)(C.o, {
                                onClose: n,
                                markAsDismissed: U
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.zxk, {
                            ...e,
                            ...t,
                            className: a()(Z, {
                                [A.buttonActive]: j,
                                [A.disabled]: R
                            }),
                            wrapperClassName: Z,
                            innerClassName: b,
                            disabled: R,
                            onClick: () => {
                                var t;
                                null != M && M !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(T.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!j), H();
                            },
                            onMouseEnter: (t) => {
                                var n, i;
                                null === (n = x.onMouseEnter) || void 0 === n || n.call(x, t), null == e || null === (i = e.onMouseEnter) || void 0 === i || i.call(e), F();
                            },
                            onMouseLeave: (t) => {
                                var n, i;
                                null === (n = x.onMouseLeave) || void 0 === n || n.call(x, t), null == e || null === (i = e.onMouseLeave) || void 0 === i || i.call(e), z();
                            },
                            onContextMenu: B,
                            fullWidth: !0,
                            size: L ? d.zxk.Sizes.MEDIUM : d.zxk.Sizes.SMALL,
                            ...x,
                            children: (0, i.jsx)(V, {
                                className: r,
                                size: 'sm',
                                color: j ? 'white' : d.TVs.colors.INTERACTIVE_ACTIVE
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
            children: (0, i.jsx)(d.ua7, {
                text: y ? S.intl.string(S.t['Ox4/zc']) : P ? S.intl.string(S.t['+YBKYG']) : O ? S.intl.string(S.t.X1lQlp) : S.intl.string(S.t['6EJvHh']),
                children: (e) => W(e)
            })
        })
    );
}
