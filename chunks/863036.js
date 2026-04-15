"use strict";
let r, i, s, a, o, l;
n.d(t, { A: () => Z }), n(938796);
var u = n(735438),
    c = n.n(u),
    d = n(989349),
    _ = n.n(d),
    f = n(311907),
    p = n(562465),
    h = n(73153),
    m = n(95701),
    E = n(671759),
    g = n(427157),
    A = n(860689),
    I = n(734057),
    T = n(652215);
let S = T.XlH.CLOSED,
    y = {},
    v = {},
    N = !1,
    C = !1,
    R = null,
    O = [
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
                ((a = a.set("permissionOverwrites", s.permissionOverwrites).set("availableTags", s.availableTags)),
                (o = I.A.getChannel(a.parent_id)));
    }
    return !0;
}
function D(e) {
    let t = I.A.getChannel(e.channelId);
    if (null == t) return w();
    (S = T.XlH.OPEN),
        (a = s = t),
        (R = "location" in e && null != e.location ? e.location : null),
        (i = "subsection" in e ? e.subsection : null),
        null != a && (a = a.set("nsfw", a.isNSFW())),
        (o = I.A.getChannel(a.parent_id)),
        (l = a.getGuildId());
    let n = a.isModeratorReportChannel() ? T.p_A.PERMISSIONS : T.p_A.OVERVIEW;
    return (y = {}), L({ type: "CHANNEL_SETTINGS_SET_SECTION", section: r ?? n, subsection: i }), !0;
}
function L(e) {
    (r = e.section),
        (i = e.subsection),
        null != a &&
            r === T.p_A.INSTANT_INVITES &&
            ((N = !0),
            p.Bo.get({ url: T.Rsh.INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (N = !1), h.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (N = !1),
            ));
}
function w() {
    (C = !1), (S = T.XlH.CLOSED), (r = null), (a = s = null), (o = null), (v = {});
}
function M() {
    (S = T.XlH.SUBMITTING), (y = {});
}
function P() {
    (s = a), (S = T.XlH.OPEN);
}
function x(e) {
    (S = T.XlH.OPEN),
        (y = Object.keys(e.errors ?? {}).reduce((t, n) => {
            let r = e.errors[n];
            return (0, u.isArray)(r) ? (t[n] = r.join("\n")) : (t[n] = r), t;
        }, {}));
}
let k = c().debounce(() => {
    if (null == a || null == s) return !1;
    let e = a.toJS(),
        t = s.toJS();
    O.every((n) => e[n] === t[n]) && a !== s && ((a = s), q.emitChange());
}, 500);
function U(e) {
    let {
        name: t,
        channelType: n,
        topic: r,
        bitrate: i,
        userLimit: s,
        nsfw: o,
        flags: l,
        rateLimitPerUser: u,
        defaultThreadRateLimitPerUser: c,
        autoArchiveDuration: d,
        locked: _,
        invitable: f,
        defaultAutoArchiveDuration: p,
        template: h,
        defaultReactionEmoji: m,
        rtcRegion: E,
        videoQualityMode: g,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: S,
        iconEmoji: y,
        themeColor: v,
    } = e;
    if (null == a) return !1;
    null != t && (a = a.set("name", t)),
        null != r && (a = a.set("topic", r)),
        null != i && (a = a.set("bitrate", i)),
        null != s && (a = a.set("userLimit", s)),
        null != o && (a = a.set("nsfw", o)),
        null != l && (a = a.set("flags", l)),
        null != u && (a = a.set("rateLimitPerUser", u)),
        null != c && (a = a.set("defaultThreadRateLimitPerUser", c)),
        null != d && (a = a.set("threadMetadata", { ...a.threadMetadata, autoArchiveDuration: d })),
        null != _ && (a = a.set("threadMetadata", { ...a.threadMetadata, locked: _ })),
        null != f && (a = a.set("threadMetadata", { ...a.threadMetadata, invitable: f })),
        null != p && (a = a.set("defaultAutoArchiveDuration", p)),
        null != h && (a = a.set("template", h)),
        null != n && (a = a.set("type", n)),
        void 0 !== E && (a = a.set("rtcRegion", E)),
        null != g && (a = a.set("videoQualityMode", g)),
        void 0 !== m && (a = a.set("defaultReactionEmoji", m)),
        null != A && (a = a.set("availableTags", A)),
        null != I && (a = a.set("defaultSortOrder", I)),
        null != S && (a = a.set("defaultTagSetting", S)),
        null != T && (a = a.set("defaultForumLayout", T)),
        void 0 !== y && (a = a.set("iconEmoji", y)),
        null != v && (a = a.set("themeColor", v)),
        k();
}
function G(e) {
    return new E.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new g.A(e.inviter) : null,
        channel: (0, m.OY)(e.channel),
        guild: null != e.guild ? (0, A.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function F(e) {
    (v = {}),
        e.invites.forEach((e) => {
            v[e.code] = G(e);
        });
}
function V(e) {
    (v = { ...v }), delete v[e.code];
}
function B(e) {
    v = { ...v, [e.invite.code]: G(e.invite) };
}
function H(e) {
    return !!b(e) && null != a && (null != l && null == a.permissionOverwrites[l] && (l = a.getGuildId()), !0);
}
function j(e) {
    let { channels: t } = e;
    if (null == a) return !1;
    let n = !1;
    for (let e of t) n = H(e.id) || n;
    return n;
}
function Y(e) {
    let { channel: t } = e;
    return null != a && H(t.id);
}
function W(e) {
    let { channelId: t } = e;
    return H(t);
}
function K(e) {
    let {
        channel: { id: t },
    } = e;
    if (null == a || a.id !== t) return !1;
    S = T.XlH.CLOSED;
}
function $(e) {
    let { overwriteId: t } = e;
    l = t;
}
class z extends f.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(I.A);
    }
    hasChanges() {
        return a !== s;
    }
    isOpen() {
        return C;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return { invites: v, loading: N };
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
            errors: y,
            channel: a,
            section: r,
            subsection: i,
            invites: v,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: R,
        };
    }
}
let q = new z(h.h, {
        CHANNEL_SETTINGS_INIT: D,
        CHANNEL_SETTINGS_SUBMIT: M,
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: P,
        CHANNEL_SETTINGS_SUBMIT_FAILURE: x,
        CHANNEL_SETTINGS_CLOSE: w,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: W,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: W,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: $,
        CHANNEL_SETTINGS_UPDATE: U,
        CHANNEL_SETTINGS_SET_SECTION: L,
        CHANNEL_SETTINGS_LOADED_INVITES: F,
        CHANNEL_UPDATES: j,
        THREAD_UPDATE: Y,
        CHANNEL_DELETE: K,
        INSTANT_INVITE_REVOKE_SUCCESS: V,
        INSTANT_INVITE_CREATE_SUCCESS: B,
    }),
    Z = q;
