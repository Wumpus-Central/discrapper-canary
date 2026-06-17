a.d(r, { p: () => c });
var n = a(33851),
    t = a.n(n),
    l = a(228366),
    i = a(685073),
    o = a(696451),
    s = a(287809),
    u = a(841595);
let c = (e) => {
    let { guildId: r, ...a } = e,
        n = s.default.getCurrentUser();
    if (null == n) return;
    let c = u.A.getUserProfile(n.id),
        p = null == r ? c : u.A.getGuildMemberProfile(n.id, r),
        d = null != r ? o.Ay.getMember(r, n.id) : null,
        m = {};
    if (
        ("globalName" in a &&
            (a.globalName === n.globalName || ("" === a.globalName && null === n.globalName)
                ? (m.pendingGlobalName = void 0)
                : (m.pendingGlobalName = a.globalName)),
        "nickname" in a &&
            (a.nickname === d?.nick || ("" === a.nickname && d?.nick === null)
                ? (m.pendingNickname = void 0)
                : (m.pendingNickname = a.nickname)),
        "displayNameStyles" in a)
    ) {
        let e = a.displayNameStyles,
            l = null != r ? d?.displayNameStyles : n.displayNameStyles;
        t()(e ?? null, l ?? null) ? (m.pendingDisplayNameStyles = void 0) : (m.pendingDisplayNameStyles = e);
    }
    if (
        ("pronouns" in a &&
            (a.pronouns === p?.pronouns ? (m.pendingPronouns = void 0) : (m.pendingPronouns = a.pronouns)),
        "avatar" in a &&
            ((null != r && a.avatar?.imageUri === d?.avatar) || (null == r && a.avatar?.imageUri === n.avatar)
                ? (m.pendingAvatar = void 0)
                : (m.pendingAvatar = a.avatar)),
        "avatarDecoration" in a &&
            ((null != r && a.avatarDecoration?.skuId === d?.avatarDecoration?.skuId) ||
            (null == r && a.avatarDecoration?.skuId === n.avatarDecoration?.skuId)
                ? (m.pendingAvatarDecoration = void 0)
                : (m.pendingAvatarDecoration = a.avatarDecoration)),
        "nameplate" in a &&
            ((null != r && a.nameplate?.skuId === d?.collectibles?.nameplate?.skuId) ||
            (null == r && a.nameplate?.skuId === n.collectibles?.nameplate?.skuId)
                ? (m.pendingNameplate = void 0)
                : (m.pendingNameplate = a.nameplate)),
        "profileEffect" in a &&
            (a.profileEffect?.skuId === p?.profileEffect?.skuId
                ? (m.pendingProfileEffect = void 0)
                : (m.pendingProfileEffect = a.profileEffect)),
        "profileFrame" in a &&
            (a.profileFrame?.skuId === p?.profileFrame?.skuId
                ? (m.pendingProfileFrame = void 0)
                : (m.pendingProfileFrame = a.profileFrame)),
        "banner" in a &&
            ((a.banner ?? null) === (null != r ? (p?.banner ?? null) : (n.banner ?? null))
                ? ((m.pendingBanner = void 0), (m.pendingBannerOriginalMd5 = void 0))
                : ((m.pendingBanner = a.banner), (m.pendingBannerOriginalMd5 = a.bannerOriginalMd5 ?? null))),
        "accentColor" in a)
    ) {
        let e = a.accentColor ?? null;
        e === (p?.accentColor ?? null) ? (m.pendingAccentColor = void 0) : (m.pendingAccentColor = e);
    }
    if ("themeColors" in a) {
        let e =
                null != r && null != a.themeColors && null == a.themeColors[0] && null == a.themeColors[1]
                    ? null
                    : (a.themeColors ?? null),
            n = p?.themeColors ?? null;
        t()(e, n) ? (m.pendingThemeColors = void 0) : (m.pendingThemeColors = a.themeColors);
    }
    if (("bio" in a && (a.bio === p?.bio ? (m.pendingBio = void 0) : (m.pendingBio = a.bio)), "primaryGuildId" in a)) {
        let e = (0, i.Zo)(n.primaryGuild).guildId ?? null;
        a.primaryGuildId === e ? (m.pendingPrimaryGuildId = void 0) : (m.pendingPrimaryGuildId = a.primaryGuildId);
    }
    "legacyUsernameDisabled" in a && (m.pendingLegacyUsernameDisabled = a.legacyUsernameDisabled),
        l.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: r, ...m });
};
