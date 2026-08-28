i.d(t, { _c: () => p, Ay: () => h, AP: () => b });
var r = i(582128),
    l = i(17928),
    n = i(287809),
    u = i(583613),
    o = i(919395),
    s = i(486020),
    a = i(158045),
    d = i(289173),
    _ = i(202541);
function f(e, t) {
    return null == t || "" === t ? e : t;
}
class c {
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
            (this.bio = f(e.bio, t?.bio)),
            (this.pronouns = f(e.pronouns, t?.pronouns)),
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
        let { canAnimate: t, size: i } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, s.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: t, size: i })
            : (0, s.z)({ id: this.userId, banner: this.banner, canAnimate: t, size: i });
    }
    getPreviewBanner(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? t
                ? e.imageUri
                : (e.staticImageUri ?? e.imageUri)
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, s.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: t, size: i })
                  : null
              : this.getBannerURL({ canAnimate: t, size: i });
    }
    getPreviewBio(e) {
        return (0, o.lw)({
            pendingValue: e,
            userValue: this._userProfile.bio,
            guildValue: this._guildMemberProfile?.bio,
            guildId: this.guildId,
        });
    }
    getPreviewPronouns(e) {
        return (0, o.lw)({
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
var m = i(321191),
    g = i(903209);
function h(e, t) {
    return (0, l.bG)([n.default, m.A], () => (null == e ? null : b(e, t, [n.default, m.A])));
}
function p(e, t) {
    return (
        r.useEffect(() => {
            (0, g.A)(e, void 0, { guildId: t ?? void 0 });
        }, [t, e]),
        h(e, t)
    );
}
let A = (0, u.L_)((e, t) => new c(e, t));
function b(e, t) {
    let [i, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [n.default, m.A];
    if (null === e) return null;
    let l = i.getUser(e),
        u = r.getUserProfile(e),
        o = r.getGuildMemberProfile(e, t);
    return null == l || null == u ? null : A(u, o);
}
