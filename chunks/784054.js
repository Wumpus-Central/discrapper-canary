n.d(t, { A: () => O });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(837381),
    o = n(741918),
    u = n(646514),
    d = n(866665),
    c = n(939249),
    I = n(820081),
    v = n(307301),
    f = n(260762),
    p = n(298072),
    m = n(317097),
    g = n(466459),
    x = n(623373),
    _ = n(561769),
    A = n(758836),
    E = n(792996),
    C = n(699704);
function h(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: u,
            wrap: d,
            overflowProps: c,
            onTrackClick: I,
            parentTabIndex: v,
        } = e,
        m = (0, p.Q)(t),
        {
            shownVariants: g,
            totalVariants: _,
            hasOverflow: A,
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, x.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, c?.maxVariantsToShow]),
        E = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, p.n)(t, n));
            },
            [t],
        ),
        h = i.useId(),
        R = (0, f.A)(`shop-variants-group-${t.storeListingId}-${h}`, o.Gl.HORIZONTAL);
    return 0 === g.length
        ? null
        : (0, r.jsx)(l.hD, {
              navigator: R,
              children: (0, r.jsx)(l.PR, {
                  children: (e) => {
                      let { ref: i, ...l } = e;
                      return (0, r.jsxs)("div", {
                          className: a()({ [C.yZ]: u, [C.sz]: !u, [C.LV]: d }, C.lO),
                          ref: i,
                          ...l,
                          tabIndex: -1 === v ? -1 : l.tabIndex,
                          children: [
                              g.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === m,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: _ - Math.abs(m - t),
                                          onVariantClick: E,
                                          onTrackClick: I,
                                          parentTabIndex: v,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != c &&
                                  A &&
                                  (0, r.jsx)(k, {
                                      zIndex: m >= c.maxVariantsToShow - 1 ? _ + 1 : 0,
                                      isSelected: m >= c.maxVariantsToShow - 1,
                                      onOverflowClick: c.onClick,
                                      onTrackClick: I,
                                      storeListingId: t.storeListingId,
                                      parentTabIndex: v,
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
            onVariantClick: o,
            onVariantEnter: u,
            onVariantExit: I,
            zIndex: v,
            onTrackClick: f,
            parentTabIndex: p,
        } = e,
        { onFocus: m, ...x } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: _ } = (0, g.h)(t),
        h = i.useCallback(
            (e) => {
                (f?.(A.sH.VARIANT_CLICK, n), o(e, n), m());
            },
            [o, m, n, f],
        ),
        b = _ ? `${t.variantLabel}, ${E.intl.string(E.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(d.m, {
        text: E.intl.string(E.t["6cfuDj"]),
        shouldShow: _,
        ariaHidden: !0,
        children: (0, r.jsx)(c.D, {
            "aria-label": b,
            onClick: h,
            onMouseEnter: u,
            onMouseLeave: I,
            className: a()(C.bP, { [C.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: v },
            ...x,
            tabIndex: -1 === p ? -1 : x.tabIndex,
            children: _ && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, m.qt)(t.variantValue) && 0.3 > (0, m.OK)((0, m.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(I.CheckmarkSmallBoldIcon, {
        className: C.U,
        color: n ? u.A.colors.BLACK.css : u.A.colors.WHITE.css,
    });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: o, onTrackClick: u, parentTabIndex: d } = e,
        { onFocus: I, ...f } = (0, l.rm)(`shop-variants-group-${o}-overflow`),
        p = i.useCallback(
            (e) => {
                (e.stopPropagation(), u?.(A.sH.VARIANT_CLICK_MORE), s(e), I());
            },
            [s, I, u],
        );
    return (0, r.jsx)(c.D, {
        "aria-label": E.intl.string(E.t["+0zcgs"]),
        onClick: p,
        className: a()(C.bP, C.V3, { [C.wH]: n }),
        style: { zIndex: t },
        ...f,
        tabIndex: -1 === d ? -1 : f.tabIndex,
        children: (0, r.jsx)(v.PlusSmallIcon, { className: C.ab, color: "white" }),
    });
}
let O = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: a,
            overflowProps: l,
            onTrackClick: o,
            parentTabIndex: u,
        } = e,
        d = (0, _.Vm)(t);
    return null != d && (0, x.B1)(d)
        ? (0, r.jsx)(h, {
              product: d,
              onVariantEnter: s,
              onVariantExit: a,
              isCollapsed: n,
              wrap: i,
              overflowProps: l,
              onTrackClick: o,
              parentTabIndex: u,
          })
        : null;
};
