n.d(t, { Z: () => j });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    i = n(180650),
    s = n(442837),
    c = n(607070),
    u = n(960048),
    d = n(381585),
    p = n(597688),
    f = n(1870),
    b = n(744112),
    g = n(82892),
    h = n(193227),
    m = n(752053),
    _ = n(81136),
    C = n(312030),
    v = n(566564),
    O = n(763891),
    x = n(215023),
    S = n(484920);
let E = [x.AW.HOME, x.AW.ORBS],
    y = [x.AW.AVATAR_DECORATIONS, x.AW.PROFILE_EFFECTS, x.AW.NAMEPLATES, x.AW.BUNDLES];
function j(e) {
    let { tab: t, isFullScreen: n, scrollerRef: a, sortedCategories: u, transitionToTab: p, transitionState: f, updateAnalyticsState: b, refreshCategories: g, setIsGiftEasterEggEnabled: _, isGiftEasterEggEnabled: j } = e,
        T = k();
    P(T);
    let I = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        {
            handlePageChange: L,
            currentPage: B,
            setCategoryRef: w,
            scrollToCategory: N
        } = (0, C.h)({
            scrollerRef: a,
            sortedCategories: u
        }),
        A = l.useCallback(
            async (e, t, r) => {
                b(e, t);
                let l = r && !n && !I,
                    a = t === i.T.ORB ? x.AW.ORBS : x.AW.CATALOG;
                await p(a, l), null != t && N(t);
            },
            [n, I, p, N, b]
        );
    return null != T
        ? (0, r.jsx)(m.Z, {
              onRetry: g,
              errorMessage: T,
              errorOrigin: m.i.SHOP_PAGE
          })
        : E.includes(t)
          ? (0, r.jsx)(v.Z, {
                isFullScreen: n,
                scrollerRef: a,
                handleTransition: A,
                tab: t,
                transitionState: f
            })
          : (0, r.jsx)('div', {
                className: S.pageWrapper,
                children: (0, r.jsx)('main', {
                    className: o()(S.page, { [S.pageFullscreen]: n }),
                    children: y.includes(t)
                        ? (0, r.jsx)(
                              O.Z,
                              {
                                  isFullScreen: n,
                                  scrollerRef: a,
                                  tab: t
                              },
                              t
                          )
                        : (0, r.jsx)(d.k0, {
                              newValue: { pageIndex: B },
                              children: (0, r.jsx)(h.Z, {
                                  isFullScreen: n,
                                  sortedCategories: u,
                                  setCategoryRef: w,
                                  setIsGiftEasterEggEnabled: _,
                                  isGiftEasterEggEnabled: j,
                                  currentPage: B,
                                  handlePageChange: L
                              })
                          })
                })
            });
}
let k = () => (0, s.e7)([p.Z, f.Z], () => (null != p.Z.error ? 'shop load fetch categories error: '.concat(p.Z.error.message) : null != f.Z.claimError ? 'shop load claim error: '.concat(f.Z.claimError.message) : null != f.Z.fetchError ? 'shop load fetch purchase error: '.concat(f.Z.fetchError.message) : void 0)),
    P = (e) => {
        let t = (0, g.x)(),
            n = (0, b.b)('Collectibles Shop Button'),
            { noCache: r, includeUnpublished: a } = (0, _.Z)();
        l.useEffect(() => {
            var l, o;
            null != e &&
                u.Z.captureMessage(e, {
                    tags: {
                        isStaff: null != (o = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? o : 'unknown',
                        preloadEnabled: n.toString(),
                        disableCache: r.toString(),
                        includeUnpublished: a.toString()
                    }
                });
        }, [e, t, n, r, a]);
    };
