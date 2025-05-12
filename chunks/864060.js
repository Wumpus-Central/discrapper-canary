n.d(e, {
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
function k(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(b.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && u.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || h.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && m.Z.getStatus() === b.Skl.DND) || T.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function w(t, e) {
    var n, a;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, P.yE)(t.flags, b.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let u = p.Z.getChannel(e);
    t.type === b.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
    let d = y.default.getCurrentUser(),
        c = y.default.getUser(null == (n = t.author) ? void 0 : n.id);
    if (
        null == u ||
        null == d ||
        null == c ||
        (u.type === b.d4z.GROUP_DM && t.type === b.uaV.RECIPIENT_REMOVE) ||
        (L.Z.areSlayerNotificationsSuppressed() && ((a = u).type === b.d4z.DM || null != a.linkedLobby)) ||
        !k(d, c, u, {
            ignoreStatus: o,
            ignoreSameUser: b.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        s.Z.isMessageRequest(e)
    )
        return !1;
    if (!r) {
        let t = Z.Z.getChannelId(A.Z.getGuildId());
        if (t === u.id || S.ZP.getCurrentSidebarChannelId(t) === u.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === d.id)) return !1;
    if (O.Z.getCurrentConfig({ location: 'NotificationTextUtils.shouldNotify' }, { autoTrackExposure: !0 }).disableCurrentActivityNotifications && null != t.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === t.application_id && n.location.kind !== i.E.CONTEXTLESS && n.location.channel_id === e) return !1;
    }
    if (t.type === b.uaV.CHAT_WALLPAPER_SET || t.type === b.uaV.CHAT_WALLPAPER_REMOVED) return !1;
    if (N.Ec.has(u.type)) {
        if (E.Z.isMuted(u.id)) return !1;
        let e = (0, _.J)(u);
        return (
            e !== M.iN.NO_MESSAGES &&
            (e === M.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: t,
                    userId: d.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !N.tx.has(u.type) || C.Z.getChannelId() === u.id;
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
    if (Z.Z.getChannelId(A.Z.getGuildId()) !== e) return !1;
    let i = p.Z.getChannel(e);
    t.type === b.uaV.THREAD_STARTER_MESSAGE && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = y.default.getCurrentUser(),
        a = y.default.getUser(null == (n = t.author) ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(b.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || m.Z.getStatus() === b.Skl.DND || T.QZ.getSetting() || v.ZP.allowNoMessages(i)) && t.type !== b.uaV.CHAT_WALLPAPER_SET && t.type !== b.uaV.CHAT_WALLPAPER_REMOVED;
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
            !k(l, a, e, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
        ) &&
        (!!n || Z.Z.getChannelId(A.Z.getGuildId()) !== e.id) &&
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
function z(t, e, n) {
    let i,
        l = D.ZP.getName(t.getGuildId(), t.id, n),
        u = l;
    switch (t.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
        case b.d4z.GUILD_VOICE:
        case b.d4z.ANNOUNCEMENT_THREAD:
        case b.d4z.PUBLIC_THREAD:
        case b.d4z.PRIVATE_THREAD:
            let s = p.Z.getChannel(t.parent_id);
            e.type === b.uaV.THREAD_STARTER_MESSAGE && null != s ? (u = H(u, s, p.Z.getChannel(s.parent_id))) : (0, g.Z)(e) ? null != I.Z.getGuild(t.getGuildId()) && (u = H(u, t, s)) : (u = H(u, t, s));
            break;
        case b.d4z.GROUP_DM:
            (t.isManaged() && n.bot && u === (0, a.F6)(t, y.default, h.Z)) || (u = ''.concat(u, ' (').concat((0, a.F6)(t, y.default, h.Z, !0), ')'));
    }
    let f = e.content;
    if ((0, g.Z)(e) && null == (f = U.Z.stringify(e, t))) throw (new r.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', { message: e }), Error('failed to stringify system message'));
    let E = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, o.s)(e) : (0, o.Z)(e)) i = G.intl.string(G.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        i =
            e.activity.type === b.mFx.JOIN
                ? G.intl.formatToPlainString(W(t, G.t.E8CgCg, G.t.c6KHWF, G.t.Fy7rJC), {
                      user: l,
                      game: e.application.name
                  })
                : e.activity.type === b.mFx.JOIN_REQUEST
                  ? G.intl.formatToPlainString(W(t, G.t['/TD0lZ'], G.t['/TD0lZ'], G.t['/TD0lZ']), {
                        user: l,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === b.mFx.LISTEN) {
        let e = W(t, G.t.SaDdmJ, G.t.qsODho, G.t.WeiMTU);
        i = G.intl.formatToPlainString(e, { user: l });
    } else if (null != E && E.length > 0) i = G.intl.formatToPlainString(G.t.zY4v1N, { stickerName: E[0].name });
    else if (e.type === b.uaV.PREMIUM_REFERRAL) i = G.intl.formatToPlainString(G.t.lieTqa, { username: R.ZP.getName(n) });
    else if (null != e.poll) i = G.intl.formatToPlainString(G.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === b.uaV.POLL_RESULT) {
        var _, T, N;
        let t = null == (N = e.embeds) || null == (T = N[0]) || null == (_ = T.fields) ? void 0 : _.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        i = G.intl.formatToPlainString(G.t['9WrecH'], { question: n });
    } else i = 0 !== f.length && t.type === b.d4z.DM && !n.bot && f.startsWith('> -# *') ? (i = d.ZP.unparse(f, t.id, !0)).substring(0, 1) + i.substring(4) : d.ZP.unparse(f, t.id, !0);
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
                if ((0, P.yE)(null != (e = t.flags) ? e : 0, b.iLy.IS_VOICE_MESSAGE)) return G.intl.string(G.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = (0, c.Z)(t.attachments[0]);
                    return G.intl.formatToPlainString(G.t['51OkwM'], { filename: e });
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
