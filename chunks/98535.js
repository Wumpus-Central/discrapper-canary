n.d(t, { Z: () => C });
var r = n(255367),
    l = n(73800),
    o = n(180650),
    i = n(442837),
    a = n(607070),
    s = n(594174),
    c = n(960048),
    u = n(597688),
    d = n(1870),
    p = n(929255),
    g = n(426171),
    f = n(752053),
    h = n(81136),
    b = n(566564),
    m = n(215023);
let _ = [m.AW.HOME, m.AW.ORBS];
function C(e) {
    let { tab: t, isFullScreen: n, scrollerRef: s, sortedCategories: c, transitionToTab: u, transitionState: d, updateAnalyticsState: h, refreshCategories: C } = e,
        v = O();
    E(v);
    let S = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { setCategoryRef: x, handleScrollToCategory: y } = (0, g.xV)(s.current),
        j = l.useCallback(
            async (e, t, r) => {
                h(e, t);
                let l = r && !n && !S,
                    i = t === o.T.ORB ? m.AW.ORBS : m.AW.CATALOG;
                (await u(i, l), null != t && y(t));
            },
            [n, S, u, y, h]
        );
    return null != v
        ? (0, r.jsx)(f.Z, {
              onRetry: C,
              errorMessage: v,
              errorOrigin: f.i.SHOP_PAGE
          })
        : _.includes(t)
          ? (0, r.jsx)(b.Z, {
                isFullScreen: n,
                scrollerRef: s,
                handleTransition: j,
                tab: t,
                transitionState: d
            })
          : (0, r.jsx)(p.Z, {
                isFullScreen: n,
                scrollerRef: s,
                tab: t,
                sortedCategories: c,
                setCategoryRef: x
            });
}
let O = () => (0, i.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    E = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, h.Z)();
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
