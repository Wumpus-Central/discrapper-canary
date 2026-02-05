"use strict";
n.d(t, { A: () => M });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(732955),
    d = n(421380),
    _ = n(397927),
    f = n(398590),
    p = n(49229),
    h = n(966327),
    m = n(769015),
    g = n(242874),
    E = n(810498),
    A = n(219271),
    I = n(21119),
    T = n(7133),
    y = n(994500),
    S = n(351906),
    v = n(287809),
    C = n(957565),
    b = n(45938),
    N = n(927578),
    R = n(427262),
    O = n(937008),
    D = n(652215),
    L = n(788868),
    w = n(985018),
    x = n(381907);
let P = 1500;
function M(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: o,
            selectedGiftStyle: l,
            onClose: c,
            hasSentMessage: f,
            giftRecipient: p,
            giftMessageError: g,
            isSendingMessage: A,
        } = e,
        [I, y] = i.useState(_.e2O.Modes.DEFAULT),
        v = (0, u.bG)([S.A], () => S.A.enabled),
        M = f || (null != l && null != p),
        U = a?.productLine === D.EZt.COLLECTIBLES,
        { selectedGiftingPromotionReward: G } = (0, O.Pv)(),
        V = (0, E.Mq)(o) && null != G,
        F = () => (null != o ? o.skuId : null != a ? a.id : null),
        B = () => {
            let e;
            return null != g
                ? w.intl.string(w.t.qB8aya)
                : null == o
                  ? null
                  : ((e =
                        o.interval === L.WT.MONTH ? (M ? w.t["4ZJ+7Z"] : w.t["P+z55d"]) : M ? w.t.p0pZXP : w.t.bXqk3o),
                    w.intl.format(e, { skuName: (0, N.RH)(o.id), intervalCount: o.intervalCount }));
        },
        j = () =>
            null != p || (f && null == g)
                ? w.intl.string(w.t.zOmK9N)
                : null != g
                  ? w.intl.string(w.t.d1lrmU)
                  : w.intl.string(w.t["/s1xR7"]),
        H = (e, t) => {
            null != a && (0, b.AK)(new T.A({ code: t, maxUses: 1 }), a),
                (0, C.C)(
                    e,
                    () => y(_.e2O.Modes.SUCCESS),
                    () => y(_.e2O.Modes.ERROR),
                ),
                setTimeout(() => {
                    y(_.e2O.Modes.DEFAULT);
                }, P);
        },
        Y = () => {
            let e;
            if (null == t) return null;
            switch (I) {
                case _.e2O.Modes.SUCCESS:
                    e = w.intl.string(w.t.XVvPjU);
                    break;
                case _.e2O.Modes.ERROR:
                    e = w.intl.string(w.t.i4GM3L);
                    break;
                default:
                    e = w.intl.string(w.t.OpuAlK);
            }
            return (0, r.jsxs)("div", {
                className: x.PN,
                children: [
                    null != t &&
                        (0, r.jsx)(_.D0$, {
                            label: w.intl.string(w.t["/dG4NA"]),
                            children: (0, r.jsx)(_.e2O, {
                                hideMessage: v ? w.intl.string(w.t["0RLn47"]) : null,
                                value: (0, b.Zq)(t),
                                mode: I,
                                text: e,
                                onCopy: (e) => H(e, t),
                                supportsCopy: C.p5,
                                className: x.__invalid_copyInput,
                                buttonColor: d.XD.LINK,
                                buttonLook: d.pR.LINK,
                            }),
                        }),
                    (0, r.jsx)("div", { className: x.W$, children: w.intl.string(w.t.QWKUpn) }),
                ],
            });
        },
        W = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", { className: x.I0, children: B() }),
                    null == g && (0, r.jsx)(k, { giftCode: t, onClose: c }),
                    (0, r.jsx)("div", { className: x.yF }),
                    Y(),
                ],
            }),
        K = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: x.jx,
                        children: [
                            (0, r.jsx)(h.A, { user: p, size: _._3J.SIZE_40 }),
                            (0, r.jsxs)("div", {
                                className: x.gn,
                                children: [
                                    (0, r.jsx)(_.Heading, {
                                        variant: "heading-md/semibold",
                                        children: R.Ay.getName(p),
                                    }),
                                    (0, r.jsxs)("div", { className: x.Ik, children: [" ", R.Ay.getUserTag(p)] }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: x._c, children: B() }),
                ],
            });
    return A
        ? (0, r.jsxs)("div", {
              className: x.EL,
              children: [
                  null != n
                      ? (0, r.jsx)(m.A, { game: n, className: x.__invalid_icon, size: m.M.LARGE, skuId: F() })
                      : null,
                  (0, r.jsx)(_.y$y, { type: _.tVU.PULSING_ELLIPSIS }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: s()(x.EL, { [x.L1]: V }),
              children: [
                  null != n
                      ? (0, r.jsx)(m.A, { game: n, className: x.__invalid_icon, size: m.M.LARGE, skuId: F() })
                      : null,
                  (0, r.jsx)(_.Heading, {
                      variant: "heading-lg/semibold",
                      className: s()({ [x.wx]: null == l && !U, [x.$A]: null != l && !U }),
                      children: j(),
                  }),
                  (f && null != p && null == g) || M ? K() : W(),
              ],
          });
}
let k = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        p.A.fetchRelationships(), (0, A.u)();
    }, []);
    let [a, s] = i.useState(),
        [o, d] = i.useState(!1),
        [m, E] = i.useState(!1),
        { userAffinities: T, isLoading: S } = (0, u.cf)([I.A], () => ({
            userAffinities: I.A.getUserAffinitiesMap(),
            isLoading: I.A.isFetching(),
        })),
        C = Array.from(T.keys()).sort((e, t) => I.A.compare(e, t)),
        b = (0, u.bG)([y.A], () => y.A.getFriendIDs()),
        N = l().difference(b, C),
        O = [...C, ...N],
        D = (0, u.bG)([v.default], () => v.default.filter((e) => O.includes(e.id) && !e.bot), [O]);
    if (null == D || 0 === D.length) return null;
    let L = l().sortBy(D, (e) => O.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: x.vt,
        children: [
            (0, r.jsxs)("div", {
                className: x.AQ,
                children: [
                    (0, r.jsx)(_.ZiE, {
                        selectionMode: "single",
                        label: w.intl.string(w.t.MJw05f),
                        placeholder: w.intl.string(w.t.J019jZ),
                        loading: S,
                        value: a,
                        onSelectionChange: (e) => {
                            s(e), d(!1);
                        },
                        options: L.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${R.Ay.getUserTag(e)}`,
                            leading: (0, r.jsx)(h.A, { user: e, size: _._3J.SIZE_20 }),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: x.Qg,
                        children: (0, r.jsx)(c.$nd, {
                            disabled: null == a,
                            loading: m,
                            onClick: () => {
                                E(!0),
                                    (0, g.UN)(a, t)
                                        .then(() => {
                                            n(), (0, f.bz)();
                                        })
                                        .catch(() => {
                                            d(!0), E(!1);
                                        });
                            },
                            text: w.intl.string(w.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o ? x.Sc : x.W$,
                children: o ? w.intl.string(w.t.jo5Vbl) : w.intl.string(w.t["8/N3v3"]),
            }),
        ],
    });
};
