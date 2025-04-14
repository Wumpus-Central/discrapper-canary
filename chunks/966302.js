n.d(t, { Z: () => ea }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    N = n(189771),
    A = n(560688),
    C = n(88479),
    R = n(136995),
    P = n(25827),
    w = n(430824),
    D = n(131951),
    L = n(594174),
    x = n(451478),
    M = n(626135),
    k = n(768581),
    j = n(358221),
    U = n(584511),
    G = n(793865),
    B = n(522651),
    V = n(795318),
    F = n(354459),
    Z = n(981631),
    H = n(65154),
    W = n(388032),
    Y = n(138821),
    K = n(744217),
    z = n(20795);
function q(e, t, n) {
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = {
        width: 232,
        height: 315
    },
    ee = {
        width: 232,
        height: 267
    },
    et = 475,
    en = 267,
    er = 128;
function ei(e) {
    let { header: t } = e,
        n = D.Z.getCameraComponent(),
        o = (0, l.e7)([D.Z], () => D.Z.getVideoDeviceId()),
        a = (0, I.Z)();
    return (
        i.useEffect(() => {
            let e = L.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, v.P)(e);
                (0, O.FU)(t, o, { track: !1 }).catch(Z.dG4);
            }
        }, [a, o]),
        (0, r.jsxs)('div', {
            className: K.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)('div', {
                    className: K.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: o,
                        width: et,
                        height: en
                    })
                }),
                (0, r.jsx)('div', {
                    className: K.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function eo(e) {
    let { canVideo: t, channel: n, numVideoDevices: o } = e,
        { parentAnalyticsLocation: s } = (0, m.ZP)(),
        { cameraUnavailable: l, enabled: d } = (0, S.Z)(),
        _ = (0, N.Z)(n),
        p = (0, T.Z)({ location: 'CallActionButtons' }),
        g = i.useRef(null),
        E = o > 1;
    return (0, r.jsxs)('div', {
        className: a()(K.wrapper, p ? K.experimentActions : K.actions),
        children: [
            (0, r.jsx)(C.Z, {
                iconComponent: c.Dio,
                label: W.NW.string(W.t.WAI6xs),
                className: K.actionButton,
                fullRegionButton: p,
                onClick: () => {
                    (0, B.v)(s, B.d.DISCONNECT),
                        M.default.track(
                            Z.rMx.RING_CALL_DECLINED,
                            Q(
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
                        return (0, r.jsx)(G.Z, {
                            onClose: t,
                            onInteraction: (0, V.u)('VideoDeviceMenu', s, { entrypoint: F.A5.CARET })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    animation: c.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: o } = t;
                        return (0, r.jsx)(P.C, {
                            buttonRef: g,
                            join: !0,
                            enabled: d,
                            className: a()(K.actionButton, { [K.fullRegionDropdownButtonOverride]: E && p }),
                            color: 'green',
                            centerButton: !0,
                            hasPermission: _,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: E ? i : null,
                            popoutOpen: o,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                var e;
                                (0, B.v)(s, B.d.JOIN_VIDEO_CALL),
                                    M.default.track(
                                        Z.rMx.RING_CALL_ACCEPTED,
                                        Q(
                                            {
                                                location: s,
                                                guild_id: n.guild_id
                                            },
                                            (0, h.v_)(n)
                                        )
                                    ),
                                    f.default.selectVoiceChannel(n.id, !0),
                                    (0, y.XU)(null != (e = n.guild_id) ? e : Z.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(R.Z, {
                channel: n,
                color: 'join',
                centerButton: !0,
                onCallJoined: () =>
                    M.default.track(
                        Z.rMx.RING_CALL_ACCEPTED,
                        Q(
                            {
                                location: s,
                                guild_id: n.guild_id
                            },
                            (0, h.v_)(n)
                        )
                    ),
                className: K.actionButton
            })
        ]
    });
}
function ea(e) {
    var t;
    let { animatedStyle: n, y: o, x: f, channel: h } = e,
        { analyticsLocations: y } = (0, m.ZP)(p.Z.INCOMING_CALL_MODAL),
        [v, O] = i.useState(!1),
        I = (0, l.e7)([w.Z], () => w.Z.getGuild(h.guild_id)),
        S =
            null != I
                ? k.ZP.getGuildIconURL({
                      id: I.id,
                      icon: I.icon,
                      size: er
                  })
                : null,
        T = null != (t = (0, g.x)(h, er, !0)) ? t : S,
        N = (0, E.ZP)(h),
        [A, C] = (0, l.Wu)([D.Z], () => [D.Z.supports(H.AN.VIDEO), Object.keys(D.Z.getVideoDevices()).length]),
        R = null != I ? ''.concat(N, ', ').concat(I.name) : N,
        P = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        L = (0, l.e7)([j.Z], () => j.Z.getMode(h.id)),
        M = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        G = (0, c.q_F)(
            {
                value: +!!v,
                config: J(Q({}, s.config.stiff), { clamp: !0 })
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === Z.yXg.ESCAPE && u.Z.stopRinging(h.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [h]);
    let B = L === Z.WtW.VIDEO && A && C > 0,
        V = (0, r.jsxs)(r.Fragment, {
            children: [
                null != I && null == S
                    ? (0, r.jsx)('div', {
                          className: a()(K.icon, Y.wrapper, Y.ringingIncoming),
                          children: (0, r.jsx)(b.ZP, {
                              className: K.mask,
                              mask: b.QS.AVATAR_DEFAULT,
                              width: v ? 40 : 80,
                              height: v ? 40 : 80,
                              children: (0, r.jsx)('div', {
                                  className: a()(K.guildIcon, K.guildIconWithoutImage),
                                  children: (0, r.jsx)('div', {
                                      className: K.guildAcronym,
                                      children: I.acronym
                                  })
                              })
                          })
                      })
                    : (0, r.jsx)(U.Z, {
                          className: K.icon,
                          ringing: P,
                          src: null != T ? T : '',
                          ringingType: U.Z.RingingType.INCOMING,
                          size: v ? c.EFr.SIZE_40 : c.EFr.SIZE_80
                      }),
                (0, r.jsxs)('div', {
                    className: K.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: K.title,
                            color: 'header-primary',
                            variant: v ? 'text-md/semibold' : 'text-lg/semibold',
                            children: R
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: K.subtitle,
                            variant: v ? 'text-sm/normal' : 'text-md/normal',
                            children: L === Z.WtW.VOICE ? W.NW.string(W.t.Js8cKy) : W.NW.string(W.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        F = B ? $ : ee,
        q = (0, l.e7)([x.Z], () => x.Z.windowSize());
    return (0, r.jsx)(m.Gt, {
        value: y,
        children: (0, r.jsx)(_.Z, {
            className: K.wrapper,
            selector: '.'.concat(K.root),
            initialPosition: {
                left: f,
                top: o
            },
            maxX: q.width,
            maxY: q.height,
            onDragEnd: M,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.f6W, {
                theme: v ? Z.BRd.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: a()(K.root, z.elevationHigh, { [K.previewCamera]: v }, e),
                        style: J(Q({}, n), {
                            width: G.value.interpolate([0, 1], [F.width, et]),
                            minHeight: G.value.interpolate([0, 1], [F.height, en]),
                            translateX: G.value.interpolate([0, 1], [0, (-1 * Math.abs(et - F.width)) / 2])
                        }),
                        children: [
                            v
                                ? (0, r.jsx)(ei, { header: V })
                                : (0, r.jsx)('div', {
                                      className: K.mainChannelInfo,
                                      children: V
                                  }),
                            (0, r.jsx)(eo, {
                                canVideo: B,
                                channel: h,
                                numVideoDevices: C
                            }),
                            B && !v
                                ? (0, r.jsx)(c.zxk, {
                                      size: c.zxk.Sizes.SMALL,
                                      fullWidth: !0,
                                      look: c.zxk.Looks.LINK,
                                      color: c.zxk.Colors.PRIMARY,
                                      className: K.previewButton,
                                      onClick: () => O(!0),
                                      children: W.NW.string(W.t['8B0UDg'])
                                  })
                                : null
                        ]
                    })
            })
        })
    });
}
