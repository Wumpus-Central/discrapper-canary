n.d(t, { Z: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_referral_program_receiver_copy',
    label: 'Referral Program Receiver Copy Experiment',
    defaultConfig: { treatmentGroup: 0 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control group. Users see existing DM embed copy.',
            config: { treatmentGroup: 0 }
        },
        {
            id: 1,
            label: 'Treatment group. Users see variant 1 of the alternate DM embed copy.',
            config: { treatmentGroup: 1 }
        },
        {
            id: 2,
            label: 'Treatment group. Users see variant 2 of the alternate DM embed copy.',
            config: { treatmentGroup: 2 }
        },
        {
            id: 3,
            label: 'Treatment group. Users see variant 3 of the alternate DM embed copy.',
            config: { treatmentGroup: 3 }
        },
        {
            id: 4,
            label: 'Treatment group. Users see variant 4 of the alternate DM embed copy.',
            config: { treatmentGroup: 4 }
        }
    ]
});
