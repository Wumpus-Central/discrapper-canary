n.d(t, {
    Bq: () => J,
    C0: () => es,
    C2: () => $,
    EN: () => K,
    F1: () => ei,
    HE: () => V,
    HN: () => Y,
    Iv: () => eu,
    J5: () => eN,
    JA: () => ea,
    K: () => Q,
    ML: () => w,
    N$: () => X,
    N5: () => eI,
    QM: () => eT,
    V$: () => ec,
    _$: () => ef,
    cT: () => eR,
    em: () => eO,
    hQ: () => eg,
    hx: () => Z,
    lR: () => q,
    lU: () => H,
    nm: () => ed,
    oD: () => k,
    pA: () => en,
    pY: () => B,
    pi: () => et,
    rK: () => el,
    uB: () => ee,
    vc: () => eE,
    vm: () => er,
    zT: () => eo
}),
    n(415506),
    n(539854),
    n(49124);
var r = n(654861),
    l = n.n(r),
    s = n(913527),
    a = n.n(s),
    i = n(536402),
    o = n(533800),
    E = n(149765),
    u = n(866442),
    c = n(379649),
    _ = n(911969),
    d = n(933557),
    A = n(710845),
    T = n(339085),
    N = n(236413),
    I = n(45966),
    O = n(563534),
    R = n(427679),
    g = n(926491),
    f = n(387667),
    S = n(592125),
    U = n(430824),
    h = n(699516),
    L = n(594174),
    p = n(55935),
    D = n(630388),
    C = n(971130),
    M = n(709054),
    m = n(987707),
    v = n(981631),
    b = n(176505),
    P = n(273504),
    x = n(765305),
    j = n(388032);
