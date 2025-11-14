n.d(t, {
    NZ: () => eP,
    ZP: () => eA,
    r: () => eS,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(203463),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(846027),
    f = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    y = n(317381),
    C = n(596040),
    v = n(100527),
    _ = n(906732),
    x = n(358221),
    j = n(659580),
    O = n(855844),
    E = n(793865),
    S = n(575175),
    P = n(522651),
    I = n(795318),
    Z = n(243778),
    T = n(258609),
    N = n(446226),
    A = n(569545),
    w = n(74299),
    M = n(803647),
    R = n(554747),
    L = n(95764),
    k = n(459502),
    D = n(728285),
    U = n(853170),
    B = n(140465),
    H = n(800966),
    V = n(675547),
    F = n(641015),
    G = n(618158),
    z = n(390322),
    W = n(791592),
    q = n(136995),
    K = n(402113),
    Y = n(197016),
    X = n(386000),
    J = n(331197),
    Q = n(698877),
    $ = n(25827),
    ee = n(875527),
    et = n(306609),
    en = n(199902),
    ei = n(523746),
    er = n(131951),
    el = n(944486),
    ea = n(594174),
    eo = n(923973),
    es = n(829750),
    ec = n(189771),
    eu = n(294629),
    ed = n(304745),
    ep = n(987329),
    eh = n(868812),
    ef = n(544384),
    em = n(560688),
    eg = n(127608),
    eb = n(76021),
    ey = n(173507),
    eC = n(981631),
    ev = n(354459),
    e_ = n(921944),
    ex = n(32312);
function ej() {
    return (ej =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function eO(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function eE(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eS(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    (0, P.v)(v.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, ey.Z)(n, t) : n();
}
function eP(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, _.ZP)(),
        f = (0, D.bp)(),
        m = (0, u.Wu)([en.Z], () => en.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = r.useRef(null),
        y = r.useRef(null),
        C = t.getGuildId(),
        v = r.useCallback(() => {
            if ((null == l || l(), !a)) return (0, eg.Z)();
            (0, eb.Z)(C, t.id, h);
        }, [C, t.id, a, l, h]),
        x = (0, B.B4)(),
        [j, O] = r.useState(!1),
        E = () => {
            if (((0, P.v)(c, P.d.STREAM, !0), a)) return void v();
            (0, eg.Z)();
        },
        S = () => {
            (0, P.v)(c, P.d.STREAM, !1), (0, M.Z)(g);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (x && 0 === m.length)
                    return (0, i.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    O(!0),
                                    (0, i.jsx)(H.h, {
                                        buttonRef: b,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(e_.L.USER_DISMISS), O(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(G.Z, {
                children: (0, i.jsx)(p.yRy, {
                    targetElementRef: y,
                    renderPopout: (e) => {
                        let { closePopout: r } = e;
                        return (0, i.jsx)(z.Z, {
                            children: (0, i.jsx)(ef.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: v,
                                appContext: f,
                                onClose: r,
                                onInteraction: eN("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ej(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError("Cannot destructure " + e);
                                    return e;
                                })(e),
                            ),
                            { isShown: r } = t;
                        return (0, i.jsx)("div", {
                            ref: y,
                            children: ((e, t) => {
                                let n = null != e ? e : { onClick: void 0 },
                                    { onClick: r } = n,
                                    l = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            i,
                                            r = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    i,
                                                    r = {},
                                                    l = Object.keys(e);
                                                for (i = 0; i < l.length; i++)
                                                    (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                return r;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            for (i = 0; i < l.length; i++)
                                                (n = l[i]),
                                                    !(t.indexOf(n) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                        (r[n] = e[n]);
                                        }
                                        return r;
                                    })(n, ["onClick"]),
                                    a = null != g;
                                return (0, i.jsx)(
                                    Q.O,
                                    eE(eO({}, l), {
                                        centerButton: !0,
                                        disabled: s || !o,
                                        className: ex.controlButton,
                                        hasPermission: o,
                                        streamActive: null != g,
                                        isSelfStream: !0,
                                        onPopoutClick: a
                                            ? function (e) {
                                                  null == r || r(e);
                                              }
                                            : null,
                                        popoutOpen: t,
                                        shouldShowTooltip: !t,
                                        renderNUXHighlight: j,
                                        buttonRef: b,
                                        onClick: null != g ? S : E,
                                    }),
                                );
                            })(n, r),
                        });
                    },
                }),
            }),
        ],
    });
}
function eI(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: r, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, C.Z)(a, t.id)
        ? (0, i.jsx)("div", {
              className: ex.buttonContainer,
              children: (0, i.jsx)(ed.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: r,
                  setWhichPopoutIsOpen: l,
              }),
          })
        : null;
}
let eZ = r.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: o } = (0, _.ZP)(),
        s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = r.useContext(p.Sfi),
        [h, f] = r.useState(!1),
        b = null == s ? void 0 : s.id,
        y = (0, u.e7)([en.Z], () => (null != b ? en.Z.getActiveStreamForStreamKey(b) : null), [b]),
        C = (null == s ? void 0 : s.type) === ev.fO.STREAM && null != y && y.ownerId !== (null == t ? void 0 : t.id),
        v = (0, u.Wu)([en.Z], () =>
            en.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        j = (0, R.qY)(l.id),
        O = r.useRef(null),
        E = r.useCallback(
            () =>
                (null == s ? void 0 : s.type) === ev.fO.ACTIVITY &&
                s.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : C
                      ? "STREAM"
                      : null != j
                        ? "EVENT"
                        : "CALL",
            [s, null == a ? void 0 : a.applicationId, C, j],
        ),
        [S, I] = r.useState(E()),
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
    r.useEffect(() => {
        E() !== S && f(!0);
    }, [S, E]);
    let T = r.useCallback(() => {
        if (null != y) (0, g.g)((0, A.V9)(y));
        else for (let e of v) (0, g.g)((0, A.V9)(e));
    }, [v, y]);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: O,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(ef.Z, {
                channel: l,
                currentUser: t,
                activeStreams: v,
                handleGoLive: eC.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eN("ManageStreamsMenu"),
            });
        },
        position: "top",
        align: "center",
        animation: p.yRy.Animation.FADE,
        children: (e, r) => {
            let { onClick: u } = e,
                { isShown: d } = r;
            return (0, i.jsx)(c.animated.div, {
                style: Z,
                ref: O,
                children: ((e, r) => {
                    let c = {
                        isTrayButton: !1,
                        centerButton: !0,
                        popoutOpen: e,
                    };
                    switch (S) {
                        case "ACTIVITY":
                            if (null == s || null == t || s.type !== ev.fO.ACTIVITY || null == a) return;
                            return (0, i.jsx)(
                                K.Z,
                                eE(eO({}, c), {
                                    applicationId: s.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: v.length > 0 ? r : null,
                                }),
                            );
                        case "STREAM":
                            return (0, i.jsx)(
                                Q.O,
                                eE(eO({}, c), {
                                    hasPermission: !0,
                                    streamActive: !0,
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, P.v)(o, P.d.STOP_WATCHING), T();
                                    },
                                    onPopoutClick: v.length > 1 ? r : null,
                                    isSelfStream: !1,
                                }),
                            );
                        case "CALL":
                            return (0, i.jsx)(
                                Y.Z,
                                eE(eO({}, c), {
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, P.v)(o, P.d.DISCONNECT), null == n || n();
                                    },
                                    onPopoutClick: v.length > 0 ? r : null,
                                }),
                            );
                        case "EVENT":
                            return (0, i.jsx)(L.Z, {
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
function eT(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, D.bp)(),
        { parentAnalyticsLocation: s } = (0, _.ZP)(),
        { reachedLimit: c, limit: d } = (0, es.Z)(t),
        p = r.useCallback(() => {
            (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, ey.Z)(() => m.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        h = r.useCallback(() => {
            n ? (0, em.Z)() : p();
        }, [n, p]),
        f = (0, u.e7)([ei.Z], () => {
            let e = ei.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, i.jsxs)("div", {
        className: ex.wrapper,
        children: [
            (0, i.jsx)($.C, {
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
                className: ex.controlButton,
                onChange: p,
            }),
            (0, i.jsx)(q.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: ex.controlButton,
            }),
            f
                ? (0, i.jsx)(W.Z, {
                      color: "disconnect",
                      channel: t,
                      className: ex.controlButton,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eN(e) {
    return (0, I.u)(e, v.Z.VOICE_CONTROL_TRAY, { entrypoint: ev.A5.CARET });
}
let eA = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        h = r.useRef(null),
        [m, g] = r.useState(void 0),
        C = (0, u.e7)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: x, enabled: P } = (0, eo.Z)(),
        I = (0, ec.Z)(n),
        { suppress: Z, selfMute: A, mute: M } = (0, eu.Z)(n),
        { canGoLive: R } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, w.Z)(er.Z) })),
        L = (0, N.Z)(),
        D = (0, u.e7)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()),
        B = null != L,
        H = (0, u.e7)([el.Z], () => {
            var e;
            return (null != (e = null == L ? void 0 : L.channelId) ? e : el.Z.getVoiceChannelId()) === n.id;
        }),
        G = (0, V.Z)({
            channel: n,
            location: "center-control-tray",
        }),
        W = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: q, limit: K } = (0, es.Z)(n),
        { analyticsLocations: Y } = (0, _.ZP)(v.Z.VOICE_CONTROL_TRAY),
        Q = (0, ee.Hu)({
            location: v.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        { showRefreshedAudioContextMenu: en } = (0, U.e)({ location: v.Z.VOICE_CONTROL_TRAY }),
        ei = (0, F.Z)(n),
        ed = r.useRef(null),
        ef = r.useRef(null),
        eg = Q
            ? (e) => {
                  (0, f.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, i.jsx)(j.default, {
                              onClose: f.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eN("AudioDeviceMenu"),
                          }),
                      ),
                  );
              }
            : void 0;
    return H
        ? (0, i.jsx)(_.Gt, {
              value: Y,
              children: (0, i.jsxs)(b.Z, {
                  section: eC.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", {
                          className: ex.eventPromptsContainer,
                          children: (0, i.jsx)(k.Z, { channelId: n.id }),
                      }),
                      (0, i.jsxs)("div", {
                          ref: h,
                          className: a()(ex.wrapper, l),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ex.buttonSection,
                                  children: [
                                      (0, i.jsx)(p.yRy, {
                                          targetElementRef: ed,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = Q
                                                      ? (0, i.jsx)(et.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : en
                                                        ? (0, i.jsx)(O.Z, {
                                                              onInteraction: eN("AudioDeviceMenu"),
                                                              onClose: n,
                                                              maybeRenderPTTCheckbox: !0,
                                                              renderInputProfiles: !0,
                                                              renderInputDevices: !0,
                                                              renderInputVolume: !0,
                                                              maybeRenderInputMeter: !0,
                                                              renderDeafenCheckbox: !0,
                                                              renderOutputDevices: !0,
                                                              renderOutputVolume: !0,
                                                              renderSettingsButton: !0,
                                                          })
                                                        : (0, i.jsx)(j.default, {
                                                              onClose: n,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              minimal: !0,
                                                              onInteraction: eN("AudioDeviceMenu"),
                                                          })),
                                                  (0, i.jsxs)(z.Z, {
                                                      children: [t, " "],
                                                  })
                                              );
                                          },
                                          align: "center",
                                          position: "top",
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: r } = t;
                                              return (0, i.jsx)(X.Z, {
                                                  ref: ed,
                                                  centerButton: !0,
                                                  onPopoutClick: B ? null : n,
                                                  selfMute: A,
                                                  serverMute: M,
                                                  suppress: Z,
                                                  popoutOpen: r,
                                                  awaitingRemote: D,
                                                  onClick: () => (0, S.Z)(M, Z, eC.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: eg,
                                              });
                                          },
                                      }),
                                      !B &&
                                          (0, i.jsx)(p.yRy, {
                                              targetElementRef: ef,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(z.Z, {
                                                      children: (0, i.jsx)(E.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eN("VideoDeviceMenu"),
                                                      }),
                                                  });
                                              },
                                              position: "top",
                                              align: "right",
                                              spacing: 16,
                                              animation: p.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: r } = t;
                                                  return (0, i.jsx)($.C, {
                                                      ref: ef,
                                                      centerButton: !0,
                                                      hasPermission: I,
                                                      enabled: P,
                                                      cameraUnavailable: x,
                                                      onChange: eS,
                                                      onCameraUnavailable: em.Z,
                                                      channelLimitReached: q,
                                                      channelLimit: K,
                                                      popoutOpen: r,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: ex.buttonSection,
                                  children: [
                                      !B &&
                                          (0, i.jsx)(eP, {
                                              channel: n,
                                              currentUser: C,
                                              exitFullScreen: c,
                                              canGoLive: R,
                                              hasPermission: I,
                                          }),
                                      !B &&
                                          (0, i.jsx)(eI, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      ei &&
                                          (0, i.jsx)(J.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      G &&
                                          (0, i.jsx)(eh.Z, {
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, i.jsx)(ep.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: B,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(eZ, {
                                  connectedEmbeddedActivity: W,
                                  currentUser: C,
                                  channel: n,
                                  onDisconnectCall: o,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(_.Gt, {
              value: Y,
              children: (0, i.jsx)(eT, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: I,
                  currentUser: C,
              }),
          });
};
