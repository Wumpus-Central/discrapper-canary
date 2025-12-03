n.d(t, { Z: () => el }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(442837),
    c = n(481060),
    u = n(26151),
    d = n(922555),
    f = n(287734),
    p = n(249000),
    _ = n(100527),
    m = n(367907),
    h = n(906732),
    g = n(43267),
    E = n(933557),
    b = n(686546),
    y = n(703656),
    O = n(932724),
    v = n(672339),
    S = n(898531),
    I = n(923973),
    T = n(189771),
    A = n(560688),
    C = n(88479),
    N = n(136995),
    P = n(25827),
    R = n(163612),
    w = n(601964),
    D = n(430824),
    x = n(131951),
    L = n(594174),
    j = n(451478),
    M = n(626135),
    k = n(768581),
    U = n(358221),
    G = n(584511),
    Z = n(793865),
    B = n(522651),
    F = n(795318),
    V = n(354459),
    H = n(981631),
    Y = n(295907),
    W = n(65154),
    K = n(388032),
    z = n(993103),
    q = n(450943),
    X = n(315091);
function Q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Q(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = {
        width: 232,
        height: 315,
    },
    en = {
        width: 232,
        height: 267,
    },
    er = 475,
    ei = 267,
    ea = 128;
function eo(e) {
    let { header: t } = e,
        n = x.Z.getCameraComponent(),
        a = (0, l.e7)([x.Z], () => x.Z.getVideoDeviceId()),
        o = (0, S.Z)();
    return (
        i.useEffect(() => {
            let e = L.default.getCurrentUser();
            if (o && null != e) {
                let t = (0, O.P)(e);
                (0, v.FU)(t, a, { track: !1 }).catch(H.dG4);
            }
        }, [o, a]),
        (0, r.jsxs)("div", {
            className: q.previewRoot,
            children: [
                (0, r.jsx)(c.$jN, {}),
                (0, r.jsx)("div", {
                    className: q.preview,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: er,
                        height: ei,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: q.previewChannelHeader,
                    children: t,
                }),
            ],
        })
    );
}
function es(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: s } = (0, h.ZP)(),
        { cameraUnavailable: l, enabled: d } = (0, I.Z)(),
        p = (0, T.Z)(n),
        _ = i.useRef(null),
        g = a > 1;
    return (0, r.jsxs)("div", {
        className: o()(q.wrapper, q.actions),
        children: [
            (0, r.jsx)(C.Z, {
                iconComponent: c.Dio,
                label: K.intl.string(K.t.WAI6xu),
                className: q.actionButton,
                onClick: () => {
                    (0, B.v)(s, B.d.DISCONNECT),
                        M.default.track(
                            H.rMx.RING_CALL_DECLINED,
                            J(
                                {
                                    location: s,
                                    guild_id: n.guild_id,
                                },
                                (0, m.v_)(n),
                            ),
                        ),
                        u.Z.stopRinging(n.id);
                },
            }),
            t &&
                (0, r.jsx)(c.yRy, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(Z.Z, {
                            onClose: t,
                            onInteraction: (0, F.u)("VideoDeviceMenu", s, { entrypoint: V.A5.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: c.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(P.C, {
                            buttonRef: _,
                            join: !0,
                            enabled: d,
                            className: o()(q.actionButton, { [q.fullRegionDropdownButtonOverride]: g }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: p,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: g ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: A.Z,
                            onChange: () => {
                                var e;
                                (0, B.v)(s, B.d.JOIN_VIDEO_CALL),
                                    M.default.track(
                                        H.rMx.RING_CALL_ACCEPTED,
                                        J(
                                            {
                                                location: s,
                                                guild_id: n.guild_id,
                                            },
                                            (0, m.v_)(n),
                                        ),
                                    ),
                                    f.default.selectVoiceChannel(n.id, !0),
                                    (0, y.XU)(null != (e = n.guild_id) ? e : H.ME, n.id);
                            },
                        });
                    },
                }),
            (0, r.jsx)(N.Z, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    M.default.track(
                        H.rMx.RING_CALL_ACCEPTED,
                        J(
                            {
                                location: s,
                                guild_id: n.guild_id,
                            },
                            (0, m.v_)(n),
                        ),
                    ),
                className: q.actionButton,
            }),
        ],
    });
}
function el(e) {
    var t;
    let { animatedStyle: n, y: a, x: f, channel: m } = e,
        { analyticsLocations: y } = (0, h.ZP)(_.Z.INCOMING_CALL_MODAL),
        [O, v] = i.useState(!1),
        S = (0, l.e7)([D.Z], () => D.Z.getGuild(m.guild_id)),
        I =
            null != S
                ? k.ZP.getGuildIconURL({
                      id: S.id,
                      icon: S.icon,
                      size: ea,
                  })
                : null,
        T = null != (t = (0, g.x)(m, ea, !0)) ? t : I,
        A = (0, E.ZP)(m),
        [C, N] = (0, l.Wu)([x.Z], () => [x.Z.supports(W.AN.VIDEO), Object.keys(x.Z.getVideoDevices()).length]),
        P = null != S ? "".concat(A, ", ").concat(S.name) : A,
        L = (0, l.e7)([j.Z], () => j.Z.isFocused()),
        M = (0, l.e7)([U.Z], () => U.Z.getMode(m.id)),
        Z = i.useCallback((e) => {
            null != e.top && null != e.left && d.Z.move(e.left, e.top);
        }, []),
        B = (0, c.q_F)(
            {
                value: +!!O,
                config: ee(J({}, s.config.stiff), { clamp: !0 }),
            },
            "animate-always",
        );
    i.useEffect(() => {
        let e = (e) => {
            e.key === Y.vn.ESCAPE && u.Z.stopRinging(m.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [m]);
    let F = M === H.WtW.VIDEO && C && N > 0,
        { enabled: V } = R.Z.useExperiment({
            guildId: null == m ? void 0 : m.guild_id,
            location: "IncomingCallModal",
        }),
        Q =
            M === H.WtW.VOICE || (V && m.type === H.d4z.GUILD_VOICE)
                ? K.intl.string(K.t.Js8cK3)
                : K.intl.string(K.t.KcnWCO),
        $ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != S && null == I
                    ? (0, r.jsx)("div", {
                          className: o()(q.icon, z.wrapper, z.ringingIncoming),
                          children: (0, r.jsx)(b.ZP, {
                              className: q.mask,
                              mask: b.QS.AVATAR_DEFAULT,
                              width: O ? 40 : 80,
                              height: O ? 40 : 80,
                              children: (0, r.jsx)("div", {
                                  className: o()(q.guildIcon, q.guildIconWithoutImage),
                                  children: (0, r.jsx)("div", {
                                      className: q.guildAcronym,
                                      children: (0, w.gM)(S),
                                  }),
                              }),
                          }),
                      })
                    : (0, r.jsx)(G.Z, {
                          className: q.icon,
                          ringing: L,
                          src: null != T ? T : "",
                          ringingType: G.Z.RingingType.INCOMING,
                          size: O ? c.EFr.SIZE_40 : c.EFr.SIZE_80,
                      }),
                (0, r.jsxs)("div", {
                    className: q.titleGroup,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: q.title,
                            color: "header-primary",
                            variant: O ? "text-md/semibold" : "text-lg/semibold",
                            children: P,
                        }),
                        (0, r.jsx)(c.Text, {
                            color: "text-default",
                            className: q.subtitle,
                            variant: O ? "text-sm/normal" : "text-md/normal",
                            children: Q,
                        }),
                    ],
                }),
            ],
        }),
        el = F ? et : en,
        ec = (0, l.e7)([j.Z], () => j.Z.windowSize());
    return (0, r.jsx)(h.Gt, {
        value: y,
        children: (0, r.jsx)(p.Z, {
            className: q.wrapper,
            selector: ".".concat(q.root),
            initialPosition: {
                left: f,
                top: a,
            },
            maxX: ec.width,
            maxY: ec.height,
            onDragEnd: Z,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.f6W, {
                theme: O ? H.BRd.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: o()(q.root, X.elevationHigh, { [q.previewCamera]: O }, e),
                        style: ee(J({}, n), {
                            width: B.value.interpolate([0, 1], [el.width, er]),
                            minHeight: B.value.interpolate([0, 1], [el.height, ei]),
                            translateX: B.value.interpolate([0, 1], [0, (-1 * Math.abs(er - el.width)) / 2]),
                        }),
                        children: [
                            O
                                ? (0, r.jsx)(eo, { header: $ })
                                : (0, r.jsx)("div", {
                                      className: q.mainChannelInfo,
                                      children: $,
                                  }),
                            (0, r.jsx)(es, {
                                canVideo: F,
                                channel: m,
                                numVideoDevices: N,
                            }),
                            F && !O
                                ? (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: q.previewButton,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: K.intl.string(K.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => v(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
