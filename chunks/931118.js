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
            e
        );
    })({});
let a = (0, r.Z)({
        kind: "user",
        name: "2025-10-offer-reminders-ux-experiment",
        defaultConfig: {
            variant: "control",
            showNagbar: !0,
        },
        variations: {
            1: {
                variant: "nagbar-refresh",
                showNagbar: !0,
            },
            2: {
                variant: "offer-badge",
                showNagbar: !1,
            },
            3: {
                variant: "offer-countdown",
                showNagbar: !1,
            },
        },
    }),
    o = (e) => a.getConfig({ location: e }),
    s = (e) => a.useConfig({ location: e });
