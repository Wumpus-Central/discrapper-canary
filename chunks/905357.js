r.d(n, {
    T: function () {
        return l;
    },
    k: function () {
        return s;
    }
});
var i = r(311570),
    a = r(228624),
    o = r(388032);
let s = (e) => {
        let n = (0, a.hv)('useProductName') === i.v.VARIANTS_GROUP;
        if (null == e) return '';
        let r = o.intl.string(o.t.z7y5vL);
        return n && 'baseVariantName' in e && null != e.baseVariantName && e.variantLabel !== r
            ? o.intl.formatToPlainString(o.t.BZN5k5, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel
              })
            : e.name;
    },
    l = (e) => {
        let n = (0, a.hv)('useProductName') === i.v.VARIANTS_GROUP;
        if (null == e) return '';
        if (n) {
            if ('baseVariantName' in e && null != e.baseVariantName) return e.baseVariantName;
            if (null != e.variants && e.variants.length > 0) return e.variants[0].baseVariantName;
        }
        return e.name;
    };
