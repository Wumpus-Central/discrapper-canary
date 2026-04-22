"use strict";
n.d(t, {
    A2: () => h,
    Cx: () => p,
    FH: () => f,
    If: () => d,
    N0: () => E,
    Vr: () => _,
    Zm: () => g,
    ib: () => c,
    uq: () => m,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    d =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.PLAY = 1)] = "PLAY"),
        (r[(r.ADD = 2)] = "ADD"),
        (r[(r.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        r),
    c = (((i = {}).ENTRY = "entry_sound"), (i.EXIT = "exit_sound"), (i.DEFAULT = "default"), i),
    _ = (((s = {}).ADDED = "added"), (s.UPDATED = "updated"), (s.REMOVED = "removed"), s),
    f = (((a = {}).DEFAULT = "default"), (a.CUSTOM = "custom"), a);
function E(e, t) {
    let { sound_id: n, emoji_id: r, emoji_name: i, user_id: s, available: a, ...o } = e;
    return { ...o, soundId: n, guildId: t, emojiId: r, emojiName: i, userId: s, available: a ?? !0 };
}
function h(e) {
    let { soundId: t, guildId: n, emojiId: r, emojiName: i, userId: s, ...a } = e;
    return { ...a, sound_id: t, guild_id: n, emoji_id: r, emoji_name: i, user_id: s };
}
var p =
        (((o = {})[(o.FAVORITES = 0)] = "FAVORITES"),
        (o[(o.GUILD = 1)] = "GUILD"),
        (o[(o.DEFAULTS = 2)] = "DEFAULTS"),
        (o[(o.SEARCH = 3)] = "SEARCH"),
        o),
    m = (((l = {})[(l.SOUND = 0)] = "SOUND"), (l[(l.ADD_SOUND = 1)] = "ADD_SOUND"), l),
    g =
        (((u = {})[(u.GIFT_CODE = 0)] = "GIFT_CODE"),
        (u[(u.SOUNDBOARD = 1)] = "SOUNDBOARD"),
        (u[(u.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL"),
        (u[(u.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        u);
