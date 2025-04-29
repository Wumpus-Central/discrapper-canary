n.d(t, { i: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-11_expression_suggestions_disabled',
    label: 'Expression Suggestions Disabled Experiment',
    defaultConfig: { disabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Disable sticker expression suggestions',
            config: { disabled: !0 }
        }
    ]
});
