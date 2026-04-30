"use strict";
n.d(t, {
    A2: () => p,
    Cx: () => E,
    FH: () => f,
    If: () => c,
    N0: () => h,
    Vr: () => _,
    Zm: () => g,
    ib: () => d,
    uq: () => m,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.PLAY = 1)] = "PLAY"),
        (i[(i.ADD = 2)] = "ADD"),
        (i[(i.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        i),
    d = (((r = {}).ENTRY = "entry_sound"), (r.EXIT = "exit_sound"), (r.DEFAULT = "default"), r),
    _ = (((s = {}).ADDED = "added"), (s.UPDATED = "updated"), (s.REMOVED = "removed"), s),
    f = (((a = {}).DEFAULT = "default"), (a.CUSTOM = "custom"), a);
function h(e, t) {
    let { sound_id: n, emoji_id: i, emoji_name: r, user_id: s, available: a, ...o } = e;
    return { ...o, soundId: n, guildId: t, emojiId: i, emojiName: r, userId: s, available: a ?? !0 };
}
function p(e) {
    let { soundId: t, guildId: n, emojiId: i, emojiName: r, userId: s, ...a } = e;
    return { ...a, sound_id: t, guild_id: n, emoji_id: i, emoji_name: r, user_id: s };
}
var E =
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
