n.d(t, { Z: () => o }), n(388685), n(361932), n(187205);
var r = n(647438),
    i = n(699758);
function l(e) {
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
function o(e) {
    var t;
    let {
            claimableVariants: n,
            defaultSelection: o,
            selectedGiftingPromotionReward: s,
            setSelectedGiftingPromotionReward: C,
            hasUserMadeSelection: d,
        } = e,
        c = null != n && n.length > 0,
        [u, p] = r.useState(null != (t = null == o ? void 0 : o.defaultCategory) ? t : i.KN.Trick),
        f = r.useRef(u),
        h = r.useMemo(
            () =>
                c ? n.flatMap((e) => (e.variants.length < i.mo ? [] : a(l({}, e.variants[u]), { name: e.name }))) : [],
            [n, u, c],
        ),
        x = r.useMemo(() => null != s && h.some((e) => e.skuId === s.skuId), [h, s]);
    if (
        (r.useEffect(() => {
            c && ((null == o ? void 0 : o.defaultCategory) == null || d || p(o.defaultCategory));
        }, [null == o ? void 0 : o.defaultCategory, d, c]),
        r.useEffect(() => {
            c && (f.current === u || x || C(void 0), (f.current = u));
        }, [u, x, C, c]),
        !c)
    )
        return null;
    let m = n.length > 1;
    return a(l({}, m && { selectedCategory: u }, m && { setSelectedCategory: p }), { shouldRenderCategoryControl: m });
}
