n.d(t, { Z: () => E });
var r = n(255367),
    l = n(73800),
    o = n(180650),
    a = n(442837),
    i = n(607070),
    s = n(594174),
    c = n(960048),
    u = n(597688),
    d = n(1870),
    p = n(870289),
    g = n(149705),
    f = n(929255),
    h = n(426171),
    b = n(752053),
    m = n(81136),
    _ = n(566564),
    C = n(795477),
    O = n(215023);
let v = [O.AW.HOME, O.AW.ORBS];
function E(e) {
    let { tab: t, isFullScreen: n, scrollerRef: s, sortedCategories: c, transitionToTab: u, transitionState: d, updateAnalyticsState: m, refreshCategories: E } = e,
        y = S();
    x(y);
    let j = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
        { setCategoryRef: T, handleScrollToCategory: P } = (0, h.xV)(s.current),
        L = l.useCallback(
            async (e, t, r) => {
                m(e, t);
                let l = r && !n && !j,
                    a = t === o.T.ORB ? O.AW.ORBS : O.AW.CATALOG;
                (await u(a, l), null != t && P(t));
            },
            [n, j, u, P, m]
        ),
        I = (0, p.F)('CollectiblesContent'),
        { searchError: k } = (0, g.a)();
    return I && null != k
        ? (0, r.jsx)(C.Z, {})
        : null != y
          ? (0, r.jsx)(b.Z, {
                onRetry: E,
                errorMessage: y,
                errorOrigin: b.i.SHOP_PAGE
            })
          : v.includes(t)
            ? (0, r.jsx)(_.Z, {
                  isFullScreen: n,
                  scrollerRef: s,
                  handleTransition: L,
                  tab: t,
                  transitionState: d
              })
            : (0, r.jsx)(f.Z, {
                  isFullScreen: n,
                  scrollerRef: s,
                  tab: t,
                  sortedCategories: c,
                  setCategoryRef: T
              });
}
let S = () => (0, a.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    x = (e) => {
        let t = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, m.Z)();
        l.useEffect(() => {
            var l, o;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff: null != (o = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? o : 'unknown',
                        disableCache: n.toString(),
                        includeUnpublished: r.toString()
                    }
                });
        }, [e, t, n, r]);
    };
