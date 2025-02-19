n.d(t, { Z: () => X }), n(47120);
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
    p = n(249000),
    _ = n(43267),
    h = n(933557),
    m = n(703656),
    g = n(932724),
    E = n(672339),
    v = n(898531),
    b = n(923973),
    y = n(82965),
    O = n(189771),
    S = n(560688),
    I = n(88479),
    T = n(136995),
    N = n(25827),
    A = n(430824),
    C = n(131951),
    R = n(594174),
    P = n(451478),
    w = n(768581),
    D = n(358221),
    x = n(584511),
    L = n(793865),
    M = n(981631),
    k = n(65154),
    j = n(388032),
    U = n(988700),
    G = n(459918);
function B(e, t, n) {
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
function Z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = {
        width: 232,
        height: 315
    },
    W = {
        width: 232,
        height: 267
    },
    Y = 475,
    K = 267,
    z = 128;
function q(e) {
    let { header: t } = e,
        n = C.Z.getCameraComponent(),
        o = (0, l.e7)([C.Z], () => C.Z.getVideoDeviceId()),
        a = (0, v.Z)();
    return (
        i.useEffect(() => {
            let e = R.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, g.P)(e);
                (0, E.FU)(t, o, { track: !1 }).catch(M.dG4);
            }
        }, [a, o]),
        (0, r.jsxs)('div', {
            className: U.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)('div', {
                    className: U.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: o,
                        width: Y,
                        height: K
                    })
                }),
                (0, r.jsx)('div', {
                    className: U.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function Q(e) {
    let { canVideo: t, channel: n, numVideoDevices: i } = e,
        { cameraUnavailable: o, enabled: s } = (0, b.Z)(),
        l = (0, O.Z)(n),
        d = (0, y.Z)({ location: 'CallActionButtons' });
    return (0, r.jsxs)('div', {
        className: a()(U.wrapper, d ? U.experimentActions : U.actions),
        children: [
            (0, r.jsx)(I.Z, {
                iconComponent: c.Dio,
                label: j.NW.string(j.t.WAI6xs),
                className: U.actionButton,
                fullRegionButton: d,
                onClick: () => u.Z.stopRinging(n.id)
            }),
            t &&
                (0, r.jsx)(c.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(L.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: c.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: a } = e,
                            { isShown: c } = t;
                        return (0, r.jsx)(N.C, {
                            join: !0,
                            enabled: s,
                            className: U.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: l,
                            cameraUnavailable: o,
                            channel: n,
                            onPopoutClick: i > 1 ? a : null,
                            popoutOpen: c,
                            onCameraUnavailable: S.Z,
                            onChange: () => {
                                var e;
                                f.default.selectVoiceChannel(n.id, !0), (0, m.XU)(null !== (e = n.guild_id) && void 0 !== e ? e : M.ME, n.id);
                            }
                        });
                    }
                }),
            (0, r.jsx)(T.Z, {
                channel: n,
                color: 'green',
                centerButton: !0,
                className: U.actionButton
            })
        ]
    });
}
function X(e) {
    var t;
    let { animatedStyle: n, y: o, x: f, channel: m } = e,
        [g, E] = i.useState(!1),
        v = (0, l.e7)([A.Z], () => A.Z.getGuild(m.guild_id)),
        b =
            null != v
                ? w.ZP.getGuildIconURL({
                      id: v.id,
                      icon: v.icon,
                      size: z
                  })
                : null,
        y = null !== (t = (0, _.x)(m, z, !0)) && void 0 !== t ? t : b,
        O = (0, h.ZP)(m),
        [S, I] = (0, l.Wu)([C.Z], () => [C.Z.supports(k.AN.VIDEO), Object.keys(C.Z.getVideoDevices()).length]),
        T = null != v ? ''.concat(O, ', ').concat(v.name) : O,
        N = (0, l.e7)([P.Z], () => P.Z.isFocused()),
        R = (0, l.e7)([D.Z], () => D.Z.getMode(m.id)),
        L = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        B = (0, c.q_F)(
            {
                value: +!!g,
                config: V(Z({}, s.config.stiff), { clamp: !0 })
            },
            'animate-always'
        );
    i.useEffect(() => {
        let e = (e) => {
            e.keyCode === M.yXg.ESCAPE && u.Z.stopRinging(m.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [m]);
    let F = R === M.WtW.VIDEO && S && I > 0,
        X = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.Z, {
                    className: U.icon,
                    ringing: N,
                    src: null != y ? y : '',
                    ringingType: x.Z.RingingType.INCOMING,
                    size: g ? c.EFr.SIZE_40 : c.EFr.SIZE_80
                }),
                (0, r.jsxs)('div', {
                    className: U.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: U.title,
                            color: 'header-primary',
                            variant: g ? 'text-md/semibold' : 'text-lg/semibold',
                            children: T
                        }),
                        (0, r.jsx)(c.Text, {
                            color: 'header-secondary',
                            className: U.subtitle,
                            variant: g ? 'text-sm/normal' : 'text-md/normal',
                            children: R === M.WtW.VOICE ? j.NW.string(j.t.Js8cKy) : j.NW.string(j.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        J = F ? H : W,
        $ = (0, l.e7)([P.Z], () => P.Z.windowSize());
    return (0, r.jsx)(p.Z, {
        className: U.wrapper,
        selector: '.'.concat(U.root),
        initialPosition: {
            left: f,
            top: o
        },
        maxX: $.width,
        maxY: $.height,
        onDragEnd: L,
        dragAnywhere: !0,
        children: (0, r.jsx)(c.f6W, {
            theme: g ? M.BRd.DARK : void 0,
            children: (e) =>
                (0, r.jsxs)(s.animated.div, {
                    className: a()(U.root, G.elevationHigh, { [U.previewCamera]: g }, e),
                    style: V(Z({}, n), {
                        width: B.value.interpolate([0, 1], [J.width, Y]),
                        minHeight: B.value.interpolate([0, 1], [J.height, K]),
                        translateX: B.value.interpolate([0, 1], [0, (-1 * Math.abs(Y - J.width)) / 2])
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(q, { header: X })
                            : (0, r.jsx)('div', {
                                  className: U.mainChannelInfo,
                                  children: X
                              }),
                        (0, r.jsx)(Q, {
                            canVideo: F,
                            channel: m,
                            numVideoDevices: I
                        }),
                        F && !g
                            ? (0, r.jsx)(c.zxk, {
                                  size: c.zxk.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: c.zxk.Looks.LINK,
                                  color: c.zxk.Colors.PRIMARY,
                                  className: U.previewButton,
                                  onClick: () => E(!0),
                                  children: j.NW.string(j.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
