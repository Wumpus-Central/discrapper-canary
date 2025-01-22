r.d(n, {
    a: function () {
        return o;
    }
});
var i = r(228624),
    a = r(388032);
let o = (e) => {
    let n = (0, i.ed)('usePurchasedProductName');
    if (null == e) return '';
    let r = a.intl.string(a.t.z7y5vL);
    return n && null != e.baseVariantName && e.variantLabel !== r
        ? a.intl.formatToPlainString(a.t.BZN5k5, {
              baseVariantName: e.baseVariantName,
              variantLabel: e.variantLabel
          })
        : e.name;
};
