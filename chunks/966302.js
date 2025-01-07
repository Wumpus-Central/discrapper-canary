r.d(n, {
    Z: function () {
        return W;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(442837),
    d = r(481060),
    f = r(26151),
    _ = r(922555),
    h = r(287734),
    p = r(249000),
    m = r(43267),
    g = r(933557),
    E = r(703656),
    v = r(932724),
    I = r(672339),
    T = r(898531),
    b = r(861254),
    y = r(923973),
    S = r(189771),
    A = r(560688),
    N = r(88479),
    C = r(136995),
    R = r(25827),
    O = r(131951),
    D = r(594174),
    L = r(451478),
    x = r(358221),
    w = r(584511),
    P = r(793865),
    M = r(981631),
    k = r(65154),
    U = r(388032),
    B = r(622492),
    G = r(616926);
let Z = {
        width: 232,
        height: 315
    },
    F = {
        width: 232,
        height: 267
    },
    V = 475,
    j = 267;
function H(e) {
    let { header: n } = e,
        r = O.Z.getCameraComponent(),
        i = (0, c.e7)([O.Z], () => O.Z.getVideoDeviceId()),
        o = (0, T.Z)();
    return (
        s.useEffect(() => {
            let e = D.default.getCurrentUser();
            if (o && null != e) {
                let n = (0, v.P)(e);
                (0, I.FU)(n, i, { track: !1 }).catch(M.dG4);
            }
        }, [o, i]),
        (0, a.jsxs)('div', {
            className: B.previewRoot,
            children: [
                (0, a.jsx)(d.Spinner, {}),
                (0, a.jsx)('div', {
                    className: B.preview,
                    children: (0, a.jsx)(r, {
                        disabled: !1,
                        deviceId: i,
                        width: V,
                        height: j
                    })
                }),
                (0, a.jsx)('div', {
                    className: B.previewChannelHeader,
                    children: n
                })
            ]
        })
    );
}
function Y(e) {
    let { canVideo: n, channel: r, numVideoDevices: i } = e,
        { cameraUnavailable: s, enabled: o } = (0, y.Z)(),
        u = (0, S.Z)(r),
        { groupedButtons: c } = (0, b.ZP)({ location: 'CallActionButtons' });
    return (0, a.jsxs)('div', {
        className: l()(B.wrapper, c ? B.experimentActions : B.actions),
        children: [
            (0, a.jsx)(N.Z, {
                iconComponent: d.XSmallIcon,
                label: U.intl.string(U.t.WAI6xs),
                className: B.actionButton,
                fullRegionButton: c,
                onClick: () => f.Z.stopRinging(r.id)
            }),
            n &&
                (0, a.jsx)(d.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, a.jsx)(P.Z, { onClose: n });
                    },
                    position: 'top',
                    align: 'center',
                    animation: d.Popout.Animation.FADE,
                    children: (e, n) => {
                        let { onClick: l } = e,
                            { isShown: c } = n;
                        return (0, a.jsx)(R.C, {
                            join: !0,
                            enabled: o,
                            className: B.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: u,
                            cameraUnavailable: s,
                            channel: r,
                            onPopoutClick: i > 1 ? l : null,
                            popoutOpen: c,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                h.default.selectVoiceChannel(r.id, !0), (0, E.XU)(M.ME, r.id);
                            }
                        });
                    }
                }),
            (0, a.jsx)(C.Z, {
                channel: r,
                color: 'green',
                centerButton: !0,
                className: B.actionButton
            })
        ]
    });
}
function W(e) {
    let { animatedStyle: n, y: r, x: i, channel: o } = e,
        [h, E] = s.useState(!1),
        v = (0, m.x)(o, 128, !0),
        I = (0, g.ZP)(o),
        [T, b] = (0, c.Wu)([O.Z], () => [O.Z.supports(k.AN.VIDEO), Object.keys(O.Z.getVideoDevices()).length]),
        y = (0, c.e7)([L.Z], () => L.Z.isFocused()),
        S = (0, c.e7)([x.Z], () => x.Z.getMode(o.id)),
        A = s.useCallback((e) => {
            null != e.top && null != e.left && _.Z.move(e.left, e.top);
        }, []),
        N = (0, d.useSpring)(
            {
                value: h ? 1 : 0,
                config: {
                    ...u.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        );
    s.useEffect(() => {
        let e = (e) => {
            e.keyCode === M.yXg.ESCAPE && f.Z.stopRinging(o.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [o]);
    let C = S === M.WtW.VIDEO && T && b > 0,
        R = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(w.Z, {
                    className: B.icon,
                    ringing: y,
                    src: null != v ? v : '',
                    ringingType: w.Z.RingingType.INCOMING,
                    size: h ? d.AvatarSizes.SIZE_40 : d.AvatarSizes.SIZE_80
                }),
                (0, a.jsxs)('div', {
                    className: B.titleGroup,
                    children: [
                        (0, a.jsx)(d.Text, {
                            className: B.title,
                            color: 'header-primary',
                            variant: h ? 'text-md/semibold' : 'text-lg/semibold',
                            children: I
                        }),
                        (0, a.jsx)(d.Text, {
                            color: 'header-secondary',
                            className: B.subtitle,
                            variant: h ? 'text-sm/normal' : 'text-md/normal',
                            children: S === M.WtW.VOICE ? U.intl.string(U.t.Js8cKy) : U.intl.string(U.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        D = C ? Z : F,
        P = (0, c.e7)([L.Z], () => L.Z.windowSize());
    return (0, a.jsx)(p.Z, {
        className: B.wrapper,
        selector: '.'.concat(B.root),
        initialPosition: {
            left: i,
            top: r
        },
        maxX: P.width,
        maxY: P.height,
        onDragEnd: A,
        dragAnywhere: !0,
        children: (0, a.jsx)(d.ThemeProvider, {
            theme: h ? M.BRd.DARK : void 0,
            children: (e) =>
                (0, a.jsxs)(u.animated.div, {
                    className: l()(B.root, G.elevationHigh, { [B.previewCamera]: h }, e),
                    style: {
                        ...n,
                        width: N.value.interpolate([0, 1], [D.width, V]),
                        minHeight: N.value.interpolate([0, 1], [D.height, j]),
                        translateX: N.value.interpolate([0, 1], [0, (-1 * Math.abs(V - D.width)) / 2])
                    },
                    children: [
                        h
                            ? (0, a.jsx)(H, { header: R })
                            : (0, a.jsx)('div', {
                                  className: B.mainChannelInfo,
                                  children: R
                              }),
                        (0, a.jsx)(Y, {
                            canVideo: C,
                            channel: o,
                            numVideoDevices: b
                        }),
                        C && !h
                            ? (0, a.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: d.Button.Looks.LINK,
                                  color: d.Button.Colors.PRIMARY,
                                  className: B.previewButton,
                                  onClick: () => E(!0),
                                  children: U.intl.string(U.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
