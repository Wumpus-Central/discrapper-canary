n.d(t, { Z: () => C });
var r = n(255367),
    l = n(73800),
    a = n(180650),
    i = n(442837),
    o = n(607070),
    s = n(594174),
    c = n(960048),
    u = n(597688),
    d = n(1870),
    p = n(929255),
    f = n(426171),
    g = n(752053),
    h = n(81136),
    b = n(566564),
    m = n(215023);
let _ = [m.AW.HOME, m.AW.ORBS];
function C(e) {
    let { tab: t, isFullScreen: n, scrollerRef: s, sortedCategories: c, transitionToTab: u, transitionState: d, updateAnalyticsState: h, refreshCategories: C } = e,
        S = v();
    O(S);
    let x = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { setCategoryRef: E, handleScrollToCategory: y } = (0, f.xV)(s.current),
        j = l.useCallback(
            async (e, t, r) => {
                h(e, t);
                let l = r && !n && !x,
                    i = t === a.T.ORB ? m.AW.ORBS : m.AW.CATALOG;
                await u(i, l), null != t && y(t);
            },
            [n, x, u, y, h]
        );
    return null != S
        ? (0, r.jsx)(g.Z, {
              onRetry: C,
              errorMessage: S,
              errorOrigin: g.i.SHOP_PAGE
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
                setCategoryRef: E
            });
}
let v = () => (0, i.e7)([u.Z, d.Z], () => (null != u.Z.error ? 'shop load fetch categories error: '.concat(u.Z.error.message) : null != d.Z.claimError ? 'shop load claim error: '.concat(d.Z.claimError.message) : null != d.Z.fetchError ? 'shop load fetch purchase error: '.concat(d.Z.fetchError.message) : void 0)),
    O = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, h.Z)();
        l.useEffect(() => {
            var l, a;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff: null != (a = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? a : 'unknown',
                        disableCache: n.toString(),
                        includeUnpublished: r.toString()
                    }
                });
        }, [e, t, n, r]);
    };
