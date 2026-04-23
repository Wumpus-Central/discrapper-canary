n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(735438),
    l = n.n(_),
    o = n(17928),
    E = n(821609),
    d = n(862482),
    c = n(109802),
    u = n(452027),
    I = n(778712),
    A = n(534514),
    T = n(289873),
    S = n(783878),
    N = n(398590),
    O = n(49229),
    R = n(966327),
    f = n(137177),
    C = n(242874),
    p = n(810498),
    m = n(219271),
    L = n(427358),
    D = n(7133),
    h = n(994500),
    g = n(351906),
    b = n(287809),
    U = n(957565),
    P = n(45938),
    M = n(927578),
    y = n(427262),
    G = n(937008),
    v = n(652215),
    B = n(788868),
    w = n(985018),
    F = n(340188);
function V(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: _,
            selectedGiftStyle: l,
            onClose: E,
            hasSentMessage: S,
            giftRecipient: N,
            giftMessageError: O,
            isSendingMessage: C,
        } = e,
        [m, L] = r.useState(c.e.Modes.DEFAULT),
        h = (0, o.bG)([g.A], () => g.A.enabled),
        b = S || (null != l && null != N),
        V = a?.productLine === v.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: k } = (0, G.Pv)(),
        x = (0, p.Mq)(_),
        W = () => (null != _ ? _.skuId : null != a ? a.id : null),
        Y = () => {
            let e;
            return null != O
                ? w.intl.string(w.t.qB8aya)
                : null == _
                  ? null
                  : ((e =
                        _.interval === B.WT.MONTH ? (b ? w.t["4ZJ+7Z"] : w.t["P+z55d"]) : b ? w.t.p0pZXP : w.t.bXqk3o),
                    w.intl.format(e, { skuName: (0, M.RH)(_.id), intervalCount: _.intervalCount }));
        };
    return C
        ? (0, i.jsxs)("div", {
              className: F.EL,
              children: [
                  null != n
                      ? (0, i.jsx)(f.A, { game: n, className: F.__invalid_icon, size: f.M.LARGE, skuId: W() })
                      : null,
                  (0, i.jsx)(T.y, { type: T.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: s()(F.EL, { [F.L1]: x && null != k }),
              children: [
                  null != n
                      ? (0, i.jsx)(f.A, { game: n, className: F.__invalid_icon, size: f.M.LARGE, skuId: W() })
                      : null,
                  (0, i.jsx)(A.D, {
                      variant: "heading-lg/semibold",
                      className: s()({ [F.wx]: null == l && !V, [F.$A]: null != l && !V }),
                      children:
                          null != N || (S && null == O)
                              ? w.intl.string(w.t.zOmK9N)
                              : null != O
                                ? w.intl.string(w.t.d1lrmU)
                                : w.intl.string(w.t["/s1xR7"]),
                  }),
                  (S && null != N && null == O) || b
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: F.jx,
                                    children: [
                                        (0, i.jsx)(R.A, { user: N, size: I._3.SIZE_40 }),
                                        (0, i.jsxs)("div", {
                                            className: F.gn,
                                            children: [
                                                (0, i.jsx)(A.D, {
                                                    variant: "heading-md/semibold",
                                                    children: y.Ay.getName(N),
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: F.Ik,
                                                    children: [" ", y.Ay.getUserTag(N)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: F._c, children: Y() }),
                            ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { className: F.I0, children: Y() }),
                                null == O && (0, i.jsx)(H, { giftCode: t, onClose: E }),
                                (0, i.jsx)("div", { className: F.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (m) {
                                        case c.e.Modes.SUCCESS:
                                            e = w.intl.string(w.t.XVvPjU);
                                            break;
                                        case c.e.Modes.ERROR:
                                            e = w.intl.string(w.t.i4GM3L);
                                            break;
                                        default:
                                            e = w.intl.string(w.t.OpuAlK);
                                    }
                                    return (0, i.jsxs)("div", {
                                        className: F.PN,
                                        children: [
                                            null != t &&
                                                (0, i.jsx)(u.D, {
                                                    label: w.intl.string(w.t["/dG4NA"]),
                                                    children: (0, i.jsx)(c.e, {
                                                        hideMessage: h ? w.intl.string(w.t["0RLn47"]) : null,
                                                        value: (0, P.Zq)(t),
                                                        mode: m,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != a && (0, P.AK)(new D.A({ code: t, maxUses: 1 }), a),
                                                                (0, U.C)(
                                                                    e,
                                                                    () => L(c.e.Modes.SUCCESS),
                                                                    () => L(c.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    L(c.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: U.p5,
                                                        className: F.__invalid_copyInput,
                                                        buttonColor: d.XD.LINK,
                                                        buttonLook: d.pR.LINK,
                                                    }),
                                                }),
                                            (0, i.jsx)("div", { className: F.W$, children: w.intl.string(w.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
let H = (e) => {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        O.A.fetchRelationships(), (0, m.u)();
    }, []);
    let [a, s] = r.useState(),
        [_, d] = r.useState(!1),
        [c, u] = r.useState(!1),
        { userAffinities: A, isLoading: T } = (0, o.cf)([L.A], () => ({
            userAffinities: L.A.getUserAffinitiesMap(),
            isLoading: L.A.isFetching(),
        })),
        f = Array.from(A.keys()).sort((e, t) => L.A.compare(e, t)),
        p = (0, o.bG)([h.A], () => h.A.getFriendIDs()),
        D = l().difference(p, f),
        g = [...f, ...D],
        U = (0, o.bG)([b.default], () => b.default.filter((e) => g.includes(e.id) && !e.bot), [g]);
    if (null == U || 0 === U.length) return null;
    let P = l().sortBy(U, (e) => g.indexOf(e.id));
    return (0, i.jsxs)("div", {
        className: F.vt,
        children: [
            (0, i.jsxs)("div", {
                className: F.AQ,
                children: [
                    (0, i.jsx)(S.Z, {
                        selectionMode: "single",
                        label: w.intl.string(w.t.MJw05f),
                        placeholder: w.intl.string(w.t.J019jZ),
                        loading: T,
                        value: a,
                        onSelectionChange: (e) => {
                            s(e), d(!1);
                        },
                        options: P.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${y.Ay.getUserTag(e)}`,
                            leading: (0, i.jsx)(R.A, { user: e, size: I._3.SIZE_20 }),
                        })),
                    }),
                    (0, i.jsx)("div", {
                        className: F.Qg,
                        children: (0, i.jsx)(E.$, {
                            disabled: null == a,
                            loading: c,
                            onClick: () => {
                                u(!0),
                                    (0, C.UN)(a, t)
                                        .then(() => {
                                            n(), (0, N.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), u(!1);
                                        });
                            },
                            text: w.intl.string(w.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _ ? F.Sc : F.W$,
                children: _ ? w.intl.string(w.t.jo5Vbl) : w.intl.string(w.t["8/N3v3"]),
            }),
        ],
    });
};
