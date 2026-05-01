n.d(t, {
    A2: () => I,
    Cx: () => T,
    FH: () => u,
    If: () => c,
    N0: () => A,
    Vr: () => E,
    Zm: () => S,
    ib: () => _,
    uq: () => h,
});
var i,
    a,
    r,
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
    _ = (((a = {}).ENTRY = "entry_sound"), (a.EXIT = "exit_sound"), (a.DEFAULT = "default"), a),
    E = (((r = {}).ADDED = "added"), (r.UPDATED = "updated"), (r.REMOVED = "removed"), r),
    u = (((s = {}).DEFAULT = "default"), (s.CUSTOM = "custom"), s);
function A(e, t) {
    let { sound_id: n, emoji_id: i, emoji_name: a, user_id: r, available: s, ...l } = e;
    return { ...l, soundId: n, guildId: t, emojiId: i, emojiName: a, userId: r, available: s ?? !0 };
}
function I(e) {
    let { soundId: t, guildId: n, emojiId: i, emojiName: a, userId: r, ...s } = e;
    return { ...s, sound_id: t, guild_id: n, emoji_id: i, emoji_name: a, user_id: r };
}
var T =
        (((l = {})[(l.FAVORITES = 0)] = "FAVORITES"),
        (l[(l.GUILD = 1)] = "GUILD"),
        (l[(l.DEFAULTS = 2)] = "DEFAULTS"),
        (l[(l.SEARCH = 3)] = "SEARCH"),
        l),
    h = (((o = {})[(o.SOUND = 0)] = "SOUND"), (o[(o.ADD_SOUND = 1)] = "ADD_SOUND"), o),
    S =
        (((d = {})[(d.GIFT_CODE = 0)] = "GIFT_CODE"),
        (d[(d.SOUNDBOARD = 1)] = "SOUNDBOARD"),
        (d[(d.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL"),
        (d[(d.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        d);
