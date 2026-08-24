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
    m = n(862482),
    p = n(109802),
    C = n(452027),
    h = n(778712),
    f = n(297264),
    E = n(289873),
    S = n(783878),
    y = n(398590),
    I = n(717398),
    A = n(966327),
    g = n(769015),
    P = n(242874),
    v = n(580194),
    x = n(219271),
    _ = n(427358),
    T = n(7133),
    N = n(994500),
    b = n(351906),
    j = n(287809),
    R = n(957565),
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
            hasSentMessage: I,
            giftRecipient: P,
            giftMessageError: x,
            isSendingMessage: _,
        } = e,
        [N, j] = i.useState(p.e.Modes.DEFAULT),
        B = (0, u.bG)([b.A], () => b.A.enabled),
        W = I || (null != o && null != P),
        Y = r?.productLine === U.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: V,
            openGiftingBadgePostPurchaseModal: K,
            canShowGiftingBadgePostPurchase: Z,
        } = (0, k.Pv)(),
        q = (0, v.Mq)(s) && V.length > 0,
        z = Z && 0 === V.length;
    function Q() {
        return null != s ? s.skuId : null != r ? r.id : null;
    }
    function $() {
        let e;
        return null != x
            ? G.intl.string(G.t.qB8aya)
            : null == s
              ? null
              : ((e = s.interval === D.WT.MONTH ? (W ? G.t["4ZJ+7Z"] : G.t["P+z55d"]) : W ? G.t.p0pZXP : G.t.bXqk3o),
                G.intl.format(e, { skuName: (0, O.RH)(s.id), intervalCount: s.intervalCount }));
    }
    return _
        ? (0, l.jsxs)("div", {
              className: F.EL,
              children: [
                  null != n
                      ? (0, l.jsx)(g.A, { game: n, className: F.__invalid_icon, size: g.M.LARGE, skuId: Q() })
                      : null,
                  (0, l.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(F.EL, { [F.L1]: q }),
                      children: [
                          null != n
                              ? (0, l.jsx)(g.A, { game: n, className: F.__invalid_icon, size: g.M.LARGE, skuId: Q() })
                              : null,
                          (0, l.jsx)(f.D, {
                              variant: "heading-lg/semibold",
                              className: a()({ [F.wx]: null == o && !Y, [F.$A]: null != o && !Y }),
                              children:
                                  null != P || (I && null == x)
                                      ? G.intl.string(G.t.zOmK9N)
                                      : null != x
                                        ? G.intl.string(G.t.d1lrmU)
                                        : G.intl.string(G.t["/s1xR7"]),
                          }),
                          (I && null != P && null == x) || W
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: F.jx,
                                            children: [
                                                (0, l.jsx)(A.A, { user: P, size: h._3.SIZE_40 }),
                                                (0, l.jsxs)("div", {
                                                    className: F.gn,
                                                    children: [
                                                        (0, l.jsx)(f.D, {
                                                            variant: "heading-md/semibold",
                                                            children: L.Ay.getName(P),
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className: F.Ik,
                                                            children: [" ", L.Ay.getUserTag(P)],
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
                                        null == x &&
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
                                                case p.e.Modes.SUCCESS:
                                                    e = G.intl.string(G.t.XVvPjU);
                                                    break;
                                                case p.e.Modes.ERROR:
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
                                                            children: (0, l.jsx)(p.e, {
                                                                hideMessage: B ? G.intl.string(G.t["0RLn47"]) : null,
                                                                value: (0, M.Zq)(t),
                                                                mode: N,
                                                                text: e,
                                                                onCopy: (e) => {
                                                                    null != r &&
                                                                        (0, M.AK)(new T.A({ code: t, maxUses: 1 }), r),
                                                                        (0, R.C)(
                                                                            e,
                                                                            () => j(p.e.Modes.SUCCESS),
                                                                            () => j(p.e.Modes.ERROR),
                                                                        ),
                                                                        setTimeout(() => {
                                                                            j(p.e.Modes.DEFAULT);
                                                                        }, 1500);
                                                                },
                                                                supportsCopy: R.p5,
                                                                className: F.__invalid_copyInput,
                                                                buttonColor: m.XD.LINK,
                                                                buttonLook: m.pR.LINK,
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
        I.A.fetchRelationships(), (0, x.u)();
    }, []);
    let [r, a] = i.useState(),
        [s, c] = i.useState(!1),
        [m, p] = i.useState(!1),
        { userAffinities: C, isLoading: f } = (0, u.cf)([_.A], () => ({
            userAffinities: _.A.getUserAffinitiesMap(),
            isLoading: _.A.isFetching(),
        })),
        E = Array.from(C.keys()).sort((e, t) => _.A.compare(e, t)),
        y = (0, u.bG)([N.A], () => N.A.getFriendIDs()),
        g = o().difference(y, E),
        v = [...E, ...g],
        T = (0, u.bG)([j.default], () => j.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == T || 0 === T.length) return null;
    let b = o().sortBy(T, (e) => v.indexOf(e.id));
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
                            leading: (0, l.jsx)(A.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: F.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == r,
                            loading: m,
                            onClick: () => {
                                p(!0),
                                    (0, P.UN)(r, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            c(!0), p(!1);
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
