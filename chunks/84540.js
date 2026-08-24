l.d(e, { p: () => u });
var i = l(811315),
    a = l.n(i),
    o = l(228366),
    r = l(685073),
    d = l(696451),
    t = l(287809),
    p = l(321191);
function u(n) {
    let { guildId: e, ...l } = n,
        i = t.default.getCurrentUser();
    if (null == i) return;
    let u = p.A.getUserProfile(i.id),
        m = null == e ? u : p.A.getGuildMemberProfile(i.id, e),
        s = null != e ? d.Ay.getMember(e, i.id) : null,
        c = {};
    if (
        ("globalName" in l &&
            (l.globalName === i.globalName || ("" === l.globalName && null === i.globalName)
                ? (c.pendingGlobalName = void 0)
                : (c.pendingGlobalName = l.globalName)),
        "nickname" in l &&
            (l.nickname === s?.nick || ("" === l.nickname && s?.nick === null)
                ? (c.pendingNickname = void 0)
                : (c.pendingNickname = l.nickname)),
        "displayNameStyles" in l)
    ) {
        let n = l.displayNameStyles,
            o = null != e ? s?.displayNameStyles : i.displayNameStyles;
        a()(n ?? null, o ?? null) ? (c.pendingDisplayNameStyles = void 0) : (c.pendingDisplayNameStyles = n);
    }
    if ("customTypingIndicatorStyle" in l) {
        let n = l.customTypingIndicatorStyle;
        a()(n ?? null, i.typingIndicatorStyle ?? null)
            ? (c.pendingCustomTypingIndicatorStyle = void 0)
            : (c.pendingCustomTypingIndicatorStyle = n);
    }
    if (
        ("pronouns" in l &&
            (l.pronouns === m?.pronouns ? (c.pendingPronouns = void 0) : (c.pendingPronouns = l.pronouns)),
        "avatar" in l &&
            ((null != e && l.avatar?.imageUri === s?.avatar) || (null == e && l.avatar?.imageUri === i.avatar)
                ? (c.pendingAvatar = void 0)
                : (c.pendingAvatar = l.avatar)),
        "avatarDecoration" in l &&
            ((null != e && l.avatarDecoration?.skuId === s?.avatarDecoration?.skuId) ||
            (null == e && l.avatarDecoration?.skuId === i.avatarDecoration?.skuId)
                ? (c.pendingAvatarDecoration = void 0)
                : (c.pendingAvatarDecoration = l.avatarDecoration)),
        "nameplate" in l &&
            ((null != e && l.nameplate?.skuId === s?.collectibles?.nameplate?.skuId) ||
            (null == e && l.nameplate?.skuId === i.collectibles?.nameplate?.skuId)
                ? (c.pendingNameplate = void 0)
                : (c.pendingNameplate = l.nameplate)),
        "profileEffect" in l &&
            (l.profileEffect?.skuId === m?.profileEffect?.skuId
                ? (c.pendingProfileEffect = void 0)
                : (c.pendingProfileEffect = l.profileEffect)),
        "profileFrame" in l &&
            (l.profileFrame?.skuId === m?.profileFrame?.skuId
                ? (c.pendingProfileFrame = void 0)
                : (c.pendingProfileFrame = l.profileFrame)),
        "banner" in l &&
            ((l.banner?.imageUri ?? null) === (null != e ? (m?.banner ?? null) : (i.banner ?? null))
                ? (c.pendingBanner = void 0)
                : (c.pendingBanner = l.banner)),
        "accentColor" in l)
    ) {
        let n = l.accentColor ?? null;
        n === (m?.accentColor ?? null) ? (c.pendingAccentColor = void 0) : (c.pendingAccentColor = n);
    }
    if ("themeColors" in l) {
        let n =
                null != e && null != l.themeColors && null == l.themeColors[0] && null == l.themeColors[1]
                    ? null
                    : (l.themeColors ?? null),
            i = m?.themeColors ?? null;
        a()(n, i) ? (c.pendingThemeColors = void 0) : (c.pendingThemeColors = l.themeColors);
    }
    if (("bio" in l && (l.bio === m?.bio ? (c.pendingBio = void 0) : (c.pendingBio = l.bio)), "primaryGuildId" in l)) {
        let n = (0, r.Zo)(i.primaryGuild).guildId ?? null;
        l.primaryGuildId === n ? (c.pendingPrimaryGuildId = void 0) : (c.pendingPrimaryGuildId = l.primaryGuildId);
    }
    "legacyUsernameDisabled" in l && (c.pendingLegacyUsernameDisabled = l.legacyUsernameDisabled),
        o.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: e, ...c });
}
