r.d(n, {
    O: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-01_remove_emoji_effects',
    label: 'Remove emoji effects',
    defaultConfig: { removeEmojiEffects: !1 },
    commonTriggerPoint: a.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Remove emoji effects',
            config: { removeEmojiEffects: !0 }
        }
    ]
});
