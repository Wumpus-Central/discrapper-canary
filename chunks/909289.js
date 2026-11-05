n.d(t, { v5: () => u, AY: () => _, Ay: () => m });
var i,
    r,
    a = n(435558),
    s = n(855986),
    l = n(451988),
    o = n(73153),
    d = n(46653),
    c = n(679787),
    u = (((i = {}).GUILD_SETTINGS = "guild_settings"), (i.PERK_MODAL = "perk_modal"), i),
    _ = (((r = {}).GUILD_SETTINGS = "guild_settings"), (r.PREVIEW_PANEL = "preview_panel"), r);
let E = new l.Ep();
function A() {
    return {
        guildId: null,
        draft: null,
        original: null,
        draftEnabled: !1,
        originalEnabled: !1,
        origin: null,
        owner: null,
        isSaving: !1,
        isAwaitingGuildUpdate: !1,
        saveError: null,
    };
}
let f = A();
function h() {
    E.stop();
}
function I() {
    return (null != f.guildId || !!E.isStarted()) && (h(), (f = A()), !0);
}
class p extends s.Ay.Store {
    static displayName = "GuildThemePreviewStore";
    initialize() {
        this.waitFor(d.default);
    }
    get guildId() {
        return f.guildId;
    }
    get draft() {
        return f.draft;
    }
    get original() {
        return f.original;
    }
    get draftEnabled() {
        return f.draftEnabled;
    }
    get originalEnabled() {
        return f.originalEnabled;
    }
    get origin() {
        return f.origin;
    }
    get owner() {
        return f.owner;
    }
    get isActive() {
        return null != f.guildId;
    }
    get isSaving() {
        return f.isSaving;
    }
    get isAwaitingGuildUpdate() {
        return f.isAwaitingGuildUpdate;
    }
    get saveError() {
        return f.saveError;
    }
    hasChanges() {
        return null != f.guildId && (f.draftEnabled !== f.originalEnabled || !(0, a.isEqual)(f.draft, f.original));
    }
}
let m = new p(o.h, {
    GUILD_THEME_PREVIEW_START: function (e) {
        let { guildId: t, draft: n, original: i, draftEnabled: r, originalEnabled: a, origin: s, owner: l } = e;
        (h(),
            (f = {
                guildId: t,
                draft: (0, c.z_)(n),
                original: (0, c.z_)(i),
                draftEnabled: r,
                originalEnabled: a,
                origin: s,
                owner: l ?? f.owner,
                isSaving: !1,
                isAwaitingGuildUpdate: !1,
                saveError: null,
            }));
    },
    GUILD_THEME_PREVIEW_SELECT_PRESET: function (e) {
        let { presetId: t } = e;
        if (null == f.guildId) return !1;
        let n = { presetId: t, customUserThemeSettings: void 0 };
        return (
            (!(0, a.isEqual)(f.draft, n) || !f.draftEnabled) &&
            (h(), (f = { ...f, draft: n, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: i } = e;
        if (null == f.guildId) return !1;
        let r = {
            presetId: void 0,
            customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: i },
        };
        return (
            (!(0, a.isEqual)(f.draft, r) || !f.draftEnabled) &&
            (h(), (f = { ...f, draft: r, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function (e) {
        let { owner: t } = e;
        return null != f.guildId && f.owner !== t && ((f = { ...f, owner: t }), !0);
    },
    GUILD_THEME_PREVIEW_END: I,
    GUILD_THEME_PREVIEW_SAVE_START: function () {
        (h(), (f = { ...f, isSaving: !0, isAwaitingGuildUpdate: !1, saveError: null }));
    },
    GUILD_THEME_PREVIEW_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: n } = e;
        if (null == f.guildId || t !== f.guildId) return !1;
        let i = n?.themeSettings ?? null,
            r = n?.enabled ?? !1;
        return (
            (f = {
                ...f,
                draft: (0, c.z_)(i),
                original: (0, c.z_)(i),
                draftEnabled: r,
                originalEnabled: r,
                isSaving: !1,
                isAwaitingGuildUpdate: !0,
                saveError: null,
            }),
            h(),
            E.start(1e4, () => {
                f.isAwaitingGuildUpdate && o.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
            }),
            !0
        );
    },
    GUILD_THEME_PREVIEW_SAVE_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        return (
            null != f.guildId &&
            t === f.guildId &&
            (h(), (f = { ...f, isSaving: !1, isAwaitingGuildUpdate: !1, saveError: n }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t } = e;
        return null != f.guildId && t === f.guildId && I();
    },
    USER_SETTINGS_MODAL_OPEN: I,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        return null != f.guildId && t !== f.guildId && (I(), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != f.guildId && t.id === f.guildId && (I(), !0);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === d.default.getId() && null != f.guildId && t === f.guildId && (I(), !0);
    },
    GUILD_UPDATE: function (e) {
        var t;
        let n,
            i,
            { guild: r } = e;
        return (
            !!f.isAwaitingGuildUpdate &&
            null != f.guildId &&
            r.id === f.guildId &&
            void 0 !== r.theme &&
            ((t = (0, c.UW)(r.theme)),
            (n = t?.enabled ?? !1),
            (i = t?.themeSettings ?? null),
            !!(n === f.originalEnabled && (0, a.isEqual)(i, f.original)) && (I(), !0))
        );
    },
    LOGOUT: I,
});
