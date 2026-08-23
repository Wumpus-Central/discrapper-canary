"use strict";
n.d(t, {
    Jz: () => v,
    we: () => L,
    DJ: () => x,
    n: () => w,
    fK: () => b,
    Pd: () => D,
    QG: () => P,
    n3: () => O,
    IP: () => y,
    vJ: () => U,
    af: () => G,
    Jg: () => M,
    CG: () => R,
    an: () => a,
}),
    n(321073);
var i = n(136722),
    r = n(155718);
function a(e) {
    return e
        .replace(/[\s-~]+/g, "-")
        .replace(/^-+/, "")
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
        .toLowerCase();
}
var s = n(669715),
    l = n(461715),
    o = n(105530),
    d = n(95701),
    c = n(734057),
    u = n(808728),
    _ = n(576705),
    E = n(309010),
    A = n(607567),
    h = n(488926),
    I = n(935208);
n(427262);
var f = n(652215),
    p = n(202541),
    T = n(375708);
let { GUILD_VOICE: m, GUILD_CATEGORY: g, GUILD_STAGE_VOICE: S } = f.rbe;
function N(e, t) {
    return e === t || e === g;
}
function C(e, t, n) {
    let r = h.x3;
    return (
        ((0, d.tr)(t) || t === g) && (r = i.WQ(r, f.xBc.VIEW_CHANNEL)),
        (N(t, m) || N(t, S)) && ((r = i.WQ(r, f.xBc.VIEW_CHANNEL)), (r = i.WQ(r, f.xBc.CONNECT))),
        { id: e, type: n, deny: h.x3, allow: r }
    );
}
function R(e, t, n) {
    var a;
    let s,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = [];
    return (
        (n.length > 0 || l) &&
            o.push(
                ((a = r.r2.ROLE),
                (s = h.x3),
                ((0, d.tr)(t) || t === g) && (s = i.WQ(s, f.xBc.VIEW_CHANNEL)),
                N(t, m) && ((s = i.WQ(s, f.xBc.VIEW_CHANNEL)), (s = i.WQ(s, f.xBc.CONNECT))),
                { id: e, type: a, allow: h.x3, deny: s }),
            ),
        n.forEach((e) => {
            o.push(C(e, t, r.r2.ROLE));
        }),
        o
    );
}
function O(e, t) {
    return C(e, t, r.r2.MEMBER);
}
function L(e, t) {
    return C(e, t, r.r2.ROLE);
}
function y(e) {
    return [{ id: e, type: r.r2.ROLE, deny: f.xBc.SEND_MESSAGES, allow: h.x3 }];
}
function D(e, t, n) {
    let i = e.getGuildId(),
        r = n.getGuild(i),
        a = r?.maxVideoChannelUsers ?? -1,
        l = r?.maxStageVideoChannelUsers ?? -1,
        o = A.Ay.countVoiceStatesForChannel(e.id),
        d = A.Ay.getVoiceStatesForChannel(e),
        c = _.A.can(f.xBc.MOVE_MEMBERS, e) && _.A.can(f.xBc.CONNECT, e),
        u = !1;
    u =
        e.type === S
            ? null != i && (t.hasVideo(e.id) || (0, s.t)(d)) && l > 0 && o >= l
            : null != i && t.hasVideo(e.id) && a > 0 && o >= a + +!!c;
    let E = e.userLimit > 0 && o >= e.userLimit;
    return u || (E && !c);
}
function v(e, t) {
    return t.isGuildStageVoice()
        ? f.gp3
        : null == e
          ? f.DqD
          : Math.max(
                e.features.has(f.GuildFeatures.VIP_REGIONS) ? p.TG[f.TVA.TIER_3].limits.bitrate : f.DqD,
                p.TG[e.premiumTier].limits.bitrate,
            );
}
function b(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e;
    return (function (e) {
        let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e,
            a = [];
        return (
            t.forEach((e) => {
                if (e.id === i || e.id === n) return;
                let t = r[e.id];
                null != t &&
                    (e.isGuildStageVoice()
                        ? t.forEach((e) => {
                              (0, o.eY)(e.voiceState) === o.zF.ON_STAGE && a.push(e);
                          })
                        : t.forEach((e) => a.push(e)));
            }),
            a
        );
    })({ channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r }).map((e) => e.user);
}
function M(e) {
    let { type: t } = e;
    switch (t) {
        case f.rbe.DM:
            return T.intl.string(T.t.jN2DfZ);
        case f.rbe.GROUP_DM:
            return T.intl.string(T.t["e5y+gm"]);
        case f.rbe.GUILD_TEXT:
            return T.intl.string(T.t.Pnajj0);
        case f.rbe.GUILD_FORUM:
            return T.intl.string(T.t.GbryDd);
        case f.rbe.GUILD_MEDIA:
            return T.intl.string(T.t.seKITE);
        case f.rbe.GUILD_VOICE:
            return T.intl.string(T.t.BVZqJl);
        case f.rbe.GUILD_STAGE_VOICE:
            return T.intl.string(T.t.EErMzA);
        case f.rbe.GUILD_ANNOUNCEMENT:
            return T.intl.string(T.t.l1dkSD);
        case f.rbe.GUILD_STORE:
            return T.intl.string(T.t["P1/Erq"]);
        case f.rbe.GUILD_CATEGORY:
            return T.intl.string(T.t.vHCZwr);
        default:
            return null;
    }
}
function P(e) {
    if (null == e) return "text";
    let t = e.isNSFW(),
        n = e.isSpoilerChannel(),
        i = e.isMediaChannel();
    if (e.type === f.rbe.GUILD_VOICE)
        return _.A.can(f.xBc.CONNECT, e) ? (t ? "voice-nsfw" : n ? "voice-spoiler" : "voice") : "voice-locked";
    if (e.type === f.rbe.GUILD_STAGE_VOICE) return _.A.can(f.xBc.CONNECT, e) ? "stage" : "stage-locked";
    if (d.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === f.rbe.GUILD_FORUM)
        return i ? (t ? "media-nsfw" : "media") : t ? "forum-nsfw" : n ? "forum-spoiler" : "forum";
    if (e.type === f.rbe.GUILD_MEDIA) return t ? "media-nsfw" : "media";
    else if (e.type === f.rbe.GUILD_ANNOUNCEMENT)
        return t ? "announcement-nsfw" : n ? "announcement-spoiler" : "announcement";
    else if (d.k3.has(e.type)) return t ? "text-nsfw" : n ? "text-spoiler" : "text";
}
function U(e) {
    let t,
        n = c.A.getChannel(E.Ay.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === f.rbe.GUILD_TEXT) t = n.id;
    else {
        let n = u.Ay.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return f.BVt.CHANNEL(e, t);
}
function w(e, t, n, i) {
    let r = null == i ? "" : `?summaryId=${i}`;
    return `${location.protocol}//${location.host}${f.BVt.CHANNEL(e, t, n)}${r}`;
}
function G(e, t, n, i) {
    let r,
        a = e.getGuildId(),
        s = (0, l.$m)(a, t);
    if (null != t && s) {
        var o, d, c;
        (o = t.id),
            (d = e.id),
            (c = I.default.castChannelIdAsMessageId(e.id)),
            (r =
                null == a || null == o || null == d
                    ? w(a, o, c)
                    : `${location.protocol}//${location.host}${f.BVt.CHANNEL_THREAD_VIEW(a, o, d, c)}`);
    } else r = i ?? w(a, e.id, n);
    return r;
}
function x(e) {
    if (null == e) return null;
    switch (e.type) {
        case f.rbe.GUILD_ANNOUNCEMENT:
        case f.rbe.GUILD_TEXT:
        case f.rbe.GUILD_FORUM:
        case f.rbe.GUILD_MEDIA:
            return f.liQ.GUILD_CHANNEL;
        case f.rbe.GROUP_DM:
        case f.rbe.DM:
            return f.liQ.DM_CHANNEL;
        default:
            return null;
    }
}
