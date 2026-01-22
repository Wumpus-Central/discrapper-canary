let r, i, a, s, o, l;
n.d(t, { A: () => ee }), n(938796), n(896048);
var c,
    u = n(735438),
    d = n.n(u),
    f = n(989349),
    p = n.n(f),
    _ = n(311907),
    h = n(562465),
    m = n(73153),
    g = n(95701),
    E = n(671759),
    b = n(427157),
    y = n(860689),
    O = n(734057),
    A = n(652215);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = A.XlH.CLOSED,
    N = {},
    R = {},
    w = !1,
    P = !1,
    D = null,
    x = [
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
function L(e) {
    if (null == a || a.id !== e) return !1;
    if (a === s) {
        let t = O.A.getChannel(e);
        if (null == t) return !1;
        (s = a = t), (o = O.A.getChannel(s.parent_id));
    } else {
        let t = O.A.getChannel(e);
        if (null == t) return !1;
        (a = t),
            null != s &&
                ((s = s.set("permissionOverwrites", a.permissionOverwrites)), (o = O.A.getChannel(s.parent_id)));
    }
    return !0;
}
function j(e) {
    let t = O.A.getChannel(e.channelId);
    if (null == t) return k();
    (C = A.XlH.OPEN),
        (s = a = t),
        (D = "location" in e && null != e.location ? e.location : null),
        (i = "subsection" in e ? e.subsection : null),
        null != s && (s = s.set("nsfw", s.isNSFW())),
        (o = O.A.getChannel(s.parent_id)),
        (l = s.getGuildId());
    let n = s.isModeratorReportChannel() ? A.p_A.PERMISSIONS : A.p_A.OVERVIEW;
    return (
        (N = {}),
        M({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != r ? r : n,
            subsection: i,
        }),
        !0
    );
}
function M(e) {
    (r = e.section),
        (i = e.subsection),
        null != s &&
            r === A.p_A.INSTANT_INVITES &&
            ((w = !0),
            h.Bo.get({
                url: A.Rsh.INSTANT_INVITES(s.id),
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) => {
                    (w = !1),
                        m.h.dispatch({
                            type: "CHANNEL_SETTINGS_LOADED_INVITES",
                            invites: e.body,
                        });
                },
                () => (w = !1),
            ));
}
function k() {
    (P = !1), (C = A.XlH.CLOSED), (r = null), (s = a = null), (o = null), (R = {});
}
function U() {
    (C = A.XlH.SUBMITTING), (N = {});
}
function G() {
    (a = s), (C = A.XlH.OPEN);
}
function V(e) {
    var t;
    (C = A.XlH.OPEN),
        (N = Object.keys(null != (t = e.errors) ? t : {}).reduce((t, n) => {
            let r = e.errors[n];
            return (0, u.isArray)(r) ? (t[n] = r.join("\n")) : (t[n] = r), t;
        }, {}));
}
let F = d().debounce(() => {
    if (null == s || null == a) return !1;
    let e = s.toJS(),
        t = a.toJS();
    x.every((n) => e[n] === t[n]) && s !== a && ((s = a), J.emitChange());
}, 500);
function B(e) {
    let {
        name: t,
        channelType: n,
        topic: r,
        bitrate: i,
        userLimit: a,
        nsfw: o,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        autoArchiveDuration: d,
        locked: f,
        invitable: p,
        defaultAutoArchiveDuration: _,
        template: h,
        defaultReactionEmoji: m,
        rtcRegion: g,
        videoQualityMode: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: O,
        defaultTagSetting: A,
        iconEmoji: v,
        themeColor: I,
    } = e;
    if (null == s) return !1;
    null != t && (s = s.set("name", t)),
        null != r && (s = s.set("topic", r)),
        null != i && (s = s.set("bitrate", i)),
        null != a && (s = s.set("userLimit", a)),
        null != o && (s = s.set("nsfw", o)),
        null != l && (s = s.set("flags", l)),
        null != c && (s = s.set("rateLimitPerUser", c)),
        null != u && (s = s.set("defaultThreadRateLimitPerUser", u)),
        null != d && (s = s.set("threadMetadata", T(S({}, s.threadMetadata), { autoArchiveDuration: d }))),
        null != f && (s = s.set("threadMetadata", T(S({}, s.threadMetadata), { locked: f }))),
        null != p && (s = s.set("threadMetadata", T(S({}, s.threadMetadata), { invitable: p }))),
        null != _ && (s = s.set("defaultAutoArchiveDuration", _)),
        null != h && (s = s.set("template", h)),
        null != n && (s = s.set("type", n)),
        void 0 !== g && (s = s.set("rtcRegion", g)),
        null != E && (s = s.set("videoQualityMode", E)),
        void 0 !== m && (s = s.set("defaultReactionEmoji", m)),
        null != b && (s = s.set("availableTags", b)),
        null != y && (s = s.set("defaultSortOrder", y)),
        null != A && (s = s.set("defaultTagSetting", A)),
        null != O && (s = s.set("defaultForumLayout", O)),
        void 0 !== v && (s = s.set("iconEmoji", v)),
        null != I && (s = s.set("themeColor", I)),
        F();
}
function H(e) {
    return new E.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new b.A(e.inviter) : null,
        channel: (0, g.OY)(e.channel),
        guild: null != e.guild ? (0, y.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: p()(e.created_at),
        type: e.type,
    });
}
function Y(e) {
    (R = {}),
        e.invites.forEach((e) => {
            R[e.code] = H(e);
        });
}
function W(e) {
    (R = S({}, R)), delete R[e.code];
}
function K(e) {
    R = T(S({}, R), { [e.invite.code]: H(e.invite) });
}
function z(e) {
    return !!L(e) && null != s && (null != l && null == s.permissionOverwrites[l] && (l = s.getGuildId()), !0);
}
function q(e) {
    let { channels: t } = e;
    if (null == s) return !1;
    let n = !1;
    for (let e of t) n = z(e.id) || n;
    return n;
}
function X(e) {
    let { channelId: t } = e;
    return z(t);
}
function Z(e) {
    let {
        channel: { id: t },
    } = e;
    if (null == s || s.id !== t) return !1;
    C = A.XlH.CLOSED;
}
function Q(e) {
    let { overwriteId: t } = e;
    l = t;
}
class $ extends (c = _.Ay.Store) {
    initialize() {
        this.waitFor(O.A);
    }
    hasChanges() {
        return s !== a;
    }
    isOpen() {
        return P;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return {
            invites: R,
            loading: w,
        };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return s;
    }
    getFormState() {
        return C;
    }
    getCategory() {
        return o;
    }
    getProps() {
        return {
            submitting: C === A.XlH.SUBMITTING,
            errors: N,
            channel: s,
            section: r,
            subsection: i,
            invites: R,
            selectedOverwriteId: l,
            hasChanges: this.hasChanges(),
            analyticsLocation: D,
        };
    }
}
v($, "displayName", "ChannelSettingsStore");
let J = new $(m.h, {
        CHANNEL_SETTINGS_INIT: j,
        CHANNEL_SETTINGS_SUBMIT: U,
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: G,
        CHANNEL_SETTINGS_SUBMIT_FAILURE: V,
        CHANNEL_SETTINGS_CLOSE: k,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: X,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: X,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: Q,
        CHANNEL_SETTINGS_UPDATE: B,
        CHANNEL_SETTINGS_SET_SECTION: M,
        CHANNEL_SETTINGS_LOADED_INVITES: Y,
        CHANNEL_UPDATES: q,
        CHANNEL_DELETE: Z,
        INSTANT_INVITE_REVOKE_SUCCESS: W,
        INSTANT_INVITE_CREATE_SUCCESS: K,
    }),
    ee = J;
