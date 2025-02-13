n.d(t, {
    NZ: () => eb,
    ZP: () => eS,
    r: () => eI
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(642128),
    d = n(442837),
    u = n(704215),
    h = n(481060),
    p = n(846027),
    m = n(287734),
    f = n(872810),
    g = n(410575),
    _ = n(40851),
    C = n(317381),
    x = n(596040),
    v = n(100527),
    E = n(906732),
    I = n(358221),
    b = n(682901),
    Z = n(887012),
    N = n(659580),
    T = n(793865),
    S = n(575175),
    j = n(997614),
    y = n(243778),
    A = n(258609),
    P = n(446226),
    R = n(569545),
    M = n(74299),
    L = n(803647),
    k = n(554747),
    O = n(95764),
    D = n(459502),
    w = n(576645),
    U = n(140465),
    B = n(800966),
    F = n(641015),
    H = n(618158),
    G = n(390322),
    V = n(791592),
    z = n(136995),
    W = n(402113),
    Y = n(197016),
    q = n(386000),
    K = n(698877),
    X = n(25827),
    J = n(875527),
    Q = n(306609),
    $ = n(199902),
    ee = n(523746),
    et = n(131951),
    en = n(944486),
    ei = n(594174),
    el = n(861254),
    ea = n(923973),
    er = n(983131),
    es = n(829750),
    eo = n(189771),
    ec = n(294629),
    ed = n(304745),
    eu = n(985370),
    eh = n(987329),
    ep = n(544384),
    em = n(560688),
    ef = n(127608),
    eg = n(76021),
    e_ = n(173507),
    eC = n(981631),
    ex = n(354459),
    ev = n(921944),
    eE = n(131175);
function eI(e, t) {
    if (et.Z.isVideoEnabled() === e) return;
    let n = () => p.Z.setVideoEnabled(e);
    e ? (0, e_.Z)(n, t) : n();
}
function eb(e) {
    let { channel: t, currentUser: n, exitFullScreen: a, canGoLive: r, hasPermission: s, disabled: o } = e,
        { groupedButtons: c } = (0, el.ZP)({ location: 'GoLiveButton' }),
        p = (0, _.bp)(),
        m = (0, d.Wu)([$.Z], () => $.Z.getAllActiveStreams()),
        f = m.find((e) => e.ownerId === n.id),
        g = l.useRef(null),
        C = t.getGuildId(),
        x = l.useCallback(() => {
            if ((null == a || a(), !r)) return (0, ef.Z)();
            (0, eg.Z)(C, t.id, eC.ZY5.GUILD_CHANNEL);
        }, [C, t.id, r, a]),
        v = (0, U.B4)({ location: 'GoLiveButton' }),
        [E, I] = l.useState(!1),
        b = (0, w.bK)(),
        [Z, N] = l.useState(!1);
    l.useEffect(() => {
        if ((N(t.isHDStreamSplashed && null == f && !b), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                N(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, f, b]);
    let T = () => {
            if (r) {
                x();
                return;
            }
            (0, ef.Z)();
        },
        S = () => {
            (0, L.Z)(f);
        },
        j = (e, t) => {
            let { onClick: n, ...l } = null != e ? e : { onClick: void 0 },
                a = null != f;
            return (0, i.jsx)(K.O, {
                ...l,
                centerButton: !0,
                disabled: o || !s,
                className: c ? void 0 : eE.controlButton,
                hasPermission: s,
                streamActive: null != f,
                isSelfStream: !0,
                onPopoutClick: a
                    ? function (e) {
                          null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: Z,
                renderNUXHighlight: E,
                buttonRef: g,
                onClick: null != f ? S : T
            });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (() => {
                if (v && 0 === m.length)
                    return (0, i.jsx)(y.ZP, {
                        contentTypes: [u.z.TRIAL_NUX_STREAM_COACH_MARK],
                        bypassAutoDismiss: !0,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.z.TRIAL_NUX_STREAM_COACH_MARK)
                                return (
                                    I(!0),
                                    (0, i.jsx)(B.h, {
                                        buttonRef: g,
                                        dismissed: !1,
                                        onDismiss: () => {
                                            n(ev.L.USER_DISMISS), I(!1);
                                        }
                                    })
                                );
                        }
                    });
            })(),
            (0, i.jsx)(H.Z, {
                children: (0, i.jsx)(h.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(G.Z, {
                            children: (0, i.jsx)(ep.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != f ? [f] : [],
                                handleGoLive: x,
                                appContext: p,
                                onClose: l
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: h.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: l } = t;
                        return (0, i.jsx)('div', { children: j(n, l) });
                    }
                })
            })
        ]
    });
}
function eZ(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: a } = e,
        r = t.getGuildId();
    return (0, x.Z)(r, t.id)
        ? (0, i.jsx)('div', {
              className: eE.buttonContainer,
              children: (0, i.jsx)(ed.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: l,
                  setWhichPopoutIsOpen: a
              })
          })
        : null;
}
let eN = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: a, connectedEmbeddedActivity: r } = e,
        s = (0, d.e7)([I.Z], () => I.Z.getSelectedParticipant(a.id)),
        { reducedMotion: o } = l.useContext(h.Sfi),
        [u, p] = l.useState(!1),
        g = null == s ? void 0 : s.id,
        _ = (0, d.e7)([$.Z], () => (null != g ? $.Z.getActiveStreamForStreamKey(g) : null), [g]),
        C = (null == s ? void 0 : s.type) === ex.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        x = (0, d.Wu)([$.Z], () =>
            $.Z.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        v = (0, k.qY)(a.id),
        E = l.useCallback(() => ((null == s ? void 0 : s.type) === ex.fO.ACTIVITY && s.applicationId === (null == r ? void 0 : r.applicationId) ? 'ACTIVITY' : C ? 'STREAM' : null != v ? 'EVENT' : 'CALL'), [s, null == r ? void 0 : r.applicationId, C, v]),
        [b, Z] = l.useState(E()),
        { groupedButtons: N } = (0, el.ZP)({ location: 'DisconnectButton' }),
        T = (0, h.q_F)(
            {
                opacity: u ? 0.2 : 1,
                transform: u && !o.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: u ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: u
                },
                onRest: () => {
                    Z(E()), p(!1);
                }
            },
            'animate-always'
        );
    l.useEffect(() => {
        E() !== b && p(!0);
    }, [b, E]);
    let S = l.useCallback(() => {
            if (null != _) (0, f.g)((0, R.V9)(_));
            else for (let e of x) (0, f.g)((0, R.V9)(e));
        }, [x, _]),
        j = (e, l) => {
            let o = N
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
            switch (b) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== ex.fO.ACTIVITY || null == r) return;
                    return (0, i.jsx)(W.Z, {
                        ...o,
                        applicationId: s.applicationId,
                        color: 'red',
                        location: r.location,
                        onPopoutClick: x.length > 0 ? l : null
                    });
                case 'STREAM':
                    return (0, i.jsx)(K.O, {
                        ...o,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: S,
                        onPopoutClick: x.length > 1 ? l : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, i.jsx)(Y.Z, {
                        ...o,
                        color: 'red',
                        onClick: () => (null == n ? void 0 : n()),
                        onPopoutClick: x.length > 0 ? l : null
                    });
                case 'EVENT':
                    return (0, i.jsx)(O.Z, {
                        channelId: a.id,
                        onClick: () => {
                            m.default.disconnect(), null == n || n();
                        }
                    });
            }
        };
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(ep.Z, {
                channel: a,
                currentUser: t,
                activeStreams: x,
                handleGoLive: eC.VqG,
                hideSelfOptions: !0,
                onClose: n
            });
        },
        position: 'top',
        align: 'center',
        animation: h.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(c.animated.div, {
                style: T,
                children: j(l, n)
            });
        }
    });
});
function eT(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: a, currentUser: r } = e,
        s = (0, _.bp)(),
        { reachedLimit: o, limit: c } = (0, es.Z)(t),
        u = l.useCallback(() => {
            (0, e_.Z)(() => m.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = l.useCallback(() => {
            n ? (0, em.Z)() : u();
        }, [n, u]),
        p = (0, d.e7)([ee.Z], () => {
            let e = ee.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(r.id)) === !0;
        }),
        { groupedButtons: f } = (0, el.ZP)({ location: 'JoinCall' });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(X.C, {
                enabled: !0,
                centerButton: !0,
                join: !0,
                color: 'green',
                channelLimitReached: o,
                channelLimit: c,
                channel: t,
                cameraUnavailable: n,
                hasPermission: a,
                onCameraUnavailable: h,
                className: eE.controlButton,
                onChange: u
            }),
            (0, i.jsx)(z.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: eE.controlButton,
                fullRegionButton: f
            }),
            p
                ? (0, i.jsx)(V.Z, {
                      color: 'red',
                      channel: t,
                      className: eE.controlButton,
                      fullRegionButton: f
                  })
                : null
        ]
    });
}
let eS = function (e) {
    var t, n;
    let { channel: a, className: s, onDisconnectCall: c, exitFullScreen: u, idleProps: p } = e,
        { mode: m, groupedButtons: f } = (0, el.ZP)({ location: 'CenterControlTray' }),
        { enabled: _ } = (0, b.Z)({ location: 'CenterControlTray' }),
        [x, I] = l.useState(void 0),
        y = (0, d.e7)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return o()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: R, enabled: L } = (0, ea.Z)(),
        k = (0, eo.Z)(a),
        { suppress: O, selfMute: w, mute: U } = (0, ec.Z)(a),
        { canGoLive: B } = (0, d.cj)([et.Z], () => ({ canGoLive: (0, M.Z)(et.Z) })),
        H = (0, P.Z)(),
        V = (0, d.e7)([A.Z], () => null != A.Z.getAwaitingRemoteSessionInfo()),
        z = null != H,
        W = (0, d.e7)([en.Z], () => {
            var e;
            return (null !== (e = null == H ? void 0 : H.channelId) && void 0 !== e ? e : en.Z.getVoiceChannelId()) === a.id;
        }),
        Y = (0, Z.Z)(a, !0),
        K = (0, d.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivityForChannel(a.id)),
        { reachedLimit: $, limit: ee } = (0, es.Z)(a),
        { analyticsLocations: ed } = (0, E.ZP)(v.Z.VOICE_CONTROL_TRAY),
        ep = (0, er.Z)(a),
        ef = (0, J.H)(v.Z.VOICE_CONTROL_TRAY);
    if (!W)
        return (0, i.jsx)(E.Gt, {
            value: ed,
            children: (0, i.jsx)(eT, {
                channel: a,
                cameraUnavailable: R,
                hasCameraPermission: k,
                currentUser: y
            })
        });
    let eg = ep && !Y,
        e_ = (0, F.Z)(a);
    return f
        ? (0, i.jsx)(E.Gt, {
              value: ed,
              children: (0, i.jsxs)(g.Z, {
                  section: eC.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)('div', {
                          className: eE.eventPromptsContainer,
                          children: (0, i.jsx)(D.Z, { channelId: a.id })
                      }),
                      (0, i.jsxs)('div', {
                          className: r()(eE.experimentWrapper, s),
                          children: [
                              (0, i.jsxs)('div', {
                                  className: eE.buttonSection,
                                  children: [
                                      (0, i.jsx)(h.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, i.jsx)(G.Z, {
                                                  children: ef
                                                      ? (0, i.jsx)(Q.l, {
                                                            wide: !0,
                                                            showOutputDevices: !0
                                                        })
                                                      : _
                                                        ? (0, i.jsx)(N.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              simplified: !0
                                                          })
                                                        : (0, i.jsx)(N.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0
                                                          })
                                              });
                                          },
                                          align: 'right',
                                          position: 'top',
                                          animation: h.yRy.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: l } = t;
                                              return (0, i.jsx)(q.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: z ? null : n,
                                                  selfMute: w,
                                                  serverMute: U,
                                                  suppress: O,
                                                  popoutOpen: l,
                                                  awaitingRemote: V,
                                                  onClick: () => (0, S.Z)(U, O, eC.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !z &&
                                          (0, i.jsx)('div', {
                                              className: eE.avSpacing,
                                              'aria-hidden': 'true',
                                              role: 'presentation'
                                          }),
                                      !z &&
                                          (0, i.jsx)(h.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(G.Z, {
                                                      children: (0, i.jsx)(T.Z, {
                                                          onClose: t,
                                                          simplified: _
                                                      })
                                                  });
                                              },
                                              position: 'top',
                                              align: 'right',
                                              spacing: 16,
                                              animation: h.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: l } = t;
                                                  return (0, i.jsx)(X.C, {
                                                      centerButton: !0,
                                                      hasPermission: k,
                                                      enabled: L,
                                                      cameraUnavailable: R,
                                                      onChange: eI,
                                                      onCameraUnavailable: em.Z,
                                                      channelLimitReached: $,
                                                      channelLimit: ee,
                                                      popoutOpen: l,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: eE.buttonSection,
                                  children: [
                                      !z &&
                                          (0, i.jsx)(eb, {
                                              channel: a,
                                              currentUser: y,
                                              exitFullScreen: u,
                                              canGoLive: B,
                                              hasPermission: k
                                          }),
                                      !z &&
                                          (0, i.jsx)(eZ, {
                                              channel: a,
                                              idle: null === (t = null == p ? void 0 : p.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          }),
                                      e_ &&
                                          (0, i.jsx)(j.Z, {
                                              channel: a,
                                              themeable: !0,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          }),
                                      ep &&
                                          !z &&
                                          (0, i.jsx)(eu.Z, {
                                              channel: a,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          }),
                                      _ &&
                                          !z &&
                                          (0, i.jsx)(eh.Z, {
                                              channel: a,
                                              whichPopoutIsOpen: x,
                                              setWhichPopoutIsOpen: I
                                          })
                                  ]
                              }),
                              (0, i.jsx)(eN, {
                                  connectedEmbeddedActivity: K,
                                  currentUser: y,
                                  channel: a,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, i.jsx)(E.Gt, {
              value: ed,
              children: (0, i.jsxs)(g.Z, {
                  section: eC.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)('div', {
                          className: eE.eventPromptsContainer,
                          children: (0, i.jsx)(D.Z, { channelId: a.id })
                      }),
                      (0, i.jsxs)('div', {
                          className: r()(eE.wrapper, s),
                          children: [
                              'mic-button-moved-left' === m
                                  ? (0, i.jsx)(h.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(G.Z, {
                                                children: ef
                                                    ? (0, i.jsx)(Q.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0
                                                      })
                                                    : (0, i.jsx)(N.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0
                                                      })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: h.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: l } = t;
                                            return (0, i.jsx)(q.Z, {
                                                centerButton: !0,
                                                onPopoutClick: z ? null : n,
                                                className: eE.controlButton,
                                                selfMute: w,
                                                serverMute: U,
                                                suppress: O,
                                                popoutOpen: l,
                                                awaitingRemote: V,
                                                onClick: () => (0, S.Z)(U, O, eC.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !z &&
                                  (0, i.jsx)(h.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, i.jsx)(G.Z, { children: (0, i.jsx)(T.Z, { onClose: t }) });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: h.yRy.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: l } = t;
                                          return (0, i.jsx)(X.C, {
                                              centerButton: !0,
                                              hasPermission: k,
                                              className: eE.controlButton,
                                              enabled: L,
                                              cameraUnavailable: R,
                                              onChange: eI,
                                              onCameraUnavailable: em.Z,
                                              channelLimitReached: $,
                                              channelLimit: ee,
                                              popoutOpen: l,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !z &&
                                  (0, i.jsx)(eZ, {
                                      channel: a,
                                      idle: null === (n = null == p ? void 0 : p.idle) || void 0 === n || n
                                  }),
                              !z &&
                                  (0, i.jsx)(eb, {
                                      channel: a,
                                      currentUser: y,
                                      exitFullScreen: u,
                                      canGoLive: B,
                                      hasPermission: k
                                  }),
                              m === el.BK.MicPushToEnable
                                  ? (0, i.jsx)(h.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(G.Z, {
                                                children: ef
                                                    ? (0, i.jsx)(Q.l, {
                                                          wide: !0,
                                                          showOutputDevices: !0
                                                      })
                                                    : (0, i.jsx)(N.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0
                                                      })
                                            });
                                        },
                                        align: 'center',
                                        position: 'top',
                                        animation: h.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: l } = t;
                                            return (0, i.jsx)(q.Z, {
                                                centerButton: !0,
                                                onPopoutClick: z ? null : n,
                                                className: eE.controlButton,
                                                selfMute: w,
                                                serverMute: U,
                                                suppress: O,
                                                popoutOpen: l,
                                                awaitingRemote: V,
                                                onClick: () => (0, S.Z)(U, O, eC.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              eg && !z
                                  ? (0, i.jsx)('div', {
                                        className: eE.buttonContainer,
                                        children: (0, i.jsx)(eu.Z, { channel: a })
                                    })
                                  : null,
                              (0, i.jsx)(eN, {
                                  connectedEmbeddedActivity: K,
                                  currentUser: y,
                                  channel: a,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
