"use strict";
let i, r, s, a, o, l;
n.d(t, { A: () => k }), n(938796);
var u = n(735438),
    c = n.n(u),
    d = n(989349),
    _ = n.n(d),
    f = n(17928),
    h = n(636537),
    p = n(228366),
    E = n(95701),
    m = n(671759),
    g = n(889227),
    A = n(860689),
    I = n(734057),
    T = n(652215);
let S = T.XlH.CLOSED,
    N = {},
    y = {},
    C = !1,
    v = !1,
    O = null,
    R = [
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
function b(e) {
    (i = e.section),
        (r = e.subsection),
        null != a &&
            i === T.p_A.INSTANT_INVITES &&
            ((C = !0),
            h.Bo.get({ url: T.Rsh.INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (C = !1), p.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (C = !1),
            ));
}
function D() {
    (v = !1), (S = T.XlH.CLOSED), (i = null), (a = s = null), (o = null), (y = {});
}
let L = c().debounce(() => {
    if (null == a || null == s) return !1;
    let e = a.toJS(),
        t = s.toJS();
    R.every((n) => e[n] === t[n]) && a !== s && ((a = s), U.emitChange());
}, 500);
function w(e) {
    return new m.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new g.A(e.inviter) : null,
        channel: (0, E.OY)(e.channel),
        guild: null != e.guild ? (0, A.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function M(e) {
    return (
        !!(function (e) {
            if (null == s || s.id !== e) return !1;
            if (s === a) {
                let t = I.A.getChannel(e);
                if (null == t) return !1;
                (a = s = t), (o = I.A.getChannel(a.parent_id));
            } else {
                let t = I.A.getChannel(e);
                if (null == t) return !1;
                (s = t),
                    null != a &&
                        ((a = a
                            .set("permissionOverwrites", s.permissionOverwrites)
                            .set("availableTags", s.availableTags)),
                        (o = I.A.getChannel(a.parent_id)));
            }
            return !0;
        })(e) &&
        null != a &&
        (null != l && null == a.permissionOverwrites[l] && (l = a.getGuildId()), !0)
    );
}
function P(e) {
    let { channelId: t } = e;
    return M(t);
}
class x extends f.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(I.A);
    }
    hasChanges() {
        return a !== s;
    }
    isOpen() {
        return v;
    }
    getSection() {
        return i;
    }
    getInvites() {
        return { invites: y, loading: C };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return a;
    }
    getFormState() {
        return S;
    }
    getCategory() {
        return o;
    }
    getProps() {
        return {
            submitting: S === T.XlH.SUBMITTING,
            errors: N,
            channel: a,
            section: i,
            subsection: r,
            invites: y,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: O,
        };
    }
}
let U = new x(p.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = I.A.getChannel(e.channelId);
            if (null == t) return D();
            (S = T.XlH.OPEN),
                (a = s = t),
                (O = "location" in e && null != e.location ? e.location : null),
                (r = "subsection" in e ? e.subsection : null),
                null != a && (a = a.set("nsfw", a.isNSFW())),
                (o = I.A.getChannel(a.parent_id)),
                (l = a.getGuildId());
            let n = a.isModeratorReportChannel() ? T.p_A.PERMISSIONS : T.p_A.OVERVIEW;
            return (N = {}), b({ type: "CHANNEL_SETTINGS_SET_SECTION", section: i ?? n, subsection: r }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (S = T.XlH.SUBMITTING), (N = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (s = a), (S = T.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (S = T.XlH.OPEN),
                (N = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let i = e.errors[n];
                    return (0, u.isArray)(i) ? (t[n] = i.join("\n")) : (t[n] = i), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: D,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: P,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: P,
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
                L();
        },
        CHANNEL_SETTINGS_SET_SECTION: b,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (y = {}),
                e.invites.forEach((e) => {
                    y[e.code] = w(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == a) return !1;
            let n = !1;
            for (let e of t) n = M(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != a && M(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == a || a.id !== t) return !1;
            S = T.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (y = { ...y }), delete y[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            y = { ...y, [e.invite.code]: w(e.invite) };
        },
    }),
    k = U;
