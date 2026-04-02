n.d(t, { A: () => el });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(837381),
    o = n(731738),
    d = n(311907),
    c = n(554146),
    u = n(342494),
    A = n(397927),
    h = n(944791),
    _ = n(456412),
    m = n(964486),
    p = n(260762),
    g = n(812771),
    E = n(869248),
    I = n(485947),
    f = n(726249),
    C = n(367727),
    T = n(379848),
    N = n(742589),
    S = n(831062),
    x = n(378570),
    v = n(138298),
    b = n(940382),
    y = n(210714),
    O = n(544028),
    L = n(780964),
    R = n(858897),
    P = n(761640),
    D = n(734057),
    M = n(186111),
    j = n(954571),
    w = n(891024),
    U = n(321404),
    G = n(15978),
    k = n(643015),
    V = n(336590),
    B = n(471271),
    H = n(957283),
    F = n(411976),
    Y = n(62112),
    W = n(790499),
    K = n(514426),
    q = n(660564),
    z = n(4270),
    $ = n(687599),
    Q = n(652215),
    X = n(49999),
    Z = n(985018),
    J = n(2219),
    ee = n(358943);
function et() {
    let e = a.useRef(null),
        t = (0, F.W)(),
        n = (0, Y.A)(),
        l = (0, V.k)(),
        d = (0, G.w)(),
        c = a.useCallback(() => {
            (0, A.showToast)((0, A.createToast)(Z.intl.string(Z.t["EDYbS+"]), A.ToastType.FAILURE));
        }, []),
        { rejectAll: u } = (0, B.t)({ onError: c }),
        h = (0, p.A)("message-requests-list"),
        { channelId: _ } = (0, H.N)(),
        m = a.useCallback(() => {
            u(n.map((e) => e.channel.id));
        }, [n, u]),
        g = a.useCallback(
            (e) => {
                let { row: t } = e,
                    a = n[t],
                    s = n[t + 1]?.channel?.id,
                    o = a.channel.id;
                return (0, i.jsx)(
                    q.A,
                    {
                        index: t,
                        className: r()({ [J.wH]: null != _ && _ === o, [J.wZ]: null != _ && _ === s }),
                        channel: a.channel,
                        user: a.user,
                        hasSingleMessageRequest: l,
                    },
                    o,
                );
            },
            [l, n, _],
        ),
        E = a.useCallback(
            () =>
                (0, i.jsxs)(
                    I.A,
                    {
                        className: J.Gf,
                        children: [
                            t > 0 ? Z.intl.formatToPlainString(Z.t.rA4iWY, { count: t }) : Z.intl.string(Z.t.flPU6g),
                            d && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(A.Text, {
                                              className: J.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, i.jsx)(A.QWc, {
                                              onClick: m,
                                              textVariant: "text-sm/normal",
                                              text: Z.intl.string(Z.t.p6t7RC),
                                              "aria-label": Z.intl.string(Z.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [t, m, d],
        );
    return (n.length !== t && S.A.increment({ name: o.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(K.A, { section: $.zz.REQUESTS })
        : (0, i.jsx)(s.hD, {
              navigator: h,
              children: (0, i.jsx)(s.PR, {
                  children: (t) => {
                      let { ref: a, role: l, ...r } = t;
                      return (0, i.jsx)(
                          A.B8B,
                          {
                              className: J.p_,
                              innerRole: l,
                              innerAriaLabel: Z.intl.string(Z.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (a.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: E,
                              renderRow: g,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...r,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function en(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        a = (0, d.bG)([P.Ay], () => P.Ay.getSidebarState(P.fe)),
        l = (0, d.bG)([D.A], () => D.A.getChannel(a?.channelId));
    if (null == a || a.type !== b.PE.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let r = t - Q.ItT;
    return (0, i.jsx)(g.A, {
        sidebarType: g.X.MessageRequestSidebar,
        maxWidth: r,
        onWidthChange: n,
        children: (0, i.jsx)(E.A, { channel: l, baseChannelId: P.fe }),
    });
}
let ei = (e) => {
    let t = (0, k.A)();
    return (a.useEffect(() => {
        (0, C.Vh)(c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || M.A.hasLayers() || (0, A.ueM)())
        ? e.children
        : (0, i.jsx)(T.Ay, {
              contentTypes: [c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: a, markAsDismissed: l } = n,
                      r = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => l(X.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return a === c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, i.jsx)(u.AM, {
                                          ...r,
                                          title: Z.intl.string(Z.t.hRT8tc),
                                          body: Z.intl.string(Z.t.apPgJG),
                                          actions: [
                                              { text: Z.intl.string(Z.t.LNoAQW), onClick: () => l(X.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, i.jsx)(u.AM, {
                                          ...r,
                                          title: Z.intl.string(Z.t.hRT8tc),
                                          body: Z.intl.string(Z.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: Z.intl.string(Z.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, R.openUserSettings)(
                                                              L.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          l(X.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: Z.intl.string(Z.t.LNoAQW),
                                                  onClick: () => l(X.i.USER_DISMISS),
                                                  variant: "secondary",
                                              },
                                          ],
                                      }),
                            ],
                        })
                      : e.children;
              },
          });
};
function ea(e) {
    let { section: t } = e;
    return t === $.zz.SPAM ? (0, i.jsx)(z.A, {}) : (0, i.jsx)(et, {});
}
let el = (0, _.A)(function (e) {
    let { width: t } = e,
        n = (0, F.W)();
    (0, m.Ay)(() => {
        h.I(Q.BVt.MESSAGE_REQUESTS),
            (0, y.d)("message-requests"),
            j.default.track(Q.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            S.A.increment({ name: o.K.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, d.bG)([O.A], () => O.A.theme),
        s = (0, W.I)(),
        [c, u] = a.useState(!1),
        _ = (0, d.bG)([P.Ay], () => {
            let e = P.Ay.getSidebarState(P.fe);
            return null != e && e.type === b.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        p = _?.channelId,
        g = null != _,
        E = (0, U.c)(p),
        I = (0, w.A)(p),
        C = a.useRef(null);
    a.useEffect(() => {
        null != p && !E && I && g && ((0, x.iN)(p), v.A.closeChannelSidebar(P.fe));
    }, [p, I, g, E]);
    let [T, L] = a.useState($.zz.REQUESTS),
        R = (e) => {
            L(e);
        };
    return (
        (0, f.HU)({ location: Z.intl.string(Z.t.e7GWjQ) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: r()(ee.TE, J.kL, { [ee.js]: g, [ee.jl]: g && c }),
                    children: [
                        (0, i.jsx)(A.NPJ, {
                            theme: l,
                            children: (e) =>
                                (0, i.jsxs)(N.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(N.A.Icon, { icon: A.u6c, "aria-hidden": !0 }),
                                        (0, i.jsx)(ei, {
                                            targetElementRef: C,
                                            children: (0, i.jsx)(N.A.Title, {
                                                ref: C,
                                                children: Z.intl.string(Z.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, i.jsx)(N.A.Divider, {}),
                                        (0, i.jsxs)(A.VQ0, {
                                            "aria-label": Z.intl.string(Z.t.e7GWjQ),
                                            selectedItem: T,
                                            type: "top-pill",
                                            onItemSelect: R,
                                            children: [
                                                (0, i.jsx)(A.VQ0.Item, {
                                                    id: $.zz.REQUESTS,
                                                    className: J.AS,
                                                    children: Z.intl.string(Z.t["7RFcXZ"]),
                                                }),
                                                (0, i.jsx)(A.VQ0.Item, {
                                                    id: $.zz.SPAM,
                                                    className: J.AS,
                                                    children:
                                                        0 === s
                                                            ? Z.intl.string(Z.t.ulKXHp)
                                                            : Z.intl.formatToPlainString(Z.t["5jtrlZ"], { count: s }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, i.jsx)("div", { className: ee.Qs, children: (0, i.jsx)(ea, { section: T }) }),
                    ],
                }),
                g &&
                    (0, i.jsx)(en, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
