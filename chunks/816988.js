n.d(t, { u: () => r });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_nitro_shop_entry_points',
        label: 'User Profile Nitro Shop Entry Points',
        defaultConfig: {
            permanentEntryPointsEnabled: !1,
            dimissibleUpsellsEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enable Permanent Entry Points',
                config: {
                    permanentEntryPointsEnabled: !0,
                    dimissibleUpsellsEnabled: !1
                }
            },
            {
                id: 2,
                label: 'Enable Dimissible Upsells',
                config: {
                    permanentEntryPointsEnabled: !1,
                    dimissibleUpsellsEnabled: !0
                }
            }
        ]
    }),
    r = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: n });
    };
