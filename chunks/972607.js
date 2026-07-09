n.d(t, { A: () => S });
var s = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(735438),
    c = n.n(r),
    d = n(17928),
    u = n(821609),
    C = n(862482),
    o = n(109802),
    m = n(452027),
    L = n(778712),
    g = n(534514),
    M = n(289873),
    H = n(783878),
    h = n(398590),
    x = n(717398),
    E = n(966327),
    f = n(769015),
    p = n(242874),
    N = n(380619),
    _ = n(219271),
    A = n(427358),
    I = n(7133),
    v = n(994500),
    T = n(351906),
    R = n(287809),
    j = n(957565),
    P = n(45938),
    U = n(428262),
    k = n(427262),
    Z = n(937008),
    b = n(652215),
    w = n(202541),
    D = n(375708),
    O = n(44956);
function S(e) {
    let {
            giftCode: t,
            application: n,
            sku: i,
            subscriptionPlan: r,
            selectedGiftStyle: c,
            onClose: u,
            hasSentMessage: H,
            giftRecipient: h,
            giftMessageError: x,
            isSendingMessage: p,
        } = e,
        [_, A] = l.useState(o.e.Modes.DEFAULT),
        v = (0, d.bG)([T.A], () => T.A.enabled),
        R = H || (null != c && null != h),
        S = i?.productLine === b.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: F } = (0, Z.Pv)(),
        G = (0, N.Mq)(r),
        K = () => (null != r ? r.skuId : null != i ? i.id : null),
        W = () => {
            let e;
            return null != x
                ? D.intl.string(D.t.qB8aya)
                : null == r
                  ? null
                  : ((e =
                        r.interval === w.WT.MONTH ? (R ? D.t["4ZJ+7Z"] : D.t["P+z55d"]) : R ? D.t.p0pZXP : D.t.bXqk3o),
                    D.intl.format(e, { skuName: (0, U.RH)(r.id), intervalCount: r.intervalCount }));
        };
    return p
        ? (0, s.jsxs)("div", {
              className: O.EL,
              children: [
                  null != n
                      ? (0, s.jsx)(f.A, { game: n, className: O.__invalid_icon, size: f.M.LARGE, skuId: K() })
                      : null,
                  (0, s.jsx)(M.y, { type: M.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: a()(O.EL, { [O.L1]: G && null != F }),
              children: [
                  null != n
                      ? (0, s.jsx)(f.A, { game: n, className: O.__invalid_icon, size: f.M.LARGE, skuId: K() })
                      : null,
                  (0, s.jsx)(g.D, {
                      variant: "heading-lg/semibold",
                      className: a()({ [O.wx]: null == c && !S, [O.$A]: null != c && !S }),
                      children:
                          null != h || (H && null == x)
                              ? D.intl.string(D.t.zOmK9N)
                              : null != x
                                ? D.intl.string(D.t.d1lrmU)
                                : D.intl.string(D.t["/s1xR7"]),
                  }),
                  (H && null != h && null == x) || R
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)("div", {
                                    className: O.jx,
                                    children: [
                                        (0, s.jsx)(E.A, { user: h, size: L._3.SIZE_40 }),
                                        (0, s.jsxs)("div", {
                                            className: O.gn,
                                            children: [
                                                (0, s.jsx)(g.D, {
                                                    variant: "heading-md/semibold",
                                                    children: k.Ay.getName(h),
                                                }),
                                                (0, s.jsxs)("div", {
                                                    className: O.Ik,
                                                    children: [" ", k.Ay.getUserTag(h)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", { className: O._c, children: W() }),
                            ],
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: O.I0, children: W() }),
                                null == x && (0, s.jsx)(y, { giftCode: t, onClose: u }),
                                (0, s.jsx)("div", { className: O.yF }),
                                (() => {
                                    let e;
                                    if (null == t) return null;
                                    switch (_) {
                                        case o.e.Modes.SUCCESS:
                                            e = D.intl.string(D.t.XVvPjU);
                                            break;
                                        case o.e.Modes.ERROR:
                                            e = D.intl.string(D.t.i4GM3L);
                                            break;
                                        default:
                                            e = D.intl.string(D.t.OpuAlK);
                                    }
                                    return (0, s.jsxs)("div", {
                                        className: O.PN,
                                        children: [
                                            null != t &&
                                                (0, s.jsx)(m.D, {
                                                    label: D.intl.string(D.t["/dG4NA"]),
                                                    children: (0, s.jsx)(o.e, {
                                                        hideMessage: v ? D.intl.string(D.t["0RLn47"]) : null,
                                                        value: (0, P.Zq)(t),
                                                        mode: _,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != i && (0, P.AK)(new I.A({ code: t, maxUses: 1 }), i),
                                                                (0, j.C)(
                                                                    e,
                                                                    () => A(o.e.Modes.SUCCESS),
                                                                    () => A(o.e.Modes.ERROR),
                                                                ),
                                                                setTimeout(() => {
                                                                    A(o.e.Modes.DEFAULT);
                                                                }, 1500);
                                                        },
                                                        supportsCopy: j.p5,
                                                        className: O.__invalid_copyInput,
                                                        buttonColor: C.XD.LINK,
                                                        buttonLook: C.pR.LINK,
                                                    }),
                                                }),
                                            (0, s.jsx)("div", { className: O.W$, children: D.intl.string(D.t.QWKUpn) }),
                                        ],
                                    });
                                })(),
                            ],
                        }),
              ],
          });
}
function y(e) {
    let { giftCode: t, onClose: n } = e;
    l.useEffect(() => {
        x.A.fetchRelationships(), (0, _.u)();
    }, []);
    let [i, a] = l.useState(),
        [r, C] = l.useState(!1),
        [o, m] = l.useState(!1),
        { userAffinities: g, isLoading: M } = (0, d.cf)([A.A], () => ({
            userAffinities: A.A.getUserAffinitiesMap(),
            isLoading: A.A.isFetching(),
        })),
        f = Array.from(g.keys()).sort((e, t) => A.A.compare(e, t)),
        N = (0, d.bG)([v.A], () => v.A.getFriendIDs()),
        I = c().difference(N, f),
        T = [...f, ...I],
        j = (0, d.bG)([R.default], () => R.default.filter((e) => T.includes(e.id) && !e.bot), [T]);
    if (null == j || 0 === j.length) return null;
    let P = c().sortBy(j, (e) => T.indexOf(e.id));
    return (0, s.jsxs)("div", {
        className: O.vt,
        children: [
            (0, s.jsxs)("div", {
                className: O.AQ,
                children: [
                    (0, s.jsx)(H.Z, {
                        selectionMode: "single",
                        label: D.intl.string(D.t.MJw05f),
                        placeholder: D.intl.string(D.t.J019jZ),
                        loading: M,
                        value: i,
                        onSelectionChange: (e) => {
                            a(e), C(!1);
                        },
                        options: P.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${k.Ay.getUserTag(e)}`,
                            leading: (0, s.jsx)(E.A, { user: e, size: L._3.SIZE_20 }),
                        })),
                    }),
                    (0, s.jsx)("div", {
                        className: O.Qg,
                        children: (0, s.jsx)(u.$, {
                            disabled: null == i,
                            loading: o,
                            onClick: () => {
                                m(!0),
                                    (0, p.UN)(i, t)
                                        .then(() => {
                                            n(), (0, h.bz)();
                                        })
                                        .catch(() => {
                                            C(!0), m(!1);
                                        });
                            },
                            text: D.intl.string(D.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: r ? O.Sc : O.W$,
                children: r ? D.intl.string(D.t.jo5Vbl) : D.intl.string(D.t["8/N3v3"]),
            }),
        ],
    });
}
