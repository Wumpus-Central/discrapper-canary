n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(837381),
    u = n(741918),
    o = n(646514),
    d = n(866665),
    c = n(939249),
    f = n(820081),
    I = n(307301),
    v = n(260762),
    p = n(298072),
    m = n(317097),
    A = n(466459),
    g = n(623373),
    E = n(561769),
    x = n(758836),
    h = n(792996),
    _ = n(699704);
function C(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: o,
            wrap: d,
            overflowProps: c,
            onTrackClick: f,
            parentTabIndex: I,
        } = e,
        m = (0, p.Q)(t),
        {
            shownVariants: A,
            totalVariants: E,
            hasOverflow: x,
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, g.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, c?.maxVariantsToShow]),
        h = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, p.n)(t, n));
            },
            [t],
        ),
        C = i.useId(),
        R = (0, v.A)(`shop-variants-group-${t.storeListingId}-${C}`, u.Gl.HORIZONTAL);
    return 0 === A.length
        ? null
        : (0, r.jsx)(a.hD, {
              navigator: R,
              children: (0, r.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsxs)("div", {
                          className: l()({ [_.yZ]: o, [_.sz]: !o, [_.LV]: d }, _.lO),
                          ref: i,
                          ...a,
                          tabIndex: -1 === I ? -1 : a.tabIndex,
                          children: [
                              A.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === m,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: E - Math.abs(m - t),
                                          onVariantClick: h,
                                          onTrackClick: f,
                                          parentTabIndex: I,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != c &&
                                  x &&
                                  (0, r.jsx)(k, {
                                      zIndex: m >= c.maxVariantsToShow - 1 ? E + 1 : 0,
                                      isSelected: m >= c.maxVariantsToShow - 1,
                                      onOverflowClick: c.onClick,
                                      onTrackClick: f,
                                      storeListingId: t.storeListingId,
                                      parentTabIndex: I,
                                  }),
                          ],
                      });
                  },
              }),
          });
}
function b(e) {
    let {
            variant: t,
            variantIndex: n,
            isSelected: s,
            onVariantClick: u,
            onVariantEnter: o,
            onVariantExit: f,
            zIndex: I,
            onTrackClick: v,
            parentTabIndex: p,
        } = e,
        { onFocus: m, ...g } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: E } = (0, A.h)(t),
        C = i.useCallback(
            (e) => {
                (v?.(x.sH.VARIANT_CLICK, n), u(e, n), m());
            },
            [u, m, n, v],
        ),
        b = E ? `${t.variantLabel}, ${h.intl.string(h.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(d.m, {
        text: h.intl.string(h.t["6cfuDj"]),
        shouldShow: E,
        ariaHidden: !0,
        children: (0, r.jsx)(c.D, {
            "aria-label": b,
            onClick: C,
            onMouseEnter: o,
            onMouseLeave: f,
            className: l()(_.bP, { [_.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: I },
            ...g,
            tabIndex: -1 === p ? -1 : g.tabIndex,
            children: E && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, m.qt)(t.variantValue) && 0.3 > (0, m.OK)((0, m.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(f.B, { className: _.U, color: n ? o.A.colors.BLACK.css : o.A.colors.WHITE.css });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: u, onTrackClick: o, parentTabIndex: d } = e,
        { onFocus: f, ...v } = (0, a.rm)(`shop-variants-group-${u}-overflow`),
        p = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.(x.sH.VARIANT_CLICK_MORE), s(e), f());
            },
            [s, f, o],
        );
    return (0, r.jsx)(c.D, {
        "aria-label": h.intl.string(h.t["+0zcgs"]),
        onClick: p,
        className: l()(_.bP, _.V3, { [_.wH]: n }),
        style: { zIndex: t },
        ...v,
        tabIndex: -1 === d ? -1 : v.tabIndex,
        children: (0, r.jsx)(I.j, { className: _.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: l,
            overflowProps: a,
            onTrackClick: u,
            parentTabIndex: o,
        } = e,
        d = (0, E.Vm)(t);
    return null != d && (0, g.B1)(d)
        ? (0, r.jsx)(C, {
              product: d,
              onVariantEnter: s,
              onVariantExit: l,
              isCollapsed: n,
              wrap: i,
              overflowProps: a,
              onTrackClick: u,
              parentTabIndex: o,
          })
        : null;
};
