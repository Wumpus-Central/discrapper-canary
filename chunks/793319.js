n.d(t, {
    NZ: () => e_,
    ZP: () => eT,
    r: () => eS,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(81239),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    f = n(846027),
    h = n(239091),
    g = n(287734),
    m = n(872810),
    b = n(410575),
    y = n(317381),
    v = n(596040),
    O = n(100527),
    j = n(906732),
    x = n(358221),
    C = n(659580),
    E = n(855844),
    S = n(793865),
    _ = n(575175),
    I = n(522651),
    P = n(795318),
    Z = n(243778),
    N = n(258609),
    T = n(446226),
    A = n(569545),
    w = n(74299),
    R = n(803647),
    D = n(554747),
    M = n(95764),
    k = n(459502),
    L = n(728285),
    U = n(140465),
    G = n(800966),
    B = n(675547),
    F = n(641015),
    H = n(618158),
    V = n(390322),
    z = n(791592),
    W = n(136995),
    K = n(402113),
    Y = n(197016),
    q = n(386000),
    X = n(331197),
    Q = n(698877),
    J = n(25827),
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
    eu = n(705742),
    ed = n(987329),
    ep = n(868812),
    ef = n(544384),
    eh = n(560688),
    eg = n(127608),
    em = n(76021),
    eb = n(173507),
    ey = n(981631),
    ev = n(354459),
    eO = n(921944),
    ej = n(462081);
function ex() {
    return (ex =
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
function eE(e, t) {
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
function eS(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => f.Z.setVideoEnabled(e);
    (0, I.v)(O.Z.VOICE_CONTROL_TRAY, I.d.CAMERA, e), e ? (0, eb.Z)(n, t) : n();
}
function e_(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c, analyticsLocations: f } = (0, j.ZP)(),
        h = (0, L.bp)(),
        g = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()),
        m = g.find((e) => e.ownerId === n.id),
        b = i.useRef(null),
        y = i.useRef(null),
        v = t.getGuildId(),
        O = i.useCallback(() => {
            if ((null == l || l(), !a)) return (0, eg.Z)();
            (0, em.Z)(v, t.id, f);
        }, [v, t.id, a, l, f]),
        x = (0, U.B4)(),
        [C, E] = i.useState(!1),
        S = () => {
            if (((0, I.v)(c, I.d.STREAM, !0), a)) return void O();
            (0, eg.Z)();
        },
        _ = () => {
            (0, I.v)(c, I.d.STREAM, !1), (0, R.Z)(m);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (x && 0 === g.length)
                    return (0, r.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    E(!0),
                                    (0, r.jsx)(G.h, {
                                        buttonRef: b,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eO.L.USER_DISMISS), E(!1);
                                        },
                                    })
                                );
                        },
                    });
            })(),
            (0, r.jsx)(H.Z, {
                children: (0, r.jsx)(p.yRy, {
                    targetElementRef: y,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(V.Z, {
                            children: (0, r.jsx)(ef.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: O,
                                appContext: h,
                                onClose: i,
                                onInteraction: eN("ManageStreamsMenu"),
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ex(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError("Cannot destructure " + e);
                                    return e;
                                })(e),
                            ),
                            { isShown: i } = t;
                        return (0, r.jsx)("div", {
                            ref: y,
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
                                    a = null != m;
                                return (0, r.jsx)(
                                    Q.O,
                                    eE(eC({}, l), {
                                        centerButton: !0,
                                        disabled: s || !o,
                                        className: ej.controlButton,
                                        hasPermission: o,
                                        streamActive: null != m,
                                        isSelfStream: !0,
                                        onPopoutClick: a
                                            ? function (e) {
                                                  null == i || i(e);
                                              }
                                            : null,
                                        popoutOpen: t,
                                        shouldShowTooltip: !t,
                                        renderNUXHighlight: C,
                                        buttonRef: b,
                                        onClick: null != m ? _ : S,
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
function eI(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, v.Z)(a, t.id)
        ? (0, r.jsx)("div", {
              className: ej.buttonContainer,
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
        { parentAnalyticsLocation: o } = (0, j.ZP)(),
        s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = i.useContext(p.Sfi),
        [f, h] = i.useState(!1),
        b = null == s ? void 0 : s.id,
        y = (0, u.e7)([et.Z], () => (null != b ? et.Z.getActiveStreamForStreamKey(b) : null), [b]),
        v = (null == s ? void 0 : s.type) === ev.fO.STREAM && null != y && y.ownerId !== (null == t ? void 0 : t.id),
        O = (0, u.Wu)([et.Z], () =>
            et.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            }),
        ),
        C = (0, D.qY)(l.id),
        E = i.useRef(null),
        S = i.useCallback(
            () =>
                (null == s ? void 0 : s.type) === ev.fO.ACTIVITY &&
                s.applicationId === (null == a ? void 0 : a.applicationId)
                    ? "ACTIVITY"
                    : v
                      ? "STREAM"
                      : null != C
                        ? "EVENT"
                        : "CALL",
            [s, null == a ? void 0 : a.applicationId, v, C],
        ),
        [_, P] = i.useState(S()),
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
                    P(S()), h(!1);
                },
            },
            "animate-always",
        );
    i.useEffect(() => {
        S() !== _ && h(!0);
    }, [_, S]);
    let N = i.useCallback(() => {
        if (null != y) (0, m.g)((0, A.V9)(y));
        else for (let e of O) (0, m.g)((0, A.V9)(e));
    }, [O, y]);
    return (0, r.jsx)(p.yRy, {
        targetElementRef: E,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(ef.Z, {
                channel: l,
                currentUser: t,
                activeStreams: O,
                handleGoLive: ey.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eN("ManageStreamsMenu"),
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
                    switch (_) {
                        case "ACTIVITY":
                            if (null == s || null == t || s.type !== ev.fO.ACTIVITY || null == a) return;
                            return (0, r.jsx)(
                                K.Z,
                                eE(eC({}, c), {
                                    applicationId: s.applicationId,
                                    color: "disconnect",
                                    location: a.location,
                                    onPopoutClick: O.length > 0 ? i : null,
                                }),
                            );
                        case "STREAM":
                            return (0, r.jsx)(
                                Q.O,
                                eE(eC({}, c), {
                                    hasPermission: !0,
                                    streamActive: !0,
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, I.v)(o, I.d.STOP_WATCHING), N();
                                    },
                                    onPopoutClick: O.length > 1 ? i : null,
                                    isSelfStream: !1,
                                }),
                            );
                        case "CALL":
                            return (0, r.jsx)(
                                Y.Z,
                                eE(eC({}, c), {
                                    color: "disconnect",
                                    onClick: () => {
                                        (0, I.v)(o, I.d.DISCONNECT), null == n || n();
                                    },
                                    onPopoutClick: O.length > 0 ? i : null,
                                }),
                            );
                        case "EVENT":
                            return (0, r.jsx)(M.Z, {
                                channelId: l.id,
                                onClick: () => {
                                    (0, I.v)(o, I.d.DISCONNECT), g.default.disconnect(), null == n || n();
                                },
                            });
                    }
                })(d, u),
            });
        },
    });
});
function eZ(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, L.bp)(),
        { parentAnalyticsLocation: s } = (0, j.ZP)(),
        { reachedLimit: c, limit: d } = (0, eo.Z)(t),
        p = i.useCallback(() => {
            (0, I.v)(s, I.d.JOIN_VIDEO_CALL), (0, eb.Z)(() => g.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        f = i.useCallback(() => {
            n ? (0, eh.Z)() : p();
        }, [n, p]),
        h = (0, u.e7)([en.Z], () => {
            let e = en.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)("div", {
        className: ej.wrapper,
        children: [
            (0, r.jsx)(J.C, {
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
                className: ej.controlButton,
                onChange: p,
            }),
            (0, r.jsx)(W.Z, {
                centerButton: !0,
                color: "join",
                channel: t,
                className: ej.controlButton,
            }),
            h
                ? (0, r.jsx)(z.Z, {
                      color: "disconnect",
                      channel: t,
                      className: ej.controlButton,
                      isTrayButton: !1,
                  })
                : null,
        ],
    });
}
function eN(e) {
    return (0, P.u)(e, O.Z.VOICE_CONTROL_TRAY, { entrypoint: ev.A5.CARET });
}
let eT = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        f = i.useRef(null),
        [g, m] = i.useState(void 0),
        v = (0, u.e7)([el.default], () => {
            let e = el.default.getCurrentUser();
            return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e;
        }),
        { cameraUnavailable: x, enabled: I } = (0, ea.Z)(),
        P = (0, es.Z)(n),
        { suppress: Z, selfMute: A, mute: R } = (0, ec.Z)(n),
        { canGoLive: D } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, w.Z)(er.Z) })),
        M = (0, T.Z)(),
        U = (0, u.e7)([N.default], () => null != N.default.getAwaitingRemoteSessionInfo()),
        G = null != M,
        H = (0, u.e7)([ei.Z], () => {
            var e;
            return (null != (e = null == M ? void 0 : M.channelId) ? e : ei.Z.getVoiceChannelId()) === n.id;
        }),
        z = (0, B.Z)({
            channelId: n.id,
            location: "center-control-tray",
        }),
        W = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: K, limit: Y } = (0, eo.Z)(n),
        { analyticsLocations: Q } = (0, j.ZP)(O.Z.VOICE_CONTROL_TRAY),
        et = (0, $.Hu)({
            location: O.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0,
        }),
        en = (0, F.Z)(n),
        eu = i.useRef(null),
        ef = i.useRef(null),
        eg = (0, L.bp)(),
        em = et
            ? (e) => {
                  (0, h.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(C.default, {
                              onClose: h.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eN("AudioDeviceMenu"),
                              appContext: eg,
                          }),
                      ),
                  );
              }
            : void 0;
    return H
        ? (0, r.jsx)(j.Gt, {
              value: Q,
              children: (0, r.jsxs)(b.Z, {
                  section: ey.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)("div", {
                          className: ej.eventPromptsContainer,
                          children: (0, r.jsx)(k.Z, { channelId: n.id }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: a()(ej.wrapper, l),
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ej.buttonSection,
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          targetElementRef: eu,
                                          renderPopout: (e) => {
                                              let t,
                                                  { closePopout: n } = e;
                                              return (
                                                  (t = et
                                                      ? (0, r.jsx)(ee.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: n,
                                                        })
                                                      : (0, r.jsx)(E.Z, {
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
                                                            appContext: eg,
                                                        })),
                                                  (0, r.jsxs)(V.Z, {
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
                                              return (0, r.jsx)(q.Z, {
                                                  ref: eu,
                                                  centerButton: !0,
                                                  onPopoutClick: G ? null : n,
                                                  selfMute: A,
                                                  serverMute: R,
                                                  suppress: Z,
                                                  popoutOpen: i,
                                                  awaitingRemote: U,
                                                  onClick: () => (0, _.Z)(R, Z, ey.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: em,
                                              });
                                          },
                                      }),
                                      !G &&
                                          (0, r.jsx)(p.yRy, {
                                              targetElementRef: ef,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(V.Z, {
                                                      children: (0, r.jsx)(S.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eN("VideoDeviceMenu"),
                                                          appContext: eg,
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
                                                  return (0, r.jsx)(J.C, {
                                                      ref: ef,
                                                      centerButton: !0,
                                                      hasPermission: P,
                                                      enabled: I,
                                                      cameraUnavailable: x,
                                                      onChange: eS,
                                                      onCameraUnavailable: eh.Z,
                                                      channelLimitReached: K,
                                                      channelLimit: Y,
                                                      popoutOpen: i,
                                                      onPopoutClick: n,
                                                  });
                                              },
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ej.buttonSection,
                                  children: [
                                      !G &&
                                          (0, r.jsx)(e_, {
                                              channel: n,
                                              currentUser: v,
                                              exitFullScreen: c,
                                              canGoLive: D,
                                              hasPermission: P,
                                          }),
                                      !G &&
                                          (0, r.jsx)(eI, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      en &&
                                          (0, r.jsx)(X.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      z &&
                                          (0, r.jsx)(ep.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: m,
                                          }),
                                      (0, r.jsx)(ed.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: g,
                                          setWhichPopoutIsOpen: m,
                                          remoteMode: G,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(eP, {
                                  connectedEmbeddedActivity: W,
                                  currentUser: v,
                                  channel: n,
                                  onDisconnectCall: o,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(j.Gt, {
              value: Q,
              children: (0, r.jsx)(eZ, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: P,
                  currentUser: v,
              }),
          });
};
