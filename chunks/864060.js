n.d(t, {
    FI: () => M,
    LL: () => w,
    N_: () => U,
    Xi: () => V,
    eF: () => k,
}),
    n(997841),
    n(953529),
    n(415506);
var l = n(317381),
    i = n(933557),
    r = n(710845),
    a = n(978003),
    o = n(41776),
    s = n(355298),
    u = n(957730),
    c = n(850908),
    d = n(572804),
    f = n(901461),
    g = n(569471),
    h = n(723170),
    p = n(695346),
    E = n(131704),
    N = n(433355),
    O = n(592125),
    y = n(430824),
    C = n(19780),
    _ = n(699516),
    T = n(944486),
    m = n(914010),
    I = n(885110),
    S = n(9156),
    b = n(594174),
    v = n(630388),
    x = n(5192),
    P = n(352736),
    Z = n(51144);
n(734934);
var A = n(842619),
    j = n(981631),
    R = n(124368),
    D = n(388032);
function w(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(j.xW$.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && o.Z.isLurking(i)) ||
        (!l.ignoreSameUser && t.id === e.id) ||
        _.Z.isBlockedOrIgnored(t.id) ||
        (!l.ignoreStatus && I.Z.getStatus() === j.Skl.DND) ||
        p.QZ.getSetting() ||
        (!l.ignoreNoMessagesSetting && S.ZP.allowNoMessages(n))
    );
}
function k(e, t) {
    var n, i;
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, v.yE)(e.flags, j.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = O.Z.getChannel(t);
    e.type === j.uaV.THREAD_STARTER_MESSAGE && (o = O.Z.getChannel(null == o ? void 0 : o.parent_id));
    let u = b.default.getCurrentUser(),
        c = b.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == o ||
        null == u ||
        null == c ||
        (o.type === j.d4z.GROUP_DM && e.type === j.uaV.RECIPIENT_REMOVE) ||
        (A.Z.areSlayerNotificationsSuppressed() && ((i = o).type === j.d4z.DM || null != i.linkedLobby)) ||
        !w(u, c, o, {
            ignoreStatus: a,
            ignoreSameUser: j.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
        }) ||
        s.Z.isMessageRequest(t)
    )
        return !1;
    if (!r) {
        let e = T.Z.getChannelId(m.Z.getGuildId());
        if (e === o.id || N.ZP.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        _.Z.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === u.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = l.ZP.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.channel_id === t) return !1;
    }
    if (E.Ec.has(o.type)) {
        if (g.Z.isMuted(o.id)) return !1;
        let t = (0, h.J)(o);
        return (
            t !== R.iN.NO_MESSAGES &&
            (t === R.iN.ALL_MESSAGES ||
                (0, d.Hl)({
                    rawMessage: e,
                    userId: u.id,
                    suppressEveryone: !1,
                    suppressRoles: !1,
                }))
        );
    }
    {
        let t = !E.tx.has(o.type) || C.Z.getChannelId() === o.id;
        if (S.ZP.allowAllMessages(o) && t) return !0;
        let n = S.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            l = S.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, d.Hl)({
            rawMessage: e,
            userId: u.id,
            suppressEveryone: n,
            suppressRoles: l,
        });
    }
}
function U(e, t) {
    var n;
    if (T.Z.getChannelId(m.Z.getGuildId()) !== t) return !1;
    let l = O.Z.getChannel(t);
    e.type === j.uaV.THREAD_STARTER_MESSAGE && (l = O.Z.getChannel(null == l ? void 0 : l.parent_id));
    let i = b.default.getCurrentUser(),
        r = b.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(
        null == l ||
        null == i ||
        null == r ||
        l.isManaged() ||
        r.hasFlag(j.xW$.SPAMMER) ||
        _.Z.isBlockedOrIgnoredForMessage(e) ||
        r.id === i.id ||
        I.Z.getStatus() === j.Skl.DND ||
        p.QZ.getSetting() ||
        S.ZP.allowNoMessages(l)
    );
}
function M(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = b.default.getCurrentUser(),
        r = b.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == r ||
            !w(i, r, t, {
                ignoreStatus: l,
                ignoreNoMessagesSetting: !0,
            }) ||
            S.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || T.Z.getChannelId(m.Z.getGuildId()) !== t.id) &&
        S.ZP.getNewForumThreadsCreated(t)
    );
}
let L = (e, t, n) =>
    ""
        .concat(e, " (")
        .concat((0, i.F6)(t, b.default, _.Z, !0))
        .concat(null != n ? ", ".concat((0, i.F6)(n, b.default, _.Z)) : "", ")");
