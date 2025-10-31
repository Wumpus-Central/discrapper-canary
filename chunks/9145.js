n.d(t, { Z: () => Y }), n(388685);
var r = n(951288),
    i = n(647438),
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
    _ = n(402113),
    y = n(800965),
    x = n(592125),
    O = n(271383),
    j = n(944486),
    v = n(594174),
    C = n(585483),
    I = n(51144),
    S = n(566620),
    E = n(317381),
    Z = n(389147),
    P = n(619915),
    T = n(988980),
    N = n(16609),
    R = n(60902),
    w = n(952561),
    A = n(563218),
    D = n(884338),
    L = n(617552),
    M = n(719296),
    k = n(225639),
    U = n(651612),
    G = n(918559),
    H = n(981631),
    F = n(388032),
    B = n(33985);
function V(e) {
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
}
let z = D.u8.SIZE_32,
    W = {
        [G.MI.NO_CHAT]: B.noChat,
        [G.MI.RESIZABLE]: B.resizable,
    };
function Y(e) {
    var t, l, Y;
    let { maxHeight: q, connectedLocation: K, renderExternalHeader: Q } = e,
        X = (0, w.Z)(),
        J = (0, s.Wu)([E.ZP], () => E.ZP.getEmbeddedActivitiesForLocation(K), [K]),
        $ = (0, N.p)(K),
        ee = (0, s.e7)([x.Z], () => x.Z.getChannel($)),
        et = (0, P.gb)(J),
        en = (0, P.uF)(et),
        er = i.useCallback(() => {
            (0, S.tg)(G.Ez.PIP);
        }, []),
        ei = i.useRef(null),
        el = (0, s.e7)([E.ZP], () => E.ZP.getFocusedLayout()),
        ea = el !== G.MI.NO_CHAT,
        [es, eo] = i.useState(null != (l = null != (t = m.ZP.activityPanelHeight) ? t : q) ? l : null),
        ec = i.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ed = i.useRef(null),
        [eu, ep] = i.useState({
            width: 0,
            height: 0,
        });
    i.useLayoutEffect(() => {
        if (null == ed.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            ep({
                width: null != (n = null == (e = ed.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = ed.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(ed.current), () => e.disconnect();
    }, []);
    let eh = eu.width / Math.max(eu.height, 1) < G.I0,
        ef = 0,
        eg = 0,
        em = (0, T.Z)(null == X ? void 0 : X.id);
    if (!em) {
        let e = eu.width,
            t = eu.height;
        eh
            ? ((t = eu.width / G.I0) > eu.height && (e = (t = eu.height) * G.I0), (eg = (eu.height - t) / 2))
            : ((e = Math.min(eu.height * G.I0)) > eu.width && (t = (e = eu.width) / G.I0), (ef = (eu.width - e) / 2));
    }
    let eb = en.get(null != (Y = null == X ? void 0 : X.id) ? Y : ""),
        e_ = (0, s.e7)([j.Z], () => j.Z.getChannelId()),
        ey = (0, s.Wu)([O.ZP], () => {
            var e;
            return null == ee
                ? []
                : Array.from(null != (e = null == eb ? void 0 : eb.embeddedActivity.userIds) ? e : []).map((e) =>
                      O.ZP.getMember(ee.guild_id, e),
                  );
        }, [eb, ee]),
        ex = i.useMemo(() => {
            let e = new Map();
            return (
                ey.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ey]),
        eO = (function (e, t, n) {
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
                    ? ((r = V({}, l)),
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
        })(ea, es, q),
        ej = (0, k.y)(),
        { data: ev } = (0, R.K)(Z.B);
    if (null == X) return null;
    let eC = null == ev ? void 0 : ev.isFortniteActivity(X.id),
        eI = [];
    null != eb &&
        (eI = Array.from(eb.embeddedActivity.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eS = (e) => {
        var t;
        if (null == e || void 0 === e || e === D.ag) return null;
        let n = ex.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : I.ZP.getName(e);
        return (0, r.jsx)(
            c.u,
            {
                asContainer: !0,
                text: i,
                position: "bottom",
                children: (0, r.jsx)(
                    "img",
                    {
                        src: e.getAvatarURL(null == ee ? void 0 : ee.guild_id, z),
                        alt: i,
                        className: B.avatar,
                    },
                    e.id,
                ),
            },
            e.id,
        );
    };
    return (0, r.jsx)(d.f6W, {
        theme: H.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(B.wrapper, W[el], e),
                ref: ei,
                style: eO,
                children: [
                    null == Q ? void 0 : Q(),
                    (0, r.jsxs)("div", {
                        className: B.activityPanelContainer,
                        children: [
                            ea
                                ? null
                                : (0, r.jsx)("div", {
                                      className: B.header,
                                      children: (0, r.jsx)(o.x, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          className: B.headerTitle,
                                          children: null == X ? void 0 : X.name,
                                      }),
                                  }),
                            (0, r.jsx)("div", {
                                className: a()(B.activityContainer, { [B.activityContainerNoMargin]: em }),
                                style: {
                                    paddingLeft: ef,
                                    paddingRight: ef,
                                    paddingTop: eg,
                                    paddingBottom: eg,
                                },
                                ref: ed,
                                children: (0, r.jsx)(A.Z, {
                                    className: B.iframe,
                                    embedId: (0, M.Z)(K.id, X.id),
                                }),
                            }),
                            null != e_
                                ? (0, r.jsxs)("div", {
                                      className: B.footer,
                                      children: [
                                          (0, r.jsx)(D.ZP, {
                                              renderIcon: !1,
                                              users: eI,
                                              size: z,
                                              max: 6,
                                              renderUser: eS,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: B.footerButtons,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: B.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(U.Z, { channelId: e_ }),
                                                          (0, r.jsx)(b.d, {
                                                              isTrayButton: !0,
                                                              label: F.intl.string(F.t.brPQ5U),
                                                              onClick: er,
                                                              iconComponent: d.dOc,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: B.leaveButtonContainer,
                                                      children: (0, r.jsx)(_.Z, {
                                                          applicationId: X.id,
                                                          location: K,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          eC &&
                                              (0, r.jsx)("div", {
                                                  className: B.fortniteUpsellModalButton,
                                                  children: (0, r.jsx)(d.Button, {
                                                      onClick: () => {
                                                          (0, d.ZDy)(
                                                              async () => {
                                                                  let { FortniteUpsellModal: e } = await n
                                                                      .e("64152")
                                                                      .then(n.bind(n, 690804));
                                                                  return (t) => (0, r.jsx)(e, V({}, t));
                                                              },
                                                              { modalKey: "activity-upsell-modal" },
                                                          );
                                                      },
                                                      text: F.intl.string(F.t["36gY4e"]),
                                                      variant: "color-mix",
                                                  }),
                                              }),
                                          ej
                                              ? (0, r.jsx)(y.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, f.yw)(H.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, L.Z)({
                                                                onConfirm: async () => {
                                                                    (null == X ? void 0 : X.id) != null &&
                                                                        null != $ &&
                                                                        (await (0, S.nJ)(X.id, $)),
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
                    ea && null != q
                        ? (0, r.jsx)(g.Z, {
                              minHeight: 480,
                              maxHeight: q,
                              resizableNode: ei,
                              onResize: (e) => {
                                  C.S.dispatch(H.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), eo(e);
                              },
                              onResizeEnd: (e) => {
                                  C.S.dispatch(H.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ec(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
