n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(442837),
    a = n(607070),
    i = n(594174),
    o = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(884697),
    g = n(870289),
    p = n(149705),
    f = n(929255),
    C = n(752053),
    h = n(81136),
    _ = n(566564),
    m = n(795477),
    b = n(215023);
let E = [b.AW.HOME, b.AW.ORBS];
function S(e) {
    let {
            tab: t,
            isFullScreen: n,
            sortedCategories: i,
            transitionToTab: o,
            transitionState: c,
            updateAnalyticsState: u,
            refreshCategories: h,
        } = e,
        S = v();
    x(S);
    let O = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        [y, T] = l.useState(void 0),
        L = l.useCallback(
            async (e, t, r) => {
                u(e, t);
                let l = r && !n && !O,
                    s = (0, d.$2)(t) ? b.AW.ORBS : b.AW.CATALOG;
                T(t), await o(s, l);
            },
            [n, O, o, u],
        ),
        j = (0, g.FF)("CollectiblesContent"),
        { searchError: k } = (0, p.a)();
    return j && null != k
        ? (0, r.jsx)(m.Z, {})
        : null != S
          ? (0, r.jsx)(C.Z, {
                onRetry: h,
                errorMessage: S,
                errorOrigin: C.i.SHOP_PAGE,
            })
          : E.includes(t)
            ? (0, r.jsx)(_.Z, {
                  isFullScreen: n,
                  handleTransition: L,
                  tab: t,
                  transitionState: c,
              })
            : (0, r.jsx)(f.Z, {
                  isFullScreen: n,
                  tab: t,
                  sortedCategories: i,
                  initialCategoryId: y,
                  onUnmount: () => T(void 0),
              });
}
let v = () =>
        (0, s.e7)([c.Z, u.Z], () =>
            null != c.Z.error
                ? "shop load fetch categories error: ".concat(c.Z.error.message)
                : null != u.Z.claimError
                  ? "shop load claim error: ".concat(u.Z.claimError.message)
                  : null != u.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(u.Z.fetchError.message)
                    : void 0,
        ),
    x = (e) => {
        let t = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, h.Z)();
        l.useEffect(() => {
            var l, s;
            null != e &&
                o.Z.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (s = null == t || null == (l = t.isStaff()) ? void 0 : l.toString())
                                ? s
                                : "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: r.toString(),
                    },
                });
        }, [e, t, n, r]);
    };
