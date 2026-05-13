"use strict";
n.d(t, { A: () => A }), n(938796);
var i = n(136722),
    r = n(665260),
    s = n(441574),
    a = n(315069),
    o = n(821956),
    l = n(780898),
    u = n(945096),
    c = n(47537),
    d = n(244284),
    _ = n(349871),
    f = n(392737),
    h = n(486020),
    p = n(474090),
    E = n(935208),
    m = n(652215),
    g = n(788868);
class A extends a.A {
    id;
    username;
    discriminator;
    avatar;
    avatarDecorationData;
    banner;
    email;
    verified;
    bot;
    system;
    mfaEnabled;
    mobile;
    desktop;
    premiumType;
    flags;
    publicFlags;
    purchasedFlags;
    premiumUsageFlags;
    phone;
    nsfwAllowed;
    ageVerificationStatus;
    guildMemberAvatars;
    hasBouncedEmail;
    personalConnectionId;
    globalName;
    primaryGuild;
    collectibles;
    displayNameStyles;
    premiumState;
    perks;
    restrictedSchedule;
    appTransactionIds;
    storeCountry;
    hasFlag = (e) => !1;
    isStaff = () => !1;
    isStaffPersonal = () => !1;
    hasAnyStaffLevel = () => !1;
    constructor(e) {
        super();
        const t = e.premium_type ?? e.premiumType;
        (this.id = e.id),
            (this.username = e.username ?? ""),
            (this.discriminator = e.discriminator ?? m.h3J),
            (this.avatar = e.avatar ?? null),
            (this.avatarDecoration = e.avatar_decoration_data ?? e.avatarDecorationData),
            (this.email = e.email ?? null),
            (this.verified = e.verified ?? !1),
            (this.bot = e.bot ?? !1),
            (this.system = e.system ?? !1),
            (this.mfaEnabled = e.mfa_enabled ?? e.mfaEnabled ?? !1),
            (this.mobile = e.mobile ?? !1),
            (this.desktop = e.desktop ?? !1),
            (this.premiumType = t === m.oA2 ? null : t),
            (this.flags = e.flags ?? 0),
            (this.publicFlags = e.public_flags ?? e.publicFlags ?? 0),
            (this.purchasedFlags = e.purchased_flags ?? e.purchasedFlags ?? 0),
            (this.premiumUsageFlags = e.premium_usage_flags ?? e.premiumUsageFlags ?? 0),
            (this.phone = e.phone ?? null),
            (this.nsfwAllowed = e.nsfw_allowed ?? e.nsfwAllowed),
            (this.ageVerificationStatus = e.age_verification_status ?? e.ageVerificationStatus),
            (this.guildMemberAvatars = e.guildMemberAvatars ?? {}),
            (this.hasBouncedEmail = e.has_bounced_email ?? e.hasBouncedEmail ?? !1),
            (this.personalConnectionId = e.personal_connection_id ?? e.personalConnectionId ?? null),
            (this.globalName = e.global_name ?? e.globalName),
            (this.banner = e.banner),
            (this.primaryGuild = (0, c.j)(e.primary_guild ?? e.primaryGuild ?? null)),
            (this.collectibles = e.collectibles),
            (this.displayNameStyles = e.displayNameStyles ?? (0, u.mT)(e.display_name_styles)),
            (this.premiumState = e.premiumState ?? (0, f.f)(e.premium_state)),
            (this.perks = e.perks?.activePerksBitmask != null ? e.perks : (0, _.c$)(e.perks)),
            (this.restrictedSchedule = (0, d.QU)(e.restricted_schedule ?? e.restrictedSchedule)),
            (this.appTransactionIds = e.appTransactionIds ?? e.app_transaction_ids ?? null),
            (this.storeCountry = (function (e) {
                return null == e
                    ? e
                    : {
                          country: e.country,
                          setAt: e.set_at ?? e.setAt ?? null,
                          isLocked: e.is_locked ?? e.isLocked ?? !1,
                      };
            })(e.store_country ?? e.storeCountry)),
            Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: (e) => {
                        if (e <= 0x40000000) return ((this.flags | this.publicFlags) & e) === e;
                        let t = i.iu(this.flags),
                            n = i.iu(this.publicFlags),
                            r = i.iu(e);
                        return i.zy(i.kg(t, n), r);
                    },
                },
                isStaff: { writable: !1, configurable: !1, enumerable: !1, value: () => this.hasFlag(m.nhx.STAFF) },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () => !this.hasFlag(m.nhx.STAFF) && null != this.personalConnectionId,
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    enumerable: !1,
                    value: () =>
                        this.hasFlag(m.nhx.STAFF) ||
                        this.hasFlag(m.nhx.COLLABORATOR) ||
                        this.hasFlag(m.nhx.RESTRICTED_COLLABORATOR),
                },
            }),
            this.globalName?.length === 0 && (this.globalName = null);
    }
    get createdAt() {
        return new Date(E.default.extractTimestamp(this.id));
    }
    hasVerifiedEmailOrPhone() {
        return !0 === this.verified || null != this.phone;
    }
    getAvatarURL(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.QB,
            r = null != e ? this.guildMemberAvatars[e] : void 0;
        return null != r && null != e
            ? h.Ay.getGuildMemberAvatarURLSimple({
                  guildId: e,
                  avatar: r,
                  userId: this.id,
                  canAnimate: n,
                  size: t,
                  canWebP: i,
              })
            : h.Ay.getUserAvatarURL(this, n, t, null, i);
    }
    addGuildAvatarHash(e, t) {
        if (this.guildMemberAvatars[e] === t) return this;
        let n = { ...this.guildMemberAvatars, [e]: t };
        return this.merge({ guildMemberAvatars: n });
    }
    removeGuildAvatarHash(e) {
        if (void 0 === this.guildMemberAvatars[e]) return this;
        let t = { ...this.guildMemberAvatars, [e]: void 0 };
        return this.merge({ guildMemberAvatars: t });
    }
    getAvatarSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null != e) {
            let i = this.guildMemberAvatars[e];
            if (null != i)
                return h.Ay.getAnimatableSourceWithFallback(t, (t) =>
                    h.Ay.makeSource(
                        h.Ay.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: i,
                            userId: this.id,
                            canAnimate: t,
                            size: n,
                        }),
                    ),
                );
        }
        return h.Ay.getAnimatableSourceWithFallback(t, (e) => h.Ay.getUserAvatarSource(this, e, n));
    }
    isClaimed() {
        return null != this.email || null != this.phone;
    }
    isPhoneVerified() {
        return null != this.phone;
    }
    toString() {
        return "" !== this.username ? this.username : "???";
    }
    get tag() {
        return `${this.username}#${`${this.discriminator}`.padStart(4, "0")}`;
    }
    hasPurchasedFlag(e) {
        return (0, r.Lt)(this.purchasedFlags, e);
    }
    hasPremiumUsageFlag(e) {
        return (0, r.Lt)(this.premiumUsageFlags, e);
    }
    hasHadSKU(e) {
        let t = g.OO[e];
        return null != t && this.hasPurchasedFlag(t);
    }
    hasHadPremium() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_0),
            n = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_1),
            i = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_2);
        switch (e) {
            case g.PremiumTypes.TIER_0:
                return t;
            case g.PremiumTypes.TIER_1:
                return n;
            case g.PremiumTypes.TIER_2:
                return i;
            default:
                return t || n || i;
        }
    }
    hadPremiumSubscription() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return !(0, p.ki)(this) && this.hasHadPremium(e);
    }
    hasFreePremium() {
        return this.isStaff() || this.hasFlag(m.nhx.PARTNER) || this.isStaffPersonal();
    }
    isOnReverseTrial() {
        return (0, p.ki)(this) && this.premiumState?.premiumSource === s.fE.REVERSE_TRIAL;
    }
    isPremiumWithPremiumGroup() {
        return (0, p.ki)(this, g.PremiumTypes.TIER_2) && this.premiumState?.premiumSource === s.fE.SUBSCRIPTION_GROUP;
    }
    hasPaidTier2Subscription() {
        return (0, p.ki)(this, g.PremiumTypes.TIER_2) && this.premiumState?.premiumSubscriptionType === s.jK.TIER_2;
    }
    isPremiumWithFractionalPremiumOnly() {
        return (
            (0, p.ki)(this, g.PremiumTypes.TIER_2) &&
            (this.premiumState?.premiumSubscriptionType === s.jK.NONE_UNSPECIFIED ||
                this.premiumState?.premiumSubscriptionType === s.jK.BOOST_ONLY) &&
            this.premiumState?.premiumSource === s.fE.FRACTIONAL_NITRO
        );
    }
    isFractionalPremiumWithNoStandardSub() {
        return (
            (0, p.ki)(this, g.PremiumTypes.TIER_2) &&
            this.premiumState?.premiumSource === s.fE.FRACTIONAL_NITRO &&
            this.premiumState.premiumSubscriptionType !== s.jK.TIER_2
        );
    }
    isFractionalPremium() {
        return (0, p.ki)(this, g.PremiumTypes.TIER_2) && this.premiumState?.premiumSource === s.fE.FRACTIONAL_NITRO;
    }
    hasUrgentMessages() {
        return this.hasFlag(m.nhx.HAS_UNREAD_URGENT_MESSAGES);
    }
    isNonUserBot() {
        return this.isSystemUser() || (this.bot && this.discriminator === m.h3J);
    }
    isLocalBot() {
        return this.bot && this.id === m.oIV;
    }
    isVerifiedBot() {
        return this.isSystemUser() || this.isLocalBot() || this.hasFlag(m.nhx.VERIFIED_BOT);
    }
    isSystemUser() {
        return !0 === this.system;
    }
    hasAvatarForGuild(e) {
        return null != e && null != this.guildMemberAvatars[e];
    }
    hasUniqueUsername() {
        return "0" === this.discriminator;
    }
    isPremiumGroupMember() {
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === s.qT.MEMBER;
    }
    isPremiumGroupPrimary() {
        return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === s.qT.PRIMARY;
    }
    get isProvisional() {
        return this.hasFlag(m.nhx.PROVISIONAL_ACCOUNT);
    }
    get avatarDecoration() {
        return this.avatarDecorationData;
    }
    set avatarDecoration(e) {
        this.avatarDecorationData = (0, o.Xq)(e);
    }
    get nameplate() {
        return (0, l.WK)(this.collectibles?.nameplate);
    }
    get premiumGroupRole() {
        return this.premiumState?.premiumSubscriptionGroupRole ?? s.qT.UNSPECIFIED;
    }
}
new A({ id: "0" });
