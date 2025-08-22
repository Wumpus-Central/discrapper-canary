n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(180650),
    s = n(442837),
    i = n(607070),
    o = n(594174),
    c = n(960048),
    u = n(597688),
    d = n(1870),
    g = n(870289),
    p = n(149705),
    f = n(929255),
    m = n(752053),
    _ = n(81136),
    h = n(566564),
    b = n(795477),
    C = n(215023);
let E = [C.AW.HOME, C.AW.ORBS];
function S(e) {
    let {
            tab: t,
            isFullScreen: n,
            sortedCategories: o,
            transitionToTab: c,
            transitionState: u,
            updateAnalyticsState: d,
            refreshCategories: _,
        } = e,
        S = O();
    v(S);
    let x = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
        [y, T] = l.useState(void 0),
        L = l.useCallback(
            async (e, t, r) => {
                d(e, t);
                let l = r && !n && !x,
                    s = t === a.T.ORB ? C.AW.ORBS : C.AW.CATALOG;
                T(t), await c(s, l);
            },
            [n, x, c, d],
        ),
        j = (0, g.FF)("CollectiblesContent"),
        { searchError: k } = (0, p.a)();
    return j && null != k
        ? (0, r.jsx)(b.Z, {})
        : null != S
          ? (0, r.jsx)(m.Z, {
                onRetry: _,
                errorMessage: S,
                errorOrigin: m.i.SHOP_PAGE,
            })
          : E.includes(t)
            ? (0, r.jsx)(h.Z, {
                  isFullScreen: n,
                  handleTransition: L,
                  tab: t,
                  transitionState: u,
              })
            : (0, r.jsx)(f.Z, {
                  isFullScreen: n,
                  tab: t,
                  sortedCategories: o,
                  initialCategoryId: y,
                  onUnmount: () => T(void 0),
              });
}
let O = () =>
        (0, s.e7)([u.Z, d.Z], () =>
            null != u.Z.error
                ? "shop load fetch categories error: ".concat(u.Z.error.message)
                : null != d.Z.claimError
                  ? "shop load claim error: ".concat(d.Z.claimError.message)
                  : null != d.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(d.Z.fetchError.message)
                    : void 0,
        ),
    v = (e) => {
        let t = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, _.Z)();
        l.useEffect(() => {
            var l, a;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (a = null == t || null == (l = t.isStaff()) ? void 0 : l.toString())
                                ? a
                                : "unknown",
                        disableCache: n.toString(),
                        includeUnpublished: r.toString(),
                    },
                });
        }, [e, t, n, r]);
    };
