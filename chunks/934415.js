n.d(t, {
    EO: () => G,
    LY: () => k,
    Nj: () => o.Z,
    a5: () => x,
    c4: () => L,
    g7: () => w,
    jZ: () => A,
    mE: () => B,
    oQ: () => N,
    rX: () => C,
    rY: () => P,
    rt: () => R,
    wR: () => j,
    wl: () => M
}),
    n(411104),
    n(653041),
    n(47120);
var r = n(149765),
    i = n(911969),
    o = n(90463),
    a = n(968358),
    s = n(874748),
    l = n(590415),
    c = n(131704),
    u = n(592125),
    d = n(984933),
    f = n(496675),
    _ = n(944486),
    p = n(938475),
    h = n(700785),
    m = n(709054);
n(51144);
var g = n(981631),
    E = n(474936),
    b = n(388032);
let { GUILD_VOICE: y, GUILD_CATEGORY: v, GUILD_STAGE_VOICE: O } = g.d4z;
function I(e, t) {
    return e === t || e === v;
}
function S(e, t, n) {
    let i = h.Hn;
    return (
        ((0, c.r8)(t) || t === v) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)),
        I(t, y) && ((i = r.IH(i, g.Plq.VIEW_CHANNEL)), (i = r.IH(i, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            allow: h.Hn,
            deny: i
        }
    );
}
function T(e, t, n) {
    let i = h.Hn;
    return (
        ((0, c.r8)(t) || t === v) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)),
        (I(t, y) || I(t, O)) && ((i = r.IH(i, g.Plq.VIEW_CHANNEL)), (i = r.IH(i, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            deny: h.Hn,
            allow: i
        }
    );
}
function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = [];
    return (
        (n.length > 0 || r) && o.push(S(e, t, i.BN.ROLE)),
        n.forEach((e) => {
            o.push(T(e, t, i.BN.ROLE));
        }),
        o
    );
}
function A(e, t) {
    return T(e, t, i.BN.MEMBER);
}
function C(e, t) {
    return T(e, t, i.BN.ROLE);
}
function R(e) {
    return [
        {
            id: e,
            type: i.BN.ROLE,
            deny: g.Plq.SEND_MESSAGES,
            allow: h.Hn
        }
    ];
}
function P(e, t, n) {
    var r, i;
    let o = e.getGuildId(),
        s = n.getGuild(o),
        l = null != (r = null == s ? void 0 : s.maxVideoChannelUsers) ? r : -1,
        c = null != (i = null == s ? void 0 : s.maxStageVideoChannelUsers) ? i : -1,
        u = p.ZP.countVoiceStatesForChannel(e.id),
        d = p.ZP.getVoiceStatesForChannel(e),
        _ = f.Z.can(g.Plq.MOVE_MEMBERS, e) && f.Z.can(g.Plq.CONNECT, e),
        h = !1;
    h = e.type === O ? null != o && (t.hasVideo(e.id) || (0, a.a)(d)) && c > 0 && u >= c : null != o && t.hasVideo(e.id) && l > 0 && u >= l + +!!_;
    let m = e.userLimit > 0 && u >= e.userLimit;
    return h || (m && !_);
}
function w(e, t) {
    return t.isGuildStageVoice() ? g.epw : null == e ? g.eWB : Math.max(e.hasFeature(g.oNc.VIP_REGIONS) ? E.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB, E.HO[e.premiumTier].limits.bitrate);
}
function D(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
        o = [];
    return (
        t.forEach((e) => {
            if (e.id === r || e.id === n) return;
            let t = i[e.id];
            null != t &&
                (e.isGuildStageVoice()
                    ? t.forEach((e) => {
                          (0, l.gf)(e.voiceState) === l.xO.ON_STAGE && o.push(e);
                      })
                    : t.forEach((e) => o.push(e)));
        }),
        o
    );
}
function L(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return D({
        channels: t,
        selectedChannelId: n,
        selectedVoiceChannelId: r,
        voiceStates: i
    }).map((e) => e.user);
}
function x(e) {
    let { type: t } = e;
    switch (t) {
        case g.d4z.DM:
            return b.NW.string(b.t.jN2DfX);
        case g.d4z.GROUP_DM:
            return b.NW.string(b.t['e5y+go']);
        case g.d4z.GUILD_TEXT:
            return b.NW.string(b.t.Pnajj4);
        case g.d4z.GUILD_FORUM:
            return b.NW.string(b.t.GbryDQ);
        case g.d4z.GUILD_MEDIA:
            return b.NW.string(b.t.seKITE);
        case g.d4z.GUILD_VOICE:
            return b.NW.string(b.t.BVZqJi);
        case g.d4z.GUILD_STAGE_VOICE:
            return b.NW.string(b.t.EErMzM);
        case g.d4z.GUILD_ANNOUNCEMENT:
            return b.NW.string(b.t.l1dkSE);
        case g.d4z.GUILD_STORE:
            return b.NW.string(b.t['P1/Erq']);
        case g.d4z.GUILD_CATEGORY:
            return b.NW.string(b.t.vHCZws);
        default:
            return null;
    }
}
function M(e) {
    if (null == e) return 'text';
    let t = e.isMediaChannel();
    if (e.type === g.d4z.GUILD_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === g.d4z.GUILD_STAGE_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (c.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    if (e.type === g.d4z.GUILD_FORUM) return t ? 'media' : 'forum';
    if (e.type === g.d4z.GUILD_MEDIA) return 'media';
    else if (c.sR.has(e.type)) return 'text';
}
function k(e) {
    let t,
        n = u.Z.getChannel(_.Z.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === g.d4z.GUILD_TEXT) t = n.id;
    else {
        let n = d.ZP.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return g.Z5c.CHANNEL(e, t);
}
function j(e, t, n, r) {
    let i = null == r ? '' : '?summaryId='.concat(r);
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(g.Z5c.CHANNEL(e, t, n))
        .concat(i);
}
function U(e, t, n, r) {
    return null == e || null == t || null == n
        ? j(e, t, r)
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat(g.Z5c.CHANNEL_THREAD_VIEW(e, t, n, r));
}
function G(e, t, n, r) {
    let i,
        o = e.getGuildId(),
        a = (0, s.BC)(o, t);
    return null != t && a ? U(o, t.id, e.id, m.default.castChannelIdAsMessageId(e.id)) : null != r ? r : j(o, e.id, n);
}
function B(e) {
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
