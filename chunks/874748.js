(n.d(t, {
    BC: () => m,
    LR: () => p,
    ku: () => f
}),
    n(953529),
    n(997841));
var r = n(830121),
    i = n(754688),
    a = n(430824),
    o = n(768581),
    s = n(5192),
    l = n(154135),
    c = n(981631),
    u = n(959517),
    d = n(388032);
let _ = 40;
function f(e) {
    var t, n, r, i, a;
    let { mediaPostEmbedData: c, guild: f, parentChannel: p, postThread: m, user: g, selectedGuildId: E, canAccess: b = !1 } = e;
    if (null == c) return null;
    let y = (0, l.EY)(c.thumbnail),
        O = !b && c.has_media_attachment,
        v = b ? d.intl.string(d.t.UsZEBA) : d.intl.string(d.t.ReFzYW),
        I = null != g ? s.ZP.getName(c.guild_id, c.channel_id, g) : void 0,
        T = null == g ? void 0 : g.getAvatarURL(null == f ? void 0 : f.id, _);
    (null == T || E !== c.guild_id) &&
        (T = o.ZP.getGuildIconURL({
            id: c.guild_id,
            icon: c.guild_icon,
            size: _,
            canAnimate: !1
        }));
    let S = h(c.thumbnail) && !O,
        A = (null == (t = c.thumbnail) ? void 0 : t.filename) != null && (null == (r = c.thumbnail) || null == (n = r.filename) ? void 0 : n.startsWith(u._j));
    return {
        title: null != (i = c.title) ? i : '',
        subtitle: c.description,
        ctaText: v,
        coverImage: y,
        coverImageOverlayText: O ? d.intl.string(d.t.YonliY) : void 0,
        parentChannelId: c.parent_channel_id,
        threadId: c.channel_id,
        postThread: m,
        messageId: c.message_id,
        canAccess: b,
        guildId: c.guild_id,
        guildName: null != (a = null == f ? void 0 : f.name) ? a : c.guild_name,
        authorId: null == c ? void 0 : c.author_id,
        authorName: I,
        channelName: null == p ? void 0 : p.name,
        avatarUrl: T,
        shouldShowBlurredThumbnailImage: O,
        shouldContainMediaWithBackground: S,
        shouldSpoiler: A,
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
    let n = a.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = n.features.has(c.oNc.CREATOR_MONETIZABLE) || n.features.has(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
