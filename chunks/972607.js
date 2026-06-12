s.d(t, { A: () => S });
var l = s(627968),
    n = s(64700),
    i = s(503698),
    a = s.n(i),
    r = s(735438),
    d = s.n(r),
    c = s(17928),
    C = s(821609),
    u = s(862482),
    o = s(109802),
    L = s(452027),
    g = s(778712),
    M = s(534514),
    H = s(289873),
    m = s(783878),
    h = s(398590),
    p = s(717398),
    E = s(966327),
    N = s(137177),
    x = s(242874),
    f = s(380619),
    _ = s(219271),
    A = s(427358),
    I = s(7133),
    T = s(994500),
    R = s(351906),
    j = s(287809),
    v = s(957565),
    U = s(45938),
    P = s(428262),
    Z = s(427262),
    b = s(937008),
    k = s(652215),
    w = s(788868),
    O = s(375708),
    D = s(340188);
function S(e) {
    let {
            giftCode: t,
            application: s,
            sku: i,
            subscriptionPlan: r,
            selectedGiftStyle: d,
            onClose: C,
            hasSentMessage: m,
            giftRecipient: h,
            giftMessageError: p,
            isSendingMessage: x,
        } = e,
        [_, A] = n.useState(o.e.Modes.DEFAULT),
        T = (0, c.bG)([R.A], () => R.A.enabled),
        j = m || (null != d && null != h),
        S = i?.productLine === k.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: F } = (0, b.Pv)(),
        G = (0, f.Mq)(r),
        K = () => (null != r ? r.skuId : null != i ? i.id : null),
        W = () => {
            let e;
            return null != p
                ? O.intl.string(O.t.qB8aya)
                : null == r
                  ? null
                  : ((e =
                        r.interval === w.WT.MONTH ? (j ? O.t["4ZJ+7Z"] : O.t["P+z55d"]) : j ? O.t.p0pZXP : O.t.bXqk3o),
                    O.intl.format(e, { skuName: (0, P.RH)(r.id), intervalCount: r.intervalCount }));
        };
    return x
        ? (0, l.jsxs)("div", {
              className: D.EL,
              children: [
                  null != s
                      ? (0, l.jsx)(N.A, { game: s, className: D.__invalid_icon, size: N.M.LARGE, skuId: K() })
                      : null,
                  (0, l.jsx)(H.y, { type: H.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: a()(D.EL, { [D.L1]: G && null != F }),
              children: [
                  null != s
                      ? (0, l.jsx)(N.A, { game: s, className: D.__invalid_icon, size: N.M.LARGE, skuId: K() })
                      : null,
                  (0, l.jsx)(M.D, {
                      variant: "heading-lg/semibold",
                      className: a()({ [D.wx]: null == d && !S, [D.$A]: null != d && !S }),
                      children:
                          null != h || (m && null == p)
                              ? O.intl.string(O.t.zOmK9N)
                              : null != p
                                ? O.intl.string(O.t.d1lrmU)
                                : O.intl.string(O.t["/s1xR7"]),
                  }),
                  (m && null != h && null == p) || j
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    className: D.jx,
                                    children: [
                                        (0, l.jsx)(E.A, { user: h, size: g._3.SIZE_40 }),
                                        (0, l.jsxs)("div", {
                                            className: D.gn,
                                            children: [
                                                (0, l.jsx)(M.D, {
                                                    variant: "heading-md/semibold",
                                                    children: Z.Ay.getName(h),
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: D.Ik,
                                                    children: [" ", Z.Ay.getUserTag(h)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: D._c, children: W() }),
                            ],
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: D.I0, children: W() }),
                                null == p && (0, l.jsx)(y, { giftCode: t, onClose: C }),
                                (0, l.jsx)("div", { className: D.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (_) {
                                        case o.e.Modes.SUCCESS:
                                            e = O.intl.string(O.t.XVvPjU);
                                            break;
                                        case o.e.Modes.ERROR:
                                            e = O.intl.string(O.t.i4GM3L);
                                            break;
                                        default:
                                            e = O.intl.string(O.t.OpuAlK);
                                    }
                                    return (0, l.jsxs)("div", {
                                        className: D.PN,
                                        children: [
                                            null != t &&
                                                (0, l.jsx)(L.D, {
                                                    label: O.intl.string(O.t["/dG4NA"]),
                                                    children: (0, l.jsx)(o.e, {
                                                        hideMessage: T ? O.intl.string(O.t["0RLn47"]) : null,
                                                        value: (0, U.Zq)(t),
                                                        mode: _,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != i && (0, U.AK)(new I.A({ code: t, maxUses: 1 }), i),
                                                                (0, v.C)(
                                                                    e,
                                                                    () => A(o.e.Modes.SUCCESS),
                                                                    () => A(o.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    A(o.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: v.p5,
                                                        className: D.__invalid_copyInput,
                                                        buttonColor: u.XD.LINK,
                                                        buttonLook: u.pR.LINK,
                                                    }),
                                                }),
                                            (0, l.jsx)("div", { className: D.W$, children: O.intl.string(O.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
let y = (e) => {
    let { giftCode: t, onClose: s } = e;
    n.useEffect(() => {
        p.A.fetchRelationships(), (0, _.u)();
    }, []);
    let [i, a] = n.useState(),
        [r, u] = n.useState(!1),
        [o, L] = n.useState(!1),
        { userAffinities: M, isLoading: H } = (0, c.cf)([A.A], () => ({
            userAffinities: A.A.getUserAffinitiesMap(),
            isLoading: A.A.isFetching(),
        })),
        N = Array.from(M.keys()).sort((e, t) => A.A.compare(e, t)),
        f = (0, c.bG)([T.A], () => T.A.getFriendIDs()),
        I = d().difference(f, N),
        R = [...N, ...I],
        v = (0, c.bG)([j.default], () => j.default.filter((e) => R.includes(e.id) && !e.bot), [R]);
    if (null == v || 0 === v.length) return null;
    let U = d().sortBy(v, (e) => R.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: D.vt,
        children: [
            (0, l.jsxs)("div", {
                className: D.AQ,
                children: [
                    (0, l.jsx)(m.Z, {
                        selectionMode: "single",
                        label: O.intl.string(O.t.MJw05f),
                        placeholder: O.intl.string(O.t.J019jZ),
                        loading: H,
                        value: i,
                        onSelectionChange: (e) => {
                            a(e), u(!1);
                        },
                        options: U.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${Z.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(E.A, { user: e, size: g._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: D.Qg,
                        children: (0, l.jsx)(C.$, {
                            disabled: null == i,
                            loading: o,
                            onClick: () => {
                                L(!0),
                                    (0, x.UN)(i, t)
                                        .then(() => {
                                            s(), (0, h.bz)();
                                        })
                                        .catch(() => {
                                            u(!0), L(!1);
                                        });
                            },
                            text: O.intl.string(O.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: r ? D.Sc : D.W$,
                children: r ? O.intl.string(O.t.jo5Vbl) : O.intl.string(O.t["8/N3v3"]),
            }),
        ],
    });
};
