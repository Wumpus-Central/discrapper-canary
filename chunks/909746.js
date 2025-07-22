(t.d(e, {
    Bq: () => q,
    C0: () => Al,
    C2: () => $,
    EN: () => k,
    F1: () => As,
    HE: () => X,
    HN: () => Y,
    Iv: () => Ag,
    J5: () => AE,
    JA: () => Ai,
    K: () => _,
    ML: () => U,
    N$: () => J,
    N5: () => Ad,
    QM: () => Au,
    V$: () => Av,
    _$: () => AD,
    cT: () => AB,
    em: () => AC,
    hQ: () => Aw,
    hx: () => K,
    lR: () => W,
    lU: () => F,
    nm: () => Ac,
    oD: () => z,
    pA: () => At,
    pY: () => G,
    pi: () => Ae,
    rK: () => Ar,
    uB: () => AA,
    vc: () => Ao,
    vm: () => An,
    zT: () => Aa
}),
    t(415506),
    t(539854),
    t(49124));
var n = t(654861),
    r = t.n(n),
    l = t(913527),
    i = t.n(l),
    s = t(536402),
    a = t(533800),
    o = t(149765),
    g = t(866442),
    v = t(379649),
    f = t(911969),
    c = t(933557),
    h = t(710845),
    u = t(339085),
    E = t(236413),
    d = t(45966),
    C = t(563534),
    B = t(427679),
    w = t(926491),
    D = t(387667),
    M = t(592125),
    I = t(485386),
    p = t(699516),
    H = t(594174),
    b = t(55935),
    Q = t(630388),
    O = t(971130),
    P = t(709054),
    V = t(987707),
    j = t(981631),
    T = t(176505),
    y = t(273504),
    m = t(765305),
    L = t(388032);
