"use strict";
n.d(t, { p: () => l });
var i = n(228366),
    r = n(685073),
    s = n(696451),
    a = n(287809),
    o = n(841595);
let l = (e) => {
    let { guildId: t, ...n } = e,
        l = a.default.getCurrentUser();
    if (null == l) return;
    let u = null == t ? o.A.getUserProfile(l.id) : o.A.getGuildMemberProfile(l.id, t),
        c = null != t ? s.Ay.getMember(t, l.id) : null,
        d = {};
    if (
        ("globalName" in n &&
            (n.globalName === l.globalName || ("" === n.globalName && null === l.globalName)
                ? (d.pendingGlobalName = void 0)
                : (d.pendingGlobalName = n.globalName)),
        "nickname" in n &&
            (n.nickname === c?.nick || ("" === n.nickname && c?.nick === null)
                ? (d.pendingNickname = void 0)
                : (d.pendingNickname = n.nickname)),
        "displayNameStyles" in n && (d.pendingDisplayNameStyles = n.displayNameStyles),
        "pronouns" in n &&
            (n.pronouns === u?.pronouns ? (d.pendingPronouns = void 0) : (d.pendingPronouns = n.pronouns)),
        "avatar" in n &&
            ((null != t && n.avatar?.imageUri === c?.avatar) || (null == t && n.avatar?.imageUri === l.avatar)
                ? (d.pendingAvatar = void 0)
                : (d.pendingAvatar = n.avatar)),
        "avatarDecoration" in n &&
            ((null != t && n.avatarDecoration?.skuId === c?.avatarDecoration?.skuId) ||
            (null == t && n.avatarDecoration?.skuId === l.avatarDecoration?.skuId)
                ? (d.pendingAvatarDecoration = void 0)
                : (d.pendingAvatarDecoration = n.avatarDecoration)),
        "nameplate" in n &&
            ((null != t && n.nameplate?.skuId === c?.collectibles?.nameplate?.skuId) ||
            (null == t && n.nameplate?.skuId === l.collectibles?.nameplate?.skuId)
                ? (d.pendingNameplate = void 0)
                : (d.pendingNameplate = n.nameplate)),
        "profileEffect" in n &&
            (n.profileEffect?.skuId === u?.profileEffect?.skuId
                ? (d.pendingProfileEffect = void 0)
                : (d.pendingProfileEffect = n.profileEffect)),
        "profileFrame" in n &&
            (n.profileFrame?.skuId === u?.profileFrame?.skuId
                ? (d.pendingProfileFrame = void 0)
                : (d.pendingProfileFrame = n.profileFrame)),
        "banner" in n &&
            ((null != t && n.banner === c?.banner) || (null == t && n.banner === l.banner)
                ? ((d.pendingBanner = void 0), (d.pendingBannerOriginalMd5 = void 0))
                : ((d.pendingBanner = n.banner), (d.pendingBannerOriginalMd5 = n.bannerOriginalMd5 ?? null))),
        "accentColor" in n && (d.pendingAccentColor = n.accentColor),
        "themeColors" in n &&
            ((n.themeColors?.[0] == null || n.themeColors?.[1] == null) && u?.themeColors == null
                ? (d.pendingThemeColors = void 0)
                : (d.pendingThemeColors = n.themeColors)),
        "bio" in n && (n.bio === u?.bio ? (d.pendingBio = void 0) : (d.pendingBio = n.bio)),
        "primaryGuildId" in n)
    ) {
        let e = (0, r.Zo)(l.primaryGuild).guildId ?? null;
        n.primaryGuildId === e ? (d.pendingPrimaryGuildId = void 0) : (d.pendingPrimaryGuildId = n.primaryGuildId);
    }
    "legacyUsernameDisabled" in n && (d.pendingLegacyUsernameDisabled = n.legacyUsernameDisabled),
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: t, ...d });
};
