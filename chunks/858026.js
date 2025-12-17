n.d(t, { Z: () => s }), n(388685), n(361932), n(187205);
var r = n(473749),
    l = n(699758);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e) {
    var t;
    let {
            claimableVariants: n,
            defaultSelection: s,
            selectedGiftingPromotionReward: o,
            setSelectedGiftingPromotionReward: u,
            hasUserMadeSelection: c,
        } = e,
        d = null != n && n.length > 0,
        [p, m] = r.useState(null != (t = null == s ? void 0 : s.defaultCategory) ? t : l.KN.Trick),
        h = r.useRef(p),
        f = r.useMemo(
            () =>
                d ? n.flatMap((e) => (e.variants.length < l.mo ? [] : a(i({}, e.variants[p]), { name: e.name }))) : [],
            [n, p, d],
        ),
        g = r.useMemo(() => null != o && f.some((e) => e.skuId === o.skuId), [f, o]);
    if (
        (r.useEffect(() => {
            d && ((null == s ? void 0 : s.defaultCategory) == null || c || m(s.defaultCategory));
        }, [null == s ? void 0 : s.defaultCategory, c, d]),
        r.useEffect(() => {
            d && (h.current === p || g || u(void 0), (h.current = p));
        }, [p, g, u, d]),
        !d)
    )
        return null;
    let y = n.length > 1;
    return a(i({}, y && { selectedCategory: p }, y && { setSelectedCategory: m }), { shouldRenderCategoryControl: y });
}
