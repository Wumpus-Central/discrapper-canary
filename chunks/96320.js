n.d(t, { b: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-08_offer_notice_recurrence',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: 'Offer Notice Recurrence',
    defaultConfig: { useRecurringNotices: !1 },
    treatments: [
        {
            id: 1,
            label: 'Recurring Notices',
            config: { useRecurringNotices: !0 }
        }
    ]
});
