n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(607070),
    s = n(594174),
    o = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(870289),
    g = n(149705),
    p = n(929255),
    f = n(752053),
    m = n(81136),
    h = n(566564),
    C = n(795477),
    _ = n(215023);
let b = [_.AW.HOME, _.AW.ORBS];
function v(e) {
    let {
            tab: t,
            sortedCategories: n,
            transitionToTab: s,
            transitionState: o,
            updateAnalyticsState: c,
            refreshCategories: u,
        } = e,
        m = x();
    E(m);
    let v = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [O, S] = l.useState(void 0),
        [y, j] = l.useState(!0),
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
                let a = r && !v,
                    o = i ? _.AW.ORBS : _.AW.CATALOG;
                S(n), j(!l), s(o, a);
            },
            [v, s, c],
        ),
        I = (0, d.FF)("CollectiblesContent"),
        { searchError: T } = (0, g.a)();
    return I && null != T
        ? (0, r.jsx)(C.Z, {})
        : null != m
          ? (0, r.jsx)(f.Z, {
                onRetry: u,
                errorMessage: m,
                errorOrigin: f.i.SHOP_PAGE,
            })
          : b.includes(t)
            ? (0, r.jsx)(h.Z, {
                  handleTransition: k,
                  tab: t,
                  transitionState: o,
              })
            : (0, r.jsx)(p.Z, {
                  tab: t,
                  sortedCategories: n,
                  initialCategoryId: O,
                  showFilterInitially: y,
                  onUnmount: () => {
                      S(void 0), j(!0);
                  },
              });
}
let x = () =>
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
            { noCache: n, includeUnpublished: r } = (0, m.Z)();
        l.useEffect(() => {
            var l, i;
            null != e &&
                o.Z.captureMessage(e, {
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