function x(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
function Z(A, e) {
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
let N = new h.Z('AuditLogUtils'),
    R = [v.J6.DAYS, v.J6.HOURS, v.J6.MINUTES, v.J6.SECONDS],
    S = () => ({ [j.zUn.REASON]: () => L.t['2IW3Cw'] }),
    G = () =>
        x(
            {
                [j.zUn.NAME]: () => L.t.CkDiND,
                [j.zUn.DESCRIPTION]: AO(L.t.RP3Ey8, L.t.QAVj1d),
                [j.zUn.ICON_HASH]: () => L.t.iLZ8Q0,
                [j.zUn.SPLASH_HASH]: () => L.t['4VV6dn'],
                [j.zUn.DISCOVERY_SPLASH_HASH]: () => L.t['2pds6u'],
                [j.zUn.BANNER_HASH]: AO(L.t.Cxq4zM, L.t['H7eE//']),
                [j.zUn.OWNER_ID]: () => L.t['8ltsLS'],
                [j.zUn.REGION]: () => L.t.X9r5KS,
                [j.zUn.PREFERRED_LOCALE]: () => L.t.UnXuDQ,
                [j.zUn.AFK_CHANNEL_ID]: AO(L.t.ClBuAw, L.t['ms+xtL']),
                [j.zUn.AFK_TIMEOUT]: () => L.t.q21fHR,
                [j.zUn.SYSTEM_CHANNEL_ID]: AO(L.t.H1VXaW, L.t.XhtmxM),
                [j.zUn.RULES_CHANNEL_ID]: AO(L.t.OI6MGx, L.t.lik3tL),
                [j.zUn.PUBLIC_UPDATES_CHANNEL_ID]: AO(L.t.YxBKra, L.t.Ehsnio),
                [j.zUn.MFA_LEVEL]: Aj({
                    [j.BpS.NONE]: L.t.voaCCQ,
                    [j.BpS.ELEVATED]: L.t.pRNVw8
                }),
                [j.zUn.WIDGET_ENABLED]: AV(L.t.ADIty8, L.t.nf58VV),
                [j.zUn.WIDGET_CHANNEL_ID]: AO(L.t['6SBsDQ'], L.t.deQ5wM),
                [j.zUn.VERIFICATION_LEVEL]: Aj({
                    [j.sFg.NONE]: L.t.W27rsb,
                    [j.sFg.LOW]: L.t['V8P+Pz'],
                    [j.sFg.MEDIUM]: L.t.ERQFam,
                    [j.sFg.HIGH]: L.t['83fN0t'],
                    [j.sFg.VERY_HIGH]: L.t.PnkQJC
                }),
                [j.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: Aj({
                    [j.bL.ALL_MESSAGES]: L.t.LDi76O,
                    [j.bL.ONLY_MENTIONS]: L.t['6K83bW']
                }),
                [j.zUn.VANITY_URL_CODE]: AO(L.t.Zplsoq, L.t.u6cArq),
                [j.zUn.EXPLICIT_CONTENT_FILTER]: Aj({
                    [j.lxg.DISABLED]: L.t.fmOeLy,
                    [j.lxg.MEMBERS_WITHOUT_ROLES]: L.t['4FghY2'],
                    [j.lxg.ALL_MEMBERS]: L.t.olyrSk
                }),
                [j.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: AV(L.t.rBT0sr, L.t['gc+te3']),
                [j.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => L.t.YbouFB,
                [j.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => L.t.g3DMjI,
                [j.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => L.t['+fQAen'],
                [j.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => L.t.E1fc4u,
                [j.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => L.t.XbwtSE
            },
            S()
        ),
    U = () => ({
        [j.zUn.NAME]: AQ(L.t.f8Rh0d, L.t.ebD4Qk),
        [j.zUn.POSITION]: AQ(L.t.isS8tb, L.t.t5uBio),
        [j.zUn.TOPIC]: AP(L.t.esQcxs, L.t['m+veAg'], L.t['ws/1FB']),
        [j.zUn.BITRATE]: AQ(L.t.fw81am, L.t.MFNlgY),
        [j.zUn.RTC_REGION_OVERRIDE]: AP(L.t['6kajx8'], L.t.eGOlmZ, L.t['0JMZd3']),
        [j.zUn.USER_LIMIT]: AQ(L.t.wk5t7u, L.t.XgjCEh),
        [j.zUn.RATE_LIMIT_PER_USER]: AQ(L.t['7lirhI'], L.t.j4CCJS),
        [j.zUn.PERMISSIONS_RESET]: () => L.t['+vSBFR'],
        [j.zUn.PERMISSIONS_GRANTED]: () => L.t.EKLJv7,
        [j.zUn.PERMISSIONS_DENIED]: () => L.t.U3rO5e,
        [j.zUn.REASON]: () => L.t['2IW3Cw'],
        [j.zUn.NSFW]: AV(L.t.H8Ri2d, L.t.WW6cJy),
        [j.zUn.TYPE]: AQ(L.t.Vn5zn5, L.t.aq4uWF),
        [j.zUn.VIDEO_QUALITY_MODE]: AQ(L.t.e68fAQ, L.t.djbES0),
        [j.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: AQ(L.t.nYz2mp, L.t.oczvRE),
        [j.zUn.FLAGS]: () => L.t.ImCQkp,
        [j.zUn.AVAILABLE_TAG_ADD]: () => L.t.H86QQU,
        [j.zUn.AVAILABLE_TAG_EDIT]: () => L.t.YtUzlp,
        [j.zUn.AVAILABLE_TAG_DELETE]: () => L.t['8QOsen'],
        [j.zUn.LINKED_LOBBY]: AO(L.t['+/3TkJ'], L.t['5kDYS0'])
    }),
    F = () =>
        x(
            {
                [j.zUn.NICK]: AP(L.t.qXDsHh, L.t['m+qur6'], L.t.DvLvjI),
                [j.zUn.DEAF]: AV(L.t.mArLlZ, L.t.ddvVYG),
                [j.zUn.MUTE]: AV(L.t['bxs/lZ'], L.t.FjecQE),
                [j.zUn.ROLES_REMOVE]: () => L.t['+2SDWV'],
                [j.zUn.ROLES_ADD]: () => L.t['B3/3IC'],
                [j.zUn.PRUNE_DELETE_DAYS]: () => L.t['+Cvc+P'],
                [j.zUn.COMMUNICATION_DISABLED_UNTIL]: AP(L.t.LXTQr6, L.t.LXTQr6, L.t.ULSdnJ),
                [j.zUn.BYPASSES_VERIFICATION]: AV(L.t.NBPBur, L.t.zATosr),
                [j.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => L.t.YbouFB
            },
            S()
        ),
    X = () =>
        x(
            {
                [j.zUn.NAME]: AQ(L.t.QBmlaG, L.t.Lfs4r6),
                [j.zUn.DESCRIPTION]: AQ(L.t.XeYKWF, L.t.PSfeIi),
                [j.zUn.PERMISSIONS_GRANTED]: () => L.t['9i/DvL'],
                [j.zUn.PERMISSIONS_DENIED]: () => L.t.pa1ZVl,
                [j.zUn.COLOR]: AT({ '#000000': L.t.TK6E1N }, L.t['2FQFi4']),
                [j.zUn.COLORS]: (A) => (null == A.newValue.secondary_color ? L.t.U44ttr : L.t.WnSwLy),
                [j.zUn.HOIST]: AV(L.t.gWfe29, L.t['+tb8kJ']),
                [j.zUn.MENTIONABLE]: AV(L.t.LL8VFB, L.t.Z7xzmJ),
                [j.zUn.ICON_HASH]: () => L.t['iEE79/'],
                [j.zUn.UNICODE_EMOJI]: () => L.t.KiLMMz
            },
            S()
        ),
    z = () =>
        Z(x({}, S()), {
            [j.zUn.TITLE]: AQ(L.t.sNpuy8, L.t['3Ukc/v']),
            [j.zUn.DESCRIPTION]: AQ(L.t.PP1q09, L.t.z7pYLi),
            [j.zUn.OPTIONS]: () => L.t['3G5C9/'],
            [j.zUn.SINGLE_SELECT]: AV(L.t.v4WnR0, L.t['6Qg3uL']),
            [j.zUn.REQUIRED]: AV(L.t['0MPAMz'], L.t.pwsXio)
        }),
    k = () =>
        Z(x({}, S()), {
            [j.zUn.DEFAULT_CHANNEL_IDS]: () => L.t['8M+D2t'],
            [j.zUn.ENABLE_DEFAULT_CHANNELS]: AV(L.t['EYd/lp'], L.t['36OZeX']),
            [j.zUn.ENABLE_ONBOARDING_PROMPTS]: AV(L.t.V3u8PT, L.t.r66lc3),
            [j.zUn.ENABLED]: AV(L.t.SODVIi, L.t.u8HY5e)
        }),
    K = () =>
        Z(x({}, S()), {
            [j.zUn.WELCOME_MESSAGE]: () => L.t.dKQ1xc,
            [j.zUn.NEW_MEMBER_ACTIONS]: () => L.t.jDUInp,
            [j.zUn.RESOURCE_CHANNELS]: () => L.t.SIX0mp
        }),
    Y = () =>
        x(
            {
                [j.zUn.CODE]: () => L.t.rrRHgY,
                [j.zUn.CHANNEL_ID]: () => L.t.Q1vd5u,
                [j.zUn.MAX_USES]: AT({ 0: L.t.Yx8LNj }, L.t['3ygnwc']),
                [j.zUn.MAX_AGE]: AT({ [L.intl.string(L.t.PqEzn5)]: L.t.uWrLv7 }, L.t['Q+5kcH']),
                [j.zUn.TEMPORARY]: AV(L.t.MWp6Hx, L.t.omiqTE),
                [j.zUn.FLAGS]: Aj({ [a.$.IS_GUEST_INVITE]: L.t.XYZMbG })
            },
            S()
        ),
    W = () => ({
        [j.zUn.CHANNEL_ID]: AQ(L.t.jhPpra, L.t.ar4qYG),
        [j.zUn.NAME]: AQ(L.t.ZVGrzc, L.t.tywdZW),
        [j.zUn.AVATAR_HASH]: () => L.t.KB52Ul,
        [j.zUn.REASON]: () => L.t['2IW3Cw']
    }),
    J = () => x({ [j.zUn.NAME]: AQ(L.t.ahU1o6, L.t['wxs+vb']) }, S()),
    q = () =>
        x(
            {
                [j.zUn.NAME]: AQ(L.t.cdl0Ym, L.t.o3W2l5),
                [j.zUn.TAGS]: AQ(L.t['zwL+S0'], L.t.VYfKAw),
                [j.zUn.DESCRIPTION]: AQ(L.t.XeYKWF, L.t.PSfeIi)
            },
            S()
        ),
    _ = () =>
        x(
            {
                [j.zUn.ENABLE_EMOTICONS]: AV(L.t['FI0m5+'], L.t.olpKCw),
                [j.zUn.EXPIRE_BEHAVIOR]: Aj({
                    0: L.t['1Bb1+v'],
                    1: L.t.vjlW6u
                }),
                [j.zUn.EXPIRE_GRACE_PERIOD]: () => L.t.iovXMT
            },
            S()
        ),
    $ = () =>
        x(
            {
                [j.zUn.TOPIC]: AQ(L.t['m+veAg'], L.t.esQcxs),
                [j.zUn.PRIVACY_LEVEL]: Aj({
                    [m.j8.GUILD_ONLY]: L.t['EC+CDg'],
                    [m.j8.PUBLIC]: L.t['pK/WGx']
                })
            },
            S()
        ),
    AA = () =>
        x(
            {
                [j.zUn.NAME]: () => L.t['21EXHR'],
                [j.zUn.DESCRIPTION]: () => L.t.Vm1of3,
                [j.zUn.PRIVACY_LEVEL]: Aj({
                    [m.j8.GUILD_ONLY]: L.t['EC+CDg'],
                    [m.j8.PUBLIC]: L.t['pK/WGx']
                }),
                [j.zUn.STATUS]: Aj({
                    [m.p1.SCHEDULED]: L.t.hXKDgo,
                    [m.p1.ACTIVE]: L.t.lRX1n5,
                    [m.p1.COMPLETED]: L.t['/eFIho'],
                    [m.p1.CANCELED]: L.t.NWIYho
                }),
                [j.zUn.ENTITY_TYPE]: Aj({
                    [m.WX.NONE]: L.t['6sO3Sk'],
                    [m.WX.STAGE_INSTANCE]: L.t['Wo+s19'],
                    [m.WX.VOICE]: L.t.XCVaIC,
                    [m.WX.EXTERNAL]: L.t.IvhAj4
                }),
                [j.zUn.CHANNEL_ID]: AO(L.t.yJBIcX, L.t['+PqSsr']),
                [j.zUn.LOCATION]: AO(L.t.GaMBHx, L.t.PsICk5),
                [j.zUn.IMAGE_HASH]: AO(L.t.S3vcRE, L.t.KQu47O)
            },
            S()
        ),
    Ae = () =>
        x(
            {
                [j.zUn.SCHEDULED_START_TIME]: AO(L.t.zMIYVl, L.t.fzF8GR),
                [j.zUn.SCHEDULED_END_TIME]: AO(L.t.vONSQE, L.t.IlIti4),
                [j.zUn.IS_CANCELED]: (A) => {
                    if (null != A.oldValue || !0 === A.newValue) {
                        if (!A.oldValue && A.newValue) return L.t['7RkicX'];
                        else if (A.oldValue && !A.newValue) return L.t.dRNTWV;
                    }
                }
            },
            S()
        ),
    At = () =>
        x(
            {
                [j.zUn.NAME]: AQ(L.t.tUKRzc, L.t.kPCHOD),
                [j.zUn.ARCHIVED]: AV(L.t.jDi9FB, L.t.F6dvbW),
                [j.zUn.LOCKED]: AV(L.t.JSy1QU, L.t.C7Jgo6),
                [j.zUn.INVITABLE]: AV(L.t.dxNUs7, L.t.biJvYG),
                [j.zUn.AUTO_ARCHIVE_DURATION]: AQ(L.t.LuaG39, L.t['18d9qq']),
                [j.zUn.RATE_LIMIT_PER_USER]: AQ(L.t['7lirhI'], L.t.j4CCJS),
                [j.zUn.FLAGS]: () => L.t.sSAQtr
            },
            S()
        ),
    An = (A) => {
        let e = x({}, S());
        return (
            null == A ||
                A.forEach((A) => {
                    A.newValue ? (A.newValue.permission ? (e[A.key] = () => L.t['JH+89P']) : (e[A.key] = () => L.t.HUrFDg)) : (e[A.key] = () => L.t.vynxnZ);
                }),
            e
        );
    },
    Ar = () =>
        x(
            {
                [j.zUn.NAME]: () => L.t.XwxAJS,
                [j.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => L.t.fx0pys,
                [j.zUn.AUTO_MODERATION_EVENT_TYPE]: () => L.t['46Y+Ly'],
                [j.zUn.AUTO_MODERATION_ACTIONS]: () => L.t['8efxfn'],
                [j.zUn.AUTO_MODERATION_ENABLED]: (A) => {
                    var e;
                    return !0 === (null != (e = A.newValue) ? e : A.oldValue) ? L.t.fCmxCw : L.t.Wrg9Ji;
                },
                [j.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => L.t.TRb7Nz,
                [j.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => L.t.mzitLC,
                [j.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => L.t['h/lM6+'],
                [j.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => L.t['9V2yaG'],
                [j.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => L.t['4Qe9n5'],
                [j.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => L.t.GyZtxs,
                [j.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => L.t.OQDadX,
                [j.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => L.t['FvvR+P'],
                [j.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => L.t.p5nSv7
            },
            S()
        ),
    Al = () =>
        x(
            {
                [j.zUn.NAME]: AQ(L.t.VOtRSE, L.t.OK7B8P),
                [j.zUn.VOLUME]: AQ(L.t.igrDBw, L.t.L5lDFB),
                [j.zUn.EMOJI_NAME]: AP(L.t.IIanaW, L.t.z4w4U1, L.t.V8Tfyc),
                [j.zUn.EMOJI_ID]: AP(L.t.ainxMD, L.t['2NPsYm'], L.t['8crtnp'])
            },
            S()
        ),
    Ai = () =>
        x(
            {
                [j.zUn.VERIFICATION_ENABLED]: (A) => (!0 === A.newValue ? L.t.fnkzDQ : L.t.WYT6kZ),
                [j.zUn.MANUAL_APPROVAL_ENABLED]: (A) => (!0 === A.newValue ? L.t.jzSvVV : L.t.WxyOtr)
            },
            S()
        ),
    As = () => x({ [j.zUn.STATUS]: () => L.t.HyCSnJ }, S()),
    Aa = () => ({
        [j.zUn.DESCRIPTION]: () => L.t.nsUZKS,
        [j.zUn.BRAND_COLOR_PRIMARY]: () => L.t.qe9mgI,
        [j.zUn.CUSTOM_BANNER_HASH]: () => L.t['04b5KC'],
        [j.zUn.TRAITS]: () => L.t.dEy9WF,
        [j.zUn.GAME_APPLICATION_IDS]: () => L.t['8BOT39'],
        [j.zUn.VISIBILITY]: () => L.t.bCl1Eh,
        [j.zUn.SERVER_TAG]: AO(L.t.ix1dnZ, L.t['4LKpKS'])
    }),
    Ao = {
        [j.KFR.CHANNEL]: {
            [j.zUn.ID]: !0,
            [j.zUn.PERMISSION_OVERWRITES]: !0
        },
        [j.KFR.CHANNEL_OVERWRITE]: {
            [j.zUn.TYPE]: !0,
            [j.zUn.ID]: !0,
            [j.zUn.PERMISSION_OVERWRITES]: !0
        },
        [j.KFR.INVITE]: {
            [j.zUn.INVITER_ID]: !0,
            [j.zUn.USES]: !0
        },
        [j.KFR.WEBHOOK]: {
            [j.zUn.TYPE]: !0,
            [j.zUn.APPLICATION_ID]: !0
        },
        [j.KFR.INTEGRATION]: { [j.zUn.TYPE]: !0 },
        [j.KFR.THREAD]: {
            [j.zUn.ID]: !0,
            [j.zUn.TYPE]: !0
        },
        [j.KFR.STICKER]: {
            [j.zUn.ID]: !0,
            [j.zUn.TYPE]: !0,
            [j.zUn.ASSET]: !0,
            [j.zUn.FORMAT_TYPE]: !0,
            [j.zUn.AVAILABLE]: !0,
            [j.zUn.GUILD_ID]: !0
        },
        [j.KFR.GUILD_HOME]: { [j.zUn.ENTITY_TYPE]: !0 },
        [j.KFR.GUILD_ONBOARDING]: { [j.zUn.PROMPTS]: !0 },
        [j.KFR.GUILD_SOUNDBOARD]: {
            [j.zUn.ID]: !0,
            [j.zUn.SOUND_ID]: !0
        }
    },
    Ag = () => [
        {
            value: j.rsA.ALL,
            label: L.intl.string(L.t.QxEVcn),
            valueLabel: L.intl.string(L.t.an9Ry8)
        },
        {
            value: j.rsA.GUILD_UPDATE,
            label: L.intl.string(L.t['5INZa2'])
        },
        {
            value: j.rsA.CHANNEL_CREATE,
            label: L.intl.string(L.t['2uh4vL'])
        },
        {
            value: j.rsA.CHANNEL_UPDATE,
            label: L.intl.string(L.t.mGsBLS)
        },
        {
            value: j.rsA.CHANNEL_DELETE,
            label: L.intl.string(L.t.hCHzAg)
        },
        {
            value: j.rsA.CHANNEL_OVERWRITE_CREATE,
            label: L.intl.string(L.t['8TnAMD'])
        },
        {
            value: j.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: L.intl.string(L.t.Jqx0Bg)
        },
        {
            value: j.rsA.CHANNEL_OVERWRITE_DELETE,
            label: L.intl.string(L.t.gBXOr6)
        },
        {
            value: j.rsA.MEMBER_KICK,
            label: L.intl.string(L.t['Q1/hNz'])
        },
        {
            value: j.rsA.MEMBER_PRUNE,
            label: L.intl.string(L.t.tOTTjY)
        },
        {
            value: j.rsA.MEMBER_BAN_ADD,
            label: L.intl.string(L.t['NfPn+f'])
        },
        {
            value: j.rsA.MEMBER_BAN_REMOVE,
            label: L.intl.string(L.t.XCsGfH)
        },
        {
            value: j.rsA.MEMBER_UPDATE,
            label: L.intl.string(L.t['F/jmND'])
        },
        {
            value: j.rsA.MEMBER_ROLE_UPDATE,
            label: L.intl.string(L.t.zAveSE)
        },
        {
            value: j.rsA.MEMBER_MOVE,
            label: L.intl.string(L.t.QshteX)
        },
        {
            value: j.rsA.MEMBER_DISCONNECT,
            label: L.intl.string(L.t.Z45os7)
        },
        {
            value: j.rsA.BOT_ADD,
            label: L.intl.string(L.t.vuH24e)
        },
        {
            value: j.rsA.THREAD_CREATE,
            label: L.intl.string(L.t['+zl0DA'])
        },
        {
            value: j.rsA.THREAD_UPDATE,
            label: L.intl.string(L.t.rbIry8)
        },
        {
            value: j.rsA.THREAD_DELETE,
            label: L.intl.string(L.t.hFjNEB)
        },
        {
            value: j.rsA.ROLE_CREATE,
            label: L.intl.string(L.t.AbxKtr)
        },
        {
            value: j.rsA.ROLE_UPDATE,
            label: L.intl.string(L.t.t3Z6sb)
        },
        {
            value: j.rsA.ROLE_DELETE,
            label: L.intl.string(L.t.YsFpa2)
        },
        {
            value: j.rsA.ONBOARDING_PROMPT_CREATE,
            label: L.intl.string(L.t.ZV9tqa)
        },
        {
            value: j.rsA.ONBOARDING_PROMPT_UPDATE,
            label: L.intl.string(L.t.PcOdvb)
        },
        {
            value: j.rsA.ONBOARDING_PROMPT_DELETE,
            label: L.intl.string(L.t['+r33NT'])
        },
        {
            value: j.rsA.ONBOARDING_CREATE,
            label: L.intl.string(L.t.uDADdX)
        },
        {
            value: j.rsA.ONBOARDING_UPDATE,
            label: L.intl.string(L.t.J1H1ws)
        },
        {
            value: j.rsA.HOME_SETTINGS_CREATE,
            label: L.intl.string(L.t.Di4cvL)
        },
        {
            value: j.rsA.HOME_SETTINGS_UPDATE,
            label: L.intl.string(L.t.tzyrJC)
        },
        {
            value: j.rsA.INVITE_CREATE,
            label: L.intl.string(L.t['0BNJdX'])
        },
        {
            value: j.rsA.INVITE_UPDATE,
            label: L.intl.string(L.t['o++obW'])
        },
        {
            value: j.rsA.INVITE_DELETE,
            label: L.intl.string(L.t.iP40Aw)
        },
        {
            value: j.rsA.WEBHOOK_CREATE,
            label: L.intl.string(L.t['tBF4+f'])
        },
        {
            value: j.rsA.WEBHOOK_UPDATE,
            label: L.intl.string(L.t.eV3McH)
        },
        {
            value: j.rsA.WEBHOOK_DELETE,
            label: L.intl.string(L.t.AAL3Ky)
        },
        {
            value: j.rsA.EMOJI_CREATE,
            label: L.intl.string(L.t.RuWm0d)
        },
        {
            value: j.rsA.EMOJI_UPDATE,
            label: L.intl.string(L.t.WzdUY2)
        },
        {
            value: j.rsA.EMOJI_DELETE,
            label: L.intl.string(L.t.c3dK2N)
        },
        {
            value: j.rsA.MESSAGE_DELETE,
            label: L.intl.string(L.t.daTfXl)
        },
        {
            value: j.rsA.MESSAGE_BULK_DELETE,
            label: L.intl.string(L.t.nrBxen)
        },
        {
            value: j.rsA.MESSAGE_PIN,
            label: L.intl.string(L.t.MUldyM)
        },
        {
            value: j.rsA.MESSAGE_UNPIN,
            label: L.intl.string(L.t.n4zKhI)
        },
        {
            value: j.rsA.INTEGRATION_CREATE,
            label: L.intl.string(L.t['deNm8/'])
        },
        {
            value: j.rsA.INTEGRATION_UPDATE,
            label: L.intl.string(L.t.HT7Sfn)
        },
        {
            value: j.rsA.INTEGRATION_DELETE,
            label: L.intl.string(L.t['+kJ09v'])
        },
        {
            value: j.rsA.STICKER_CREATE,
            label: L.intl.string(L.t['3DzNjY'])
        },
        {
            value: j.rsA.STICKER_UPDATE,
            label: L.intl.string(L.t.tdhW5e)
        },
        {
            value: j.rsA.STICKER_DELETE,
            label: L.intl.string(L.t['+ZhGOj'])
        },
        {
            value: j.rsA.STAGE_INSTANCE_CREATE,
            label: L.intl.string(L.t.sPbjAw)
        },
        {
            value: j.rsA.STAGE_INSTANCE_UPDATE,
            label: L.intl.string(L.t.cW9LfH)
        },
        {
            value: j.rsA.STAGE_INSTANCE_DELETE,
            label: L.intl.string(L.t['U1r+yM'])
        },
        {
            value: j.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: L.intl.string(L.t.H81Zy8)
        },
        {
            value: j.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: L.intl.string(L.t.FM69l5)
        },
        {
            value: j.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: L.intl.string(L.t.Rq28Bg)
        },
        {
            value: j.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: L.intl.string(L.t.iPdFOj)
        },
        {
            value: j.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: L.intl.string(L.t.gNq5z8)
        },
        {
            value: j.rsA.AUTO_MODERATION_RULE_CREATE,
            label: L.intl.string(L.t.f72Zqa)
        },
        {
            value: j.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: L.intl.string(L.t.XeqIio)
        },
        {
            value: j.rsA.AUTO_MODERATION_RULE_DELETE,
            label: L.intl.string(L.t.syAApa)
        },
        {
            value: j.rsA.GUILD_HOME_FEATURE_ITEM,
            label: L.intl.string(L.t.lhG5KC)
        },
        {
            value: j.rsA.GUILD_HOME_REMOVE_ITEM,
            label: L.intl.string(L.t.lRPRwc)
        },
        {
            value: j.rsA.SOUNDBOARD_SOUND_CREATE,
            label: L.intl.string(L.t.yoRi5u)
        },
        {
            value: j.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: L.intl.string(L.t.uKlG0d)
        },
        {
            value: j.rsA.SOUNDBOARD_SOUND_DELETE,
            label: L.intl.string(L.t.gq0iCQ)
        },
        {
            value: j.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: L.intl.string(L.t.rGr0YG)
        },
        {
            value: j.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: L.intl.string(L.t.V9PEQ0)
        }
    ];
function Av(A, e) {
    return null != e.changes ? e.changes.find((e) => e.key === A) : null;
}
function Af(A, e) {
    return null != e.changes ? e.changes.filter((e) => e.key === A) : [];
}
function Ac(A) {
    var e;
    let t = Ag().find((e) => e.value === A.action);
    return null != Av(j.zUn.COMMUNICATION_DISABLED_UNTIL, A) ? L.intl.string(L.t.z3wbj4) : null != (e = null == t ? void 0 : t.label) ? e : null;
}
let Ah = {
    [v.J6.SECONDS]: (A) => L.intl.formatToPlainString(L.t.geSp4O, { seconds: A }),
    [v.J6.MINUTES]: (A) => L.intl.formatToPlainString(L.t.iXLF9f, { minutes: A }),
    [v.J6.HOURS]: (A) => L.intl.formatToPlainString(L.t.xCjYxM, { hours: A }),
    [v.J6.DAYS]: (A) => L.intl.formatToPlainString(L.t.k2UNz8, { days: A })
};
function Au(A) {
    let e = Av(j.zUn.COMMUNICATION_DISABLED_UNTIL, A),
        t = Af(j.zUn.ROLES_ADD, A).length > 0,
        n = Af(j.zUn.ROLES_REMOVE, A).length > 0;
    if (null != e) {
        if ((null == e ? void 0 : e.newValue) != null) {
            let t = new Date(null == e ? void 0 : e.newValue).getTime() - P.default.extractTimestamp(A.id),
                n = Math.round(t / 1000 / 60),
                r = (0, v.CI)(n, R);
            if (null == r.unit || null == r.time) return null;
            if (r.unit in Ah) {
                let A = r.unit,
                    e = r.unit === v.J6.SECONDS ? Math.round(t / 1000) : r.time;
                return Ah[A](e);
            }
        } else if ((null == e ? void 0 : e.oldValue) != null) return L.intl.string(L.t.MA1ltr);
    } else if (t && n) return L.intl.string(L.t.RdMMe3);
    else if (t) return L.intl.string(L.t['4GQqs7']);
    else if (n) return L.intl.string(L.t['8mQ6x8']);
    return null;
}
function AE(A) {
    let e = Af(j.zUn.ROLES_ADD, A),
        t = Af(j.zUn.ROLES_REMOVE, A),
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
                                    .join(', ');
                      })
                      .join(', '),
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
                                    .join(', ');
                      })
                      .join(', ');
    return e.length > 0 && t.length > 0
        ? L.intl.formatToPlainString(L.t.tZw1ER, {
              roleNamesAdded: n,
              roleNamesRemoved: r
          })
        : e.length > 0
          ? L.intl.formatToPlainString(L.t['/mTqt7'], { roleNames: n })
          : t.length > 0
            ? L.intl.formatToPlainString(L.t.Wk4pAA, { roleNames: r })
            : null;
}
function Ad(A) {
    switch (A.action) {
        case j.rsA.GUILD_UPDATE:
            return L.t.LjZO39;
        case j.rsA.CHANNEL_CREATE:
            let e = null != A.changes ? A.changes.find((A) => A.key === j.zUn.TYPE) : null;
            if (null == e) throw Error('[AuditLog] Could not find type change for channel create');
            switch (e.newValue) {
                case j.d4z.GUILD_STAGE_VOICE:
                    return L.t['OKp4+v'];
                case j.d4z.GUILD_VOICE:
                    return L.t.NPOy4O;
                case j.d4z.GUILD_CATEGORY:
                    return L.t.T3KIj4;
                default:
                    return L.t.wrYNGx;
            }
        case j.rsA.CHANNEL_UPDATE:
            return L.t.nTYk6O;
        case j.rsA.CHANNEL_DELETE:
            return L.t.ynfvkp;
        case j.rsA.CHANNEL_OVERWRITE_CREATE:
            return L.t.l5Cu1d;
        case j.rsA.CHANNEL_OVERWRITE_UPDATE:
            return L.t.uhtbNT;
        case j.rsA.CHANNEL_OVERWRITE_DELETE:
            return L.t['HASt//'];
        case j.rsA.MEMBER_KICK:
            return L.t.B5hDZW;
        case j.rsA.MEMBER_PRUNE:
            return L.t.qKOZTE;
        case j.rsA.MEMBER_BAN_ADD:
            return L.t.XklUm5;
        case j.rsA.MEMBER_BAN_REMOVE:
            return L.t.o3Y6HB;
        case j.rsA.MEMBER_UPDATE:
            return L.t.pznhLC;
        case j.rsA.MEMBER_ROLE_UPDATE:
            return L.t.VngfiY;
        case j.rsA.MEMBER_MOVE:
            return L.t.Yt6NkZ;
        case j.rsA.MEMBER_DISCONNECT:
            return L.t.K4eCZ2;
        case j.rsA.BOT_ADD:
            return L.t.fWvX0N;
        case j.rsA.ROLE_CREATE:
            return L.t.UTLTx8;
        case j.rsA.ROLE_UPDATE:
            return L.t.NRbN19;
        case j.rsA.ROLE_DELETE:
            return L.t['4s63tb'];
        case j.rsA.INVITE_CREATE:
            return L.t.YHOXW1;
        case j.rsA.INVITE_UPDATE:
            return L.t.ja3kGR;
        case j.rsA.INVITE_DELETE:
            return L.t['3n/iWl'];
        case j.rsA.WEBHOOK_CREATE:
            return L.t.MhYhio;
        case j.rsA.WEBHOOK_UPDATE:
            return L.t['6GTlWF'];
        case j.rsA.WEBHOOK_DELETE:
            return L.t.in0VjY;
        case j.rsA.EMOJI_CREATE:
            return L.t['7vekRE'];
        case j.rsA.EMOJI_UPDATE:
            return L.t.IsCKfn;
        case j.rsA.EMOJI_DELETE:
            return L.t.JnUaVF;
        case j.rsA.STICKER_CREATE:
            return L.t.DRZifn;
        case j.rsA.STICKER_UPDATE:
            return L.t.bhujGR;
        case j.rsA.STICKER_DELETE:
            return L.t.rGEP9f;
        case j.rsA.MESSAGE_DELETE:
            return L.t['HPkD+P'];
        case j.rsA.MESSAGE_BULK_DELETE:
            return L.t['3RIvLC'];
        case j.rsA.MESSAGE_PIN:
            return L.t.Yna7Ex;
        case j.rsA.MESSAGE_UNPIN:
            return L.t.NCxXUV;
        case j.rsA.INTEGRATION_CREATE:
            return L.t.HYvCb2;
        case j.rsA.INTEGRATION_UPDATE:
            return L.t.ibCCOT;
        case j.rsA.INTEGRATION_DELETE:
            return L.t['8zScWV'];
        case j.rsA.STAGE_INSTANCE_CREATE:
            return L.t['n7x/DA'];
        case j.rsA.STAGE_INSTANCE_UPDATE:
            return L.t['0hQYU1'];
        case j.rsA.STAGE_INSTANCE_DELETE:
            if (null != A.userId) return L.t['Oi/in5'];
            return L.t['7ZIFm5'];
        case j.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return L.t.S7k52t;
        case j.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return L.t.ebTK19;
        case j.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return L.t['/ARPKS'];
        case j.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case j.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return L.t['8qCI39'];
        case j.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return L.t.zYb2dX;
        case j.rsA.THREAD_CREATE:
            let t = null != A.changes ? A.changes.find((A) => A.key === j.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for thread create');
            switch (t.newValue) {
                case j.d4z.PRIVATE_THREAD:
                    return L.t['Br0y5+'];
                case j.d4z.ANNOUNCEMENT_THREAD:
                    return L.t['6uaMmJ'];
                default:
                    return L.t['2cxQ7O'];
            }
        case j.rsA.THREAD_UPDATE:
            return L.t.PSsy4u;
        case j.rsA.THREAD_DELETE:
            return L.t.s3Khn5;
        case j.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return L.t.uzCqBg;
        case j.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return L.t.NqWv2N;
        case j.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var n;
            if ((null == (n = A.options) ? void 0 : n.auto_moderation_rule_trigger_type) === y.fX.USER_PROFILE.toString()) return L.t.YQsjen;
            return L.t.SD0PwM;
        case j.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return L.t.Vk4Twc;
        case j.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return L.t['/W5u5u'];
        case j.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return L.t.ONvWys;
        case j.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return L.t.ryGLk5;
        case j.rsA.AUTO_MODERATION_RULE_CREATE:
            return L.t.NKljj4;
        case j.rsA.AUTO_MODERATION_RULE_UPDATE:
            return L.t['3wEA9v'];
        case j.rsA.AUTO_MODERATION_RULE_DELETE:
            return L.t.umua3t;
        case j.rsA.ONBOARDING_PROMPT_CREATE:
            return L.t['/8A1g4'];
        case j.rsA.ONBOARDING_PROMPT_UPDATE:
            return L.t.ArIrWF;
        case j.rsA.ONBOARDING_PROMPT_DELETE:
            return L.t.IuBTam;
        case j.rsA.ONBOARDING_CREATE:
            return L.t.wDaq39;
        case j.rsA.ONBOARDING_UPDATE:
            return L.t['yONu/v'];
        case j.rsA.HOME_SETTINGS_CREATE:
            return L.t.dSdCjI;
        case j.rsA.HOME_SETTINGS_UPDATE:
            return L.t.XHE8qq;
        case j.rsA.GUILD_HOME_FEATURE_ITEM:
            let r = null != A.changes ? A.changes.find((A) => A.key === j.zUn.ENTITY_TYPE) : null;
            if (null == r) return L.t['UZ+U3N'];
            switch (r.newValue) {
                case s.w.MESSAGE:
                    return L.t['PyEa+P'];
                case s.w.FORUM_POST:
                    return L.t.hCuAb2;
                default:
                    return L.t['UZ+U3N'];
            }
        case j.rsA.GUILD_HOME_REMOVE_ITEM:
            return L.t.kPReur;
        case j.rsA.SOUNDBOARD_SOUND_CREATE:
            return L.t['0PD83d'];
        case j.rsA.SOUNDBOARD_SOUND_UPDATE:
            return L.t.CM8n19;
        case j.rsA.SOUNDBOARD_SOUND_DELETE:
            return L.t['kVz4//'];
        case j.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return L.t.MWjnU1;
        case j.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return L.t.aS8Krq;
        case j.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return L.t.NUKUb2;
        case j.rsA.GUILD_PROFILE_UPDATE:
            return L.t.Ed6hFx;
        case j.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return L.t['3Ne7MD'];
        default:
            return null;
    }
}
function AC(A) {
    switch (A) {
        case T.zZ.GUILD_FEED_REMOVED:
            return L.intl.string(L.t['5G8ZDw']);
        case T.zZ.ACTIVE_CHANNELS_REMOVED:
            return L.intl.string(L.t['4YLtzM']);
        case T.zZ.PINNED:
            return L.intl.string(L.t['1QLRYW']);
    }
    return null;
}
function AB(A) {
    switch (A) {
        case T.zZ.GUILD_FEED_REMOVED:
            return L.intl.string(L.t.S5kuWV);
        case T.zZ.ACTIVE_CHANNELS_REMOVED:
            return L.intl.string(L.t['8qpgc3']);
        case T.zZ.PINNED:
            return L.intl.string(L.t.CMweGB);
    }
    return null;
}
function Aw(A, e) {
    switch (A) {
        case j.Plq.CREATE_INSTANT_INVITE:
            return L.intl.string(L.t.zJrgTE);
        case j.Plq.KICK_MEMBERS:
            return L.intl.string(L.t.pBNv6u);
        case j.Plq.BAN_MEMBERS:
            return L.intl.string(L.t.oTBA7O);
        case j.Plq.ADMINISTRATOR:
            return L.intl.string(L.t.PGvZqa);
        case j.Plq.MANAGE_CHANNELS:
            if (e.targetType === j.KFR.CHANNEL || e.targetType === j.KFR.CHANNEL_OVERWRITE) return L.intl.string(L.t.nAw15O);
            return L.intl.string(L.t['9qLtWl']);
        case j.Plq.MANAGE_GUILD:
            return L.intl.string(L.t.QZRcfH);
        case j.Plq.VIEW_GUILD_ANALYTICS:
            return L.intl.string(L.t.rQJBEx);
        case j.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return L.intl.string(L.t['0lTLTk']);
        case j.Plq.CHANGE_NICKNAME:
            return L.intl.string(L.t.dilOFx);
        case j.Plq.MANAGE_NICKNAMES:
            return L.intl.string(L.t['t+Ct5+']);
        case j.Plq.MANAGE_ROLES:
            return L.intl.string(L.t['C8d+oK']);
        case j.Plq.MANAGE_WEBHOOKS:
            return L.intl.string(L.t['/ADKmJ']);
        case j.Plq.CREATE_GUILD_EXPRESSIONS:
            return L.intl.string(L.t.HarVuL);
        case j.Plq.MANAGE_GUILD_EXPRESSIONS:
            return L.intl.string(L.t.bbuXIi);
        case j.Plq.VIEW_AUDIT_LOG:
            return L.intl.string(L.t.fZgLpK);
        case j.Plq.VIEW_CHANNEL:
            if (e.targetType === j.KFR.CHANNEL || e.targetType === j.KFR.CHANNEL_OVERWRITE) return L.intl.string(L.t['W/A4Qk']);
            return L.intl.string(L.t.uV83ys);
        case j.Plq.SEND_MESSAGES:
            return L.intl.string(L.t.T32rkJ);
        case j.Plq.SEND_TTS_MESSAGES:
            return L.intl.string(L.t.Mg7bkp);
        case j.Plq.USE_APPLICATION_COMMANDS:
            return L.intl.string(L.t.shbR1d);
        case j.Plq.MANAGE_MESSAGES:
            return L.intl.string(L.t['6lU9xM']);
        case j.Plq.EMBED_LINKS:
            return L.intl.string(L.t['969dEB']);
        case j.Plq.ATTACH_FILES:
            return L.intl.string(L.t['3AS4UF']);
        case j.Plq.READ_MESSAGE_HISTORY:
            return L.intl.string(L.t.l9ufaW);
        case j.Plq.MENTION_EVERYONE:
            return L.intl.string(L.t.Y78KGB);
        case j.Plq.USE_EXTERNAL_EMOJIS:
            return L.intl.string(L.t.BpBGZW);
        case j.Plq.USE_EXTERNAL_STICKERS:
            return L.intl.string(L.t['UeRs+f']);
        case j.Plq.ADD_REACTIONS:
            return L.intl.string(L.t.yEoJAg);
        case j.Plq.CONNECT:
            return L.intl.string(L.t.S0W8Z2);
        case j.Plq.SPEAK:
            return L.intl.string(L.t['8w1tIS']);
        case j.Plq.MUTE_MEMBERS:
            return L.intl.string(L.t['8EI309']);
        case j.Plq.DEAFEN_MEMBERS:
            return L.intl.string(L.t['9L47Fh']);
        case j.Plq.MOVE_MEMBERS:
            return L.intl.string(L.t.YtjJPT);
        case j.Plq.USE_VAD:
            return L.intl.string(L.t['08zAV1']);
        case j.Plq.PRIORITY_SPEAKER:
            return L.intl.string(L.t.BVK71t);
        case j.Plq.STREAM:
            return L.intl.string(L.t.FlNoSU);
        case j.Plq.REQUEST_TO_SPEAK:
            return L.intl.string(L.t['5kicT0']);
        case j.Plq.CREATE_EVENTS:
            return L.intl.string(L.t.qyjZub);
        case j.Plq.MANAGE_EVENTS:
            return L.intl.string(L.t.HIgA5e);
        case j.Plq.CREATE_PUBLIC_THREADS:
            return L.intl.string(L.t['25rKnZ']);
        case j.Plq.CREATE_PRIVATE_THREADS:
            return L.intl.string(L.t.QwbTSU);
        case j.Plq.SEND_MESSAGES_IN_THREADS:
            return L.intl.string(L.t.fTE74u);
        case j.Plq.MANAGE_THREADS:
            return L.intl.string(L.t.kEqgr6);
        case j.Plq.MODERATE_MEMBERS:
            return L.intl.string(L.t['+RL6p6']);
        case j.Plq.SET_VOICE_CHANNEL_STATUS:
            return L.intl.string(L.t.VBwkUV);
        case j.Plq.SEND_POLLS:
            return L.intl.string(L.t.UMQ7W1);
        case j.Plq.USE_EXTERNAL_APPS:
            return L.intl.string(L.t.TtA5rK);
        case j.Plq.PIN_MESSAGES:
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
                        case j.KFR.GUILD:
                        case j.KFR.GUILD_HOME:
                        case j.KFR.GUILD_PROFILE:
                            return e;
                        case j.KFR.CHANNEL:
                        case j.KFR.CHANNEL_OVERWRITE:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => M.Z.getChannel(A),
                                (A) => (0, c.F6)(A, H.default, p.Z, !0)
                            );
                        case j.KFR.USER:
                            return AH(
                                A,
                                j.zUn.NICK,
                                (A) => H.default.getUser(A),
                                (A) => A
                            );
                        case j.KFR.ROLE:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => I.Z.getRole(e.id, A),
                                (A) => A.name
                            );
                        case j.KFR.ONBOARDING_PROMPT:
                            let t = AH(
                                A,
                                j.zUn.ID,
                                (A) => d.Z.getOnboardingPrompt(A),
                                (A) => A.title
                            );
                            return null == t || '' === t ? L.intl.string(L.t.ZNQyiY) : t;
                        case j.KFR.GUILD_ONBOARDING:
                        case j.KFR.GUILD_MEMBER_VERIFICATION:
                            return e;
                        case j.KFR.INVITE:
                            return AH(A, j.zUn.CODE, j.VqG);
                        case j.KFR.INTEGRATION:
                            return AH(
                                A,
                                j.zUn.TYPE,
                                (A) => V.Z.integrations.find((e) => e.id === A),
                                (A) => A.name
                            );
                        case j.KFR.WEBHOOK:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => V.Z.webhooks.find((e) => e.id === A),
                                (A) => A.name
                            );
                        case j.KFR.EMOJI:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => u.ZP.getGuildEmoji(e.id).find((e) => e.id === A),
                                (A) => A.name
                            );
                        case j.KFR.STICKER:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => w.Z.getStickerById(A),
                                (A) => A.name
                            );
                        case j.KFR.STAGE_INSTANCE:
                            return AH(
                                A,
                                j.zUn.TOPIC,
                                (A) => {
                                    var t;
                                    return null == (t = Object.values(B.Z.getStageInstancesByGuild(e.id))) ? void 0 : t.find((e) => e.id === A);
                                },
                                (A) => A.topic
                            );
                        case j.KFR.GUILD_SCHEDULED_EVENT:
                        case j.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => V.Z.guildScheduledEvents.find((e) => e.id === A),
                                (A) => A.name
                            );
                        case j.KFR.THREAD:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => V.Z.threads.find((e) => e.id === A),
                                (A) => A.name
                            );
                        case j.KFR.APPLICATION_COMMAND:
                            if (A.targetId === A.options.application_id) {
                                let e = V.Z.integrations.find((e) => {
                                    var t;
                                    return (null == (t = e.application) ? void 0 : t.id) === A.targetId;
                                });
                                if (null != e) return e.name;
                                return A.targetId;
                            }
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => V.Z.applicationCommands.find((e) => e.id === A),
                                (A) => {
                                    let e = null != A.name_localized && '' !== A.name_localized ? A.name_localized : A.name;
                                    return A.type === f.yU.CHAT ? '/\u2060'.concat(e) : e;
                                }
                            );
                        case j.KFR.AUTO_MODERATION_RULE:
                            return AH(
                                A,
                                j.zUn.NAME,
                                (A) => V.Z.automodRules.find((e) => e.id === A),
                                (A) => A.name
                            );
                        case j.KFR.GUILD_SOUNDBOARD:
                            return AH(A, j.zUn.NAME, j.VqG);
                        case j.KFR.HOME_SETTINGS:
                            return AH(
                                A,
                                j.zUn.GUILD_ID,
                                (A) => C.Z.getSettings(A),
                                () => L.intl.string(L.t.VbpLyc),
                                e.id
                            );
                        case j.KFR.VOICE_CHANNEL_STATUS:
                            return AH(
                                A,
                                j.zUn.STATUS,
                                (A) => M.Z.getChannel(A),
                                (A) => (0, c.F6)(A, H.default, p.Z, !0)
                            );
                        default:
                            return (N.warn('Unknown targetType for log', A), null);
                    }
                })(A, e),
                l = H.default.getUser(A.userId);
            if (null != n || [j.rsA.MEMBER_PRUNE, j.rsA.MEMBER_DISCONNECT, j.rsA.MEMBER_MOVE, j.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, j.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(A.action)) {
                if (
                    null !=
                    (A = (A = (A = A.set('user', l)).set('target', n)).set(
                        'options',
                        (function (A) {
                            if (null != A.options) {
                                let t = x({}, A.options);
                                switch (A.options.type) {
                                    case j.jwA.USER:
                                        t.subtarget = Ab(
                                            A.options.id,
                                            (A) => H.default.getUser(A),
                                            (A) => A.tag
                                        );
                                        break;
                                    case j.jwA.ROLE:
                                        t.subtarget = Ab(A.options.role_name, j.VqG);
                                }
                                if (
                                    (null != A.options.channel_id &&
                                        (t.channel = AH(
                                            A,
                                            '',
                                            (A) => M.Z.getChannel(A),
                                            (A) => A,
                                            A.options.channel_id
                                        )),
                                    null != A.options.members_removed && 0 !== A.options.members_removed && (t.count = A.options.members_removed),
                                    null != A.options.event_exception_id)
                                ) {
                                    var e;
                                    let n = V.Z.guildScheduledEvents.find((e) => e.id === A.targetId),
                                        r = null == n ? void 0 : n.guild_scheduled_event_exceptions.find((e) => e.event_exception_id === A.options.event_exception_id);
                                    t.subtarget = (0, b.vc)(i()(P.default.extractTimestamp(null != (e = null == r ? void 0 : r.event_exception_id) ? e : '0')), 'LL');
                                }
                                return t;
                            }
                            return A.options;
                        })(A)
                    )).changes
                ) {
                    let t = [];
                    (A.changes.forEach((n) => {
                        let l = (function (A, e, t) {
                            if (e.action === j.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let e = A.newValue || A.oldValue;
                                switch (e.type) {
                                    case j.ecB.ROLE:
                                        A.subtarget = Ab(
                                            e.id,
                                            (A) => I.Z.getRole(t.id, A),
                                            (A) => A.name
                                        );
                                        break;
                                    case j.ecB.USER:
                                        A.subtarget = Ab(
                                            e.id,
                                            (A) => H.default.getUser(A),
                                            (A) => A.tag
                                        );
                                        break;
                                    case j.ecB.CHANNEL:
                                        e.id === r()(t.id).subtract(1).toString()
                                            ? (A.subtarget = L.intl.string(L.t.MSYhgo))
                                            : (A.subtarget = Ab(
                                                  e.id,
                                                  (A) => M.Z.getChannel(A),
                                                  (A) => (0, c.F6)(A, H.default, p.Z, !0)
                                              ));
                                }
                                return A;
                            }
                            switch (A.key) {
                                case j.zUn.OWNER_ID:
                                    return Ap(A, (A) => H.default.getUser(A));
                                case j.zUn.CHANNEL_ID:
                                case j.zUn.AFK_CHANNEL_ID:
                                case j.zUn.SYSTEM_CHANNEL_ID:
                                case j.zUn.RULES_CHANNEL_ID:
                                case j.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return Ap(
                                        A,
                                        (A) => M.Z.getChannel(A),
                                        (A) => (0, c.F6)(A, H.default, p.Z, !0)
                                    );
                                case j.zUn.AFK_TIMEOUT:
                                    return Ap(A, (A) => A / 60);
                                case j.zUn.BITRATE:
                                    return Ap(A, (A) => A / 1000);
                                case j.zUn.COLOR:
                                    return Ap(A, (A) => (0, g.Rf)(A).toUpperCase());
                                case j.zUn.THEME_COLORS:
                                    return Ap(A, (A) => ''.concat((0, g.Rf)(A[0]).toUpperCase(), ', ').concat((0, g.Rf)(A[1]).toUpperCase()));
                                case j.zUn.MAX_AGE:
                                    return Ap(A, (A) => {
                                        let e = O.ZP.getMaxAgeOptions.find((e) => {
                                            let { value: t } = e;
                                            return A === t;
                                        });
                                        return e ? e.label : A;
                                    });
                                case j.zUn.PERMISSIONS: {
                                    let e = [],
                                        { added: t, removed: n } = AM(A.oldValue, A.newValue);
                                    if (t.length > 0) {
                                        let A = new D.ms(j.zUn.PERMISSIONS_GRANTED, null, t);
                                        e.push(A);
                                    }
                                    if (n.length > 0) {
                                        let A = new D.ms(j.zUn.PERMISSIONS_DENIED, null, n);
                                        e.push(A);
                                    }
                                    return e;
                                }
                                case j.zUn.PERMISSIONS_GRANTED:
                                case j.zUn.PERMISSIONS_DENIED: {
                                    let e = [],
                                        { added: t, removed: n } = AM(A.oldValue, A.newValue);
                                    if (t.length > 0) {
                                        let n = new D.ms(A.key, null, t);
                                        e.push(n);
                                    }
                                    if (n.length > 0) {
                                        let A = new D.ms(j.zUn.PERMISSIONS_RESET, n, n);
                                        e.push(A);
                                    }
                                    return e;
                                }
                                case j.zUn.FLAGS: {
                                    let e = [],
                                        { added: t, removed: n } = (function (A, e) {
                                            let t = 'number' == typeof A ? A : 0,
                                                n = 'number' == typeof e ? e : 0,
                                                r = Q.Ge(n, t),
                                                l = Q.Ge(t, n),
                                                i = [],
                                                s = [];
                                            for (let A in T.zZ) {
                                                let e = T.zZ[A];
                                                (Q.yE(r, e) && i.push(e), Q.yE(l, e) && s.push(e));
                                            }
                                            return {
                                                added: i,
                                                removed: s
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
                                case j.zUn.PREFERRED_LOCALE:
                                    return Ap(A, (A) => {
                                        let e = (0, L.getAvailableLocales)().find((e) => e.value === A);
                                        return null != e ? e.name : null;
                                    });
                                case j.zUn.VIDEO_QUALITY_MODE:
                                    return Ap(A, (A) => (A === j.Ucd.FULL ? L.intl.string(L.t['7jOoJC']) : L.intl.string(L.t.jjKYpq)));
                                case j.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let n = {
                                            [j.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: j.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [j.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: j.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [j.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: j.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [j.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: j.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                        },
                                        l = [];
                                    return (
                                        Object.values(j.xmn).forEach((e) => {
                                            let t = (A.oldValue & e) === e,
                                                r = (A.newValue & e) === e;
                                            if (t === r) return;
                                            let i = new D.ms(n[e], !t, !r);
                                            l.push(i);
                                        }),
                                        l
                                    );
                                case j.zUn.AUTO_MODERATION_ACTIONS:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE)
                                        return Ap(
                                            A,
                                            (A) => A.map((A) => A.type),
                                            (A) => A.map(E.ZF).join(', ')
                                        );
                                    break;
                                case j.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return Ap(A, E.YN);
                                    break;
                                case j.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return Ap(A, E.Ar);
                                    break;
                                case j.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return Ap(A, (A) => (null != A && 'object' == typeof A ? (null != A.keyword_filter && Array.isArray(A.keyword_filter) ? L.intl.formatToMarkdownString(L.t.y91UXV, { newValue: A.keyword_filter.map((A) => "'".concat(A, "'")).join(', ') }) : JSON.stringify(A)) : A));
                                    break;
                                case j.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case j.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case j.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case j.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case j.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case j.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return Ap(A, (A) => (null != A && Array.isArray(A) ? A.map((A) => "'".concat(A, "'")).join(', ') : JSON.stringify(A)));
                                    break;
                                case j.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE)
                                        return Ap(
                                            A,
                                            (A) =>
                                                A.map(M.Z.getChannel)
                                                    .filter((A) => null != A)
                                                    .map((A) => (0, c.F6)(A, H.default, p.Z, !0)),
                                            (A) => (null != A && A.length > 0 ? A.join(', ') : L.intl.string(L.t['K/EdV1']))
                                        );
                                    break;
                                case j.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (e.targetType === j.KFR.AUTO_MODERATION_RULE)
                                        return Ap(
                                            A,
                                            (A) =>
                                                A.map((A) => I.Z.getRole(t.id, A))
                                                    .filter((A) => null != A)
                                                    .map((A) => A.name),
                                            (A) => (null != A && A.length > 0 ? A.join(', ') : L.intl.string(L.t['K/EdV1']))
                                        );
                                    break;
                                case j.zUn.AVAILABLE_TAGS:
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
                                            for (let A in i) if (null == l[A]) return new D.ms(j.zUn.AVAILABLE_TAG_ADD, null, AI(i[A]));
                                        }
                                        if (n.length > r.length) {
                                            for (let A in l) if (null == i[A]) return new D.ms(j.zUn.AVAILABLE_TAG_DELETE, null, AI(l[A]));
                                        }
                                        for (let A in l) {
                                            let e = l[A],
                                                t = i[A];
                                            if ((null == t ? void 0 : t.name) !== e.name || (null == t ? void 0 : t.emoji_id) !== e.emoji_id || (null == t ? void 0 : t.emoji_name) !== e.emoji_name) return new D.ms(j.zUn.AVAILABLE_TAG_EDIT, AI(e), AI(t));
                                        }
                                        return A;
                                    })(A);
                                case j.zUn.SCHEDULED_START_TIME:
                                case j.zUn.SCHEDULED_END_TIME:
                                    return Ap(A, (A) => (0, b.vc)(i()(new Date(A)), 'LLLL'));
                            }
                            return A;
                        })(n, A, e);
                        Array.isArray(l) ? l.forEach((A) => t.push(A)) : t.push(l);
                    }),
                        (A = A.set('changes', t)));
                }
                t.push(A);
            }
        }),
        t
    );
}
function AM(A, e) {
    let t = o.vB('string' == typeof A ? A : 0),
        n = o.vB('string' == typeof e ? e : 0),
        r = o.Od(n, t),
        l = o.Od(t, n),
        i = [],
        s = [];
    for (let A in j.Plq) {
        let e = j.Plq[A];
        (o.e$(r, e) && i.push(e), o.e$(l, e) && s.push(e));
    }
    return {
        added: i,
        removed: s
    };
}
function AI(A) {
    return null == A
        ? null
        : {
              id: A.id,
              name: A.name,
              emojiId: 0 !== A.emoji_id ? A.emoji_id : void 0,
              emojiName: A.emoji_name,
              moderated: A.moderated
          };
}
function Ap(A, e, t) {
    let n = A.newValue,
        r = A.oldValue;
    return (null != A.newValue && ((n = e(A.newValue)), null != t && null != n && (n = t(n))), null != A.oldValue && ((r = e(A.oldValue)), null != t && null != r && (r = t(r))), new D.ms(A.key, r || A.oldValue, n || A.newValue));
}
function AH(A, e, t, n, r) {
    let l = null,
        i = t((r = null != r ? r : A.targetId));
    if ((null != i && null != n && (l = n(i)), null == l)) {
        let e = V.Z.deletedTargets[A.targetType];
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
    return (null != r && null != t && (n = t(r)), n);
}
function AQ(A, e) {
    return (t) => (null == t.oldValue ? A : e);
}
function AO(A, e) {
    return (t) => (null == t.newValue ? A : e);
}
function AP(A, e, t, n) {
    return (r) => (null != r.newValue && null != r.oldValue ? A : null != r.newValue ? e : null != r.oldValue ? t : n);
}
function AV(A, e) {
    return (t) => (t.newValue ? A : e);
}
function Aj(A) {
    return (e) => A[e.newValue];
}
function AT(A, e) {
    return (t) => {
        var n;
        return null != (n = A[t.newValue]) ? n : e;
    };
}
