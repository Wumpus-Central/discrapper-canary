n.d(t, {
    NZ: () => eS,
    ZP: () => eR,
    r: () => eP
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(642128),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(846027),
    f = n(287734),
    m = n(872810),
    g = n(410575),
    b = n(40851),
    _ = n(317381),
    C = n(596040),
    v = n(100527),
    y = n(906732),
    x = n(358221),
    j = n(887012),
    O = n(659580),
    E = n(793865),
    N = n(575175),
    I = n(522651),
    P = n(795318),
    S = n(997614),
    Z = n(243778),
    T = n(258609),
    A = n(446226),
    w = n(569545),
    R = n(74299),
    M = n(803647),
    k = n(554747),
    L = n(95764),
    D = n(459502),
    W = n(576645),
    U = n(140465),
    B = n(800966),
    H = n(641015),
    F = n(618158),
    G = n(390322),
    V = n(791592),
    z = n(136995),
    Y = n(402113),
    q = n(197016),
    K = n(386000),
    X = n(698877),
    Q = n(25827),
    J = n(875527),
    $ = n(306609),
    ee = n(199902),
    et = n(523746),
    en = n(131951),
    er = n(944486),
    ei = n(594174),
    el = n(861254),
    eo = n(221241),
    ea = n(923973),
    es = n(983131),
    ec = n(829750),
    eu = n(82965),
    ed = n(189771),
    ep = n(294629),
    eh = n(304745),
    ef = n(985370),
    em = n(987329),
    eg = n(544384),
    eb = n(560688),
    e_ = n(127608),
    eC = n(76021),
    ev = n(173507),
    ey = n(981631),
    ex = n(354459),
    ej = n(921944),
    eO = n(633678);
function eE() {
    return (eE =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function eN(e) {
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
function eI(e, t) {
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
function eP(e, t) {
    if (en.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    (0, I.v)(v.Z.VOICE_CONTROL_TRAY, I.d.CAMERA, e), e ? (0, ev.Z)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: o, hasPermission: a, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, y.ZP)(),
        h = (0, eu.Z)({ location: 'GoLiveButton' }),
        f = (0, b.bp)(),
        m = (0, u.Wu)([ee.Z], () => ee.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        _ = i.useRef(null),
        C = t.getGuildId(),
        v = i.useCallback(() => {
            if ((null == l || l(), !o)) return (0, e_.Z)();
            (0, eC.Z)(C, t.id, ey.ZY5.GUILD_CHANNEL);
        }, [C, t.id, o, l]),
        x = (0, U.B4)({ location: 'GoLiveButton' }),
        [j, O] = i.useState(!1),
        E = (0, W.bK)(),
        [N, P] = i.useState(!1);
    i.useEffect(() => {
        if ((P(t.isHDStreamSplashed && null == g && !E), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                P(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, E]);
    let S = () => {
            if (((0, I.v)(c, I.d.STREAM, !0), o)) {
                v();
                return;
            }
            (0, e_.Z)();
        },
        T = () => {
            (0, I.v)(c, I.d.STREAM, !1), (0, M.Z)(g);
        },
        A = (e, t) => {
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
                o = null != g;
            return (0, r.jsx)(
                X.O,
                eI(eN({}, l), {
                    centerButton: !0,
                    disabled: s || !a,
                    className: h ? void 0 : eO.controlButton,
                    hasPermission: a,
                    streamActive: null != g,
                    isSelfStream: !0,
                    onPopoutClick: o
                        ? function (e) {
                              null == i || i(e);
                          }
                        : null,
                    popoutOpen: t,
                    shouldShowTooltip: !t,
                    premiumGlow: N,
                    renderNUXHighlight: j,
                    buttonRef: _,
                    onClick: null != g ? T : S
                })
            );
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (x && 0 === m.length)
                    return (0, r.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    O(!0),
                                    (0, r.jsx)(B.h, {
                                        buttonRef: _,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(ej.L.USER_DISMISS), O(!1);
                                        }
                                    })
                                );
                        }
                    });
            })(),
            (0, r.jsx)(F.Z, {
                children: (0, r.jsx)(p.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(G.Z, {
                            children: (0, r.jsx)(eg.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: v,
                                appContext: f,
                                onClose: i,
                                onInteraction: ew('ManageStreamsMenu')
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = eE(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            ),
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: A(n, i) });
                    }
                })
            })
        ]
    });
}
function eZ(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        o = t.getGuildId();
    return (0, C.Z)(o, t.id)
        ? (0, r.jsx)('div', {
              className: eO.buttonContainer,
              children: (0, r.jsx)(eh.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
          })
        : null;
}
let eT = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: o } = e,
        { parentAnalyticsLocation: a } = (0, y.ZP)(),
        s = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = i.useContext(p.Sfi),
        [h, g] = i.useState(!1),
        b = null == s ? void 0 : s.id,
        _ = (0, u.e7)([ee.Z], () => (null != b ? ee.Z.getActiveStreamForStreamKey(b) : null), [b]),
        C = (null == s ? void 0 : s.type) === ex.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        v = (0, u.Wu)([ee.Z], () =>
            ee.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        j = (0, k.qY)(l.id),
        O = i.useCallback(() => ((null == s ? void 0 : s.type) === ex.fO.ACTIVITY && s.applicationId === (null == o ? void 0 : o.applicationId) ? 'ACTIVITY' : C ? 'STREAM' : null != j ? 'EVENT' : 'CALL'), [s, null == o ? void 0 : o.applicationId, C, j]),
        [E, N] = i.useState(O()),
        P = (0, eu.Z)({ location: 'DisconnectButton' }),
        S = (0, p.q_F)(
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
                    N(O()), g(!1);
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        O() !== E && g(!0);
    }, [E, O]);
    let Z = i.useCallback(() => {
            if (null != _) (0, m.g)((0, w.V9)(_));
            else for (let e of v) (0, m.g)((0, w.V9)(e));
        }, [v, _]),
        T = (e, i) => {
            let c = P
                ? {
                      fullRegionButton: !0,
                      centerButton: !0,
                      popoutOpen: e
                  }
                : {
                      centerButton: !0,
                      className: eO.controlButton,
                      popoutOpen: e
                  };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== ex.fO.ACTIVITY || null == o) return;
                    return (0, r.jsx)(
                        Y.Z,
                        eI(eN({}, c), {
                            applicationId: s.applicationId,
                            color: 'disconnect',
                            location: o.location,
                            onPopoutClick: v.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        X.O,
                        eI(eN({}, c), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: () => {
                                (0, I.v)(a, I.d.STOP_WATCHING), Z();
                            },
                            onPopoutClick: v.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        q.Z,
                        eI(eN({}, c), {
                            color: 'disconnect',
                            onClick: () => {
                                (0, I.v)(a, I.d.DISCONNECT), null == n || n();
                            },
                            onPopoutClick: v.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(L.Z, {
                        channelId: l.id,
                        onClick: () => {
                            (0, I.v)(a, I.d.DISCONNECT), f.default.disconnect(), null == n || n();
                        }
                    });
            }
        };
    return (0, r.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eg.Z, {
                channel: l,
                currentUser: t,
                activeStreams: v,
                handleGoLive: ey.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: ew('ManageStreamsMenu')
            });
        },
        position: 'top',
        align: 'center',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(c.animated.div, {
                style: S,
                children: T(i, n)
            });
        }
    });
});
function eA(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: o } = e,
        a = (0, b.bp)(),
        { parentAnalyticsLocation: s } = (0, y.ZP)(),
        { reachedLimit: c, limit: d } = (0, ec.Z)(t),
        p = i.useCallback(() => {
            (0, I.v)(s, I.d.JOIN_VIDEO_CALL), (0, ev.Z)(() => f.default.selectVoiceChannel(t.id, !0), a);
        }, [t.id, a, s]),
        h = i.useCallback(() => {
            n ? (0, eb.Z)() : p();
        }, [n, p]),
        m = (0, u.e7)([et.Z], () => {
            let e = et.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(o.id)) === !0;
        }),
        g = (0, eu.Z)({ location: 'JoinCall' });
    return (0, r.jsxs)(r.Fragment, {
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
                className: eO.controlButton,
                onChange: p
            }),
            (0, r.jsx)(z.Z, {
                centerButton: !0,
                color: 'join',
                channel: t,
                className: eO.controlButton,
                fullRegionButton: g
            }),
            m
                ? (0, r.jsx)(V.Z, {
                      color: 'disconnect',
                      channel: t,
                      className: eO.controlButton,
                      fullRegionButton: g
                  })
                : null
        ]
    });
}
function ew(e) {
    return (0, P.u)(e, v.Z.VOICE_CONTROL_TRAY, { entrypoint: ex.A5.CARET });
}
let eR = function (e) {
    var t, n;
    let { channel: l, className: a, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: f } = (0, el.ZP)({ location: 'CenterControlTray' }),
        m = (0, eu.Z)({ location: 'CenterControlTray' }),
        { coloredIconsEnabled: b, simplifiedSettingsEnabled: C } = (0, eo.Z)({ location: 'CenterControlTray' }),
        [x, I] = i.useState(void 0),
        P = (0, u.e7)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: Z, enabled: w } = (0, ea.Z)(),
        M = (0, ed.Z)(l),
        { suppress: k, selfMute: L, mute: W } = (0, ep.Z)(l),
        { canGoLive: U } = (0, u.cj)([en.Z], () => ({ canGoLive: (0, R.Z)(en.Z) })),
        B = (0, A.Z)(),
        F = (0, u.e7)([T.Z], () => null != T.Z.getAwaitingRemoteSessionInfo()),
        V = null != B,
        z = (0, u.e7)([er.Z], () => {
            var e;
            return (null !== (e = null == B ? void 0 : B.channelId) && void 0 !== e ? e : er.Z.getVoiceChannelId()) === l.id;
        }),
        Y = (0, j.Z)(l, !0),
        q = (0, u.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivityForChannel(l.id)),
        { reachedLimit: X, limit: ee } = (0, ec.Z)(l),
        { analyticsLocations: et } = (0, y.ZP)(v.Z.VOICE_CONTROL_TRAY),
        eh = (0, es.Z)(l),
        eg = (0, J.Hu)({
            location: v.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0
        });
    if (!z)
        return (0, r.jsx)(y.Gt, {
            value: et,
            children: (0, r.jsx)(eA, {
                channel: l,
                cameraUnavailable: Z,
                hasCameraPermission: M,
                currentUser: P
            })
        });
    let e_ = eh && !Y,
        eC = (0, H.Z)(l);
    return m
        ? (0, r.jsx)(y.Gt, {
              value: et,
              children: (0, r.jsxs)(g.Z, {
                  section: ey.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eO.eventPromptsContainer,
                          children: (0, r.jsx)(D.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eO.experimentWrapper, a),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: o()(eO.buttonSection, { [eO.experimentButtonSection]: b }),
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(G.Z, {
                                                  children: eg
                                                      ? (0, r.jsx)($.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: t
                                                        })
                                                      : (0, r.jsx)(O.default, {
                                                            onClose: t,
                                                            renderInputDevices: !0,
                                                            renderOutputDevices: !0,
                                                            renderInputModes: !0,
                                                            renderInputVolume: C,
                                                            renderOutputVolume: C,
                                                            renderDeafen: C,
                                                            simplified: C,
                                                            onInteraction: ew('AudioDeviceMenu')
                                                        })
                                              });
                                          },
                                          ignoreModalClicks: eg,
                                          align: 'center',
                                          position: 'top',
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(K.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: V ? null : n,
                                                  selfMute: L,
                                                  serverMute: W,
                                                  suppress: k,
                                                  popoutOpen: i,
                                                  awaitingRemote: F,
                                                  onClick: () => (0, N.Z)(W, k, ey.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !V &&
                                          (0, r.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(G.Z, {
                                                      children: (0, r.jsx)(E.Z, {
                                                          onClose: t,
                                                          simplified: C,
                                                          onInteraction: ew('VideoDeviceMenu')
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
                                                      centerButton: !0,
                                                      hasPermission: M,
                                                      enabled: w,
                                                      cameraUnavailable: Z,
                                                      onChange: eP,
                                                      onCameraUnavailable: eb.Z,
                                                      channelLimitReached: X,
                                                      channelLimit: ee,
                                                      popoutOpen: i,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: o()(eO.buttonSection, { [eO.experimentButtonSection]: b }),
                                  children: [
                                      !V &&
                                          (0, r.jsx)(eS, {
                                              channel: l,
                                              currentUser: P,
                                              exitFullScreen: d,
                                              canGoLive: U,
                                              hasPermission: M
                                          }),
                                      !V &&
                                          (0, r.jsx)(eZ, {
                                              channel: l,
                                              idle: null === (t = null == h ? void 0 : h.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          }),
                                      eC &&
                                          (0, r.jsx)(S.Z, {
                                              channel: l,
                                              themeable: !0,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          }),
                                      eh &&
                                          !V &&
                                          (0, r.jsx)(ef.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          }),
                                      C &&
                                          (0, r.jsx)(em.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I,
                                              remoteMode: V
                                          })
                                  ]
                              }),
                              (0, r.jsx)(eT, {
                                  connectedEmbeddedActivity: q,
                                  currentUser: P,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(y.Gt, {
              value: et,
              children: (0, r.jsxs)(g.Z, {
                  section: ey.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eO.eventPromptsContainer,
                          children: (0, r.jsx)(D.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eO.wrapper, a),
                          children: [
                              'mic-button-moved-left' === f
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(G.Z, {
                                                children: eg
                                                    ? (0, r.jsx)($.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0,
                                                          onSettingsButtonClick: t
                                                      })
                                                    : (0, r.jsx)(O.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0,
                                                          onInteraction: ew('AudioDeviceMenu')
                                                      })
                                            });
                                        },
                                        ignoreModalClicks: eg,
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(K.Z, {
                                                centerButton: !0,
                                                onPopoutClick: V ? null : n,
                                                className: eO.controlButton,
                                                selfMute: L,
                                                serverMute: W,
                                                suppress: k,
                                                popoutOpen: i,
                                                awaitingRemote: F,
                                                onClick: () => (0, N.Z)(W, k, ey.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !V &&
                                  (0, r.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, r.jsx)(G.Z, {
                                              children: (0, r.jsx)(E.Z, {
                                                  onClose: t,
                                                  onInteraction: ew('VideoDeviceMenu')
                                              })
                                          });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: p.yRy.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: i } = t;
                                          return (0, r.jsx)(Q.C, {
                                              centerButton: !0,
                                              hasPermission: M,
                                              className: eO.controlButton,
                                              enabled: w,
                                              cameraUnavailable: Z,
                                              onChange: eP,
                                              onCameraUnavailable: eb.Z,
                                              channelLimitReached: X,
                                              channelLimit: ee,
                                              popoutOpen: i,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !V &&
                                  (0, r.jsx)(eZ, {
                                      channel: l,
                                      idle: null === (n = null == h ? void 0 : h.idle) || void 0 === n || n
                                  }),
                              !V &&
                                  (0, r.jsx)(eS, {
                                      channel: l,
                                      currentUser: P,
                                      exitFullScreen: d,
                                      canGoLive: U,
                                      hasPermission: M
                                  }),
                              f === el.BK.MicPushToEnable
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(G.Z, {
                                                children: eg
                                                    ? (0, r.jsx)($.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0,
                                                          onSettingsButtonClick: t
                                                      })
                                                    : (0, r.jsx)(O.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0,
                                                          onInteraction: ew('AudioDeviceMenu')
                                                      })
                                            });
                                        },
                                        ignoreModalClicks: eg,
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(K.Z, {
                                                centerButton: !0,
                                                onPopoutClick: V ? null : n,
                                                className: eO.controlButton,
                                                selfMute: L,
                                                serverMute: W,
                                                suppress: k,
                                                popoutOpen: i,
                                                awaitingRemote: F,
                                                onClick: () => (0, N.Z)(W, k, ey.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              e_ && !V
                                  ? (0, r.jsx)('div', {
                                        className: eO.buttonContainer,
                                        children: (0, r.jsx)(ef.Z, { channel: l })
                                    })
                                  : null,
                              (0, r.jsx)(eT, {
                                  connectedEmbeddedActivity: q,
                                  currentUser: P,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
