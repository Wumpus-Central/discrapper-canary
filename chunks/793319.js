n.d(t, {
    NZ: () => eP,
    ZP: () => eA,
    r: () => e_,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(467721),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(846027),
    h = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    C = n(317381),
    y = n(596040),
    v = n(100527),
    O = n(906732),
    x = n(358221),
    E = n(659580),
    j = n(855844),
    S = n(793865),
    _ = n(575175),
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
    D = n(459502),
    k = n(728285),
    U = n(853170),
    V = n(140465),
    F = n(800966),
    B = n(675547),
    H = n(641015),
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
    ed = n(705742),
    ep = n(987329),
    ef = n(868812),
    eh = n(544384),
    em = n(560688),
    eg = n(127608),
    eb = n(76021),
    eC = n(173507),
    ey = n(981631),
    ev = n(354459),
    eO = n(921944),
    ex = n(462081);
function eE() {
    return (eE =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function ej(e) {
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
function eS(e, t) {
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
function e_(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    (0, P.v)(v.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, eC.Z)(n, t) : n();
}
function eP(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c, analyticsLocations: f } = (0, O.ZP)(),
        h = (0, k.bp)(),
        m = (0, u.Wu)([en.Z], () => en.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = r.useRef(null),
        C = r.useRef(null),
        y = t.getGuildId(),
        v = r.useCallback(() => {
            if ((null == l || l(), !a)) return (0, eg.Z)();
            (0, eb.Z)(y, t.id, f);
        }, [y, t.id, a, l, f]),
        x = (0, V.B4)(),
        [E, j] = r.useState(!1),
        S = () => {
            if (((0, P.v)(c, P.d.STREAM, !0), a)) return void v();
            (0, eg.Z)();
        },
        _ = () => {
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
                                    j(!0),
                                    (0, i.jsx)(F.h, {
                                        buttonRef: b,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eO.L.USER_DISMISS), j(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(G.Z, {
                children: (0, i.jsx)(p.yRy, {
                    targetElementRef: C,
                    renderPopout: (e) => {
                        let { closePopout: r } = e;
                        return (0, i.jsx)(z.Z, {
                            children: (0, i.jsx)(eh.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: v,
                                appContext: h,
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
                        var n = eE(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError("Cannot destructure " + e);
                                    return e;
                                })(e),
                            ),
                            { isShown: r } = t;
                        return (0, i.jsx)("div", {
                            ref: C,
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
                                    eS(ej({}, l), {
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
                                        renderNUXHighlight: E,
                                        buttonRef: b,
                                        onClick: null != g ? _ : S,
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
    return (0, y.Z)(a, t.id)
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
        { parentAnalyticsLocation: o } = (0, O.ZP)(),
        s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = r.useContext(p.Sfi),
        [f, h] = r.useState(!1),
        b = null == s ? void 0 : s.id,
        C = (0, u.e7)([en.Z], () => (null != b ? en.Z.getActiveStreamForStreamKey(b) : null), [b]),
        y = (null == s ? void 0 : s.type) === ev.fO.STREAM && null != C && C.ownerId !== (null == t ? void 0 : t.id),
        v = (0, u.Wu)([en.Z], () =>
            en.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        E = (0, R.qY)(l.id),
        j = r.useRef(null),
        S = r.useCallback(
            () =>
                (null == s ? void 0 : s.type) === ev.fO.ACTIVITY &&
                s.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : y
                      ? "STREAM"
                      : null != E
                        ? "EVENT"
                        : "CALL",
            [s, null == a ? void 0 : a.applicationId, y, E],
        ),
        [_, I] = r.useState(S()),
        Z = (0, p.q_F)(
            {
                opacity: f ? 0.2 : 1,
                transform: f && !d.enabled ? "scale(0.7)" : "scale(1)",
                config: {
                    mass: 2,
                    tension: f ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: f,
                },
                onRest: () => {
                    I(S()), h(!1);
                },
            },
            "animate-always",
        );
    r.useEffect(() => {
        S() !== _ && h(!0);
    }, [_, S]);
    let T = r.useCallback(() => {
        if (null != C) (0, g.g)((0, A.V9)(C));
        else for (let e of v) (0, g.g)((0, A.V9)(e));
    }, [v, C]);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: j,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eh.Z, {
                channel: l,
                currentUser: t,
                activeStreams: v,
                handleGoLive: ey.VqG,
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
                ref: j,
                children: ((e, r) => {
                    let c = {
                        isTrayButton: !1,
                        centerButton: !0,
                        popoutOpen: e,
                    };
                    switch (_) {
                        case "ACTIVITY":
                            if (null == s || null == t || s.type !== ev.fO.ACTIVITY || null == a) return;
                            return (0, i.jsx)(
                                K.Z,
                                eS(ej({}, c), {
                                    applicationId: s.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: v.length > 0 ? r : null,
                                }),
                            );
                        case "STREAM":
                            return (0, i.jsx)(
                                Q.O,
                                eS(ej({}, c), {
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
                                eS(ej({}, c), {
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
        o = (0, k.bp)(),
        { parentAnalyticsLocation: s } = (0, O.ZP)(),
        { reachedLimit: c, limit: d } = (0, es.Z)(t),
        p = r.useCallback(() => {
            (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, eC.Z)(() => m.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        f = r.useCallback(() => {
            n ? (0, em.Z)() : p();
        }, [n, p]),
        h = (0, u.e7)([ei.Z], () => {
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
                onCameraUnavailable: f,
                className: ex.controlButton,
                onChange: p,
            }),
            (0, i.jsx)(q.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: ex.controlButton,
            }),
            h
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
        f = r.useRef(null),
        [m, g] = r.useState(void 0),
        y = (0, u.e7)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: x, enabled: P } = (0, eo.Z)(),
        I = (0, ec.Z)(n),
        { suppress: Z, selfMute: A, mute: M } = (0, eu.Z)(n),
        { canGoLive: R } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, w.Z)(er.Z) })),
        L = (0, N.Z)(),
        V = (0, u.e7)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()),
        F = null != L,
        G = (0, u.e7)([el.Z], () => {
            var e;
            return (null != (e = null == L ? void 0 : L.channelId) ? e : el.Z.getVoiceChannelId()) === n.id;
        }),
        W = (0, B.Z)({
            channelId: n.id,
            location: "center-control-tray",
        }),
        q = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: K, limit: Y } = (0, es.Z)(n),
        { analyticsLocations: Q } = (0, O.ZP)(v.Z.VOICE_CONTROL_TRAY),
        en = (0, ee.Hu)({
            location: v.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        { showRefreshedAudioContextMenu: ei } = (0, U.e)({ location: v.Z.VOICE_CONTROL_TRAY }),
        ed = (0, H.Z)(n),
        eh = r.useRef(null),
        eg = r.useRef(null),
        eb = (0, k.bp)(),
        eC = en
            ? (e) => {
                  (0, h.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, i.jsx)(E.default, {
                              onClose: h.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eN("AudioDeviceMenu"),
                              appContext: eb,
                          }),
                      ),
                  );
              }
            : void 0;
    return G
        ? (0, i.jsx)(O.Gt, {
              value: Q,
              children: (0, i.jsxs)(b.Z, {
                  section: ey.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", {
                          className: ex.eventPromptsContainer,
                          children: (0, i.jsx)(D.Z, { channelId: n.id }),
                      }),
                      (0, i.jsxs)("div", {
                          ref: f,
                          className: a()(ex.wrapper, l),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ex.buttonSection,
                                  children: [
                                      (0, i.jsx)(p.yRy, {
                                          targetElementRef: eh,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = en
                                                      ? (0, i.jsx)(et.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : ei
                                                        ? (0, i.jsx)(j.Z, {
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
                                                              appContext: eb,
                                                          })
                                                        : (0, i.jsx)(E.default, {
                                                              onClose: n,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              minimal: !0,
                                                              onInteraction: eN("AudioDeviceMenu"),
                                                              appContext: eb,
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
                                                  ref: eh,
                                                  centerButton: !0,
                                                  onPopoutClick: F ? null : n,
                                                  selfMute: A,
                                                  serverMute: M,
                                                  suppress: Z,
                                                  popoutOpen: r,
                                                  awaitingRemote: V,
                                                  onClick: () => (0, _.Z)(M, Z, ey.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: eC,
                                              });
                                          },
                                      }),
                                      !F &&
                                          (0, i.jsx)(p.yRy, {
                                              targetElementRef: eg,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(z.Z, {
                                                      children: (0, i.jsx)(S.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eN("VideoDeviceMenu"),
                                                          appContext: eb,
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
                                                      ref: eg,
                                                      centerButton: !0,
                                                      hasPermission: I,
                                                      enabled: P,
                                                      cameraUnavailable: x,
                                                      onChange: e_,
                                                      onCameraUnavailable: em.Z,
                                                      channelLimitReached: K,
                                                      channelLimit: Y,
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
                                      !F &&
                                          (0, i.jsx)(eP, {
                                              channel: n,
                                              currentUser: y,
                                              exitFullScreen: c,
                                              canGoLive: R,
                                              hasPermission: I,
                                          }),
                                      !F &&
                                          (0, i.jsx)(eI, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      ed &&
                                          (0, i.jsx)(J.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      W &&
                                          (0, i.jsx)(ef.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, i.jsx)(ep.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: F,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(eZ, {
                                  connectedEmbeddedActivity: q,
                                  currentUser: y,
                                  channel: n,
                                  onDisconnectCall: o,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(O.Gt, {
              value: Q,
              children: (0, i.jsx)(eT, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: I,
                  currentUser: y,
              }),
          });
};
