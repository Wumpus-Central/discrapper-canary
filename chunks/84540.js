a.d(n, { p: () => t });
var i = a(228366),
    l = a(685073),
    r = a(696451),
    o = a(287809),
    d = a(841595);
let t = (e) => {
    let { guildId: n, ...a } = e,
        t = o.default.getCurrentUser();
    if (null == t) return;
    let p = null == n ? d.A.getUserProfile(t.id) : d.A.getGuildMemberProfile(t.id, n),
        u = null != n ? r.Ay.getMember(n, t.id) : null,
        m = {};
    if (
        ("globalName" in a &&
            (a.globalName === t.globalName || ("" === a.globalName && null === t.globalName)
                ? (m.pendingGlobalName = void 0)
                : (m.pendingGlobalName = a.globalName)),
        "nickname" in a &&
            (a.nickname === u?.nick || ("" === a.nickname && u?.nick === null)
                ? (m.pendingNickname = void 0)
                : (m.pendingNickname = a.nickname)),
        "displayNameStyles" in a && (m.pendingDisplayNameStyles = a.displayNameStyles),
        "pronouns" in a &&
            (a.pronouns === p?.pronouns ? (m.pendingPronouns = void 0) : (m.pendingPronouns = a.pronouns)),
        "avatar" in a &&
            ((null != n && a.avatar?.imageUri === u?.avatar) || (null == n && a.avatar?.imageUri === t.avatar)
                ? (m.pendingAvatar = void 0)
                : (m.pendingAvatar = a.avatar)),
        "avatarDecoration" in a &&
            ((null != n && a.avatarDecoration?.skuId === u?.avatarDecoration?.skuId) ||
            (null == n && a.avatarDecoration?.skuId === t.avatarDecoration?.skuId)
                ? (m.pendingAvatarDecoration = void 0)
                : (m.pendingAvatarDecoration = a.avatarDecoration)),
        "nameplate" in a &&
            ((null != n && a.nameplate?.skuId === u?.collectibles?.nameplate?.skuId) ||
            (null == n && a.nameplate?.skuId === t.collectibles?.nameplate?.skuId)
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
            ((null != n && a.banner === u?.banner) || (null == n && a.banner === t.banner)
                ? ((m.pendingBanner = void 0), (m.pendingBannerOriginalMd5 = void 0))
                : ((m.pendingBanner = a.banner), (m.pendingBannerOriginalMd5 = a.bannerOriginalMd5 ?? null))),
        "accentColor" in a && (m.pendingAccentColor = a.accentColor),
        "themeColors" in a &&
            ((a.themeColors?.[0] == null || a.themeColors?.[1] == null) && p?.themeColors == null
                ? (m.pendingThemeColors = void 0)
                : (m.pendingThemeColors = a.themeColors)),
        "bio" in a && (a.bio === p?.bio ? (m.pendingBio = void 0) : (m.pendingBio = a.bio)),
        "primaryGuildId" in a)
    ) {
        let e = (0, l.Zo)(t.primaryGuild).guildId ?? null;
        a.primaryGuildId === e ? (m.pendingPrimaryGuildId = void 0) : (m.pendingPrimaryGuildId = a.primaryGuildId);
    }
    "legacyUsernameDisabled" in a && (m.pendingLegacyUsernameDisabled = a.legacyUsernameDisabled),
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: n, ...m });
};
