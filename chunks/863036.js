"use strict";
let i, r, s, a, o, l;
n.d(t, { A: () => j }), n(938796);
var u = n(735438),
    c = n.n(u),
    d = n(989349),
    _ = n.n(d),
    h = n(371444),
    f = n(602137),
    E = n(17928),
    p = n(636537),
    m = n(228366),
    g = n(7584),
    A = n(815807),
    I = n(95701),
    T = n(671759),
    S = n(889227),
    N = n(860689),
    C = n(734057),
    y = n(652215),
    O = n(37411);
let R = y.XlH.CLOSED,
    v = {},
    b = {},
    L = !1,
    D = !1,
    w = null,
    P = [
        "name",
        "type",
        "topic_",
        "bitrate_",
        "userLimit_",
        "nsfw_",
        "flags_",
        "rateLimitPerUser_",
        "defaultThreadRateLimitPerUser",
        "defaultAutoArchiveDuration",
        "template",
        "defaultReactionEmoji",
        "rtcRegion",
        "videoQualityMode",
        "threadMetadata",
        "banner",
        "availableTags",
        "defaultSortOrder",
        "defaultForumLayout",
        "defaultTagSetting",
        "iconEmoji",
        "themeColor",
    ];
function M(e, t, n) {
    switch (e) {
        case "topic_":
            return t ?? "";
        case "defaultAutoArchiveDuration":
            return t ?? O.cM;
        case "defaultSortOrder":
            return t ?? f.T.LATEST_ACTIVITY;
        case "defaultForumLayout":
            if (n === y.rbe.GUILD_MEDIA) return h.C.GRID;
            if (null == t || t === h.C.DEFAULT) return h.C.LIST;
            return t;
        case "rateLimitPerUser_":
        case "defaultThreadRateLimitPerUser":
            return t ?? 0;
        case "defaultReactionEmoji":
            if (null == t) return null;
            if ((0, A.is)(t.emojiId)) return { emojiId: t.emojiId };
            let i = t.emojiName;
            return null == i || "" === i ? null : { emojiName: g.Ay.translateInlineEmojiToSurrogates(i) };
        default:
            return t;
    }
}
function x(e) {
    (i = e.section),
        (r = e.subsection),
        null != a &&
            i === y.p_A.INSTANT_INVITES &&
            ((L = !0),
            p.Bo.get({ url: y.Rsh.INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (L = !1), m.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (L = !1),
            ));
}
function U() {
    (D = !1), (R = y.XlH.CLOSED), (i = null), (a = s = null), (o = null), (b = {});
}
let k = c().debounce(() => {
    if (null == a || null == s) return !1;
    let e = a.toJS(),
        t = s.toJS(),
        n = e.type;
    P.every((i) => {
        let r = e[i],
            s = t[i],
            a = M(i, r, n),
            o = M(i, s, n);
        return c().isEqual(a, o);
    }) &&
        a !== s &&
        ((a = s), H.emitChange());
}, 500);
function G(e) {
    return new T.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new S.A(e.inviter) : null,
        channel: (0, I.OY)(e.channel),
        guild: null != e.guild ? (0, N.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function V(e) {
    return (
        !!(function (e) {
            if (null == s || s.id !== e) return !1;
            if (s === a) {
                let t = C.A.getChannel(e);
                if (null == t) return !1;
                (a = s = t), (o = C.A.getChannel(a.parent_id));
            } else {
                let t = C.A.getChannel(e);
                if (null == t) return !1;
                (s = t),
                    null != a &&
                        ((a = a
                            .set("permissionOverwrites", s.permissionOverwrites)
                            .set("availableTags", s.availableTags)),
                        (o = C.A.getChannel(a.parent_id)));
            }
            return !0;
        })(e) &&
        null != a &&
        (null != l && null == a.permissionOverwrites[l] && (l = a.getGuildId()), !0)
    );
}
function F(e) {
    let { channelId: t } = e;
    return V(t);
}
class B extends E.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(C.A);
    }
    hasChanges() {
        return a !== s;
    }
    isOpen() {
        return D;
    }
    getSection() {
        return i;
    }
    getInvites() {
        return { invites: b, loading: L };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return a;
    }
    getFormState() {
        return R;
    }
    getCategory() {
        return o;
    }
    getProps() {
        return {
            submitting: R === y.XlH.SUBMITTING,
            errors: v,
            channel: a,
            section: i,
            subsection: r,
            invites: b,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: w,
        };
    }
}
let H = new B(m.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = C.A.getChannel(e.channelId);
            if (null == t) return U();
            (R = y.XlH.OPEN),
                (a = s = t),
                (w = "location" in e && null != e.location ? e.location : null),
                (r = "subsection" in e ? e.subsection : null),
                null != a && (a = a.set("nsfw", a.isNSFW())),
                (o = C.A.getChannel(a.parent_id)),
                (l = a.getGuildId());
            let n = a.isModeratorReportChannel() ? y.p_A.PERMISSIONS : y.p_A.OVERVIEW;
            return (v = {}), x({ type: "CHANNEL_SETTINGS_SET_SECTION", section: i ?? n, subsection: r }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (R = y.XlH.SUBMITTING), (v = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (s = a), (R = y.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (R = y.XlH.OPEN),
                (v = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let i = e.errors[n];
                    return (0, u.isArray)(i) ? (t[n] = i.join("\n")) : (t[n] = i), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: U,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: F,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: F,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            l = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
                name: t,
                channelType: n,
                topic: i,
                bitrate: r,
                userLimit: s,
                nsfw: o,
                flags: l,
                rateLimitPerUser: u,
                defaultThreadRateLimitPerUser: c,
                autoArchiveDuration: d,
                locked: _,
                invitable: h,
                defaultAutoArchiveDuration: f,
                template: E,
                defaultReactionEmoji: p,
                rtcRegion: m,
                videoQualityMode: g,
                availableTags: A,
                defaultSortOrder: I,
                defaultForumLayout: T,
                defaultTagSetting: S,
                iconEmoji: N,
                themeColor: C,
            } = e;
            if (null == a) return !1;
            null != t && (a = a.set("name", t)),
                null != i && (a = a.set("topic", i)),
                null != r && (a = a.set("bitrate", r)),
                null != s && (a = a.set("userLimit", s)),
                null != o && (a = a.set("nsfw", o)),
                null != l && (a = a.set("flags", l)),
                null != u && (a = a.set("rateLimitPerUser", u)),
                null != c && (a = a.set("defaultThreadRateLimitPerUser", c)),
                null != d && (a = a.set("threadMetadata", { ...a.threadMetadata, autoArchiveDuration: d })),
                null != _ && (a = a.set("threadMetadata", { ...a.threadMetadata, locked: _ })),
                null != h && (a = a.set("threadMetadata", { ...a.threadMetadata, invitable: h })),
                null != f && (a = a.set("defaultAutoArchiveDuration", f)),
                null != E && (a = a.set("template", E)),
                null != n && (a = a.set("type", n)),
                void 0 !== m && (a = a.set("rtcRegion", m)),
                null != g && (a = a.set("videoQualityMode", g)),
                void 0 !== p && (a = a.set("defaultReactionEmoji", p)),
                null != A && (a = a.set("availableTags", A)),
                null != I && (a = a.set("defaultSortOrder", I)),
                null != S && (a = a.set("defaultTagSetting", S)),
                null != T && (a = a.set("defaultForumLayout", T)),
                void 0 !== N && (a = a.set("iconEmoji", N)),
                null != C && (a = a.set("themeColor", C)),
                k();
        },
        CHANNEL_SETTINGS_SET_SECTION: x,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (b = {}),
                e.invites.forEach((e) => {
                    b[e.code] = G(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == a) return !1;
            let n = !1;
            for (let e of t) n = V(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != a && V(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == a || a.id !== t) return !1;
            R = y.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (b = { ...b }), delete b[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            b = { ...b, [e.invite.code]: G(e.invite) };
        },
    }),
    j = H;
