n.d(t, { Z: () => B }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(993365),
    c = n(481060),
    u = n(153867),
    d = n(110924),
    h = n(607070),
    p = n(367907),
    f = n(900211),
    g = n(740492),
    m = n(871499),
    b = n(402113),
    y = n(800965),
    x = n(592125),
    _ = n(271383),
    j = n(944486),
    O = n(594174),
    v = n(585483),
    C = n(51144),
    E = n(566620),
    S = n(317381),
    I = n(619915),
    Z = n(988980),
    P = n(16609),
    T = n(952561),
    N = n(563218),
    R = n(884338),
    w = n(617552),
    A = n(719296),
    D = n(225639),
    k = n(651612),
    L = n(918559),
    M = n(981631),
    U = n(388032),
    F = n(199570);
let H = R.u8.SIZE_32,
    G = {
        [L.MI.NO_CHAT]: F.noChat,
        [L.MI.RESIZABLE]: F.resizable,
    };
function B(e) {
    var t, n, l;
    let { maxHeight: B, connectedLocation: W, renderExternalHeader: V } = e,
        z = (0, T.Z)(),
        Y = (0, s.Wu)([S.ZP], () => S.ZP.getEmbeddedActivitiesForLocation(W), [W]),
        q = (0, P.p)(W),
        K = (0, s.e7)([x.Z], () => x.Z.getChannel(q)),
        Q = (0, I.gb)(Y),
        X = (0, I.uF)(Q),
        J = i.useCallback(() => {
            (0, E.tg)(L.Ez.PIP);
        }, []),
        $ = i.useRef(null),
        ee = (0, s.e7)([S.ZP], () => S.ZP.getFocusedLayout()),
        et = ee !== L.MI.NO_CHAT,
        [en, er] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : B) ? n : null),
        ei = i.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        el = i.useRef(null),
        [ea, es] = i.useState({
            width: 0,
            height: 0,
        });
    i.useLayoutEffect(() => {
        if (null == el.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            es({
                width: null != (n = null == (e = el.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = el.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(el.current), () => e.disconnect();
    }, []);
    let eo = ea.width / Math.max(ea.height, 1) < L.I0,
        ec = 0,
        eu = 0,
        ed = (0, Z.Z)(null == z ? void 0 : z.id);
    if (!ed) {
        let e = ea.width,
            t = ea.height;
        eo
            ? ((t = ea.width / L.I0) > ea.height && (e = (t = ea.height) * L.I0), (eu = (ea.height - t) / 2))
            : ((e = Math.min(ea.height * L.I0)) > ea.width && (t = (e = ea.width) / L.I0), (ec = (ea.width - e) / 2));
    }
    let eh = X.get(null != (l = null == z ? void 0 : z.id) ? l : ""),
        ep = (0, s.e7)([j.Z], () => j.Z.getChannelId()),
        ef = (0, s.Wu)([_.ZP], () => {
            var e;
            return null == K
                ? []
                : Array.from(null != (e = null == eh ? void 0 : eh.embeddedActivity.userIds) ? e : []).map((e) =>
                      _.ZP.getMember(K.guild_id, e),
                  );
        }, [eh, K]),
        eg = i.useMemo(() => {
            let e = new Map();
            return (
                ef.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ef]),
        em = (function (e, t, n) {
            let r = (0, d.Z)(e),
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
        })(et, en, B),
        eb = (0, D.y)({ location: "Activity Panel" });
    if (null == z) return null;
    let ey = [];
    null != eh &&
        (ey = Array.from(eh.embeddedActivity.userIds)
            .map((e) => O.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ex = (e) => {
        var t;
        if (null == e || void 0 === e || e === R.ag) return null;
        let n = eg.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : C.ZP.getName(e);
        return (0, r.jsx)(
            c.DY3,
            {
                text: i,
                position: "bottom",
                children: (0, r.jsx)(
                    "img",
                    {
                        src: e.getAvatarURL(null == K ? void 0 : K.guild_id, H),
                        alt: i,
                        className: F.avatar,
                    },
                    e.id,
                ),
            },
            e.id,
        );
    };
    return (0, r.jsx)(c.f6W, {
        theme: M.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(F.wrapper, G[ee], e),
                ref: $,
                style: em,
                children: [
                    null == V ? void 0 : V(),
                    (0, r.jsxs)("div", {
                        className: F.activityPanelContainer,
                        children: [
                            et
                                ? null
                                : (0, r.jsx)("div", {
                                      className: F.header,
                                      children: (0, r.jsx)(o.x, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          className: F.headerTitle,
                                          children: null == z ? void 0 : z.name,
                                      }),
                                  }),
                            (0, r.jsx)("div", {
                                className: a()(F.activityContainer, { [F.activityContainerNoMargin]: ed }),
                                style: {
                                    paddingLeft: ec,
                                    paddingRight: ec,
                                    paddingTop: eu,
                                    paddingBottom: eu,
                                },
                                ref: el,
                                children: (0, r.jsx)(N.Z, {
                                    className: F.iframe,
                                    embedId: (0, A.Z)(W.id, z.id),
                                }),
                            }),
                            null != ep
                                ? (0, r.jsxs)("div", {
                                      className: F.footer,
                                      children: [
                                          (0, r.jsx)(R.ZP, {
                                              renderIcon: !1,
                                              users: ey,
                                              size: H,
                                              max: 6,
                                              renderUser: ex,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: F.footerButtons,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: F.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(k.Z, { channelId: ep }),
                                                          (0, r.jsx)(m.d, {
                                                              isTrayButton: !0,
                                                              label: U.intl.string(U.t.brPQ5e),
                                                              onClick: J,
                                                              iconComponent: c.dOc,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: F.leaveButtonContainer,
                                                      children: (0, r.jsx)(b.Z, {
                                                          applicationId: z.id,
                                                          location: W,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          eb
                                              ? (0, r.jsx)(y.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, p.yw)(M.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, w.Z)({ onConfirm: E.Gj });
                                                    },
                                                    onClosePopout: () => {},
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    et && null != B
                        ? (0, r.jsx)(f.Z, {
                              minHeight: 480,
                              maxHeight: B,
                              resizableNode: $,
                              onResize: (e) => {
                                  v.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), er(e);
                              },
                              onResizeEnd: (e) => {
                                  v.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ei(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
