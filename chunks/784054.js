n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(837381),
    u = n(741918),
    o = n(646514),
    d = n(866665),
    c = n(939249),
    I = n(820081),
    v = n(307301),
    f = n(260762),
    p = n(298072),
    m = n(317097),
    g = n(466459),
    x = n(623373),
    h = n(561769),
    A = n(758836),
    _ = n(792996),
    E = n(699704);
function C(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: o,
            wrap: d,
            overflowProps: c,
            onTrackClick: I,
            parentTabIndex: v,
        } = e,
        m = (0, p.Q)(t),
        {
            shownVariants: g,
            totalVariants: h,
            hasOverflow: A,
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, x.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, c?.maxVariantsToShow]),
        _ = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, p.n)(t, n));
            },
            [t],
        ),
        C = i.useId(),
        R = (0, f.A)(`shop-variants-group-${t.storeListingId}-${C}`, u.Gl.HORIZONTAL);
    return 0 === g.length
        ? null
        : (0, r.jsx)(l.hD, {
              navigator: R,
              children: (0, r.jsx)(l.PR, {
                  children: (e) => {
                      let { ref: i, ...l } = e;
                      return (0, r.jsxs)("div", {
                          className: a()({ [E.yZ]: o, [E.sz]: !o, [E.LV]: d }, E.lO),
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
                                          zIndex: h - Math.abs(m - t),
                                          onVariantClick: _,
                                          onTrackClick: I,
                                          parentTabIndex: v,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != c &&
                                  A &&
                                  (0, r.jsx)(k, {
                                      zIndex: m >= c.maxVariantsToShow - 1 ? h + 1 : 0,
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
            onVariantClick: u,
            onVariantEnter: o,
            onVariantExit: I,
            zIndex: v,
            onTrackClick: f,
            parentTabIndex: p,
        } = e,
        { onFocus: m, ...x } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: h } = (0, g.h)(t),
        C = i.useCallback(
            (e) => {
                (f?.(A.sH.VARIANT_CLICK, n), u(e, n), m());
            },
            [u, m, n, f],
        ),
        b = h ? `${t.variantLabel}, ${_.intl.string(_.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(d.m, {
        text: _.intl.string(_.t["6cfuDj"]),
        shouldShow: h,
        ariaHidden: !0,
        children: (0, r.jsx)(c.D, {
            "aria-label": b,
            onClick: C,
            onMouseEnter: o,
            onMouseLeave: I,
            className: a()(E.bP, { [E.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: v },
            ...x,
            tabIndex: -1 === p ? -1 : x.tabIndex,
            children: h && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, m.qt)(t.variantValue) && 0.3 > (0, m.OK)((0, m.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(I.CheckmarkSmallBoldIcon, {
        className: E.U,
        color: n ? o.A.colors.BLACK.css : o.A.colors.WHITE.css,
    });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: u, onTrackClick: o, parentTabIndex: d } = e,
        { onFocus: I, ...f } = (0, l.rm)(`shop-variants-group-${u}-overflow`),
        p = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.(A.sH.VARIANT_CLICK_MORE), s(e), I());
            },
            [s, I, o],
        );
    return (0, r.jsx)(c.D, {
        "aria-label": _.intl.string(_.t["+0zcgs"]),
        onClick: p,
        className: a()(E.bP, E.V3, { [E.wH]: n }),
        style: { zIndex: t },
        ...f,
        tabIndex: -1 === d ? -1 : f.tabIndex,
        children: (0, r.jsx)(v.PlusSmallIcon, { className: E.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: a,
            overflowProps: l,
            onTrackClick: u,
            parentTabIndex: o,
        } = e,
        d = (0, h.Vm)(t);
    return null != d && (0, x.B1)(d)
        ? (0, r.jsx)(C, {
              product: d,
              onVariantEnter: s,
              onVariantExit: a,
              isCollapsed: n,
              wrap: i,
              overflowProps: l,
              onTrackClick: u,
              parentTabIndex: o,
          })
        : null;
};
