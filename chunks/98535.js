n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(607070),
    s = n(594174),
    a = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(149705),
    g = n(929255),
    f = n(752053),
    p = n(81136),
    m = n(566564),
    h = n(795477),
    C = n(215023);
let _ = [C.AW.HOME, C.AW.ORBS];
function b(e) {
    let {
            tab: t,
            sortedCategories: n,
            transitionToTab: s,
            transitionState: a,
            updateAnalyticsState: c,
            refreshCategories: u,
        } = e,
        p = v();
    E(p);
    let b = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        [S, O] = l.useState(void 0),
        [x, y] = l.useState(!0),
        j = l.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !C.y8.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        k = l.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: r,
                    isInternalShopDeeplink: l,
                    isOrbsExclusive: i,
                } = e;
                c(t, n);
                let o = r && !b,
                    a = i ? C.AW.ORBS : C.AW.CATALOG;
                O(n), y(!l), s(a, o);
            },
            [b, s, c],
        ),
        { searchError: T } = (0, d.a)();
    return null != T
        ? (0, r.jsx)(h.Z, {})
        : null != p
          ? (0, r.jsx)(f.Z, {
                onRetry: u,
                errorMessage: p,
                errorOrigin: f.i.SHOP_PAGE,
            })
          : _.includes(t)
            ? (0, r.jsx)(m.Z, {
                  handleTransition: k,
                  tab: t,
                  transitionState: a,
              })
            : (0, r.jsx)(g.Z, {
                  tab: t,
                  sortedCategories: j,
                  initialCategoryId: S,
                  showFilterInitially: x,
                  onUnmount: () => {
                      O(void 0), y(!0);
                  },
              });
}
let v = () =>
        (0, i.e7)([c.Z, u.Z], () =>
            null != c.Z.error
                ? "shop load fetch categories error: ".concat(c.Z.error.message)
                : null != u.Z.claimError
                  ? "shop load claim error: ".concat(u.Z.claimError.message)
                  : null != u.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(u.Z.fetchError.message)
                    : void 0,
        ),
    E = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, p.Z)();
        l.useEffect(() => {
            var l, i;
            null != e &&
                a.Z.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (i = null == t || null == (l = t.isStaff()) ? void 0 : l.toString())
                                ? i
                                : "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: r.toString(),
                    },
                });
        }, [e, t, n, r]);
    };
