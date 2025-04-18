n.d(t, { a: () => a });
var r = n(228624),
    i = n(388032);
let a = (e) => {
    let t = (0, r.ed)('usePurchasedProductName');
    if (null == e) return '';
    let n = i.NW.string(i.t.z7y5vL);
    return t && null != e.baseVariantName && e.variantLabel !== n
        ? i.NW.formatToPlainString(i.t.BZN5k5, {
              baseVariantName: e.baseVariantName,
              variantLabel: e.variantLabel
          })
        : e.name;
};
