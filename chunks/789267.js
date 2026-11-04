i.d(s, { default: () => S });
var t = i(477900),
    a = i(189213),
    r = i(834730),
    n = i(363487),
    l = i(582128),
    d = i(503698),
    o = i.n(d),
    c = i(805251),
    u = i(104510),
    x = i(646514),
    m = i(939249),
    p = i(470934),
    v = i(998418),
    h = i(813847),
    j = i(577930),
    g = i(652242),
    N = i(439156),
    b = i(742534),
    I = i(867060),
    A = i(792996),
    y = i(434031);
function k(e) {
    let { canUseBoosts: s, guildId: i, powerup: a, isNewPerk: n, forceStaticImages: d } = e,
        [k, w] = l.useState(!1),
        S = (0, v.Ay)(i, a),
        f = (0, h.e)(a, S, !1),
        E = (0, v.dy)(S),
        { disabled: _ } = (0, p.A)(i, a, E),
        { onActivate: C, error: M } = (0, b.A)(i, a);
    (0, I.A)(M);
    let P = !s || _,
        R = E && !P,
        T = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("div", {
                    className: y.R9,
                    children: [
                        (0, t.jsx)("div", {
                            className: o()(y._W, { [y.vu]: E }),
                            children: (0, t.jsx)(g.l, { powerup: a, isHovering: !P && k, forceStaticImage: d }),
                        }),
                        n &&
                            (0, t.jsx)("div", {
                                className: y.qS,
                                children: (0, t.jsx)(c.E, { type: "new", variant: "primary" }),
                            }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: y.xQ,
                    children: [
                        (0, t.jsxs)("div", {
                            className: y.U7,
                            children: [
                                (0, t.jsx)("div", {
                                    children: (0, t.jsx)(r.E, {
                                        variant: "body-sm/medium",
                                        color: (E || k) && !P ? "text-strong" : "text-subtle",
                                        children: a.description,
                                    }),
                                }),
                                (0, t.jsxs)("div", {
                                    children: [
                                        f?.type === "expiring" && (0, t.jsx)(j.P5, { dateString: f.expiringAt }),
                                        f?.type === "removing" && (0, t.jsx)(j.Yq, { removingAt: f.removingAt }),
                                        f?.type === "active" && (0, t.jsx)(j.TG, { text: f.statusText }),
                                        null == f &&
                                            (0, t.jsxs)("div", {
                                                className: y.II,
                                                children: [
                                                    (0, t.jsx)(u._, {
                                                        size: "sm",
                                                        color: x.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                                    }),
                                                    (0, t.jsx)(r.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        children: A.intl.formatToPlainString(A.t.t2Wbo1, {
                                                            required: a.cost,
                                                            decorator: "",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        R && (0, t.jsx)(N.A, { compact: !0, iconSize: "md", guildId: i, powerup: a, className: y.Rm }),
                    ],
                }),
            ],
        });
    return E
        ? (0, t.jsx)("div", {
              className: o()(y.nK, y.RO, { [y.r9]: P }),
              onMouseEnter: () => w(!0),
              onMouseLeave: () => w(!1),
              children: T,
          })
        : (0, t.jsx)(m.D, {
              className: o()(y.nK, { [y.r9]: P }),
              onMouseEnter: () => w(!0),
              onMouseLeave: () => w(!1),
              "aria-disabled": P,
              onClick: (e) => {
                  (e.stopPropagation(), P || C?.({ shouldCloseAllModals: !1 }));
              },
              children: T,
          });
}
var w = i(620968);
function S(e) {
    let {
            guildId: s,
            title: i,
            description: l,
            powerups: d,
            newPowerupSkuIdSet: o,
            forceStaticImages: c,
            footerInfoText: u,
            footerAction: x,
            ...m
        } = e,
        p = (0, n.A)(s),
        v =
            null != u && u.length > 0
                ? (0, t.jsx)("div", {
                      className: w.x,
                      children: (0, t.jsx)(r.E, {
                          variant: "body-sm/semibold",
                          color: "text-feedback-warning",
                          children: u,
                      }),
                  })
                : void 0;
    return (0, t.jsx)(a.a, {
        title: i,
        subtitle: l,
        actionBarInput: v,
        actions: null != x ? [x] : [],
        ...m,
        children: (0, t.jsx)("div", {
            className: w.p,
            children: d.map((e) =>
                (0, t.jsx)(
                    k,
                    { guildId: s, powerup: e, canUseBoosts: p ?? !1, isNewPerk: o?.has(e.skuId), forceStaticImages: c },
                    e.skuId,
                ),
            ),
        }),
    });
}
