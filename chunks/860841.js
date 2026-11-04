var i,
    r =
        (((i = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (i.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (i.SUBSCRIPTION_NEW_PURCHASE = "SUBSCRIPTION_NEW_PURCHASE"),
        (i.SUBSCRIPTION_SWITCH_PLAN = "SUBSCRIPTION_SWITCH_PLAN"),
        (i.LOADING = "LOADING"),
        i);
let a = new Set(["SUBSCRIPTION_NEW_PURCHASE", "SUBSCRIPTION_SWITCH_PLAN"]);
n.d(
    t,
    {},
    {
        ME: a,
        Qh: function (e) {
            let {
                error: t,
                invoiceTypeDiscriminator: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: r,
                planSwitchLoading: a,
            } = e;
            if (null != t) return null;
            if (a);
            else if ("PREMIUM_GIFT" === n && null != i) return { type: "PREMIUM_GIFT", invoicePreview: i };
            else if ("PREMIUM_WITH_TRIAL" === n && null != i)
                return { type: "PREMIUM_WITH_TRIAL", invoicePreview: i, renewalInvoicePreview: r };
            else if (null != i && null != r)
                return { type: "SUBSCRIPTION_NEW_PURCHASE", invoicePreview: i, renewalInvoicePreview: r };
            return { type: "LOADING", invoicePreview: null };
        },
        u$: r,
    },
);
