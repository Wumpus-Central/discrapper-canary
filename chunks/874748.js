n.d(t, {
    BC: () => m,
    LR: () => p,
    ku: () => _
}),
    n(789020);
var i = n(830121),
    r = n(754688),
    a = n(430824),
    s = n(768581),
    o = n(5192),
    l = n(154135),
    u = n(981631),
    c = n(959517),
    d = n(388032);
let f = 40;
function _(e) {
    var t, n, i, r, a;
    let { mediaPostEmbedData: u, guild: _, parentChannel: p, postThread: m, user: g, selectedGuildId: E, canAccess: v = !1 } = e;
    if (null == u) return null;
    let y = (0, l.EY)(u.thumbnail),
        I = !v && u.has_media_attachment,
        b = v ? d.intl.string(d.t.UsZEBA) : d.intl.string(d.t.ReFzYW),
        T = null != g ? o.ZP.getName(u.guild_id, u.channel_id, g) : void 0,
        S = null == g ? void 0 : g.getAvatarURL(null == _ ? void 0 : _.id, f);
    (null == S || E !== u.guild_id) &&
        (S = s.ZP.getGuildIconURL({
            id: u.guild_id,
            icon: u.guild_icon,
            size: f,
            canAnimate: !1
        }));
    let A = h(u.thumbnail) && !I,
        N = (null === (t = u.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (i = u.thumbnail) || void 0 === i ? void 0 : null === (n = i.filename) || void 0 === n ? void 0 : n.startsWith(c._j));
    return {
        title: null !== (r = u.title) && void 0 !== r ? r : '',
        subtitle: u.description,
        ctaText: b,
        coverImage: y,
        coverImageOverlayText: I ? d.intl.string(d.t.YonliY) : void 0,
        parentChannelId: u.parent_channel_id,
        threadId: u.channel_id,
        postThread: m,
        messageId: u.message_id,
        canAccess: v,
        guildId: u.guild_id,
        guildName: null !== (a = null == _ ? void 0 : _.name) && void 0 !== a ? a : u.guild_name,
        authorId: null == u ? void 0 : u.author_id,
        authorName: T,
        channelName: null == p ? void 0 : p.name,
        avatarUrl: S,
        shouldShowBlurredThumbnailImage: I,
        shouldContainMediaWithBackground: A,
        shouldSpoiler: N,
        obscureAwaitingScan: !1,
        flags: u.flags,
        contentScanVersion: u.content_scan_version
    };
}
function p(e) {
    if (null == e) return;
    let t = (0, i.FO)(e);
    if (null == t) return;
    let n = (0, i.Sq)(t);
    if (null != n) return (0, r.Qj)(n);
}
function h(e) {
    if (null == e) return !1;
    let { height: t, width: n } = e;
    return null != t && null != n && t >= n;
}
function m(e, t) {
    let n = a.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let i = n.hasFeature(u.oNc.CREATOR_MONETIZABLE) || n.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && i;
}
