n.d(t, { t: () => O }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(983161),
    l = n(359295),
    c = n(323407),
    u = n(279882),
    d = n(828186),
    f = n(698587),
    p = n(497504),
    _ = n(631536),
    h = n(922122),
    m = n(999755),
    g = n(990830),
    E = n(214611),
    b = n(740111);
class y extends o.C {
    create(e) {
        let t = {
            properties: { oneofKind: void 0 },
            contentIdentifier: "",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.properties = {
                        oneofKind: "placeholder",
                        placeholder: e.string(),
                    };
                    break;
                case 2:
                    a.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: b.xY.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    a.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: E.C.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab),
                    };
                    break;
                case 5:
                    a.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: g.w.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    a.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: m.j.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    a.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: h.g.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    a.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: _.O.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon),
                    };
                    break;
                case 9:
                    a.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: p.h.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    a.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: f.C.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    a.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: d.m.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    a.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: u.V.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    a.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: c.p.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    a.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: l.r.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    a.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: s.g.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabTooltip),
                    };
                    break;
                case 3:
                    a.contentIdentifier = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let y = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, y);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "placeholder" === e.properties.oneofKind && t.tag(1, r.TD.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                b.xY
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.TD.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                E.C.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.TD.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                g.w
                    .internalBinaryWrite(e.properties.marketingPageBanner, t.tag(5, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                m.j
                    .internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                h.g
                    .internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "giftIcon" === e.properties.oneofKind &&
                _.O.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.TD.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                p.h
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                f.C.internalBinaryWrite(
                    e.properties.giftPlanSelectionCardBanner,
                    t.tag(10, r.TD.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                d.m
                    .internalBinaryWrite(
                        e.properties.giftCustomizationBanner,
                        t.tag(11, r.TD.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                u.V.internalBinaryWrite(
                    e.properties.billingSettingsNitroGiftBanner,
                    t.tag(12, r.TD.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                c.p
                    .internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                l.r
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                s.g
                    .internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, r.TD.LengthDelimited).fork(), n)
                    .join(),
            "" !== e.contentIdentifier && t.tag(3, r.TD.LengthDelimited).string(e.contentIdentifier);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            {
                no: 1,
                name: "placeholder",
                kind: "scalar",
                oneof: "properties",
                T: 9,
            },
            {
                no: 2,
                name: "announcement_modal_variant_1",
                kind: "message",
                oneof: "properties",
                T: () => b.xY,
            },
            {
                no: 4,
                name: "premium_tab",
                kind: "message",
                oneof: "properties",
                T: () => E.C,
            },
            {
                no: 5,
                name: "marketing_page_banner",
                kind: "message",
                oneof: "properties",
                T: () => g.w,
            },
            {
                no: 6,
                name: "payment_modal_banner",
                kind: "message",
                oneof: "properties",
                T: () => m.j,
            },
            {
                no: 7,
                name: "mobile_bottom_sheet",
                kind: "message",
                oneof: "properties",
                T: () => h.g,
            },
            {
                no: 8,
                name: "gift_icon",
                kind: "message",
                oneof: "properties",
                T: () => _.O,
            },
            {
                no: 9,
                name: "gift_icon_coachmark",
                kind: "message",
                oneof: "properties",
                T: () => p.h,
            },
            {
                no: 10,
                name: "gift_plan_selection_card_banner",
                kind: "message",
                oneof: "properties",
                T: () => f.C,
            },
            {
                no: 11,
                name: "gift_customization_banner",
                kind: "message",
                oneof: "properties",
                T: () => d.m,
            },
            {
                no: 12,
                name: "billing_settings_nitro_gift_banner",
                kind: "message",
                oneof: "properties",
                T: () => u.V,
            },
            {
                no: 13,
                name: "gift_reminder_nagbar",
                kind: "message",
                oneof: "properties",
                T: () => c.p,
            },
            {
                no: 14,
                name: "gift_reminder_coachmark",
                kind: "message",
                oneof: "properties",
                T: () => l.r,
            },
            {
                no: 15,
                name: "premium_tab_tooltip",
                kind: "message",
                oneof: "properties",
                T: () => s.g,
            },
            {
                no: 3,
                name: "content_identifier",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let O = new y();
