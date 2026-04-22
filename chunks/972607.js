n.d(t, { A: () => F });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(735438),
    o = n.n(s),
    u = n(311907),
    c = n(821609),
    d = n(862482),
    p = n(109802),
    m = n(452027),
    h = n(778712),
    A = n(534514),
    _ = n(289873),
    C = n(783878),
    E = n(398590),
    y = n(49229),
    f = n(966327),
    P = n(769015),
    S = n(242874),
    x = n(810498),
    T = n(219271),
    N = n(21119),
    g = n(7133),
    I = n(994500),
    v = n(351906),
    b = n(287809),
    R = n(957565),
    M = n(45938),
    j = n(927578),
    L = n(427262),
    O = n(937008),
    D = n(652215),
    U = n(788868),
    w = n(985018),
    k = n(44956);
function F(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: s,
            selectedGiftStyle: o,
            onClose: c,
            hasSentMessage: C,
            giftRecipient: E,
            giftMessageError: y,
            isSendingMessage: S,
        } = e,
        [T, N] = i.useState(p.e.Modes.DEFAULT),
        I = (0, u.bG)([v.A], () => v.A.enabled),
        b = C || (null != o && null != E),
        F = a?.productLine === D.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: B } = (0, O.Pv)(),
        Y = (0, x.Mq)(s),
        W = () => (null != s ? s.skuId : null != a ? a.id : null),
        V = () => {
            let e;
            return null != y
                ? w.intl.string(w.t.qB8aya)
                : null == s
                  ? null
                  : ((e =
                        s.interval === U.WT.MONTH ? (b ? w.t["4ZJ+7Z"] : w.t["P+z55d"]) : b ? w.t.p0pZXP : w.t.bXqk3o),
                    w.intl.format(e, { skuName: (0, j.RH)(s.id), intervalCount: s.intervalCount }));
        };
    return S
        ? (0, l.jsxs)("div", {
              className: k.EL,
              children: [
                  null != n
                      ? (0, l.jsx)(P.A, { game: n, className: k.__invalid_icon, size: P.M.LARGE, skuId: W() })
                      : null,
                  (0, l.jsx)(_.y, { type: _.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: r()(k.EL, { [k.L1]: Y && null != B }),
              children: [
                  null != n
                      ? (0, l.jsx)(P.A, { game: n, className: k.__invalid_icon, size: P.M.LARGE, skuId: W() })
                      : null,
                  (0, l.jsx)(A.D, {
                      variant: "heading-lg/semibold",
                      className: r()({ [k.wx]: null == o && !F, [k.$A]: null != o && !F }),
                      children:
                          null != E || (C && null == y)
                              ? w.intl.string(w.t.zOmK9N)
                              : null != y
                                ? w.intl.string(w.t.d1lrmU)
                                : w.intl.string(w.t["/s1xR7"]),
                  }),
                  (C && null != E && null == y) || b
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    className: k.jx,
                                    children: [
                                        (0, l.jsx)(f.A, { user: E, size: h._3.SIZE_40 }),
                                        (0, l.jsxs)("div", {
                                            className: k.gn,
                                            children: [
                                                (0, l.jsx)(A.D, {
                                                    variant: "heading-md/semibold",
                                                    children: L.Ay.getName(E),
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: k.Ik,
                                                    children: [" ", L.Ay.getUserTag(E)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: k._c, children: V() }),
                            ],
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: k.I0, children: V() }),
                                null == y && (0, l.jsx)(G, { giftCode: t, onClose: c }),
                                (0, l.jsx)("div", { className: k.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (T) {
                                        case p.e.Modes.SUCCESS:
                                            e = w.intl.string(w.t.XVvPjU);
                                            break;
                                        case p.e.Modes.ERROR:
                                            e = w.intl.string(w.t.i4GM3L);
                                            break;
                                        default:
                                            e = w.intl.string(w.t.OpuAlK);
                                    }
                                    return (0, l.jsxs)("div", {
                                        className: k.PN,
                                        children: [
                                            null != t &&
                                                (0, l.jsx)(m.D, {
                                                    label: w.intl.string(w.t["/dG4NA"]),
                                                    children: (0, l.jsx)(p.e, {
                                                        hideMessage: I ? w.intl.string(w.t["0RLn47"]) : null,
                                                        value: (0, M.Zq)(t),
                                                        mode: T,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != a && (0, M.AK)(new g.A({ code: t, maxUses: 1 }), a),
                                                                (0, R.C)(
                                                                    e,
                                                                    () => N(p.e.Modes.SUCCESS),
                                                                    () => N(p.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    N(p.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: R.p5,
                                                        className: k.__invalid_copyInput,
                                                        buttonColor: d.XD.LINK,
                                                        buttonLook: d.pR.LINK,
                                                    }),
                                                }),
                                            (0, l.jsx)("div", { className: k.W$, children: w.intl.string(w.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
let G = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        y.A.fetchRelationships(), (0, T.u)();
    }, []);
    let [a, r] = i.useState(),
        [s, d] = i.useState(!1),
        [p, m] = i.useState(!1),
        { userAffinities: A, isLoading: _ } = (0, u.cf)([N.A], () => ({
            userAffinities: N.A.getUserAffinitiesMap(),
            isLoading: N.A.isFetching(),
        })),
        P = Array.from(A.keys()).sort((e, t) => N.A.compare(e, t)),
        x = (0, u.bG)([I.A], () => I.A.getFriendIDs()),
        g = o().difference(x, P),
        v = [...P, ...g],
        R = (0, u.bG)([b.default], () => b.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == R || 0 === R.length) return null;
    let M = o().sortBy(R, (e) => v.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: k.vt,
        children: [
            (0, l.jsxs)("div", {
                className: k.AQ,
                children: [
                    (0, l.jsx)(C.Z, {
                        selectionMode: "single",
                        label: w.intl.string(w.t.MJw05f),
                        placeholder: w.intl.string(w.t.J019jZ),
                        loading: _,
                        value: a,
                        onSelectionChange: (e) => {
                            r(e), d(!1);
                        },
                        options: M.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${L.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(f.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: k.Qg,
                        children: (0, l.jsx)(c.$, {
                            disabled: null == a,
                            loading: p,
                            onClick: () => {
                                m(!0),
                                    (0, S.UN)(a, t)
                                        .then(() => {
                                            n(), (0, E.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), m(!1);
                                        });
                            },
                            text: w.intl.string(w.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? k.Sc : k.W$,
                children: s ? w.intl.string(w.t.jo5Vbl) : w.intl.string(w.t["8/N3v3"]),
            }),
        ],
    });
};
