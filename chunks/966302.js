n.d(t, { Z: () => ei }), n(47120);
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
    h = n(367907),
    m = n(906732),
    g = n(43267),
    E = n(933557),
    b = n(703656),
    v = n(932724),
    y = n(672339),
    O = n(898531),
    I = n(923973),
    S = n(82965),
    T = n(189771),
    A = n(560688),
    N = n(88479),
    C = n(136995),
    R = n(25827),
    P = n(430824),
    w = n(131951),
    D = n(594174),
    L = n(451478),
    x = n(626135),
    M = n(768581),
    k = n(358221),
    j = n(584511),
    U = n(793865),
    G = n(522651),
    B = n(795318),
    F = n(354459),
    V = n(981631),
    Z = n(65154),
    H = n(388032),
    W = n(534031),
    Y = n(423308);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = {
        width: 232,
        height: 315
    },
    J = {
        width: 232,
        height: 267
    },
    $ = 475,
    ee = 267,
    et = 128;
function en(e) {
    let { header: t } = e,
        n = w.Z.getCameraComponent(),
        o = (0, l.e7)([w.Z], () => w.Z.getVideoDeviceId()),
        a = (0, O.Z)();
    return (
        i.useEffect(() => {
            let e = D.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, v.P)(e);
                (0, y.FU)(t, o, { track: !1 }).catch(V.dG4);
            }
        }, [a, o]),
        (0, r.jsxs)('div', {
            className: W.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)('div', {
                    className: W.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: o,
                        width: $,
                        height: ee
                    })
                }),
                (0, r.jsx)('div', {
                    className: W.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function er(e) {
    let { canVideo: t, channel: n, numVideoDevices: o } = e,
        { parentAnalyticsLocation: s } = (0, m.ZP)(),
        { cameraUnavailable: l, enabled: d } = (0, I.Z)(),
        _ = (0, T.Z)(n),
        p = (0, S.Z)({ location: 'CallActionButtons' }),
        g = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: a()(W.wrapper, p ? W.experimentActions : W.actions),
        children: [
            (0, r.jsx)(N.Z, {
                iconComponent: c.Dio,
                label: H.NW.string(H.t.WAI6xs),
                className: W.actionButton,
                fullRegionButton: p,
                onClick: () => {
                    (0, G.v)(s, G.d.DISCONNECT),
                        x.default.track(
                            V.rMx.RING_CALL_DECLINED,
                            z(
                                {
                                    location: s,
                                    guild_id: n.guild_id
                                },
                                (0, h.v_)(n)
                            )
                        ),
                        u.Z.stopRinging(n.id);
                }
            }),
            t &&
                (0, r.jsx)(c.yRy, {
                    targetElementRef: g,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(U.Z, {
                            onClose: t,
                            onInteraction: (0, B.u)('VideoDeviceMenu', s, { entrypoint: F.A5.CARET })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: c.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(R.C, {
                            buttonRef: g,
                            join: !0,
                            enabled: d,
                            className: W.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: _,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: o > 1 ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                var e;
                                (0, G.v)(s, G.d.JOIN_VIDEO_CALL),
                                    x.default.track(
                                        V.rMx.RING_CALL_ACCEPTED,
                                        z(
                                            {
                                                location: s,
                                                guild_id: n.guild_id
                                            },
                                            (0, h.v_)(n)
                                        )
                                    ),
                                    f.default.selectVoiceChannel(n.id, !0),
                                    (0, b.XU)(null !== (e = n.guild_id) && void 0 !== e ? e : V.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(C.Z, {
                channel: n,
                color: 'join',
                centerButton: !0,
                onCallJoined: () =>
                    x.default.track(
                        V.rMx.RING_CALL_ACCEPTED,
                        z(
                            {
                                location: s,
                                guild_id: n.guild_id
                            },
                            (0, h.v_)(n)
                        )
                    ),
                className: W.actionButton
            })
        ]
    });
}
function ei(e) {
    var t;
    let { animatedStyle: n, y: o, x: f, channel: h } = e,
        { analyticsLocations: b } = (0, m.ZP)(p.Z.INCOMING_CALL_MODAL),
        [v, y] = i.useState(!1),
        O = (0, l.e7)([P.Z], () => P.Z.getGuild(h.guild_id)),
        I =
            null != O
                ? M.ZP.getGuildIconURL({
                      id: O.id,
                      icon: O.icon,
                      size: et
                  })
                : null,
        S = null !== (t = (0, g.x)(h, et, !0)) && void 0 !== t ? t : I,
        T = (0, E.ZP)(h),
        [A, N] = (0, l.Wu)([w.Z], () => [w.Z.supports(Z.AN.VIDEO), Object.keys(w.Z.getVideoDevices()).length]),
        C = null != O ? ''.concat(T, ', ').concat(O.name) : T,
        R = (0, l.e7)([L.Z], () => L.Z.isFocused()),
        D = (0, l.e7)([k.Z], () => k.Z.getMode(h.id)),
        x = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        U = (0, c.q_F)(
            {
                value: +!!v,
                config: Q(z({}, s.config.stiff), { clamp: !0 })
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === V.yXg.ESCAPE && u.Z.stopRinging(h.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [h]);
    let G = D === V.WtW.VIDEO && A && N > 0,
        B = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.Z, {
                    className: W.icon,
                    ringing: R,
                    src: null != S ? S : '',
                    ringingType: j.Z.RingingType.INCOMING,
                    size: v ? c.EFr.SIZE_40 : c.EFr.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: W.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: W.title,
                            color: 'header-primary',
                            variant: v ? 'text-md/semibold' : 'text-lg/semibold',
                            children: C
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: W.subtitle,
                            variant: v ? 'text-sm/normal' : 'text-md/normal',
                            children: D === V.WtW.VOICE ? H.NW.string(H.t.Js8cKy) : H.NW.string(H.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        F = G ? X : J,
        K = (0, l.e7)([L.Z], () => L.Z.windowSize());
    return (0, r.jsx)(m.Gt, {
        value: b,
        children: (0, r.jsx)(_.Z, {
            className: W.wrapper,
            selector: '.'.concat(W.root),
            initialPosition: {
                left: f,
                top: o
            },
            maxX: K.width,
            maxY: K.height,
            onDragEnd: x,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.f6W, {
                theme: v ? V.BRd.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: a()(W.root, Y.elevationHigh, { [W.previewCamera]: v }, e),
                        style: Q(z({}, n), {
                            width: U.value.interpolate([0, 1], [F.width, $]),
                            minHeight: U.value.interpolate([0, 1], [F.height, ee]),
                            translateX: U.value.interpolate([0, 1], [0, (-1 * Math.abs($ - F.width)) / 2])
                        }),
                        children: [
                            v
                                ? (0, r.jsx)(en, { header: B })
                                : (0, r.jsx)('div', {
                                      className: W.mainChannelInfo,
                                      children: B
                                  }),
                            (0, r.jsx)(er, {
                                canVideo: G,
                                channel: h,
                                numVideoDevices: N
                            }),
                            G && !v
                                ? (0, r.jsx)(c.zxk, {
                                      size: c.zxk.Sizes.SMALL,
                                      fullWidth: !0,
                                      look: c.zxk.Looks.LINK,
                                      color: c.zxk.Colors.PRIMARY,
                                      className: W.previewButton,
                                      onClick: () => y(!0),
                                      children: H.NW.string(H.t['8B0UDg'])
                                  })
                                : null
                        ]
                    })
            })
        })
    });
}
