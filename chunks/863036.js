let r, i, l, a, u, o;
n(938796);
var s = n(435558),
    d = n.n(s),
    E = n(536637),
    _ = n.n(E),
    c = n(371444),
    T = n(602137),
    S = n(855986),
    N = n(620632),
    h = n(73153),
    I = n(7584),
    f = n(815807),
    m = n(95701),
    C = n(671759),
    A = n(619019),
    p = n(537975),
    L = n(734057),
    g = n(652215);
n(37411);
let v = g.XlH.CLOSED,
    y = {},
    H = {},
    O = !1,
    R = !1,
    U = null,
    G = [
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
        "application_id",
    ];
function j(e, t, n) {
    switch (e) {
        case "topic_":
            return t ?? "";
        case "defaultAutoArchiveDuration":
            return t ?? 4320;
        case "defaultSortOrder":
            return t ?? T.T.LATEST_ACTIVITY;
        case "defaultForumLayout":
            if (n === g.rbe.GUILD_MEDIA) return c.C.GRID;
            if (null == t || t === c.C.DEFAULT) return c.C.LIST;
            return t;
        case "rateLimitPerUser_":
        case "defaultThreadRateLimitPerUser":
            return t ?? 0;
        case "defaultReactionEmoji":
            if (null == t) return null;
            if ((0, f.is)(t.emojiId)) return { emojiId: t.emojiId };
            let r = t.emojiName;
            return null == r || "" === r ? null : { emojiName: I.Ay.translateInlineEmojiToSurrogates(r) };
        default:
            return t;
    }
}
function D(e) {
    ((r = e.section),
        (i = e.subsection),
        null != a &&
            r === g.p_A.INSTANT_INVITES &&
            ((O = !0),
            N.Bo.get({ url: g.Rsh.INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    ((O = !1), h.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body }));
                },
                () => (O = !1),
            )));
}
function b() {
    ((R = !1), (v = g.XlH.CLOSED), (r = null), (a = l = null), (u = null), (H = {}));
}
let M = d().debounce(() => {
    if (null == a || null == l) return !1;
    let e = a.toJS(),
        t = l.toJS(),
        n = e.type;
    G.every((r) => {
        let i = e[r],
            l = t[r],
            a = j(r, i, n),
            u = j(r, l, n);
        return d().isEqual(a, u);
    }) &&
        a !== l &&
        ((a = l), F.emitChange());
}, 500);
function P(e) {
    return new C.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new A.A(e.inviter) : null,
        channel: (0, m.OY)(e.channel),
        guild: null != e.guild ? (0, p.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function w(e) {
    return (
        !!(function (e) {
            if (null == l || l.id !== e) return !1;
            if (l === a) {
                let t = L.A.getChannel(e);
                if (null == t) return !1;
                ((a = l = t), (u = L.A.getChannel(a.parent_id)));
            } else {
                let t = L.A.getChannel(e);
                if (null == t) return !1;
                ((l = t),
                    null != a &&
                        ((a = a
                            .set("permissionOverwrites", l.permissionOverwrites)
                            .set("availableTags", l.availableTags)),
                        (u = L.A.getChannel(a.parent_id))));
            }
            return !0;
        })(e) &&
        null != a &&
        (null != o && null == a.permissionOverwrites[o] && (o = a.getGuildId()), !0)
    );
}
function V(e) {
    let { channelId: t } = e;
    return w(t);
}
class B extends S.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(L.A);
    }
    hasChanges() {
        return a !== l;
    }
    isOpen() {
        return R;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return { invites: H, loading: O };
    }
    showNotice() {
        return this.hasChanges();
    }
    getChannel() {
        return a;
    }
    getFormState() {
        return v;
    }
    getCategory() {
        return u;
    }
    getProps() {
        return {
            submitting: v === g.XlH.SUBMITTING,
            errors: y,
            channel: a,
            section: r,
            subsection: i,
            invites: H,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: U,
        };
    }
}
let F = new B(h.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = L.A.getChannel(e.channelId);
            if (null == t) return b();
            ((v = g.XlH.OPEN),
                (a = l = t),
                (U = "location" in e && null != e.location ? e.location : null),
                (i = "subsection" in e ? e.subsection : null),
                null != a && (a = a.set("nsfw", a.isNSFW())),
                (u = L.A.getChannel(a.parent_id)),
                (o = a.getGuildId()));
            let n = a.isModeratorReportChannel() ? g.p_A.PERMISSIONS : g.p_A.OVERVIEW;
            return ((y = {}), D({ type: "CHANNEL_SETTINGS_SET_SECTION", section: r ?? n, subsection: i }), !0);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            ((v = g.XlH.SUBMITTING), (y = {}));
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            ((l = a), (v = g.XlH.OPEN));
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            ((v = g.XlH.OPEN),
                (y = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let r = e.errors[n];
                    return ((0, s.isArray)(r) ? (t[n] = r.join("\n")) : (t[n] = r), t);
                }, {})));
        },
        CHANNEL_SETTINGS_CLOSE: b,
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
                topic: r,
                bitrate: i,
                userLimit: l,
                nsfw: u,
                flags: o,
                rateLimitPerUser: s,
                defaultThreadRateLimitPerUser: d,
                autoArchiveDuration: E,
                locked: _,
                invitable: c,
                defaultAutoArchiveDuration: T,
                template: S,
                defaultReactionEmoji: N,
                rtcRegion: h,
                videoQualityMode: I,
                availableTags: f,
                defaultSortOrder: m,
                defaultForumLayout: C,
                defaultTagSetting: A,
                iconEmoji: p,
                themeColor: L,
                applicationId: g,
            } = e;
            if (null == a) return !1;
            (null != t && (a = a.set("name", t)),
                null != r && (a = a.set("topic", r)),
                null != i && (a = a.set("bitrate", i)),
                null != l && (a = a.set("userLimit", l)),
                null != u && (a = a.set("nsfw", u)),
                null != o && (a = a.set("flags", o)),
                null != s && (a = a.set("rateLimitPerUser", s)),
                null != d && (a = a.set("defaultThreadRateLimitPerUser", d)),
                null != E && (a = a.set("threadMetadata", { ...a.threadMetadata, autoArchiveDuration: E })),
                null != _ && (a = a.set("threadMetadata", { ...a.threadMetadata, locked: _ })),
                null != c && (a = a.set("threadMetadata", { ...a.threadMetadata, invitable: c })),
                null != T && (a = a.set("defaultAutoArchiveDuration", T)),
                null != S && (a = a.set("template", S)),
                null != n && (a = a.set("type", n)),
                void 0 !== h && (a = a.set("rtcRegion", h)),
                null != I && (a = a.set("videoQualityMode", I)),
                void 0 !== N && (a = a.set("defaultReactionEmoji", N)),
                null != f && (a = a.set("availableTags", f)),
                null != m && (a = a.set("defaultSortOrder", m)),
                null != A && (a = a.set("defaultTagSetting", A)),
                null != C && (a = a.set("defaultForumLayout", C)),
                void 0 !== p && (a = a.set("iconEmoji", p)),
                null != L && (a = a.set("themeColor", L)),
                void 0 !== g && (a = a.set("application_id", g)),
                M());
        },
        CHANNEL_SETTINGS_SET_SECTION: D,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            ((H = {}),
                e.invites.forEach((e) => {
                    H[e.code] = P(e);
                }));
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == a) return !1;
            let n = !1;
            for (let e of t) n = w(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != a && w(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == a || a.id !== t) return !1;
            v = g.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            ((H = { ...H }), delete H[e.code]);
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            H = { ...H, [e.invite.code]: P(e.invite) };
        },
    }),
    k = 221552 == n.j ? F : null;
n.d(t, {}, { A: k });
