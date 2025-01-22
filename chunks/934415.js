r.d(n, {
    EO: function () {
        return j;
    },
    LY: function () {
        return Z;
    },
    Nj: function () {
        return u.Z;
    },
    a5: function () {
        return B;
    },
    c4: function () {
        return U;
    },
    g7: function () {
        return M;
    },
    jZ: function () {
        return L;
    },
    mE: function () {
        return H;
    },
    oQ: function () {
        return D;
    },
    rX: function () {
        return x;
    },
    rY: function () {
        return P;
    },
    rt: function () {
        return w;
    },
    wR: function () {
        return F;
    },
    wl: function () {
        return G;
    }
});
var i = r(411104);
var a = r(653041);
var o = r(47120);
var s = r(149765),
    l = r(911969),
    u = r(90463),
    c = r(968358),
    d = r(874748),
    f = r(590415),
    p = r(131704),
    h = r(592125),
    _ = r(984933),
    m = r(496675),
    g = r(944486),
    E = r(938475),
    v = r(700785),
    y = r(709054),
    b = r(981631),
    I = r(474936),
    T = r(388032);
let { GUILD_VOICE: S, GUILD_CATEGORY: A, GUILD_STAGE_VOICE: C } = b.d4z;
function N(e, n) {
    return e === n || e === A;
}
function R(e, n, r) {
    let i = v.Hn;
    return (
        ((0, p.r8)(n) || n === A) && (i = s.IH(i, b.Plq.VIEW_CHANNEL)),
        N(n, S) && ((i = s.IH(i, b.Plq.VIEW_CHANNEL)), (i = s.IH(i, b.Plq.CONNECT))),
        {
            id: e,
            type: r,
            allow: v.Hn,
            deny: i
        }
    );
}
function O(e, n, r) {
    let i = v.Hn;
    return (
        ((0, p.r8)(n) || n === A) && (i = s.IH(i, b.Plq.VIEW_CHANNEL)),
        (N(n, S) || N(n, C)) && ((i = s.IH(i, b.Plq.VIEW_CHANNEL)), (i = s.IH(i, b.Plq.CONNECT))),
        {
            id: e,
            type: r,
            deny: v.Hn,
            allow: i
        }
    );
}
function D(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = [];
    return (
        (r.length > 0 || i) && a.push(R(e, n, l.BN.ROLE)),
        r.forEach((e) => {
            a.push(O(e, n, l.BN.ROLE));
        }),
        a
    );
}
function L(e, n) {
    return O(e, n, l.BN.MEMBER);
}
function x(e, n) {
    return O(e, n, l.BN.ROLE);
}
function w(e) {
    return [
        {
            id: e,
            type: l.BN.ROLE,
            deny: b.Plq.SEND_MESSAGES,
            allow: v.Hn
        }
    ];
}
function P(e, n, r) {
    var i, a;
    let o = e.getGuildId(),
        s = r.getGuild(o),
        l = null !== (i = null == s ? void 0 : s.maxVideoChannelUsers) && void 0 !== i ? i : -1,
        u = null !== (a = null == s ? void 0 : s.maxStageVideoChannelUsers) && void 0 !== a ? a : -1,
        d = E.ZP.countVoiceStatesForChannel(e.id),
        f = E.ZP.getVoiceStatesForChannel(e),
        p = m.Z.can(b.Plq.MOVE_MEMBERS, e) && m.Z.can(b.Plq.CONNECT, e),
        h = !1;
    h = e.type === C ? null != o && (n.hasVideo(e.id) || (0, c.a)(f)) && u > 0 && d >= u : null != o && n.hasVideo(e.id) && l > 0 && d >= l + (p ? 1 : 0);
    let _ = e.userLimit > 0 && d >= e.userLimit;
    return h || (_ && !p);
}
function M(e, n) {
    return n.isGuildStageVoice() ? b.epw : null == e ? b.eWB : Math.max(e.hasFeature(b.oNc.VIP_REGIONS) ? I.HO[b.Eu4.TIER_3].limits.bitrate : b.eWB, I.HO[e.premiumTier].limits.bitrate);
}
function k(e) {
    let { channels: n, selectedChannelId: r, selectedVoiceChannelId: i, voiceStates: a } = e,
        o = [];
    return (
        n.forEach((e) => {
            if (e.id === i || e.id === r) return;
            let n = a[e.id];
            null != n &&
                (e.isGuildStageVoice()
                    ? n.forEach((e) => {
                          (0, f.gf)(e.voiceState) === f.xO.ON_STAGE && o.push(e);
                      })
                    : n.forEach((e) => o.push(e)));
        }),
        o
    );
}
function U(e) {
    let { channels: n, selectedChannelId: r, selectedVoiceChannelId: i, voiceStates: a } = e;
    return k({
        channels: n,
        selectedChannelId: r,
        selectedVoiceChannelId: i,
        voiceStates: a
    }).map((e) => e.user);
}
function B(e) {
    let { type: n } = e;
    switch (n) {
        case b.d4z.DM:
            return T.intl.string(T.t.jN2DfX);
        case b.d4z.GROUP_DM:
            return T.intl.string(T.t['e5y+go']);
        case b.d4z.GUILD_TEXT:
            return T.intl.string(T.t.Pnajj4);
        case b.d4z.GUILD_FORUM:
            return T.intl.string(T.t.GbryDQ);
        case b.d4z.GUILD_MEDIA:
            return T.intl.string(T.t.seKITE);
        case b.d4z.GUILD_VOICE:
            return T.intl.string(T.t.BVZqJi);
        case b.d4z.GUILD_STAGE_VOICE:
            return T.intl.string(T.t.EErMzM);
        case b.d4z.GUILD_ANNOUNCEMENT:
            return T.intl.string(T.t.l1dkSE);
        case b.d4z.GUILD_STORE:
            return T.intl.string(T.t['P1/Erq']);
        case b.d4z.GUILD_CATEGORY:
            return T.intl.string(T.t.vHCZws);
        default:
            return null;
    }
}
function G(e) {
    if (null == e) return 'text';
    let n = e.isMediaChannel();
    if (e.type === b.d4z.GUILD_VOICE) return m.Z.can(b.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === b.d4z.GUILD_STAGE_VOICE) return m.Z.can(b.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (p.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    else if (e.type === b.d4z.GUILD_FORUM) return n ? 'media' : 'forum';
    else if (e.type === b.d4z.GUILD_MEDIA) return 'media';
    else if (p.sR.has(e.type)) return 'text';
}
function Z(e) {
    let n;
    let r = h.Z.getChannel(g.Z.getLastSelectedChannelId());
    if (null != r && r.getGuildId() === e && r.type === b.d4z.GUILD_TEXT) n = r.id;
    else {
        let r = _.ZP.getDefaultChannel(e);
        n = null != r ? r.id : null;
    }
    return b.Z5c.CHANNEL(e, n);
}
function F(e, n, r, i) {
    let a = null == i ? '' : '?summaryId='.concat(i);
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(b.Z5c.CHANNEL(e, n, r))
        .concat(a);
}
function V(e, n, r, i) {
    return null == e || null == n || null == r
        ? F(e, n, i)
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat(b.Z5c.CHANNEL_THREAD_VIEW(e, n, r, i));
}
function j(e, n, r, i) {
    let a;
    let o = e.getGuildId(),
        s = (0, d.BC)(o, n);
    return (a = null != n && s ? V(o, n.id, e.id, y.default.castChannelIdAsMessageId(e.id)) : null != i ? i : F(o, e.id, r));
}
function H(e) {
    if (null == e) return null;
    switch (e.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
        case b.d4z.GUILD_FORUM:
        case b.d4z.GUILD_MEDIA:
            return b.ZY5.GUILD_CHANNEL;
        case b.d4z.GROUP_DM:
        case b.d4z.DM:
            return b.ZY5.DM_CHANNEL;
        default:
            return null;
    }
}
