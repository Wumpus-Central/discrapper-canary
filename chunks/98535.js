(r.d(t, { Z: () => v }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(180650),
    o = r(442837),
    a = r(607070),
    s = r(594174),
    c = r(960048),
    u = r(597688),
    d = r(1870),
    p = r(870289),
    f = r(149705),
    g = r(929255),
    h = r(752053),
    b = r(81136),
    m = r(566564),
    _ = r(795477),
    C = r(215023);
let O = [C.AW.HOME, C.AW.ORBS];
function v(e) {
    let { tab: t, isFullScreen: r, sortedCategories: s, transitionToTab: c, transitionState: u, updateAnalyticsState: d, refreshCategories: b } = e,
        v = E();
    S(v);
    let y = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
        [x, j] = l.useState(void 0),
        T = l.useCallback(
            async (e, t, n) => {
                d(e, t);
                let l = n && !r && !y,
                    o = t === i.T.ORB ? C.AW.ORBS : C.AW.CATALOG;
                (j(t), await c(o, l));
            },
            [r, y, c, d]
        ),
        P = (0, p.FF)('CollectiblesContent'),
        { searchError: L } = (0, f.a)();
    return P && null != L
        ? (0, n.jsx)(_.Z, {})
        : null != v
          ? (0, n.jsx)(h.Z, {
                onRetry: b,
                errorMessage: v,
                errorOrigin: h.i.SHOP_PAGE
            })
          : O.includes(t)
            ? (0, n.jsx)(m.Z, {
                  isFullScreen: r,
                  handleTransition: T,
                  tab: t,
                  transitionState: u
              })
            : (0, n.jsx)(g.Z, {
                  isFullScreen: r,
                  tab: t,
                  sortedCategories: s,
                  initialCategoryId: x,
                  onUnmount: () => j(void 0)
              });
}
let E = () => (0, o.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    S = (e) => {
        let t = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: r, includeUnpublished: n } = (0, b.Z)();
        l.useEffect(() => {
            var l, i;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff: null != (i = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? i : 'unknown',
                        disableCache: r.toString(),
                        includeUnpublished: n.toString()
                    }
                });
        }, [e, t, r, n]);
    };
