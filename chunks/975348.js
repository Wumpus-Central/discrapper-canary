n.d(t, { w: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-03_soundboard_row_limit',
    label: 'Soundboard Row Limit',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Show 2 rows before Show All is clicked',
            config: {
                enabled: !0,
                numRows: 2
            }
        },
        {
            id: 2,
            label: 'Show 3 rows before Show All is clicked',
            config: {
                enabled: !0,
                numRows: 3
            }
        }
    ]
});
