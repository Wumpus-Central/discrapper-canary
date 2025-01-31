n.d(t, {
    NZ: () => eS,
    ZP: () => eP,
    r: () => eT
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(642128),
    d = n(848246),
    u = n(442837),
    h = n(704215),
    p = n(481060),
    m = n(846027),
    f = n(287734),
    g = n(872810),
    _ = n(410575),
    C = n(40851),
    x = n(317381),
    v = n(596040),
    E = n(100527),
    I = n(906732),
    b = n(358221),
    Z = n(887012),
    N = n(659580),
    T = n(793865),
    S = n(575175),
    j = n(997614),
    A = n(243778),
    y = n(258609),
    P = n(446226),
    R = n(569545),
    M = n(74299),
    L = n(803647),
    k = n(554747),
    O = n(95764),
    D = n(459502),
    w = n(576645),
    U = n(386542),
    B = n(140465),
    F = n(746599),
    H = n(455961),
    G = n(611845),
    V = n(800966),
    z = n(641015),
    W = n(618158),
    Y = n(390322),
    q = n(791592),
    K = n(136995),
    X = n(402113),
    J = n(197016),
    Q = n(386000),
    $ = n(698877),
    ee = n(25827),
    et = n(875527),
    en = n(306609),
    ei = n(199902),
    el = n(523746),
    ea = n(131951),
    er = n(944486),
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
    e_ = n(544384),
    eC = n(560688),
    ex = n(127608),
    ev = n(76021),
    eE = n(173507),
    eI = n(981631),
    eb = n(354459),
    eZ = n(921944),
    eN = n(812801);
function eT(e, t) {
    if (ea.Z.isVideoEnabled() === e) return;
    let n = () => m.Z.setVideoEnabled(e);
    e ? (0, eE.Z)(n, t) : n();
}
function eS(e) {
    let { channel: t, currentUser: n, exitFullScreen: a, canGoLive: r, hasPermission: s, disabled: o } = e,
        { groupedButtons: c } = (0, ec.ZP)({ location: 'GoLiveButton' }),
        m = (0, C.bp)(),
        f = (0, u.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        g = f.find((e) => e.ownerId === n.id),
        { activated: _, hqStreamingState: x } = (0, U.k)(d.q.STREAM_HIGH_QUALITY),
        v = null != g && _,
        E = l.useRef(null),
        I = t.getGuildId(),
        b = l.useCallback(() => {
            if ((null == a || a(), !r)) return (0, ex.Z)();
            (0, ev.Z)(I, t.id, eI.ZY5.GUILD_CHANNEL);
        }, [I, t.id, r, a]),
        Z = (0, B.B4)({ location: 'GoLiveButton' }),
        [N, T] = l.useState(!1),
        S = (0, w.bK)(),
        [j, y] = l.useState(!1);
    l.useEffect(() => {
        if ((y(t.isHDStreamSplashed && null == g && !S), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                y(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, S]);
    let P = () => {
            if (r) {
                b();
                return;
            }
            (0, ex.Z)();
        },
        R = () => {
            (0, L.Z)(g);
        },
        M = F.pM,
        k = l.useCallback(() => {
            eo.default.track(eI.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: d.q.STREAM_HIGH_QUALITY
            }),
                (0, F.qA)();
        }, [t.guild_id, t.id]),
        O = (e, t) => {
            let { onClick: n, ...l } = null != e ? e : { onClick: void 0 },
                a = null != g;
            return (0, i.jsx)($.O, {
                ...l,
                centerButton: !0,
                disabled: o || !s,
                className: c ? void 0 : eN.controlButton,
                hasPermission: s,
                streamActive: null != g,
                isSelfStream: !0,
                onPopoutClick: a
                    ? function (e) {
                          x.hqStreamingIsEnabled && !x.hqStreamingPopoutDismissed && M(), null == n || n(e);
                      }
                    : null,
                popoutOpen: t,
                shouldShowTooltip: !t,
                premiumGlow: j,
                renderNUXHighlight: N,
                buttonRef: E,
                onClick: null != g ? R : P
            });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            Z && 0 === f.length
                ? (0, i.jsx)(A.ZP, {
                      contentTypes: [h.z.TRIAL_NUX_STREAM_COACH_MARK],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === h.z.TRIAL_NUX_STREAM_COACH_MARK)
                              return (
                                  T(!0),
                                  (0, i.jsx)(V.h, {
                                      buttonRef: E,
                                      dismissed: !1,
                                      onDismiss: () => {
                                          n(eZ.L.USER_DISMISS), T(!1);
                                      }
                                  })
                              );
                      }
                  })
                : v && x.hqStreamingIsEnabled
                  ? (0, i.jsx)(G.$, {
                        buttonRef: E,
                        dismissed: x.hqStreamingPopoutDismissed,
                        onDismiss: M
                    })
                  : (0, i.jsx)(H.b, {
                        channel: t,
                        buttonRef: E,
                        dismissed: x.hqStreamingOptInPopoutDismissed,
                        onDismiss: k
                    }),
            (0, i.jsx)(W.Z, {
                children: (0, i.jsx)(p.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(Y.Z, {
                            children: (0, i.jsx)(e_.Z, {
                                channel: t,
                                currentUser: n,
                                activeStreams: null != g ? [g] : [],
                                handleGoLive: b,
                                onClose: l,
                                appContext: m
                            })
                        });
                    },
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    animation: p.yRy.Animation.FADE,
                    children: (e, t) => {
                        let { ...n } = e,
                            { isShown: l } = t;
                        return (0, i.jsx)('div', { children: O(n, l) });
                    }
                })
            })
        ]
    });
}
function ej(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: a } = e,
        r = t.getGuildId();
    return (0, v.Z)(r, t.id)
        ? (0, i.jsx)('div', {
              className: eN.buttonContainer,
              children: (0, i.jsx)(ef.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: l,
                  setWhichPopoutIsOpen: a
              })
          })
        : null;
}
let eA = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: a, connectedEmbeddedActivity: r } = e,
        s = (0, u.e7)([b.Z], () => b.Z.getSelectedParticipant(a.id)),
        { reducedMotion: o } = l.useContext(p.Sfi),
        [d, h] = l.useState(!1),
        m = null == s ? void 0 : s.id,
        _ = (0, u.e7)([ei.Z], () => (null != m ? ei.Z.getActiveStreamForStreamKey(m) : null), [m]),
        C = (null == s ? void 0 : s.type) === eb.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        x = (0, u.Wu)([ei.Z], () =>
            ei.Z.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        v = (0, k.qY)(a.id),
        E = l.useCallback(() => ((null == s ? void 0 : s.type) === eb.fO.ACTIVITY && s.applicationId === (null == r ? void 0 : r.applicationId) ? 'ACTIVITY' : C ? 'STREAM' : null != v ? 'EVENT' : 'CALL'), [s, null == r ? void 0 : r.applicationId, C, v]),
        [I, Z] = l.useState(E()),
        { groupedButtons: N } = (0, ec.ZP)({ location: 'DisconnectButton' }),
        T = (0, p.q_F)(
            {
                opacity: d ? 0.2 : 1,
                transform: d && !o.enabled ? 'scale(0.7)' : 'scale(1)',
                config: {
                    mass: 2,
                    tension: d ? 600 : 1000,
                    friction: 45,
                    precision: 0.01,
                    clamp: d
                },
                onRest: () => {
                    Z(E()), h(!1);
                }
            },
            'animate-always'
        );
    l.useEffect(() => {
        E() !== I && h(!0);
    }, [I, E]);
    let S = l.useCallback(() => {
            if (null != _) (0, g.g)((0, R.V9)(_));
            else for (let e of x) (0, g.g)((0, R.V9)(e));
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
                      className: eN.controlButton,
                      popoutOpen: e
                  };
            switch (I) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== eb.fO.ACTIVITY || null == r) return;
                    return (0, i.jsx)(X.Z, {
                        ...o,
                        applicationId: s.applicationId,
                        color: 'red',
                        location: r.location,
                        onPopoutClick: x.length > 0 ? l : null
                    });
                case 'STREAM':
                    return (0, i.jsx)($.O, {
                        ...o,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: S,
                        onPopoutClick: x.length > 1 ? l : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, i.jsx)(J.Z, {
                        ...o,
                        color: 'red',
                        onClick: () => (null == n ? void 0 : n()),
                        onPopoutClick: x.length > 0 ? l : null
                    });
                case 'EVENT':
                    return (0, i.jsx)(O.Z, {
                        channelId: a.id,
                        onClick: () => {
                            f.default.disconnect(), null == n || n();
                        }
                    });
            }
        };
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(e_.Z, {
                channel: a,
                currentUser: t,
                activeStreams: x,
                handleGoLive: eI.VqG,
                hideSelfOptions: !0,
                onClose: n
            });
        },
        position: 'top',
        align: 'center',
        animation: p.yRy.Animation.FADE,
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
function ey(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: a, currentUser: r } = e,
        s = (0, C.bp)(),
        { reachedLimit: o, limit: c } = (0, eh.Z)(t),
        d = l.useCallback(() => {
            (0, eE.Z)(() => f.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = l.useCallback(() => {
            n ? (0, eC.Z)() : d();
        }, [n, d]),
        p = (0, u.e7)([el.Z], () => {
            let e = el.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(r.id)) === !0;
        }),
        { groupedButtons: m } = (0, ec.ZP)({ location: 'JoinCall' });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ee.C, {
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
                className: eN.controlButton,
                onChange: d
            }),
            (0, i.jsx)(K.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: eN.controlButton,
                fullRegionButton: m
            }),
            p
                ? (0, i.jsx)(q.Z, {
                      color: 'red',
                      channel: t,
                      className: eN.controlButton,
                      fullRegionButton: m
                  })
                : null
        ]
    });
}
let eP = function (e) {
    var t, n;
    let { channel: a, className: s, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: m, groupedButtons: f } = (0, ec.ZP)({ location: 'CenterControlTray' }),
        [g, C] = l.useState(void 0),
        v = (0, u.e7)([es.default], () => {
            let e = es.default.getCurrentUser();
            return o()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: b, enabled: A } = (0, ed.Z)(),
        R = (0, ep.Z)(a),
        { suppress: L, selfMute: k, mute: O } = (0, em.Z)(a),
        { canGoLive: w } = (0, u.cj)([ea.Z], () => ({ canGoLive: (0, M.Z)(ea.Z) })),
        U = (0, P.Z)(),
        B = (0, u.e7)([y.Z], () => null != y.Z.getAwaitingRemoteSessionInfo()),
        F = null != U,
        H = (0, u.e7)([er.Z], () => {
            var e;
            return (null !== (e = null == U ? void 0 : U.channelId) && void 0 !== e ? e : er.Z.getVoiceChannelId()) === a.id;
        }),
        G = (0, Z.Z)(a, !0),
        V = (0, u.e7)([x.ZP], () => x.ZP.getSelfEmbeddedActivityForChannel(a.id)),
        { reachedLimit: W, limit: q } = (0, eh.Z)(a),
        { analyticsLocations: K } = (0, I.ZP)(E.Z.VOICE_CONTROL_TRAY),
        X = (0, eu.Z)(a),
        J = (0, et.H)(E.Z.VOICE_CONTROL_TRAY);
    if (!H)
        return (0, i.jsx)(I.Gt, {
            value: K,
            children: (0, i.jsx)(ey, {
                channel: a,
                cameraUnavailable: b,
                hasCameraPermission: R,
                currentUser: v
            })
        });
    let $ = X && !G,
        ei = (0, z.Z)(a);
    return f
        ? (0, i.jsx)(I.Gt, {
              value: K,
              children: (0, i.jsxs)(_.Z, {
                  section: eI.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)('div', {
                          className: eN.eventPromptsContainer,
                          children: (0, i.jsx)(D.Z, { channelId: a.id })
                      }),
                      (0, i.jsxs)('div', {
                          className: r()(eN.experimentWrapper, s),
                          children: [
                              (0, i.jsxs)('div', {
                                  className: eN.buttonSection,
                                  children: [
                                      (0, i.jsx)(p.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, i.jsx)(Y.Z, {
                                                  children: J
                                                      ? (0, i.jsx)(en.l, {
                                                            short: !0,
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
                                          align: 'right',
                                          position: 'top',
                                          animation: p.yRy.Animation.FADE,
                                          spacing: 16,
                                          children: (e, t) => {
                                              let { onClick: n } = e,
                                                  { isShown: l } = t;
                                              return (0, i.jsx)(Q.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: F ? null : n,
                                                  selfMute: k,
                                                  serverMute: O,
                                                  suppress: L,
                                                  popoutOpen: l,
                                                  awaitingRemote: B,
                                                  onClick: () => (0, S.Z)(O, L, eI.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !F &&
                                          (0, i.jsx)('div', {
                                              className: eN.avSpacing,
                                              'aria-hidden': 'true',
                                              role: 'presentation'
                                          }),
                                      !F &&
                                          (0, i.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(Y.Z, { children: (0, i.jsx)(T.Z, { onClose: t }) });
                                              },
                                              position: 'top',
                                              align: 'right',
                                              spacing: 16,
                                              animation: p.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: l } = t;
                                                  return (0, i.jsx)(ee.C, {
                                                      centerButton: !0,
                                                      hasPermission: R,
                                                      enabled: A,
                                                      cameraUnavailable: b,
                                                      onChange: eT,
                                                      onCameraUnavailable: eC.Z,
                                                      channelLimitReached: W,
                                                      channelLimit: q,
                                                      popoutOpen: l,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: eN.buttonSection,
                                  children: [
                                      !F &&
                                          (0, i.jsx)(eS, {
                                              channel: a,
                                              currentUser: v,
                                              exitFullScreen: d,
                                              canGoLive: w,
                                              hasPermission: R
                                          }),
                                      !F &&
                                          (0, i.jsx)(ej, {
                                              channel: a,
                                              idle: null === (t = null == h ? void 0 : h.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          }),
                                      ei &&
                                          (0, i.jsx)(j.Z, {
                                              channel: a,
                                              themeable: !0,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          }),
                                      X &&
                                          !F &&
                                          (0, i.jsx)(eg.Z, {
                                              channel: a,
                                              whichPopoutIsOpen: g,
                                              setWhichPopoutIsOpen: C
                                          })
                                  ]
                              }),
                              (0, i.jsx)(eA, {
                                  connectedEmbeddedActivity: V,
                                  currentUser: v,
                                  channel: a,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, i.jsx)(I.Gt, {
              value: K,
              children: (0, i.jsxs)(_.Z, {
                  section: eI.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)('div', {
                          className: eN.eventPromptsContainer,
                          children: (0, i.jsx)(D.Z, { channelId: a.id })
                      }),
                      (0, i.jsxs)('div', {
                          className: r()(eN.wrapper, s),
                          children: [
                              'mic-button-moved-left' === m
                                  ? (0, i.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(Y.Z, {
                                                children: J
                                                    ? (0, i.jsx)(en.l, {
                                                          short: !0,
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
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: l } = t;
                                            return (0, i.jsx)(Q.Z, {
                                                centerButton: !0,
                                                onPopoutClick: F ? null : n,
                                                className: eN.controlButton,
                                                selfMute: k,
                                                serverMute: O,
                                                suppress: L,
                                                popoutOpen: l,
                                                awaitingRemote: B,
                                                onClick: () => (0, S.Z)(O, L, eI.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !F &&
                                  (0, i.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, i.jsx)(Y.Z, { children: (0, i.jsx)(T.Z, { onClose: t }) });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: p.yRy.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: l } = t;
                                          return (0, i.jsx)(ee.C, {
                                              centerButton: !0,
                                              hasPermission: R,
                                              className: eN.controlButton,
                                              enabled: A,
                                              cameraUnavailable: b,
                                              onChange: eT,
                                              onCameraUnavailable: eC.Z,
                                              channelLimitReached: W,
                                              channelLimit: q,
                                              popoutOpen: l,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !F &&
                                  (0, i.jsx)(ej, {
                                      channel: a,
                                      idle: null === (n = null == h ? void 0 : h.idle) || void 0 === n || n
                                  }),
                              !F &&
                                  (0, i.jsx)(eS, {
                                      channel: a,
                                      currentUser: v,
                                      exitFullScreen: d,
                                      canGoLive: w,
                                      hasPermission: R
                                  }),
                              m === ec.BK.MicPushToEnable
                                  ? (0, i.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(Y.Z, {
                                                children: J
                                                    ? (0, i.jsx)(en.l, {
                                                          short: !0,
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
                                        animation: p.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: n } = e,
                                                { isShown: l } = t;
                                            return (0, i.jsx)(Q.Z, {
                                                centerButton: !0,
                                                onPopoutClick: F ? null : n,
                                                className: eN.controlButton,
                                                selfMute: k,
                                                serverMute: O,
                                                suppress: L,
                                                popoutOpen: l,
                                                awaitingRemote: B,
                                                onClick: () => (0, S.Z)(O, L, eI.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              $ && !F
                                  ? (0, i.jsx)('div', {
                                        className: eN.buttonContainer,
                                        children: (0, i.jsx)(eg.Z, { channel: a })
                                    })
                                  : null,
                              (0, i.jsx)(eA, {
                                  connectedEmbeddedActivity: V,
                                  currentUser: v,
                                  channel: a,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
