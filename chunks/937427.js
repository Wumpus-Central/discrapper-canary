let i;
var r = n(855986),
    a = n(73153);
class s extends r.Ay.Store {
    static displayName = "StorefrontPromotionOverrideStore";
    getPromotionIdOverride() {
        return i;
    }
}
let l = new s(a.h, {
    LOGOUT: function () {
        i = void 0;
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function (e) {
        i = e.promotionIdOverride;
    },
});
n.d(t, {}, { A: l });
