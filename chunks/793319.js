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
    j = n(682901),
    O = n(887012),
    E = n(659580),
    N = n(793865),
    I = n(575175),
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
    F = n(641015),
    H = n(618158),
    G = n(390322),
    V = n(791592),
    z = n(136995),
    q = n(402113),
    Y = n(197016),
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
    eO = n(657452);
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
    e ? (0, ev.Z)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: o, hasPermission: a, disabled: s } = e,
        c = (0, eu.Z)({ location: 'GoLiveButton' }),
        h = (0, b.bp)(),
        f = (0, u.Wu)([ee.Z], () => ee.Z.getAllActiveStreams()),
        m = f.find((e) => e.ownerId === n.id),
        g = i.useRef(null),
        _ = t.getGuildId(),
        C = i.useCallback(() => {
            if ((null == l || l(), !o)) return (0, e_.Z)();
            (0, eC.Z)(_, t.id, ey.ZY5.GUILD_CHANNEL);
        }, [_, t.id, o, l]),
        v = (0, U.B4)({ location: 'GoLiveButton' }),
        [y, x] = i.useState(!1),
        j = (0, W.bK)(),
        [O, E] = i.useState(!1);
    i.useEffect(() => {
        if ((E(t.isHDStreamSplashed && null == m && !j), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                E(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, m, j]);
    let N = () => {
            if (o) {
                C();
                return;
            }
            (0, e_.Z)();
        },
        I = () => {
            (0, M.Z)(m);
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
                o = null != m;
            return (0, r.jsx)(
                X.O,
                eI(eN({}, l), {
                    centerButton: !0,
                    disabled: s || !a,
                    className: c ? void 0 : eO.controlButton,
                    hasPermission: a,
                    streamActive: null != m,
                    isSelfStream: !0,
                    onPopoutClick: o
                        ? function (e) {
                              null == i || i(e);
                          }
                        : null,
                    popoutOpen: t,
                    shouldShowTooltip: !t,
                    premiumGlow: O,
                    renderNUXHighlight: y,
                    buttonRef: g,
                    onClick: null != m ? I : N
                })
            );
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (v && 0 === f.length)
                    return (0, r.jsx)(Z.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    x(!0),
                                    (0, r.jsx)(B.h, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(ej.L.USER_DISMISS), x(!1);
                                        }
                                    })
                                );
                        }
                    });
            })(),
            (0, r.jsx)(H.Z, {
                children: (0, r.jsx)(p.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(G.Z, {
                            children: (0, r.jsx)(eg.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: C,
                                appContext: h,
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
                        return (0, r.jsx)('div', { children: P(n, i) });
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
        a = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: s } = i.useContext(p.Sfi),
        [d, h] = i.useState(!1),
        g = null == a ? void 0 : a.id,
        b = (0, u.e7)([ee.Z], () => (null != g ? ee.Z.getActiveStreamForStreamKey(g) : null), [g]),
        _ = (null == a ? void 0 : a.type) === ex.fO.STREAM && null != b && b.ownerId !== (null == t ? void 0 : t.id),
        C = (0, u.Wu)([ee.Z], () =>
            ee.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        v = (0, k.qY)(l.id),
        y = i.useCallback(() => ((null == a ? void 0 : a.type) === ex.fO.ACTIVITY && a.applicationId === (null == o ? void 0 : o.applicationId) ? 'ACTIVITY' : _ ? 'STREAM' : null != v ? 'EVENT' : 'CALL'), [a, null == o ? void 0 : o.applicationId, _, v]),
        [j, O] = i.useState(y()),
        E = (0, eu.Z)({ location: 'DisconnectButton' }),
        N = (0, p.q_F)(
            {
                opacity: d ? 0.2 : 1,
                transform: d && !s.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: d ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: d
                },
                onRest: () => {
                    O(y()), h(!1);
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        y() !== j && h(!0);
    }, [j, y]);
    let I = i.useCallback(() => {
            if (null != b) (0, m.g)((0, w.V9)(b));
            else for (let e of C) (0, m.g)((0, w.V9)(e));
        }, [C, b]),
        P = (e, i) => {
            let s = E
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
            switch (j) {
                case 'ACTIVITY':
                    if (null == a || null == t || a.type !== ex.fO.ACTIVITY || null == o) return;
                    return (0, r.jsx)(
                        q.Z,
                        eI(eN({}, s), {
                            applicationId: a.applicationId,
                            color: 'disconnect',
                            location: o.location,
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        X.O,
                        eI(eN({}, s), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: I,
                            onPopoutClick: C.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        Y.Z,
                        eI(eN({}, s), {
                            color: 'disconnect',
                            onClick: () => (null == n ? void 0 : n()),
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(L.Z, {
                        channelId: l.id,
                        onClick: () => {
                            f.default.disconnect(), null == n || n();
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
                activeStreams: C,
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
                style: N,
                children: P(i, n)
            });
        }
    });
});
function eA(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: o } = e,
        a = (0, b.bp)(),
        { reachedLimit: s, limit: c } = (0, ec.Z)(t),
        d = i.useCallback(() => {
            (0, ev.Z)(() => f.default.selectVoiceChannel(t.id, !0), a);
        }, [t.id, a]),
        p = i.useCallback(() => {
            n ? (0, eb.Z)() : d();
        }, [n, d]),
        h = (0, u.e7)([et.Z], () => {
            let e = et.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(o.id)) === !0;
        }),
        m = (0, eu.Z)({ location: 'JoinCall' });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Q.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'join',
                channelLimitReached: s,
                channelLimit: c,
                channel: t,
                cameraUnavailable: n,
                hasPermission: l,
                onCameraUnavailable: p,
                className: eO.controlButton,
                onChange: d
            }),
            (0, r.jsx)(z.Z, {
                centerButton: !0,
                color: 'join',
                channel: t,
                className: eO.controlButton,
                fullRegionButton: m
            }),
            h
                ? (0, r.jsx)(V.Z, {
                      color: 'disconnect',
                      channel: t,
                      className: eO.controlButton,
                      fullRegionButton: m
                  })
                : null
        ]
    });
}
function ew(e) {
    return (0, P.u)(e, 'CenterControlTray', { entrypoint: ex.A5.CARET });
}
let eR = function (e) {
    var t, n;
    let { channel: l, className: a, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: f } = (0, el.ZP)({ location: 'CenterControlTray' }),
        m = (0, eu.Z)({ location: 'CenterControlTray' }),
        { coloredIcons: b } = (0, eo.Z)({ location: 'RTC Microphone Button' }),
        { enabled: C } = (0, j.Z)({ location: 'CenterControlTray' }),
        [x, P] = i.useState(void 0),
        Z = (0, u.e7)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: w, enabled: M } = (0, ea.Z)(),
        k = (0, ed.Z)(l),
        { suppress: L, selfMute: W, mute: U } = (0, ep.Z)(l),
        { canGoLive: B } = (0, u.cj)([en.Z], () => ({ canGoLive: (0, R.Z)(en.Z) })),
        H = (0, A.Z)(),
        V = (0, u.e7)([T.Z], () => null != T.Z.getAwaitingRemoteSessionInfo()),
        z = null != H,
        q = (0, u.e7)([er.Z], () => {
            var e;
            return (null !== (e = null == H ? void 0 : H.channelId) && void 0 !== e ? e : er.Z.getVoiceChannelId()) === l.id;
        }),
        Y = (0, O.Z)(l, !0),
        X = (0, u.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivityForChannel(l.id)),
        { reachedLimit: ee, limit: et } = (0, ec.Z)(l),
        { analyticsLocations: eh } = (0, y.ZP)(v.Z.VOICE_CONTROL_TRAY),
        eg = (0, es.Z)(l),
        e_ = (0, J.Hu)({
            location: v.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0
        });
    if (!q)
        return (0, r.jsx)(y.Gt, {
            value: eh,
            children: (0, r.jsx)(eA, {
                channel: l,
                cameraUnavailable: w,
                hasCameraPermission: k,
                currentUser: Z
            })
        });
    let eC = eg && !Y,
        ev = (0, F.Z)(l);
    return m
        ? (0, r.jsx)(y.Gt, {
              value: eh,
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
                                                  children: e_
                                                      ? (0, r.jsx)($.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: t
                                                        })
                                                      : C
                                                        ? (0, r.jsx)(E.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              simplified: !0,
                                                              onInteraction: ew('AudioDeviceMenu')
                                                          })
                                                        : (0, r.jsx)(E.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              onInteraction: ew('AudioDeviceMenu')
                                                          })
                                              });
                                          },
                                          align: 'center',
                                          position: 'top',
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(K.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: z ? null : n,
                                                  selfMute: W,
                                                  serverMute: U,
                                                  suppress: L,
                                                  popoutOpen: i,
                                                  awaitingRemote: V,
                                                  onClick: () => (0, I.Z)(U, L, ey.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !z &&
                                          (0, r.jsx)('div', {
                                              className: eO.avSpacing,
                                              'aria-hidden': 'true',
                                              role: 'presentation'
                                          }),
                                      !z &&
                                          (0, r.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(G.Z, {
                                                      children: (0, r.jsx)(N.Z, {
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
                                                      hasPermission: k,
                                                      enabled: M,
                                                      cameraUnavailable: w,
                                                      onChange: eP,
                                                      onCameraUnavailable: eb.Z,
                                                      channelLimitReached: ee,
                                                      channelLimit: et,
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
                                      !z &&
                                          (0, r.jsx)(eS, {
                                              channel: l,
                                              currentUser: Z,
                                              exitFullScreen: d,
                                              canGoLive: B,
                                              hasPermission: k
                                          }),
                                      !z &&
                                          (0, r.jsx)(eZ, {
                                              channel: l,
                                              idle: null === (t = null == h ? void 0 : h.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: P
                                          }),
                                      ev &&
                                          (0, r.jsx)(S.Z, {
                                              channel: l,
                                              themeable: !0,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: P
                                          }),
                                      eg &&
                                          !z &&
                                          (0, r.jsx)(ef.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: P
                                          }),
                                      C &&
                                          (0, r.jsx)(em.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: P,
                                              remoteMode: z
                                          })
                                  ]
                              }),
                              (0, r.jsx)(eT, {
                                  connectedEmbeddedActivity: X,
                                  currentUser: Z,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(y.Gt, {
              value: eh,
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
                                                children: e_
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
                                                          onInteraction: ew('AudioDeviceMenu')
                                                      })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(K.Z, {
                                                centerButton: !0,
                                                onPopoutClick: z ? null : n,
                                                className: eO.controlButton,
                                                selfMute: W,
                                                serverMute: U,
                                                suppress: L,
                                                popoutOpen: i,
                                                awaitingRemote: V,
                                                onClick: () => (0, I.Z)(U, L, ey.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !z &&
                                  (0, r.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, r.jsx)(G.Z, {
                                              children: (0, r.jsx)(N.Z, {
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
                                              hasPermission: k,
                                              className: eO.controlButton,
                                              enabled: M,
                                              cameraUnavailable: w,
                                              onChange: eP,
                                              onCameraUnavailable: eb.Z,
                                              channelLimitReached: ee,
                                              channelLimit: et,
                                              popoutOpen: i,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !z &&
                                  (0, r.jsx)(eZ, {
                                      channel: l,
                                      idle: null === (n = null == h ? void 0 : h.idle) || void 0 === n || n
                                  }),
                              !z &&
                                  (0, r.jsx)(eS, {
                                      channel: l,
                                      currentUser: Z,
                                      exitFullScreen: d,
                                      canGoLive: B,
                                      hasPermission: k
                                  }),
                              f === el.BK.MicPushToEnable
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(G.Z, {
                                                children: e_
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
                                                          onInteraction: ew('AudioDeviceMenu')
                                                      })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(K.Z, {
                                                centerButton: !0,
                                                onPopoutClick: z ? null : n,
                                                className: eO.controlButton,
                                                selfMute: W,
                                                serverMute: U,
                                                suppress: L,
                                                popoutOpen: i,
                                                awaitingRemote: V,
                                                onClick: () => (0, I.Z)(U, L, ey.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              eC && !z
                                  ? (0, r.jsx)('div', {
                                        className: eO.buttonContainer,
                                        children: (0, r.jsx)(ef.Z, { channel: l })
                                    })
                                  : null,
                              (0, r.jsx)(eT, {
                                  connectedEmbeddedActivity: X,
                                  currentUser: Z,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
