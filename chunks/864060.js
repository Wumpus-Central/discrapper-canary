n.d(t, {
    FI: () => L,
    LL: () => k,
    N_: () => U,
    Xi: () => F,
    eF: () => M,
}),
    n(997841),
    n(953529),
    n(415506),
    n(388685);
var l = n(317381),
    i = n(599149),
    r = n(933557),
    a = n(710845),
    o = n(978003),
    s = n(41776),
    u = n(355298),
    c = n(957730),
    d = n(850908),
    f = n(572804),
    g = n(901461),
    h = n(569471),
    p = n(723170),
    E = n(695346),
    N = n(131704),
    O = n(433355),
    y = n(592125),
    C = n(430824),
    _ = n(19780),
    T = n(699516),
    m = n(944486),
    I = n(914010),
    S = n(885110),
    b = n(9156),
    v = n(594174),
    x = n(630388),
    P = n(5192),
    Z = n(352736),
    A = n(51144);
n(734934);
var j = n(842619),
    R = n(981631),
    D = n(124368),
    w = n(388032);
function k(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && s.Z.isLurking(i)) ||
        (!l.ignoreSameUser && t.id === e.id) ||
        T.Z.isBlockedOrIgnored(t.id) ||
        (!l.ignoreStatus && S.Z.getStatus() === R.Skl.DND) ||
        E.QZ.getSetting() ||
        (!l.ignoreNoMessagesSetting && b.ZP.allowNoMessages(n))
    );
}
function M(e, t) {
    var n, i;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, x.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = y.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (o = y.Z.getChannel(null == o ? void 0 : o.parent_id));
    let s = v.default.getCurrentUser(),
        c = v.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == o ||
        null == s ||
        null == c ||
        (o.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
        (j.Z.areSlayerNotificationsSuppressed() && ((i = o).type === R.d4z.DM || null != i.linkedLobby)) ||
        !k(s, c, o, {
            ignoreStatus: a,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
        }) ||
        u.Z.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = m.Z.getChannelId(I.Z.getGuildId());
        if (e === o.id || O.ZP.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        T.Z.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === s.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.channel_id === t) return !1;
    }
    if (N.Ec.has(o.type)) {
        if (h.Z.isMuted(o.id)) return !1;
        let t = (0, p.J)(o);
        return (
            t !== D.iN.NO_MESSAGES &&
            (t === D.iN.ALL_MESSAGES ||
                (0, f.Hl)({
                    rawMessage: e,
                    userId: s.id,
                    suppressEveryone: !1,
                    suppressRoles: !1,
                }))
        );
    }
    {
        let t = !N.tx.has(o.type) || _.Z.getChannelId() === o.id;
        if (b.ZP.allowAllMessages(o) && t) return !0;
        let n = b.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            l = b.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, f.Hl)({
            rawMessage: e,
            userId: s.id,
            suppressEveryone: n,
            suppressRoles: l,
        });
    }
}
function U(e, t) {
    var n;
    if (m.Z.getChannelId(I.Z.getGuildId()) !== t) return !1;
    let l = y.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (l = y.Z.getChannel(null == l ? void 0 : l.parent_id));
    let i = v.default.getCurrentUser(),
        r = v.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(
        null == l ||
        null == i ||
        null == r ||
        l.isManaged() ||
        r.hasFlag(R.xW$.SPAMMER) ||
        T.Z.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        S.Z.getStatus() === R.Skl.DND ||
        E.QZ.getSetting() ||
        b.ZP.allowNoMessages(l)
    );
}
function L(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = v.default.getCurrentUser(),
        r = v.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == r ||
            !k(i, r, t, {
                ignoreStatus: l,
                ignoreNoMessagesSetting: !0,
            }) ||
            b.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || m.Z.getChannelId(I.Z.getGuildId()) !== t.id) &&
        b.ZP.getNewForumThreadsCreated(t)
    );
}
let G = (e, t, n) =>
    ""
        .concat((0, i.KM)(e, !0), " (")
        .concat((0, i.KM)((0, r.F6)(t, v.default, T.Z, !0), !0))
        .concat(null != n ? ", ".concat((0, i.KM)((0, r.F6)(n, v.default, T.Z), !0)) : "", ")");
function V(e, t, n, l) {
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
        i = P.ZP.getName(e.getGuildId(), e.id, n),
        s = i;
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let u = y.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != u
                ? (s = G(s, u, y.Z.getChannel(u.parent_id)))
                : (0, g.Z)(t)
                  ? null != C.Z.getGuild(e.getGuildId()) && (s = G(s, e, u))
                  : (s = G(s, e, u));
            break;
        case R.d4z.GROUP_DM:
            (e.isManaged() && n.bot && s === (0, r.F6)(e, v.default, T.Z)) || (s = G(s, e));
    }
    let f = t.content;
    if ((0, g.Z)(t) && null == (f = Z.Z.stringify(t, e)))
        throw (
            (new a.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let h = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        p = [];
    if ("message_reference" in t ? (0, o.s)(t) : (0, o.Z)(t)) l = w.intl.string(w.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        l =
            t.activity.type === R.mFx.JOIN
                ? w.intl.formatToPlainString(V(e, w.t.E8CgCh, w.t.c6KHWJ, w.t.Fy7rJN), {
                      user: i,
                      game: t.application.name,
                  })
                : t.activity.type === R.mFx.JOIN_REQUEST
                  ? w.intl.formatToPlainString(V(e, w.t["/TD0la"], w.t["/TD0la"], w.t["/TD0la"]), {
                        user: i,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === R.mFx.LISTEN) {
        let t = V(e, w.t.SaDdmN, w.t.qsODhp, w.t.WeiMTW);
        l = w.intl.formatToPlainString(t, { user: i });
    } else if (null != h && h.length > 0) l = w.intl.formatToPlainString(w.t.zY4v1B, { stickerName: h[0].name });
    else if (t.type === R.uaV.PREMIUM_REFERRAL)
        l = w.intl.formatToPlainString(w.t.lieTqU, { username: A.ZP.getName(n) });
    else if (null != t.poll) l = w.intl.formatToPlainString(w.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === R.uaV.POLL_RESULT) {
        var E, N, O;
        let e =
                null == (O = t.embeds) || null == (N = O[0]) || null == (E = N.fields)
                    ? void 0
                    : E.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        l = w.intl.formatToPlainString(w.t["9WrecI"], { question: n });
    } else if (
        (({ content: l, emoji: p } = c.ZP.unparseWithMeta(f, e.id, !0)),
        0 !== f.length && e.type === R.d4z.DM && !n.bot && f.startsWith("> -# *"))
    )
        for (let e of ((l = l.substring(0, 1) + l.substring(4)), p)) e.position -= 2;
    return (
        0 === l.length &&
            (l = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = "description" in t ? t.description : t.rawDescription,
                        l = "title" in t ? t.title : t.rawTitle;
                    if (null != n) return null != l ? "".concat(l, " ").concat(n) : n;
                    if (null != l) return l;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = "name" in e ? e.name : e.rawName,
                            l = "value" in e ? e.value : e.rawValue;
                        return "".concat(n, " ").concat(l);
                    }
                }
                if ((0, x.yE)(null != (t = e.flags) ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return w.intl.string(w.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, d.Z)(e.attachments[0]);
                    return w.intl.formatToPlainString(w.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: s,
            body: l,
            emoji: p,
        }
    );
}
