(r.d(t, { Z: () => C }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(180650),
    a = r(442837),
    o = r(607070),
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
    O = r(215023);
let v = [O.AW.HOME, O.AW.ORBS];
function C(e) {
    let { tab: t, isFullScreen: r, sortedCategories: s, transitionToTab: c, transitionState: u, updateAnalyticsState: d, refreshCategories: b } = e,
        C = E();
    S(C);
    let y = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        [x, j] = l.useState(void 0),
        P = l.useCallback(
            async (e, t, n) => {
                d(e, t);
                let l = n && !r && !y,
                    a = t === i.T.ORB ? O.AW.ORBS : O.AW.CATALOG;
                (j(t), await c(a, l));
            },
            [r, y, c, d]
        ),
        T = (0, p.FF)('CollectiblesContent'),
        { searchError: L } = (0, f.a)();
    return T && null != L
        ? (0, n.jsx)(_.Z, {})
        : null != C
          ? (0, n.jsx)(h.Z, {
                onRetry: b,
                errorMessage: C,
                errorOrigin: h.i.SHOP_PAGE
            })
          : v.includes(t)
            ? (0, n.jsx)(m.Z, {
                  isFullScreen: r,
                  handleTransition: P,
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
let E = () => (0, a.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    S = (e) => {
        let t = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
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
