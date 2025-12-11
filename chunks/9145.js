n.d(t, { Z: () => V }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(993365),
    c = n(28664),
    d = n(481060),
    u = n(153867),
    p = n(110924),
    h = n(607070),
    f = n(367907),
    g = n(900211),
    m = n(740492),
    b = n(871499),
    y = n(402113),
    O = n(800965),
    j = n(592125),
    x = n(271383),
    v = n(944486),
    C = n(594174),
    I = n(585483),
    _ = n(51144),
    S = n(566620),
    E = n(317381),
    Z = n(619915),
    P = n(988980),
    T = n(16609),
    N = n(952561),
    R = n(563218),
    w = n(884338),
    A = n(617552),
    D = n(719296),
    L = n(225639),
    M = n(996726),
    k = n(918559),
    U = n(981631),
    G = n(388032),
    H = n(257536);
let F = w.u8.SIZE_32,
    B = {
        [k.MI.NO_CHAT]: H.noChat,
        [k.MI.RESIZABLE]: H.resizable,
    };
function V(e) {
    var t, n, l;
    let { maxHeight: V, connectedLocation: z, renderExternalHeader: W } = e,
        Y = (0, N.Z)(),
        q = (0, s.Wu)([E.ZP], () => E.ZP.getEmbeddedActivitiesForLocation(z), [z]),
        K = (0, T.p)(z),
        Q = (0, s.e7)([j.Z], () => j.Z.getChannel(K)),
        X = (0, Z.gb)(q),
        J = (0, Z.uF)(X),
        $ = i.useCallback(() => {
            (0, S.tg)(k.Ez.PIP);
        }, []),
        ee = i.useRef(null),
        et = (0, s.e7)([E.ZP], () => E.ZP.getFocusedLayout()),
        en = et !== k.MI.NO_CHAT,
        [er, ei] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : V) ? n : null),
        el = i.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ea = i.useRef(null),
        [es, eo] = i.useState({
            width: 0,
            height: 0,
        });
    i.useLayoutEffect(() => {
        if (null == ea.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            eo({
                width: null != (n = null == (e = ea.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = ea.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(ea.current), () => e.disconnect();
    }, []);
    let ec = es.width / Math.max(es.height, 1) < k.I0,
        ed = 0,
        eu = 0,
        ep = (0, P.Z)(null == Y ? void 0 : Y.id);
    if (!ep) {
        let e = es.width,
            t = es.height;
        ec
            ? ((t = es.width / k.I0) > es.height && (e = (t = es.height) * k.I0), (eu = (es.height - t) / 2))
            : ((e = Math.min(es.height * k.I0)) > es.width && (t = (e = es.width) / k.I0), (ed = (es.width - e) / 2));
    }
    let eh = J.get(null != (l = null == Y ? void 0 : Y.id) ? l : ""),
        ef = (0, s.e7)([v.Z], () => v.Z.getChannelId()),
        eg = (0, s.Wu)([x.ZP], () => {
            var e;
            return null == Q
                ? []
                : Array.from(null != (e = null == eh ? void 0 : eh.embeddedActivity.userIds) ? e : []).map((e) =>
                      x.ZP.getMember(Q.guild_id, e),
                  );
        }, [eh, Q]),
        em = i.useMemo(() => {
            let e = new Map();
            return (
                eg.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eg]),
        eb = (function (e, t, n) {
            let r = (0, p.Z)(e),
                l = e !== r,
                [a, s] = i.useState(!1);
            i.useEffect(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (l || a);
            return i.useMemo(() => {
                var r, i;
                let l = o
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "".concat(50, "ms"),
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != t && null != n
                    ? ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
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
                              height: t,
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
            }, [o, e, n, t]);
        })(en, er, V),
        ey = (0, L.y)();
    if (null == Y) return null;
    let eO = [];
    null != eh &&
        (eO = Array.from(eh.embeddedActivity.userIds)
            .map((e) => C.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ej = (e) => {
        var t;
        if (null == e || void 0 === e || e === w.ag) return null;
        let n = em.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : _.ZP.getName(e);
        return (0, r.jsx)(
            c.u,
            {
                asContainer: !0,
                text: i,
                position: "bottom",
                children: (0, r.jsx)(
                    "img",
                    {
                        src: e.getAvatarURL(null == Q ? void 0 : Q.guild_id, F),
                        alt: i,
                        className: H.avatar,
                    },
                    e.id,
                ),
            },
            e.id,
        );
    };
    return (0, r.jsx)(d.f6W, {
        theme: U.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(H.wrapper, B[et], e),
                ref: ee,
                style: eb,
                children: [
                    null == W ? void 0 : W(),
                    (0, r.jsxs)("div", {
                        className: H.activityPanelContainer,
                        children: [
                            en
                                ? null
                                : (0, r.jsx)("div", {
                                      className: H.header,
                                      children: (0, r.jsx)(o.x, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          className: H.headerTitle,
                                          children: null == Y ? void 0 : Y.name,
                                      }),
                                  }),
                            (0, r.jsx)("div", {
                                className: a()(H.activityContainer, { [H.activityContainerNoMargin]: ep }),
                                style: {
                                    paddingLeft: ed,
                                    paddingRight: ed,
                                    paddingTop: eu,
                                    paddingBottom: eu,
                                },
                                ref: ea,
                                children: (0, r.jsx)(R.Z, {
                                    className: H.iframe,
                                    embedId: (0, D.Z)(z.id, Y.id),
                                }),
                            }),
                            null != ef
                                ? (0, r.jsxs)("div", {
                                      className: H.footer,
                                      children: [
                                          (0, r.jsx)(w.ZP, {
                                              renderIcon: !1,
                                              users: eO,
                                              size: F,
                                              max: 6,
                                              renderUser: ej,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: H.footerButtons,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: H.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(M.Z, { channelId: ef }),
                                                          (0, r.jsx)(b.d, {
                                                              isTrayButton: !0,
                                                              label: G.intl.string(G.t.brPQ5U),
                                                              onClick: $,
                                                              iconComponent: d.dOc,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: H.leaveButtonContainer,
                                                      children: (0, r.jsx)(y.Z, {
                                                          applicationId: Y.id,
                                                          location: z,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          ey
                                              ? (0, r.jsx)(O.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, f.yw)(U.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, A.Z)({
                                                                onConfirm: async () => {
                                                                    (null == Y ? void 0 : Y.id) != null &&
                                                                        null != K &&
                                                                        (await (0, S.nJ)(Y.id, K)),
                                                                        (0, S.Gj)();
                                                                },
                                                            });
                                                    },
                                                    onClosePopout: () => {},
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    en && null != V
                        ? (0, r.jsx)(g.Z, {
                              minHeight: 480,
                              maxHeight: V,
                              resizableNode: ee,
                              onResize: (e) => {
                                  I.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), ei(e);
                              },
                              onResizeEnd: (e) => {
                                  I.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), el(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
