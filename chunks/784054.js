n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(837381),
    u = n(741918),
    o = n(646514),
    c = n(866665),
    d = n(939249),
    I = n(820081),
    f = n(307301),
    p = n(260762),
    g = n(298072),
    m = n(317097),
    v = n(466459),
    x = n(623373),
    C = n(561769),
    _ = n(758836),
    h = n(792996),
    E = n(699704);
function A(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: l,
            isCollapsed: o,
            wrap: c,
            overflowProps: d,
            onTrackClick: I,
            parentTabIndex: f,
        } = e,
        m = (0, g.Q)(t),
        {
            shownVariants: v,
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
                (e.stopPropagation(), (0, g.n)(t, n));
            },
            [t],
        ),
        A = i.useId(),
        R = (0, p.A)(`shop-variants-group-${t.storeListingId}-${A}`, u.Gl.HORIZONTAL);
    return 0 === v.length
        ? null
        : (0, r.jsx)(a.hD, {
              navigator: R,
              children: (0, r.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsxs)("div", {
                          className: s()({ [E.yZ]: o, [E.sz]: !o, [E.LV]: c }, E.lO),
                          ref: i,
                          ...a,
                          tabIndex: -1 === f ? -1 : a.tabIndex,
                          children: [
                              v.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === m,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: l,
                                          zIndex: C - Math.abs(m - t),
                                          onVariantClick: h,
                                          onTrackClick: I,
                                          parentTabIndex: f,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  _ &&
                                  (0, r.jsx)(k, {
                                      zIndex: m >= d.maxVariantsToShow - 1 ? C + 1 : 0,
                                      isSelected: m >= d.maxVariantsToShow - 1,
                                      onOverflowClick: d.onClick,
                                      onTrackClick: I,
                                      storeListingId: t.storeListingId,
                                      parentTabIndex: f,
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
            isSelected: l,
            onVariantClick: u,
            onVariantEnter: o,
            onVariantExit: I,
            zIndex: f,
            onTrackClick: p,
            parentTabIndex: g,
        } = e,
        { onFocus: m, ...x } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: C } = (0, v.h)(t),
        A = i.useCallback(
            (e) => {
                (p?.(_.sH.VARIANT_CLICK, n), u(e, n), m());
            },
            [u, m, n, p],
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
            className: s()(E.bP, { [E.wH]: l }),
            style: { backgroundColor: t.variantValue, zIndex: f },
            ...x,
            tabIndex: -1 === g ? -1 : x.tabIndex,
            children: C && (0, r.jsx)(R, { variant: t }),
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
    let { zIndex: t, isSelected: n, onOverflowClick: l, storeListingId: u, onTrackClick: o, parentTabIndex: c } = e,
        { onFocus: I, ...p } = (0, a.rm)(`shop-variants-group-${u}-overflow`),
        g = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.(_.sH.VARIANT_CLICK_MORE), l(e), I());
            },
            [l, I, o],
        );
    return (0, r.jsx)(d.D, {
        "aria-label": h.intl.string(h.t["+0zcgs"]),
        onClick: g,
        className: s()(E.bP, E.V3, { [E.wH]: n }),
        style: { zIndex: t },
        ...p,
        tabIndex: -1 === c ? -1 : p.tabIndex,
        children: (0, r.jsx)(f.PlusSmallIcon, { className: E.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: l,
            onVariantExit: s,
            overflowProps: a,
            onTrackClick: u,
            parentTabIndex: o,
        } = e,
        c = (0, C.Vm)(t);
    return null != c && (0, x.B1)(c)
        ? (0, r.jsx)(A, {
              product: c,
              onVariantEnter: l,
              onVariantExit: s,
              isCollapsed: n,
              wrap: i,
              overflowProps: a,
              onTrackClick: u,
              parentTabIndex: o,
          })
        : null;
};
