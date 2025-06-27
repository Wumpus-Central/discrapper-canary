n.d(e, {
    FI: () => G,
    LL: () => k,
    N_: () => w,
    Xi: () => H,
    eF: () => M
}),
    n(997841),
    n(953529),
    n(415506);
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
    T = n(131704),
    p = n(433355),
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
    U = n(51144);
n(734934);
var D = n(842619),
    R = n(981631),
    b = n(124368),
    L = n(388032);
function k(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || h.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && A.Z.getStatus() === R.Skl.DND) || _.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function M(t, e) {
    var n, l;
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, y.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = S.Z.getChannel(e);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (o = S.Z.getChannel(null == o ? void 0 : o.parent_id));
    let s = m.default.getCurrentUser(),
        d = m.default.getUser(null == (n = t.author) ? void 0 : n.id);
    if (
        null == o ||
        null == s ||
        null == d ||
        (o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
        (D.Z.areSlayerNotificationsSuppressed() && ((l = o).type === R.d4z.DM || null != l.linkedLobby)) ||
        !k(s, d, o, {
            ignoreStatus: r,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(e)
    )
        return !1;
    if (!a) {
        let t = C.Z.getChannelId(Z.Z.getGuildId());
        if (t === o.id || p.ZP.getCurrentSidebarChannelId(t) === o.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === s.id)) return !1;
    if (null != t.application_id) {
        let n = i.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === t.application_id && n.location.channel_id === e) return !1;
    }
    if (t.type === R.uaV.CHAT_WALLPAPER_SET || t.type === R.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (T.Ec.has(o.type)) {
        if (g.Z.isMuted(o.id)) return !1;
        let e = (0, E.J)(o);
        return (
            e !== b.iN.NO_MESSAGES &&
            (e === b.iN.ALL_MESSAGES ||
                (0, c.Hl)({
                    rawMessage: t,
                    userId: s.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !T.tx.has(o.type) || I.Z.getChannelId() === o.id;
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
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (i = S.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        a = m.default.getUser(null == (n = t.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(R.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || A.Z.getStatus() === R.Skl.DND || _.QZ.getSetting() || v.ZP.allowNoMessages(i)) && t.type !== R.uaV.CHAT_WALLPAPER_SET && t.type !== R.uaV.CHAT_WALLPAPER_REMOVED;
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
            !k(l, a, e, {
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
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return e;
        case R.d4z.GROUP_DM:
            return n;
        case R.d4z.DM:
        default:
            return i;
    }
}
function H(t, e, n) {
    let i,
        o = P.ZP.getName(t.getGuildId(), t.id, n),
        u = o;
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let c = S.Z.getChannel(t.parent_id);
            e.type === R.uaV.THREAD_STARTER_MESSAGE && null != c ? (u = V(u, c, S.Z.getChannel(c.parent_id))) : (0, f.Z)(e) ? null != N.Z.getGuild(t.getGuildId()) && (u = V(u, t, c)) : (u = V(u, t, c));
            break;
        case R.d4z.GROUP_DM:
            (t.isManaged() && n.bot && u === (0, l.F6)(t, m.default, h.Z)) || (u = ''.concat(u, ' (').concat((0, l.F6)(t, m.default, h.Z, !0), ')'));
    }
    let g = e.content;
    if ((0, f.Z)(e) && null == (g = O.Z.stringify(e, t))) throw (new a.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: e }), Error('failed to stringify system message'));
    let E = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, r.s)(e) : (0, r.Z)(e)) i = L.intl.string(L.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        i =
            e.activity.type === R.mFx.JOIN
                ? L.intl.formatToPlainString(F(t, L.t.E8CgCg, L.t.c6KHWF, L.t.Fy7rJC), {
                      user: o,
                      game: e.application.name
                  })
                : e.activity.type === R.mFx.JOIN_REQUEST
                  ? L.intl.formatToPlainString(F(t, L.t['/TD0lZ'], L.t['/TD0lZ'], L.t['/TD0lZ']), {
                        user: o,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === R.mFx.LISTEN) {
        let e = F(t, L.t.SaDdmJ, L.t.qsODho, L.t.WeiMTU);
        i = L.intl.formatToPlainString(e, { user: o });
    } else if (null != E && E.length > 0) i = L.intl.formatToPlainString(L.t.zY4v1N, { stickerName: E[0].name });
    else if (e.type === R.uaV.PREMIUM_REFERRAL) i = L.intl.formatToPlainString(L.t.lieTqa, { username: U.ZP.getName(n) });
    else if (null != e.poll) i = L.intl.formatToPlainString(L.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === R.uaV.POLL_RESULT) {
        var _, T, p;
        let t = null == (p = e.embeds) || null == (T = p[0]) || null == (_ = T.fields) ? void 0 : _.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        i = L.intl.formatToPlainString(L.t['9WrecH'], { question: n });
    } else i = 0 !== g.length && t.type === R.d4z.DM && !n.bot && g.startsWith('> -# *') ? (i = s.ZP.unparse(g, t.id, !0)).substring(0, 1) + i.substring(4) : s.ZP.unparse(g, t.id, !0);
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
                if ((0, y.yE)(null != (e = t.flags) ? e : 0, R.iLy.IS_VOICE_MESSAGE)) return L.intl.string(L.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = (0, d.Z)(t.attachments[0]);
                    return L.intl.formatToPlainString(L.t['51OkwM'], { filename: e });
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
