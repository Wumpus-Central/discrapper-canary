n.d(t, { Io: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-06_content_entry_embed',
    label: 'Content Inventory Embed',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { enabled: t } = i.getCurrentConfig({ location: e });
    return t;
}
