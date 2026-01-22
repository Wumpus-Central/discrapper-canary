n.d(t, { A: () => ec }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(731738),
    c = n(311907),
    u = n(554146),
    d = n(342494),
    p = n(397927),
    f = n(944791),
    h = n(456412),
    A = n(55400),
    g = n(964486),
    m = n(260762),
    b = n(812771),
    _ = n(869248),
    E = n(485947),
    O = n(726249),
    y = n(367727),
    I = n(379848),
    v = n(742589),
    S = n(831062),
    C = n(378570),
    N = n(138298),
    T = n(940382),
    j = n(210714),
    x = n(544028),
    P = n(780964),
    w = n(358776),
    L = n(840065),
    R = n(761640),
    D = n(734057),
    M = n(186111),
    k = n(954571),
    U = n(891024),
    G = n(321404),
    V = n(643015),
    B = n(336590),
    H = n(471271),
    F = n(957283),
    Y = n(411976),
    K = n(62112),
    z = n(790499),
    W = n(514426),
    q = n(660564),
    Q = n(4270),
    X = n(687599),
    Z = n(652215),
    J = n(49999),
    $ = n(355097),
    ee = n(985018),
    et = n(443416),
    en = n(638990);
function er(e) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function el() {
    let e = i.useRef(null),
        t = (0, Y.W)(),
        n = (0, K.A)(),
        l = (0, B.k)(),
        c = (0, A.w)(),
        u = i.useCallback(() => {
            (0, p.showToast)((0, p.createToast)(ee.intl.string(ee.t["EDYbS+"]), p.ToastType.FAILURE));
        }, []),
        { rejectAll: d } = (0, H.t)({ onError: u }),
        f = (0, m.A)("message-requests-list"),
        { channelId: h } = (0, F.N)(),
        g = i.useCallback(() => {
            d(n.map((e) => e.channel.id));
        }, [n, d]),
        b = i.useCallback(
            (e) => {
                var t, i;
                let { row: s } = e,
                    o = n[s],
                    c = null == (i = n[s + 1]) || null == (t = i.channel) ? void 0 : t.id,
                    u = o.channel.id;
                return (0, r.jsx)(
                    q.A,
                    {
                        index: s,
                        className: a()({
                            [et.wH]: null != h && h === u,
                            [et.wZ]: null != h && h === c,
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l,
                    },
                    u,
                );
            },
            [l, n, h],
        ),
        _ = i.useCallback(
            () =>
                (0, r.jsxs)(
                    E.A,
                    {
                        className: et.Gf,
                        children: [
                            t > 0
                                ? ee.intl.formatToPlainString(ee.t.rA4iWY, { count: t })
                                : ee.intl.string(ee.t.flPU6g),
                            c && t > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              className: et.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, r.jsx)(p.QWc, {
                                              onClick: g,
                                              textVariant: "text-sm/normal",
                                              text: ee.intl.string(ee.t.p6t7RC),
                                              "aria-label": ee.intl.string(ee.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [t, g, c],
        );
    return (n.length !== t && S.A.increment({ name: o.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(W.A, { section: X.zz.REQUESTS })
        : (0, r.jsx)(s.hD, {
              navigator: f,
              children: (0, r.jsx)(s.PR, {
                  children: (t) => {
                      let { ref: i, role: l } = t,
                          a = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  r,
                                  i,
                                  l = {};
                              if ("u" > typeof Reflect && Reflect.ownKeys) {
                                  for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                      (r = n[i]),
                                          !(t.indexOf(r) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, r) &&
                                              (l[r] = e[r]);
                                  return l;
                              }
                              if (
                                  ((l = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          r,
                                          i = {},
                                          l = Object.getOwnPropertyNames(e);
                                      for (r = 0; r < l.length; r++)
                                          (n = l[r]),
                                              !(t.indexOf(n) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                  (i[n] = e[n]);
                                      return i;
                                  })(e, t)),
                                  Object.getOwnPropertySymbols)
                              )
                                  for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                      (r = n[i]),
                                          !(t.indexOf(r) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, r) &&
                                              (l[r] = e[r]);
                              return l;
                          })(t, ["ref", "role"]);
                      return (0, r.jsx)(
                          p.B8B,
                          er(
                              {
                                  className: et.p_,
                                  innerRole: l,
                                  innerAriaLabel: ee.intl.string(ee.t.e7GWjQ),
                                  ref: (t) => {
                                      var n;
                                      (e.current = t),
                                          (i.current =
                                              null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null);
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: 26,
                                  rowHeight: 73,
                                  renderSection: _,
                                  renderRow: b,
                                  sections: [n.length],
                                  chunkSize: 30,
                                  fade: !0,
                              },
                              a,
                          ),
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function ea(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        i = (0, c.bG)([R.Ay], () => R.Ay.getSidebarState(R.fe)),
        l = (0, c.bG)([D.A], () => D.A.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== T.PE.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Z.ItT;
    return (0, r.jsx)(b.A, {
        sidebarType: b.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(_.A, {
            channel: l,
            baseChannelId: R.fe,
        }),
    });
}
let es = (e) => {
    let t = (0, V.A)();
    return (i.useEffect(() => {
        (0, y.Vh)(u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || M.A.hasLayers() || (0, p.ueM)())
        ? e.children
        : (0, r.jsx)(I.Ay, {
              contentTypes: [u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: i, markAsDismissed: l } = n,
                      a = {
                          position: "bottom",
                          caretConfig: {
                              position: "top",
                              align: "center",
                          },
                          shouldShow: !0,
                          onRequestClose: () => l(J.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return i === u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, r.jsx)(
                                          d.AM,
                                          ei(er({}, a), {
                                              title: ee.intl.string(ee.t.hRT8tc),
                                              body: ee.intl.string(ee.t.apPgJG),
                                              actions: [
                                                  {
                                                      text: ee.intl.string(ee.t.LNoAQW),
                                                      onClick: () => l(J.i.TAKE_ACTION),
                                                  },
                                              ],
                                          }),
                                      )
                                    : (0, r.jsx)(
                                          d.AM,
                                          ei(er({}, a), {
                                              title: ee.intl.string(ee.t.hRT8tc),
                                              body: ee.intl.string(ee.t["8JWods"]),
                                              actions: [
                                                  {
                                                      text: ee.intl.string(ee.t.JN6EOJ),
                                                      onClick: (e) => {
                                                          e.stopPropagation();
                                                          let t = (0, w.WJ)("MessageRequestCoachmark");
                                                          (0, L.openUserSettings)(
                                                              t
                                                                  ? P.X
                                                                        .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING
                                                                  : P.X.CONTENT_AND_SOCIAL_PANEL,
                                                              {
                                                                  section: Z.nc_.CONTENT_AND_SOCIAL,
                                                                  scrollPosition: t ? void 0 : $.d1.MESSAGE_REQUESTS_V2,
                                                              },
                                                          ),
                                                              l(J.i.TAKE_ACTION);
                                                      },
                                                  },
                                                  {
                                                      text: ee.intl.string(ee.t.LNoAQW),
                                                      onClick: () => l(J.i.USER_DISMISS),
                                                      variant: "secondary",
                                                  },
                                              ],
                                          }),
                                      ),
                            ],
                        })
                      : e.children;
              },
          });
};
function eo(e) {
    let { section: t } = e;
    return t === X.zz.SPAM ? (0, r.jsx)(Q.A, {}) : (0, r.jsx)(el, {});
}
let ec = (0, h.A)(function (e) {
    let { width: t } = e,
        n = (0, Y.W)();
    (0, g.Ay)(() => {
        f.I(Z.BVt.MESSAGE_REQUESTS),
            (0, j.d)("message-requests"),
            k.default.track(Z.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            S.A.increment({ name: o.K.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, c.bG)([x.A], () => x.A.theme),
        s = (0, z.I)(),
        [u, d] = i.useState(!1),
        h = (0, c.bG)([R.Ay], () => {
            let e = R.Ay.getSidebarState(R.fe);
            return null != e && e.type === T.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        A = null == h ? void 0 : h.channelId,
        m = null != h,
        b = (0, G.c)(A),
        _ = (0, U.A)(A),
        E = i.useRef(null);
    i.useEffect(() => {
        null != A && !b && _ && m && ((0, C.iN)(A), N.A.closeChannelSidebar(R.fe));
    }, [A, _, m, b]);
    let [y, I] = i.useState(X.zz.REQUESTS),
        P = (e) => {
            I(e);
        };
    return (
        (0, O.HU)({ location: ee.intl.string(ee.t.e7GWjQ) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(en.TE, et.kL, {
                        [en.js]: m,
                        [en.jl]: m && u,
                    }),
                    children: [
                        (0, r.jsx)(p.NPJ, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsxs)(v.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, r.jsx)(v.A.Icon, {
                                            icon: p.u6c,
                                            "aria-hidden": !0,
                                        }),
                                        (0, r.jsx)(es, {
                                            targetElementRef: E,
                                            children: (0, r.jsx)(v.A.Title, {
                                                ref: E,
                                                children: ee.intl.string(ee.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, r.jsx)(v.A.Divider, {}),
                                        (0, r.jsxs)(p.VQ0, {
                                            "aria-label": ee.intl.string(ee.t.e7GWjQ),
                                            selectedItem: y,
                                            type: "top-pill",
                                            onItemSelect: P,
                                            children: [
                                                (0, r.jsx)(p.VQ0.Item, {
                                                    id: X.zz.REQUESTS,
                                                    className: et.AS,
                                                    children: ee.intl.string(ee.t["7RFcXZ"]),
                                                }),
                                                (0, r.jsx)(p.VQ0.Item, {
                                                    id: X.zz.SPAM,
                                                    className: et.AS,
                                                    children:
                                                        0 === s
                                                            ? ee.intl.string(ee.t.ulKXHp)
                                                            : ee.intl.formatToPlainString(ee.t["5jtrlZ"], { count: s }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: en.Qs,
                            children: (0, r.jsx)(eo, { section: y }),
                        }),
                    ],
                }),
                m &&
                    (0, r.jsx)(ea, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            d(t);
                        },
                    }),
            ],
        })
    );
});
