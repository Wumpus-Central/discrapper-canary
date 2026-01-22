n.d(t, {
    A: () => K,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(571356),
    c = n(990078),
    u = n(397927),
    d = n(817281),
    f = n(475743),
    p = n(775602),
    h = n(58149),
    b = n(587837),
    g = n(964404),
    m = n(709562),
    A = n(383831),
    y = n(128286),
    O = n(734057),
    j = n(696451),
    v = n(309010),
    x = n(287809),
    E = n(203982),
    _ = n(427262),
    C = n(795816),
    S = n(933958),
    I = n(685399),
    N = n(216418),
    T = n(969151),
    P = n(620148),
    w = n(732637),
    R = n(104171),
    D = n(47294),
    M = n(594007),
    L = n(16961),
    G = n(716730),
    k = n(5867),
    U = n(652215),
    V = n(985018),
    F = n(907585);
let H = R.DN.SIZE_32,
    B = {
        [k.E8.NO_CHAT]: F.Oo,
        [k.E8.RESIZABLE]: F.Ig,
    };

function K(e) {
    var t, n, i;
    let { maxHeight: K, connectedLocation: W, renderExternalHeader: z } = e,
        Y = (0, P.A)(),
        q = (0, s.yK)([S.Ay], () => S.Ay.getEmbeddedActivitiesForLocation(W), [W]),
        X = (0, T.H)(W),
        J = (0, s.bG)([O.A], () => O.A.getChannel(X)),
        Q = (0, I.IQ)(q),
        Z = (0, I.Rz)(Q),
        $ = l.useCallback(() => {
            (0, C.gk)(k.Gd.PIP);
        }, []),
        ee = l.useRef(null),
        et = (0, s.bG)([S.Ay], () => S.Ay.getFocusedLayout()),
        en = et !== k.E8.NO_CHAT,
        [er, el] = l.useState(null != (t = null != (n = g.Ay.activityPanelHeight) ? n : K) ? t : null),
        ei = l.useCallback((e) => {
            d.Ay.updatedUnsyncedSettings({
                activityPanelHeight: e,
            });
        }, []),
        ea = l.useRef(null),
        [es, eo] = l.useState({
            width: 0,
            height: 0,
        });
    l.useLayoutEffect(() => {
        if (null == ea.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            eo({
                width: null != (e = null == (n = ea.current) ? void 0 : n.clientWidth) ? e : 0,
                height: null != (t = null == (r = ea.current) ? void 0 : r.clientHeight) ? t : 0,
            });
        });
        return e.observe(ea.current), () => e.disconnect();
    }, []);
    let ec = es.width / Math.max(es.height, 1) < k.B5,
        eu = 0,
        ed = 0,
        ef = (0, N.A)(null == Y ? void 0 : Y.id);
    if (!ef) {
        let e = es.width,
            t = es.height;
        ec
            ? ((t = es.width / k.B5) > es.height && (e = (t = es.height) * k.B5), (ed = (es.height - t) / 2))
            : ((e = Math.min(es.height * k.B5)) > es.width && (t = (e = es.width) / k.B5), (eu = (es.width - e) / 2));
    }
    let ep = Z.get(null != (i = null == Y ? void 0 : Y.id) ? i : ""),
        eh = (0, s.bG)([v.A], () => v.A.getChannelId()),
        eb = (0, s.yK)([j.Ay], () => {
            var e;
            return null == J
                ? []
                : Array.from(null != (e = null == ep ? void 0 : ep.embeddedActivity.userIds) ? e : []).map((e) =>
                      j.Ay.getMember(J.guild_id, e),
                  );
        }, [ep, J]),
        eg = l.useMemo(() => {
            let e = new Map();
            return (
                eb.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eb]),
        em = (function (e, t, n) {
            let r = (0, f.A)(e),
                i = e !== r,
                [a, s] = l.useState(!1);
            l.useEffect(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !p.A.useReducedMotion && (i || a);
            return l.useMemo(() => {
                var r, l;
                let i = o
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
                      })({}, i)),
                      (l = l =
                          {
                              minHeight: 200,
                              maxHeight: n,
                              height: t,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      r)
                    : i;
            }, [o, e, n, t]);
        })(en, er, K),
        eA = (0, L.G)();
    if (null == Y) return null;
    let ey = [];
    null != ep &&
        (ey = Array.from(ep.embeddedActivity.userIds)
            .map((e) => x.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eO = (e) => {
        var t;
        if (null == e || void 0 === e || e === R.mt) return null;
        let n = eg.get(e.id),
            l = null != (t = null == n ? void 0 : n.nick) ? t : _.Ay.getName(e);
        return (0, r.jsx)(
            c.m,
            {
                asContainer: !0,
                text: l,
                position: "bottom",
                children: (0, r.jsx)(
                    "img",
                    {
                        src: e.getAvatarURL(null == J ? void 0 : J.guild_id, H),
                        alt: l,
                        className: F.my,
                    },
                    e.id,
                ),
            },
            e.id,
        );
    };
    return (0, r.jsx)(u.NPJ, {
        theme: U.NJ8.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(F.iE, B[et], e),
                ref: ee,
                style: em,
                children: [
                    null == z ? void 0 : z(),
                    (0, r.jsxs)("div", {
                        className: F.lq,
                        children: [
                            en
                                ? null
                                : (0, r.jsx)("div", {
                                      className: F.wx,
                                      children: (0, r.jsx)(o.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: F.qd,
                                          children: null == Y ? void 0 : Y.name,
                                      }),
                                  }),
                            (0, r.jsx)("div", {
                                className: a()(F.ht, {
                                    [F.kK]: ef,
                                }),
                                style: {
                                    paddingLeft: eu,
                                    paddingRight: eu,
                                    paddingTop: ed,
                                    paddingBottom: ed,
                                },
                                ref: ea,
                                children: (0, r.jsx)(w.A, {
                                    className: F.pU,
                                    embedId: (0, M.A)(W.id, Y.id),
                                }),
                            }),
                            null != eh
                                ? (0, r.jsxs)("div", {
                                      className: F.qr,
                                      children: [
                                          (0, r.jsx)(R.Ay, {
                                              renderIcon: !1,
                                              users: ey,
                                              size: H,
                                              max: 6,
                                              renderUser: eO,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: F.Hq,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: F.qi,
                                                      children: [
                                                          (0, r.jsx)(G.A, {
                                                              channelId: eh,
                                                          }),
                                                          (0, r.jsx)(m.l, {
                                                              isTrayButton: !0,
                                                              label: V.intl.string(V.t.brPQ5U),
                                                              onClick: $,
                                                              iconComponent: u.gR,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: F.pt,
                                                      children: (0, r.jsx)(A.A, {
                                                          applicationId: Y.id,
                                                          location: W,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          eA
                                              ? (0, r.jsx)(y.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, h.zV)(U.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, D.A)({
                                                                onConfirm: async () => {
                                                                    (null == Y ? void 0 : Y.id) != null &&
                                                                        null != X &&
                                                                        (await (0, C.od)(Y.id, X)),
                                                                        (0, C.jp)();
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
                    en && null != K
                        ? (0, r.jsx)(b.A, {
                              minHeight: 480,
                              maxHeight: K,
                              resizableNode: ee,
                              onResize: (e) => {
                                  E._.dispatch(U.jej.MANUAL_IFRAME_RESIZING, {
                                      resizing: !0,
                                  }),
                                      el(e);
                              },
                              onResizeEnd: (e) => {
                                  E._.dispatch(U.jej.MANUAL_IFRAME_RESIZING, {
                                      resizing: !1,
                                  }),
                                      ei(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
