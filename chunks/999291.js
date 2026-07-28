"use strict";
n.d(t, { Ay: () => A, AP: () => I }), n(582128);
var i = n(17928),
    r = n(287809),
    a = n(583613),
    s = n(919395),
    l = n(486020),
    o = n(428262),
    d = n(289173),
    c = n(202541);
function u(e, t) {
    return null == t || "" === t ? e : t;
}
class _ {
    userId;
    guildId;
    banner;
    bio;
    pronouns;
    accentColor;
    themeColors;
    profileEffect;
    profileFrame;
    popoutAnimationParticleType;
    fetchStartedAt;
    fetchEndedAt;
    _userProfile;
    _guildMemberProfile;
    constructor(e, t) {
        (this.userId = e.userId),
            (this.guildId = t?.guildId),
            (this.banner = t?.banner ?? e.banner),
            (this.bio = u(e.bio, t?.bio)),
            (this.pronouns = u(e.pronouns, t?.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors = t?.themeColors ?? e.themeColors),
            (this.profileEffect = t?.profileEffect ?? e.profileEffect),
            (this.profileFrame = t?.profileFrame ?? e.profileFrame),
            (this.popoutAnimationParticleType = t?.popoutAnimationParticleType ?? e.popoutAnimationParticleType),
            (this.fetchStartedAt = e.fetchStartedAt),
            (this.fetchEndedAt = e.fetchEndedAt),
            (this._userProfile = e),
            (this._guildMemberProfile = t);
    }
    get premiumSince() {
        return this._userProfile.premiumSince;
    }
    get premiumGuildSince() {
        return this._userProfile.premiumGuildSince;
    }
    get premiumType() {
        return this._userProfile.premiumType;
    }
    get private() {
        return this._userProfile.private;
    }
    get widgets() {
        return this._userProfile.widgets;
    }
    get gameWidgets() {
        return this._userProfile.widgets?.filter(d.fu);
    }
    get primaryColor() {
        return this.themeColors?.[0] ?? this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return o.Ay.isPremiumAtLeast(this.premiumType, c.PremiumTypes.TIER_2);
    }
    get canEditThemes() {
        return this.canUsePremiumProfileCustomization;
    }
    get application() {
        return this._userProfile.application;
    }
    get isLoaded() {
        return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile);
    }
    hasThemeColors() {
        return this.themeColors?.[0] != null || this.themeColors?.[1] != null;
    }
    hasPremiumCustomization() {
        return (
            this.isUsingGuildMemberBanner() ||
            this.isUsingGuildMemberBio() ||
            null != this.banner ||
            this.hasThemeColors() ||
            null != this.popoutAnimationParticleType
        );
    }
    isUsingGuildMemberBanner() {
        return this._guildMemberProfile?.banner != null;
    }
    isUsingGuildMemberBio() {
        return this._guildMemberProfile?.bio != null && this._guildMemberProfile?.bio !== "";
    }
    isUsingGuildMemberPronouns() {
        return this._guildMemberProfile?.pronouns != null && this._guildMemberProfile?.pronouns !== "";
    }
    getBannerURL(e) {
        let { canAnimate: t, size: n } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, l.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: t, size: n })
            : (0, l.z)({ id: this.userId, banner: this.banner, canAnimate: t, size: n });
    }
    getPreviewBanner(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, l.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: t, size: n })
                  : null
              : this.getBannerURL({ canAnimate: t, size: n });
    }
    getPreviewBio(e) {
        return (0, s.lw)({
            pendingValue: e,
            userValue: this._userProfile.bio,
            guildValue: this._guildMemberProfile?.bio,
            guildId: this.guildId,
        });
    }
    getPreviewPronouns(e) {
        return (0, s.lw)({
            pendingValue: e,
            userValue: this._userProfile.pronouns,
            guildValue: this._guildMemberProfile?.pronouns,
            guildId: this.guildId,
        });
    }
    getPreviewThemeColors(e) {
        return e?.[0] != null && e?.[1] != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors;
    }
    getBadges() {
        return [...(this._userProfile.badges ?? []), ...(this._guildMemberProfile?.badges ?? [])];
    }
    getLegacyUsername() {
        return this._userProfile.legacyUsername;
    }
}
var E = n(321191);
function A(e, t) {
    return (0, i.bG)([r.default, E.A], () => (null == e ? null : I(e, t, [r.default, E.A])));
}
n(903209);
let h = (0, a.L_)((e, t) => new _(e, t));
function I(e, t) {
    let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, E.A];
    if (null === e) return null;
    let a = n.getUser(e),
        s = i.getUserProfile(e),
        l = i.getGuildMemberProfile(e, t);
    return null == a || null == s ? null : h(s, l);
}
