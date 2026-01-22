let r, i, a, s, o, l, c, u, d, f, p, _;
n.d(t, { A: () => H });
var h,
    m = n(575593),
    g = n(311907),
    E = n(73153),
    b = n(652215);
function y(e, t, n) {
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
let O = b.XlH.CLOSED,
    A = {};
function v(e) {
    (p = e.guild), (O = b.XlH.OPEN), (A = {}), (_ = e.source);
}
function S() {
    (O = b.XlH.CLOSED), (A = {}), (_ = void 0);
}
function I() {
    (O = b.XlH.SUBMITTING), (A = {});
}
function T(e) {
    (p = e.guild), (A = {});
}
function C(e) {
    var t;
    if (O !== b.XlH.SUBMITTING) return !1;
    (O = b.XlH.OPEN), (A = null != (t = e.errors) ? t : {});
}
function N(e) {
    (O = b.XlH.OPEN), (A = e.errors);
}
function R(e) {
    let { avatar: t } = e;
    r = t;
}
function w(e) {
    let { item: t } = e;
    t.type === m.R.AVATAR_DECORATION
        ? (i = t.value)
        : t.type === m.R.PROFILE_EFFECT
          ? (s = t.value)
          : t.type === m.R.NAMEPLATE && (a = t.value);
}
function P(e) {
    let { banner: t } = e;
    o = t;
}
function D(e) {
    let { bio: t } = e;
    l = t;
}
function x(e) {
    let { pronouns: t } = e;
    c = t;
}
function L(e) {
    let { nickname: t } = e;
    u = t;
}
function j(e) {
    let { themeColors: t } = e;
    d = t;
}
function M(e) {
    let { displayNameStyles: t } = e;
    f = t;
}
function k() {
    U(), G(), (A = {}), (O = b.XlH.OPEN);
}
function U() {
    (r = void 0), (u = void 0), (i = void 0), (a = void 0), (f = void 0);
}
function G() {
    (o = void 0), (l = void 0), (c = void 0), (d = void 0), (s = void 0);
}
function V() {
    A = {};
}
function F() {
    k(), S();
}
class B extends (h = g.Ay.Store) {
    getFormState() {
        return O;
    }
    getErrors() {
        return A;
    }
    showNotice() {
        return (
            void 0 !== r ||
            void 0 !== i ||
            void 0 !== s ||
            void 0 !== o ||
            void 0 !== l ||
            void 0 !== c ||
            void 0 !== u ||
            void 0 !== d ||
            void 0 !== a ||
            void 0 !== f
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > b.NA2;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarDecoration() {
        return i;
    }
    getPendingProfileEffect() {
        return s;
    }
    getPendingBanner() {
        return o;
    }
    getPendingBio() {
        return l;
    }
    getPendingNickname() {
        return u;
    }
    getPendingPronouns() {
        return c;
    }
    getPendingAccentColor() {
        return u;
    }
    getPendingThemeColors() {
        return d;
    }
    getPendingNameplate() {
        return a;
    }
    getPendingDisplayNameStyles() {
        return f;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffect: s,
            pendingBanner: o,
            pendingBio: l,
            pendingPronouns: c,
            pendingNickname: u,
            pendingThemeColors: d,
            pendingNameplate: a,
            pendingDisplayNameStyles: f,
        };
    }
    getGuild() {
        return p;
    }
    getSource() {
        return _;
    }
}
y(B, "displayName", "GuildIdentitySettingsStore");
let H = new B(E.h, {
    GUILD_IDENTITY_SETTINGS_INIT: v,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: F,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: T,
    GUILD_IDENTITY_SETTINGS_SUBMIT: I,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
    USER_PROFILE_UPDATE_FAILURE: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: M,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: j,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: V,
});
