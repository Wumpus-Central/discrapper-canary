"use strict";
n.d(t, { _c: () => f, Ay: () => I, AP: () => T });
var i = n(582128),
    r = n(17928),
    a = n(287809),
    s = n(583613),
    l = n(919395),
    o = n(486020),
    d = n(158045),
    c = n(289173),
    u = n(202541);
function _(e, t) {
    return null == t || "" === t ? e : t;
}
class E {
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
            (this.bio = _(e.bio, t?.bio)),
            (this.pronouns = _(e.pronouns, t?.pronouns)),
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
        return this._userProfile.widgets?.filter(c.fu);
    }
    get primaryColor() {
        return this.themeColors?.[0] ?? this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return d.Ay.isPremiumAtLeast(this.premiumType, u.PremiumTypes.TIER_2);
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
            ? (0, o.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: t, size: n })
            : (0, o.z)({ id: this.userId, banner: this.banner, canAnimate: t, size: n });
    }
    getPreviewBanner(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? t
                ? e.imageUri
                : (e.staticImageUri ?? e.imageUri)
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, o.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: t, size: n })
                  : null
              : this.getBannerURL({ canAnimate: t, size: n });
    }
    getPreviewBio(e) {
        return (0, l.lw)({
            pendingValue: e,
            userValue: this._userProfile.bio,
            guildValue: this._guildMemberProfile?.bio,
            guildId: this.guildId,
        });
    }
    getPreviewPronouns(e) {
        return (0, l.lw)({
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
var A = n(321191),
    h = n(903209);
function I(e, t) {
    return (0, r.bG)([a.default, A.A], () => (null == e ? null : T(e, t, [a.default, A.A])));
}
function f(e, t) {
    return (
        i.useEffect(() => {
            (0, h.A)(e, void 0, { guildId: t ?? void 0 });
        }, [t, e]),
        I(e, t)
    );
}
let p = (0, s.L_)((e, t) => new E(e, t));
function T(e, t) {
    let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, A.A];
    if (null === e) return null;
    let r = n.getUser(e),
        s = i.getUserProfile(e),
        l = i.getGuildMemberProfile(e, t);
    return null == r || null == s ? null : p(s, l);
}
