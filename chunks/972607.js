"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(17928),
    c = n(821609),
    d = n(862482),
    _ = n(109802),
    h = n(452027),
    f = n(778712),
    p = n(534514),
    E = n(289873),
    m = n(783878),
    g = n(398590),
    A = n(717398),
    I = n(966327),
    T = n(137177),
    S = n(242874),
    y = n(380619),
    C = n(219271),
    N = n(427358),
    v = n(7133),
    R = n(994500),
    O = n(351906),
    b = n(287809),
    D = n(957565),
    L = n(45938),
    w = n(428262),
    M = n(427262),
    P = n(937008),
    x = n(652215),
    k = n(788868),
    U = n(375708),
    G = n(340188);
function F(e) {
    let {
            giftCode: t,
            application: n,
            sku: s,
            subscriptionPlan: o,
            selectedGiftStyle: l,
            onClose: c,
            hasSentMessage: m,
            giftRecipient: g,
            giftMessageError: A,
            isSendingMessage: S,
        } = e,
        [C, N] = r.useState(_.e.Modes.DEFAULT),
        R = (0, u.bG)([O.A], () => O.A.enabled),
        b = m || (null != l && null != g),
        F = s?.productLine === x.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: B } = (0, P.Pv)(),
        j = (0, y.Mq)(o),
        H = () => (null != o ? o.skuId : null != s ? s.id : null),
        Y = () => {
            let e;
            return null != A
                ? U.intl.string(U.t.qB8aya)
                : null == o
                  ? null
                  : ((e =
                        o.interval === k.WT.MONTH ? (b ? U.t["4ZJ+7Z"] : U.t["P+z55d"]) : b ? U.t.p0pZXP : U.t.bXqk3o),
                    U.intl.format(e, { skuName: (0, w.RH)(o.id), intervalCount: o.intervalCount }));
        };
    return S
        ? (0, i.jsxs)("div", {
              className: G.EL,
              children: [
                  null != n
                      ? (0, i.jsx)(T.A, { game: n, className: G.__invalid_icon, size: T.M.LARGE, skuId: H() })
                      : null,
                  (0, i.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: a()(G.EL, { [G.L1]: j && null != B }),
              children: [
                  null != n
                      ? (0, i.jsx)(T.A, { game: n, className: G.__invalid_icon, size: T.M.LARGE, skuId: H() })
                      : null,
                  (0, i.jsx)(p.D, {
                      variant: "heading-lg/semibold",
                      className: a()({ [G.wx]: null == l && !F, [G.$A]: null != l && !F }),
                      children:
                          null != g || (m && null == A)
                              ? U.intl.string(U.t.zOmK9N)
                              : null != A
                                ? U.intl.string(U.t.d1lrmU)
                                : U.intl.string(U.t["/s1xR7"]),
                  }),
                  (m && null != g && null == A) || b
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: G.jx,
                                    children: [
                                        (0, i.jsx)(I.A, { user: g, size: f._3.SIZE_40 }),
                                        (0, i.jsxs)("div", {
                                            className: G.gn,
                                            children: [
                                                (0, i.jsx)(p.D, {
                                                    variant: "heading-md/semibold",
                                                    children: M.Ay.getName(g),
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: G.Ik,
                                                    children: [" ", M.Ay.getUserTag(g)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: G._c, children: Y() }),
                            ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: G.I0, children: Y() }),
                                null == A && (0, i.jsx)(V, { giftCode: t, onClose: c }),
                                (0, i.jsx)("div", { className: G.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (C) {
                                        case _.e.Modes.SUCCESS:
                                            e = U.intl.string(U.t.XVvPjU);
                                            break;
                                        case _.e.Modes.ERROR:
                                            e = U.intl.string(U.t.i4GM3L);
                                            break;
                                        default:
                                            e = U.intl.string(U.t.OpuAlK);
                                    }
                                    return (0, i.jsxs)("div", {
                                        className: G.PN,
                                        children: [
                                            null != t &&
                                                (0, i.jsx)(h.D, {
                                                    label: U.intl.string(U.t["/dG4NA"]),
                                                    children: (0, i.jsx)(_.e, {
                                                        hideMessage: R ? U.intl.string(U.t["0RLn47"]) : null,
                                                        value: (0, L.Zq)(t),
                                                        mode: C,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != s && (0, L.AK)(new v.A({ code: t, maxUses: 1 }), s),
                                                                (0, D.C)(
                                                                    e,
                                                                    () => N(_.e.Modes.SUCCESS),
                                                                    () => N(_.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    N(_.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: D.p5,
                                                        className: G.__invalid_copyInput,
                                                        buttonColor: d.XD.LINK,
                                                        buttonLook: d.pR.LINK,
                                                    }),
                                                }),
                                            (0, i.jsx)("div", { className: G.W$, children: U.intl.string(U.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
let V = (e) => {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        A.A.fetchRelationships(), (0, C.u)();
    }, []);
    let [s, a] = r.useState(),
        [o, d] = r.useState(!1),
        [_, h] = r.useState(!1),
        { userAffinities: p, isLoading: E } = (0, u.cf)([N.A], () => ({
            userAffinities: N.A.getUserAffinitiesMap(),
            isLoading: N.A.isFetching(),
        })),
        T = Array.from(p.keys()).sort((e, t) => N.A.compare(e, t)),
        y = (0, u.bG)([R.A], () => R.A.getFriendIDs()),
        v = l().difference(y, T),
        O = [...T, ...v],
        D = (0, u.bG)([b.default], () => b.default.filter((e) => O.includes(e.id) && !e.bot), [O]);
    if (null == D || 0 === D.length) return null;
    let L = l().sortBy(D, (e) => O.indexOf(e.id));
    return (0, i.jsxs)("div", {
        className: G.vt,
        children: [
            (0, i.jsxs)("div", {
                className: G.AQ,
                children: [
                    (0, i.jsx)(m.Z, {
                        selectionMode: "single",
                        label: U.intl.string(U.t.MJw05f),
                        placeholder: U.intl.string(U.t.J019jZ),
                        loading: E,
                        value: s,
                        onSelectionChange: (e) => {
                            a(e), d(!1);
                        },
                        options: L.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${M.Ay.getUserTag(e)}`,
                            leading: (0, i.jsx)(I.A, { user: e, size: f._3.SIZE_20 }),
                        })),
                    }),
                    (0, i.jsx)("div", {
                        className: G.Qg,
                        children: (0, i.jsx)(c.$, {
                            disabled: null == s,
                            loading: _,
                            onClick: () => {
                                h(!0),
                                    (0, S.UN)(s, t)
                                        .then(() => {
                                            n(), (0, g.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), h(!1);
                                        });
                            },
                            text: U.intl.string(U.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: o ? G.Sc : G.W$,
                children: o ? U.intl.string(U.t.jo5Vbl) : U.intl.string(U.t["8/N3v3"]),
            }),
        ],
    });
};
