n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(180650),
    i = n(442837),
    o = n(607070),
    s = n(594174),
    c = n(960048),
    u = n(597688),
    d = n(1870),
    p = n(870289),
    g = n(149705),
    f = n(929255),
    b = n(752053),
    h = n(81136),
    m = n(566564),
    _ = n(795477),
    v = n(215023);
let C = [v.AW.HOME, v.AW.ORBS];
function O(e) {
    let {
            tab: t,
            isFullScreen: n,
            sortedCategories: s,
            transitionToTab: c,
            transitionState: u,
            updateAnalyticsState: d,
            refreshCategories: h,
        } = e,
        O = E();
    S(O);
    let y = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        [x, j] = l.useState(void 0),
        T = l.useCallback(
            async (e, t, r) => {
                d(e, t);
                let l = r && !n && !y,
                    i = t === a.T.ORB ? v.AW.ORBS : v.AW.CATALOG;
                j(t), await c(i, l);
            },
            [n, y, c, d],
        ),
        P = (0, p.FF)("CollectiblesContent"),
        { searchError: L } = (0, g.a)();
    return P && null != L
        ? (0, r.jsx)(_.Z, {})
        : null != O
          ? (0, r.jsx)(b.Z, {
                onRetry: h,
                errorMessage: O,
                errorOrigin: b.i.SHOP_PAGE,
            })
          : C.includes(t)
            ? (0, r.jsx)(m.Z, {
                  isFullScreen: n,
                  handleTransition: T,
                  tab: t,
                  transitionState: u,
              })
            : (0, r.jsx)(f.Z, {
                  isFullScreen: n,
                  tab: t,
                  sortedCategories: s,
                  initialCategoryId: x,
                  onUnmount: () => j(void 0),
              });
}
let E = () =>
        (0, i.e7)([u.Z, d.Z], () =>
            null != u.Z.error
                ? "shop load fetch categories error: ".concat(u.Z.error.message)
                : null != d.Z.claimError
                  ? "shop load claim error: ".concat(d.Z.claimError.message)
                  : null != d.Z.fetchError
                    ? "shop load fetch purchase error: ".concat(d.Z.fetchError.message)
                    : void 0,
        ),
    S = (e) => {
        let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { noCache: n, includeUnpublished: r } = (0, h.Z)();
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
