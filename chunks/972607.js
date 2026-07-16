n.d(t, { A: () => H });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(17928),
    c = n(364840),
    d = n(821609),
    p = n(862482),
    m = n(109802),
    C = n(452027),
    h = n(778712),
    E = n(297264),
    f = n(289873),
    A = n(783878),
    y = n(398590),
    S = n(717398),
    P = n(966327),
    I = n(769015),
    _ = n(242874),
    T = n(380619),
    g = n(219271),
    x = n(427358),
    v = n(7133),
    N = n(994500),
    M = n(351906),
    R = n(287809),
    b = n(957565),
    j = n(45938),
    O = n(428262),
    L = n(427262),
    w = n(951305),
    k = n(482132),
    D = n(652215),
    U = n(202541),
    G = n(375708),
    F = n(340188);
function H(e) {
    let {
            giftCode: t,
            application: n,
            sku: r,
            subscriptionPlan: s,
            selectedGiftStyle: o,
            onClose: A,
            hasSentMessage: S,
            giftRecipient: _,
            giftMessageError: g,
            isSendingMessage: x,
        } = e,
        [N, R] = i.useState(m.e.Modes.DEFAULT),
        H = (0, u.bG)([M.A], () => M.A.enabled),
        Y = S || (null != o && null != _),
        W = r?.productLine === D.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionReward: V,
            openGiftingBadgePostPurchaseModal: K,
            canShowGiftingBadgePostPurchase: Z,
        } = (0, w.Pv)(),
        q = (0, T.Mq)(s),
        z = Z && null == V;
    function Q() {
        return null != s ? s.skuId : null != r ? r.id : null;
    }
    function $() {
        let e;
        return null != g
            ? G.intl.string(G.t.qB8aya)
            : null == s
              ? null
              : ((e = s.interval === U.WT.MONTH ? (Y ? G.t["4ZJ+7Z"] : G.t["P+z55d"]) : Y ? G.t.p0pZXP : G.t.bXqk3o),
                G.intl.format(e, { skuName: (0, O.RH)(s.id), intervalCount: s.intervalCount }));
    }
    return x
        ? (0, l.jsxs)("div", {
              className: F.EL,
              children: [
                  null != n
                      ? (0, l.jsx)(I.A, { game: n, className: F.__invalid_icon, size: I.M.LARGE, skuId: Q() })
                      : null,
                  (0, l.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(F.EL, { [F.L1]: q && null != V }),
                      children: [
                          null != n
                              ? (0, l.jsx)(I.A, { game: n, className: F.__invalid_icon, size: I.M.LARGE, skuId: Q() })
                              : null,
                          (0, l.jsx)(E.D, {
                              variant: "heading-lg/semibold",
                              className: a()({ [F.wx]: null == o && !W, [F.$A]: null != o && !W }),
                              children:
                                  null != _ || (S && null == g)
                                      ? G.intl.string(G.t.zOmK9N)
                                      : null != g
                                        ? G.intl.string(G.t.d1lrmU)
                                        : G.intl.string(G.t["/s1xR7"]),
                          }),
                          (S && null != _ && null == g) || Y
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: F.jx,
                                            children: [
                                                (0, l.jsx)(P.A, { user: _, size: h._3.SIZE_40 }),
                                                (0, l.jsxs)("div", {
                                                    className: F.gn,
                                                    children: [
                                                        (0, l.jsx)(E.D, {
                                                            variant: "heading-md/semibold",
                                                            children: L.Ay.getName(_),
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className: F.Ik,
                                                            children: [" ", L.Ay.getUserTag(_)],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)("div", { className: F._c, children: $() }),
                                    ],
                                })
                              : (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)("div", { className: F.I0, children: $() }),
                                        null == g &&
                                            (0, l.jsx)(B, {
                                                giftCode: t,
                                                onClose: () => {
                                                    A(), (0, y.bz)(), z && K();
                                                },
                                            }),
                                        (0, l.jsx)("div", { className: F.yF }),
                                        (function () {
                                            let e;
                                            if (null == t) return null;
                                            switch (N) {
                                                case m.e.Modes.SUCCESS:
                                                    e = G.intl.string(G.t.XVvPjU);
                                                    break;
                                                case m.e.Modes.ERROR:
                                                    e = G.intl.string(G.t.i4GM3L);
                                                    break;
                                                default:
                                                    e = G.intl.string(G.t.OpuAlK);
                                            }
                                            return (0, l.jsxs)("div", {
                                                className: F.PN,
                                                children: [
                                                    null != t &&
                                                        (0, l.jsx)(C.D, {
                                                            label: G.intl.string(G.t["/dG4NA"]),
                                                            children: (0, l.jsx)(m.e, {
                                                                hideMessage: H ? G.intl.string(G.t["0RLn47"]) : null,
                                                                value: (0, j.Zq)(t),
                                                                mode: N,
                                                                text: e,
                                                                onCopy: (e) => {
                                                                    null != r &&
                                                                        (0, j.AK)(new v.A({ code: t, maxUses: 1 }), r),
                                                                        (0, b.C)(
                                                                            e,
                                                                            () => R(m.e.Modes.SUCCESS),
                                                                            () => R(m.e.Modes.ERROR),
                                                                        ),
                                                                        setTimeout(() => {
                                                                            R(m.e.Modes.DEFAULT);
                                                                        }, 1500);
                                                                },
                                                                supportsCopy: b.p5,
                                                                className: F.__invalid_copyInput,
                                                                buttonColor: p.XD.LINK,
                                                                buttonLook: p.pR.LINK,
                                                            }),
                                                        }),
                                                    (0, l.jsx)("div", {
                                                        className: F.W$,
                                                        children: G.intl.string(G.t.QWKUpn),
                                                    }),
                                                ],
                                            });
                                        })(),
                                    ],
                                }),
                      ],
                  }),
                  z &&
                      (0, l.jsx)(k.UX, {
                          children: (0, l.jsx)(c.j, {
                              children: (0, l.jsx)("div", {
                                  className: F.pP,
                                  children: (0, l.jsx)(d.$, {
                                      variant: "primary",
                                      fullWidth: !0,
                                      text: G.intl.string(G.t.PDTjLN),
                                      onClick: () => {
                                          A(), K();
                                      },
                                  }),
                              }),
                          }),
                      }),
              ],
          });
}
function B(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        S.A.fetchRelationships(), (0, g.u)();
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [p, m] = i.useState(!1),
        { userAffinities: C, isLoading: E } = (0, u.cf)([x.A], () => ({
            userAffinities: x.A.getUserAffinitiesMap(),
            isLoading: x.A.isFetching(),
        })),
        f = Array.from(C.keys()).sort((e, t) => x.A.compare(e, t)),
        y = (0, u.bG)([N.A], () => N.A.getFriendIDs()),
        I = o().difference(y, f),
        T = [...f, ...I],
        v = (0, u.bG)([R.default], () => R.default.filter((e) => T.includes(e.id) && !e.bot), [T]);
    if (null == v || 0 === v.length) return null;
    let M = o().sortBy(v, (e) => T.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: F.vt,
        children: [
            (0, l.jsxs)("div", {
                className: F.AQ,
                children: [
                    (0, l.jsx)(A.Z, {
                        selectionMode: "single",
                        label: G.intl.string(G.t.MJw05f),
                        placeholder: G.intl.string(G.t.J019jZ),
                        loading: E,
                        value: r,
                        onSelectionChange: (e) => {
                            a(e), c(!1);
                        },
                        options: M.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${L.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(P.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: F.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == r,
                            loading: p,
                            onClick: () => {
                                m(!0),
                                    (0, _.UN)(r, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            c(!0), m(!1);
                                        });
                            },
                            text: G.intl.string(G.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? F.Sc : F.W$,
                children: s ? G.intl.string(G.t.jo5Vbl) : G.intl.string(G.t["8/N3v3"]),
            }),
        ],
    });
}
