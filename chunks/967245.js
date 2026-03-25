"use strict";
n.d(t, { w: () => r });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2023-01_creator_monetization_nag_activate_users",
    label: "Creator Monetization Nag Activate Users",
    defaultConfig: { enableCreatorMonetizationNagActivateForUser: !1 },
    treatments: [
        {
            id: 1,
            label: "Enables users to see nag bar to activate server subscriptions",
            config: { enableCreatorMonetizationNagActivateForUser: !0 },
        },
    ],
});
