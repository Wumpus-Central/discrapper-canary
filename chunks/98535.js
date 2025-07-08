n.d(t, { Z: () => E });
var r = n(255367),
    l = n(73800),
    o = n(180650),
    i = n(442837),
    a = n(607070),
    s = n(594174),
    c = n(960048),
    u = n(597688),
    d = n(1870),
    p = n(870289),
    f = n(501431),
    g = n(929255),
    h = n(426171),
    b = n(752053),
    m = n(81136),
    _ = n(566564),
    C = n(215023);
let O = [C.AW.HOME, C.AW.ORBS];
function E(e) {
    let { tab: t, isFullScreen: n, scrollerRef: s, sortedCategories: c, transitionToTab: u, transitionState: d, updateAnalyticsState: m, refreshCategories: E } = e,
        x = v();
    S(x);
    let y = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { setCategoryRef: T, handleScrollToCategory: j } = (0, h.xV)(s.current),
        P = l.useCallback(
            async (e, t, r) => {
                m(e, t);
                let l = r && !n && !y,
                    i = t === o.T.ORB ? C.AW.ORBS : C.AW.CATALOG;
                (await u(i, l), null != t && j(t));
            },
            [n, y, u, j, m]
        ),
        L = (0, p.F)('content'),
        { searchQuery: I } = (0, f.S)();
    return (l.useEffect(() => {
        L && '' !== I && P('search');
    }, [L, I, P]),
    null != x)
        ? (0, r.jsx)(b.Z, {
              onRetry: E,
              errorMessage: x,
              errorOrigin: b.i.SHOP_PAGE
          })
        : O.includes(t)
          ? (0, r.jsx)(_.Z, {
                isFullScreen: n,
                scrollerRef: s,
                handleTransition: P,
                tab: t,
                transitionState: d
            })
          : (0, r.jsx)(g.Z, {
                isFullScreen: n,
                scrollerRef: s,
                tab: t,
                sortedCategories: c,
                setCategoryRef: T
            });
}
let v = () => (0, i.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    S = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
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
