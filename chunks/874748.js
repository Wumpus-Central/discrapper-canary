n.d(t, {
    BC: () => m,
    LR: () => p,
    ku: () => _
}),
    n(266796),
    n(789020);
var r = n(830121),
    i = n(754688),
    o = n(430824),
    a = n(768581),
    s = n(5192),
    l = n(154135),
    c = n(981631),
    u = n(959517),
    d = n(388032);
let f = 40;
function _(e) {
    var t, n, r, i, o;
    let { mediaPostEmbedData: c, guild: _, parentChannel: p, postThread: m, user: g, selectedGuildId: E, canAccess: b = !1 } = e;
    if (null == c) return null;
    let y = (0, l.EY)(c.thumbnail),
        v = !b && c.has_media_attachment,
        O = b ? d.NW.string(d.t.UsZEBA) : d.NW.string(d.t.ReFzYW),
        I = null != g ? s.ZP.getName(c.guild_id, c.channel_id, g) : void 0,
        S = null == g ? void 0 : g.getAvatarURL(null == _ ? void 0 : _.id, f);
    (null == S || E !== c.guild_id) &&
        (S = a.ZP.getGuildIconURL({
            id: c.guild_id,
            icon: c.guild_icon,
            size: f,
            canAnimate: !1
        }));
    let T = h(c.thumbnail) && !v,
        N = (null == (t = c.thumbnail) ? void 0 : t.filename) != null && (null == (r = c.thumbnail) || null == (n = r.filename) ? void 0 : n.startsWith(u._j));
    return {
        title: null != (i = c.title) ? i : '',
        subtitle: c.description,
        ctaText: O,
        coverImage: y,
        coverImageOverlayText: v ? d.NW.string(d.t.YonliY) : void 0,
        parentChannelId: c.parent_channel_id,
        threadId: c.channel_id,
        postThread: m,
        messageId: c.message_id,
        canAccess: b,
        guildId: c.guild_id,
        guildName: null != (o = null == _ ? void 0 : _.name) ? o : c.guild_name,
        authorId: null == c ? void 0 : c.author_id,
        authorName: I,
        channelName: null == p ? void 0 : p.name,
        avatarUrl: S,
        shouldShowBlurredThumbnailImage: v,
        shouldContainMediaWithBackground: T,
        shouldSpoiler: N,
        obscureAwaitingScan: !1,
        flags: c.flags,
        contentScanVersion: c.content_scan_version
    };
}
function p(e) {
    if (null == e) return;
    let t = (0, r.FO)(e);
    if (null == t) return;
    let n = (0, r.Sq)(t);
    if (null != n) return (0, i.Qj)(n);
}
function h(e) {
    if (null == e) return !1;
    let { height: t, width: n } = e;
    return null != t && null != n && t >= n;
}
function m(e, t) {
    let n = o.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = n.hasFeature(c.oNc.CREATOR_MONETIZABLE) || n.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
