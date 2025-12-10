n.d(t, {
    BC: () => h,
    LR: () => _,
    ku: () => p,
}),
    n(953529),
    n(997841);
var r = n(830121),
    i = n(754688),
    a = n(430824),
    o = n(768581),
    s = n(5192),
    l = n(154135),
    c = n(981631),
    u = n(959517),
    d = n(388032);
let f = 40;
function p(e) {
    var t, n, r, i, a;
    let {
        mediaPostEmbedData: c,
        guild: p,
        parentChannel: _,
        postThread: h,
        user: g,
        selectedGuildId: E,
        canAccess: b = !1,
    } = e;
    if (null == c) return null;
    let y = (0, l.EY)(c.thumbnail),
        O = !b && c.has_media_attachment,
        v = b ? d.intl.string(d.t.UsZEBI) : d.intl.string(d.t.ReFzYZ),
        S = null != g ? s.ZP.getName(c.guild_id, c.channel_id, g) : void 0,
        I = null == g ? void 0 : g.getAvatarURL(null == p ? void 0 : p.id, f);
    (null == I || E !== c.guild_id) &&
        (I = o.ZP.getGuildIconURL({
            id: c.guild_id,
            icon: c.guild_icon,
            size: f,
            canAnimate: !1,
        }));
    let T = m(c.thumbnail) && !O,
        C =
            (null == (t = c.thumbnail) ? void 0 : t.filename) != null &&
            (null == (r = c.thumbnail) || null == (n = r.filename) ? void 0 : n.startsWith(u._j));
    return {
        title: null != (i = c.title) ? i : "",
        subtitle: c.description,
        ctaText: v,
        coverImage: y,
        coverImageOverlayText: O ? d.intl.string(d.t.Yonlia) : void 0,
        parentChannelId: c.parent_channel_id,
        threadId: c.channel_id,
        postThread: h,
        messageId: c.message_id,
        canAccess: b,
        guildId: c.guild_id,
        guildName: null != (a = null == p ? void 0 : p.name) ? a : c.guild_name,
        authorId: null == c ? void 0 : c.author_id,
        authorName: S,
        channelName: null == _ ? void 0 : _.name,
        avatarUrl: I,
        shouldShowBlurredThumbnailImage: O,
        shouldContainMediaWithBackground: T,
        shouldSpoiler: C,
        obscureAwaitingScan: !1,
        flags: c.flags,
        contentScanVersion: c.content_scan_version,
    };
}
function _(e) {
    if (null == e) return;
    let t = (0, r.FO)(e);
    if (null == t) return;
    let n = (0, r.Sq)(t);
    if (null != n) return (0, i.Qj)(n);
}
function m(e) {
    if (null == e) return !1;
    let { height: t, width: n } = e;
    return null != t && null != n && t >= n;
}
function h(e, t) {
    let n = a.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r =
        n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
