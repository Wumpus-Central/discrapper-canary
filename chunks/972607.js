n.d(t, {
    A: () => M,
}),
    n(896048),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(732955),
    d = n(421380),
    f = n(397927),
    p = n(398590),
    _ = n(49229),
    h = n(966327),
    m = n(769015),
    g = n(242874),
    E = n(810498),
    y = n(219271),
    b = n(21119),
    O = n(7133),
    v = n(994500),
    A = n(351906),
    I = n(287809),
    S = n(957565),
    T = n(45938),
    C = n(927578),
    N = n(427262),
    w = n(937008),
    R = n(652215),
    P = n(788868),
    D = n(985018),
    L = n(381907);
let x = 1500;

function M(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: s,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: p,
            giftRecipient: _,
            giftMessageError: g,
            isSendingMessage: y,
        } = e,
        [b, v] = i.useState(f.e2O.Modes.DEFAULT),
        I = (0, c.bG)([A.A], () => A.A.enabled),
        M = p || (null != l && null != _),
        k = (null == a ? void 0 : a.productLine) === R.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: U } = (0, w.Pv)(),
        G = (0, E.Mq)(s) && null != U,
        F = () => (null != s ? s.skuId : null != a ? a.id : null),
        V = () => {
            let e;
            return null != g
                ? D.intl.string(D.t.qB8aya)
                : null == s
                  ? null
                  : ((e =
                        s.interval === P.WT.MONTH ? (M ? D.t["4ZJ+7Z"] : D.t["P+z55d"]) : M ? D.t.p0pZXP : D.t.bXqk3o),
                    D.intl.format(e, {
                        skuName: (0, C.RH)(s.id),
                        intervalCount: s.intervalCount,
                    }));
        },
        B = () =>
            null != _ || (p && null == g)
                ? D.intl.string(D.t.zOmK9N)
                : null != g
                  ? D.intl.string(D.t.d1lrmU)
                  : D.intl.string(D.t["/s1xR7"]),
        H = (e, t) => {
            null != a &&
                (0, T.AK)(
                    new O.A({
                        code: t,
                        maxUses: 1,
                    }),
                    a,
                ),
                (0, S.C)(
                    e,
                    () => v(f.e2O.Modes.SUCCESS),
                    () => v(f.e2O.Modes.ERROR),
                ),
                setTimeout(() => {
                    v(f.e2O.Modes.DEFAULT);
                }, x);
        },
        Y = () => {
            let e;
            if (null == t) return null;
            switch (b) {
                case f.e2O.Modes.SUCCESS:
                    e = D.intl.string(D.t.XVvPjU);
                    break;
                case f.e2O.Modes.ERROR:
                    e = D.intl.string(D.t.i4GM3L);
                    break;
                default:
                    e = D.intl.string(D.t.OpuAlK);
            }
            return (0, r.jsxs)("div", {
                className: L.PN,
                children: [
                    null != t &&
                        (0, r.jsx)(f.D0$, {
                            label: D.intl.string(D.t["/dG4NA"]),
                            children: (0, r.jsx)(f.e2O, {
                                hideMessage: I ? D.intl.string(D.t["0RLn47"]) : null,
                                value: (0, T.Zq)(t),
                                mode: b,
                                text: e,
                                onCopy: (e) => H(e, t),
                                supportsCopy: S.p5,
                                className: L.__invalid_copyInput,
                                buttonColor: d.XD.LINK,
                                buttonLook: d.pR.LINK,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: L.W$,
                        children: D.intl.string(D.t.QWKUpn),
                    }),
                ],
            });
        },
        W = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: L.I0,
                        children: V(),
                    }),
                    null == g &&
                        (0, r.jsx)(j, {
                            giftCode: t,
                            onClose: u,
                        }),
                    (0, r.jsx)("div", {
                        className: L.yF,
                    }),
                    Y(),
                ],
            }),
        K = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: L.jx,
                        children: [
                            (0, r.jsx)(h.A, {
                                user: _,
                                size: f._3J.SIZE_40,
                            }),
                            (0, r.jsxs)("div", {
                                className: L.gn,
                                children: [
                                    (0, r.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: N.Ay.getName(_),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: L.Ik,
                                        children: [" ", N.Ay.getUserTag(_)],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: L._c,
                        children: V(),
                    }),
                ],
            });
    return y
        ? (0, r.jsxs)("div", {
              className: L.EL,
              children: [
                  null != n
                      ? (0, r.jsx)(m.A, {
                            game: n,
                            className: L.__invalid_icon,
                            size: m.M.LARGE,
                            skuId: F(),
                        })
                      : null,
                  (0, r.jsx)(f.y$y, {
                      type: f.tVU.PULSING_ELLIPSIS,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: o()(L.EL, {
                  [L.L1]: G,
              }),
              children: [
                  null != n
                      ? (0, r.jsx)(m.A, {
                            game: n,
                            className: L.__invalid_icon,
                            size: m.M.LARGE,
                            skuId: F(),
                        })
                      : null,
                  (0, r.jsx)(f.Heading, {
                      variant: "heading-lg/semibold",
                      className: o()({
                          [L.wx]: null == l && !k,
                          [L.$A]: null != l && !k,
                      }),
                      children: B(),
                  }),
                  (p && null != _ && null == g) || M ? K() : W(),
              ],
          });
}
let j = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        _.A.fetchRelationships(), (0, y.u)();
    }, []);
    let [a, o] = i.useState(),
        [s, d] = i.useState(!1),
        [m, E] = i.useState(!1),
        { userAffinities: O, isLoading: A } = (0, c.cf)([b.A], () => ({
            userAffinities: b.A.getUserAffinitiesMap(),
            isLoading: b.A.isFetching(),
        })),
        S = Array.from(O.keys()).sort((e, t) => b.A.compare(e, t)),
        T = (0, c.bG)([v.A], () => v.A.getFriendIDs()),
        C = l().difference(T, S),
        w = [...S, ...C],
        R = (0, c.bG)([I.default], () => I.default.filter((e) => w.includes(e.id) && !e.bot), [w]);
    if (null == R || 0 === R.length) return null;
    let P = l().sortBy(R, (e) => w.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: L.vt,
        children: [
            (0, r.jsxs)("div", {
                className: L.AQ,
                children: [
                    (0, r.jsx)(f.ZiE, {
                        selectionMode: "single",
                        label: D.intl.string(D.t.MJw05f),
                        placeholder: D.intl.string(D.t.J019jZ),
                        loading: A,
                        value: a,
                        onSelectionChange: (e) => {
                            o(e), d(!1);
                        },
                        options: P.map((e) => ({
                            id: e.id,
                            value: e,
                            label: "".concat(N.Ay.getUserTag(e)),
                            leading: (0, r.jsx)(h.A, {
                                user: e,
                                size: f._3J.SIZE_20,
                            }),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: L.Qg,
                        children: (0, r.jsx)(u.$nd, {
                            disabled: null == a,
                            loading: m,
                            onClick: () => {
                                E(!0),
                                    (0, g.UN)(a, t)
                                        .then(() => {
                                            n(), (0, p.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), E(!1);
                                        });
                            },
                            text: D.intl.string(D.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s ? L.Sc : L.W$,
                children: s ? D.intl.string(D.t.jo5Vbl) : D.intl.string(D.t["8/N3v3"]),
            }),
        ],
    });
};
