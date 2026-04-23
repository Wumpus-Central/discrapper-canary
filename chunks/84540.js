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
        d = null != t ? r.Ay.getMember(t, o.id) : null,
        _ = {};
    "globalName" in n &&
        (n.globalName === o.globalName || ("" === n.globalName && null === o.globalName)
            ? (_.pendingGlobalName = void 0)
            : (_.pendingGlobalName = n.globalName)),
        "nickname" in n &&
            (n.nickname === d?.nick || ("" === n.nickname && d?.nick === null)
                ? (_.pendingNickname = void 0)
                : (_.pendingNickname = n.nickname)),
        "displayNameStyles" in n && (_.pendingDisplayNameStyles = n.displayNameStyles),
        "pronouns" in n &&
            (n.pronouns === l?.pronouns ? (_.pendingPronouns = void 0) : (_.pendingPronouns = n.pronouns)),
        "avatar" in n &&
            ((null != t && n.avatar?.imageUri === d?.avatar) || (null == t && n.avatar?.imageUri === o.avatar)
                ? (_.pendingAvatar = void 0)
                : (_.pendingAvatar = n.avatar)),
        "avatarDecoration" in n &&
            ((null != t && n.avatarDecoration?.skuId === d?.avatarDecoration?.skuId) ||
            (null == t && n.avatarDecoration?.skuId === o.avatarDecoration?.skuId)
                ? (_.pendingAvatarDecoration = void 0)
                : (_.pendingAvatarDecoration = n.avatarDecoration)),
        "nameplate" in n &&
            ((null != t && n.nameplate?.skuId === d?.collectibles?.nameplate?.skuId) ||
            (null == t && n.nameplate?.skuId === o.collectibles?.nameplate?.skuId)
                ? (_.pendingNameplate = void 0)
                : (_.pendingNameplate = n.nameplate)),
        "profileEffect" in n &&
            (n.profileEffect?.skuId === l?.profileEffect?.skuId
                ? (_.pendingProfileEffect = void 0)
                : (_.pendingProfileEffect = n.profileEffect)),
        "profileFrame" in n &&
            (n.profileFrame?.skuId === l?.profileFrame?.skuId
                ? (_.pendingProfileFrame = void 0)
                : (_.pendingProfileFrame = n.profileFrame)),
        "banner" in n &&
            ((null != t && n.banner === d?.banner) || (null == t && n.banner === o.banner)
                ? (_.pendingBanner = void 0)
                : (_.pendingBanner = n.banner)),
        "accentColor" in n && (_.pendingAccentColor = n.accentColor),
        "themeColors" in n &&
            ((n.themeColors?.[0] == null || n.themeColors?.[1] == null) && l?.themeColors == null
                ? (_.pendingThemeColors = void 0)
                : (_.pendingThemeColors = n.themeColors)),
        "bio" in n && (n.bio === l?.bio ? (_.pendingBio = void 0) : (_.pendingBio = n.bio)),
        "primaryGuildId" in n && (_.pendingPrimaryGuildId = n.primaryGuildId),
        "legacyUsernameDisabled" in n && (_.pendingLegacyUsernameDisabled = n.legacyUsernameDisabled),
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: t, ..._ });
};
