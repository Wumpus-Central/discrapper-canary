n.d(t, {
    FI: () => G,
    LL: () => M,
    N_: () => L,
    Xi: () => B,
    eF: () => U,
}),
    n(997841),
    n(953529),
    n(415506),
    n(388685);
var l = n(95015),
    i = n(911969),
    r = n(317381),
    a = n(599149),
    o = n(933557),
    s = n(710845),
    u = n(978003),
    c = n(41776),
    d = n(355298),
    f = n(957730),
    g = n(850908),
    h = n(572804),
    p = n(901461),
    E = n(569471),
    N = n(723170),
    O = n(695346),
    y = n(131704),
    C = n(433355),
    T = n(592125),
    _ = n(430824),
    m = n(19780),
    I = n(699516),
    S = n(944486),
    b = n(914010),
    v = n(885110),
    x = n(9156),
    P = n(594174),
    Z = n(5192),
    A = n(352736),
    j = n(51144);
n(734934);
var R = n(842619),
    D = n(981631),
    w = n(124368),
    k = n(388032);
function M(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(D.xW$.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && c.Z.isLurking(i)) ||
        (!l.ignoreSameUser && t.id === e.id) ||
        I.Z.isBlockedOrIgnored(t.id) ||
        (!l.ignoreStatus && v.Z.getStatus() === D.Skl.DND) ||
        O.QZ.getSetting() ||
        (!l.ignoreNoMessagesSetting && x.ZP.allowNoMessages(n))
    );
}
function U(e, t) {
    var n, i;
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, l.yE)(e.flags, D.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = T.Z.getChannel(t);
    e.type === D.uaV.THREAD_STARTER_MESSAGE && (s = T.Z.getChannel(null == s ? void 0 : s.parent_id));
    let u = P.default.getCurrentUser(),
        c = P.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == s ||
        null == u ||
        null == c ||
        (s.type === D.d4z.GROUP_DM && e.type === D.uaV.RECIPIENT_REMOVE) ||
        (R.Z.areSlayerNotificationsSuppressed() && ((i = s).type === D.d4z.DM || null != i.linkedLobby)) ||
        !M(u, c, s, {
            ignoreStatus: o,
            ignoreSameUser: D.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
        }) ||
        d.Z.isMessageRequest(t)
    )
        return !1;
    if (!a) {
        let e = S.Z.getChannelId(b.Z.getGuildId());
        if (e === s.id || C.ZP.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (
        I.Z.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === u.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = r.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.channel_id === t) return !1;
    }
    if (y.Ec.has(s.type)) {
        if (E.Z.isMuted(s.id)) return !1;
        let t = (0, N.J)(s);
        return (
            t !== w.iN.NO_MESSAGES &&
            (t === w.iN.ALL_MESSAGES ||
                (0, h.Hl)({
                    rawMessage: e,
                    userId: u.id,
                    suppressEveryone: !1,
                    suppressRoles: !1,
                }))
        );
    }
    {
        let t = !y.tx.has(s.type) || m.Z.getChannelId() === s.id;
        if (x.ZP.allowAllMessages(s) && t) return !0;
        let n = x.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            l = x.ZP.isSuppressRolesEnabled(s.getGuildId());
        return (0, h.Hl)({
            rawMessage: e,
            userId: u.id,
            suppressEveryone: n,
            suppressRoles: l,
        });
    }
}
function L(e, t) {
    var n;
    if (S.Z.getChannelId(b.Z.getGuildId()) !== t) return !1;
    let l = T.Z.getChannel(t);
    e.type === D.uaV.THREAD_STARTER_MESSAGE && (l = T.Z.getChannel(null == l ? void 0 : l.parent_id));
    let i = P.default.getCurrentUser(),
        r = P.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(
        null == l ||
        null == i ||
        null == r ||
        l.isManaged() ||
        r.hasFlag(D.xW$.SPAMMER) ||
        I.Z.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        v.Z.getStatus() === D.Skl.DND ||
        O.QZ.getSetting() ||
        x.ZP.allowNoMessages(l)
    );
}
function G(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = P.default.getCurrentUser(),
        r = P.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == r ||
            !M(i, r, t, {
                ignoreStatus: l,
                ignoreNoMessagesSetting: !0,
            }) ||
            x.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || S.Z.getChannelId(b.Z.getGuildId()) !== t.id) &&
        x.ZP.getNewForumThreadsCreated(t)
    );
}
let V = (e, t, n) =>
    ""
        .concat((0, a.KM)(e, !0), " (")
        .concat((0, a.KM)((0, o.F6)(t, P.default, I.Z, !0), !0))
        .concat(null != n ? ", ".concat((0, a.KM)((0, o.F6)(n, P.default, I.Z), !0)) : "", ")");
