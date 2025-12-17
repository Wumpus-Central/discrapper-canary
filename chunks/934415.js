n.d(t, {
    EO: () => G,
    LY: () => M,
    Nj: () => a.Z,
    a5: () => L,
    c4: () => x,
    g7: () => w,
    jZ: () => A,
    mE: () => Z,
    oQ: () => C,
    rX: () => N,
    rY: () => R,
    rt: () => P,
    wR: () => k,
    wl: () => j,
}),
    n(415506),
    n(539854),
    n(388685);
var r = n(149765),
    i = n(911969),
    a = n(90463),
    o = n(968358),
    s = n(874748),
    l = n(590415),
    c = n(131704),
    u = n(592125),
    d = n(984933),
    f = n(496675),
    p = n(944486),
    _ = n(938475),
    m = n(700785),
    h = n(709054);
n(51144);
var g = n(981631),
    E = n(474936),
    b = n(388032);
let { GUILD_VOICE: y, GUILD_CATEGORY: O, GUILD_STAGE_VOICE: v } = g.d4z;
function S(e, t) {
    return e === t || e === O;
}
function I(e, t, n) {
    let i = m.Hn;
    return (
        ((0, c.r8)(t) || t === O) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)),
        S(t, y) && ((i = r.IH(i, g.Plq.VIEW_CHANNEL)), (i = r.IH(i, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            allow: m.Hn,
            deny: i,
        }
    );
}
function T(e, t, n) {
    let i = m.Hn;
    return (
        ((0, c.r8)(t) || t === O) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)),
        (S(t, y) || S(t, v)) && ((i = r.IH(i, g.Plq.VIEW_CHANNEL)), (i = r.IH(i, g.Plq.CONNECT))),
        {
            id: e,
            type: n,
            deny: m.Hn,
            allow: i,
        }
    );
}
function C(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = [];
    return (
        (n.length > 0 || r) && a.push(I(e, t, i.BN.ROLE)),
        n.forEach((e) => {
            a.push(T(e, t, i.BN.ROLE));
        }),
        a
    );
}
function A(e, t) {
    return T(e, t, i.BN.MEMBER);
}
function N(e, t) {
    return T(e, t, i.BN.ROLE);
}
function P(e) {
    return [
        {
            id: e,
            type: i.BN.ROLE,
            deny: g.Plq.SEND_MESSAGES,
            allow: m.Hn,
        },
    ];
}
function R(e, t, n) {
    var r, i;
    let a = e.getGuildId(),
        s = n.getGuild(a),
        l = null != (r = null == s ? void 0 : s.maxVideoChannelUsers) ? r : -1,
        c = null != (i = null == s ? void 0 : s.maxStageVideoChannelUsers) ? i : -1,
        u = _.ZP.countVoiceStatesForChannel(e.id),
        d = _.ZP.getVoiceStatesForChannel(e),
        p = f.Z.can(g.Plq.MOVE_MEMBERS, e) && f.Z.can(g.Plq.CONNECT, e),
        m = !1;
    m =
        e.type === v
            ? null != a && (t.hasVideo(e.id) || (0, o.a)(d)) && c > 0 && u >= c
            : null != a && t.hasVideo(e.id) && l > 0 && u >= l + +!!p;
    let h = e.userLimit > 0 && u >= e.userLimit;
    return m || (h && !p);
}
function w(e, t) {
    return t.isGuildStageVoice()
        ? g.epw
        : null == e
          ? g.eWB
          : Math.max(
                e.features.has(g.GuildFeatures.VIP_REGIONS) ? E.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB,
                E.HO[e.premiumTier].limits.bitrate,
            );
}
function D(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
        a = [];
    return (
        t.forEach((e) => {
            if (e.id === r || e.id === n) return;
            let t = i[e.id];
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
function x(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
    return D({
        channels: t,
        selectedChannelId: n,
        selectedVoiceChannelId: r,
        voiceStates: i,
    }).map((e) => e.user);
}
function L(e) {
    let { type: t } = e;
    switch (t) {
        case g.d4z.DM:
            return b.intl.string(b.t.jN2DfZ);
        case g.d4z.GROUP_DM:
            return b.intl.string(b.t["e5y+gm"]);
        case g.d4z.GUILD_TEXT:
            return b.intl.string(b.t.Pnajj0);
        case g.d4z.GUILD_FORUM:
            return b.intl.string(b.t.GbryDd);
        case g.d4z.GUILD_MEDIA:
            return b.intl.string(b.t.seKITE);
        case g.d4z.GUILD_VOICE:
            return b.intl.string(b.t.BVZqJl);
        case g.d4z.GUILD_STAGE_VOICE:
            return b.intl.string(b.t.EErMzA);
        case g.d4z.GUILD_ANNOUNCEMENT:
            return b.intl.string(b.t.l1dkSD);
        case g.d4z.GUILD_STORE:
            return b.intl.string(b.t["P1/Erq"]);
        case g.d4z.GUILD_CATEGORY:
            return b.intl.string(b.t.vHCZwr);
        default:
            return null;
    }
}
function j(e) {
    if (null == e) return "text";
    let t = e.isMediaChannel();
    if (e.type === g.d4z.GUILD_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? "voice" : "voice-locked";
    if (e.type === g.d4z.GUILD_STAGE_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? "stage" : "stage-locked";
    if (c.Ec.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === g.d4z.GUILD_FORUM) return t ? "media" : "forum";
    if (e.type === g.d4z.GUILD_MEDIA) return "media";
    else if (c.sR.has(e.type)) return "text";
}
function M(e) {
    let t,
        n = u.Z.getChannel(p.Z.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === g.d4z.GUILD_TEXT) t = n.id;
    else {
        let n = d.ZP.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return g.Z5c.CHANNEL(e, t);
}
function k(e, t, n, r) {
    let i = null == r ? "" : "?summaryId=".concat(r);
    return ""
        .concat(location.protocol, "//")
        .concat(location.host)
        .concat(g.Z5c.CHANNEL(e, t, n))
        .concat(i);
}
function U(e, t, n, r) {
    return null == e || null == t || null == n
        ? k(e, t, r)
        : ""
              .concat(location.protocol, "//")
              .concat(location.host)
              .concat(g.Z5c.CHANNEL_THREAD_VIEW(e, t, n, r));
}
function G(e, t, n, r) {
    let i,
        a = e.getGuildId(),
        o = (0, s.BC)(a, t);
    return null != t && o ? U(a, t.id, e.id, h.default.castChannelIdAsMessageId(e.id)) : null != r ? r : k(a, e.id, n);
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
