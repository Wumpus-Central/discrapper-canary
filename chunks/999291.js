t.d(i, { _c: () => g, Ay: () => h, AP: () => P });
var r = t(582128),
    l = t(17928),
    n = t(287809),
    o = t(583613),
    u = t(919395),
    s = t(486020),
    a = t(158045),
    d = t(289173),
    _ = t(202541);
function c(e, i) {
    return null == i || "" === i ? e : i;
}
class f {
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
        (this.userId = e.userId),
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
            (this._guildMemberProfile = i);
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
        return a.Ay.isPremiumAtLeast(this.premiumType, _.PremiumTypes.TIER_2);
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
            ? (0, s.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: i, size: t })
            : (0, s.z)({ id: this.userId, banner: this.banner, canAnimate: i, size: t });
    }
    getPreviewBanner(e, i) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? i
                ? e.imageUri
                : (e.staticImageUri ?? e.imageUri)
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, s.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: i, size: t })
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
function h(e, i) {
    return (0, l.bG)([n.default, p.A], () => (null == e ? null : P(e, i, [n.default, p.A])));
}
function g(e, i) {
    return (
        r.useEffect(() => {
            (0, m.A)(e, void 0, { guildId: i ?? void 0 });
        }, [i, e]),
        h(e, i)
    );
}
let A = (0, o.L_)((e, i) => new f(e, i));
function P(e, i) {
    let [t, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [n.default, p.A];
    if (null === e) return null;
    let l = t.getUser(e),
        o = r.getUserProfile(e),
        u = r.getGuildMemberProfile(e, i);
    return null == l || null == o ? null : A(o, u);
}
