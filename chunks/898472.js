(n.r(t),
    n.d(t, {
        ACTION_FILTER_ITEMS: () => Y,
        checkChangesToRender: () => W,
        findChangeByKey: () => K,
        getChangeStrings: () => V,
        getChangeTitle: () => ee,
        getSimpleAuditLogChangeDetails: () => Z,
        getSimpleAuditLogTitleContextFromChange: () => q,
        getSimpleAuditLogTitleFromChange: () => J,
        getStringForAddedChannelFlag: () => et,
        getStringForPermission: () => el,
        getStringForRemovedChannelFlag: () => en,
        shouldNotRenderChangeDetail: () => w,
        transformAppliedForumTagChange: () => eE,
        transformAvailableForumTagChange: () => eu,
        transformLogs: () => ea,
    }),
    n(321073));
var l,
    r = n(824120),
    a = n.n(r),
    i = n(536637),
    s = n.n(i),
    E =
        (((l = {}).MESSAGE = "message"),
        (l.FORUM_POST = "forum_post"),
        (l.MESSAGE_BUNDLE = "message_bundle"),
        (l.CONVERSATION = "conversation"),
        l),
    u = n(821418),
    o = n(136722),
    c = n(317097),
    _ = n(665260),
    d = n(499979),
    A = n(155718),
    g = n(47167),
    I = n(626584),
    T = n(121681),
    N = n(627794),
    G = n(591552),
    O = n(701785),
    S = n(446600),
    m = n(898578),
    D = n(411153),
    R = n(734057),
    h = n(317525),
    L = n(994500),
    C = n(287809),
    M = n(5377),
    U = n(735547),
    f = n(811091),
    x = n(427262),
    p = n(523599),
    k = n(652215),
    F = n(746080),
    P = n(890634),
    b = n(539916),
    j = n(988794),
    y = n(792996);
let v = new I.A("AuditLogUtils"),
    X = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS];
