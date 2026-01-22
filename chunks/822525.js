n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    c = n.n(a),
    o = n(311907),
    d = n(827734),
    u = n(397927),
    f = n(580630),
    g = n(500345),
    b = n(599941),
    m = n(636194),
    p = n(11351),
    x = n(306444),
    h = n(922975),
    j = n(679428),
    O = n(778526),
    y = n(985018),
    v = n(17149);
function A(e) {
    var t, n;
    let {
            guildId: l,
            initialEditStateId: a,
            allSubscriptionListings: A,
            priceTiers: E,
            onDeleteEditState: N,
            groupListingId: _,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: T,
        } = e,
        [I, C] = i.useState(a),
        P = (0, o.bG)([m.A], () => m.A.getSubscriptionListing(I)),
        w = null == P,
        [R, D] = i.useState(w),
        G = null == P ? void 0 : P.subscription_plans[0],
        L = null != (t = null == P ? void 0 : P.published) && t,
        k = null != (n = null == P ? void 0 : P.archived) && n,
        M = !k && !L && void 0 !== P,
        U = void 0 === P,
        F = (0, p.gN)(),
        [B] = h.tx(I),
        [H] = h.bL(I),
        [V] = h.I8(I),
        [K] = h.lK(I, 1024),
        z = "" !== B ? B : y.intl.string(y.t.QWhe9G),
        Y = "" !== B && null != K && "" !== V && null != H && !F,
        W = h.rf(I),
        { loading: X, error: J, handleCreateOrUpdateFromEditState: Z } = h.j1(),
        { submitting: Q, error: q, publishSubscriptionListing: $ } = (0, b.Yc)(),
        ee = X || Q;
    return (0, r.jsxs)("div", {
        className: v.kL,
        children: [
            (0, r.jsxs)("div", {
                className: s()(v.wx, { [v.xo]: R }),
                children: [
                    (0, r.jsx)("div", {
                        className: v.oZ,
                        children:
                            null == K
                                ? (0, r.jsx)(j.A, {
                                      className: v.wv,
                                      "aria-hidden": !0,
                                  })
                                : (0, r.jsx)("img", {
                                      className: v.F0,
                                      src: K,
                                      alt: z,
                                  }),
                    }),
                    (0, r.jsxs)("div", {
                        className: v.me,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "interactive-text-active",
                                children: z,
                            }),
                            (0, r.jsx)(u.hKd, { size: 2 }),
                            (0, r.jsxs)("div", {
                                className: v.Hp,
                                children: [
                                    M &&
                                        (0, r.jsx)(u.LpS, {
                                            color: d.A.unsafe_rawColors.YELLOW_300.css,
                                            text: y.intl.string(y.t.vosPk5),
                                            className: v.vW,
                                        }),
                                    k &&
                                        (0, r.jsx)(u.LpS, {
                                            color: d.A.unsafe_rawColors.PRIMARY_500.css,
                                            text: y.intl.string(y.t.nhbtEl),
                                            className: v.KR,
                                        }),
                                    U &&
                                        (0, r.jsx)(u.LpS, {
                                            color: d.A.unsafe_rawColors.PRIMARY_500.css,
                                            text: y.intl.string(y.t.aiwXeq),
                                            className: v.s7,
                                        }),
                                    null != G &&
                                        (0, r.jsxs)(u.Text, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: [(0, f.$g)(G.price, G.currency), "/", (0, g.cV)(G)],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    R
                        ? (0, r.jsxs)("div", {
                              className: v.$s,
                              children: [
                                  (0, r.jsx)(u.QWc, {
                                      variant: "secondary",
                                      onClick: () => {
                                          h.Ts(I), w ? null == N || N() : D(!1);
                                      },
                                      text: y.intl.string(y.t["ETE/oC"]),
                                  }),
                                  (0, r.jsx)(u.Button, {
                                      variant: "primary",
                                      onClick: () =>
                                          Z({
                                              guildId: l,
                                              editStateId: I,
                                              groupListingId: _,
                                              onBeforeDispatchNewListing: S,
                                              onAfterDispatchNewListing: (e) => {
                                                  C(e.id), null == T || T(e);
                                              },
                                          }),
                                      disabled: !Y || !W,
                                      loading: ee,
                                      text: y.intl.string(y.t["R3BPH+"]),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(u.DUT, {
                              onClick: () => D(!0),
                              "aria-label": y.intl.string(y.t["2qPbmO"]),
                              children: (0, r.jsx)(u.R2l, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: v.rD,
                              }),
                          }),
                ],
            }),
            R &&
                (0, r.jsx)(x.A, {
                    editStateId: I,
                    guildId: l,
                    groupListingId: _,
                    children: (0, r.jsx)(O.A, {
                        allSubscriptionListings: A,
                        priceTiers: E,
                        loading: ee,
                        error: null != J ? J : q,
                        handlePublishTier: () => {
                            c()(null != _, "group listing doesnt exist"),
                                c()(null != P, "subscription listing doesnt exist"),
                                $({
                                    guildId: l,
                                    groupListingId: _,
                                    listingId: P.id,
                                });
                        },
                        onDeleteEditState: N,
                    }),
                }),
        ],
    });
}
