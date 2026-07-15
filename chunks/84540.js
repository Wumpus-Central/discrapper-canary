"use strict";
n.d(t, { p: () => c });
var i = n(811315),
    r = n.n(i),
    a = n(228366),
    s = n(685073),
    l = n(696451),
    o = n(287809),
    d = n(321191);
function c(e) {
    let { guildId: t, ...n } = e,
        i = o.default.getCurrentUser();
    if (null == i) return;
    let c = d.A.getUserProfile(i.id),
        u = null == t ? c : d.A.getGuildMemberProfile(i.id, t),
        _ = null != t ? l.Ay.getMember(t, i.id) : null,
        E = {};
    if (
        ("globalName" in n &&
            (n.globalName === i.globalName || ("" === n.globalName && null === i.globalName)
                ? (E.pendingGlobalName = void 0)
                : (E.pendingGlobalName = n.globalName)),
        "nickname" in n &&
            (n.nickname === _?.nick || ("" === n.nickname && _?.nick === null)
                ? (E.pendingNickname = void 0)
                : (E.pendingNickname = n.nickname)),
        "displayNameStyles" in n)
    ) {
        let e = n.displayNameStyles,
            a = null != t ? _?.displayNameStyles : i.displayNameStyles;
        r()(e ?? null, a ?? null) ? (E.pendingDisplayNameStyles = void 0) : (E.pendingDisplayNameStyles = e);
    }
    if (
        ("pronouns" in n &&
            (n.pronouns === u?.pronouns ? (E.pendingPronouns = void 0) : (E.pendingPronouns = n.pronouns)),
        "avatar" in n &&
            ((null != t && n.avatar?.imageUri === _?.avatar) || (null == t && n.avatar?.imageUri === i.avatar)
                ? (E.pendingAvatar = void 0)
                : (E.pendingAvatar = n.avatar)),
        "avatarDecoration" in n &&
            ((null != t && n.avatarDecoration?.skuId === _?.avatarDecoration?.skuId) ||
            (null == t && n.avatarDecoration?.skuId === i.avatarDecoration?.skuId)
                ? (E.pendingAvatarDecoration = void 0)
                : (E.pendingAvatarDecoration = n.avatarDecoration)),
        "nameplate" in n &&
            ((null != t && n.nameplate?.skuId === _?.collectibles?.nameplate?.skuId) ||
            (null == t && n.nameplate?.skuId === i.collectibles?.nameplate?.skuId)
                ? (E.pendingNameplate = void 0)
                : (E.pendingNameplate = n.nameplate)),
        "profileEffect" in n &&
            (n.profileEffect?.skuId === u?.profileEffect?.skuId
                ? (E.pendingProfileEffect = void 0)
                : (E.pendingProfileEffect = n.profileEffect)),
        "profileFrame" in n &&
            (n.profileFrame?.skuId === u?.profileFrame?.skuId
                ? (E.pendingProfileFrame = void 0)
                : (E.pendingProfileFrame = n.profileFrame)),
        "banner" in n &&
            ((n.banner ?? null) === (null != t ? (u?.banner ?? null) : (i.banner ?? null))
                ? ((E.pendingBanner = void 0), (E.pendingBannerOriginalMd5 = void 0))
                : ((E.pendingBanner = n.banner), (E.pendingBannerOriginalMd5 = n.bannerOriginalMd5 ?? null))),
        "accentColor" in n)
    ) {
        let e = n.accentColor ?? null;
        e === (u?.accentColor ?? null) ? (E.pendingAccentColor = void 0) : (E.pendingAccentColor = e);
    }
    if ("themeColors" in n) {
        let e =
                null != t && null != n.themeColors && null == n.themeColors[0] && null == n.themeColors[1]
                    ? null
                    : (n.themeColors ?? null),
            i = u?.themeColors ?? null;
        r()(e, i) ? (E.pendingThemeColors = void 0) : (E.pendingThemeColors = n.themeColors);
    }
    if (("bio" in n && (n.bio === u?.bio ? (E.pendingBio = void 0) : (E.pendingBio = n.bio)), "primaryGuildId" in n)) {
        let e = (0, s.Zo)(i.primaryGuild).guildId ?? null;
        n.primaryGuildId === e ? (E.pendingPrimaryGuildId = void 0) : (E.pendingPrimaryGuildId = n.primaryGuildId);
    }
    "legacyUsernameDisabled" in n && (E.pendingLegacyUsernameDisabled = n.legacyUsernameDisabled),
        a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: t, ...E });
}
