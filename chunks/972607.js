n.d(t, { A: () => S });
var s = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(735438),
    d = n.n(r),
    c = n(17928),
    u = n(821609),
    C = n(862482),
    o = n(109802),
    L = n(452027),
    m = n(778712),
    g = n(534514),
    M = n(289873),
    H = n(783878),
    h = n(398590),
    E = n(717398),
    p = n(966327),
    x = n(769015),
    f = n(242874),
    N = n(380619),
    _ = n(219271),
    A = n(427358),
    I = n(7133),
    v = n(994500),
    T = n(351906),
    R = n(287809),
    j = n(957565),
    U = n(45938),
    P = n(428262),
    Z = n(427262),
    b = n(937008),
    k = n(652215),
    w = n(202541),
    O = n(375708),
    D = n(340188);
function S(e) {
    let {
            giftCode: t,
            application: n,
            sku: i,
            subscriptionPlan: r,
            selectedGiftStyle: d,
            onClose: u,
            hasSentMessage: H,
            giftRecipient: h,
            giftMessageError: E,
            isSendingMessage: f,
        } = e,
        [_, A] = l.useState(o.e.Modes.DEFAULT),
        v = (0, c.bG)([T.A], () => T.A.enabled),
        R = H || (null != d && null != h),
        S = i?.productLine === k.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: F } = (0, b.Pv)(),
        G = (0, N.Mq)(r),
        K = () => (null != r ? r.skuId : null != i ? i.id : null),
        W = () => {
            let e;
            return null != E
                ? O.intl.string(O.t.qB8aya)
                : null == r
                  ? null
                  : ((e =
                        r.interval === w.WT.MONTH ? (R ? O.t["4ZJ+7Z"] : O.t["P+z55d"]) : R ? O.t.p0pZXP : O.t.bXqk3o),
                    O.intl.format(e, { skuName: (0, P.RH)(r.id), intervalCount: r.intervalCount }));
        };
    return f
        ? (0, s.jsxs)("div", {
              className: D.EL,
              children: [
                  null != n
                      ? (0, s.jsx)(x.A, { game: n, className: D.__invalid_icon, size: x.M.LARGE, skuId: K() })
                      : null,
                  (0, s.jsx)(M.y, { type: M.t.PULSING_ELLIPSIS }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: a()(D.EL, { [D.L1]: G && null != F }),
              children: [
                  null != n
                      ? (0, s.jsx)(x.A, { game: n, className: D.__invalid_icon, size: x.M.LARGE, skuId: K() })
                      : null,
                  (0, s.jsx)(g.D, {
                      variant: "heading-lg/semibold",
                      className: a()({ [D.wx]: null == d && !S, [D.$A]: null != d && !S }),
                      children:
                          null != h || (H && null == E)
                              ? O.intl.string(O.t.zOmK9N)
                              : null != E
                                ? O.intl.string(O.t.d1lrmU)
                                : O.intl.string(O.t["/s1xR7"]),
                  }),
                  (H && null != h && null == E) || R
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)("div", {
                                    className: D.jx,
                                    children: [
                                        (0, s.jsx)(p.A, { user: h, size: m._3.SIZE_40 }),
                                        (0, s.jsxs)("div", {
                                            className: D.gn,
                                            children: [
                                                (0, s.jsx)(g.D, {
                                                    variant: "heading-md/semibold",
                                                    children: Z.Ay.getName(h),
                                                }),
                                                (0, s.jsxs)("div", {
                                                    className: D.Ik,
                                                    children: [" ", Z.Ay.getUserTag(h)],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", { className: D._c, children: W() }),
                            ],
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: D.I0, children: W() }),
                                null == E && (0, s.jsx)(y, { giftCode: t, onClose: u }),
                                (0, s.jsx)("div", { className: D.yF }),
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
                                    return (0, s.jsxs)("div", {
                                        className: D.PN,
                                        children: [
                                            null != t &&
                                                (0, s.jsx)(L.D, {
                                                    label: O.intl.string(O.t["/dG4NA"]),
                                                    children: (0, s.jsx)(o.e, {
                                                        hideMessage: v ? O.intl.string(O.t["0RLn47"]) : null,
                                                        value: (0, U.Zq)(t),
                                                        mode: _,
                                                        text: e,
                                                        onCopy: (e) => {
                                                            null != i && (0, U.AK)(new I.A({ code: t, maxUses: 1 }), i),
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
                                                        className: D.__invalid_copyInput,
                                                        buttonColor: C.XD.LINK,
                                                        buttonLook: C.pR.LINK,
                                                    }),
                                                }),
                                            (0, s.jsx)("div", { className: D.W$, children: O.intl.string(O.t.QWKUpn) }),
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
        E.A.fetchRelationships(), (0, _.u)();
    }, []);
    let [i, a] = l.useState(),
        [r, C] = l.useState(!1),
        [o, L] = l.useState(!1),
        { userAffinities: g, isLoading: M } = (0, c.cf)([A.A], () => ({
            userAffinities: A.A.getUserAffinitiesMap(),
            isLoading: A.A.isFetching(),
        })),
        x = Array.from(g.keys()).sort((e, t) => A.A.compare(e, t)),
        N = (0, c.bG)([v.A], () => v.A.getFriendIDs()),
        I = d().difference(N, x),
        T = [...x, ...I],
        j = (0, c.bG)([R.default], () => R.default.filter((e) => T.includes(e.id) && !e.bot), [T]);
    if (null == j || 0 === j.length) return null;
    let U = d().sortBy(j, (e) => T.indexOf(e.id));
    return (0, s.jsxs)("div", {
        className: D.vt,
        children: [
            (0, s.jsxs)("div", {
                className: D.AQ,
                children: [
                    (0, s.jsx)(H.Z, {
                        selectionMode: "single",
                        label: O.intl.string(O.t.MJw05f),
                        placeholder: O.intl.string(O.t.J019jZ),
                        loading: M,
                        value: i,
                        onSelectionChange: (e) => {
                            a(e), C(!1);
                        },
                        options: U.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${Z.Ay.getUserTag(e)}`,
                            leading: (0, s.jsx)(p.A, { user: e, size: m._3.SIZE_20 }),
                        })),
                    }),
                    (0, s.jsx)("div", {
                        className: D.Qg,
                        children: (0, s.jsx)(u.$, {
                            disabled: null == i,
                            loading: o,
                            onClick: () => {
                                L(!0),
                                    (0, f.UN)(i, t)
                                        .then(() => {
                                            n(), (0, h.bz)();
                                        })
                                        .catch(() => {
                                            C(!0), L(!1);
                                        });
                            },
                            text: O.intl.string(O.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: r ? D.Sc : D.W$,
                children: r ? O.intl.string(O.t.jo5Vbl) : O.intl.string(O.t["8/N3v3"]),
            }),
        ],
    });
}
