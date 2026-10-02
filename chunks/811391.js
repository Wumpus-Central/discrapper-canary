n.d(t, { A: () => h });
var i = n(315069),
    r = n(570221),
    a = n(737291),
    s = n.n(a),
    l = n(580630);
function o(e) {
    return new (s())(e.amount).dividedBy(10 ** e.exponent).toNumber();
}
function d(e) {
    return (0, l.$g)(o(e), e.currency, { convertToMajorUnits: !1 });
}
class c extends i.A {
    id;
    quantity;
    price;
    total;
    addOnPlans;
    discount;
    static createFromServer(e) {
        return new c({
            id: e.id,
            quantity: e.quantity,
            price: e.price,
            total: e.total,
            addOnPlans: e.add_on_plans ?? [],
            discount: e.discount ?? null,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.quantity = e.quantity),
            (this.price = e.price),
            (this.total = e.total),
            (this.addOnPlans = e.addOnPlans ?? []),
            (this.discount = e.discount ?? null));
    }
    getPlanQuantities() {
        let e = new Map([[this.id, this.quantity]]);
        for (let t of this.addOnPlans) e.set(t.id, (e.get(t.id) ?? 0) + t.quantity);
        return e;
    }
    matchesItems(e) {
        var t = this.getPlanQuantities(),
            n = (function (e) {
                let t = new Map();
                for (let { planId: n, quantity: i } of e) t.set(n, (t.get(n) ?? 0) + i);
                return t;
            })(e);
        if (t.size !== n.size) return !1;
        for (let [e, i] of t) if (n.get(e) !== i) return !1;
        return !0;
    }
    getPriceString() {
        return d(this.total);
    }
    getRegularPriceString() {
        return d(this.price);
    }
    getDiscountedPriceString() {
        return null != this.discount ? d(this.discount.discounted_price) : null;
    }
    getAddOnPrice() {
        if (0 === this.addOnPlans.length) return null;
        let { currency: e, exponent: t } = this.addOnPlans[0].price;
        return {
            majorUnits: o({
                currency: e,
                exponent: t,
                amount: this.addOnPlans.reduce((e, t) => e + t.price.amount * t.quantity, 0),
            }),
            currency: e,
        };
    }
}
class u extends i.A {
    paymentSources;
    storeCountry;
    allowedCurrencies;
    availablePlans;
    static createFromOrder(e) {
        let t = e?.checkout_context;
        return null == t
            ? null
            : new u({
                  paymentSources: t.payment_sources ?? [],
                  storeCountry: null != t.store_country ? t.store_country.country : null,
                  allowedCurrencies: t.allowed_currencies ?? [],
                  availablePlans: (t.available_plans ?? []).map(c.createFromServer),
              });
    }
    constructor(e) {
        (super(),
            (this.paymentSources = e.paymentSources ?? []),
            (this.storeCountry = e.storeCountry ?? null),
            (this.allowedCurrencies = e.allowedCurrencies ?? []),
            (this.availablePlans = e.availablePlans ?? []));
    }
    getAvailablePlanForItems(e) {
        return this.availablePlans.find((t) => t.matchesItems(e)) ?? null;
    }
}
class _ extends i.A {
    subscriptionId;
    subscriptionPreview;
    updateType;
    resetBillingCycle;
    static createFromServer(e) {
        var t, n;
        return null == e
            ? null
            : new _({
                  subscriptionId: e.subscription_id ?? null,
                  subscriptionPreview:
                      null == (t = e.subscription_preview)
                          ? null
                          : {
                                currency: t.currency,
                                countryCode: t.country_code,
                                subscriptionTrialId: t.subscription_trial_id ?? null,
                                renewalInfo:
                                    null == (n = t.renewal_info)
                                        ? null
                                        : {
                                              price: n.price,
                                              currency: n.currency,
                                              renewalLineItems: (n.renewal_line_items ?? []).map((e) => ({
                                                  refOrderLineItemId: e.ref_order_line_item_id,
                                                  price: e.price,
                                              })),
                                          },
                                subscriptionType: t.subscription_type ?? null,
                            },
                  updateType: e.update_type ?? null,
                  resetBillingCycle: e.reset_billing_cycle ?? !1,
              });
    }
    constructor(e) {
        (super(),
            (this.subscriptionId = e.subscriptionId ?? null),
            (this.subscriptionPreview = e.subscriptionPreview ?? null),
            (this.updateType = e.updateType ?? null),
            (this.resetBillingCycle = e.resetBillingCycle ?? !1));
    }
}
var E = n(818348);
class A extends i.A {
    paymentGateway;
    paymentSourceId;
    currency;
    invoicePreview;
    static createFromOrder(e) {
        let t = e.billing_facet;
        return null == t
            ? null
            : new A({
                  paymentGateway: t.payment_gateway,
                  paymentSourceId: t.payment_source_id ?? null,
                  currency: t.currency ?? null,
                  invoicePreview: r.Y.createInvoiceFromOrder(e),
              });
    }
    constructor(e) {
        (super(),
            (this.paymentGateway = e.paymentGateway),
            (this.paymentSourceId = e.paymentSourceId ?? null),
            (this.currency = e.currency ?? null),
            (this.invoicePreview = e.invoicePreview ?? null));
    }
    get fiatCurrency() {
        return this.paymentGateway === E.kM.VIRTUAL_CURRENCY ? null : this.currency;
    }
}
class h extends i.A {
    id;
    status;
    revision;
    orderLineItems;
    billingFacetRecord;
    externalGatewayFacet;
    giftingFacet;
    subscriptionFacet;
    checkoutContextRecord;
    createdAt;
    unsatisfiedConstraints;
    static createFromServer(e) {
        return new h({
            id: e.id,
            status: e.status,
            revision: e.revision,
            orderLineItems: e.order_line_items,
            billingFacetRecord: A.createFromOrder(e),
            externalGatewayFacet: e.external_gateway_facet ?? null,
            giftingFacet: e.gifting_facet ?? null,
            checkoutContextRecord: u.createFromOrder(e),
            createdAt: e.created_at,
            unsatisfiedConstraints: e.unsatisfied_constraints ?? [],
            subscriptionFacet: _.createFromServer(e.subscription_facet),
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.status = e.status),
            (this.revision = e.revision),
            (this.orderLineItems = e.orderLineItems ?? []),
            (this.billingFacetRecord = e.billingFacetRecord ?? null),
            (this.externalGatewayFacet = e.externalGatewayFacet ?? null),
            (this.giftingFacet = e.giftingFacet ?? null),
            (this.subscriptionFacet = e.subscriptionFacet ?? null),
            (this.checkoutContextRecord = e.checkoutContextRecord ?? null),
            (this.createdAt = e.createdAt),
            (this.unsatisfiedConstraints = e.unsatisfiedConstraints ?? []));
    }
    getInvoicePreview() {
        return null == this.billingFacetRecord ? null : this.billingFacetRecord.invoicePreview;
    }
    firstUnsatisfiedConstraintReasonCode() {
        return this.unsatisfiedConstraints.length > 0 ? this.unsatisfiedConstraints[0].reason_code : null;
    }
}
