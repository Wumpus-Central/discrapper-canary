n.r(t), n.d(t, { default: () => em });
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(837381),
    c = n(731738),
    d = n(311907),
    o = n(554146),
    u = n(265486),
    A = n(691540),
    h = n(857250),
    m = n(97483),
    g = n(834730),
    x = n(123292),
    S = n(475825),
    E = n(192308),
    f = n(43990),
    _ = n(849516),
    b = n(761508),
    j = n(944791),
    p = n(456412),
    v = n(964486),
    C = n(260762),
    I = n(812771),
    N = n(869248),
    R = n(485947),
    M = n(726249),
    k = n(367727),
    y = n(379848),
    G = n(742589),
    T = n(831062),
    P = n(378570),
    L = n(138298),
    z = n(940382),
    w = n(210714),
    U = n(544028),
    W = n(780964),
    Q = n(858897),
    F = n(761640),
    H = n(734057),
    O = n(186111),
    D = n(954571),
    q = n(891024),
    V = n(321404),
    K = n(15978),
    B = n(643015),
    Z = n(336590),
    $ = n(471271),
    X = n(957283),
    J = n(411976),
    Y = n(62112),
    ee = n(790499),
    et = n(514426),
    en = n(660564),
    es = n(4270),
    el = n(687599),
    ea = n(652215),
    ei = n(49999),
    er = n(985018),
    ec = n(16123),
    ed = n(362556);
function eo() {
    let e = l.useRef(null),
        t = (0, J.W)(),
        n = (0, Y.A)(),
        a = (0, Z.k)(),
        d = (0, K.w)(),
        o = l.useCallback(() => {
            (0, A.P0)((0, h.o)(er.intl.string(er.t["EDYbS+"]), m.Ck.FAILURE));
        }, []),
        { rejectAll: u } = (0, $.t)({ onError: o }),
        E = (0, C.A)("message-requests-list"),
        { channelId: f } = (0, X.N)(),
        _ = l.useCallback(() => {
            u(n.map((e) => e.channel.id));
        }, [n, u]),
        b = l.useCallback(
            (e) => {
                let { row: t } = e,
                    l = n[t],
                    r = n[t + 1]?.channel?.id,
                    c = l.channel.id;
                return (0, s.jsx)(
                    en.A,
                    {
                        index: t,
                        className: i()({ [ec.wH]: null != f && f === c, [ec.wZ]: null != f && f === r }),
                        channel: l.channel,
                        user: l.user,
                        hasSingleMessageRequest: a,
                    },
                    c,
                );
            },
            [a, n, f],
        ),
        j = l.useCallback(
            () =>
                (0, s.jsxs)(
                    R.A,
                    {
                        className: ec.Gf,
                        children: [
                            t > 0
                                ? er.intl.formatToPlainString(er.t.rA4iWY, { count: t })
                                : er.intl.string(er.t.flPU6g),
                            d && t > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: ec.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, s.jsx)(x.Q, {
                                              onClick: _,
                                              textVariant: "text-sm/normal",
                                              text: er.intl.string(er.t.p6t7RC),
                                              "aria-label": er.intl.string(er.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [t, _, d],
        );
    return (n.length !== t && T.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, s.jsx)(et.A, { section: el.zz.REQUESTS })
        : (0, s.jsx)(r.hD, {
              navigator: E,
              children: (0, s.jsx)(r.PR, {
                  children: (t) => {
                      let { ref: l, role: a, ...i } = t;
                      return (0, s.jsx)(
                          S.OZ,
                          {
                              className: ec.p_,
                              innerRole: a,
                              innerAriaLabel: er.intl.string(er.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (l.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: j,
                              renderRow: b,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...i,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function eu(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        l = (0, d.bG)([F.Ay], () => F.Ay.getSidebarState(F.fe)),
        a = (0, d.bG)([H.A], () => H.A.getChannel(l?.channelId));
    if (null == l || l.type !== z.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let i = t - ea.ItT;
    return (0, s.jsx)(I.A, {
        sidebarType: I.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: n,
        children: (0, s.jsx)(N.A, { channel: a, baseChannelId: F.fe }),
    });
}
let eA = (e) => {
    let t = (0, B.A)();
    return (l.useEffect(() => {
        (0, k.Vh)(o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || O.A.hasLayers() || (0, E.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(y.Ay, {
              contentTypes: [o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: l, markAsDismissed: a } = n,
                      i = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => a(ei.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return l === o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, s.jsx)(u.A, {
                                          ...i,
                                          title: er.intl.string(er.t.hRT8tc),
                                          body: er.intl.string(er.t.apPgJG),
                                          actions: [
                                              { text: er.intl.string(er.t.LNoAQW), onClick: () => a(ei.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, s.jsx)(u.A, {
                                          ...i,
                                          title: er.intl.string(er.t.hRT8tc),
                                          body: er.intl.string(er.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: er.intl.string(er.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, Q.openUserSettings)(
                                                              W.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          a(ei.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: er.intl.string(er.t.LNoAQW),
                                                  onClick: () => a(ei.i.USER_DISMISS),
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
function eh(e) {
    let { section: t } = e;
    return t === el.zz.SPAM ? (0, s.jsx)(es.A, {}) : (0, s.jsx)(eo, {});
}
let em = (0, p.A)(function (e) {
    let { width: t } = e,
        n = (0, J.W)();
    (0, v.Ay)(() => {
        j.I(ea.BVt.MESSAGE_REQUESTS),
            (0, w.d)("message-requests"),
            D.default.track(ea.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            T.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, d.bG)([U.A], () => U.A.theme),
        r = (0, ee.I)(),
        [o, u] = l.useState(!1),
        A = (0, d.bG)([F.Ay], () => {
            let e = F.Ay.getSidebarState(F.fe);
            return null != e && e.type === z.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        h = A?.channelId,
        m = null != A,
        g = (0, V.c)(h),
        x = (0, q.A)(h),
        S = l.useRef(null);
    l.useEffect(() => {
        null != h && !g && x && m && ((0, P.iN)(h), L.A.closeChannelSidebar(F.fe));
    }, [h, x, m, g]);
    let [E, p] = l.useState(el.zz.REQUESTS),
        C = (e) => {
            p(e);
        };
    return (
        (0, M.HU)({ location: er.intl.string(er.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: i()(ed.TE, ec.kL, { [ed.js]: m, [ed.jl]: m && o }),
                    children: [
                        (0, s.jsx)(f.N, {
                            theme: a,
                            children: (e) =>
                                (0, s.jsxs)(G.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(G.A.Icon, { icon: _.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(eA, {
                                            targetElementRef: S,
                                            children: (0, s.jsx)(G.A.Title, {
                                                ref: S,
                                                children: er.intl.string(er.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(G.A.Divider, {}),
                                        (0, s.jsxs)(b.V, {
                                            "aria-label": er.intl.string(er.t.e7GWjQ),
                                            selectedItem: E,
                                            type: "top-pill",
                                            onItemSelect: C,
                                            children: [
                                                (0, s.jsx)(b.V.Item, {
                                                    id: el.zz.REQUESTS,
                                                    className: ec.AS,
                                                    children: er.intl.string(er.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(b.V.Item, {
                                                    id: el.zz.SPAM,
                                                    className: ec.AS,
                                                    children:
                                                        0 === r
                                                            ? er.intl.string(er.t.ulKXHp)
                                                            : er.intl.formatToPlainString(er.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, s.jsx)("div", { className: ed.Qs, children: (0, s.jsx)(eh, { section: E }) }),
                    ],
                }),
                m &&
                    (0, s.jsx)(eu, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
