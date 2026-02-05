"use strict";
let r, i, a, s, o, l, u, c, d, _, f, p;
n.d(t, { A: () => B });
var h = n(575593),
    m = n(311907),
    g = n(73153),
    E = n(652215);
let A = E.XlH.CLOSED,
    I = {};
function T(e) {
    (f = e.guild), (A = E.XlH.OPEN), (I = {}), (p = e.source);
}
function y() {
    (A = E.XlH.CLOSED), (I = {}), (p = void 0);
}
function S() {
    (A = E.XlH.SUBMITTING), (I = {});
}
function v(e) {
    (f = e.guild), (I = {});
}
function C(e) {
    if (A !== E.XlH.SUBMITTING) return !1;
    (A = E.XlH.OPEN), (I = e.errors ?? {});
}
function b(e) {
    (A = E.XlH.OPEN), (I = e.errors);
}
function N(e) {
    let { avatar: t } = e;
    r = t;
}
function R(e) {
    let { item: t } = e;
    t.type === h.R.AVATAR_DECORATION
        ? (i = t.value)
        : t.type === h.R.PROFILE_EFFECT
          ? (s = t.value)
          : t.type === h.R.NAMEPLATE && (a = t.value);
}
function O(e) {
    let { banner: t } = e;
    o = t;
}
function D(e) {
    let { bio: t } = e;
    l = t;
}
function L(e) {
    let { pronouns: t } = e;
    u = t;
}
function w(e) {
    let { nickname: t } = e;
    c = t;
}
function x(e) {
    let { themeColors: t } = e;
    d = t;
}
function P(e) {
    let { displayNameStyles: t } = e;
    _ = t;
}
function M() {
    k(), U(), (I = {}), (A = E.XlH.OPEN);
}
function k() {
    (r = void 0), (c = void 0), (i = void 0), (a = void 0), (_ = void 0);
}
function U() {
    (o = void 0), (l = void 0), (u = void 0), (d = void 0), (s = void 0);
}
function G() {
    I = {};
}
function V() {
    M(), y();
}
class F extends m.Ay.Store {
    static displayName = "GuildIdentitySettingsStore";
    getFormState() {
        return A;
    }
    getErrors() {
        return I;
    }
    showNotice() {
        return (
            void 0 !== r ||
            void 0 !== i ||
            void 0 !== s ||
            void 0 !== o ||
            void 0 !== l ||
            void 0 !== u ||
            void 0 !== c ||
            void 0 !== d ||
            void 0 !== a ||
            void 0 !== _
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > E.NA2;
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
        return c;
    }
    getPendingPronouns() {
        return u;
    }
    getPendingAccentColor() {
        return c;
    }
    getPendingThemeColors() {
        return d;
    }
    getPendingNameplate() {
        return a;
    }
    getPendingDisplayNameStyles() {
        return _;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffect: s,
            pendingBanner: o,
            pendingBio: l,
            pendingPronouns: u,
            pendingNickname: c,
            pendingThemeColors: d,
            pendingNameplate: a,
            pendingDisplayNameStyles: _,
        };
    }
    getGuild() {
        return f;
    }
    getSource() {
        return p;
    }
}
let B = new F(g.h, {
    GUILD_IDENTITY_SETTINGS_INIT: T,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: V,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: v,
    GUILD_IDENTITY_SETTINGS_SUBMIT: S,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
    USER_PROFILE_UPDATE_FAILURE: b,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: O,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: x,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: k,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: U,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: M,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: M,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: G,
});