function B() {
    return { [k.gGk.REASON]: () => y.t["2IW3C5"] };
}
function V(e) {
    switch (e.targetType) {
        case k.GaG.GUILD:
            return {
                [k.gGk.NAME]: () => y.t.CkDiNH,
                [k.gGk.DESCRIPTION]: eA(y.t.RP3Ey3, y.t.QAVj1Y),
                [k.gGk.ICON_HASH]: () => y.t.iLZ8Q9,
                [k.gGk.SPLASH_HASH]: () => y.t["4VV6dn"],
                [k.gGk.DISCOVERY_SPLASH_HASH]: () => y.t["2pds6p"],
                [k.gGk.BANNER_HASH]: eA(y.t.Cxq4zO, y.t["H7eE/9"]),
                [k.gGk.OWNER_ID]: () => y.t["8ltsLT"],
                [k.gGk.REGION]: () => y.t.X9r5Kf,
                [k.gGk.PREFERRED_LOCALE]: () => y.t.UnXuDS,
                [k.gGk.AFK_CHANNEL_ID]: eA(y.t.ClBuA4, y.t["ms+xtL"]),
                [k.gGk.AFK_TIMEOUT]: () => y.t.q21fHa,
                [k.gGk.SYSTEM_CHANNEL_ID]: eA(y.t.H1VXaa, y.t.XhtmxJ),
                [k.gGk.RULES_CHANNEL_ID]: eA(y.t.OI6MG2, y.t.lik3tI),
                [k.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eA(y.t.YxBKrY, y.t.Ehsnij),
                [k.gGk.MFA_LEVEL]: eT({ [k.EkJ.NONE]: y.t.voaCCQ, [k.EkJ.ELEVATED]: y.t.pRNVwz }),
                [k.gGk.WIDGET_ENABLED]: eI(y.t.ADIty8, y.t.nf58VY),
                [k.gGk.WIDGET_CHANNEL_ID]: eA(y.t["6SBsDc"], y.t.deQ5wO),
                [k.gGk.VERIFICATION_LEVEL]: eT({
                    [k.PvD.NONE]: y.t.W27rsc,
                    [k.PvD.LOW]: y.t["V8P+Pw"],
                    [k.PvD.MEDIUM]: y.t.ERQFau,
                    [k.PvD.HIGH]: y.t["83fN0j"],
                    [k.PvD.VERY_HIGH]: y.t.PnkQJE,
                }),
                [k.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eT({
                    [k.orn.ALL_MESSAGES]: y.t.LDi76A,
                    [k.orn.ONLY_MENTIONS]: y.t["6K83ba"],
                }),
                [k.gGk.VANITY_URL_CODE]: eA(y.t.Zplsov, y.t.u6cArh),
                [k.gGk.EXPLICIT_CONTENT_FILTER]: eT({
                    [k.gh6.DISABLED]: y.t.fmOeL3,
                    [k.gh6.MEMBERS_WITHOUT_ROLES]: y.t["4FghYw"],
                    [k.gh6.ALL_MEMBERS]: y.t.olyrSm,
                }),
                [k.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eI(y.t.rBT0sn, y.t["gc+te5"]),
                [k.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => y.t.YbouFH,
                [k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => y.t.g3DMjB,
                [k.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => y.t["+fQAel"],
                [k.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => y.t.E1fc4v,
                [k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => y.t.XbwtSA,
                ...B(),
            };
        case k.GaG.CHANNEL:
        case k.GaG.CHANNEL_OVERWRITE:
            return {
                [k.gGk.NAME]: ed(y.t.f8Rh0U, y.t.ebD4Qp),
                [k.gGk.POSITION]: ed(y.t.isS8te, y.t.t5uBis),
                [k.gGk.TOPIC]: eg(y.t.esQcxn, y.t["m+veAn"], y.t["ws/1FA"]),
                [k.gGk.BITRATE]: ed(y.t.fw81ak, y.t.MFNlgZ),
                [k.gGk.RTC_REGION_OVERRIDE]: eg(y.t["6kajxx"], y.t.eGOlmU, y.t["0JMZdz"]),
                [k.gGk.USER_LIMIT]: ed(y.t.wk5t7p, y.t.XgjCEh),
                [k.gGk.RATE_LIMIT_PER_USER]: ed(y.t["7lirhF"], y.t.j4CCJR),
                [k.gGk.APPLICATION_ID]: ed(y.t.fnhin8, y.t.mcNs5B),
                [k.gGk.PERMISSIONS_RESET]: () => y.t["+vSBFY"],
                [k.gGk.PERMISSIONS_GRANTED]: () => y.t.EKLJv8,
                [k.gGk.PERMISSIONS_DENIED]: () => y.t.U3rO5X,
                [k.gGk.REASON]: () => y.t["2IW3C5"],
                [k.gGk.NSFW]: eI(y.t.H8Ri2Y, y.t.WW6cJw),
                [k.gGk.TYPE]: ed(y.t.Vn5zn2, y.t.aq4uWI),
                [k.gGk.VIDEO_QUALITY_MODE]: ed(y.t.e68fAU, y.t.djbES0),
                [k.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: ed(y.t.nYz2mg, y.t.oczvRI),
                [k.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: eg(y.t.tOJ8h7, y.t.WaSgzk, y.t["lj+A4u"]),
                [k.gGk.FLAGS]: () => y.t.ImCQko,
                [k.gGk.AVAILABLE_TAG_ADD]: () => y.t.H86QQU,
                [k.gGk.AVAILABLE_TAG_EDIT]: () => y.t.YtUzls,
                [k.gGk.AVAILABLE_TAG_DELETE]: () => y.t["8QOseg"],
                [k.gGk.LINKED_LOBBY]: eA(y.t["+/3TkD"], y.t["5kDYS3"]),
            };
        case k.GaG.USER:
            return {
                [k.gGk.NICK]: eg(y.t.qXDsHv, y.t["m+qury"], y.t.DvLvjF),
                [k.gGk.DEAF]: eI(y.t.mArLlW, y.t.ddvVYG),
                [k.gGk.MUTE]: eI(y.t["bxs/lS"], y.t.FjecQM),
                [k.gGk.ROLES_REMOVE]: () => y.t["+2SDWV"],
                [k.gGk.ROLES_ADD]: () => y.t["B3/3IJ"],
                [k.gGk.PRUNE_DELETE_DAYS]: () => y.t["+Cvc+D"],
                [k.gGk.COMMUNICATION_DISABLED_UNTIL]: eg(y.t.LXTQr5, y.t.LXTQr5, y.t.ULSdnE),
                [k.gGk.BYPASSES_VERIFICATION]: eI(y.t.NBPBui, y.t.zATost),
                [k.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => y.t.YbouFH,
                ...B(),
            };
        case k.GaG.ROLE:
            return {
                [k.gGk.NAME]: ed(y.t.QBmlaD, y.t["Lfs4r+"]),
                [k.gGk.DESCRIPTION]: ed(y.t.XeYKWJ, y.t.PSfeIj),
                [k.gGk.PERMISSIONS_GRANTED]: () => y.t["9i/DvE"],
                [k.gGk.PERMISSIONS_DENIED]: () => y.t.pa1ZVh,
                [k.gGk.COLOR]: eN({ "#000000": y.t.TK6E1H }, y.t["2FQFiw"]),
                [k.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? y.t.U44ttm : y.t["WnSwL/"]),
                [k.gGk.HOIST]: eI(y.t.gWfe24, y.t["+tb8kN"]),
                [k.gGk.MENTIONABLE]: eI(y.t.LL8VFF, y.t.Z7xzmC),
                [k.gGk.ICON_HASH]: () => y.t["iEE79/"],
                [k.gGk.UNICODE_EMOJI]: () => y.t.KiLMM0,
                ...B(),
            };
        case k.GaG.ONBOARDING_PROMPT:
            return {
                ...B(),
                [k.gGk.TITLE]: ed(y.t["sNpuy/"], y.t["3Ukc/g"]),
                [k.gGk.DESCRIPTION]: ed(y.t.PP1q0x, y.t.z7pYLg),
                [k.gGk.OPTIONS]: () => y.t["3G5C9+"],
                [k.gGk.SINGLE_SELECT]: eI(y.t.v4WnR3, y.t["6Qg3uC"]),
                [k.gGk.REQUIRED]: eI(y.t["0MPAM6"], y.t.pwsXir),
            };
        case k.GaG.GUILD_ONBOARDING:
            return {
                ...B(),
                [k.gGk.DEFAULT_CHANNEL_IDS]: () => y.t["8M+D2s"],
                [k.gGk.ENABLE_DEFAULT_CHANNELS]: eI(y.t["EYd/ls"], y.t["36OZeQ"]),
                [k.gGk.ENABLE_ONBOARDING_PROMPTS]: eI(y.t.V3u8PV, y.t["r66lc/"]),
                [k.gGk.ENABLED]: eI(y.t.SODVIs, y.t.u8HY5U),
                [k.gGk.MODE]: eT({ [b.SD.ONBOARDING_ADVANCED]: y.t.JbzVsh, [b.SD.ONBOARDING_DEFAULT]: y.t.aCgU0S }),
            };
        case k.GaG.HOME_SETTINGS:
            return {
                ...B(),
                [k.gGk.WELCOME_MESSAGE]: () => y.t.dKQ1xd,
                [k.gGk.NEW_MEMBER_ACTIONS]: () => y.t.jDUIno,
                [k.gGk.RESOURCE_CHANNELS]: () => y.t.SIX0mr,
            };
        case k.GaG.INVITE:
            return {
                [k.gGk.CODE]: () => y.t.rrRHgb,
                [k.gGk.CHANNEL_ID]: () => y.t.Q1vd5q,
                [k.gGk.MAX_USES]: eN({ 0: y.t.Yx8LNm }, y.t["3ygnwU"]),
                [k.gGk.MAX_AGE]: eN({ [y.intl.string(y.t.PqEzn8)]: y.t.uWrLvw }, y.t["Q+5kcO"]),
                [k.gGk.TEMPORARY]: eI(y.t.MWp6H7, y.t.omiqTH),
                [k.gGk.FLAGS]: eT({ [u.Q.IS_GUEST_INVITE]: y.t.XYZMbL }),
                [k.gGk.ROLE_IDS]: () => y.t.gb1Owj,
                ...B(),
            };
        case k.GaG.WEBHOOK:
            return {
                [k.gGk.CHANNEL_ID]: ed(y.t.jhPprR, y.t.ar4qYO),
                [k.gGk.NAME]: ed(y.t.ZVGrzU, y.t.tywdZR),
                [k.gGk.AVATAR_HASH]: () => y.t.KB52Uj,
                [k.gGk.REASON]: () => y.t["2IW3C5"],
            };
        case k.GaG.EMOJI:
            return { [k.gGk.NAME]: ed(y.t.ahU1o5, y.t["wxs+vZ"]), ...B() };
        case k.GaG.STICKER:
            return {
                [k.gGk.NAME]: ed(y.t.cdl0Yo, y.t.o3W2ly),
                [k.gGk.TAGS]: ed(y.t["zwL+S2"], y.t["VYfKA+"]),
                [k.gGk.DESCRIPTION]: ed(y.t.XeYKWJ, y.t.PSfeIj),
                ...B(),
            };
        case k.GaG.INTEGRATION:
            return {
                [k.gGk.ENABLE_EMOTICONS]: eI(y.t.FI0m5x, y.t.olpKC6),
                [k.gGk.EXPIRE_BEHAVIOR]: eT({ 0: y.t["1Bb1+u"], 1: y.t.vjlW6m }),
                [k.gGk.EXPIRE_GRACE_PERIOD]: () => y.t.iovXMa,
                ...B(),
            };
        case k.GaG.STAGE_INSTANCE:
            return {
                [k.gGk.TOPIC]: ed(y.t["m+veAn"], y.t.esQcxn),
                [k.gGk.PRIVACY_LEVEL]: eT({ [j.dD.GUILD_ONLY]: y.t["EC+CDt"], [j.dD.PUBLIC]: y.t["pK/WG0"] }),
                ...B(),
            };
        case k.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [k.gGk.NAME]: () => y.t["21EXHW"],
                [k.gGk.DESCRIPTION]: () => y.t.Vm1ofw,
                [k.gGk.PRIVACY_LEVEL]: eT({ [j.dD.GUILD_ONLY]: y.t["EC+CDt"], [j.dD.PUBLIC]: y.t["pK/WG0"] }),
                [k.gGk.STATUS]: eT({
                    [j.XG.SCHEDULED]: y.t.hXKDgq,
                    [j.XG.ACTIVE]: y.t.lRX1nz,
                    [j.XG.COMPLETED]: y.t["/eFIhq"],
                    [j.XG.CANCELED]: y.t.NWIYhj,
                }),
                [k.gGk.ENTITY_TYPE]: eT({
                    [j.Ps.NONE]: y.t["6sO3Ss"],
                    [j.Ps.STAGE_INSTANCE]: y.t["Wo+s1y"],
                    [j.Ps.VOICE]: y.t.XCVaIL,
                    [j.Ps.EXTERNAL]: y.t.IvhAj2,
                }),
                [k.gGk.CHANNEL_ID]: eA(y.t.yJBIcX, y.t["+PqSsi"]),
                [k.gGk.LOCATION]: eA(y.t.GaMBHy, y.t.PsICk0),
                [k.gGk.IMAGE_HASH]: eA(y.t.S3vcRK, y.t.KQu47I),
                ...B(),
            };
        case k.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [k.gGk.SCHEDULED_START_TIME]: eA(y.t.zMIYVg, y.t.fzF8Gd),
                [k.gGk.SCHEDULED_END_TIME]: eA(y.t.vONSQA, y.t.IlIti3),
                [k.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return y.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return y.t.dRNTWW;
                    }
                },
                ...B(),
            };
        case k.GaG.THREAD:
            return {
                [k.gGk.NAME]: ed(y.t.tUKRzX, y.t.kPCHON),
                [k.gGk.ARCHIVED]: eI(y.t.jDi9FK, y.t.F6dvbT),
                [k.gGk.LOCKED]: eI(y.t.JSy1QW, y.t.C7Jgo8),
                [k.gGk.INVITABLE]: eI(y.t.dxNUs9, y.t.biJvYG),
                [k.gGk.AUTO_ARCHIVE_DURATION]: ed(y.t.LuaG3y, y.t["18d9qr"]),
                [k.gGk.RATE_LIMIT_PER_USER]: ed(y.t["7lirhF"], y.t.j4CCJR),
                [k.gGk.FLAGS]: () => y.t.sSAQtj,
                [k.gGk.AVAILABLE_TAG_ADD]: () => y.t.H86QQU,
                [k.gGk.AVAILABLE_TAG_DELETE]: () => y.t["8QOseg"],
                ...B(),
            };
        case k.GaG.APPLICATION_COMMAND:
            var t;
            let n;
            return (
                (t = e.changes),
                (n = { ...B() }),
                t?.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (n[e.key] = () => y.t["JH+89C"])
                            : (n[e.key] = () => y.t.HUrFDu)
                        : (n[e.key] = () => y.t.vynxnV);
                }),
                n
            );
        case k.GaG.AUTO_MODERATION_RULE:
            return {
                [k.gGk.NAME]: () => y.t.XwxAJT,
                [k.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => y.t.fx0pyl,
                [k.gGk.AUTO_MODERATION_EVENT_TYPE]: () => y.t["46Y+L5"],
                [k.gGk.AUTO_MODERATION_ACTIONS]: () => y.t["8efxfv"],
                [k.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? y.t.fCmxC2 : y.t.Wrg9Jn),
                [k.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => y.t.TRb7Nx,
                [k.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => y.t.mzitLE,
                [k.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => y.t["h/lM65"],
                [k.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => y.t["9V2yaC"],
                [k.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => y.t["4Qe9ny"],
                [k.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => y.t.GyZtxp,
                [k.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => y.t.OQDadc,
                [k.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => y.t["FvvR+K"],
                [k.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => y.t.p5nSvy,
                ...B(),
            };
        case k.GaG.GUILD_SOUNDBOARD:
            return {
                [k.gGk.NAME]: ed(y.t.VOtRSO, y.t.OK7B8E),
                [k.gGk.VOLUME]: ed(y.t.igrDB9, y.t.L5lDFJ),
                [k.gGk.EMOJI_NAME]: eg(y.t.IIanaY, y.t["z4w4U/"], y.t.V8TfyU),
                [k.gGk.EMOJI_ID]: eg(y.t.ainxMB, y.t["2NPsYu"], y.t["8crtns"]),
                ...B(),
            };
        case k.GaG.VOICE_CHANNEL_STATUS:
            return { [k.gGk.STATUS]: () => y.t.HyCSnI, ...B() };
        case k.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [k.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? y.t.fnkzDY : y.t.WYT6ka),
                [k.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? y.t.jzSvVd : y.t.WxyOtj),
                ...B(),
            };
        case k.GaG.GUILD_PROFILE:
            return {
                [k.gGk.DESCRIPTION]: () => y.t.nsUZKY,
                [k.gGk.BRAND_COLOR_PRIMARY]: () => y.t.qe9mgN,
                [k.gGk.CUSTOM_BANNER_HASH]: () => y.t["04b5KC"],
                [k.gGk.TRAITS]: () => y.t.dEy9WO,
                [k.gGk.GAME_APPLICATION_IDS]: () => y.t["8BOT3x"],
                [k.gGk.VISIBILITY]: () => y.t.bCl1Ep,
                [k.gGk.SERVER_TAG]: eA(y.t.ix1dnX, y.t["4LKpKb"]),
            };
        default:
            return B();
    }
}
let H = {
    [k.GaG.CHANNEL]: { [k.gGk.ID]: !0, [k.gGk.PERMISSION_OVERWRITES]: !0 },
    [k.GaG.CHANNEL_OVERWRITE]: { [k.gGk.TYPE]: !0, [k.gGk.ID]: !0, [k.gGk.PERMISSION_OVERWRITES]: !0 },
    [k.GaG.INVITE]: { [k.gGk.INVITER_ID]: !0, [k.gGk.USES]: !0 },
    [k.GaG.WEBHOOK]: { [k.gGk.TYPE]: !0, [k.gGk.APPLICATION_ID]: !0 },
    [k.GaG.INTEGRATION]: { [k.gGk.TYPE]: !0, [k.gGk.NAME]: !0 },
    [k.GaG.THREAD]: { [k.gGk.ID]: !0, [k.gGk.TYPE]: !0 },
    [k.GaG.STICKER]: {
        [k.gGk.ID]: !0,
        [k.gGk.TYPE]: !0,
        [k.gGk.ASSET]: !0,
        [k.gGk.FORMAT_TYPE]: !0,
        [k.gGk.AVAILABLE]: !0,
        [k.gGk.GUILD_ID]: !0,
    },
    [k.GaG.GUILD_HOME]: { [k.gGk.ENTITY_TYPE]: !0 },
    [k.GaG.GUILD_ONBOARDING]: { [k.gGk.PROMPTS]: !0 },
    [k.GaG.GUILD_SOUNDBOARD]: { [k.gGk.ID]: !0, [k.gGk.SOUND_ID]: !0 },
};
function w(e, t) {
    if (
        e.actionType === k.RWi.DELETE &&
        e.action !== k.F_X.MEMBER_BAN_ADD &&
        e.action !== k.F_X.MEMBER_KICK &&
        e.action !== k.F_X.MEMBER_PRUNE
    )
        return t.key !== k.gGk.REASON;
    let n = H[e.targetType];
    return null != n && !0 === n[t.key];
}
function W(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !w(e, t));
}
let Y = () => [
    { value: k.F_X.ALL, label: y.intl.string(y.t.QxEVcv), valueLabel: y.intl.string(y.t.an9Ry3) },
    { value: k.F_X.GUILD_UPDATE, label: y.intl.string(y.t["5INZa3"]) },
    { value: k.F_X.CHANNEL_CREATE, label: y.intl.string(y.t["2uh4vJ"]) },
    { value: k.F_X.CHANNEL_UPDATE, label: y.intl.string(y.t.mGsBLV) },
    { value: k.F_X.CHANNEL_DELETE, label: y.intl.string(y.t.hCHzAr) },
    { value: k.F_X.CHANNEL_OVERWRITE_CREATE, label: y.intl.string(y.t["8TnAMP"]) },
    { value: k.F_X.CHANNEL_OVERWRITE_UPDATE, label: y.intl.string(y.t.Jqx0Bi) },
    { value: k.F_X.CHANNEL_OVERWRITE_DELETE, label: y.intl.string(y.t.gBXOr4) },
    { value: k.F_X.CHANNEL_POSITION_UPDATE, label: y.intl.string(y.t.hKfSwp) },
    { value: k.F_X.MEMBER_KICK, label: y.intl.string(y.t["Q1/hN8"]) },
    { value: k.F_X.MEMBER_PRUNE, label: y.intl.string(y.t.tOTTja) },
    { value: k.F_X.MEMBER_BAN_ADD, label: y.intl.string(y.t["NfPn+e"]) },
    { value: k.F_X.MEMBER_BAN_REMOVE, label: y.intl.string(y.t.XCsGfI) },
    { value: k.F_X.MEMBER_UPDATE, label: y.intl.string(y.t["F/jmNJ"]) },
    { value: k.F_X.MEMBER_ROLE_UPDATE, label: y.intl.string(y.t.zAveSI) },
    { value: k.F_X.MEMBER_MOVE, label: y.intl.string(y.t.QshteR) },
    { value: k.F_X.MEMBER_DISCONNECT, label: y.intl.string(y.t.Z45os7) },
    { value: k.F_X.BOT_ADD, label: y.intl.string(y.t.vuH24Z) },
    { value: k.F_X.THREAD_CREATE, label: y.intl.string(y.t["+zl0DG"]) },
    { value: k.F_X.THREAD_UPDATE, label: y.intl.string(y.t.rbIry3) },
    { value: k.F_X.THREAD_DELETE, label: y.intl.string(y.t.hFjNEA) },
    { value: k.F_X.ROLE_CREATE, label: y.intl.string(y.t.AbxKtv) },
    { value: k.F_X.ROLE_UPDATE, label: y.intl.string(y.t.t3Z6sU) },
    { value: k.F_X.ROLE_DELETE, label: y.intl.string(y.t.YsFpa4) },
    { value: k.F_X.ROLE_POSITION_UPDATE, label: y.intl.string(y.t["g+lLUV"]) },
    { value: k.F_X.ONBOARDING_PROMPT_CREATE, label: y.intl.string(y.t.ZV9tqc) },
    { value: k.F_X.ONBOARDING_PROMPT_UPDATE, label: y.intl.string(y.t.PcOdvX) },
    { value: k.F_X.ONBOARDING_PROMPT_DELETE, label: y.intl.string(y.t["+r33Na"]) },
    { value: k.F_X.ONBOARDING_CREATE, label: y.intl.string(y.t.uDADde) },
    { value: k.F_X.ONBOARDING_UPDATE, label: y.intl.string(y.t.J1H1wg) },
    { value: k.F_X.HOME_SETTINGS_CREATE, label: y.intl.string(y.t.Di4cvI) },
    { value: k.F_X.HOME_SETTINGS_UPDATE, label: y.intl.string(y.t.tzyrJH) },
    { value: k.F_X.INVITE_CREATE, label: y.intl.string(y.t["0BNJdX"]) },
    { value: k.F_X.INVITE_UPDATE, label: y.intl.string(y.t["o++obV"]) },
    { value: k.F_X.INVITE_DELETE, label: y.intl.string(y.t.iP40Az) },
    { value: k.F_X.WEBHOOK_CREATE, label: y.intl.string(y.t["tBF4+S"]) },
    { value: k.F_X.WEBHOOK_UPDATE, label: y.intl.string(y.t.eV3McO) },
    { value: k.F_X.WEBHOOK_DELETE, label: y.intl.string(y.t.AAL3K1) },
    { value: k.F_X.EMOJI_CREATE, label: y.intl.string(y.t.RuWm0V) },
    { value: k.F_X.EMOJI_UPDATE, label: y.intl.string(y.t.WzdUY7) },
    { value: k.F_X.EMOJI_DELETE, label: y.intl.string(y.t.c3dK2L) },
    { value: k.F_X.MESSAGE_DELETE, label: y.intl.string(y.t.daTfXh) },
    { value: k.F_X.MESSAGE_BULK_DELETE, label: y.intl.string(y.t.nrBxeh) },
    { value: k.F_X.MESSAGE_PIN, label: y.intl.string(y.t.MUldyN) },
    { value: k.F_X.MESSAGE_UNPIN, label: y.intl.string(y.t.n4zKhA) },
    { value: k.F_X.INTEGRATION_CREATE, label: y.intl.string(y.t.deNm8x) },
    { value: k.F_X.INTEGRATION_UPDATE, label: y.intl.string(y.t.HT7Sfg) },
    { value: k.F_X.INTEGRATION_DELETE, label: y.intl.string(y.t["+kJ09q"]) },
    { value: k.F_X.STICKER_CREATE, label: y.intl.string(y.t["3DzNjU"]) },
    { value: k.F_X.STICKER_UPDATE, label: y.intl.string(y.t.tdhW5b) },
    { value: k.F_X.STICKER_DELETE, label: y.intl.string(y.t["+ZhGOk"]) },
    { value: k.F_X.STAGE_INSTANCE_CREATE, label: y.intl.string(y.t.sPbjA6) },
    { value: k.F_X.STAGE_INSTANCE_UPDATE, label: y.intl.string(y.t.cW9LfJ) },
    { value: k.F_X.STAGE_INSTANCE_DELETE, label: y.intl.string(y.t["U1r+yD"]) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: y.intl.string(y.t.H81Zyy) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: y.intl.string(y.t["FM69l+"]) },
    { value: k.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: y.intl.string(y.t.Rq28Bh) },
    { value: k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: y.intl.string(y.t.iPdFOt) },
    { value: k.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: y.intl.string(y.t.gNq5z6) },
    { value: k.F_X.AUTO_MODERATION_RULE_CREATE, label: y.intl.string(y.t.f72Zqb) },
    { value: k.F_X.AUTO_MODERATION_RULE_UPDATE, label: y.intl.string(y.t.XeqIiv) },
    { value: k.F_X.AUTO_MODERATION_RULE_DELETE, label: y.intl.string(y.t.syAApU) },
    { value: k.F_X.GUILD_HOME_FEATURE_ITEM, label: y.intl.string(y.t.lhG5KN) },
    { value: k.F_X.GUILD_HOME_REMOVE_ITEM, label: y.intl.string(y.t.lRPRwS) },
    { value: k.F_X.SOUNDBOARD_SOUND_CREATE, label: y.intl.string(y.t.yoRi5r) },
    { value: k.F_X.SOUNDBOARD_SOUND_UPDATE, label: y.intl.string(y.t.uKlG0Z) },
    { value: k.F_X.SOUNDBOARD_SOUND_DELETE, label: y.intl.string(y.t.gq0iCT) },
    { value: k.F_X.VOICE_CHANNEL_STATUS_CREATE, label: y.intl.string(y.t.rGr0YM) },
    { value: k.F_X.VOICE_CHANNEL_STATUS_DELETE, label: y.intl.string(y.t.V9PEQ4) },
];
function K(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function z(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function J(e) {
    let t = Y().find((t) => t.value === e.action);
    return null != K(k.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? y.intl.string(y.t.z3wbj8) : (t?.label ?? null);
}
let Q = {
    [d.pJ.SECONDS]: (e) => y.intl.formatToPlainString(y.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => y.intl.formatToPlainString(y.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => y.intl.formatToPlainString(y.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => y.intl.formatToPlainString(y.t["k2UNz+"], { days: e }),
};
function q(e) {
    let t = K(k.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = z(k.gGk.ROLES_ADD, e).length > 0,
        l = z(k.gGk.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if (t?.newValue != null) {
            let n = new Date(t?.newValue).getTime() - f.default.extractTimestamp(e.id),
                l = Math.round(n / 1e3 / 60),
                r = (0, d.$l)(l, X);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in Q) {
                let e = r.unit,
                    t = r.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
                return Q[e](t);
            }
        } else if (t?.oldValue != null) return y.intl.string(y.t.MA1ltr);
    } else if (n && l) return y.intl.string(y.t.RdMMew);
    else if (n) return y.intl.string(y.t["4GQqs8"]);
    else if (l) return y.intl.string(y.t["8mQ6x0"]);
    return null;
}
function Z(e) {
    let t = z(k.gGk.ROLES_ADD, e),
        n = z(k.gGk.ROLES_REMOVE, e),
        l = t
            ?.map((e) => {
                let { newValue: t } = e;
                return t
                    ?.map((e) => {
                        let { name: t } = e;
                        return t;
                    })
                    .join(", ");
            })
            .join(", "),
        r = n
            ?.map((e) => {
                let { newValue: t } = e;
                return t
                    ?.map((e) => {
                        let { name: t } = e;
                        return t;
                    })
                    .join(", ");
            })
            .join(", ");
    return t.length > 0 && n.length > 0
        ? y.intl.formatToPlainString(y.t.tZw1EW, { roleNamesAdded: l, roleNamesRemoved: r })
        : t.length > 0
          ? y.intl.formatToPlainString(y.t["/mTqt5"], { roleNames: l })
          : n.length > 0
            ? y.intl.formatToPlainString(y.t.Wk4pAJ, { roleNames: r })
            : null;
}
function $(e, t) {
    let { unique_count: n, unique_overflow: l, member: r } = e.options,
        a = null != n ? Number(n) : null;
    return null == a || Number.isNaN(a) || a < 1
        ? t.legacy
        : "1" === l
          ? t.usersOverflow
          : 1 === a && null != r
            ? t.named
            : t.users;
}
function ee(e) {
    switch (e.action) {
        case k.F_X.GUILD_UPDATE:
            return y.t.LjZO31;
        case k.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === k.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case k.rbe.GUILD_STAGE_VOICE:
                    return y.t["OKp4+o"];
                case k.rbe.GUILD_VOICE:
                    return y.t.NPOy4G;
                case k.rbe.GUILD_CATEGORY:
                    return y.t.T3KIjz;
                case k.rbe.GUILD_FORUM:
                    return y.t.VvNgHX;
                case k.rbe.GUILD_MEDIA:
                    return y.t["4NWSxa"];
                case k.rbe.GUILD_ANNOUNCEMENT:
                    return y.t.eYP6UV;
                default:
                    return y.t.wrYNG2;
            }
        case k.F_X.CHANNEL_UPDATE:
            return y.t.nTYk6B;
        case k.F_X.CHANNEL_DELETE:
            return y.t.ynfvkm;
        case k.F_X.CHANNEL_OVERWRITE_CREATE:
            return y.t.l5Cu1a;
        case k.F_X.CHANNEL_OVERWRITE_UPDATE:
            return y.t.uhtbNU;
        case k.F_X.CHANNEL_OVERWRITE_DELETE:
            return y.t["HASt/3"];
        case k.F_X.CHANNEL_POSITION_UPDATE:
            return y.t.d3aX5b;
        case k.F_X.MEMBER_KICK:
            return y.t.B5hDZX;
        case k.F_X.MEMBER_PRUNE:
            return y.t.qKOZTP;
        case k.F_X.MEMBER_BAN_ADD:
            return y.t["XklUm/"];
        case k.F_X.MEMBER_BAN_REMOVE:
            return y.t.o3Y6HD;
        case k.F_X.MEMBER_UPDATE:
            return y.t.pznhLN;
        case k.F_X.MEMBER_ROLE_UPDATE:
            return y.t.Vngfia;
        case k.F_X.MEMBER_MOVE:
            return $(e, { legacy: y.t.Yt6NkU, named: y.t.VW2XVd, users: y.t.hEqea3, usersOverflow: y.t.qXazAb });
        case k.F_X.MEMBER_DISCONNECT:
            return $(e, { legacy: y.t.K4eCZw, named: y.t.tTwGD8, users: y.t.lODaeu, usersOverflow: y.t.xuGjhY });
        case k.F_X.BOT_ADD:
            return y.t.fWvX0G;
        case k.F_X.ROLE_CREATE:
            return y.t.UTLTx6;
        case k.F_X.ROLE_UPDATE:
            return y.t.NRbN18;
        case k.F_X.ROLE_DELETE:
            return y.t["4s63tb"];
        case k.F_X.ROLE_POSITION_UPDATE:
            return y.t.jZeaoW;
        case k.F_X.INVITE_CREATE:
            return y.t.YHOXWy;
        case k.F_X.INVITE_UPDATE:
            return y.t.ja3kGS;
        case k.F_X.INVITE_DELETE:
            return y.t["3n/iWk"];
        case k.F_X.WEBHOOK_CREATE:
            return y.t.MhYhil;
        case k.F_X.WEBHOOK_UPDATE:
            return y.t["6GTlWB"];
        case k.F_X.WEBHOOK_DELETE:
            return y.t.in0VjZ;
        case k.F_X.EMOJI_CREATE:
            return y.t["7vekRO"];
        case k.F_X.EMOJI_UPDATE:
            return y.t.IsCKfh;
        case k.F_X.EMOJI_DELETE:
            return y.t.JnUaVG;
        case k.F_X.STICKER_CREATE:
            return y.t.DRZifq;
        case k.F_X.STICKER_UPDATE:
            return y.t.bhujGc;
        case k.F_X.STICKER_DELETE:
            return y.t.rGEP9U;
        case k.F_X.MESSAGE_DELETE:
            return y.t["HPkD+M"];
        case k.F_X.MESSAGE_BULK_DELETE:
            return y.t["3RIvLE"];
        case k.F_X.MESSAGE_PIN:
            return y.t.Yna7E7;
        case k.F_X.MESSAGE_UNPIN:
            return y.t.NCxXUW;
        case k.F_X.INTEGRATION_CREATE:
            return y.t.HYvCb3;
        case k.F_X.INTEGRATION_UPDATE:
            return y.t.ibCCOS;
        case k.F_X.INTEGRATION_DELETE:
            return y.t["8zScWY"];
        case k.F_X.STAGE_INSTANCE_CREATE:
            return y.t["n7x/DF"];
        case k.F_X.STAGE_INSTANCE_UPDATE:
            return y.t["0hQYU4"];
        case k.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return y.t["Oi/in9"];
            return y.t["7ZIFm9"];
        case k.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return y.t.S7k52p;
        case k.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return y.t.ebTK11;
        case k.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return y.t["/ARPKQ"];
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return y.t["8qCI36"];
        case k.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return y.t.zYb2da;
        case k.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === k.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case k.rbe.PRIVATE_THREAD:
                    return y.t.Br0y5w;
                case k.rbe.ANNOUNCEMENT_THREAD:
                    return y.t["6uaMmO"];
                default:
                    return y.t["2cxQ7G"];
            }
        case k.F_X.THREAD_UPDATE:
            return y.t.PSsy4t;
        case k.F_X.THREAD_DELETE:
            return y.t.s3Khn8;
        case k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return y.t.uzCqBm;
        case k.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return y.t.NqWv2K;
        case k.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === P.uh.USER_PROFILE.toString()) return y.t.YQsjej;
            return y.t.SD0PwJ;
        case k.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return y.t.Vk4TwX;
        case k.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return y.t["/W5u5o"];
        case k.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return y.t.ONvWyr;
        case k.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return y.t["ryGLk+"];
        case k.F_X.AUTO_MODERATION_RULE_CREATE:
            return y.t["NKljj+"];
        case k.F_X.AUTO_MODERATION_RULE_UPDATE:
            return y.t["3wEA9u"];
        case k.F_X.AUTO_MODERATION_RULE_DELETE:
            return y.t.umua3n;
        case k.F_X.ONBOARDING_PROMPT_CREATE:
            return y.t["/8A1g2"];
        case k.F_X.ONBOARDING_PROMPT_UPDATE:
            return y.t.ArIrWI;
        case k.F_X.ONBOARDING_PROMPT_DELETE:
            return y.t.IuBTao;
        case k.F_X.ONBOARDING_CREATE:
            return y.t["wDaq3/"];
        case k.F_X.ONBOARDING_UPDATE:
            return y.t["yONu/l"];
        case k.F_X.HOME_SETTINGS_CREATE:
            return y.t.dSdCjG;
        case k.F_X.HOME_SETTINGS_UPDATE:
            return y.t.XHE8qv;
        case k.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === k.gGk.ENTITY_TYPE) : null;
            if (null == l) return y.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return y.t["PyEa+J"];
                case E.FORUM_POST:
                    return y.t.hCuAb1;
                default:
                    return y.t["UZ+U3A"];
            }
        case k.F_X.GUILD_HOME_REMOVE_ITEM:
            return y.t.kPReun;
        case k.F_X.SOUNDBOARD_SOUND_CREATE:
            return y.t["0PD83V"];
        case k.F_X.SOUNDBOARD_SOUND_UPDATE:
            return y.t.CM8n1w;
        case k.F_X.SOUNDBOARD_SOUND_DELETE:
            return y.t["kVz4/0"];
        case k.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return y.t.MWjnU7;
        case k.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return y.t.aS8Krq;
        case k.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return y.t["NUKUb+"];
        case k.F_X.GUILD_PROFILE_UPDATE:
            return y.t.Ed6hF1;
        case k.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return y.t["3Ne7MA"];
        case k.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return y.t["naflH+"];
        default:
            return null;
    }
}
function et(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return y.intl.string(y.t["5G8ZD4"]);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return y.intl.string(y.t["4YLtzC"]);
        case F.lx.PINNED:
            return y.intl.string(y.t["1QLRYb"]);
    }
    return null;
}
function en(e) {
    switch (e) {
        case F.lx.GUILD_FEED_REMOVED:
            return y.intl.string(y.t.S5kuWQ);
        case F.lx.ACTIVE_CHANNELS_REMOVED:
            return y.intl.string(y.t["8qpgcz"]);
        case F.lx.PINNED:
            return y.intl.string(y.t.CMweGA);
    }
    return null;
}
function el(e, t) {
    switch (e) {
        case k.xBc.CREATE_INSTANT_INVITE:
            return y.intl.string(y.t.zJrgTG);
        case k.xBc.KICK_MEMBERS:
            return y.intl.string(y.t.pBNv6i);
        case k.xBc.BAN_MEMBERS:
            return y.intl.string(y.t.oTBA7N);
        case k.xBc.ADMINISTRATOR:
            return y.intl.string(y.t.PGvZqX);
        case k.xBc.MANAGE_CHANNELS:
            if (t.targetType === k.GaG.CHANNEL || t.targetType === k.GaG.CHANNEL_OVERWRITE)
                return y.intl.string(y.t.nAw15L);
            return y.intl.string(y.t["9qLtWs"]);
        case k.xBc.MANAGE_GUILD:
            return y.intl.string(y.t.QZRcfO);
        case k.xBc.VIEW_GUILD_ANALYTICS:
            return y.intl.string(y.t["rQJBE/"]);
        case k.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return y.intl.string(y.t["0lTLTv"]);
        case k.xBc.CHANGE_NICKNAME:
            return y.intl.string(y.t.dilOF6);
        case k.xBc.MANAGE_NICKNAMES:
            return y.intl.string(y.t["t+Ct5x"]);
        case k.xBc.MANAGE_ROLES:
            return y.intl.string(y.t["C8d+oG"]);
        case k.xBc.MANAGE_WEBHOOKS:
            return y.intl.string(y.t["/ADKmM"]);
        case k.xBc.CREATE_GUILD_EXPRESSIONS:
            return y.intl.string(y.t.HarVuP);
        case k.xBc.MANAGE_GUILD_EXPRESSIONS:
            return y.intl.string(y.t.bbuXIn);
        case k.xBc.VIEW_AUDIT_LOG:
            return y.intl.string(y.t.fZgLpA);
        case k.xBc.VIEW_CHANNEL:
            if (t.targetType === k.GaG.CHANNEL || t.targetType === k.GaG.CHANNEL_OVERWRITE)
                return y.intl.string(y.t["W/A4Qp"]);
            return y.intl.string(y.t.uV83yi);
        case k.xBc.SEND_MESSAGES:
            return y.intl.string(y.t.T32rkC);
        case k.xBc.SEND_TTS_MESSAGES:
            return y.intl.string(y.t.Mg7bku);
        case k.xBc.USE_APPLICATION_COMMANDS:
            return y.intl.string(y.t.shbR1a);
        case k.xBc.MANAGE_MESSAGES:
            return y.intl.string(y.t["6lU9xM"]);
        case k.xBc.EMBED_LINKS:
            return y.intl.string(y.t["969dEL"]);
        case k.xBc.ATTACH_FILES:
            return y.intl.string(y.t["3AS4UM"]);
        case k.xBc.READ_MESSAGE_HISTORY:
            return y.intl.string(y.t.l9ufaR);
        case k.xBc.MENTION_EVERYONE:
            return y.intl.string(y.t.Y78KGC);
        case k.xBc.USE_EXTERNAL_EMOJIS:
            return y.intl.string(y.t.BpBGZU);
        case k.xBc.USE_EXTERNAL_STICKERS:
            return y.intl.string(y.t["UeRs+b"]);
        case k.xBc.ADD_REACTIONS:
            return y.intl.string(y.t.yEoJAr);
        case k.xBc.CONNECT:
            return y.intl.string(y.t.S0W8Z5);
        case k.xBc.SPEAK:
            return y.intl.string(y.t["8w1tIR"]);
        case k.xBc.MUTE_MEMBERS:
            return y.intl.string(y.t["8EI30/"]);
        case k.xBc.DEAFEN_MEMBERS:
            return y.intl.string(y.t["9L47Fr"]);
        case k.xBc.MOVE_MEMBERS:
            return y.intl.string(y.t.YtjJPQ);
        case k.xBc.USE_VAD:
            return y.intl.string(y.t["08zAV7"]);
        case k.xBc.PRIORITY_SPEAKER:
            return y.intl.string(y.t.BVK71i);
        case k.xBc.STREAM:
            return y.intl.string(y.t.FlNoSV);
        case k.xBc.USE_SOUNDBOARD:
            return y.intl.string(y.t.Bco7NG);
        case k.xBc.USE_EXTERNAL_SOUNDS:
            return y.intl.string(y.t.pwaVJ6);
        case k.xBc.REQUEST_TO_SPEAK:
            return y.intl.string(y.t["5kicT2"]);
        case k.xBc.USE_EMBEDDED_ACTIVITIES:
            return y.intl.string(y.t.rLSGeh);
        case k.xBc.CREATE_EVENTS:
            return y.intl.string(y.t.qyjZua);
        case k.xBc.MANAGE_EVENTS:
            return y.intl.string(y.t.HIgA5a);
        case k.xBc.CREATE_PUBLIC_THREADS:
            return y.intl.string(y.t["25rKnX"]);
        case k.xBc.CREATE_PRIVATE_THREADS:
            return y.intl.string(y.t.QwbTSa);
        case k.xBc.SEND_MESSAGES_IN_THREADS:
            return y.intl.string(y.t.fTE74g);
        case k.xBc.MANAGE_THREADS:
            return y.intl.string(y.t.kEqgr7);
        case k.xBc.MODERATE_MEMBERS:
            return y.intl.string(y.t["+RL6pz"]);
        case k.xBc.SET_VOICE_CHANNEL_STATUS:
            return y.intl.string(y.t.VBwkUf);
        case k.xBc.SEND_POLLS:
            return y.intl.string(y.t.UMQ7Ww);
        case k.xBc.SEND_VOICE_MESSAGES:
            return y.intl.string(y.t.WlWSBT);
        case k.xBc.USE_EXTERNAL_APPS:
            return y.intl.string(y.t.TtA5rK);
        case k.xBc.PIN_MESSAGES:
            return y.intl.string(y.t.Y5BI39);
        case k.xBc.BYPASS_SLOWMODE:
            return y.intl.string(y.t.kqcjeV);
        case k.xBc.MANAGE_OFFICIAL_MESSAGES:
            return y.intl.string(y.t.Aj9ruN);
    }
    return null;
}
let er = [
    k.F_X.MEMBER_PRUNE,
    k.F_X.MEMBER_DISCONNECT,
    k.F_X.MEMBER_MOVE,
    k.F_X.CHANNEL_POSITION_UPDATE,
    k.F_X.ROLE_POSITION_UPDATE,
    k.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
    k.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
];
function ea(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case k.GaG.GUILD:
                        case k.GaG.GUILD_HOME:
                        case k.GaG.GUILD_PROFILE:
                            return t;
                        case k.GaG.CHANNEL:
                        case k.GaG.CHANNEL_OVERWRITE:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
                            );
                        case k.GaG.USER:
                            return ec(
                                e,
                                k.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case k.GaG.ROLE:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => h.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case k.GaG.ONBOARDING_PROMPT:
                            let n = ec(
                                e,
                                k.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? y.intl.string(y.t.ZNQyiR) : n;
                        case k.GaG.GUILD_ONBOARDING:
                        case k.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case k.GaG.INVITE:
                            return ec(e, k.gGk.CODE, k.FXj);
                        case k.GaG.INTEGRATION:
                            return ec(
                                e,
                                k.gGk.TYPE,
                                (e) => p.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.WEBHOOK:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.EMOJI:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => T.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.STICKER:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => m.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case k.GaG.STAGE_INSTANCE:
                            return ec(
                                e,
                                k.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case k.GaG.GUILD_SCHEDULED_EVENT:
                        case k.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.THREAD:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = p.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case k.GaG.AUTO_MODERATION_RULE:
                            return ec(
                                e,
                                k.gGk.NAME,
                                (e) => p.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case k.GaG.GUILD_SOUNDBOARD:
                            return ec(e, k.gGk.NAME, k.FXj);
                        case k.GaG.HOME_SETTINGS:
                            return ec(
                                e,
                                k.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => y.intl.string(y.t.VbpLyU),
                                t.id,
                            );
                        case k.GaG.VOICE_CHANNEL_STATUS:
                            return ec(
                                e,
                                k.gGk.STATUS,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, L.A, !0),
                            );
                        default:
                            return (v.warn("Unknown targetType for log", e), null);
                    }
                })(e, t),
                r = C.default.getUser(e.userId);
            if (null != l || er.includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set("user", r)).set("target", l)).set(
                        "options",
                        (function (e) {
                            if (null != e.options) {
                                let t = { ...e.options };
                                switch (e.options.type) {
                                    case k.AO_.USER:
                                        t.subtarget = e_(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => x.Ay.getUserTag(e),
                                        );
                                        break;
                                    case k.AO_.ROLE:
                                        t.subtarget = e_(e.options.role_name, k.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = ec(
                                            e,
                                            "",
                                            (e) => R.A.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (t.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    let n = p.A.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = n?.guild_scheduled_event_exceptions.find(
                                            (t) => t.event_exception_id === e.options.event_exception_id,
                                        );
                                    t.subtarget = (0, M.i$)(
                                        s()(f.default.extractTimestamp(l?.event_exception_id ?? "0")),
                                        "LL",
                                    );
                                }
                                return (
                                    (e.action === k.F_X.MEMBER_MOVE || e.action === k.F_X.MEMBER_DISCONNECT) &&
                                        null != e.options.member_id &&
                                        "" !== e.options.member_id &&
                                        (t.member = C.default.getUser(e.options.member_id) ?? null),
                                    t
                                );
                            }
                            return e.options;
                        })(e),
                    )).changes
                ) {
                    let n = [];
                    (e.changes.forEach((l) => {
                        let r = (function (e, t, n) {
                            if (t.action === k.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case k.g0g.ROLE:
                                        e.subtarget = e_(
                                            t.id,
                                            (e) => h.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case k.g0g.USER:
                                        e.subtarget = e_(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => x.Ay.getUserTag(e),
                                        );
                                        break;
                                    case k.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = y.intl.string(y.t.MSYhgh))
                                            : (e.subtarget = e_(
                                                  t.id,
                                                  (e) => R.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, L.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case k.gGk.OWNER_ID:
                                    return eo(e, (e) => C.default.getUser(e));
                                case k.gGk.CHANNEL_ID:
                                case k.gGk.AFK_CHANNEL_ID:
                                case k.gGk.SYSTEM_CHANNEL_ID:
                                case k.gGk.RULES_CHANNEL_ID:
                                case k.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eo(
                                        e,
                                        (e) => R.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, L.A, !0),
                                    );
                                case k.gGk.AFK_TIMEOUT:
                                    return eo(e, (e) => e / 60);
                                case k.gGk.BITRATE:
                                    return eo(e, (e) => e / 1e3);
                                case k.gGk.COLOR:
                                    return eo(e, (e) => (0, c.Hl)(e).toUpperCase());
                                case k.gGk.THEME_COLORS:
                                    return eo(
                                        e,
                                        (e) => `${(0, c.Hl)(e[0]).toUpperCase()}, ${(0, c.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case k.gGk.MAX_AGE:
                                    return eo(e, (e) => {
                                        let t = U.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case k.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = ei(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new D.QO(k.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(k.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case k.gGk.PERMISSIONS_GRANTED:
                                case k.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = ei(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(k.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case k.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = _.VL(l, n),
                                                a = _.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e of Object.values(F.lx))
                                                (_.Lt(r, e) && i.push(e), _.Lt(a, e) && s.push(e));
                                            return { added: i, removed: s };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let n = new D.QO(e.key, l, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case k.gGk.PREFERRED_LOCALE:
                                    return eo(e, (e) => {
                                        let t = (0, y.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case k.gGk.VIDEO_QUALITY_MODE:
                                    return eo(e, (e) =>
                                        e === k.K3c.FULL ? y.intl.string(y.t["7jOoJE"]) : y.intl.string(y.t.jjKYpu),
                                    );
                                case k.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [k.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [k.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [k.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [k.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                k.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(k.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new D.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case k.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE) return eo(e, N.X3);
                                    break;
                                case k.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE) return eo(e, N.nl);
                                    break;
                                case k.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eo(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? y.intl.formatToMarkdownString(y.t.y91UXV, {
                                                          newValue: e.keyword_filter.map((e) => `'${e}'`).join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case k.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case k.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case k.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case k.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case k.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eo(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) =>
                                                e
                                                    .map(R.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, C.default, L.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : y.intl.string(y.t["K/EdV8"]),
                                        );
                                    break;
                                case k.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === k.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => h.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : y.intl.string(y.t["K/EdV8"]),
                                        );
                                    break;
                                case k.gGk.ROLE_IDS:
                                    if (t.targetType === k.GaG.INVITE)
                                        return eo(e, (e) =>
                                            e
                                                .map((e) => h.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case k.gGk.AVAILABLE_TAGS:
                                    return eu(e);
                                case k.gGk.APPLIED_TAGS:
                                    return eE(e, t);
                                case k.gGk.SCHEDULED_START_TIME:
                                case k.gGk.SCHEDULED_END_TIME:
                                    return eo(e, (e) => (0, M.i$)(s()(new Date(e)), "LLLL"));
                            }
                            return e;
                        })(l, e, t);
                        Array.isArray(r) ? r.forEach((e) => n.push(e)) : n.push(r);
                    }),
                        (e = e.set("changes", n)));
                }
                n.push(e);
            }
        }),
        n
    );
}
function ei(e, t) {
    let n = o.iu("string" == typeof e ? e : 0),
        l = o.iu("string" == typeof t ? t : 0),
        r = o.TF(l, n),
        a = o.TF(n, l),
        i = [],
        s = [];
    for (let e of Object.values(k.xBc)) (o.zy(r, e) && i.push(e), o.zy(a, e) && s.push(e));
    return { added: i, removed: s };
}
function es(e) {
    return null == e
        ? null
        : {
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated,
          };
}
function eE(e, t) {
    let n = Array.isArray(e.oldValue) ? e.oldValue : [],
        l = Array.isArray(e.newValue) ? e.newValue : [],
        r = R.A.getChannel(t.targetId),
        a = r?.parent_id != null ? R.A.getChannel(r.parent_id) : null,
        i = a?.availableTags ?? [],
        s = {};
    i.forEach((e) => {
        s[e.id] = { name: e.name, emojiId: e.emojiId, emojiName: e.emojiName };
    });
    let E = new Set(n),
        u = new Set(l),
        o = l.filter((e) => !E.has(e)),
        c = n.filter((e) => !u.has(e)),
        _ = [];
    for (let e of o) {
        let t = s[e] ?? { id: e, name: e };
        _.push(new D.QO(k.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of c) {
        let t = s[e] ?? { id: e, name: e };
        _.push(new D.QO(k.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return _.length > 0 ? _ : e;
}
function eu(e) {
    let { oldValue: t, newValue: n } = e,
        l = Array.isArray(t) ? t : [],
        r = Array.isArray(n) ? n : [];
    if (0 === l.length && 0 === r.length) return e;
    let a = {},
        i = {};
    if (
        (l.forEach((e) => {
            a[e.id] = e;
        }),
        r.forEach((e) => {
            i[e.id] = e;
        }),
        l.length < r.length)
    ) {
        for (let e in i) if (null == a[e]) return new D.QO(k.gGk.AVAILABLE_TAG_ADD, null, es(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new D.QO(k.gGk.AVAILABLE_TAG_DELETE, null, es(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new D.QO(k.gGk.AVAILABLE_TAG_EDIT, es(t), es(n));
    }
    return e;
}
function eo(e, t, n) {
    let l = e.newValue,
        r = e.oldValue;
    return (
        null != e.newValue && ((l = t(e.newValue)), null != n && null != l && (l = n(l))),
        null != e.oldValue && ((r = t(e.oldValue)), null != n && null != r && (r = n(r))),
        new D.QO(e.key, r || e.oldValue, l || e.newValue)
    );
}
function ec(e, t, n, l, r) {
    let a = null,
        i = n((r = r ?? e.targetId));
    if ((null != i && null != l && (a = l(i)), null == a)) {
        let t = p.A.deletedTargets[e.targetType];
        null != t && null != t[r] && (a = t[r]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return a ?? r;
}
function e_(e, t, n) {
    let l = e,
        r = null != e ? t(e) : null;
    return (null != r && null != n && (l = n(r)), l);
}
function ed(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eA(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eg(e, t, n, l) {
    return (r) => (null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l);
}
function eI(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eT(e) {
    return (t) => e[t.newValue];
}
function eN(e, t) {
    return (n) => e[n.newValue] ?? t;
}
