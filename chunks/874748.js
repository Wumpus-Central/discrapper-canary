n.d(t, {
    BC: () => m,
    LR: () => _,
    ku: () => p
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
function p(e) {
    var t, n, r, i, o;
    let { mediaPostEmbedData: c, guild: p, parentChannel: _, postThread: m, user: g, selectedGuildId: E, canAccess: v = !1 } = e;
    if (null == c) return null;
    let b = (0, l.EY)(c.thumbnail),
        y = !v && c.has_media_attachment,
        O = v ? d.NW.string(d.t.UsZEBA) : d.NW.string(d.t.ReFzYW),
        S = null != g ? s.ZP.getName(c.guild_id, c.channel_id, g) : void 0,
        I = null == g ? void 0 : g.getAvatarURL(null == p ? void 0 : p.id, f);
    (null == I || E !== c.guild_id) &&
        (I = a.ZP.getGuildIconURL({
            id: c.guild_id,
            icon: c.guild_icon,
            size: f,
            canAnimate: !1
        }));
    let T = h(c.thumbnail) && !y,
        N = (null === (t = c.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = c.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(u._j));
    return {
        title: null !== (i = c.title) && void 0 !== i ? i : '',
        subtitle: c.description,
        ctaText: O,
        coverImage: b,
        coverImageOverlayText: y ? d.NW.string(d.t.YonliY) : void 0,
        parentChannelId: c.parent_channel_id,
        threadId: c.channel_id,
        postThread: m,
        messageId: c.message_id,
        canAccess: v,
        guildId: c.guild_id,
        guildName: null !== (o = null == p ? void 0 : p.name) && void 0 !== o ? o : c.guild_name,
        authorId: null == c ? void 0 : c.author_id,
        authorName: S,
        channelName: null == _ ? void 0 : _.name,
        avatarUrl: I,
        shouldShowBlurredThumbnailImage: y,
        shouldContainMediaWithBackground: T,
        shouldSpoiler: N,
        obscureAwaitingScan: !1,
        flags: c.flags,
        contentScanVersion: c.content_scan_version
    };
}
function _(e) {
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
