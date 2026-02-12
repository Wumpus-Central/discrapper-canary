"use strict";
n.d(t, {
    A2: () => l,
    Cx: () => u,
    FH: () => s,
    If: () => r,
    N0: () => o,
    Vr: () => a,
    Zm: () => d,
    ib: () => i,
    uq: () => c,
});
var r = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.PLAY = 1)] = "PLAY"),
            (e[(e.ADD = 2)] = "ADD"),
            (e[(e.SOUNDMOJI = 3)] = "SOUNDMOJI"),
            e
        );
    })({}),
    i = (function (e) {
        return (e.ENTRY = "entry_sound"), (e.EXIT = "exit_sound"), (e.DEFAULT = "default"), e;
    })({}),
    a = (function (e) {
        return (e.ADDED = "added"), (e.UPDATED = "updated"), (e.REMOVED = "removed"), e;
    })({}),
    s = (function (e) {
        return (e.DEFAULT = "default"), (e.CUSTOM = "custom"), e;
    })({});
function o(e, t) {
    let { sound_id: n, emoji_id: r, emoji_name: i, user_id: a, available: s, ...o } = e;
    return { ...o, soundId: n, guildId: t, emojiId: r, emojiName: i, userId: a, available: s ?? !0 };
}
function l(e) {
    let { soundId: t, guildId: n, emojiId: r, emojiName: i, userId: a, ...s } = e;
    return { ...s, sound_id: t, guild_id: n, emoji_id: r, emoji_name: i, user_id: a };
}
var u = (function (e) {
        return (
            (e[(e.FAVORITES = 0)] = "FAVORITES"),
            (e[(e.GUILD = 1)] = "GUILD"),
            (e[(e.DEFAULTS = 2)] = "DEFAULTS"),
            (e[(e.SEARCH = 3)] = "SEARCH"),
            e
        );
    })({}),
    c = (function (e) {
        return (e[(e.SOUND = 0)] = "SOUND"), (e[(e.ADD_SOUND = 1)] = "ADD_SOUND"), e;
    })({}),
    d = (function (e) {
        return (
            (e[(e.GIFT_CODE = 0)] = "GIFT_CODE"),
            (e[(e.SOUNDBOARD = 1)] = "SOUNDBOARD"),
            (e[(e.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL"),
            (e[(e.SOUNDMOJI = 3)] = "SOUNDMOJI"),
            e
        );
    })({});
