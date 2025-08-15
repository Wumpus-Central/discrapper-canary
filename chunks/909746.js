t.d(e, {
    Bq: () => q,
    C0: () => Al,
    C2: () => $,
    EN: () => z,
    F1: () => Aa,
    HE: () => k,
    HN: () => Y,
    Iv: () => Ag,
    J5: () => Ad,
    JA: () => Ai,
    K: () => _,
    ML: () => U,
    N$: () => J,
    N5: () => AE,
    QM: () => Ah,
    V$: () => Ac,
    _$: () => AD,
    cT: () => AB,
    em: () => AC,
    hQ: () => Aw,
    hx: () => K,
    lR: () => W,
    lU: () => F,
    nm: () => Av,
    oD: () => X,
    pA: () => At,
    pY: () => G,
    pi: () => Ae,
    rK: () => Ar,
    uB: () => AA,
    vc: () => Ao,
    vm: () => An,
    zT: () => As,
}),
    t(415506),
    t(539854),
    t(49124);
var n = t(654861),
    r = t.n(n),
    l = t(913527),
    i = t.n(l),
    a = t(536402),
    s = t(533800),
    o = t(149765),
    g = t(866442),
    c = t(379649),
    f = t(911969),
    v = t(933557),
    u = t(710845),
    h = t(339085),
    d = t(236413),
    E = t(45966),
    C = t(563534),
    B = t(427679),
    w = t(926491),
    D = t(387667),
    M = t(592125),
    p = t(485386),
    I = t(699516),
    H = t(594174),
    b = t(55935),
    O = t(630388),
    Q = t(971130),
    P = t(709054),
    j = t(987707),
    V = t(981631),
    m = t(176505),
    T = t(273504),
    y = t(765305),
    L = t(388032);
