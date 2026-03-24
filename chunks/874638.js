"use strict";
n.d(t, { Z: () => s, c: () => a }), n(321073);
var r = n(735438),
    i = n.n(r);
function s(e) {
    let t = (e, t) =>
            e.subscriptionPlanId === t.subscriptionPlanId &&
            e.subscriptionPlanPrice === t.subscriptionPlanPrice &&
            e.amount === t.amount &&
            i().isEqual(e.discounts, t.discounts),
        n = [],
        r = new Set();
    return (
        e.map((e) => {
            for (let i of n)
                if (t(i, e)) {
                    r.add(i.subscriptionPlanId), (i.quantity += e.quantity);
                    return;
                }
            n.push({ ...e });
        }),
        n.map((e) => {
            let t = { ...e };
            return (
                r.has(e.subscriptionPlanId) &&
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
        tax: e.tax,
        taxCode: e.tax_code,
        nominalTaxRate: e.nominal_tax_rate,
    };
}
