n.d(t, { Z: () => es }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(200100),
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
    b = n(686546),
    y = n(703656),
    v = n(932724),
    O = n(672339),
    I = n(898531),
    S = n(923973),
    T = n(82965),
    A = n(189771),
    N = n(560688),
    C = n(88479),
    R = n(136995),
    P = n(25827),
    w = n(163612),
    D = n(430824),
    L = n(131951),
    x = n(594174),
    M = n(451478),
    k = n(626135),
    j = n(768581),
    U = n(358221),
    G = n(584511),
    B = n(793865),
    V = n(522651),
    F = n(795318),
    Z = n(354459),
    H = n(981631),
    Y = n(65154),
    W = n(388032),
    K = n(138821),
    z = n(744217),
    q = n(20795);
function Q(e, t, n) {
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
function X(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = {
        width: 232,
        height: 315
    },
    et = {
        width: 232,
        height: 267
    },
    en = 475,
    er = 267,
    ei = 128;
function ea(e) {
    let { header: t } = e,
        n = L.Z.getCameraComponent(),
        a = (0, l.e7)([L.Z], () => L.Z.getVideoDeviceId()),
        o = (0, I.Z)();
    return (
        i.useEffect(() => {
            let e = x.default.getCurrentUser();
            if (o && null != e) {
                let t = (0, v.P)(e);
                (0, O.FU)(t, a, { track: !1 }).catch(H.dG4);
            }
        }, [o, a]),
        (0, r.jsxs)('div', {
            className: z.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)('div', {
                    className: z.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: en,
                        height: er
                    })
                }),
                (0, r.jsx)('div', {
                    className: z.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function eo(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: s } = (0, m.ZP)(),
        { cameraUnavailable: l, enabled: d } = (0, S.Z)(),
        _ = (0, A.Z)(n),
        p = (0, T.Z)({ location: 'CallActionButtons' }),
        g = i.useRef(null),
        E = a > 1;
    return (0, r.jsxs)('div', {
        className: o()(z.wrapper, p ? z.experimentActions : z.actions),
        children: [
            (0, r.jsx)(C.Z, {
                iconComponent: c.Dio,
                label: W.intl.string(W.t.WAI6xs),
                className: z.actionButton,
                fullRegionButton: p,
                onClick: () => {
                    (0, V.v)(s, V.d.DISCONNECT),
                        k.default.track(
                            H.rMx.RING_CALL_DECLINED,
                            X(
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
                        return (0, r.jsx)(B.Z, {
                            onClose: t,
                            onInteraction: (0, F.u)('VideoDeviceMenu', s, { entrypoint: Z.A5.CARET })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: c.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(P.C, {
                            buttonRef: g,
                            join: !0,
                            enabled: d,
                            className: o()(z.actionButton, { [z.fullRegionDropdownButtonOverride]: E && p }),
                            color: 'green',
                            centerButton: !0,
                            hasPermission: _,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: E ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: N.Z,
                            onChange: () => {
                                var e;
                                (0, V.v)(s, V.d.JOIN_VIDEO_CALL),
                                    k.default.track(
                                        H.rMx.RING_CALL_ACCEPTED,
                                        X(
                                            {
                                                location: s,
                                                guild_id: n.guild_id
                                            },
                                            (0, h.v_)(n)
                                        )
                                    ),
                                    f.default.selectVoiceChannel(n.id, !0),
                                    (0, y.XU)(null != (e = n.guild_id) ? e : H.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(R.Z, {
                channel: n,
                color: 'join',
                centerButton: !0,
                onCallJoined: () =>
                    k.default.track(
                        H.rMx.RING_CALL_ACCEPTED,
                        X(
                            {
                                location: s,
                                guild_id: n.guild_id
                            },
                            (0, h.v_)(n)
                        )
                    ),
                className: z.actionButton
            })
        ]
    });
}
function es(e) {
    var t;
    let { animatedStyle: n, y: a, x: f, channel: h } = e,
        { analyticsLocations: y } = (0, m.ZP)(p.Z.INCOMING_CALL_MODAL),
        [v, O] = i.useState(!1),
        I = (0, l.e7)([D.Z], () => D.Z.getGuild(h.guild_id)),
        S =
            null != I
                ? j.ZP.getGuildIconURL({
                      id: I.id,
                      icon: I.icon,
                      size: ei
                  })
                : null,
        T = null != (t = (0, g.x)(h, ei, !0)) ? t : S,
        A = (0, E.ZP)(h),
        [N, C] = (0, l.Wu)([L.Z], () => [L.Z.supports(Y.AN.VIDEO), Object.keys(L.Z.getVideoDevices()).length]),
        R = null != I ? ''.concat(A, ', ').concat(I.name) : A,
        P = (0, l.e7)([M.Z], () => M.Z.isFocused()),
        x = (0, l.e7)([U.Z], () => U.Z.getMode(h.id)),
        k = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        B = (0, c.q_F)(
            {
                value: +!!v,
                config: $(X({}, s.config.stiff), { clamp: !0 })
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === H.yXg.ESCAPE && u.Z.stopRinging(h.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [h]);
    let V = x === H.WtW.VIDEO && N && C > 0,
        { enabled: F } = w.Z.useExperiment({
            guildId: null == h ? void 0 : h.guild_id,
            location: 'IncomingCallModal'
        }),
        Z = x === H.WtW.VOICE || (F && h.type === H.d4z.GUILD_VOICE) ? W.intl.string(W.t.Js8cKy) : W.intl.string(W.t.KcnWCA),
        Q = (0, r.jsxs)(r.Fragment, {
            children: [
                null != I && null == S
                    ? (0, r.jsx)('div', {
                          className: o()(z.icon, K.wrapper, K.ringingIncoming),
                          children: (0, r.jsx)(b.ZP, {
                              className: z.mask,
                              mask: b.QS.AVATAR_DEFAULT,
                              width: v ? 40 : 80,
                              height: v ? 40 : 80,
                              children: (0, r.jsx)('div', {
                                  className: o()(z.guildIcon, z.guildIconWithoutImage),
                                  children: (0, r.jsx)('div', {
                                      className: z.guildAcronym,
                                      children: I.acronym
                                  })
                              })
                          })
                      })
                    : (0, r.jsx)(G.Z, {
                          className: z.icon,
                          ringing: P,
                          src: null != T ? T : '',
                          ringingType: G.Z.RingingType.INCOMING,
                          size: v ? c.EFr.SIZE_40 : c.EFr.SIZE_80
                      }),
                (0, r.jsxs)('div', {
                    className: z.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: z.title,
                            color: 'header-primary',
                            variant: v ? 'text-md/semibold' : 'text-lg/semibold',
                            children: R
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: z.subtitle,
                            variant: v ? 'text-sm/normal' : 'text-md/normal',
                            children: Z
                        })
                    ]
                })
            ]
        }),
        J = V ? ee : et,
        es = (0, l.e7)([M.Z], () => M.Z.windowSize());
    return (0, r.jsx)(m.Gt, {
        value: y,
        children: (0, r.jsx)(_.Z, {
            className: z.wrapper,
            selector: '.'.concat(z.root),
            initialPosition: {
                left: f,
                top: a
            },
            maxX: es.width,
            maxY: es.height,
            onDragEnd: k,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.f6W, {
                theme: v ? H.BRd.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: o()(z.root, q.elevationHigh, { [z.previewCamera]: v }, e),
                        style: $(X({}, n), {
                            width: B.value.interpolate([0, 1], [J.width, en]),
                            minHeight: B.value.interpolate([0, 1], [J.height, er]),
                            translateX: B.value.interpolate([0, 1], [0, (-1 * Math.abs(en - J.width)) / 2])
                        }),
                        children: [
                            v
                                ? (0, r.jsx)(ea, { header: Q })
                                : (0, r.jsx)('div', {
                                      className: z.mainChannelInfo,
                                      children: Q
                                  }),
                            (0, r.jsx)(eo, {
                                canVideo: V,
                                channel: h,
                                numVideoDevices: C
                            }),
                            V && !v
                                ? (0, r.jsx)(c.zxk, {
                                      size: c.zxk.Sizes.SMALL,
                                      fullWidth: !0,
                                      look: c.zxk.Looks.LINK,
                                      color: c.zxk.Colors.PRIMARY,
                                      className: z.previewButton,
                                      onClick: () => O(!0),
                                      children: W.intl.string(W.t['8B0UDg'])
                                  })
                                : null
                        ]
                    })
            })
        })
    });
}
