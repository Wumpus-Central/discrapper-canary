n.d(t, {
    A2: () => A,
    Cx: () => T,
    FH: () => u,
    If: () => E,
    N0: () => I,
    Vr: () => c,
    Zm: () => N,
    ib: () => d,
    uq: () => S,
});
var i,
    r,
    a,
    s,
    _,
    l,
    o,
    E =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.PLAY = 1)] = "PLAY"),
        (i[(i.ADD = 2)] = "ADD"),
        (i[(i.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        i),
    d = (((r = {}).ENTRY = "entry_sound"), (r.EXIT = "exit_sound"), (r.DEFAULT = "default"), r),
    c = (((a = {}).ADDED = "added"), (a.UPDATED = "updated"), (a.REMOVED = "removed"), a),
    u = (((s = {}).DEFAULT = "default"), (s.CUSTOM = "custom"), s);
function I(e, t) {
    let { sound_id: n, emoji_id: i, emoji_name: r, user_id: a, available: s, ..._ } = e;
    return { ..._, soundId: n, guildId: t, emojiId: i, emojiName: r, userId: a, available: s ?? !0 };
}
function A(e) {
    let { soundId: t, guildId: n, emojiId: i, emojiName: r, userId: a, ...s } = e;
    return { ...s, sound_id: t, guild_id: n, emoji_id: i, emoji_name: r, user_id: a };
}
var T =
        (((_ = {})[(_.FAVORITES = 0)] = "FAVORITES"),
        (_[(_.GUILD = 1)] = "GUILD"),
        (_[(_.DEFAULTS = 2)] = "DEFAULTS"),
        (_[(_.SEARCH = 3)] = "SEARCH"),
        _),
    S = (((l = {})[(l.SOUND = 0)] = "SOUND"), (l[(l.ADD_SOUND = 1)] = "ADD_SOUND"), l),
    N =
        (((o = {})[(o.GIFT_CODE = 0)] = "GIFT_CODE"),
        (o[(o.SOUNDBOARD = 1)] = "SOUNDBOARD"),
        (o[(o.JOINED_VOICE_CHANNEL = 2)] = "JOINED_VOICE_CHANNEL"),
        (o[(o.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        o);
