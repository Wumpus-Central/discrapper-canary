"use strict";
let a, i, r, l, s, d;
n.d(t, { A: () => D }), n(938796);
var o = n(735438),
    c = n.n(o),
    u = n(989349),
    _ = n.n(u),
    m = n(311907),
    p = n(562465),
    h = n(73153),
    g = n(95701),
    f = n(671759),
    b = n(427157),
    A = n(860689),
    x = n(734057),
    v = n(652215);
let E = v.XlH.CLOSED,
    I = {},
    T = {},
    S = !1,
    N = !1,
    C = null,
    y = [
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
function j(e) {
    (a = e.section),
        (i = e.subsection),
        null != l &&
            a === v.p_A.INSTANT_INVITES &&
            ((S = !0),
            p.Bo.get({ url: v.Rsh.INSTANT_INVITES(l.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (S = !1), h.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (S = !1),
            ));
}
function w() {
    (N = !1), (E = v.XlH.CLOSED), (a = null), (l = r = null), (s = null), (T = {});
}
let R = c().debounce(() => {
    if (null == l || null == r) return !1;
    let e = l.toJS(),
        t = r.toJS();
    y.every((n) => e[n] === t[n]) && l !== r && ((l = r), k.emitChange());
}, 500);
function L(e) {
    return new f.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new b.A(e.inviter) : null,
        channel: (0, g.OY)(e.channel),
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
            if (null == r || r.id !== e) return !1;
            if (r === l) {
                let t = x.A.getChannel(e);
                if (null == t) return !1;
                (l = r = t), (s = x.A.getChannel(l.parent_id));
            } else {
                let t = x.A.getChannel(e);
                if (null == t) return !1;
                (r = t),
                    null != l &&
                        ((l = l
                            .set("permissionOverwrites", r.permissionOverwrites)
                            .set("availableTags", r.availableTags)),
                        (s = x.A.getChannel(l.parent_id)));
            }
            return !0;
        })(e) &&
        null != l &&
        (null != d && null == l.permissionOverwrites[d] && (d = l.getGuildId()), !0)
    );
}
function O(e) {
    let { channelId: t } = e;
    return M(t);
}
class P extends m.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(x.A);
    }
    hasChanges() {
        return l !== r;
    }
    isOpen() {
        return N;
    }
    getSection() {
        return a;
    }
    getInvites() {
        return { invites: T, loading: S };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return l;
    }
    getFormState() {
        return E;
    }
    getCategory() {
        return s;
    }
    getProps() {
        return {
            submitting: E === v.XlH.SUBMITTING,
            errors: I,
            channel: l,
            section: a,
            subsection: i,
            invites: T,
            selectedOverwriteId: d,
            hasChanges: this.hasChanges(),
            analyticsLocation: C,
        };
    }
}
let k = new P(h.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = x.A.getChannel(e.channelId);
            if (null == t) return w();
            (E = v.XlH.OPEN),
                (l = r = t),
                (C = "location" in e && null != e.location ? e.location : null),
                (i = "subsection" in e ? e.subsection : null),
                null != l && (l = l.set("nsfw", l.isNSFW())),
                (s = x.A.getChannel(l.parent_id)),
                (d = l.getGuildId());
            let n = l.isModeratorReportChannel() ? v.p_A.PERMISSIONS : v.p_A.OVERVIEW;
            return (I = {}), j({ type: "CHANNEL_SETTINGS_SET_SECTION", section: a ?? n, subsection: i }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (E = v.XlH.SUBMITTING), (I = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (r = l), (E = v.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (E = v.XlH.OPEN),
                (I = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let a = e.errors[n];
                    return (0, o.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: w,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: O,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: O,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            d = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
                name: t,
                channelType: n,
                topic: a,
                bitrate: i,
                userLimit: r,
                nsfw: s,
                flags: d,
                rateLimitPerUser: o,
                defaultThreadRateLimitPerUser: c,
                autoArchiveDuration: u,
                locked: _,
                invitable: m,
                defaultAutoArchiveDuration: p,
                template: h,
                defaultReactionEmoji: g,
                rtcRegion: f,
                videoQualityMode: b,
                availableTags: A,
                defaultSortOrder: x,
                defaultForumLayout: v,
                defaultTagSetting: E,
                iconEmoji: I,
                themeColor: T,
            } = e;
            if (null == l) return !1;
            null != t && (l = l.set("name", t)),
                null != a && (l = l.set("topic", a)),
                null != i && (l = l.set("bitrate", i)),
                null != r && (l = l.set("userLimit", r)),
                null != s && (l = l.set("nsfw", s)),
                null != d && (l = l.set("flags", d)),
                null != o && (l = l.set("rateLimitPerUser", o)),
                null != c && (l = l.set("defaultThreadRateLimitPerUser", c)),
                null != u && (l = l.set("threadMetadata", { ...l.threadMetadata, autoArchiveDuration: u })),
                null != _ && (l = l.set("threadMetadata", { ...l.threadMetadata, locked: _ })),
                null != m && (l = l.set("threadMetadata", { ...l.threadMetadata, invitable: m })),
                null != p && (l = l.set("defaultAutoArchiveDuration", p)),
                null != h && (l = l.set("template", h)),
                null != n && (l = l.set("type", n)),
                void 0 !== f && (l = l.set("rtcRegion", f)),
                null != b && (l = l.set("videoQualityMode", b)),
                void 0 !== g && (l = l.set("defaultReactionEmoji", g)),
                null != A && (l = l.set("availableTags", A)),
                null != x && (l = l.set("defaultSortOrder", x)),
                null != E && (l = l.set("defaultTagSetting", E)),
                null != v && (l = l.set("defaultForumLayout", v)),
                void 0 !== I && (l = l.set("iconEmoji", I)),
                null != T && (l = l.set("themeColor", T)),
                R();
        },
        CHANNEL_SETTINGS_SET_SECTION: j,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (T = {}),
                e.invites.forEach((e) => {
                    T[e.code] = L(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == l) return !1;
            let n = !1;
            for (let e of t) n = M(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != l && M(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == l || l.id !== t) return !1;
            E = v.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (T = { ...T }), delete T[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            T = { ...T, [e.invite.code]: L(e.invite) };
        },
    }),
    D = 21552 == n.j ? k : null;
