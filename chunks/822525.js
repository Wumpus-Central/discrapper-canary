n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(827734),
    u = n(834730),
    m = n(696986),
    g = n(777666),
    h = n(123292),
    x = n(821609),
    _ = n(939249),
    p = n(22231),
    A = n(580630),
    E = n(500345),
    f = n(599941),
    j = n(636194),
    N = n(11351),
    I = n(306444),
    C = n(922975),
    b = n(457047),
    v = n(778526),
    S = n(985018),
    T = n(502650);
function y(e) {
    let {
            guildId: t,
            initialEditStateId: n,
            allSubscriptionListings: s,
            priceTiers: a,
            onDeleteEditState: y,
            groupListingId: R,
            onBeforeDispatchNewListing: L,
            onAfterDispatchNewListing: D,
        } = e,
        [O, G] = l.useState(n),
        M = (0, d.bG)([j.A], () => j.A.getSubscriptionListing(O)),
        k = null == M,
        [U, w] = l.useState(k),
        P = M?.subscription_plans[0],
        B = M?.published ?? !1,
        F = M?.archived ?? !1,
        H = !F && !B && void 0 !== M,
        V = void 0 === M,
        z = (0, N.gN)(),
        [W] = C.tx(O),
        [Y] = C.bL(O),
        [K] = C.I8(O),
        [X] = C.lK(O, 1024),
        Z = "" !== W ? W : S.intl.string(S.t.QWhe9G),
        J = "" !== W && null != X && "" !== K && null != Y && !z,
        q = C.rf(O),
        { loading: Q, error: $, handleCreateOrUpdateFromEditState: ee } = C.j1(),
        { submitting: et, error: en, publishSubscriptionListing: ei } = (0, f.Yc)(),
        el = Q || et;
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            (0, i.jsxs)("div", {
                className: r()(T.wx, { [T.xo]: U }),
                children: [
                    (0, i.jsx)("div", {
                        className: T.oZ,
                        children:
                            null == X
                                ? (0, i.jsx)(b.A, { className: T.wv, "aria-hidden": !0 })
                                : (0, i.jsx)("img", { className: T.F0, src: X, alt: Z }),
                    }),
                    (0, i.jsxs)("div", {
                        className: T.me,
                        children: [
                            (0, i.jsx)(u.E, {
                                variant: "text-md/medium",
                                color: "interactive-text-active",
                                children: Z,
                            }),
                            (0, i.jsx)(m.h, { size: 2 }),
                            (0, i.jsxs)("div", {
                                className: T.Hp,
                                children: [
                                    H &&
                                        (0, i.jsx)(g.Lp, {
                                            color: c.A.unsafe_rawColors.YELLOW_300.css,
                                            text: S.intl.string(S.t.vosPk5),
                                            className: T.vW,
                                        }),
                                    F &&
                                        (0, i.jsx)(g.Lp, {
                                            color: c.A.unsafe_rawColors.PRIMARY_500.css,
                                            text: S.intl.string(S.t.nhbtEl),
                                            className: T.KR,
                                        }),
                                    V &&
                                        (0, i.jsx)(g.Lp, {
                                            color: c.A.unsafe_rawColors.PRIMARY_500.css,
                                            text: S.intl.string(S.t.aiwXeq),
                                            className: T.s7,
                                        }),
                                    null != P &&
                                        (0, i.jsxs)(u.E, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: [(0, A.$g)(P.price, P.currency), "/", (0, E.cV)(P)],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    U
                        ? (0, i.jsxs)("div", {
                              className: T.$s,
                              children: [
                                  (0, i.jsx)(h.Q, {
                                      variant: "secondary",
                                      onClick: () => {
                                          C.Ts(O), k ? y?.() : w(!1);
                                      },
                                      text: S.intl.string(S.t["ETE/oC"]),
                                  }),
                                  (0, i.jsx)(x.$, {
                                      variant: "primary",
                                      onClick: () =>
                                          ee({
                                              guildId: t,
                                              editStateId: O,
                                              groupListingId: R,
                                              onBeforeDispatchNewListing: L,
                                              onAfterDispatchNewListing: (e) => {
                                                  G(e.id), D?.(e);
                                              },
                                          }),
                                      disabled: !J || !q,
                                      loading: el,
                                      text: S.intl.string(S.t["R3BPH+"]),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(_.D, {
                              onClick: () => w(!0),
                              "aria-label": S.intl.string(S.t["2qPbmO"]),
                              children: (0, i.jsx)(p.R, { size: "xs", color: "currentColor", className: T.rD }),
                          }),
                ],
            }),
            U &&
                (0, i.jsx)(I.A, {
                    editStateId: O,
                    guildId: t,
                    groupListingId: R,
                    children: (0, i.jsx)(v.A, {
                        allSubscriptionListings: s,
                        priceTiers: a,
                        loading: el,
                        error: $ ?? en,
                        handlePublishTier: () => {
                            o()(null != R, "group listing doesnt exist"),
                                o()(null != M, "subscription listing doesnt exist"),
                                ei({ guildId: t, groupListingId: R, listingId: M.id });
                        },
                        onDeleteEditState: y,
                    }),
                }),
        ],
    });
}
