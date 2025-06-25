n.d(t, { Z: () => eo }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(695469),
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
    O = n(932724),
    v = n(672339),
    I = n(898531),
    T = n(923973),
    S = n(189771),
    A = n(560688),
    N = n(88479),
    C = n(136995),
    R = n(25827),
    P = n(163612),
    w = n(430824),
    D = n(131951),
    L = n(594174),
    x = n(451478),
    k = n(626135),
    M = n(768581),
    j = n(358221),
    U = n(584511),
    G = n(793865),
    B = n(522651),
    V = n(795318),
    F = n(354459),
    Z = n(981631),
    H = n(65154),
    Y = n(388032),
    W = n(138821),
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
            : Q(Object(t)).forEach(function (n) {
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
        a = (0, l.e7)([D.Z], () => D.Z.getVideoDeviceId()),
        o = (0, I.Z)();
    return (
        i.useEffect(() => {
            let e = L.default.getCurrentUser();
            if (o && null != e) {
                let t = (0, O.P)(e);
                (0, v.FU)(t, a, { track: !1 }).catch(Z.dG4);
            }
        }, [o, a]),
        (0, r.jsxs)('div', {
            className: K.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)('div', {
                    className: K.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
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
function ea(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: s } = (0, m.ZP)(),
        { cameraUnavailable: l, enabled: d } = (0, T.Z)(),
        _ = (0, S.Z)(n),
        p = i.useRef(null),
        g = a > 1;
    return (0, r.jsxs)('div', {
        className: o()(K.wrapper, K.actions),
        children: [
            (0, r.jsx)(N.Z, {
                iconComponent: c.Dio,
                label: Y.intl.string(Y.t.WAI6xs),
                className: K.actionButton,
                onClick: () => {
                    (0, B.v)(s, B.d.DISCONNECT),
                        k.default.track(
                            Z.rMx.RING_CALL_DECLINED,
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
                    targetElementRef: p,
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
                            { isShown: a } = t;
                        return (0, r.jsx)(R.C, {
                            buttonRef: p,
                            join: !0,
                            enabled: d,
                            className: o()(K.actionButton, { [K.fullRegionDropdownButtonOverride]: g }),
                            color: 'green',
                            centerButton: !0,
                            hasPermission: _,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: g ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                var e;
                                (0, B.v)(s, B.d.JOIN_VIDEO_CALL),
                                    k.default.track(
                                        Z.rMx.RING_CALL_ACCEPTED,
                                        X(
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
            (0, r.jsx)(C.Z, {
                channel: n,
                color: 'join',
                centerButton: !0,
                onCallJoined: () =>
                    k.default.track(
                        Z.rMx.RING_CALL_ACCEPTED,
                        X(
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
function eo(e) {
    var t;
    let { animatedStyle: n, y: a, x: f, channel: h } = e,
        { analyticsLocations: y } = (0, m.ZP)(p.Z.INCOMING_CALL_MODAL),
        [O, v] = i.useState(!1),
        I = (0, l.e7)([w.Z], () => w.Z.getGuild(h.guild_id)),
        T =
            null != I
                ? M.ZP.getGuildIconURL({
                      id: I.id,
                      icon: I.icon,
                      size: er
                  })
                : null,
        S = null != (t = (0, g.x)(h, er, !0)) ? t : T,
        A = (0, E.ZP)(h),
        [N, C] = (0, l.Wu)([D.Z], () => [D.Z.supports(H.AN.VIDEO), Object.keys(D.Z.getVideoDevices()).length]),
        R = null != I ? ''.concat(A, ', ').concat(I.name) : A,
        L = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        k = (0, l.e7)([j.Z], () => j.Z.getMode(h.id)),
        G = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        B = (0, c.q_F)(
            {
                value: +!!O,
                config: J(X({}, s.config.stiff), { clamp: !0 })
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === Z.yXg.ESCAPE && u.Z.stopRinging(h.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [h]);
    let V = k === Z.WtW.VIDEO && N && C > 0,
        { enabled: F } = P.Z.useExperiment({
            guildId: null == h ? void 0 : h.guild_id,
            location: 'IncomingCallModal'
        }),
        q = k === Z.WtW.VOICE || (F && h.type === Z.d4z.GUILD_VOICE) ? Y.intl.string(Y.t.Js8cKy) : Y.intl.string(Y.t.KcnWCA),
        Q = (0, r.jsxs)(r.Fragment, {
            children: [
                null != I && null == T
                    ? (0, r.jsx)('div', {
                          className: o()(K.icon, W.wrapper, W.ringingIncoming),
                          children: (0, r.jsx)(b.ZP, {
                              className: K.mask,
                              mask: b.QS.AVATAR_DEFAULT,
                              width: O ? 40 : 80,
                              height: O ? 40 : 80,
                              children: (0, r.jsx)('div', {
                                  className: o()(K.guildIcon, K.guildIconWithoutImage),
                                  children: (0, r.jsx)('div', {
                                      className: K.guildAcronym,
                                      children: I.acronym
                                  })
                              })
                          })
                      })
                    : (0, r.jsx)(U.Z, {
                          className: K.icon,
                          ringing: L,
                          src: null != S ? S : '',
                          ringingType: U.Z.RingingType.INCOMING,
                          size: O ? c.EFr.SIZE_40 : c.EFr.SIZE_80
                      }),
                (0, r.jsxs)('div', {
                    className: K.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: K.title,
                            color: 'header-primary',
                            variant: O ? 'text-md/semibold' : 'text-lg/semibold',
                            children: R
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: K.subtitle,
                            variant: O ? 'text-sm/normal' : 'text-md/normal',
                            children: q
                        })
                    ]
                })
            ]
        }),
        eo = V ? $ : ee,
        es = (0, l.e7)([x.Z], () => x.Z.windowSize());
    return (0, r.jsx)(m.Gt, {
        value: y,
        children: (0, r.jsx)(_.Z, {
            className: K.wrapper,
            selector: '.'.concat(K.root),
            initialPosition: {
                left: f,
                top: a
            },
            maxX: es.width,
            maxY: es.height,
            onDragEnd: G,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.f6W, {
                theme: O ? Z.BRd.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: o()(K.root, z.elevationHigh, { [K.previewCamera]: O }, e),
                        style: J(X({}, n), {
                            width: B.value.interpolate([0, 1], [eo.width, et]),
                            minHeight: B.value.interpolate([0, 1], [eo.height, en]),
                            translateX: B.value.interpolate([0, 1], [0, (-1 * Math.abs(et - eo.width)) / 2])
                        }),
                        children: [
                            O
                                ? (0, r.jsx)(ei, { header: Q })
                                : (0, r.jsx)('div', {
                                      className: K.mainChannelInfo,
                                      children: Q
                                  }),
                            (0, r.jsx)(ea, {
                                canVideo: V,
                                channel: h,
                                numVideoDevices: C
                            }),
                            V && !O
                                ? (0, r.jsx)(c.zxk, {
                                      size: c.zxk.Sizes.SMALL,
                                      fullWidth: !0,
                                      look: c.zxk.Looks.LINK,
                                      color: c.zxk.Colors.PRIMARY,
                                      className: K.previewButton,
                                      onClick: () => v(!0),
                                      children: Y.intl.string(Y.t['8B0UDg'])
                                  })
                                : null
                        ]
                    })
            })
        })
    });
}
