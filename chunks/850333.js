let i, r;
n.d(t, { A: () => V });
var a = n(855986),
    s = n(554146),
    l = n(73153),
    o = n(826673),
    d = n(576254),
    c = n(189916),
    u = n(416858),
    _ = n(284016),
    E = n(973654),
    A = n(413599),
    h = n(964404),
    f = n(253932),
    I = n(617617),
    p = n(185928);
function m() {
    return h.Ay.useSystemTheme === p.Q_.ON && A.A.isSameAsDeviceThemeEnabled();
}
var g = n(95701),
    T = n(734057),
    S = n(287809),
    N = n(879610),
    C = n(427262),
    O = n(644235),
    R = n(385803),
    L = n(211824);
let y = !0,
    D = !1,
    b = !1;
function v(e) {
    return !(0, c.oB)(e.id) || null == S.default.getCurrentUser() || !(0, d.$X)(L.vB.CLIENT_THEME);
}
function P(e) {
    if (null == e) return;
    let t = R.ag[e];
    return null != t && v(t) ? t : void 0;
}
function M() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    return (0, c.oB)(e) ? P(e) : void 0;
}
function U() {
    (y && (i = M()), (b = !1), (D = !1));
}
function w() {
    var e;
    let t = !1;
    if (null == i || v(i)) {
        if (null == i) {
            let e = M();
            null != e && ((i = e), (t = !0));
        }
    } else ((i = void 0), (t = !0));
    let n =
        ((e = S.default.getCurrentUser()),
        (0, c.j5)(e, L.vB.CLIENT_THEME) ? !u.zL.getFeatureValue(e) : !N.Ay.canUseClientThemes(e));
    if (n === y) return t;
    ((y = n), (b = !1));
}
function G() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    if (null == e) {
        if (null == i) return !1;
        i = void 0;
    } else {
        let t = P(e);
        if (t === i) return !1;
        i = t;
    }
}
function x() {
    return m();
}
function k() {
    return !0;
}
function F() {
    let e = f.eh.getSetting().backgroundGradientPresetId;
    if ((h.Ay.useSystemTheme !== p.Q_.ON || null == e || m() || (0, E.k7)(p.Q_.OFF), null == e)) {
        null != i && (i = void 0);
        return;
    }
    let t = R.ag[e];
    if (null != t) {
        if (!v(t)) {
            i = void 0;
            return;
        }
        i?.id !== t.id && (i = t);
    }
}
class B extends a.Ay.PersistedStore {
    static displayName = "ClientThemesBackgroundStore";
    static persistKey = "ClientThemesBackgroundStore";
    migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
    initialize(e) {
        ((b = !1),
            null != e && ((i = P(e.gradientPresetId)), (y = !0 !== e.canUseClientThemes)),
            this.waitFor(T.A, _.A, A.A, h.Ay, I.A, S.default),
            this.syncWith([S.default], w),
            this.syncWith([_.A], G));
    }
    getState() {
        return y
            ? !b && null != i && (0, c.oB)(i.id)
                ? { gradientPresetId: i.id }
                : {}
            : { gradientPresetId: i?.id, canUseClientThemes: !0 };
    }
    get gradientPreset() {
        if (m()) {
            let e = P(A.A.getSyncedClientTheme(A.A.systemTheme)?.backgroundGradientPresetId);
            return y ? (b ? i : null != e && (0, c.oB)(e.id) ? e : void 0) : e;
        }
        return null != i && v(i) ? i : void 0;
    }
    getLinearGradient() {
        return null == this.gradientPreset ? null : (0, O.FK)(this.gradientPreset);
    }
    get hasHiddenHexagonCampaignPreset() {
        let e = f.eh.getSetting().backgroundGradientPresetId;
        return (0, c.oB)(e) && null == this.gradientPreset;
    }
    get isPreview() {
        return y;
    }
    get isCoachmark() {
        return D;
    }
    get mobilePendingThemeIndex() {
        return r;
    }
}
let V = new B(l.h, {
    UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
        let { presetId: t } = e;
        if (((b = y && null != t && !(0, c.oB)(t)), null == t)) {
            i = void 0;
            return;
        }
        i = R.ag[t];
    },
    UPDATE_MOBILE_PENDING_THEME_INDEX: function (e) {
        let { mobileThemesIndex: t } = e;
        if (null == t) {
            r = void 0;
            return;
        }
        r = t;
    },
    RESET_PREVIEW_CLIENT_THEME: function (e) {
        ((i = y ? M() : void 0), (b = !1));
    },
    CLIENT_THEMES_EDITOR_CLOSE: U,
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e,
            i = S.default.getCurrentUser();
        if (null == t || null == n || (0, o.k8)(s.M.CLIENT_THEMES_COACHMARK) || !(0, C.G2)(i)) return;
        let r = T.A.getChannel(t);
        null != r && (0, g.ke)(r.type) && (D = !0);
    },
    LOGOUT: U,
    CACHE_LOADED: F,
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: F,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: F,
    UNSYNCED_USER_SETTINGS_UPDATE: F,
    USER_SETTINGS_PROTO_UPDATE: F,
    SYSTEM_THEME_CHANGE: x,
    UPDATE_SYNCED_CLIENT_THEME: x,
    SET_SAME_AS_DEVICE_THEME_ENABLED: k,
    CLEAR_SYNCED_CLIENT_THEMES: k,
});
