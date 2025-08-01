n.d(t, { b: () => l });
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
    kind: 'user',
    id: '2025-08_offer_notice_recurrence',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
