let r, l, i, a, u, o;
n.d(t, { A: () => W }), n(938796);
var s = n(735438),
    d = n.n(s),
    E = n(989349),
    _ = n.n(E),
    c = n(371444),
    S = n(602137),
    T = n(17928),
    N = n(636537),
    h = n(228366),
    I = n(7584),
    m = n(815807),
    A = n(95701),
    C = n(671759),
    f = n(889227),
    p = n(860689),
    L = n(734057),
    g = n(652215),
    y = n(37411);
let v = g.XlH.CLOSED,
    H = {},
    O = {},
    R = !1,
    U = !1,
    G = null,
    j = [
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
function D(e, t, n) {
    switch (e) {
        case "topic_":
            return t ?? "";
        case "defaultAutoArchiveDuration":
            return t ?? y.cM;
        case "defaultSortOrder":
            return t ?? S.T.LATEST_ACTIVITY;
        case "defaultForumLayout":
            if (n === g.rbe.GUILD_MEDIA) return c.C.GRID;
            if (null == t || t === c.C.DEFAULT) return c.C.LIST;
            return t;
        case "rateLimitPerUser_":
        case "defaultThreadRateLimitPerUser":
            return t ?? 0;
        case "defaultReactionEmoji":
            if (null == t) return null;
            if ((0, m.is)(t.emojiId)) return { emojiId: t.emojiId };
            let r = t.emojiName;
            return null == r || "" === r ? null : { emojiName: I.Ay.translateInlineEmojiToSurrogates(r) };
        default:
            return t;
    }
}
function b(e) {
    (r = e.section),
        (l = e.subsection),
        null != a &&
            r === g.p_A.INSTANT_INVITES &&
            ((R = !0),
            N.Bo.get({ url: g.Rsh.INSTANT_INVITES(a.id), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    (R = !1), h.h.dispatch({ type: "CHANNEL_SETTINGS_LOADED_INVITES", invites: e.body });
                },
                () => (R = !1),
            ));
}
function M() {
    (U = !1), (v = g.XlH.CLOSED), (r = null), (a = i = null), (u = null), (O = {});
}
let P = d().debounce(() => {
    if (null == a || null == i) return !1;
    let e = a.toJS(),
        t = i.toJS(),
        n = e.type;
    j.every((r) => {
        let l = e[r],
            i = t[r],
            a = D(r, l, n),
            u = D(r, i, n);
        return d().isEqual(a, u);
    }) &&
        a !== i &&
        ((a = i), k.emitChange());
}, 500);
function w(e) {
    return new C.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new f.A(e.inviter) : null,
        channel: (0, A.OY)(e.channel),
        guild: null != e.guild ? (0, p.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: _()(e.created_at),
        type: e.type,
        roles: e.roles,
    });
}
function V(e) {
    return (
        !!(function (e) {
            if (null == i || i.id !== e) return !1;
            if (i === a) {
                let t = L.A.getChannel(e);
                if (null == t) return !1;
                (a = i = t), (u = L.A.getChannel(a.parent_id));
            } else {
                let t = L.A.getChannel(e);
                if (null == t) return !1;
                (i = t),
                    null != a &&
                        ((a = a
                            .set("permissionOverwrites", i.permissionOverwrites)
                            .set("availableTags", i.availableTags)),
                        (u = L.A.getChannel(a.parent_id)));
            }
            return !0;
        })(e) &&
        null != a &&
        (null != o && null == a.permissionOverwrites[o] && (o = a.getGuildId()), !0)
    );
}
function B(e) {
    let { channelId: t } = e;
    return V(t);
}
class F extends T.Ay.Store {
    static displayName = "ChannelSettingsStore";
    initialize() {
        this.waitFor(L.A);
    }
    hasChanges() {
        return a !== i;
    }
    isOpen() {
        return U;
    }
    getSection() {
        return r;
    }
    getInvites() {
        return { invites: O, loading: R };
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
            errors: H,
            channel: a,
            section: r,
            subsection: l,
            invites: O,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: G,
        };
    }
}
let k = new F(h.h, {
        CHANNEL_SETTINGS_INIT: function (e) {
            let t = L.A.getChannel(e.channelId);
            if (null == t) return M();
            (v = g.XlH.OPEN),
                (a = i = t),
                (G = "location" in e && null != e.location ? e.location : null),
                (l = "subsection" in e ? e.subsection : null),
                null != a && (a = a.set("nsfw", a.isNSFW())),
                (u = L.A.getChannel(a.parent_id)),
                (o = a.getGuildId());
            let n = a.isModeratorReportChannel() ? g.p_A.PERMISSIONS : g.p_A.OVERVIEW;
            return (H = {}), b({ type: "CHANNEL_SETTINGS_SET_SECTION", section: r ?? n, subsection: l }), !0;
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
            (v = g.XlH.SUBMITTING), (H = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
            (i = a), (v = g.XlH.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
            (v = g.XlH.OPEN),
                (H = Object.keys(e.errors ?? {}).reduce((t, n) => {
                    let r = e.errors[n];
                    return (0, s.isArray)(r) ? (t[n] = r.join("\n")) : (t[n] = r), t;
                }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: M,
        CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: B,
        CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: B,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
            let { overwriteId: t } = e;
            o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
            let {
                name: t,
                channelType: n,
                topic: r,
                bitrate: l,
                userLimit: i,
                nsfw: u,
                flags: o,
                rateLimitPerUser: s,
                defaultThreadRateLimitPerUser: d,
                autoArchiveDuration: E,
                locked: _,
                invitable: c,
                defaultAutoArchiveDuration: S,
                template: T,
                defaultReactionEmoji: N,
                rtcRegion: h,
                videoQualityMode: I,
                availableTags: m,
                defaultSortOrder: A,
                defaultForumLayout: C,
                defaultTagSetting: f,
                iconEmoji: p,
                themeColor: L,
            } = e;
            if (null == a) return !1;
            null != t && (a = a.set("name", t)),
                null != r && (a = a.set("topic", r)),
                null != l && (a = a.set("bitrate", l)),
                null != i && (a = a.set("userLimit", i)),
                null != u && (a = a.set("nsfw", u)),
                null != o && (a = a.set("flags", o)),
                null != s && (a = a.set("rateLimitPerUser", s)),
                null != d && (a = a.set("defaultThreadRateLimitPerUser", d)),
                null != E && (a = a.set("threadMetadata", { ...a.threadMetadata, autoArchiveDuration: E })),
                null != _ && (a = a.set("threadMetadata", { ...a.threadMetadata, locked: _ })),
                null != c && (a = a.set("threadMetadata", { ...a.threadMetadata, invitable: c })),
                null != S && (a = a.set("defaultAutoArchiveDuration", S)),
                null != T && (a = a.set("template", T)),
                null != n && (a = a.set("type", n)),
                void 0 !== h && (a = a.set("rtcRegion", h)),
                null != I && (a = a.set("videoQualityMode", I)),
                void 0 !== N && (a = a.set("defaultReactionEmoji", N)),
                null != m && (a = a.set("availableTags", m)),
                null != A && (a = a.set("defaultSortOrder", A)),
                null != f && (a = a.set("defaultTagSetting", f)),
                null != C && (a = a.set("defaultForumLayout", C)),
                void 0 !== p && (a = a.set("iconEmoji", p)),
                null != L && (a = a.set("themeColor", L)),
                P();
        },
        CHANNEL_SETTINGS_SET_SECTION: b,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
            (O = {}),
                e.invites.forEach((e) => {
                    O[e.code] = w(e);
                });
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            if (null == a) return !1;
            let n = !1;
            for (let e of t) n = V(e.id) || n;
            return n;
        },
        THREAD_UPDATE: function (e) {
            let { channel: t } = e;
            return null != a && V(t.id);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
            } = e;
            if (null == a || a.id !== t) return !1;
            v = g.XlH.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            (O = { ...O }), delete O[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            O = { ...O, [e.invite.code]: w(e.invite) };
        },
    }),
    W = 21552 == n.j ? k : null;
