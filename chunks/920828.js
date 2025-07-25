n.d(t, { R: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-06_game_presence_negative_test',
    label: 'Game Presence Negative Test',
    defaultConfig: {
        filterGamePresence: !1,
        filterRichPresence: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                filterGamePresence: !1,
                filterRichPresence: !1
            }
        },
        {
            id: 1,
            label: 'No Gaming Presence (Rich or Game Detection)',
            config: {
                filterGamePresence: !0,
                filterRichPresence: !0
            }
        },
        {
            id: 2,
            label: 'Game Presence but NO Rich Presence',
            config: {
                filterGamePresence: !1,
                filterRichPresence: !0
            }
        }
    ]
});
