n.d(t, {
    NZ: () => eC,
    ZP: () => eL,
    r: () => eN,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(717976),
    u = n(442837),
    d = n(704215),
    f = n(481060),
    _ = n(846027),
    p = n(239091),
    h = n(287734),
    m = n(872810),
    g = n(410575),
    E = n(40851),
    b = n(317381),
    y = n(596040),
    O = n(100527),
    v = n(906732),
    I = n(358221),
    T = n(659580),
    S = n(793865),
    A = n(575175),
    N = n(522651),
    C = n(795318),
    R = n(243778),
    P = n(258609),
    w = n(446226),
    D = n(569545),
    L = n(74299),
    x = n(803647),
    M = n(554747),
    j = n(95764),
    k = n(459502),
    U = n(140465),
    G = n(800966),
    B = n(641015),
    Z = n(618158),
    F = n(390322),
    V = n(791592),
    H = n(136995),
    Y = n(402113),
    W = n(197016),
    K = n(386000),
    z = n(331197),
    q = n(698877),
    X = n(25827),
    Q = n(875527),
    J = n(540650),
    $ = n(199902),
    ee = n(523746),
    et = n(131951),
    en = n(944486),
    er = n(594174),
    ei = n(923973),
    eo = n(829750),
    ea = n(189771),
    es = n(294629),
    el = n(304745),
    ec = n(987329),
    eu = n(544384),
    ed = n(560688),
    ef = n(127608),
    e_ = n(76021),
    ep = n(173507),
    eh = n(981631),
    em = n(354459),
    eg = n(921944),
    eE = n(318629);
function eb(e, t, n) {
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
function ey() {
    return (ey =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function eO(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function ev(e) {
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
                eb(e, t, n[t]);
            });
    }
    return e;
}
function eI(e, t) {
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
function eT(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eI(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eS(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eA(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eA(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function eN(e, t) {
    if (et.Z.isVideoEnabled() === e) return;
    let n = () => _.Z.setVideoEnabled(e);
    (0, N.v)(O.Z.VOICE_CONTROL_TRAY, N.d.CAMERA, e), e ? (0, ep.Z)(n, t) : n();
}
function eC(e) {
    let { channel: t, currentUser: n, exitFullScreen: o, canGoLive: a, hasPermission: s, disabled: l } = e,
        { parentAnalyticsLocation: c, analyticsLocations: _ } = (0, v.ZP)(),
        p = (0, E.bp)(),
        h = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreams()),
        m = h.find((e) => e.ownerId === n.id),
        g = i.useRef(null),
        b = i.useRef(null),
        y = t.getGuildId(),
        O = i.useCallback(() => {
            if ((null == o || o(), !a)) return (0, ef.Z)();
            (0, e_.Z)(y, t.id, _);
        }, [y, t.id, a, o, _]),
        I = (0, U.B4)(),
        [T, S] = i.useState(!1),
        A = () => {
            if (((0, N.v)(c, N.d.STREAM, !0), a)) return void O();
            (0, ef.Z)();
        },
        C = () => {
            (0, N.v)(c, N.d.STREAM, !1), (0, x.Z)(m);
        },
        P = (e, t) => {
            let n = null != e ? e : { onClick: void 0 },
                { onClick: i } = n,
                o = eS(n, ["onClick"]),
                a = null != m;
            function c(e) {
                null == i || i(e);
            }
            return (0, r.jsx)(
                q.O,
                eT(ev({}, o), {
                    centerButton: !0,
                    disabled: l || !s,
                    className: eE.controlButton,
                    hasPermission: s,
                    streamActive: null != m,
                    isSelfStream: !0,
                    onPopoutClick: a ? c : null,
                    popoutOpen: t,
                    shouldShowTooltip: !t,
                    renderNUXHighlight: T,
                    buttonRef: g,
                    onClick: null != m ? C : A,
                }),
            );
        },
        w = () => {
            if (I && 0 === h.length)
                return (0, r.jsx)(R.ZP, {
                    contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                    bypassAutoDismiss: !0,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                            return (
                                S(!0),
                                (0, r.jsx)(G.h, {
                                    buttonRef: g,
                                    dismissed: !1,
                                    onDismiss: () => {
                                        n(eg.L.USER_DISMISS), S(!1);
                                    },
                                })
                            );
                    },
                });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w(),
            (0, r.jsx)(Z.Z, {
                children: (0, r.jsx)(f.yRy, {
                    targetElementRef: b,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(F.Z, {
                            children: (0, r.jsx)(eu.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: O,
                                appContext: p,
                                onClose: i,
                                onInteraction: eD("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: f.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ey({}, eO(e)),
                            { isShown: i } = t;
                        return (0, r.jsx)("div", {
                            ref: b,
                            children: P(n, i),
                        });
                    },
                }),
            }),
        ],
    });
}
function eR(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: o } = e,
        a = t.getGuildId();
    return (0, y.Z)(a, t.id)
        ? (0, r.jsx)("div", {
              className: eE.buttonContainer,
              children: (0, r.jsx)(el.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: o,
              }),
          })
        : null;
}
let eP = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: o, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: s } = (0, v.ZP)(),
        l = (0, u.e7)([I.Z], () => I.Z.getSelectedParticipant(o.id)),
        { reducedMotion: d } = i.useContext(f.Sfi),
        [_, p] = i.useState(!1),
        g = null == l ? void 0 : l.id,
        E = (0, u.e7)([$.Z], () => (null != g ? $.Z.getActiveStreamForStreamKey(g) : null), [g]),
        b = (null == l ? void 0 : l.type) === em.fO.STREAM && null != E && E.ownerId !== (null == t ? void 0 : t.id),
        y = (0, u.Wu)([$.Z], () =>
            $.Z.getAllActiveStreamsForChannel(o.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        O = (0, M.qY)(o.id),
        T = i.useRef(null),
        S = i.useCallback(
            () =>
                (null == l ? void 0 : l.type) === em.fO.ACTIVITY &&
                l.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : b
                      ? "STREAM"
                      : null != O
                        ? "EVENT"
                        : "CALL",
            [l, null == a ? void 0 : a.applicationId, b, O],
        ),
        [A, C] = i.useState(S()),
        R = (0, f.q_F)(
            {
                opacity: _ ? 0.2 : 1,
                transform: _ && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: {
                    mass: 2,
                    tension: _ ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: _,
                },
                onRest: () => {
                    C(S()), p(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        S() !== A && p(!0);
    }, [A, S]);
    let P = i.useCallback(() => {
            if (null != E) (0, m.g)((0, D.V9)(E));
            else for (let e of y) (0, m.g)((0, D.V9)(e));
        }, [y, E]),
        w = (e, i) => {
            let c = {
                isTrayButton: !1,
                centerButton: !0,
                popoutOpen: e,
            };
            switch (A) {
                case "ACTIVITY":
                    if (null == l || null == t || l.type !== em.fO.ACTIVITY || null == a) return;
                    return (0, r.jsx)(
                        Y.Z,
                        eT(ev({}, c), {
                            applicationId: l.applicationId,
                            color: "disconnect",
                            location: a.location,
                            onPopoutClick: y.length > 0 ? i : null,
                        }),
                    );
                case "STREAM":
                    return (0, r.jsx)(
                        q.O,
                        eT(ev({}, c), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: "disconnect",
                            onClick: () => {
                                (0, N.v)(s, N.d.STOP_WATCHING), P();
                            },
                            onPopoutClick: y.length > 1 ? i : null,
                            isSelfStream: !1,
                        }),
                    );
                case "CALL":
                    return (0, r.jsx)(
                        W.Z,
                        eT(ev({}, c), {
                            color: "disconnect",
                            onClick: () => {
                                (0, N.v)(s, N.d.DISCONNECT), null == n || n();
                            },
                            onPopoutClick: y.length > 0 ? i : null,
                        }),
                    );
                case "EVENT":
                    return (0, r.jsx)(j.Z, {
                        channelId: o.id,
                        onClick: () => {
                            (0, N.v)(s, N.d.DISCONNECT), h.default.disconnect(), null == n || n();
                        },
                    });
            }
        };
    return (0, r.jsx)(f.yRy, {
        targetElementRef: T,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eu.Z, {
                channel: o,
                currentUser: t,
                activeStreams: y,
                handleGoLive: eh.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eD("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: f.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(c.animated.div, {
                style: R,
                ref: T,
                children: w(i, n),
            });
        },
    });
});
function ew(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: o, currentUser: a } = e,
        s = (0, E.bp)(),
        { parentAnalyticsLocation: l } = (0, v.ZP)(),
        { reachedLimit: c, limit: d } = (0, eo.Z)(t),
        f = i.useCallback(() => {
            (0, N.v)(l, N.d.JOIN_VIDEO_CALL);
            let e = () => h.default.selectVoiceChannel(t.id, !0);
            (0, ep.Z)(e, s);
        }, [t.id, s, l]),
        _ = i.useCallback(() => {
            n ? (0, ed.Z)() : f();
        }, [n, f]),
        p = (0, u.e7)([ee.Z], () => {
            let e = ee.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)("div", {
        className: eE.wrapper,
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
                hasPermission: o,
                onCameraUnavailable: _,
                className: eE.controlButton,
                onChange: f,
            }),
            (0, r.jsx)(H.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: eE.controlButton,
            }),
            p
                ? (0, r.jsx)(V.Z, {
                      color: "disconnect",
                      channel: t,
                      className: eE.controlButton,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eD(e) {
    return (0, C.u)(e, O.Z.VOICE_CONTROL_TRAY, { entrypoint: em.A5.CARET });
}
let eL = function (e) {
    var t;
    let { channel: n, className: o, onDisconnectCall: s, exitFullScreen: c, idleProps: d } = e,
        _ = i.useRef(null),
        [h, m] = i.useState(void 0),
        E = (0, u.e7)([er.default], () => {
            let e = er.default.getCurrentUser();
            return l()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: y, enabled: I } = (0, ei.Z)(),
        N = (0, ea.Z)(n),
        { suppress: C, selfMute: R, mute: D } = (0, es.Z)(n),
        { canGoLive: x } = (0, u.cj)([et.Z], () => ({ canGoLive: (0, L.Z)(et.Z) })),
        M = (0, w.Z)(),
        j = (0, u.e7)([P.Z], () => null != P.Z.getAwaitingRemoteSessionInfo()),
        U = null != M,
        G = (0, u.e7)([en.Z], () => {
            var e;
            return (null != (e = null == M ? void 0 : M.channelId) ? e : en.Z.getVoiceChannelId()) === n.id;
        }),
        Z = (0, u.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: V, limit: H } = (0, eo.Z)(n),
        { analyticsLocations: Y } = (0, v.ZP)(O.Z.VOICE_CONTROL_TRAY),
        W = (0, Q.Hu)({
            location: O.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        q = (0, B.Z)(n),
        $ = i.useRef(null),
        ee = i.useRef(null),
        el = W
            ? (e) => {
                  (0, p.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(T.default, {
                              onClose: p.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eD("AudioDeviceMenu"),
                          }),
                      ),
                  );
              }
            : void 0;
    return G
        ? (0, r.jsx)(v.Gt, {
              value: Y,
              children: (0, r.jsxs)(g.Z, {
                  section: eh.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)("div", {
                          className: eE.eventPromptsContainer,
                          children: (0, r.jsx)(k.Z, { channelId: n.id }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: _,
                          className: a()(eE.wrapper, o),
                          children: [
                              (0, r.jsxs)("div", {
                                  className: eE.buttonSection,
                                  children: [
                                      (0, r.jsx)(f.yRy, {
                                          targetElementRef: $,
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(F.Z, {
                                                  children: (0, r.jsx)(J.R, {
                                                      onClose: t,
                                                      location: O.Z.VOICE_CONTROL_TRAY,
                                                      onInteraction: eD("AudioDeviceMenu"),
                                                  }),
                                              });
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: f.yRy.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(K.Z, {
                                                  ref: $,
                                                  centerButton: !0,
                                                  onPopoutClick: U ? null : n,
                                                  selfMute: R,
                                                  serverMute: D,
                                                  suppress: C,
                                                  popoutOpen: i,
                                                  awaitingRemote: j,
                                                  onClick: () => (0, A.Z)(D, C, eh.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: el,
                                              });
                                          },
                                      }),
                                      !U &&
                                          (0, r.jsx)(f.yRy, {
                                              targetElementRef: ee,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(F.Z, {
                                                      children: (0, r.jsx)(S.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eD("VideoDeviceMenu"),
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: f.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: i } = t;
                                                  return (0, r.jsx)(X.C, {
                                                      ref: ee,
                                                      centerButton: !0,
                                                      hasPermission: N,
                                                      enabled: I,
                                                      cameraUnavailable: y,
                                                      onChange: eN,
                                                      onCameraUnavailable: ed.Z,
                                                      channelLimitReached: V,
                                                      channelLimit: H,
                                                      popoutOpen: i,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eE.buttonSection,
                                  children: [
                                      !U &&
                                          (0, r.jsx)(eC, {
                                              channel: n,
                                              currentUser: E,
                                              exitFullScreen: c,
                                              canGoLive: x,
                                              hasPermission: N,
                                          }),
                                      !U &&
                                          (0, r.jsx)(eR, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: h,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      q &&
                                          (0, r.jsx)(z.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: h,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      (0, r.jsx)(ec.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: h,
                                          setWhichPopoutIsOpen: m,
                                          remoteMode: U,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(eP, {
                                  connectedEmbeddedActivity: Z,
                                  currentUser: E,
                                  channel: n,
                                  onDisconnectCall: s,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(v.Gt, {
              value: Y,
              children: (0, r.jsx)(ew, {
                  channel: n,
                  cameraUnavailable: y,
                  hasCameraPermission: N,
                  currentUser: E,
              }),
          });
};
