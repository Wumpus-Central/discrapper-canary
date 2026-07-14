"use strict";
let i, r, a, s, l, o;
n.d(t, { A: () => j }), n(938796);
var d = n(735438),
    c = n.n(d),
    u = n(989349),
    _ = n.n(u),
    E = n(371444),
    A = n(602137),
    h = n(17928),
    I = n(636537),
    f = n(228366),
    p = n(7584),
    T = n(815807),
    m = n(95701),
    g = n(671759),
    S = n(889227),
    N = n(860689),
    C = n(734057),
    O = n(652215),
    R = n(37411);
let L = O.XlH.CLOSED,
    D = {},
    y = {},
    v = !1,
    b = !1,
    M = null,
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
function U(e, t, n) {
    switch (e) {
        case "topic_":
            return t ?? "";
        case "defaultAutoArchiveDuration":
            return t ?? R.cM;
        case "defaultSortOrder":
            return t ?? A.T.LATEST_ACTIVITY;
        case "defaultForumLayout":
            if (n === O.rbe.GUILD_MEDIA) return E.C.GRID;
            if (null == t || t === E.C.DEFAULT) return E.C.LIST;
            return t;
        case "rateLimitPerUser_":
        case "defaultThreadRateLimitPerUser":
            return t ?? 0;
        case "defaultReactionEmoji":
            if (null == t) return null;
            if ((0, T.is)(t.emojiId)) return { emojiId: t.emojiId };
            let i = t.emojiName;
            return null == i || "" === i ? null : { emojiName: p.Ay.translateInlineEmojiToSurrogates(i) };
        default:
            return t;
    }
}
function w(e) {
    (i = e.section),
        (r = e.subsection),
        null != s &&
            i === O.p_A.INSTANT_INVITES &&
            ((v = !0),
            I.Bo.get({ url: O.Rsh.INSTANT_INVITES(s.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (v = !1), f.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (v = !1),
            ));
}
function G() {
    (b = !1), (L = O.XlH.CLOSED), (i = null), (s = a = null), (l = null), (y = {});
}
let x = c().debounce(() => {
    if (null == s || null == a) return !1;
    let e = s.toJS(),
        t = a.toJS(),
        n = e.type;
    P.every((i) => {
        let r = e[i],
            a = t[i],
            s = U(i, r, n),
            l = U(i, a, n);
        return c().isEqual(s, l);
    }) &&
        s !== a &&
        ((s = a), H.emitChange());
}, 500);
function k(e) {
    return new g.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new S.A(e.inviter) : null,
        channel: (0, m.OY)(e.channel),
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
            if (null == a || a.id !== e) return !1;
            if (a === s) {
                let t = C.A.getChannel(e);
                if (null == t) return !1;
                (s = a = t), (l = C.A.getChannel(s.parent_id));
            } else {
                let t = C.A.getChannel(e);
                if (null == t) return !1;
                (a = t),
                    null != s &&
                        ((s = s
                            .set("permissionOverwrites", a.permissionOverwrites)
                            .set("availableTags", a.availableTags)),
                        (l = C.A.getChannel(s.parent_id)));
            }
            return !0;
        })(e) &&
        null != s &&
        (null != o && null == s.permissionOverwrites[o] && (o = s.getGuildId()), !0)
    );
}
function V(e) {
    let { channelId: t } = e;
    return F(t);
}
class B extends h.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(C.A);
    }
    hasChanges() {
        return s !== a;
    }
    isOpen() {
        return b;
    }
    getSection() {
        return i;
    }
    getInvites() {
        return { invites: y, loading: v };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return s;
    }
    getFormState() {
        return L;
    }
    getCategory() {
        return l;
    }
    getProps() {
        return {
            submitting: L === O.XlH.SUBMITTING,
            errors: D,
            channel: s,
            section: i,
            subsection: r,
            invites: y,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: M,
        };
    }
}
let H = new B(f.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = C.A.getChannel(e.channelId);
            if (null == t) return G();
            (L = O.XlH.OPEN),
                (s = a = t),
                (M = "location" in e && null != e.location ? e.location : null),
                (r = "subsection" in e ? e.subsection : null),
                null != s && (s = s.set("nsfw", s.isNSFW())),
                (l = C.A.getChannel(s.parent_id)),
                (o = s.getGuildId());
            let n = s.isModeratorReportChannel() ? O.p_A.PERMISSIONS : O.p_A.OVERVIEW;
            return (D = {}), w({ type: "CHANNEL_SETTINGS_SET_SECTION", section: i ?? n, subsection: r }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (L = O.XlH.SUBMITTING), (D = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (a = s), (L = O.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (L = O.XlH.OPEN),
                (D = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let i = e.errors[n];
                    return (0, d.isArray)(i) ? (t[n] = i.join("\n")) : (t[n] = i), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: G,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: V,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: V,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
                name: t,
                channelType: n,
                topic: i,
                bitrate: r,
                userLimit: a,
                nsfw: l,
                flags: o,
                rateLimitPerUser: d,
                defaultThreadRateLimitPerUser: c,
                autoArchiveDuration: u,
                locked: _,
                invitable: E,
                defaultAutoArchiveDuration: A,
                template: h,
                defaultReactionEmoji: I,
                rtcRegion: f,
                videoQualityMode: p,
                availableTags: T,
                defaultSortOrder: m,
                defaultForumLayout: g,
                defaultTagSetting: S,
                iconEmoji: N,
                themeColor: C,
            } = e;
            if (null == s) return !1;
            null != t && (s = s.set("name", t)),
                null != i && (s = s.set("topic", i)),
                null != r && (s = s.set("bitrate", r)),
                null != a && (s = s.set("userLimit", a)),
                null != l && (s = s.set("nsfw", l)),
                null != o && (s = s.set("flags", o)),
                null != d && (s = s.set("rateLimitPerUser", d)),
                null != c && (s = s.set("defaultThreadRateLimitPerUser", c)),
                null != u && (s = s.set("threadMetadata", { ...s.threadMetadata, autoArchiveDuration: u })),
                null != _ && (s = s.set("threadMetadata", { ...s.threadMetadata, locked: _ })),
                null != E && (s = s.set("threadMetadata", { ...s.threadMetadata, invitable: E })),
                null != A && (s = s.set("defaultAutoArchiveDuration", A)),
                null != h && (s = s.set("template", h)),
                null != n && (s = s.set("type", n)),
                void 0 !== f && (s = s.set("rtcRegion", f)),
                null != p && (s = s.set("videoQualityMode", p)),
                void 0 !== I && (s = s.set("defaultReactionEmoji", I)),
                null != T && (s = s.set("availableTags", T)),
                null != m && (s = s.set("defaultSortOrder", m)),
                null != S && (s = s.set("defaultTagSetting", S)),
                null != g && (s = s.set("defaultForumLayout", g)),
                void 0 !== N && (s = s.set("iconEmoji", N)),
                null != C && (s = s.set("themeColor", C)),
                x();
        },
        CHANNEL_SETTINGS_SET_SECTION: w,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (y = {}),
                e.invites.forEach((e) => {
                    y[e.code] = k(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == s) return !1;
            let n = !1;
            for (let e of t) n = F(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != s && F(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == s || s.id !== t) return !1;
            L = O.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (y = { ...y }), delete y[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            y = { ...y, [e.invite.code]: k(e.invite) };
        },
    }),
    j = H;
