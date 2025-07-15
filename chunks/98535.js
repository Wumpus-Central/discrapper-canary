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
    f = r(149705),
    g = r(929255),
    h = r(426171),
    b = r(752053),
    m = r(81136),
    _ = r(566564),
    O = r(795477),
    C = r(215023);
let v = [C.AW.HOME, C.AW.ORBS];
function E(e) {
    let { tab: t, isFullScreen: r, scrollerRef: s, sortedCategories: c, transitionToTab: u, transitionState: d, updateAnalyticsState: m, refreshCategories: E, advancedScroller: x } = e,
        j = S();
    y(j);
    let T = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { setCategoryRef: P, handleScrollToCategory: L } = (0, h.xV)(s.current),
        I = l.useCallback(
            async (e, t, n) => {
                m(e, t);
                let l = n && !r && !T,
                    i = t === o.T.ORB ? C.AW.ORBS : C.AW.CATALOG;
                (await u(i, l), null != t && L(t));
            },
            [r, T, u, L, m]
        ),
        k = (0, p.F)('CollectiblesContent'),
        { searchError: B } = (0, f.a)();
    return k && null != B
        ? (0, n.jsx)(O.Z, {})
        : null != j
          ? (0, n.jsx)(b.Z, {
                onRetry: E,
                errorMessage: j,
                errorOrigin: b.i.SHOP_PAGE
            })
          : v.includes(t)
            ? (0, n.jsx)(_.Z, {
                  isFullScreen: r,
                  scrollerRef: s,
                  handleTransition: I,
                  tab: t,
                  transitionState: d
              })
            : (0, n.jsx)(g.Z, {
                  isFullScreen: r,
                  scrollerRef: s,
                  tab: t,
                  sortedCategories: c,
                  setCategoryRef: P,
                  advancedScroller: x
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
