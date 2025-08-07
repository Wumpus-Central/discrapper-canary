r.d(t, { Z: () => O }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(180650),
    i = r(442837),
    o = r(607070),
    s = r(594174),
    c = r(960048),
    u = r(597688),
    d = r(1870),
    p = r(870289),
    f = r(149705),
    g = r(929255),
    b = r(752053),
    h = r(81136),
    m = r(566564),
    _ = r(795477),
    v = r(215023);
let C = [v.AW.HOME, v.AW.ORBS];
function O(e) {
    let {
            tab: t,
            isFullScreen: r,
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
            async (e, t, n) => {
                d(e, t);
                let l = n && !r && !y,
                    i = t === a.T.ORB ? v.AW.ORBS : v.AW.CATALOG;
                j(t), await c(i, l);
            },
            [r, y, c, d],
        ),
        P = (0, p.FF)("CollectiblesContent"),
        { searchError: L } = (0, f.a)();
    return P && null != L
        ? (0, n.jsx)(_.Z, {})
        : null != O
          ? (0, n.jsx)(b.Z, {
                onRetry: h,
                errorMessage: O,
                errorOrigin: b.i.SHOP_PAGE,
            })
          : C.includes(t)
            ? (0, n.jsx)(m.Z, {
                  isFullScreen: r,
                  handleTransition: T,
                  tab: t,
                  transitionState: u,
              })
            : (0, n.jsx)(g.Z, {
                  isFullScreen: r,
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
            { noCache: r, includeUnpublished: n } = (0, h.Z)();
        l.useEffect(() => {
            var l, a;
            null != e &&
                c.Z.captureMessage(e, {
                    tags: {
                        isStaff:
                            null != (a = null == t || null == (l = t.isStaff()) ? void 0 : l.toString())
                                ? a
                                : "unknown",
                        disableCache: r.toString(),
                        includeUnpublished: n.toString(),
                    },
                });
        }, [e, t, r, n]);
    };
