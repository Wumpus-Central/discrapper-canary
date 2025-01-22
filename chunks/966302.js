r.d(n, {
    Z: function () {
        return z;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(442837),
    d = r(481060),
    f = r(26151),
    p = r(922555),
    h = r(287734),
    _ = r(249000),
    m = r(43267),
    g = r(933557),
    E = r(703656),
    v = r(932724),
    y = r(672339),
    b = r(898531),
    I = r(861254),
    T = r(923973),
    S = r(189771),
    A = r(560688),
    C = r(88479),
    N = r(136995),
    R = r(25827),
    O = r(430824),
    D = r(131951),
    x = r(594174),
    L = r(451478),
    w = r(768581),
    P = r(358221),
    M = r(584511),
    k = r(793865),
    U = r(981631),
    B = r(65154),
    G = r(388032),
    Z = r(622492),
    F = r(616926);
let V = {
        width: 232,
        height: 315
    },
    j = {
        width: 232,
        height: 267
    },
    H = 475,
    Y = 267;
function W(e) {
    let { header: n } = e,
        r = D.Z.getCameraComponent(),
        i = (0, c.e7)([D.Z], () => D.Z.getVideoDeviceId()),
        s = (0, b.Z)();
    return (
        o.useEffect(() => {
            let e = x.default.getCurrentUser();
            if (s && null != e) {
                let n = (0, v.P)(e);
                (0, y.FU)(n, i, { track: !1 }).catch(U.dG4);
            }
        }, [s, i]),
        (0, a.jsxs)('div', {
            className: Z.previewRoot,
            children: [
                (0, a.jsx)(d.Spinner, {}),
                (0, a.jsx)('div', {
                    className: Z.preview,
                    children: (0, a.jsx)(r, {
                        disabled: !1,
                        deviceId: i,
                        width: H,
                        height: Y
                    })
                }),
                (0, a.jsx)('div', {
                    className: Z.previewChannelHeader,
                    children: n
                })
            ]
        })
    );
}
function K(e) {
    let { canVideo: n, channel: r, numVideoDevices: i } = e,
        { cameraUnavailable: o, enabled: s } = (0, T.Z)(),
        u = (0, S.Z)(r),
        { groupedButtons: c } = (0, I.ZP)({ location: 'CallActionButtons' });
    return (0, a.jsxs)('div', {
        className: l()(Z.wrapper, c ? Z.experimentActions : Z.actions),
        children: [
            (0, a.jsx)(C.Z, {
                iconComponent: d.XSmallIcon,
                label: G.intl.string(G.t.WAI6xs),
                className: Z.actionButton,
                fullRegionButton: c,
                onClick: () => f.Z.stopRinging(r.id)
            }),
            n &&
                (0, a.jsx)(d.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, a.jsx)(k.Z, { onClose: n });
                    },
                    position: 'top',
                    align: 'center',
                    animation: d.Popout.Animation.FADE,
                    children: (e, n) => {
                        let { onClick: l } = e,
                            { isShown: c } = n;
                        return (0, a.jsx)(R.C, {
                            join: !0,
                            enabled: s,
                            className: Z.actionButton,
                            color: 'green',
                            centerButton: !0,
                            hasPermission: u,
                            cameraUnavailable: o,
                            channel: r,
                            onPopoutClick: i > 1 ? l : null,
                            popoutOpen: c,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                var e;
                                h.default.selectVoiceChannel(r.id, !0), (0, E.XU)(null !== (e = r.guild_id) && void 0 !== e ? e : U.ME, r.id);
                            }
                        });
                    }
                }),
            (0, a.jsx)(N.Z, {
                channel: r,
                color: 'green',
                centerButton: !0,
                className: Z.actionButton
            })
        ]
    });
}
function z(e) {
    var n;
    let { animatedStyle: r, y: i, x: s, channel: h } = e,
        [E, v] = o.useState(!1),
        y = (0, c.e7)([O.Z], () => O.Z.getGuild(h.guild_id)),
        b =
            null != y
                ? w.ZP.getGuildIconURL({
                      id: y.id,
                      icon: y.icon,
                      size: 40
                  })
                : null,
        I = null !== (n = (0, m.x)(h, 128, !0)) && void 0 !== n ? n : b,
        T = (0, g.ZP)(h),
        [S, A] = (0, c.Wu)([D.Z], () => [D.Z.supports(B.AN.VIDEO), Object.keys(D.Z.getVideoDevices()).length]),
        C = null != y ? ''.concat(T, ', ').concat(y.name) : T,
        N = (0, c.e7)([L.Z], () => L.Z.isFocused()),
        R = (0, c.e7)([P.Z], () => P.Z.getMode(h.id)),
        x = o.useCallback((e) => {
            null != e.top && null != e.left && p.Z.move(e.left, e.top);
        }, []),
        k = (0, d.useSpring)(
            {
                value: E ? 1 : 0,
                config: {
                    ...u.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        );
    o.useEffect(() => {
        let e = (e) => {
            e.keyCode === U.yXg.ESCAPE && f.Z.stopRinging(h.id);
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [h]);
    let z = R === U.WtW.VIDEO && S && A > 0,
        q = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(M.Z, {
                    className: Z.icon,
                    ringing: N,
                    src: null != I ? I : '',
                    ringingType: M.Z.RingingType.INCOMING,
                    size: E ? d.AvatarSizes.SIZE_40 : d.AvatarSizes.SIZE_80
                }),
                (0, a.jsxs)('div', {
                    className: Z.titleGroup,
                    children: [
                        (0, a.jsx)(d.Text, {
                            className: Z.title,
                            color: 'header-primary',
                            variant: E ? 'text-md/semibold' : 'text-lg/semibold',
                            children: C
                        }),
                        (0, a.jsx)(d.Text, {
                            color: 'header-secondary',
                            className: Z.subtitle,
                            variant: E ? 'text-sm/normal' : 'text-md/normal',
                            children: R === U.WtW.VOICE ? G.intl.string(G.t.Js8cKy) : G.intl.string(G.t.KcnWCA)
                        })
                    ]
                })
            ]
        }),
        Q = z ? V : j,
        X = (0, c.e7)([L.Z], () => L.Z.windowSize());
    return (0, a.jsx)(_.Z, {
        className: Z.wrapper,
        selector: '.'.concat(Z.root),
        initialPosition: {
            left: s,
            top: i
        },
        maxX: X.width,
        maxY: X.height,
        onDragEnd: x,
        dragAnywhere: !0,
        children: (0, a.jsx)(d.ThemeProvider, {
            theme: E ? U.BRd.DARK : void 0,
            children: (e) =>
                (0, a.jsxs)(u.animated.div, {
                    className: l()(Z.root, F.elevationHigh, { [Z.previewCamera]: E }, e),
                    style: {
                        ...r,
                        width: k.value.interpolate([0, 1], [Q.width, H]),
                        minHeight: k.value.interpolate([0, 1], [Q.height, Y]),
                        translateX: k.value.interpolate([0, 1], [0, (-1 * Math.abs(H - Q.width)) / 2])
                    },
                    children: [
                        E
                            ? (0, a.jsx)(W, { header: q })
                            : (0, a.jsx)('div', {
                                  className: Z.mainChannelInfo,
                                  children: q
                              }),
                        (0, a.jsx)(K, {
                            canVideo: z,
                            channel: h,
                            numVideoDevices: A
                        }),
                        z && !E
                            ? (0, a.jsx)(d.Button, {
                                  size: d.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  look: d.Button.Looks.LINK,
                                  color: d.Button.Colors.PRIMARY,
                                  className: Z.previewButton,
                                  onClick: () => v(!0),
                                  children: G.intl.string(G.t['8B0UDg'])
                              })
                            : null
                    ]
                })
        })
    });
}
