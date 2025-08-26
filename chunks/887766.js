n.d(t, {
    o: () => i,
    t: () => o,
});
var r = n(427164),
    i = (function (e) {
        return (
            (e[(e.ALWAYS_PINNED = 0)] = "ALWAYS_PINNED"),
            (e[(e.PINNED_ON_SCROLL_DOWN = 1)] = "PINNED_ON_SCROLL_DOWN"),
            e
        );
    })({});
let o = (0, r.le)({
    name: "2025-08_soundboard_upsell_pinning",
    kind: "user",
    defaultConfig: {},
    variations: {
        1: { upsellPinningMode: 0 },
        2: { upsellPinningMode: 1 },
    },
});