function y(e) {
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
    W = [c.J6.DAYS, c.J6.HOURS, c.J6.MINUTES, c.J6.SECONDS],
    z = () => ({ [v.zUn.REASON]: () => j.t['2IW3Cw'] }),
    B = () =>
        y(
            {
                [v.zUn.NAME]: () => j.t.CkDiND,
                [v.zUn.DESCRIPTION]: eC(j.t.RP3Ey8, j.t.QAVj1d),
                [v.zUn.ICON_HASH]: () => j.t.iLZ8Q0,
                [v.zUn.SPLASH_HASH]: () => j.t['4VV6dn'],
                [v.zUn.DISCOVERY_SPLASH_HASH]: () => j.t['2pds6u'],
                [v.zUn.BANNER_HASH]: eC(j.t.Cxq4zM, j.t['H7eE//']),
                [v.zUn.OWNER_ID]: () => j.t['8ltsLS'],
                [v.zUn.REGION]: () => j.t.X9r5KS,
                [v.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDQ,
                [v.zUn.AFK_CHANNEL_ID]: eC(j.t.ClBuAw, j.t['ms+xtL']),
                [v.zUn.AFK_TIMEOUT]: () => j.t.q21fHR,
                [v.zUn.SYSTEM_CHANNEL_ID]: eC(j.t.H1VXaW, j.t.XhtmxM),
                [v.zUn.RULES_CHANNEL_ID]: eC(j.t.OI6MGx, j.t.lik3tL),
                [v.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eC(j.t.YxBKra, j.t.Ehsnio),
                [v.zUn.MFA_LEVEL]: ev({
                    [v.BpS.NONE]: j.t.voaCCQ,
                    [v.BpS.ELEVATED]: j.t.pRNVw8
                }),
                [v.zUn.WIDGET_ENABLED]: em(j.t.ADIty8, j.t.nf58VV),
                [v.zUn.WIDGET_CHANNEL_ID]: eC(j.t['6SBsDQ'], j.t.deQ5wM),
                [v.zUn.VERIFICATION_LEVEL]: ev({
                    [v.sFg.NONE]: j.t.W27rsb,
                    [v.sFg.LOW]: j.t['V8P+Pz'],
                    [v.sFg.MEDIUM]: j.t.ERQFam,
                    [v.sFg.HIGH]: j.t['83fN0t'],
                    [v.sFg.VERY_HIGH]: j.t.PnkQJC
                }),
                [v.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: ev({
                    [v.bL.ALL_MESSAGES]: j.t.LDi76O,
                    [v.bL.ONLY_MENTIONS]: j.t['6K83bW']
                }),
                [v.zUn.VANITY_URL_CODE]: eC(j.t.Zplsoq, j.t.u6cArq),
                [v.zUn.EXPLICIT_CONTENT_FILTER]: ev({
                    [v.lxg.DISABLED]: j.t.fmOeLy,
                    [v.lxg.MEMBERS_WITHOUT_ROLES]: j.t['4FghY2'],
                    [v.lxg.ALL_MEMBERS]: j.t.olyrSk
                }),
                [v.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: em(j.t.rBT0sr, j.t['gc+te3']),
                [v.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
                [v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjI,
                [v.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t['+fQAen'],
                [v.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4u,
                [v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSE
            },
            z()
        ),
    w = () => ({
        [v.zUn.NAME]: eD(j.t.f8Rh0d, j.t.ebD4Qk),
        [v.zUn.POSITION]: eD(j.t.isS8tb, j.t.t5uBio),
        [v.zUn.TOPIC]: eM(j.t.esQcxs, j.t['m+veAg'], j.t['ws/1FB']),
        [v.zUn.BITRATE]: eD(j.t.fw81am, j.t.MFNlgY),
        [v.zUn.RTC_REGION_OVERRIDE]: eM(j.t['6kajx8'], j.t.eGOlmZ, j.t['0JMZd3']),
        [v.zUn.USER_LIMIT]: eD(j.t.wk5t7u, j.t.XgjCEh),
        [v.zUn.RATE_LIMIT_PER_USER]: eD(j.t['7lirhI'], j.t.j4CCJS),
        [v.zUn.PERMISSIONS_RESET]: () => j.t['+vSBFR'],
        [v.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv7,
        [v.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5e,
        [v.zUn.REASON]: () => j.t['2IW3Cw'],
        [v.zUn.NSFW]: em(j.t.H8Ri2d, j.t.WW6cJy),
        [v.zUn.TYPE]: eD(j.t.Vn5zn5, j.t.aq4uWF),
        [v.zUn.VIDEO_QUALITY_MODE]: eD(j.t.e68fAQ, j.t.djbES0),
        [v.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(j.t.nYz2mp, j.t.oczvRE),
        [v.zUn.FLAGS]: () => j.t.ImCQkp,
        [v.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
        [v.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzlp,
        [v.zUn.AVAILABLE_TAG_DELETE]: () => j.t['8QOsen'],
        [v.zUn.LINKED_LOBBY]: eC(j.t['+/3TkJ'], j.t['5kDYS0'])
    }),
    H = () =>
        y(
            {
                [v.zUn.NICK]: eM(j.t.qXDsHh, j.t['m+qur6'], j.t.DvLvjI),
                [v.zUn.DEAF]: em(j.t.mArLlZ, j.t.ddvVYG),
                [v.zUn.MUTE]: em(j.t['bxs/lZ'], j.t.FjecQE),
                [v.zUn.ROLES_REMOVE]: () => j.t['+2SDWV'],
                [v.zUn.ROLES_ADD]: () => j.t['B3/3IC'],
                [v.zUn.PRUNE_DELETE_DAYS]: () => j.t['+Cvc+P'],
                [v.zUn.COMMUNICATION_DISABLED_UNTIL]: eM(j.t.LXTQr6, j.t.LXTQr6, j.t.ULSdnJ),
                [v.zUn.BYPASSES_VERIFICATION]: em(j.t.NBPBur, j.t.zATosr),
                [v.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB
            },
            z()
        ),
    V = () =>
        y(
            {
                [v.zUn.NAME]: eD(j.t.QBmlaG, j.t.Lfs4r6),
                [v.zUn.DESCRIPTION]: eD(j.t.XeYKWF, j.t.PSfeIi),
                [v.zUn.PERMISSIONS_GRANTED]: () => j.t['9i/DvL'],
                [v.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVl,
                [v.zUn.COLOR]: eb({ '#000000': j.t.TK6E1N }, j.t['2FQFi4']),
                [v.zUn.HOIST]: em(j.t.gWfe29, j.t['+tb8kJ']),
                [v.zUn.MENTIONABLE]: em(j.t.LL8VFB, j.t.Z7xzmJ),
                [v.zUn.ICON_HASH]: () => j.t['iEE79/'],
                [v.zUn.UNICODE_EMOJI]: () => j.t.KiLMMz
            },
            z()
        ),
    k = () =>
        G(y({}, z()), {
            [v.zUn.TITLE]: eD(j.t.sNpuy8, j.t['3Ukc/v']),
            [v.zUn.DESCRIPTION]: eD(j.t.PP1q09, j.t.z7pYLi),
            [v.zUn.OPTIONS]: () => j.t['3G5C9/'],
            [v.zUn.SINGLE_SELECT]: em(j.t.v4WnR0, j.t['6Qg3uL']),
            [v.zUn.REQUIRED]: em(j.t['0MPAMz'], j.t.pwsXio)
        }),
    K = () =>
        G(y({}, z()), {
            [v.zUn.DEFAULT_CHANNEL_IDS]: () => j.t['8M+D2t'],
            [v.zUn.ENABLE_DEFAULT_CHANNELS]: em(j.t['EYd/lp'], j.t['36OZeX']),
            [v.zUn.ENABLE_ONBOARDING_PROMPTS]: em(j.t.V3u8PT, j.t.r66lc3),
            [v.zUn.ENABLED]: em(j.t.SODVIi, j.t.u8HY5e)
        }),
    Z = () =>
        G(y({}, z()), {
            [v.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xc,
            [v.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUInp,
            [v.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mp
        }),
    Y = () =>
        y(
            {
                [v.zUn.CODE]: () => j.t.rrRHgY,
                [v.zUn.CHANNEL_ID]: () => j.t.Q1vd5u,
                [v.zUn.MAX_USES]: eb({ 0: j.t.Yx8LNj }, j.t['3ygnwc']),
                [v.zUn.MAX_AGE]: eb({ [j.NW.string(j.t.PqEzn5)]: j.t.uWrLv7 }, j.t['Q+5kcH']),
                [v.zUn.TEMPORARY]: em(j.t.MWp6Hx, j.t.omiqTE),
                [v.zUn.FLAGS]: ev({ [o.$.IS_GUEST_INVITE]: j.t.XYZMbG })
            },
            z()
        ),
    q = () => ({
        [v.zUn.CHANNEL_ID]: eD(j.t.jhPpra, j.t.ar4qYG),
        [v.zUn.NAME]: eD(j.t.ZVGrzc, j.t.tywdZW),
        [v.zUn.AVATAR_HASH]: () => j.t.KB52Ul,
        [v.zUn.REASON]: () => j.t['2IW3Cw']
    }),
    X = () => y({ [v.zUn.NAME]: eD(j.t.ahU1o6, j.t['wxs+vb']) }, z()),
    J = () =>
        y(
            {
                [v.zUn.NAME]: eD(j.t.cdl0Ym, j.t.o3W2l5),
                [v.zUn.TAGS]: eD(j.t['zwL+S0'], j.t.VYfKAw),
                [v.zUn.DESCRIPTION]: eD(j.t.XeYKWF, j.t.PSfeIi)
            },
            z()
        ),
    Q = () =>
        y(
            {
                [v.zUn.ENABLE_EMOTICONS]: em(j.t['FI0m5+'], j.t.olpKCw),
                [v.zUn.EXPIRE_BEHAVIOR]: ev({
                    0: j.t['1Bb1+v'],
                    1: j.t.vjlW6u
                }),
                [v.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMT
            },
            z()
        ),
    $ = () =>
        y(
            {
                [v.zUn.TOPIC]: eD(j.t['m+veAg'], j.t.esQcxs),
                [v.zUn.PRIVACY_LEVEL]: ev({
                    [x.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [x.j8.PUBLIC]: j.t['pK/WGx']
                })
            },
            z()
        ),
    ee = () =>
        y(
            {
                [v.zUn.NAME]: () => j.t['21EXHR'],
                [v.zUn.DESCRIPTION]: () => j.t.Vm1of3,
                [v.zUn.PRIVACY_LEVEL]: ev({
                    [x.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [x.j8.PUBLIC]: j.t['pK/WGx']
                }),
                [v.zUn.STATUS]: ev({
                    [x.p1.SCHEDULED]: j.t.hXKDgo,
                    [x.p1.ACTIVE]: j.t.lRX1n5,
                    [x.p1.COMPLETED]: j.t['/eFIho'],
                    [x.p1.CANCELED]: j.t.NWIYho
                }),
                [v.zUn.ENTITY_TYPE]: ev({
                    [x.WX.NONE]: j.t['6sO3Sk'],
                    [x.WX.STAGE_INSTANCE]: j.t['Wo+s19'],
                    [x.WX.VOICE]: j.t.XCVaIC,
                    [x.WX.EXTERNAL]: j.t.IvhAj4
                }),
                [v.zUn.CHANNEL_ID]: eC(j.t.yJBIcX, j.t['+PqSsr']),
                [v.zUn.LOCATION]: eC(j.t.GaMBHx, j.t.PsICk5),
                [v.zUn.IMAGE_HASH]: eC(j.t.S3vcRE, j.t.KQu47O)
            },
            z()
        ),
    et = () =>
        y(
            {
                [v.zUn.SCHEDULED_START_TIME]: eC(j.t.zMIYVl, j.t.fzF8GR),
                [v.zUn.SCHEDULED_END_TIME]: eC(j.t.vONSQE, j.t.IlIti4),
                [v.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return j.t['7RkicX'];
                        else if (e.oldValue && !e.newValue) return j.t.dRNTWV;
                    }
                }
            },
            z()
        ),
    en = () =>
        y(
            {
                [v.zUn.NAME]: eD(j.t.tUKRzc, j.t.kPCHOD),
                [v.zUn.ARCHIVED]: em(j.t.jDi9FB, j.t.F6dvbW),
                [v.zUn.LOCKED]: em(j.t.JSy1QU, j.t.C7Jgo6),
                [v.zUn.INVITABLE]: em(j.t.dxNUs7, j.t.biJvYG),
                [v.zUn.AUTO_ARCHIVE_DURATION]: eD(j.t.LuaG39, j.t['18d9qq']),
                [v.zUn.RATE_LIMIT_PER_USER]: eD(j.t['7lirhI'], j.t.j4CCJS),
                [v.zUn.FLAGS]: () => j.t.sSAQtr
            },
            z()
        ),
    er = (e) => {
        let t = y({}, z());
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (t[e.key] = () => j.t['JH+89P']) : (t[e.key] = () => j.t.HUrFDg)) : (t[e.key] = () => j.t.vynxnZ);
                }),
            t
        );
    },
    el = () =>
        y(
            {
                [v.zUn.NAME]: () => j.t.XwxAJS,
                [v.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pys,
                [v.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t['46Y+Ly'],
                [v.zUn.AUTO_MODERATION_ACTIONS]: () => j.t['8efxfn'],
                [v.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji;
                },
                [v.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nz,
                [v.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLC,
                [v.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t['h/lM6+'],
                [v.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t['9V2yaG'],
                [v.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t['4Qe9n5'],
                [v.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxs,
                [v.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadX,
                [v.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t['FvvR+P'],
                [v.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSv7
            },
            z()
        ),
    es = () =>
        y(
            {
                [v.zUn.NAME]: eD(j.t.VOtRSE, j.t.OK7B8P),
                [v.zUn.VOLUME]: eD(j.t.igrDBw, j.t.L5lDFB),
                [v.zUn.EMOJI_NAME]: eM(j.t.IIanaW, j.t.z4w4U1, j.t.V8Tfyc),
                [v.zUn.EMOJI_ID]: eM(j.t.ainxMD, j.t['2NPsYm'], j.t['8crtnp'])
            },
            z()
        ),
    ea = () =>
        y(
            {
                [v.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ),
                [v.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVV : j.t.WxyOtr)
            },
            z()
        ),
    ei = () => y({ [v.zUn.STATUS]: () => j.t.HyCSnJ }, z()),
    eo = () => ({
        [v.zUn.DESCRIPTION]: () => j.t.nsUZKS,
        [v.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgI,
        [v.zUn.CUSTOM_BANNER_HASH]: () => j.t['04b5KC'],
        [v.zUn.TRAITS]: () => j.t.dEy9WF,
        [v.zUn.GAME_APPLICATION_IDS]: () => j.t['8BOT39'],
        [v.zUn.VISIBILITY]: () => j.t.bCl1Eh
    }),
    eE = {
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
    eu = () => [
        {
            value: v.rsA.ALL,
            label: j.NW.string(j.t.QxEVcn),
            valueLabel: j.NW.string(j.t.an9Ry8)
        },
        {
            value: v.rsA.GUILD_UPDATE,
            label: j.NW.string(j.t['5INZa2'])
        },
        {
            value: v.rsA.CHANNEL_CREATE,
            label: j.NW.string(j.t['2uh4vL'])
        },
        {
            value: v.rsA.CHANNEL_UPDATE,
            label: j.NW.string(j.t.mGsBLS)
        },
        {
            value: v.rsA.CHANNEL_DELETE,
            label: j.NW.string(j.t.hCHzAg)
        },
        {
            value: v.rsA.CHANNEL_OVERWRITE_CREATE,
            label: j.NW.string(j.t['8TnAMD'])
        },
        {
            value: v.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: j.NW.string(j.t.Jqx0Bg)
        },
        {
            value: v.rsA.CHANNEL_OVERWRITE_DELETE,
            label: j.NW.string(j.t.gBXOr6)
        },
        {
            value: v.rsA.MEMBER_KICK,
            label: j.NW.string(j.t['Q1/hNz'])
        },
        {
            value: v.rsA.MEMBER_PRUNE,
            label: j.NW.string(j.t.tOTTjY)
        },
        {
            value: v.rsA.MEMBER_BAN_ADD,
            label: j.NW.string(j.t['NfPn+f'])
        },
        {
            value: v.rsA.MEMBER_BAN_REMOVE,
            label: j.NW.string(j.t.XCsGfH)
        },
        {
            value: v.rsA.MEMBER_UPDATE,
            label: j.NW.string(j.t['F/jmND'])
        },
        {
            value: v.rsA.MEMBER_ROLE_UPDATE,
            label: j.NW.string(j.t.zAveSE)
        },
        {
            value: v.rsA.MEMBER_MOVE,
            label: j.NW.string(j.t.QshteX)
        },
        {
            value: v.rsA.MEMBER_DISCONNECT,
            label: j.NW.string(j.t.Z45os7)
        },
        {
            value: v.rsA.BOT_ADD,
            label: j.NW.string(j.t.vuH24e)
        },
        {
            value: v.rsA.THREAD_CREATE,
            label: j.NW.string(j.t['+zl0DA'])
        },
        {
            value: v.rsA.THREAD_UPDATE,
            label: j.NW.string(j.t.rbIry8)
        },
        {
            value: v.rsA.THREAD_DELETE,
            label: j.NW.string(j.t.hFjNEB)
        },
        {
            value: v.rsA.ROLE_CREATE,
            label: j.NW.string(j.t.AbxKtr)
        },
        {
            value: v.rsA.ROLE_UPDATE,
            label: j.NW.string(j.t.t3Z6sb)
        },
        {
            value: v.rsA.ROLE_DELETE,
            label: j.NW.string(j.t.YsFpa2)
        },
        {
            value: v.rsA.ONBOARDING_PROMPT_CREATE,
            label: j.NW.string(j.t.ZV9tqa)
        },
        {
            value: v.rsA.ONBOARDING_PROMPT_UPDATE,
            label: j.NW.string(j.t.PcOdvb)
        },
        {
            value: v.rsA.ONBOARDING_PROMPT_DELETE,
            label: j.NW.string(j.t['+r33NT'])
        },
        {
            value: v.rsA.ONBOARDING_CREATE,
            label: j.NW.string(j.t.uDADdX)
        },
        {
            value: v.rsA.ONBOARDING_UPDATE,
            label: j.NW.string(j.t.J1H1ws)
        },
        {
            value: v.rsA.HOME_SETTINGS_CREATE,
            label: j.NW.string(j.t.Di4cvL)
        },
        {
            value: v.rsA.HOME_SETTINGS_UPDATE,
            label: j.NW.string(j.t.tzyrJC)
        },
        {
            value: v.rsA.INVITE_CREATE,
            label: j.NW.string(j.t['0BNJdX'])
        },
        {
            value: v.rsA.INVITE_UPDATE,
            label: j.NW.string(j.t['o++obW'])
        },
        {
            value: v.rsA.INVITE_DELETE,
            label: j.NW.string(j.t.iP40Aw)
        },
        {
            value: v.rsA.WEBHOOK_CREATE,
            label: j.NW.string(j.t['tBF4+f'])
        },
        {
            value: v.rsA.WEBHOOK_UPDATE,
            label: j.NW.string(j.t.eV3McH)
        },
        {
            value: v.rsA.WEBHOOK_DELETE,
            label: j.NW.string(j.t.AAL3Ky)
        },
        {
            value: v.rsA.EMOJI_CREATE,
            label: j.NW.string(j.t.RuWm0d)
        },
        {
            value: v.rsA.EMOJI_UPDATE,
            label: j.NW.string(j.t.WzdUY2)
        },
        {
            value: v.rsA.EMOJI_DELETE,
            label: j.NW.string(j.t.c3dK2N)
        },
        {
            value: v.rsA.MESSAGE_DELETE,
            label: j.NW.string(j.t.daTfXl)
        },
        {
            value: v.rsA.MESSAGE_BULK_DELETE,
            label: j.NW.string(j.t.nrBxen)
        },
        {
            value: v.rsA.MESSAGE_PIN,
            label: j.NW.string(j.t.MUldyM)
        },
        {
            value: v.rsA.MESSAGE_UNPIN,
            label: j.NW.string(j.t.n4zKhI)
        },
        {
            value: v.rsA.INTEGRATION_CREATE,
            label: j.NW.string(j.t['deNm8/'])
        },
        {
            value: v.rsA.INTEGRATION_UPDATE,
            label: j.NW.string(j.t.HT7Sfn)
        },
        {
            value: v.rsA.INTEGRATION_DELETE,
            label: j.NW.string(j.t['+kJ09v'])
        },
        {
            value: v.rsA.STICKER_CREATE,
            label: j.NW.string(j.t['3DzNjY'])
        },
        {
            value: v.rsA.STICKER_UPDATE,
            label: j.NW.string(j.t.tdhW5e)
        },
        {
            value: v.rsA.STICKER_DELETE,
            label: j.NW.string(j.t['+ZhGOj'])
        },
        {
            value: v.rsA.STAGE_INSTANCE_CREATE,
            label: j.NW.string(j.t.sPbjAw)
        },
        {
            value: v.rsA.STAGE_INSTANCE_UPDATE,
            label: j.NW.string(j.t.cW9LfH)
        },
        {
            value: v.rsA.STAGE_INSTANCE_DELETE,
            label: j.NW.string(j.t['U1r+yM'])
        },
        {
            value: v.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: j.NW.string(j.t.H81Zy8)
        },
        {
            value: v.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: j.NW.string(j.t.FM69l5)
        },
        {
            value: v.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: j.NW.string(j.t.Rq28Bg)
        },
        {
            value: v.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: j.NW.string(j.t.iPdFOj)
        },
        {
            value: v.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: j.NW.string(j.t.gNq5z8)
        },
        {
            value: v.rsA.AUTO_MODERATION_RULE_CREATE,
            label: j.NW.string(j.t.f72Zqa)
        },
        {
            value: v.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: j.NW.string(j.t.XeqIio)
        },
        {
            value: v.rsA.AUTO_MODERATION_RULE_DELETE,
            label: j.NW.string(j.t.syAApa)
        },
        {
            value: v.rsA.GUILD_HOME_FEATURE_ITEM,
            label: j.NW.string(j.t.lhG5KC)
        },
        {
            value: v.rsA.GUILD_HOME_REMOVE_ITEM,
            label: j.NW.string(j.t.lRPRwc)
        },
        {
            value: v.rsA.SOUNDBOARD_SOUND_CREATE,
            label: j.NW.string(j.t.yoRi5u)
        },
        {
            value: v.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: j.NW.string(j.t.uKlG0d)
        },
        {
            value: v.rsA.SOUNDBOARD_SOUND_DELETE,
            label: j.NW.string(j.t.gq0iCQ)
        },
        {
            value: v.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: j.NW.string(j.t.rGr0YG)
        },
        {
            value: v.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: j.NW.string(j.t.V9PEQ0)
        }
    ];
function ec(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function e_(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function ed(e) {
    var t;
    let n = eu().find((t) => t.value === e.action);
    return null != ec(v.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.NW.string(j.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [c.J6.SECONDS]: (e) => j.NW.formatToPlainString(j.t.geSp4O, { seconds: e }),
    [c.J6.MINUTES]: (e) => j.NW.formatToPlainString(j.t.iXLF9f, { minutes: e }),
    [c.J6.HOURS]: (e) => j.NW.formatToPlainString(j.t.xCjYxM, { hours: e }),
    [c.J6.DAYS]: (e) => j.NW.formatToPlainString(j.t.k2UNz8, { days: e })
};
function eT(e) {
    let t = ec(v.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = e_(v.zUn.ROLES_ADD, e).length > 0,
        r = e_(v.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - M.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, c.CI)(r, W);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in eA) {
                let e = l.unit,
                    t = l.unit === c.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return eA[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return j.NW.string(j.t.MA1ltr);
    } else if (n && r) return j.NW.string(j.t.RdMMe3);
    else if (n) return j.NW.string(j.t['4GQqs7']);
    else if (r) return j.NW.string(j.t['8mQ6x8']);
    return null;
}
function eN(e) {
    let t = e_(v.zUn.ROLES_ADD, e),
        n = e_(v.zUn.ROLES_REMOVE, e),
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
        ? j.NW.formatToPlainString(j.t.tZw1ER, {
              roleNamesAdded: r,
              roleNamesRemoved: l
          })
        : t.length > 0
          ? j.NW.formatToPlainString(j.t['/mTqt7'], { roleNames: r })
          : n.length > 0
            ? j.NW.formatToPlainString(j.t.Wk4pAA, { roleNames: l })
            : null;
}
function eI(e) {
    switch (e.action) {
        case v.rsA.GUILD_UPDATE:
            return j.t.LjZO39;
        case v.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === v.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case v.d4z.GUILD_STAGE_VOICE:
                    return j.t['OKp4+v'];
                case v.d4z.GUILD_VOICE:
                    return j.t.NPOy4O;
                case v.d4z.GUILD_CATEGORY:
                    return j.t.T3KIj4;
                default:
                    return j.t.wrYNGx;
            }
        case v.rsA.CHANNEL_UPDATE:
            return j.t.nTYk6O;
        case v.rsA.CHANNEL_DELETE:
            return j.t.ynfvkp;
        case v.rsA.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1d;
        case v.rsA.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNT;
        case v.rsA.CHANNEL_OVERWRITE_DELETE:
            return j.t['HASt//'];
        case v.rsA.MEMBER_KICK:
            return j.t.B5hDZW;
        case v.rsA.MEMBER_PRUNE:
            return j.t.qKOZTE;
        case v.rsA.MEMBER_BAN_ADD:
            return j.t.XklUm5;
        case v.rsA.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HB;
        case v.rsA.MEMBER_UPDATE:
            return j.t.pznhLC;
        case v.rsA.MEMBER_ROLE_UPDATE:
            return j.t.VngfiY;
        case v.rsA.MEMBER_MOVE:
            return j.t.Yt6NkZ;
        case v.rsA.MEMBER_DISCONNECT:
            return j.t.K4eCZ2;
        case v.rsA.BOT_ADD:
            return j.t.fWvX0N;
        case v.rsA.ROLE_CREATE:
            return j.t.UTLTx8;
        case v.rsA.ROLE_UPDATE:
            return j.t.NRbN19;
        case v.rsA.ROLE_DELETE:
            return j.t['4s63tb'];
        case v.rsA.INVITE_CREATE:
            return j.t.YHOXW1;
        case v.rsA.INVITE_UPDATE:
            return j.t.ja3kGR;
        case v.rsA.INVITE_DELETE:
            return j.t['3n/iWl'];
        case v.rsA.WEBHOOK_CREATE:
            return j.t.MhYhio;
        case v.rsA.WEBHOOK_UPDATE:
            return j.t['6GTlWF'];
        case v.rsA.WEBHOOK_DELETE:
            return j.t.in0VjY;
        case v.rsA.EMOJI_CREATE:
            return j.t['7vekRE'];
        case v.rsA.EMOJI_UPDATE:
            return j.t.IsCKfn;
        case v.rsA.EMOJI_DELETE:
            return j.t.JnUaVF;
        case v.rsA.STICKER_CREATE:
            return j.t.DRZifn;
        case v.rsA.STICKER_UPDATE:
            return j.t.bhujGR;
        case v.rsA.STICKER_DELETE:
            return j.t.rGEP9f;
        case v.rsA.MESSAGE_DELETE:
            return j.t['HPkD+P'];
        case v.rsA.MESSAGE_BULK_DELETE:
            return j.t['3RIvLC'];
        case v.rsA.MESSAGE_PIN:
            return j.t.Yna7Ex;
        case v.rsA.MESSAGE_UNPIN:
            return j.t.NCxXUV;
        case v.rsA.INTEGRATION_CREATE:
            return j.t.HYvCb2;
        case v.rsA.INTEGRATION_UPDATE:
            return j.t.ibCCOT;
        case v.rsA.INTEGRATION_DELETE:
            return j.t['8zScWV'];
        case v.rsA.STAGE_INSTANCE_CREATE:
            return j.t['n7x/DA'];
        case v.rsA.STAGE_INSTANCE_UPDATE:
            return j.t['0hQYU1'];
        case v.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t['Oi/in5'];
            return j.t['7ZIFm5'];
        case v.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52t;
        case v.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK19;
        case v.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t['/ARPKS'];
        case v.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case v.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t['8qCI39'];
        case v.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2dX;
        case v.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === v.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case v.d4z.PRIVATE_THREAD:
                    return j.t['Br0y5+'];
                case v.d4z.ANNOUNCEMENT_THREAD:
                    return j.t['6uaMmJ'];
                default:
                    return j.t['2cxQ7O'];
            }
        case v.rsA.THREAD_UPDATE:
            return j.t.PSsy4u;
        case v.rsA.THREAD_DELETE:
            return j.t.s3Khn5;
        case v.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBg;
        case v.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2N;
        case v.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === P.fX.USER_PROFILE.toString()) return j.t.YQsjen;
            return j.t.SD0PwM;
        case v.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4Twc;
        case v.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return j.t['/W5u5u'];
        case v.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWys;
        case v.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t.ryGLk5;
        case v.rsA.AUTO_MODERATION_RULE_CREATE:
            return j.t.NKljj4;
        case v.rsA.AUTO_MODERATION_RULE_UPDATE:
            return j.t['3wEA9v'];
        case v.rsA.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3t;
        case v.rsA.ONBOARDING_PROMPT_CREATE:
            return j.t['/8A1g4'];
        case v.rsA.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWF;
        case v.rsA.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTam;
        case v.rsA.ONBOARDING_CREATE:
            return j.t.wDaq39;
        case v.rsA.ONBOARDING_UPDATE:
            return j.t['yONu/v'];
        case v.rsA.HOME_SETTINGS_CREATE:
            return j.t.dSdCjI;
        case v.rsA.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qq;
        case v.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === v.zUn.ENTITY_TYPE) : null;
            if (null == l) return j.t['UZ+U3N'];
            switch (l.newValue) {
                case i.w.MESSAGE:
                    return j.t['PyEa+P'];
                case i.w.FORUM_POST:
                    return j.t.hCuAb2;
                default:
                    return j.t['UZ+U3N'];
            }
        case v.rsA.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReur;
        case v.rsA.SOUNDBOARD_SOUND_CREATE:
            return j.t['0PD83d'];
        case v.rsA.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n19;
        case v.rsA.SOUNDBOARD_SOUND_DELETE:
            return j.t['kVz4//'];
        case v.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU1;
        case v.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case v.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t.NUKUb2;
        case v.rsA.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hFx;
        default:
            return null;
    }
}
function eO(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return j.NW.string(j.t['5G8ZDw']);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.NW.string(j.t['4YLtzM']);
        case b.zZ.PINNED:
            return j.NW.string(j.t['1QLRYW']);
    }
    return null;
}
function eR(e) {
    switch (e) {
        case b.zZ.GUILD_FEED_REMOVED:
            return j.NW.string(j.t.S5kuWV);
        case b.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.NW.string(j.t['8qpgc3']);
        case b.zZ.PINNED:
            return j.NW.string(j.t.CMweGB);
    }
    return null;
}
function eg(e, t) {
    switch (e) {
        case v.Plq.CREATE_INSTANT_INVITE:
            return j.NW.string(j.t.zJrgTE);
        case v.Plq.KICK_MEMBERS:
            return j.NW.string(j.t.pBNv6u);
        case v.Plq.BAN_MEMBERS:
            return j.NW.string(j.t.oTBA7O);
        case v.Plq.ADMINISTRATOR:
            return j.NW.string(j.t.PGvZqa);
        case v.Plq.MANAGE_CHANNELS:
            if (t.targetType === v.KFR.CHANNEL || t.targetType === v.KFR.CHANNEL_OVERWRITE) return j.NW.string(j.t.nAw15O);
            return j.NW.string(j.t['9qLtWl']);
        case v.Plq.MANAGE_GUILD:
            return j.NW.string(j.t.QZRcfH);
        case v.Plq.VIEW_GUILD_ANALYTICS:
            return j.NW.string(j.t.rQJBEx);
        case v.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.NW.string(j.t['0lTLTk']);
        case v.Plq.CHANGE_NICKNAME:
            return j.NW.string(j.t.dilOFx);
        case v.Plq.MANAGE_NICKNAMES:
            return j.NW.string(j.t['t+Ct5+']);
        case v.Plq.MANAGE_ROLES:
            return j.NW.string(j.t['C8d+oK']);
        case v.Plq.MANAGE_WEBHOOKS:
            return j.NW.string(j.t['/ADKmJ']);
        case v.Plq.CREATE_GUILD_EXPRESSIONS:
            return j.NW.string(j.t.HarVuL);
        case v.Plq.MANAGE_GUILD_EXPRESSIONS:
            return j.NW.string(j.t.bbuXIi);
        case v.Plq.VIEW_AUDIT_LOG:
            return j.NW.string(j.t.fZgLpK);
        case v.Plq.VIEW_CHANNEL:
            if (t.targetType === v.KFR.CHANNEL || t.targetType === v.KFR.CHANNEL_OVERWRITE) return j.NW.string(j.t['W/A4Qk']);
            return j.NW.string(j.t.uV83ys);
        case v.Plq.SEND_MESSAGES:
            return j.NW.string(j.t.T32rkJ);
        case v.Plq.SEND_TTS_MESSAGES:
            return j.NW.string(j.t.Mg7bkp);
        case v.Plq.USE_APPLICATION_COMMANDS:
            return j.NW.string(j.t.shbR1d);
        case v.Plq.MANAGE_MESSAGES:
            return j.NW.string(j.t['6lU9xM']);
        case v.Plq.EMBED_LINKS:
            return j.NW.string(j.t['969dEB']);
        case v.Plq.ATTACH_FILES:
            return j.NW.string(j.t['3AS4UF']);
        case v.Plq.READ_MESSAGE_HISTORY:
            return j.NW.string(j.t.l9ufaW);
        case v.Plq.MENTION_EVERYONE:
            return j.NW.string(j.t.Y78KGB);
        case v.Plq.USE_EXTERNAL_EMOJIS:
            return j.NW.string(j.t.BpBGZW);
        case v.Plq.USE_EXTERNAL_STICKERS:
            return j.NW.string(j.t['UeRs+f']);
        case v.Plq.ADD_REACTIONS:
            return j.NW.string(j.t.yEoJAg);
        case v.Plq.CONNECT:
            return j.NW.string(j.t.S0W8Z2);
        case v.Plq.SPEAK:
            return j.NW.string(j.t['8w1tIS']);
        case v.Plq.MUTE_MEMBERS:
            return j.NW.string(j.t['8EI309']);
        case v.Plq.DEAFEN_MEMBERS:
            return j.NW.string(j.t['9L47Fh']);
        case v.Plq.MOVE_MEMBERS:
            return j.NW.string(j.t.YtjJPT);
        case v.Plq.USE_VAD:
            return j.NW.string(j.t['08zAV1']);
        case v.Plq.PRIORITY_SPEAKER:
            return j.NW.string(j.t.BVK71t);
        case v.Plq.STREAM:
            return j.NW.string(j.t.FlNoSU);
        case v.Plq.REQUEST_TO_SPEAK:
            return j.NW.string(j.t['5kicT0']);
        case v.Plq.CREATE_EVENTS:
            return j.NW.string(j.t.qyjZub);
        case v.Plq.MANAGE_EVENTS:
            return j.NW.string(j.t.HIgA5e);
        case v.Plq.CREATE_PUBLIC_THREADS:
            return j.NW.string(j.t['25rKnZ']);
        case v.Plq.CREATE_PRIVATE_THREADS:
            return j.NW.string(j.t.QwbTSU);
        case v.Plq.SEND_MESSAGES_IN_THREADS:
            return j.NW.string(j.t.fTE74u);
        case v.Plq.MANAGE_THREADS:
            return j.NW.string(j.t.kEqgr6);
        case v.Plq.MODERATE_MEMBERS:
            return j.NW.string(j.t['+RL6p6']);
        case v.Plq.USE_CLYDE_AI:
            return j.NW.string(j.t['8eeEZm']);
        case v.Plq.SET_VOICE_CHANNEL_STATUS:
            return j.NW.string(j.t.VBwkUV);
        case v.Plq.SEND_POLLS:
            return j.NW.string(j.t.UMQ7W1);
        case v.Plq.USE_EXTERNAL_APPS:
            return j.NW.string(j.t.TtA5rK);
    }
    return null;
}
function ef(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = (function (e, t) {
                    switch (e.targetType) {
                        case v.KFR.GUILD:
                        case v.KFR.GUILD_HOME:
                        case v.KFR.GUILD_PROFILE:
                            return t;
                        case v.KFR.CHANNEL:
                        case v.KFR.CHANNEL_OVERWRITE:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => S.Z.getChannel(e),
                                (e) => (0, d.F6)(e, L.default, h.Z, !0)
                            );
                        case v.KFR.USER:
                            return eL(
                                e,
                                v.zUn.NICK,
                                (e) => L.default.getUser(e),
                                (e) => e
                            );
                        case v.KFR.ROLE:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => U.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case v.KFR.ONBOARDING_PROMPT:
                            let n = eL(
                                e,
                                v.zUn.ID,
                                (e) => I.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? j.NW.string(j.t.ZNQyiY) : n;
                        case v.KFR.GUILD_ONBOARDING:
                        case v.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case v.KFR.INVITE:
                            return eL(e, v.zUn.CODE, v.VqG);
                        case v.KFR.INTEGRATION:
                            return eL(
                                e,
                                v.zUn.TYPE,
                                (e) => m.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.WEBHOOK:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => m.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.EMOJI:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => T.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.STICKER:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => g.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case v.KFR.STAGE_INSTANCE:
                            return eL(
                                e,
                                v.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(R.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case v.KFR.GUILD_SCHEDULED_EVENT:
                        case v.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => m.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.THREAD:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => m.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = m.Z.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => m.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === _.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case v.KFR.AUTO_MODERATION_RULE:
                            return eL(
                                e,
                                v.zUn.NAME,
                                (e) => m.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case v.KFR.GUILD_SOUNDBOARD:
                            return eL(e, v.zUn.NAME, v.VqG);
                        case v.KFR.HOME_SETTINGS:
                            return eL(
                                e,
                                v.zUn.GUILD_ID,
                                (e) => O.Z.getSettings(e),
                                () => j.NW.string(j.t.VbpLyc),
                                t.id
                            );
                        case v.KFR.VOICE_CHANNEL_STATUS:
                            return eL(
                                e,
                                v.zUn.STATUS,
                                (e) => S.Z.getChannel(e),
                                (e) => (0, d.F6)(e, L.default, h.Z, !0)
                            );
                        default:
                            return F.warn('Unknown targetType for log', e), null;
                    }
                })(e, t),
                s = L.default.getUser(e.userId);
            if (null != r || [v.rsA.MEMBER_PRUNE, v.rsA.MEMBER_DISCONNECT, v.rsA.MEMBER_MOVE, v.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, v.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', s)).set('target', r)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let n = y({}, e.options);
                                switch (e.options.type) {
                                    case v.jwA.USER:
                                        n.subtarget = ep(
                                            e.options.id,
                                            (e) => L.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case v.jwA.ROLE:
                                        n.subtarget = ep(e.options.role_name, v.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = eL(
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
                                    let r = m.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find((t) => t.event_exception_id === e.options.event_exception_id);
                                    n.subtarget = (0, p.vc)(a()(M.default.extractTimestamp(null != (t = null == l ? void 0 : l.event_exception_id) ? t : '0')), 'LL');
                                }
                                return n;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let n = [];
                    e.changes.forEach((r) => {
                        let s = (function (e, t, n) {
                            if (t.action === v.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case v.ecB.ROLE:
                                        e.subtarget = ep(
                                            t.id,
                                            (e) => U.Z.getRole(n.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case v.ecB.USER:
                                        e.subtarget = ep(
                                            t.id,
                                            (e) => L.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case v.ecB.CHANNEL:
                                        t.id === l()(n.id).subtract(1).toString()
                                            ? (e.subtarget = j.NW.string(j.t.MSYhgo))
                                            : (e.subtarget = ep(
                                                  t.id,
                                                  (e) => S.Z.getChannel(e),
                                                  (e) => (0, d.F6)(e, L.default, h.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case v.zUn.OWNER_ID:
                                    return eh(e, (e) => L.default.getUser(e));
                                case v.zUn.CHANNEL_ID:
                                case v.zUn.AFK_CHANNEL_ID:
                                case v.zUn.SYSTEM_CHANNEL_ID:
                                case v.zUn.RULES_CHANNEL_ID:
                                case v.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eh(
                                        e,
                                        (e) => S.Z.getChannel(e),
                                        (e) => (0, d.F6)(e, L.default, h.Z, !0)
                                    );
                                case v.zUn.AFK_TIMEOUT:
                                    return eh(e, (e) => e / 60);
                                case v.zUn.BITRATE:
                                    return eh(e, (e) => e / 1000);
                                case v.zUn.COLOR:
                                    return eh(e, (e) => (0, u.Rf)(e).toUpperCase());
                                case v.zUn.THEME_COLORS:
                                    return eh(e, (e) => ''.concat((0, u.Rf)(e[0]).toUpperCase(), ', ').concat((0, u.Rf)(e[1]).toUpperCase()));
                                case v.zUn.MAX_AGE:
                                    return eh(e, (e) => {
                                        let t = C.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case v.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = eS(e.oldValue, e.newValue);
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
                                        { added: n, removed: r } = eS(e.oldValue, e.newValue);
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
                                                l = D.Ge(r, n),
                                                s = D.Ge(n, r),
                                                a = [],
                                                i = [];
                                            for (let e in b.zZ) {
                                                let t = b.zZ[e];
                                                D.yE(l, t) && a.push(t), D.yE(s, t) && i.push(t);
                                            }
                                            return {
                                                added: a,
                                                removed: i
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
                                    return eh(e, (e) => {
                                        let t = (0, j.u5)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case v.zUn.VIDEO_QUALITY_MODE:
                                    return eh(e, (e) => (e === v.Ucd.FULL ? j.NW.string(j.t['7jOoJC']) : j.NW.string(j.t.jjKYpq)));
                                case v.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let r = {
                                            [v.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [v.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: v.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [v.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: v.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [v.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: v.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                        },
                                        s = [];
                                    return (
                                        Object.values(v.xmn).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                l = (e.newValue & t) === t;
                                            if (n === l) return;
                                            let a = new f.ms(r[t], !n, !l);
                                            s.push(a);
                                        }),
                                        s
                                    );
                                case v.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE)
                                        return eh(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.ZF).join(', ')
                                        );
                                    break;
                                case v.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return eh(e, N.YN);
                                    break;
                                case v.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return eh(e, N.Ar);
                                    break;
                                case v.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return eh(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.NW.formatToMarkdownString(j.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case v.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case v.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case v.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case v.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case v.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case v.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE) return eh(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case v.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE)
                                        return eh(
                                            e,
                                            (e) =>
                                                e
                                                    .map(S.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, d.F6)(e, L.default, h.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.NW.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case v.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === v.KFR.AUTO_MODERATION_RULE)
                                        return eh(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => U.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.NW.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case v.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: t, newValue: n } = e,
                                            r = Array.isArray(t) ? t : [],
                                            l = Array.isArray(n) ? n : [];
                                        if (0 === r.length && 0 === l.length) return e;
                                        let s = {},
                                            a = {};
                                        if (
                                            (r.forEach((e) => {
                                                s[e.id] = e;
                                            }),
                                            l.forEach((e) => {
                                                a[e.id] = e;
                                            }),
                                            r.length < l.length)
                                        ) {
                                            for (let e in a) if (null == s[e]) return new f.ms(v.zUn.AVAILABLE_TAG_ADD, null, eU(a[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in s) if (null == a[e]) return new f.ms(v.zUn.AVAILABLE_TAG_DELETE, null, eU(s[e]));
                                        }
                                        for (let e in s) {
                                            let t = s[e],
                                                n = a[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new f.ms(v.zUn.AVAILABLE_TAG_EDIT, eU(t), eU(n));
                                        }
                                        return e;
                                    })(e);
                                case v.zUn.SCHEDULED_START_TIME:
                                case v.zUn.SCHEDULED_END_TIME:
                                    return eh(e, (e) => (0, p.vc)(a()(new Date(e)), 'LLLL'));
                            }
                            return e;
                        })(r, e, t);
                        Array.isArray(s) ? s.forEach((e) => n.push(e)) : n.push(s);
                    }),
                        (e = e.set('changes', n));
                }
                n.push(e);
            }
        }),
        n
    );
}
function eS(e, t) {
    let n = E.vB('string' == typeof e ? e : 0),
        r = E.vB('string' == typeof t ? t : 0),
        l = E.Od(r, n),
        s = E.Od(n, r),
        a = [],
        i = [];
    for (let e in v.Plq) {
        let t = v.Plq[e];
        E.e$(l, t) && a.push(t), E.e$(s, t) && i.push(t);
    }
    return {
        added: a,
        removed: i
    };
}
function eU(e) {
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
function eh(e, t, n) {
    let r = e.newValue,
        l = e.oldValue;
    return null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))), null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))), new f.ms(e.key, l || e.oldValue, r || e.newValue);
}
function eL(e, t, n, r, l) {
    let s = null,
        a = n((l = null != l ? l : e.targetId));
    if ((null != a && null != r && (s = r(a)), null == s)) {
        let t = m.Z.deletedTargets[e.targetType];
        null != t && null != t[l] && (s = t[l]);
    }
    if (null == s && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (s = n.newValue || n.oldValue);
    }
    return null != s ? s : l;
}
function ep(e, t, n) {
    let r = e,
        l = t(e);
    return null != l && null != n && (r = n(l)), r;
}
function eD(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eC(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eM(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function em(e, t) {
    return (n) => (n.newValue ? e : t);
}
function ev(e) {
    return (t) => e[t.newValue];
}
function eb(e, t) {
    return (n) => {
        var r;
        return null != (r = e[n.newValue]) ? r : t;
    };
}
