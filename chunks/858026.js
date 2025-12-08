n.d(t, { Z: () => s }), n(388685), n(361932), n(187205);
var l = n(473749),
    r = n(699758);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
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
        [m, p] = l.useState(null != (t = null == s ? void 0 : s.defaultCategory) ? t : r.KN.Trick),
        h = l.useRef(m),
        f = l.useMemo(
            () =>
                d ? n.flatMap((e) => (e.variants.length < r.mo ? [] : a(i({}, e.variants[m]), { name: e.name }))) : [],
            [n, m, d],
        ),
        g = l.useMemo(() => null != o && f.some((e) => e.skuId === o.skuId), [f, o]);
    if (
        (l.useEffect(() => {
            d && ((null == s ? void 0 : s.defaultCategory) == null || c || p(s.defaultCategory));
        }, [null == s ? void 0 : s.defaultCategory, c, d]),
        l.useEffect(() => {
            d && (h.current === m || g || u(void 0), (h.current = m));
        }, [m, g, u, d]),
        !d)
    )
        return null;
    let v = n.length > 1;
    return a(i({}, v && { selectedCategory: m }, v && { setSelectedCategory: p }), { shouldRenderCategoryControl: v });
}
