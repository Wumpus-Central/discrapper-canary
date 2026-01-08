n.d(t, {
    ZP: () => o,
    tE: () => i,
});
var r = n(722733),
    i = (function (e) {
        return (
            (e.CONTROL = "control"),
            (e.NAGBAR_REFRESH = "nagbar-refresh"),
            (e.OFFER_BADGE = "offer-badge"),
            (e.OFFER_COUNTDOWN = "offer-countdown"),
            (e.HERO_COUNTDOWN = "hero-countdown"),
            e
        );
    })({});
let a = (0, r.ZP)({
        kind: "user",
        name: "2025-10-offer-reminders-ux-experiment",
        defaultConfig: {
            variant: "control",
            showNagbar: !0,
            hasExperimentalTooltip: !1,
            hasNitroTabBadgeOfferReminder: !1,
        },
        variations: {
            1: {
                variant: "nagbar-refresh",
                showNagbar: !0,
                hasExperimentalTooltip: !0,
                hasNitroTabBadgeOfferReminder: !1,
            },
            2: {
                variant: "offer-badge",
                showNagbar: !1,
                hasExperimentalTooltip: !0,
                hasNitroTabBadgeOfferReminder: !0,
            },
            3: {
                variant: "offer-countdown",
                showNagbar: !1,
                hasExperimentalTooltip: !0,
                hasNitroTabBadgeOfferReminder: !0,
            },
            4: {
                variant: "hero-countdown",
                showNagbar: !1,
                hasExperimentalTooltip: !0,
                hasNitroTabBadgeOfferReminder: !0,
            },
        },
    }),
    o = (e) => a.useConfig({ location: e });
