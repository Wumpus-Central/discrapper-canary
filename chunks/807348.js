"use strict";
n.d(t, {
    A2: () => h,
    Cx: () => I,
    FH: () => E,
    If: () => c,
    N0: () => A,
    Vr: () => _,
    Zm: () => p,
    ib: () => u,
    uq: () => f,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.PLAY = 1)] = "PLAY"),
        (i[(i.ADD = 2)] = "ADD"),
        (i[(i.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        i),
    u = (((r = {}).ENTRY = "entry_sound"), (r.EXIT = "exit_sound"), (r.DEFAULT = "default"), r),
    _ = (((a = {}).ADDED = "added"), (a.UPDATED = "updated"), (a.REMOVED = "removed"), a),
    E = (((s = {}).DEFAULT = "default"), (s.CUSTOM = "custom"), s);
function A(e, t) {
    let { sound_id: n, emoji_id: i, emoji_name: r, user_id: a, available: s, ...l } = e;
    return { ...l, soundId: n, guildId: t, emojiId: i, emojiName: r, userId: a, available: s ?? !0 };
}
function h(e) {
    let { soundId: t, guildId: n, emojiId: i, emojiName: r, userId: a, ...s } = e;
    return { ...s, sound_id: t, guild_id: n, emoji_id: i, emoji_name: r, user_id: a };
}
var I =
        (((l = {})[(l.FAVORITES = 0)] = "FAVORITES"),
        (l[(l.GUILD = 1)] = "GUILD"),
        (l[(l.DEFAULTS = 2)] = "DEFAULTS"),
        (l[(l.SEARCH = 3)] = "SEARCH"),
        (l[(l.FREQUENTLY_USED = 4)] = "FREQUENTLY_USED"),
        (l[(l.TOP_SOUNDS = 5)] = "TOP_SOUNDS"),
        l),
    f = (((o = {})[(o.SOUND = 0)] = "SOUND"), (o[(o.ADD_SOUND = 1)] = "ADD_SOUND"), o),
    p =
        (((d = {})[(d.GIFT_CODE = 0)] = "GIFT_CODE"),
        (d[(d.SOUNDBOARD = 1)] = "SOUNDBOARD"),
        (d[(d.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL"),
        (d[(d.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        d);
