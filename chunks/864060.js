n.d(t, {
    FI: () => F,
    LL: () => M,
    N_: () => W,
    Xi: () => x,
    eF: () => w
}),
    n(789020),
    n(266796),
    n(411104);
var i = n(252258),
    l = n(317381),
    a = n(933557),
    o = n(710845),
    r = n(978003),
    u = n(41776),
    s = n(355298),
    d = n(957730),
    c = n(850908),
    f = n(572804),
    g = n(901461),
    E = n(569471),
    _ = n(723170),
    N = n(695346),
    S = n(131704),
    T = n(433355),
    p = n(592125),
    C = n(430824),
    I = n(19780),
    v = n(699516),
    h = n(944486),
    Z = n(914010),
    m = n(885110),
    y = n(9156),
    A = n(594174),
    P = n(630388),
    U = n(5192),
    D = n(352736),
    O = n(51144),
    R = n(1508);
n(734934);
var b = n(842619),
    G = n(981631),
    k = n(124368),
    L = n(388032);
function M(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(G.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && u.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || v.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && m.Z.getStatus() === G.Skl.DND) || N.QZ.getSetting() || (!i.ignoreNoMessagesSetting && y.ZP.allowNoMessages(n)));
}
function w(e, t) {
    var n, a;
    let o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, P.yE)(e.flags, G.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let u = p.Z.getChannel(t);
    e.type === G.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
    let d = A.default.getCurrentUser(),
        c = A.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == u ||
        null == d ||
        null == c ||
        (u.type === G.d4z.GROUP_DM && e.type === G.uaV.RECIPIENT_REMOVE) ||
        (b.Z.areSlayerNotificationsSuppressed() && ((a = u).type === G.d4z.DM || null != a.linkedLobby)) ||
        !M(d, c, u, {
            ignoreStatus: r,
            ignoreSameUser: G.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        s.Z.isMessageRequest(t)
    )
        return !1;
    if (!o) {
        let e = h.Z.getChannelId(Z.Z.getGuildId());
        if (e === u.id || T.ZP.getCurrentSidebarChannelId(e) === u.id) return !1;
    }
    if (v.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === d.id)) return !1;
    if (R.Z.getCurrentConfig({ location: 'NotificationTextUtils.shouldNotify' }, { autoTrackExposure: !0 }).disableCurrentActivityNotifications && null != e.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.kind !== i.E.CONTEXTLESS && n.location.channel_id === t) return !1;
    }
    if (S.Ec.has(u.type)) {
        if (E.Z.isMuted(u.id)) return !1;
        let t = (0, _.J)(u);
        return (
            t !== k.iN.NO_MESSAGES &&
            (t === k.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: e,
                    userId: d.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !S.tx.has(u.type) || I.Z.getChannelId() === u.id;
        if (y.ZP.allowAllMessages(u) && t) return !0;
        let n = y.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
            i = y.ZP.isSuppressRolesEnabled(u.getGuildId());
        return (0, f.Hl)({
            rawMessage: e,
            userId: d.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function W(e, t) {
    var n;
    if (h.Z.getChannelId(Z.Z.getGuildId()) !== t) return !1;
    let i = p.Z.getChannel(t);
    e.type === G.uaV.THREAD_STARTER_MESSAGE && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = A.default.getCurrentUser(),
        a = A.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(G.xW$.SPAMMER) || v.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || m.Z.getStatus() === G.Skl.DND || N.QZ.getSetting() || y.ZP.allowNoMessages(i));
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = A.default.getCurrentUser(),
        a = A.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == a ||
            !M(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            y.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || h.Z.getChannelId(Z.Z.getGuildId()) !== t.id) &&
        y.ZP.getNewForumThreadsCreated(t)
    );
}
let V = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, a.F6)(t, A.default, v.Z, !0))
        .concat(null != n ? ', '.concat((0, a.F6)(n, A.default, v.Z)) : '', ')');
function H(e, t, n, i) {
    switch (e.type) {
        case G.d4z.GUILD_ANNOUNCEMENT:
        case G.d4z.GUILD_TEXT:
            return t;
        case G.d4z.GROUP_DM:
            return n;
        case G.d4z.DM:
        default:
            return i;
    }
}
function x(e, t, n) {
    let i;
    let l = U.ZP.getName(e.getGuildId(), e.id, n),
        u = l;
    switch (e.type) {
        case G.d4z.GUILD_ANNOUNCEMENT:
        case G.d4z.GUILD_TEXT:
        case G.d4z.GUILD_VOICE:
        case G.d4z.ANNOUNCEMENT_THREAD:
        case G.d4z.PUBLIC_THREAD:
        case G.d4z.PRIVATE_THREAD:
            let s = p.Z.getChannel(e.parent_id);
            t.type === G.uaV.THREAD_STARTER_MESSAGE && null != s ? (u = V(u, s, p.Z.getChannel(s.parent_id))) : (0, g.Z)(t) ? null != C.Z.getGuild(e.getGuildId()) && (u = V(u, e, s)) : (u = V(u, e, s));
            break;
        case G.d4z.GROUP_DM:
            (e.isManaged() && n.bot && u === (0, a.F6)(e, A.default, v.Z)) || (u = ''.concat(u, ' (').concat((0, a.F6)(e, A.default, v.Z, !0), ')'));
    }
    let f = t.content;
    if ((0, g.Z)(t) && null == (f = D.Z.stringify(t, e))) throw (new o.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, r.s)(t) : (0, r.Z)(t)) i = L.NW.string(L.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        i =
            t.activity.type === G.mFx.JOIN
                ? L.NW.formatToPlainString(H(e, L.t.E8CgCg, L.t.c6KHWF, L.t.Fy7rJC), {
                      user: l,
                      game: t.application.name
                  })
                : t.activity.type === G.mFx.JOIN_REQUEST
                  ? L.NW.formatToPlainString(H(e, L.t['/TD0lZ'], L.t['/TD0lZ'], L.t['/TD0lZ']), {
                        user: l,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === G.mFx.LISTEN) {
        let t = H(e, L.t.SaDdmJ, L.t.qsODho, L.t.WeiMTU);
        i = L.NW.formatToPlainString(t, { user: l });
    } else if (null != E && E.length > 0) i = L.NW.formatToPlainString(L.t.zY4v1N, { stickerName: E[0].name });
    else if (t.type === G.uaV.PREMIUM_REFERRAL) i = L.NW.formatToPlainString(L.t.lieTqa, { username: O.ZP.getName(n) });
    else if (null != t.poll) i = L.NW.formatToPlainString(L.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === G.uaV.POLL_RESULT) {
        var _, N, S;
        let e = null === (S = t.embeds) || void 0 === S ? void 0 : null === (N = S[0]) || void 0 === N ? void 0 : null === (_ = N.fields) || void 0 === _ ? void 0 : _.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        i = L.NW.formatToPlainString(L.t['9WrecH'], { question: n });
    } else i = 0 !== f.length && e.type === G.d4z.DM && !n.bot && f.startsWith('> -# *') ? (i = d.ZP.unparse(f, e.id, !0)).substring(0, 1) + i.substring(4) : d.ZP.unparse(f, e.id, !0);
    return (
        0 === i.length &&
            (i = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = 'description' in t ? t.description : t.rawDescription,
                        i = 'title' in t ? t.title : t.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = 'name' in e ? e.name : e.rawName,
                            i = 'value' in e ? e.value : e.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, P.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, G.iLy.IS_VOICE_MESSAGE)) return L.NW.string(L.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, c.Z)(e.attachments[0]);
                    return L.NW.formatToPlainString(L.t['51OkwM'], { filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: u,
            body: i
        }
    );
}
