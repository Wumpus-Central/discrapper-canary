n.d(t, { A: () => F });
var s = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    c = n.n(r),
    d = n(17928),
    u = n(364840),
    C = n(821609),
    o = n(862482),
    m = n(109802),
    L = n(452027),
    g = n(778712),
    h = n(297264),
    M = n(289873),
    H = n(783878),
    x = n(398590),
    E = n(717398),
    p = n(966327),
    f = n(769015),
    N = n(242874),
    _ = n(380619),
    A = n(219271),
    I = n(427358),
    v = n(7133),
    j = n(994500),
    T = n(351906),
    R = n(287809),
    P = n(957565),
    U = n(45938),
    k = n(428262),
    Z = n(427262),
    b = n(951305),
    w = n(482132),
    D = n(652215),
    O = n(202541),
    S = n(375708),
    y = n(340188);
function F(e) {
    let {
            giftCode: t,
            application: n,
            sku: i,
            subscriptionPlan: r,
            selectedGiftStyle: c,
            onClose: H,
            hasSentMessage: E,
            giftRecipient: N,
            giftMessageError: A,
            isSendingMessage: I,
        } = e,
        [j, R] = l.useState(m.e.Modes.DEFAULT),
        F = (0, d.bG)([T.A], () => T.A.enabled),
        W = E || (null != c && null != N),
        K = i?.productLine === D.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionReward: Q,
            openGiftingBadgePostPurchaseModal: q,
            canShowGiftingBadgePostPurchase: B,
        } = (0, b.Pv)(),
        z = (0, _.Mq)(r),
        X = B && null == Q,
        V = () => (null != r ? r.skuId : null != i ? i.id : null),
        $ = () => {
            let e;
            return null != A
                ? S.intl.string(S.t.qB8aya)
                : null == r
                  ? null
                  : ((e =
                        r.interval === O.WT.MONTH ? (W ? S.t["4ZJ+7Z"] : S.t["P+z55d"]) : W ? S.t.p0pZXP : S.t.bXqk3o),
                    S.intl.format(e, { skuName: (0, k.RH)(r.id), intervalCount: r.intervalCount }));
        };
    return I
        ? (0, s.jsxs)("div", {
              className: y.EL,
              children: [
                  null != n
                      ? (0, s.jsx)(f.A, { game: n, className: y.__invalid_icon, size: f.M.LARGE, skuId: V() })
                      : null,
                  (0, s.jsx)(M.y, { type: M.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: a()(y.EL, { [y.L1]: z && null != Q }),
                      children: [
                          null != n
                              ? (0, s.jsx)(f.A, { game: n, className: y.__invalid_icon, size: f.M.LARGE, skuId: V() })
                              : null,
                          (0, s.jsx)(h.D, {
                              variant: "heading-lg/semibold",
                              className: a()({ [y.wx]: null == c && !K, [y.$A]: null != c && !K }),
                              children:
                                  null != N || (E && null == A)
                                      ? S.intl.string(S.t.zOmK9N)
                                      : null != A
                                        ? S.intl.string(S.t.d1lrmU)
                                        : S.intl.string(S.t["/s1xR7"]),
                          }),
                          (E && null != N && null == A) || W
                              ? (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: y.jx,
                                            children: [
                                                (0, s.jsx)(p.A, { user: N, size: g._3.SIZE_40 }),
                                                (0, s.jsxs)("div", {
                                                    className: y.gn,
                                                    children: [
                                                        (0, s.jsx)(h.D, {
                                                            variant: "heading-md/semibold",
                                                            children: Z.Ay.getName(N),
                                                        }),
                                                        (0, s.jsxs)("div", {
                                                            className: y.Ik,
                                                            children: [" ", Z.Ay.getUserTag(N)],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)("div", { className: y._c, children: $() }),
                                    ],
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)("div", { className: y.I0, children: $() }),
                                        null == A &&
                                            (0, s.jsx)(G, {
                                                giftCode: t,
                                                onClose: () => {
                                                    H(), (0, x.bz)(), X && q();
                                                },
                                            }),
                                        (0, s.jsx)("div", { className: y.yF }),
                                        (() => {
                                            let e;
                                            if (null == t) return null;
                                            switch (j) {
                                                case m.e.Modes.SUCCESS:
                                                    e = S.intl.string(S.t.XVvPjU);
                                                    break;
                                                case m.e.Modes.ERROR:
                                                    e = S.intl.string(S.t.i4GM3L);
                                                    break;
                                                default:
                                                    e = S.intl.string(S.t.OpuAlK);
                                            }
                                            return (0, s.jsxs)("div", {
                                                className: y.PN,
                                                children: [
                                                    null != t &&
                                                        (0, s.jsx)(L.D, {
                                                            label: S.intl.string(S.t["/dG4NA"]),
                                                            children: (0, s.jsx)(m.e, {
                                                                hideMessage: F ? S.intl.string(S.t["0RLn47"]) : null,
                                                                value: (0, U.Zq)(t),
                                                                mode: j,
                                                                text: e,
                                                                onCopy: (e) => {
                                                                    null != i &&
                                                                        (0, U.AK)(new v.A({ code: t, maxUses: 1 }), i),
                                                                        (0, P.C)(
                                                                            e,
                                                                            () => R(m.e.Modes.SUCCESS),
                                                                            () => R(m.e.Modes.ERROR),
                                                                        ),
                                                                        setTimeout(() => {
                                                                            R(m.e.Modes.DEFAULT);
                                                                        }, 1500);
                                                                },
                                                                supportsCopy: P.p5,
                                                                className: y.__invalid_copyInput,
                                                                buttonColor: o.XD.LINK,
                                                                buttonLook: o.pR.LINK,
                                                            }),
                                                        }),
                                                    (0, s.jsx)("div", {
                                                        className: y.W$,
                                                        children: S.intl.string(S.t.QWKUpn),
                                                    }),
                                                ],
                                            });
                                        })(),
                                    ],
                                }),
                      ],
                  }),
                  X &&
                      (0, s.jsx)(w.UX, {
                          children: (0, s.jsx)(u.j, {
                              children: (0, s.jsx)("div", {
                                  className: y.pP,
                                  children: (0, s.jsx)(C.$, {
                                      variant: "primary",
                                      fullWidth: !0,
                                      text: S.intl.string(S.t.PDTjLN),
                                      onClick: () => {
                                          H(), q();
                                      },
                                  }),
                              }),
                          }),
                      }),
              ],
          });
}
function G(e) {
    let { giftCode: t, onClose: n } = e;
    l.useEffect(() => {
        E.A.fetchRelationships(), (0, A.u)();
    }, []);
    let [i, a] = l.useState(),
        [r, u] = l.useState(!1),
        [o, m] = l.useState(!1),
        { userAffinities: L, isLoading: h } = (0, d.cf)([I.A], () => ({
            userAffinities: I.A.getUserAffinitiesMap(),
            isLoading: I.A.isFetching(),
        })),
        M = Array.from(L.keys()).sort((e, t) => I.A.compare(e, t)),
        x = (0, d.bG)([j.A], () => j.A.getFriendIDs()),
        f = c().difference(x, M),
        _ = [...M, ...f],
        v = (0, d.bG)([R.default], () => R.default.filter((e) => _.includes(e.id) && !e.bot), [_]);
    if (null == v || 0 === v.length) return null;
    let T = c().sortBy(v, (e) => _.indexOf(e.id));
    return (0, s.jsxs)("div", {
        className: y.vt,
        children: [
            (0, s.jsxs)("div", {
                className: y.AQ,
                children: [
                    (0, s.jsx)(H.Z, {
                        selectionMode: "single",
                        label: S.intl.string(S.t.MJw05f),
                        placeholder: S.intl.string(S.t.J019jZ),
                        loading: h,
                        value: i,
                        onSelectionChange: (e) => {
                            a(e), u(!1);
                        },
                        options: T.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${Z.Ay.getUserTag(e)}`,
                            leading: (0, s.jsx)(p.A, { user: e, size: g._3.SIZE_20 }),
                        })),
                    }),
                    (0, s.jsx)("div", {
                        className: y.Qg,
                        children: (0, s.jsx)(C.$, {
                            disabled: null == i,
                            loading: o,
                            onClick: () => {
                                m(!0),
                                    (0, N.UN)(i, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            u(!0), m(!1);
                                        });
                            },
                            text: S.intl.string(S.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: r ? y.Sc : y.W$,
                children: r ? S.intl.string(S.t.jo5Vbl) : S.intl.string(S.t["8/N3v3"]),
            }),
        ],
    });
}
