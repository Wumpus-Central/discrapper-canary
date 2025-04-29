n.d(t, {
    NZ: () => eN,
    ZP: () => ek,
    r: () => eZ
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(272573),
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
    O = n(887012),
    E = n(659580),
    I = n(793865),
    P = n(575175),
    S = n(522651),
    Z = n(795318),
    N = n(997614),
    T = n(243778),
    A = n(258609),
    w = n(446226),
    R = n(569545),
    k = n(74299),
    M = n(803647),
    L = n(554747),
    D = n(95764),
    U = n(459502),
    B = n(576645),
    G = n(140465),
    F = n(800966),
    H = n(641015),
    V = n(618158),
    z = n(390322),
    W = n(791592),
    Y = n(136995),
    q = n(402113),
    K = n(197016),
    X = n(386000),
    Q = n(698877),
    J = n(25827),
    $ = n(875527),
    ee = n(306609),
    et = n(199902),
    en = n(523746),
    er = n(131951),
    ei = n(944486),
    el = n(594174),
    eo = n(861254),
    ea = n(221241),
    es = n(923973),
    ec = n(983131),
    eu = n(829750),
    ed = n(82965),
    ep = n(189771),
    eh = n(294629),
    ef = n(304745),
    em = n(985370),
    eg = n(987329),
    eb = n(544384),
    e_ = n(560688),
    ey = n(127608),
    eC = n(76021),
    ex = n(173507),
    ev = n(981631),
    ej = n(354459),
    eO = n(921944),
    eE = n(393740);
function eI() {
    return (eI =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function eP(e) {
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
function eS(e, t) {
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
function eZ(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    (0, S.v)(x.Z.VOICE_CONTROL_TRAY, S.d.CAMERA, e), e ? (0, ex.Z)(n, t) : n();
}
function eN(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: o, hasPermission: a, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, v.ZP)(),
        h = (0, ed.Z)({ location: 'GoLiveButton' }),
        f = (0, _.bp)(),
        m = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = i.useRef(null),
        y = t.getGuildId(),
        C = i.useCallback(() => {
            if ((null == l || l(), !o)) return (0, ey.Z)();
            (0, eC.Z)(y, t.id, ev.ZY5.GUILD_CHANNEL);
        }, [y, t.id, o, l]),
        x = (0, G.B4)(),
        [j, O] = i.useState(!1),
        E = (0, B.bK)(),
        [I, P] = i.useState(!1);
    i.useEffect(() => {
        if ((P(t.isHDStreamSplashed && null == g && !E), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                P(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, E]);
    let Z = () => {
            if (((0, S.v)(c, S.d.STREAM, !0), o)) return void C();
            (0, ey.Z)();
        },
        N = () => {
            (0, S.v)(c, S.d.STREAM, !1), (0, M.Z)(g);
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
                Q.O,
                eS(eP({}, l), {
                    centerButton: !0,
                    disabled: s || !a,
                    className: h ? void 0 : eE.controlButton,
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
                    premiumGlow: I,
                    renderNUXHighlight: j,
                    buttonRef: b,
                    onClick: null != g ? N : Z
                })
            );
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (x && 0 === m.length)
                    return (0, r.jsx)(T.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    O(!0),
                                    (0, r.jsx)(F.h, {
                                        buttonRef: b,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(eO.L.USER_DISMISS), O(!1);
                                        }
                                    })
                                );
                        }
                    });
            })(),
            (0, r.jsx)(V.Z, {
                children: (0, r.jsx)(p.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(z.Z, {
                            children: (0, r.jsx)(eb.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: C,
                                appContext: f,
                                onClose: i,
                                onInteraction: eR('ManageStreamsMenu')
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = eI(
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
function eT(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        o = t.getGuildId();
    return (0, C.Z)(o, t.id)
        ? (0, r.jsx)('div', {
              className: eE.buttonContainer,
              children: (0, r.jsx)(ef.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
          })
        : null;
}
let eA = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: o } = e,
        { parentAnalyticsLocation: a } = (0, v.ZP)(),
        s = (0, u.e7)([j.Z], () => j.Z.getSelectedParticipant(l.id)),
        { reducedMotion: d } = i.useContext(p.Sfi),
        [h, f] = i.useState(!1),
        b = null == s ? void 0 : s.id,
        _ = (0, u.e7)([et.Z], () => (null != b ? et.Z.getActiveStreamForStreamKey(b) : null), [b]),
        y = (null == s ? void 0 : s.type) === ej.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        C = (0, u.Wu)([et.Z], () =>
            et.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        x = (0, L.qY)(l.id),
        O = i.useCallback(() => ((null == s ? void 0 : s.type) === ej.fO.ACTIVITY && s.applicationId === (null == o ? void 0 : o.applicationId) ? 'ACTIVITY' : y ? 'STREAM' : null != x ? 'EVENT' : 'CALL'), [s, null == o ? void 0 : o.applicationId, y, x]),
        [E, I] = i.useState(O()),
        P = (0, ed.Z)({ location: 'DisconnectButton' }),
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
                    I(O()), f(!1);
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        O() !== E && f(!0);
    }, [E, O]);
    let N = i.useCallback(() => {
            if (null != _) (0, g.g)((0, R.V9)(_));
            else for (let e of C) (0, g.g)((0, R.V9)(e));
        }, [C, _]),
        T = (e, i) => {
            let c = P
                ? {
                      fullRegionButton: !0,
                      centerButton: !0,
                      popoutOpen: e
                  }
                : {
                      centerButton: !0,
                      className: eE.controlButton,
                      popoutOpen: e
                  };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== ej.fO.ACTIVITY || null == o) return;
                    return (0, r.jsx)(
                        q.Z,
                        eS(eP({}, c), {
                            applicationId: s.applicationId,
                            color: 'disconnect',
                            location: o.location,
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        Q.O,
                        eS(eP({}, c), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: () => {
                                (0, S.v)(a, S.d.STOP_WATCHING), N();
                            },
                            onPopoutClick: C.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        K.Z,
                        eS(eP({}, c), {
                            color: 'disconnect',
                            onClick: () => {
                                (0, S.v)(a, S.d.DISCONNECT), null == n || n();
                            },
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(D.Z, {
                        channelId: l.id,
                        onClick: () => {
                            (0, S.v)(a, S.d.DISCONNECT), m.default.disconnect(), null == n || n();
                        }
                    });
            }
        };
    return (0, r.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eb.Z, {
                channel: l,
                currentUser: t,
                activeStreams: C,
                handleGoLive: ev.VqG,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eR('ManageStreamsMenu')
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
                children: T(i, n)
            });
        }
    });
});
function ew(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: o } = e,
        a = (0, _.bp)(),
        { parentAnalyticsLocation: s } = (0, v.ZP)(),
        { reachedLimit: c, limit: d } = (0, eu.Z)(t),
        p = i.useCallback(() => {
            (0, S.v)(s, S.d.JOIN_VIDEO_CALL), (0, ex.Z)(() => m.default.selectVoiceChannel(t.id, !0), a);
        }, [t.id, a, s]),
        h = i.useCallback(() => {
            n ? (0, e_.Z)() : p();
        }, [n, p]),
        f = (0, u.e7)([en.Z], () => {
            let e = en.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(o.id)) === !0;
        }),
        g = (0, ed.Z)({ location: 'JoinCall' });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(J.C, {
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
                className: eE.controlButton,
                onChange: p
            }),
            (0, r.jsx)(Y.Z, {
                centerButton: !0,
                color: 'join',
                channel: t,
                className: eE.controlButton,
                fullRegionButton: g
            }),
            f
                ? (0, r.jsx)(W.Z, {
                      color: 'disconnect',
                      channel: t,
                      className: eE.controlButton,
                      fullRegionButton: g
                  })
                : null
        ]
    });
}
function eR(e) {
    return (0, Z.u)(e, x.Z.VOICE_CONTROL_TRAY, { entrypoint: ej.A5.CARET });
}
let ek = function (e) {
    var t, n;
    let { channel: l, className: a, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: m } = (0, eo.ZP)({ location: 'CenterControlTray' }),
        g = (0, ed.Z)({ location: 'CenterControlTray' }),
        _ = i.useRef(null),
        { coloredIconsEnabled: C, simplifiedSettingsEnabled: j } = (0, ea.Z)({ location: 'CenterControlTray' }),
        [S, Z] = i.useState(void 0),
        T = (0, u.e7)([el.default], () => {
            let e = el.default.getCurrentUser();
            return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: R, enabled: M } = (0, es.Z)(),
        L = (0, ep.Z)(l),
        { suppress: D, selfMute: B, mute: G } = (0, eh.Z)(l),
        { canGoLive: F } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, k.Z)(er.Z) })),
        V = (0, w.Z)(),
        W = (0, u.e7)([A.Z], () => null != A.Z.getAwaitingRemoteSessionInfo()),
        Y = null != V,
        q = (0, u.e7)([ei.Z], () => {
            var e;
            return (null != (e = null == V ? void 0 : V.channelId) ? e : ei.Z.getVoiceChannelId()) === l.id;
        }),
        K = (0, O.Z)(l, !0),
        Q = (0, u.e7)([y.ZP], () => y.ZP.getCurrentEmbeddedActivity()),
        { reachedLimit: et, limit: en } = (0, eu.Z)(l),
        { analyticsLocations: ef } = (0, v.ZP)(x.Z.VOICE_CONTROL_TRAY),
        eb = (0, ec.Z)(l),
        ey = (0, $.Hu)({
            location: x.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0
        });
    if (!q)
        return (0, r.jsx)(v.Gt, {
            value: ef,
            children: (0, r.jsx)(ew, {
                channel: l,
                cameraUnavailable: R,
                hasCameraPermission: L,
                currentUser: T
            })
        });
    let eC = eb && !K,
        ex = (0, H.Z)(l),
        ej = ey
            ? (e) => {
                  (0, f.jW)(e, () =>
                      Promise.resolve(() =>
                          (0, r.jsx)(E.default, {
                              onClose: f.Zy,
                              renderInputDevices: !0,
                              renderOutputDevices: !0,
                              renderInputModes: !0,
                              renderInputVolume: j,
                              renderOutputVolume: j,
                              renderDeafen: j,
                              simplified: j,
                              onInteraction: eR('AudioDeviceMenu')
                          })
                      )
                  );
              }
            : void 0;
    return g
        ? (0, r.jsx)(v.Gt, {
              value: ef,
              children: (0, r.jsxs)(b.Z, {
                  section: ev.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eE.eventPromptsContainer,
                          children: (0, r.jsx)(U.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          ref: _,
                          className: o()(eE.experimentWrapper, a),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: o()(eE.buttonSection, { [eE.experimentButtonSection]: C }),
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(z.Z, {
                                                  children: ey
                                                      ? (0, r.jsx)(ee.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0,
                                                            onSettingsButtonClick: t
                                                        })
                                                      : (0, r.jsx)(E.default, {
                                                            onClose: t,
                                                            renderInputDevices: !0,
                                                            renderOutputDevices: !0,
                                                            renderInputModes: !0,
                                                            renderInputVolume: j,
                                                            renderOutputVolume: j,
                                                            renderDeafen: j,
                                                            simplified: j,
                                                            onInteraction: eR('AudioDeviceMenu')
                                                        })
                                              });
                                          },
                                          ignoreModalClicks: ey,
                                          align: 'center',
                                          overridePositionRef: _,
                                          position: 'top',
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 8,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(X.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: Y ? null : n,
                                                  selfMute: B,
                                                  serverMute: G,
                                                  suppress: D,
                                                  popoutOpen: i,
                                                  awaitingRemote: W,
                                                  onClick: () => (0, P.Z)(G, D, ev.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ej
                                              });
                                          }
                                      }),
                                      !Y &&
                                          (0, r.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(z.Z, {
                                                      children: (0, r.jsx)(I.Z, {
                                                          onClose: t,
                                                          simplified: j,
                                                          onInteraction: eR('VideoDeviceMenu')
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
                                                  return (0, r.jsx)(J.C, {
                                                      centerButton: !0,
                                                      hasPermission: L,
                                                      enabled: M,
                                                      cameraUnavailable: R,
                                                      onChange: eZ,
                                                      onCameraUnavailable: e_.Z,
                                                      channelLimitReached: et,
                                                      channelLimit: en,
                                                      popoutOpen: i,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: o()(eE.buttonSection, { [eE.experimentButtonSection]: C }),
                                  children: [
                                      !Y &&
                                          (0, r.jsx)(eN, {
                                              channel: l,
                                              currentUser: T,
                                              exitFullScreen: d,
                                              canGoLive: F,
                                              hasPermission: L
                                          }),
                                      !Y &&
                                          (0, r.jsx)(eT, {
                                              channel: l,
                                              idle: null == (t = null == h ? void 0 : h.idle) || t,
                                              whichPopoutIsOpen: S,
                                              setWhichPopoutIsOpen: Z
                                          }),
                                      ex &&
                                          (0, r.jsx)(N.Z, {
                                              channel: l,
                                              themeable: !0,
                                              whichPopoutIsOpen: S,
                                              setWhichPopoutIsOpen: Z
                                          }),
                                      eb &&
                                          !Y &&
                                          (0, r.jsx)(em.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: S,
                                              setWhichPopoutIsOpen: Z
                                          }),
                                      j &&
                                          (0, r.jsx)(eg.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: S,
                                              setWhichPopoutIsOpen: Z,
                                              remoteMode: Y
                                          })
                                  ]
                              }),
                              (0, r.jsx)(eA, {
                                  connectedEmbeddedActivity: Q,
                                  currentUser: T,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(v.Gt, {
              value: ef,
              children: (0, r.jsxs)(b.Z, {
                  section: ev.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eE.eventPromptsContainer,
                          children: (0, r.jsx)(U.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eE.wrapper, a),
                          children: [
                              'mic-button-moved-left' === m
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(z.Z, {
                                                children: ey
                                                    ? (0, r.jsx)(ee.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0,
                                                          onSettingsButtonClick: t
                                                      })
                                                    : (0, r.jsx)(E.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0,
                                                          onInteraction: eR('AudioDeviceMenu')
                                                      })
                                            });
                                        },
                                        ignoreModalClicks: ey,
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(X.Z, {
                                                centerButton: !0,
                                                onPopoutClick: Y ? null : n,
                                                className: eE.controlButton,
                                                selfMute: B,
                                                serverMute: G,
                                                suppress: D,
                                                popoutOpen: i,
                                                awaitingRemote: W,
                                                onClick: () => (0, P.Z)(G, D, ev.jXE.VOICE_CONTROL_TRAY),
                                                onContextMenu: ej
                                            });
                                        }
                                    })
                                  : null,
                              !Y &&
                                  (0, r.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, r.jsx)(z.Z, {
                                              children: (0, r.jsx)(I.Z, {
                                                  onClose: t,
                                                  onInteraction: eR('VideoDeviceMenu')
                                              })
                                          });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: p.yRy.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: i } = t;
                                          return (0, r.jsx)(J.C, {
                                              centerButton: !0,
                                              hasPermission: L,
                                              className: eE.controlButton,
                                              enabled: M,
                                              cameraUnavailable: R,
                                              onChange: eZ,
                                              onCameraUnavailable: e_.Z,
                                              channelLimitReached: et,
                                              channelLimit: en,
                                              popoutOpen: i,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !Y &&
                                  (0, r.jsx)(eT, {
                                      channel: l,
                                      idle: null == (n = null == h ? void 0 : h.idle) || n
                                  }),
                              !Y &&
                                  (0, r.jsx)(eN, {
                                      channel: l,
                                      currentUser: T,
                                      exitFullScreen: d,
                                      canGoLive: F,
                                      hasPermission: L
                                  }),
                              m === eo.BK.MicPushToEnable
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(z.Z, {
                                                children: ey
                                                    ? (0, r.jsx)(ee.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0,
                                                          onSettingsButtonClick: t
                                                      })
                                                    : (0, r.jsx)(E.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0,
                                                          onInteraction: eR('AudioDeviceMenu')
                                                      })
                                            });
                                        },
                                        ignoreModalClicks: ey,
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(X.Z, {
                                                centerButton: !0,
                                                onPopoutClick: Y ? null : n,
                                                className: eE.controlButton,
                                                selfMute: B,
                                                serverMute: G,
                                                suppress: D,
                                                popoutOpen: i,
                                                awaitingRemote: W,
                                                onClick: () => (0, P.Z)(G, D, ev.jXE.VOICE_CONTROL_TRAY),
                                                onContextMenu: ej
                                            });
                                        }
                                    })
                                  : null,
                              eC && !Y
                                  ? (0, r.jsx)('div', {
                                        className: eE.buttonContainer,
                                        children: (0, r.jsx)(em.Z, { channel: l })
                                    })
                                  : null,
                              (0, r.jsx)(eA, {
                                  connectedEmbeddedActivity: Q,
                                  currentUser: T,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
