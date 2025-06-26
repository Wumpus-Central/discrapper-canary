n.d(t, { Z: () => y });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    i = n(180650),
    s = n(442837),
    c = n(607070),
    u = n(594174),
    d = n(960048),
    p = n(381585),
    f = n(597688),
    b = n(1870),
    g = n(193227),
    h = n(752053),
    m = n(81136),
    _ = n(312030),
    C = n(566564),
    v = n(763891),
    O = n(215023),
    x = n(484920);
let S = [O.AW.HOME, O.AW.ORBS],
    E = [O.AW.AVATAR_DECORATIONS, O.AW.PROFILE_EFFECTS, O.AW.NAMEPLATES, O.AW.BUNDLES];
function y(e) {
    let { tab: t, isFullScreen: n, scrollerRef: a, sortedCategories: u, transitionToTab: d, transitionState: f, updateAnalyticsState: b, refreshCategories: m, setIsGiftEasterEggEnabled: y, isGiftEasterEggEnabled: P } = e,
        T = j();
    k(T);
    let I = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        {
            handlePageChange: L,
            currentPage: B,
            setCategoryRef: w,
            scrollToCategory: N
        } = (0, _.h)({
            scrollerRef: a,
            sortedCategories: u
        }),
        A = l.useCallback(
            async (e, t, r) => {
                b(e, t);
                let l = r && !n && !I,
                    a = t === i.T.ORB ? O.AW.ORBS : O.AW.CATALOG;
                await d(a, l), null != t && N(t);
            },
            [n, I, d, N, b]
        );
    return null != T
        ? (0, r.jsx)(h.Z, {
              onRetry: m,
              errorMessage: T,
              errorOrigin: h.i.SHOP_PAGE
          })
        : S.includes(t)
          ? (0, r.jsx)(C.Z, {
                isFullScreen: n,
                scrollerRef: a,
                handleTransition: A,
                tab: t,
                transitionState: f
            })
          : (0, r.jsx)('div', {
                className: x.pageWrapper,
                children: (0, r.jsx)('main', {
                    className: o()(x.page, { [x.pageFullscreen]: n }),
                    children: E.includes(t)
                        ? (0, r.jsx)(
                              v.Z,
                              {
                                  isFullScreen: n,
                                  scrollerRef: a,
                                  tab: t
                              },
                              t
                          )
                        : (0, r.jsx)(p.k0, {
                              newValue: { pageIndex: B },
                              children: (0, r.jsx)(g.Z, {
                                  isFullScreen: n,
                                  sortedCategories: u,
                                  setCategoryRef: w,
                                  setIsGiftEasterEggEnabled: y,
                                  isGiftEasterEggEnabled: P,
                                  currentPage: B,
                                  handlePageChange: L
                              })
                          })
                })
            });
}
let j = () => (0, s.e7)([f.Z, b.Z], () => (null != f.Z.error ? 'shop load fetch categories error: '.concat(f.Z.error.message) : null != b.Z.claimError ? 'shop load claim error: '.concat(b.Z.claimError.message) : null != b.Z.fetchError ? 'shop load fetch purchase error: '.concat(b.Z.fetchError.message) : void 0)),
    k = (e) => {
        let t = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, m.Z)();
        l.useEffect(() => {
            var l, a;
            null != e &&
                d.Z.captureMessage(e, {
                    tags: {
                        isStaff: null != (a = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? a : 'unknown',
                        disableCache: n.toString(),
                        includeUnpublished: r.toString()
                    }
                });
        }, [e, t, n, r]);
    };
