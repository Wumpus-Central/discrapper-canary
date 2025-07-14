r.d(t, { Z: () => E });
var n = r(255367),
    l = r(73800),
    o = r(180650),
    i = r(442837),
    a = r(607070),
    s = r(594174),
    c = r(960048),
    u = r(597688),
    d = r(1870),
    p = r(870289),
    g = r(149705),
    f = r(929255),
    h = r(426171),
    b = r(752053),
    m = r(81136),
    _ = r(566564),
    C = r(795477),
    O = r(215023);
let v = [O.AW.HOME, O.AW.ORBS];
function E(e) {
    let { tab: t, isFullScreen: r, scrollerRef: s, sortedCategories: c, transitionToTab: u, transitionState: d, updateAnalyticsState: m, refreshCategories: E } = e,
        x = S();
    y(x);
    let j = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { setCategoryRef: T, handleScrollToCategory: P } = (0, h.xV)(s.current),
        L = l.useCallback(
            async (e, t, n) => {
                m(e, t);
                let l = n && !r && !j,
                    i = t === o.T.ORB ? O.AW.ORBS : O.AW.CATALOG;
                (await u(i, l), null != t && P(t));
            },
            [r, j, u, P, m]
        ),
        k = (0, p.F)('CollectiblesContent'),
        { searchError: I } = (0, g.a)();
    return k && null != I
        ? (0, n.jsx)(C.Z, {})
        : null != x
          ? (0, n.jsx)(b.Z, {
                onRetry: E,
                errorMessage: x,
                errorOrigin: b.i.SHOP_PAGE
            })
          : v.includes(t)
            ? (0, n.jsx)(_.Z, {
                  isFullScreen: r,
                  scrollerRef: s,
                  handleTransition: L,
                  tab: t,
                  transitionState: d
              })
            : (0, n.jsx)(f.Z, {
                  isFullScreen: r,
                  scrollerRef: s,
                  tab: t,
                  sortedCategories: c,
                  setCategoryRef: T
              });
}
let S = () => (0, i.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    y = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: r, includeUnpublished: n } = (0, m.Z)();
        l.useEffect(() => {
            var l, o;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff: null != (o = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? o : 'unknown',
                        disableCache: r.toString(),
                        includeUnpublished: n.toString()
                    }
                });
        }, [e, t, r, n]);
    };
