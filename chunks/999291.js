r.d(i, { _c: () => P, Ay: () => c, AP: () => _ });
var t = r(582128),
    n = r(17928),
    l = r(287809),
    s = r(583613),
    u = r(919395),
    o = r(486020),
    d = r(158045),
    h = r(289173),
    a = r(202541);
function m(e, i) {
    return null == i || "" === i ? e : i;
}
class g {
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
            (this.bio = m(e.bio, i?.bio)),
            (this.pronouns = m(e.pronouns, i?.pronouns)),
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
        return this._userProfile.widgets?.filter(h.fu);
    }
    get primaryColor() {
        return this.themeColors?.[0] ?? this.accentColor;
    }
    get canUsePremiumProfileCustomization() {
        return d.Ay.isPremiumAtLeast(this.premiumType, a.PremiumTypes.TIER_2);
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
        let { canAnimate: i, size: r } = e;
        return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, o.ns)({ id: this.userId, guildId: this.guildId, banner: this.banner, canAnimate: i, size: r })
            : (0, o.z)({ id: this.userId, banner: this.banner, canAnimate: i, size: r });
    }
    getPreviewBanner(e, i) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
        return null != e
            ? i
                ? e.imageUri
                : (e.staticImageUri ?? e.imageUri)
            : null === e
              ? this.isUsingGuildMemberBanner()
                  ? (0, o.z)({ id: this.userId, banner: this._userProfile.banner, canAnimate: i, size: r })
                  : null
              : this.getBannerURL({ canAnimate: i, size: r });
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
var f = r(321191),
    p = r(903209);
function c(e, i) {
    return (0, n.bG)([l.default, f.A], () => (null == e ? null : _(e, i, [l.default, f.A])));
}
function P(e, i) {
    return (
        t.useEffect(() => {
            (0, p.A)(e, void 0, { guildId: i ?? void 0 });
        }, [i, e]),
        c(e, i)
    );
}
let b = (0, s.L_)((e, i) => new g(e, i));
function _(e, i) {
    let [r, t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, f.A];
    if (null === e) return null;
    let n = r.getUser(e),
        s = t.getUserProfile(e),
        u = t.getGuildMemberProfile(e, i);
    return null == n || null == s ? null : b(s, u);
}
