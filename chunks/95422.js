n.d(t, { a: () => a });
var i = n(228624),
    r = n(388032);
let a = (e) => {
    let t = (0, i.ed)('usePurchasedProductName');
    if (null == e) return '';
    let n = r.intl.string(r.t.z7y5vL);
    return t && null != e.baseVariantName && e.variantLabel !== n
        ? r.intl.formatToPlainString(r.t.BZN5k5, {
              baseVariantName: e.baseVariantName,
              variantLabel: e.variantLabel
          })
        : e.name;
};
