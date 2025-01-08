n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(704215),
    c = n(582019),
    d = n(481060),
    u = n(239091),
    h = n(100527),
    m = n(906732),
    p = n(540059),
    g = n(706140),
    f = n(294629),
    _ = n(131951),
    E = n(459273),
    I = n(242291),
    C = n(792165),
    N = n(603074),
    v = n(981631),
    S = n(921944),
    T = n(388032),
    b = n(382290);
function A(e) {
    let { channel: t, iconClassName: l, className: A, innerClassName: Z, ...x } = e,
        L = (0, p.Q3)('SoundBoardRTCPanelButton'),
        { mute: P, suppress: O } = (0, f.Z)(t),
        y = (0, s.e7)([_.Z], () => _.Z.isDeaf()),
        R = P || O || y,
        [j, D] = r.useState(!1),
        M = t.getGuildId(),
        w = (0, I.sR)({ isSoundboardButtonDisabled: R }),
        [k, U] = (0, g.cv)(w),
        { analyticsLocations: G } = (0, m.ZP)(h.Z.SOUNDBOARD_BUTTON);
    function B(e) {
        null != M &&
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: M,
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
            (0, i.jsx)(d.Popout, {
                animation: d.Popout.Animation.FADE,
                shouldShow: j,
                position: 'top',
                onRequestClose: () => D(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(N.Z, {
                        guildId: M,
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
                        children: (0, i.jsx)(d.Button, {
                            ...e,
                            ...t,
                            className: a()(A, {
                                [b.buttonActive]: j,
                                [b.disabled]: R
                            }),
                            wrapperClassName: A,
                            innerClassName: Z,
                            disabled: R,
                            onClick: () => {
                                var t, n;
                                null != k && k !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(S.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!j), H();
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
                            size: L ? d.Button.Sizes.MEDIUM : d.Button.Sizes.SMALL,
                            ...x,
                            children: (0, i.jsx)(V, {
                                className: l,
                                size: 'sm',
                                color: j ? 'white' : d.tokens.colors.INTERACTIVE_ACTIVE
                            })
                        })
                    })
            }),
        Y = r.useCallback(() => {
            !R && D(!j);
        }, [R, j]);
    return (
        (0, E.yp)({
            event: v.CkL.TOGGLE_SOUNDBOARD,
            handler: Y
        }),
        (0, i.jsx)(m.Gt, {
            value: G,
            children: (0, i.jsx)(d.Tooltip, {
                text: (function () {
                    if (P) return T.intl.string(T.t['Ox4/zc']);
                    if (O) return T.intl.string(T.t['+YBKYG']);
                    if (y) return T.intl.string(T.t.X1lQlp);
                    return T.intl.string(T.t['6EJvHh']);
                })(),
                children: (e) => W(e)
            })
        })
    );
}
