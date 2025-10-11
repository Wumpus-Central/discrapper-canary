n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    s = n(607070),
    o = n(594174),
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
            isFullScreen: n,
            sortedCategories: o,
            transitionToTab: a,
            transitionState: c,
            updateAnalyticsState: u,
            refreshCategories: h,
        } = e,
        v = S();
    O(v);
    let x = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        [y, j] = l.useState(void 0),
        T = l.useCallback(
            async (e, t, r) => {
                u(e, t);
                let l = r && !n && !x,
                    i = (0, d.$2)(t) ? b.AW.ORBS : b.AW.CATALOG;
                j(t), await a(i, l);
            },
            [n, x, a, u],
        ),
        L = (0, g.FF)("CollectiblesContent"),
        { searchError: k } = (0, f.a)();
    return L && null != k
        ? (0, r.jsx)(m.Z, {})
        : null != v
          ? (0, r.jsx)(C.Z, {
                onRetry: h,
                errorMessage: v,
                errorOrigin: C.i.SHOP_PAGE,
            })
          : E.includes(t)
            ? (0, r.jsx)(_.Z, {
                  isFullScreen: n,
                  handleTransition: T,
                  tab: t,
                  transitionState: c,
              })
            : (0, r.jsx)(p.Z, {
                  isFullScreen: n,
                  tab: t,
                  sortedCategories: o,
                  initialCategoryId: y,
                  onUnmount: () => j(void 0),
              });
}
let S = () =>
        (0, i.e7)([c.Z, u.Z], () =>
            null != c.Z.error
                ? "shop load fetch categories error: ".concat(c.Z.error.message)
                : null != u.Z.claimError
                  ? "shop load claim error: ".concat(u.Z.claimError.message)
                  : null != u.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(u.Z.fetchError.message)
                    : void 0,
        ),
    O = (e) => {
        let t = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
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
