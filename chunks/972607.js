n.d(t, { A: () => B });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(17928),
    c = n(364840),
    d = n(821609),
    p = n(862482),
    m = n(109802),
    h = n(452027),
    C = n(778712),
    f = n(297264),
    E = n(289873),
    S = n(783878),
    y = n(398590),
    A = n(717398),
    P = n(966327),
    I = n(769015),
    g = n(242874),
    v = n(580194),
    _ = n(219271),
    T = n(427358),
    x = n(7133),
    N = n(994500),
    b = n(351906),
    R = n(287809),
    j = n(957565),
    M = n(45938),
    O = n(158045),
    L = n(427262),
    k = n(951305),
    w = n(482132),
    U = n(652215),
    D = n(202541),
    G = n(375708),
    F = n(392309);
function B(e) {
    let {
            giftCode: t,
            application: n,
            sku: r,
            subscriptionPlan: s,
            selectedGiftStyle: o,
            onClose: S,
            hasSentMessage: A,
            giftRecipient: g,
            giftMessageError: _,
            isSendingMessage: T,
        } = e,
        [N, R] = i.useState(m.e.Modes.DEFAULT),
        B = (0, u.bG)([b.A], () => b.A.enabled),
        Y = A || (null != o && null != g),
        W = r?.productLine === U.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionReward: V,
            openGiftingBadgePostPurchaseModal: K,
            canShowGiftingBadgePostPurchase: q,
        } = (0, k.Pv)(),
        Z = (0, v.Mq)(s),
        z = q && null == V;
    function Q() {
        return null != s ? s.skuId : null != r ? r.id : null;
    }
    function $() {
        let e;
        return null != _
            ? G.intl.string(G.t.qB8aya)
            : null == s
              ? null
              : ((e = s.interval === D.WT.MONTH ? (Y ? G.t["4ZJ+7Z"] : G.t["P+z55d"]) : Y ? G.t.p0pZXP : G.t.bXqk3o),
                G.intl.format(e, { skuName: (0, O.RH)(s.id), intervalCount: s.intervalCount }));
    }
    return T
        ? (0, l.jsxs)("div", {
              className: F.EL,
              children: [
                  null != n
                      ? (0, l.jsx)(I.A, { game: n, className: F.__invalid_icon, size: I.M.LARGE, skuId: Q() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(F.EL, { [F.L1]: Z && null != V }),
                      children: [
                          null != n
                              ? (0, l.jsx)(I.A, { game: n, className: F.__invalid_icon, size: I.M.LARGE, skuId: Q() })
                              : null,
                          (0, l.jsx)(f.D, {
                              variant: "heading-lg/semibold",
                              className: a()({ [F.wx]: null == o && !W, [F.$A]: null != o && !W }),
                              children:
                                  null != g || (A && null == _)
                                      ? G.intl.string(G.t.zOmK9N)
                                      : null != _
                                        ? G.intl.string(G.t.d1lrmU)
                                        : G.intl.string(G.t["/s1xR7"]),
                          }),
                          (A && null != g && null == _) || Y
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: F.jx,
                                            children: [
                                                (0, l.jsx)(P.A, { user: g, size: C._3.SIZE_40 }),
                                                (0, l.jsxs)("div", {
                                                    className: F.gn,
                                                    children: [
                                                        (0, l.jsx)(f.D, {
                                                            variant: "heading-md/semibold",
                                                            children: L.Ay.getName(g),
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className: F.Ik,
                                                            children: [" ", L.Ay.getUserTag(g)],
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
                                        null == _ &&
                                            (0, l.jsx)(H, {
                                                giftCode: t,
                                                onClose: () => {
                                                    S(), (0, y.bz)(), z && K();
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
                                                        (0, l.jsx)(h.D, {
                                                            label: G.intl.string(G.t["/dG4NA"]),
                                                            children: (0, l.jsx)(m.e, {
                                                                hideMessage: B ? G.intl.string(G.t["0RLn47"]) : null,
                                                                value: (0, M.Zq)(t),
                                                                mode: N,
                                                                text: e,
                                                                onCopy: (e) => {
                                                                    null != r &&
                                                                        (0, M.AK)(new x.A({ code: t, maxUses: 1 }), r),
                                                                        (0, j.C)(
                                                                            e,
                                                                            () => R(m.e.Modes.SUCCESS),
                                                                            () => R(m.e.Modes.ERROR),
                                                                        ),
                                                                        setTimeout(() => {
                                                                            R(m.e.Modes.DEFAULT);
                                                                        }, 1500);
                                                                },
                                                                supportsCopy: j.p5,
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
                      (0, l.jsx)(w.UX, {
                          children: (0, l.jsx)(c.j, {
                              children: (0, l.jsx)("div", {
                                  className: F.pP,
                                  children: (0, l.jsx)(d.$, {
                                      variant: "primary",
                                      fullWidth: !0,
                                      text: G.intl.string(G.t.PDTjLN),
                                      onClick: () => {
                                          S(), K();
                                      },
                                  }),
                              }),
                          }),
                      }),
              ],
          });
}
function H(e) {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        A.A.fetchRelationships(), (0, _.u)();
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [p, m] = i.useState(!1),
        { userAffinities: h, isLoading: f } = (0, u.cf)([T.A], () => ({
            userAffinities: T.A.getUserAffinitiesMap(),
            isLoading: T.A.isFetching(),
        })),
        E = Array.from(h.keys()).sort((e, t) => T.A.compare(e, t)),
        y = (0, u.bG)([N.A], () => N.A.getFriendIDs()),
        I = o().difference(y, E),
        v = [...E, ...I],
        x = (0, u.bG)([R.default], () => R.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == x || 0 === x.length) return null;
    let b = o().sortBy(x, (e) => v.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: F.vt,
        children: [
            (0, l.jsxs)("div", {
                className: F.AQ,
                children: [
                    (0, l.jsx)(S.Z, {
                        selectionMode: "single",
                        label: G.intl.string(G.t.MJw05f),
                        placeholder: G.intl.string(G.t.J019jZ),
                        loading: f,
                        value: r,
                        onSelectionChange: (e) => {
                            a(e), c(!1);
                        },
                        options: b.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${L.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(P.A, { user: e, size: C._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: F.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == r,
                            loading: p,
                            onClick: () => {
                                m(!0),
                                    (0, g.UN)(r, t)
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
