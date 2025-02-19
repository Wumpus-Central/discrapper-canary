n.d(t, {
    NZ: () => eP,
    ZP: () => eT,
    r: () => eE
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
    N = n(659580),
    E = n(793865),
    P = n(575175),
    I = n(997614),
    S = n(243778),
    Z = n(258609),
    T = n(446226),
    A = n(569545),
    w = n(74299),
    R = n(803647),
    k = n(554747),
    M = n(95764),
    L = n(459502),
    D = n(576645),
    W = n(140465),
    U = n(800966),
    B = n(641015),
    F = n(618158),
    H = n(390322),
    G = n(791592),
    V = n(136995),
    z = n(402113),
    q = n(197016),
    Y = n(386000),
    K = n(698877),
    X = n(25827),
    J = n(875527),
    Q = n(306609),
    $ = n(199902),
    ee = n(523746),
    et = n(131951),
    en = n(944486),
    er = n(594174),
    ei = n(861254),
    el = n(923973),
    eo = n(983131),
    ea = n(829750),
    es = n(82965),
    ec = n(189771),
    eu = n(294629),
    ed = n(304745),
    ep = n(985370),
    eh = n(987329),
    ef = n(544384),
    em = n(560688),
    eg = n(127608),
    eb = n(76021),
    e_ = n(173507),
    eC = n(981631),
    ev = n(354459),
    ey = n(921944),
    ex = n(657452);
function ej() {
    return (ej =
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
function eN(e, t) {
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
    if (et.Z.isVideoEnabled() === e) return;
    let n = () => h.Z.setVideoEnabled(e);
    e ? (0, e_.Z)(n, t) : n();
}
function eP(e) {
    let { channel: t, currentUser: n, exitFullScreen: l, canGoLive: o, hasPermission: a, disabled: s } = e,
        c = (0, es.Z)({ location: 'GoLiveButton' }),
        h = (0, b.bp)(),
        f = (0, u.Wu)([$.Z], () => $.Z.getAllActiveStreams()),
        m = f.find((e) => e.ownerId === n.id),
        g = i.useRef(null),
        _ = t.getGuildId(),
        C = i.useCallback(() => {
            if ((null == l || l(), !o)) return (0, eg.Z)();
            (0, eb.Z)(_, t.id, eC.ZY5.GUILD_CHANNEL);
        }, [_, t.id, o, l]),
        v = (0, W.B4)({ location: 'GoLiveButton' }),
        [y, x] = i.useState(!1),
        j = (0, D.bK)(),
        [O, N] = i.useState(!1);
    i.useEffect(() => {
        if ((N(t.isHDStreamSplashed && null == m && !j), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                N(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, m, j]);
    let E = () => {
            if (o) {
                C();
                return;
            }
            (0, eg.Z)();
        },
        P = () => {
            (0, R.Z)(m);
        },
        I = (e, t) => {
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
                K.O,
                eN(eO({}, l), {
                    centerButton: !0,
                    disabled: s || !a,
                    className: c ? void 0 : ex.controlButton,
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
                    onClick: null != m ? P : E
                })
            );
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (() => {
                if (v && 0 === f.length)
                    return (0, r.jsx)(S.ZP, {
                        contentTypes: [d.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    x(!0),
                                    (0, r.jsx)(U.h, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(ey.L.USER_DISMISS), x(!1);
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
                        return (0, r.jsx)(H.Z, {
                            children: (0, r.jsx)(ef.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != m ? [m] : [],
                                handleGoLive: C,
                                appContext: h,
                                onClose: i
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        var n = ej(
                                {},
                                (function (e) {
                                    if (null == e) throw TypeError('Cannot destructure ' + e);
                                    return e;
                                })(e)
                            ),
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: I(n, i) });
                    }
                })
            })
        ]
    });
}
function eI(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        o = t.getGuildId();
    return (0, C.Z)(o, t.id)
        ? (0, r.jsx)('div', {
              className: ex.buttonContainer,
              children: (0, r.jsx)(ed.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
          })
        : null;
}
let eS = i.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: l, connectedEmbeddedActivity: o } = e,
        a = (0, u.e7)([x.Z], () => x.Z.getSelectedParticipant(l.id)),
        { reducedMotion: s } = i.useContext(p.Sfi),
        [d, h] = i.useState(!1),
        g = null == a ? void 0 : a.id,
        b = (0, u.e7)([$.Z], () => (null != g ? $.Z.getActiveStreamForStreamKey(g) : null), [g]),
        _ = (null == a ? void 0 : a.type) === ev.fO.STREAM && null != b && b.ownerId !== (null == t ? void 0 : t.id),
        C = (0, u.Wu)([$.Z], () =>
            $.Z.getAllActiveStreamsForChannel(l.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        v = (0, k.qY)(l.id),
        y = i.useCallback(() => ((null == a ? void 0 : a.type) === ev.fO.ACTIVITY && a.applicationId === (null == o ? void 0 : o.applicationId) ? 'ACTIVITY' : _ ? 'STREAM' : null != v ? 'EVENT' : 'CALL'), [a, null == o ? void 0 : o.applicationId, _, v]),
        [j, O] = i.useState(y()),
        N = (0, es.Z)({ location: 'DisconnectButton' }),
        E = (0, p.q_F)(
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
    let P = i.useCallback(() => {
            if (null != b) (0, m.g)((0, A.V9)(b));
            else for (let e of C) (0, m.g)((0, A.V9)(e));
        }, [C, b]),
        I = (e, i) => {
            let s = N
                ? {
                      fullRegionButton: !0,
                      centerButton: !0,
                      popoutOpen: e
                  }
                : {
                      centerButton: !0,
                      className: ex.controlButton,
                      popoutOpen: e
                  };
            switch (j) {
                case 'ACTIVITY':
                    if (null == a || null == t || a.type !== ev.fO.ACTIVITY || null == o) return;
                    return (0, r.jsx)(
                        z.Z,
                        eN(eO({}, s), {
                            applicationId: a.applicationId,
                            color: 'disconnect',
                            location: o.location,
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'STREAM':
                    return (0, r.jsx)(
                        K.O,
                        eN(eO({}, s), {
                            hasPermission: !0,
                            streamActive: !0,
                            color: 'disconnect',
                            onClick: P,
                            onPopoutClick: C.length > 1 ? i : null,
                            isSelfStream: !1
                        })
                    );
                case 'CALL':
                    return (0, r.jsx)(
                        q.Z,
                        eN(eO({}, s), {
                            color: 'disconnect',
                            onClick: () => (null == n ? void 0 : n()),
                            onPopoutClick: C.length > 0 ? i : null
                        })
                    );
                case 'EVENT':
                    return (0, r.jsx)(M.Z, {
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
            return (0, r.jsx)(ef.Z, {
                channel: l,
                currentUser: t,
                activeStreams: C,
                handleGoLive: eC.VqG,
                hideSelfOptions: !0,
                onClose: n
            });
        },
        position: 'top',
        align: 'center',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(c.animated.div, {
                style: E,
                children: I(i, n)
            });
        }
    });
});
function eZ(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: l, currentUser: o } = e,
        a = (0, b.bp)(),
        { reachedLimit: s, limit: c } = (0, ea.Z)(t),
        d = i.useCallback(() => {
            (0, e_.Z)(() => f.default.selectVoiceChannel(t.id, !0), a);
        }, [t.id, a]),
        p = i.useCallback(() => {
            n ? (0, em.Z)() : d();
        }, [n, d]),
        h = (0, u.e7)([ee.Z], () => {
            let e = ee.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(o.id)) === !0;
        }),
        m = (0, es.Z)({ location: 'JoinCall' });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(X.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: s,
                channelLimit: c,
                channel: t,
                cameraUnavailable: n,
                hasPermission: l,
                onCameraUnavailable: p,
                className: ex.controlButton,
                onChange: d
            }),
            (0, r.jsx)(V.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: ex.controlButton,
                fullRegionButton: m
            }),
            h
                ? (0, r.jsx)(G.Z, {
                      color: 'disconnect',
                      channel: t,
                      className: ex.controlButton,
                      fullRegionButton: m
                  })
                : null
        ]
    });
}
let eT = function (e) {
    var t, n;
    let { channel: l, className: a, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: f } = (0, ei.ZP)({ location: 'CenterControlTray' }),
        m = (0, es.Z)({ location: 'CenterControlTray' }),
        { enabled: b } = (0, j.Z)({ location: 'CenterControlTray' }),
        [C, x] = i.useState(void 0),
        S = (0, u.e7)([er.default], () => {
            let e = er.default.getCurrentUser();
            return s()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: A, enabled: R } = (0, el.Z)(),
        k = (0, ec.Z)(l),
        { suppress: M, selfMute: D, mute: W } = (0, eu.Z)(l),
        { canGoLive: U } = (0, u.cj)([et.Z], () => ({ canGoLive: (0, w.Z)(et.Z) })),
        F = (0, T.Z)(),
        G = (0, u.e7)([Z.Z], () => null != Z.Z.getAwaitingRemoteSessionInfo()),
        V = null != F,
        z = (0, u.e7)([en.Z], () => {
            var e;
            return (null !== (e = null == F ? void 0 : F.channelId) && void 0 !== e ? e : en.Z.getVoiceChannelId()) === l.id;
        }),
        q = (0, O.Z)(l, !0),
        K = (0, u.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivityForChannel(l.id)),
        { reachedLimit: $, limit: ee } = (0, ea.Z)(l),
        { analyticsLocations: ed } = (0, y.ZP)(v.Z.VOICE_CONTROL_TRAY),
        ef = (0, eo.Z)(l),
        eg = (0, J.Hu)({
            location: v.Z.VOICE_CONTROL_TRAY,
            autoTrackExposure: !0
        });
    if (!z)
        return (0, r.jsx)(y.Gt, {
            value: ed,
            children: (0, r.jsx)(eZ, {
                channel: l,
                cameraUnavailable: A,
                hasCameraPermission: k,
                currentUser: S
            })
        });
    let eb = ef && !q,
        e_ = (0, B.Z)(l);
    return m
        ? (0, r.jsx)(y.Gt, {
              value: ed,
              children: (0, r.jsxs)(g.Z, {
                  section: eC.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: ex.eventPromptsContainer,
                          children: (0, r.jsx)(L.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(ex.experimentWrapper, a),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: ex.buttonSection,
                                  children: [
                                      (0, r.jsx)(p.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(H.Z, {
                                                  children: eg
                                                      ? (0, r.jsx)(Q.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0
                                                        })
                                                      : b
                                                        ? (0, r.jsx)(N.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              simplified: !0
                                                          })
                                                        : (0, r.jsx)(N.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0
                                                          })
                                              });
                                          },
                                          align: 'right',
                                          position: 'top',
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(Y.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: V ? null : n,
                                                  selfMute: D,
                                                  serverMute: W,
                                                  suppress: M,
                                                  popoutOpen: i,
                                                  awaitingRemote: G,
                                                  onClick: () => (0, P.Z)(W, M, eC.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !V &&
                                          (0, r.jsx)('div', {
                                              className: ex.avSpacing,
                                              'aria-hidden': 'true',
                                              role: 'presentation'
                                          }),
                                      !V &&
                                          (0, r.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(H.Z, {
                                                      children: (0, r.jsx)(E.Z, {
                                                          onClose: t,
                                                          simplified: b
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
                                                      centerButton: !0,
                                                      hasPermission: k,
                                                      enabled: R,
                                                      cameraUnavailable: A,
                                                      onChange: eE,
                                                      onCameraUnavailable: em.Z,
                                                      channelLimitReached: $,
                                                      channelLimit: ee,
                                                      popoutOpen: i,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: ex.buttonSection,
                                  children: [
                                      !V &&
                                          (0, r.jsx)(eP, {
                                              channel: l,
                                              currentUser: S,
                                              exitFullScreen: d,
                                              canGoLive: U,
                                              hasPermission: k
                                          }),
                                      !V &&
                                          (0, r.jsx)(eI, {
                                              channel: l,
                                              idle: null === (t = null == h ? void 0 : h.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: x
                                          }),
                                      e_ &&
                                          (0, r.jsx)(I.Z, {
                                              channel: l,
                                              themeable: !0,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: x
                                          }),
                                      ef &&
                                          !V &&
                                          (0, r.jsx)(ep.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: x
                                          }),
                                      b &&
                                          !V &&
                                          (0, r.jsx)(eh.Z, {
                                              channel: l,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: x
                                          })
                                  ]
                              }),
                              (0, r.jsx)(eS, {
                                  connectedEmbeddedActivity: K,
                                  currentUser: S,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(y.Gt, {
              value: ed,
              children: (0, r.jsxs)(g.Z, {
                  section: eC.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: ex.eventPromptsContainer,
                          children: (0, r.jsx)(L.Z, { channelId: l.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(ex.wrapper, a),
                          children: [
                              'mic-button-moved-left' === f
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(H.Z, {
                                                children: eg
                                                    ? (0, r.jsx)(Q.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0
                                                      })
                                                    : (0, r.jsx)(N.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0
                                                      })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(Y.Z, {
                                                centerButton: !0,
                                                onPopoutClick: V ? null : n,
                                                className: ex.controlButton,
                                                selfMute: D,
                                                serverMute: W,
                                                suppress: M,
                                                popoutOpen: i,
                                                awaitingRemote: G,
                                                onClick: () => (0, P.Z)(W, M, eC.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !V &&
                                  (0, r.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, r.jsx)(H.Z, { children: (0, r.jsx)(E.Z, { onClose: t }) });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: p.yRy.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: i } = t;
                                          return (0, r.jsx)(X.C, {
                                              centerButton: !0,
                                              hasPermission: k,
                                              className: ex.controlButton,
                                              enabled: R,
                                              cameraUnavailable: A,
                                              onChange: eE,
                                              onCameraUnavailable: em.Z,
                                              channelLimitReached: $,
                                              channelLimit: ee,
                                              popoutOpen: i,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !V &&
                                  (0, r.jsx)(eI, {
                                      channel: l,
                                      idle: null === (n = null == h ? void 0 : h.idle) || void 0 === n || n
                                  }),
                              !V &&
                                  (0, r.jsx)(eP, {
                                      channel: l,
                                      currentUser: S,
                                      exitFullScreen: d,
                                      canGoLive: U,
                                      hasPermission: k
                                  }),
                              f === ei.BK.MicPushToEnable
                                  ? (0, r.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(H.Z, {
                                                children: eg
                                                    ? (0, r.jsx)(Q.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0
                                                      })
                                                    : (0, r.jsx)(N.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0
                                                      })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(Y.Z, {
                                                centerButton: !0,
                                                onPopoutClick: V ? null : n,
                                                className: ex.controlButton,
                                                selfMute: D,
                                                serverMute: W,
                                                suppress: M,
                                                popoutOpen: i,
                                                awaitingRemote: G,
                                                onClick: () => (0, P.Z)(W, M, eC.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              eb && !V
                                  ? (0, r.jsx)('div', {
                                        className: ex.buttonContainer,
                                        children: (0, r.jsx)(ep.Z, { channel: l })
                                    })
                                  : null,
                              (0, r.jsx)(eS, {
                                  connectedEmbeddedActivity: K,
                                  currentUser: S,
                                  channel: l,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
