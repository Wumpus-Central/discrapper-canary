n.d(t, {
    FI: () => w,
    LL: () => M,
    N_: () => G,
    Xi: () => H,
    eF: () => k
}),
    n(997841),
    n(953529),
    n(415506);
var i = n(317381),
    l = n(933557),
    a = n(710845),
    r = n(978003),
    u = n(41776),
    o = n(355298),
    s = n(957730),
    d = n(850908),
    c = n(572804),
    f = n(901461),
    g = n(569471),
    _ = n(723170),
    E = n(695346),
    S = n(131704),
    T = n(433355),
    p = n(592125),
    N = n(430824),
    I = n(19780),
    h = n(699516),
    C = n(944486),
    Z = n(914010),
    A = n(885110),
    v = n(9156),
    m = n(594174),
    y = n(630388),
    P = n(5192),
    U = n(352736),
    D = n(51144);
n(734934);
var R = n(842619),
    O = n(981631),
    L = n(124368),
    b = n(388032);
function M(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(O.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && u.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || h.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && A.Z.getStatus() === O.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function k(e, t) {
    var n, l;
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, y.yE)(e.flags, O.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let u = p.Z.getChannel(t);
    e.type === O.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
    let s = m.default.getCurrentUser(),
        d = m.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == u ||
        null == s ||
        null == d ||
        (u.type === O.d4z.GROUP_DM && e.type === O.uaV.RECIPIENT_REMOVE) ||
        (R.Z.areSlayerNotificationsSuppressed() && ((l = u).type === O.d4z.DM || null != l.linkedLobby)) ||
        !M(s, d, u, {
            ignoreStatus: r,
            ignoreSameUser: O.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        o.Z.isMessageRequest(t)
    )
        return !1;
    if (!a) {
        let e = C.Z.getChannelId(Z.Z.getGuildId());
        if (e === u.id || T.ZP.getCurrentSidebarChannelId(e) === u.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === s.id)) return !1;
    if (null != e.application_id) {
        let n = i.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.channel_id === t) return !1;
    }
    if (e.type === O.uaV.CHAT_WALLPAPER_SET || e.type === O.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (S.Ec.has(u.type)) {
        if (g.Z.isMuted(u.id)) return !1;
        let t = (0, _.J)(u);
        return (
            t !== L.iN.NO_MESSAGES &&
            (t === L.iN.ALL_MESSAGES ||
                (0, c.Hl)({
                    rawMessage: e,
                    userId: s.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !S.tx.has(u.type) || I.Z.getChannelId() === u.id;
        if (v.ZP.allowAllMessages(u) && t) return !0;
        let n = v.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(u.getGuildId());
        return (0, c.Hl)({
            rawMessage: e,
            userId: s.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function G(e, t) {
    var n;
    if (C.Z.getChannelId(Z.Z.getGuildId()) !== t) return !1;
    let i = p.Z.getChannel(t);
    e.type === O.uaV.THREAD_STARTER_MESSAGE && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        a = m.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(O.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || A.Z.getStatus() === O.Skl.DND || E.QZ.getSetting() || v.ZP.allowNoMessages(i)) && e.type !== O.uaV.CHAT_WALLPAPER_SET && e.type !== O.uaV.CHAT_WALLPAPER_REMOVED;
}
function w(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        a = m.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == a ||
            !M(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || C.Z.getChannelId(Z.Z.getGuildId()) !== t.id) &&
        v.ZP.getNewForumThreadsCreated(t)
    );
}
let V = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, l.F6)(t, m.default, h.Z, !0))
        .concat(null != n ? ', '.concat((0, l.F6)(n, m.default, h.Z)) : '', ')');
function F(e, t, n, i) {
    switch (e.type) {
        case O.d4z.GUILD_ANNOUNCEMENT:
        case O.d4z.GUILD_TEXT:
            return t;
        case O.d4z.GROUP_DM:
            return n;
        case O.d4z.DM:
        default:
            return i;
    }
}
function H(e, t, n) {
    let i,
        u = P.ZP.getName(e.getGuildId(), e.id, n),
        o = u;
    switch (e.type) {
        case O.d4z.GUILD_ANNOUNCEMENT:
        case O.d4z.GUILD_TEXT:
        case O.d4z.GUILD_VOICE:
        case O.d4z.ANNOUNCEMENT_THREAD:
        case O.d4z.PUBLIC_THREAD:
        case O.d4z.PRIVATE_THREAD:
            let c = p.Z.getChannel(e.parent_id);
            t.type === O.uaV.THREAD_STARTER_MESSAGE && null != c ? (o = V(o, c, p.Z.getChannel(c.parent_id))) : (0, f.Z)(t) ? null != N.Z.getGuild(e.getGuildId()) && (o = V(o, e, c)) : (o = V(o, e, c));
            break;
        case O.d4z.GROUP_DM:
            (e.isManaged() && n.bot && o === (0, l.F6)(e, m.default, h.Z)) || (o = ''.concat(o, ' (').concat((0, l.F6)(e, m.default, h.Z, !0), ')'));
    }
    let g = t.content;
    if ((0, f.Z)(t) && null == (g = U.Z.stringify(t, e))) throw (new a.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: t }), Error('failed to stringify system message'));
    let _ = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, r.s)(t) : (0, r.Z)(t)) i = b.intl.string(b.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        i =
            t.activity.type === O.mFx.JOIN
                ? b.intl.formatToPlainString(F(e, b.t.E8CgCg, b.t.c6KHWF, b.t.Fy7rJC), {
                      user: u,
                      game: t.application.name
                  })
                : t.activity.type === O.mFx.JOIN_REQUEST
                  ? b.intl.formatToPlainString(F(e, b.t['/TD0lZ'], b.t['/TD0lZ'], b.t['/TD0lZ']), {
                        user: u,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === O.mFx.LISTEN) {
        let t = F(e, b.t.SaDdmJ, b.t.qsODho, b.t.WeiMTU);
        i = b.intl.formatToPlainString(t, { user: u });
    } else if (null != _ && _.length > 0) i = b.intl.formatToPlainString(b.t.zY4v1N, { stickerName: _[0].name });
    else if (t.type === O.uaV.PREMIUM_REFERRAL) i = b.intl.formatToPlainString(b.t.lieTqa, { username: D.ZP.getName(n) });
    else if (null != t.poll) i = b.intl.formatToPlainString(b.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === O.uaV.POLL_RESULT) {
        var E, S, T;
        let e = null == (T = t.embeds) || null == (S = T[0]) || null == (E = S.fields) ? void 0 : E.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        i = b.intl.formatToPlainString(b.t['9WrecH'], { question: n });
    } else i = 0 !== g.length && e.type === O.d4z.DM && !n.bot && g.startsWith('> -# *') ? (i = s.ZP.unparse(g, e.id, !0)).substring(0, 1) + i.substring(4) : s.ZP.unparse(g, e.id, !0);
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
                if ((0, y.yE)(null != (t = e.flags) ? t : 0, O.iLy.IS_VOICE_MESSAGE)) return b.intl.string(b.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, d.Z)(e.attachments[0]);
                    return b.intl.formatToPlainString(b.t['51OkwM'], { filename: t });
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
