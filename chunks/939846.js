n.d(t, { A: () => el });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(731738),
    d = n(311907),
    c = n(554146),
    u = n(342494),
    A = n(397927),
    h = n(944791),
    _ = n(456412),
    m = n(55400),
    g = n(964486),
    p = n(260762),
    E = n(812771),
    I = n(869248),
    f = n(485947),
    C = n(726249),
    T = n(367727),
    N = n(379848),
    S = n(742589),
    x = n(831062),
    v = n(378570),
    y = n(138298),
    b = n(940382),
    O = n(210714),
    L = n(544028),
    R = n(780964),
    P = n(840065),
    j = n(761640),
    D = n(734057),
    M = n(186111),
    w = n(954571),
    U = n(891024),
    G = n(321404),
    k = n(643015),
    V = n(336590),
    B = n(471271),
    H = n(957283),
    F = n(411976),
    Y = n(62112),
    W = n(790499),
    q = n(514426),
    K = n(660564),
    z = n(4270),
    $ = n(687599),
    Q = n(652215),
    X = n(49999),
    Z = n(985018),
    J = n(443416),
    ee = n(638990);
function et() {
    let e = r.useRef(null),
        t = (0, F.W)(),
        n = (0, Y.A)(),
        l = (0, V.k)(),
        d = (0, m.w)(),
        c = r.useCallback(() => {
            (0, A.showToast)((0, A.createToast)(Z.intl.string(Z.t["EDYbS+"]), A.ToastType.FAILURE));
        }, []),
        { rejectAll: u } = (0, B.t)({ onError: c }),
        h = (0, p.A)("message-requests-list"),
        { channelId: _ } = (0, H.N)(),
        g = r.useCallback(() => {
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
                        className: a()({ [J.wH]: null != _ && _ === o, [J.wZ]: null != _ && _ === s }),
                        channel: r.channel,
                        user: r.user,
                        hasSingleMessageRequest: l,
                    },
                    o,
                );
            },
            [l, n, _],
        ),
        I = r.useCallback(
            () =>
                (0, i.jsxs)(
                    f.A,
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
                                              onClick: g,
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
            [t, g, d],
        );
    return (n.length !== t && x.A.increment({ name: o.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(q.A, { section: $.zz.REQUESTS })
        : (0, i.jsx)(s.hD, {
              navigator: h,
              children: (0, i.jsx)(s.PR, {
                  children: (t) => {
                      let { ref: r, role: l, ...a } = t;
                      return (0, i.jsx)(
                          A.B8B,
                          {
                              className: J.p_,
                              innerRole: l,
                              innerAriaLabel: Z.intl.string(Z.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (r.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: I,
                              renderRow: E,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...a,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function en(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        r = (0, d.bG)([j.Ay], () => j.Ay.getSidebarState(j.fe)),
        l = (0, d.bG)([D.A], () => D.A.getChannel(r?.channelId));
    if (null == r || r.type !== b.PE.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Q.ItT;
    return (0, i.jsx)(E.A, {
        sidebarType: E.X.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, i.jsx)(I.A, { channel: l, baseChannelId: j.fe }),
    });
}
let ei = (e) => {
    let t = (0, k.A)();
    return (r.useEffect(() => {
        (0, T.Vh)(c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || M.A.hasLayers() || (0, A.ueM)())
        ? e.children
        : (0, i.jsx)(N.Ay, {
              contentTypes: [c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: r, markAsDismissed: l } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => l(X.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return r === c.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, i.jsx)(u.AM, {
                                          ...a,
                                          title: Z.intl.string(Z.t.hRT8tc),
                                          body: Z.intl.string(Z.t.apPgJG),
                                          actions: [
                                              { text: Z.intl.string(Z.t.LNoAQW), onClick: () => l(X.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, i.jsx)(u.AM, {
                                          ...a,
                                          title: Z.intl.string(Z.t.hRT8tc),
                                          body: Z.intl.string(Z.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: Z.intl.string(Z.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, P.openUserSettings)(
                                                              R.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                              { section: Q.nc_.CONTENT_AND_SOCIAL },
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
function er(e) {
    let { section: t } = e;
    return t === $.zz.SPAM ? (0, i.jsx)(z.A, {}) : (0, i.jsx)(et, {});
}
let el = (0, _.A)(function (e) {
    let { width: t } = e,
        n = (0, F.W)();
    (0, g.Ay)(() => {
        h.I(Q.BVt.MESSAGE_REQUESTS),
            (0, O.d)("message-requests"),
            w.default.track(Q.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            x.A.increment({ name: o.K.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, d.bG)([L.A], () => L.A.theme),
        s = (0, W.I)(),
        [c, u] = r.useState(!1),
        _ = (0, d.bG)([j.Ay], () => {
            let e = j.Ay.getSidebarState(j.fe);
            return null != e && e.type === b.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = _?.channelId,
        p = null != _,
        E = (0, G.c)(m),
        I = (0, U.A)(m),
        f = r.useRef(null);
    r.useEffect(() => {
        null != m && !E && I && p && ((0, v.iN)(m), y.A.closeChannelSidebar(j.fe));
    }, [m, I, p, E]);
    let [T, N] = r.useState($.zz.REQUESTS),
        R = (e) => {
            N(e);
        };
    return (
        (0, C.HU)({ location: Z.intl.string(Z.t.e7GWjQ) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: a()(ee.TE, J.kL, { [ee.js]: p, [ee.jl]: p && c }),
                    children: [
                        (0, i.jsx)(A.NPJ, {
                            theme: l,
                            children: (e) =>
                                (0, i.jsxs)(S.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(S.A.Icon, { icon: A.u6c, "aria-hidden": !0 }),
                                        (0, i.jsx)(ei, {
                                            targetElementRef: f,
                                            children: (0, i.jsx)(S.A.Title, {
                                                ref: f,
                                                children: Z.intl.string(Z.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, i.jsx)(S.A.Divider, {}),
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
                        (0, i.jsx)("div", { className: ee.Qs, children: (0, i.jsx)(er, { section: T }) }),
                    ],
                }),
                p &&
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
