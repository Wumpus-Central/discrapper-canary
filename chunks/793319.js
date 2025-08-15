n.d(t, {
    NZ: () => ej,
    ZP: () => eI,
    r: () => ev,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(815061),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(846027),
    f = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    y = n(40851),
    _ = n(317381),
    C = n(596040),
    x = n(100527),
    v = n(906732),
    j = n(358221),
    O = n(659580),
    E = n(793865),
    S = n(575175),
    P = n(522651),
    I = n(795318),
    Z = n(243778),
    T = n(258609),
    N = n(446226),
    A = n(569545),
    w = n(74299),
    R = n(803647),
    M = n(554747),
    k = n(95764),
    D = n(459502),
    L = n(140465),
    U = n(800966),
    B = n(641015),
    F = n(618158),
    H = n(390322),
    G = n(791592),
    V = n(136995),
    z = n(402113),
    W = n(197016),
    Y = n(386000),
    q = n(331197),
    K = n(698877),
    X = n(25827),
    Q = n(875527),
    J = n(540650),
    $ = n(199902),
    ee = n(523746),
    et = n(131951),
    en = n(944486),
    er = n(594174),
    ei = n(923973),
    el = n(829750),
    ea = n(189771),
    eo = n(294629),
    es = n(304745),
    ec = n(987329),
    eu = n(544384),
    ed = n(560688),
    ep = n(127608),
    eh = n(76021),
    ef = n(173507),
    em = n(981631),
    eg = n(354459),
    eb = n(921944),
    ey = n(32312);
function e_() {
    return (e_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function eC(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ev(e, t) {
    if (et.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    (0, P.v)(x.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, ef.Z)(n, t) : n();
}
function ej(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, v.ZP)(),
        f = (0, y.bp)(),
        m = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = i.useRef(null),
        _ = i.useRef(null),
        C = t.getGuildId(),
        x = i.useCallback(() => {
            if ((null == l || l(), !a)) return (0, ep.Z)();
            (0, eh.Z)(C, t.id, h);
        }, [C, t.id, a, l, h]),
        j = (0, L.B4)(),
        [O, E] = i.useState(!1),
        S = () => {
            if (((0, P.v)(c, P.d.STREAM, !0), a)) return void x();
            (0, ep.Z)();
        },
        I = () => {
            (0, P.v)(c, P.d.STREAM, !1), (0, R.Z)(g);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (j && 0 === m.length)
                    return (0, r.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    E(!0),
                                    (0, r.jsx)(U.h, {
                                        buttonRef: b,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eb.L.USER_DISMISS), E(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, r.jsx)(F.Z, {
                children: (0, r.jsx)(p.yRy, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(H.Z, {
                            children: (0, r.jsx)(eu.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: x,
                                appContext: f,
                                onClose: i,
                                onInteraction: eP("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = e_(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError("Cannot destructure " + e);
                                    return e;
                                })(e),
                            ),
                            { isShown: i } = t;
                        return (0, r.jsx)("div", {
                            ref: _,
                            children: ((e, t) => {
                                let n = null != e ? e : { onClick: void 0 },
                                    { onClick: i } = n,
                                    l = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = {},
                                                    l = Object.keys(e);
                                                for (r = 0; r < l.length; r++)
                                                    (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < l.length; r++)
                                                (n = l[r]),
                                                    !(t.indexOf(n) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                        (i[n] = e[n]);
                                        }
                                        return i;
                                    })(n, ["onClick"]),
                                    a = null != g;
                                return (0, r.jsx)(
                                    K.O,
                                    ex(eC({}, l), {
                                        centerButton: !0,
                                        disabled: s || !o,
                                        className: ey.controlButton,
                                        hasPermission: o,
                                        streamActive: null != g,
                                        isSelfStream: !0,
                                        onPopoutClick: a
                                            ? function (e) {
                                                  null == i || i(e);
                                              }
                                            : null,
                                        popoutOpen: t,
                                        shouldShowTooltip: !t,
                                        renderNUXHighlight: O,
                                        buttonRef: b,
                                        onClick: null != g ? I : S,
                                    }),
                                );
                            })(n, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function eO(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, C.Z)(a, t.id)
        ? (0, r.jsx)("div", {
              className: ey.buttonContainer,
              children: (0, r.jsx)(es.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l,
              }),
          })
        : null;
}
let eE = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: o } = (0, v.ZP)(),
        s = (0, u.e7)([j.Z], () => j.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = i.useContext(p.Sfi),
        [h, f] = i.useState(!1),
        b = null == s ? void 0 : s.id,
        y = (0, u.e7)([$.Z], () => (null != b ? $.Z.getActiveStreamForStreamKey(b) : null), [b]),
        _ = (null == s ? void 0 : s.type) === eg.fO.STREAM && null != y && y.ownerId !== (null == t ? void 0 : t.id),
        C = (0, u.Wu)([$.Z], () =>
            $.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        x = (0, M.qY)(l.id),
        O = i.useRef(null),
        E = i.useCallback(
            () =>
                (null == s ? void 0 : s.type) === eg.fO.ACTIVITY &&
                s.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : _
                      ? "STREAM"
                      : null != x
                        ? "EVENT"
                        : "CALL",
            [s, null == a ? void 0 : a.applicationId, _, x],
        ),
        [S, I] = i.useState(E()),
        Z = (0, p.q_F)(
            {
                opacity: h ? 0.2 : 1,
                transform: h && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: {
                    mass: 2,
                    tension: h ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: h,
                },
                onRest: () => {
                    I(E()), f(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        E() !== S && f(!0);
    }, [S, E]);
    let T = i.useCallback(() => {
        if (null != y) (0, g.g)((0, A.V9)(y));
        else for (let e of C) (0, g.g)((0, A.V9)(e));
    }, [C, y]);
    return (0, r.jsx)(p.yRy, {
        targetElementRef: O,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eu.Z, {
                channel: l,
                currentUser: t,
                activeStreams: C,
                handleGoLive: em.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eP("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: p.yRy.Animation.FADE,
        children: (e, i) => {
            let { onClick: u } = e,
                { isShown: d } = i;
            return (0, r.jsx)(c.animated.div, {
                style: Z,
                ref: O,
                children: ((e, i) => {
                    let c = {
                        isTrayButton: !1,
                        centerButton: !0,
                        popoutOpen: e,
                    };
                    switch (S) {
                        case "ACTIVITY":
                            if (null == s || null == t || s.type !== eg.fO.ACTIVITY || null == a) return;
                            return (0, r.jsx)(
                                z.Z,
                                ex(eC({}, c), {
                                    applicationId: s.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: C.length > 0 ? i : null,
                                }),
                            );
                        case "STREAM":
                            return (0, r.jsx)(
                                K.O,
                                ex(eC({}, c), {
                                    hasPermission: !0,
                                    streamActive: !0,
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, P.v)(o, P.d.STOP_WATCHING), T();
                                    },
                                    onPopoutClick: C.length > 1 ? i : null,
                                    isSelfStream: !1,
                                }),
                            );
                        case "CALL":
                            return (0, r.jsx)(
                                W.Z,
                                ex(eC({}, c), {
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, P.v)(o, P.d.DISCONNECT), null == n || n();
                                    },
                                    onPopoutClick: C.length > 0 ? i : null,
                                }),
                            );
                        case "EVENT":
                            return (0, r.jsx)(k.Z, {
                                channelId: l.id,
                                onClick: () => {
                                    (0, P.v)(o, P.d.DISCONNECT), m.default.disconnect(), null == n || n();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eS(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, y.bp)(),
        { parentAnalyticsLocation: s } = (0, v.ZP)(),
        { reachedLimit: c, limit: d } = (0, el.Z)(t),
        p = i.useCallback(() => {
            (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, ef.Z)(() => m.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        h = i.useCallback(() => {
            n ? (0, ed.Z)() : p();
        }, [n, p]),
        f = (0, u.e7)([ee.Z], () => {
            let e = ee.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)("div", {
        className: ey.wrapper,
        children: [
            (0, r.jsx)(X.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: "join",
                channelLimitReached: c,
                channelLimit: d,
                channel: t,
                cameraUnavailable: n,
                hasPermission: l,
                onCameraUnavailable: h,
                className: ey.controlButton,
                onChange: p,
            }),
            (0, r.jsx)(V.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: ey.controlButton,
            }),
            f
                ? (0, r.jsx)(G.Z, {
                      color: "disconnect",
                      channel: t,
                      className: ey.controlButton,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eP(e) {
    return (0, I.u)(e, x.Z.VOICE_CONTROL_TRAY, { entrypoint: eg.A5.CARET });
}
let eI = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        h = i.useRef(null),
        [m, g] = i.useState(void 0),
        y = (0, u.e7)([er.default], () => {
            let e = er.default.getCurrentUser();
            return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: C, enabled: j } = (0, ei.Z)(),
        P = (0, ea.Z)(n),
        { suppress: I, selfMute: Z, mute: A } = (0, eo.Z)(n),
        { canGoLive: R } = (0, u.cj)([et.Z], () => ({ canGoLive: (0, w.Z)(et.Z) })),
        M = (0, N.Z)(),
        k = (0, u.e7)([T.Z], () => null != T.Z.getAwaitingRemoteSessionInfo()),
        L = null != M,
        U = (0, u.e7)([en.Z], () => {
            var e;
            return (null != (e = null == M ? void 0 : M.channelId) ? e : en.Z.getVoiceChannelId()) === n.id;
        }),
        F = (0, u.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: G, limit: V } = (0, el.Z)(n),
        { analyticsLocations: z } = (0, v.ZP)(x.Z.VOICE_CONTROL_TRAY),
        W = (0, Q.Hu)({
            location: x.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        K = (0, B.Z)(n),
        $ = i.useRef(null),
        ee = i.useRef(null),
        es = W
            ? (e) => {
                  (0, f.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(O.default, {
                              onClose: f.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eP("AudioDeviceMenu"),
                          }),
                      ),
                  );
              }
            : void 0;
    return U
        ? (0, r.jsx)(v.Gt, {
              value: z,
              children: (0, r.jsxs)(b.Z, {
                  section: em.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)("div", {
                          className: ey.eventPromptsContainer,
                          children: (0, r.jsx)(D.Z, { channelId: n.id }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: h,
                          className: a()(ey.wrapper, l),
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ey.buttonSection,
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          targetElementRef: $,
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(H.Z, {
                                                  children: (0, r.jsx)(J.R, {
                                                      onClose: t,
                                                      location: x.Z.VOICE_CONTROL_TRAY,
                                                      onInteraction: eP("AudioDeviceMenu"),
                                                  }),
                                              });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(Y.Z, {
                                                  ref: $,
                                                  centerButton: !0,
                                                  onPopoutClick: L ? null : n,
                                                  selfMute: Z,
                                                  serverMute: A,
                                                  suppress: I,
                                                  popoutOpen: i,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, S.Z)(A, I, em.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: es,
                                              });
                                          },
                                      }),
                                      !L &&
                                          (0, r.jsx)(p.yRy, {
                                              targetElementRef: ee,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(H.Z, {
                                                      children: (0, r.jsx)(E.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eP("VideoDeviceMenu"),
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: p.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: i } = t;
                                                  return (0, r.jsx)(X.C, {
                                                      ref: ee,
                                                      centerButton: !0,
                                                      hasPermission: P,
                                                      enabled: j,
                                                      cameraUnavailable: C,
                                                      onChange: ev,
                                                      onCameraUnavailable: ed.Z,
                                                      channelLimitReached: G,
                                                      channelLimit: V,
                                                      popoutOpen: i,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ey.buttonSection,
                                  children: [
                                      !L &&
                                          (0, r.jsx)(ej, {
                                              channel: n,
                                              currentUser: y,
                                              exitFullScreen: c,
                                              canGoLive: R,
                                              hasPermission: P,
                                          }),
                                      !L &&
                                          (0, r.jsx)(eO, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      K &&
                                          (0, r.jsx)(q.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, r.jsx)(ec.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: L,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(eE, {
                                  connectedEmbeddedActivity: F,
                                  currentUser: y,
                                  channel: n,
                                  onDisconnectCall: o,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(v.Gt, {
              value: z,
              children: (0, r.jsx)(eS, {
                  channel: n,
                  cameraUnavailable: C,
                  hasCameraPermission: P,
                  currentUser: y,
              }),
          });
};
