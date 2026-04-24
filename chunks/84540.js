i.d(t, { p: () => s });
var n = i(228366),
    l = i(696451),
    r = i(287809),
    a = i(841595);
let s = (e) => {
    let { guildId: t, ...i } = e,
        s = r.default.getCurrentUser();
    if (null == s) return;
    let o = null == t ? a.A.getUserProfile(s.id) : a.A.getGuildMemberProfile(s.id, t),
        d = null != t ? l.Ay.getMember(t, s.id) : null,
        c = {};
    "globalName" in i &&
        (i.globalName === s.globalName || ("" === i.globalName && null === s.globalName)
            ? (c.pendingGlobalName = void 0)
            : (c.pendingGlobalName = i.globalName)),
        "nickname" in i &&
            (i.nickname === d?.nick || ("" === i.nickname && d?.nick === null)
                ? (c.pendingNickname = void 0)
                : (c.pendingNickname = i.nickname)),
        "displayNameStyles" in i && (c.pendingDisplayNameStyles = i.displayNameStyles),
        "pronouns" in i &&
            (i.pronouns === o?.pronouns ? (c.pendingPronouns = void 0) : (c.pendingPronouns = i.pronouns)),
        "avatar" in i &&
            ((null != t && i.avatar?.imageUri === d?.avatar) || (null == t && i.avatar?.imageUri === s.avatar)
                ? (c.pendingAvatar = void 0)
                : (c.pendingAvatar = i.avatar)),
        "avatarDecoration" in i &&
            ((null != t && i.avatarDecoration?.skuId === d?.avatarDecoration?.skuId) ||
            (null == t && i.avatarDecoration?.skuId === s.avatarDecoration?.skuId)
                ? (c.pendingAvatarDecoration = void 0)
                : (c.pendingAvatarDecoration = i.avatarDecoration)),
        "nameplate" in i &&
            ((null != t && i.nameplate?.skuId === d?.collectibles?.nameplate?.skuId) ||
            (null == t && i.nameplate?.skuId === s.collectibles?.nameplate?.skuId)
                ? (c.pendingNameplate = void 0)
                : (c.pendingNameplate = i.nameplate)),
        "profileEffect" in i &&
            (i.profileEffect?.skuId === o?.profileEffect?.skuId
                ? (c.pendingProfileEffect = void 0)
                : (c.pendingProfileEffect = i.profileEffect)),
        "profileFrame" in i &&
            (i.profileFrame?.skuId === o?.profileFrame?.skuId
                ? (c.pendingProfileFrame = void 0)
                : (c.pendingProfileFrame = i.profileFrame)),
        "banner" in i &&
            ((null != t && i.banner === d?.banner) || (null == t && i.banner === s.banner)
                ? (c.pendingBanner = void 0)
                : (c.pendingBanner = i.banner)),
        "accentColor" in i && (c.pendingAccentColor = i.accentColor),
        "themeColors" in i &&
            ((i.themeColors?.[0] == null || i.themeColors?.[1] == null) && o?.themeColors == null
                ? (c.pendingThemeColors = void 0)
                : (c.pendingThemeColors = i.themeColors)),
        "bio" in i && (i.bio === o?.bio ? (c.pendingBio = void 0) : (c.pendingBio = i.bio)),
        "primaryGuildId" in i && (c.pendingPrimaryGuildId = i.primaryGuildId),
        "legacyUsernameDisabled" in i && (c.pendingLegacyUsernameDisabled = i.legacyUsernameDisabled),
        n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: t, ...c });
};
