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
    L = n(971130),
    U = n(709054),
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
    w = () => ({ [x.zUn.REASON]: () => j.t["2IW3Cw"] }),
    z = () =>
        y(
            {
                [x.zUn.NAME]: () => j.t.CkDiND,
                [x.zUn.DESCRIPTION]: eL(j.t.RP3Ey8, j.t.QAVj1d),
                [x.zUn.ICON_HASH]: () => j.t.iLZ8Q0,
                [x.zUn.SPLASH_HASH]: () => j.t["4VV6dn"],
                [x.zUn.DISCOVERY_SPLASH_HASH]: () => j.t["2pds6u"],
                [x.zUn.BANNER_HASH]: eL(j.t.Cxq4zM, j.t["H7eE//"]),
                [x.zUn.OWNER_ID]: () => j.t["8ltsLS"],
                [x.zUn.REGION]: () => j.t.X9r5KS,
                [x.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDQ,
                [x.zUn.AFK_CHANNEL_ID]: eL(j.t.ClBuAw, j.t["ms+xtL"]),
                [x.zUn.AFK_TIMEOUT]: () => j.t.q21fHR,
                [x.zUn.SYSTEM_CHANNEL_ID]: eL(j.t.H1VXaW, j.t.XhtmxM),
                [x.zUn.RULES_CHANNEL_ID]: eL(j.t.OI6MGx, j.t.lik3tL),
                [x.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eL(j.t.YxBKra, j.t.Ehsnio),
                [x.zUn.MFA_LEVEL]: ex({
                    [x.BpS.NONE]: j.t.voaCCQ,
                    [x.BpS.ELEVATED]: j.t.pRNVw8,
                }),
                [x.zUn.WIDGET_ENABLED]: eM(j.t.ADIty8, j.t.nf58VV),
                [x.zUn.WIDGET_CHANNEL_ID]: eL(j.t["6SBsDQ"], j.t.deQ5wM),
                [x.zUn.VERIFICATION_LEVEL]: ex({
                    [x.sFg.NONE]: j.t.W27rsb,
                    [x.sFg.LOW]: j.t["V8P+Pz"],
                    [x.sFg.MEDIUM]: j.t.ERQFam,
                    [x.sFg.HIGH]: j.t["83fN0t"],
                    [x.sFg.VERY_HIGH]: j.t.PnkQJC,
                }),
                [x.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: ex({
                    [x.bL.ALL_MESSAGES]: j.t.LDi76O,
                    [x.bL.ONLY_MENTIONS]: j.t["6K83bW"],
                }),
                [x.zUn.VANITY_URL_CODE]: eL(j.t.Zplsoq, j.t.u6cArq),
                [x.zUn.EXPLICIT_CONTENT_FILTER]: ex({
                    [x.lxg.DISABLED]: j.t.fmOeLy,
                    [x.lxg.MEMBERS_WITHOUT_ROLES]: j.t["4FghY2"],
                    [x.lxg.ALL_MEMBERS]: j.t.olyrSk,
                }),
                [x.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eM(j.t.rBT0sr, j.t["gc+te3"]),
                [x.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
                [x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjI,
                [x.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t["+fQAen"],
                [x.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4u,
                [x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSE,
            },
            w(),
        ),
    V = () => ({
        [x.zUn.NAME]: eD(j.t.f8Rh0d, j.t.ebD4Qk),
        [x.zUn.POSITION]: eD(j.t.isS8tb, j.t.t5uBio),
        [x.zUn.TOPIC]: eU(j.t.esQcxs, j.t["m+veAg"], j.t["ws/1FB"]),
        [x.zUn.BITRATE]: eD(j.t.fw81am, j.t.MFNlgY),
        [x.zUn.RTC_REGION_OVERRIDE]: eU(j.t["6kajx8"], j.t.eGOlmZ, j.t["0JMZd3"]),
        [x.zUn.USER_LIMIT]: eD(j.t.wk5t7u, j.t.XgjCEh),
        [x.zUn.RATE_LIMIT_PER_USER]: eD(j.t["7lirhI"], j.t.j4CCJS),
        [x.zUn.PERMISSIONS_RESET]: () => j.t["+vSBFR"],
        [x.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv7,
        [x.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5e,
        [x.zUn.REASON]: () => j.t["2IW3Cw"],
        [x.zUn.NSFW]: eM(j.t.H8Ri2d, j.t.WW6cJy),
        [x.zUn.TYPE]: eD(j.t.Vn5zn5, j.t.aq4uWF),
        [x.zUn.VIDEO_QUALITY_MODE]: eD(j.t.e68fAQ, j.t.djbES0),
        [x.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(j.t.nYz2mp, j.t.oczvRE),
        [x.zUn.FLAGS]: () => j.t.ImCQkp,
        [x.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
        [x.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzlp,
        [x.zUn.AVAILABLE_TAG_DELETE]: () => j.t["8QOsen"],
        [x.zUn.LINKED_LOBBY]: eL(j.t["+/3TkJ"], j.t["5kDYS0"]),
    }),
    Z = () =>
        y(
            {
                [x.zUn.NICK]: eU(j.t.qXDsHh, j.t["m+qur6"], j.t.DvLvjI),
                [x.zUn.DEAF]: eM(j.t.mArLlZ, j.t.ddvVYG),
                [x.zUn.MUTE]: eM(j.t["bxs/lZ"], j.t.FjecQE),
                [x.zUn.ROLES_REMOVE]: () => j.t["+2SDWV"],
                [x.zUn.ROLES_ADD]: () => j.t["B3/3IC"],
                [x.zUn.PRUNE_DELETE_DAYS]: () => j.t["+Cvc+P"],
                [x.zUn.COMMUNICATION_DISABLED_UNTIL]: eU(j.t.LXTQr6, j.t.LXTQr6, j.t.ULSdnJ),
                [x.zUn.BYPASSES_VERIFICATION]: eM(j.t.NBPBur, j.t.zATosr),
                [x.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
            },
            w(),
        ),
    B = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.QBmlaG, j.t.Lfs4r6),
                [x.zUn.DESCRIPTION]: eD(j.t.XeYKWF, j.t.PSfeIi),
                [x.zUn.PERMISSIONS_GRANTED]: () => j.t["9i/DvL"],
                [x.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVl,
                [x.zUn.COLOR]: eb({ "#000000": j.t.TK6E1N }, j.t["2FQFi4"]),
                [x.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? j.t.U44ttr : j.t.WnSwLy),
                [x.zUn.HOIST]: eM(j.t.gWfe29, j.t["+tb8kJ"]),
                [x.zUn.MENTIONABLE]: eM(j.t.LL8VFB, j.t.Z7xzmJ),
                [x.zUn.ICON_HASH]: () => j.t["iEE79/"],
                [x.zUn.UNICODE_EMOJI]: () => j.t.KiLMMz,
            },
            w(),
        ),
    H = () =>
        G(y({}, w()), {
            [x.zUn.TITLE]: eD(j.t.sNpuy8, j.t["3Ukc/v"]),
            [x.zUn.DESCRIPTION]: eD(j.t.PP1q09, j.t.z7pYLi),
            [x.zUn.OPTIONS]: () => j.t["3G5C9/"],
            [x.zUn.SINGLE_SELECT]: eM(j.t.v4WnR0, j.t["6Qg3uL"]),
            [x.zUn.REQUIRED]: eM(j.t["0MPAMz"], j.t.pwsXio),
        }),
    K = () =>
        G(y({}, w()), {
            [x.zUn.DEFAULT_CHANNEL_IDS]: () => j.t["8M+D2t"],
            [x.zUn.ENABLE_DEFAULT_CHANNELS]: eM(j.t["EYd/lp"], j.t["36OZeX"]),
            [x.zUn.ENABLE_ONBOARDING_PROMPTS]: eM(j.t.V3u8PT, j.t.r66lc3),
            [x.zUn.ENABLED]: eM(j.t.SODVIi, j.t.u8HY5e),
        }),
    W = () =>
        G(y({}, w()), {
            [x.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xc,
            [x.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUInp,
            [x.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mp,
        }),
    q = () =>
        y(
            {
                [x.zUn.CODE]: () => j.t.rrRHgY,
                [x.zUn.CHANNEL_ID]: () => j.t.Q1vd5u,
                [x.zUn.MAX_USES]: eb({ 0: j.t.Yx8LNj }, j.t["3ygnwc"]),
                [x.zUn.MAX_AGE]: eb({ [j.intl.string(j.t.PqEzn5)]: j.t.uWrLv7 }, j.t["Q+5kcH"]),
                [x.zUn.TEMPORARY]: eM(j.t.MWp6Hx, j.t.omiqTE),
                [x.zUn.FLAGS]: ex({ [o.$.IS_GUEST_INVITE]: j.t.XYZMbG }),
            },
            w(),
        ),
    Y = () => ({
        [x.zUn.CHANNEL_ID]: eD(j.t.jhPpra, j.t.ar4qYG),
        [x.zUn.NAME]: eD(j.t.ZVGrzc, j.t.tywdZW),
        [x.zUn.AVATAR_HASH]: () => j.t.KB52Ul,
        [x.zUn.REASON]: () => j.t["2IW3Cw"],
    }),
    X = () => y({ [x.zUn.NAME]: eD(j.t.ahU1o6, j.t["wxs+vb"]) }, w()),
    J = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.cdl0Ym, j.t.o3W2l5),
                [x.zUn.TAGS]: eD(j.t["zwL+S0"], j.t.VYfKAw),
                [x.zUn.DESCRIPTION]: eD(j.t.XeYKWF, j.t.PSfeIi),
            },
            w(),
        ),
    Q = () =>
        y(
            {
                [x.zUn.ENABLE_EMOTICONS]: eM(j.t["FI0m5+"], j.t.olpKCw),
                [x.zUn.EXPIRE_BEHAVIOR]: ex({
                    0: j.t["1Bb1+v"],
                    1: j.t.vjlW6u,
                }),
                [x.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMT,
            },
            w(),
        ),
    $ = () =>
        y(
            {
                [x.zUn.TOPIC]: eD(j.t["m+veAg"], j.t.esQcxs),
                [x.zUn.PRIVACY_LEVEL]: ex({
                    [P.j8.GUILD_ONLY]: j.t["EC+CDg"],
                    [P.j8.PUBLIC]: j.t["pK/WGx"],
                }),
            },
            w(),
        ),
    ee = () =>
        y(
            {
                [x.zUn.NAME]: () => j.t["21EXHR"],
                [x.zUn.DESCRIPTION]: () => j.t.Vm1of3,
                [x.zUn.PRIVACY_LEVEL]: ex({
                    [P.j8.GUILD_ONLY]: j.t["EC+CDg"],
                    [P.j8.PUBLIC]: j.t["pK/WGx"],
                }),
                [x.zUn.STATUS]: ex({
                    [P.p1.SCHEDULED]: j.t.hXKDgo,
                    [P.p1.ACTIVE]: j.t.lRX1n5,
                    [P.p1.COMPLETED]: j.t["/eFIho"],
                    [P.p1.CANCELED]: j.t.NWIYho,
                }),
                [x.zUn.ENTITY_TYPE]: ex({
                    [P.WX.NONE]: j.t["6sO3Sk"],
                    [P.WX.STAGE_INSTANCE]: j.t["Wo+s19"],
                    [P.WX.VOICE]: j.t.XCVaIC,
                    [P.WX.EXTERNAL]: j.t.IvhAj4,
                }),
                [x.zUn.CHANNEL_ID]: eL(j.t.yJBIcX, j.t["+PqSsr"]),
                [x.zUn.LOCATION]: eL(j.t.GaMBHx, j.t.PsICk5),
                [x.zUn.IMAGE_HASH]: eL(j.t.S3vcRE, j.t.KQu47O),
            },
            w(),
        ),
    et = () =>
        y(
            {
                [x.zUn.SCHEDULED_START_TIME]: eL(j.t.zMIYVl, j.t.fzF8GR),
                [x.zUn.SCHEDULED_END_TIME]: eL(j.t.vONSQE, j.t.IlIti4),
                [x.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return j.t["7RkicX"];
                        else if (e.oldValue && !e.newValue) return j.t.dRNTWV;
                    }
                },
            },
            w(),
        ),
    en = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.tUKRzc, j.t.kPCHOD),
                [x.zUn.ARCHIVED]: eM(j.t.jDi9FB, j.t.F6dvbW),
                [x.zUn.LOCKED]: eM(j.t.JSy1QU, j.t.C7Jgo6),
                [x.zUn.INVITABLE]: eM(j.t.dxNUs7, j.t.biJvYG),
                [x.zUn.AUTO_ARCHIVE_DURATION]: eD(j.t.LuaG39, j.t["18d9qq"]),
                [x.zUn.RATE_LIMIT_PER_USER]: eD(j.t["7lirhI"], j.t.j4CCJS),
                [x.zUn.FLAGS]: () => j.t.sSAQtr,
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
                            ? (t[e.key] = () => j.t["JH+89P"])
                            : (t[e.key] = () => j.t.HUrFDg)
                        : (t[e.key] = () => j.t.vynxnZ);
                }),
            t
        );
    },
    el = () =>
        y(
            {
                [x.zUn.NAME]: () => j.t.XwxAJS,
                [x.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pys,
                [x.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t["46Y+Ly"],
                [x.zUn.AUTO_MODERATION_ACTIONS]: () => j.t["8efxfn"],
                [x.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji;
                },
                [x.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nz,
                [x.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLC,
                [x.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t["h/lM6+"],
                [x.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t["9V2yaG"],
                [x.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t["4Qe9n5"],
                [x.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxs,
                [x.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadX,
                [x.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t["FvvR+P"],
                [x.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSv7,
            },
            w(),
        ),
    ei = () =>
        y(
            {
                [x.zUn.NAME]: eD(j.t.VOtRSE, j.t.OK7B8P),
                [x.zUn.VOLUME]: eD(j.t.igrDBw, j.t.L5lDFB),
                [x.zUn.EMOJI_NAME]: eU(j.t.IIanaW, j.t.z4w4U1, j.t.V8Tfyc),
                [x.zUn.EMOJI_ID]: eU(j.t.ainxMD, j.t["2NPsYm"], j.t["8crtnp"]),
            },
            w(),
        ),
    es = () =>
        y(
            {
                [x.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ),
                [x.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVV : j.t.WxyOtr),
            },
            w(),
        ),
    ea = () => y({ [x.zUn.STATUS]: () => j.t.HyCSnJ }, w()),
    eo = () => ({
        [x.zUn.DESCRIPTION]: () => j.t.nsUZKS,
        [x.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgI,
        [x.zUn.CUSTOM_BANNER_HASH]: () => j.t["04b5KC"],
        [x.zUn.TRAITS]: () => j.t.dEy9WF,
        [x.zUn.GAME_APPLICATION_IDS]: () => j.t["8BOT39"],
        [x.zUn.VISIBILITY]: () => j.t.bCl1Eh,
        [x.zUn.SERVER_TAG]: eL(j.t.ix1dnZ, j.t["4LKpKS"]),
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
            label: j.intl.string(j.t.QxEVcn),
            valueLabel: j.intl.string(j.t.an9Ry8),
        },
        {
            value: x.rsA.GUILD_UPDATE,
            label: j.intl.string(j.t["5INZa2"]),
        },
        {
            value: x.rsA.CHANNEL_CREATE,
            label: j.intl.string(j.t["2uh4vL"]),
        },
        {
            value: x.rsA.CHANNEL_UPDATE,
            label: j.intl.string(j.t.mGsBLS),
        },
        {
            value: x.rsA.CHANNEL_DELETE,
            label: j.intl.string(j.t.hCHzAg),
        },
        {
            value: x.rsA.CHANNEL_OVERWRITE_CREATE,
            label: j.intl.string(j.t["8TnAMD"]),
        },
        {
            value: x.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: j.intl.string(j.t.Jqx0Bg),
        },
        {
            value: x.rsA.CHANNEL_OVERWRITE_DELETE,
            label: j.intl.string(j.t.gBXOr6),
        },
        {
            value: x.rsA.MEMBER_KICK,
            label: j.intl.string(j.t["Q1/hNz"]),
        },
        {
            value: x.rsA.MEMBER_PRUNE,
            label: j.intl.string(j.t.tOTTjY),
        },
        {
            value: x.rsA.MEMBER_BAN_ADD,
            label: j.intl.string(j.t["NfPn+f"]),
        },
        {
            value: x.rsA.MEMBER_BAN_REMOVE,
            label: j.intl.string(j.t.XCsGfH),
        },
        {
            value: x.rsA.MEMBER_UPDATE,
            label: j.intl.string(j.t["F/jmND"]),
        },
        {
            value: x.rsA.MEMBER_ROLE_UPDATE,
            label: j.intl.string(j.t.zAveSE),
        },
        {
            value: x.rsA.MEMBER_MOVE,
            label: j.intl.string(j.t.QshteX),
        },
        {
            value: x.rsA.MEMBER_DISCONNECT,
            label: j.intl.string(j.t.Z45os7),
        },
        {
            value: x.rsA.BOT_ADD,
            label: j.intl.string(j.t.vuH24e),
        },
        {
            value: x.rsA.THREAD_CREATE,
            label: j.intl.string(j.t["+zl0DA"]),
        },
        {
            value: x.rsA.THREAD_UPDATE,
            label: j.intl.string(j.t.rbIry8),
        },
        {
            value: x.rsA.THREAD_DELETE,
            label: j.intl.string(j.t.hFjNEB),
        },
        {
            value: x.rsA.ROLE_CREATE,
            label: j.intl.string(j.t.AbxKtr),
        },
        {
            value: x.rsA.ROLE_UPDATE,
            label: j.intl.string(j.t.t3Z6sb),
        },
        {
            value: x.rsA.ROLE_DELETE,
            label: j.intl.string(j.t.YsFpa2),
        },
        {
            value: x.rsA.ONBOARDING_PROMPT_CREATE,
            label: j.intl.string(j.t.ZV9tqa),
        },
        {
            value: x.rsA.ONBOARDING_PROMPT_UPDATE,
            label: j.intl.string(j.t.PcOdvb),
        },
        {
            value: x.rsA.ONBOARDING_PROMPT_DELETE,
            label: j.intl.string(j.t["+r33NT"]),
        },
        {
            value: x.rsA.ONBOARDING_CREATE,
            label: j.intl.string(j.t.uDADdX),
        },
        {
            value: x.rsA.ONBOARDING_UPDATE,
            label: j.intl.string(j.t.J1H1ws),
        },
        {
            value: x.rsA.HOME_SETTINGS_CREATE,
            label: j.intl.string(j.t.Di4cvL),
        },
        {
            value: x.rsA.HOME_SETTINGS_UPDATE,
            label: j.intl.string(j.t.tzyrJC),
        },
        {
            value: x.rsA.INVITE_CREATE,
            label: j.intl.string(j.t["0BNJdX"]),
        },
        {
            value: x.rsA.INVITE_UPDATE,
            label: j.intl.string(j.t["o++obW"]),
        },
        {
            value: x.rsA.INVITE_DELETE,
            label: j.intl.string(j.t.iP40Aw),
        },
        {
            value: x.rsA.WEBHOOK_CREATE,
            label: j.intl.string(j.t["tBF4+f"]),
        },
        {
            value: x.rsA.WEBHOOK_UPDATE,
            label: j.intl.string(j.t.eV3McH),
        },
        {
            value: x.rsA.WEBHOOK_DELETE,
            label: j.intl.string(j.t.AAL3Ky),
        },
        {
            value: x.rsA.EMOJI_CREATE,
            label: j.intl.string(j.t.RuWm0d),
        },
        {
            value: x.rsA.EMOJI_UPDATE,
            label: j.intl.string(j.t.WzdUY2),
        },
        {
            value: x.rsA.EMOJI_DELETE,
            label: j.intl.string(j.t.c3dK2N),
        },
        {
            value: x.rsA.MESSAGE_DELETE,
            label: j.intl.string(j.t.daTfXl),
        },
        {
            value: x.rsA.MESSAGE_BULK_DELETE,
            label: j.intl.string(j.t.nrBxen),
        },
        {
            value: x.rsA.MESSAGE_PIN,
            label: j.intl.string(j.t.MUldyM),
        },
        {
            value: x.rsA.MESSAGE_UNPIN,
            label: j.intl.string(j.t.n4zKhI),
        },
        {
            value: x.rsA.INTEGRATION_CREATE,
            label: j.intl.string(j.t["deNm8/"]),
        },
        {
            value: x.rsA.INTEGRATION_UPDATE,
            label: j.intl.string(j.t.HT7Sfn),
        },
        {
            value: x.rsA.INTEGRATION_DELETE,
            label: j.intl.string(j.t["+kJ09v"]),
        },
        {
            value: x.rsA.STICKER_CREATE,
            label: j.intl.string(j.t["3DzNjY"]),
        },
        {
            value: x.rsA.STICKER_UPDATE,
            label: j.intl.string(j.t.tdhW5e),
        },
        {
            value: x.rsA.STICKER_DELETE,
            label: j.intl.string(j.t["+ZhGOj"]),
        },
        {
            value: x.rsA.STAGE_INSTANCE_CREATE,
            label: j.intl.string(j.t.sPbjAw),
        },
        {
            value: x.rsA.STAGE_INSTANCE_UPDATE,
            label: j.intl.string(j.t.cW9LfH),
        },
        {
            value: x.rsA.STAGE_INSTANCE_DELETE,
            label: j.intl.string(j.t["U1r+yM"]),
        },
        {
            value: x.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: j.intl.string(j.t.H81Zy8),
        },
        {
            value: x.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: j.intl.string(j.t.FM69l5),
        },
        {
            value: x.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: j.intl.string(j.t.Rq28Bg),
        },
        {
            value: x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: j.intl.string(j.t.iPdFOj),
        },
        {
            value: x.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: j.intl.string(j.t.gNq5z8),
        },
        {
            value: x.rsA.AUTO_MODERATION_RULE_CREATE,
            label: j.intl.string(j.t.f72Zqa),
        },
        {
            value: x.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: j.intl.string(j.t.XeqIio),
        },
        {
            value: x.rsA.AUTO_MODERATION_RULE_DELETE,
            label: j.intl.string(j.t.syAApa),
        },
        {
            value: x.rsA.GUILD_HOME_FEATURE_ITEM,
            label: j.intl.string(j.t.lhG5KC),
        },
        {
            value: x.rsA.GUILD_HOME_REMOVE_ITEM,
            label: j.intl.string(j.t.lRPRwc),
        },
        {
            value: x.rsA.SOUNDBOARD_SOUND_CREATE,
            label: j.intl.string(j.t.yoRi5u),
        },
        {
            value: x.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: j.intl.string(j.t.uKlG0d),
        },
        {
            value: x.rsA.SOUNDBOARD_SOUND_DELETE,
            label: j.intl.string(j.t.gq0iCQ),
        },
        {
            value: x.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: j.intl.string(j.t.rGr0YG),
        },
        {
            value: x.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: j.intl.string(j.t.V9PEQ0),
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
        ? j.intl.string(j.t.z3wbj4)
        : null != (t = null == n ? void 0 : n.label)
          ? t
          : null;
}
let eA = {
    [E.J6.SECONDS]: (e) => j.intl.formatToPlainString(j.t.geSp4O, { seconds: e }),
    [E.J6.MINUTES]: (e) => j.intl.formatToPlainString(j.t.iXLF9f, { minutes: e }),
    [E.J6.HOURS]: (e) => j.intl.formatToPlainString(j.t.xCjYxM, { hours: e }),
    [E.J6.DAYS]: (e) => j.intl.formatToPlainString(j.t.k2UNz8, { days: e }),
};
function eT(e) {
    let t = eE(x.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = ed(x.zUn.ROLES_ADD, e).length > 0,
        r = ed(x.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - U.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, E.CI)(r, F);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in eA) {
                let e = l.unit,
                    t = l.unit === E.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return eA[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return j.intl.string(j.t.MA1ltr);
    } else if (n && r) return j.intl.string(j.t.RdMMe3);
    else if (n) return j.intl.string(j.t["4GQqs7"]);
    else if (r) return j.intl.string(j.t["8mQ6x8"]);
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
        ? j.intl.formatToPlainString(j.t.tZw1ER, {
              roleNamesAdded: r,
              roleNamesRemoved: l,
          })
        : t.length > 0
          ? j.intl.formatToPlainString(j.t["/mTqt7"], { roleNames: r })
          : n.length > 0
            ? j.intl.formatToPlainString(j.t.Wk4pAA, { roleNames: l })
            : null;
}
function em(e) {
    switch (e.action) {
        case x.rsA.GUILD_UPDATE:
            return j.t.LjZO39;
        case x.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === x.zUn.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
            switch (t.newValue) {
                case x.d4z.GUILD_STAGE_VOICE:
                    return j.t["OKp4+v"];
                case x.d4z.GUILD_VOICE:
                    return j.t.NPOy4O;
                case x.d4z.GUILD_CATEGORY:
                    return j.t.T3KIj4;
                default:
                    return j.t.wrYNGx;
            }
        case x.rsA.CHANNEL_UPDATE:
            return j.t.nTYk6O;
        case x.rsA.CHANNEL_DELETE:
            return j.t.ynfvkp;
        case x.rsA.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1d;
        case x.rsA.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNT;
        case x.rsA.CHANNEL_OVERWRITE_DELETE:
            return j.t["HASt//"];
        case x.rsA.MEMBER_KICK:
            return j.t.B5hDZW;
        case x.rsA.MEMBER_PRUNE:
            return j.t.qKOZTE;
        case x.rsA.MEMBER_BAN_ADD:
            return j.t.XklUm5;
        case x.rsA.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HB;
        case x.rsA.MEMBER_UPDATE:
            return j.t.pznhLC;
        case x.rsA.MEMBER_ROLE_UPDATE:
            return j.t.VngfiY;
        case x.rsA.MEMBER_MOVE:
            return j.t.Yt6NkZ;
        case x.rsA.MEMBER_DISCONNECT:
            return j.t.K4eCZ2;
        case x.rsA.BOT_ADD:
            return j.t.fWvX0N;
        case x.rsA.ROLE_CREATE:
            return j.t.UTLTx8;
        case x.rsA.ROLE_UPDATE:
            return j.t.NRbN19;
        case x.rsA.ROLE_DELETE:
            return j.t["4s63tb"];
        case x.rsA.INVITE_CREATE:
            return j.t.YHOXW1;
        case x.rsA.INVITE_UPDATE:
            return j.t.ja3kGR;
        case x.rsA.INVITE_DELETE:
            return j.t["3n/iWl"];
        case x.rsA.WEBHOOK_CREATE:
            return j.t.MhYhio;
        case x.rsA.WEBHOOK_UPDATE:
            return j.t["6GTlWF"];
        case x.rsA.WEBHOOK_DELETE:
            return j.t.in0VjY;
        case x.rsA.EMOJI_CREATE:
            return j.t["7vekRE"];
        case x.rsA.EMOJI_UPDATE:
            return j.t.IsCKfn;
        case x.rsA.EMOJI_DELETE:
            return j.t.JnUaVF;
        case x.rsA.STICKER_CREATE:
            return j.t.DRZifn;
        case x.rsA.STICKER_UPDATE:
            return j.t.bhujGR;
        case x.rsA.STICKER_DELETE:
            return j.t.rGEP9f;
        case x.rsA.MESSAGE_DELETE:
            return j.t["HPkD+P"];
        case x.rsA.MESSAGE_BULK_DELETE:
            return j.t["3RIvLC"];
        case x.rsA.MESSAGE_PIN:
            return j.t.Yna7Ex;
        case x.rsA.MESSAGE_UNPIN:
            return j.t.NCxXUV;
        case x.rsA.INTEGRATION_CREATE:
            return j.t.HYvCb2;
        case x.rsA.INTEGRATION_UPDATE:
            return j.t.ibCCOT;
        case x.rsA.INTEGRATION_DELETE:
            return j.t["8zScWV"];
        case x.rsA.STAGE_INSTANCE_CREATE:
            return j.t["n7x/DA"];
        case x.rsA.STAGE_INSTANCE_UPDATE:
            return j.t["0hQYU1"];
        case x.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t["Oi/in5"];
            return j.t["7ZIFm5"];
        case x.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52t;
        case x.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK19;
        case x.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t["/ARPKS"];
        case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t["8qCI39"];
        case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2dX;
        case x.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === x.zUn.TYPE) : null;
            if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
            switch (n.newValue) {
                case x.d4z.PRIVATE_THREAD:
                    return j.t["Br0y5+"];
                case x.d4z.ANNOUNCEMENT_THREAD:
                    return j.t["6uaMmJ"];
                default:
                    return j.t["2cxQ7O"];
            }
        case x.rsA.THREAD_UPDATE:
            return j.t.PSsy4u;
        case x.rsA.THREAD_DELETE:
            return j.t.s3Khn5;
        case x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBg;
        case x.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2N;
        case x.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if (
                (null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) ===
                v.fX.USER_PROFILE.toString()
            )
                return j.t.YQsjen;
            return j.t.SD0PwM;
        case x.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4Twc;
        case x.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return j.t["/W5u5u"];
        case x.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWys;
        case x.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t.ryGLk5;
        case x.rsA.AUTO_MODERATION_RULE_CREATE:
            return j.t.NKljj4;
        case x.rsA.AUTO_MODERATION_RULE_UPDATE:
            return j.t["3wEA9v"];
        case x.rsA.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3t;
        case x.rsA.ONBOARDING_PROMPT_CREATE:
            return j.t["/8A1g4"];
        case x.rsA.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWF;
        case x.rsA.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTam;
        case x.rsA.ONBOARDING_CREATE:
            return j.t.wDaq39;
        case x.rsA.ONBOARDING_UPDATE:
            return j.t["yONu/v"];
        case x.rsA.HOME_SETTINGS_CREATE:
            return j.t.dSdCjI;
        case x.rsA.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qq;
        case x.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === x.zUn.ENTITY_TYPE) : null;
            if (null == l) return j.t["UZ+U3N"];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return j.t["PyEa+P"];
                case a.w.FORUM_POST:
                    return j.t.hCuAb2;
                default:
                    return j.t["UZ+U3N"];
            }
        case x.rsA.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReur;
        case x.rsA.SOUNDBOARD_SOUND_CREATE:
            return j.t["0PD83d"];
        case x.rsA.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n19;
        case x.rsA.SOUNDBOARD_SOUND_DELETE:
            return j.t["kVz4//"];
        case x.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU1;
        case x.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case x.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t.NUKUb2;
        case x.rsA.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hFx;
        case x.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return j.t["3Ne7MD"];
        default:
            return null;
    }
}
function eg(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t["5G8ZDw"]);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t["4YLtzM"]);
        case b.zZ.PINNED:
            return j.intl.string(j.t["1QLRYW"]);
    }
    return null;
}
function eN(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t.S5kuWV);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t["8qpgc3"]);
        case b.zZ.PINNED:
            return j.intl.string(j.t.CMweGB);
    }
    return null;
}
function eh(e, t) {
    switch (e) {
        case x.Plq.CREATE_INSTANT_INVITE:
            return j.intl.string(j.t.zJrgTE);
        case x.Plq.KICK_MEMBERS:
            return j.intl.string(j.t.pBNv6u);
        case x.Plq.BAN_MEMBERS:
            return j.intl.string(j.t.oTBA7O);
        case x.Plq.ADMINISTRATOR:
            return j.intl.string(j.t.PGvZqa);
        case x.Plq.MANAGE_CHANNELS:
            if (t.targetType === x.KFR.CHANNEL || t.targetType === x.KFR.CHANNEL_OVERWRITE)
                return j.intl.string(j.t.nAw15O);
            return j.intl.string(j.t["9qLtWl"]);
        case x.Plq.MANAGE_GUILD:
            return j.intl.string(j.t.QZRcfH);
        case x.Plq.VIEW_GUILD_ANALYTICS:
            return j.intl.string(j.t.rQJBEx);
        case x.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.intl.string(j.t["0lTLTk"]);
        case x.Plq.CHANGE_NICKNAME:
            return j.intl.string(j.t.dilOFx);
        case x.Plq.MANAGE_NICKNAMES:
            return j.intl.string(j.t["t+Ct5+"]);
        case x.Plq.MANAGE_ROLES:
            return j.intl.string(j.t["C8d+oK"]);
        case x.Plq.MANAGE_WEBHOOKS:
            return j.intl.string(j.t["/ADKmJ"]);
        case x.Plq.CREATE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.HarVuL);
        case x.Plq.MANAGE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.bbuXIi);
        case x.Plq.VIEW_AUDIT_LOG:
            return j.intl.string(j.t.fZgLpK);
        case x.Plq.VIEW_CHANNEL:
            if (t.targetType === x.KFR.CHANNEL || t.targetType === x.KFR.CHANNEL_OVERWRITE)
                return j.intl.string(j.t["W/A4Qk"]);
            return j.intl.string(j.t.uV83ys);
        case x.Plq.SEND_MESSAGES:
            return j.intl.string(j.t.T32rkJ);
        case x.Plq.SEND_TTS_MESSAGES:
            return j.intl.string(j.t.Mg7bkp);
        case x.Plq.USE_APPLICATION_COMMANDS:
            return j.intl.string(j.t.shbR1d);
        case x.Plq.MANAGE_MESSAGES:
            return j.intl.string(j.t["6lU9xM"]);
        case x.Plq.EMBED_LINKS:
            return j.intl.string(j.t["969dEB"]);
        case x.Plq.ATTACH_FILES:
            return j.intl.string(j.t["3AS4UF"]);
        case x.Plq.READ_MESSAGE_HISTORY:
            return j.intl.string(j.t.l9ufaW);
        case x.Plq.MENTION_EVERYONE:
            return j.intl.string(j.t.Y78KGB);
        case x.Plq.USE_EXTERNAL_EMOJIS:
            return j.intl.string(j.t.BpBGZW);
        case x.Plq.USE_EXTERNAL_STICKERS:
            return j.intl.string(j.t["UeRs+f"]);
        case x.Plq.ADD_REACTIONS:
            return j.intl.string(j.t.yEoJAg);
        case x.Plq.CONNECT:
            return j.intl.string(j.t.S0W8Z2);
        case x.Plq.SPEAK:
            return j.intl.string(j.t["8w1tIS"]);
        case x.Plq.MUTE_MEMBERS:
            return j.intl.string(j.t["8EI309"]);
        case x.Plq.DEAFEN_MEMBERS:
            return j.intl.string(j.t["9L47Fh"]);
        case x.Plq.MOVE_MEMBERS:
            return j.intl.string(j.t.YtjJPT);
        case x.Plq.USE_VAD:
            return j.intl.string(j.t["08zAV1"]);
        case x.Plq.PRIORITY_SPEAKER:
            return j.intl.string(j.t.BVK71t);
        case x.Plq.STREAM:
            return j.intl.string(j.t.FlNoSU);
        case x.Plq.REQUEST_TO_SPEAK:
            return j.intl.string(j.t["5kicT0"]);
        case x.Plq.USE_EMBEDDED_ACTIVITIES:
            return j.intl.string(j.t.rLSGen);
        case x.Plq.CREATE_EVENTS:
            return j.intl.string(j.t.qyjZub);
        case x.Plq.MANAGE_EVENTS:
            return j.intl.string(j.t.HIgA5e);
        case x.Plq.CREATE_PUBLIC_THREADS:
            return j.intl.string(j.t["25rKnZ"]);
        case x.Plq.CREATE_PRIVATE_THREADS:
            return j.intl.string(j.t.QwbTSU);
        case x.Plq.SEND_MESSAGES_IN_THREADS:
            return j.intl.string(j.t.fTE74u);
        case x.Plq.MANAGE_THREADS:
            return j.intl.string(j.t.kEqgr6);
        case x.Plq.MODERATE_MEMBERS:
            return j.intl.string(j.t["+RL6p6"]);
        case x.Plq.SET_VOICE_CHANNEL_STATUS:
            return j.intl.string(j.t.VBwkUV);
        case x.Plq.SEND_POLLS:
            return j.intl.string(j.t.UMQ7W1);
        case x.Plq.USE_EXTERNAL_APPS:
            return j.intl.string(j.t.TtA5rK);
        case x.Plq.PIN_MESSAGES:
            return j.intl.string(j.t.Y5BI39);
        case x.Plq.BYPASS_SLOWMODE:
            return j.intl.string(j.t.kqcjeX);
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
                            return null == n || "" === n ? j.intl.string(j.t.ZNQyiY) : n;
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
                                () => j.intl.string(j.t.VbpLyc),
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
                                            U.default.extractTimestamp(
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
                                            ? (e.subtarget = j.intl.string(j.t.MSYhgo))
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
                                        let t = L.ZP.getMaxAgeOptionByValue(e);
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
                                        e === x.Ucd.FULL ? j.intl.string(j.t["7jOoJC"]) : j.intl.string(j.t.jjKYpq),
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
                                                null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV1"]),
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
                                                null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV1"]),
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
function eL(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eU(e, t, n, r) {
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