function G(e, t, n, l) {
    switch (e.type) {
        case j.d4z.GUILD_ANNOUNCEMENT:
        case j.d4z.GUILD_TEXT:
            return t;
        case j.d4z.GROUP_DM:
            return n;
        case j.d4z.DM:
        default:
            return l;
    }
}
function V(e, t, n) {
    let l,
        o = x.ZP.getName(e.getGuildId(), e.id, n),
        s = o;
    switch (e.type) {
        case j.d4z.GUILD_ANNOUNCEMENT:
        case j.d4z.GUILD_TEXT:
        case j.d4z.GUILD_VOICE:
        case j.d4z.ANNOUNCEMENT_THREAD:
        case j.d4z.PUBLIC_THREAD:
        case j.d4z.PRIVATE_THREAD:
            let d = O.Z.getChannel(e.parent_id);
            t.type === j.uaV.THREAD_STARTER_MESSAGE && null != d
                ? (s = L(s, d, O.Z.getChannel(d.parent_id)))
                : (0, f.Z)(t)
                  ? null != y.Z.getGuild(e.getGuildId()) && (s = L(s, e, d))
                  : (s = L(s, e, d));
            break;
        case j.d4z.GROUP_DM:
            (e.isManaged() && n.bot && s === (0, i.F6)(e, b.default, _.Z)) ||
                (s = "".concat(s, " (").concat((0, i.F6)(e, b.default, _.Z, !0), ")"));
    }
    let g = t.content;
    if ((0, f.Z)(t) && null == (g = P.Z.stringify(t, e)))
        throw (
            (new r.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let h = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers;
    if ("message_reference" in t ? (0, a.s)(t) : (0, a.Z)(t)) l = D.intl.string(D.t["9ddYKi"]);
    else if (null != t.activity && null != t.application)
        l =
            t.activity.type === j.mFx.JOIN
                ? D.intl.formatToPlainString(G(e, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC), {
                      user: o,
                      game: t.application.name,
                  })
                : t.activity.type === j.mFx.JOIN_REQUEST
                  ? D.intl.formatToPlainString(G(e, D.t["/TD0lZ"], D.t["/TD0lZ"], D.t["/TD0lZ"]), {
                        user: o,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === j.mFx.LISTEN) {
        let t = G(e, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
        l = D.intl.formatToPlainString(t, { user: o });
    } else if (null != h && h.length > 0) l = D.intl.formatToPlainString(D.t.zY4v1N, { stickerName: h[0].name });
    else if (t.type === j.uaV.PREMIUM_REFERRAL)
        l = D.intl.formatToPlainString(D.t.lieTqa, { username: Z.ZP.getName(n) });
    else if (null != t.poll) l = D.intl.formatToPlainString(D.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === j.uaV.POLL_RESULT) {
        var p, E, N;
        let e =
                null == (N = t.embeds) || null == (E = N[0]) || null == (p = E.fields)
                    ? void 0
                    : p.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        l = D.intl.formatToPlainString(D.t["9WrecH"], { question: n });
    } else
        l =
            0 !== g.length && e.type === j.d4z.DM && !n.bot && g.startsWith("> -# *")
                ? (l = u.ZP.unparse(g, e.id, !0)).substring(0, 1) + l.substring(4)
                : u.ZP.unparse(g, e.id, !0);
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
                if ((0, v.yE)(null != (t = e.flags) ? t : 0, j.iLy.IS_VOICE_MESSAGE)) return D.intl.string(D.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, c.Z)(e.attachments[0]);
                    return D.intl.formatToPlainString(D.t["51OkwM"], { filename: t });
                }
                return "";
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: s,
            body: l,
        }
    );
}
