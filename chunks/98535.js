n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(607070),
    o = n(594174),
    i = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(149705),
    f = n(929255),
    g = n(752053),
    b = n(81136),
    p = n(566564),
    m = n(795477),
    h = n(215023);
let C = [h.AW.HOME, h.AW.ORBS];
function E(e) {
    let {
            tab: t,
            sortedCategories: n,
            transitionToTab: o,
            transitionState: i,
            updateAnalyticsState: c,
            refreshCategories: u,
        } = e,
        b = v();
    S(b);
    let E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [_, x] = l.useState(void 0),
        [O, y] = l.useState(!0),
        k = l.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !h.y8.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        T = l.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: r,
                    isInternalShopDeeplink: l,
                    isOrbsExclusive: a,
                } = e;
                c(t, n);
                let s = r && !E,
                    i = a ? h.AW.ORBS : h.AW.CATALOG;
                x(n), y(!l), o(i, s);
            },
            [E, o, c],
        ),
        { searchError: j } = (0, d.a)();
    return null != j
        ? (0, r.jsx)(m.Z, {})
        : null != b
          ? (0, r.jsx)(g.Z, {
                onRetry: u,
                errorMessage: b,
                errorOrigin: g.i.SHOP_PAGE,
            })
          : C.includes(t)
            ? (0, r.jsx)(p.Z, {
                  handleTransition: T,
                  tab: t,
                  transitionState: i,
              })
            : (0, r.jsx)(f.Z, {
                  tab: t,
                  sortedCategories: k,
                  initialCategoryId: _,
                  showFilterInitially: O,
                  onUnmount: () => {
                      x(void 0), y(!0);
                  },
              });
}
let v = () =>
        (0, a.e7)([c.Z, u.Z], () =>
            null != c.Z.error
                ? "shop load fetch categories error: ".concat(c.Z.error.message)
                : null != u.Z.claimError
                  ? "shop load claim error: ".concat(u.Z.claimError.message)
                  : null != u.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(u.Z.fetchError.message)
                    : void 0,
        ),
    S = (e) => {
        let t = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, b.Z)();
        l.useEffect(() => {
            var l, a;
            null != e &&
                i.Z.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (a = null == t || null == (l = t.isStaff()) ? void 0 : l.toString())
                                ? a
                                : "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: r.toString(),
                    },
                });
        }, [e, t, n, r]);
    };
