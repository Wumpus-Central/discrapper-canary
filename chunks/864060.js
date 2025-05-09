n.d(t, {
    FI: () => F,
    LL: () => k,
    N_: () => V,
    Xi: () => z,
    eF: () => w
}),
    n(997841),
    n(953529),
    n(415506);
var i = n(252258),
    l = n(317381),
    a = n(933557),
    r = n(710845),
    o = n(978003),
    u = n(41776),
    s = n(355298),
    d = n(957730),
    c = n(850908),
    f = n(572804),
    g = n(901461),
    E = n(569471),
    _ = n(723170),
    T = n(695346),
    N = n(131704),
    S = n(433355),
    p = n(592125),
    I = n(430824),
    C = n(19780),
    h = n(699516),
    Z = n(944486),
    A = n(914010),
    m = n(885110),
    v = n(9156),
    y = n(594174),
    P = n(630388),
    D = n(5192),
    U = n(352736),
    R = n(51144),
    O = n(1508);
n(734934);
var L = n(842619),
    b = n(981631),
    M = n(124368),
    G = n(388032);
function k(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(b.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && u.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || h.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && m.Z.getStatus() === b.Skl.DND) || T.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function w(e, t) {
    var n, a;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, P.yE)(e.flags, b.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let u = p.Z.getChannel(t);
    e.type === b.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
    let d = y.default.getCurrentUser(),
        c = y.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == u ||
        null == d ||
        null == c ||
        (u.type === b.d4z.GROUP_DM && e.type === b.uaV.RECIPIENT_REMOVE) ||
        (L.Z.areSlayerNotificationsSuppressed() && ((a = u).type === b.d4z.DM || null != a.linkedLobby)) ||
        !k(d, c, u, {
            ignoreStatus: o,
            ignoreSameUser: b.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        s.Z.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = Z.Z.getChannelId(A.Z.getGuildId());
        if (e === u.id || S.ZP.getCurrentSidebarChannelId(e) === u.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === d.id)) return !1;
    if (O.Z.getCurrentConfig({ location: 'NotificationTextUtils.shouldNotify' }, { autoTrackExposure: !0 }).disableCurrentActivityNotifications && null != e.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.kind !== i.E.CONTEXTLESS && n.location.channel_id === t) return !1;
    }
    if (e.type === b.uaV.CHAT_WALLPAPER_SET || e.type === b.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (N.Ec.has(u.type)) {
        if (E.Z.isMuted(u.id)) return !1;
        let t = (0, _.J)(u);
        return (
            t !== M.iN.NO_MESSAGES &&
            (t === M.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: e,
                    userId: d.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !N.tx.has(u.type) || C.Z.getChannelId() === u.id;
        if (v.ZP.allowAllMessages(u) && t) return !0;
        let n = v.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(u.getGuildId());
        return (0, f.Hl)({
            rawMessage: e,
            userId: d.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function V(e, t) {
    var n;
    if (Z.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
    let i = p.Z.getChannel(t);
    e.type === b.uaV.THREAD_STARTER_MESSAGE && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = y.default.getCurrentUser(),
        a = y.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(b.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || m.Z.getStatus() === b.Skl.DND || T.QZ.getSetting() || v.ZP.allowNoMessages(i)) && e.type !== b.uaV.CHAT_WALLPAPER_SET && e.type !== b.uaV.CHAT_WALLPAPER_REMOVED;
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = y.default.getCurrentUser(),
        a = y.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == a ||
            !k(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || Z.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
        v.ZP.getNewForumThreadsCreated(t)
    );
}
let H = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, a.F6)(t, y.default, h.Z, !0))
        .concat(null != n ? ', '.concat((0, a.F6)(n, y.default, h.Z)) : '', ')');
function W(e, t, n, i) {
    switch (e.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
            return t;
        case b.d4z.GROUP_DM:
            return n;
        case b.d4z.DM:
        default:
            return i;
    }
}
function z(e, t, n) {
    let i,
        l = D.ZP.getName(e.getGuildId(), e.id, n),
        u = l;
    switch (e.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
        case b.d4z.GUILD_VOICE:
        case b.d4z.ANNOUNCEMENT_THREAD:
        case b.d4z.PUBLIC_THREAD:
        case b.d4z.PRIVATE_THREAD:
            let s = p.Z.getChannel(e.parent_id);
            t.type === b.uaV.THREAD_STARTER_MESSAGE && null != s ? (u = H(u, s, p.Z.getChannel(s.parent_id))) : (0, g.Z)(t) ? null != I.Z.getGuild(e.getGuildId()) && (u = H(u, e, s)) : (u = H(u, e, s));
            break;
        case b.d4z.GROUP_DM:
            (e.isManaged() && n.bot && u === (0, a.F6)(e, y.default, h.Z)) || (u = ''.concat(u, ' (').concat((0, a.F6)(e, y.default, h.Z, !0), ')'));
    }
    let f = t.content;
    if ((0, g.Z)(t) && null == (f = U.Z.stringify(t, e))) throw (new r.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: t }), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, o.s)(t) : (0, o.Z)(t)) i = G.intl.string(G.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        i =
            t.activity.type === b.mFx.JOIN
                ? G.intl.formatToPlainString(W(e, G.t.E8CgCg, G.t.c6KHWF, G.t.Fy7rJC), {
                      user: l,
                      game: t.application.name
                  })
                : t.activity.type === b.mFx.JOIN_REQUEST
                  ? G.intl.formatToPlainString(W(e, G.t['/TD0lZ'], G.t['/TD0lZ'], G.t['/TD0lZ']), {
                        user: l,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === b.mFx.LISTEN) {
        let t = W(e, G.t.SaDdmJ, G.t.qsODho, G.t.WeiMTU);
        i = G.intl.formatToPlainString(t, { user: l });
    } else if (null != E && E.length > 0) i = G.intl.formatToPlainString(G.t.zY4v1N, { stickerName: E[0].name });
    else if (t.type === b.uaV.PREMIUM_REFERRAL) i = G.intl.formatToPlainString(G.t.lieTqa, { username: R.ZP.getName(n) });
    else if (null != t.poll) i = G.intl.formatToPlainString(G.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === b.uaV.POLL_RESULT) {
        var _, T, N;
        let e = null == (N = t.embeds) || null == (T = N[0]) || null == (_ = T.fields) ? void 0 : _.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        i = G.intl.formatToPlainString(G.t['9WrecH'], { question: n });
    } else i = 0 !== f.length && e.type === b.d4z.DM && !n.bot && f.startsWith('> -# *') ? (i = d.ZP.unparse(f, e.id, !0)).substring(0, 1) + i.substring(4) : d.ZP.unparse(f, e.id, !0);
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
                if ((0, P.yE)(null != (t = e.flags) ? t : 0, b.iLy.IS_VOICE_MESSAGE)) return G.intl.string(G.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, c.Z)(e.attachments[0]);
                    return G.intl.formatToPlainString(G.t['51OkwM'], { filename: t });
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
