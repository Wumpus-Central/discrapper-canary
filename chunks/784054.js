n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(837381),
    u = n(741918),
    o = n(646514),
    c = n(866665),
    d = n(939249),
    I = n(820081),
    p = n(307301),
    f = n(260762),
    m = n(298072),
    v = n(317097),
    g = n(466459),
    x = n(623373),
    C = n(561769),
    _ = n(758836),
    h = n(792996),
    E = n(699704);
function A(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: o,
            wrap: c,
            overflowProps: d,
            onTrackClick: I,
            parentTabIndex: p,
        } = e,
        v = (0, m.Q)(t),
        {
            shownVariants: g,
            totalVariants: C,
            hasOverflow: _,
        } = i.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, x.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, d?.maxVariantsToShow]),
        h = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, m.n)(t, n));
            },
            [t],
        ),
        A = i.useId(),
        R = (0, f.A)(`shop-variants-group-${t.storeListingId}-${A}`, u.Gl.HORIZONTAL);
    return 0 === g.length
        ? null
        : (0, r.jsx)(l.hD, {
              navigator: R,
              children: (0, r.jsx)(l.PR, {
                  children: (e) => {
                      let { ref: i, ...l } = e;
                      return (0, r.jsxs)("div", {
                          className: a()({ [E.yZ]: o, [E.sz]: !o, [E.LV]: c }, E.lO),
                          ref: i,
                          ...l,
                          tabIndex: -1 === p ? -1 : l.tabIndex,
                          children: [
                              g.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === v,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: C - Math.abs(v - t),
                                          onVariantClick: h,
                                          onTrackClick: I,
                                          parentTabIndex: p,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  _ &&
                                  (0, r.jsx)(k, {
                                      zIndex: v >= d.maxVariantsToShow - 1 ? C + 1 : 0,
                                      isSelected: v >= d.maxVariantsToShow - 1,
                                      onOverflowClick: d.onClick,
                                      onTrackClick: I,
                                      storeListingId: t.storeListingId,
                                      parentTabIndex: p,
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
            zIndex: p,
            onTrackClick: f,
            parentTabIndex: m,
        } = e,
        { onFocus: v, ...x } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: C } = (0, g.h)(t),
        A = i.useCallback(
            (e) => {
                (f?.(_.sH.VARIANT_CLICK, n), u(e, n), v());
            },
            [u, v, n, f],
        ),
        b = C ? `${t.variantLabel}, ${h.intl.string(h.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(c.m, {
        text: h.intl.string(h.t["6cfuDj"]),
        shouldShow: C,
        ariaHidden: !0,
        children: (0, r.jsx)(d.D, {
            "aria-label": b,
            onClick: A,
            onMouseEnter: o,
            onMouseLeave: I,
            className: a()(E.bP, { [E.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: p },
            ...x,
            tabIndex: -1 === m ? -1 : x.tabIndex,
            children: C && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, v.qt)(t.variantValue) && 0.3 > (0, v.OK)((0, v.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(I.CheckmarkSmallBoldIcon, {
        className: E.U,
        color: n ? o.A.colors.BLACK.css : o.A.colors.WHITE.css,
    });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: u, onTrackClick: o, parentTabIndex: c } = e,
        { onFocus: I, ...f } = (0, l.rm)(`shop-variants-group-${u}-overflow`),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.(_.sH.VARIANT_CLICK_MORE), s(e), I());
            },
            [s, I, o],
        );
    return (0, r.jsx)(d.D, {
        "aria-label": h.intl.string(h.t["+0zcgs"]),
        onClick: m,
        className: a()(E.bP, E.V3, { [E.wH]: n }),
        style: { zIndex: t },
        ...f,
        tabIndex: -1 === c ? -1 : f.tabIndex,
        children: (0, r.jsx)(p.PlusSmallIcon, { className: E.ab, color: "white" }),
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
        c = (0, C.Vm)(t);
    return null != c && (0, x.B1)(c)
        ? (0, r.jsx)(A, {
              product: c,
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
