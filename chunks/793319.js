n.d(t, {
    NZ: () => eI,
    ZP: () => eT,
    r: () => eE
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(950035),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(846027),
    f = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    _ = n(40851),
    C = n(317381),
    x = n(596040),
    y = n(100527),
    v = n(906732),
    j = n(358221),
    O = n(887012),
    E = n(659580),
    I = n(793865),
    P = n(575175),
    S = n(522651),
    Z = n(795318),
    N = n(243778),
    T = n(258609),
    A = n(446226),
    w = n(569545),
    R = n(74299),
    M = n(803647),
    k = n(554747),
    L = n(95764),
    D = n(459502),
    U = n(140465),
    B = n(800966),
    G = n(641015),
    F = n(618158),
    H = n(390322),
    V = n(791592),
    z = n(136995),
    W = n(402113),
    Y = n(197016),
    q = n(386000),
    K = n(331197),
    X = n(698877),
    Q = n(25827),
    J = n(875527),
    $ = n(306609),
    ee = n(199902),
    et = n(523746),
    en = n(131951),
    er = n(944486),
    ei = n(594174),
    el = n(923973),
    ea = n(983131),
    eo = n(829750),
    es = n(189771),
    ec = n(294629),
    eu = n(304745),
    ed = n(985370),
    ep = n(987329),
    eh = n(544384),
    ef = n(560688),
    em = n(127608),
    eg = n(76021),
    eb = n(173507),
    e_ = n(981631),
    eC = n(354459),
    ex = n(921944),
    ey = n(393740);
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
function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eO(e, t) {
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
    if (en.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    (0, S.v)(y.Z.VOICE_CONTROL_TRAY, S.d.CAMERA, e), e ? (0, eb.Z)(n, t) : n();
}
function eI(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: a, hasPermission: o, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, v.ZP)(),
        h = (0, _.bp)(),
        f = (0, u.Wu)([ee.Z], () => ee.Z.getAllActiveStreams()),
        m = f.find((e) => e.ownerId === n.id),
        g = i.useRef(null),
        b = i.useRef(null),
        C = t.getGuildId(),
        x = i.useCallback(() => {
            if ((null == l || l(), !a)) return (0, em.Z)();
            (0, eg.Z)(C, t.id, e_.ZY5.GUILD_CHANNEL);
        }, [C, t.id, a, l]),
        y = (0, U.B4)(),
        [j, O] = i.useState(!1),
        E = () => {
            if (((0, S.v)(c, S.d.STREAM, !0), a)) return void x();
            (0, em.Z)();
        },
        I = () => {
            (0, S.v)(c, S.d.STREAM, !1), (0, M.Z)(m);
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
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(n, ['onClick']),
                a = null != m;
            return (0, r.jsx)(
                X.O,
                eO(ej({}, l), {
                    centerButton: !0,
                    disabled: s || !o,
                    className: ey.controlButton,
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
                    onClick: null != m ? I : E
                })
            );
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (y && 0 === f.length)
                    return (0, r.jsx)(N.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    O(!0),
                                    (0, r.jsx)(B.h, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(ex.L.USER_DISMISS), O(!1);
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
                            children: (0, r.jsx)(eh.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: x,
                                appContext: h,
                                onClose: i,
                                onInteraction: eN('ManageStreamsMenu')
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ev(
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
function eP(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, x.Z)(a, t.id)
        ? (0, r.jsx)('div', {
              className: ey.buttonContainer,
              children: (0, r.jsx)(eu.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
          })
        : null;
}
let eS = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: a } = e,
        { parentAnalyticsLocation: o } = (0, v.ZP)(),
        s = (0, u.e7)([j.Z], () => j.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = i.useContext(p.Sfi),
        [h, f] = i.useState(!1),
        b = null == s ? void 0 : s.id,
        _ = (0, u.e7)([ee.Z], () => (null != b ? ee.Z.getActiveStreamForStreamKey(b) : null), [b]),
        C = (null == s ? void 0 : s.type) === eC.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        x = (0, u.Wu)([ee.Z], () =>
            ee.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        y = (0, k.qY)(l.id),
        O = i.useRef(null),
        E = i.useCallback(() => ((null == s ? void 0 : s.type) === eC.fO.ACTIVITY && s.applicationId === (null == a ? void 0 : a.applicationId) ? 'ACTIVITY' : C ? 'STREAM' : null != y ? 'EVENT' : 'CALL'), [s, null == a ? void 0 : a.applicationId, C, y]),
        [I, P] = i.useState(E()),
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
                    P(E()), f(!1);
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        E() !== I && f(!0);
    }, [I, E]);
    let N = i.useCallback(() => {
            if (null != _) (0, g.g)((0, w.V9)(_));
            else for (let e of x) (0, g.g)((0, w.V9)(e));
        }, [x, _]),
        T = (e, i) => {
            let c = {
                isTrayButton: !1,
                centerButton: !0,
                popoutOpen: e
            };
            switch (I) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== eC.fO.ACTIVITY || null == a) return;
                    return (0, r.jsx)(
                        W.Z,
                        eO(ej({}, c), {
                            applicationId: s.applicationId,
                            color: 'disconnect',
                            location: a.location,
                            onPopoutClick: x.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        X.O,
                        eO(ej({}, c), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: () => {
                                (0, S.v)(o, S.d.STOP_WATCHING), N();
                            },
                            onPopoutClick: x.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        Y.Z,
                        eO(ej({}, c), {
                            color: 'disconnect',
                            onClick: () => {
                                (0, S.v)(o, S.d.DISCONNECT), null == n || n();
                            },
                            onPopoutClick: x.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(L.Z, {
                        channelId: l.id,
                        onClick: () => {
                            (0, S.v)(o, S.d.DISCONNECT), m.default.disconnect(), null == n || n();
                        }
                    });
            }
        };
    return (0, r.jsx)(p.yRy, {
        targetElementRef: O,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eh.Z, {
                channel: l,
                currentUser: t,
                activeStreams: x,
                handleGoLive: e_.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eN('ManageStreamsMenu')
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
                children: T(i, n)
            });
        }
    });
});
function eZ(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: a } = e,
        o = (0, _.bp)(),
        { parentAnalyticsLocation: s } = (0, v.ZP)(),
        { reachedLimit: c, limit: d } = (0, eo.Z)(t),
        p = i.useCallback(() => {
            (0, S.v)(s, S.d.JOIN_VIDEO_CALL), (0, eb.Z)(() => m.default.selectVoiceChannel(t.id, !0), o);
        }, [t.id, o, s]),
        h = i.useCallback(() => {
            n ? (0, ef.Z)() : p();
        }, [n, p]),
        f = (0, u.e7)([et.Z], () => {
            let e = et.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
        });
    return (0, r.jsxs)('div', {
        className: ey.wrapper,
        children: [
            (0, r.jsx)(Q.C, {
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
                className: ey.controlButton,
                onChange: p
            }),
            (0, r.jsx)(z.Z, {
                centerButton: !0,
                color: 'join',
                channel: t,
                className: ey.controlButton
            }),
            f
                ? (0, r.jsx)(V.Z, {
                      color: 'disconnect',
                      channel: t,
                      className: ey.controlButton,
                      isTrayButton: !1
                  })
                : null
        ]
    });
}
function eN(e) {
    return (0, Z.u)(e, y.Z.VOICE_CONTROL_TRAY, { entrypoint: eC.A5.CARET });
}
let eT = function (e) {
    var t;
    let { channel: n, className: l, onDisconnectCall: o, exitFullScreen: c, idleProps: d } = e,
        h = i.useRef(null),
        [m, g] = i.useState(void 0),
        _ = (0, u.e7)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: x, enabled: j } = (0, el.Z)(),
        S = (0, es.Z)(n),
        { suppress: Z, selfMute: N, mute: w } = (0, ec.Z)(n),
        { canGoLive: M } = (0, u.cj)([en.Z], () => ({ canGoLive: (0, R.Z)(en.Z) })),
        k = (0, A.Z)(),
        L = (0, u.e7)([T.Z], () => null != T.Z.getAwaitingRemoteSessionInfo()),
        U = null != k,
        B = (0, u.e7)([er.Z], () => {
            var e;
            return (null != (e = null == k ? void 0 : k.channelId) ? e : er.Z.getVoiceChannelId()) === n.id;
        }),
        F = (0, O.Z)(n, !0),
        V = (0, u.e7)([C.ZP], () => C.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: z, limit: W } = (0, eo.Z)(n),
        { analyticsLocations: Y } = (0, v.ZP)(y.Z.VOICE_CONTROL_TRAY),
        X = (0, ea.Z)(n),
        ee = (0, J.Hu)({
            location: y.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0
        }),
        et = (0, G.Z)(n),
        eu = i.useRef(null),
        eh = i.useRef(null),
        em = ee
            ? (e) => {
                  (0, f.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(E.default, {
                              onClose: f.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: !0,
                              renderOutputVolume: !0,
                              renderDeafen: !0,
                              minimal: !0,
                              onInteraction: eN('AudioDeviceMenu')
                          })
                      )
                  );
              }
            : void 0;
    return B
        ? (0, r.jsx)(v.Gt, {
              value: Y,
              children: (0, r.jsxs)(b.Z, {
                  section: e_.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: ey.eventPromptsContainer,
                          children: (0, r.jsx)(D.Z, { channelId: n.id })
                      }),
                      (0, r.jsxs)('div', {
                          ref: h,
                          className: a()(ey.wrapper, l),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: ey.buttonSection,
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          targetElementRef: eu,
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(H.Z, {
                                                  children: ee
                                                      ? (0, r.jsx)($.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: t
                                                        })
                                                      : (0, r.jsx)(E.default, {
                                                            onClose: t,
                                                            renderInputDevices: !0,
                                                            renderOutputDevices: !0,
                                                            renderInputModes: !0,
                                                            renderInputVolume: !0,
                                                            renderOutputVolume: !0,
                                                            renderDeafen: !0,
                                                            minimal: !0,
                                                            onInteraction: eN('AudioDeviceMenu')
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
                                              return (0, r.jsx)(q.Z, {
                                                  ref: eu,
                                                  centerButton: !0,
                                                  onPopoutClick: U ? null : n,
                                                  selfMute: N,
                                                  serverMute: w,
                                                  suppress: Z,
                                                  popoutOpen: i,
                                                  awaitingRemote: L,
                                                  onClick: () => (0, P.Z)(w, Z, e_.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: em
                                              });
                                          }
                                      }),
                                      !U &&
                                          (0, r.jsx)(p.yRy, {
                                              targetElementRef: eh,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(H.Z, {
                                                      children: (0, r.jsx)(I.Z, {
                                                          onClose: t,
                                                          minimal: !0,
                                                          onInteraction: eN('VideoDeviceMenu')
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
                                                  return (0, r.jsx)(Q.C, {
                                                      ref: eh,
                                                      centerButton: !0,
                                                      hasPermission: S,
                                                      enabled: j,
                                                      cameraUnavailable: x,
                                                      onChange: eE,
                                                      onCameraUnavailable: ef.Z,
                                                      channelLimitReached: z,
                                                      channelLimit: W,
                                                      popoutOpen: i,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: ey.buttonSection,
                                  children: [
                                      !U &&
                                          (0, r.jsx)(eI, {
                                              channel: n,
                                              currentUser: _,
                                              exitFullScreen: c,
                                              canGoLive: M,
                                              hasPermission: S
                                          }),
                                      !U &&
                                          (0, r.jsx)(eP, {
                                              channel: n,
                                              idle: null == (t = null == d ? void 0 : d.idle) || t,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g
                                          }),
                                      et &&
                                          (0, r.jsx)(K.Z, {
                                              channel: n,
                                              themeable: !0,
                                              whichPopoutIsOpen: m,
                                              setWhichPopoutIsOpen: g
                                          }),
                                      X &&
                                          !F &&
                                          !U &&
                                          (0, r.jsx)('div', {
                                              className: ey.buttonContainer,
                                              children: (0, r.jsx)(ed.Z, { channel: n })
                                          }),
                                      (0, r.jsx)(ep.Z, {
                                          channel: n,
                                          whichPopoutIsOpen: m,
                                          setWhichPopoutIsOpen: g,
                                          remoteMode: U
                                      })
                                  ]
                              }),
                              (0, r.jsx)(eS, {
                                  connectedEmbeddedActivity: V,
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
              value: Y,
              children: (0, r.jsx)(eZ, {
                  channel: n,
                  cameraUnavailable: x,
                  hasCameraPermission: S,
                  currentUser: _
              })
          });
};
