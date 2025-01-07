n.d(t, {
    NZ: function () {
        return eT;
    },
    r: function () {
        return eS;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    d = n.n(c),
    u = n(752877),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    f = n(481060),
    g = n(846027),
    C = n(287734),
    x = n(872810),
    v = n(410575),
    _ = n(40851),
    I = n(317381),
    E = n(596040),
    b = n(100527),
    Z = n(906732),
    N = n(358221),
    S = n(887012),
    T = n(659580),
    j = n(793865),
    A = n(575175),
    y = n(997614),
    P = n(324085),
    M = n(243778),
    R = n(258609),
    L = n(446226),
    k = n(569545),
    O = n(74299),
    D = n(803647),
    w = n(554747),
    B = n(95764),
    U = n(459502),
    H = n(386542),
    G = n(140465),
    F = n(746599),
    V = n(455961),
    z = n(611845),
    W = n(800966),
    K = n(641015),
    Y = n(618158),
    q = n(390322),
    X = n(791592),
    J = n(136995),
    Q = n(402113),
    $ = n(197016),
    ee = n(386000),
    et = n(698877),
    en = n(25827),
    ei = n(199902),
    el = n(523746),
    er = n(131951),
    ea = n(944486),
    es = n(594174),
    eo = n(626135),
    ec = n(861254),
    ed = n(923973),
    eu = n(983131),
    eh = n(829750),
    ep = n(189771),
    em = n(294629),
    ef = n(304745),
    eg = n(985370),
    eC = n(544384),
    ex = n(560688),
    ev = n(127608),
    e_ = n(76021),
    eI = n(173507),
    eE = n(981631),
    eb = n(354459),
    eZ = n(921944),
    eN = n(561716);
function eS(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => g.Z.setVideoEnabled(e);
    e ? (0, eI.Z)(n, t) : n();
}
function eT(e) {
    let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: l, hasPermission: s, disabled: o } = e,
        { groupedButtons: c } = (0, ec.ZP)({ location: 'GoLiveButton' }),
        d = (0, _.bp)(),
        u = (0, p.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        g = u.find((e) => e.ownerId === n.id),
        { activated: C, hqStreamingState: x } = (0, H.k)(h.q.STREAM_HIGH_QUALITY),
        v = null != g && C,
        I = a.useRef(null),
        E = t.getGuildId(),
        b = a.useCallback(() => {
            if ((null == i || i(), !l)) return (0, ev.Z)();
            (0, e_.Z)(E, t.id, eE.ZY5.GUILD_CHANNEL);
        }, [E, t.id, l, i]),
        Z = (0, G.B4)({ location: 'GoLiveButton' }),
        N = (0, P.bK)(),
        [S, T] = a.useState(!1);
    a.useEffect(() => {
        if ((T(t.isHDStreamSplashed && null == g && !N), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                T(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, N]);
    let j = () => {
            if (l) {
                b();
                return;
            }
            (0, ev.Z)();
        },
        A = () => {
            (0, D.Z)(g);
        },
        y = F.pM,
        R = a.useCallback(() => {
            eo.default.track(eE.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: h.q.STREAM_HIGH_QUALITY
            }),
                (0, F.qA)();
        }, [t.guild_id, t.id]),
        L = (e, t) => {
            let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
                l = null != g;
            return (0, r.jsx)(et.O, {
                ...i,
                centerButton: !0,
                disabled: o || !s,
                className: c ? void 0 : eN.controlButton,
                hasPermission: s,
                streamActive: null != g,
                isSelfStream: !0,
                onPopoutClick: l
                    ? function (e) {
                          x.hqStreamingIsEnabled && !x.hqStreamingPopoutDismissed && y(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: S,
                buttonRef: I,
                onClick: null != g ? A : j
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            Z && 0 === u.length
                ? (0, r.jsx)(M.ZP, {
                      contentTypes: [m.z.TRIAL_NUX_STREAM_COACH_MARK],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === m.z.TRIAL_NUX_STREAM_COACH_MARK)
                              return (0, r.jsx)(W.h, {
                                  buttonRef: I,
                                  dismissed: !1,
                                  onDismiss: () => n(eZ.L.USER_DISMISS)
                              });
                      }
                  })
                : v && x.hqStreamingIsEnabled
                  ? (0, r.jsx)(z.$, {
                        buttonRef: I,
                        dismissed: x.hqStreamingPopoutDismissed,
                        onDismiss: y
                    })
                  : (0, r.jsx)(V.b, {
                        channel: t,
                        buttonRef: I,
                        dismissed: x.hqStreamingOptInPopoutDismissed,
                        onDismiss: R
                    }),
            (0, r.jsx)(Y.Z, {
                children: (0, r.jsx)(f.Popout, {
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, r.jsx)(q.Z, {
                            children: (0, r.jsx)(eC.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: b,
                                onClose: i,
                                appContext: d
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: f.Popout.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: i } = t;
                        return (0, r.jsx)('div', { children: L(n, i) });
                    }
                })
            })
        ]
    });
}
function ej(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: i, setWhichPopoutIsOpen: l } = e,
        a = t.getGuildId();
    return (0, E.Z)(a, t.id)
        ? (0, r.jsx)('div', {
              className: eN.buttonContainer,
              children: (0, r.jsx)(ef.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: i,
                  setWhichPopoutIsOpen: l
              })
          })
        : null;
}
((l = i || (i = {})).ACTIVITY = 'ACTIVITY'), (l.STREAM = 'STREAM'), (l.CALL = 'CALL'), (l.EVENT = 'EVENT');
let eA = a.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: i, connectedEmbeddedActivity: l } = e,
        s = (0, p.e7)([N.Z], () => N.Z.getSelectedParticipant(i.id)),
        { reducedMotion: o } = a.useContext(f.AccessibilityPreferencesContext),
        [c, d] = a.useState(!1),
        h = null == s ? void 0 : s.id,
        m = (0, p.e7)([ei.Z], () => (null != h ? ei.Z.getActiveStreamForStreamKey(h) : null), [h]),
        g = (null == s ? void 0 : s.type) === eb.fO.STREAM && null != m && m.ownerId !== (null == t ? void 0 : t.id),
        v = (0, p.Wu)([ei.Z], () =>
            ei.Z.getAllActiveStreamsForChannel(i.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        _ = (0, w.qY)(i.id),
        I = a.useCallback(() => {
            if ((null == s ? void 0 : s.type) === eb.fO.ACTIVITY && s.id === (null == l ? void 0 : l.applicationId)) return 'ACTIVITY';
            if (g) return 'STREAM';
            if (null != _) return 'EVENT';
            return 'CALL';
        }, [s, null == l ? void 0 : l.applicationId, g, _]),
        [E, b] = a.useState(I()),
        { groupedButtons: Z } = (0, ec.ZP)({ location: 'DisconnectButton' }),
        S = (0, f.useSpring)(
            {
                opacity: c ? 0.2 : 1,
                transform: c && !o.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: c ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: c
                },
                onRest: () => {
                    b(I()), d(!1);
                }
            },
            'animate-always'
        );
    a.useEffect(() => {
        I() !== E && d(!0);
    }, [E, I]);
    let T = a.useCallback(() => {
            if (null != m) (0, x.g)((0, k.V9)(m));
            else for (let e of v) (0, x.g)((0, k.V9)(e));
        }, [v, m]),
        j = (e, a) => {
            let o = Z
                ? {
                      fullRegionButton: !0,
                      centerButton: !0,
                      popoutOpen: e
                  }
                : {
                      centerButton: !0,
                      className: eN.controlButton,
                      popoutOpen: e
                  };
            switch (E) {
                case 'ACTIVITY':
                    if (null == s || null == t || null == l) return;
                    return (0, r.jsx)(Q.Z, {
                        ...o,
                        applicationId: s.id,
                        color: 'red',
                        location: l.location,
                        onPopoutClick: v.length > 0 ? a : null
                    });
                case 'STREAM':
                    return (0, r.jsx)(et.O, {
                        ...o,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: T,
                        onPopoutClick: v.length > 1 ? a : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, r.jsx)($.Z, {
                        ...o,
                        color: 'red',
                        onClick: () => (null == n ? void 0 : n()),
                        onPopoutClick: v.length > 0 ? a : null
                    });
                case 'EVENT':
                    return (0, r.jsx)(B.Z, {
                        channelId: i.id,
                        onClick: () => {
                            C.default.disconnect(), null == n || n();
                        }
                    });
            }
        };
    return (0, r.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eC.Z, {
                channel: i,
                currentUser: t,
                activeStreams: v,
                handleGoLive: eE.VqG,
                hideSelfOptions: !0,
                onClose: n
            });
        },
        position: 'top',
        align: 'center',
        animation: f.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(u.animated.div, {
                style: S,
                children: j(i, n)
            });
        }
    });
});
function ey(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: l } = e,
        s = (0, _.bp)(),
        { reachedLimit: o, limit: c } = (0, eh.Z)(t),
        d = a.useCallback(() => {
            (0, eI.Z)(() => C.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        u = a.useCallback(() => {
            n ? (0, ex.Z)() : d();
        }, [n, d]),
        h = (0, p.e7)([el.Z], () => {
            let e = el.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(l.id)) === !0;
        }),
        { groupedButtons: m } = (0, ec.ZP)({ location: 'JoinCall' });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(en.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: o,
                channelLimit: c,
                channel: t,
                cameraUnavailable: n,
                hasPermission: i,
                onCameraUnavailable: u,
                className: eN.controlButton,
                onChange: d
            }),
            (0, r.jsx)(J.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: eN.controlButton,
                fullRegionButton: m
            }),
            h
                ? (0, r.jsx)(X.Z, {
                      color: 'red',
                      channel: t,
                      className: eN.controlButton,
                      fullRegionButton: m
                  })
                : null
        ]
    });
}
t.ZP = function (e) {
    var t, n;
    let { channel: i, className: l, onDisconnectCall: s, exitFullScreen: c, idleProps: u } = e,
        { mode: h, groupedButtons: m } = (0, ec.ZP)({ location: 'CenterControlTray' }),
        [g, C] = a.useState(void 0),
        x = (0, p.e7)([es.default], () => {
            let e = es.default.getCurrentUser();
            return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: _, enabled: E } = (0, ed.Z)(),
        N = (0, ep.Z)(i),
        { suppress: P, selfMute: M, mute: k } = (0, em.Z)(i),
        { canGoLive: D } = (0, p.cj)([er.Z], () => ({ canGoLive: (0, O.Z)(er.Z) })),
        w = (0, L.Z)(),
        B = (0, p.e7)([R.Z], () => null != R.Z.getAwaitingRemoteSessionInfo()),
        H = null != w,
        G = (0, p.e7)([ea.Z], () => {
            var e;
            return (null !== (e = null == w ? void 0 : w.channelId) && void 0 !== e ? e : ea.Z.getVoiceChannelId()) === i.id;
        }),
        F = (0, S.Z)(i, !0),
        V = (0, p.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivityForChannel(i.id)),
        { reachedLimit: z, limit: W } = (0, eh.Z)(i),
        { analyticsLocations: Y } = (0, Z.ZP)(b.Z.VOICE_CONTROL_TRAY),
        X = (0, eu.Z)(i);
    if (!G)
        return (0, r.jsx)(Z.Gt, {
            value: Y,
            children: (0, r.jsx)(ey, {
                channel: i,
                cameraUnavailable: _,
                hasCameraPermission: N,
                currentUser: x
            })
        });
    let J = X && !F,
        Q = (0, K.Z)(i);
    return m
        ? (0, r.jsx)(Z.Gt, {
              value: Y,
              children: (0, r.jsxs)(v.Z, {
                  section: eE.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eN.eventPromptsContainer,
                          children: (0, r.jsx)(U.Z, { channelId: i.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eN.experimentWrapper, l),
                          children: [
                              (0, r.jsxs)('div', {
                                  className: eN.buttonSection,
                                  children: [
                                      (0, r.jsx)(f.Popout, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, r.jsx)(q.Z, {
                                                  children: (0, r.jsx)(T.default, {
                                                      onClose: t,
                                                      renderInputDevices: !0,
                                                      renderOutputDevices: !0,
                                                      renderInputModes: !0
                                                  })
                                              });
                                          },
                                          align: 'right',
                                          position: 'top',
                                          animation: f.Popout.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: i } = t;
                                              return (0, r.jsx)(ee.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: H ? null : n,
                                                  selfMute: M,
                                                  serverMute: k,
                                                  suppress: P,
                                                  popoutOpen: i,
                                                  awaitingRemote: B,
                                                  onClick: () => (0, A.Z)(k, P, eE.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !H &&
                                          (0, r.jsx)('div', {
                                              className: eN.avSpacing,
                                              'aria-hidden': 'true',
                                              role: 'presentation'
                                          }),
                                      !H &&
                                          (0, r.jsx)(f.Popout, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(q.Z, { children: (0, r.jsx)(j.Z, { onClose: t }) });
                                              },
                                              position: 'top',
                                              align: 'right',
                                              spacing: 16,
                                              animation: f.Popout.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: i } = t;
                                                  return (0, r.jsx)(en.C, {
                                                      centerButton: !0,
                                                      hasPermission: N,
                                                      enabled: E,
                                                      cameraUnavailable: _,
                                                      onChange: eS,
                                                      onCameraUnavailable: ex.Z,
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
                                  className: eN.buttonSection,
                                  children: [
                                      !H &&
                                          (0, r.jsx)(eT, {
                                              channel: i,
                                              currentUser: x,
                                              exitFullScreen: c,
                                              canGoLive: D,
                                              hasPermission: N
                                          }),
                                      !H &&
                                          (0, r.jsx)(ej, {
                                              channel: i,
                                              idle: null === (t = null == u ? void 0 : u.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          }),
                                      Q &&
                                          (0, r.jsx)(y.Z, {
                                              channel: i,
                                              themeable: !0,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          }),
                                      X &&
                                          !H &&
                                          (0, r.jsx)(eg.Z, {
                                              channel: i,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          })
                                  ]
                              }),
                              (0, r.jsx)(eA, {
                                  connectedEmbeddedActivity: V,
                                  currentUser: x,
                                  channel: i,
                                  onDisconnectCall: s
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, r.jsx)(Z.Gt, {
              value: Y,
              children: (0, r.jsxs)(v.Z, {
                  section: eE.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, r.jsx)('div', {
                          className: eN.eventPromptsContainer,
                          children: (0, r.jsx)(U.Z, { channelId: i.id })
                      }),
                      (0, r.jsxs)('div', {
                          className: o()(eN.wrapper, l),
                          children: [
                              'mic-button-moved-left' === h
                                  ? (0, r.jsx)(f.Popout, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(q.Z, {
                                                children: (0, r.jsx)(T.default, {
                                                    onClose: t,
                                                    renderInputDevices: !0,
                                                    renderOutputDevices: !0,
                                                    renderInputModes: !0
                                                })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: f.Popout.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(ee.Z, {
                                                centerButton: !0,
                                                onPopoutClick: H ? null : n,
                                                className: eN.controlButton,
                                                selfMute: M,
                                                serverMute: k,
                                                suppress: P,
                                                popoutOpen: i,
                                                awaitingRemote: B,
                                                onClick: () => (0, A.Z)(k, P, eE.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !H &&
                                  (0, r.jsx)(f.Popout, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, r.jsx)(q.Z, { children: (0, r.jsx)(j.Z, { onClose: t }) });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: f.Popout.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: i } = t;
                                          return (0, r.jsx)(en.C, {
                                              centerButton: !0,
                                              hasPermission: N,
                                              className: eN.controlButton,
                                              enabled: E,
                                              cameraUnavailable: _,
                                              onChange: eS,
                                              onCameraUnavailable: ex.Z,
                                              channelLimitReached: z,
                                              channelLimit: W,
                                              popoutOpen: i,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !H &&
                                  (0, r.jsx)(ej, {
                                      channel: i,
                                      idle: null === (n = null == u ? void 0 : u.idle) || void 0 === n || n
                                  }),
                              !H &&
                                  (0, r.jsx)(eT, {
                                      channel: i,
                                      currentUser: x,
                                      exitFullScreen: c,
                                      canGoLive: D,
                                      hasPermission: N
                                  }),
                              h === ec.BK.MicPushToEnable
                                  ? (0, r.jsx)(f.Popout, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(q.Z, {
                                                children: (0, r.jsx)(T.default, {
                                                    onClose: t,
                                                    renderInputDevices: !0,
                                                    renderOutputDevices: !0,
                                                    renderInputModes: !0
                                                })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: f.Popout.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: i } = t;
                                            return (0, r.jsx)(ee.Z, {
                                                centerButton: !0,
                                                onPopoutClick: H ? null : n,
                                                className: eN.controlButton,
                                                selfMute: M,
                                                serverMute: k,
                                                suppress: P,
                                                popoutOpen: i,
                                                awaitingRemote: B,
                                                onClick: () => (0, A.Z)(k, P, eE.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              J && !H
                                  ? (0, r.jsx)('div', {
                                        className: eN.buttonContainer,
                                        children: (0, r.jsx)(eg.Z, { channel: i })
                                    })
                                  : null,
                              (0, r.jsx)(eA, {
                                  connectedEmbeddedActivity: V,
                                  currentUser: x,
                                  channel: i,
                                  onDisconnectCall: s
                              })
                          ]
                      })
                  ]
              })
          });
};
