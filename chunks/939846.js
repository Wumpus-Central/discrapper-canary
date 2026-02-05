n.d(t, { A: () => es });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(731738),
    d = n(311907),
    c = n(554146),
    u = n(342494),
    A = n(397927),
    h = n(944791),
    _ = n(456412),
    m = n(55400),
    p = n(964486),
    g = n(260762),
    E = n(812771),
    f = n(869248),
    I = n(485947),
    C = n(726249),
    N = n(367727),
    T = n(379848),
    S = n(742589),
    x = n(831062),
    v = n(378570),
    b = n(138298),
    y = n(940382),
    L = n(210714),
    O = n(544028),
    R = n(780964),
    P = n(358776),
    j = n(840065),
    D = n(761640),
    w = n(734057),
    M = n(186111),
    U = n(954571),
    G = n(891024),
    k = n(321404),
    V = n(643015),
    B = n(336590),
    H = n(471271),
    F = n(957283),
    Y = n(411976),
    W = n(62112),
    q = n(790499),
    z = n(514426),
    K = n(660564),
    $ = n(4270),
    Q = n(687599),
    X = n(652215),
    Z = n(49999),
    J = n(355097),
    ee = n(985018),
    et = n(443416),
    en = n(638990);
function ei() {
    let e = r.useRef(null),
        t = (0, Y.W)(),
        n = (0, W.A)(),
        a = (0, B.k)(),
        d = (0, m.w)(),
        c = r.useCallback(() => {
            (0, A.showToast)((0, A.createToast)(ee.intl.string(ee.t["EDYbS+"]), A.ToastType.FAILURE));
        }, []),
        { rejectAll: u } = (0, H.t)({ onError: c }),
        h = (0, g.A)("message-requests-list"),
        { channelId: _ } = (0, F.N)(),
        p = r.useCallback(() => {
            u(n.map((e) => e.channel.id));
        }, [n, u]),
        E = r.useCallback(
            (e) => {
                let { row: t } = e,
                    r = n[t],
                    s = n[t + 1]?.channel?.id,
                    o = r.channel.id;
                return (0, i.jsx)(
                    K.A,
                    {
                        index: t,
                        className: l()({ [et.wH]: null != _ && _ === o, [et.wZ]: null != _ && _ === s }),
                        channel: r.channel,
                        user: r.user,
                        hasSingleMessageRequest: a,
                    },
                    o,
                );
            },
            [a, n, _],
        ),
        f = r.useCallback(
            () =>
                (0, i.jsxs)(
                    I.A,
                    {
                        className: et.Gf,
                        children: [
                            t > 0
                                ? ee.intl.formatToPlainString(ee.t.rA4iWY, { count: t })
                                : ee.intl.string(ee.t.flPU6g),
                            d && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(A.Text, {
                                              className: et.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, i.jsx)(A.QWc, {
                                              onClick: p,
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
            [t, p, d],
        );
    return (n.length !== t && x.A.increment({ name: o.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(z.A, { section: Q.zz.REQUESTS })
        : (0, i.jsx)(s.hD, {
              navigator: h,
              children: (0, i.jsx)(s.PR, {
                  children: (t) => {
                      let { ref: r, role: a, ...l } = t;
                      return (0, i.jsx)(
                          A.B8B,
                          {
                              className: et.p_,
                              innerRole: a,
                              innerAriaLabel: ee.intl.string(ee.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (r.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: f,
                              renderRow: E,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...l,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function er(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        r = (0, d.bG)([D.Ay], () => D.Ay.getSidebarState(D.fe)),
        a = (0, d.bG)([w.A], () => w.A.getChannel(r?.channelId));
    if (null == r || r.type !== y.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let l = t - X.ItT;
    return (0, i.jsx)(E.A, {
        sidebarType: E.X.MessageRequestSidebar,
        maxWidth: l,
        onWidthChange: n,
        children: (0, i.jsx)(f.A, { channel: a, baseChannelId: D.fe }),
    });
}
let ea = (e) => {
    let t = (0, V.A)();
    return (r.useEffect(() => {
        (0, N.Vh)(c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || M.A.hasLayers() || (0, A.ueM)())
        ? e.children
        : (0, i.jsx)(T.Ay, {
              contentTypes: [c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: r, markAsDismissed: a } = n,
                      l = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => a(Z.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return r === c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, i.jsx)(u.AM, {
                                          ...l,
                                          title: ee.intl.string(ee.t.hRT8tc),
                                          body: ee.intl.string(ee.t.apPgJG),
                                          actions: [
                                              { text: ee.intl.string(ee.t.LNoAQW), onClick: () => a(Z.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, i.jsx)(u.AM, {
                                          ...l,
                                          title: ee.intl.string(ee.t.hRT8tc),
                                          body: ee.intl.string(ee.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: ee.intl.string(ee.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation();
                                                      let t = (0, P.WJ)("MessageRequestCoachmark");
                                                      (0, j.openUserSettings)(
                                                          t
                                                              ? R.X
                                                                    .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING
                                                              : R.X.CONTENT_AND_SOCIAL_PANEL,
                                                          {
                                                              section: X.nc_.CONTENT_AND_SOCIAL,
                                                              scrollPosition: t ? void 0 : J.d1.MESSAGE_REQUESTS_V2,
                                                          },
                                                      ),
                                                          a(Z.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: ee.intl.string(ee.t.LNoAQW),
                                                  onClick: () => a(Z.i.USER_DISMISS),
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
function el(e) {
    let { section: t } = e;
    return t === Q.zz.SPAM ? (0, i.jsx)($.A, {}) : (0, i.jsx)(ei, {});
}
let es = (0, _.A)(function (e) {
    let { width: t } = e,
        n = (0, Y.W)();
    (0, p.Ay)(() => {
        h.I(X.BVt.MESSAGE_REQUESTS),
            (0, L.d)("message-requests"),
            U.default.track(X.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            x.A.increment({ name: o.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, d.bG)([O.A], () => O.A.theme),
        s = (0, q.I)(),
        [c, u] = r.useState(!1),
        _ = (0, d.bG)([D.Ay], () => {
            let e = D.Ay.getSidebarState(D.fe);
            return null != e && e.type === y.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = _?.channelId,
        g = null != _,
        E = (0, k.c)(m),
        f = (0, G.A)(m),
        I = r.useRef(null);
    r.useEffect(() => {
        null != m && !E && f && g && ((0, v.iN)(m), b.A.closeChannelSidebar(D.fe));
    }, [m, f, g, E]);
    let [N, T] = r.useState(Q.zz.REQUESTS),
        R = (e) => {
            T(e);
        };
    return (
        (0, C.HU)({ location: ee.intl.string(ee.t.e7GWjQ) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: l()(en.TE, et.kL, { [en.js]: g, [en.jl]: g && c }),
                    children: [
                        (0, i.jsx)(A.NPJ, {
                            theme: a,
                            children: (e) =>
                                (0, i.jsxs)(S.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(S.A.Icon, { icon: A.u6c, "aria-hidden": !0 }),
                                        (0, i.jsx)(ea, {
                                            targetElementRef: I,
                                            children: (0, i.jsx)(S.A.Title, {
                                                ref: I,
                                                children: ee.intl.string(ee.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, i.jsx)(S.A.Divider, {}),
                                        (0, i.jsxs)(A.VQ0, {
                                            "aria-label": ee.intl.string(ee.t.e7GWjQ),
                                            selectedItem: N,
                                            type: "top-pill",
                                            onItemSelect: R,
                                            children: [
                                                (0, i.jsx)(A.VQ0.Item, {
                                                    id: Q.zz.REQUESTS,
                                                    className: et.AS,
                                                    children: ee.intl.string(ee.t["7RFcXZ"]),
                                                }),
                                                (0, i.jsx)(A.VQ0.Item, {
                                                    id: Q.zz.SPAM,
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
                        (0, i.jsx)("div", { className: en.Qs, children: (0, i.jsx)(el, { section: N }) }),
                    ],
                }),
                g &&
                    (0, i.jsx)(er, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
