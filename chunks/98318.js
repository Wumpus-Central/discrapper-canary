n.d(
    t,
    {},
    {
        U: function (e) {
            return e?.tags?.subscription_listing_id != null;
        },
        X: function (e) {
            return e?.tags?.available_for_purchase !== void 0;
        },
    },
);
