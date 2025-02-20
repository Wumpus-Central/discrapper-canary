n.d(t, { O: () => o });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-01_remove_emoji_effects',
    label: 'Remove emoji effects',
    defaultConfig: { removeEmojiEffects: !1 },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Remove emoji effects',
            config: { removeEmojiEffects: !0 }
        }
    ]
});
