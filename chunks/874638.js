"use strict";
n.d(t, { Z: () => s, c: () => a }), n(321073);
var i = n(735438),
    r = n.n(i);
function s(e) {
    let t = [],
        n = new Set();
    return (
        e.map((e) => {
            for (let i of t)
                if (
                    i.subscriptionPlanId === e.subscriptionPlanId &&
                    i.subscriptionPlanPrice === e.subscriptionPlanPrice &&
                    i.amount === e.amount &&
                    r().isEqual(i.discounts, e.discounts)
                ) {
                    n.add(i.subscriptionPlanId), (i.quantity += e.quantity);
                    return;
                }
            t.push({ ...e });
        }),
        t.map((e) => {
            let t = { ...e };
            return (
                n.has(e.subscriptionPlanId) &&
                    ((t.amount = t.amount * t.quantity),
                    (t.discounts = t.discounts.map((e) => ({ ...e, amount: e.amount * t.quantity }))),
                    null != t.tax && (t.tax = t.tax * t.quantity)),
                t
            );
        })
    );
}
function a(e) {
    return {
        id: e.id,
        subscriptionPlanId: e.subscription_plan_id,
        subscriptionPlanPrice: e.subscription_plan_price,
        amount: e.amount,
        quantity: e.quantity,
        discounts: e.discounts,
        unitPrice: e.unit_price,
        tax: e.tax,
        taxCode: e.tax_code,
        nominalTaxRate: e.nominal_tax_rate,
    };
}
