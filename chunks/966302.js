n.d(t, { Z: () => K }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(442837),
    u = n(481060),
    c = n(26151),
    d = n(922555),
    f = n(287734),
    _ = n(249000),
    p = n(43267),
    h = n(933557),
    m = n(703656),
    g = n(932724),
    E = n(672339),
    v = n(898531),
    y = n(861254),
    I = n(923973),
    T = n(189771),
    b = n(560688),
    S = n(88479),
    A = n(136995),
    N = n(25827),
    C = n(430824),
    R = n(131951),
    O = n(594174),
    D = n(451478),
    L = n(768581),
    x = n(358221),
    P = n(584511),
    w = n(793865),
    M = n(981631),
    k = n(65154),
    U = n(388032),
    G = n(344763),
    B = n(801919);
let Z = {
        width: 232,
        height: 315
    },
    F = {
        width: 232,
        height: 267
    },
    V = 475,
    j = 267,
    H = 128;
function Y(e) {
    let { header: t } = e,
        n = R.Z.getCameraComponent(),
        a = (0, l.e7)([R.Z], () => R.Z.getVideoDeviceId()),
        s = (0, v.Z)();
    return (
        r.useEffect(() => {
            let e = O.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, g.P)(e);
                (0, E.FU)(t, a, { track: !1 }).catch(M.dG4);
            }
        }, [s, a]),
        (0, i.jsxs)('div', {
            className: G.previewRoot,
            children: [
                (0, i.jsx)(u.$jN, {}),
                (0, i.jsx)('div', {
                    className: G.preview,
                    children: (0, i.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: V,
                        height: j
                    })
                }),
                (0, i.jsx)('div', {
                    className: G.previewChannelHeader,
                    children: t
                })
            ]
        })
    );
}
function W(e) {
    let { canVideo: t, channel: n, numVideoDevices: r } = e,
        { cameraUnavailable: a, enabled: o } = (0, I.Z)(),
        l = (0, T.Z)(n),
        { groupedButtons: d } = (0, y.ZP)({ location: 'CallActionButtons' });
    return (0, i.jsxs)('div', {
        className: s()(G.wrapper, d ? G.experimentActions : G.actions),
        children: [
            (0, i.jsx)(S.Z, {
                iconComponent: u.Dio,
                label: U.intl.string(U.t.WAI6xs),
                className: G.actionButton,
                fullRegionButton: d,
                onClick: () => c.Z.stopRinging(n.id)
            }),
            t &&
                (0, i.jsx)(u.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(w.Z, { onClose: t });
                    },
                    position: 'top',
                    align: 'center',
                    animation: u.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: s } = e,
                            { isShown: u } = t;
                        return (0, i.jsx)(N.C, {
                            join: !0,
                            enabled: o,
                            className: G.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: l,
                            cameraUnavailable: a,
                            channel: n,
                            onPopoutClick: r > 1 ? s : null,
                            popoutOpen: u,
                            onCameraUnavailable: b.Z,
                            onChange: () => {
                                var e;
                                f.default.selectVoiceChannel(n.id, !0), (0, m.XU)(null !== (e = n.guild_id) && void 0 !== e ? e : M.ME, n.id);
                            }
                        });
                    }
                }),
            (0, i.jsx)(A.Z, {
                channel: n,
                color: 'green',
                centerButton: !0,
                className: G.actionButton
            })
        ]
    });
}
function K(e) {
    var t;
    let { animatedStyle: n, y: a, x: f, channel: m } = e,
        [g, E] = r.useState(!1),
        v = (0, l.e7)([C.Z], () => C.Z.getGuild(m.guild_id)),
        y =
            null != v
                ? L.ZP.getGuildIconURL({
                      id: v.id,
                      icon: v.icon,
                      size: H
                  })
                : null,
        I = null !== (t = (0, p.x)(m, H, !0)) && void 0 !== t ? t : y,
        T = (0, h.ZP)(m),
        [b, S] = (0, l.Wu)([R.Z], () => [R.Z.supports(k.AN.VIDEO), Object.keys(R.Z.getVideoDevices()).length]),
        A = null != v ? ''.concat(T, ', ').concat(v.name) : T,
        N = (0, l.e7)([D.Z], () => D.Z.isFocused()),
        O = (0, l.e7)([x.Z], () => x.Z.getMode(m.id)),
        w = r.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        K = (0, u.q_F)(
            {
                value: g ? 1 : 0,
                config: {
                    ...o.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        );
    r.useEffect(() => {
        let e = (e) => {
            e.keyCode === M.yXg.ESCAPE && c.Z.stopRinging(m.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [m]);
    let z = O === M.WtW.VIDEO && b && S > 0,
        q = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(P.Z, {
                    className: G.icon,
                    ringing: N,
                    src: null != I ? I : '',
                    ringingType: P.Z.RingingType.INCOMING,
                    size: g ? u.EFr.SIZE_40 : u.EFr.SIZE_80
                }),
                (0, i.jsxs)('div', {
                    className: G.titleGroup,
                    children: [
                        (0, i.jsx)(u.Text, {
                            className: G.title,
                            color: 'header-primary',
                            variant: g ? 'text-md/semibold' : 'text-lg/semibold',
                            children: A
                        }),
                        (0, i.jsx)(u.Text, {
                            color: 'header-secondary',
                            className: G.subtitle,
                            variant: g ? 'text-sm/normal' : 'text-md/normal',
                            children: O === M.WtW.VOICE ? U.intl.string(U.t.Js8cKy) : U.intl.string(U.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        Q = z ? Z : F,
        X = (0, l.e7)([D.Z], () => D.Z.windowSize());
    return (0, i.jsx)(_.Z, {
        className: G.wrapper,
        selector: '.'.concat(G.root),
        initialPosition: {
            left: f,
            top: a
        },
        maxX: X.width,
        maxY: X.height,
        onDragEnd: w,
        dragAnywhere: !0,
        children: (0, i.jsx)(u.f6W, {
            theme: g ? M.BRd.DARK : void 0,
            children: (e) =>
                (0, i.jsxs)(o.animated.div, {
                    className: s()(G.root, B.elevationHigh, { [G.previewCamera]: g }, e),
                    style: {
                        ...n,
                        width: K.value.interpolate([0, 1], [Q.width, V]),
                        minHeight: K.value.interpolate([0, 1], [Q.height, j]),
                        translateX: K.value.interpolate([0, 1], [0, (-1 * Math.abs(V - Q.width)) / 2])
                    },
                    children: [
                        g
                            ? (0, i.jsx)(Y, { header: q })
                            : (0, i.jsx)('div', {
                                  className: G.mainChannelInfo,
                                  children: q
                              }),
                        (0, i.jsx)(W, {
                            canVideo: z,
                            channel: m,
                            numVideoDevices: S
                        }),
                        z && !g
                            ? (0, i.jsx)(u.zxk, {
                                  size: u.zxk.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: u.zxk.Looks.LINK,
                                  color: u.zxk.Colors.PRIMARY,
                                  className: G.previewButton,
                                  onClick: () => E(!0),
                                  children: U.intl.string(U.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
