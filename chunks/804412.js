n.d(t, {
    Ay: () => a,
    CJ: () => l,
});
var r,
    i = n(250105),
    l =
        (((r = {}).CONTROL = "control"),
        (r.NAGBAR_REFRESH = "nagbar-refresh"),
        (r.OFFER_BADGE = "offer-badge"),
        (r.OFFER_COUNTDOWN = "offer-countdown"),
        (r.HERO_COUNTDOWN = "hero-countdown"),
        r);
let o = (0, i.Ay)({
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
    a = (e) =>
        o.useConfig({
            location: e,
        });
