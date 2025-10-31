n.d(t, {
    NZ: () => ej,
    ZP: () => eT,
    r: () => eE,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(13941),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(846027),
    h = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    _ = n(317381),
    y = n(596040),
    C = n(100527),
    v = n(906732),
    O = n(358221),
    x = n(659580),
    E = n(855844),
    j = n(793865),
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
    D = n(95764),
    L = n(459502),
    k = n(728285),
    U = n(853170),
    B = n(140465),
    F = n(800966),
    V = n(641015),
    H = n(618158),
    G = n(390322),
    W = n(791592),
    z = n(136995),
    q = n(402113),
    Y = n(197016),
    K = n(386000),
    X = n(331197),
    J = n(698877),
    Q = n(25827),
    $ = n(875527),
    ee = n(306609),
    et = n(199902),
    en = n(523746),
    er = n(131951),
    ei = n(944486),
    el = n(594174),
    ea = n(923973),
    eo = n(829750),
    es = n(189771),
    ec = n(294629),
    eu = n(304745),
    ed = n(987329),
    ep = n(544384),
    ef = n(560688),
    eh = n(127608),
    em = n(76021),
    eg = n(173507),
    eb = n(981631),
    e_ = n(354459),
    ey = n(921944),
    eC = n(32312);
function ev() {
    return (ev =
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
function eE(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    (0, P.v)(C.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, eg.Z)(n, t) : n();
}
function ej(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c, analyticsLocations: f } = (0, v.ZP)(),
        h = (0, k.bp)(),
        m = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = i.useRef(null),
        _ = i.useRef(null),
        y = t.getGuildId(),
        C = i.useCallback(() => {
            if ((null == l || l(), !a)) return (0, eh.Z)();
            (0, em.Z)(y, t.id, f);
        }, [y, t.id, a, l, f]),
        O = (0, B.B4)(),
        [x, E] = i.useState(!1),
        j = () => {
            if (((0, P.v)(c, P.d.STREAM, !0), a)) return void C();
            (0, eh.Z)();
        },
        S = () => {
            (0, P.v)(c, P.d.STREAM, !1), (0, M.Z)(g);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (O && 0 === m.length)
                    return (0, r.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    E(!0),
                                    (0, r.jsx)(F.h, {
                                        buttonRef: b,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(ey.L.USER_DISMISS), E(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, r.jsx)(H.Z, {
                children: (0, r.jsx)(p.yRy, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(G.Z, {
                            children: (0, r.jsx)(ep.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: C,
                                appContext: h,
                                onClose: i,
                                onInteraction: eZ("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ev(
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
                                    J.O,
                                    ex(eO({}, l), {
                                        centerButton: !0,
                                        disabled: s || !o,
                                        className: eC.controlButton,
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
                                        renderNUXHighlight: x,
                                        buttonRef: b,
                                        onClick: null != g ? S : j,
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
function eS(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, y.Z)(a, t.id)
        ? (0, r.jsx)("div", {
              className: eC.buttonContainer,
              children: (0, r.jsx)(eu.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l,
              }),
          })
        : null;
}
let eP = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: o } = (0, v.ZP)(),
        s = (0, u.e7)([O.Z], () => O.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = i.useContext(p.Sfi),
        [f, h] = i.useState(!1),
        b = null == s ? void 0 : s.id,
        _ = (0, u.e7)([et.Z], () => (null != b ? et.Z.getActiveStreamForStreamKey(b) : null), [b]),
        y = (null == s ? void 0 : s.type) === e_.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        C = (0, u.Wu)([et.Z], () =>
            et.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        x = (0, R.qY)(l.id),
        E = i.useRef(null),
        j = i.useCallback(
            () =>
                (null == s ? void 0 : s.type) === e_.fO.ACTIVITY &&
                s.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : y
                      ? "STREAM"
                      : null != x
                        ? "EVENT"
                        : "CALL",
            [s, null == a ? void 0 : a.applicationId, y, x],
        ),
        [S, I] = i.useState(j()),
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
                    I(j()), h(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        j() !== S && h(!0);
    }, [S, j]);
    let T = i.useCallback(() => {
        if (null != _) (0, g.g)((0, A.V9)(_));
        else for (let e of C) (0, g.g)((0, A.V9)(e));
    }, [C, _]);
    return (0, r.jsx)(p.yRy, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(ep.Z, {
                channel: l,
                currentUser: t,
                activeStreams: C,
                handleGoLive: eb.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eZ("ManageStreamsMenu"),
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
                ref: E,
                children: ((e, i) => {
                    let c = {
                        isTrayButton: !1,
                        centerButton: !0,
                        popoutOpen: e,
                    };
                    switch (S) {
                        case "ACTIVITY":
                            if (null == s || null == t || s.type !== e_.fO.ACTIVITY || null == a) return;
                            return (0, r.jsx)(
                                q.Z,
                                ex(eO({}, c), {
                                    applicationId: s.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: C.length > 0 ? i : null,
                                }),
                            );
                        case "STREAM":
                            return (0, r.jsx)(
                                J.O,
                                ex(eO({}, c), {
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
                                Y.Z,
                                ex(eO({}, c), {
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, P.v)(o, P.d.DISCONNECT), null == n || n();
                                    },
                                    onPopoutClick: C.length > 0 ? i : null,
                                }),
                            );
                        case "EVENT":
                            return (0, r.jsx)(D.Z, {
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
function eI(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, k.bp)(),
        { parentAnalyticsLocation: s } = (0, v.ZP)(),
        { reachedLimit: c, limit: d } = (0, eo.Z)(t),
        p = i.useCallback(() => {
            (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, eg.Z)(() => m.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        f = i.useCallback(() => {
            n ? (0, ef.Z)() : p();
        }, [n, p]),
        h = (0, u.e7)([en.Z], () => {
            let e = en.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)("div", {
        className: eC.wrapper,
        children: [
            (0, r.jsx)(Q.C, {
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
                className: eC.controlButton,
                onChange: p,
            }),
            (0, r.jsx)(z.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: eC.controlButton,
            }),
            h
                ? (0, r.jsx)(W.Z, {
                      color: "disconnect",
                      channel: t,
                      className: eC.controlButton,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eZ(e) {
    return (0, I.u)(e, C.Z.VOICE_CONTROL_TRAY, { entrypoint: e_.A5.CARET });
}
let eT = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        f = i.useRef(null),
        [m, g] = i.useState(void 0),
        y = (0, u.e7)([el.default], () => {
            let e = el.default.getCurrentUser();
            return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: O, enabled: P } = (0, ea.Z)(),
        I = (0, es.Z)(n),
        { suppress: Z, selfMute: A, mute: M } = (0, ec.Z)(n),
        { canGoLive: R } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, w.Z)(er.Z) })),
        D = (0, N.Z)(),
        k = (0, u.e7)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()),
        B = null != D,
        F = (0, u.e7)([ei.Z], () => {
            var e;
            return (null != (e = null == D ? void 0 : D.channelId) ? e : ei.Z.getVoiceChannelId()) === n.id;
        }),
        H = (0, u.e7)([_.ZP], () => _.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: W, limit: z } = (0, eo.Z)(n),
        { analyticsLocations: q } = (0, v.ZP)(C.Z.VOICE_CONTROL_TRAY),
        Y = (0, $.Hu)({
            location: C.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        { showRefreshedAudioContextMenu: J } = (0, U.e)({ location: C.Z.VOICE_CONTROL_TRAY }),
        et = (0, V.Z)(n),
        en = i.useRef(null),
        eu = i.useRef(null),
        ep = Y
            ? (e) => {
                  (0, h.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(x.default, {
                              onClose: h.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eZ("AudioDeviceMenu"),
                          }),
                      ),
                  );
              }
            : void 0;
    return F
        ? (0, r.jsx)(v.Gt, {
              value: q,
              children: (0, r.jsxs)(b.Z, {
                  section: eb.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)("div", {
                          className: eC.eventPromptsContainer,
                          children: (0, r.jsx)(L.Z, { channelId: n.id }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: a()(eC.wrapper, l),
                          children: [
                              (0, r.jsxs)("div", {
                                  className: eC.buttonSection,
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          targetElementRef: en,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = Y
                                                      ? (0, r.jsx)(ee.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : J
                                                        ? (0, r.jsx)(E.Z, {
                                                              onInteraction: eZ("AudioDeviceMenu"),
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
                                                        : (0, r.jsx)(x.default, {
                                                              onClose: n,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              minimal: !0,
                                                              onInteraction: eZ("AudioDeviceMenu"),
                                                          })),
                                                  (0, r.jsxs)(G.Z, {
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
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(K.Z, {
                                                  ref: en,
                                                  centerButton: !0,
                                                  onPopoutClick: B ? null : n,
                                                  selfMute: A,
                                                  serverMute: M,
                                                  suppress: Z,
                                                  popoutOpen: i,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, S.Z)(M, Z, eb.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ep,
                                              });
                                          },
                                      }),
                                      !B &&
                                          (0, r.jsx)(p.yRy, {
                                              targetElementRef: eu,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(G.Z, {
                                                      children: (0, r.jsx)(j.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eZ("VideoDeviceMenu"),
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
                                                  return (0, r.jsx)(Q.C, {
                                                      ref: eu,
                                                      centerButton: !0,
                                                      hasPermission: I,
                                                      enabled: P,
                                                      cameraUnavailable: O,
                                                      onChange: eE,
                                                      onCameraUnavailable: ef.Z,
                                                      channelLimitReached: W,
                                                      channelLimit: z,
                                                      popoutOpen: i,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eC.buttonSection,
                                  children: [
                                      !B &&
                                          (0, r.jsx)(ej, {
                                              channel: n,
                                              currentUser: y,
                                              exitFullScreen: c,
                                              canGoLive: R,
                                              hasPermission: I,
                                          }),
                                      !B &&
                                          (0, r.jsx)(eS, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      et &&
                                          (0, r.jsx)(X.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, r.jsx)(ed.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: B,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(eP, {
                                  connectedEmbeddedActivity: H,
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
              value: q,
              children: (0, r.jsx)(eI, {
                  channel: n,
                  cameraUnavailable: O,
                  hasCameraPermission: I,
                  currentUser: y,
              }),
          });
};
