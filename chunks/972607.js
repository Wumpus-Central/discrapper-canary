"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(821609),
    d = n(862482),
    _ = n(109802),
    f = n(452027),
    p = n(778712),
    h = n(534514),
    E = n(289873),
    m = n(783878),
    g = n(398590),
    A = n(49229),
    I = n(966327),
    T = n(769015),
    S = n(242874),
    y = n(810498),
    N = n(219271),
    v = n(21119),
    C = n(7133),
    O = n(994500),
    R = n(351906),
    b = n(287809),
    D = n(957565),
    L = n(45938),
    w = n(927578),
    M = n(427262),
    P = n(937008),
    x = n(652215),
    k = n(788868),
    U = n(985018),
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
        [N, v] = i.useState(_.e.Modes.DEFAULT),
        O = (0, u.bG)([R.A], () => R.A.enabled),
        b = m || (null != l && null != g),
        F = s?.productLine === x.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: B } = (0, P.Pv)(),
        H = (0, y.Mq)(o),
        j = () => (null != o ? o.skuId : null != s ? s.id : null),
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
        ? (0, r.jsxs)("div", {
              className: G.EL,
              children: [
                  null != n
                      ? (0, r.jsx)(T.A, { game: n, className: G.__invalid_icon, size: T.M.LARGE, skuId: j() })
                      : null,
                  (0, r.jsx)(E.y, { type: E.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: a()(G.EL, { [G.L1]: H && null != B }),
              children: [
                  null != n
                      ? (0, r.jsx)(T.A, { game: n, className: G.__invalid_icon, size: T.M.LARGE, skuId: j() })
                      : null,
                  (0, r.jsx)(h.D, {
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
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: G.jx,
                                    children: [
                                        (0, r.jsx)(I.A, { user: g, size: p._3.SIZE_40 }),
                                        (0, r.jsxs)("div", {
                                            className: G.gn,
                                            children: [
                                                (0, r.jsx)(h.D, {
                                                    variant: "heading-md/semibold",
                                                    children: M.Ay.getName(g),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: G.Ik,
                                                    children: [" ", M.Ay.getUserTag(g)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: G._c, children: Y() }),
                            ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: G.I0, children: Y() }),
                                null == A && (0, r.jsx)(V, { giftCode: t, onClose: c }),
                                (0, r.jsx)("div", { className: G.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (N) {
                                        case _.e.Modes.SUCCESS:
                                            e = U.intl.string(U.t.XVvPjU);
                                            break;
                                        case _.e.Modes.ERROR:
                                            e = U.intl.string(U.t.i4GM3L);
                                            break;
                                        default:
                                            e = U.intl.string(U.t.OpuAlK);
                                    }
                                    return (0, r.jsxs)("div", {
                                        className: G.PN,
                                        children: [
                                            null != t &&
                                                (0, r.jsx)(f.D, {
                                                    label: U.intl.string(U.t["/dG4NA"]),
                                                    children: (0, r.jsx)(_.e, {
                                                        hideMessage: O ? U.intl.string(U.t["0RLn47"]) : null,
                                                        value: (0, L.Zq)(t),
                                                        mode: N,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != s && (0, L.AK)(new C.A({ code: t, maxUses: 1 }), s),
                                                                (0, D.C)(
                                                                    e,
                                                                    () => v(_.e.Modes.SUCCESS),
                                                                    () => v(_.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    v(_.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: D.p5,
                                                        className: G.__invalid_copyInput,
                                                        buttonColor: d.XD.LINK,
                                                        buttonLook: d.pR.LINK,
                                                    }),
                                                }),
                                            (0, r.jsx)("div", { className: G.W$, children: U.intl.string(U.t.QWKUpn) }),
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
    i.useEffect(() => {
        A.A.fetchRelationships(), (0, N.u)();
    }, []);
    let [s, a] = i.useState(),
        [o, d] = i.useState(!1),
        [_, f] = i.useState(!1),
        { userAffinities: h, isLoading: E } = (0, u.cf)([v.A], () => ({
            userAffinities: v.A.getUserAffinitiesMap(),
            isLoading: v.A.isFetching(),
        })),
        T = Array.from(h.keys()).sort((e, t) => v.A.compare(e, t)),
        y = (0, u.bG)([O.A], () => O.A.getFriendIDs()),
        C = l().difference(y, T),
        R = [...T, ...C],
        D = (0, u.bG)([b.default], () => b.default.filter((e) => R.includes(e.id) && !e.bot), [R]);
    if (null == D || 0 === D.length) return null;
    let L = l().sortBy(D, (e) => R.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: G.vt,
        children: [
            (0, r.jsxs)("div", {
                className: G.AQ,
                children: [
                    (0, r.jsx)(m.Z, {
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
                            leading: (0, r.jsx)(I.A, { user: e, size: p._3.SIZE_20 }),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: G.Qg,
                        children: (0, r.jsx)(c.$, {
                            disabled: null == s,
                            loading: _,
                            onClick: () => {
                                f(!0),
                                    (0, S.UN)(s, t)
                                        .then(() => {
                                            n(), (0, g.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), f(!1);
                                        });
                            },
                            text: U.intl.string(U.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o ? G.Sc : G.W$,
                children: o ? U.intl.string(U.t.jo5Vbl) : U.intl.string(U.t["8/N3v3"]),
            }),
        ],
    });
};