function F(e, t, n, l) {
    switch (e.type) {
        case D.d4z.GUILD_ANNOUNCEMENT:
        case D.d4z.GUILD_TEXT:
            return t;
        case D.d4z.GROUP_DM:
            return n;
        case D.d4z.DM:
        default:
            return l;
    }
}
function B(e, t, n) {
    let r,
        a = Z.ZP.getName(e.getGuildId(), e.id, n),
        c = a;
    switch (e.type) {
        case D.d4z.GUILD_ANNOUNCEMENT:
        case D.d4z.GUILD_TEXT:
        case D.d4z.GUILD_VOICE:
        case D.d4z.ANNOUNCEMENT_THREAD:
        case D.d4z.PUBLIC_THREAD:
        case D.d4z.PRIVATE_THREAD:
            let d = T.Z.getChannel(e.parent_id);
            t.type === D.uaV.THREAD_STARTER_MESSAGE && null != d
                ? (c = V(c, d, T.Z.getChannel(d.parent_id)))
                : (0, p.Z)(t)
                  ? null != _.Z.getGuild(e.getGuildId()) && (c = V(c, e, d))
                  : (c = V(c, e, d));
            break;
        case D.d4z.GROUP_DM:
            (e.isManaged() && n.bot && c === (0, o.F6)(e, P.default, I.Z)) || (c = V(c, e));
    }
    let h = t.content;
    if ((0, p.Z)(t) && null == (h = A.Z.stringify(t, e)))
        throw (
            (new s.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let E = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        N = [];
    if ("message_reference" in t ? (0, u.s)(t) : (0, u.Z)(t)) r = k.intl.string(k.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === D.mFx.JOIN
                ? k.intl.formatToPlainString(F(e, k.t.E8CgCh, k.t.c6KHWJ, k.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === D.mFx.JOIN_REQUEST
                  ? k.intl.formatToPlainString(F(e, k.t["/TD0la"], k.t["/TD0la"], k.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === D.mFx.LISTEN) {
        let t = F(e, k.t.SaDdmN, k.t.qsODhp, k.t.WeiMTW);
        r = k.intl.formatToPlainString(t, { user: a });
    } else if (null != E && E.length > 0) r = k.intl.formatToPlainString(k.t.zY4v1B, { stickerName: E[0].name });
    else if (t.type === D.uaV.PREMIUM_REFERRAL)
        r = k.intl.formatToPlainString(k.t.lieTqU, { username: j.ZP.getName(n) });
    else if (null != t.poll) r = k.intl.formatToPlainString(k.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === D.uaV.POLL_RESULT) {
        var O, y, C;
        let e =
                null == (C = t.embeds) || null == (y = C[0]) || null == (O = y.fields)
                    ? void 0
                    : O.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = k.intl.formatToPlainString(k.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === i.re.CHECKPOINT_CARD)
        r = k.intl.string(k.t.HWnMTQ);
    else if (
        (({ content: r, emoji: N } = f.ZP.unparseWithMeta(h, e.id, !0)),
        0 !== h.length && e.type === D.d4z.DM && !n.bot && h.startsWith("> -# *"))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), N)) e.position -= 2;
    return (
        0 === r.length &&
            (r = (function (e) {
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
                if ((0, l.yE)(null != (t = e.flags) ? t : 0, D.iLy.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, g.Z)(e.attachments[0]);
                    return k.intl.formatToPlainString(k.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: c,
            body: r,
            emoji: N,
        }
    );
}
