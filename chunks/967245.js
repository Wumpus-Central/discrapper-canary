n.d(t, {
    i$: () => i,
    wm: () => s,
    xQ: () => a,
    yz: () => o,
});
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
    a = (0, r.C)({
        kind: "guild",
        id: "2022-11_creator_monetization_onboarding_waitlist",
        label: "Creator Monetization Onboarding Waitlist",
        defaultConfig: { enableWaitlist: !1 },
        treatments: [
            {
                id: 1,
                label: "Enables Guilds to (possibly) see the waitlist",
                config: { enableWaitlist: !0 },
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
    }),
    o = (0, r.C)({
        kind: "guild",
        id: "2025-08_move_role_subscriptions_onboarding_from_server_settings_",
        label: "Move Role Subscriptions Onboarding From Server Settings",
        defaultConfig: { hideMonetizatonOnboardingInServerSettings: !1 },
        treatments: [
            {
                id: 1,
                label: "Only shows onboarding page if first visited from new home",
                config: { hideMonetizatonOnboardingInServerSettings: !0 },
            },
        ],
    });
