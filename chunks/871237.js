"use strict";
n.d(t, {
    Jz: () => D,
    we: () => O,
    DJ: () => k,
    n: () => x,
    fK: () => L,
    Pd: () => b,
    QG: () => M,
    n3: () => v,
    IP: () => R,
    vJ: () => P,
    af: () => U,
    Jg: () => w,
    CG: () => C,
    an: () => s,
}),
    n(321073);
var i = n(136722),
    r = n(155718);
function s(e) {
    return e
        .replace(/[\s-~]+/g, "-")
        .replace(/^-+/, "")
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
        .toLowerCase();
}
var a = n(669715),
    o = n(461715),
    l = n(105530),
    u = n(95701),
    c = n(734057),
    d = n(808728),
    _ = n(576705),
    f = n(309010),
    h = n(607567),
    p = n(488926),
    E = n(935208);
n(427262);
var m = n(652215),
    g = n(788868),
    A = n(375708);
let { GUILD_VOICE: I, GUILD_CATEGORY: T, GUILD_STAGE_VOICE: S } = m.rbe;
function N(e, t) {
    return e === t || e === T;
}
function y(e, t, n) {
    let r = p.x3;
    return (
        ((0, u.tr)(t) || t === T) && (r = i.WQ(r, m.xBc.VIEW_CHANNEL)),
        (N(t, I) || N(t, S)) && ((r = i.WQ(r, m.xBc.VIEW_CHANNEL)), (r = i.WQ(r, m.xBc.CONNECT))),
        { id: e, type: n, deny: p.x3, allow: r }
    );
}
function C(e, t, n) {
    var s;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = [];
    return (
        (n.length > 0 || o) &&
            l.push(
                ((s = r.r2.ROLE),
                (a = p.x3),
                ((0, u.tr)(t) || t === T) && (a = i.WQ(a, m.xBc.VIEW_CHANNEL)),
                N(t, I) && ((a = i.WQ(a, m.xBc.VIEW_CHANNEL)), (a = i.WQ(a, m.xBc.CONNECT))),
                { id: e, type: s, allow: p.x3, deny: a }),
            ),
        n.forEach((e) => {
            l.push(y(e, t, r.r2.ROLE));
        }),
        l
    );
}
function v(e, t) {
    return y(e, t, r.r2.MEMBER);
}
function O(e, t) {
    return y(e, t, r.r2.ROLE);
}
function R(e) {
    return [{ id: e, type: r.r2.ROLE, deny: m.xBc.SEND_MESSAGES, allow: p.x3 }];
}
function b(e, t, n) {
    let i = e.getGuildId(),
        r = n.getGuild(i),
        s = r?.maxVideoChannelUsers ?? -1,
        o = r?.maxStageVideoChannelUsers ?? -1,
        l = h.Ay.countVoiceStatesForChannel(e.id),
        u = h.Ay.getVoiceStatesForChannel(e),
        c = _.A.can(m.xBc.MOVE_MEMBERS, e) && _.A.can(m.xBc.CONNECT, e),
        d = !1;
    d =
        e.type === S
            ? null != i && (t.hasVideo(e.id) || (0, a.t)(u)) && o > 0 && l >= o
            : null != i && t.hasVideo(e.id) && s > 0 && l >= s + +!!c;
    let f = e.userLimit > 0 && l >= e.userLimit;
    return d || (f && !c);
}
function D(e, t) {
    return t.isGuildStageVoice()
        ? m.gp3
        : null == e
          ? m.DqD
          : Math.max(
                e.features.has(m.GuildFeatures.VIP_REGIONS) ? g.TG[m.TVA.TIER_3].limits.bitrate : m.DqD,
                g.TG[e.premiumTier].limits.bitrate,
            );
}
function L(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e;
    return (function (e) {
        let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e,
            s = [];
        return (
            t.forEach((e) => {
                if (e.id === i || e.id === n) return;
                let t = r[e.id];
                null != t &&
                    (e.isGuildStageVoice()
                        ? t.forEach((e) => {
                              (0, l.eY)(e.voiceState) === l.zF.ON_STAGE && s.push(e);
                          })
                        : t.forEach((e) => s.push(e)));
            }),
            s
        );
    })({ channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r }).map((e) => e.user);
}
function w(e) {
    let { type: t } = e;
    switch (t) {
        case m.rbe.DM:
            return A.intl.string(A.t.jN2DfZ);
        case m.rbe.GROUP_DM:
            return A.intl.string(A.t["e5y+gm"]);
        case m.rbe.GUILD_TEXT:
            return A.intl.string(A.t.Pnajj0);
        case m.rbe.GUILD_FORUM:
            return A.intl.string(A.t.GbryDd);
        case m.rbe.GUILD_MEDIA:
            return A.intl.string(A.t.seKITE);
        case m.rbe.GUILD_VOICE:
            return A.intl.string(A.t.BVZqJl);
        case m.rbe.GUILD_STAGE_VOICE:
            return A.intl.string(A.t.EErMzA);
        case m.rbe.GUILD_ANNOUNCEMENT:
            return A.intl.string(A.t.l1dkSD);
        case m.rbe.GUILD_STORE:
            return A.intl.string(A.t["P1/Erq"]);
        case m.rbe.GUILD_CATEGORY:
            return A.intl.string(A.t.vHCZwr);
        default:
            return null;
    }
}
function M(e) {
    if (null == e) return "text";
    let t = e.isMediaChannel();
    if (e.type === m.rbe.GUILD_VOICE) return _.A.can(m.xBc.CONNECT, e) ? "voice" : "voice-locked";
    if (e.type === m.rbe.GUILD_STAGE_VOICE) return _.A.can(m.xBc.CONNECT, e) ? "stage" : "stage-locked";
    if (u.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === m.rbe.GUILD_FORUM) return t ? "media" : "forum";
    if (e.type === m.rbe.GUILD_MEDIA) return "media";
    else if (u.k3.has(e.type)) return "text";
}
function P(e) {
    let t,
        n = c.A.getChannel(f.A.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === m.rbe.GUILD_TEXT) t = n.id;
    else {
        let n = d.Ay.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return m.BVt.CHANNEL(e, t);
}
function x(e, t, n, i) {
    let r = null == i ? "" : `?summaryId=${i}`;
    return `${location.protocol}//${location.host}${m.BVt.CHANNEL(e, t, n)}${r}`;
}
function U(e, t, n, i) {
    let r,
        s = e.getGuildId(),
        a = (0, o.$m)(s, t);
    if (null != t && a) {
        var l, u, c;
        (l = t.id),
            (u = e.id),
            (c = E.default.castChannelIdAsMessageId(e.id)),
            (r =
                null == s || null == l || null == u
                    ? x(s, l, c)
                    : `${location.protocol}//${location.host}${m.BVt.CHANNEL_THREAD_VIEW(s, l, u, c)}`);
    } else r = i ?? x(s, e.id, n);
    return r;
}
function k(e) {
    if (null == e) return null;
    switch (e.type) {
        case m.rbe.GUILD_ANNOUNCEMENT:
        case m.rbe.GUILD_TEXT:
        case m.rbe.GUILD_FORUM:
        case m.rbe.GUILD_MEDIA:
            return m.liQ.GUILD_CHANNEL;
        case m.rbe.GROUP_DM:
        case m.rbe.DM:
            return m.liQ.DM_CHANNEL;
        default:
            return null;
    }
}
