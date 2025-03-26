n.d(t, { Z: () => en }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(442837),
    c = n(481060),
    u = n(26151),
    d = n(922555),
    f = n(287734),
    _ = n(249000),
    p = n(100527),
    h = n(906732),
    m = n(43267),
    g = n(933557),
    E = n(703656),
    b = n(932724),
    v = n(672339),
    y = n(898531),
    O = n(923973),
    I = n(82965),
    S = n(189771),
    T = n(560688),
    A = n(88479),
    N = n(136995),
    C = n(25827),
    R = n(430824),
    P = n(131951),
    w = n(594174),
    D = n(451478),
    L = n(768581),
    x = n(358221),
    M = n(584511),
    k = n(793865),
    j = n(522651),
    U = n(795318),
    G = n(354459),
    B = n(981631),
    F = n(65154),
    V = n(388032),
    Z = n(534031),
    H = n(423308);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = {
        width: 232,
        height: 315
    },
    Q = {
        width: 232,
        height: 267
    },
    X = 475,
    J = 267,
    $ = 128;
function ee(e) {
    let { header: t } = e,
        n = P.Z.getCameraComponent(),
        o = (0, l.e7)([P.Z], () => P.Z.getVideoDeviceId()),
        a = (0, y.Z)();
    return (
        i.useEffect(() => {
            let e = w.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, b.P)(e);
                (0, v.FU)(t, o, { track: !1 }).catch(B.dG4);
            }
        }, [a, o]),
        (0, r.jsxs)('div', {
            className: Z.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)('div', {
                    className: Z.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: o,
                        width: X,
                        height: J
                    })
                }),
                (0, r.jsx)('div', {
                    className: Z.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function et(e) {
    let { canVideo: t, channel: n, numVideoDevices: o } = e,
        { parentAnalyticsLocation: s } = (0, h.ZP)(),
        { cameraUnavailable: l, enabled: d } = (0, O.Z)(),
        _ = (0, S.Z)(n),
        p = (0, I.Z)({ location: 'CallActionButtons' }),
        m = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: a()(Z.wrapper, p ? Z.experimentActions : Z.actions),
        children: [
            (0, r.jsx)(A.Z, {
                iconComponent: c.Dio,
                label: V.NW.string(V.t.WAI6xs),
                className: Z.actionButton,
                fullRegionButton: p,
                onClick: () => {
                    (0, j.v)(s, j.d.DISCONNECT), u.Z.stopRinging(n.id);
                }
            }),
            t &&
                (0, r.jsx)(c.yRy, {
                    targetElementRef: m,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(k.Z, {
                            onClose: t,
                            onInteraction: (0, U.u)('VideoDeviceMenu', s, { entrypoint: G.A5.CARET })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: c.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(C.C, {
                            buttonRef: m,
                            join: !0,
                            enabled: d,
                            className: Z.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: _,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: o > 1 ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: T.Z,
                            onChange: () => {
                                var e;
                                (0, j.v)(s, j.d.JOIN_VIDEO_CALL), f.default.selectVoiceChannel(n.id, !0), (0, E.XU)(null !== (e = n.guild_id) && void 0 !== e ? e : B.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(N.Z, {
                channel: n,
                color: 'join',
                centerButton: !0,
                className: Z.actionButton
            })
        ]
    });
}
function en(e) {
    var t;
    let { animatedStyle: n, y: o, x: f, channel: E } = e,
        { analyticsLocations: b } = (0, h.ZP)(p.Z.INCOMING_CALL_MODAL),
        [v, y] = i.useState(!1),
        O = (0, l.e7)([R.Z], () => R.Z.getGuild(E.guild_id)),
        I =
            null != O
                ? L.ZP.getGuildIconURL({
                      id: O.id,
                      icon: O.icon,
                      size: $
                  })
                : null,
        S = null !== (t = (0, m.x)(E, $, !0)) && void 0 !== t ? t : I,
        T = (0, g.ZP)(E),
        [A, N] = (0, l.Wu)([P.Z], () => [P.Z.supports(F.AN.VIDEO), Object.keys(P.Z.getVideoDevices()).length]),
        C = null != O ? ''.concat(T, ', ').concat(O.name) : T,
        w = (0, l.e7)([D.Z], () => D.Z.isFocused()),
        k = (0, l.e7)([x.Z], () => x.Z.getMode(E.id)),
        j = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        U = (0, c.q_F)(
            {
                value: +!!v,
                config: z(Y({}, s.config.stiff), { clamp: !0 })
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === B.yXg.ESCAPE && u.Z.stopRinging(E.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [E]);
    let G = k === B.WtW.VIDEO && A && N > 0,
        W = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(M.Z, {
                    className: Z.icon,
                    ringing: w,
                    src: null != S ? S : '',
                    ringingType: M.Z.RingingType.INCOMING,
                    size: v ? c.EFr.SIZE_40 : c.EFr.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: Z.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: Z.title,
                            color: 'header-primary',
                            variant: v ? 'text-md/semibold' : 'text-lg/semibold',
                            children: C
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: Z.subtitle,
                            variant: v ? 'text-sm/normal' : 'text-md/normal',
                            children: k === B.WtW.VOICE ? V.NW.string(V.t.Js8cKy) : V.NW.string(V.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        K = G ? q : Q,
        en = (0, l.e7)([D.Z], () => D.Z.windowSize());
    return (0, r.jsx)(h.Gt, {
        value: b,
        children: (0, r.jsx)(_.Z, {
            className: Z.wrapper,
            selector: '.'.concat(Z.root),
            initialPosition: {
                left: f,
                top: o
            },
            maxX: en.width,
            maxY: en.height,
            onDragEnd: j,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.f6W, {
                theme: v ? B.BRd.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: a()(Z.root, H.elevationHigh, { [Z.previewCamera]: v }, e),
                        style: z(Y({}, n), {
                            width: U.value.interpolate([0, 1], [K.width, X]),
                            minHeight: U.value.interpolate([0, 1], [K.height, J]),
                            translateX: U.value.interpolate([0, 1], [0, (-1 * Math.abs(X - K.width)) / 2])
                        }),
                        children: [
                            v
                                ? (0, r.jsx)(ee, { header: W })
                                : (0, r.jsx)('div', {
                                      className: Z.mainChannelInfo,
                                      children: W
                                  }),
                            (0, r.jsx)(et, {
                                canVideo: G,
                                channel: E,
                                numVideoDevices: N
                            }),
                            G && !v
                                ? (0, r.jsx)(c.zxk, {
                                      size: c.zxk.Sizes.SMALL,
                                      fullWidth: !0,
                                      look: c.zxk.Looks.LINK,
                                      color: c.zxk.Colors.PRIMARY,
                                      className: Z.previewButton,
                                      onClick: () => y(!0),
                                      children: V.NW.string(V.t['8B0UDg'])
                                  })
                                : null
                        ]
                    })
            })
        })
    });
}
