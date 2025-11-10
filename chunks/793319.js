n.d(t, {
    NZ: () => eE,
    ZP: () => eT,
    r: () => eO,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(509442),
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
    D = n(459502),
    k = n(728285),
    U = n(853170),
    B = n(140465),
    H = n(800966),
    V = n(641015),
    F = n(618158),
    G = n(390322),
    z = n(791592),
    W = n(136995),
    q = n(402113),
    K = n(197016),
    Y = n(386000),
    X = n(331197),
    J = n(698877),
    Q = n(25827),
    $ = n(875527),
    ee = n(306609),
    et = n(199902),
    en = n(523746),
    ei = n(131951),
    er = n(944486),
    el = n(594174),
    ea = n(923973),
    eo = n(829750),
    es = n(189771),
    ec = n(294629),
    eu = n(304745),
    ed = n(987329),
    ep = n(544384),
    eh = n(560688),
    ef = n(127608),
    em = n(76021),
    eg = n(173507),
    eb = n(981631),
    ey = n(354459),
    eC = n(921944),
    ev = n(32312);
function e_() {
    return (e_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function ex(e) {
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
function ej(e, t) {
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
function eO(e, t) {
    if (ei.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    (0, P.v)(v.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, eg.Z)(n, t) : n();
}
function eE(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c, analyticsLocations: h } = (0, _.ZP)(),
        f = (0, k.bp)(),
        m = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = r.useRef(null),
        y = r.useRef(null),
        C = t.getGuildId(),
        v = r.useCallback(() => {
            if ((null == l || l(), !a)) return (0, ef.Z)();
            (0, em.Z)(C, t.id, h);
        }, [C, t.id, a, l, h]),
        x = (0, B.B4)(),
        [j, O] = r.useState(!1),
        E = () => {
            if (((0, P.v)(c, P.d.STREAM, !0), a)) return void v();
            (0, ef.Z)();
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
                                            n(eC.L.USER_DISMISS), O(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, i.jsx)(F.Z, {
                children: (0, i.jsx)(p.yRy, {
                    targetElementRef: y,
                    renderPopout: (e) => {
                        let { closePopout: r } = e;
                        return (0, i.jsx)(G.Z, {
                            children: (0, i.jsx)(ep.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: v,
                                appContext: f,
                                onClose: r,
                                onInteraction: eZ("ManageStreamsMenu"),
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
                                    J.O,
                                    ej(ex({}, l), {
                                        centerButton: !0,
                                        disabled: s || !o,
                                        className: ev.controlButton,
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
function eS(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: r, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, C.Z)(a, t.id)
        ? (0, i.jsx)("div", {
              className: ev.buttonContainer,
              children: (0, i.jsx)(eu.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: r,
                  setWhichPopoutIsOpen: l,
              }),
          })
        : null;
}
let eP = r.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: o } = (0, _.ZP)(),
        s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = r.useContext(p.Sfi),
        [h, f] = r.useState(!1),
        b = null == s ? void 0 : s.id,
        y = (0, u.e7)([et.Z], () => (null != b ? et.Z.getActiveStreamForStreamKey(b) : null), [b]),
        C = (null == s ? void 0 : s.type) === ey.fO.STREAM && null != y && y.ownerId !== (null == t ? void 0 : t.id),
        v = (0, u.Wu)([et.Z], () =>
            et.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        j = (0, R.qY)(l.id),
        O = r.useRef(null),
        E = r.useCallback(
            () =>
                (null == s ? void 0 : s.type) === ey.fO.ACTIVITY &&
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
            return (0, i.jsx)(ep.Z, {
                channel: l,
                currentUser: t,
                activeStreams: v,
                handleGoLive: eb.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eZ("ManageStreamsMenu"),
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
                            if (null == s || null == t || s.type !== ey.fO.ACTIVITY || null == a) return;
                            return (0, i.jsx)(
                                q.Z,
                                ej(ex({}, c), {
                                    applicationId: s.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: v.length > 0 ? r : null,
                                }),
                            );
                        case "STREAM":
                            return (0, i.jsx)(
                                J.O,
                                ej(ex({}, c), {
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
                                K.Z,
                                ej(ex({}, c), {
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
function eI(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, k.bp)(),
        { parentAnalyticsLocation: s } = (0, _.ZP)(),
        { reachedLimit: c, limit: d } = (0, eo.Z)(t),
        p = r.useCallback(() => {
            (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, eg.Z)(() => m.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        h = r.useCallback(() => {
            n ? (0, eh.Z)() : p();
        }, [n, p]),
        f = (0, u.e7)([en.Z], () => {
            let e = en.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, i.jsxs)("div", {
        className: ev.wrapper,
        children: [
            (0, i.jsx)(Q.C, {
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
                className: ev.controlButton,
                onChange: p,
            }),
            (0, i.jsx)(W.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: ev.controlButton,
            }),
            f
                ? (0, i.jsx)(z.Z, {
                      color: "disconnect",
                      channel: t,
                      className: ev.controlButton,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eZ(e) {
    return (0, I.u)(e, v.Z.VOICE_CONTROL_TRAY, { entrypoint: ey.A5.CARET });
}
let eT = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        h = r.useRef(null),
        [m, g] = r.useState(void 0),
        C = (0, u.e7)([el.default], () => {
            let e = el.default.getCurrentUser();
            return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: x, enabled: P } = (0, ea.Z)(),
        I = (0, es.Z)(n),
        { suppress: Z, selfMute: A, mute: M } = (0, ec.Z)(n),
        { canGoLive: R } = (0, u.cj)([ei.Z], () => ({ canGoLive: (0, w.Z)(ei.Z) })),
        L = (0, N.Z)(),
        k = (0, u.e7)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()),
        B = null != L,
        H = (0, u.e7)([er.Z], () => {
            var e;
            return (null != (e = null == L ? void 0 : L.channelId) ? e : er.Z.getVoiceChannelId()) === n.id;
        }),
        F = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: z, limit: W } = (0, eo.Z)(n),
        { analyticsLocations: q } = (0, _.ZP)(v.Z.VOICE_CONTROL_TRAY),
        K = (0, $.Hu)({
            location: v.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        { showRefreshedAudioContextMenu: J } = (0, U.e)({ location: v.Z.VOICE_CONTROL_TRAY }),
        et = (0, V.Z)(n),
        en = r.useRef(null),
        eu = r.useRef(null),
        ep = K
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
                              onInteraction: eZ("AudioDeviceMenu"),
                          }),
                      ),
                  );
              }
            : void 0;
    return H
        ? (0, i.jsx)(_.Gt, {
              value: q,
              children: (0, i.jsxs)(b.Z, {
                  section: eb.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)("div", {
                          className: ev.eventPromptsContainer,
                          children: (0, i.jsx)(D.Z, { channelId: n.id }),
                      }),
                      (0, i.jsxs)("div", {
                          ref: h,
                          className: a()(ev.wrapper, l),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ev.buttonSection,
                                  children: [
                                      (0, i.jsx)(p.yRy, {
                                          targetElementRef: en,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = K
                                                      ? (0, i.jsx)(ee.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : J
                                                        ? (0, i.jsx)(O.Z, {
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
                                                        : (0, i.jsx)(j.default, {
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
                                                  (0, i.jsxs)(G.Z, {
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
                                              return (0, i.jsx)(Y.Z, {
                                                  ref: en,
                                                  centerButton: !0,
                                                  onPopoutClick: B ? null : n,
                                                  selfMute: A,
                                                  serverMute: M,
                                                  suppress: Z,
                                                  popoutOpen: r,
                                                  awaitingRemote: k,
                                                  onClick: () => (0, S.Z)(M, Z, eb.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ep,
                                              });
                                          },
                                      }),
                                      !B &&
                                          (0, i.jsx)(p.yRy, {
                                              targetElementRef: eu,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(G.Z, {
                                                      children: (0, i.jsx)(E.Z, {
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
                                                      { isShown: r } = t;
                                                  return (0, i.jsx)(Q.C, {
                                                      ref: eu,
                                                      centerButton: !0,
                                                      hasPermission: I,
                                                      enabled: P,
                                                      cameraUnavailable: x,
                                                      onChange: eO,
                                                      onCameraUnavailable: eh.Z,
                                                      channelLimitReached: z,
                                                      channelLimit: W,
                                                      popoutOpen: r,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: ev.buttonSection,
                                  children: [
                                      !B &&
                                          (0, i.jsx)(eE, {
                                              channel: n,
                                              currentUser: C,
                                              exitFullScreen: c,
                                              canGoLive: R,
                                              hasPermission: I,
                                          }),
                                      !B &&
                                          (0, i.jsx)(eS, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      et &&
                                          (0, i.jsx)(X.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g,
                                          }),
                                      (0, i.jsx)(ed.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: B,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(eP, {
                                  connectedEmbeddedActivity: F,
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
              value: q,
              children: (0, i.jsx)(eI, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: I,
                  currentUser: C,
              }),
          });
};
