n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    o = n(607070),
    s = n(594174),
    a = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(884697),
    g = n(870289),
    f = n(149705),
    p = n(929255),
    C = n(752053),
    h = n(81136),
    _ = n(566564),
    m = n(795477),
    b = n(215023);
let E = [b.AW.HOME, b.AW.ORBS];
function v(e) {
    let {
            tab: t,
            sortedCategories: n,
            transitionToTab: s,
            transitionState: a,
            updateAnalyticsState: c,
            refreshCategories: u,
        } = e,
        h = O();
    x(h);
    let v = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        [S, y] = l.useState(void 0),
        k = l.useCallback(
            async (e, t, n) => {
                c(e, t);
                let r = n && !v,
                    l = (0, d.$2)(t) ? b.AW.ORBS : b.AW.CATALOG;
                y(t), await s(l, r);
            },
            [v, s, c],
        ),
        j = (0, g.FF)("CollectiblesContent"),
        { searchError: T } = (0, f.a)();
    return j && null != T
        ? (0, r.jsx)(m.Z, {})
        : null != h
          ? (0, r.jsx)(C.Z, {
                onRetry: u,
                errorMessage: h,
                errorOrigin: C.i.SHOP_PAGE,
            })
          : E.includes(t)
            ? (0, r.jsx)(_.Z, {
                  handleTransition: k,
                  tab: t,
                  transitionState: a,
              })
            : (0, r.jsx)(p.Z, {
                  tab: t,
                  sortedCategories: n,
                  initialCategoryId: S,
                  onUnmount: () => y(void 0),
              });
}
let O = () =>
        (0, i.e7)([c.Z, u.Z], () =>
            null != c.Z.error
                ? "shop load fetch categories error: ".concat(c.Z.error.message)
                : null != u.Z.claimError
                  ? "shop load claim error: ".concat(u.Z.claimError.message)
                  : null != u.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(u.Z.fetchError.message)
                    : void 0,
        ),
    x = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, h.Z)();
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
