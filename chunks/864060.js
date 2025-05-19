n.d(t, {
    FI: () => V,
    LL: () => G,
    N_: () => w,
    Xi: () => W,
    eF: () => k
}),
    n(997841),
    n(953529),
    n(415506);
var i = n(252258),
    l = n(317381),
    a = n(933557),
    r = n(710845),
    u = n(978003),
    o = n(41776),
    s = n(355298),
    d = n(957730),
    c = n(850908),
    f = n(572804),
    g = n(901461),
    E = n(569471),
    _ = n(723170),
    T = n(695346),
    S = n(131704),
    p = n(433355),
    N = n(592125),
    I = n(430824),
    h = n(19780),
    C = n(699516),
    Z = n(944486),
    A = n(914010),
    m = n(885110),
    v = n(9156),
    y = n(594174),
    P = n(630388),
    D = n(5192),
    U = n(352736),
    R = n(51144);
n(734934);
var O = n(842619),
    L = n(981631),
    b = n(124368),
    M = n(388032);
function G(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(L.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || C.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && m.Z.getStatus() === L.Skl.DND) || T.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function k(e, t) {
    var n, a;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, P.yE)(e.flags, L.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = N.Z.getChannel(t);
    e.type === L.uaV.THREAD_STARTER_MESSAGE && (o = N.Z.getChannel(null == o ? void 0 : o.parent_id));
    let d = y.default.getCurrentUser(),
        c = y.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == o ||
        null == d ||
        null == c ||
        (o.type === L.d4z.GROUP_DM && e.type === L.uaV.RECIPIENT_REMOVE) ||
        (O.Z.areSlayerNotificationsSuppressed() && ((a = o).type === L.d4z.DM || null != a.linkedLobby)) ||
        !G(d, c, o, {
            ignoreStatus: u,
            ignoreSameUser: L.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        s.Z.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = Z.Z.getChannelId(A.Z.getGuildId());
        if (e === o.id || p.ZP.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (C.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === d.id)) return !1;
    if (null != e.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.kind !== i.E.CONTEXTLESS && n.location.channel_id === t) return !1;
    }
    if (e.type === L.uaV.CHAT_WALLPAPER_SET || e.type === L.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (S.Ec.has(o.type)) {
        if (E.Z.isMuted(o.id)) return !1;
        let t = (0, _.J)(o);
        return (
            t !== b.iN.NO_MESSAGES &&
            (t === b.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: e,
                    userId: d.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !S.tx.has(o.type) || h.Z.getChannelId() === o.id;
        if (v.ZP.allowAllMessages(o) && t) return !0;
        let n = v.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, f.Hl)({
            rawMessage: e,
            userId: d.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function w(e, t) {
    var n;
    if (Z.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
    let i = N.Z.getChannel(t);
    e.type === L.uaV.THREAD_STARTER_MESSAGE && (i = N.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = y.default.getCurrentUser(),
        a = y.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(L.xW$.SPAMMER) || C.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || m.Z.getStatus() === L.Skl.DND || T.QZ.getSetting() || v.ZP.allowNoMessages(i)) && e.type !== L.uaV.CHAT_WALLPAPER_SET && e.type !== L.uaV.CHAT_WALLPAPER_REMOVED;
}
function V(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = y.default.getCurrentUser(),
        a = y.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == a ||
            !G(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || Z.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
        v.ZP.getNewForumThreadsCreated(t)
    );
}
let F = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, a.F6)(t, y.default, C.Z, !0))
        .concat(null != n ? ', '.concat((0, a.F6)(n, y.default, C.Z)) : '', ')');
function H(e, t, n, i) {
    switch (e.type) {
        case L.d4z.GUILD_ANNOUNCEMENT:
        case L.d4z.GUILD_TEXT:
            return t;
        case L.d4z.GROUP_DM:
            return n;
        case L.d4z.DM:
        default:
            return i;
    }
}
function W(e, t, n) {
    let i,
        l = D.ZP.getName(e.getGuildId(), e.id, n),
        o = l;
    switch (e.type) {
        case L.d4z.GUILD_ANNOUNCEMENT:
        case L.d4z.GUILD_TEXT:
        case L.d4z.GUILD_VOICE:
        case L.d4z.ANNOUNCEMENT_THREAD:
        case L.d4z.PUBLIC_THREAD:
        case L.d4z.PRIVATE_THREAD:
            let s = N.Z.getChannel(e.parent_id);
            t.type === L.uaV.THREAD_STARTER_MESSAGE && null != s ? (o = F(o, s, N.Z.getChannel(s.parent_id))) : (0, g.Z)(t) ? null != I.Z.getGuild(e.getGuildId()) && (o = F(o, e, s)) : (o = F(o, e, s));
            break;
        case L.d4z.GROUP_DM:
            (e.isManaged() && n.bot && o === (0, a.F6)(e, y.default, C.Z)) || (o = ''.concat(o, ' (').concat((0, a.F6)(e, y.default, C.Z, !0), ')'));
    }
    let f = t.content;
    if ((0, g.Z)(t) && null == (f = U.Z.stringify(t, e))) throw (new r.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: t }), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, u.s)(t) : (0, u.Z)(t)) i = M.intl.string(M.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        i =
            t.activity.type === L.mFx.JOIN
                ? M.intl.formatToPlainString(H(e, M.t.E8CgCg, M.t.c6KHWF, M.t.Fy7rJC), {
                      user: l,
                      game: t.application.name
                  })
                : t.activity.type === L.mFx.JOIN_REQUEST
                  ? M.intl.formatToPlainString(H(e, M.t['/TD0lZ'], M.t['/TD0lZ'], M.t['/TD0lZ']), {
                        user: l,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === L.mFx.LISTEN) {
        let t = H(e, M.t.SaDdmJ, M.t.qsODho, M.t.WeiMTU);
        i = M.intl.formatToPlainString(t, { user: l });
    } else if (null != E && E.length > 0) i = M.intl.formatToPlainString(M.t.zY4v1N, { stickerName: E[0].name });
    else if (t.type === L.uaV.PREMIUM_REFERRAL) i = M.intl.formatToPlainString(M.t.lieTqa, { username: R.ZP.getName(n) });
    else if (null != t.poll) i = M.intl.formatToPlainString(M.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === L.uaV.POLL_RESULT) {
        var _, T, S;
        let e = null == (S = t.embeds) || null == (T = S[0]) || null == (_ = T.fields) ? void 0 : _.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        i = M.intl.formatToPlainString(M.t['9WrecH'], { question: n });
    } else i = 0 !== f.length && e.type === L.d4z.DM && !n.bot && f.startsWith('> -# *') ? (i = d.ZP.unparse(f, e.id, !0)).substring(0, 1) + i.substring(4) : d.ZP.unparse(f, e.id, !0);
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
                if ((0, P.yE)(null != (t = e.flags) ? t : 0, L.iLy.IS_VOICE_MESSAGE)) return M.intl.string(M.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, c.Z)(e.attachments[0]);
                    return M.intl.formatToPlainString(M.t['51OkwM'], { filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: o,
            body: i
        }
    );
}
