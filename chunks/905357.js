n.d(t, {
    T: () => s,
    k: () => a
});
var r = n(311570),
    i = n(228624),
    o = n(388032);
let a = (e) => {
        let t = (0, i.hv)('useProductName') === r.v.VARIANTS_GROUP;
        if (null == e) return '';
        let n = o.NW.string(o.t.z7y5vL);
        return t && 'baseVariantName' in e && null != e.baseVariantName && e.variantLabel !== n
            ? o.NW.formatToPlainString(o.t.BZN5k5, {
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
