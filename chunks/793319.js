(n.d(t, {
    NZ: () => ej,
    ZP: () => eP,
    r: () => ev
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(42133),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(846027),
    f = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    _ = n(40851),
    y = n(317381),
    C = n(596040),
    x = n(100527),
    v = n(906732),
    j = n(358221),
    O = n(659580),
    E = n(793865),
    S = n(575175),
    I = n(522651),
    P = n(795318),
    Z = n(243778),
    T = n(258609),
    N = n(446226),
    A = n(569545),
    w = n(74299),
    R = n(803647),
    M = n(554747),
    D = n(95764),
    k = n(459502),
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
    e_ = n(393740);
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
function eC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    ((0, I.v)(x.Z.VOICE_CONTROL_TRAY, I.d.CAMERA, e), e ? (0, ef.Z)(n, t) : n());
}
function ej(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, v.ZP)(),
        h = (0, _.bp)(),
        f = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreams()),
        m = f.find((e) => e.ownerId === n.id),
        g = i.useRef(null),
        b = i.useRef(null),
        y = t.getGuildId(),
        C = i.useCallback(() => {
            if ((null == l || l(), !a)) return (0, ep.Z)();
            (0, eh.Z)(y, t.id, em.ZY5.GUILD_CHANNEL);
        }, [y, t.id, a, l]),
        x = (0, L.B4)(),
        [j, O] = i.useState(!1),
        E = () => {
            if (((0, I.v)(c, I.d.STREAM, !0), a)) return void C();
            (0, ep.Z)();
        },
        S = () => {
            ((0, I.v)(c, I.d.STREAM, !1), (0, R.Z)(m));
        },
        P = (e, t) => {
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
                            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                    }
                    return i;
                })(n, ['onClick']),
                a = null != m;
            return (0, r.jsx)(
                K.O,
                ex(eC({}, l), {
                    centerButton: !0,
                    disabled: s || !o,
                    className: e_.controlButton,
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
                    renderNUXHighlight: j,
                    buttonRef: g,
                    onClick: null != m ? S : E
                })
            );
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (x && 0 === f.length)
                    return (0, r.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    O(!0),
                                    (0, r.jsx)(U.h, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            (n(eb.L.USER_DISMISS), O(!1));
                                        }
                                    })
                                );
                        }
                    });
            })(),
            (0, r.jsx)(F.Z, {
                children: (0, r.jsx)(p.yRy, {
                    targetElementRef: b,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(H.Z, {
                            children: (0, r.jsx)(eu.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: C,
                                appContext: h,
                                onClose: i,
                                onInteraction: eI('ManageStreamsMenu')
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ey(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            ),
                            { isShown: i } = t;
                        return (0, r.jsx)('div', {
                            ref: b,
                            children: P(n, i)
                        });
                    }
                })
            })
        ]
    });
}
function eO(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, C.Z)(a, t.id)
        ? (0, r.jsx)('div', {
              className: e_.buttonContainer,
              children: (0, r.jsx)(es.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
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
        _ = (0, u.e7)([$.Z], () => (null != b ? $.Z.getActiveStreamForStreamKey(b) : null), [b]),
        y = (null == s ? void 0 : s.type) === eg.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        C = (0, u.Wu)([$.Z], () =>
            $.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        x = (0, M.qY)(l.id),
        O = i.useRef(null),
        E = i.useCallback(() => ((null == s ? void 0 : s.type) === eg.fO.ACTIVITY && s.applicationId === (null == a ? void 0 : a.applicationId) ? 'ACTIVITY' : y ? 'STREAM' : null != x ? 'EVENT' : 'CALL'), [s, null == a ? void 0 : a.applicationId, y, x]),
        [S, P] = i.useState(E()),
        Z = (0, p.q_F)(
            {
                opacity: h ? 0.2 : 1,
                transform: h && !d.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: h ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: h
                },
                onRest: () => {
                    (P(E()), f(!1));
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        E() !== S && f(!0);
    }, [S, E]);
    let T = i.useCallback(() => {
            if (null != _) (0, g.g)((0, A.V9)(_));
            else for (let e of C) (0, g.g)((0, A.V9)(e));
        }, [C, _]),
        N = (e, i) => {
            let c = {
                isTrayButton: !1,
                centerButton: !0,
                popoutOpen: e
            };
            switch (S) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== eg.fO.ACTIVITY || null == a) return;
                    return (0, r.jsx)(
                        z.Z,
                        ex(eC({}, c), {
                            applicationId: s.applicationId,
                            color: 'disconnect',
                            location: a.location,
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        K.O,
                        ex(eC({}, c), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: () => {
                                ((0, I.v)(o, I.d.STOP_WATCHING), T());
                            },
                            onPopoutClick: C.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        W.Z,
                        ex(eC({}, c), {
                            color: 'disconnect',
                            onClick: () => {
                                ((0, I.v)(o, I.d.DISCONNECT), null == n || n());
                            },
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(D.Z, {
                        channelId: l.id,
                        onClick: () => {
                            ((0, I.v)(o, I.d.DISCONNECT), m.default.disconnect(), null == n || n());
                        }
                    });
            }
        };
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
                onInteraction: eI('ManageStreamsMenu')
            });
        },
        position: 'top',
        align: 'center',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(c.animated.div, {
                style: Z,
                ref: O,
                children: N(i, n)
            });
        }
    });
});
function eS(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, _.bp)(),
        { parentAnalyticsLocation: s } = (0, v.ZP)(),
        { reachedLimit: c, limit: d } = (0, el.Z)(t),
        p = i.useCallback(() => {
            ((0, I.v)(s, I.d.JOIN_VIDEO_CALL), (0, ef.Z)(() => m.default.selectVoiceChannel(t.id, !0), o));
        }, [t.id, o, s]),
        h = i.useCallback(() => {
            n ? (0, ed.Z)() : p();
        }, [n, p]),
        f = (0, u.e7)([ee.Z], () => {
            let e = ee.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)('div', {
        className: e_.wrapper,
        children: [
            (0, r.jsx)(X.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'join',
                channelLimitReached: c,
                channelLimit: d,
                channel: t,
                cameraUnavailable: n,
                hasPermission: l,
                onCameraUnavailable: h,
                className: e_.controlButton,
                onChange: p
            }),
            (0, r.jsx)(V.Z, {
                centerButton: !0,
                color: 'join',
                channel: t,
                className: e_.controlButton
            }),
            f
                ? (0, r.jsx)(G.Z, {
                      color: 'disconnect',
                      channel: t,
                      className: e_.controlButton,
                      isTrayButton: !1
                  })
                : null
        ]
    });
}
function eI(e) {
    return (0, P.u)(e, x.Z.VOICE_CONTROL_TRAY, { entrypoint: eg.A5.CARET });
}
let eP = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        h = i.useRef(null),
        [m, g] = i.useState(void 0),
        _ = (0, u.e7)([er.default], () => {
            let e = er.default.getCurrentUser();
            return (s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e);
        }),
        { cameraUnavailable: C, enabled: j } = (0, ei.Z)(),
        I = (0, ea.Z)(n),
        { suppress: P, selfMute: Z, mute: A } = (0, eo.Z)(n),
        { canGoLive: R } = (0, u.cj)([et.Z], () => ({ canGoLive: (0, w.Z)(et.Z) })),
        M = (0, N.Z)(),
        D = (0, u.e7)([T.Z], () => null != T.Z.getAwaitingRemoteSessionInfo()),
        L = null != M,
        U = (0, u.e7)([en.Z], () => {
            var e;
            return (null != (e = null == M ? void 0 : M.channelId) ? e : en.Z.getVoiceChannelId()) === n.id;
        }),
        F = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: G, limit: V } = (0, el.Z)(n),
        { analyticsLocations: z } = (0, v.ZP)(x.Z.VOICE_CONTROL_TRAY),
        W = (0, Q.Hu)({
            location: x.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0
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
                              onInteraction: eI('AudioDeviceMenu')
                          })
                      )
                  );
              }
            : void 0;
    return U
        ? (0, r.jsx)(v.Gt, {
              value: z,
              children: (0, r.jsxs)(b.Z, {
                  section: em.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: e_.eventPromptsContainer,
                          children: (0, r.jsx)(k.Z, { channelId: n.id })
                      }),
                      (0, r.jsxs)('div', {
                          ref: h,
                          className: a()(e_.wrapper, l),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: e_.buttonSection,
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          targetElementRef: $,
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(H.Z, {
                                                  children: (0, r.jsx)(J.R, {
                                                      onClose: t,
                                                      location: x.Z.VOICE_CONTROL_TRAY,
                                                      onInteraction: eI('AudioDeviceMenu')
                                                  })
                                              });
                                          },
                                          align: 'center',
                                          position: 'top',
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
                                                  suppress: P,
                                                  popoutOpen: i,
                                                  awaitingRemote: D,
                                                  onClick: () => (0, S.Z)(A, P, em.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: es
                                              });
                                          }
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
                                                          onInteraction: eI('VideoDeviceMenu')
                                                      })
                                                  });
                                              },
                                              position: 'top',
                                              align: 'right',
                                              spacing: 16,
                                              animation: p.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: i } = t;
                                                  return (0, r.jsx)(X.C, {
                                                      ref: ee,
                                                      centerButton: !0,
                                                      hasPermission: I,
                                                      enabled: j,
                                                      cameraUnavailable: C,
                                                      onChange: ev,
                                                      onCameraUnavailable: ed.Z,
                                                      channelLimitReached: G,
                                                      channelLimit: V,
                                                      popoutOpen: i,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: e_.buttonSection,
                                  children: [
                                      !L &&
                                          (0, r.jsx)(ej, {
                                              channel: n,
                                              currentUser: _,
                                              exitFullScreen: c,
                                              canGoLive: R,
                                              hasPermission: I
                                          }),
                                      !L &&
                                          (0, r.jsx)(eO, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g
                                          }),
                                      K &&
                                          (0, r.jsx)(q.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g
                                          }),
                                      (0, r.jsx)(ec.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: L
                                      })
                                  ]
                              }),
                              (0, r.jsx)(eE, {
                                  connectedEmbeddedActivity: F,
                                  currentUser: _,
                                  channel: n,
                                  onDisconnectCall: o
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(v.Gt, {
              value: z,
              children: (0, r.jsx)(eS, {
                  channel: n,
                  cameraUnavailable: C,
                  hasCameraPermission: I,
                  currentUser: _
              })
          });
};
