n.d(t, { Z: () => F }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(252258),
    s = n(442837),
    c = n(993365),
    u = n(481060),
    d = n(153867),
    p = n(110924),
    h = n(607070),
    f = n(900211),
    m = n(740492),
    g = n(82965),
    b = n(871499),
    _ = n(786915),
    y = n(402113),
    x = n(592125),
    C = n(271383),
    v = n(944486),
    j = n(594174),
    O = n(585483),
    E = n(51144),
    I = n(566620),
    P = n(317381),
    S = n(619915),
    Z = n(988980),
    N = n(16609),
    T = n(952561),
    A = n(563218),
    w = n(884338),
    R = n(719296),
    k = n(651612),
    M = n(918559),
    L = n(981631),
    D = n(388032),
    U = n(199570);
let B = w.u.SIZE_32,
    G = {
        [M.MI.NO_CHAT]: U.noChat,
        [M.MI.RESIZABLE]: U.resizable
    };
function F(e) {
    var t, n, l;
    let { maxHeight: F, connectedLocation: H, renderExternalHeader: V } = e,
        z = (0, g.Z)({ location: 'ActivityPanelFocusedView' }),
        W = (0, T.Z)(),
        Y = (0, s.Wu)([P.ZP], () => P.ZP.getEmbeddedActivitiesForLocation(H), [H]),
        q = (0, N.pY)(H),
        K = (0, s.e7)([x.Z], () => x.Z.getChannel(q)),
        X = (0, S.gb)(Y),
        Q = (0, S.uF)(X),
        J = i.useCallback(() => {
            (0, I.tg)(M.Ez.PIP);
        }, []),
        $ = i.useRef(null),
        ee = (0, s.e7)([P.ZP], () => P.ZP.getFocusedLayout()),
        et = ee !== M.MI.NO_CHAT,
        [en, er] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : F) ? n : null),
        ei = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        el = i.useRef(null),
        [eo, ea] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == el.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            ea({
                width: null != (n = null == (e = el.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = el.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return e.observe(el.current), () => e.disconnect();
    }, []);
    let es = eo.width / Math.max(eo.height, 1) < M.I0,
        ec = 0,
        eu = 0,
        ed = (0, Z.Z)(null == W ? void 0 : W.id);
    if (!ed) {
        let e = eo.width,
            t = eo.height;
        es ? ((t = eo.width / M.I0) > eo.height && (e = (t = eo.height) * M.I0), (eu = (eo.height - t) / 2)) : ((e = Math.min(eo.height * M.I0)) > eo.width && (t = (e = eo.width) / M.I0), (ec = (eo.width - e) / 2));
    }
    let ep = Q.get(null != (l = null == W ? void 0 : W.id) ? l : ''),
        eh = H.kind === a.E.CONTEXTLESS,
        ef = (0, s.e7)([v.Z], () => v.Z.getChannelId()),
        em = (0, s.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == K ? [] : Array.from(null != (e = null == ep ? void 0 : ep.embeddedActivity.userIds) ? e : []).map((e) => C.ZP.getMember(K.guild_id, e));
            },
            [ep, K]
        ),
        eg = i.useMemo(() => {
            let e = new Map();
            return (
                em.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [em]),
        eb = (function (e, t, n) {
            let r = (0, p.Z)(e),
                l = e !== r,
                [o, a] = i.useState(!1);
            i.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let s = !h.Z.useReducedMotion && (l || o);
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
        })(et, en, F);
    if (null == W) return null;
    let e_ = [];
    null != ep &&
        (e_ = Array.from(ep.embeddedActivity.userIds)
            .map((e) => j.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ey = (e) => {
        var t;
        if (null == e || void 0 === e) return null;
        let n = eg.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : E.ZP.getName(e);
        return (0, r.jsx)(
            u.DY3,
            {
                text: i,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(null == K ? void 0 : K.guild_id, B),
                        alt: i,
                        className: U.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(u.f6W, {
        theme: L.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: o()(U.wrapper, G[ee], e, { [U.contextlessActivityWrapper]: eh }),
                ref: $,
                style: eb,
                children: [
                    !eh && (null == V ? void 0 : V()),
                    (0, r.jsxs)('div', {
                        className: U.activityPanelContainer,
                        children: [
                            et || eh
                                ? null
                                : (0, r.jsx)('div', {
                                      className: U.header,
                                      children: (0, r.jsx)(c.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: U.headerTitle,
                                          children: null == W ? void 0 : W.name
                                      })
                                  }),
                            (0, r.jsx)('div', {
                                className: o()(U.activityContainer, { [U.activityContainerNoMargin]: ed }),
                                style: {
                                    paddingLeft: ec,
                                    paddingRight: ec,
                                    paddingTop: eu,
                                    paddingBottom: eu
                                },
                                ref: el,
                                children: (0, r.jsx)(A.Z, {
                                    className: U.iframe,
                                    embedId: (0, R.Z)(H.id, W.id)
                                })
                            }),
                            eh || null != ef
                                ? (0, r.jsxs)('div', {
                                      className: U.footer,
                                      children: [
                                          (0, r.jsx)(w.Z, {
                                              renderIcon: !1,
                                              users: e_,
                                              size: B,
                                              max: 6,
                                              className: U.userAvatars,
                                              renderUser: ey
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: U.footerButtons,
                                              children: [
                                                  z || null == ef || eh
                                                      ? null
                                                      : (0, r.jsx)(k.Z, {
                                                            channelId: ef,
                                                            className: U.circularButton
                                                        }),
                                                  z
                                                      ? (0, r.jsxs)('div', {
                                                            className: U.buttonSection,
                                                            children: [
                                                                eh
                                                                    ? (0, r.jsx)(_.Z, {
                                                                          appContext: L.IlC.APP,
                                                                          applicationId: W.id,
                                                                          shouldPrioritizeGroupPlusIcon: !0,
                                                                          isContextlessActivity: eh
                                                                      })
                                                                    : null,
                                                                eh || null == ef ? null : (0, r.jsx)(k.Z, { channelId: ef }),
                                                                (0, r.jsx)(b.d, {
                                                                    label: D.intl.string(D.t.brPQ5e),
                                                                    onClick: J,
                                                                    iconComponent: u.dOc,
                                                                    themeable: !0
                                                                })
                                                            ]
                                                        })
                                                      : null,
                                                  (0, r.jsx)('div', {
                                                      className: U.leaveButtonContainer,
                                                      children: (0, r.jsx)(y.Z, {
                                                          applicationId: W.id,
                                                          location: H,
                                                          centerButton: !0,
                                                          color: 'disconnect',
                                                          className: z ? void 0 : U.leaveActivityButton
                                                      })
                                                  }),
                                                  z
                                                      ? null
                                                      : (0, r.jsx)(b.d, {
                                                            label: D.intl.string(D.t.brPQ5e),
                                                            onClick: J,
                                                            iconComponent: u.dOc,
                                                            themeable: !0,
                                                            className: U.circularButton
                                                        })
                                              ]
                                          }),
                                          (0, r.jsx)('div', { className: U.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    et && null != F
                        ? (0, r.jsx)(f.Z, {
                              minHeight: 480,
                              maxHeight: F,
                              resizableNode: $,
                              onResize: (e) => {
                                  O.S.dispatch(L.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), er(e);
                              },
                              onResizeEnd: (e) => {
                                  O.S.dispatch(L.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ei(e);
                              }
                          })
                        : null
                ]
            })
    });
}
