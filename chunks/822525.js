"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(827734),
    u = n(397927),
    m = n(580630),
    g = n(500345),
    x = n(599941),
    h = n(636194),
    _ = n(11351),
    p = n(306444),
    A = n(922975),
    f = n(679428),
    j = n(778526),
    N = n(985018),
    E = n(17149);
function b(e) {
    let {
            guildId: t,
            initialEditStateId: n,
            allSubscriptionListings: l,
            priceTiers: a,
            onDeleteEditState: b,
            groupListingId: T,
            onBeforeDispatchNewListing: C,
            onAfterDispatchNewListing: I,
        } = e,
        [v, S] = s.useState(n),
        y = (0, d.bG)([h.A], () => h.A.getSubscriptionListing(v)),
        R = null == y,
        [O, G] = s.useState(R),
        L = y?.subscription_plans[0],
        D = y?.published ?? !1,
        M = y?.archived ?? !1,
        k = !M && !D && void 0 !== y,
        U = void 0 === y,
        P = (0, _.gN)(),
        [w] = A.tx(v),
        [B] = A.bL(v),
        [F] = A.I8(v),
        [H] = A.lK(v, 1024),
        V = "" !== w ? w : N.intl.string(N.t.QWhe9G),
        z = "" !== w && null != H && "" !== F && null != B && !P,
        W = A.rf(v),
        { loading: Y, error: K, handleCreateOrUpdateFromEditState: X } = A.j1(),
        { submitting: J, error: Z, publishSubscriptionListing: q } = (0, x.Yc)(),
        Q = Y || J;
    return (0, i.jsxs)("div", {
        className: E.kL,
        children: [
            (0, i.jsxs)("div", {
                className: r()(E.wx, { [E.xo]: O }),
                children: [
                    (0, i.jsx)("div", {
                        className: E.oZ,
                        children:
                            null == H
                                ? (0, i.jsx)(f.A, { className: E.wv, "aria-hidden": !0 })
                                : (0, i.jsx)("img", { className: E.F0, src: H, alt: V }),
                    }),
                    (0, i.jsxs)("div", {
                        className: E.me,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "interactive-text-active",
                                children: V,
                            }),
                            (0, i.jsx)(u.hKd, { size: 2 }),
                            (0, i.jsxs)("div", {
                                className: E.Hp,
                                children: [
                                    k &&
                                        (0, i.jsx)(u.LpS, {
                                            color: c.A.unsafe_rawColors.YELLOW_300.css,
                                            text: N.intl.string(N.t.vosPk5),
                                            className: E.vW,
                                        }),
                                    M &&
                                        (0, i.jsx)(u.LpS, {
                                            color: c.A.unsafe_rawColors.PRIMARY_500.css,
                                            text: N.intl.string(N.t.nhbtEl),
                                            className: E.KR,
                                        }),
                                    U &&
                                        (0, i.jsx)(u.LpS, {
                                            color: c.A.unsafe_rawColors.PRIMARY_500.css,
                                            text: N.intl.string(N.t.aiwXeq),
                                            className: E.s7,
                                        }),
                                    null != L &&
                                        (0, i.jsxs)(u.Text, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: [(0, m.$g)(L.price, L.currency), "/", (0, g.cV)(L)],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    O
                        ? (0, i.jsxs)("div", {
                              className: E.$s,
                              children: [
                                  (0, i.jsx)(u.QWc, {
                                      variant: "secondary",
                                      onClick: () => {
                                          A.Ts(v), R ? b?.() : G(!1);
                                      },
                                      text: N.intl.string(N.t["ETE/oC"]),
                                  }),
                                  (0, i.jsx)(u.Button, {
                                      variant: "primary",
                                      onClick: () =>
                                          X({
                                              guildId: t,
                                              editStateId: v,
                                              groupListingId: T,
                                              onBeforeDispatchNewListing: C,
                                              onAfterDispatchNewListing: (e) => {
                                                  S(e.id), I?.(e);
                                              },
                                          }),
                                      disabled: !z || !W,
                                      loading: Q,
                                      text: N.intl.string(N.t["R3BPH+"]),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(u.DUT, {
                              onClick: () => G(!0),
                              "aria-label": N.intl.string(N.t["2qPbmO"]),
                              children: (0, i.jsx)(u.R2l, { size: "xs", color: "currentColor", className: E.rD }),
                          }),
                ],
            }),
            O &&
                (0, i.jsx)(p.A, {
                    editStateId: v,
                    guildId: t,
                    groupListingId: T,
                    children: (0, i.jsx)(j.A, {
                        allSubscriptionListings: l,
                        priceTiers: a,
                        loading: Q,
                        error: K ?? Z,
                        handlePublishTier: () => {
                            o()(null != T, "group listing doesnt exist"),
                                o()(null != y, "subscription listing doesnt exist"),
                                q({ guildId: t, groupListingId: T, listingId: y.id });
                        },
                        onDeleteEditState: b,
                    }),
                }),
        ],
    });
}
