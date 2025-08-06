r.d(t, { Z: () => C }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(180650),
    i = r(442837),
    o = r(607070),
    s = r(594174),
    c = r(960048),
    u = r(597688),
    d = r(1870),
    p = r(870289),
    g = r(149705),
    f = r(929255),
    h = r(752053),
    b = r(81136),
    _ = r(566564),
    m = r(795477),
    v = r(215023);
let O = [v.AW.HOME, v.AW.ORBS];
function C(e) {
    let {
            tab: t,
            isFullScreen: r,
            sortedCategories: s,
            transitionToTab: c,
            transitionState: u,
            updateAnalyticsState: d,
            refreshCategories: b,
        } = e,
        C = E();
    S(C);
    let y = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        [x, j] = l.useState(void 0),
        P = l.useCallback(
            async (e, t, n) => {
                d(e, t);
                let l = n && !r && !y,
                    i = t === a.T.ORB ? v.AW.ORBS : v.AW.CATALOG;
                j(t), await c(i, l);
            },
            [r, y, c, d],
        ),
        T = (0, p.FF)("CollectiblesContent"),
        { searchError: L } = (0, g.a)();
    return T && null != L
        ? (0, n.jsx)(m.Z, {})
        : null != C
          ? (0, n.jsx)(h.Z, {
                onRetry: b,
                errorMessage: C,
                errorOrigin: h.i.SHOP_PAGE,
            })
          : O.includes(t)
            ? (0, n.jsx)(_.Z, {
                  isFullScreen: r,
                  handleTransition: P,
                  tab: t,
                  transitionState: u,
              })
            : (0, n.jsx)(f.Z, {
                  isFullScreen: r,
                  tab: t,
                  sortedCategories: s,
                  initialCategoryId: x,
                  onUnmount: () => j(void 0),
              });
}
let E = () =>
        (0, i.e7)([u.Z, d.Z], () =>
            null != u.Z.error
                ? "shop load fetch categories error: ".concat(u.Z.error.message)
                : null != d.Z.claimError
                  ? "shop load claim error: ".concat(d.Z.claimError.message)
                  : null != d.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(d.Z.fetchError.message)
                    : void 0,
        ),
    S = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: r, includeUnpublished: n } = (0, b.Z)();
        l.useEffect(() => {
            var l, a;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (a = null == t || null == (l = t.isStaff()) ? void 0 : l.toString())
                                ? a
                                : "unknown",
                        disableCache: r.toString(),
                        includeUnpublished: n.toString(),
                    },
                });
        }, [e, t, r, n]);
    };
