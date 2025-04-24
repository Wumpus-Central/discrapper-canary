n.d(t, {
    FI: () => G,
    LL: () => k,
    N_: () => L,
    Xi: () => F,
    eF: () => U
}),
    n(997841),
    n(953529),
    n(415506);
var l = n(252258),
    r = n(317381),
    i = n(933557),
    a = n(710845),
    o = n(978003),
    s = n(41776),
    u = n(355298),
    c = n(957730),
    d = n(850908),
    f = n(572804),
    h = n(901461),
    g = n(569471),
    p = n(723170),
    y = n(695346),
    O = n(131704),
    m = n(433355),
    v = n(592125),
    E = n(430824),
    b = n(19780),
    N = n(699516),
    C = n(944486),
    x = n(914010),
    I = n(885110),
    S = n(9156),
    T = n(594174),
    P = n(630388),
    _ = n(5192),
    Z = n(352736),
    j = n(51144),
    A = n(1508);
n(734934);
var w = n(842619),
    R = n(981631),
    D = n(124368),
    M = n(388032);
function k(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !((null != r && s.Z.isLurking(r)) || (!l.ignoreSameUser && t.id === e.id) || N.Z.isBlockedOrIgnored(t.id) || (!l.ignoreStatus && I.Z.getStatus() === R.Skl.DND) || y.QZ.getSetting() || (!l.ignoreNoMessagesSetting && S.ZP.allowNoMessages(n)));
}
function U(e, t) {
    var n, i;
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, P.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = v.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (s = v.Z.getChannel(null == s ? void 0 : s.parent_id));
    let c = T.default.getCurrentUser(),
        d = T.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == s ||
        null == c ||
        null == d ||
        (s.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
        (w.Z.areSlayerNotificationsSuppressed() && ((i = s).type === R.d4z.DM || null != i.linkedLobby)) ||
        !k(c, d, s, {
            ignoreStatus: o,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        u.Z.isMessageRequest(t)
    )
        return !1;
    if (!a) {
        let e = C.Z.getChannelId(x.Z.getGuildId());
        if (e === s.id || m.ZP.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (N.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === c.id)) return !1;
    if (A.Z.getCurrentConfig({ location: 'NotificationTextUtils.shouldNotify' }, { autoTrackExposure: !0 }).disableCurrentActivityNotifications && null != e.application_id) {
        let n = r.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.kind !== l.E.CONTEXTLESS && n.location.channel_id === t) return !1;
    }
    if (e.type === R.uaV.CHAT_WALLPAPER_SET || e.type === R.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (O.Ec.has(s.type)) {
        if (g.Z.isMuted(s.id)) return !1;
        let t = (0, p.J)(s);
        return (
            t !== D.iN.NO_MESSAGES &&
            (t === D.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: e,
                    userId: c.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !O.tx.has(s.type) || b.Z.getChannelId() === s.id;
        if (S.ZP.allowAllMessages(s) && t) return !0;
        let n = S.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            l = S.ZP.isSuppressRolesEnabled(s.getGuildId());
        return (0, f.Hl)({
            rawMessage: e,
            userId: c.id,
            suppressEveryone: n,
            suppressRoles: l
        });
    }
}
function L(e, t) {
    var n;
    if (C.Z.getChannelId(x.Z.getGuildId()) !== t) return !1;
    let l = v.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (l = v.Z.getChannel(null == l ? void 0 : l.parent_id));
    let r = T.default.getCurrentUser(),
        i = T.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(null == l || null == r || null == i || l.isManaged() || i.hasFlag(R.xW$.SPAMMER) || N.Z.isBlockedOrIgnoredForMessage(e) || i.id === r.id || I.Z.getStatus() === R.Skl.DND || y.QZ.getSetting() || S.ZP.allowNoMessages(l)) && e.type !== R.uaV.CHAT_WALLPAPER_SET && e.type !== R.uaV.CHAT_WALLPAPER_REMOVED;
}
function G(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = T.default.getCurrentUser(),
        i = T.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == i ||
            !k(r, i, t, {
                ignoreStatus: l,
                ignoreNoMessagesSetting: !0
            }) ||
            S.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || C.Z.getChannelId(x.Z.getGuildId()) !== t.id) &&
        S.ZP.getNewForumThreadsCreated(t)
    );
}
let V = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, T.default, N.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, T.default, N.Z)) : '', ')');
function B(e, t, n, l) {
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return t;
        case R.d4z.GROUP_DM:
            return n;
        case R.d4z.DM:
        default:
            return l;
    }
}
function F(e, t, n) {
    let l,
        r = _.ZP.getName(e.getGuildId(), e.id, n),
        s = r;
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let u = v.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != u ? (s = V(s, u, v.Z.getChannel(u.parent_id))) : (0, h.Z)(t) ? null != E.Z.getGuild(e.getGuildId()) && (s = V(s, e, u)) : (s = V(s, e, u));
            break;
        case R.d4z.GROUP_DM:
            (e.isManaged() && n.bot && s === (0, i.F6)(e, T.default, N.Z)) || (s = ''.concat(s, ' (').concat((0, i.F6)(e, T.default, N.Z, !0), ')'));
    }
    let f = t.content;
    if ((0, h.Z)(t) && null == (f = Z.Z.stringify(t, e))) throw (new a.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: t }), Error('failed to stringify system message'));
    let g = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, o.s)(t) : (0, o.Z)(t)) l = M.intl.string(M.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        l =
            t.activity.type === R.mFx.JOIN
                ? M.intl.formatToPlainString(B(e, M.t.E8CgCg, M.t.c6KHWF, M.t.Fy7rJC), {
                      user: r,
                      game: t.application.name
                  })
                : t.activity.type === R.mFx.JOIN_REQUEST
                  ? M.intl.formatToPlainString(B(e, M.t['/TD0lZ'], M.t['/TD0lZ'], M.t['/TD0lZ']), {
                        user: r,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === R.mFx.LISTEN) {
        let t = B(e, M.t.SaDdmJ, M.t.qsODho, M.t.WeiMTU);
        l = M.intl.formatToPlainString(t, { user: r });
    } else if (null != g && g.length > 0) l = M.intl.formatToPlainString(M.t.zY4v1N, { stickerName: g[0].name });
    else if (t.type === R.uaV.PREMIUM_REFERRAL) l = M.intl.formatToPlainString(M.t.lieTqa, { username: j.ZP.getName(n) });
    else if (null != t.poll) l = M.intl.formatToPlainString(M.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === R.uaV.POLL_RESULT) {
        var p, y, O;
        let e = null == (O = t.embeds) || null == (y = O[0]) || null == (p = y.fields) ? void 0 : p.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        l = M.intl.formatToPlainString(M.t['9WrecH'], { question: n });
    } else l = 0 !== f.length && e.type === R.d4z.DM && !n.bot && f.startsWith('> -# *') ? (l = c.ZP.unparse(f, e.id, !0)).substring(0, 1) + l.substring(4) : c.ZP.unparse(f, e.id, !0);
    return (
        0 === l.length &&
            (l = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = 'description' in t ? t.description : t.rawDescription,
                        l = 'title' in t ? t.title : t.rawTitle;
                    if (null != n) return null != l ? ''.concat(l, ' ').concat(n) : n;
                    if (null != l) return l;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = 'name' in e ? e.name : e.rawName,
                            l = 'value' in e ? e.value : e.rawValue;
                        return ''.concat(n, ' ').concat(l);
                    }
                }
                if ((0, P.yE)(null != (t = e.flags) ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return M.intl.string(M.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, d.Z)(e.attachments[0]);
                    return M.intl.formatToPlainString(M.t['51OkwM'], { filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: s,
            body: l
        }
    );
}
