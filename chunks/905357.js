n.d(t, {
    T: () => s,
    k: () => o
});
var r = n(311570),
    i = n(228624),
    a = n(388032);
let o = (e) => {
        let t = (0, i.hv)('useProductName') === r.v.VARIANTS_GROUP;
        if (null == e) return '';
        let n = a.NW.string(a.t.z7y5vL);
        return t && 'baseVariantName' in e && null != e.baseVariantName && e.variantLabel !== n
            ? a.NW.formatToPlainString(a.t.BZN5k5, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel
              })
            : e.name;
    },
    s = (e) => {
        let t = (0, i.hv)('useProductName') === r.v.VARIANTS_GROUP;
        if (null == e) return '';
        if (t) {
            if ('baseVariantName' in e && null != e.baseVariantName) return e.baseVariantName;
            else if (null != e.variants && e.variants.length > 0) return e.variants[0].baseVariantName;
        }
        return e.name;
    };
