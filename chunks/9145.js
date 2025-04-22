n.d(t, { Z: () => G }), n(388685);
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
    _ = n(402113),
    y = n(592125),
    C = n(271383),
    x = n(944486),
    v = n(594174),
    j = n(585483),
    O = n(51144),
    E = n(566620),
    I = n(317381),
    S = n(619915),
    P = n(988980),
    Z = n(16609),
    N = n(952561),
    T = n(563218),
    A = n(884338),
    w = n(719296),
    R = n(651612),
    k = n(918559),
    M = n(981631),
    L = n(388032),
    D = n(199570);
let U = A.u.SIZE_32,
    B = {
        [k.MI.NO_CHAT]: D.noChat,
        [k.MI.RESIZABLE]: D.resizable
    };
function G(e) {
    var t, n, l;
    let { maxHeight: G, connectedLocation: F, renderExternalHeader: H } = e,
        V = (0, g.Z)({ location: 'ActivityPanelFocusedView' }),
        z = (0, N.Z)(),
        W = (0, s.Wu)([I.ZP], () => I.ZP.getEmbeddedActivitiesForLocation(F), [F]),
        Y = (0, Z.pY)(F),
        q = (0, s.e7)([y.Z], () => y.Z.getChannel(Y)),
        K = (0, S.gb)(W),
        X = (0, S.uF)(K),
        Q = i.useCallback(() => {
            (0, E.tg)(k.Ez.PIP);
        }, []),
        J = i.useRef(null),
        $ = (0, s.e7)([I.ZP], () => I.ZP.getFocusedLayout()),
        ee = $ !== k.MI.NO_CHAT,
        [et, en] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : G) ? n : null),
        er = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ei = i.useRef(null),
        [el, eo] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == ei.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            eo({
                width: null != (n = null == (e = ei.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = ei.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return e.observe(ei.current), () => e.disconnect();
    }, []);
    let ea = el.width / Math.max(el.height, 1) < k.I0,
        es = 0,
        ec = 0,
        eu = (0, P.Z)(null == z ? void 0 : z.id);
    if (!eu) {
        let e = el.width,
            t = el.height;
        ea ? ((t = el.width / k.I0) > el.height && (e = (t = el.height) * k.I0), (ec = (el.height - t) / 2)) : ((e = Math.min(el.height * k.I0)) > el.width && (t = (e = el.width) / k.I0), (es = (el.width - e) / 2));
    }
    let ed = X.get(null != (l = null == z ? void 0 : z.id) ? l : ''),
        ep = F.kind === a.E.CONTEXTLESS,
        eh = (0, s.e7)([x.Z], () => x.Z.getChannelId()),
        ef = (0, s.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == q ? [] : Array.from(null != (e = null == ed ? void 0 : ed.embeddedActivity.userIds) ? e : []).map((e) => C.ZP.getMember(q.guild_id, e));
            },
            [ed, q]
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
        })(ee, et, G);
    if (null == z) return null;
    let eb = [];
    null != ed &&
        (eb = Array.from(ed.embeddedActivity.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let e_ = (e) => {
        var t;
        if (null == e || void 0 === e) return null;
        let n = em.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : O.ZP.getName(e);
        return (0, r.jsx)(
            u.DY3,
            {
                text: i,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(null == q ? void 0 : q.guild_id, U),
                        alt: i,
                        className: D.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(u.f6W, {
        theme: M.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: o()(D.wrapper, B[$], e, { [D.contextlessActivityWrapper]: ep }),
                ref: J,
                style: eg,
                children: [
                    !ep && (null == H ? void 0 : H()),
                    (0, r.jsxs)('div', {
                        className: D.activityPanelContainer,
                        children: [
                            ee || ep
                                ? null
                                : (0, r.jsx)('div', {
                                      className: D.header,
                                      children: (0, r.jsx)(c.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: D.headerTitle,
                                          children: null == z ? void 0 : z.name
                                      })
                                  }),
                            (0, r.jsx)('div', {
                                className: o()(D.activityContainer, { [D.activityContainerNoMargin]: eu }),
                                style: {
                                    paddingLeft: es,
                                    paddingRight: es,
                                    paddingTop: ec,
                                    paddingBottom: ec
                                },
                                ref: ei,
                                children: (0, r.jsx)(T.Z, {
                                    className: D.iframe,
                                    embedId: (0, w.Z)(F.id, z.id)
                                })
                            }),
                            ep || null != eh
                                ? (0, r.jsxs)('div', {
                                      className: D.footer,
                                      children: [
                                          (0, r.jsx)(A.Z, {
                                              renderIcon: !1,
                                              users: eb,
                                              size: U,
                                              max: 6,
                                              className: D.userAvatars,
                                              renderUser: e_
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: D.footerButtons,
                                              children: [
                                                  V || null == eh || ep
                                                      ? null
                                                      : (0, r.jsx)(R.Z, {
                                                            channelId: eh,
                                                            className: D.circularButton
                                                        }),
                                                  V
                                                      ? (0, r.jsxs)('div', {
                                                            className: D.buttonSection,
                                                            children: [
                                                                ep || null == eh ? null : (0, r.jsx)(R.Z, { channelId: eh }),
                                                                (0, r.jsx)(b.d, {
                                                                    label: L.intl.string(L.t.brPQ5e),
                                                                    onClick: Q,
                                                                    iconComponent: u.dOc,
                                                                    themeable: !0
                                                                })
                                                            ]
                                                        })
                                                      : null,
                                                  (0, r.jsx)('div', {
                                                      className: D.leaveButtonContainer,
                                                      children: (0, r.jsx)(_.Z, {
                                                          applicationId: z.id,
                                                          location: F,
                                                          centerButton: !0,
                                                          color: 'disconnect',
                                                          className: V ? void 0 : D.leaveActivityButton
                                                      })
                                                  }),
                                                  V
                                                      ? null
                                                      : (0, r.jsx)(b.d, {
                                                            label: L.intl.string(L.t.brPQ5e),
                                                            onClick: Q,
                                                            iconComponent: u.dOc,
                                                            themeable: !0,
                                                            className: D.circularButton
                                                        })
                                              ]
                                          }),
                                          (0, r.jsx)('div', { className: D.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    ee && null != G
                        ? (0, r.jsx)(f.Z, {
                              minHeight: 480,
                              maxHeight: G,
                              resizableNode: J,
                              onResize: (e) => {
                                  j.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), en(e);
                              },
                              onResizeEnd: (e) => {
                                  j.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), er(e);
                              }
                          })
                        : null
                ]
            })
    });
}
