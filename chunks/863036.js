"use strict";
let a, r, i, l, s, o;
n.d(t, { A: () => k }), n(938796);
var c = n(735438),
    d = n.n(c),
    u = n(989349),
    _ = n.n(u),
    p = n(17928),
    m = n(636537),
    h = n(228366),
    f = n(95701),
    g = n(671759),
    b = n(889227),
    v = n(860689),
    A = n(734057),
    x = n(652215);
let E = x.XlH.CLOSED,
    T = {},
    S = {},
    C = !1,
    I = !1,
    y = null,
    N = [
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
function R(e) {
    (a = e.section),
        (r = e.subsection),
        null != l &&
            a === x.p_A.INSTANT_INVITES &&
            ((C = !0),
            m.Bo.get({ url: x.Rsh.INSTANT_INVITES(l.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (C = !1), h.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (C = !1),
            ));
}
function j() {
    (I = !1), (E = x.XlH.CLOSED), (a = null), (l = i = null), (s = null), (S = {});
}
let L = d().debounce(() => {
    if (null == l || null == i) return !1;
    let e = l.toJS(),
        t = i.toJS();
    N.every((n) => e[n] === t[n]) && l !== i && ((l = i), P.emitChange());
}, 500);
function w(e) {
    return new g.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new b.A(e.inviter) : null,
        channel: (0, f.OY)(e.channel),
        guild: null != e.guild ? (0, v.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function O(e) {
    return (
        !!(function (e) {
            if (null == i || i.id !== e) return !1;
            if (i === l) {
                let t = A.A.getChannel(e);
                if (null == t) return !1;
                (l = i = t), (s = A.A.getChannel(l.parent_id));
            } else {
                let t = A.A.getChannel(e);
                if (null == t) return !1;
                (i = t),
                    null != l &&
                        ((l = l
                            .set("permissionOverwrites", i.permissionOverwrites)
                            .set("availableTags", i.availableTags)),
                        (s = A.A.getChannel(l.parent_id)));
            }
            return !0;
        })(e) &&
        null != l &&
        (null != o && null == l.permissionOverwrites[o] && (o = l.getGuildId()), !0)
    );
}
function D(e) {
    let { channelId: t } = e;
    return O(t);
}
class M extends p.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(A.A);
    }
    hasChanges() {
        return l !== i;
    }
    isOpen() {
        return I;
    }
    getSection() {
        return a;
    }
    getInvites() {
        return { invites: S, loading: C };
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
            submitting: E === x.XlH.SUBMITTING,
            errors: T,
            channel: l,
            section: a,
            subsection: r,
            invites: S,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: y,
        };
    }
}
let P = new M(h.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = A.A.getChannel(e.channelId);
            if (null == t) return j();
            (E = x.XlH.OPEN),
                (l = i = t),
                (y = "location" in e && null != e.location ? e.location : null),
                (r = "subsection" in e ? e.subsection : null),
                null != l && (l = l.set("nsfw", l.isNSFW())),
                (s = A.A.getChannel(l.parent_id)),
                (o = l.getGuildId());
            let n = l.isModeratorReportChannel() ? x.p_A.PERMISSIONS : x.p_A.OVERVIEW;
            return (T = {}), R({ type: "CHANNEL_SETTINGS_SET_SECTION", section: a ?? n, subsection: r }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (E = x.XlH.SUBMITTING), (T = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (i = l), (E = x.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (E = x.XlH.OPEN),
                (T = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let a = e.errors[n];
                    return (0, c.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: j,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: D,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: D,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
                name: t,
                channelType: n,
                topic: a,
                bitrate: r,
                userLimit: i,
                nsfw: s,
                flags: o,
                rateLimitPerUser: c,
                defaultThreadRateLimitPerUser: d,
                autoArchiveDuration: u,
                locked: _,
                invitable: p,
                defaultAutoArchiveDuration: m,
                template: h,
                defaultReactionEmoji: f,
                rtcRegion: g,
                videoQualityMode: b,
                availableTags: v,
                defaultSortOrder: A,
                defaultForumLayout: x,
                defaultTagSetting: E,
                iconEmoji: T,
                themeColor: S,
            } = e;
            if (null == l) return !1;
            null != t && (l = l.set("name", t)),
                null != a && (l = l.set("topic", a)),
                null != r && (l = l.set("bitrate", r)),
                null != i && (l = l.set("userLimit", i)),
                null != s && (l = l.set("nsfw", s)),
                null != o && (l = l.set("flags", o)),
                null != c && (l = l.set("rateLimitPerUser", c)),
                null != d && (l = l.set("defaultThreadRateLimitPerUser", d)),
                null != u && (l = l.set("threadMetadata", { ...l.threadMetadata, autoArchiveDuration: u })),
                null != _ && (l = l.set("threadMetadata", { ...l.threadMetadata, locked: _ })),
                null != p && (l = l.set("threadMetadata", { ...l.threadMetadata, invitable: p })),
                null != m && (l = l.set("defaultAutoArchiveDuration", m)),
                null != h && (l = l.set("template", h)),
                null != n && (l = l.set("type", n)),
                void 0 !== g && (l = l.set("rtcRegion", g)),
                null != b && (l = l.set("videoQualityMode", b)),
                void 0 !== f && (l = l.set("defaultReactionEmoji", f)),
                null != v && (l = l.set("availableTags", v)),
                null != A && (l = l.set("defaultSortOrder", A)),
                null != E && (l = l.set("defaultTagSetting", E)),
                null != x && (l = l.set("defaultForumLayout", x)),
                void 0 !== T && (l = l.set("iconEmoji", T)),
                null != S && (l = l.set("themeColor", S)),
                L();
        },
        CHANNEL_SETTINGS_SET_SECTION: R,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (S = {}),
                e.invites.forEach((e) => {
                    S[e.code] = w(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == l) return !1;
            let n = !1;
            for (let e of t) n = O(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != l && O(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == l || l.id !== t) return !1;
            E = x.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (S = { ...S }), delete S[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            S = { ...S, [e.invite.code]: w(e.invite) };
        },
    }),
    k = 21552 == n.j ? P : null;
