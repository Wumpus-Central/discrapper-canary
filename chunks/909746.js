n.d(t, {
    Bq: () => J,
    C0: () => ea,
    C2: () => $,
    EN: () => K,
    F1: () => eo,
    HE: () => V,
    HN: () => q,
    Iv: () => eE,
    J5: () => eT,
    JA: () => ei,
    K: () => Q,
    ML: () => z,
    N$: () => X,
    N5: () => eN,
    QM: () => eA,
    V$: () => ec,
    _$: () => eR,
    cT: () => eO,
    em: () => eI,
    hQ: () => eg,
    hx: () => Z,
    lR: () => Y,
    lU: () => k,
    nm: () => e_,
    oD: () => H,
    pA: () => en,
    pY: () => w,
    pi: () => et,
    rK: () => el,
    uB: () => ee,
    vc: () => es,
    vm: () => er
}),
    n(411104),
    n(653041),
    n(26686);
var r = n(654861),
    l = n.n(r),
    a = n(913527),
    i = n.n(a),
    o = n(536402),
    s = n(533800),
    E = n(149765),
    c = n(866442),
    u = n(379649),
    _ = n(911969),
    d = n(933557),
    A = n(710845),
    T = n(339085),
    N = n(236413),
    I = n(45966),
    O = n(563534),
    g = n(427679),
    R = n(926491),
    f = n(387667),
    S = n(592125),
    p = n(430824),
    U = n(699516),
    C = n(594174),
    D = n(55935),
    L = n(630388),
    h = n(971130),
    m = n(709054),
    M = n(987707),
    v = n(981631),
    b = n(176505),
    P = n(273504),
    x = n(765305),
    y = n(388032);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let F = new A.Z('AuditLogUtils'),
    W = [u.J6.DAYS, u.J6.HOURS, u.J6.MINUTES, u.J6.SECONDS],
    B = () => ({ [v.zUn.REASON]: () => y.t['2IW3Cw'] }),
    w = () =>
        j(
            {
                [v.zUn.NAME]: () => y.t.CkDiND,
                [v.zUn.DESCRIPTION]: eL(y.t.RP3Ey8, y.t.QAVj1d),
                [v.zUn.ICON_HASH]: () => y.t.iLZ8Q0,
                [v.zUn.SPLASH_HASH]: () => y.t['4VV6dn'],
                [v.zUn.DISCOVERY_SPLASH_HASH]: () => y.t['2pds6u'],
                [v.zUn.BANNER_HASH]: eL(y.t.Cxq4zM, y.t['H7eE//']),
                [v.zUn.OWNER_ID]: () => y.t['8ltsLS'],
                [v.zUn.REGION]: () => y.t.X9r5KS,
                [v.zUn.PREFERRED_LOCALE]: () => y.t.UnXuDQ,
                [v.zUn.AFK_CHANNEL_ID]: eL(y.t.ClBuAw, y.t['ms+xtL']),
                [v.zUn.AFK_TIMEOUT]: () => y.t.q21fHR,
                [v.zUn.SYSTEM_CHANNEL_ID]: eL(y.t.H1VXaW, y.t.XhtmxM),
                [v.zUn.RULES_CHANNEL_ID]: eL(y.t.OI6MGx, y.t.lik3tL),
                [v.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eL(y.t.YxBKra, y.t.Ehsnio),
                [v.zUn.MFA_LEVEL]: eM({
                    [v.BpS.NONE]: y.t.voaCCQ,
                    [v.BpS.ELEVATED]: y.t.pRNVw8
                }),
                [v.zUn.WIDGET_ENABLED]: em(y.t.ADIty8, y.t.nf58VV),
                [v.zUn.WIDGET_CHANNEL_ID]: eL(y.t['6SBsDQ'], y.t.deQ5wM),
                [v.zUn.VERIFICATION_LEVEL]: eM({
                    [v.sFg.NONE]: y.t.W27rsb,
                    [v.sFg.LOW]: y.t['V8P+Pz'],
                    [v.sFg.MEDIUM]: y.t.ERQFam,
                    [v.sFg.HIGH]: y.t['83fN0t'],
                    [v.sFg.VERY_HIGH]: y.t.PnkQJC
                }),
                [v.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eM({
                    [v.bL.ALL_MESSAGES]: y.t.LDi76O,
                    [v.bL.ONLY_MENTIONS]: y.t['6K83bW']
                }),
                [v.zUn.VANITY_URL_CODE]: eL(y.t.Zplsoq, y.t.u6cArq),
                [v.zUn.EXPLICIT_CONTENT_FILTER]: eM({
                    [v.lxg.DISABLED]: y.t.fmOeLy,
                    [v.lxg.MEMBERS_WITHOUT_ROLES]: y.t['4FghY2'],
                    [v.lxg.ALL_MEMBERS]: y.t.olyrSk
                }),
                [v.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: em(y.t.rBT0sr, y.t['gc+te3']),
                [v.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => y.t.YbouFB,
                [v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => y.t.g3DMjI,
                [v.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => y.t['+fQAen'],
                [v.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => y.t.E1fc4u,
                [v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => y.t.XbwtSE
            },
            B()
        ),
    z = () => ({
        [v.zUn.NAME]: eD(y.t.f8Rh0d, y.t.ebD4Qk),
        [v.zUn.POSITION]: eD(y.t.isS8tb, y.t.t5uBio),
        [v.zUn.TOPIC]: eh(y.t.esQcxs, y.t['m+veAg'], y.t['ws/1FB']),
        [v.zUn.BITRATE]: eD(y.t.fw81am, y.t.MFNlgY),
        [v.zUn.RTC_REGION_OVERRIDE]: eh(y.t['6kajx8'], y.t.eGOlmZ, y.t['0JMZd3']),
        [v.zUn.USER_LIMIT]: eD(y.t.wk5t7u, y.t.XgjCEh),
        [v.zUn.RATE_LIMIT_PER_USER]: eD(y.t['7lirhI'], y.t.j4CCJS),
        [v.zUn.PERMISSIONS_RESET]: () => y.t['+vSBFR'],
        [v.zUn.PERMISSIONS_GRANTED]: () => y.t.EKLJv7,
        [v.zUn.PERMISSIONS_DENIED]: () => y.t.U3rO5e,
        [v.zUn.REASON]: () => y.t['2IW3Cw'],
        [v.zUn.NSFW]: em(y.t.H8Ri2d, y.t.WW6cJy),
        [v.zUn.TYPE]: eD(y.t.Vn5zn5, y.t.aq4uWF),
        [v.zUn.VIDEO_QUALITY_MODE]: eD(y.t.e68fAQ, y.t.djbES0),
        [v.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(y.t.nYz2mp, y.t.oczvRE),
        [v.zUn.FLAGS]: () => y.t.ImCQkp,
        [v.zUn.AVAILABLE_TAG_ADD]: () => y.t.H86QQU,
        [v.zUn.AVAILABLE_TAG_EDIT]: () => y.t.YtUzlp,
        [v.zUn.AVAILABLE_TAG_DELETE]: () => y.t['8QOsen'],
        [v.zUn.LINKED_LOBBY]: eL(y.t['+/3TkJ'], y.t['5kDYS0'])
    }),
    k = () =>
        j(
            {
                [v.zUn.NICK]: eh(y.t.qXDsHh, y.t['m+qur6'], y.t.DvLvjI),
                [v.zUn.DEAF]: em(y.t.mArLlZ, y.t.ddvVYG),
                [v.zUn.MUTE]: em(y.t['bxs/lZ'], y.t.FjecQE),
                [v.zUn.ROLES_REMOVE]: () => y.t['+2SDWV'],
                [v.zUn.ROLES_ADD]: () => y.t['B3/3IC'],
                [v.zUn.PRUNE_DELETE_DAYS]: () => y.t['+Cvc+P'],
                [v.zUn.COMMUNICATION_DISABLED_UNTIL]: eh(y.t.LXTQr6, y.t.LXTQr6, y.t.ULSdnJ),
                [v.zUn.BYPASSES_VERIFICATION]: em(y.t.NBPBur, y.t.zATosr),
                [v.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => y.t.YbouFB
            },
            B()
        ),
    V = () =>
        j(
            {
                [v.zUn.NAME]: eD(y.t.QBmlaG, y.t.Lfs4r6),
                [v.zUn.DESCRIPTION]: eD(y.t.XeYKWF, y.t.PSfeIi),
                [v.zUn.PERMISSIONS_GRANTED]: () => y.t['9i/DvL'],
                [v.zUn.PERMISSIONS_DENIED]: () => y.t.pa1ZVl,
                [v.zUn.COLOR]: ev({ '#000000': y.t.TK6E1N }, y.t['2FQFi4']),
                [v.zUn.HOIST]: em(y.t.gWfe29, y.t['+tb8kJ']),
                [v.zUn.MENTIONABLE]: em(y.t.LL8VFB, y.t.Z7xzmJ),
                [v.zUn.ICON_HASH]: () => y.t['iEE79/'],
                [v.zUn.UNICODE_EMOJI]: () => y.t.KiLMMz
            },
            B()
        ),
    H = () =>
        G(j({}, B()), {
            [v.zUn.TITLE]: eD(y.t.sNpuy8, y.t['3Ukc/v']),
            [v.zUn.DESCRIPTION]: eD(y.t.PP1q09, y.t.z7pYLi),
            [v.zUn.OPTIONS]: () => y.t['3G5C9/'],
            [v.zUn.SINGLE_SELECT]: em(y.t.v4WnR0, y.t['6Qg3uL']),
            [v.zUn.REQUIRED]: em(y.t['0MPAMz'], y.t.pwsXio)
        }),
    K = () =>
        G(j({}, B()), {
            [v.zUn.DEFAULT_CHANNEL_IDS]: () => y.t['8M+D2t'],
            [v.zUn.ENABLE_DEFAULT_CHANNELS]: em(y.t['EYd/lp'], y.t['36OZeX']),
            [v.zUn.ENABLE_ONBOARDING_PROMPTS]: em(y.t.V3u8PT, y.t.r66lc3),
            [v.zUn.ENABLED]: em(y.t.SODVIi, y.t.u8HY5e)
        }),
    Z = () =>
        G(j({}, B()), {
            [v.zUn.WELCOME_MESSAGE]: () => y.t.dKQ1xc,
            [v.zUn.NEW_MEMBER_ACTIONS]: () => y.t.jDUInp,
            [v.zUn.RESOURCE_CHANNELS]: () => y.t.SIX0mp
        }),
    q = () =>
        j(
            {
                [v.zUn.CODE]: () => y.t.rrRHgY,
                [v.zUn.CHANNEL_ID]: () => y.t.Q1vd5u,
                [v.zUn.MAX_USES]: ev({ 0: y.t.Yx8LNj }, y.t['3ygnwc']),
                [v.zUn.MAX_AGE]: ev({ [y.NW.string(y.t.PqEzn5)]: y.t.uWrLv7 }, y.t['Q+5kcH']),
                [v.zUn.TEMPORARY]: em(y.t.MWp6Hx, y.t.omiqTE),
                [v.zUn.FLAGS]: eM({ [s.$.IS_GUEST_INVITE]: y.t.XYZMbG })
            },
            B()
        ),
    Y = () => ({
        [v.zUn.CHANNEL_ID]: eD(y.t.jhPpra, y.t.ar4qYG),
        [v.zUn.NAME]: eD(y.t.ZVGrzc, y.t.tywdZW),
        [v.zUn.AVATAR_HASH]: () => y.t.KB52Ul,
        [v.zUn.REASON]: () => y.t['2IW3Cw']
    }),
    X = () => j({ [v.zUn.NAME]: eD(y.t.ahU1o6, y.t['wxs+vb']) }, B()),
    J = () =>
        j(
            {
                [v.zUn.NAME]: eD(y.t.cdl0Ym, y.t.o3W2l5),
                [v.zUn.TAGS]: eD(y.t['zwL+S0'], y.t.VYfKAw),
                [v.zUn.DESCRIPTION]: eD(y.t.XeYKWF, y.t.PSfeIi)
            },
            B()
        ),
    Q = () =>
        j(
            {
                [v.zUn.ENABLE_EMOTICONS]: em(y.t['FI0m5+'], y.t.olpKCw),
                [v.zUn.EXPIRE_BEHAVIOR]: eM({
                    0: y.t['1Bb1+v'],
                    1: y.t.vjlW6u
                }),
                [v.zUn.EXPIRE_GRACE_PERIOD]: () => y.t.iovXMT
            },
            B()
        ),
    $ = () =>
        j(
            {
                [v.zUn.TOPIC]: eD(y.t['m+veAg'], y.t.esQcxs),
                [v.zUn.PRIVACY_LEVEL]: eM({
                    [x.j8.GUILD_ONLY]: y.t['EC+CDg'],
                    [x.j8.PUBLIC]: y.t['pK/WGx']
                })
            },
            B()
        ),
    ee = () =>
        j(
            {
                [v.zUn.NAME]: () => y.t['21EXHR'],
                [v.zUn.DESCRIPTION]: () => y.t.Vm1of3,
                [v.zUn.PRIVACY_LEVEL]: eM({
                    [x.j8.GUILD_ONLY]: y.t['EC+CDg'],
                    [x.j8.PUBLIC]: y.t['pK/WGx']
                }),
                [v.zUn.STATUS]: eM({
                    [x.p1.SCHEDULED]: y.t.hXKDgo,
                    [x.p1.ACTIVE]: y.t.lRX1n5,
                    [x.p1.COMPLETED]: y.t['/eFIho'],
                    [x.p1.CANCELED]: y.t.NWIYho
                }),
                [v.zUn.ENTITY_TYPE]: eM({
                    [x.WX.NONE]: y.t['6sO3Sk'],
                    [x.WX.STAGE_INSTANCE]: y.t['Wo+s19'],
                    [x.WX.VOICE]: y.t.XCVaIC,
                    [x.WX.EXTERNAL]: y.t.IvhAj4
                }),
                [v.zUn.CHANNEL_ID]: eL(y.t.yJBIcX, y.t['+PqSsr']),
                [v.zUn.LOCATION]: eL(y.t.GaMBHx, y.t.PsICk5),
                [v.zUn.IMAGE_HASH]: eL(y.t.S3vcRE, y.t.KQu47O)
            },
            B()
        ),
    et = () =>
        j(
            {
                [v.zUn.SCHEDULED_START_TIME]: eL(y.t.zMIYVl, y.t.fzF8GR),
                [v.zUn.SCHEDULED_END_TIME]: eL(y.t.vONSQE, y.t.IlIti4),
                [v.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return y.t['7RkicX'];
                        if (e.oldValue && !e.newValue) return y.t.dRNTWV;
                    }
                }
            },
            B()
        ),
    en = () =>
        j(
            {
                [v.zUn.NAME]: eD(y.t.tUKRzc, y.t.kPCHOD),
                [v.zUn.ARCHIVED]: em(y.t.jDi9FB, y.t.F6dvbW),
                [v.zUn.LOCKED]: em(y.t.JSy1QU, y.t.C7Jgo6),
                [v.zUn.INVITABLE]: em(y.t.dxNUs7, y.t.biJvYG),
                [v.zUn.AUTO_ARCHIVE_DURATION]: eD(y.t.LuaG39, y.t['18d9qq']),
                [v.zUn.RATE_LIMIT_PER_USER]: eD(y.t['7lirhI'], y.t.j4CCJS),
                [v.zUn.FLAGS]: () => y.t.sSAQtr
            },
            B()
        ),
    er = (e) => {
        let t = j({}, B());
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (t[e.key] = () => y.t['JH+89P']) : (t[e.key] = () => y.t.HUrFDg)) : (t[e.key] = () => y.t.vynxnZ);
                }),
            t
        );
    },
    el = () =>
        j(
            {
                [v.zUn.NAME]: () => y.t.XwxAJS,
                [v.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => y.t.fx0pys,
                [v.zUn.AUTO_MODERATION_EVENT_TYPE]: () => y.t['46Y+Ly'],
                [v.zUn.AUTO_MODERATION_ACTIONS]: () => y.t['8efxfn'],
                [v.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null !== (t = e.newValue) && void 0 !== t ? t : e.oldValue) ? y.t.fCmxCw : y.t.Wrg9Ji;
                },
                [v.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => y.t.TRb7Nz,
                [v.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => y.t.mzitLC,
                [v.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => y.t['h/lM6+'],
                [v.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => y.t['9V2yaG'],
                [v.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => y.t['4Qe9n5'],
                [v.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => y.t.GyZtxs,
                [v.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => y.t.OQDadX,
                [v.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => y.t['FvvR+P'],
                [v.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => y.t.p5nSv7
            },
            B()
        ),
    ea = () =>
        j(
            {
                [v.zUn.NAME]: eD(y.t.VOtRSE, y.t.OK7B8P),
                [v.zUn.VOLUME]: eD(y.t.igrDBw, y.t.L5lDFB),
                [v.zUn.EMOJI_NAME]: eh(y.t.IIanaW, y.t.z4w4U1, y.t.V8Tfyc),
                [v.zUn.EMOJI_ID]: eh(y.t.ainxMD, y.t['2NPsYm'], y.t['8crtnp'])
            },
            B()
        ),
    ei = () =>
        j(
            {
                [v.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? y.t.fnkzDQ : y.t.WYT6kZ),
                [v.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? y.t.jzSvVV : y.t.WxyOtr)
            },
            B()
        ),
    eo = () => j({ [v.zUn.STATUS]: () => y.t.HyCSnJ }, B()),
    es = {
        [v.KFR.CHANNEL]: {
            [v.zUn.ID]: !0,
            [v.zUn.PERMISSION_OVERWRITES]: !0
        },
        [v.KFR.CHANNEL_OVERWRITE]: {
            [v.zUn.TYPE]: !0,
            [v.zUn.ID]: !0,
            [v.zUn.PERMISSION_OVERWRITES]: !0
        },
        [v.KFR.INVITE]: {
            [v.zUn.INVITER_ID]: !0,
            [v.zUn.USES]: !0
        },
        [v.KFR.WEBHOOK]: {
            [v.zUn.TYPE]: !0,
            [v.zUn.APPLICATION_ID]: !0
        },
        [v.KFR.INTEGRATION]: { [v.zUn.TYPE]: !0 },
        [v.KFR.THREAD]: {
            [v.zUn.ID]: !0,
            [v.zUn.TYPE]: !0
        },
        [v.KFR.STICKER]: {
            [v.zUn.ID]: !0,
            [v.zUn.TYPE]: !0,
            [v.zUn.ASSET]: !0,
            [v.zUn.FORMAT_TYPE]: !0,
            [v.zUn.AVAILABLE]: !0,
            [v.zUn.GUILD_ID]: !0
        },
        [v.KFR.GUILD_HOME]: { [v.zUn.ENTITY_TYPE]: !0 },
        [v.KFR.GUILD_ONBOARDING]: { [v.zUn.PROMPTS]: !0 },
        [v.KFR.GUILD_SOUNDBOARD]: {
            [v.zUn.ID]: !0,
            [v.zUn.SOUND_ID]: !0
        }
    },
    eE = () => [
        {
            value: v.rsA.ALL,
            label: y.NW.string(y.t.QxEVcn),
            valueLabel: y.NW.string(y.t.an9Ry8)
        },
        {
            value: v.rsA.GUILD_UPDATE,
            label: y.NW.string(y.t['5INZa2'])
        },
        {
            value: v.rsA.CHANNEL_CREATE,
            label: y.NW.string(y.t['2uh4vL'])
        },
        {
            value: v.rsA.CHANNEL_UPDATE,
            label: y.NW.string(y.t.mGsBLS)
        },
        {
            value: v.rsA.CHANNEL_DELETE,
            label: y.NW.string(y.t.hCHzAg)
        },
        {
            value: v.rsA.CHANNEL_OVERWRITE_CREATE,
            label: y.NW.string(y.t['8TnAMD'])
        },
        {
            value: v.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: y.NW.string(y.t.Jqx0Bg)
        },
        {
            value: v.rsA.CHANNEL_OVERWRITE_DELETE,
            label: y.NW.string(y.t.gBXOr6)
        },
        {
            value: v.rsA.MEMBER_KICK,
            label: y.NW.string(y.t['Q1/hNz'])
        },
        {
            value: v.rsA.MEMBER_PRUNE,
            label: y.NW.string(y.t.tOTTjY)
        },
        {
            value: v.rsA.MEMBER_BAN_ADD,
            label: y.NW.string(y.t['NfPn+f'])
        },
        {
            value: v.rsA.MEMBER_BAN_REMOVE,
            label: y.NW.string(y.t.XCsGfH)
        },
        {
            value: v.rsA.MEMBER_UPDATE,
            label: y.NW.string(y.t['F/jmND'])
        },
        {
            value: v.rsA.MEMBER_ROLE_UPDATE,
            label: y.NW.string(y.t.zAveSE)
        },
        {
            value: v.rsA.MEMBER_MOVE,
            label: y.NW.string(y.t.QshteX)
        },
        {
            value: v.rsA.MEMBER_DISCONNECT,
            label: y.NW.string(y.t.Z45os7)
        },
        {
            value: v.rsA.BOT_ADD,
            label: y.NW.string(y.t.vuH24e)
        },
        {
            value: v.rsA.THREAD_CREATE,
            label: y.NW.string(y.t['+zl0DA'])
        },
        {
            value: v.rsA.THREAD_UPDATE,
            label: y.NW.string(y.t.rbIry8)
        },
        {
            value: v.rsA.THREAD_DELETE,
            label: y.NW.string(y.t.hFjNEB)
        },
        {
            value: v.rsA.ROLE_CREATE,
            label: y.NW.string(y.t.AbxKtr)
        },
        {
            value: v.rsA.ROLE_UPDATE,
            label: y.NW.string(y.t.t3Z6sb)
        },
        {
            value: v.rsA.ROLE_DELETE,
            label: y.NW.string(y.t.YsFpa2)
        },
        {
            value: v.rsA.ONBOARDING_PROMPT_CREATE,
            label: y.NW.string(y.t.ZV9tqa)
        },
        {
            value: v.rsA.ONBOARDING_PROMPT_UPDATE,
            label: y.NW.string(y.t.PcOdvb)
        },
        {
            value: v.rsA.ONBOARDING_PROMPT_DELETE,
            label: y.NW.string(y.t['+r33NT'])
        },
        {
            value: v.rsA.ONBOARDING_CREATE,
            label: y.NW.string(y.t.uDADdX)
        },
        {
            value: v.rsA.ONBOARDING_UPDATE,
            label: y.NW.string(y.t.J1H1ws)
        },
        {
            value: v.rsA.HOME_SETTINGS_CREATE,
            label: y.NW.string(y.t.Di4cvL)
        },
        {
            value: v.rsA.HOME_SETTINGS_UPDATE,
            label: y.NW.string(y.t.tzyrJC)
        },
        {
            value: v.rsA.INVITE_CREATE,
            label: y.NW.string(y.t['0BNJdX'])
        },
        {
            value: v.rsA.INVITE_UPDATE,
            label: y.NW.string(y.t['o++obW'])
        },
        {
            value: v.rsA.INVITE_DELETE,
            label: y.NW.string(y.t.iP40Aw)
        },
        {
            value: v.rsA.WEBHOOK_CREATE,
            label: y.NW.string(y.t['tBF4+f'])
        },
        {
            value: v.rsA.WEBHOOK_UPDATE,
            label: y.NW.string(y.t.eV3McH)
        },
        {
            value: v.rsA.WEBHOOK_DELETE,
            label: y.NW.string(y.t.AAL3Ky)
        },
        {
            value: v.rsA.EMOJI_CREATE,
            label: y.NW.string(y.t.RuWm0d)
        },
        {
            value: v.rsA.EMOJI_UPDATE,
            label: y.NW.string(y.t.WzdUY2)
        },
        {
            value: v.rsA.EMOJI_DELETE,
            label: y.NW.string(y.t.c3dK2N)
        },
        {
            value: v.rsA.MESSAGE_DELETE,
            label: y.NW.string(y.t.daTfXl)
        },
        {
            value: v.rsA.MESSAGE_BULK_DELETE,
            label: y.NW.string(y.t.nrBxen)
        },
        {
            value: v.rsA.MESSAGE_PIN,
            label: y.NW.string(y.t.MUldyM)
        },
        {
            value: v.rsA.MESSAGE_UNPIN,
            label: y.NW.string(y.t.n4zKhI)
        },
        {
            value: v.rsA.INTEGRATION_CREATE,
            label: y.NW.string(y.t['deNm8/'])
        },
        {
            value: v.rsA.INTEGRATION_UPDATE,
            label: y.NW.string(y.t.HT7Sfn)
        },
        {
            value: v.rsA.INTEGRATION_DELETE,
            label: y.NW.string(y.t['+kJ09v'])
        },
        {
            value: v.rsA.STICKER_CREATE,
            label: y.NW.string(y.t['3DzNjY'])
        },
        {
            value: v.rsA.STICKER_UPDATE,
            label: y.NW.string(y.t.tdhW5e)
        },
        {
            value: v.rsA.STICKER_DELETE,
            label: y.NW.string(y.t['+ZhGOj'])
        },
        {
            value: v.rsA.STAGE_INSTANCE_CREATE,
            label: y.NW.string(y.t.sPbjAw)
        },
        {
            value: v.rsA.STAGE_INSTANCE_UPDATE,
            label: y.NW.string(y.t.cW9LfH)
        },
        {
            value: v.rsA.STAGE_INSTANCE_DELETE,
            label: y.NW.string(y.t['U1r+yM'])
        },
        {
            value: v.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: y.NW.string(y.t.H81Zy8)
        },
        {
            value: v.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: y.NW.string(y.t.FM69l5)
        },
        {
            value: v.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: y.NW.string(y.t.Rq28Bg)
        },
        {
            value: v.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: y.NW.string(y.t.iPdFOj)
        },
        {
            value: v.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: y.NW.string(y.t.gNq5z8)
        },
        {
            value: v.rsA.AUTO_MODERATION_RULE_CREATE,
            label: y.NW.string(y.t.f72Zqa)
        },
        {
            value: v.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: y.NW.string(y.t.XeqIio)
        },
        {
            value: v.rsA.AUTO_MODERATION_RULE_DELETE,
            label: y.NW.string(y.t.syAApa)
        },
        {
            value: v.rsA.GUILD_HOME_FEATURE_ITEM,
            label: y.NW.string(y.t.lhG5KC)
        },
        {
            value: v.rsA.GUILD_HOME_REMOVE_ITEM,
            label: y.NW.string(y.t.lRPRwc)
        },
        {
            value: v.rsA.SOUNDBOARD_SOUND_CREATE,
            label: y.NW.string(y.t.yoRi5u)
        },
        {
            value: v.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: y.NW.string(y.t.uKlG0d)
        },
        {
            value: v.rsA.SOUNDBOARD_SOUND_DELETE,
            label: y.NW.string(y.t.gq0iCQ)
        },
        {
            value: v.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: y.NW.string(y.t.rGr0YG)
        },
        {
            value: v.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: y.NW.string(y.t.V9PEQ0)
        }
    ];
function ec(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function eu(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function e_(e) {
    var t;
    let n = eE().find((t) => t.value === e.action);
    return null != ec(v.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? y.NW.string(y.t.z3wbj4) : null !== (t = null == n ? void 0 : n.label) && void 0 !== t ? t : null;
}
let ed = {
    [u.J6.SECONDS]: (e) => y.NW.formatToPlainString(y.t.geSp4O, { seconds: e }),
    [u.J6.MINUTES]: (e) => y.NW.formatToPlainString(y.t.iXLF9f, { minutes: e }),
    [u.J6.HOURS]: (e) => y.NW.formatToPlainString(y.t.xCjYxM, { hours: e }),
    [u.J6.DAYS]: (e) => y.NW.formatToPlainString(y.t.k2UNz8, { days: e })
};
function eA(e) {
    let t = ec(v.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = eu(v.zUn.ROLES_ADD, e).length > 0,
        r = eu(v.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - m.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, u.CI)(r, W);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in ed) {
                let e = l.unit,
                    t = l.unit === u.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return ed[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return y.NW.string(y.t.MA1ltr);
    } else if (n && r) return y.NW.string(y.t.RdMMe3);
    else if (n) return y.NW.string(y.t['4GQqs7']);
    else if (r) return y.NW.string(y.t['8mQ6x8']);
    return null;
}
function eT(e) {
    let t = eu(v.zUn.ROLES_ADD, e),
        n = eu(v.zUn.ROLES_REMOVE, e),
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
                                    .join(', ');
                      })
                      .join(', '),
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
                                    .join(', ');
                      })
                      .join(', ');
    return t.length > 0 && n.length > 0
        ? y.NW.formatToPlainString(y.t.tZw1ER, {
              roleNamesAdded: r,
              roleNamesRemoved: l
          })
        : t.length > 0
          ? y.NW.formatToPlainString(y.t['/mTqt7'], { roleNames: r })
          : n.length > 0
            ? y.NW.formatToPlainString(y.t.Wk4pAA, { roleNames: l })
            : null;
}
function eN(e) {
    switch (e.action) {
        case v.rsA.GUILD_UPDATE:
            return y.t.LjZO39;
        case v.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === v.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case v.d4z.GUILD_STAGE_VOICE:
                    return y.t['OKp4+v'];
                case v.d4z.GUILD_VOICE:
                    return y.t.NPOy4O;
                case v.d4z.GUILD_CATEGORY:
                    return y.t.T3KIj4;
                default:
                    return y.t.wrYNGx;
            }
        case v.rsA.CHANNEL_UPDATE:
            return y.t.nTYk6O;
        case v.rsA.CHANNEL_DELETE:
            return y.t.ynfvkp;
        case v.rsA.CHANNEL_OVERWRITE_CREATE:
            return y.t.l5Cu1d;
        case v.rsA.CHANNEL_OVERWRITE_UPDATE:
            return y.t.uhtbNT;
        case v.rsA.CHANNEL_OVERWRITE_DELETE:
            return y.t['HASt//'];
        case v.rsA.MEMBER_KICK:
            return y.t.B5hDZW;
        case v.rsA.MEMBER_PRUNE:
            return y.t.qKOZTE;
        case v.rsA.MEMBER_BAN_ADD:
            return y.t.XklUm5;
        case v.rsA.MEMBER_BAN_REMOVE:
            return y.t.o3Y6HB;
        case v.rsA.MEMBER_UPDATE:
            return y.t.pznhLC;
        case v.rsA.MEMBER_ROLE_UPDATE:
            return y.t.VngfiY;
        case v.rsA.MEMBER_MOVE:
            return y.t.Yt6NkZ;
        case v.rsA.MEMBER_DISCONNECT:
            return y.t.K4eCZ2;
        case v.rsA.BOT_ADD:
            return y.t.fWvX0N;
        case v.rsA.ROLE_CREATE:
            return y.t.UTLTx8;
        case v.rsA.ROLE_UPDATE:
            return y.t.NRbN19;
        case v.rsA.ROLE_DELETE:
            return y.t['4s63tb'];
        case v.rsA.INVITE_CREATE:
            return y.t.YHOXW1;
        case v.rsA.INVITE_UPDATE:
            return y.t.ja3kGR;
        case v.rsA.INVITE_DELETE:
            return y.t['3n/iWl'];
        case v.rsA.WEBHOOK_CREATE:
            return y.t.MhYhio;
        case v.rsA.WEBHOOK_UPDATE:
            return y.t['6GTlWF'];
        case v.rsA.WEBHOOK_DELETE:
            return y.t.in0VjY;
        case v.rsA.EMOJI_CREATE:
            return y.t['7vekRE'];
        case v.rsA.EMOJI_UPDATE:
            return y.t.IsCKfn;
        case v.rsA.EMOJI_DELETE:
            return y.t.JnUaVF;
        case v.rsA.STICKER_CREATE:
            return y.t.DRZifn;
        case v.rsA.STICKER_UPDATE:
            return y.t.bhujGR;
        case v.rsA.STICKER_DELETE:
            return y.t.rGEP9f;
        case v.rsA.MESSAGE_DELETE:
            return y.t['HPkD+P'];
        case v.rsA.MESSAGE_BULK_DELETE:
            return y.t['3RIvLC'];
        case v.rsA.MESSAGE_PIN:
            return y.t.Yna7Ex;
        case v.rsA.MESSAGE_UNPIN:
            return y.t.NCxXUV;
        case v.rsA.INTEGRATION_CREATE:
            return y.t.HYvCb2;
        case v.rsA.INTEGRATION_UPDATE:
            return y.t.ibCCOT;
        case v.rsA.INTEGRATION_DELETE:
            return y.t['8zScWV'];
        case v.rsA.STAGE_INSTANCE_CREATE:
            return y.t['n7x/DA'];
        case v.rsA.STAGE_INSTANCE_UPDATE:
            return y.t['0hQYU1'];
        case v.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return y.t['Oi/in5'];
            return y.t['7ZIFm5'];
        case v.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return y.t.S7k52t;
        case v.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return y.t.ebTK19;
        case v.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return y.t['/ARPKS'];
        case v.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case v.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return y.t['8qCI39'];
        case v.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return y.t.zYb2dX;
        case v.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === v.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case v.d4z.PRIVATE_THREAD:
                    return y.t['Br0y5+'];
                case v.d4z.ANNOUNCEMENT_THREAD:
                    return y.t['6uaMmJ'];
                default:
                    return y.t['2cxQ7O'];
            }
        case v.rsA.THREAD_UPDATE:
            return y.t.PSsy4u;
        case v.rsA.THREAD_DELETE:
            return y.t.s3Khn5;
        case v.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return y.t.uzCqBg;
        case v.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return y.t.NqWv2N;
        case v.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null === (r = e.options) || void 0 === r ? void 0 : r.auto_moderation_rule_trigger_type) === P.fX.USER_PROFILE.toString()) return y.t.YQsjen;
            return y.t.SD0PwM;
        case v.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return y.t.Vk4Twc;
        case v.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return y.t['/W5u5u'];
        case v.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return y.t.ONvWys;
        case v.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return y.t.ryGLk5;
        case v.rsA.AUTO_MODERATION_RULE_CREATE:
            return y.t.NKljj4;
        case v.rsA.AUTO_MODERATION_RULE_UPDATE:
            return y.t['3wEA9v'];
        case v.rsA.AUTO_MODERATION_RULE_DELETE:
            return y.t.umua3t;
        case v.rsA.ONBOARDING_PROMPT_CREATE:
            return y.t['/8A1g4'];
        case v.rsA.ONBOARDING_PROMPT_UPDATE:
            return y.t.ArIrWF;
        case v.rsA.ONBOARDING_PROMPT_DELETE:
            return y.t.IuBTam;
        case v.rsA.ONBOARDING_CREATE:
            return y.t.wDaq39;
        case v.rsA.ONBOARDING_UPDATE:
            return y.t['yONu/v'];
        case v.rsA.HOME_SETTINGS_CREATE:
            return y.t.dSdCjI;
        case v.rsA.HOME_SETTINGS_UPDATE:
            return y.t.XHE8qq;
        case v.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === v.zUn.ENTITY_TYPE) : null;
            if (null == l) return y.t['UZ+U3N'];
            switch (l.newValue) {
                case o.w.MESSAGE:
                    return y.t['PyEa+P'];
                case o.w.FORUM_POST:
                    return y.t.hCuAb2;
                default:
                    return y.t['UZ+U3N'];
            }
        case v.rsA.GUILD_HOME_REMOVE_ITEM:
            return y.t.kPReur;
        case v.rsA.SOUNDBOARD_SOUND_CREATE:
            return y.t['0PD83d'];
        case v.rsA.SOUNDBOARD_SOUND_UPDATE:
            return y.t.CM8n19;
        case v.rsA.SOUNDBOARD_SOUND_DELETE:
            return y.t['kVz4//'];
        case v.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return y.t.MWjnU1;
        case v.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return y.t.aS8Krq;
        case v.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return y.t.NUKUb2;
        default:
            return null;
    }
}
function eI(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return y.NW.string(y.t['5G8ZDw']);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return y.NW.string(y.t['4YLtzM']);
        case b.zZ.PINNED:
            return y.NW.string(y.t['1QLRYW']);
    }
    return null;
}
function eO(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return y.NW.string(y.t.S5kuWV);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return y.NW.string(y.t['8qpgc3']);
        case b.zZ.PINNED:
            return y.NW.string(y.t.CMweGB);
    }
    return null;
}
function eg(e, t) {
    switch (e) {
        case v.Plq.CREATE_INSTANT_INVITE:
            return y.NW.string(y.t.zJrgTE);
        case v.Plq.KICK_MEMBERS:
            return y.NW.string(y.t.pBNv6u);
        case v.Plq.BAN_MEMBERS:
            return y.NW.string(y.t.oTBA7O);
        case v.Plq.ADMINISTRATOR:
            return y.NW.string(y.t.PGvZqa);
        case v.Plq.MANAGE_CHANNELS:
            if (t.targetType === v.KFR.CHANNEL || t.targetType === v.KFR.CHANNEL_OVERWRITE) return y.NW.string(y.t.nAw15O);
            return y.NW.string(y.t['9qLtWl']);
        case v.Plq.MANAGE_GUILD:
            return y.NW.string(y.t.QZRcfH);
        case v.Plq.VIEW_GUILD_ANALYTICS:
            return y.NW.string(y.t.rQJBEx);
        case v.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return y.NW.string(y.t['0lTLTk']);
        case v.Plq.CHANGE_NICKNAME:
            return y.NW.string(y.t.dilOFx);
        case v.Plq.MANAGE_NICKNAMES:
            return y.NW.string(y.t['t+Ct5+']);
        case v.Plq.MANAGE_ROLES:
            return y.NW.string(y.t['C8d+oK']);
        case v.Plq.MANAGE_WEBHOOKS:
            return y.NW.string(y.t['/ADKmJ']);
        case v.Plq.CREATE_GUILD_EXPRESSIONS:
            return y.NW.string(y.t.HarVuL);
        case v.Plq.MANAGE_GUILD_EXPRESSIONS:
            return y.NW.string(y.t.bbuXIi);
        case v.Plq.VIEW_AUDIT_LOG:
            return y.NW.string(y.t.fZgLpK);
        case v.Plq.VIEW_CHANNEL:
            if (t.targetType === v.KFR.CHANNEL || t.targetType === v.KFR.CHANNEL_OVERWRITE) return y.NW.string(y.t['W/A4Qk']);
            return y.NW.string(y.t.uV83ys);
        case v.Plq.SEND_MESSAGES:
            return y.NW.string(y.t.T32rkJ);
        case v.Plq.SEND_TTS_MESSAGES:
            return y.NW.string(y.t.Mg7bkp);
        case v.Plq.USE_APPLICATION_COMMANDS:
            return y.NW.string(y.t.shbR1d);
        case v.Plq.MANAGE_MESSAGES:
            return y.NW.string(y.t['6lU9xM']);
        case v.Plq.EMBED_LINKS:
            return y.NW.string(y.t['969dEB']);
        case v.Plq.ATTACH_FILES:
            return y.NW.string(y.t['3AS4UF']);
        case v.Plq.READ_MESSAGE_HISTORY:
            return y.NW.string(y.t.l9ufaW);
        case v.Plq.MENTION_EVERYONE:
            return y.NW.string(y.t.Y78KGB);
        case v.Plq.USE_EXTERNAL_EMOJIS:
            return y.NW.string(y.t.BpBGZW);
        case v.Plq.USE_EXTERNAL_STICKERS:
            return y.NW.string(y.t['UeRs+f']);
        case v.Plq.ADD_REACTIONS:
            return y.NW.string(y.t.yEoJAg);
        case v.Plq.CONNECT:
            return y.NW.string(y.t.S0W8Z2);
        case v.Plq.SPEAK:
            return y.NW.string(y.t['8w1tIS']);
        case v.Plq.MUTE_MEMBERS:
            return y.NW.string(y.t['8EI309']);
        case v.Plq.DEAFEN_MEMBERS:
            return y.NW.string(y.t['9L47Fh']);
        case v.Plq.MOVE_MEMBERS:
            return y.NW.string(y.t.YtjJPT);
        case v.Plq.USE_VAD:
            return y.NW.string(y.t['08zAV1']);
        case v.Plq.PRIORITY_SPEAKER:
            return y.NW.string(y.t.BVK71t);
        case v.Plq.STREAM:
            return y.NW.string(y.t.FlNoSU);
        case v.Plq.REQUEST_TO_SPEAK:
            return y.NW.string(y.t['5kicT0']);
        case v.Plq.CREATE_EVENTS:
            return y.NW.string(y.t.qyjZub);
        case v.Plq.MANAGE_EVENTS:
            return y.NW.string(y.t.HIgA5e);
        case v.Plq.CREATE_PUBLIC_THREADS:
            return y.NW.string(y.t['25rKnZ']);
        case v.Plq.CREATE_PRIVATE_THREADS:
            return y.NW.string(y.t.QwbTSU);
        case v.Plq.SEND_MESSAGES_IN_THREADS:
            return y.NW.string(y.t.fTE74u);
        case v.Plq.MANAGE_THREADS:
            return y.NW.string(y.t.kEqgr6);
        case v.Plq.MODERATE_MEMBERS:
            return y.NW.string(y.t['+RL6p6']);
        case v.Plq.USE_CLYDE_AI:
            return y.NW.string(y.t['8eeEZm']);
        case v.Plq.SET_VOICE_CHANNEL_STATUS:
            return y.NW.string(y.t.VBwkUV);
        case v.Plq.SEND_POLLS:
            return y.NW.string(y.t.UMQ7W1);
        case v.Plq.USE_EXTERNAL_APPS:
            return y.NW.string(y.t.TtA5rK);
    }
    return null;
}
function eR(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = (function (e, t) {
                    switch (e.targetType) {
                        case v.KFR.GUILD:
                        case v.KFR.GUILD_HOME:
                            return t;
                        case v.KFR.CHANNEL:
                        case v.KFR.CHANNEL_OVERWRITE:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => S.Z.getChannel(e),
                                (e) => (0, d.F6)(e, C.default, U.Z, !0)
                            );
                        case v.KFR.USER:
                            return eU(
                                e,
                                v.zUn.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e
                            );
                        case v.KFR.ROLE:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => p.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case v.KFR.ONBOARDING_PROMPT:
                            let n = eU(
                                e,
                                v.zUn.ID,
                                (e) => I.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? y.NW.string(y.t.ZNQyiY) : n;
                        case v.KFR.GUILD_ONBOARDING:
                        case v.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case v.KFR.INVITE:
                            return eU(e, v.zUn.CODE, v.VqG);
                        case v.KFR.INTEGRATION:
                            return eU(
                                e,
                                v.zUn.TYPE,
                                (e) => M.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.WEBHOOK:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => M.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.EMOJI:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => T.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.STICKER:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => R.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case v.KFR.STAGE_INSTANCE:
                            return eU(
                                e,
                                v.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null === (n = Object.values(g.Z.getStageInstancesByGuild(t.id))) || void 0 === n ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case v.KFR.GUILD_SCHEDULED_EVENT:
                        case v.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => M.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.THREAD:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => M.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = M.Z.integrations.find((t) => {
                                    var n;
                                    return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => M.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === _.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case v.KFR.AUTO_MODERATION_RULE:
                            return eU(
                                e,
                                v.zUn.NAME,
                                (e) => M.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.GUILD_SOUNDBOARD:
                            return eU(e, v.zUn.NAME, v.VqG);
                        case v.KFR.HOME_SETTINGS:
                            return eU(
                                e,
                                v.zUn.GUILD_ID,
                                (e) => O.Z.getSettings(e),
                                () => y.NW.string(y.t.VbpLyc),
                                t.id
                            );
                        case v.KFR.VOICE_CHANNEL_STATUS:
                            return eU(
                                e,
                                v.zUn.STATUS,
                                (e) => S.Z.getChannel(e),
                                (e) => (0, d.F6)(e, C.default, U.Z, !0)
                            );
                        default:
                            return F.warn('Unknown targetType for log', e), null;
                    }
                })(e, t),
                a = C.default.getUser(e.userId);
            if (null != r || [v.rsA.MEMBER_PRUNE, v.rsA.MEMBER_DISCONNECT, v.rsA.MEMBER_MOVE, v.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, v.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', a)).set('target', r)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let n = j({}, e.options);
                                switch (e.options.type) {
                                    case v.jwA.USER:
                                        n.subtarget = eC(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case v.jwA.ROLE:
                                        n.subtarget = eC(e.options.role_name, v.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = eU(
                                            e,
                                            '',
                                            (e) => S.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let r = M.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find((t) => t.event_exception_id === e.options.event_exception_id);
                                    n.subtarget = (0, D.vc)(i()(m.default.extractTimestamp(null !== (t = null == l ? void 0 : l.event_exception_id) && void 0 !== t ? t : '0')), 'LL');
                                }
                                return n;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let n = [];
                    e.changes.forEach((r) => {
                        let a = (function (e, t, n) {
                            if (t.action === v.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case v.ecB.ROLE:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => p.Z.getRole(n.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case v.ecB.USER:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => C.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case v.ecB.CHANNEL:
                                        t.id === l()(n.id).subtract(1).toString()
                                            ? (e.subtarget = y.NW.string(y.t.MSYhgo))
                                            : (e.subtarget = eC(
                                                  t.id,
                                                  (e) => S.Z.getChannel(e),
                                                  (e) => (0, d.F6)(e, C.default, U.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case v.zUn.OWNER_ID:
                                    return ep(e, (e) => C.default.getUser(e));
                                case v.zUn.CHANNEL_ID:
                                case v.zUn.AFK_CHANNEL_ID:
                                case v.zUn.SYSTEM_CHANNEL_ID:
                                case v.zUn.RULES_CHANNEL_ID:
                                case v.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ep(
                                        e,
                                        (e) => S.Z.getChannel(e),
                                        (e) => (0, d.F6)(e, C.default, U.Z, !0)
                                    );
                                case v.zUn.AFK_TIMEOUT:
                                    return ep(e, (e) => e / 60);
                                case v.zUn.BITRATE:
                                    return ep(e, (e) => e / 1000);
                                case v.zUn.COLOR:
                                    return ep(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case v.zUn.THEME_COLORS:
                                    return ep(e, (e) => ''.concat((0, c.Rf)(e[0]).toUpperCase(), ', ').concat((0, c.Rf)(e[1]).toUpperCase()));
                                case v.zUn.MAX_AGE:
                                    return ep(e, (e) => {
                                        let t = h.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case v.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = ef(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new f.ms(v.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new f.ms(v.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case v.zUn.PERMISSIONS_GRANTED:
                                case v.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = ef(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new f.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new f.ms(v.zUn.PERMISSIONS_RESET, r, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case v.zUn.FLAGS: {
                                    let t = [],
                                        { added: n, removed: r } = (function (e, t) {
                                            let n = 'number' == typeof e ? e : 0,
                                                r = 'number' == typeof t ? t : 0,
                                                l = L.Ge(r, n),
                                                a = L.Ge(n, r),
                                                i = [],
                                                o = [];
                                            for (let e in b.zZ) {
                                                let t = b.zZ[e];
                                                L.yE(l, t) && i.push(t), L.yE(a, t) && o.push(t);
                                            }
                                            return {
                                                added: i,
                                                removed: o
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new f.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let n = new f.ms(e.key, r, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case v.zUn.PREFERRED_LOCALE:
                                    return ep(e, (e) => {
                                        let t = (0, y.u5)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case v.zUn.VIDEO_QUALITY_MODE:
                                    return ep(e, (e) => (e === v.Ucd.FULL ? y.NW.string(y.t['7jOoJC']) : y.NW.string(y.t.jjKYpq)));
                                case v.zUn.SYSTEM_CHANNEL_FLAGS:
                                    return (function (e) {
                                        let t = {
                                                [v.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                [v.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: v.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                [v.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: v.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                [v.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                            },
                                            n = [];
                                        return (
                                            Object.values(v.xmn).forEach((r) => {
                                                let l = (e.oldValue & r) === r,
                                                    a = (e.newValue & r) === r;
                                                if (l === a) return;
                                                let i = new f.ms(t[r], !l, !a);
                                                n.push(i);
                                            }),
                                            n
                                        );
                                    })(e);
                                case v.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.ZF).join(', ')
                                        );
                                    break;
                                case v.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return ep(e, N.YN);
                                    break;
                                case v.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return ep(e, N.Ar);
                                    break;
                                case v.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return ep(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? y.NW.formatToMarkdownString(y.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case v.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case v.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case v.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case v.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case v.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case v.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return ep(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case v.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) =>
                                                e
                                                    .map(S.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, d.F6)(e, C.default, U.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : y.NW.string(y.t['K/EdV1']))
                                        );
                                    break;
                                case v.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => p.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : y.NW.string(y.t['K/EdV1']))
                                        );
                                    break;
                                case v.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: t, newValue: n } = e,
                                            r = Array.isArray(t) ? t : [],
                                            l = Array.isArray(n) ? n : [];
                                        if (0 === r.length && 0 === l.length) return e;
                                        let a = {},
                                            i = {};
                                        if (
                                            (r.forEach((e) => {
                                                a[e.id] = e;
                                            }),
                                            l.forEach((e) => {
                                                i[e.id] = e;
                                            }),
                                            r.length < l.length)
                                        ) {
                                            for (let e in i) if (null == a[e]) return new f.ms(v.zUn.AVAILABLE_TAG_ADD, null, eS(i[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in a) if (null == i[e]) return new f.ms(v.zUn.AVAILABLE_TAG_DELETE, null, eS(a[e]));
                                        }
                                        for (let e in a) {
                                            let t = a[e],
                                                n = i[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new f.ms(v.zUn.AVAILABLE_TAG_EDIT, eS(t), eS(n));
                                        }
                                        return e;
                                    })(e);
                                case v.zUn.SCHEDULED_START_TIME:
                                case v.zUn.SCHEDULED_END_TIME:
                                    return ep(e, (e) => (0, D.vc)(i()(new Date(e)), 'LLLL'));
                            }
                            return e;
                        })(r, e, t);
                        Array.isArray(a) ? a.forEach((e) => n.push(e)) : n.push(a);
                    }),
                        (e = e.set('changes', n));
                }
                n.push(e);
            }
        }),
        n
    );
}
function ef(e, t) {
    let n = E.vB('string' == typeof e ? e : 0),
        r = E.vB('string' == typeof t ? t : 0),
        l = E.Od(r, n),
        a = E.Od(n, r),
        i = [],
        o = [];
    for (let e in v.Plq) {
        let t = v.Plq[e];
        E.e$(l, t) && i.push(t), E.e$(a, t) && o.push(t);
    }
    return {
        added: i,
        removed: o
    };
}
function eS(e) {
    return null == e
        ? null
        : {
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated
          };
}
function ep(e, t, n) {
    let r = e.newValue,
        l = e.oldValue;
    return null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))), null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))), new f.ms(e.key, l || e.oldValue, r || e.newValue);
}
function eU(e, t, n, r, l) {
    let a = null,
        i = n((l = null != l ? l : e.targetId));
    if ((null != i && null != r && (a = r(i)), null == a)) {
        let t = M.Z.deletedTargets[e.targetType];
        null != t && null != t[l] && (a = t[l]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return null != a ? a : l;
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
function eh(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function em(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eM(e) {
    return (t) => e[t.newValue];
}
function ev(e, t) {
    return (n) => {
        var r;
        return null !== (r = e[n.newValue]) && void 0 !== r ? r : t;
    };
}
