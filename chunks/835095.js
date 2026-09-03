n.d(t, { A: () => l }), n(938796);
var i = n(665260),
    r = n(315069),
    a = n(822571),
    s = n(852218);
class l extends r.A {
    id;
    trialId;
    startDate;
    endDate;
    outboundRedemptionEndDate;
    inboundHeaderText;
    inboundBodyText;
    inboundHelpCenterLink;
    outboundTitle;
    outboundRedemptionModalBody;
    outboundTermsAndConditions;
    outboundRedemptionPageLink;
    outboundRedemptionUrlFormat;
    flags;
    inboundRestrictedCountries;
    outboundRestrictedCountries;
    allowedCountries;
    countryListMode;
    promotionType;
    partnerId;
    marketingComponents;
    rewardSkuIds;
    bogoRewardEnabled;
    boostBogoMaxCredits;
    promotionKey;
    static createFromServer(e) {
        let t = new Date(e.start_date),
            n = new Date(e.end_date),
            i = e.metadata?.premium_promotion?.reward_config?.boost_bogo;
        return new l({
            id: e.id,
            trialId: e.trial_id,
            startDate: t,
            endDate: n,
            outboundRedemptionEndDate:
                null != e.outbound_redemption_end_date ? new Date(e.outbound_redemption_end_date) : null,
            inboundHeaderText: e.inbound_header_text ?? "",
            inboundBodyText: e.inbound_body_text ?? "",
            inboundHelpCenterLink: e.inbound_help_center_link ?? "",
            outboundTitle: e.outbound_title ?? "",
            outboundRedemptionModalBody: e.outbound_redemption_modal_body ?? "",
            outboundTermsAndConditions: e.outbound_terms_and_conditions ?? "",
            outboundRedemptionPageLink: e.outbound_redemption_page_link ?? "",
            outboundRedemptionUrlFormat: e.outbound_redemption_url_format ?? "",
            flags: e.flags,
            inboundRestrictedCountries: e.inbound_restricted_countries,
            outboundRestrictedCountries: e.outbound_restricted_countries,
            allowedCountries: e.allowed_countries ?? [],
            countryListMode: e.country_list_mode ?? s.qn.BLOCKLIST,
            promotionType: e.promotion_type,
            partnerId: e.partner_id ?? null,
            marketingComponents: (e.marketing_components ?? []).map((e) =>
                a.A.createFromServer(e, { startDate: t, endDate: n }),
            ),
            rewardSkuIds:
                e.metadata?.premium_promotion?.reward_sku_ids ?? e.metadata?.gift_promotion?.reward_sku_ids ?? [],
            bogoRewardEnabled: e.metadata?.premium_promotion?.reward_config?.bogo?.enabled === !0,
            boostBogoMaxCredits: i?.enabled === !0 ? (i.max_credits_per_user ?? null) : null,
            promotionKey: e.promotion_key ?? "",
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.trialId = e.trialId),
            (this.startDate = e.startDate),
            (this.endDate = e.endDate),
            (this.outboundRedemptionEndDate = e.outboundRedemptionEndDate),
            (this.inboundHeaderText = e.inboundHeaderText),
            (this.inboundBodyText = e.inboundBodyText),
            (this.inboundHelpCenterLink = e.inboundHelpCenterLink),
            (this.outboundTitle = e.outboundTitle),
            (this.outboundRedemptionModalBody = e.outboundRedemptionModalBody),
            (this.outboundTermsAndConditions = e.outboundTermsAndConditions),
            (this.outboundRedemptionPageLink = e.outboundRedemptionPageLink),
            (this.outboundRedemptionUrlFormat = e.outboundRedemptionUrlFormat),
            (this.flags = e.flags ?? 0),
            (this.inboundRestrictedCountries = e.inboundRestrictedCountries ?? []),
            (this.outboundRestrictedCountries = e.outboundRestrictedCountries ?? []),
            (this.allowedCountries = e.allowedCountries ?? []),
            (this.countryListMode = e.countryListMode ?? s.qn.BLOCKLIST),
            (this.promotionType = e.promotionType),
            (this.partnerId = e.partnerId),
            (this.marketingComponents = e.marketingComponents),
            (this.rewardSkuIds = e.rewardSkuIds),
            (this.bogoRewardEnabled = e.bogoRewardEnabled ?? !1),
            (this.boostBogoMaxCredits = e.boostBogoMaxCredits ?? null),
            (this.promotionKey = e.promotionKey);
    }
    get isBogo() {
        return this.promotionType === s.pt.BOGO;
    }
    get isMarketingMoment() {
        return this.promotionType === s.pt.MARKETING_MOMENT;
    }
    get hasBogoReward() {
        return this.bogoRewardEnabled;
    }
    hasFlag(e) {
        return (0, i.Lt)(this.flags, e);
    }
    isCountryRestricted(e) {
        if (this.countryListMode === s.qn.ALLOWLIST) return !this.allowedCountries.includes(e);
        switch (this.promotionType) {
            case s.pt.THIRD_PARTY_INBOUND:
            case s.pt.THIRD_PARTY_DIRECT_FULFILLMENT:
                return this.inboundRestrictedCountries.includes(e);
            case s.pt.THIRD_PARTY_OUTBOUND:
            case s.pt.THIRD_PARTY_OUTBOUND_RECURRING:
                return this.outboundRestrictedCountries.includes(e);
            default:
                return !1;
        }
    }
}