function x(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function N(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let Z = new u.Z("AuditLogUtils"),
    S = [c.J6.DAYS, c.J6.HOURS, c.J6.MINUTES, c.J6.SECONDS],
    R = () => ({ [V.zUn.REASON]: () => L.t["2IW3Cw"] }),
    G = () =>
        x(
            {
                [V.zUn.NAME]: () => L.t.CkDiND,
                [V.zUn.DESCRIPTION]: AQ(L.t.RP3Ey8, L.t.QAVj1d),
                [V.zUn.ICON_HASH]: () => L.t.iLZ8Q0,
                [V.zUn.SPLASH_HASH]: () => L.t["4VV6dn"],
                [V.zUn.DISCOVERY_SPLASH_HASH]: () => L.t["2pds6u"],
                [V.zUn.BANNER_HASH]: AQ(L.t.Cxq4zM, L.t["H7eE//"]),
                [V.zUn.OWNER_ID]: () => L.t["8ltsLS"],
                [V.zUn.REGION]: () => L.t.X9r5KS,
                [V.zUn.PREFERRED_LOCALE]: () => L.t.UnXuDQ,
                [V.zUn.AFK_CHANNEL_ID]: AQ(L.t.ClBuAw, L.t["ms+xtL"]),
                [V.zUn.AFK_TIMEOUT]: () => L.t.q21fHR,
                [V.zUn.SYSTEM_CHANNEL_ID]: AQ(L.t.H1VXaW, L.t.XhtmxM),
                [V.zUn.RULES_CHANNEL_ID]: AQ(L.t.OI6MGx, L.t.lik3tL),
                [V.zUn.PUBLIC_UPDATES_CHANNEL_ID]: AQ(L.t.YxBKra, L.t.Ehsnio),
                [V.zUn.MFA_LEVEL]: AV({
                    [V.BpS.NONE]: L.t.voaCCQ,
                    [V.BpS.ELEVATED]: L.t.pRNVw8,
                }),
                [V.zUn.WIDGET_ENABLED]: Aj(L.t.ADIty8, L.t.nf58VV),
                [V.zUn.WIDGET_CHANNEL_ID]: AQ(L.t["6SBsDQ"], L.t.deQ5wM),
                [V.zUn.VERIFICATION_LEVEL]: AV({
                    [V.sFg.NONE]: L.t.W27rsb,
                    [V.sFg.LOW]: L.t["V8P+Pz"],
                    [V.sFg.MEDIUM]: L.t.ERQFam,
                    [V.sFg.HIGH]: L.t["83fN0t"],
                    [V.sFg.VERY_HIGH]: L.t.PnkQJC,
                }),
                [V.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: AV({
                    [V.bL.ALL_MESSAGES]: L.t.LDi76O,
                    [V.bL.ONLY_MENTIONS]: L.t["6K83bW"],
                }),
                [V.zUn.VANITY_URL_CODE]: AQ(L.t.Zplsoq, L.t.u6cArq),
                [V.zUn.EXPLICIT_CONTENT_FILTER]: AV({
                    [V.lxg.DISABLED]: L.t.fmOeLy,
                    [V.lxg.MEMBERS_WITHOUT_ROLES]: L.t["4FghY2"],
                    [V.lxg.ALL_MEMBERS]: L.t.olyrSk,
                }),
                [V.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: Aj(L.t.rBT0sr, L.t["gc+te3"]),
                [V.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => L.t.YbouFB,
                [V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => L.t.g3DMjI,
                [V.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => L.t["+fQAen"],
                [V.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => L.t.E1fc4u,
                [V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => L.t.XbwtSE,
            },
            R(),
        ),
    U = () => ({
        [V.zUn.NAME]: AO(L.t.f8Rh0d, L.t.ebD4Qk),
        [V.zUn.POSITION]: AO(L.t.isS8tb, L.t.t5uBio),
        [V.zUn.TOPIC]: AP(L.t.esQcxs, L.t["m+veAg"], L.t["ws/1FB"]),
        [V.zUn.BITRATE]: AO(L.t.fw81am, L.t.MFNlgY),
        [V.zUn.RTC_REGION_OVERRIDE]: AP(L.t["6kajx8"], L.t.eGOlmZ, L.t["0JMZd3"]),
        [V.zUn.USER_LIMIT]: AO(L.t.wk5t7u, L.t.XgjCEh),
        [V.zUn.RATE_LIMIT_PER_USER]: AO(L.t["7lirhI"], L.t.j4CCJS),
        [V.zUn.PERMISSIONS_RESET]: () => L.t["+vSBFR"],
        [V.zUn.PERMISSIONS_GRANTED]: () => L.t.EKLJv7,
        [V.zUn.PERMISSIONS_DENIED]: () => L.t.U3rO5e,
        [V.zUn.REASON]: () => L.t["2IW3Cw"],
        [V.zUn.NSFW]: Aj(L.t.H8Ri2d, L.t.WW6cJy),
        [V.zUn.TYPE]: AO(L.t.Vn5zn5, L.t.aq4uWF),
        [V.zUn.VIDEO_QUALITY_MODE]: AO(L.t.e68fAQ, L.t.djbES0),
        [V.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: AO(L.t.nYz2mp, L.t.oczvRE),
        [V.zUn.FLAGS]: () => L.t.ImCQkp,
        [V.zUn.AVAILABLE_TAG_ADD]: () => L.t.H86QQU,
        [V.zUn.AVAILABLE_TAG_EDIT]: () => L.t.YtUzlp,
        [V.zUn.AVAILABLE_TAG_DELETE]: () => L.t["8QOsen"],
        [V.zUn.LINKED_LOBBY]: AQ(L.t["+/3TkJ"], L.t["5kDYS0"]),
    }),
    F = () =>
        x(
            {
                [V.zUn.NICK]: AP(L.t.qXDsHh, L.t["m+qur6"], L.t.DvLvjI),
                [V.zUn.DEAF]: Aj(L.t.mArLlZ, L.t.ddvVYG),
                [V.zUn.MUTE]: Aj(L.t["bxs/lZ"], L.t.FjecQE),
                [V.zUn.ROLES_REMOVE]: () => L.t["+2SDWV"],
                [V.zUn.ROLES_ADD]: () => L.t["B3/3IC"],
                [V.zUn.PRUNE_DELETE_DAYS]: () => L.t["+Cvc+P"],
                [V.zUn.COMMUNICATION_DISABLED_UNTIL]: AP(L.t.LXTQr6, L.t.LXTQr6, L.t.ULSdnJ),
                [V.zUn.BYPASSES_VERIFICATION]: Aj(L.t.NBPBur, L.t.zATosr),
                [V.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => L.t.YbouFB,
            },
            R(),
        ),
    k = () =>
        x(
            {
                [V.zUn.NAME]: AO(L.t.QBmlaG, L.t.Lfs4r6),
                [V.zUn.DESCRIPTION]: AO(L.t.XeYKWF, L.t.PSfeIi),
                [V.zUn.PERMISSIONS_GRANTED]: () => L.t["9i/DvL"],
                [V.zUn.PERMISSIONS_DENIED]: () => L.t.pa1ZVl,
                [V.zUn.COLOR]: Am({ "#000000": L.t.TK6E1N }, L.t["2FQFi4"]),
                [V.zUn.COLORS]: (A) => (null == A.newValue.secondary_color ? L.t.U44ttr : L.t.WnSwLy),
                [V.zUn.HOIST]: Aj(L.t.gWfe29, L.t["+tb8kJ"]),
                [V.zUn.MENTIONABLE]: Aj(L.t.LL8VFB, L.t.Z7xzmJ),
                [V.zUn.ICON_HASH]: () => L.t["iEE79/"],
                [V.zUn.UNICODE_EMOJI]: () => L.t.KiLMMz,
            },
            R(),
        ),
    X = () =>
        N(x({}, R()), {
            [V.zUn.TITLE]: AO(L.t.sNpuy8, L.t["3Ukc/v"]),
            [V.zUn.DESCRIPTION]: AO(L.t.PP1q09, L.t.z7pYLi),
            [V.zUn.OPTIONS]: () => L.t["3G5C9/"],
            [V.zUn.SINGLE_SELECT]: Aj(L.t.v4WnR0, L.t["6Qg3uL"]),
            [V.zUn.REQUIRED]: Aj(L.t["0MPAMz"], L.t.pwsXio),
        }),
    z = () =>
        N(x({}, R()), {
            [V.zUn.DEFAULT_CHANNEL_IDS]: () => L.t["8M+D2t"],
            [V.zUn.ENABLE_DEFAULT_CHANNELS]: Aj(L.t["EYd/lp"], L.t["36OZeX"]),
            [V.zUn.ENABLE_ONBOARDING_PROMPTS]: Aj(L.t.V3u8PT, L.t.r66lc3),
            [V.zUn.ENABLED]: Aj(L.t.SODVIi, L.t.u8HY5e),
        }),
    K = () =>
        N(x({}, R()), {
            [V.zUn.WELCOME_MESSAGE]: () => L.t.dKQ1xc,
            [V.zUn.NEW_MEMBER_ACTIONS]: () => L.t.jDUInp,
            [V.zUn.RESOURCE_CHANNELS]: () => L.t.SIX0mp,
        }),
    Y = () =>
        x(
            {
                [V.zUn.CODE]: () => L.t.rrRHgY,
                [V.zUn.CHANNEL_ID]: () => L.t.Q1vd5u,
                [V.zUn.MAX_USES]: Am({ 0: L.t.Yx8LNj }, L.t["3ygnwc"]),
                [V.zUn.MAX_AGE]: Am({ [L.intl.string(L.t.PqEzn5)]: L.t.uWrLv7 }, L.t["Q+5kcH"]),
                [V.zUn.TEMPORARY]: Aj(L.t.MWp6Hx, L.t.omiqTE),
                [V.zUn.FLAGS]: AV({ [s.$.IS_GUEST_INVITE]: L.t.XYZMbG }),
            },
            R(),
        ),
    W = () => ({
        [V.zUn.CHANNEL_ID]: AO(L.t.jhPpra, L.t.ar4qYG),
        [V.zUn.NAME]: AO(L.t.ZVGrzc, L.t.tywdZW),
        [V.zUn.AVATAR_HASH]: () => L.t.KB52Ul,
        [V.zUn.REASON]: () => L.t["2IW3Cw"],
    }),
    J = () => x({ [V.zUn.NAME]: AO(L.t.ahU1o6, L.t["wxs+vb"]) }, R()),
    q = () =>
        x(
            {
                [V.zUn.NAME]: AO(L.t.cdl0Ym, L.t.o3W2l5),
                [V.zUn.TAGS]: AO(L.t["zwL+S0"], L.t.VYfKAw),
                [V.zUn.DESCRIPTION]: AO(L.t.XeYKWF, L.t.PSfeIi),
            },
            R(),
        ),
    _ = () =>
        x(
            {
                [V.zUn.ENABLE_EMOTICONS]: Aj(L.t["FI0m5+"], L.t.olpKCw),
                [V.zUn.EXPIRE_BEHAVIOR]: AV({
                    0: L.t["1Bb1+v"],
                    1: L.t.vjlW6u,
                }),
                [V.zUn.EXPIRE_GRACE_PERIOD]: () => L.t.iovXMT,
            },
            R(),
        ),
    $ = () =>
        x(
            {
                [V.zUn.TOPIC]: AO(L.t["m+veAg"], L.t.esQcxs),
                [V.zUn.PRIVACY_LEVEL]: AV({
                    [y.j8.GUILD_ONLY]: L.t["EC+CDg"],
                    [y.j8.PUBLIC]: L.t["pK/WGx"],
                }),
            },
            R(),
        ),
    AA = () =>
        x(
            {
                [V.zUn.NAME]: () => L.t["21EXHR"],
                [V.zUn.DESCRIPTION]: () => L.t.Vm1of3,
                [V.zUn.PRIVACY_LEVEL]: AV({
                    [y.j8.GUILD_ONLY]: L.t["EC+CDg"],
                    [y.j8.PUBLIC]: L.t["pK/WGx"],
                }),
                [V.zUn.STATUS]: AV({
                    [y.p1.SCHEDULED]: L.t.hXKDgo,
                    [y.p1.ACTIVE]: L.t.lRX1n5,
                    [y.p1.COMPLETED]: L.t["/eFIho"],
                    [y.p1.CANCELED]: L.t.NWIYho,
                }),
                [V.zUn.ENTITY_TYPE]: AV({
                    [y.WX.NONE]: L.t["6sO3Sk"],
                    [y.WX.STAGE_INSTANCE]: L.t["Wo+s19"],
                    [y.WX.VOICE]: L.t.XCVaIC,
                    [y.WX.EXTERNAL]: L.t.IvhAj4,
                }),
                [V.zUn.CHANNEL_ID]: AQ(L.t.yJBIcX, L.t["+PqSsr"]),
                [V.zUn.LOCATION]: AQ(L.t.GaMBHx, L.t.PsICk5),
                [V.zUn.IMAGE_HASH]: AQ(L.t.S3vcRE, L.t.KQu47O),
            },
            R(),
        ),
    Ae = () =>
        x(
            {
                [V.zUn.SCHEDULED_START_TIME]: AQ(L.t.zMIYVl, L.t.fzF8GR),
                [V.zUn.SCHEDULED_END_TIME]: AQ(L.t.vONSQE, L.t.IlIti4),
                [V.zUn.IS_CANCELED]: (A) => {
                    if (null != A.oldValue || !0 === A.newValue) {
                        if (!A.oldValue && A.newValue) return L.t["7RkicX"];
                        else if (A.oldValue && !A.newValue) return L.t.dRNTWV;
                    }
                },
            },
            R(),
        ),
    At = () =>
        x(
            {
                [V.zUn.NAME]: AO(L.t.tUKRzc, L.t.kPCHOD),
                [V.zUn.ARCHIVED]: Aj(L.t.jDi9FB, L.t.F6dvbW),
                [V.zUn.LOCKED]: Aj(L.t.JSy1QU, L.t.C7Jgo6),
                [V.zUn.INVITABLE]: Aj(L.t.dxNUs7, L.t.biJvYG),
                [V.zUn.AUTO_ARCHIVE_DURATION]: AO(L.t.LuaG39, L.t["18d9qq"]),
                [V.zUn.RATE_LIMIT_PER_USER]: AO(L.t["7lirhI"], L.t.j4CCJS),
                [V.zUn.FLAGS]: () => L.t.sSAQtr,
            },
            R(),
        ),
    An = (A) => {
        let e = x({}, R());
        return (
            null == A ||
                A.forEach((A) => {
                    A.newValue
                        ? A.newValue.permission
                            ? (e[A.key] = () => L.t["JH+89P"])
                            : (e[A.key] = () => L.t.HUrFDg)
                        : (e[A.key] = () => L.t.vynxnZ);
                }),
            e
        );
    },
    Ar = () =>
        x(
            {
                [V.zUn.NAME]: () => L.t.XwxAJS,
                [V.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => L.t.fx0pys,
                [V.zUn.AUTO_MODERATION_EVENT_TYPE]: () => L.t["46Y+Ly"],
                [V.zUn.AUTO_MODERATION_ACTIONS]: () => L.t["8efxfn"],
                [V.zUn.AUTO_MODERATION_ENABLED]: (A) => {
                    var e;
                    return !0 === (null != (e = A.newValue) ? e : A.oldValue) ? L.t.fCmxCw : L.t.Wrg9Ji;
                },
                [V.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => L.t.TRb7Nz,
                [V.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => L.t.mzitLC,
                [V.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => L.t["h/lM6+"],
                [V.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => L.t["9V2yaG"],
                [V.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => L.t["4Qe9n5"],
                [V.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => L.t.GyZtxs,
                [V.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => L.t.OQDadX,
                [V.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => L.t["FvvR+P"],
                [V.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => L.t.p5nSv7,
            },
            R(),
        ),
    Al = () =>
        x(
            {
                [V.zUn.NAME]: AO(L.t.VOtRSE, L.t.OK7B8P),
                [V.zUn.VOLUME]: AO(L.t.igrDBw, L.t.L5lDFB),
                [V.zUn.EMOJI_NAME]: AP(L.t.IIanaW, L.t.z4w4U1, L.t.V8Tfyc),
                [V.zUn.EMOJI_ID]: AP(L.t.ainxMD, L.t["2NPsYm"], L.t["8crtnp"]),
            },
            R(),
        ),
    Ai = () =>
        x(
            {
                [V.zUn.VERIFICATION_ENABLED]: (A) => (!0 === A.newValue ? L.t.fnkzDQ : L.t.WYT6kZ),
                [V.zUn.MANUAL_APPROVAL_ENABLED]: (A) => (!0 === A.newValue ? L.t.jzSvVV : L.t.WxyOtr),
            },
            R(),
        ),
    Aa = () => x({ [V.zUn.STATUS]: () => L.t.HyCSnJ }, R()),
    As = () => ({
        [V.zUn.DESCRIPTION]: () => L.t.nsUZKS,
        [V.zUn.BRAND_COLOR_PRIMARY]: () => L.t.qe9mgI,
        [V.zUn.CUSTOM_BANNER_HASH]: () => L.t["04b5KC"],
        [V.zUn.TRAITS]: () => L.t.dEy9WF,
        [V.zUn.GAME_APPLICATION_IDS]: () => L.t["8BOT39"],
        [V.zUn.VISIBILITY]: () => L.t.bCl1Eh,
        [V.zUn.SERVER_TAG]: AQ(L.t.ix1dnZ, L.t["4LKpKS"]),
    }),
    Ao = {
        [V.KFR.CHANNEL]: {
            [V.zUn.ID]: !0,
            [V.zUn.PERMISSION_OVERWRITES]: !0,
        },
        [V.KFR.CHANNEL_OVERWRITE]: {
            [V.zUn.TYPE]: !0,
            [V.zUn.ID]: !0,
            [V.zUn.PERMISSION_OVERWRITES]: !0,
        },
        [V.KFR.INVITE]: {
            [V.zUn.INVITER_ID]: !0,
            [V.zUn.USES]: !0,
        },
        [V.KFR.WEBHOOK]: {
            [V.zUn.TYPE]: !0,
            [V.zUn.APPLICATION_ID]: !0,
        },
        [V.KFR.INTEGRATION]: { [V.zUn.TYPE]: !0 },
        [V.KFR.THREAD]: {
            [V.zUn.ID]: !0,
            [V.zUn.TYPE]: !0,
        },
        [V.KFR.STICKER]: {
            [V.zUn.ID]: !0,
            [V.zUn.TYPE]: !0,
            [V.zUn.ASSET]: !0,
            [V.zUn.FORMAT_TYPE]: !0,
            [V.zUn.AVAILABLE]: !0,
            [V.zUn.GUILD_ID]: !0,
        },
        [V.KFR.GUILD_HOME]: { [V.zUn.ENTITY_TYPE]: !0 },
        [V.KFR.GUILD_ONBOARDING]: { [V.zUn.PROMPTS]: !0 },
        [V.KFR.GUILD_SOUNDBOARD]: {
            [V.zUn.ID]: !0,
            [V.zUn.SOUND_ID]: !0,
        },
    },
    Ag = () => [
        {
            value: V.rsA.ALL,
            label: L.intl.string(L.t.QxEVcn),
            valueLabel: L.intl.string(L.t.an9Ry8),
        },
        {
            value: V.rsA.GUILD_UPDATE,
            label: L.intl.string(L.t["5INZa2"]),
        },
        {
            value: V.rsA.CHANNEL_CREATE,
            label: L.intl.string(L.t["2uh4vL"]),
        },
        {
            value: V.rsA.CHANNEL_UPDATE,
            label: L.intl.string(L.t.mGsBLS),
        },
        {
            value: V.rsA.CHANNEL_DELETE,
            label: L.intl.string(L.t.hCHzAg),
        },
        {
            value: V.rsA.CHANNEL_OVERWRITE_CREATE,
            label: L.intl.string(L.t["8TnAMD"]),
        },
        {
            value: V.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: L.intl.string(L.t.Jqx0Bg),
        },
        {
            value: V.rsA.CHANNEL_OVERWRITE_DELETE,
            label: L.intl.string(L.t.gBXOr6),
        },
        {
            value: V.rsA.MEMBER_KICK,
            label: L.intl.string(L.t["Q1/hNz"]),
        },
        {
            value: V.rsA.MEMBER_PRUNE,
            label: L.intl.string(L.t.tOTTjY),
        },
        {
            value: V.rsA.MEMBER_BAN_ADD,
            label: L.intl.string(L.t["NfPn+f"]),
        },
        {
            value: V.rsA.MEMBER_BAN_REMOVE,
            label: L.intl.string(L.t.XCsGfH),
        },
        {
            value: V.rsA.MEMBER_UPDATE,
            label: L.intl.string(L.t["F/jmND"]),
        },
        {
            value: V.rsA.MEMBER_ROLE_UPDATE,
            label: L.intl.string(L.t.zAveSE),
        },
        {
            value: V.rsA.MEMBER_MOVE,
            label: L.intl.string(L.t.QshteX),
        },
        {
            value: V.rsA.MEMBER_DISCONNECT,
            label: L.intl.string(L.t.Z45os7),
        },
        {
            value: V.rsA.BOT_ADD,
            label: L.intl.string(L.t.vuH24e),
        },
        {
            value: V.rsA.THREAD_CREATE,
            label: L.intl.string(L.t["+zl0DA"]),
        },
        {
            value: V.rsA.THREAD_UPDATE,
            label: L.intl.string(L.t.rbIry8),
        },
        {
            value: V.rsA.THREAD_DELETE,
            label: L.intl.string(L.t.hFjNEB),
        },
        {
            value: V.rsA.ROLE_CREATE,
            label: L.intl.string(L.t.AbxKtr),
        },
        {
            value: V.rsA.ROLE_UPDATE,
            label: L.intl.string(L.t.t3Z6sb),
        },
        {
            value: V.rsA.ROLE_DELETE,
            label: L.intl.string(L.t.YsFpa2),
        },
        {
            value: V.rsA.ONBOARDING_PROMPT_CREATE,
            label: L.intl.string(L.t.ZV9tqa),
        },
        {
            value: V.rsA.ONBOARDING_PROMPT_UPDATE,
            label: L.intl.string(L.t.PcOdvb),
        },
        {
            value: V.rsA.ONBOARDING_PROMPT_DELETE,
            label: L.intl.string(L.t["+r33NT"]),
        },
        {
            value: V.rsA.ONBOARDING_CREATE,
            label: L.intl.string(L.t.uDADdX),
        },
        {
            value: V.rsA.ONBOARDING_UPDATE,
            label: L.intl.string(L.t.J1H1ws),
        },
        {
            value: V.rsA.HOME_SETTINGS_CREATE,
            label: L.intl.string(L.t.Di4cvL),
        },
        {
            value: V.rsA.HOME_SETTINGS_UPDATE,
            label: L.intl.string(L.t.tzyrJC),
        },
        {
            value: V.rsA.INVITE_CREATE,
            label: L.intl.string(L.t["0BNJdX"]),
        },
        {
            value: V.rsA.INVITE_UPDATE,
            label: L.intl.string(L.t["o++obW"]),
        },
        {
            value: V.rsA.INVITE_DELETE,
            label: L.intl.string(L.t.iP40Aw),
        },
        {
            value: V.rsA.WEBHOOK_CREATE,
            label: L.intl.string(L.t["tBF4+f"]),
        },
        {
            value: V.rsA.WEBHOOK_UPDATE,
            label: L.intl.string(L.t.eV3McH),
        },
        {
            value: V.rsA.WEBHOOK_DELETE,
            label: L.intl.string(L.t.AAL3Ky),
        },
        {
            value: V.rsA.EMOJI_CREATE,
            label: L.intl.string(L.t.RuWm0d),
        },
        {
            value: V.rsA.EMOJI_UPDATE,
            label: L.intl.string(L.t.WzdUY2),
        },
        {
            value: V.rsA.EMOJI_DELETE,
            label: L.intl.string(L.t.c3dK2N),
        },
        {
            value: V.rsA.MESSAGE_DELETE,
            label: L.intl.string(L.t.daTfXl),
        },
        {
            value: V.rsA.MESSAGE_BULK_DELETE,
            label: L.intl.string(L.t.nrBxen),
        },
        {
            value: V.rsA.MESSAGE_PIN,
            label: L.intl.string(L.t.MUldyM),
        },
        {
            value: V.rsA.MESSAGE_UNPIN,
            label: L.intl.string(L.t.n4zKhI),
        },
        {
            value: V.rsA.INTEGRATION_CREATE,
            label: L.intl.string(L.t["deNm8/"]),
        },
        {
            value: V.rsA.INTEGRATION_UPDATE,
            label: L.intl.string(L.t.HT7Sfn),
        },
        {
            value: V.rsA.INTEGRATION_DELETE,
            label: L.intl.string(L.t["+kJ09v"]),
        },
        {
            value: V.rsA.STICKER_CREATE,
            label: L.intl.string(L.t["3DzNjY"]),
        },
        {
            value: V.rsA.STICKER_UPDATE,
            label: L.intl.string(L.t.tdhW5e),
        },
        {
            value: V.rsA.STICKER_DELETE,
            label: L.intl.string(L.t["+ZhGOj"]),
        },
        {
            value: V.rsA.STAGE_INSTANCE_CREATE,
            label: L.intl.string(L.t.sPbjAw),
        },
        {
            value: V.rsA.STAGE_INSTANCE_UPDATE,
            label: L.intl.string(L.t.cW9LfH),
        },
        {
            value: V.rsA.STAGE_INSTANCE_DELETE,
            label: L.intl.string(L.t["U1r+yM"]),
        },
        {
            value: V.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: L.intl.string(L.t.H81Zy8),
        },
        {
            value: V.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: L.intl.string(L.t.FM69l5),
        },
        {
            value: V.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: L.intl.string(L.t.Rq28Bg),
        },
        {
            value: V.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: L.intl.string(L.t.iPdFOj),
        },
        {
            value: V.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: L.intl.string(L.t.gNq5z8),
        },
        {
            value: V.rsA.AUTO_MODERATION_RULE_CREATE,
            label: L.intl.string(L.t.f72Zqa),
        },
        {
            value: V.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: L.intl.string(L.t.XeqIio),
        },
        {
            value: V.rsA.AUTO_MODERATION_RULE_DELETE,
            label: L.intl.string(L.t.syAApa),
        },
        {
            value: V.rsA.GUILD_HOME_FEATURE_ITEM,
            label: L.intl.string(L.t.lhG5KC),
        },
        {
            value: V.rsA.GUILD_HOME_REMOVE_ITEM,
            label: L.intl.string(L.t.lRPRwc),
        },
        {
            value: V.rsA.SOUNDBOARD_SOUND_CREATE,
            label: L.intl.string(L.t.yoRi5u),
        },
        {
            value: V.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: L.intl.string(L.t.uKlG0d),
        },
        {
            value: V.rsA.SOUNDBOARD_SOUND_DELETE,
            label: L.intl.string(L.t.gq0iCQ),
        },
        {
            value: V.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: L.intl.string(L.t.rGr0YG),
        },
        {
            value: V.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: L.intl.string(L.t.V9PEQ0),
        },
    ];
function Ac(A, e) {
    return null != e.changes ? e.changes.find((e) => e.key === A) : null;
}
function Af(A, e) {
    return null != e.changes ? e.changes.filter((e) => e.key === A) : [];
}
function Av(A) {
    var e;
    let t = Ag().find((e) => e.value === A.action);
    return null != Ac(V.zUn.COMMUNICATION_DISABLED_UNTIL, A)
        ? L.intl.string(L.t.z3wbj4)
        : null != (e = null == t ? void 0 : t.label)
          ? e
          : null;
}
let Au = {
    [c.J6.SECONDS]: (A) => L.intl.formatToPlainString(L.t.geSp4O, { seconds: A }),
    [c.J6.MINUTES]: (A) => L.intl.formatToPlainString(L.t.iXLF9f, { minutes: A }),
    [c.J6.HOURS]: (A) => L.intl.formatToPlainString(L.t.xCjYxM, { hours: A }),
    [c.J6.DAYS]: (A) => L.intl.formatToPlainString(L.t.k2UNz8, { days: A }),
};
function Ah(A) {
    let e = Ac(V.zUn.COMMUNICATION_DISABLED_UNTIL, A),
        t = Af(V.zUn.ROLES_ADD, A).length > 0,
        n = Af(V.zUn.ROLES_REMOVE, A).length > 0;
    if (null != e) {
        if ((null == e ? void 0 : e.newValue) != null) {
            let t = new Date(null == e ? void 0 : e.newValue).getTime() - P.default.extractTimestamp(A.id),
                n = Math.round(t / 1000 / 60),
                r = (0, c.CI)(n, S);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in Au) {
                let A = r.unit,
                    e = r.unit === c.J6.SECONDS ? Math.round(t / 1000) : r.time;
                return Au[A](e);
            }
        } else if ((null == e ? void 0 : e.oldValue) != null) return L.intl.string(L.t.MA1ltr);
    } else if (t && n) return L.intl.string(L.t.RdMMe3);
    else if (t) return L.intl.string(L.t["4GQqs7"]);
    else if (n) return L.intl.string(L.t["8mQ6x8"]);
    return null;
}
function Ad(A) {
    let e = Af(V.zUn.ROLES_ADD, A),
        t = Af(V.zUn.ROLES_REMOVE, A),
        n =
            null == e
                ? void 0
                : e
                      .map((A) => {
                          let { newValue: e } = A;
                          return null == e
                              ? void 0
                              : e
                                    .map((A) => {
                                        let { name: e } = A;
                                        return e;
                                    })
                                    .join(", ");
                      })
                      .join(", "),
        r =
            null == t
                ? void 0
                : t
                      .map((A) => {
                          let { newValue: e } = A;
                          return null == e
                              ? void 0
                              : e
                                    .map((A) => {
                                        let { name: e } = A;
                                        return e;
                                    })
                                    .join(", ");
                      })
                      .join(", ");
    return e.length > 0 && t.length > 0
        ? L.intl.formatToPlainString(L.t.tZw1ER, {
              roleNamesAdded: n,
              roleNamesRemoved: r,
          })
        : e.length > 0
          ? L.intl.formatToPlainString(L.t["/mTqt7"], { roleNames: n })
          : t.length > 0
            ? L.intl.formatToPlainString(L.t.Wk4pAA, { roleNames: r })
            : null;
}
function AE(A) {
    switch (A.action) {
        case V.rsA.GUILD_UPDATE:
            return L.t.LjZO39;
        case V.rsA.CHANNEL_CREATE:
            let e = null != A.changes ? A.changes.find((A) => A.key === V.zUn.TYPE) : null;
            if (null == e) throw Error("[AuditLog] Could not find type change for channel create");
            switch (e.newValue) {
                case V.d4z.GUILD_STAGE_VOICE:
                    return L.t["OKp4+v"];
                case V.d4z.GUILD_VOICE:
                    return L.t.NPOy4O;
                case V.d4z.GUILD_CATEGORY:
                    return L.t.T3KIj4;
                default:
                    return L.t.wrYNGx;
            }
        case V.rsA.CHANNEL_UPDATE:
            return L.t.nTYk6O;
        case V.rsA.CHANNEL_DELETE:
            return L.t.ynfvkp;
        case V.rsA.CHANNEL_OVERWRITE_CREATE:
            return L.t.l5Cu1d;
        case V.rsA.CHANNEL_OVERWRITE_UPDATE:
            return L.t.uhtbNT;
        case V.rsA.CHANNEL_OVERWRITE_DELETE:
            return L.t["HASt//"];
        case V.rsA.MEMBER_KICK:
            return L.t.B5hDZW;
        case V.rsA.MEMBER_PRUNE:
            return L.t.qKOZTE;
        case V.rsA.MEMBER_BAN_ADD:
            return L.t.XklUm5;
        case V.rsA.MEMBER_BAN_REMOVE:
            return L.t.o3Y6HB;
        case V.rsA.MEMBER_UPDATE:
            return L.t.pznhLC;
        case V.rsA.MEMBER_ROLE_UPDATE:
            return L.t.VngfiY;
        case V.rsA.MEMBER_MOVE:
            return L.t.Yt6NkZ;
        case V.rsA.MEMBER_DISCONNECT:
            return L.t.K4eCZ2;
        case V.rsA.BOT_ADD:
            return L.t.fWvX0N;
        case V.rsA.ROLE_CREATE:
            return L.t.UTLTx8;
        case V.rsA.ROLE_UPDATE:
            return L.t.NRbN19;
        case V.rsA.ROLE_DELETE:
            return L.t["4s63tb"];
        case V.rsA.INVITE_CREATE:
            return L.t.YHOXW1;
        case V.rsA.INVITE_UPDATE:
            return L.t.ja3kGR;
        case V.rsA.INVITE_DELETE:
            return L.t["3n/iWl"];
        case V.rsA.WEBHOOK_CREATE:
            return L.t.MhYhio;
        case V.rsA.WEBHOOK_UPDATE:
            return L.t["6GTlWF"];
        case V.rsA.WEBHOOK_DELETE:
            return L.t.in0VjY;
        case V.rsA.EMOJI_CREATE:
            return L.t["7vekRE"];
        case V.rsA.EMOJI_UPDATE:
            return L.t.IsCKfn;
        case V.rsA.EMOJI_DELETE:
            return L.t.JnUaVF;
        case V.rsA.STICKER_CREATE:
            return L.t.DRZifn;
        case V.rsA.STICKER_UPDATE:
            return L.t.bhujGR;
        case V.rsA.STICKER_DELETE:
            return L.t.rGEP9f;
        case V.rsA.MESSAGE_DELETE:
            return L.t["HPkD+P"];
        case V.rsA.MESSAGE_BULK_DELETE:
            return L.t["3RIvLC"];
        case V.rsA.MESSAGE_PIN:
            return L.t.Yna7Ex;
        case V.rsA.MESSAGE_UNPIN:
            return L.t.NCxXUV;
        case V.rsA.INTEGRATION_CREATE:
            return L.t.HYvCb2;
        case V.rsA.INTEGRATION_UPDATE:
            return L.t.ibCCOT;
        case V.rsA.INTEGRATION_DELETE:
            return L.t["8zScWV"];
        case V.rsA.STAGE_INSTANCE_CREATE:
            return L.t["n7x/DA"];
        case V.rsA.STAGE_INSTANCE_UPDATE:
            return L.t["0hQYU1"];
        case V.rsA.STAGE_INSTANCE_DELETE:
            if (null != A.userId) return L.t["Oi/in5"];
            return L.t["7ZIFm5"];
        case V.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return L.t.S7k52t;
        case V.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return L.t.ebTK19;
        case V.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return L.t["/ARPKS"];
        case V.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case V.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return L.t["8qCI39"];
        case V.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return L.t.zYb2dX;
        case V.rsA.THREAD_CREATE:
            let t = null != A.changes ? A.changes.find((A) => A.key === V.zUn.TYPE) : null;
            if (null == t) throw Error("[AuditLog] Could not find type change for thread create");
            switch (t.newValue) {
                case V.d4z.PRIVATE_THREAD:
                    return L.t["Br0y5+"];
                case V.d4z.ANNOUNCEMENT_THREAD:
                    return L.t["6uaMmJ"];
                default:
                    return L.t["2cxQ7O"];
            }
        case V.rsA.THREAD_UPDATE:
            return L.t.PSsy4u;
        case V.rsA.THREAD_DELETE:
            return L.t.s3Khn5;
        case V.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return L.t.uzCqBg;
        case V.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return L.t.NqWv2N;
        case V.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var n;
            if (
                (null == (n = A.options) ? void 0 : n.auto_moderation_rule_trigger_type) ===
                T.fX.USER_PROFILE.toString()
            )
                return L.t.YQsjen;
            return L.t.SD0PwM;
        case V.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return L.t.Vk4Twc;
        case V.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return L.t["/W5u5u"];
        case V.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return L.t.ONvWys;
        case V.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return L.t.ryGLk5;
        case V.rsA.AUTO_MODERATION_RULE_CREATE:
            return L.t.NKljj4;
        case V.rsA.AUTO_MODERATION_RULE_UPDATE:
            return L.t["3wEA9v"];
        case V.rsA.AUTO_MODERATION_RULE_DELETE:
            return L.t.umua3t;
        case V.rsA.ONBOARDING_PROMPT_CREATE:
            return L.t["/8A1g4"];
        case V.rsA.ONBOARDING_PROMPT_UPDATE:
            return L.t.ArIrWF;
        case V.rsA.ONBOARDING_PROMPT_DELETE:
            return L.t.IuBTam;
        case V.rsA.ONBOARDING_CREATE:
            return L.t.wDaq39;
        case V.rsA.ONBOARDING_UPDATE:
            return L.t["yONu/v"];
        case V.rsA.HOME_SETTINGS_CREATE:
            return L.t.dSdCjI;
        case V.rsA.HOME_SETTINGS_UPDATE:
            return L.t.XHE8qq;
        case V.rsA.GUILD_HOME_FEATURE_ITEM:
            let r = null != A.changes ? A.changes.find((A) => A.key === V.zUn.ENTITY_TYPE) : null;
            if (null == r) return L.t["UZ+U3N"];
            switch (r.newValue) {
                case a.w.MESSAGE:
                    return L.t["PyEa+P"];
                case a.w.FORUM_POST:
                    return L.t.hCuAb2;
                default:
                    return L.t["UZ+U3N"];
            }
        case V.rsA.GUILD_HOME_REMOVE_ITEM:
            return L.t.kPReur;
        case V.rsA.SOUNDBOARD_SOUND_CREATE:
            return L.t["0PD83d"];
        case V.rsA.SOUNDBOARD_SOUND_UPDATE:
            return L.t.CM8n19;
        case V.rsA.SOUNDBOARD_SOUND_DELETE:
            return L.t["kVz4//"];
        case V.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return L.t.MWjnU1;
        case V.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return L.t.aS8Krq;
        case V.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return L.t.NUKUb2;
        case V.rsA.GUILD_PROFILE_UPDATE:
            return L.t.Ed6hFx;
        case V.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return L.t["3Ne7MD"];
        default:
            return null;
    }
}
function AC(A) {
    switch (A) {
        case m.zZ.GUILD_FEED_REMOVED:
            return L.intl.string(L.t["5G8ZDw"]);
        case m.zZ.ACTIVE_CHANNELS_REMOVED:
            return L.intl.string(L.t["4YLtzM"]);
        case m.zZ.PINNED:
            return L.intl.string(L.t["1QLRYW"]);
    }
    return null;
}
function AB(A) {
    switch (A) {
        case m.zZ.GUILD_FEED_REMOVED:
            return L.intl.string(L.t.S5kuWV);
        case m.zZ.ACTIVE_CHANNELS_REMOVED:
            return L.intl.string(L.t["8qpgc3"]);
        case m.zZ.PINNED:
            return L.intl.string(L.t.CMweGB);
    }
    return null;
}
function Aw(A, e) {
    switch (A) {
        case V.Plq.CREATE_INSTANT_INVITE:
            return L.intl.string(L.t.zJrgTE);
        case V.Plq.KICK_MEMBERS:
            return L.intl.string(L.t.pBNv6u);
        case V.Plq.BAN_MEMBERS:
            return L.intl.string(L.t.oTBA7O);
        case V.Plq.ADMINISTRATOR:
            return L.intl.string(L.t.PGvZqa);
        case V.Plq.MANAGE_CHANNELS:
            if (e.targetType === V.KFR.CHANNEL || e.targetType === V.KFR.CHANNEL_OVERWRITE)
                return L.intl.string(L.t.nAw15O);
            return L.intl.string(L.t["9qLtWl"]);
        case V.Plq.MANAGE_GUILD:
            return L.intl.string(L.t.QZRcfH);
        case V.Plq.VIEW_GUILD_ANALYTICS:
            return L.intl.string(L.t.rQJBEx);
        case V.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return L.intl.string(L.t["0lTLTk"]);
        case V.Plq.CHANGE_NICKNAME:
            return L.intl.string(L.t.dilOFx);
        case V.Plq.MANAGE_NICKNAMES:
            return L.intl.string(L.t["t+Ct5+"]);
        case V.Plq.MANAGE_ROLES:
            return L.intl.string(L.t["C8d+oK"]);
        case V.Plq.MANAGE_WEBHOOKS:
            return L.intl.string(L.t["/ADKmJ"]);
        case V.Plq.CREATE_GUILD_EXPRESSIONS:
            return L.intl.string(L.t.HarVuL);
        case V.Plq.MANAGE_GUILD_EXPRESSIONS:
            return L.intl.string(L.t.bbuXIi);
        case V.Plq.VIEW_AUDIT_LOG:
            return L.intl.string(L.t.fZgLpK);
        case V.Plq.VIEW_CHANNEL:
            if (e.targetType === V.KFR.CHANNEL || e.targetType === V.KFR.CHANNEL_OVERWRITE)
                return L.intl.string(L.t["W/A4Qk"]);
            return L.intl.string(L.t.uV83ys);
        case V.Plq.SEND_MESSAGES:
            return L.intl.string(L.t.T32rkJ);
        case V.Plq.SEND_TTS_MESSAGES:
            return L.intl.string(L.t.Mg7bkp);
        case V.Plq.USE_APPLICATION_COMMANDS:
            return L.intl.string(L.t.shbR1d);
        case V.Plq.MANAGE_MESSAGES:
            return L.intl.string(L.t["6lU9xM"]);
        case V.Plq.EMBED_LINKS:
            return L.intl.string(L.t["969dEB"]);
        case V.Plq.ATTACH_FILES:
            return L.intl.string(L.t["3AS4UF"]);
        case V.Plq.READ_MESSAGE_HISTORY:
            return L.intl.string(L.t.l9ufaW);
        case V.Plq.MENTION_EVERYONE:
            return L.intl.string(L.t.Y78KGB);
        case V.Plq.USE_EXTERNAL_EMOJIS:
            return L.intl.string(L.t.BpBGZW);
        case V.Plq.USE_EXTERNAL_STICKERS:
            return L.intl.string(L.t["UeRs+f"]);
        case V.Plq.ADD_REACTIONS:
            return L.intl.string(L.t.yEoJAg);
        case V.Plq.CONNECT:
            return L.intl.string(L.t.S0W8Z2);
        case V.Plq.SPEAK:
            return L.intl.string(L.t["8w1tIS"]);
        case V.Plq.MUTE_MEMBERS:
            return L.intl.string(L.t["8EI309"]);
        case V.Plq.DEAFEN_MEMBERS:
            return L.intl.string(L.t["9L47Fh"]);
        case V.Plq.MOVE_MEMBERS:
            return L.intl.string(L.t.YtjJPT);
        case V.Plq.USE_VAD:
            return L.intl.string(L.t["08zAV1"]);
        case V.Plq.PRIORITY_SPEAKER:
            return L.intl.string(L.t.BVK71t);
        case V.Plq.STREAM:
            return L.intl.string(L.t.FlNoSU);
        case V.Plq.REQUEST_TO_SPEAK:
            return L.intl.string(L.t["5kicT0"]);
        case V.Plq.CREATE_EVENTS:
            return L.intl.string(L.t.qyjZub);
        case V.Plq.MANAGE_EVENTS:
            return L.intl.string(L.t.HIgA5e);
        case V.Plq.CREATE_PUBLIC_THREADS:
            return L.intl.string(L.t["25rKnZ"]);
        case V.Plq.CREATE_PRIVATE_THREADS:
            return L.intl.string(L.t.QwbTSU);
        case V.Plq.SEND_MESSAGES_IN_THREADS:
            return L.intl.string(L.t.fTE74u);
        case V.Plq.MANAGE_THREADS:
            return L.intl.string(L.t.kEqgr6);
        case V.Plq.MODERATE_MEMBERS:
            return L.intl.string(L.t["+RL6p6"]);
        case V.Plq.SET_VOICE_CHANNEL_STATUS:
            return L.intl.string(L.t.VBwkUV);
        case V.Plq.SEND_POLLS:
            return L.intl.string(L.t.UMQ7W1);
        case V.Plq.USE_EXTERNAL_APPS:
            return L.intl.string(L.t.TtA5rK);
        case V.Plq.PIN_MESSAGES:
            return L.intl.string(L.t.Y5BI39);
    }
    return null;
}
function AD(A, e) {
    let t = [];
    return (
        A.forEach((A) => {
            let n = (function (A, e) {
                    switch (A.targetType) {
                        case V.KFR.GUILD:
                        case V.KFR.GUILD_HOME:
                        case V.KFR.GUILD_PROFILE:
                            return e;
                        case V.KFR.CHANNEL:
                        case V.KFR.CHANNEL_OVERWRITE:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => M.Z.getChannel(A),
                                (A) => (0, v.F6)(A, H.default, I.Z, !0),
                            );
                        case V.KFR.USER:
                            return AH(
                                A,
                                V.zUn.NICK,
                                (A) => H.default.getUser(A),
                                (A) => A,
                            );
                        case V.KFR.ROLE:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => p.Z.getRole(e.id, A),
                                (A) => A.name,
                            );
                        case V.KFR.ONBOARDING_PROMPT:
                            let t = AH(
                                A,
                                V.zUn.ID,
                                (A) => E.Z.getOnboardingPrompt(A),
                                (A) => A.title,
                            );
                            return null == t || "" === t ? L.intl.string(L.t.ZNQyiY) : t;
                        case V.KFR.GUILD_ONBOARDING:
                        case V.KFR.GUILD_MEMBER_VERIFICATION:
                            return e;
                        case V.KFR.INVITE:
                            return AH(A, V.zUn.CODE, V.VqG);
                        case V.KFR.INTEGRATION:
                            return AH(
                                A,
                                V.zUn.TYPE,
                                (A) => j.Z.integrations.find((e) => e.id === A),
                                (A) => A.name,
                            );
                        case V.KFR.WEBHOOK:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => j.Z.webhooks.find((e) => e.id === A),
                                (A) => A.name,
                            );
                        case V.KFR.EMOJI:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => h.ZP.getGuildEmoji(e.id).find((e) => e.id === A),
                                (A) => A.name,
                            );
                        case V.KFR.STICKER:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => w.Z.getStickerById(A),
                                (A) => A.name,
                            );
                        case V.KFR.STAGE_INSTANCE:
                            return AH(
                                A,
                                V.zUn.TOPIC,
                                (A) => {
                                    var t;
                                    return null == (t = Object.values(B.Z.getStageInstancesByGuild(e.id)))
                                        ? void 0
                                        : t.find((e) => e.id === A);
                                },
                                (A) => A.topic,
                            );
                        case V.KFR.GUILD_SCHEDULED_EVENT:
                        case V.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => j.Z.guildScheduledEvents.find((e) => e.id === A),
                                (A) => A.name,
                            );
                        case V.KFR.THREAD:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => j.Z.threads.find((e) => e.id === A),
                                (A) => A.name,
                            );
                        case V.KFR.APPLICATION_COMMAND:
                            if (A.targetId === A.options.application_id) {
                                let e = j.Z.integrations.find((e) => {
                                    var t;
                                    return (null == (t = e.application) ? void 0 : t.id) === A.targetId;
                                });
                                if (null != e) return e.name;
                                return A.targetId;
                            }
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => j.Z.applicationCommands.find((e) => e.id === A),
                                (A) => {
                                    let e =
                                        null != A.name_localized && "" !== A.name_localized ? A.name_localized : A.name;
                                    return A.type === f.yU.CHAT ? "/\u2060".concat(e) : e;
                                },
                            );
                        case V.KFR.AUTO_MODERATION_RULE:
                            return AH(
                                A,
                                V.zUn.NAME,
                                (A) => j.Z.automodRules.find((e) => e.id === A),
                                (A) => A.name,
                            );
                        case V.KFR.GUILD_SOUNDBOARD:
                            return AH(A, V.zUn.NAME, V.VqG);
                        case V.KFR.HOME_SETTINGS:
                            return AH(
                                A,
                                V.zUn.GUILD_ID,
                                (A) => C.Z.getSettings(A),
                                () => L.intl.string(L.t.VbpLyc),
                                e.id,
                            );
                        case V.KFR.VOICE_CHANNEL_STATUS:
                            return AH(
                                A,
                                V.zUn.STATUS,
                                (A) => M.Z.getChannel(A),
                                (A) => (0, v.F6)(A, H.default, I.Z, !0),
                            );
                        default:
                            return Z.warn("Unknown targetType for log", A), null;
                    }
                })(A, e),
                l = H.default.getUser(A.userId);
            if (
                null != n ||
                [
                    V.rsA.MEMBER_PRUNE,
                    V.rsA.MEMBER_DISCONNECT,
                    V.rsA.MEMBER_MOVE,
                    V.rsA.CREATOR_MONETIZATION_REQUEST_CREATED,
                    V.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED,
                ].includes(A.action)
            ) {
                if (
                    null !=
                    (A = (A = (A = A.set("user", l)).set("target", n)).set(
                        "options",
                        (function (A) {
                            if (null != A.options) {
                                let t = x({}, A.options);
                                switch (A.options.type) {
                                    case V.jwA.USER:
                                        t.subtarget = Ab(
                                            A.options.id,
                                            (A) => H.default.getUser(A),
                                            (A) => A.tag,
                                        );
                                        break;
                                    case V.jwA.ROLE:
                                        t.subtarget = Ab(A.options.role_name, V.VqG);
                                }
                                if (
                                    (null != A.options.channel_id &&
                                        (t.channel = AH(
                                            A,
                                            "",
                                            (A) => M.Z.getChannel(A),
                                            (A) => A,
                                            A.options.channel_id,
                                        )),
                                    null != A.options.members_removed &&
                                        0 !== A.options.members_removed &&
                                        (t.count = A.options.members_removed),
                                    null != A.options.event_exception_id)
                                ) {
                                    var e;
                                    let n = j.Z.guildScheduledEvents.find((e) => e.id === A.targetId),
                                        r =
                                            null == n
                                                ? void 0
                                                : n.guild_scheduled_event_exceptions.find(
                                                      (e) => e.event_exception_id === A.options.event_exception_id,
                                                  );
                                    t.subtarget = (0, b.vc)(
                                        i()(
                                            P.default.extractTimestamp(
                                                null != (e = null == r ? void 0 : r.event_exception_id) ? e : "0",
                                            ),
                                        ),
                                        "LL",
                                    );
                                }
                                return t;
                            }
                            return A.options;
                        })(A),
                    )).changes
                ) {
                    let t = [];
                    A.changes.forEach((n) => {
                        let l = (function (A, e, t) {
                            if (e.action === V.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let e = A.newValue || A.oldValue;
                                switch (e.type) {
                                    case V.ecB.ROLE:
                                        A.subtarget = Ab(
                                            e.id,
                                            (A) => p.Z.getRole(t.id, A),
                                            (A) => A.name,
                                        );
                                        break;
                                    case V.ecB.USER:
                                        A.subtarget = Ab(
                                            e.id,
                                            (A) => H.default.getUser(A),
                                            (A) => A.tag,
                                        );
                                        break;
                                    case V.ecB.CHANNEL:
                                        e.id === r()(t.id).subtract(1).toString()
                                            ? (A.subtarget = L.intl.string(L.t.MSYhgo))
                                            : (A.subtarget = Ab(
                                                  e.id,
                                                  (A) => M.Z.getChannel(A),
                                                  (A) => (0, v.F6)(A, H.default, I.Z, !0),
                                              ));
                                }
                                return A;
                            }
                            switch (A.key) {
                                case V.zUn.OWNER_ID:
                                    return AI(A, (A) => H.default.getUser(A));
                                case V.zUn.CHANNEL_ID:
                                case V.zUn.AFK_CHANNEL_ID:
                                case V.zUn.SYSTEM_CHANNEL_ID:
                                case V.zUn.RULES_CHANNEL_ID:
                                case V.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return AI(
                                        A,
                                        (A) => M.Z.getChannel(A),
                                        (A) => (0, v.F6)(A, H.default, I.Z, !0),
                                    );
                                case V.zUn.AFK_TIMEOUT:
                                    return AI(A, (A) => A / 60);
                                case V.zUn.BITRATE:
                                    return AI(A, (A) => A / 1000);
                                case V.zUn.COLOR:
                                    return AI(A, (A) => (0, g.Rf)(A).toUpperCase());
                                case V.zUn.THEME_COLORS:
                                    return AI(A, (A) =>
                                        ""
                                            .concat((0, g.Rf)(A[0]).toUpperCase(), ", ")
                                            .concat((0, g.Rf)(A[1]).toUpperCase()),
                                    );
                                case V.zUn.MAX_AGE:
                                    return AI(A, (A) => {
                                        let e = Q.ZP.getMaxAgeOptions.find((e) => {
                                            let { value: t } = e;
                                            return A === t;
                                        });
                                        return e ? e.label : A;
                                    });
                                case V.zUn.PERMISSIONS: {
                                    let e = [],
                                        { added: t, removed: n } = AM(A.oldValue, A.newValue);
                                    if (t.length > 0) {
                                        let A = new D.ms(V.zUn.PERMISSIONS_GRANTED, null, t);
                                        e.push(A);
                                    }
                                    if (n.length > 0) {
                                        let A = new D.ms(V.zUn.PERMISSIONS_DENIED, null, n);
                                        e.push(A);
                                    }
                                    return e;
                                }
                                case V.zUn.PERMISSIONS_GRANTED:
                                case V.zUn.PERMISSIONS_DENIED: {
                                    let e = [],
                                        { added: t, removed: n } = AM(A.oldValue, A.newValue);
                                    if (t.length > 0) {
                                        let n = new D.ms(A.key, null, t);
                                        e.push(n);
                                    }
                                    if (n.length > 0) {
                                        let A = new D.ms(V.zUn.PERMISSIONS_RESET, n, n);
                                        e.push(A);
                                    }
                                    return e;
                                }
                                case V.zUn.FLAGS: {
                                    let e = [],
                                        { added: t, removed: n } = (function (A, e) {
                                            let t = "number" == typeof A ? A : 0,
                                                n = "number" == typeof e ? e : 0,
                                                r = O.Ge(n, t),
                                                l = O.Ge(t, n),
                                                i = [],
                                                a = [];
                                            for (let A in m.zZ) {
                                                let e = m.zZ[A];
                                                O.yE(r, e) && i.push(e), O.yE(l, e) && a.push(e);
                                            }
                                            return {
                                                added: i,
                                                removed: a,
                                            };
                                        })(A.oldValue, A.newValue);
                                    if (t.length > 0) {
                                        let n = new D.ms(A.key, null, t);
                                        e.push(n);
                                    }
                                    if (n.length > 0) {
                                        let t = new D.ms(A.key, n, null);
                                        e.push(t);
                                    }
                                    return e;
                                }
                                case V.zUn.PREFERRED_LOCALE:
                                    return AI(A, (A) => {
                                        let e = (0, L.getAvailableLocales)().find((e) => e.value === A);
                                        return null != e ? e.name : null;
                                    });
                                case V.zUn.VIDEO_QUALITY_MODE:
                                    return AI(A, (A) =>
                                        A === V.Ucd.FULL ? L.intl.string(L.t["7jOoJC"]) : L.intl.string(L.t.jjKYpq),
                                    );
                                case V.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let n = {
                                            [V.xmn.SUPPRESS_JOIN_NOTIFICATIONS]:
                                                V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [V.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]:
                                                V.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [V.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]:
                                                V.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [V.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]:
                                                V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES,
                                        },
                                        l = [];
                                    return (
                                        Object.values(V.xmn).forEach((e) => {
                                            let t = (A.oldValue & e) === e,
                                                r = (A.newValue & e) === e;
                                            if (t === r) return;
                                            let i = new D.ms(n[e], !t, !r);
                                            l.push(i);
                                        }),
                                        l
                                    );
                                case V.zUn.AUTO_MODERATION_ACTIONS:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE)
                                        return AI(
                                            A,
                                            (A) => A.map((A) => A.type),
                                            (A) => A.map(d.ZF).join(", "),
                                        );
                                    break;
                                case V.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE) return AI(A, d.YN);
                                    break;
                                case V.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE) return AI(A, d.Ar);
                                    break;
                                case V.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE)
                                        return AI(A, (A) =>
                                            null != A && "object" == typeof A
                                                ? null != A.keyword_filter && Array.isArray(A.keyword_filter)
                                                    ? L.intl.formatToMarkdownString(L.t.y91UXV, {
                                                          newValue: A.keyword_filter
                                                              .map((A) => "'".concat(A, "'"))
                                                              .join(", "),
                                                      })
                                                    : JSON.stringify(A)
                                                : A,
                                        );
                                    break;
                                case V.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case V.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case V.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case V.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case V.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case V.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE)
                                        return AI(A, (A) =>
                                            null != A && Array.isArray(A)
                                                ? A.map((A) => "'".concat(A, "'")).join(", ")
                                                : JSON.stringify(A),
                                        );
                                    break;
                                case V.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE)
                                        return AI(
                                            A,
                                            (A) =>
                                                A.map(M.Z.getChannel)
                                                    .filter((A) => null != A)
                                                    .map((A) => (0, v.F6)(A, H.default, I.Z, !0)),
                                            (A) =>
                                                null != A && A.length > 0 ? A.join(", ") : L.intl.string(L.t["K/EdV1"]),
                                        );
                                    break;
                                case V.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (e.targetType === V.KFR.AUTO_MODERATION_RULE)
                                        return AI(
                                            A,
                                            (A) =>
                                                A.map((A) => p.Z.getRole(t.id, A))
                                                    .filter((A) => null != A)
                                                    .map((A) => A.name),
                                            (A) =>
                                                null != A && A.length > 0 ? A.join(", ") : L.intl.string(L.t["K/EdV1"]),
                                        );
                                    break;
                                case V.zUn.AVAILABLE_TAGS:
                                    return (function (A) {
                                        let { oldValue: e, newValue: t } = A,
                                            n = Array.isArray(e) ? e : [],
                                            r = Array.isArray(t) ? t : [];
                                        if (0 === n.length && 0 === r.length) return A;
                                        let l = {},
                                            i = {};
                                        if (
                                            (n.forEach((A) => {
                                                l[A.id] = A;
                                            }),
                                            r.forEach((A) => {
                                                i[A.id] = A;
                                            }),
                                            n.length < r.length)
                                        ) {
                                            for (let A in i)
                                                if (null == l[A])
                                                    return new D.ms(V.zUn.AVAILABLE_TAG_ADD, null, Ap(i[A]));
                                        }
                                        if (n.length > r.length) {
                                            for (let A in l)
                                                if (null == i[A])
                                                    return new D.ms(V.zUn.AVAILABLE_TAG_DELETE, null, Ap(l[A]));
                                        }
                                        for (let A in l) {
                                            let e = l[A],
                                                t = i[A];
                                            if (
                                                (null == t ? void 0 : t.name) !== e.name ||
                                                (null == t ? void 0 : t.emoji_id) !== e.emoji_id ||
                                                (null == t ? void 0 : t.emoji_name) !== e.emoji_name
                                            )
                                                return new D.ms(V.zUn.AVAILABLE_TAG_EDIT, Ap(e), Ap(t));
                                        }
                                        return A;
                                    })(A);
                                case V.zUn.SCHEDULED_START_TIME:
                                case V.zUn.SCHEDULED_END_TIME:
                                    return AI(A, (A) => (0, b.vc)(i()(new Date(A)), "LLLL"));
                            }
                            return A;
                        })(n, A, e);
                        Array.isArray(l) ? l.forEach((A) => t.push(A)) : t.push(l);
                    }),
                        (A = A.set("changes", t));
                }
                t.push(A);
            }
        }),
        t
    );
}
function AM(A, e) {
    let t = o.vB("string" == typeof A ? A : 0),
        n = o.vB("string" == typeof e ? e : 0),
        r = o.Od(n, t),
        l = o.Od(t, n),
        i = [],
        a = [];
    for (let A in V.Plq) {
        let e = V.Plq[A];
        o.e$(r, e) && i.push(e), o.e$(l, e) && a.push(e);
    }
    return {
        added: i,
        removed: a,
    };
}
function Ap(A) {
    return null == A
        ? null
        : {
              id: A.id,
              name: A.name,
              emojiId: 0 !== A.emoji_id ? A.emoji_id : void 0,
              emojiName: A.emoji_name,
              moderated: A.moderated,
          };
}
function AI(A, e, t) {
    let n = A.newValue,
        r = A.oldValue;
    return (
        null != A.newValue && ((n = e(A.newValue)), null != t && null != n && (n = t(n))),
        null != A.oldValue && ((r = e(A.oldValue)), null != t && null != r && (r = t(r))),
        new D.ms(A.key, r || A.oldValue, n || A.newValue)
    );
}
function AH(A, e, t, n, r) {
    let l = null,
        i = t((r = null != r ? r : A.targetId));
    if ((null != i && null != n && (l = n(i)), null == l)) {
        let e = j.Z.deletedTargets[A.targetType];
        null != e && null != e[r] && (l = e[r]);
    }
    if (null == l && null != A.changes) {
        let t = A.changes.find((A) => A.key === e);
        null != t && (l = t.newValue || t.oldValue);
    }
    return null != l ? l : r;
}
function Ab(A, e, t) {
    let n = A,
        r = e(A);
    return null != r && null != t && (n = t(r)), n;
}
function AO(A, e) {
    return (t) => (null == t.oldValue ? A : e);
}
function AQ(A, e) {
    return (t) => (null == t.newValue ? A : e);
}
function AP(A, e, t, n) {
    return (r) => (null != r.newValue && null != r.oldValue ? A : null != r.newValue ? e : null != r.oldValue ? t : n);
}
function Aj(A, e) {
    return (t) => (t.newValue ? A : e);
}
function AV(A) {
    return (e) => A[e.newValue];
}
function Am(A, e) {
    return (t) => {
        var n;
        return null != (n = A[t.newValue]) ? n : e;
    };
}
