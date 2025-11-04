let r, i, a, o, s, l, c, u, d, f, _, p;
n.d(t, { Z: () => V });
var h,
    m = n(979554),
    g = n(442837),
    E = n(570140),
    b = n(981631);
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
let O = b.QZA.CLOSED,
    v = {};
function I(e) {
    (_ = e.guild), (O = b.QZA.OPEN), (v = {}), (p = e.source);
}
function T() {
    (O = b.QZA.CLOSED), (v = {}), (p = void 0);
}
function S() {
    (O = b.QZA.SUBMITTING), (v = {});
}
function A(e) {
    (_ = e.guild), (v = {});
}
function C(e) {
    var t;
    if (O !== b.QZA.SUBMITTING) return !1;
    (O = b.QZA.OPEN), (v = null != (t = e.errors) ? t : {});
}
function N(e) {
    (O = b.QZA.OPEN), (v = e.errors);
}
function R(e) {
    let { avatar: t } = e;
    r = t;
}
function P(e) {
    let { item: t } = e;
    t.type === m.Z.AVATAR_DECORATION
        ? (i = t.value)
        : t.type === m.Z.PROFILE_EFFECT
          ? (o = t.value)
          : t.type === m.Z.NAMEPLATE && (a = t.value);
}
function w(e) {
    let { banner: t } = e;
    s = t;
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
function M(e) {
    let { themeColors: t } = e;
    d = t;
}
function j(e) {
    let { displayNameStyles: t } = e;
    f = t;
}
function k() {
    U(), G(), (v = {}), (O = b.QZA.OPEN);
}
function U() {
    (r = void 0), (u = void 0), (i = void 0), (a = void 0), (f = void 0);
}
function G() {
    (s = void 0), (l = void 0), (c = void 0), (d = void 0), (o = void 0);
}
function B() {
    v = {};
}
function Z() {
    k(), T();
}
class F extends (h = g.ZP.Store) {
    getFormState() {
        return O;
    }
    getErrors() {
        return v;
    }
    showNotice() {
        return (
            void 0 !== r ||
            void 0 !== i ||
            void 0 !== o ||
            void 0 !== s ||
            void 0 !== l ||
            void 0 !== c ||
            void 0 !== u ||
            void 0 !== d ||
            void 0 !== a ||
            void 0 !== f
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > b.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarDecoration() {
        return i;
    }
    getPendingProfileEffect() {
        return o;
    }
    getPendingBanner() {
        return s;
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
            pendingProfileEffect: o,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: c,
            pendingNickname: u,
            pendingThemeColors: d,
            pendingNameplate: a,
            pendingDisplayNameStyles: f,
        };
    }
    getGuild() {
        return _;
    }
    getSource() {
        return p;
    }
}
y(F, "displayName", "GuildIdentitySettingsStore");
let V = new F(E.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: I,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: Z,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: A,
    GUILD_IDENTITY_SETTINGS_SUBMIT: S,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
    USER_PROFILE_UPDATE_FAILURE: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: j,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: M,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: B,
});
