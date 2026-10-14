t.d(i, { _c: () => h, Ay: () => g, AP: () => P });
var r = t(582128),
    n = t(17928),
    l = t(287809),
    o = t(583613),
    u = t(919395),
    a = t(486020),
    s = t(158045),
    d = t(289173),
    f = t(202541);
function c(e, i) {
    return null == i || "" === i ? e : i;
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
    constructor(e, i) {
        ((this.userId = e.userId),
            (this.guildId = i?.guildId),
            (this.banner = i?.banner ?? e.banner),
            (this.bio = c(e.bio, i?.bio)),
            (this.pronouns = c(e.pronouns, i?.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors = i?.themeColors ?? e.themeColors),
            (this.profileEffect = i?.profileEffect ?? e.profileEffect),
            (this.profileFrame = i?.profileFrame ?? e.profileFrame),
            (this.popoutAnimationParticleType = i?.popoutAnimationParticleType ?? e.popoutAnimationParticleType),
            (this.fetchStartedAt = e.fetchStartedAt),
            (this.fetchEndedAt = e.fetchEndedAt),
            (this._userProfile = e),
            (this._guildMemberProfile = i));
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
        return s.Ay.isPremiumAtLeast(this.premiumType, f.PremiumTypes.TIER_2);
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
        let { canAnimate: i, size: t } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, a.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: i, size: t })
            : (0, a.z)({ id: this.userId, banner: this.banner, canAnimate: i, size: t });
    }
    getPreviewBanner(e, i) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? i
                ? e.imageUri
                : (e.staticImageUri ?? e.imageUri)
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, a.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: i, size: t })
                  : null
              : this.getBannerURL({ canAnimate: i, size: t });
    }
    getPreviewBio(e) {
        return (0, u.lw)({
            pendingValue: e,
            userValue: this._userProfile.bio,
            guildValue: this._guildMemberProfile?.bio,
            guildId: this.guildId,
        });
    }
    getPreviewPronouns(e) {
        return (0, u.lw)({
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
var p = t(321191),
    m = t(903209);
function g(e, i) {
    return (0, n.bG)([l.default, p.A], () => (null == e ? null : P(e, i, [l.default, p.A])));
}
function h(e, i) {
    return (
        r.useEffect(() => {
            (0, m.A)(e, void 0, { guildId: i ?? void 0 });
        }, [i, e]),
        g(e, i)
    );
}
let A = (0, o.L_)((e, i) => new _(e, i));
function P(e, i) {
    let [t, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, p.A];
    if (null === e) return null;
    let n = t.getUser(e),
        o = r.getUserProfile(e),
        u = r.getGuildMemberProfile(e, i);
    return null == n || null == o ? null : A(o, u);
}
