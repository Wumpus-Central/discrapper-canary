n.d(t, {
    NZ: () => eZ,
    ZP: () => eM,
    r: () => eS
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
    f = n(239091),
    m = n(287734),
    g = n(872810),
    b = n(410575),
    _ = n(40851),
    C = n(317381),
    y = n(596040),
    x = n(100527),
    v = n(906732),
    j = n(358221),
    O = n(887012),
    E = n(659580),
    N = n(793865),
    I = n(575175),
    P = n(522651),
    S = n(795318),
    Z = n(997614),
    T = n(243778),
    A = n(258609),
    w = n(446226),
    R = n(569545),
    M = n(74299),
    k = n(803647),
    L = n(554747),
    D = n(95764),
    W = n(459502),
    U = n(576645),
    B = n(140465),
    H = n(800966),
    F = n(641015),
    G = n(618158),
    V = n(390322),
    z = n(791592),
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
    eC = n(127608),
    ey = n(76021),
    ex = n(173507),
    ev = n(981631),
    ej = n(354459),
    eO = n(921944),
    eE = n(393740);
function eN() {
    return (eN =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function eI(e) {
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
function eP(e, t) {
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
    let n = () => h.Z.setVideoEnabled(e);
    (0, P.v)(x.Z.VOICE_CONTROL_TRAY, P.d.CAMERA, e), e ? (0, ex.Z)(n, t) : n();
}
function eZ(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: o, hasPermission: a, disabled: s } = e,
        { parentAnalyticsLocation: c } = (0, v.ZP)(),
        h = (0, ed.Z)({ location: 'GoLiveButton' }),
        f = (0, _.bp)(),
        m = (0, u.Wu)([et.Z], () => et.Z.getAllActiveStreams()),
        g = m.find((e) => e.ownerId === n.id),
        b = i.useRef(null),
        C = t.getGuildId(),
        y = i.useCallback(() => {
            if ((null == l || l(), !o)) return (0, eC.Z)();
            (0, ey.Z)(C, t.id, ev.ZY5.GUILD_CHANNEL);
        }, [C, t.id, o, l]),
        x = (0, B.B4)(),
        [j, O] = i.useState(!1),
        E = (0, U.bK)(),
        [N, I] = i.useState(!1);
    i.useEffect(() => {
        if ((I(t.isHDStreamSplashed && null == g && !E), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                I(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, E]);
    let S = () => {
            if (((0, P.v)(c, P.d.STREAM, !0), o)) return void y();
            (0, eC.Z)();
        },
        Z = () => {
            (0, P.v)(c, P.d.STREAM, !1), (0, k.Z)(g);
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
                eP(eI({}, l), {
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
                    premiumGlow: N,
                    renderNUXHighlight: j,
                    buttonRef: b,
                    onClick: null != g ? Z : S
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
                                    (0, r.jsx)(H.h, {
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
            (0, r.jsx)(G.Z, {
                children: (0, r.jsx)(p.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(V.Z, {
                            children: (0, r.jsx)(eb.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: y,
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
                        var n = eN(
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
    return (0, y.Z)(o, t.id)
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
        C = (null == s ? void 0 : s.type) === ej.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        y = (0, u.Wu)([et.Z], () =>
            et.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        x = (0, L.qY)(l.id),
        O = i.useCallback(() => ((null == s ? void 0 : s.type) === ej.fO.ACTIVITY && s.applicationId === (null == o ? void 0 : o.applicationId) ? 'ACTIVITY' : C ? 'STREAM' : null != x ? 'EVENT' : 'CALL'), [s, null == o ? void 0 : o.applicationId, C, x]),
        [E, N] = i.useState(O()),
        I = (0, ed.Z)({ location: 'DisconnectButton' }),
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
                    N(O()), f(!1);
                }
            },
            'animate-always'
        );
    i.useEffect(() => {
        O() !== E && f(!0);
    }, [E, O]);
    let Z = i.useCallback(() => {
            if (null != _) (0, g.g)((0, R.V9)(_));
            else for (let e of y) (0, g.g)((0, R.V9)(e));
        }, [y, _]),
        T = (e, i) => {
            let c = I
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
                        eP(eI({}, c), {
                            applicationId: s.applicationId,
                            color: 'disconnect',
                            location: o.location,
                            onPopoutClick: y.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        Q.O,
                        eP(eI({}, c), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: () => {
                                (0, P.v)(a, P.d.STOP_WATCHING), Z();
                            },
                            onPopoutClick: y.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        K.Z,
                        eP(eI({}, c), {
                            color: 'disconnect',
                            onClick: () => {
                                (0, P.v)(a, P.d.DISCONNECT), null == n || n();
                            },
                            onPopoutClick: y.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(D.Z, {
                        channelId: l.id,
                        onClick: () => {
                            (0, P.v)(a, P.d.DISCONNECT), m.default.disconnect(), null == n || n();
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
                activeStreams: y,
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
                style: S,
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
            (0, P.v)(s, P.d.JOIN_VIDEO_CALL), (0, ex.Z)(() => m.default.selectVoiceChannel(t.id, !0), a);
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
                ? (0, r.jsx)(z.Z, {
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
    return (0, S.u)(e, x.Z.VOICE_CONTROL_TRAY, { entrypoint: ej.A5.CARET });
}
let eM = function (e) {
    var t, n;
    let { channel: l, className: a, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: m } = (0, eo.ZP)({ location: 'CenterControlTray' }),
        g = (0, ed.Z)({ location: 'CenterControlTray' }),
        _ = i.useRef(null),
        { coloredIconsEnabled: y, simplifiedSettingsEnabled: j } = (0, ea.Z)({ location: 'CenterControlTray' }),
        [P, S] = i.useState(void 0),
        T = (0, u.e7)([el.default], () => {
            let e = el.default.getCurrentUser();
            return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: R, enabled: k } = (0, es.Z)(),
        L = (0, ep.Z)(l),
        { suppress: D, selfMute: U, mute: B } = (0, eh.Z)(l),
        { canGoLive: H } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, M.Z)(er.Z) })),
        G = (0, w.Z)(),
        z = (0, u.e7)([A.Z], () => null != A.Z.getAwaitingRemoteSessionInfo()),
        Y = null != G,
        q = (0, u.e7)([ei.Z], () => {
            var e;
            return (null != (e = null == G ? void 0 : G.channelId) ? e : ei.Z.getVoiceChannelId()) === l.id;
        }),
        K = (0, O.Z)(l, !0),
        Q = (0, u.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivityForChannel(l.id)),
        { reachedLimit: et, limit: en } = (0, eu.Z)(l),
        { analyticsLocations: ef } = (0, v.ZP)(x.Z.VOICE_CONTROL_TRAY),
        eb = (0, ec.Z)(l),
        eC = (0, $.Hu)({
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
    let ey = eb && !K,
        ex = (0, F.Z)(l),
        ej = eC
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
                          children: (0, r.jsx)(W.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          ref: _,
                          className: o()(eE.experimentWrapper, a),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: o()(eE.buttonSection, { [eE.experimentButtonSection]: y }),
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(V.Z, {
                                                  children: eC
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
                                          ignoreModalClicks: eC,
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
                                                  selfMute: U,
                                                  serverMute: B,
                                                  suppress: D,
                                                  popoutOpen: i,
                                                  awaitingRemote: z,
                                                  onClick: () => (0, I.Z)(B, D, ev.jXE.VOICE_CONTROL_TRAY),
                                                  onContextMenu: ej
                                              });
                                          }
                                      }),
                                      !Y &&
                                          (0, r.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(V.Z, {
                                                      children: (0, r.jsx)(N.Z, {
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
                                                      enabled: k,
                                                      cameraUnavailable: R,
                                                      onChange: eS,
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
                                  className: o()(eE.buttonSection, { [eE.experimentButtonSection]: y }),
                                  children: [
                                      !Y &&
                                          (0, r.jsx)(eZ, {
                                              channel: l,
                                              currentUser: T,
                                              exitFullScreen: d,
                                              canGoLive: H,
                                              hasPermission: L
                                          }),
                                      !Y &&
                                          (0, r.jsx)(eT, {
                                              channel: l,
                                              idle: null == (t = null == h ? void 0 : h.idle) || t,
                                              whichPopoutIsOpen: P,
                                              setWhichPopoutIsOpen: S
                                          }),
                                      ex &&
                                          (0, r.jsx)(Z.Z, {
                                              channel: l,
                                              themeable: !0,
                                              whichPopoutIsOpen: P,
                                              setWhichPopoutIsOpen: S
                                          }),
                                      eb &&
                                          !Y &&
                                          (0, r.jsx)(em.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: P,
                                              setWhichPopoutIsOpen: S
                                          }),
                                      j &&
                                          (0, r.jsx)(eg.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: P,
                                              setWhichPopoutIsOpen: S,
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
                          children: (0, r.jsx)(W.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eE.wrapper, a),
                          children: [
                              'mic-button-moved-left' === m
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(V.Z, {
                                                children: eC
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
                                        ignoreModalClicks: eC,
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
                                                selfMute: U,
                                                serverMute: B,
                                                suppress: D,
                                                popoutOpen: i,
                                                awaitingRemote: z,
                                                onClick: () => (0, I.Z)(B, D, ev.jXE.VOICE_CONTROL_TRAY),
                                                onContextMenu: ej
                                            });
                                        }
                                    })
                                  : null,
                              !Y &&
                                  (0, r.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, r.jsx)(V.Z, {
                                              children: (0, r.jsx)(N.Z, {
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
                                              enabled: k,
                                              cameraUnavailable: R,
                                              onChange: eS,
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
                                  (0, r.jsx)(eZ, {
                                      channel: l,
                                      currentUser: T,
                                      exitFullScreen: d,
                                      canGoLive: H,
                                      hasPermission: L
                                  }),
                              m === eo.BK.MicPushToEnable
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(V.Z, {
                                                children: eC
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
                                        ignoreModalClicks: eC,
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
                                                selfMute: U,
                                                serverMute: B,
                                                suppress: D,
                                                popoutOpen: i,
                                                awaitingRemote: z,
                                                onClick: () => (0, I.Z)(B, D, ev.jXE.VOICE_CONTROL_TRAY),
                                                onContextMenu: ej
                                            });
                                        }
                                    })
                                  : null,
                              ey && !Y
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
