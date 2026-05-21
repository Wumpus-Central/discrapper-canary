"use strict";
let i, r, s, a, o, l;
n.d(t, { A: () => j }), n(938796);
var u = n(735438),
    c = n.n(u),
    d = n(989349),
    _ = n.n(d),
    f = n(371444),
    h = n(602137),
    p = n(17928),
    E = n(636537),
    m = n(228366),
    g = n(7584),
    A = n(815807),
    I = n(95701),
    T = n(671759),
    S = n(889227),
    N = n(860689),
    y = n(734057),
    C = n(652215),
    v = n(37411);
let O = C.XlH.CLOSED,
    R = {},
    b = {},
    D = !1,
    L = !1,
    w = null,
    M = [
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
function P(e, t, n) {
    switch (e) {
        case "topic_":
            return t ?? "";
        case "defaultAutoArchiveDuration":
            return t ?? v.cM;
        case "defaultSortOrder":
            return t ?? h.T.LATEST_ACTIVITY;
        case "defaultForumLayout":
            if (n === C.rbe.GUILD_MEDIA) return f.C.GRID;
            if (null == t || t === f.C.DEFAULT) return f.C.LIST;
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
            i === C.p_A.INSTANT_INVITES &&
            ((D = !0),
            E.Bo.get({ url: C.Rsh.INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (D = !1), m.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (D = !1),
            ));
}
function U() {
    (L = !1), (O = C.XlH.CLOSED), (i = null), (a = s = null), (o = null), (b = {});
}
let k = c().debounce(() => {
    if (null == a || null == s) return !1;
    let e = a.toJS(),
        t = s.toJS(),
        n = e.type;
    M.every((i) => {
        let r = e[i],
            s = t[i],
            a = P(i, r, n),
            o = P(i, s, n);
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
function F(e) {
    return (
        !!(function (e) {
            if (null == s || s.id !== e) return !1;
            if (s === a) {
                let t = y.A.getChannel(e);
                if (null == t) return !1;
                (a = s = t), (o = y.A.getChannel(a.parent_id));
            } else {
                let t = y.A.getChannel(e);
                if (null == t) return !1;
                (s = t),
                    null != a &&
                        ((a = a
                            .set("permissionOverwrites", s.permissionOverwrites)
                            .set("availableTags", s.availableTags)),
                        (o = y.A.getChannel(a.parent_id)));
            }
            return !0;
        })(e) &&
        null != a &&
        (null != l && null == a.permissionOverwrites[l] && (l = a.getGuildId()), !0)
    );
}
function V(e) {
    let { channelId: t } = e;
    return F(t);
}
class B extends p.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(y.A);
    }
    hasChanges() {
        return a !== s;
    }
    isOpen() {
        return L;
    }
    getSection() {
        return i;
    }
    getInvites() {
        return { invites: b, loading: D };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return a;
    }
    getFormState() {
        return O;
    }
    getCategory() {
        return o;
    }
    getProps() {
        return {
            submitting: O === C.XlH.SUBMITTING,
            errors: R,
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
            let t = y.A.getChannel(e.channelId);
            if (null == t) return U();
            (O = C.XlH.OPEN),
                (a = s = t),
                (w = "location" in e && null != e.location ? e.location : null),
                (r = "subsection" in e ? e.subsection : null),
                null != a && (a = a.set("nsfw", a.isNSFW())),
                (o = y.A.getChannel(a.parent_id)),
                (l = a.getGuildId());
            let n = a.isModeratorReportChannel() ? C.p_A.PERMISSIONS : C.p_A.OVERVIEW;
            return (R = {}), x({ type: "CHANNEL_SETTINGS_SET_SECTION", section: i ?? n, subsection: r }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (O = C.XlH.SUBMITTING), (R = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (s = a), (O = C.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (O = C.XlH.OPEN),
                (R = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let i = e.errors[n];
                    return (0, u.isArray)(i) ? (t[n] = i.join("\n")) : (t[n] = i), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: U,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: V,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: V,
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
                invitable: f,
                defaultAutoArchiveDuration: h,
                template: p,
                defaultReactionEmoji: E,
                rtcRegion: m,
                videoQualityMode: g,
                availableTags: A,
                defaultSortOrder: I,
                defaultForumLayout: T,
                defaultTagSetting: S,
                iconEmoji: N,
                themeColor: y,
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
                null != f && (a = a.set("threadMetadata", { ...a.threadMetadata, invitable: f })),
                null != h && (a = a.set("defaultAutoArchiveDuration", h)),
                null != p && (a = a.set("template", p)),
                null != n && (a = a.set("type", n)),
                void 0 !== m && (a = a.set("rtcRegion", m)),
                null != g && (a = a.set("videoQualityMode", g)),
                void 0 !== E && (a = a.set("defaultReactionEmoji", E)),
                null != A && (a = a.set("availableTags", A)),
                null != I && (a = a.set("defaultSortOrder", I)),
                null != S && (a = a.set("defaultTagSetting", S)),
                null != T && (a = a.set("defaultForumLayout", T)),
                void 0 !== N && (a = a.set("iconEmoji", N)),
                null != y && (a = a.set("themeColor", y)),
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
            for (let e of t) n = F(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != a && F(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == a || a.id !== t) return !1;
            O = C.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (b = { ...b }), delete b[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            b = { ...b, [e.invite.code]: G(e.invite) };
        },
    }),
    j = H;
