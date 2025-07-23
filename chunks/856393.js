(n.d(t, {
    Z: () => eh,
    e: () => ed
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(442837),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    p = n(570140),
    h = n(393238),
    f = n(493773),
    m = n(40851),
    g = n(100527),
    b = n(906732),
    _ = n(358221),
    y = n(414910),
    C = n(909820),
    x = n(493010),
    v = n(71127),
    j = n(185935),
    O = n(522651),
    E = n(788983),
    S = n(928518),
    I = n(703656),
    P = n(493754),
    Z = n(937995),
    T = n(880831),
    N = n(73563),
    A = n(800965),
    w = n(107169),
    R = n(891551),
    M = n(314897),
    D = n(979696),
    k = n(430824),
    L = n(496675),
    U = n(944486),
    B = n(358085),
    F = n(998502),
    H = n(922482),
    G = n(431328),
    V = n(501655),
    z = n(427679),
    W = n(513449),
    Y = n(153349),
    q = n(901434),
    K = n(302270),
    X = n(308177),
    Q = n(700483),
    J = n(686468),
    $ = n(801405),
    ee = n(903108),
    et = n(981631),
    en = n(354459),
    er = n(388032),
    ei = n(806176);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let ea = 'HasBeenInStageChannel',
    eo = (e, t) => () => {
        let n = e.getGuildId();
        (null != n && null != t && (0, I.XU)(n, t), E.hP(e));
    },
    es = () => {
        p.Z.wait(() => E.xv(et.KJ3.CHANNEL_CALL_POPOUT));
    },
    ec = (e) => {
        ((0, O.v)(g.Z.VOICE_CONTROL_TRAY, O.d.STAY_ON_TOP, e), E.hY(et.KJ3.CHANNEL_CALL_POPOUT, e));
    };
function eu(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: a, popoutWindowAlwaysOnTop: o, selectedParticipant: c } = e,
        { parentAnalyticsLocation: u } = (0, b.ZP)(),
        d = t.getGuildId(),
        p = (0, s.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = M.default.getId(),
        f = !(0, s.e7)([_.Z], () => _.Z.isFullscreenInContext(n)) && (!B.isPlatformEmbedded || (B.isPlatformEmbedded && F.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== h,
        g = i.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.window) ? e : window;
        }, [a]),
        C = (0, $.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            currentWindow: g
        }),
        x = n === et.IlC.POPOUT && B.isPlatformEmbedded && F.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m
                ? (0, r.jsx)(R.Z, {
                      context: (0, y.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: g,
                      sliderClassName: ei.volumeSlider,
                      location: u
                  })
                : null,
            x
                ? (0, r.jsx)(w.Z, {
                      className: ei.rightTrayIcon,
                      popoutWindowAlwaysOnTop: o,
                      onToggleStayOnTop: ec
                  })
                : null,
            f
                ? (0, r.jsx)(A.Z, {
                      className: ei.rightTrayIcon,
                      popoutOpen: l,
                      onOpenPopout: () => {
                          ((0, O.v)(u, O.d.POPOUT, !0), eo(t, p)());
                      },
                      onClosePopout: () => {
                          ((0, O.v)(u, O.d.POPOUT, !1), es());
                      }
                  })
                : null,
            C
        ]
    });
}
function ed(e) {
    let { channel: t } = e,
        n = (0, m.bp)(),
        i = (0, s.e7)([L.Z], () => L.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, s.e7)([k.Z], () => k.Z.getGuild(t.guild_id)),
        a = (0, s.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id)),
        o = i || (null == a ? void 0 : a.invite_code) != null;
    return null != l && o
        ? (0, r.jsx)(P.Z, {
              size: u.zx.Sizes.MEDIUM,
              color: u.zx.Colors.TRANSPARENT,
              channel: t,
              appContext: n,
              className: ei.__invalid_leftTrayIcon,
              analyticsLocation: et.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ep(e) {
    var t, n;
    let l,
        { channel: c, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: d, popoutWindow: p, popoutWindowAlwaysOnTop: h, popoutOpen: f, chatOpen: y, idleProps: x } = e,
        { analyticsLocations: v } = (0, b.ZP)(g.Z.VOICE_CONTROL_TRAY),
        j = (0, m.bp)(),
        O = (0, s.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
        E = (0, s.e7)([L.Z], () => L.Z.can(et.Plq.CONNECT, c)),
        S = (0, G.w8)(c.id, V.pV.SPEAKER),
        I = (0, s.e7)([_.Z], () => _.Z.getSelectedParticipant(c.id)),
        P = f && j !== et.IlC.POPOUT,
        [Z, A] = i.useState(0),
        { isOnStartStageScreen: w } = (0, W.ZP)();
    (0, W.MV)(c);
    let R = (0, s.e7)([D.Z], () => D.Z.getToastsEnabled(c.id)),
        M = (0, ee.Z)(c) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        w && (M = '0px'),
        (l = w
            ? (0, r.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      ((0, W.Ku)(!1), O || (0, H.TM)(c));
                  }
              })
            : O
              ? (0, r.jsx)(X.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, o.debounce)(() => A(t), 1000, { leading: !0 })();
                    }
                })
              : (0, r.jsx)(q.Z, {
                    participants: S,
                    channel: c,
                    hasConnectPermission: E
                })),
        (0, r.jsx)(
            N.Z,
            ((t = el(
                {
                    style: {
                        height: 'calc(100% - '.concat(M, ')'),
                        paddingTop: M
                    },
                    disableGradients: !O || (0 === Z && N.e.TOP),
                    renderBottomCenter: () =>
                        O
                            ? (0, r.jsx)(b.Gt, {
                                  value: v,
                                  children: (0, r.jsx)(Q.Z, {
                                      channel: c,
                                      isOnStartStageScreen: w
                                  })
                              })
                            : null,
                    renderBottomRight: () =>
                        O
                            ? (0, r.jsx)(b.Gt, {
                                  value: v,
                                  children: (0, r.jsx)(eu, {
                                      channel: c,
                                      appContext: j,
                                      popoutOpen: f,
                                      popoutWindow: p,
                                      popoutWindowAlwaysOnTop: h,
                                      selectedParticipant: I
                                  })
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(K.Z, {
                            toggleRequestToSpeakSidebar: u,
                            showRequestToSpeakSidebar: d,
                            channel: c
                        }),
                    renderChatToasts: () =>
                        !R || y || P
                            ? null
                            : (0, r.jsx)(C.ZP, {
                                  children: (0, r.jsx)(T.Z, {
                                      className: a()(ei.chatToasts, { [ei.rtsSidebarOpen]: d }),
                                      channelId: c.id
                                  })
                              }),
                    screenMessage: P ? { mainText: er.intl.string(er.t.J5bXZW) } : null
                },
                x
            )),
            (n = n = { children: !P && l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    );
}
function eh(e) {
    let { channel: t } = e,
        [l, o] = i.useState(!1),
        u = i.useCallback(() => {
            o(!l);
        }, [l, o]),
        { popoutWindow: p, popoutWindowAlwaysOnTop: y } = (0, s.cj)([S.Z], () => ({
            popoutWindow: S.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: S.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT)
        })),
        O = null != p && !p.closed,
        { analyticsLocations: E } = (0, b.ZP)(g.Z.STAGE_CHANNEL_CALL),
        I = (0, m.bp)(),
        { chatOpen: P, participantsListOpen: T } = (0, s.cj)(
            [_.Z],
            () => ({
                chatOpen: _.Z.getChatOpen(t.id),
                participantsListOpen: _.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        N = (0, s.e7)([k.Z], () => k.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: A } = (0, j.Z)({ location: 'StageChannelCall' });
    (0, f.ZP)(() => {
        null == c.K.get(ea) &&
            ((0, d.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, r.jsx)(e, el({}, t));
            }),
            c.K.set(ea, Date.now()));
    });
    let { width: w = 0, ref: R } = (0, h.ZP)(),
        M = w - 550,
        D = !O || (O && I === et.IlC.POPOUT);
    return (0, r.jsx)(b.Gt, {
        value: E,
        children: (0, r.jsxs)(C.B2, {
            children: [
                (0, r.jsxs)('div', {
                    className: ei.container,
                    ref: R,
                    children: [
                        (0, r.jsx)(d.f6W, {
                            theme: et.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    className: a()(ei.callContainer, e, {
                                        [ei.sidebarVisible]: l,
                                        [ei.sidebarOrChatVisible]: l || P || T
                                    }),
                                    children: (0, r.jsx)(Z.ZP, {
                                        timeout: 2000,
                                        children: (e) =>
                                            (0, r.jsx)(ep, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: u,
                                                showRequestToSpeakSidebar: l,
                                                popoutWindow: p,
                                                popoutWindowAlwaysOnTop: y,
                                                popoutOpen: O,
                                                chatOpen: P,
                                                idleProps: e
                                            })
                                    })
                                })
                        }),
                        l
                            ? (0, r.jsx)(Y.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: P
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: ei.channelChatWrapper,
                            children: [
                                P &&
                                    D &&
                                    (0, r.jsx)(x.Z, {
                                        channel: t,
                                        guild: N,
                                        maxWidth: M
                                    }),
                                T &&
                                    A &&
                                    D &&
                                    (0, r.jsx)(v.Z, {
                                        channel: t,
                                        maxWidth: M
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(C.H_, {})
            ]
        })
    });
}
