n.d(t, {
    ZP: () => s,
    tE: () => i,
    xZ: () => o,
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
let a = (0, r.Z)({
        kind: "user",
        name: "2025-10-offer-reminders-ux-experiment",
        defaultConfig: {
            variant: "control",
            showNagbar: !0,
            hasExperimentalTooltip: !1,
        },
        variations: {
            1: {
                variant: "nagbar-refresh",
                showNagbar: !0,
                hasExperimentalTooltip: !0,
            },
            2: {
                variant: "offer-badge",
                showNagbar: !1,
                hasExperimentalTooltip: !0,
            },
            3: {
                variant: "offer-countdown",
                showNagbar: !1,
                hasExperimentalTooltip: !0,
            },
            4: {
                variant: "hero-countdown",
                showNagbar: !1,
                hasExperimentalTooltip: !0,
            },
        },
    }),
    o = (e) => a.getConfig({ location: e }),
    s = (e) => a.useConfig({ location: e });
