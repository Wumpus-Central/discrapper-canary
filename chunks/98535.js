n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    a = n(607070),
    s = n(594174),
    o = n(960048),
    c = n(597688),
    u = n(1870),
    d = n(884697),
    g = n(870289),
    p = n(149705),
    f = n(929255),
    h = n(752053),
    _ = n(81136),
    C = n(566564),
    m = n(795477),
    b = n(215023);
let E = [b.AW.HOME, b.AW.ORBS];
function S(e) {
    let {
            tab: t,
            isFullScreen: n,
            sortedCategories: s,
            transitionToTab: o,
            transitionState: c,
            updateAnalyticsState: u,
            refreshCategories: _,
        } = e,
        S = v();
    x(S);
    let O = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [T, y] = l.useState(void 0),
        L = l.useCallback(
            async (e, t, r) => {
                u(e, t);
                let l = r && !n && !O,
                    i = (0, d.$2)(t) ? b.AW.ORBS : b.AW.CATALOG;
                y(t), await o(i, l);
            },
            [n, O, o, u],
        ),
        j = (0, g.FF)("CollectiblesContent"),
        { searchError: k } = (0, p.a)();
    return j && null != k
        ? (0, r.jsx)(m.Z, {})
        : null != S
          ? (0, r.jsx)(h.Z, {
                onRetry: _,
                errorMessage: S,
                errorOrigin: h.i.SHOP_PAGE,
            })
          : E.includes(t)
            ? (0, r.jsx)(C.Z, {
                  isFullScreen: n,
                  handleTransition: L,
                  tab: t,
                  transitionState: c,
              })
            : (0, r.jsx)(f.Z, {
                  isFullScreen: n,
                  tab: t,
                  sortedCategories: s,
                  initialCategoryId: T,
                  onUnmount: () => y(void 0),
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
    x = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, _.Z)();
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
