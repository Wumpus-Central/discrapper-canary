"use strict";
let r, i, a, s, o, l;
n.d(t, { A: () => q }), n(938796);
var u = n(735438),
    c = n.n(u),
    d = n(989349),
    _ = n.n(d),
    f = n(311907),
    p = n(562465),
    h = n(73153),
    m = n(95701),
    g = n(671759),
    E = n(427157),
    A = n(860689),
    I = n(734057),
    T = n(652215);
let S = T.XlH.CLOSED,
    y = {},
    v = {},
    C = !1,
    N = !1,
    b = null,
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
function O(e) {
    if (null == a || a.id !== e) return !1;
    if (a === s) {
        let t = I.A.getChannel(e);
        if (null == t) return !1;
        (s = a = t), (o = I.A.getChannel(s.parent_id));
    } else {
        let t = I.A.getChannel(e);
        if (null == t) return !1;
        (a = t),
            null != s &&
                ((s = s.set("permissionOverwrites", a.permissionOverwrites)), (o = I.A.getChannel(s.parent_id)));
    }
    return !0;
}
function D(e) {
    let t = I.A.getChannel(e.channelId);
    if (null == t) return w();
    (S = T.XlH.OPEN),
        (s = a = t),
        (b = "location" in e && null != e.location ? e.location : null),
        (i = "subsection" in e ? e.subsection : null),
        null != s && (s = s.set("nsfw", s.isNSFW())),
        (o = I.A.getChannel(s.parent_id)),
        (l = s.getGuildId());
    let n = s.isModeratorReportChannel() ? T.p_A.PERMISSIONS : T.p_A.OVERVIEW;
    return (y = {}), L({ type: "CHANNEL_SETTINGS_SET_SECTION", section: r ?? n, subsection: i }), !0;
}
function L(e) {
    (r = e.section),
        (i = e.subsection),
        null != s &&
            r === T.p_A.INSTANT_INVITES &&
            ((C = !0),
            p.Bo.get({ url: T.Rsh.INSTANT_INVITES(s.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (C = !1), h.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (C = !1),
            ));
}
function w() {
    (N = !1), (S = T.XlH.CLOSED), (r = null), (s = a = null), (o = null), (v = {});
}
function x() {
    (S = T.XlH.SUBMITTING), (y = {});
}
function M() {
    (a = s), (S = T.XlH.OPEN);
}
function P(e) {
    (S = T.XlH.OPEN),
        (y = Object.keys(e.errors ?? {}).reduce((t, n) => {
            let r = e.errors[n];
            return (0, u.isArray)(r) ? (t[n] = r.join("\n")) : (t[n] = r), t;
        }, {}));
}
let k = c().debounce(() => {
    if (null == s || null == a) return !1;
    let e = s.toJS(),
        t = a.toJS();
    R.every((n) => e[n] === t[n]) && s !== a && ((s = a), $.emitChange());
}, 500);
function U(e) {
    let {
        name: t,
        channelType: n,
        topic: r,
        bitrate: i,
        userLimit: a,
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
        rtcRegion: g,
        videoQualityMode: E,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: S,
        iconEmoji: y,
        themeColor: v,
    } = e;
    if (null == s) return !1;
    null != t && (s = s.set("name", t)),
        null != r && (s = s.set("topic", r)),
        null != i && (s = s.set("bitrate", i)),
        null != a && (s = s.set("userLimit", a)),
        null != o && (s = s.set("nsfw", o)),
        null != l && (s = s.set("flags", l)),
        null != u && (s = s.set("rateLimitPerUser", u)),
        null != c && (s = s.set("defaultThreadRateLimitPerUser", c)),
        null != d && (s = s.set("threadMetadata", { ...s.threadMetadata, autoArchiveDuration: d })),
        null != _ && (s = s.set("threadMetadata", { ...s.threadMetadata, locked: _ })),
        null != f && (s = s.set("threadMetadata", { ...s.threadMetadata, invitable: f })),
        null != p && (s = s.set("defaultAutoArchiveDuration", p)),
        null != h && (s = s.set("template", h)),
        null != n && (s = s.set("type", n)),
        void 0 !== g && (s = s.set("rtcRegion", g)),
        null != E && (s = s.set("videoQualityMode", E)),
        void 0 !== m && (s = s.set("defaultReactionEmoji", m)),
        null != A && (s = s.set("availableTags", A)),
        null != I && (s = s.set("defaultSortOrder", I)),
        null != S && (s = s.set("defaultTagSetting", S)),
        null != T && (s = s.set("defaultForumLayout", T)),
        void 0 !== y && (s = s.set("iconEmoji", y)),
        null != v && (s = s.set("themeColor", v)),
        k();
}
function G(e) {
    return new g.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new E.A(e.inviter) : null,
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
function j(e) {
    return !!O(e) && null != s && (null != l && null == s.permissionOverwrites[l] && (l = s.getGuildId()), !0);
}
function H(e) {
    let { channels: t } = e;
    if (null == s) return !1;
    let n = !1;
    for (let e of t) n = j(e.id) || n;
    return n;
}
function Y(e) {
    let { channelId: t } = e;
    return j(t);
}
function W(e) {
    let {
        channel: { id: t },
    } = e;
    if (null == s || s.id !== t) return !1;
    S = T.XlH.CLOSED;
}
function K(e) {
    let { overwriteId: t } = e;
    l = t;
}
class z extends f.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(I.A);
    }
    hasChanges() {
        return s !== a;
    }
    isOpen() {
        return N;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return { invites: v, loading: C };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return s;
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
            channel: s,
            section: r,
            subsection: i,
            invites: v,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: b,
        };
    }
}
let $ = new z(h.h, {
        CHANNEL_SETTINGS_INIT: D,
        CHANNEL_SETTINGS_SUBMIT: x,
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: M,
        CHANNEL_SETTINGS_SUBMIT_FAILURE: P,
        CHANNEL_SETTINGS_CLOSE: w,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: Y,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: Y,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: K,
        CHANNEL_SETTINGS_UPDATE: U,
        CHANNEL_SETTINGS_SET_SECTION: L,
        CHANNEL_SETTINGS_LOADED_INVITES: F,
        CHANNEL_UPDATES: H,
        CHANNEL_DELETE: W,
        INSTANT_INVITE_REVOKE_SUCCESS: V,
        INSTANT_INVITE_CREATE_SUCCESS: B,
    }),
    q = $;
