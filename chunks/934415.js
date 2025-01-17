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
var s = r(47120);
var o = r(149765),
    l = r(911969),
    u = r(90463),
    c = r(968358),
    d = r(874748),
    f = r(590415),
    _ = r(131704),
    h = r(592125),
    p = r(984933),
    m = r(496675),
    g = r(944486),
    E = r(938475),
    v = r(700785),
    I = r(709054),
    T = r(981631),
    b = r(474936),
    y = r(388032);
let { GUILD_VOICE: S, GUILD_CATEGORY: A, GUILD_STAGE_VOICE: N } = T.d4z;
function C(e, n) {
    return e === n || e === A;
}
function R(e, n, r) {
    let i = v.Hn;
    return (
        ((0, _.r8)(n) || n === A) && (i = o.IH(i, T.Plq.VIEW_CHANNEL)),
        C(n, S) && ((i = o.IH(i, T.Plq.VIEW_CHANNEL)), (i = o.IH(i, T.Plq.CONNECT))),
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
        ((0, _.r8)(n) || n === A) && (i = o.IH(i, T.Plq.VIEW_CHANNEL)),
        (C(n, S) || C(n, N)) && ((i = o.IH(i, T.Plq.VIEW_CHANNEL)), (i = o.IH(i, T.Plq.CONNECT))),
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
            deny: T.Plq.SEND_MESSAGES,
            allow: v.Hn
        }
    ];
}
function P(e, n, r) {
    var i, a;
    let s = e.getGuildId(),
        o = r.getGuild(s),
        l = null !== (i = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== i ? i : -1,
        u = null !== (a = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== a ? a : -1,
        d = E.ZP.countVoiceStatesForChannel(e.id),
        f = E.ZP.getVoiceStatesForChannel(e),
        _ = m.Z.can(T.Plq.MOVE_MEMBERS, e) && m.Z.can(T.Plq.CONNECT, e),
        h = !1;
    h = e.type === N ? null != s && (n.hasVideo(e.id) || (0, c.a)(f)) && u > 0 && d >= u : null != s && n.hasVideo(e.id) && l > 0 && d >= l + (_ ? 1 : 0);
    let p = e.userLimit > 0 && d >= e.userLimit;
    return h || (p && !_);
}
function M(e, n) {
    return n.isGuildStageVoice() ? T.epw : null == e ? T.eWB : Math.max(e.hasFeature(T.oNc.VIP_REGIONS) ? b.HO[T.Eu4.TIER_3].limits.bitrate : T.eWB, b.HO[e.premiumTier].limits.bitrate);
}
function k(e) {
    let { channels: n, selectedChannelId: r, selectedVoiceChannelId: i, voiceStates: a } = e,
        s = [];
    return (
        n.forEach((e) => {
            if (e.id === i || e.id === r) return;
            let n = a[e.id];
            null != n &&
                (e.isGuildStageVoice()
                    ? n.forEach((e) => {
                          (0, f.gf)(e.voiceState) === f.xO.ON_STAGE && s.push(e);
                      })
                    : n.forEach((e) => s.push(e)));
        }),
        s
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
        case T.d4z.DM:
            return y.intl.string(y.t.jN2DfX);
        case T.d4z.GROUP_DM:
            return y.intl.string(y.t['e5y+go']);
        case T.d4z.GUILD_TEXT:
            return y.intl.string(y.t.Pnajj4);
        case T.d4z.GUILD_FORUM:
            return y.intl.string(y.t.GbryDQ);
        case T.d4z.GUILD_MEDIA:
            return y.intl.string(y.t.seKITE);
        case T.d4z.GUILD_VOICE:
            return y.intl.string(y.t.BVZqJi);
        case T.d4z.GUILD_STAGE_VOICE:
            return y.intl.string(y.t.EErMzM);
        case T.d4z.GUILD_ANNOUNCEMENT:
            return y.intl.string(y.t.l1dkSE);
        case T.d4z.GUILD_STORE:
            return y.intl.string(y.t['P1/Erq']);
        case T.d4z.GUILD_CATEGORY:
            return y.intl.string(y.t.vHCZws);
        default:
            return null;
    }
}
function G(e) {
    if (null == e) return 'text';
    let n = e.isMediaChannel();
    if (e.type === T.d4z.GUILD_VOICE) return m.Z.can(T.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
    if (e.type === T.d4z.GUILD_STAGE_VOICE) return m.Z.can(T.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
    if (_.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
    else if (e.type === T.d4z.GUILD_FORUM) return n ? 'media' : 'forum';
    else if (e.type === T.d4z.GUILD_MEDIA) return 'media';
    else if (_.sR.has(e.type)) return 'text';
}
function Z(e) {
    let n;
    let r = h.Z.getChannel(g.Z.getLastSelectedChannelId());
    if (null != r && r.getGuildId() === e && r.type === T.d4z.GUILD_TEXT) n = r.id;
    else {
        let r = p.ZP.getDefaultChannel(e);
        n = null != r ? r.id : null;
    }
    return T.Z5c.CHANNEL(e, n);
}
function F(e, n, r, i) {
    let a = null == i ? '' : '?summaryId='.concat(i);
    return ''
        .concat(location.protocol, '//')
        .concat(location.host)
        .concat(T.Z5c.CHANNEL(e, n, r))
        .concat(a);
}
function V(e, n, r, i) {
    return null == e || null == n || null == r
        ? F(e, n, i)
        : ''
              .concat(location.protocol, '//')
              .concat(location.host)
              .concat(T.Z5c.CHANNEL_THREAD_VIEW(e, n, r, i));
}
function j(e, n, r, i) {
    let a;
    let s = e.getGuildId(),
        o = (0, d.BC)(s, n);
    return (a = null != n && o ? V(s, n.id, e.id, I.default.castChannelIdAsMessageId(e.id)) : null != i ? i : F(s, e.id, r));
}
function H(e) {
    if (null == e) return null;
    switch (e.type) {
        case T.d4z.GUILD_ANNOUNCEMENT:
        case T.d4z.GUILD_TEXT:
        case T.d4z.GUILD_FORUM:
        case T.d4z.GUILD_MEDIA:
            return T.ZY5.GUILD_CHANNEL;
        case T.d4z.GROUP_DM:
        case T.d4z.DM:
            return T.ZY5.DM_CHANNEL;
        default:
            return null;
    }
}
