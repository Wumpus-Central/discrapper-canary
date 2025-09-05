n.d(t, { Z: () => V }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(993365),
    c = n(28664),
    u = n(481060),
    d = n(153867),
    p = n(110924),
    h = n(607070),
    f = n(367907),
    m = n(900211),
    g = n(740492),
    b = n(871499),
    y = n(402113),
    _ = n(800965),
    C = n(592125),
    v = n(271383),
    x = n(944486),
    O = n(594174),
    j = n(585483),
    E = n(51144),
    S = n(566620),
    I = n(317381),
    P = n(619915),
    Z = n(988980),
    T = n(16609),
    N = n(952561),
    A = n(563218),
    w = n(884338),
    R = n(617552),
    M = n(719296),
    D = n(225639),
    L = n(651612),
    k = n(918559),
    U = n(981631),
    B = n(388032),
    G = n(322678);
let H = w.u8.SIZE_32,
    F = {
        [k.MI.NO_CHAT]: G.noChat,
        [k.MI.RESIZABLE]: G.resizable,
    };
function V(e) {
    var t, n, l;
    let { maxHeight: V, connectedLocation: z, renderExternalHeader: W } = e,
        q = (0, N.Z)(),
        Y = (0, o.Wu)([I.ZP], () => I.ZP.getEmbeddedActivitiesForLocation(z), [z]),
        K = (0, T.p)(z),
        X = (0, o.e7)([C.Z], () => C.Z.getChannel(K)),
        Q = (0, P.gb)(Y),
        J = (0, P.uF)(Q),
        $ = i.useCallback(() => {
            (0, S.tg)(k.Ez.PIP);
        }, []),
        ee = i.useRef(null),
        et = (0, o.e7)([I.ZP], () => I.ZP.getFocusedLayout()),
        en = et !== k.MI.NO_CHAT,
        [er, ei] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : V) ? n : null),
        el = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ea = i.useRef(null),
        [eo, es] = i.useState({
            width: 0,
            height: 0,
        });
    i.useLayoutEffect(() => {
        if (null == ea.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            es({
                width: null != (n = null == (e = ea.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = ea.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(ea.current), () => e.disconnect();
    }, []);
    let ec = eo.width / Math.max(eo.height, 1) < k.I0,
        eu = 0,
        ed = 0,
        ep = (0, Z.Z)(null == q ? void 0 : q.id);
    if (!ep) {
        let e = eo.width,
            t = eo.height;
        ec
            ? ((t = eo.width / k.I0) > eo.height && (e = (t = eo.height) * k.I0), (ed = (eo.height - t) / 2))
            : ((e = Math.min(eo.height * k.I0)) > eo.width && (t = (e = eo.width) / k.I0), (eu = (eo.width - e) / 2));
    }
    let eh = J.get(null != (l = null == q ? void 0 : q.id) ? l : ""),
        ef = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
        em = (0, o.Wu)([v.ZP], () => {
            var e;
            return null == X
                ? []
                : Array.from(null != (e = null == eh ? void 0 : eh.embeddedActivity.userIds) ? e : []).map((e) =>
                      v.ZP.getMember(X.guild_id, e),
                  );
        }, [eh, X]),
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
            }, [s, e, n, t]);
        })(en, er, V),
        ey = (0, D.y)();
    if (null == q) return null;
    let e_ = [];
    null != eh &&
        (e_ = Array.from(eh.embeddedActivity.userIds)
            .map((e) => O.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eC = (e) => {
        var t;
        if (null == e || void 0 === e || e === w.ag) return null;
        let n = eg.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : E.ZP.getName(e);
        return (0, r.jsx)(
            c.u,
            {
                asContainer: !0,
                text: i,
                position: "bottom",
                children: (0, r.jsx)(
                    "img",
                    {
                        src: e.getAvatarURL(null == X ? void 0 : X.guild_id, H),
                        alt: i,
                        className: G.avatar,
                    },
                    e.id,
                ),
            },
            e.id,
        );
    };
    return (0, r.jsx)(u.f6W, {
        theme: U.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(G.wrapper, F[et], e),
                ref: ee,
                style: eb,
                children: [
                    null == W ? void 0 : W(),
                    (0, r.jsxs)("div", {
                        className: G.activityPanelContainer,
                        children: [
                            en
                                ? null
                                : (0, r.jsx)("div", {
                                      className: G.header,
                                      children: (0, r.jsx)(s.x, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          className: G.headerTitle,
                                          children: null == q ? void 0 : q.name,
                                      }),
                                  }),
                            (0, r.jsx)("div", {
                                className: a()(G.activityContainer, { [G.activityContainerNoMargin]: ep }),
                                style: {
                                    paddingLeft: eu,
                                    paddingRight: eu,
                                    paddingTop: ed,
                                    paddingBottom: ed,
                                },
                                ref: ea,
                                children: (0, r.jsx)(A.Z, {
                                    className: G.iframe,
                                    embedId: (0, M.Z)(z.id, q.id),
                                }),
                            }),
                            null != ef
                                ? (0, r.jsxs)("div", {
                                      className: G.footer,
                                      children: [
                                          (0, r.jsx)(w.ZP, {
                                              renderIcon: !1,
                                              users: e_,
                                              size: H,
                                              max: 6,
                                              renderUser: eC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: G.footerButtons,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: G.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(L.Z, { channelId: ef }),
                                                          (0, r.jsx)(b.d, {
                                                              isTrayButton: !0,
                                                              label: B.intl.string(B.t.brPQ5e),
                                                              onClick: $,
                                                              iconComponent: u.dOc,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: G.leaveButtonContainer,
                                                      children: (0, r.jsx)(y.Z, {
                                                          applicationId: q.id,
                                                          location: z,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          ey
                                              ? (0, r.jsx)(_.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, f.yw)(U.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, R.Z)({ onConfirm: S.Gj });
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
                        ? (0, r.jsx)(m.Z, {
                              minHeight: 480,
                              maxHeight: V,
                              resizableNode: ee,
                              onResize: (e) => {
                                  j.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), ei(e);
                              },
                              onResizeEnd: (e) => {
                                  j.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), el(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
