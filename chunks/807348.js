"use strict";
n.d(t, {
    A2: () => E,
    Cx: () => p,
    FH: () => h,
    If: () => d,
    N0: () => f,
    Vr: () => _,
    Zm: () => g,
    ib: () => c,
    uq: () => m,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    d =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.PLAY = 1)] = "PLAY"),
        (i[(i.ADD = 2)] = "ADD"),
        (i[(i.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        i),
    c = (((r = {}).ENTRY = "entry_sound"), (r.EXIT = "exit_sound"), (r.DEFAULT = "default"), r),
    _ = (((s = {}).ADDED = "added"), (s.UPDATED = "updated"), (s.REMOVED = "removed"), s),
    h = (((a = {}).DEFAULT = "default"), (a.CUSTOM = "custom"), a);
function f(e, t) {
    let { sound_id: n, emoji_id: i, emoji_name: r, user_id: s, available: a, ...o } = e;
    return { ...o, soundId: n, guildId: t, emojiId: i, emojiName: r, userId: s, available: a ?? !0 };
}
function E(e) {
    let { soundId: t, guildId: n, emojiId: i, emojiName: r, userId: s, ...a } = e;
    return { ...a, sound_id: t, guild_id: n, emoji_id: i, emoji_name: r, user_id: s };
}
var p =
        (((o = {})[(o.FAVORITES = 0)] = "FAVORITES"),
        (o[(o.GUILD = 1)] = "GUILD"),
        (o[(o.DEFAULTS = 2)] = "DEFAULTS"),
        (o[(o.SEARCH = 3)] = "SEARCH"),
        (o[(o.FREQUENTLY_USED = 4)] = "FREQUENTLY_USED"),
        o),
    m = (((l = {})[(l.SOUND = 0)] = "SOUND"), (l[(l.ADD_SOUND = 1)] = "ADD_SOUND"), l),
    g =
        (((u = {})[(u.GIFT_CODE = 0)] = "GIFT_CODE"),
        (u[(u.SOUNDBOARD = 1)] = "SOUNDBOARD"),
        (u[(u.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL"),
        (u[(u.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        u);
