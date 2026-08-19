"use strict";
let i;
n.d(t, { A: () => l });
var r = n(17928),
    a = n(228366);
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
