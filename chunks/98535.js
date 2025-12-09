n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    s = n(607070),
    o = n(594174),
    a = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(870289),
    g = n(149705),
    f = n(929255),
    p = n(752053),
    m = n(81136),
    C = n(566564),
    h = n(795477),
    _ = n(215023);
let b = [_.AW.HOME, _.AW.ORBS];
function E(e) {
    let {
            tab: t,
            sortedCategories: n,
            transitionToTab: o,
            transitionState: a,
            updateAnalyticsState: c,
            refreshCategories: u,
        } = e,
        m = v();
    S(m);
    let E = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        [x, O] = l.useState(void 0),
        [y, k] = l.useState(!0),
        T = l.useMemo(
            () =>
                n.filter(
                    (e) =>
                        !_.y8.some((t) => {
                            let { categorySkuId: n } = t;
                            return n === e.skuId;
                        }),
                ),
            [n],
        ),
        j = l.useCallback(
            (e) => {
                let {
                    sourceButton: t,
                    categorySkuId: n,
                    shouldAnimate: r,
                    isInternalShopDeeplink: l,
                    isOrbsExclusive: i,
                } = e;
                c(t, n);
                let s = r && !E,
                    a = i ? _.AW.ORBS : _.AW.CATALOG;
                O(n), k(!l), o(a, s);
            },
            [E, o, c],
        ),
        I = (0, d.FF)("CollectiblesContent"),
        { searchError: L } = (0, g.a)();
    return I && null != L
        ? (0, r.jsx)(h.Z, {})
        : null != m
          ? (0, r.jsx)(p.Z, {
                onRetry: u,
                errorMessage: m,
                errorOrigin: p.i.SHOP_PAGE,
            })
          : b.includes(t)
            ? (0, r.jsx)(C.Z, {
                  handleTransition: j,
                  tab: t,
                  transitionState: a,
              })
            : (0, r.jsx)(f.Z, {
                  tab: t,
                  sortedCategories: T,
                  initialCategoryId: x,
                  showFilterInitially: y,
                  onUnmount: () => {
                      O(void 0), k(!0);
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
    S = (e) => {
        let t = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, m.Z)();
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
