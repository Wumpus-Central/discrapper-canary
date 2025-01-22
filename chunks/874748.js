r.d(n, {
    BC: function () {
        return E;
    },
    LR: function () {
        return m;
    },
    ku: function () {
        return _;
    }
});
var i = r(789020);
var a = r(830121),
    o = r(754688),
    s = r(430824),
    l = r(768581),
    u = r(5192),
    c = r(154135),
    d = r(981631),
    f = r(959517),
    p = r(388032);
let h = 40;
function _(e) {
    var n, r, i, a, o;
    let { mediaPostEmbedData: s, guild: d, parentChannel: _, postThread: m, user: E, selectedGuildId: v, canAccess: y = !1 } = e;
    if (null == s) return null;
    let b = (0, c.EY)(s.thumbnail),
        I = !y && s.has_media_attachment,
        T = y ? p.intl.string(p.t.UsZEBA) : p.intl.string(p.t.ReFzYW),
        S = null != E ? u.ZP.getName(s.guild_id, s.channel_id, E) : void 0,
        A = null == E ? void 0 : E.getAvatarURL(null == d ? void 0 : d.id, h);
    (null == A || v !== s.guild_id) &&
        (A = l.ZP.getGuildIconURL({
            id: s.guild_id,
            icon: s.guild_icon,
            size: h,
            canAnimate: !1
        }));
    let C = g(s.thumbnail) && !I,
        N = (null === (n = s.thumbnail) || void 0 === n ? void 0 : n.filename) != null && (null === (i = s.thumbnail) || void 0 === i ? void 0 : null === (r = i.filename) || void 0 === r ? void 0 : r.startsWith(f._j));
    return {
        title: null !== (a = s.title) && void 0 !== a ? a : '',
        subtitle: s.description,
        ctaText: T,
        coverImage: b,
        coverImageOverlayText: I ? p.intl.string(p.t.YonliY) : void 0,
        parentChannelId: s.parent_channel_id,
        threadId: s.channel_id,
        postThread: m,
        messageId: s.message_id,
        canAccess: y,
        guildId: s.guild_id,
        guildName: null !== (o = null == d ? void 0 : d.name) && void 0 !== o ? o : s.guild_name,
        authorId: null == s ? void 0 : s.author_id,
        authorName: S,
        channelName: null == _ ? void 0 : _.name,
        avatarUrl: A,
        shouldShowBlurredThumbnailImage: I,
        shouldContainMediaWithBackground: C,
        shouldSpoiler: N,
        obscureAwaitingScan: !1,
        flags: s.flags,
        contentScanVersion: s.content_scan_version
    };
}
function m(e) {
    if (null == e) return;
    let n = (0, a.FO)(e);
    if (null == n) return;
    let r = (0, a.Sq)(n);
    if (null != r) return (0, o.Qj)(r);
}
function g(e) {
    if (null == e) return !1;
    let { height: n, width: r } = e;
    return null != n && null != r && n >= r;
}
function E(e, n) {
    let r = s.Z.getGuild(e);
    if (null == r || null == n) return !1;
    let i = r.hasFeature(d.oNc.CREATOR_MONETIZABLE) || r.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === n.isMediaChannel() && i;
}
