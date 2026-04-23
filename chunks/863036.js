let l, a, i, r, s, d;
n.d(t, { A: () => P }), n(938796);
var o = n(735438),
    c = n.n(o),
    u = n(989349),
    _ = n.n(u),
    m = n(311907),
    h = n(562465),
    g = n(73153),
    p = n(95701),
    x = n(671759),
    A = n(427157),
    f = n(860689),
    v = n(734057),
    b = n(652215);
let N = b.XlH.CLOSED,
    E = {},
    S = {},
    T = !1,
    j = !1,
    C = null,
    I = [
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
function y(e) {
    (l = e.section),
        (a = e.subsection),
        null != r &&
            l === b.p_A.INSTANT_INVITES &&
            ((T = !0),
            h.Bo.get({ url: b.Rsh.INSTANT_INVITES(r.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (T = !1), g.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (T = !1),
            ));
}
function k() {
    (j = !1), (N = b.XlH.CLOSED), (l = null), (r = i = null), (s = null), (S = {});
}
let w = c().debounce(() => {
    if (null == r || null == i) return !1;
    let e = r.toJS(),
        t = i.toJS();
    I.every((n) => e[n] === t[n]) && r !== i && ((r = i), O.emitChange());
}, 500);
function L(e) {
    return new x.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new A.A(e.inviter) : null,
        channel: (0, p.OY)(e.channel),
        guild: null != e.guild ? (0, f.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function D(e) {
    return (
        !!(function (e) {
            if (null == i || i.id !== e) return !1;
            if (i === r) {
                let t = v.A.getChannel(e);
                if (null == t) return !1;
                (r = i = t), (s = v.A.getChannel(r.parent_id));
            } else {
                let t = v.A.getChannel(e);
                if (null == t) return !1;
                (i = t),
                    null != r &&
                        ((r = r
                            .set("permissionOverwrites", i.permissionOverwrites)
                            .set("availableTags", i.availableTags)),
                        (s = v.A.getChannel(r.parent_id)));
            }
            return !0;
        })(e) &&
        null != r &&
        (null != d && null == r.permissionOverwrites[d] && (d = r.getGuildId()), !0)
    );
}
function R(e) {
    let { channelId: t } = e;
    return D(t);
}
class M extends m.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(v.A);
    }
    hasChanges() {
        return r !== i;
    }
    isOpen() {
        return j;
    }
    getSection() {
        return l;
    }
    getInvites() {
        return { invites: S, loading: T };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return r;
    }
    getFormState() {
        return N;
    }
    getCategory() {
        return s;
    }
    getProps() {
        return {
            submitting: N === b.XlH.SUBMITTING,
            errors: E,
            channel: r,
            section: l,
            subsection: a,
            invites: S,
            selectedOverwriteId: d,
            hasChanges: this.hasChanges(),
            analyticsLocation: C,
        };
    }
}
let O = new M(g.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = v.A.getChannel(e.channelId);
            if (null == t) return k();
            (N = b.XlH.OPEN),
                (r = i = t),
                (C = "location" in e && null != e.location ? e.location : null),
                (a = "subsection" in e ? e.subsection : null),
                null != r && (r = r.set("nsfw", r.isNSFW())),
                (s = v.A.getChannel(r.parent_id)),
                (d = r.getGuildId());
            let n = r.isModeratorReportChannel() ? b.p_A.PERMISSIONS : b.p_A.OVERVIEW;
            return (E = {}), y({ type: "CHANNEL_SETTINGS_SET_SECTION", section: l ?? n, subsection: a }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (N = b.XlH.SUBMITTING), (E = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (i = r), (N = b.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (N = b.XlH.OPEN),
                (E = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let l = e.errors[n];
                    return (0, o.isArray)(l) ? (t[n] = l.join("\n")) : (t[n] = l), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: k,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: R,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: R,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            d = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
                name: t,
                channelType: n,
                topic: l,
                bitrate: a,
                userLimit: i,
                nsfw: s,
                flags: d,
                rateLimitPerUser: o,
                defaultThreadRateLimitPerUser: c,
                autoArchiveDuration: u,
                locked: _,
                invitable: m,
                defaultAutoArchiveDuration: h,
                template: g,
                defaultReactionEmoji: p,
                rtcRegion: x,
                videoQualityMode: A,
                availableTags: f,
                defaultSortOrder: v,
                defaultForumLayout: b,
                defaultTagSetting: N,
                iconEmoji: E,
                themeColor: S,
            } = e;
            if (null == r) return !1;
            null != t && (r = r.set("name", t)),
                null != l && (r = r.set("topic", l)),
                null != a && (r = r.set("bitrate", a)),
                null != i && (r = r.set("userLimit", i)),
                null != s && (r = r.set("nsfw", s)),
                null != d && (r = r.set("flags", d)),
                null != o && (r = r.set("rateLimitPerUser", o)),
                null != c && (r = r.set("defaultThreadRateLimitPerUser", c)),
                null != u && (r = r.set("threadMetadata", { ...r.threadMetadata, autoArchiveDuration: u })),
                null != _ && (r = r.set("threadMetadata", { ...r.threadMetadata, locked: _ })),
                null != m && (r = r.set("threadMetadata", { ...r.threadMetadata, invitable: m })),
                null != h && (r = r.set("defaultAutoArchiveDuration", h)),
                null != g && (r = r.set("template", g)),
                null != n && (r = r.set("type", n)),
                void 0 !== x && (r = r.set("rtcRegion", x)),
                null != A && (r = r.set("videoQualityMode", A)),
                void 0 !== p && (r = r.set("defaultReactionEmoji", p)),
                null != f && (r = r.set("availableTags", f)),
                null != v && (r = r.set("defaultSortOrder", v)),
                null != N && (r = r.set("defaultTagSetting", N)),
                null != b && (r = r.set("defaultForumLayout", b)),
                void 0 !== E && (r = r.set("iconEmoji", E)),
                null != S && (r = r.set("themeColor", S)),
                w();
        },
        CHANNEL_SETTINGS_SET_SECTION: y,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (S = {}),
                e.invites.forEach((e) => {
                    S[e.code] = L(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == r) return !1;
            let n = !1;
            for (let e of t) n = D(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != r && D(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == r || r.id !== t) return !1;
            N = b.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (S = { ...S }), delete S[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            S = { ...S, [e.invite.code]: L(e.invite) };
        },
    }),
    P = 21552 == n.j ? O : null;
