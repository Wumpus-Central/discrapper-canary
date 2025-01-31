n.d(t, { i: () => a });
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-11_expression_suggestions_disabled',
    label: 'Expression Suggestions Disabled Experiment',
    defaultConfig: { disabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Disable sticker expression suggestions',
            config: { disabled: !0 }
        }
    ]
});
