(n.d(t, { Z: () => G }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(993365),
    c = n(481060),
    u = n(153867),
    d = n(110924),
    p = n(607070),
    h = n(367907),
    f = n(900211),
    m = n(740492),
    g = n(871499),
    b = n(402113),
    _ = n(800965),
    y = n(592125),
    C = n(271383),
    x = n(944486),
    v = n(594174),
    O = n(585483),
    j = n(51144),
    E = n(566620),
    S = n(317381),
    P = n(619915),
    I = n(988980),
    Z = n(16609),
    T = n(952561),
    N = n(563218),
    A = n(884338),
    w = n(617552),
    R = n(719296),
    M = n(225639),
    D = n(651612),
    L = n(918559),
    k = n(981631),
    U = n(388032),
    B = n(199570);
let F = A.u8.SIZE_32,
    H = {
        [L.MI.NO_CHAT]: B.noChat,
        [L.MI.RESIZABLE]: B.resizable
    };
function G(e) {
    var t, n, l;
    let { maxHeight: G, connectedLocation: V, renderExternalHeader: z } = e,
        W = (0, T.Z)(),
        Y = (0, o.Wu)([S.ZP], () => S.ZP.getEmbeddedActivitiesForLocation(V), [V]),
        q = (0, Z.p)(V),
        K = (0, o.e7)([y.Z], () => y.Z.getChannel(q)),
        X = (0, P.gb)(Y),
        Q = (0, P.uF)(X),
        J = i.useCallback(() => {
            (0, E.tg)(L.Ez.PIP);
        }, []),
        $ = i.useRef(null),
        ee = (0, o.e7)([S.ZP], () => S.ZP.getFocusedLayout()),
        et = ee !== L.MI.NO_CHAT,
        [en, er] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : G) ? n : null),
        ei = i.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        el = i.useRef(null),
        [ea, eo] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == el.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            eo({
                width: null != (n = null == (e = el.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = el.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return (e.observe(el.current), () => e.disconnect());
    }, []);
    let es = ea.width / Math.max(ea.height, 1) < L.I0,
        ec = 0,
        eu = 0,
        ed = (0, I.Z)(null == W ? void 0 : W.id);
    if (!ed) {
        let e = ea.width,
            t = ea.height;
        es ? ((t = ea.width / L.I0) > ea.height && (e = (t = ea.height) * L.I0), (eu = (ea.height - t) / 2)) : ((e = Math.min(ea.height * L.I0)) > ea.width && (t = (e = ea.width) / L.I0), (ec = (ea.width - e) / 2));
    }
    let ep = Q.get(null != (l = null == W ? void 0 : W.id) ? l : ''),
        eh = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
        ef = (0, o.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == K ? [] : Array.from(null != (e = null == ep ? void 0 : ep.embeddedActivity.userIds) ? e : []).map((e) => C.ZP.getMember(K.guild_id, e));
            },
            [ep, K]
        ),
        em = i.useMemo(() => {
            let e = new Map();
            return (
                ef.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ef]),
        eg = (function (e, t, n) {
            let r = (0, d.Z)(e),
                l = e !== r,
                [a, o] = i.useState(!1);
            i.useEffect(() => {
                o(!0);
                let e = setTimeout(() => o(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let s = !p.Z.useReducedMotion && (l || a);
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
        })(et, en, G),
        eb = (0, M.y)({ location: 'Activity Panel' });
    if (null == W) return null;
    let e_ = [];
    null != ep &&
        (e_ = Array.from(ep.embeddedActivity.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ey = (e) => {
        var t;
        if (null == e || void 0 === e || e === A.ag) return null;
        let n = em.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : j.ZP.getName(e);
        return (0, r.jsx)(
            c.DY3,
            {
                text: i,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(null == K ? void 0 : K.guild_id, F),
                        alt: i,
                        className: B.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(c.f6W, {
        theme: k.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(B.wrapper, H[ee], e),
                ref: $,
                style: eg,
                children: [
                    null == z ? void 0 : z(),
                    (0, r.jsxs)('div', {
                        className: B.activityPanelContainer,
                        children: [
                            et
                                ? null
                                : (0, r.jsx)('div', {
                                      className: B.header,
                                      children: (0, r.jsx)(s.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: B.headerTitle,
                                          children: null == W ? void 0 : W.name
                                      })
                                  }),
                            (0, r.jsx)('div', {
                                className: a()(B.activityContainer, { [B.activityContainerNoMargin]: ed }),
                                style: {
                                    paddingLeft: ec,
                                    paddingRight: ec,
                                    paddingTop: eu,
                                    paddingBottom: eu
                                },
                                ref: el,
                                children: (0, r.jsx)(N.Z, {
                                    className: B.iframe,
                                    embedId: (0, R.Z)(V.id, W.id)
                                })
                            }),
                            null != eh
                                ? (0, r.jsxs)('div', {
                                      className: B.footer,
                                      children: [
                                          (0, r.jsx)(A.ZP, {
                                              renderIcon: !1,
                                              users: e_,
                                              size: F,
                                              max: 6,
                                              renderUser: ey
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: B.footerButtons,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: B.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(D.Z, { channelId: eh }),
                                                          (0, r.jsx)(g.d, {
                                                              isTrayButton: !0,
                                                              label: U.intl.string(U.t.brPQ5e),
                                                              onClick: J,
                                                              iconComponent: c.dOc,
                                                              themeable: !0
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: B.leaveButtonContainer,
                                                      children: (0, r.jsx)(b.Z, {
                                                          applicationId: W.id,
                                                          location: V,
                                                          centerButton: !0,
                                                          color: 'disconnect',
                                                          isActivityInCall: !1
                                                      })
                                                  })
                                              ]
                                          }),
                                          eb
                                              ? (0, r.jsx)(_.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        ((0, h.yw)(k.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, w.Z)({ onConfirm: E.Gj }));
                                                    },
                                                    onClosePopout: () => {}
                                                })
                                              : null
                                      ]
                                  })
                                : null
                        ]
                    }),
                    et && null != G
                        ? (0, r.jsx)(f.Z, {
                              minHeight: 480,
                              maxHeight: G,
                              resizableNode: $,
                              onResize: (e) => {
                                  (O.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), er(e));
                              },
                              onResizeEnd: (e) => {
                                  (O.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ei(e));
                              }
                          })
                        : null
                ]
            })
    });
}
