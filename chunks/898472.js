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
    _ = n(317097),
    c = n(665260),
    d = n(499979),
    A = n(155718),
    g = n(47167),
    T = n(626584),
    I = n(121681),
    N = n(627794),
    G = n(591552),
    O = n(701785),
    S = n(446600),
    m = n(898578),
    D = n(411153),
    R = n(734057),
    L = n(317525),
    h = n(994500),
    C = n(287809),
    M = n(5377),
    U = n(735547),
    f = n(811091),
    x = n(427262),
    p = n(523599),
    F = n(652215),
    P = n(746080),
    k = n(890634),
    b = n(539916),
    j = n(988794),
    y = n(792996);
let v = new T.A("AuditLogUtils"),
    X = [d.pJ.DAYS, d.pJ.HOURS, d.pJ.MINUTES, d.pJ.SECONDS];
function B() {
    return { [F.gGk.REASON]: () => y.t["2IW3C5"] };
}
function V(e) {
    switch (e.targetType) {
        case F.GaG.GUILD:
            return {
                [F.gGk.NAME]: () => y.t.CkDiNH,
                [F.gGk.DESCRIPTION]: eA(y.t.RP3Ey3, y.t.QAVj1Y),
                [F.gGk.ICON_HASH]: () => y.t.iLZ8Q9,
                [F.gGk.SPLASH_HASH]: () => y.t["4VV6dn"],
                [F.gGk.DISCOVERY_SPLASH_HASH]: () => y.t["2pds6p"],
                [F.gGk.BANNER_HASH]: eA(y.t.Cxq4zO, y.t["H7eE/9"]),
                [F.gGk.OWNER_ID]: () => y.t["8ltsLT"],
                [F.gGk.REGION]: () => y.t.X9r5Kf,
                [F.gGk.PREFERRED_LOCALE]: () => y.t.UnXuDS,
                [F.gGk.AFK_CHANNEL_ID]: eA(y.t.ClBuA4, y.t["ms+xtL"]),
                [F.gGk.AFK_TIMEOUT]: () => y.t.q21fHa,
                [F.gGk.SYSTEM_CHANNEL_ID]: eA(y.t.H1VXaa, y.t.XhtmxJ),
                [F.gGk.RULES_CHANNEL_ID]: eA(y.t.OI6MG2, y.t.lik3tI),
                [F.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eA(y.t.YxBKrY, y.t.Ehsnij),
                [F.gGk.MFA_LEVEL]: eI({ [F.EkJ.NONE]: y.t.voaCCQ, [F.EkJ.ELEVATED]: y.t.pRNVwz }),
                [F.gGk.WIDGET_ENABLED]: eT(y.t.ADIty8, y.t.nf58VY),
                [F.gGk.WIDGET_CHANNEL_ID]: eA(y.t["6SBsDc"], y.t.deQ5wO),
                [F.gGk.VERIFICATION_LEVEL]: eI({
                    [F.PvD.NONE]: y.t.W27rsc,
                    [F.PvD.LOW]: y.t["V8P+Pw"],
                    [F.PvD.MEDIUM]: y.t.ERQFau,
                    [F.PvD.HIGH]: y.t["83fN0j"],
                    [F.PvD.VERY_HIGH]: y.t.PnkQJE,
                }),
                [F.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eI({
                    [F.orn.ALL_MESSAGES]: y.t.LDi76A,
                    [F.orn.ONLY_MENTIONS]: y.t["6K83ba"],
                }),
                [F.gGk.VANITY_URL_CODE]: eA(y.t.Zplsov, y.t.u6cArh),
                [F.gGk.EXPLICIT_CONTENT_FILTER]: eI({
                    [F.gh6.DISABLED]: y.t.fmOeL3,
                    [F.gh6.MEMBERS_WITHOUT_ROLES]: y.t["4FghYw"],
                    [F.gh6.ALL_MEMBERS]: y.t.olyrSm,
                }),
                [F.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eT(y.t.rBT0sn, y.t["gc+te5"]),
                [F.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => y.t.YbouFH,
                [F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => y.t.g3DMjB,
                [F.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => y.t["+fQAel"],
                [F.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => y.t.E1fc4v,
                [F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => y.t.XbwtSA,
                ...B(),
            };
        case F.GaG.CHANNEL:
        case F.GaG.CHANNEL_OVERWRITE:
            return {
                [F.gGk.NAME]: ed(y.t.f8Rh0U, y.t.ebD4Qp),
                [F.gGk.POSITION]: ed(y.t.isS8te, y.t.t5uBis),
                [F.gGk.TOPIC]: eg(y.t.esQcxn, y.t["m+veAn"], y.t["ws/1FA"]),
                [F.gGk.BITRATE]: ed(y.t.fw81ak, y.t.MFNlgZ),
                [F.gGk.RTC_REGION_OVERRIDE]: eg(y.t["6kajxx"], y.t.eGOlmU, y.t["0JMZdz"]),
                [F.gGk.USER_LIMIT]: ed(y.t.wk5t7p, y.t.XgjCEh),
                [F.gGk.RATE_LIMIT_PER_USER]: ed(y.t["7lirhF"], y.t.j4CCJR),
                [F.gGk.APPLICATION_ID]: ed(y.t.fnhin8, y.t.mcNs5B),
                [F.gGk.PERMISSIONS_RESET]: () => y.t["+vSBFY"],
                [F.gGk.PERMISSIONS_GRANTED]: () => y.t.EKLJv8,
                [F.gGk.PERMISSIONS_DENIED]: () => y.t.U3rO5X,
                [F.gGk.REASON]: () => y.t["2IW3C5"],
                [F.gGk.NSFW]: eT(y.t.H8Ri2Y, y.t.WW6cJw),
                [F.gGk.TYPE]: ed(y.t.Vn5zn2, y.t.aq4uWI),
                [F.gGk.VIDEO_QUALITY_MODE]: ed(y.t.e68fAU, y.t.djbES0),
                [F.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: ed(y.t.nYz2mg, y.t.oczvRI),
                [F.gGk.DEFAULT_THREAD_RATE_LIMIT_PER_USER]: eg(y.t.tOJ8h7, y.t.WaSgzk, y.t["lj+A4u"]),
                [F.gGk.FLAGS]: () => y.t.ImCQko,
                [F.gGk.AVAILABLE_TAG_ADD]: () => y.t.H86QQU,
                [F.gGk.AVAILABLE_TAG_EDIT]: () => y.t.YtUzls,
                [F.gGk.AVAILABLE_TAG_DELETE]: () => y.t["8QOseg"],
                [F.gGk.LINKED_LOBBY]: eA(y.t["+/3TkD"], y.t["5kDYS3"]),
            };
        case F.GaG.USER:
            return {
                [F.gGk.NICK]: eg(y.t.qXDsHv, y.t["m+qury"], y.t.DvLvjF),
                [F.gGk.DEAF]: eT(y.t.mArLlW, y.t.ddvVYG),
                [F.gGk.MUTE]: eT(y.t["bxs/lS"], y.t.FjecQM),
                [F.gGk.ROLES_REMOVE]: () => y.t["+2SDWV"],
                [F.gGk.ROLES_ADD]: () => y.t["B3/3IJ"],
                [F.gGk.PRUNE_DELETE_DAYS]: () => y.t["+Cvc+D"],
                [F.gGk.COMMUNICATION_DISABLED_UNTIL]: eg(y.t.LXTQr5, y.t.LXTQr5, y.t.ULSdnE),
                [F.gGk.BYPASSES_VERIFICATION]: eT(y.t.NBPBui, y.t.zATost),
                [F.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => y.t.YbouFH,
                ...B(),
            };
        case F.GaG.ROLE:
            return {
                [F.gGk.NAME]: ed(y.t.QBmlaD, y.t["Lfs4r+"]),
                [F.gGk.DESCRIPTION]: ed(y.t.XeYKWJ, y.t.PSfeIj),
                [F.gGk.PERMISSIONS_GRANTED]: () => y.t["9i/DvE"],
                [F.gGk.PERMISSIONS_DENIED]: () => y.t.pa1ZVh,
                [F.gGk.COLOR]: eN({ "#000000": y.t.TK6E1H }, y.t["2FQFiw"]),
                [F.gGk.COLORS]: (e) => (null == e.newValue.secondary_color ? y.t.U44ttm : y.t["WnSwL/"]),
                [F.gGk.HOIST]: eT(y.t.gWfe24, y.t["+tb8kN"]),
                [F.gGk.MENTIONABLE]: eT(y.t.LL8VFF, y.t.Z7xzmC),
                [F.gGk.ICON_HASH]: () => y.t["iEE79/"],
                [F.gGk.UNICODE_EMOJI]: () => y.t.KiLMM0,
                ...B(),
            };
        case F.GaG.ONBOARDING_PROMPT:
            return {
                ...B(),
                [F.gGk.TITLE]: ed(y.t["sNpuy/"], y.t["3Ukc/g"]),
                [F.gGk.DESCRIPTION]: ed(y.t.PP1q0x, y.t.z7pYLg),
                [F.gGk.OPTIONS]: () => y.t["3G5C9+"],
                [F.gGk.SINGLE_SELECT]: eT(y.t.v4WnR3, y.t["6Qg3uC"]),
                [F.gGk.REQUIRED]: eT(y.t["0MPAM6"], y.t.pwsXir),
            };
        case F.GaG.GUILD_ONBOARDING:
            return {
                ...B(),
                [F.gGk.DEFAULT_CHANNEL_IDS]: () => y.t["8M+D2s"],
                [F.gGk.ENABLE_DEFAULT_CHANNELS]: eT(y.t["EYd/ls"], y.t["36OZeQ"]),
                [F.gGk.ENABLE_ONBOARDING_PROMPTS]: eT(y.t.V3u8PV, y.t["r66lc/"]),
                [F.gGk.ENABLED]: eT(y.t.SODVIs, y.t.u8HY5U),
                [F.gGk.MODE]: eI({ [b.SD.ONBOARDING_ADVANCED]: y.t.JbzVsh, [b.SD.ONBOARDING_DEFAULT]: y.t.aCgU0S }),
            };
        case F.GaG.HOME_SETTINGS:
            return {
                ...B(),
                [F.gGk.WELCOME_MESSAGE]: () => y.t.dKQ1xd,
                [F.gGk.NEW_MEMBER_ACTIONS]: () => y.t.jDUIno,
                [F.gGk.RESOURCE_CHANNELS]: () => y.t.SIX0mr,
            };
        case F.GaG.INVITE:
            return {
                [F.gGk.CODE]: () => y.t.rrRHgb,
                [F.gGk.CHANNEL_ID]: () => y.t.Q1vd5q,
                [F.gGk.MAX_USES]: eN({ 0: y.t.Yx8LNm }, y.t["3ygnwU"]),
                [F.gGk.MAX_AGE]: eN({ [y.intl.string(y.t.PqEzn8)]: y.t.uWrLvw }, y.t["Q+5kcO"]),
                [F.gGk.TEMPORARY]: eT(y.t.MWp6H7, y.t.omiqTH),
                [F.gGk.FLAGS]: eI({ [u.Q.IS_GUEST_INVITE]: y.t.XYZMbL }),
                [F.gGk.ROLE_IDS]: () => y.t.gb1Owj,
                ...B(),
            };
        case F.GaG.WEBHOOK:
            return {
                [F.gGk.CHANNEL_ID]: ed(y.t.jhPprR, y.t.ar4qYO),
                [F.gGk.NAME]: ed(y.t.ZVGrzU, y.t.tywdZR),
                [F.gGk.AVATAR_HASH]: () => y.t.KB52Uj,
                [F.gGk.REASON]: () => y.t["2IW3C5"],
            };
        case F.GaG.EMOJI:
            return { [F.gGk.NAME]: ed(y.t.ahU1o5, y.t["wxs+vZ"]), ...B() };
        case F.GaG.STICKER:
            return {
                [F.gGk.NAME]: ed(y.t.cdl0Yo, y.t.o3W2ly),
                [F.gGk.TAGS]: ed(y.t["zwL+S2"], y.t["VYfKA+"]),
                [F.gGk.DESCRIPTION]: ed(y.t.XeYKWJ, y.t.PSfeIj),
                ...B(),
            };
        case F.GaG.INTEGRATION:
            return {
                [F.gGk.ENABLE_EMOTICONS]: eT(y.t.FI0m5x, y.t.olpKC6),
                [F.gGk.EXPIRE_BEHAVIOR]: eI({ 0: y.t["1Bb1+u"], 1: y.t.vjlW6m }),
                [F.gGk.EXPIRE_GRACE_PERIOD]: () => y.t.iovXMa,
                ...B(),
            };
        case F.GaG.STAGE_INSTANCE:
            return {
                [F.gGk.TOPIC]: ed(y.t["m+veAn"], y.t.esQcxn),
                [F.gGk.PRIVACY_LEVEL]: eI({ [j.dD.GUILD_ONLY]: y.t["EC+CDt"], [j.dD.PUBLIC]: y.t["pK/WG0"] }),
                ...B(),
            };
        case F.GaG.GUILD_SCHEDULED_EVENT:
            return {
                [F.gGk.NAME]: () => y.t["21EXHW"],
                [F.gGk.DESCRIPTION]: () => y.t.Vm1ofw,
                [F.gGk.PRIVACY_LEVEL]: eI({ [j.dD.GUILD_ONLY]: y.t["EC+CDt"], [j.dD.PUBLIC]: y.t["pK/WG0"] }),
                [F.gGk.STATUS]: eI({
                    [j.XG.SCHEDULED]: y.t.hXKDgq,
                    [j.XG.ACTIVE]: y.t.lRX1nz,
                    [j.XG.COMPLETED]: y.t["/eFIhq"],
                    [j.XG.CANCELED]: y.t.NWIYhj,
                }),
                [F.gGk.ENTITY_TYPE]: eI({
                    [j.Ps.NONE]: y.t["6sO3Ss"],
                    [j.Ps.STAGE_INSTANCE]: y.t["Wo+s1y"],
                    [j.Ps.VOICE]: y.t.XCVaIL,
                    [j.Ps.EXTERNAL]: y.t.IvhAj2,
                }),
                [F.gGk.CHANNEL_ID]: eA(y.t.yJBIcX, y.t["+PqSsi"]),
                [F.gGk.LOCATION]: eA(y.t.GaMBHy, y.t.PsICk0),
                [F.gGk.IMAGE_HASH]: eA(y.t.S3vcRK, y.t.KQu47I),
                ...B(),
            };
        case F.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return {
                [F.gGk.SCHEDULED_START_TIME]: eA(y.t.zMIYVg, y.t.fzF8Gd),
                [F.gGk.SCHEDULED_END_TIME]: eA(y.t.vONSQA, y.t.IlIti3),
                [F.gGk.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return y.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return y.t.dRNTWW;
                    }
                },
                ...B(),
            };
        case F.GaG.THREAD:
            return {
                [F.gGk.NAME]: ed(y.t.tUKRzX, y.t.kPCHON),
                [F.gGk.ARCHIVED]: eT(y.t.jDi9FK, y.t.F6dvbT),
                [F.gGk.LOCKED]: eT(y.t.JSy1QW, y.t.C7Jgo8),
                [F.gGk.INVITABLE]: eT(y.t.dxNUs9, y.t.biJvYG),
                [F.gGk.AUTO_ARCHIVE_DURATION]: ed(y.t.LuaG3y, y.t["18d9qr"]),
                [F.gGk.RATE_LIMIT_PER_USER]: ed(y.t["7lirhF"], y.t.j4CCJR),
                [F.gGk.FLAGS]: () => y.t.sSAQtj,
                [F.gGk.AVAILABLE_TAG_ADD]: () => y.t.H86QQU,
                [F.gGk.AVAILABLE_TAG_DELETE]: () => y.t["8QOseg"],
                ...B(),
            };
        case F.GaG.APPLICATION_COMMAND:
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
        case F.GaG.AUTO_MODERATION_RULE:
            return {
                [F.gGk.NAME]: () => y.t.XwxAJT,
                [F.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => y.t.fx0pyl,
                [F.gGk.AUTO_MODERATION_EVENT_TYPE]: () => y.t["46Y+L5"],
                [F.gGk.AUTO_MODERATION_ACTIONS]: () => y.t["8efxfv"],
                [F.gGk.AUTO_MODERATION_ENABLED]: (e) => (!0 === (e.newValue ?? e.oldValue) ? y.t.fCmxC2 : y.t.Wrg9Jn),
                [F.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => y.t.TRb7Nx,
                [F.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => y.t.mzitLE,
                [F.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => y.t["h/lM65"],
                [F.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => y.t["9V2yaC"],
                [F.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => y.t["4Qe9ny"],
                [F.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => y.t.GyZtxp,
                [F.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => y.t.OQDadc,
                [F.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => y.t["FvvR+K"],
                [F.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => y.t.p5nSvy,
                ...B(),
            };
        case F.GaG.GUILD_SOUNDBOARD:
            return {
                [F.gGk.NAME]: ed(y.t.VOtRSO, y.t.OK7B8E),
                [F.gGk.VOLUME]: ed(y.t.igrDB9, y.t.L5lDFJ),
                [F.gGk.EMOJI_NAME]: eg(y.t.IIanaY, y.t["z4w4U/"], y.t.V8TfyU),
                [F.gGk.EMOJI_ID]: eg(y.t.ainxMB, y.t["2NPsYu"], y.t["8crtns"]),
                ...B(),
            };
        case F.GaG.VOICE_CHANNEL_STATUS:
            return { [F.gGk.STATUS]: () => y.t.HyCSnI, ...B() };
        case F.GaG.GUILD_MEMBER_VERIFICATION:
            return {
                [F.gGk.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? y.t.fnkzDY : y.t.WYT6ka),
                [F.gGk.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? y.t.jzSvVd : y.t.WxyOtj),
                ...B(),
            };
        case F.GaG.GUILD_PROFILE:
            return {
                [F.gGk.DESCRIPTION]: () => y.t.nsUZKY,
                [F.gGk.BRAND_COLOR_PRIMARY]: () => y.t.qe9mgN,
                [F.gGk.CUSTOM_BANNER_HASH]: () => y.t["04b5KC"],
                [F.gGk.TRAITS]: () => y.t.dEy9WO,
                [F.gGk.GAME_APPLICATION_IDS]: () => y.t["8BOT3x"],
                [F.gGk.VISIBILITY]: () => y.t.bCl1Ep,
                [F.gGk.SERVER_TAG]: eA(y.t.ix1dnX, y.t["4LKpKb"]),
            };
        default:
            return B();
    }
}
let H = {
    [F.GaG.CHANNEL]: { [F.gGk.ID]: !0, [F.gGk.PERMISSION_OVERWRITES]: !0 },
    [F.GaG.CHANNEL_OVERWRITE]: { [F.gGk.TYPE]: !0, [F.gGk.ID]: !0, [F.gGk.PERMISSION_OVERWRITES]: !0 },
    [F.GaG.INVITE]: { [F.gGk.INVITER_ID]: !0, [F.gGk.USES]: !0 },
    [F.GaG.WEBHOOK]: { [F.gGk.TYPE]: !0, [F.gGk.APPLICATION_ID]: !0 },
    [F.GaG.INTEGRATION]: { [F.gGk.TYPE]: !0, [F.gGk.NAME]: !0 },
    [F.GaG.THREAD]: { [F.gGk.ID]: !0, [F.gGk.TYPE]: !0 },
    [F.GaG.STICKER]: {
        [F.gGk.ID]: !0,
        [F.gGk.TYPE]: !0,
        [F.gGk.ASSET]: !0,
        [F.gGk.FORMAT_TYPE]: !0,
        [F.gGk.AVAILABLE]: !0,
        [F.gGk.GUILD_ID]: !0,
    },
    [F.GaG.GUILD_HOME]: { [F.gGk.ENTITY_TYPE]: !0 },
    [F.GaG.GUILD_ONBOARDING]: { [F.gGk.PROMPTS]: !0 },
    [F.GaG.GUILD_SOUNDBOARD]: { [F.gGk.ID]: !0, [F.gGk.SOUND_ID]: !0 },
};
function w(e, t) {
    if (
        e.actionType === F.RWi.DELETE &&
        e.action !== F.F_X.MEMBER_BAN_ADD &&
        e.action !== F.F_X.MEMBER_KICK &&
        e.action !== F.F_X.MEMBER_PRUNE
    )
        return t.key !== F.gGk.REASON;
    let n = H[e.targetType];
    return null != n && !0 === n[t.key];
}
function W(e) {
    let { changes: t } = e;
    return null != t && t.some((t) => !w(e, t));
}
let Y = () => [
    { value: F.F_X.ALL, label: y.intl.string(y.t.QxEVcv), valueLabel: y.intl.string(y.t.an9Ry3) },
    { value: F.F_X.GUILD_UPDATE, label: y.intl.string(y.t["5INZa3"]) },
    { value: F.F_X.CHANNEL_CREATE, label: y.intl.string(y.t["2uh4vJ"]) },
    { value: F.F_X.CHANNEL_UPDATE, label: y.intl.string(y.t.mGsBLV) },
    { value: F.F_X.CHANNEL_DELETE, label: y.intl.string(y.t.hCHzAr) },
    { value: F.F_X.CHANNEL_OVERWRITE_CREATE, label: y.intl.string(y.t["8TnAMP"]) },
    { value: F.F_X.CHANNEL_OVERWRITE_UPDATE, label: y.intl.string(y.t.Jqx0Bi) },
    { value: F.F_X.CHANNEL_OVERWRITE_DELETE, label: y.intl.string(y.t.gBXOr4) },
    { value: F.F_X.CHANNEL_POSITION_UPDATE, label: y.intl.string(y.t.hKfSwp) },
    { value: F.F_X.MEMBER_KICK, label: y.intl.string(y.t["Q1/hN8"]) },
    { value: F.F_X.MEMBER_PRUNE, label: y.intl.string(y.t.tOTTja) },
    { value: F.F_X.MEMBER_BAN_ADD, label: y.intl.string(y.t["NfPn+e"]) },
    { value: F.F_X.MEMBER_BAN_REMOVE, label: y.intl.string(y.t.XCsGfI) },
    { value: F.F_X.MEMBER_UPDATE, label: y.intl.string(y.t["F/jmNJ"]) },
    { value: F.F_X.MEMBER_ROLE_UPDATE, label: y.intl.string(y.t.zAveSI) },
    { value: F.F_X.MEMBER_MOVE, label: y.intl.string(y.t.QshteR) },
    { value: F.F_X.MEMBER_DISCONNECT, label: y.intl.string(y.t.Z45os7) },
    { value: F.F_X.BOT_ADD, label: y.intl.string(y.t.vuH24Z) },
    { value: F.F_X.THREAD_CREATE, label: y.intl.string(y.t["+zl0DG"]) },
    { value: F.F_X.THREAD_UPDATE, label: y.intl.string(y.t.rbIry3) },
    { value: F.F_X.THREAD_DELETE, label: y.intl.string(y.t.hFjNEA) },
    { value: F.F_X.ROLE_CREATE, label: y.intl.string(y.t.AbxKtv) },
    { value: F.F_X.ROLE_UPDATE, label: y.intl.string(y.t.t3Z6sU) },
    { value: F.F_X.ROLE_DELETE, label: y.intl.string(y.t.YsFpa4) },
    { value: F.F_X.ROLE_POSITION_UPDATE, label: y.intl.string(y.t["g+lLUV"]) },
    { value: F.F_X.ONBOARDING_PROMPT_CREATE, label: y.intl.string(y.t.ZV9tqc) },
    { value: F.F_X.ONBOARDING_PROMPT_UPDATE, label: y.intl.string(y.t.PcOdvX) },
    { value: F.F_X.ONBOARDING_PROMPT_DELETE, label: y.intl.string(y.t["+r33Na"]) },
    { value: F.F_X.ONBOARDING_CREATE, label: y.intl.string(y.t.uDADde) },
    { value: F.F_X.ONBOARDING_UPDATE, label: y.intl.string(y.t.J1H1wg) },
    { value: F.F_X.HOME_SETTINGS_CREATE, label: y.intl.string(y.t.Di4cvI) },
    { value: F.F_X.HOME_SETTINGS_UPDATE, label: y.intl.string(y.t.tzyrJH) },
    { value: F.F_X.INVITE_CREATE, label: y.intl.string(y.t["0BNJdX"]) },
    { value: F.F_X.INVITE_UPDATE, label: y.intl.string(y.t["o++obV"]) },
    { value: F.F_X.INVITE_DELETE, label: y.intl.string(y.t.iP40Az) },
    { value: F.F_X.WEBHOOK_CREATE, label: y.intl.string(y.t["tBF4+S"]) },
    { value: F.F_X.WEBHOOK_UPDATE, label: y.intl.string(y.t.eV3McO) },
    { value: F.F_X.WEBHOOK_DELETE, label: y.intl.string(y.t.AAL3K1) },
    { value: F.F_X.EMOJI_CREATE, label: y.intl.string(y.t.RuWm0V) },
    { value: F.F_X.EMOJI_UPDATE, label: y.intl.string(y.t.WzdUY7) },
    { value: F.F_X.EMOJI_DELETE, label: y.intl.string(y.t.c3dK2L) },
    { value: F.F_X.MESSAGE_DELETE, label: y.intl.string(y.t.daTfXh) },
    { value: F.F_X.MESSAGE_BULK_DELETE, label: y.intl.string(y.t.nrBxeh) },
    { value: F.F_X.MESSAGE_PIN, label: y.intl.string(y.t.MUldyN) },
    { value: F.F_X.MESSAGE_UNPIN, label: y.intl.string(y.t.n4zKhA) },
    { value: F.F_X.INTEGRATION_CREATE, label: y.intl.string(y.t.deNm8x) },
    { value: F.F_X.INTEGRATION_UPDATE, label: y.intl.string(y.t.HT7Sfg) },
    { value: F.F_X.INTEGRATION_DELETE, label: y.intl.string(y.t["+kJ09q"]) },
    { value: F.F_X.STICKER_CREATE, label: y.intl.string(y.t["3DzNjU"]) },
    { value: F.F_X.STICKER_UPDATE, label: y.intl.string(y.t.tdhW5b) },
    { value: F.F_X.STICKER_DELETE, label: y.intl.string(y.t["+ZhGOk"]) },
    { value: F.F_X.STAGE_INSTANCE_CREATE, label: y.intl.string(y.t.sPbjA6) },
    { value: F.F_X.STAGE_INSTANCE_UPDATE, label: y.intl.string(y.t.cW9LfJ) },
    { value: F.F_X.STAGE_INSTANCE_DELETE, label: y.intl.string(y.t["U1r+yD"]) },
    { value: F.F_X.GUILD_SCHEDULED_EVENT_CREATE, label: y.intl.string(y.t.H81Zyy) },
    { value: F.F_X.GUILD_SCHEDULED_EVENT_UPDATE, label: y.intl.string(y.t["FM69l+"]) },
    { value: F.F_X.GUILD_SCHEDULED_EVENT_DELETE, label: y.intl.string(y.t.Rq28Bh) },
    { value: F.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE, label: y.intl.string(y.t.iPdFOt) },
    { value: F.F_X.AUTO_MODERATION_BLOCK_MESSAGE, label: y.intl.string(y.t.gNq5z6) },
    { value: F.F_X.AUTO_MODERATION_RULE_CREATE, label: y.intl.string(y.t.f72Zqb) },
    { value: F.F_X.AUTO_MODERATION_RULE_UPDATE, label: y.intl.string(y.t.XeqIiv) },
    { value: F.F_X.AUTO_MODERATION_RULE_DELETE, label: y.intl.string(y.t.syAApU) },
    { value: F.F_X.GUILD_HOME_FEATURE_ITEM, label: y.intl.string(y.t.lhG5KN) },
    { value: F.F_X.GUILD_HOME_REMOVE_ITEM, label: y.intl.string(y.t.lRPRwS) },
    { value: F.F_X.SOUNDBOARD_SOUND_CREATE, label: y.intl.string(y.t.yoRi5r) },
    { value: F.F_X.SOUNDBOARD_SOUND_UPDATE, label: y.intl.string(y.t.uKlG0Z) },
    { value: F.F_X.SOUNDBOARD_SOUND_DELETE, label: y.intl.string(y.t.gq0iCT) },
    { value: F.F_X.VOICE_CHANNEL_STATUS_CREATE, label: y.intl.string(y.t.rGr0YM) },
    { value: F.F_X.VOICE_CHANNEL_STATUS_DELETE, label: y.intl.string(y.t.V9PEQ4) },
];
function K(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function z(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function J(e) {
    let t = Y().find((t) => t.value === e.action);
    return null != K(F.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? y.intl.string(y.t.z3wbj8) : (t?.label ?? null);
}
let Q = {
    [d.pJ.SECONDS]: (e) => y.intl.formatToPlainString(y.t.geSp4K, { seconds: e }),
    [d.pJ.MINUTES]: (e) => y.intl.formatToPlainString(y.t.iXLF9W, { minutes: e }),
    [d.pJ.HOURS]: (e) => y.intl.formatToPlainString(y.t.xCjYxK, { hours: e }),
    [d.pJ.DAYS]: (e) => y.intl.formatToPlainString(y.t["k2UNz+"], { days: e }),
};
function q(e) {
    let t = K(F.gGk.COMMUNICATION_DISABLED_UNTIL, e),
        n = z(F.gGk.ROLES_ADD, e).length > 0,
        l = z(F.gGk.ROLES_REMOVE, e).length > 0;
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
    let t = z(F.gGk.ROLES_ADD, e),
        n = z(F.gGk.ROLES_REMOVE, e),
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
        case F.F_X.GUILD_UPDATE:
            return y.t.LjZO31;
        case F.F_X.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === F.gGk.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case F.rbe.GUILD_STAGE_VOICE:
                    return y.t["OKp4+o"];
                case F.rbe.GUILD_VOICE:
                    return y.t.NPOy4G;
                case F.rbe.GUILD_CATEGORY:
                    return y.t.T3KIjz;
                case F.rbe.GUILD_FORUM:
                    return y.t.VvNgHX;
                case F.rbe.GUILD_MEDIA:
                    return y.t["4NWSxa"];
                case F.rbe.GUILD_ANNOUNCEMENT:
                    return y.t.eYP6UV;
                default:
                    return y.t.wrYNG2;
            }
        case F.F_X.CHANNEL_UPDATE:
            return y.t.nTYk6B;
        case F.F_X.CHANNEL_DELETE:
            return y.t.ynfvkm;
        case F.F_X.CHANNEL_OVERWRITE_CREATE:
            return y.t.l5Cu1a;
        case F.F_X.CHANNEL_OVERWRITE_UPDATE:
            return y.t.uhtbNU;
        case F.F_X.CHANNEL_OVERWRITE_DELETE:
            return y.t["HASt/3"];
        case F.F_X.CHANNEL_POSITION_UPDATE:
            return y.t.d3aX5b;
        case F.F_X.MEMBER_KICK:
            return y.t.B5hDZX;
        case F.F_X.MEMBER_PRUNE:
            return y.t.qKOZTP;
        case F.F_X.MEMBER_BAN_ADD:
            return y.t["XklUm/"];
        case F.F_X.MEMBER_BAN_REMOVE:
            return y.t.o3Y6HD;
        case F.F_X.MEMBER_UPDATE:
            return y.t.pznhLN;
        case F.F_X.MEMBER_ROLE_UPDATE:
            return y.t.Vngfia;
        case F.F_X.MEMBER_MOVE:
            return $(e, { legacy: y.t.Yt6NkU, named: y.t.VW2XVd, users: y.t.hEqea3, usersOverflow: y.t.qXazAb });
        case F.F_X.MEMBER_DISCONNECT:
            return $(e, { legacy: y.t.K4eCZw, named: y.t.tTwGD8, users: y.t.lODaeu, usersOverflow: y.t.xuGjhY });
        case F.F_X.BOT_ADD:
            return y.t.fWvX0G;
        case F.F_X.ROLE_CREATE:
            return y.t.UTLTx6;
        case F.F_X.ROLE_UPDATE:
            return y.t.NRbN18;
        case F.F_X.ROLE_DELETE:
            return y.t["4s63tb"];
        case F.F_X.ROLE_POSITION_UPDATE:
            return y.t.jZeaoW;
        case F.F_X.INVITE_CREATE:
            return y.t.YHOXWy;
        case F.F_X.INVITE_UPDATE:
            return y.t.ja3kGS;
        case F.F_X.INVITE_DELETE:
            return y.t["3n/iWk"];
        case F.F_X.WEBHOOK_CREATE:
            return y.t.MhYhil;
        case F.F_X.WEBHOOK_UPDATE:
            return y.t["6GTlWB"];
        case F.F_X.WEBHOOK_DELETE:
            return y.t.in0VjZ;
        case F.F_X.EMOJI_CREATE:
            return y.t["7vekRO"];
        case F.F_X.EMOJI_UPDATE:
            return y.t.IsCKfh;
        case F.F_X.EMOJI_DELETE:
            return y.t.JnUaVG;
        case F.F_X.STICKER_CREATE:
            return y.t.DRZifq;
        case F.F_X.STICKER_UPDATE:
            return y.t.bhujGc;
        case F.F_X.STICKER_DELETE:
            return y.t.rGEP9U;
        case F.F_X.MESSAGE_DELETE:
            return y.t["HPkD+M"];
        case F.F_X.MESSAGE_BULK_DELETE:
            return y.t["3RIvLE"];
        case F.F_X.MESSAGE_PIN:
            return y.t.Yna7E7;
        case F.F_X.MESSAGE_UNPIN:
            return y.t.NCxXUW;
        case F.F_X.INTEGRATION_CREATE:
            return y.t.HYvCb3;
        case F.F_X.INTEGRATION_UPDATE:
            return y.t.ibCCOS;
        case F.F_X.INTEGRATION_DELETE:
            return y.t["8zScWY"];
        case F.F_X.STAGE_INSTANCE_CREATE:
            return y.t["n7x/DF"];
        case F.F_X.STAGE_INSTANCE_UPDATE:
            return y.t["0hQYU4"];
        case F.F_X.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return y.t["Oi/in9"];
            return y.t["7ZIFm9"];
        case F.F_X.GUILD_SCHEDULED_EVENT_CREATE:
            return y.t.S7k52p;
        case F.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
            return y.t.ebTK11;
        case F.F_X.GUILD_SCHEDULED_EVENT_DELETE:
            return y.t["/ARPKQ"];
        case F.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case F.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return y.t["8qCI36"];
        case F.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return y.t.zYb2da;
        case F.F_X.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === F.gGk.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case F.rbe.PRIVATE_THREAD:
                    return y.t.Br0y5w;
                case F.rbe.ANNOUNCEMENT_THREAD:
                    return y.t["6uaMmO"];
                default:
                    return y.t["2cxQ7G"];
            }
        case F.F_X.THREAD_UPDATE:
            return y.t.PSsy4t;
        case F.F_X.THREAD_DELETE:
            return y.t.s3Khn8;
        case F.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return y.t.uzCqBm;
        case F.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
            return y.t.NqWv2K;
        case F.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
            if (e.options?.auto_moderation_rule_trigger_type === k.uh.USER_PROFILE.toString()) return y.t.YQsjej;
            return y.t.SD0PwJ;
        case F.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return y.t.Vk4TwX;
        case F.F_X.AUTO_MODERATION_QUARANTINE_USER:
            return y.t["/W5u5o"];
        case F.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
            return y.t.ONvWyr;
        case F.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return y.t["ryGLk+"];
        case F.F_X.AUTO_MODERATION_RULE_CREATE:
            return y.t["NKljj+"];
        case F.F_X.AUTO_MODERATION_RULE_UPDATE:
            return y.t["3wEA9u"];
        case F.F_X.AUTO_MODERATION_RULE_DELETE:
            return y.t.umua3n;
        case F.F_X.ONBOARDING_PROMPT_CREATE:
            return y.t["/8A1g2"];
        case F.F_X.ONBOARDING_PROMPT_UPDATE:
            return y.t.ArIrWI;
        case F.F_X.ONBOARDING_PROMPT_DELETE:
            return y.t.IuBTao;
        case F.F_X.ONBOARDING_CREATE:
            return y.t["wDaq3/"];
        case F.F_X.ONBOARDING_UPDATE:
            return y.t["yONu/l"];
        case F.F_X.HOME_SETTINGS_CREATE:
            return y.t.dSdCjG;
        case F.F_X.HOME_SETTINGS_UPDATE:
            return y.t.XHE8qv;
        case F.F_X.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === F.gGk.ENTITY_TYPE) : null;
            if (null == l) return y.t["UZ+U3A"];
            switch (l.newValue) {
                case E.MESSAGE:
                    return y.t["PyEa+J"];
                case E.FORUM_POST:
                    return y.t.hCuAb1;
                default:
                    return y.t["UZ+U3A"];
            }
        case F.F_X.GUILD_HOME_REMOVE_ITEM:
            return y.t.kPReun;
        case F.F_X.SOUNDBOARD_SOUND_CREATE:
            return y.t["0PD83V"];
        case F.F_X.SOUNDBOARD_SOUND_UPDATE:
            return y.t.CM8n1w;
        case F.F_X.SOUNDBOARD_SOUND_DELETE:
            return y.t["kVz4/0"];
        case F.F_X.VOICE_CHANNEL_STATUS_CREATE:
            return y.t.MWjnU7;
        case F.F_X.VOICE_CHANNEL_STATUS_DELETE:
            return y.t.aS8Krq;
        case F.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
            return y.t["NUKUb+"];
        case F.F_X.GUILD_PROFILE_UPDATE:
            return y.t.Ed6hF1;
        case F.F_X.GUILD_MIGRATE_PIN_PERMISSION:
            return y.t["3Ne7MA"];
        case F.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return y.t["naflH+"];
        default:
            return null;
    }
}
function et(e) {
    switch (e) {
        case P.lx.GUILD_FEED_REMOVED:
            return y.intl.string(y.t["5G8ZD4"]);
        case P.lx.ACTIVE_CHANNELS_REMOVED:
            return y.intl.string(y.t["4YLtzC"]);
        case P.lx.PINNED:
            return y.intl.string(y.t["1QLRYb"]);
    }
    return null;
}
function en(e) {
    switch (e) {
        case P.lx.GUILD_FEED_REMOVED:
            return y.intl.string(y.t.S5kuWQ);
        case P.lx.ACTIVE_CHANNELS_REMOVED:
            return y.intl.string(y.t["8qpgcz"]);
        case P.lx.PINNED:
            return y.intl.string(y.t.CMweGA);
    }
    return null;
}
function el(e, t) {
    switch (e) {
        case F.xBc.CREATE_INSTANT_INVITE:
            return y.intl.string(y.t.zJrgTG);
        case F.xBc.KICK_MEMBERS:
            return y.intl.string(y.t.pBNv6i);
        case F.xBc.BAN_MEMBERS:
            return y.intl.string(y.t.oTBA7N);
        case F.xBc.ADMINISTRATOR:
            return y.intl.string(y.t.PGvZqX);
        case F.xBc.MANAGE_CHANNELS:
            if (t.targetType === F.GaG.CHANNEL || t.targetType === F.GaG.CHANNEL_OVERWRITE)
                return y.intl.string(y.t.nAw15L);
            return y.intl.string(y.t["9qLtWs"]);
        case F.xBc.MANAGE_GUILD:
            return y.intl.string(y.t.QZRcfO);
        case F.xBc.VIEW_GUILD_ANALYTICS:
            return y.intl.string(y.t["rQJBE/"]);
        case F.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return y.intl.string(y.t["0lTLTv"]);
        case F.xBc.CHANGE_NICKNAME:
            return y.intl.string(y.t.dilOF6);
        case F.xBc.MANAGE_NICKNAMES:
            return y.intl.string(y.t["t+Ct5x"]);
        case F.xBc.MANAGE_ROLES:
            return y.intl.string(y.t["C8d+oG"]);
        case F.xBc.MANAGE_WEBHOOKS:
            return y.intl.string(y.t["/ADKmM"]);
        case F.xBc.CREATE_GUILD_EXPRESSIONS:
            return y.intl.string(y.t.HarVuP);
        case F.xBc.MANAGE_GUILD_EXPRESSIONS:
            return y.intl.string(y.t.bbuXIn);
        case F.xBc.VIEW_AUDIT_LOG:
            return y.intl.string(y.t.fZgLpA);
        case F.xBc.VIEW_CHANNEL:
            if (t.targetType === F.GaG.CHANNEL || t.targetType === F.GaG.CHANNEL_OVERWRITE)
                return y.intl.string(y.t["W/A4Qp"]);
            return y.intl.string(y.t.uV83yi);
        case F.xBc.SEND_MESSAGES:
            return y.intl.string(y.t.T32rkC);
        case F.xBc.SEND_TTS_MESSAGES:
            return y.intl.string(y.t.Mg7bku);
        case F.xBc.USE_APPLICATION_COMMANDS:
            return y.intl.string(y.t.shbR1a);
        case F.xBc.MANAGE_MESSAGES:
            return y.intl.string(y.t["6lU9xM"]);
        case F.xBc.EMBED_LINKS:
            return y.intl.string(y.t["969dEL"]);
        case F.xBc.ATTACH_FILES:
            return y.intl.string(y.t["3AS4UM"]);
        case F.xBc.READ_MESSAGE_HISTORY:
            return y.intl.string(y.t.l9ufaR);
        case F.xBc.MENTION_EVERYONE:
            return y.intl.string(y.t.Y78KGC);
        case F.xBc.USE_EXTERNAL_EMOJIS:
            return y.intl.string(y.t.BpBGZU);
        case F.xBc.USE_EXTERNAL_STICKERS:
            return y.intl.string(y.t["UeRs+b"]);
        case F.xBc.ADD_REACTIONS:
            return y.intl.string(y.t.yEoJAr);
        case F.xBc.CONNECT:
            return y.intl.string(y.t.S0W8Z5);
        case F.xBc.SPEAK:
            return y.intl.string(y.t["8w1tIR"]);
        case F.xBc.MUTE_MEMBERS:
            return y.intl.string(y.t["8EI30/"]);
        case F.xBc.DEAFEN_MEMBERS:
            return y.intl.string(y.t["9L47Fr"]);
        case F.xBc.MOVE_MEMBERS:
            return y.intl.string(y.t.YtjJPQ);
        case F.xBc.USE_VAD:
            return y.intl.string(y.t["08zAV7"]);
        case F.xBc.PRIORITY_SPEAKER:
            return y.intl.string(y.t.BVK71i);
        case F.xBc.STREAM:
            return y.intl.string(y.t.FlNoSV);
        case F.xBc.USE_SOUNDBOARD:
            return y.intl.string(y.t.Bco7NG);
        case F.xBc.USE_EXTERNAL_SOUNDS:
            return y.intl.string(y.t.pwaVJ6);
        case F.xBc.REQUEST_TO_SPEAK:
            return y.intl.string(y.t["5kicT2"]);
        case F.xBc.USE_EMBEDDED_ACTIVITIES:
            return y.intl.string(y.t.rLSGeh);
        case F.xBc.CREATE_EVENTS:
            return y.intl.string(y.t.qyjZua);
        case F.xBc.MANAGE_EVENTS:
            return y.intl.string(y.t.HIgA5a);
        case F.xBc.CREATE_PUBLIC_THREADS:
            return y.intl.string(y.t["25rKnX"]);
        case F.xBc.CREATE_PRIVATE_THREADS:
            return y.intl.string(y.t.QwbTSa);
        case F.xBc.SEND_MESSAGES_IN_THREADS:
            return y.intl.string(y.t.fTE74g);
        case F.xBc.MANAGE_THREADS:
            return y.intl.string(y.t.kEqgr7);
        case F.xBc.MODERATE_MEMBERS:
            return y.intl.string(y.t["+RL6pz"]);
        case F.xBc.SET_VOICE_CHANNEL_STATUS:
            return y.intl.string(y.t.VBwkUf);
        case F.xBc.SEND_POLLS:
            return y.intl.string(y.t.UMQ7Ww);
        case F.xBc.SEND_VOICE_MESSAGES:
            return y.intl.string(y.t.WlWSBT);
        case F.xBc.USE_EXTERNAL_APPS:
            return y.intl.string(y.t.TtA5rK);
        case F.xBc.PIN_MESSAGES:
            return y.intl.string(y.t.Y5BI39);
        case F.xBc.BYPASS_SLOWMODE:
            return y.intl.string(y.t.kqcjeV);
        case F.xBc.MANAGE_OFFICIAL_MESSAGES:
            return y.intl.string(y.t.Aj9ruN);
    }
    return null;
}
let er = [
    F.F_X.MEMBER_PRUNE,
    F.F_X.MEMBER_DISCONNECT,
    F.F_X.MEMBER_MOVE,
    F.F_X.CHANNEL_POSITION_UPDATE,
    F.F_X.ROLE_POSITION_UPDATE,
    F.F_X.CREATOR_MONETIZATION_REQUEST_CREATED,
    F.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED,
];
function ea(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let l = (function (e, t) {
                    switch (e.targetType) {
                        case F.GaG.GUILD:
                        case F.GaG.GUILD_HOME:
                        case F.GaG.GUILD_PROFILE:
                            return t;
                        case F.GaG.CHANNEL:
                        case F.GaG.CHANNEL_OVERWRITE:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, h.A, !0),
                            );
                        case F.GaG.USER:
                            return e_(
                                e,
                                F.gGk.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e,
                            );
                        case F.GaG.ROLE:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => L.A.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case F.GaG.ONBOARDING_PROMPT:
                            let n = e_(
                                e,
                                F.gGk.ID,
                                (e) => G.A.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? y.intl.string(y.t.ZNQyiR) : n;
                        case F.GaG.GUILD_ONBOARDING:
                        case F.GaG.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case F.GaG.INVITE:
                            return e_(e, F.gGk.CODE, F.FXj);
                        case F.GaG.INTEGRATION:
                            return e_(
                                e,
                                F.gGk.TYPE,
                                (e) => p.A.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.WEBHOOK:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.EMOJI:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => I.Ay.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.STICKER:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => m.A.getStickerById(e),
                                (e) => e.name,
                            );
                        case F.GaG.STAGE_INSTANCE:
                            return e_(
                                e,
                                F.gGk.TOPIC,
                                (e) => Object.values(S.A.getStageInstancesByGuild(t.id))?.find((t) => t.id === e),
                                (e) => e.topic,
                            );
                        case F.GaG.GUILD_SCHEDULED_EVENT:
                        case F.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.THREAD:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = p.A.integrations.find((t) => t.application?.id === e.targetId);
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.kc.CHAT ? `/\u2060${t}` : t;
                                },
                            );
                        case F.GaG.AUTO_MODERATION_RULE:
                            return e_(
                                e,
                                F.gGk.NAME,
                                (e) => p.A.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case F.GaG.GUILD_SOUNDBOARD:
                            return e_(e, F.gGk.NAME, F.FXj);
                        case F.GaG.HOME_SETTINGS:
                            return e_(
                                e,
                                F.gGk.GUILD_ID,
                                (e) => O.h.getSettings(e),
                                () => y.intl.string(y.t.VbpLyU),
                                t.id,
                            );
                        case F.GaG.VOICE_CHANNEL_STATUS:
                            return e_(
                                e,
                                F.gGk.STATUS,
                                (e) => R.A.getChannel(e),
                                (e) => (0, g.m1)(e, C.default, h.A, !0),
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
                                    case F.AO_.USER:
                                        t.subtarget = ec(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => x.Ay.getUserTag(e),
                                        );
                                        break;
                                    case F.AO_.ROLE:
                                        t.subtarget = ec(e.options.role_name, F.FXj);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (t.channel = e_(
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
                                    (e.action === F.F_X.MEMBER_MOVE || e.action === F.F_X.MEMBER_DISCONNECT) &&
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
                            if (t.action === F.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case F.g0g.ROLE:
                                        e.subtarget = ec(
                                            t.id,
                                            (e) => L.A.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case F.g0g.USER:
                                        e.subtarget = ec(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => x.Ay.getUserTag(e),
                                        );
                                        break;
                                    case F.g0g.CHANNEL:
                                        t.id === a()(n.id).subtract(1).toString()
                                            ? (e.subtarget = y.intl.string(y.t.MSYhgh))
                                            : (e.subtarget = ec(
                                                  t.id,
                                                  (e) => R.A.getChannel(e),
                                                  (e) => (0, g.m1)(e, C.default, h.A, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case F.gGk.OWNER_ID:
                                    return eo(e, (e) => C.default.getUser(e));
                                case F.gGk.CHANNEL_ID:
                                case F.gGk.AFK_CHANNEL_ID:
                                case F.gGk.SYSTEM_CHANNEL_ID:
                                case F.gGk.RULES_CHANNEL_ID:
                                case F.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eo(
                                        e,
                                        (e) => R.A.getChannel(e),
                                        (e) => (0, g.m1)(e, C.default, h.A, !0),
                                    );
                                case F.gGk.AFK_TIMEOUT:
                                    return eo(e, (e) => e / 60);
                                case F.gGk.BITRATE:
                                    return eo(e, (e) => e / 1e3);
                                case F.gGk.COLOR:
                                    return eo(e, (e) => (0, _.Hl)(e).toUpperCase());
                                case F.gGk.THEME_COLORS:
                                    return eo(
                                        e,
                                        (e) => `${(0, _.Hl)(e[0]).toUpperCase()}, ${(0, _.Hl)(e[1]).toUpperCase()}`,
                                    );
                                case F.gGk.MAX_AGE:
                                    return eo(e, (e) => {
                                        let t = U.Ay.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case F.gGk.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: l } = ei(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new D.QO(F.gGk.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(F.gGk.PERMISSIONS_DENIED, null, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case F.gGk.PERMISSIONS_GRANTED:
                                case F.gGk.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: l } = ei(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let l = new D.QO(e.key, null, n);
                                        t.push(l);
                                    }
                                    if (l.length > 0) {
                                        let e = new D.QO(F.gGk.PERMISSIONS_RESET, l, l);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case F.gGk.FLAGS: {
                                    let t = [],
                                        { added: n, removed: l } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                l = "number" == typeof t ? t : 0,
                                                r = c.VL(l, n),
                                                a = c.VL(n, l),
                                                i = [],
                                                s = [];
                                            for (let e of Object.values(P.lx))
                                                (c.Lt(r, e) && i.push(e), c.Lt(a, e) && s.push(e));
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
                                case F.gGk.PREFERRED_LOCALE:
                                    return eo(e, (e) => {
                                        let t = (0, y.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case F.gGk.VIDEO_QUALITY_MODE:
                                    return eo(e, (e) =>
                                        e === F.K3c.FULL ? y.intl.string(y.t["7jOoJE"]) : y.intl.string(y.t.jjKYpu),
                                    );
                                case F.gGk.SYSTEM_CHANNEL_FLAGS:
                                    let l, r;
                                    return (
                                        (l = {
                                            [F.ogj.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [F.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [F.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [F.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                F.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        }),
                                        (r = []),
                                        Object.values(F.ogj).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                a = (e.newValue & t) === t;
                                            if (n === a) return;
                                            let i = new D.QO(l[t], !n, !a);
                                            r.push(i);
                                        }),
                                        r
                                    );
                                case F.gGk.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.PZ).join(", "),
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE) return eo(e, N.X3);
                                    break;
                                case F.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE) return eo(e, N.nl);
                                    break;
                                case F.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
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
                                case F.gGk.AUTO_MODERATION_ADD_KEYWORDS:
                                case F.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case F.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case F.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case F.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case F.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => `'${e}'`).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) =>
                                                e
                                                    .map(R.A.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, g.m1)(e, C.default, h.A, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : y.intl.string(y.t["K/EdV8"]),
                                        );
                                    break;
                                case F.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === F.GaG.AUTO_MODERATION_RULE)
                                        return eo(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => L.A.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : y.intl.string(y.t["K/EdV8"]),
                                        );
                                    break;
                                case F.gGk.ROLE_IDS:
                                    if (t.targetType === F.GaG.INVITE)
                                        return eo(e, (e) =>
                                            e
                                                .map((e) => L.A.getRole(n.id, e))
                                                .filter((e) => null != e)
                                                .map((e) => ({ id: e.id, name: e.name })),
                                        );
                                    break;
                                case F.gGk.AVAILABLE_TAGS:
                                    return eu(e);
                                case F.gGk.APPLIED_TAGS:
                                    return eE(e, t);
                                case F.gGk.SCHEDULED_START_TIME:
                                case F.gGk.SCHEDULED_END_TIME:
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
    for (let e of Object.values(F.xBc)) (o.zy(r, e) && i.push(e), o.zy(a, e) && s.push(e));
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
        _ = n.filter((e) => !u.has(e)),
        c = [];
    for (let e of o) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new D.QO(F.gGk.AVAILABLE_TAG_ADD, null, t));
    }
    for (let e of _) {
        let t = s[e] ?? { id: e, name: e };
        c.push(new D.QO(F.gGk.AVAILABLE_TAG_DELETE, null, t));
    }
    return c.length > 0 ? c : e;
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
        for (let e in i) if (null == a[e]) return new D.QO(F.gGk.AVAILABLE_TAG_ADD, null, es(i[e]));
    }
    if (l.length > r.length) {
        for (let e in a) if (null == i[e]) return new D.QO(F.gGk.AVAILABLE_TAG_DELETE, null, es(a[e]));
    }
    for (let e in a) {
        let t = a[e],
            n = i[e];
        if (n?.name !== t.name || n?.emoji_id !== t.emoji_id || n?.emoji_name !== t.emoji_name)
            return new D.QO(F.gGk.AVAILABLE_TAG_EDIT, es(t), es(n));
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
function e_(e, t, n, l, r) {
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
function ec(e, t, n) {
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
function eT(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eI(e) {
    return (t) => e[t.newValue];
}
function eN(e, t) {
    return (n) => e[n.newValue] ?? t;
}
