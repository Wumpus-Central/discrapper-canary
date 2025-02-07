n.d(t, {
    EO: () => B,
    LY: () => k,
    Nj: () => a.Z,
    a5: () => w,
    c4: () => P,
    g7: () => x,
    jZ: () => C,
    mE: () => Z,
    oQ: () => N,
    rX: () => R,
    rY: () => D,
    rt: () => O,
    wR: () => U,
    wl: () => M
}),
    n(411104),
    n(653041),
    n(47120);
var i = n(149765),
    r = n(911969),
    a = n(90463),
    s = n(968358),
    o = n(874748),
    l = n(590415),
    u = n(131704),
    c = n(592125),
    d = n(984933),
    f = n(496675),
    _ = n(944486),
    p = n(938475),
    h = n(700785),
    m = n(709054);
n(51144);
var g = n(981631),
    E = n(474936),
    v = n(388032);
let { GUILD_VOICE: y, GUILD_CATEGORY: I, GUILD_STAGE_VOICE: b } = g.d4z;
function T(e, t) {
    return e === t || e === I;
}
function S(e, t, n) {
    let r = h.Hn;
    return (
        ((0, u.r8)(t) || t === I) && (r = i.IH(r, g.Plq.VIEW_CHANNEL)),
        T(t, y) && ((r = i.IH(r, g.Plq.VIEW_CHANNEL)), (r = i.IH(r, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            allow: h.Hn,
            deny: r
        }
    );
}
function A(e, t, n) {
    let r = h.Hn;
    return (
        ((0, u.r8)(t) || t === I) && (r = i.IH(r, g.Plq.VIEW_CHANNEL)),
        (T(t, y) || T(t, b)) && ((r = i.IH(r, g.Plq.VIEW_CHANNEL)), (r = i.IH(r, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            deny: h.Hn,
            allow: r
        }
    );
}
function N(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = [];
    return (
        (n.length > 0 || i) && a.push(S(e, t, r.BN.ROLE)),
        n.forEach((e) => {
            a.push(A(e, t, r.BN.ROLE));
        }),
        a
    );
}
function C(e, t) {
    return A(e, t, r.BN.MEMBER);
}
function R(e, t) {
    return A(e, t, r.BN.ROLE);
}
function O(e) {
    return [
        {
            id: e,
            type: r.BN.ROLE,
            deny: g.Plq.SEND_MESSAGES,
            allow: h.Hn
        }
    ];
}
function D(e, t, n) {
    var i, r;
    let a = e.getGuildId(),
        o = n.getGuild(a),
        l = null !== (i = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== i ? i : -1,
        u = null !== (r = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== r ? r : -1,
        c = p.ZP.countVoiceStatesForChannel(e.id),
        d = p.ZP.getVoiceStatesForChannel(e),
        _ = f.Z.can(g.Plq.MOVE_MEMBERS, e) && f.Z.can(g.Plq.CONNECT, e),
        h = !1;
    h = e.type === b ? null != a && (t.hasVideo(e.id) || (0, s.a)(d)) && u > 0 && c >= u : null != a && t.hasVideo(e.id) && l > 0 && c >= l + (_ ? 1 : 0);
    let m = e.userLimit > 0 && c >= e.userLimit;
    return h || (m && !_);
}
function x(e, t) {
    return t.isGuildStageVoice() ? g.epw : null == e ? g.eWB : Math.max(e.hasFeature(g.oNc.VIP_REGIONS) ? E.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB, E.HO[e.premiumTier].limits.bitrate);
}
function L(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e,
        a = [];
    return (
        t.forEach((e) => {
            if (e.id === i || e.id === n) return;
            let t = r[e.id];
            null != t &&
                (e.isGuildStageVoice()
                    ? t.forEach((e) => {
                          (0, l.gf)(e.voiceState) === l.xO.ON_STAGE && a.push(e);
                      })
                    : t.forEach((e) => a.push(e)));
        }),
        a
    );
}
function P(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e;
    return L({
        channels: t,
        selectedChannelId: n,
        selectedVoiceChannelId: i,
        voiceStates: r
    }).map((e) => e.user);
}
function w(e) {
    let { type: t } = e;
    switch (t) {
        case g.d4z.DM:
            return v.intl.string(v.t.jN2DfX);
        case g.d4z.GROUP_DM:
            return v.intl.string(v.t['e5y+go']);
        case g.d4z.GUILD_TEXT:
            return v.intl.string(v.t.Pnajj4);
        case g.d4z.GUILD_FORUM:
            return v.intl.string(v.t.GbryDQ);
        case g.d4z.GUILD_MEDIA:
            return v.intl.string(v.t.seKITE);
        case g.d4z.GUILD_VOICE:
            return v.intl.string(v.t.BVZqJi);
        case g.d4z.GUILD_STAGE_VOICE:
            return v.intl.string(v.t.EErMzM);
        case g.d4z.GUILD_ANNOUNCEMENT:
            return v.intl.string(v.t.l1dkSE);
        case g.d4z.GUILD_STORE:
            return v.intl.string(v.t['P1/Erq']);
        case g.d4z.GUILD_CATEGORY:
            return v.intl.string(v.t.vHCZws);
        default:
            return null;
    }
}
function M(e) {
    if (null == e) return 'text';
    let t = e.isMediaChannel();
    if (e.type === g.d4z.GUILD_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === g.d4z.GUILD_STAGE_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (u.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    if (e.type === g.d4z.GUILD_FORUM) return t ? 'media' : 'forum';
    if (e.type === g.d4z.GUILD_MEDIA) return 'media';
    else if (u.sR.has(e.type)) return 'text';
}
function k(e) {
    let t;
    let n = c.Z.getChannel(_.Z.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === g.d4z.GUILD_TEXT) t = n.id;
    else {
        let n = d.ZP.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return g.Z5c.CHANNEL(e, t);
}
function U(e, t, n, i) {
    let r = null == i ? '' : '?summaryId='.concat(i);
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(g.Z5c.CHANNEL(e, t, n))
        .concat(r);
}
function G(e, t, n, i) {
    return null == e || null == t || null == n
        ? U(e, t, i)
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat(g.Z5c.CHANNEL_THREAD_VIEW(e, t, n, i));
}
function B(e, t, n, i) {
    let r;
    let a = e.getGuildId(),
        s = (0, o.BC)(a, t);
    return null != t && s ? G(a, t.id, e.id, m.default.castChannelIdAsMessageId(e.id)) : null != i ? i : U(a, e.id, n);
}
function Z(e) {
    if (null == e) return null;
    switch (e.type) {
        case g.d4z.GUILD_ANNOUNCEMENT:
        case g.d4z.GUILD_TEXT:
        case g.d4z.GUILD_FORUM:
        case g.d4z.GUILD_MEDIA:
            return g.ZY5.GUILD_CHANNEL;
        case g.d4z.GROUP_DM:
        case g.d4z.DM:
            return g.ZY5.DM_CHANNEL;
        default:
            return null;
    }
}
