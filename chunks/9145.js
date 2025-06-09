n.d(t, { Z: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(252258),
    s = n(442837),
    c = n(993365),
    u = n(481060),
    d = n(153867),
    p = n(110924),
    h = n(607070),
    f = n(367907),
    m = n(900211),
    g = n(740492),
    b = n(871499),
    _ = n(786915),
    y = n(402113),
    C = n(800965),
    x = n(592125),
    v = n(271383),
    j = n(944486),
    O = n(594174),
    E = n(585483),
    I = n(51144),
    P = n(566620),
    S = n(317381),
    Z = n(619915),
    N = n(988980),
    T = n(16609),
    A = n(952561),
    w = n(563218),
    R = n(884338),
    M = n(617552),
    k = n(719296),
    L = n(225639),
    D = n(651612),
    U = n(918559),
    B = n(981631),
    F = n(388032),
    G = n(199570);
let H = R.u.SIZE_32,
    V = {
        [U.MI.NO_CHAT]: G.noChat,
        [U.MI.RESIZABLE]: G.resizable
    };
function z(e) {
    var t, n, l;
    let { maxHeight: z, connectedLocation: W, renderExternalHeader: Y } = e,
        q = (0, A.Z)(),
        K = (0, s.Wu)([S.ZP], () => S.ZP.getEmbeddedActivitiesForLocation(W), [W]),
        X = (0, T.pY)(W),
        Q = (0, s.e7)([x.Z], () => x.Z.getChannel(X)),
        J = (0, Z.gb)(K),
        $ = (0, Z.uF)(J),
        ee = i.useCallback(() => {
            (0, P.tg)(U.Ez.PIP);
        }, []),
        et = i.useRef(null),
        en = (0, s.e7)([S.ZP], () => S.ZP.getFocusedLayout()),
        er = en !== U.MI.NO_CHAT,
        [ei, el] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : z) ? n : null),
        ea = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        eo = i.useRef(null),
        [es, ec] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == eo.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            ec({
                width: null != (n = null == (e = eo.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = eo.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return e.observe(eo.current), () => e.disconnect();
    }, []);
    let eu = es.width / Math.max(es.height, 1) < U.I0,
        ed = 0,
        ep = 0,
        eh = (0, N.Z)(null == q ? void 0 : q.id);
    if (!eh) {
        let e = es.width,
            t = es.height;
        eu ? ((t = es.width / U.I0) > es.height && (e = (t = es.height) * U.I0), (ep = (es.height - t) / 2)) : ((e = Math.min(es.height * U.I0)) > es.width && (t = (e = es.width) / U.I0), (ed = (es.width - e) / 2));
    }
    let ef = $.get(null != (l = null == q ? void 0 : q.id) ? l : ''),
        em = W.kind === o.E.CONTEXTLESS,
        eg = (0, s.e7)([j.Z], () => j.Z.getChannelId()),
        eb = (0, s.Wu)(
            [v.ZP],
            () => {
                var e;
                return null == Q ? [] : Array.from(null != (e = null == ef ? void 0 : ef.embeddedActivity.userIds) ? e : []).map((e) => v.ZP.getMember(Q.guild_id, e));
            },
            [ef, Q]
        ),
        e_ = i.useMemo(() => {
            let e = new Map();
            return (
                eb.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eb]),
        ey = (function (e, t, n) {
            let r = (0, p.Z)(e),
                l = e !== r,
                [a, o] = i.useState(!1);
            i.useEffect(() => {
                o(!0);
                let e = setTimeout(() => o(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let s = !h.Z.useReducedMotion && (l || a);
            return i.useMemo(() => {
                var r, i;
                let l = s
                    ? {
                          transitionProperty: 'height, max-height',
                          transitionDuration: ''.concat(50, 'ms'),
                          transitionTimingFunction: 'ease-in-out'
                      }
                    : void 0;
                return e && null != t && null != n
                    ? ((r = (function (e) {
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
                      })({}, l)),
                      (i = i =
                          {
                              minHeight: 200,
                              maxHeight: n,
                              height: t
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      r)
                    : l;
            }, [s, e, n, t]);
        })(er, ei, z),
        eC = (0, L.y)({ location: 'Activity Panel' });
    if (null == q) return null;
    let ex = [];
    null != ef &&
        (ex = Array.from(ef.embeddedActivity.userIds)
            .map((e) => O.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ev = (e) => {
        var t;
        if (null == e || void 0 === e) return null;
        let n = e_.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : I.ZP.getName(e);
        return (0, r.jsx)(
            u.DY3,
            {
                text: i,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(null == Q ? void 0 : Q.guild_id, H),
                        alt: i,
                        className: G.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(u.f6W, {
        theme: B.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(G.wrapper, V[en], e, { [G.contextlessActivityWrapper]: em }),
                ref: et,
                style: ey,
                children: [
                    !em && (null == Y ? void 0 : Y()),
                    (0, r.jsxs)('div', {
                        className: G.activityPanelContainer,
                        children: [
                            er || em
                                ? null
                                : (0, r.jsx)('div', {
                                      className: G.header,
                                      children: (0, r.jsx)(c.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: G.headerTitle,
                                          children: null == q ? void 0 : q.name
                                      })
                                  }),
                            em
                                ? (0, r.jsxs)('div', {
                                      className: G.contextlessHeader,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: G.contextlessHeaderLeft,
                                              children: [
                                                  (0, r.jsx)(R.Z, {
                                                      renderIcon: !1,
                                                      users: ex,
                                                      size: H,
                                                      max: 6,
                                                      renderUser: ev
                                                  }),
                                                  (0, r.jsx)(_.Z, {
                                                      appContext: B.IlC.APP,
                                                      applicationId: q.id,
                                                      shouldPrioritizeGroupPlusIcon: !0,
                                                      isContextlessActivity: em,
                                                      iconClassName: G.contextlessInviteButtonIcon,
                                                      size: u.zxk.Sizes.SMALL,
                                                      look: u.zxk.Looks.FILLED,
                                                      buttonText: F.intl.string(F.t['6F9ivr']),
                                                      color: u.zxk.Colors.PRIMARY
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              applicationId: q.id,
                                              location: W,
                                              centerButton: !0,
                                              color: 'disconnect',
                                              applyStyles: em,
                                              className: G.contextlessLeaveActivityButton,
                                              iconClassName: G.contextlessLeaveActivityButtonIcon,
                                              isActivityInCall: !1
                                          })
                                      ]
                                  })
                                : null,
                            (0, r.jsx)('div', {
                                className: a()(G.activityContainer, { [G.activityContainerNoMargin]: eh }),
                                style: {
                                    paddingLeft: ed,
                                    paddingRight: ed,
                                    paddingTop: ep,
                                    paddingBottom: ep
                                },
                                ref: eo,
                                children: (0, r.jsx)(w.Z, {
                                    className: G.iframe,
                                    embedId: (0, k.Z)(W.id, q.id)
                                })
                            }),
                            em || null == eg
                                ? null
                                : (0, r.jsxs)('div', {
                                      className: G.footer,
                                      children: [
                                          (0, r.jsx)(R.Z, {
                                              renderIcon: !1,
                                              users: ex,
                                              size: H,
                                              max: 6,
                                              renderUser: ev
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: G.footerButtons,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: G.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(D.Z, { channelId: eg }),
                                                          (0, r.jsx)(b.d, {
                                                              isTrayButton: !0,
                                                              label: F.intl.string(F.t.brPQ5e),
                                                              onClick: ee,
                                                              iconComponent: u.dOc,
                                                              themeable: !0
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: G.leaveButtonContainer,
                                                      children: (0, r.jsx)(y.Z, {
                                                          applicationId: q.id,
                                                          location: W,
                                                          centerButton: !0,
                                                          color: 'disconnect',
                                                          isActivityInCall: !1
                                                      })
                                                  })
                                              ]
                                          }),
                                          eC
                                              ? (0, r.jsx)(C.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, f.yw)(B.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, M.Z)({ onConfirm: P.Gj });
                                                    },
                                                    onClosePopout: () => {}
                                                })
                                              : null
                                      ]
                                  })
                        ]
                    }),
                    er && null != z
                        ? (0, r.jsx)(m.Z, {
                              minHeight: 480,
                              maxHeight: z,
                              resizableNode: et,
                              onResize: (e) => {
                                  E.S.dispatch(B.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), el(e);
                              },
                              onResizeEnd: (e) => {
                                  E.S.dispatch(B.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ea(e);
                              }
                          })
                        : null
                ]
            })
    });
}
