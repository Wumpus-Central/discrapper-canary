"use strict";
n.d(t, { i: () => i, w: () => s });
var r = n(600975);
let i = (0, r.C)({
        kind: "user",
        id: "2022-04_creator_monetization_country_allowlist",
        label: "Creator Monetization Available in Country",
        defaultConfig: { isUserEligibleForCreatorMonetization: !1 },
        treatments: [
            {
                id: 1,
                label: "Enables users to view Creator Monetization entrypoints",
                config: { isUserEligibleForCreatorMonetization: !0 },
            },
        ],
    }),
    s = (0, r.C)({
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
