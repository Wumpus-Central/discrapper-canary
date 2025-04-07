n.d(t, {
    FI: () => V,
    LL: () => M,
    N_: () => w,
    Xi: () => x,
    eF: () => W
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
    N = n(695346),
    T = n(131704),
    S = n(433355),
    p = n(592125),
    C = n(430824),
    I = n(19780),
    h = n(699516),
    Z = n(944486),
    m = n(914010),
    A = n(885110),
    v = n(9156),
    y = n(594174),
    P = n(630388),
    D = n(5192),
    U = n(352736),
    R = n(51144),
    O = n(1508);
n(734934);
var b = n(842619),
    L = n(981631),
    G = n(124368),
    k = n(388032);
function M(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(L.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && u.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || h.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && A.Z.getStatus() === L.Skl.DND) || N.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function W(e, t) {
    var n, a;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, P.yE)(e.flags, L.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let u = p.Z.getChannel(t);
    e.type === L.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
    let d = y.default.getCurrentUser(),
        c = y.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == u ||
        null == d ||
        null == c ||
        (u.type === L.d4z.GROUP_DM && e.type === L.uaV.RECIPIENT_REMOVE) ||
        (b.Z.areSlayerNotificationsSuppressed() && ((a = u).type === L.d4z.DM || null != a.linkedLobby)) ||
        !M(d, c, u, {
            ignoreStatus: o,
            ignoreSameUser: L.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        s.Z.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = Z.Z.getChannelId(m.Z.getGuildId());
        if (e === u.id || S.ZP.getCurrentSidebarChannelId(e) === u.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === d.id)) return !1;
    if (O.Z.getCurrentConfig({ location: 'NotificationTextUtils.shouldNotify' }, { autoTrackExposure: !0 }).disableCurrentActivityNotifications && null != e.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.kind !== i.E.CONTEXTLESS && n.location.channel_id === t) return !1;
    }
    if (e.type === L.uaV.CHAT_WALLPAPER_SET || e.type === L.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (T.Ec.has(u.type)) {
        if (E.Z.isMuted(u.id)) return !1;
        let t = (0, _.J)(u);
        return (
            t !== G.iN.NO_MESSAGES &&
            (t === G.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: e,
                    userId: d.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !T.tx.has(u.type) || I.ZP.getChannelId() === u.id;
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
function w(e, t) {
    var n;
    if (Z.Z.getChannelId(m.Z.getGuildId()) !== t) return !1;
    let i = p.Z.getChannel(t);
    e.type === L.uaV.THREAD_STARTER_MESSAGE && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = y.default.getCurrentUser(),
        a = y.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(L.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || A.Z.getStatus() === L.Skl.DND || N.QZ.getSetting() || v.ZP.allowNoMessages(i)) && e.type !== L.uaV.CHAT_WALLPAPER_SET && e.type !== L.uaV.CHAT_WALLPAPER_REMOVED;
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
            !M(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || Z.Z.getChannelId(m.Z.getGuildId()) !== t.id) &&
        v.ZP.getNewForumThreadsCreated(t)
    );
}
let F = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, a.F6)(t, y.default, h.Z, !0))
        .concat(null != n ? ', '.concat((0, a.F6)(n, y.default, h.Z)) : '', ')');
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
function x(e, t, n) {
    let i,
        l = D.ZP.getName(e.getGuildId(), e.id, n),
        u = l;
    switch (e.type) {
        case L.d4z.GUILD_ANNOUNCEMENT:
        case L.d4z.GUILD_TEXT:
        case L.d4z.GUILD_VOICE:
        case L.d4z.ANNOUNCEMENT_THREAD:
        case L.d4z.PUBLIC_THREAD:
        case L.d4z.PRIVATE_THREAD:
            let s = p.Z.getChannel(e.parent_id);
            t.type === L.uaV.THREAD_STARTER_MESSAGE && null != s ? (u = F(u, s, p.Z.getChannel(s.parent_id))) : (0, g.Z)(t) ? null != C.Z.getGuild(e.getGuildId()) && (u = F(u, e, s)) : (u = F(u, e, s));
            break;
        case L.d4z.GROUP_DM:
            (e.isManaged() && n.bot && u === (0, a.F6)(e, y.default, h.Z)) || (u = ''.concat(u, ' (').concat((0, a.F6)(e, y.default, h.Z, !0), ')'));
    }
    let f = t.content;
    if ((0, g.Z)(t) && null == (f = U.Z.stringify(t, e))) throw (new r.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, o.s)(t) : (0, o.Z)(t)) i = k.NW.string(k.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        i =
            t.activity.type === L.mFx.JOIN
                ? k.NW.formatToPlainString(H(e, k.t.E8CgCg, k.t.c6KHWF, k.t.Fy7rJC), {
                      user: l,
                      game: t.application.name
                  })
                : t.activity.type === L.mFx.JOIN_REQUEST
                  ? k.NW.formatToPlainString(H(e, k.t['/TD0lZ'], k.t['/TD0lZ'], k.t['/TD0lZ']), {
                        user: l,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === L.mFx.LISTEN) {
        let t = H(e, k.t.SaDdmJ, k.t.qsODho, k.t.WeiMTU);
        i = k.NW.formatToPlainString(t, { user: l });
    } else if (null != E && E.length > 0) i = k.NW.formatToPlainString(k.t.zY4v1N, { stickerName: E[0].name });
    else if (t.type === L.uaV.PREMIUM_REFERRAL) i = k.NW.formatToPlainString(k.t.lieTqa, { username: R.ZP.getName(n) });
    else if (null != t.poll) i = k.NW.formatToPlainString(k.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === L.uaV.POLL_RESULT) {
        var _, N, T;
        let e = null == (T = t.embeds) || null == (N = T[0]) || null == (_ = N.fields) ? void 0 : _.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        i = k.NW.formatToPlainString(k.t['9WrecH'], { question: n });
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
                if ((0, P.yE)(null != (t = e.flags) ? t : 0, L.iLy.IS_VOICE_MESSAGE)) return k.NW.string(k.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, c.Z)(e.attachments[0]);
                    return k.NW.formatToPlainString(k.t['51OkwM'], { filename: t });
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
