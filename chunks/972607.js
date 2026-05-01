s.d(l, { A: () => D });
var n = s(627968),
    i = s(64700),
    t = s(503698),
    a = s.n(t),
    d = s(735438),
    r = s.n(d),
    u = s(17928),
    c = s(821609),
    o = s(862482),
    g = s(109802),
    m = s(452027),
    h = s(778712),
    x = s(534514),
    j = s(289873),
    v = s(783878),
    A = s(398590),
    N = s(717398),
    p = s(966327),
    f = s(137177),
    b = s(242874),
    L = s(380619),
    C = s(219271),
    E = s(427358),
    S = s(7133),
    _ = s(994500),
    k = s(351906),
    I = s(287809),
    M = s(957565),
    y = s(45938),
    R = s(927578),
    U = s(427262),
    Z = s(937008),
    G = s(652215),
    T = s(788868),
    w = s(375708),
    z = s(340188);
function D(e) {
    let {
            giftCode: l,
            application: s,
            sku: t,
            subscriptionPlan: d,
            selectedGiftStyle: r,
            onClose: c,
            hasSentMessage: v,
            giftRecipient: A,
            giftMessageError: N,
            isSendingMessage: b,
        } = e,
        [C, E] = i.useState(g.e.Modes.DEFAULT),
        _ = (0, u.bG)([k.A], () => k.A.enabled),
        I = v || (null != r && null != A),
        D = t?.productLine === G.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: O } = (0, Z.Pv)(),
        P = (0, L.Mq)(d),
        K = () => (null != d ? d.skuId : null != t ? t.id : null),
        $ = () => {
            let e;
            return null != N
                ? w.intl.string(w.t.qB8aya)
                : null == d
                  ? null
                  : ((e =
                        d.interval === T.WT.MONTH ? (I ? w.t["4ZJ+7Z"] : w.t["P+z55d"]) : I ? w.t.p0pZXP : w.t.bXqk3o),
                    w.intl.format(e, { skuName: (0, R.RH)(d.id), intervalCount: d.intervalCount }));
        };
    return b
        ? (0, n.jsxs)("div", {
              className: z.EL,
              children: [
                  null != s
                      ? (0, n.jsx)(f.A, { game: s, className: z.__invalid_icon, size: f.M.LARGE, skuId: K() })
                      : null,
                  (0, n.jsx)(j.y, { type: j.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: a()(z.EL, { [z.L1]: P && null != O }),
              children: [
                  null != s
                      ? (0, n.jsx)(f.A, { game: s, className: z.__invalid_icon, size: f.M.LARGE, skuId: K() })
                      : null,
                  (0, n.jsx)(x.D, {
                      variant: "heading-lg/semibold",
                      className: a()({ [z.wx]: null == r && !D, [z.$A]: null != r && !D }),
                      children:
                          null != A || (v && null == N)
                              ? w.intl.string(w.t.zOmK9N)
                              : null != N
                                ? w.intl.string(w.t.d1lrmU)
                                : w.intl.string(w.t["/s1xR7"]),
                  }),
                  (v && null != A && null == N) || I
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: z.jx,
                                    children: [
                                        (0, n.jsx)(p.A, { user: A, size: h._3.SIZE_40 }),
                                        (0, n.jsxs)("div", {
                                            className: z.gn,
                                            children: [
                                                (0, n.jsx)(x.D, {
                                                    variant: "heading-md/semibold",
                                                    children: U.Ay.getName(A),
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: z.Ik,
                                                    children: [" ", U.Ay.getUserTag(A)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: z._c, children: $() }),
                            ],
                        })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: z.I0, children: $() }),
                                null == N && (0, n.jsx)(F, { giftCode: l, onClose: c }),
                                (0, n.jsx)("div", { className: z.yF }),
                                (() => {
                                    let e;
                                    if (null == l) return null;
                                    switch (C) {
                                        case g.e.Modes.SUCCESS:
                                            e = w.intl.string(w.t.XVvPjU);
                                            break;
                                        case g.e.Modes.ERROR:
                                            e = w.intl.string(w.t.i4GM3L);
                                            break;
                                        default:
                                            e = w.intl.string(w.t.OpuAlK);
                                    }
                                    return (0, n.jsxs)("div", {
                                        className: z.PN,
                                        children: [
                                            null != l &&
                                                (0, n.jsx)(m.D, {
                                                    label: w.intl.string(w.t["/dG4NA"]),
                                                    children: (0, n.jsx)(g.e, {
                                                        hideMessage: _ ? w.intl.string(w.t["0RLn47"]) : null,
                                                        value: (0, y.Zq)(l),
                                                        mode: C,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != t && (0, y.AK)(new S.A({ code: l, maxUses: 1 }), t),
                                                                (0, M.C)(
                                                                    e,
                                                                    () => E(g.e.Modes.SUCCESS),
                                                                    () => E(g.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    E(g.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: M.p5,
                                                        className: z.__invalid_copyInput,
                                                        buttonColor: o.XD.LINK,
                                                        buttonLook: o.pR.LINK,
                                                    }),
                                                }),
                                            (0, n.jsx)("div", { className: z.W$, children: w.intl.string(w.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
let F = (e) => {
    let { giftCode: l, onClose: s } = e;
    i.useEffect(() => {
        N.A.fetchRelationships(), (0, C.u)();
    }, []);
    let [t, a] = i.useState(),
        [d, o] = i.useState(!1),
        [g, m] = i.useState(!1),
        { userAffinities: x, isLoading: j } = (0, u.cf)([E.A], () => ({
            userAffinities: E.A.getUserAffinitiesMap(),
            isLoading: E.A.isFetching(),
        })),
        f = Array.from(x.keys()).sort((e, l) => E.A.compare(e, l)),
        L = (0, u.bG)([_.A], () => _.A.getFriendIDs()),
        S = r().difference(L, f),
        k = [...f, ...S],
        M = (0, u.bG)([I.default], () => I.default.filter((e) => k.includes(e.id) && !e.bot), [k]);
    if (null == M || 0 === M.length) return null;
    let y = r().sortBy(M, (e) => k.indexOf(e.id));
    return (0, n.jsxs)("div", {
        className: z.vt,
        children: [
            (0, n.jsxs)("div", {
                className: z.AQ,
                children: [
                    (0, n.jsx)(v.Z, {
                        selectionMode: "single",
                        label: w.intl.string(w.t.MJw05f),
                        placeholder: w.intl.string(w.t.J019jZ),
                        loading: j,
                        value: t,
                        onSelectionChange: (e) => {
                            a(e), o(!1);
                        },
                        options: y.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${U.Ay.getUserTag(e)}`,
                            leading: (0, n.jsx)(p.A, { user: e, size: h._3.SIZE_20 }),
                        })),
                    }),
                    (0, n.jsx)("div", {
                        className: z.Qg,
                        children: (0, n.jsx)(c.$, {
                            disabled: null == t,
                            loading: g,
                            onClick: () => {
                                m(!0),
                                    (0, b.UN)(t, l)
                                        .then(() => {
                                            s(), (0, A.bz)();
                                        })
                                        .catch(() => {
                                            o(!0), m(!1);
                                        });
                            },
                            text: w.intl.string(w.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: d ? z.Sc : z.W$,
                children: d ? w.intl.string(w.t.jo5Vbl) : w.intl.string(w.t["8/N3v3"]),
            }),
        ],
    });
};
