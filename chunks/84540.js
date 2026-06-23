"use strict";
n.d(t, { p: () => c });
var i = n(33851),
    r = n.n(i),
    s = n(228366),
    a = n(685073),
    o = n(696451),
    l = n(287809),
    u = n(841595);
function c(e) {
    let { guildId: t, ...n } = e,
        i = l.default.getCurrentUser();
    if (null == i) return;
    let c = u.A.getUserProfile(i.id),
        d = null == t ? c : u.A.getGuildMemberProfile(i.id, t),
        _ = null != t ? o.Ay.getMember(t, i.id) : null,
        h = {};
    if (
        ("globalName" in n &&
            (n.globalName === i.globalName || ("" === n.globalName && null === i.globalName)
                ? (h.pendingGlobalName = void 0)
                : (h.pendingGlobalName = n.globalName)),
        "nickname" in n &&
            (n.nickname === _?.nick || ("" === n.nickname && _?.nick === null)
                ? (h.pendingNickname = void 0)
                : (h.pendingNickname = n.nickname)),
        "displayNameStyles" in n)
    ) {
        let e = n.displayNameStyles,
            s = null != t ? _?.displayNameStyles : i.displayNameStyles;
        r()(e ?? null, s ?? null) ? (h.pendingDisplayNameStyles = void 0) : (h.pendingDisplayNameStyles = e);
    }
    if (
        ("pronouns" in n &&
            (n.pronouns === d?.pronouns ? (h.pendingPronouns = void 0) : (h.pendingPronouns = n.pronouns)),
        "avatar" in n &&
            ((null != t && n.avatar?.imageUri === _?.avatar) || (null == t && n.avatar?.imageUri === i.avatar)
                ? (h.pendingAvatar = void 0)
                : (h.pendingAvatar = n.avatar)),
        "avatarDecoration" in n &&
            ((null != t && n.avatarDecoration?.skuId === _?.avatarDecoration?.skuId) ||
            (null == t && n.avatarDecoration?.skuId === i.avatarDecoration?.skuId)
                ? (h.pendingAvatarDecoration = void 0)
                : (h.pendingAvatarDecoration = n.avatarDecoration)),
        "nameplate" in n &&
            ((null != t && n.nameplate?.skuId === _?.collectibles?.nameplate?.skuId) ||
            (null == t && n.nameplate?.skuId === i.collectibles?.nameplate?.skuId)
                ? (h.pendingNameplate = void 0)
                : (h.pendingNameplate = n.nameplate)),
        "profileEffect" in n &&
            (n.profileEffect?.skuId === d?.profileEffect?.skuId
                ? (h.pendingProfileEffect = void 0)
                : (h.pendingProfileEffect = n.profileEffect)),
        "profileFrame" in n &&
            (n.profileFrame?.skuId === d?.profileFrame?.skuId
                ? (h.pendingProfileFrame = void 0)
                : (h.pendingProfileFrame = n.profileFrame)),
        "banner" in n &&
            ((n.banner ?? null) === (null != t ? (d?.banner ?? null) : (i.banner ?? null))
                ? ((h.pendingBanner = void 0), (h.pendingBannerOriginalMd5 = void 0))
                : ((h.pendingBanner = n.banner), (h.pendingBannerOriginalMd5 = n.bannerOriginalMd5 ?? null))),
        "accentColor" in n)
    ) {
        let e = n.accentColor ?? null;
        e === (d?.accentColor ?? null) ? (h.pendingAccentColor = void 0) : (h.pendingAccentColor = e);
    }
    if ("themeColors" in n) {
        let e =
                null != t && null != n.themeColors && null == n.themeColors[0] && null == n.themeColors[1]
                    ? null
                    : (n.themeColors ?? null),
            i = d?.themeColors ?? null;
        r()(e, i) ? (h.pendingThemeColors = void 0) : (h.pendingThemeColors = n.themeColors);
    }
    if (("bio" in n && (n.bio === d?.bio ? (h.pendingBio = void 0) : (h.pendingBio = n.bio)), "primaryGuildId" in n)) {
        let e = (0, a.Zo)(i.primaryGuild).guildId ?? null;
        n.primaryGuildId === e ? (h.pendingPrimaryGuildId = void 0) : (h.pendingPrimaryGuildId = n.primaryGuildId);
    }
    "legacyUsernameDisabled" in n && (h.pendingLegacyUsernameDisabled = n.legacyUsernameDisabled),
        s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: t, ...h });
}
