n.d(t, {
    Bq: () => J,
    C0: () => ei,
    C2: () => $,
    EN: () => K,
    F1: () => ea,
    HE: () => B,
    HN: () => q,
    Iv: () => ec,
    J5: () => eI,
    JA: () => es,
    K: () => Q,
    ML: () => V,
    N$: () => X,
    N5: () => em,
    QM: () => eT,
    V$: () => eE,
    _$: () => eO,
    cT: () => eN,
    em: () => eg,
    hQ: () => eh,
    hx: () => W,
    lR: () => Y,
    lU: () => Z,
    nm: () => e_,
    oD: () => H,
    pA: () => en,
    pY: () => z,
    pi: () => et,
    rK: () => el,
    uB: () => ee,
    vc: () => eu,
    vm: () => er,
    zT: () => eo,
}),
    n(415506),
    n(539854),
    n(49124);
var r = n(654861),
    l = n.n(r),
    i = n(913527),
    s = n.n(i),
    a = n(536402),
    o = n(533800),
    u = n(149765),
    c = n(866442),
    E = n(379649),
    d = n(911969),
    _ = n(933557),
    A = n(710845),
    T = n(339085),
    I = n(236413),
    m = n(45966),
    g = n(563534),
    N = n(427679),
    h = n(926491),
    O = n(387667),
    f = n(592125),
    R = n(485386),
    S = n(699516),
    p = n(594174),
    C = n(55935),
    D = n(630388),
    U = n(971130),
    L = n(709054),
    M = n(233857),
    x = n(981631),
    b = n(176505),
    v = n(273504),
    P = n(765305),
    j = n(388032);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = new A.Z("AuditLogUtils"),
    F = [E.J6.DAYS, E.J6.HOURS, E.J6.MINUTES, E.J6.SECONDS],
    w = () => ({ [x.zUn.REASON]: () => j.t["2IW3C5"] }),
    z = () =>
        y(
            {
                [x.zUn.NAME]: () => j.t.CkDiNH,
                [x.zUn.DESCRIPTION]: eU(j.t.RP3Ey3, j.t.QAVj1Y),
                [x.zUn.ICON_HASH]: () => j.t.iLZ8Q9,
                [x.zUn.SPLASH_HASH]: () => j.t["4VV6dn"],
                [x.zUn.DISCOVERY_SPLASH_HASH]: () => j.t["2pds6p"],
                [x.zUn.BANNER_HASH]: eU(j.t.Cxq4zO, j.t["H7eE/9"]),
                [x.zUn.OWNER_ID]: () => j.t["8ltsLT"],
                [x.zUn.REGION]: () => j.t.X9r5Kf,
                [x.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDS,
                [x.zUn.AFK_CHANNEL_ID]: eU(j.t.ClBuA4, j.t["ms+xtL"]),
                [x.zUn.AFK_TIMEOUT]: () => j.t.q21fHa,
                [x.zUn.SYSTEM_CHANNEL_ID]: eU(j.t.H1VXaa, j.t.XhtmxJ),
                [x.zUn.RULES_CHANNEL_ID]: eU(j.t.OI6MG2, j.t.lik3tI),
                [x.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eU(j.t.YxBKrY, j.t.Ehsnij),
                [x.zUn.MFA_LEVEL]: ex({
                    [x.BpS.NONE]: j.t.voaCCQ,
                    [x.BpS.ELEVATED]: j.t.pRNVwz,
                }),
                [x.zUn.WIDGET_ENABLED]: eM(j.t.ADIty8, j.t.nf58VY),
                [x.zUn.WIDGET_CHANNEL_ID]: eU(j.t["6SBsDc"], j.t.deQ5wO),
                [x.zUn.VERIFICATION_LEVEL]: ex({
                    [x.sFg.NONE]: j.t.W27rsc,
                    [x.sFg.LOW]: j.t["V8P+Pw"],
                    [x.sFg.MEDIUM]: j.t.ERQFau,
                    [x.sFg.HIGH]: j.t["83fN0j"],
                    [x.sFg.VERY_HIGH]: j.t.PnkQJE,
                }),
                [x.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: ex({
                    [x.bL.ALL_MESSAGES]: j.t.LDi76A,
                    [x.bL.ONLY_MENTIONS]: j.t["6K83ba"],
                }),
                [x.zUn.VANITY_URL_CODE]: eU(j.t.Zplsov, j.t.u6cArh),
                [x.zUn.EXPLICIT_CONTENT_FILTER]: ex({
                    [x.lxg.DISABLED]: j.t.fmOeL3,
                    [x.lxg.MEMBERS_WITHOUT_ROLES]: j.t["4FghYw"],
                    [x.lxg.ALL_MEMBERS]: j.t.olyrSm,
                }),
                [x.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eM(j.t.rBT0sn, j.t["gc+te5"]),
                [x.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH,
                [x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjB,
                [x.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t["+fQAel"],
                [x.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4v,
                [x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSA,
            },
            w(),
        ),
    V = () => ({
        [x.zUn.NAME]: eD(j.t.f8Rh0U, j.t.ebD4Qp),
        [x.zUn.POSITION]: eD(j.t.isS8te, j.t.t5uBis),
        [x.zUn.TOPIC]: eL(j.t.esQcxn, j.t["m+veAn"], j.t["ws/1FA"]),
        [x.zUn.BITRATE]: eD(j.t.fw81ak, j.t.MFNlgZ),
        [x.zUn.RTC_REGION_OVERRIDE]: eL(j.t["6kajxx"], j.t.eGOlmU, j.t["0JMZdz"]),
        [x.zUn.USER_LIMIT]: eD(j.t.wk5t7p, j.t.XgjCEh),
        [x.zUn.RATE_LIMIT_PER_USER]: eD(j.t["7lirhF"], j.t.j4CCJR),
        [x.zUn.PERMISSIONS_RESET]: () => j.t["+vSBFY"],
        [x.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv8,
        [x.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5X,
        [x.zUn.REASON]: () => j.t["2IW3C5"],
        [x.zUn.NSFW]: eM(j.t.H8Ri2Y, j.t.WW6cJw),
        [x.zUn.TYPE]: eD(j.t.Vn5zn2, j.t.aq4uWI),
        [x.zUn.VIDEO_QUALITY_MODE]: eD(j.t.e68fAU, j.t.djbES0),
        [x.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(j.t.nYz2mg, j.t.oczvRI),
        [x.zUn.FLAGS]: () => j.t.ImCQko,
        [x.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
        [x.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzls,
        [x.zUn.AVAILABLE_TAG_DELETE]: () => j.t["8QOseg"],
        [x.zUn.LINKED_LOBBY]: eU(j.t["+/3TkD"], j.t["5kDYS3"]),
    }),
    Z = () =>
        y(
            {
                [x.zUn.NICK]: eL(j.t.qXDsHv, j.t["m+qury"], j.t.DvLvjF),
                [x.zUn.DEAF]: eM(j.t.mArLlW, j.t.ddvVYG),
                [x.zUn.MUTE]: eM(j.t["bxs/lS"], j.t.FjecQM),
                [x.zUn.ROLES_REMOVE]: () => j.t["+2SDWV"],
                [x.zUn.ROLES_ADD]: () => j.t["B3/3IJ"],
                [x.zUn.PRUNE_DELETE_DAYS]: () => j.t["+Cvc+D"],
                [x.zUn.COMMUNICATION_DISABLED_UNTIL]: eL(j.t.LXTQr5, j.t.LXTQr5, j.t.ULSdnE),
                [x.zUn.BYPASSES_VERIFICATION]: eM(j.t.NBPBui, j.t.zATost),
                [x.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH,
            },
            w(),
        ),
    B = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.QBmlaD, j.t["Lfs4r+"]),
                [x.zUn.DESCRIPTION]: eD(j.t.XeYKWJ, j.t.PSfeIj),
                [x.zUn.PERMISSIONS_GRANTED]: () => j.t["9i/DvE"],
                [x.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVh,
                [x.zUn.COLOR]: eb({ "#000000": j.t.TK6E1H }, j.t["2FQFiw"]),
                [x.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? j.t.U44ttm : j.t["WnSwL/"]),
                [x.zUn.HOIST]: eM(j.t.gWfe24, j.t["+tb8kN"]),
                [x.zUn.MENTIONABLE]: eM(j.t.LL8VFF, j.t.Z7xzmC),
                [x.zUn.ICON_HASH]: () => j.t["iEE79/"],
                [x.zUn.UNICODE_EMOJI]: () => j.t.KiLMM0,
            },
            w(),
        ),
    H = () =>
        G(y({}, w()), {
            [x.zUn.TITLE]: eD(j.t["sNpuy/"], j.t["3Ukc/g"]),
            [x.zUn.DESCRIPTION]: eD(j.t.PP1q0x, j.t.z7pYLg),
            [x.zUn.OPTIONS]: () => j.t["3G5C9+"],
            [x.zUn.SINGLE_SELECT]: eM(j.t.v4WnR3, j.t["6Qg3uC"]),
            [x.zUn.REQUIRED]: eM(j.t["0MPAM6"], j.t.pwsXir),
        }),
    K = () =>
        G(y({}, w()), {
            [x.zUn.DEFAULT_CHANNEL_IDS]: () => j.t["8M+D2s"],
            [x.zUn.ENABLE_DEFAULT_CHANNELS]: eM(j.t["EYd/ls"], j.t["36OZeQ"]),
            [x.zUn.ENABLE_ONBOARDING_PROMPTS]: eM(j.t.V3u8PV, j.t["r66lc/"]),
            [x.zUn.ENABLED]: eM(j.t.SODVIs, j.t.u8HY5U),
        }),
    W = () =>
        G(y({}, w()), {
            [x.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xd,
            [x.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUIno,
            [x.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mr,
        }),
    q = () =>
        y(
            {
                [x.zUn.CODE]: () => j.t.rrRHgb,
                [x.zUn.CHANNEL_ID]: () => j.t.Q1vd5q,
                [x.zUn.MAX_USES]: eb({ 0: j.t.Yx8LNm }, j.t["3ygnwU"]),
                [x.zUn.MAX_AGE]: eb({ [j.intl.string(j.t.PqEzn8)]: j.t.uWrLvw }, j.t["Q+5kcO"]),
                [x.zUn.TEMPORARY]: eM(j.t.MWp6H7, j.t.omiqTH),
                [x.zUn.FLAGS]: ex({ [o.$.IS_GUEST_INVITE]: j.t.XYZMbL }),
            },
            w(),
        ),
    Y = () => ({
        [x.zUn.CHANNEL_ID]: eD(j.t.jhPprR, j.t.ar4qYO),
        [x.zUn.NAME]: eD(j.t.ZVGrzU, j.t.tywdZR),
        [x.zUn.AVATAR_HASH]: () => j.t.KB52Uj,
        [x.zUn.REASON]: () => j.t["2IW3C5"],
    }),
    X = () => y({ [x.zUn.NAME]: eD(j.t.ahU1o5, j.t["wxs+vZ"]) }, w()),
    J = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.cdl0Yo, j.t.o3W2ly),
                [x.zUn.TAGS]: eD(j.t["zwL+S2"], j.t["VYfKA+"]),
                [x.zUn.DESCRIPTION]: eD(j.t.XeYKWJ, j.t.PSfeIj),
            },
            w(),
        ),
    Q = () =>
        y(
            {
                [x.zUn.ENABLE_EMOTICONS]: eM(j.t.FI0m5x, j.t.olpKC6),
                [x.zUn.EXPIRE_BEHAVIOR]: ex({
                    0: j.t["1Bb1+u"],
                    1: j.t.vjlW6m,
                }),
                [x.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMa,
            },
            w(),
        ),
    $ = () =>
        y(
            {
                [x.zUn.TOPIC]: eD(j.t["m+veAn"], j.t.esQcxn),
                [x.zUn.PRIVACY_LEVEL]: ex({
                    [P.j8.GUILD_ONLY]: j.t["EC+CDt"],
                    [P.j8.PUBLIC]: j.t["pK/WG0"],
                }),
            },
            w(),
        ),
    ee = () =>
        y(
            {
                [x.zUn.NAME]: () => j.t["21EXHW"],
                [x.zUn.DESCRIPTION]: () => j.t.Vm1ofw,
                [x.zUn.PRIVACY_LEVEL]: ex({
                    [P.j8.GUILD_ONLY]: j.t["EC+CDt"],
                    [P.j8.PUBLIC]: j.t["pK/WG0"],
                }),
                [x.zUn.STATUS]: ex({
                    [P.p1.SCHEDULED]: j.t.hXKDgq,
                    [P.p1.ACTIVE]: j.t.lRX1nz,
                    [P.p1.COMPLETED]: j.t["/eFIhq"],
                    [P.p1.CANCELED]: j.t.NWIYhj,
                }),
                [x.zUn.ENTITY_TYPE]: ex({
                    [P.WX.NONE]: j.t["6sO3Ss"],
                    [P.WX.STAGE_INSTANCE]: j.t["Wo+s1y"],
                    [P.WX.VOICE]: j.t.XCVaIL,
                    [P.WX.EXTERNAL]: j.t.IvhAj2,
                }),
                [x.zUn.CHANNEL_ID]: eU(j.t.yJBIcX, j.t["+PqSsi"]),
                [x.zUn.LOCATION]: eU(j.t.GaMBHy, j.t.PsICk0),
                [x.zUn.IMAGE_HASH]: eU(j.t.S3vcRK, j.t.KQu47I),
            },
            w(),
        ),
    et = () =>
        y(
            {
                [x.zUn.SCHEDULED_START_TIME]: eU(j.t.zMIYVg, j.t.fzF8Gd),
                [x.zUn.SCHEDULED_END_TIME]: eU(j.t.vONSQA, j.t.IlIti3),
                [x.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return j.t["7RkicW"];
                        else if (e.oldValue && !e.newValue) return j.t.dRNTWW;
                    }
                },
            },
            w(),
        ),
    en = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.tUKRzX, j.t.kPCHON),
                [x.zUn.ARCHIVED]: eM(j.t.jDi9FK, j.t.F6dvbT),
                [x.zUn.LOCKED]: eM(j.t.JSy1QW, j.t.C7Jgo8),
                [x.zUn.INVITABLE]: eM(j.t.dxNUs9, j.t.biJvYG),
                [x.zUn.AUTO_ARCHIVE_DURATION]: eD(j.t.LuaG3y, j.t["18d9qr"]),
                [x.zUn.RATE_LIMIT_PER_USER]: eD(j.t["7lirhF"], j.t.j4CCJR),
                [x.zUn.FLAGS]: () => j.t.sSAQtj,
            },
            w(),
        ),
    er = (e) => {
        let t = y({}, w());
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue
                        ? e.newValue.permission
                            ? (t[e.key] = () => j.t["JH+89C"])
                            : (t[e.key] = () => j.t.HUrFDu)
                        : (t[e.key] = () => j.t.vynxnV);
                }),
            t
        );
    },
    el = () =>
        y(
            {
                [x.zUn.NAME]: () => j.t.XwxAJT,
                [x.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pyl,
                [x.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t["46Y+L5"],
                [x.zUn.AUTO_MODERATION_ACTIONS]: () => j.t["8efxfv"],
                [x.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxC2 : j.t.Wrg9Jn;
                },
                [x.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nx,
                [x.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLE,
                [x.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t["h/lM65"],
                [x.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t["9V2yaC"],
                [x.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t["4Qe9ny"],
                [x.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxp,
                [x.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadc,
                [x.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t["FvvR+K"],
                [x.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSvy,
            },
            w(),
        ),
    ei = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.VOtRSO, j.t.OK7B8E),
                [x.zUn.VOLUME]: eD(j.t.igrDB9, j.t.L5lDFJ),
                [x.zUn.EMOJI_NAME]: eL(j.t.IIanaY, j.t["z4w4U/"], j.t.V8TfyU),
                [x.zUn.EMOJI_ID]: eL(j.t.ainxMB, j.t["2NPsYu"], j.t["8crtns"]),
            },
            w(),
        ),
    es = () =>
        y(
            {
                [x.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDY : j.t.WYT6ka),
                [x.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVd : j.t.WxyOtj),
            },
            w(),
        ),
    ea = () => y({ [x.zUn.STATUS]: () => j.t.HyCSnI }, w()),
    eo = () => ({
        [x.zUn.DESCRIPTION]: () => j.t.nsUZKY,
        [x.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgN,
        [x.zUn.CUSTOM_BANNER_HASH]: () => j.t["04b5KC"],
        [x.zUn.TRAITS]: () => j.t.dEy9WO,
        [x.zUn.GAME_APPLICATION_IDS]: () => j.t["8BOT3x"],
        [x.zUn.VISIBILITY]: () => j.t.bCl1Ep,
        [x.zUn.SERVER_TAG]: eU(j.t.ix1dnX, j.t["4LKpKb"]),
    }),
    eu = {
        [x.KFR.CHANNEL]: {
            [x.zUn.ID]: !0,
            [x.zUn.PERMISSION_OVERWRITES]: !0,
        },
        [x.KFR.CHANNEL_OVERWRITE]: {
            [x.zUn.TYPE]: !0,
            [x.zUn.ID]: !0,
            [x.zUn.PERMISSION_OVERWRITES]: !0,
        },
        [x.KFR.INVITE]: {
            [x.zUn.INVITER_ID]: !0,
            [x.zUn.USES]: !0,
        },
        [x.KFR.WEBHOOK]: {
            [x.zUn.TYPE]: !0,
            [x.zUn.APPLICATION_ID]: !0,
        },
        [x.KFR.INTEGRATION]: { [x.zUn.TYPE]: !0 },
        [x.KFR.THREAD]: {
            [x.zUn.ID]: !0,
            [x.zUn.TYPE]: !0,
        },
        [x.KFR.STICKER]: {
            [x.zUn.ID]: !0,
            [x.zUn.TYPE]: !0,
            [x.zUn.ASSET]: !0,
            [x.zUn.FORMAT_TYPE]: !0,
            [x.zUn.AVAILABLE]: !0,
            [x.zUn.GUILD_ID]: !0,
        },
        [x.KFR.GUILD_HOME]: { [x.zUn.ENTITY_TYPE]: !0 },
        [x.KFR.GUILD_ONBOARDING]: { [x.zUn.PROMPTS]: !0 },
        [x.KFR.GUILD_SOUNDBOARD]: {
            [x.zUn.ID]: !0,
            [x.zUn.SOUND_ID]: !0,
        },
    },
    ec = () => [
        {
            value: x.rsA.ALL,
            label: j.intl.string(j.t.QxEVcv),
            valueLabel: j.intl.string(j.t.an9Ry3),
        },
        {
            value: x.rsA.GUILD_UPDATE,
            label: j.intl.string(j.t["5INZa3"]),
        },
        {
            value: x.rsA.CHANNEL_CREATE,
            label: j.intl.string(j.t["2uh4vJ"]),
        },
        {
            value: x.rsA.CHANNEL_UPDATE,
            label: j.intl.string(j.t.mGsBLV),
        },
        {
            value: x.rsA.CHANNEL_DELETE,
            label: j.intl.string(j.t.hCHzAr),
        },
        {
            value: x.rsA.CHANNEL_OVERWRITE_CREATE,
            label: j.intl.string(j.t["8TnAMP"]),
        },
        {
            value: x.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: j.intl.string(j.t.Jqx0Bi),
        },
        {
            value: x.rsA.CHANNEL_OVERWRITE_DELETE,
            label: j.intl.string(j.t.gBXOr4),
        },
        {
            value: x.rsA.MEMBER_KICK,
            label: j.intl.string(j.t["Q1/hN8"]),
        },
        {
            value: x.rsA.MEMBER_PRUNE,
            label: j.intl.string(j.t.tOTTja),
        },
        {
            value: x.rsA.MEMBER_BAN_ADD,
            label: j.intl.string(j.t["NfPn+e"]),
        },
        {
            value: x.rsA.MEMBER_BAN_REMOVE,
            label: j.intl.string(j.t.XCsGfI),
        },
        {
            value: x.rsA.MEMBER_UPDATE,
            label: j.intl.string(j.t["F/jmNJ"]),
        },
        {
            value: x.rsA.MEMBER_ROLE_UPDATE,
            label: j.intl.string(j.t.zAveSI),
        },
        {
            value: x.rsA.MEMBER_MOVE,
            label: j.intl.string(j.t.QshteR),
        },
        {
            value: x.rsA.MEMBER_DISCONNECT,
            label: j.intl.string(j.t.Z45os7),
        },
        {
            value: x.rsA.BOT_ADD,
            label: j.intl.string(j.t.vuH24Z),
        },
        {
            value: x.rsA.THREAD_CREATE,
            label: j.intl.string(j.t["+zl0DG"]),
        },
        {
            value: x.rsA.THREAD_UPDATE,
            label: j.intl.string(j.t.rbIry3),
        },
        {
            value: x.rsA.THREAD_DELETE,
            label: j.intl.string(j.t.hFjNEA),
        },
        {
            value: x.rsA.ROLE_CREATE,
            label: j.intl.string(j.t.AbxKtv),
        },
        {
            value: x.rsA.ROLE_UPDATE,
            label: j.intl.string(j.t.t3Z6sU),
        },
        {
            value: x.rsA.ROLE_DELETE,
            label: j.intl.string(j.t.YsFpa4),
        },
        {
            value: x.rsA.ONBOARDING_PROMPT_CREATE,
            label: j.intl.string(j.t.ZV9tqc),
        },
        {
            value: x.rsA.ONBOARDING_PROMPT_UPDATE,
            label: j.intl.string(j.t.PcOdvX),
        },
        {
            value: x.rsA.ONBOARDING_PROMPT_DELETE,
            label: j.intl.string(j.t["+r33Na"]),
        },
        {
            value: x.rsA.ONBOARDING_CREATE,
            label: j.intl.string(j.t.uDADde),
        },
        {
            value: x.rsA.ONBOARDING_UPDATE,
            label: j.intl.string(j.t.J1H1wg),
        },
        {
            value: x.rsA.HOME_SETTINGS_CREATE,
            label: j.intl.string(j.t.Di4cvI),
        },
        {
            value: x.rsA.HOME_SETTINGS_UPDATE,
            label: j.intl.string(j.t.tzyrJH),
        },
        {
            value: x.rsA.INVITE_CREATE,
            label: j.intl.string(j.t["0BNJdX"]),
        },
        {
            value: x.rsA.INVITE_UPDATE,
            label: j.intl.string(j.t["o++obV"]),
        },
        {
            value: x.rsA.INVITE_DELETE,
            label: j.intl.string(j.t.iP40Az),
        },
        {
            value: x.rsA.WEBHOOK_CREATE,
            label: j.intl.string(j.t["tBF4+S"]),
        },
        {
            value: x.rsA.WEBHOOK_UPDATE,
            label: j.intl.string(j.t.eV3McO),
        },
        {
            value: x.rsA.WEBHOOK_DELETE,
            label: j.intl.string(j.t.AAL3K1),
        },
        {
            value: x.rsA.EMOJI_CREATE,
            label: j.intl.string(j.t.RuWm0V),
        },
        {
            value: x.rsA.EMOJI_UPDATE,
            label: j.intl.string(j.t.WzdUY7),
        },
        {
            value: x.rsA.EMOJI_DELETE,
            label: j.intl.string(j.t.c3dK2L),
        },
        {
            value: x.rsA.MESSAGE_DELETE,
            label: j.intl.string(j.t.daTfXh),
        },
        {
            value: x.rsA.MESSAGE_BULK_DELETE,
            label: j.intl.string(j.t.nrBxeh),
        },
        {
            value: x.rsA.MESSAGE_PIN,
            label: j.intl.string(j.t.MUldyN),
        },
        {
            value: x.rsA.MESSAGE_UNPIN,
            label: j.intl.string(j.t.n4zKhA),
        },
        {
            value: x.rsA.INTEGRATION_CREATE,
            label: j.intl.string(j.t.deNm8x),
        },
        {
            value: x.rsA.INTEGRATION_UPDATE,
            label: j.intl.string(j.t.HT7Sfg),
        },
        {
            value: x.rsA.INTEGRATION_DELETE,
            label: j.intl.string(j.t["+kJ09q"]),
        },
        {
            value: x.rsA.STICKER_CREATE,
            label: j.intl.string(j.t["3DzNjU"]),
        },
        {
            value: x.rsA.STICKER_UPDATE,
            label: j.intl.string(j.t.tdhW5b),
        },
        {
            value: x.rsA.STICKER_DELETE,
            label: j.intl.string(j.t["+ZhGOk"]),
        },
        {
            value: x.rsA.STAGE_INSTANCE_CREATE,
            label: j.intl.string(j.t.sPbjA6),
        },
        {
            value: x.rsA.STAGE_INSTANCE_UPDATE,
            label: j.intl.string(j.t.cW9LfJ),
        },
        {
            value: x.rsA.STAGE_INSTANCE_DELETE,
            label: j.intl.string(j.t["U1r+yD"]),
        },
        {
            value: x.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: j.intl.string(j.t.H81Zyy),
        },
        {
            value: x.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: j.intl.string(j.t["FM69l+"]),
        },
        {
            value: x.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: j.intl.string(j.t.Rq28Bh),
        },
        {
            value: x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: j.intl.string(j.t.iPdFOt),
        },
        {
            value: x.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: j.intl.string(j.t.gNq5z6),
        },
        {
            value: x.rsA.AUTO_MODERATION_RULE_CREATE,
            label: j.intl.string(j.t.f72Zqb),
        },
        {
            value: x.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: j.intl.string(j.t.XeqIiv),
        },
        {
            value: x.rsA.AUTO_MODERATION_RULE_DELETE,
            label: j.intl.string(j.t.syAApU),
        },
        {
            value: x.rsA.GUILD_HOME_FEATURE_ITEM,
            label: j.intl.string(j.t.lhG5KN),
        },
        {
            value: x.rsA.GUILD_HOME_REMOVE_ITEM,
            label: j.intl.string(j.t.lRPRwS),
        },
        {
            value: x.rsA.SOUNDBOARD_SOUND_CREATE,
            label: j.intl.string(j.t.yoRi5r),
        },
        {
            value: x.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: j.intl.string(j.t.uKlG0Z),
        },
        {
            value: x.rsA.SOUNDBOARD_SOUND_DELETE,
            label: j.intl.string(j.t.gq0iCT),
        },
        {
            value: x.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: j.intl.string(j.t.rGr0YM),
        },
        {
            value: x.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: j.intl.string(j.t.V9PEQ4),
        },
    ];
function eE(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function ed(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function e_(e) {
    var t;
    let n = ec().find((t) => t.value === e.action);
    return null != eE(x.zUn.COMMUNICATION_DISABLED_UNTIL, e)
        ? j.intl.string(j.t.z3wbj8)
        : null != (t = null == n ? void 0 : n.label)
          ? t
          : null;
}
let eA = {
    [E.J6.SECONDS]: (e) => j.intl.formatToPlainString(j.t.geSp4K, { seconds: e }),
    [E.J6.MINUTES]: (e) => j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
    [E.J6.HOURS]: (e) => j.intl.formatToPlainString(j.t.xCjYxK, { hours: e }),
    [E.J6.DAYS]: (e) => j.intl.formatToPlainString(j.t["k2UNz+"], { days: e }),
};
function eT(e) {
    let t = eE(x.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = ed(x.zUn.ROLES_ADD, e).length > 0,
        r = ed(x.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - L.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, E.CI)(r, F);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in eA) {
                let e = l.unit,
                    t = l.unit === E.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return eA[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return j.intl.string(j.t.MA1ltr);
    } else if (n && r) return j.intl.string(j.t.RdMMew);
    else if (n) return j.intl.string(j.t["4GQqs8"]);
    else if (r) return j.intl.string(j.t["8mQ6x0"]);
    return null;
}
function eI(e) {
    let t = ed(x.zUn.ROLES_ADD, e),
        n = ed(x.zUn.ROLES_REMOVE, e),
        r =
            null == t
                ? void 0
                : t
                      .map((e) => {
                          let { newValue: t } = e;
                          return null == t
                              ? void 0
                              : t
                                    .map((e) => {
                                        let { name: t } = e;
                                        return t;
                                    })
                                    .join(", ");
                      })
                      .join(", "),
        l =
            null == n
                ? void 0
                : n
                      .map((e) => {
                          let { newValue: t } = e;
                          return null == t
                              ? void 0
                              : t
                                    .map((e) => {
                                        let { name: t } = e;
                                        return t;
                                    })
                                    .join(", ");
                      })
                      .join(", ");
    return t.length > 0 && n.length > 0
        ? j.intl.formatToPlainString(j.t.tZw1EW, {
              roleNamesAdded: r,
              roleNamesRemoved: l,
          })
        : t.length > 0
          ? j.intl.formatToPlainString(j.t["/mTqt5"], { roleNames: r })
          : n.length > 0
            ? j.intl.formatToPlainString(j.t.Wk4pAJ, { roleNames: l })
            : null;
}
function em(e) {
    switch (e.action) {
        case x.rsA.GUILD_UPDATE:
            return j.t.LjZO31;
        case x.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === x.zUn.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case x.d4z.GUILD_STAGE_VOICE:
                    return j.t["OKp4+o"];
                case x.d4z.GUILD_VOICE:
                    return j.t.NPOy4G;
                case x.d4z.GUILD_CATEGORY:
                    return j.t.T3KIjz;
                default:
                    return j.t.wrYNG2;
            }
        case x.rsA.CHANNEL_UPDATE:
            return j.t.nTYk6B;
        case x.rsA.CHANNEL_DELETE:
            return j.t.ynfvkm;
        case x.rsA.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1a;
        case x.rsA.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNU;
        case x.rsA.CHANNEL_OVERWRITE_DELETE:
            return j.t["HASt/3"];
        case x.rsA.MEMBER_KICK:
            return j.t.B5hDZX;
        case x.rsA.MEMBER_PRUNE:
            return j.t.qKOZTP;
        case x.rsA.MEMBER_BAN_ADD:
            return j.t["XklUm/"];
        case x.rsA.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HD;
        case x.rsA.MEMBER_UPDATE:
            return j.t.pznhLN;
        case x.rsA.MEMBER_ROLE_UPDATE:
            return j.t.Vngfia;
        case x.rsA.MEMBER_MOVE:
            return j.t.Yt6NkU;
        case x.rsA.MEMBER_DISCONNECT:
            return j.t.K4eCZw;
        case x.rsA.BOT_ADD:
            return j.t.fWvX0G;
        case x.rsA.ROLE_CREATE:
            return j.t.UTLTx6;
        case x.rsA.ROLE_UPDATE:
            return j.t.NRbN18;
        case x.rsA.ROLE_DELETE:
            return j.t["4s63tb"];
        case x.rsA.INVITE_CREATE:
            return j.t.YHOXWy;
        case x.rsA.INVITE_UPDATE:
            return j.t.ja3kGS;
        case x.rsA.INVITE_DELETE:
            return j.t["3n/iWk"];
        case x.rsA.WEBHOOK_CREATE:
            return j.t.MhYhil;
        case x.rsA.WEBHOOK_UPDATE:
            return j.t["6GTlWB"];
        case x.rsA.WEBHOOK_DELETE:
            return j.t.in0VjZ;
        case x.rsA.EMOJI_CREATE:
            return j.t["7vekRO"];
        case x.rsA.EMOJI_UPDATE:
            return j.t.IsCKfh;
        case x.rsA.EMOJI_DELETE:
            return j.t.JnUaVG;
        case x.rsA.STICKER_CREATE:
            return j.t.DRZifq;
        case x.rsA.STICKER_UPDATE:
            return j.t.bhujGc;
        case x.rsA.STICKER_DELETE:
            return j.t.rGEP9U;
        case x.rsA.MESSAGE_DELETE:
            return j.t["HPkD+M"];
        case x.rsA.MESSAGE_BULK_DELETE:
            return j.t["3RIvLE"];
        case x.rsA.MESSAGE_PIN:
            return j.t.Yna7E7;
        case x.rsA.MESSAGE_UNPIN:
            return j.t.NCxXUW;
        case x.rsA.INTEGRATION_CREATE:
            return j.t.HYvCb3;
        case x.rsA.INTEGRATION_UPDATE:
            return j.t.ibCCOS;
        case x.rsA.INTEGRATION_DELETE:
            return j.t["8zScWY"];
        case x.rsA.STAGE_INSTANCE_CREATE:
            return j.t["n7x/DF"];
        case x.rsA.STAGE_INSTANCE_UPDATE:
            return j.t["0hQYU4"];
        case x.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t["Oi/in9"];
            return j.t["7ZIFm9"];
        case x.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52p;
        case x.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK11;
        case x.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t["/ARPKQ"];
        case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t["8qCI36"];
        case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2da;
        case x.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === x.zUn.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case x.d4z.PRIVATE_THREAD:
                    return j.t.Br0y5w;
                case x.d4z.ANNOUNCEMENT_THREAD:
                    return j.t["6uaMmO"];
                default:
                    return j.t["2cxQ7G"];
            }
        case x.rsA.THREAD_UPDATE:
            return j.t.PSsy4t;
        case x.rsA.THREAD_DELETE:
            return j.t.s3Khn8;
        case x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBm;
        case x.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2K;
        case x.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if (
                (null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) ===
                v.fX.USER_PROFILE.toString()
            )
                return j.t.YQsjej;
            return j.t.SD0PwJ;
        case x.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4TwX;
        case x.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return j.t["/W5u5o"];
        case x.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWyr;
        case x.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t["ryGLk+"];
        case x.rsA.AUTO_MODERATION_RULE_CREATE:
            return j.t["NKljj+"];
        case x.rsA.AUTO_MODERATION_RULE_UPDATE:
            return j.t["3wEA9u"];
        case x.rsA.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3n;
        case x.rsA.ONBOARDING_PROMPT_CREATE:
            return j.t["/8A1g2"];
        case x.rsA.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWI;
        case x.rsA.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTao;
        case x.rsA.ONBOARDING_CREATE:
            return j.t["wDaq3/"];
        case x.rsA.ONBOARDING_UPDATE:
            return j.t["yONu/l"];
        case x.rsA.HOME_SETTINGS_CREATE:
            return j.t.dSdCjG;
        case x.rsA.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qv;
        case x.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === x.zUn.ENTITY_TYPE) : null;
            if (null == l) return j.t["UZ+U3A"];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return j.t["PyEa+J"];
                case a.w.FORUM_POST:
                    return j.t.hCuAb1;
                default:
                    return j.t["UZ+U3A"];
            }
        case x.rsA.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReun;
        case x.rsA.SOUNDBOARD_SOUND_CREATE:
            return j.t["0PD83V"];
        case x.rsA.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n1w;
        case x.rsA.SOUNDBOARD_SOUND_DELETE:
            return j.t["kVz4/0"];
        case x.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU7;
        case x.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case x.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t["NUKUb+"];
        case x.rsA.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hF1;
        case x.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return j.t["3Ne7MA"];
        case x.rsA.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
            return j.t["naflH+"];
        default:
            return null;
    }
}
function eg(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t["5G8ZD4"]);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t["4YLtzC"]);
        case b.zZ.PINNED:
            return j.intl.string(j.t["1QLRYb"]);
    }
    return null;
}
function eN(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t.S5kuWQ);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t["8qpgcz"]);
        case b.zZ.PINNED:
            return j.intl.string(j.t.CMweGA);
    }
    return null;
}
function eh(e, t) {
    switch (e) {
        case x.Plq.CREATE_INSTANT_INVITE:
            return j.intl.string(j.t.zJrgTG);
        case x.Plq.KICK_MEMBERS:
            return j.intl.string(j.t.pBNv6i);
        case x.Plq.BAN_MEMBERS:
            return j.intl.string(j.t.oTBA7N);
        case x.Plq.ADMINISTRATOR:
            return j.intl.string(j.t.PGvZqX);
        case x.Plq.MANAGE_CHANNELS:
            if (t.targetType === x.KFR.CHANNEL || t.targetType === x.KFR.CHANNEL_OVERWRITE)
                return j.intl.string(j.t.nAw15L);
            return j.intl.string(j.t["9qLtWs"]);
        case x.Plq.MANAGE_GUILD:
            return j.intl.string(j.t.QZRcfO);
        case x.Plq.VIEW_GUILD_ANALYTICS:
            return j.intl.string(j.t["rQJBE/"]);
        case x.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.intl.string(j.t["0lTLTv"]);
        case x.Plq.CHANGE_NICKNAME:
            return j.intl.string(j.t.dilOF6);
        case x.Plq.MANAGE_NICKNAMES:
            return j.intl.string(j.t["t+Ct5x"]);
        case x.Plq.MANAGE_ROLES:
            return j.intl.string(j.t["C8d+oG"]);
        case x.Plq.MANAGE_WEBHOOKS:
            return j.intl.string(j.t["/ADKmM"]);
        case x.Plq.CREATE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.HarVuP);
        case x.Plq.MANAGE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.bbuXIn);
        case x.Plq.VIEW_AUDIT_LOG:
            return j.intl.string(j.t.fZgLpA);
        case x.Plq.VIEW_CHANNEL:
            if (t.targetType === x.KFR.CHANNEL || t.targetType === x.KFR.CHANNEL_OVERWRITE)
                return j.intl.string(j.t["W/A4Qp"]);
            return j.intl.string(j.t.uV83yi);
        case x.Plq.SEND_MESSAGES:
            return j.intl.string(j.t.T32rkC);
        case x.Plq.SEND_TTS_MESSAGES:
            return j.intl.string(j.t.Mg7bku);
        case x.Plq.USE_APPLICATION_COMMANDS:
            return j.intl.string(j.t.shbR1a);
        case x.Plq.MANAGE_MESSAGES:
            return j.intl.string(j.t["6lU9xM"]);
        case x.Plq.EMBED_LINKS:
            return j.intl.string(j.t["969dEL"]);
        case x.Plq.ATTACH_FILES:
            return j.intl.string(j.t["3AS4UM"]);
        case x.Plq.READ_MESSAGE_HISTORY:
            return j.intl.string(j.t.l9ufaR);
        case x.Plq.MENTION_EVERYONE:
            return j.intl.string(j.t.Y78KGC);
        case x.Plq.USE_EXTERNAL_EMOJIS:
            return j.intl.string(j.t.BpBGZU);
        case x.Plq.USE_EXTERNAL_STICKERS:
            return j.intl.string(j.t["UeRs+b"]);
        case x.Plq.ADD_REACTIONS:
            return j.intl.string(j.t.yEoJAr);
        case x.Plq.CONNECT:
            return j.intl.string(j.t.S0W8Z5);
        case x.Plq.SPEAK:
            return j.intl.string(j.t["8w1tIR"]);
        case x.Plq.MUTE_MEMBERS:
            return j.intl.string(j.t["8EI30/"]);
        case x.Plq.DEAFEN_MEMBERS:
            return j.intl.string(j.t["9L47Fr"]);
        case x.Plq.MOVE_MEMBERS:
            return j.intl.string(j.t.YtjJPQ);
        case x.Plq.USE_VAD:
            return j.intl.string(j.t["08zAV7"]);
        case x.Plq.PRIORITY_SPEAKER:
            return j.intl.string(j.t.BVK71i);
        case x.Plq.STREAM:
            return j.intl.string(j.t.FlNoSV);
        case x.Plq.REQUEST_TO_SPEAK:
            return j.intl.string(j.t["5kicT2"]);
        case x.Plq.USE_EMBEDDED_ACTIVITIES:
            return j.intl.string(j.t.rLSGeh);
        case x.Plq.CREATE_EVENTS:
            return j.intl.string(j.t.qyjZua);
        case x.Plq.MANAGE_EVENTS:
            return j.intl.string(j.t.HIgA5a);
        case x.Plq.CREATE_PUBLIC_THREADS:
            return j.intl.string(j.t["25rKnX"]);
        case x.Plq.CREATE_PRIVATE_THREADS:
            return j.intl.string(j.t.QwbTSa);
        case x.Plq.SEND_MESSAGES_IN_THREADS:
            return j.intl.string(j.t.fTE74g);
        case x.Plq.MANAGE_THREADS:
            return j.intl.string(j.t.kEqgr7);
        case x.Plq.MODERATE_MEMBERS:
            return j.intl.string(j.t["+RL6pz"]);
        case x.Plq.SET_VOICE_CHANNEL_STATUS:
            return j.intl.string(j.t.VBwkUf);
        case x.Plq.SEND_POLLS:
            return j.intl.string(j.t.UMQ7Ww);
        case x.Plq.USE_EXTERNAL_APPS:
            return j.intl.string(j.t.TtA5rK);
        case x.Plq.PIN_MESSAGES:
            return j.intl.string(j.t.Y5BI39);
        case x.Plq.BYPASS_SLOWMODE:
            return j.intl.string(j.t.kqcjeV);
    }
    return null;
}
function eO(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = (function (e, t) {
                    switch (e.targetType) {
                        case x.KFR.GUILD:
                        case x.KFR.GUILD_HOME:
                        case x.KFR.GUILD_PROFILE:
                            return t;
                        case x.KFR.CHANNEL:
                        case x.KFR.CHANNEL_OVERWRITE:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => f.Z.getChannel(e),
                                (e) => (0, _.F6)(e, p.default, S.Z, !0),
                            );
                        case x.KFR.USER:
                            return ep(
                                e,
                                x.zUn.NICK,
                                (e) => p.default.getUser(e),
                                (e) => e,
                            );
                        case x.KFR.ROLE:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => R.Z.getRole(t.id, e),
                                (e) => e.name,
                            );
                        case x.KFR.ONBOARDING_PROMPT:
                            let n = ep(
                                e,
                                x.zUn.ID,
                                (e) => m.Z.getOnboardingPrompt(e),
                                (e) => e.title,
                            );
                            return null == n || "" === n ? j.intl.string(j.t.ZNQyiR) : n;
                        case x.KFR.GUILD_ONBOARDING:
                        case x.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case x.KFR.INVITE:
                            return ep(e, x.zUn.CODE, x.VqG);
                        case x.KFR.INTEGRATION:
                            return ep(
                                e,
                                x.zUn.TYPE,
                                (e) => M.Z.integrations.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case x.KFR.WEBHOOK:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => M.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case x.KFR.EMOJI:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => T.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case x.KFR.STICKER:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => h.Z.getStickerById(e),
                                (e) => e.name,
                            );
                        case x.KFR.STAGE_INSTANCE:
                            return ep(
                                e,
                                x.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(N.Z.getStageInstancesByGuild(t.id)))
                                        ? void 0
                                        : n.find((t) => t.id === e);
                                },
                                (e) => e.topic,
                            );
                        case x.KFR.GUILD_SCHEDULED_EVENT:
                        case x.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => M.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case x.KFR.THREAD:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => M.Z.threads.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case x.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = M.Z.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => M.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t =
                                        null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === d.yU.CHAT ? "/\u2060".concat(t) : t;
                                },
                            );
                        case x.KFR.AUTO_MODERATION_RULE:
                            return ep(
                                e,
                                x.zUn.NAME,
                                (e) => M.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name,
                            );
                        case x.KFR.GUILD_SOUNDBOARD:
                            return ep(e, x.zUn.NAME, x.VqG);
                        case x.KFR.HOME_SETTINGS:
                            return ep(
                                e,
                                x.zUn.GUILD_ID,
                                (e) => g.Z.getSettings(e),
                                () => j.intl.string(j.t.VbpLyU),
                                t.id,
                            );
                        case x.KFR.VOICE_CHANNEL_STATUS:
                            return ep(
                                e,
                                x.zUn.STATUS,
                                (e) => f.Z.getChannel(e),
                                (e) => (0, _.F6)(e, p.default, S.Z, !0),
                            );
                        default:
                            return k.warn("Unknown targetType for log", e), null;
                    }
                })(e, t),
                i = p.default.getUser(e.userId);
            if (
                null != r ||
                [
                    x.rsA.MEMBER_PRUNE,
                    x.rsA.MEMBER_DISCONNECT,
                    x.rsA.MEMBER_MOVE,
                    x.rsA.CREATOR_MONETIZATION_REQUEST_CREATED,
                    x.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED,
                ].includes(e.action)
            ) {
                if (
                    null !=
                    (e = (e = (e = e.set("user", i)).set("target", r)).set(
                        "options",
                        (function (e) {
                            if (null != e.options) {
                                let n = y({}, e.options);
                                switch (e.options.type) {
                                    case x.jwA.USER:
                                        n.subtarget = eC(
                                            e.options.id,
                                            (e) => p.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case x.jwA.ROLE:
                                        n.subtarget = eC(e.options.role_name, x.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = ep(
                                            e,
                                            "",
                                            (e) => f.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id,
                                        )),
                                    null != e.options.members_removed &&
                                        0 !== e.options.members_removed &&
                                        (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let r = M.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l =
                                            null == r
                                                ? void 0
                                                : r.guild_scheduled_event_exceptions.find(
                                                      (t) => t.event_exception_id === e.options.event_exception_id,
                                                  );
                                    n.subtarget = (0, C.vc)(
                                        s()(
                                            L.default.extractTimestamp(
                                                null != (t = null == l ? void 0 : l.event_exception_id) ? t : "0",
                                            ),
                                        ),
                                        "LL",
                                    );
                                }
                                return n;
                            }
                            return e.options;
                        })(e),
                    )).changes
                ) {
                    let n = [];
                    e.changes.forEach((r) => {
                        let i = (function (e, t, n) {
                            if (t.action === x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case x.ecB.ROLE:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => R.Z.getRole(n.id, e),
                                            (e) => e.name,
                                        );
                                        break;
                                    case x.ecB.USER:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => p.default.getUser(e),
                                            (e) => e.tag,
                                        );
                                        break;
                                    case x.ecB.CHANNEL:
                                        t.id === l()(n.id).subtract(1).toString()
                                            ? (e.subtarget = j.intl.string(j.t.MSYhgh))
                                            : (e.subtarget = eC(
                                                  t.id,
                                                  (e) => f.Z.getChannel(e),
                                                  (e) => (0, _.F6)(e, p.default, S.Z, !0),
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case x.zUn.OWNER_ID:
                                    return eS(e, (e) => p.default.getUser(e));
                                case x.zUn.CHANNEL_ID:
                                case x.zUn.AFK_CHANNEL_ID:
                                case x.zUn.SYSTEM_CHANNEL_ID:
                                case x.zUn.RULES_CHANNEL_ID:
                                case x.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eS(
                                        e,
                                        (e) => f.Z.getChannel(e),
                                        (e) => (0, _.F6)(e, p.default, S.Z, !0),
                                    );
                                case x.zUn.AFK_TIMEOUT:
                                    return eS(e, (e) => e / 60);
                                case x.zUn.BITRATE:
                                    return eS(e, (e) => e / 1000);
                                case x.zUn.COLOR:
                                    return eS(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case x.zUn.THEME_COLORS:
                                    return eS(e, (e) =>
                                        ""
                                            .concat((0, c.Rf)(e[0]).toUpperCase(), ", ")
                                            .concat((0, c.Rf)(e[1]).toUpperCase()),
                                    );
                                case x.zUn.MAX_AGE:
                                    return eS(e, (e) => {
                                        let t = U.ZP.getMaxAgeOptionByValue(e);
                                        return null !== t ? t.label : e;
                                    });
                                case x.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = ef(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new O.ms(x.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new O.ms(x.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case x.zUn.PERMISSIONS_GRANTED:
                                case x.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = ef(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new O.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new O.ms(x.zUn.PERMISSIONS_RESET, r, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case x.zUn.FLAGS: {
                                    let t = [],
                                        { added: n, removed: r } = (function (e, t) {
                                            let n = "number" == typeof e ? e : 0,
                                                r = "number" == typeof t ? t : 0,
                                                l = D.Ge(r, n),
                                                i = D.Ge(n, r),
                                                s = [],
                                                a = [];
                                            for (let e in b.zZ) {
                                                let t = b.zZ[e];
                                                D.yE(l, t) && s.push(t), D.yE(i, t) && a.push(t);
                                            }
                                            return {
                                                added: s,
                                                removed: a,
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new O.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let n = new O.ms(e.key, r, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case x.zUn.PREFERRED_LOCALE:
                                    return eS(e, (e) => {
                                        let t = (0, j.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case x.zUn.VIDEO_QUALITY_MODE:
                                    return eS(e, (e) =>
                                        e === x.Ucd.FULL ? j.intl.string(j.t["7jOoJE"]) : j.intl.string(j.t.jjKYpu),
                                    );
                                case x.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let r = {
                                            [x.xmn.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [x.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                x.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [x.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                x.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [x.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        },
                                        i = [];
                                    return (
                                        Object.values(x.xmn).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                l = (e.newValue & t) === t;
                                            if (n === l) return;
                                            let s = new O.ms(r[t], !n, !l);
                                            i.push(s);
                                        }),
                                        i
                                    );
                                case x.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE)
                                        return eS(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(I.ZF).join(", "),
                                        );
                                    break;
                                case x.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, I.YN);
                                    break;
                                case x.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, I.Ar);
                                    break;
                                case x.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE)
                                        return eS(e, (e) =>
                                            null != e && "object" == typeof e
                                                ? null != e.keyword_filter && Array.isArray(e.keyword_filter)
                                                    ? j.intl.formatToMarkdownString(j.t.y91UXV, {
                                                          newValue: e.keyword_filter
                                                              .map((e) => "'".concat(e, "'"))
                                                              .join(", "),
                                                      })
                                                    : JSON.stringify(e)
                                                : e,
                                        );
                                    break;
                                case x.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case x.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case x.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case x.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case x.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case x.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE)
                                        return eS(e, (e) =>
                                            null != e && Array.isArray(e)
                                                ? e.map((e) => "'".concat(e, "'")).join(", ")
                                                : JSON.stringify(e),
                                        );
                                    break;
                                case x.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE)
                                        return eS(
                                            e,
                                            (e) =>
                                                e
                                                    .map(f.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, _.F6)(e, p.default, S.Z, !0)),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]),
                                        );
                                    break;
                                case x.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === x.KFR.AUTO_MODERATION_RULE)
                                        return eS(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => R.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) =>
                                                null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]),
                                        );
                                    break;
                                case x.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: t, newValue: n } = e,
                                            r = Array.isArray(t) ? t : [],
                                            l = Array.isArray(n) ? n : [];
                                        if (0 === r.length && 0 === l.length) return e;
                                        let i = {},
                                            s = {};
                                        if (
                                            (r.forEach((e) => {
                                                i[e.id] = e;
                                            }),
                                            l.forEach((e) => {
                                                s[e.id] = e;
                                            }),
                                            r.length < l.length)
                                        ) {
                                            for (let e in s)
                                                if (null == i[e])
                                                    return new O.ms(x.zUn.AVAILABLE_TAG_ADD, null, eR(s[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in i)
                                                if (null == s[e])
                                                    return new O.ms(x.zUn.AVAILABLE_TAG_DELETE, null, eR(i[e]));
                                        }
                                        for (let e in i) {
                                            let t = i[e],
                                                n = s[e];
                                            if (
                                                (null == n ? void 0 : n.name) !== t.name ||
                                                (null == n ? void 0 : n.emoji_id) !== t.emoji_id ||
                                                (null == n ? void 0 : n.emoji_name) !== t.emoji_name
                                            )
                                                return new O.ms(x.zUn.AVAILABLE_TAG_EDIT, eR(t), eR(n));
                                        }
                                        return e;
                                    })(e);
                                case x.zUn.SCHEDULED_START_TIME:
                                case x.zUn.SCHEDULED_END_TIME:
                                    return eS(e, (e) => (0, C.vc)(s()(new Date(e)), "LLLL"));
                            }
                            return e;
                        })(r, e, t);
                        Array.isArray(i) ? i.forEach((e) => n.push(e)) : n.push(i);
                    }),
                        (e = e.set("changes", n));
                }
                n.push(e);
            }
        }),
        n
    );
}
function ef(e, t) {
    let n = u.vB("string" == typeof e ? e : 0),
        r = u.vB("string" == typeof t ? t : 0),
        l = u.Od(r, n),
        i = u.Od(n, r),
        s = [],
        a = [];
    for (let e in x.Plq) {
        let t = x.Plq[e];
        u.e$(l, t) && s.push(t), u.e$(i, t) && a.push(t);
    }
    return {
        added: s,
        removed: a,
    };
}
function eR(e) {
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
function eS(e, t, n) {
    let r = e.newValue,
        l = e.oldValue;
    return (
        null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))),
        null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))),
        new O.ms(e.key, l || e.oldValue, r || e.newValue)
    );
}
function ep(e, t, n, r, l) {
    let i = null,
        s = n((l = null != l ? l : e.targetId));
    if ((null != s && null != r && (i = r(s)), null == i)) {
        let t = M.Z.deletedTargets[e.targetType];
        null != t && null != t[l] && (i = t[l]);
    }
    if (null == i && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (i = n.newValue || n.oldValue);
    }
    return null != i ? i : l;
}
function eC(e, t, n) {
    let r = e,
        l = t(e);
    return null != l && null != n && (r = n(l)), r;
}
function eD(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eU(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eL(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function eM(e, t) {
    return (n) => (n.newValue ? e : t);
}
function ex(e) {
    return (t) => e[t.newValue];
}
function eb(e, t) {
    return (n) => {
        var r;
        return null != (r = e[n.newValue]) ? r : t;
    };
}
