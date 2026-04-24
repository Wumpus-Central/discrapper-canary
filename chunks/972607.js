"use strict";
r.d(t, { A: () => F });
var i = r(627968),
    a = r(64700),
    n = r(503698),
    s = r.n(n),
    l = r(735438),
    o = r.n(l),
    c = r(17928),
    d = r(821609),
    u = r(862482),
    _ = r(109802),
    p = r(452027),
    f = r(778712),
    m = r(534514),
    h = r(289873),
    b = r(783878),
    g = r(398590),
    v = r(49229),
    A = r(966327),
    E = r(137177),
    I = r(242874),
    x = r(810498),
    y = r(219271),
    C = r(427358),
    S = r(7133),
    T = r(994500),
    R = r(351906),
    N = r(287809),
    L = r(957565),
    w = r(45938),
    D = r(927578),
    j = r(427262),
    P = r(937008),
    O = r(652215),
    M = r(788868),
    k = r(985018),
    U = r(340188);
function F(e) {
    let {
            giftCode: t,
            application: r,
            sku: n,
            subscriptionPlan: l,
            selectedGiftStyle: o,
            onClose: d,
            hasSentMessage: b,
            giftRecipient: g,
            giftMessageError: v,
            isSendingMessage: I,
        } = e,
        [y, C] = a.useState(_.e.Modes.DEFAULT),
        T = (0, c.bG)([R.A], () => R.A.enabled),
        N = b || (null != o && null != g),
        F = n?.productLine === O.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: B } = (0, P.Pv)(),
        H = (0, x.Mq)(l),
        W = () => (null != l ? l.skuId : null != n ? n.id : null),
        V = () => {
            let e;
            return null != v
                ? k.intl.string(k.t.qB8aya)
                : null == l
                  ? null
                  : ((e =
                        l.interval === M.WT.MONTH ? (N ? k.t["4ZJ+7Z"] : k.t["P+z55d"]) : N ? k.t.p0pZXP : k.t.bXqk3o),
                    k.intl.format(e, { skuName: (0, D.RH)(l.id), intervalCount: l.intervalCount }));
        };
    return I
        ? (0, i.jsxs)("div", {
              className: U.EL,
              children: [
                  null != r
                      ? (0, i.jsx)(E.A, { game: r, className: U.__invalid_icon, size: E.M.LARGE, skuId: W() })
                      : null,
                  (0, i.jsx)(h.y, { type: h.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: s()(U.EL, { [U.L1]: H && null != B }),
              children: [
                  null != r
                      ? (0, i.jsx)(E.A, { game: r, className: U.__invalid_icon, size: E.M.LARGE, skuId: W() })
                      : null,
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      className: s()({ [U.wx]: null == o && !F, [U.$A]: null != o && !F }),
                      children:
                          null != g || (b && null == v)
                              ? k.intl.string(k.t.zOmK9N)
                              : null != v
                                ? k.intl.string(k.t.d1lrmU)
                                : k.intl.string(k.t["/s1xR7"]),
                  }),
                  (b && null != g && null == v) || N
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: U.jx,
                                    children: [
                                        (0, i.jsx)(A.A, { user: g, size: f._3.SIZE_40 }),
                                        (0, i.jsxs)("div", {
                                            className: U.gn,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/semibold",
                                                    children: j.Ay.getName(g),
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: U.Ik,
                                                    children: [" ", j.Ay.getUserTag(g)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: U._c, children: V() }),
                            ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: U.I0, children: V() }),
                                null == v && (0, i.jsx)(G, { giftCode: t, onClose: d }),
                                (0, i.jsx)("div", { className: U.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (y) {
                                        case _.e.Modes.SUCCESS:
                                            e = k.intl.string(k.t.XVvPjU);
                                            break;
                                        case _.e.Modes.ERROR:
                                            e = k.intl.string(k.t.i4GM3L);
                                            break;
                                        default:
                                            e = k.intl.string(k.t.OpuAlK);
                                    }
                                    return (0, i.jsxs)("div", {
                                        className: U.PN,
                                        children: [
                                            null != t &&
                                                (0, i.jsx)(p.D, {
                                                    label: k.intl.string(k.t["/dG4NA"]),
                                                    children: (0, i.jsx)(_.e, {
                                                        hideMessage: T ? k.intl.string(k.t["0RLn47"]) : null,
                                                        value: (0, w.Zq)(t),
                                                        mode: y,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != n && (0, w.AK)(new S.A({ code: t, maxUses: 1 }), n),
                                                                (0, L.C)(
                                                                    e,
                                                                    () => C(_.e.Modes.SUCCESS),
                                                                    () => C(_.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    C(_.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: L.p5,
                                                        className: U.__invalid_copyInput,
                                                        buttonColor: u.XD.LINK,
                                                        buttonLook: u.pR.LINK,
                                                    }),
                                                }),
                                            (0, i.jsx)("div", { className: U.W$, children: k.intl.string(k.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
let G = (e) => {
    let { giftCode: t, onClose: r } = e;
    a.useEffect(() => {
        v.A.fetchRelationships(), (0, y.u)();
    }, []);
    let [n, s] = a.useState(),
        [l, u] = a.useState(!1),
        [_, p] = a.useState(!1),
        { userAffinities: m, isLoading: h } = (0, c.cf)([C.A], () => ({
            userAffinities: C.A.getUserAffinitiesMap(),
            isLoading: C.A.isFetching(),
        })),
        E = Array.from(m.keys()).sort((e, t) => C.A.compare(e, t)),
        x = (0, c.bG)([T.A], () => T.A.getFriendIDs()),
        S = o().difference(x, E),
        R = [...E, ...S],
        L = (0, c.bG)([N.default], () => N.default.filter((e) => R.includes(e.id) && !e.bot), [R]);
    if (null == L || 0 === L.length) return null;
    let w = o().sortBy(L, (e) => R.indexOf(e.id));
    return (0, i.jsxs)("div", {
        className: U.vt,
        children: [
            (0, i.jsxs)("div", {
                className: U.AQ,
                children: [
                    (0, i.jsx)(b.Z, {
                        selectionMode: "single",
                        label: k.intl.string(k.t.MJw05f),
                        placeholder: k.intl.string(k.t.J019jZ),
                        loading: h,
                        value: n,
                        onSelectionChange: (e) => {
                            s(e), u(!1);
                        },
                        options: w.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${j.Ay.getUserTag(e)}`,
                            leading: (0, i.jsx)(A.A, { user: e, size: f._3.SIZE_20 }),
                        })),
                    }),
                    (0, i.jsx)("div", {
                        className: U.Qg,
                        children: (0, i.jsx)(d.$, {
                            disabled: null == n,
                            loading: _,
                            onClick: () => {
                                p(!0),
                                    (0, I.UN)(n, t)
                                        .then(() => {
                                            r(), (0, g.bz)();
                                        })
                                        .catch(() => {
                                            u(!0), p(!1);
                                        });
                            },
                            text: k.intl.string(k.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: l ? U.Sc : U.W$,
                children: l ? k.intl.string(k.t.jo5Vbl) : k.intl.string(k.t["8/N3v3"]),
            }),
        ],
    });
};
