n.d(e, {
    FI: () => F,
    LL: () => M,
    N_: () => V,
    Xi: () => x,
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
function M(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(L.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && u.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || h.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && A.Z.getStatus() === L.Skl.DND) || N.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function w(t, e) {
    var n, a;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, P.yE)(t.flags, L.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let u = p.Z.getChannel(e);
    t.type === L.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
    let d = y.default.getCurrentUser(),
        c = y.default.getUser(null == (n = t.author) ? void 0 : n.id);
    if (
        null == u ||
        null == d ||
        null == c ||
        (u.type === L.d4z.GROUP_DM && t.type === L.uaV.RECIPIENT_REMOVE) ||
        (b.Z.areSlayerNotificationsSuppressed() && ((a = u).type === L.d4z.DM || null != a.linkedLobby)) ||
        !M(d, c, u, {
            ignoreStatus: o,
            ignoreSameUser: L.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        s.Z.isMessageRequest(e)
    )
        return !1;
    if (!r) {
        let t = Z.Z.getChannelId(m.Z.getGuildId());
        if (t === u.id || S.ZP.getCurrentSidebarChannelId(t) === u.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === d.id)) return !1;
    if (O.Z.getCurrentConfig({ location: 'NotificationTextUtils.shouldNotify' }, { autoTrackExposure: !0 }).disableCurrentActivityNotifications && null != t.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === t.application_id && n.location.kind !== i.E.CONTEXTLESS && n.location.channel_id === e) return !1;
    }
    if (t.type === L.uaV.CHAT_WALLPAPER_SET || t.type === L.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (T.Ec.has(u.type)) {
        if (E.Z.isMuted(u.id)) return !1;
        let e = (0, _.J)(u);
        return (
            e !== G.iN.NO_MESSAGES &&
            (e === G.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: t,
                    userId: d.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !T.tx.has(u.type) || I.Z.getChannelId() === u.id;
        if (v.ZP.allowAllMessages(u) && e) return !0;
        let n = v.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(u.getGuildId());
        return (0, f.Hl)({
            rawMessage: t,
            userId: d.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function V(t, e) {
    var n;
    if (Z.Z.getChannelId(m.Z.getGuildId()) !== e) return !1;
    let i = p.Z.getChannel(e);
    t.type === L.uaV.THREAD_STARTER_MESSAGE && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = y.default.getCurrentUser(),
        a = y.default.getUser(null == (n = t.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(L.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || A.Z.getStatus() === L.Skl.DND || N.QZ.getSetting() || v.ZP.allowNoMessages(i)) && t.type !== L.uaV.CHAT_WALLPAPER_SET && t.type !== L.uaV.CHAT_WALLPAPER_REMOVED;
}
function F(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = y.default.getCurrentUser(),
        a = y.default.getUser(t.ownerId);
    return (
        !(
            null == e ||
            null == l ||
            null == a ||
            !M(l, a, e, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
        ) &&
        (!!n || Z.Z.getChannelId(m.Z.getGuildId()) !== e.id) &&
        v.ZP.getNewForumThreadsCreated(e)
    );
}
let H = (t, e, n) =>
    ''
        .concat(t, ' (')
        .concat((0, a.F6)(e, y.default, h.Z, !0))
        .concat(null != n ? ', '.concat((0, a.F6)(n, y.default, h.Z)) : '', ')');
function W(t, e, n, i) {
    switch (t.type) {
        case L.d4z.GUILD_ANNOUNCEMENT:
        case L.d4z.GUILD_TEXT:
            return e;
        case L.d4z.GROUP_DM:
            return n;
        case L.d4z.DM:
        default:
            return i;
    }
}
function x(t, e, n) {
    let i,
        l = D.ZP.getName(t.getGuildId(), t.id, n),
        u = l;
    switch (t.type) {
        case L.d4z.GUILD_ANNOUNCEMENT:
        case L.d4z.GUILD_TEXT:
        case L.d4z.GUILD_VOICE:
        case L.d4z.ANNOUNCEMENT_THREAD:
        case L.d4z.PUBLIC_THREAD:
        case L.d4z.PRIVATE_THREAD:
            let s = p.Z.getChannel(t.parent_id);
            e.type === L.uaV.THREAD_STARTER_MESSAGE && null != s ? (u = H(u, s, p.Z.getChannel(s.parent_id))) : (0, g.Z)(e) ? null != C.Z.getGuild(t.getGuildId()) && (u = H(u, t, s)) : (u = H(u, t, s));
            break;
        case L.d4z.GROUP_DM:
            (t.isManaged() && n.bot && u === (0, a.F6)(t, y.default, h.Z)) || (u = ''.concat(u, ' (').concat((0, a.F6)(t, y.default, h.Z, !0), ')'));
    }
    let f = e.content;
    if ((0, g.Z)(e) && null == (f = U.Z.stringify(e, t))) throw (new r.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: e }), Error('failed to stringify system message'));
    let E = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, o.s)(e) : (0, o.Z)(e)) i = k.intl.string(k.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        i =
            e.activity.type === L.mFx.JOIN
                ? k.intl.formatToPlainString(W(t, k.t.E8CgCg, k.t.c6KHWF, k.t.Fy7rJC), {
                      user: l,
                      game: e.application.name
                  })
                : e.activity.type === L.mFx.JOIN_REQUEST
                  ? k.intl.formatToPlainString(W(t, k.t['/TD0lZ'], k.t['/TD0lZ'], k.t['/TD0lZ']), {
                        user: l,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === L.mFx.LISTEN) {
        let e = W(t, k.t.SaDdmJ, k.t.qsODho, k.t.WeiMTU);
        i = k.intl.formatToPlainString(e, { user: l });
    } else if (null != E && E.length > 0) i = k.intl.formatToPlainString(k.t.zY4v1N, { stickerName: E[0].name });
    else if (e.type === L.uaV.PREMIUM_REFERRAL) i = k.intl.formatToPlainString(k.t.lieTqa, { username: R.ZP.getName(n) });
    else if (null != e.poll) i = k.intl.formatToPlainString(k.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === L.uaV.POLL_RESULT) {
        var _, N, T;
        let t = null == (T = e.embeds) || null == (N = T[0]) || null == (_ = N.fields) ? void 0 : _.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        i = k.intl.formatToPlainString(k.t['9WrecH'], { question: n });
    } else i = 0 !== f.length && t.type === L.d4z.DM && !n.bot && f.startsWith('> -# *') ? (i = d.ZP.unparse(f, t.id, !0)).substring(0, 1) + i.substring(4) : d.ZP.unparse(f, t.id, !0);
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
                if ((0, P.yE)(null != (e = t.flags) ? e : 0, L.iLy.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = (0, c.Z)(t.attachments[0]);
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
