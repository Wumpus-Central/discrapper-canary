"use strict";
let i;
n.d(t, { A: () => o });
var r = n(17928),
    s = n(228366);
class a extends r.Ay.Store {
    static displayName = "StorefrontPromotionOverrideStore";
    getPromotionIdOverride() {
        return i;
    }
}
let o = new a(s.h, {
    LOGOUT: function () {
        i = void 0;
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function (e) {
        i = e.promotionIdOverride;
    },
});
