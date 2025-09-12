n.d(t, { Z: () => z }), n(388685);
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
    P = n(729200),
    Z = n(619915),
    T = n(988980),
    N = n(16609),
    A = n(952561),
    w = n(563218),
    R = n(884338),
    M = n(617552),
    D = n(719296),
    L = n(225639),
    k = n(651612),
    U = n(918559),
    B = n(981631),
    G = n(388032),
    H = n(33985);
let F = R.u8.SIZE_32,
    V = {
        [U.MI.NO_CHAT]: H.noChat,
        [U.MI.RESIZABLE]: H.resizable,
    };
function z(e) {
    var t, n, l;
    let { maxHeight: z, connectedLocation: W, renderExternalHeader: q } = e,
        Y = (0, A.Z)(),
        K = (0, o.Wu)([I.ZP], () => I.ZP.getEmbeddedActivitiesForLocation(W), [W]),
        X = (0, N.p)(W),
        Q = (0, o.e7)([C.Z], () => C.Z.getChannel(X)),
        J = (0, Z.gb)(K),
        $ = (0, Z.uF)(J),
        ee = i.useCallback(() => {
            (0, S.tg)(U.Ez.PIP);
        }, []),
        et = i.useRef(null),
        en = (0, o.e7)([I.ZP], () => I.ZP.getFocusedLayout()),
        er = en !== U.MI.NO_CHAT,
        [ei, el] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : z) ? n : null),
        ea = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        eo = i.useRef(null),
        [es, ec] = i.useState({
            width: 0,
            height: 0,
        });
    i.useLayoutEffect(() => {
        if (null == eo.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            ec({
                width: null != (n = null == (e = eo.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = eo.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(eo.current), () => e.disconnect();
    }, []);
    let eu = es.width / Math.max(es.height, 1) < U.I0,
        ed = 0,
        ep = 0,
        eh = (0, T.Z)(null == Y ? void 0 : Y.id);
    if (!eh) {
        let e = es.width,
            t = es.height;
        eu
            ? ((t = es.width / U.I0) > es.height && (e = (t = es.height) * U.I0), (ep = (es.height - t) / 2))
            : ((e = Math.min(es.height * U.I0)) > es.width && (t = (e = es.width) / U.I0), (ed = (es.width - e) / 2));
    }
    let ef = $.get(null != (l = null == Y ? void 0 : Y.id) ? l : ""),
        em = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
        eg = (0, o.Wu)([v.ZP], () => {
            var e;
            return null == Q
                ? []
                : Array.from(null != (e = null == ef ? void 0 : ef.embeddedActivity.userIds) ? e : []).map((e) =>
                      v.ZP.getMember(Q.guild_id, e),
                  );
        }, [ef, Q]),
        eb = i.useMemo(() => {
            let e = new Map();
            return (
                eg.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eg]),
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
        })(er, ei, z),
        e_ = (0, L.y)();
    if (null == Y) return null;
    let eC = [];
    null != ef &&
        (eC = Array.from(ef.embeddedActivity.userIds)
            .map((e) => O.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ev = (e) => {
        var t;
        if (null == e || void 0 === e || e === R.ag) return null;
        let n = eb.get(e.id),
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
    return (0, r.jsx)(u.f6W, {
        theme: B.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(H.wrapper, V[en], e),
                ref: et,
                style: ey,
                children: [
                    null == q ? void 0 : q(),
                    (0, r.jsxs)("div", {
                        className: H.activityPanelContainer,
                        children: [
                            er
                                ? null
                                : (0, r.jsx)("div", {
                                      className: H.header,
                                      children: (0, r.jsx)(s.x, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          className: H.headerTitle,
                                          children: null == Y ? void 0 : Y.name,
                                      }),
                                  }),
                            (0, r.jsx)("div", {
                                className: a()(H.activityContainer, { [H.activityContainerNoMargin]: eh }),
                                style: {
                                    paddingLeft: ed,
                                    paddingRight: ed,
                                    paddingTop: ep,
                                    paddingBottom: ep,
                                },
                                ref: eo,
                                children: (0, r.jsx)(w.Z, {
                                    className: H.iframe,
                                    embedId: (0, D.Z)(W.id, Y.id),
                                }),
                            }),
                            null != em
                                ? (0, r.jsxs)("div", {
                                      className: H.footer,
                                      children: [
                                          (0, r.jsx)(R.ZP, {
                                              renderIcon: !1,
                                              users: eC,
                                              size: F,
                                              max: 6,
                                              renderUser: ev,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: H.footerButtons,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: H.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(k.Z, { channelId: em }),
                                                          (0, r.jsx)(b.d, {
                                                              isTrayButton: !0,
                                                              label: G.intl.string(G.t.brPQ5e),
                                                              onClick: ee,
                                                              iconComponent: u.dOc,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: H.leaveButtonContainer,
                                                      children: (0, r.jsx)(y.Z, {
                                                          applicationId: Y.id,
                                                          location: W,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          e_
                                              ? (0, r.jsx)(_.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, f.yw)(B.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, M.Z)({
                                                                onConfirm: async () => {
                                                                    (null == Y ? void 0 : Y.id) != null &&
                                                                        null != X &&
                                                                        (0, P.g)() &&
                                                                        (await (0, S.nJ)(Y.id, X)),
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
                    er && null != z
                        ? (0, r.jsx)(m.Z, {
                              minHeight: 480,
                              maxHeight: z,
                              resizableNode: et,
                              onResize: (e) => {
                                  j.S.dispatch(B.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), el(e);
                              },
                              onResizeEnd: (e) => {
                                  j.S.dispatch(B.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ea(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
