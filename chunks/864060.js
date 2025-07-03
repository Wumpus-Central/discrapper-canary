(n.d(e, {
    FI: () => G,
    LL: () => L,
    N_: () => w,
    Xi: () => H,
    eF: () => M
}),
    n(997841),
    n(953529),
    n(415506));
var i = n(317381),
    l = n(933557),
    a = n(710845),
    r = n(978003),
    o = n(41776),
    u = n(355298),
    s = n(957730),
    d = n(850908),
    c = n(572804),
    f = n(901461),
    g = n(569471),
    E = n(723170),
    _ = n(695346),
    p = n(131704),
    T = n(433355),
    S = n(592125),
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
    O = n(352736),
    D = n(51144);
n(734934);
var U = n(842619),
    b = n(981631),
    R = n(124368),
    k = n(388032);
function L(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(b.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || h.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && A.Z.getStatus() === b.Skl.DND) || _.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function M(t, e) {
    var n, l;
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, y.yE)(t.flags, b.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = S.Z.getChannel(e);
    t.type === b.uaV.THREAD_STARTER_MESSAGE && (o = S.Z.getChannel(null == o ? void 0 : o.parent_id));
    let s = m.default.getCurrentUser(),
        d = m.default.getUser(null == (n = t.author) ? void 0 : n.id);
    if (
        null == o ||
        null == s ||
        null == d ||
        (o.type === b.d4z.GROUP_DM && t.type === b.uaV.RECIPIENT_REMOVE) ||
        (U.Z.areSlayerNotificationsSuppressed() && ((l = o).type === b.d4z.DM || null != l.linkedLobby)) ||
        !L(s, d, o, {
            ignoreStatus: r,
            ignoreSameUser: b.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(e)
    )
        return !1;
    if (!a) {
        let t = C.Z.getChannelId(Z.Z.getGuildId());
        if (t === o.id || T.ZP.getCurrentSidebarChannelId(t) === o.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === s.id)) return !1;
    if (null != t.application_id) {
        let n = i.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === t.application_id && n.location.channel_id === e) return !1;
    }
    if (t.type === b.uaV.CHAT_WALLPAPER_SET || t.type === b.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (p.Ec.has(o.type)) {
        if (g.Z.isMuted(o.id)) return !1;
        let e = (0, E.J)(o);
        return (
            e !== R.iN.NO_MESSAGES &&
            (e === R.iN.ALL_MESSAGES ||
                (0, c.Hl)({
                    rawMessage: t,
                    userId: s.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !p.tx.has(o.type) || I.Z.getChannelId() === o.id;
        if (v.ZP.allowAllMessages(o) && e) return !0;
        let n = v.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, c.Hl)({
            rawMessage: t,
            userId: s.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function w(t, e) {
    var n;
    if (C.Z.getChannelId(Z.Z.getGuildId()) !== e) return !1;
    let i = S.Z.getChannel(e);
    t.type === b.uaV.THREAD_STARTER_MESSAGE && (i = S.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        a = m.default.getUser(null == (n = t.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(b.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || A.Z.getStatus() === b.Skl.DND || _.QZ.getSetting() || v.ZP.allowNoMessages(i)) && t.type !== b.uaV.CHAT_WALLPAPER_SET && t.type !== b.uaV.CHAT_WALLPAPER_REMOVED;
}
function G(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        a = m.default.getUser(t.ownerId);
    return (
        !(
            null == e ||
            null == l ||
            null == a ||
            !L(l, a, e, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
        ) &&
        (!!n || C.Z.getChannelId(Z.Z.getGuildId()) !== e.id) &&
        v.ZP.getNewForumThreadsCreated(e)
    );
}
let V = (t, e, n) =>
    ''
        .concat(t, ' (')
        .concat((0, l.F6)(e, m.default, h.Z, !0))
        .concat(null != n ? ', '.concat((0, l.F6)(n, m.default, h.Z)) : '', ')');
function F(t, e, n, i) {
    switch (t.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
            return e;
        case b.d4z.GROUP_DM:
            return n;
        case b.d4z.DM:
        default:
            return i;
    }
}
function H(t, e, n) {
    let i,
        o = P.ZP.getName(t.getGuildId(), t.id, n),
        u = o;
    switch (t.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
        case b.d4z.GUILD_VOICE:
        case b.d4z.ANNOUNCEMENT_THREAD:
        case b.d4z.PUBLIC_THREAD:
        case b.d4z.PRIVATE_THREAD:
            let c = S.Z.getChannel(t.parent_id);
            e.type === b.uaV.THREAD_STARTER_MESSAGE && null != c ? (u = V(u, c, S.Z.getChannel(c.parent_id))) : (0, f.Z)(e) ? null != N.Z.getGuild(t.getGuildId()) && (u = V(u, t, c)) : (u = V(u, t, c));
            break;
        case b.d4z.GROUP_DM:
            (t.isManaged() && n.bot && u === (0, l.F6)(t, m.default, h.Z)) || (u = ''.concat(u, ' (').concat((0, l.F6)(t, m.default, h.Z, !0), ')'));
    }
    let g = e.content;
    if ((0, f.Z)(e) && null == (g = O.Z.stringify(e, t))) throw (new a.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: e }), Error('failed to stringify system message'));
    let E = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, r.s)(e) : (0, r.Z)(e)) i = k.intl.string(k.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        i =
            e.activity.type === b.mFx.JOIN
                ? k.intl.formatToPlainString(F(t, k.t.E8CgCg, k.t.c6KHWF, k.t.Fy7rJC), {
                      user: o,
                      game: e.application.name
                  })
                : e.activity.type === b.mFx.JOIN_REQUEST
                  ? k.intl.formatToPlainString(F(t, k.t['/TD0lZ'], k.t['/TD0lZ'], k.t['/TD0lZ']), {
                        user: o,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === b.mFx.LISTEN) {
        let e = F(t, k.t.SaDdmJ, k.t.qsODho, k.t.WeiMTU);
        i = k.intl.formatToPlainString(e, { user: o });
    } else if (null != E && E.length > 0) i = k.intl.formatToPlainString(k.t.zY4v1N, { stickerName: E[0].name });
    else if (e.type === b.uaV.PREMIUM_REFERRAL) i = k.intl.formatToPlainString(k.t.lieTqa, { username: D.ZP.getName(n) });
    else if (null != e.poll) i = k.intl.formatToPlainString(k.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === b.uaV.POLL_RESULT) {
        var _, p, T;
        let t = null == (T = e.embeds) || null == (p = T[0]) || null == (_ = p.fields) ? void 0 : _.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        i = k.intl.formatToPlainString(k.t['9WrecH'], { question: n });
    } else i = 0 !== g.length && t.type === b.d4z.DM && !n.bot && g.startsWith('> -# *') ? (i = s.ZP.unparse(g, t.id, !0)).substring(0, 1) + i.substring(4) : s.ZP.unparse(g, t.id, !0);
    return (
        0 === i.length &&
            (i = (function (t) {
                var e;
                if (void 0 !== t.embeds && t.embeds.length > 0) {
                    let e = t.embeds[0],
                        n = 'description' in e ? e.description : e.rawDescription,
                        i = 'title' in e ? e.title : e.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != e.fields && e.fields.length > 0) {
                        let t = e.fields[0],
                            n = 'name' in t ? t.name : t.rawName,
                            i = 'value' in t ? t.value : t.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, y.yE)(null != (e = t.flags) ? e : 0, b.iLy.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = (0, d.Z)(t.attachments[0]);
                    return k.intl.formatToPlainString(k.t['51OkwM'], { filename: e });
                }
                return '';
            })(e)),
        {
            icon: n.getAvatarURL(t.guild_id, 128),
            title: u,
            body: i
        }
    );
}
