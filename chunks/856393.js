n.d(t, {
    Z: () => eh,
    e: () => ed
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(442837),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    p = n(393238),
    h = n(493773),
    f = n(40851),
    m = n(100527),
    g = n(906732),
    b = n(358221),
    _ = n(414910),
    x = n(909820),
    y = n(493010),
    C = n(71127),
    v = n(185935),
    j = n(522651),
    O = n(540059),
    E = n(788983),
    I = n(928518),
    P = n(703656),
    S = n(493754),
    Z = n(937995),
    N = n(880831),
    T = n(73563),
    A = n(800965),
    w = n(107169),
    R = n(891551),
    k = n(314897),
    M = n(979696),
    L = n(430824),
    D = n(496675),
    U = n(944486),
    B = n(358085),
    G = n(998502),
    F = n(922482),
    H = n(431328),
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
let ea = 'HasBeenInStageChannel',
    eo = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, P.XU)(n, t), E.hP(e);
    },
    es = () => {
        d.Z.wait(() => E.xv(et.KJ3.CHANNEL_CALL_POPOUT));
    },
    ec = (e) => {
        (0, j.v)(m.Z.VOICE_CONTROL_TRAY, j.d.STAY_ON_TOP, e), E.hY(et.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function eu(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: a, popoutWindowAlwaysOnTop: o, selectedParticipant: c } = e,
        { parentAnalyticsLocation: u } = (0, g.ZP)(),
        d = t.getGuildId(),
        p = (0, s.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = k.default.getId(),
        f = !(0, s.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) && (!B.isPlatformEmbedded || (B.isPlatformEmbedded && G.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== h,
        x = i.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.window) ? e : window;
        }, [a]),
        y = (0, $.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            currentWindow: x
        }),
        C = n === et.IlC.POPOUT && B.isPlatformEmbedded && G.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m
                ? (0, r.jsx)(R.Z, {
                      context: (0, _.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: x,
                      sliderClassName: ei.volumeSlider,
                      location: u
                  })
                : null,
            C
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
                          (0, j.v)(u, j.d.POPOUT, !0), eo(t, p)();
                      },
                      onClosePopout: () => {
                          (0, j.v)(u, j.d.POPOUT, !1), es();
                      }
                  })
                : null,
            y
        ]
    });
}
function ed(e) {
    let { channel: t } = e,
        n = (0, f.bp)(),
        i = (0, s.e7)([D.Z], () => D.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, s.e7)([L.Z], () => L.Z.getGuild(t.guild_id)),
        a = (0, s.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id)),
        o = i || (null == a ? void 0 : a.invite_code) != null,
        c = (0, O.Q3)('StageChannelInviteButton');
    return null != l && o
        ? (0, r.jsx)(S.Z, {
              size: c ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL,
              color: c ? u.zxk.Colors.TRANSPARENT : ei.customInviteButtonColors,
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
        { channel: c, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: p, popoutWindow: h, popoutWindowAlwaysOnTop: _, popoutOpen: y, chatOpen: C, idleProps: v } = e,
        { analyticsLocations: j } = (0, g.ZP)(m.Z.VOICE_CONTROL_TRAY),
        E = (0, f.bp)(),
        I = (0, s.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
        P = (0, s.e7)([D.Z], () => D.Z.can(et.Plq.CONNECT, c)),
        S = (0, H.w8)(c.id, V.pV.SPEAKER),
        Z = (0, s.e7)([b.Z], () => b.Z.getSelectedParticipant(c.id)),
        A = y && E !== et.IlC.POPOUT,
        w = (0, O.Q3)('StageChannelCallContent'),
        [R, k] = i.useState(0),
        L = (0, u._q$)('StageChannelCall'),
        { isOnStartStageScreen: B } = (0, W.ZP)();
    (0, W.MV)(c);
    let G = (0, s.e7)([M.Z], () => M.Z.getToastsEnabled(c.id)),
        z = (0, ee.Z)(c) ? (null != Z ? '84px' : '124px') : null != Z ? '0px' : '48px';
    return (
        L && B && (z = '0px'),
        (l = B
            ? (0, r.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, W.Ku)(!1), I || (0, F.TM)(c);
                  }
              })
            : I
              ? (0, r.jsx)(X.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, o.debounce)(() => k(t), 1000, { leading: !0 })();
                    }
                })
              : (0, r.jsx)(q.Z, {
                    participants: S,
                    channel: c,
                    hasConnectPermission: P
                })),
        (0, r.jsx)(
            T.Z,
            ((t = el(
                {
                    style: {
                        height: 'calc(100% - '.concat(z, ')'),
                        paddingTop: z
                    },
                    disableGradients: (!!w && !I) || (0 === R && T.e.TOP),
                    renderBottomLeft: () =>
                        w
                            ? null
                            : (0, r.jsx)(g.Gt, {
                                  value: j,
                                  children: (0, r.jsx)(ed, { channel: c })
                              }),
                    renderBottomCenter: () =>
                        I
                            ? (0, r.jsx)(g.Gt, {
                                  value: j,
                                  children: (0, r.jsx)(Q.Z, {
                                      channel: c,
                                      isOnStartStageScreen: B
                                  })
                              })
                            : null,
                    renderBottomRight: () =>
                        I
                            ? (0, r.jsx)(g.Gt, {
                                  value: j,
                                  children: (0, r.jsx)(eu, {
                                      channel: c,
                                      appContext: E,
                                      popoutOpen: y,
                                      popoutWindow: h,
                                      popoutWindowAlwaysOnTop: _,
                                      selectedParticipant: Z
                                  })
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(K.Z, {
                            inPopout: E === et.IlC.POPOUT,
                            toggleRequestToSpeakSidebar: d,
                            showRequestToSpeakSidebar: p,
                            channel: c
                        }),
                    renderChatToasts: () =>
                        !G || C || A
                            ? null
                            : (0, r.jsx)(x.ZP, {
                                  children: (0, r.jsx)(N.Z, {
                                      className: a()(ei.chatToasts, { [ei.rtsSidebarOpen]: p }),
                                      channelId: c.id
                                  })
                              }),
                    screenMessage: A ? { mainText: er.intl.string(er.t.J5bXZW) } : null
                },
                v
            )),
            (n = n = { children: !A && l }),
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
        d = i.useCallback(() => {
            o(!l);
        }, [l, o]),
        { popoutWindow: _, popoutWindowAlwaysOnTop: j } = (0, s.cj)([I.Z], () => ({
            popoutWindow: I.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: I.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT)
        })),
        O = null != _ && !_.closed,
        { analyticsLocations: E } = (0, g.ZP)(m.Z.STAGE_CHANNEL_CALL),
        P = (0, f.bp)(),
        { chatOpen: S, participantsListOpen: N } = (0, s.cj)(
            [b.Z],
            () => ({
                chatOpen: b.Z.getChatOpen(t.id),
                participantsListOpen: b.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        T = (0, s.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: A } = (0, v.Z)({ location: 'StageChannelCall' });
    (0, h.ZP)(() => {
        null == c.K.get(ea) &&
            ((0, u.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, r.jsx)(e, el({}, t));
            }),
            c.K.set(ea, Date.now()));
    });
    let { width: w = 0, ref: R } = (0, p.ZP)(),
        k = w - 550,
        M = !O || (O && P === et.IlC.POPOUT);
    return (0, r.jsx)(g.Gt, {
        value: E,
        children: (0, r.jsxs)(x.B2, {
            children: [
                (0, r.jsxs)('div', {
                    className: ei.container,
                    ref: R,
                    children: [
                        (0, r.jsx)(u.f6W, {
                            theme: et.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    className: a()(ei.callContainer, e, {
                                        [ei.sidebarVisible]: l,
                                        [ei.sidebarOrChatVisible]: l || S || N
                                    }),
                                    children: (0, r.jsx)(Z.ZP, {
                                        timeout: 2000,
                                        children: (e) =>
                                            (0, r.jsx)(ep, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: d,
                                                showRequestToSpeakSidebar: l,
                                                popoutWindow: _,
                                                popoutWindowAlwaysOnTop: j,
                                                popoutOpen: O,
                                                chatOpen: S,
                                                idleProps: e
                                            })
                                    })
                                })
                        }),
                        l
                            ? (0, r.jsx)(Y.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: S
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: ei.channelChatWrapper,
                            children: [
                                S &&
                                    M &&
                                    (0, r.jsx)(y.Z, {
                                        channel: t,
                                        guild: T,
                                        maxWidth: k
                                    }),
                                N &&
                                    A &&
                                    M &&
                                    (0, r.jsx)(C.Z, {
                                        channel: t,
                                        maxWidth: k
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(x.H_, {})
            ]
        })
    });
}
