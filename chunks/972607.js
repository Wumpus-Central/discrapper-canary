n.d(t, {
    A: () => k,
}),
    n(896048),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(311907),
    u = n(732955),
    d = n(421380),
    f = n(397927),
    p = n(398590),
    _ = n(49229),
    h = n(966327),
    m = n(841702),
    g = n(769015),
    E = n(242874),
    b = n(552736),
    y = n(810498),
    O = n(219271),
    A = n(21119),
    v = n(7133),
    S = n(994500),
    I = n(351906),
    T = n(287809),
    C = n(957565),
    N = n(45938),
    R = n(927578),
    w = n(427262),
    P = n(937008),
    D = n(652215),
    x = n(788868),
    L = n(985018),
    j = n(381907);
let M = 1500;

function k(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: o,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: p,
            giftRecipient: _,
            giftMessageError: E,
            isSendingMessage: O,
        } = e,
        [A, S] = i.useState(f.e2O.Modes.DEFAULT),
        T = (0, c.bG)([I.A], () => I.A.enabled),
        k = p || (null != l && null != _),
        G = (null == a ? void 0 : a.productLine) === D.EZt.COLLECTIBLES,
        V = (0, b.A)(),
        { selectedGiftingPromotionReward: F } = (0, P.Pv)(),
        B = null == V ? void 0 : V.giftPurchaseConfirmation,
        H = (0, m.Mv)(null == F ? void 0 : F.skuId),
        Y = (0, y.Mq)(o) && null != H && null != B,
        W = () => (null != o ? o.skuId : null != a ? a.id : null),
        K = () => {
            let e;
            return null != E
                ? L.intl.string(L.t.qB8aya)
                : null == o
                  ? null
                  : ((e =
                        o.interval === x.WT.MONTH
                            ? k
                                ? Y
                                    ? B.monthGiftText
                                    : L.t["4ZJ+7Z"]
                                : L.t["P+z55d"]
                            : k
                              ? Y
                                  ? B.yearGiftText
                                  : L.t.p0pZXP
                              : L.t.bXqk3o),
                    L.intl.format(e, {
                        skuName: (0, R.RH)(o.id),
                        intervalCount: o.intervalCount,
                    }));
        },
        z = () =>
            null != _ || (p && null == E)
                ? L.intl.string(L.t.zOmK9N)
                : null != E
                  ? L.intl.string(L.t.d1lrmU)
                  : L.intl.string(L.t["/s1xR7"]),
        q = (e, t) => {
            null != a &&
                (0, N.AK)(
                    new v.A({
                        code: t,
                        maxUses: 1,
                    }),
                    a,
                ),
                (0, C.C)(
                    e,
                    () => S(f.e2O.Modes.SUCCESS),
                    () => S(f.e2O.Modes.ERROR),
                ),
                setTimeout(() => {
                    S(f.e2O.Modes.DEFAULT);
                }, M);
        },
        X = () => {
            let e;
            if (null == t) return null;
            switch (A) {
                case f.e2O.Modes.SUCCESS:
                    e = L.intl.string(L.t.XVvPjU);
                    break;
                case f.e2O.Modes.ERROR:
                    e = L.intl.string(L.t.i4GM3L);
                    break;
                default:
                    e = L.intl.string(L.t.OpuAlK);
            }
            return (0, r.jsxs)("div", {
                className: j.PN,
                children: [
                    null != t &&
                        (0, r.jsx)(f.D0$, {
                            label: L.intl.string(L.t["/dG4NA"]),
                            children: (0, r.jsx)(f.e2O, {
                                hideMessage: T ? L.intl.string(L.t["0RLn47"]) : null,
                                value: (0, N.Zq)(t),
                                mode: A,
                                text: e,
                                onCopy: (e) => q(e, t),
                                supportsCopy: C.p5,
                                className: j.__invalid_copyInput,
                                buttonColor: d.XD.LINK,
                                buttonLook: d.pR.LINK,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: j.W$,
                        children: L.intl.string(L.t.QWKUpn),
                    }),
                ],
            });
        },
        Z = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: j.I0,
                        children: K(),
                    }),
                    null == E &&
                        (0, r.jsx)(U, {
                            giftCode: t,
                            onClose: u,
                        }),
                    (0, r.jsx)("div", {
                        className: j.yF,
                    }),
                    X(),
                ],
            }),
        Q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: j.jx,
                        children: [
                            (0, r.jsx)(h.A, {
                                user: _,
                                size: f._3J.SIZE_40,
                            }),
                            (0, r.jsxs)("div", {
                                className: j.gn,
                                children: [
                                    (0, r.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: w.Ay.getName(_),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: j.Ik,
                                        children: [" ", w.Ay.getUserTag(_)],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: j._c,
                        children: K(),
                    }),
                ],
            });
    return O
        ? (0, r.jsxs)("div", {
              className: j.EL,
              children: [
                  null != n
                      ? (0, r.jsx)(g.A, {
                            game: n,
                            className: j.__invalid_icon,
                            size: g.M.LARGE,
                            skuId: W(),
                        })
                      : null,
                  (0, r.jsx)(f.y$y, {
                      type: f.tVU.PULSING_ELLIPSIS,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(j.EL, {
                  [j.L1]: Y,
              }),
              children: [
                  null != n
                      ? (0, r.jsx)(g.A, {
                            game: n,
                            className: j.__invalid_icon,
                            size: g.M.LARGE,
                            skuId: W(),
                        })
                      : null,
                  (0, r.jsx)(f.Heading, {
                      variant: "heading-lg/semibold",
                      className: s()({
                          [j.wx]: null == l && !G,
                          [j.$A]: null != l && !G,
                      }),
                      children: z(),
                  }),
                  (p && null != _ && null == E) || k ? Q() : Z(),
              ],
          });
}
let U = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        _.A.fetchRelationships(), (0, O.u)();
    }, []);
    let [a, s] = i.useState(),
        [o, d] = i.useState(!1),
        [m, g] = i.useState(!1),
        { userAffinities: b, isLoading: y } = (0, c.cf)([A.A], () => ({
            userAffinities: A.A.getUserAffinitiesMap(),
            isLoading: A.A.isFetching(),
        })),
        v = Array.from(b.keys()).sort((e, t) => A.A.compare(e, t)),
        I = (0, c.bG)([S.A], () => S.A.getFriendIDs()),
        C = l().difference(I, v),
        N = [...v, ...C],
        R = (0, c.bG)([T.default], () => T.default.filter((e) => N.includes(e.id) && !e.bot), [N]);
    if (null == R || 0 === R.length) return null;
    let P = l().sortBy(R, (e) => N.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: j.vt,
        children: [
            (0, r.jsxs)("div", {
                className: j.AQ,
                children: [
                    (0, r.jsx)(f.ZiE, {
                        selectionMode: "single",
                        label: L.intl.string(L.t.MJw05f),
                        placeholder: L.intl.string(L.t.J019jZ),
                        loading: y,
                        value: a,
                        onSelectionChange: (e) => {
                            s(e), d(!1);
                        },
                        options: P.map((e) => ({
                            id: e.id,
                            value: e,
                            label: "".concat(w.Ay.getUserTag(e)),
                            leading: (0, r.jsx)(h.A, {
                                user: e,
                                size: f._3J.SIZE_20,
                            }),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: j.Qg,
                        children: (0, r.jsx)(u.$nd, {
                            disabled: null == a,
                            loading: m,
                            onClick: () => {
                                g(!0),
                                    (0, E.UN)(a, t)
                                        .then(() => {
                                            n(), (0, p.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), g(!1);
                                        });
                            },
                            text: L.intl.string(L.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o ? j.Sc : j.W$,
                children: o ? L.intl.string(L.t.jo5Vbl) : L.intl.string(L.t["8/N3v3"]),
            }),
        ],
    });
};
