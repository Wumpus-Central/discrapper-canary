"use strict";
n.d(t, { p: () => o });
var i = n(228366),
    r = n(696451),
    s = n(287809),
    a = n(841595);
let o = (e) => {
    let { guildId: t, ...n } = e,
        o = s.default.getCurrentUser();
    if (null == o) return;
    let l = null == t ? a.A.getUserProfile(o.id) : a.A.getGuildMemberProfile(o.id, t),
        u = null != t ? r.Ay.getMember(t, o.id) : null,
        c = {};
    "globalName" in n &&
        (n.globalName === o.globalName || ("" === n.globalName && null === o.globalName)
            ? (c.pendingGlobalName = void 0)
            : (c.pendingGlobalName = n.globalName)),
        "nickname" in n &&
            (n.nickname === u?.nick || ("" === n.nickname && u?.nick === null)
                ? (c.pendingNickname = void 0)
                : (c.pendingNickname = n.nickname)),
        "displayNameStyles" in n && (c.pendingDisplayNameStyles = n.displayNameStyles),
        "pronouns" in n &&
            (n.pronouns === l?.pronouns ? (c.pendingPronouns = void 0) : (c.pendingPronouns = n.pronouns)),
        "avatar" in n &&
            ((null != t && n.avatar?.imageUri === u?.avatar) || (null == t && n.avatar?.imageUri === o.avatar)
                ? (c.pendingAvatar = void 0)
                : (c.pendingAvatar = n.avatar)),
        "avatarDecoration" in n &&
            ((null != t && n.avatarDecoration?.skuId === u?.avatarDecoration?.skuId) ||
            (null == t && n.avatarDecoration?.skuId === o.avatarDecoration?.skuId)
                ? (c.pendingAvatarDecoration = void 0)
                : (c.pendingAvatarDecoration = n.avatarDecoration)),
        "nameplate" in n &&
            ((null != t && n.nameplate?.skuId === u?.collectibles?.nameplate?.skuId) ||
            (null == t && n.nameplate?.skuId === o.collectibles?.nameplate?.skuId)
                ? (c.pendingNameplate = void 0)
                : (c.pendingNameplate = n.nameplate)),
        "profileEffect" in n &&
            (n.profileEffect?.skuId === l?.profileEffect?.skuId
                ? (c.pendingProfileEffect = void 0)
                : (c.pendingProfileEffect = n.profileEffect)),
        "profileFrame" in n &&
            (n.profileFrame?.skuId === l?.profileFrame?.skuId
                ? (c.pendingProfileFrame = void 0)
                : (c.pendingProfileFrame = n.profileFrame)),
        "banner" in n &&
            ((null != t && n.banner === u?.banner) || (null == t && n.banner === o.banner)
                ? ((c.pendingBanner = void 0), (c.pendingBannerOriginalMd5 = void 0))
                : ((c.pendingBanner = n.banner), (c.pendingBannerOriginalMd5 = n.bannerOriginalMd5 ?? null))),
        "accentColor" in n && (c.pendingAccentColor = n.accentColor),
        "themeColors" in n &&
            ((n.themeColors?.[0] == null || n.themeColors?.[1] == null) && l?.themeColors == null
                ? (c.pendingThemeColors = void 0)
                : (c.pendingThemeColors = n.themeColors)),
        "bio" in n && (n.bio === l?.bio ? (c.pendingBio = void 0) : (c.pendingBio = n.bio)),
        "primaryGuildId" in n && (c.pendingPrimaryGuildId = n.primaryGuildId),
        "legacyUsernameDisabled" in n && (c.pendingLegacyUsernameDisabled = n.legacyUsernameDisabled),
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: t, ...c });
};
