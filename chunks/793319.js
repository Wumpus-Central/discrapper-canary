n.d(t, {
    NZ: () => eA,
    ZP: () => eM,
    r: () => ej
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
    Z = n(682901),
    N = n(887012),
    T = n(659580),
    S = n(793865),
    j = n(575175),
    A = n(997614),
    y = n(243778),
    P = n(258609),
    R = n(446226),
    M = n(569545),
    L = n(74299),
    k = n(803647),
    O = n(554747),
    D = n(95764),
    w = n(459502),
    U = n(576645),
    B = n(386542),
    F = n(140465),
    H = n(746599),
    G = n(455961),
    V = n(611845),
    z = n(800966),
    W = n(641015),
    Y = n(618158),
    q = n(390322),
    K = n(791592),
    X = n(136995),
    J = n(402113),
    Q = n(197016),
    $ = n(386000),
    ee = n(698877),
    et = n(25827),
    en = n(875527),
    ei = n(306609),
    el = n(199902),
    ea = n(523746),
    er = n(131951),
    es = n(944486),
    eo = n(594174),
    ec = n(626135),
    ed = n(861254),
    eu = n(923973),
    eh = n(983131),
    ep = n(829750),
    em = n(189771),
    ef = n(294629),
    eg = n(304745),
    e_ = n(985370),
    eC = n(987329),
    ex = n(544384),
    ev = n(560688),
    eE = n(127608),
    eI = n(76021),
    eb = n(173507),
    eZ = n(981631),
    eN = n(354459),
    eT = n(921944),
    eS = n(812801);
function ej(e, t) {
    if (er.Z.isVideoEnabled() === e) return;
    let n = () => m.Z.setVideoEnabled(e);
    e ? (0, eb.Z)(n, t) : n();
}
function eA(e) {
    let { channel: t, currentUser: n, exitFullScreen: a, canGoLive: r, hasPermission: s, disabled: o } = e,
        { groupedButtons: c } = (0, ed.ZP)({ location: 'GoLiveButton' }),
        m = (0, C.bp)(),
        f = (0, u.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        g = f.find((e) => e.ownerId === n.id),
        { activated: _, hqStreamingState: x } = (0, B.k)(d.q.STREAM_HIGH_QUALITY),
        v = null != g && _,
        E = l.useRef(null),
        I = t.getGuildId(),
        b = l.useCallback(() => {
            if ((null == a || a(), !r)) return (0, eE.Z)();
            (0, eI.Z)(I, t.id, eZ.ZY5.GUILD_CHANNEL);
        }, [I, t.id, r, a]),
        Z = (0, F.B4)({ location: 'GoLiveButton' }),
        [N, T] = l.useState(!1),
        S = (0, U.bK)(),
        [j, A] = l.useState(!1);
    l.useEffect(() => {
        if ((A(t.isHDStreamSplashed && null == g && !S), t.isHDStreamSplashed)) {
            let e = setTimeout(() => {
                A(!1);
            }, 300000);
            return () => clearTimeout(e);
        }
    }, [t.isHDStreamSplashed, g, S]);
    let P = () => {
            if (r) {
                b();
                return;
            }
            (0, eE.Z)();
        },
        R = () => {
            (0, k.Z)(g);
        },
        M = H.pM,
        L = l.useCallback(() => {
            ec.default.track(eZ.rMx.PERK_DEMO_OFFER_DISMISSED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: d.q.STREAM_HIGH_QUALITY
            }),
                (0, H.qA)();
        }, [t.guild_id, t.id]),
        O = (e, t) => {
            let { onClick: n, ...l } = null != e ? e : { onClick: void 0 },
                a = null != g;
            return (0, i.jsx)(ee.O, {
                ...l,
                centerButton: !0,
                disabled: o || !s,
                className: c ? void 0 : eS.controlButton,
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
                ? (0, i.jsx)(y.ZP, {
                      contentTypes: [h.z.TRIAL_NUX_STREAM_COACH_MARK],
                      bypassAutoDismiss: !0,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === h.z.TRIAL_NUX_STREAM_COACH_MARK)
                              return (
                                  T(!0),
                                  (0, i.jsx)(z.h, {
                                      buttonRef: E,
                                      dismissed: !1,
                                      onDismiss: () => {
                                          n(eT.L.USER_DISMISS), T(!1);
                                      }
                                  })
                              );
                      }
                  })
                : v && x.hqStreamingIsEnabled
                  ? (0, i.jsx)(V.$, {
                        buttonRef: E,
                        dismissed: x.hqStreamingPopoutDismissed,
                        onDismiss: M
                    })
                  : (0, i.jsx)(G.b, {
                        channel: t,
                        buttonRef: E,
                        dismissed: x.hqStreamingOptInPopoutDismissed,
                        onDismiss: L
                    }),
            (0, i.jsx)(Y.Z, {
                children: (0, i.jsx)(p.yRy, {
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, i.jsx)(q.Z, {
                            children: (0, i.jsx)(ex.Z, {
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
function ey(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: l, setWhichPopoutIsOpen: a } = e,
        r = t.getGuildId();
    return (0, v.Z)(r, t.id)
        ? (0, i.jsx)('div', {
              className: eS.buttonContainer,
              children: (0, i.jsx)(eg.M, {
                  channel: t,
                  idle: n,
                  whichPopoutIsOpen: l,
                  setWhichPopoutIsOpen: a
              })
          })
        : null;
}
let eP = l.memo(function (e) {
    let { currentUser: t, onDisconnectCall: n, channel: a, connectedEmbeddedActivity: r } = e,
        s = (0, u.e7)([b.Z], () => b.Z.getSelectedParticipant(a.id)),
        { reducedMotion: o } = l.useContext(p.Sfi),
        [d, h] = l.useState(!1),
        m = null == s ? void 0 : s.id,
        _ = (0, u.e7)([el.Z], () => (null != m ? el.Z.getActiveStreamForStreamKey(m) : null), [m]),
        C = (null == s ? void 0 : s.type) === eN.fO.STREAM && null != _ && _.ownerId !== (null == t ? void 0 : t.id),
        x = (0, u.Wu)([el.Z], () =>
            el.Z.getAllActiveStreamsForChannel(a.id).filter((e) => {
                let { ownerId: n } = e;
                return n !== (null == t ? void 0 : t.id);
            })
        ),
        v = (0, O.qY)(a.id),
        E = l.useCallback(() => ((null == s ? void 0 : s.type) === eN.fO.ACTIVITY && s.applicationId === (null == r ? void 0 : r.applicationId) ? 'ACTIVITY' : C ? 'STREAM' : null != v ? 'EVENT' : 'CALL'), [s, null == r ? void 0 : r.applicationId, C, v]),
        [I, Z] = l.useState(E()),
        { groupedButtons: N } = (0, ed.ZP)({ location: 'DisconnectButton' }),
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
            if (null != _) (0, g.g)((0, M.V9)(_));
            else for (let e of x) (0, g.g)((0, M.V9)(e));
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
                      className: eS.controlButton,
                      popoutOpen: e
                  };
            switch (I) {
                case 'ACTIVITY':
                    if (null == s || null == t || s.type !== eN.fO.ACTIVITY || null == r) return;
                    return (0, i.jsx)(J.Z, {
                        ...o,
                        applicationId: s.applicationId,
                        color: 'red',
                        location: r.location,
                        onPopoutClick: x.length > 0 ? l : null
                    });
                case 'STREAM':
                    return (0, i.jsx)(ee.O, {
                        ...o,
                        hasPermission: !0,
                        streamActive: !0,
                        color: 'red',
                        onClick: S,
                        onPopoutClick: x.length > 1 ? l : null,
                        isSelfStream: !1
                    });
                case 'CALL':
                    return (0, i.jsx)(Q.Z, {
                        ...o,
                        color: 'red',
                        onClick: () => (null == n ? void 0 : n()),
                        onPopoutClick: x.length > 0 ? l : null
                    });
                case 'EVENT':
                    return (0, i.jsx)(D.Z, {
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
            return (0, i.jsx)(ex.Z, {
                channel: a,
                currentUser: t,
                activeStreams: x,
                handleGoLive: eZ.VqG,
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
function eR(e) {
    let { channel: t, cameraUnavailable: n, hasCameraPermission: a, currentUser: r } = e,
        s = (0, C.bp)(),
        { reachedLimit: o, limit: c } = (0, ep.Z)(t),
        d = l.useCallback(() => {
            (0, eb.Z)(() => f.default.selectVoiceChannel(t.id, !0), s);
        }, [t.id, s]),
        h = l.useCallback(() => {
            n ? (0, ev.Z)() : d();
        }, [n, d]),
        p = (0, u.e7)([ea.Z], () => {
            let e = ea.Z.getCall(t.id);
            return (null == e ? void 0 : e.ringing.includes(r.id)) === !0;
        }),
        { groupedButtons: m } = (0, ed.ZP)({ location: 'JoinCall' });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(et.C, {
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
                className: eS.controlButton,
                onChange: d
            }),
            (0, i.jsx)(X.Z, {
                centerButton: !0,
                color: 'green',
                channel: t,
                className: eS.controlButton,
                fullRegionButton: m
            }),
            p
                ? (0, i.jsx)(K.Z, {
                      color: 'red',
                      channel: t,
                      className: eS.controlButton,
                      fullRegionButton: m
                  })
                : null
        ]
    });
}
let eM = function (e) {
    var t, n;
    let { channel: a, className: s, onDisconnectCall: c, exitFullScreen: d, idleProps: h } = e,
        { mode: m, groupedButtons: f } = (0, ed.ZP)({ location: 'CenterControlTray' }),
        { enabled: g } = (0, Z.Z)({ location: 'CenterControlTray' }),
        [C, v] = l.useState(void 0),
        b = (0, u.e7)([eo.default], () => {
            let e = eo.default.getCurrentUser();
            return o()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
        }),
        { cameraUnavailable: y, enabled: M } = (0, eu.Z)(),
        k = (0, em.Z)(a),
        { suppress: O, selfMute: D, mute: U } = (0, ef.Z)(a),
        { canGoLive: B } = (0, u.cj)([er.Z], () => ({ canGoLive: (0, L.Z)(er.Z) })),
        F = (0, R.Z)(),
        H = (0, u.e7)([P.Z], () => null != P.Z.getAwaitingRemoteSessionInfo()),
        G = null != F,
        V = (0, u.e7)([es.Z], () => {
            var e;
            return (null !== (e = null == F ? void 0 : F.channelId) && void 0 !== e ? e : es.Z.getVoiceChannelId()) === a.id;
        }),
        z = (0, N.Z)(a, !0),
        Y = (0, u.e7)([x.ZP], () => x.ZP.getSelfEmbeddedActivityForChannel(a.id)),
        { reachedLimit: K, limit: X } = (0, ep.Z)(a),
        { analyticsLocations: J } = (0, I.ZP)(E.Z.VOICE_CONTROL_TRAY),
        Q = (0, eh.Z)(a),
        ee = (0, en.H)(E.Z.VOICE_CONTROL_TRAY);
    if (!V)
        return (0, i.jsx)(I.Gt, {
            value: J,
            children: (0, i.jsx)(eR, {
                channel: a,
                cameraUnavailable: y,
                hasCameraPermission: k,
                currentUser: b
            })
        });
    let el = Q && !z,
        ea = (0, W.Z)(a);
    return f
        ? (0, i.jsx)(I.Gt, {
              value: J,
              children: (0, i.jsxs)(_.Z, {
                  section: eZ.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)('div', {
                          className: eS.eventPromptsContainer,
                          children: (0, i.jsx)(w.Z, { channelId: a.id })
                      }),
                      (0, i.jsxs)('div', {
                          className: r()(eS.experimentWrapper, s),
                          children: [
                              (0, i.jsxs)('div', {
                                  className: eS.buttonSection,
                                  children: [
                                      (0, i.jsx)(p.yRy, {
                                          renderPopout: (e) => {
                                              let { closePopout: t } = e;
                                              return (0, i.jsx)(q.Z, {
                                                  children: ee
                                                      ? (0, i.jsx)(ei.l, {
                                                            short: !0,
                                                            wide: !0,
                                                            showOutputDevices: !0
                                                        })
                                                      : g
                                                        ? (0, i.jsx)(T.default, {
                                                              onClose: t,
                                                              renderInputDevices: !0,
                                                              renderOutputDevices: !0,
                                                              renderInputModes: !0,
                                                              renderInputVolume: !0,
                                                              renderOutputVolume: !0,
                                                              renderDeafen: !0,
                                                              simplified: !0
                                                          })
                                                        : (0, i.jsx)(T.default, {
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
                                              return (0, i.jsx)($.Z, {
                                                  centerButton: !0,
                                                  onPopoutClick: G ? null : n,
                                                  selfMute: D,
                                                  serverMute: U,
                                                  suppress: O,
                                                  popoutOpen: l,
                                                  awaitingRemote: H,
                                                  onClick: () => (0, j.Z)(U, O, eZ.jXE.VOICE_CONTROL_TRAY)
                                              });
                                          }
                                      }),
                                      !G &&
                                          (0, i.jsx)('div', {
                                              className: eS.avSpacing,
                                              'aria-hidden': 'true',
                                              role: 'presentation'
                                          }),
                                      !G &&
                                          (0, i.jsx)(p.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(q.Z, {
                                                      children: (0, i.jsx)(S.Z, {
                                                          onClose: t,
                                                          simplified: g
                                                      })
                                                  });
                                              },
                                              position: 'top',
                                              align: 'right',
                                              spacing: 16,
                                              animation: p.yRy.Animation.FADE,
                                              children: (e, t) => {
                                                  let { onClick: n } = e,
                                                      { isShown: l } = t;
                                                  return (0, i.jsx)(et.C, {
                                                      centerButton: !0,
                                                      hasPermission: k,
                                                      enabled: M,
                                                      cameraUnavailable: y,
                                                      onChange: ej,
                                                      onCameraUnavailable: ev.Z,
                                                      channelLimitReached: K,
                                                      channelLimit: X,
                                                      popoutOpen: l,
                                                      onPopoutClick: n
                                                  });
                                              }
                                          })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: eS.buttonSection,
                                  children: [
                                      !G &&
                                          (0, i.jsx)(eA, {
                                              channel: a,
                                              currentUser: b,
                                              exitFullScreen: d,
                                              canGoLive: B,
                                              hasPermission: k
                                          }),
                                      !G &&
                                          (0, i.jsx)(ey, {
                                              channel: a,
                                              idle: null === (t = null == h ? void 0 : h.idle) || void 0 === t || t,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: v
                                          }),
                                      ea &&
                                          (0, i.jsx)(A.Z, {
                                              channel: a,
                                              themeable: !0,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: v
                                          }),
                                      Q &&
                                          !G &&
                                          (0, i.jsx)(e_.Z, {
                                              channel: a,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: v
                                          }),
                                      g &&
                                          !G &&
                                          (0, i.jsx)(eC.Z, {
                                              channel: a,
                                              whichPopoutIsOpen: C,
                                              setWhichPopoutIsOpen: v
                                          })
                                  ]
                              }),
                              (0, i.jsx)(eP, {
                                  connectedEmbeddedActivity: Y,
                                  currentUser: b,
                                  channel: a,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          })
        : (0, i.jsx)(I.Gt, {
              value: J,
              children: (0, i.jsxs)(_.Z, {
                  section: eZ.jXE.VOICE_CONTROL_TRAY,
                  children: [
                      (0, i.jsx)('div', {
                          className: eS.eventPromptsContainer,
                          children: (0, i.jsx)(w.Z, { channelId: a.id })
                      }),
                      (0, i.jsxs)('div', {
                          className: r()(eS.wrapper, s),
                          children: [
                              'mic-button-moved-left' === m
                                  ? (0, i.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(q.Z, {
                                                children: ee
                                                    ? (0, i.jsx)(ei.l, {
                                                          short: !0,
                                                          wide: !0,
                                                          showOutputDevices: !0
                                                      })
                                                    : (0, i.jsx)(T.default, {
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
                                            return (0, i.jsx)($.Z, {
                                                centerButton: !0,
                                                onPopoutClick: G ? null : n,
                                                className: eS.controlButton,
                                                selfMute: D,
                                                serverMute: U,
                                                suppress: O,
                                                popoutOpen: l,
                                                awaitingRemote: H,
                                                onClick: () => (0, j.Z)(U, O, eZ.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              !G &&
                                  (0, i.jsx)(p.yRy, {
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, i.jsx)(q.Z, { children: (0, i.jsx)(S.Z, { onClose: t }) });
                                      },
                                      position: 'top',
                                      align: 'center',
                                      animation: p.yRy.Animation.FADE,
                                      children: (e, t) => {
                                          let { onClick: n } = e,
                                              { isShown: l } = t;
                                          return (0, i.jsx)(et.C, {
                                              centerButton: !0,
                                              hasPermission: k,
                                              className: eS.controlButton,
                                              enabled: M,
                                              cameraUnavailable: y,
                                              onChange: ej,
                                              onCameraUnavailable: ev.Z,
                                              channelLimitReached: K,
                                              channelLimit: X,
                                              popoutOpen: l,
                                              onPopoutClick: n
                                          });
                                      }
                                  }),
                              !G &&
                                  (0, i.jsx)(ey, {
                                      channel: a,
                                      idle: null === (n = null == h ? void 0 : h.idle) || void 0 === n || n
                                  }),
                              !G &&
                                  (0, i.jsx)(eA, {
                                      channel: a,
                                      currentUser: b,
                                      exitFullScreen: d,
                                      canGoLive: B,
                                      hasPermission: k
                                  }),
                              m === ed.BK.MicPushToEnable
                                  ? (0, i.jsx)(p.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(q.Z, {
                                                children: ee
                                                    ? (0, i.jsx)(ei.l, {
                                                          short: !0,
                                                          wide: !0,
                                                          showOutputDevices: !0
                                                      })
                                                    : (0, i.jsx)(T.default, {
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
                                            return (0, i.jsx)($.Z, {
                                                centerButton: !0,
                                                onPopoutClick: G ? null : n,
                                                className: eS.controlButton,
                                                selfMute: D,
                                                serverMute: U,
                                                suppress: O,
                                                popoutOpen: l,
                                                awaitingRemote: H,
                                                onClick: () => (0, j.Z)(U, O, eZ.jXE.VOICE_CONTROL_TRAY)
                                            });
                                        }
                                    })
                                  : null,
                              el && !G
                                  ? (0, i.jsx)('div', {
                                        className: eS.buttonContainer,
                                        children: (0, i.jsx)(e_.Z, { channel: a })
                                    })
                                  : null,
                              (0, i.jsx)(eP, {
                                  connectedEmbeddedActivity: Y,
                                  currentUser: b,
                                  channel: a,
                                  onDisconnectCall: c
                              })
                          ]
                      })
                  ]
              })
          });
};
