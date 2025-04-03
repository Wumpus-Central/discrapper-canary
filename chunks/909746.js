n.d(t, {
    Bq: () => J,
    C0: () => ea,
    C2: () => $,
    EN: () => K,
    F1: () => ei,
    HE: () => V,
    HN: () => Y,
    Iv: () => ec,
    J5: () => eN,
    JA: () => es,
    K: () => Q,
    ML: () => z,
    N$: () => X,
    N5: () => eI,
    QM: () => eT,
    V$: () => eu,
    _$: () => eR,
    cT: () => eg,
    em: () => eO,
    hQ: () => ef,
    hx: () => Z,
    lR: () => q,
    lU: () => k,
    nm: () => ed,
    oD: () => H,
    pA: () => en,
    pY: () => w,
    pi: () => et,
    rK: () => el,
    uB: () => ee,
    vc: () => eE,
    vm: () => er,
    zT: () => eo
}),
    n(411104),
    n(653041),
    n(26686);
var r = n(654861),
    l = n.n(r),
    a = n(913527),
    s = n.n(a),
    i = n(536402),
    o = n(533800),
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
    f = n(926491),
    R = n(387667),
    p = n(592125),
    S = n(430824),
    h = n(699516),
    U = n(594174),
    D = n(55935),
    L = n(630388),
    C = n(971130),
    m = n(709054),
    M = n(987707),
    b = n(981631),
    v = n(176505),
    P = n(273504),
    y = n(765305),
    x = n(388032);
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
    B = () => ({ [b.zUn.REASON]: () => x.t['2IW3Cw'] }),
    w = () =>
        j(
            {
                [b.zUn.NAME]: () => x.t.CkDiND,
                [b.zUn.DESCRIPTION]: eC(x.t.RP3Ey8, x.t.QAVj1d),
                [b.zUn.ICON_HASH]: () => x.t.iLZ8Q0,
                [b.zUn.SPLASH_HASH]: () => x.t['4VV6dn'],
                [b.zUn.DISCOVERY_SPLASH_HASH]: () => x.t['2pds6u'],
                [b.zUn.BANNER_HASH]: eC(x.t.Cxq4zM, x.t['H7eE//']),
                [b.zUn.OWNER_ID]: () => x.t['8ltsLS'],
                [b.zUn.REGION]: () => x.t.X9r5KS,
                [b.zUn.PREFERRED_LOCALE]: () => x.t.UnXuDQ,
                [b.zUn.AFK_CHANNEL_ID]: eC(x.t.ClBuAw, x.t['ms+xtL']),
                [b.zUn.AFK_TIMEOUT]: () => x.t.q21fHR,
                [b.zUn.SYSTEM_CHANNEL_ID]: eC(x.t.H1VXaW, x.t.XhtmxM),
                [b.zUn.RULES_CHANNEL_ID]: eC(x.t.OI6MGx, x.t.lik3tL),
                [b.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eC(x.t.YxBKra, x.t.Ehsnio),
                [b.zUn.MFA_LEVEL]: eb({
                    [b.BpS.NONE]: x.t.voaCCQ,
                    [b.BpS.ELEVATED]: x.t.pRNVw8
                }),
                [b.zUn.WIDGET_ENABLED]: eM(x.t.ADIty8, x.t.nf58VV),
                [b.zUn.WIDGET_CHANNEL_ID]: eC(x.t['6SBsDQ'], x.t.deQ5wM),
                [b.zUn.VERIFICATION_LEVEL]: eb({
                    [b.sFg.NONE]: x.t.W27rsb,
                    [b.sFg.LOW]: x.t['V8P+Pz'],
                    [b.sFg.MEDIUM]: x.t.ERQFam,
                    [b.sFg.HIGH]: x.t['83fN0t'],
                    [b.sFg.VERY_HIGH]: x.t.PnkQJC
                }),
                [b.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eb({
                    [b.bL.ALL_MESSAGES]: x.t.LDi76O,
                    [b.bL.ONLY_MENTIONS]: x.t['6K83bW']
                }),
                [b.zUn.VANITY_URL_CODE]: eC(x.t.Zplsoq, x.t.u6cArq),
                [b.zUn.EXPLICIT_CONTENT_FILTER]: eb({
                    [b.lxg.DISABLED]: x.t.fmOeLy,
                    [b.lxg.MEMBERS_WITHOUT_ROLES]: x.t['4FghY2'],
                    [b.lxg.ALL_MEMBERS]: x.t.olyrSk
                }),
                [b.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eM(x.t.rBT0sr, x.t['gc+te3']),
                [b.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => x.t.YbouFB,
                [b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => x.t.g3DMjI,
                [b.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => x.t['+fQAen'],
                [b.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => x.t.E1fc4u,
                [b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => x.t.XbwtSE
            },
            B()
        ),
    z = () => ({
        [b.zUn.NAME]: eL(x.t.f8Rh0d, x.t.ebD4Qk),
        [b.zUn.POSITION]: eL(x.t.isS8tb, x.t.t5uBio),
        [b.zUn.TOPIC]: em(x.t.esQcxs, x.t['m+veAg'], x.t['ws/1FB']),
        [b.zUn.BITRATE]: eL(x.t.fw81am, x.t.MFNlgY),
        [b.zUn.RTC_REGION_OVERRIDE]: em(x.t['6kajx8'], x.t.eGOlmZ, x.t['0JMZd3']),
        [b.zUn.USER_LIMIT]: eL(x.t.wk5t7u, x.t.XgjCEh),
        [b.zUn.RATE_LIMIT_PER_USER]: eL(x.t['7lirhI'], x.t.j4CCJS),
        [b.zUn.PERMISSIONS_RESET]: () => x.t['+vSBFR'],
        [b.zUn.PERMISSIONS_GRANTED]: () => x.t.EKLJv7,
        [b.zUn.PERMISSIONS_DENIED]: () => x.t.U3rO5e,
        [b.zUn.REASON]: () => x.t['2IW3Cw'],
        [b.zUn.NSFW]: eM(x.t.H8Ri2d, x.t.WW6cJy),
        [b.zUn.TYPE]: eL(x.t.Vn5zn5, x.t.aq4uWF),
        [b.zUn.VIDEO_QUALITY_MODE]: eL(x.t.e68fAQ, x.t.djbES0),
        [b.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eL(x.t.nYz2mp, x.t.oczvRE),
        [b.zUn.FLAGS]: () => x.t.ImCQkp,
        [b.zUn.AVAILABLE_TAG_ADD]: () => x.t.H86QQU,
        [b.zUn.AVAILABLE_TAG_EDIT]: () => x.t.YtUzlp,
        [b.zUn.AVAILABLE_TAG_DELETE]: () => x.t['8QOsen'],
        [b.zUn.LINKED_LOBBY]: eC(x.t['+/3TkJ'], x.t['5kDYS0'])
    }),
    k = () =>
        j(
            {
                [b.zUn.NICK]: em(x.t.qXDsHh, x.t['m+qur6'], x.t.DvLvjI),
                [b.zUn.DEAF]: eM(x.t.mArLlZ, x.t.ddvVYG),
                [b.zUn.MUTE]: eM(x.t['bxs/lZ'], x.t.FjecQE),
                [b.zUn.ROLES_REMOVE]: () => x.t['+2SDWV'],
                [b.zUn.ROLES_ADD]: () => x.t['B3/3IC'],
                [b.zUn.PRUNE_DELETE_DAYS]: () => x.t['+Cvc+P'],
                [b.zUn.COMMUNICATION_DISABLED_UNTIL]: em(x.t.LXTQr6, x.t.LXTQr6, x.t.ULSdnJ),
                [b.zUn.BYPASSES_VERIFICATION]: eM(x.t.NBPBur, x.t.zATosr),
                [b.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => x.t.YbouFB
            },
            B()
        ),
    V = () =>
        j(
            {
                [b.zUn.NAME]: eL(x.t.QBmlaG, x.t.Lfs4r6),
                [b.zUn.DESCRIPTION]: eL(x.t.XeYKWF, x.t.PSfeIi),
                [b.zUn.PERMISSIONS_GRANTED]: () => x.t['9i/DvL'],
                [b.zUn.PERMISSIONS_DENIED]: () => x.t.pa1ZVl,
                [b.zUn.COLOR]: ev({ '#000000': x.t.TK6E1N }, x.t['2FQFi4']),
                [b.zUn.HOIST]: eM(x.t.gWfe29, x.t['+tb8kJ']),
                [b.zUn.MENTIONABLE]: eM(x.t.LL8VFB, x.t.Z7xzmJ),
                [b.zUn.ICON_HASH]: () => x.t['iEE79/'],
                [b.zUn.UNICODE_EMOJI]: () => x.t.KiLMMz
            },
            B()
        ),
    H = () =>
        G(j({}, B()), {
            [b.zUn.TITLE]: eL(x.t.sNpuy8, x.t['3Ukc/v']),
            [b.zUn.DESCRIPTION]: eL(x.t.PP1q09, x.t.z7pYLi),
            [b.zUn.OPTIONS]: () => x.t['3G5C9/'],
            [b.zUn.SINGLE_SELECT]: eM(x.t.v4WnR0, x.t['6Qg3uL']),
            [b.zUn.REQUIRED]: eM(x.t['0MPAMz'], x.t.pwsXio)
        }),
    K = () =>
        G(j({}, B()), {
            [b.zUn.DEFAULT_CHANNEL_IDS]: () => x.t['8M+D2t'],
            [b.zUn.ENABLE_DEFAULT_CHANNELS]: eM(x.t['EYd/lp'], x.t['36OZeX']),
            [b.zUn.ENABLE_ONBOARDING_PROMPTS]: eM(x.t.V3u8PT, x.t.r66lc3),
            [b.zUn.ENABLED]: eM(x.t.SODVIi, x.t.u8HY5e)
        }),
    Z = () =>
        G(j({}, B()), {
            [b.zUn.WELCOME_MESSAGE]: () => x.t.dKQ1xc,
            [b.zUn.NEW_MEMBER_ACTIONS]: () => x.t.jDUInp,
            [b.zUn.RESOURCE_CHANNELS]: () => x.t.SIX0mp
        }),
    Y = () =>
        j(
            {
                [b.zUn.CODE]: () => x.t.rrRHgY,
                [b.zUn.CHANNEL_ID]: () => x.t.Q1vd5u,
                [b.zUn.MAX_USES]: ev({ 0: x.t.Yx8LNj }, x.t['3ygnwc']),
                [b.zUn.MAX_AGE]: ev({ [x.NW.string(x.t.PqEzn5)]: x.t.uWrLv7 }, x.t['Q+5kcH']),
                [b.zUn.TEMPORARY]: eM(x.t.MWp6Hx, x.t.omiqTE),
                [b.zUn.FLAGS]: eb({ [o.$.IS_GUEST_INVITE]: x.t.XYZMbG })
            },
            B()
        ),
    q = () => ({
        [b.zUn.CHANNEL_ID]: eL(x.t.jhPpra, x.t.ar4qYG),
        [b.zUn.NAME]: eL(x.t.ZVGrzc, x.t.tywdZW),
        [b.zUn.AVATAR_HASH]: () => x.t.KB52Ul,
        [b.zUn.REASON]: () => x.t['2IW3Cw']
    }),
    X = () => j({ [b.zUn.NAME]: eL(x.t.ahU1o6, x.t['wxs+vb']) }, B()),
    J = () =>
        j(
            {
                [b.zUn.NAME]: eL(x.t.cdl0Ym, x.t.o3W2l5),
                [b.zUn.TAGS]: eL(x.t['zwL+S0'], x.t.VYfKAw),
                [b.zUn.DESCRIPTION]: eL(x.t.XeYKWF, x.t.PSfeIi)
            },
            B()
        ),
    Q = () =>
        j(
            {
                [b.zUn.ENABLE_EMOTICONS]: eM(x.t['FI0m5+'], x.t.olpKCw),
                [b.zUn.EXPIRE_BEHAVIOR]: eb({
                    0: x.t['1Bb1+v'],
                    1: x.t.vjlW6u
                }),
                [b.zUn.EXPIRE_GRACE_PERIOD]: () => x.t.iovXMT
            },
            B()
        ),
    $ = () =>
        j(
            {
                [b.zUn.TOPIC]: eL(x.t['m+veAg'], x.t.esQcxs),
                [b.zUn.PRIVACY_LEVEL]: eb({
                    [y.j8.GUILD_ONLY]: x.t['EC+CDg'],
                    [y.j8.PUBLIC]: x.t['pK/WGx']
                })
            },
            B()
        ),
    ee = () =>
        j(
            {
                [b.zUn.NAME]: () => x.t['21EXHR'],
                [b.zUn.DESCRIPTION]: () => x.t.Vm1of3,
                [b.zUn.PRIVACY_LEVEL]: eb({
                    [y.j8.GUILD_ONLY]: x.t['EC+CDg'],
                    [y.j8.PUBLIC]: x.t['pK/WGx']
                }),
                [b.zUn.STATUS]: eb({
                    [y.p1.SCHEDULED]: x.t.hXKDgo,
                    [y.p1.ACTIVE]: x.t.lRX1n5,
                    [y.p1.COMPLETED]: x.t['/eFIho'],
                    [y.p1.CANCELED]: x.t.NWIYho
                }),
                [b.zUn.ENTITY_TYPE]: eb({
                    [y.WX.NONE]: x.t['6sO3Sk'],
                    [y.WX.STAGE_INSTANCE]: x.t['Wo+s19'],
                    [y.WX.VOICE]: x.t.XCVaIC,
                    [y.WX.EXTERNAL]: x.t.IvhAj4
                }),
                [b.zUn.CHANNEL_ID]: eC(x.t.yJBIcX, x.t['+PqSsr']),
                [b.zUn.LOCATION]: eC(x.t.GaMBHx, x.t.PsICk5),
                [b.zUn.IMAGE_HASH]: eC(x.t.S3vcRE, x.t.KQu47O)
            },
            B()
        ),
    et = () =>
        j(
            {
                [b.zUn.SCHEDULED_START_TIME]: eC(x.t.zMIYVl, x.t.fzF8GR),
                [b.zUn.SCHEDULED_END_TIME]: eC(x.t.vONSQE, x.t.IlIti4),
                [b.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return x.t['7RkicX'];
                        else if (e.oldValue && !e.newValue) return x.t.dRNTWV;
                    }
                }
            },
            B()
        ),
    en = () =>
        j(
            {
                [b.zUn.NAME]: eL(x.t.tUKRzc, x.t.kPCHOD),
                [b.zUn.ARCHIVED]: eM(x.t.jDi9FB, x.t.F6dvbW),
                [b.zUn.LOCKED]: eM(x.t.JSy1QU, x.t.C7Jgo6),
                [b.zUn.INVITABLE]: eM(x.t.dxNUs7, x.t.biJvYG),
                [b.zUn.AUTO_ARCHIVE_DURATION]: eL(x.t.LuaG39, x.t['18d9qq']),
                [b.zUn.RATE_LIMIT_PER_USER]: eL(x.t['7lirhI'], x.t.j4CCJS),
                [b.zUn.FLAGS]: () => x.t.sSAQtr
            },
            B()
        ),
    er = (e) => {
        let t = j({}, B());
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (t[e.key] = () => x.t['JH+89P']) : (t[e.key] = () => x.t.HUrFDg)) : (t[e.key] = () => x.t.vynxnZ);
                }),
            t
        );
    },
    el = () =>
        j(
            {
                [b.zUn.NAME]: () => x.t.XwxAJS,
                [b.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => x.t.fx0pys,
                [b.zUn.AUTO_MODERATION_EVENT_TYPE]: () => x.t['46Y+Ly'],
                [b.zUn.AUTO_MODERATION_ACTIONS]: () => x.t['8efxfn'],
                [b.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? x.t.fCmxCw : x.t.Wrg9Ji;
                },
                [b.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => x.t.TRb7Nz,
                [b.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => x.t.mzitLC,
                [b.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => x.t['h/lM6+'],
                [b.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => x.t['9V2yaG'],
                [b.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => x.t['4Qe9n5'],
                [b.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => x.t.GyZtxs,
                [b.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => x.t.OQDadX,
                [b.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => x.t['FvvR+P'],
                [b.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => x.t.p5nSv7
            },
            B()
        ),
    ea = () =>
        j(
            {
                [b.zUn.NAME]: eL(x.t.VOtRSE, x.t.OK7B8P),
                [b.zUn.VOLUME]: eL(x.t.igrDBw, x.t.L5lDFB),
                [b.zUn.EMOJI_NAME]: em(x.t.IIanaW, x.t.z4w4U1, x.t.V8Tfyc),
                [b.zUn.EMOJI_ID]: em(x.t.ainxMD, x.t['2NPsYm'], x.t['8crtnp'])
            },
            B()
        ),
    es = () =>
        j(
            {
                [b.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? x.t.fnkzDQ : x.t.WYT6kZ),
                [b.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? x.t.jzSvVV : x.t.WxyOtr)
            },
            B()
        ),
    ei = () => j({ [b.zUn.STATUS]: () => x.t.HyCSnJ }, B()),
    eo = () => ({
        [b.zUn.DESCRIPTION]: () => x.t.nsUZKS,
        [b.zUn.BRAND_COLOR_PRIMARY]: () => x.t.qe9mgI,
        [b.zUn.CUSTOM_BANNER_HASH]: () => x.t['04b5KC'],
        [b.zUn.TRAITS]: () => x.t.dEy9WF,
        [b.zUn.GAME_APPLICATION_IDS]: () => x.t['8BOT39'],
        [b.zUn.VISIBILITY]: () => x.t.bCl1Eh
    }),
    eE = {
        [b.KFR.CHANNEL]: {
            [b.zUn.ID]: !0,
            [b.zUn.PERMISSION_OVERWRITES]: !0
        },
        [b.KFR.CHANNEL_OVERWRITE]: {
            [b.zUn.TYPE]: !0,
            [b.zUn.ID]: !0,
            [b.zUn.PERMISSION_OVERWRITES]: !0
        },
        [b.KFR.INVITE]: {
            [b.zUn.INVITER_ID]: !0,
            [b.zUn.USES]: !0
        },
        [b.KFR.WEBHOOK]: {
            [b.zUn.TYPE]: !0,
            [b.zUn.APPLICATION_ID]: !0
        },
        [b.KFR.INTEGRATION]: { [b.zUn.TYPE]: !0 },
        [b.KFR.THREAD]: {
            [b.zUn.ID]: !0,
            [b.zUn.TYPE]: !0
        },
        [b.KFR.STICKER]: {
            [b.zUn.ID]: !0,
            [b.zUn.TYPE]: !0,
            [b.zUn.ASSET]: !0,
            [b.zUn.FORMAT_TYPE]: !0,
            [b.zUn.AVAILABLE]: !0,
            [b.zUn.GUILD_ID]: !0
        },
        [b.KFR.GUILD_HOME]: { [b.zUn.ENTITY_TYPE]: !0 },
        [b.KFR.GUILD_ONBOARDING]: { [b.zUn.PROMPTS]: !0 },
        [b.KFR.GUILD_SOUNDBOARD]: {
            [b.zUn.ID]: !0,
            [b.zUn.SOUND_ID]: !0
        }
    },
    ec = () => [
        {
            value: b.rsA.ALL,
            label: x.NW.string(x.t.QxEVcn),
            valueLabel: x.NW.string(x.t.an9Ry8)
        },
        {
            value: b.rsA.GUILD_UPDATE,
            label: x.NW.string(x.t['5INZa2'])
        },
        {
            value: b.rsA.CHANNEL_CREATE,
            label: x.NW.string(x.t['2uh4vL'])
        },
        {
            value: b.rsA.CHANNEL_UPDATE,
            label: x.NW.string(x.t.mGsBLS)
        },
        {
            value: b.rsA.CHANNEL_DELETE,
            label: x.NW.string(x.t.hCHzAg)
        },
        {
            value: b.rsA.CHANNEL_OVERWRITE_CREATE,
            label: x.NW.string(x.t['8TnAMD'])
        },
        {
            value: b.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: x.NW.string(x.t.Jqx0Bg)
        },
        {
            value: b.rsA.CHANNEL_OVERWRITE_DELETE,
            label: x.NW.string(x.t.gBXOr6)
        },
        {
            value: b.rsA.MEMBER_KICK,
            label: x.NW.string(x.t['Q1/hNz'])
        },
        {
            value: b.rsA.MEMBER_PRUNE,
            label: x.NW.string(x.t.tOTTjY)
        },
        {
            value: b.rsA.MEMBER_BAN_ADD,
            label: x.NW.string(x.t['NfPn+f'])
        },
        {
            value: b.rsA.MEMBER_BAN_REMOVE,
            label: x.NW.string(x.t.XCsGfH)
        },
        {
            value: b.rsA.MEMBER_UPDATE,
            label: x.NW.string(x.t['F/jmND'])
        },
        {
            value: b.rsA.MEMBER_ROLE_UPDATE,
            label: x.NW.string(x.t.zAveSE)
        },
        {
            value: b.rsA.MEMBER_MOVE,
            label: x.NW.string(x.t.QshteX)
        },
        {
            value: b.rsA.MEMBER_DISCONNECT,
            label: x.NW.string(x.t.Z45os7)
        },
        {
            value: b.rsA.BOT_ADD,
            label: x.NW.string(x.t.vuH24e)
        },
        {
            value: b.rsA.THREAD_CREATE,
            label: x.NW.string(x.t['+zl0DA'])
        },
        {
            value: b.rsA.THREAD_UPDATE,
            label: x.NW.string(x.t.rbIry8)
        },
        {
            value: b.rsA.THREAD_DELETE,
            label: x.NW.string(x.t.hFjNEB)
        },
        {
            value: b.rsA.ROLE_CREATE,
            label: x.NW.string(x.t.AbxKtr)
        },
        {
            value: b.rsA.ROLE_UPDATE,
            label: x.NW.string(x.t.t3Z6sb)
        },
        {
            value: b.rsA.ROLE_DELETE,
            label: x.NW.string(x.t.YsFpa2)
        },
        {
            value: b.rsA.ONBOARDING_PROMPT_CREATE,
            label: x.NW.string(x.t.ZV9tqa)
        },
        {
            value: b.rsA.ONBOARDING_PROMPT_UPDATE,
            label: x.NW.string(x.t.PcOdvb)
        },
        {
            value: b.rsA.ONBOARDING_PROMPT_DELETE,
            label: x.NW.string(x.t['+r33NT'])
        },
        {
            value: b.rsA.ONBOARDING_CREATE,
            label: x.NW.string(x.t.uDADdX)
        },
        {
            value: b.rsA.ONBOARDING_UPDATE,
            label: x.NW.string(x.t.J1H1ws)
        },
        {
            value: b.rsA.HOME_SETTINGS_CREATE,
            label: x.NW.string(x.t.Di4cvL)
        },
        {
            value: b.rsA.HOME_SETTINGS_UPDATE,
            label: x.NW.string(x.t.tzyrJC)
        },
        {
            value: b.rsA.INVITE_CREATE,
            label: x.NW.string(x.t['0BNJdX'])
        },
        {
            value: b.rsA.INVITE_UPDATE,
            label: x.NW.string(x.t['o++obW'])
        },
        {
            value: b.rsA.INVITE_DELETE,
            label: x.NW.string(x.t.iP40Aw)
        },
        {
            value: b.rsA.WEBHOOK_CREATE,
            label: x.NW.string(x.t['tBF4+f'])
        },
        {
            value: b.rsA.WEBHOOK_UPDATE,
            label: x.NW.string(x.t.eV3McH)
        },
        {
            value: b.rsA.WEBHOOK_DELETE,
            label: x.NW.string(x.t.AAL3Ky)
        },
        {
            value: b.rsA.EMOJI_CREATE,
            label: x.NW.string(x.t.RuWm0d)
        },
        {
            value: b.rsA.EMOJI_UPDATE,
            label: x.NW.string(x.t.WzdUY2)
        },
        {
            value: b.rsA.EMOJI_DELETE,
            label: x.NW.string(x.t.c3dK2N)
        },
        {
            value: b.rsA.MESSAGE_DELETE,
            label: x.NW.string(x.t.daTfXl)
        },
        {
            value: b.rsA.MESSAGE_BULK_DELETE,
            label: x.NW.string(x.t.nrBxen)
        },
        {
            value: b.rsA.MESSAGE_PIN,
            label: x.NW.string(x.t.MUldyM)
        },
        {
            value: b.rsA.MESSAGE_UNPIN,
            label: x.NW.string(x.t.n4zKhI)
        },
        {
            value: b.rsA.INTEGRATION_CREATE,
            label: x.NW.string(x.t['deNm8/'])
        },
        {
            value: b.rsA.INTEGRATION_UPDATE,
            label: x.NW.string(x.t.HT7Sfn)
        },
        {
            value: b.rsA.INTEGRATION_DELETE,
            label: x.NW.string(x.t['+kJ09v'])
        },
        {
            value: b.rsA.STICKER_CREATE,
            label: x.NW.string(x.t['3DzNjY'])
        },
        {
            value: b.rsA.STICKER_UPDATE,
            label: x.NW.string(x.t.tdhW5e)
        },
        {
            value: b.rsA.STICKER_DELETE,
            label: x.NW.string(x.t['+ZhGOj'])
        },
        {
            value: b.rsA.STAGE_INSTANCE_CREATE,
            label: x.NW.string(x.t.sPbjAw)
        },
        {
            value: b.rsA.STAGE_INSTANCE_UPDATE,
            label: x.NW.string(x.t.cW9LfH)
        },
        {
            value: b.rsA.STAGE_INSTANCE_DELETE,
            label: x.NW.string(x.t['U1r+yM'])
        },
        {
            value: b.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: x.NW.string(x.t.H81Zy8)
        },
        {
            value: b.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: x.NW.string(x.t.FM69l5)
        },
        {
            value: b.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: x.NW.string(x.t.Rq28Bg)
        },
        {
            value: b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: x.NW.string(x.t.iPdFOj)
        },
        {
            value: b.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: x.NW.string(x.t.gNq5z8)
        },
        {
            value: b.rsA.AUTO_MODERATION_RULE_CREATE,
            label: x.NW.string(x.t.f72Zqa)
        },
        {
            value: b.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: x.NW.string(x.t.XeqIio)
        },
        {
            value: b.rsA.AUTO_MODERATION_RULE_DELETE,
            label: x.NW.string(x.t.syAApa)
        },
        {
            value: b.rsA.GUILD_HOME_FEATURE_ITEM,
            label: x.NW.string(x.t.lhG5KC)
        },
        {
            value: b.rsA.GUILD_HOME_REMOVE_ITEM,
            label: x.NW.string(x.t.lRPRwc)
        },
        {
            value: b.rsA.SOUNDBOARD_SOUND_CREATE,
            label: x.NW.string(x.t.yoRi5u)
        },
        {
            value: b.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: x.NW.string(x.t.uKlG0d)
        },
        {
            value: b.rsA.SOUNDBOARD_SOUND_DELETE,
            label: x.NW.string(x.t.gq0iCQ)
        },
        {
            value: b.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: x.NW.string(x.t.rGr0YG)
        },
        {
            value: b.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: x.NW.string(x.t.V9PEQ0)
        }
    ];
function eu(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function e_(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function ed(e) {
    var t;
    let n = ec().find((t) => t.value === e.action);
    return null != eu(b.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? x.NW.string(x.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [u.J6.SECONDS]: (e) => x.NW.formatToPlainString(x.t.geSp4O, { seconds: e }),
    [u.J6.MINUTES]: (e) => x.NW.formatToPlainString(x.t.iXLF9f, { minutes: e }),
    [u.J6.HOURS]: (e) => x.NW.formatToPlainString(x.t.xCjYxM, { hours: e }),
    [u.J6.DAYS]: (e) => x.NW.formatToPlainString(x.t.k2UNz8, { days: e })
};
function eT(e) {
    let t = eu(b.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = e_(b.zUn.ROLES_ADD, e).length > 0,
        r = e_(b.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - m.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, u.CI)(r, W);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in eA) {
                let e = l.unit,
                    t = l.unit === u.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return eA[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return x.NW.string(x.t.MA1ltr);
    } else if (n && r) return x.NW.string(x.t.RdMMe3);
    else if (n) return x.NW.string(x.t['4GQqs7']);
    else if (r) return x.NW.string(x.t['8mQ6x8']);
    return null;
}
function eN(e) {
    let t = e_(b.zUn.ROLES_ADD, e),
        n = e_(b.zUn.ROLES_REMOVE, e),
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
        ? x.NW.formatToPlainString(x.t.tZw1ER, {
              roleNamesAdded: r,
              roleNamesRemoved: l
          })
        : t.length > 0
          ? x.NW.formatToPlainString(x.t['/mTqt7'], { roleNames: r })
          : n.length > 0
            ? x.NW.formatToPlainString(x.t.Wk4pAA, { roleNames: l })
            : null;
}
function eI(e) {
    switch (e.action) {
        case b.rsA.GUILD_UPDATE:
            return x.t.LjZO39;
        case b.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === b.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case b.d4z.GUILD_STAGE_VOICE:
                    return x.t['OKp4+v'];
                case b.d4z.GUILD_VOICE:
                    return x.t.NPOy4O;
                case b.d4z.GUILD_CATEGORY:
                    return x.t.T3KIj4;
                default:
                    return x.t.wrYNGx;
            }
        case b.rsA.CHANNEL_UPDATE:
            return x.t.nTYk6O;
        case b.rsA.CHANNEL_DELETE:
            return x.t.ynfvkp;
        case b.rsA.CHANNEL_OVERWRITE_CREATE:
            return x.t.l5Cu1d;
        case b.rsA.CHANNEL_OVERWRITE_UPDATE:
            return x.t.uhtbNT;
        case b.rsA.CHANNEL_OVERWRITE_DELETE:
            return x.t['HASt//'];
        case b.rsA.MEMBER_KICK:
            return x.t.B5hDZW;
        case b.rsA.MEMBER_PRUNE:
            return x.t.qKOZTE;
        case b.rsA.MEMBER_BAN_ADD:
            return x.t.XklUm5;
        case b.rsA.MEMBER_BAN_REMOVE:
            return x.t.o3Y6HB;
        case b.rsA.MEMBER_UPDATE:
            return x.t.pznhLC;
        case b.rsA.MEMBER_ROLE_UPDATE:
            return x.t.VngfiY;
        case b.rsA.MEMBER_MOVE:
            return x.t.Yt6NkZ;
        case b.rsA.MEMBER_DISCONNECT:
            return x.t.K4eCZ2;
        case b.rsA.BOT_ADD:
            return x.t.fWvX0N;
        case b.rsA.ROLE_CREATE:
            return x.t.UTLTx8;
        case b.rsA.ROLE_UPDATE:
            return x.t.NRbN19;
        case b.rsA.ROLE_DELETE:
            return x.t['4s63tb'];
        case b.rsA.INVITE_CREATE:
            return x.t.YHOXW1;
        case b.rsA.INVITE_UPDATE:
            return x.t.ja3kGR;
        case b.rsA.INVITE_DELETE:
            return x.t['3n/iWl'];
        case b.rsA.WEBHOOK_CREATE:
            return x.t.MhYhio;
        case b.rsA.WEBHOOK_UPDATE:
            return x.t['6GTlWF'];
        case b.rsA.WEBHOOK_DELETE:
            return x.t.in0VjY;
        case b.rsA.EMOJI_CREATE:
            return x.t['7vekRE'];
        case b.rsA.EMOJI_UPDATE:
            return x.t.IsCKfn;
        case b.rsA.EMOJI_DELETE:
            return x.t.JnUaVF;
        case b.rsA.STICKER_CREATE:
            return x.t.DRZifn;
        case b.rsA.STICKER_UPDATE:
            return x.t.bhujGR;
        case b.rsA.STICKER_DELETE:
            return x.t.rGEP9f;
        case b.rsA.MESSAGE_DELETE:
            return x.t['HPkD+P'];
        case b.rsA.MESSAGE_BULK_DELETE:
            return x.t['3RIvLC'];
        case b.rsA.MESSAGE_PIN:
            return x.t.Yna7Ex;
        case b.rsA.MESSAGE_UNPIN:
            return x.t.NCxXUV;
        case b.rsA.INTEGRATION_CREATE:
            return x.t.HYvCb2;
        case b.rsA.INTEGRATION_UPDATE:
            return x.t.ibCCOT;
        case b.rsA.INTEGRATION_DELETE:
            return x.t['8zScWV'];
        case b.rsA.STAGE_INSTANCE_CREATE:
            return x.t['n7x/DA'];
        case b.rsA.STAGE_INSTANCE_UPDATE:
            return x.t['0hQYU1'];
        case b.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return x.t['Oi/in5'];
            return x.t['7ZIFm5'];
        case b.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return x.t.S7k52t;
        case b.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return x.t.ebTK19;
        case b.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return x.t['/ARPKS'];
        case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return x.t['8qCI39'];
        case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return x.t.zYb2dX;
        case b.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === b.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case b.d4z.PRIVATE_THREAD:
                    return x.t['Br0y5+'];
                case b.d4z.ANNOUNCEMENT_THREAD:
                    return x.t['6uaMmJ'];
                default:
                    return x.t['2cxQ7O'];
            }
        case b.rsA.THREAD_UPDATE:
            return x.t.PSsy4u;
        case b.rsA.THREAD_DELETE:
            return x.t.s3Khn5;
        case b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return x.t.uzCqBg;
        case b.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return x.t.NqWv2N;
        case b.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === P.fX.USER_PROFILE.toString()) return x.t.YQsjen;
            return x.t.SD0PwM;
        case b.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return x.t.Vk4Twc;
        case b.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return x.t['/W5u5u'];
        case b.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return x.t.ONvWys;
        case b.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return x.t.ryGLk5;
        case b.rsA.AUTO_MODERATION_RULE_CREATE:
            return x.t.NKljj4;
        case b.rsA.AUTO_MODERATION_RULE_UPDATE:
            return x.t['3wEA9v'];
        case b.rsA.AUTO_MODERATION_RULE_DELETE:
            return x.t.umua3t;
        case b.rsA.ONBOARDING_PROMPT_CREATE:
            return x.t['/8A1g4'];
        case b.rsA.ONBOARDING_PROMPT_UPDATE:
            return x.t.ArIrWF;
        case b.rsA.ONBOARDING_PROMPT_DELETE:
            return x.t.IuBTam;
        case b.rsA.ONBOARDING_CREATE:
            return x.t.wDaq39;
        case b.rsA.ONBOARDING_UPDATE:
            return x.t['yONu/v'];
        case b.rsA.HOME_SETTINGS_CREATE:
            return x.t.dSdCjI;
        case b.rsA.HOME_SETTINGS_UPDATE:
            return x.t.XHE8qq;
        case b.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === b.zUn.ENTITY_TYPE) : null;
            if (null == l) return x.t['UZ+U3N'];
            switch (l.newValue) {
                case i.w.MESSAGE:
                    return x.t['PyEa+P'];
                case i.w.FORUM_POST:
                    return x.t.hCuAb2;
                default:
                    return x.t['UZ+U3N'];
            }
        case b.rsA.GUILD_HOME_REMOVE_ITEM:
            return x.t.kPReur;
        case b.rsA.SOUNDBOARD_SOUND_CREATE:
            return x.t['0PD83d'];
        case b.rsA.SOUNDBOARD_SOUND_UPDATE:
            return x.t.CM8n19;
        case b.rsA.SOUNDBOARD_SOUND_DELETE:
            return x.t['kVz4//'];
        case b.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return x.t.MWjnU1;
        case b.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return x.t.aS8Krq;
        case b.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return x.t.NUKUb2;
        case b.rsA.GUILD_PROFILE_UPDATE:
            return x.t.Ed6hFx;
        default:
            return null;
    }
}
function eO(e) {
    switch (e) {
        case v.zZ.GUILD_FEED_REMOVED:
            return x.NW.string(x.t['5G8ZDw']);
        case v.zZ.ACTIVE_CHANNELS_REMOVED:
            return x.NW.string(x.t['4YLtzM']);
        case v.zZ.PINNED:
            return x.NW.string(x.t['1QLRYW']);
    }
    return null;
}
function eg(e) {
    switch (e) {
        case v.zZ.GUILD_FEED_REMOVED:
            return x.NW.string(x.t.S5kuWV);
        case v.zZ.ACTIVE_CHANNELS_REMOVED:
            return x.NW.string(x.t['8qpgc3']);
        case v.zZ.PINNED:
            return x.NW.string(x.t.CMweGB);
    }
    return null;
}
function ef(e, t) {
    switch (e) {
        case b.Plq.CREATE_INSTANT_INVITE:
            return x.NW.string(x.t.zJrgTE);
        case b.Plq.KICK_MEMBERS:
            return x.NW.string(x.t.pBNv6u);
        case b.Plq.BAN_MEMBERS:
            return x.NW.string(x.t.oTBA7O);
        case b.Plq.ADMINISTRATOR:
            return x.NW.string(x.t.PGvZqa);
        case b.Plq.MANAGE_CHANNELS:
            if (t.targetType === b.KFR.CHANNEL || t.targetType === b.KFR.CHANNEL_OVERWRITE) return x.NW.string(x.t.nAw15O);
            return x.NW.string(x.t['9qLtWl']);
        case b.Plq.MANAGE_GUILD:
            return x.NW.string(x.t.QZRcfH);
        case b.Plq.VIEW_GUILD_ANALYTICS:
            return x.NW.string(x.t.rQJBEx);
        case b.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return x.NW.string(x.t['0lTLTk']);
        case b.Plq.CHANGE_NICKNAME:
            return x.NW.string(x.t.dilOFx);
        case b.Plq.MANAGE_NICKNAMES:
            return x.NW.string(x.t['t+Ct5+']);
        case b.Plq.MANAGE_ROLES:
            return x.NW.string(x.t['C8d+oK']);
        case b.Plq.MANAGE_WEBHOOKS:
            return x.NW.string(x.t['/ADKmJ']);
        case b.Plq.CREATE_GUILD_EXPRESSIONS:
            return x.NW.string(x.t.HarVuL);
        case b.Plq.MANAGE_GUILD_EXPRESSIONS:
            return x.NW.string(x.t.bbuXIi);
        case b.Plq.VIEW_AUDIT_LOG:
            return x.NW.string(x.t.fZgLpK);
        case b.Plq.VIEW_CHANNEL:
            if (t.targetType === b.KFR.CHANNEL || t.targetType === b.KFR.CHANNEL_OVERWRITE) return x.NW.string(x.t['W/A4Qk']);
            return x.NW.string(x.t.uV83ys);
        case b.Plq.SEND_MESSAGES:
            return x.NW.string(x.t.T32rkJ);
        case b.Plq.SEND_TTS_MESSAGES:
            return x.NW.string(x.t.Mg7bkp);
        case b.Plq.USE_APPLICATION_COMMANDS:
            return x.NW.string(x.t.shbR1d);
        case b.Plq.MANAGE_MESSAGES:
            return x.NW.string(x.t['6lU9xM']);
        case b.Plq.EMBED_LINKS:
            return x.NW.string(x.t['969dEB']);
        case b.Plq.ATTACH_FILES:
            return x.NW.string(x.t['3AS4UF']);
        case b.Plq.READ_MESSAGE_HISTORY:
            return x.NW.string(x.t.l9ufaW);
        case b.Plq.MENTION_EVERYONE:
            return x.NW.string(x.t.Y78KGB);
        case b.Plq.USE_EXTERNAL_EMOJIS:
            return x.NW.string(x.t.BpBGZW);
        case b.Plq.USE_EXTERNAL_STICKERS:
            return x.NW.string(x.t['UeRs+f']);
        case b.Plq.ADD_REACTIONS:
            return x.NW.string(x.t.yEoJAg);
        case b.Plq.CONNECT:
            return x.NW.string(x.t.S0W8Z2);
        case b.Plq.SPEAK:
            return x.NW.string(x.t['8w1tIS']);
        case b.Plq.MUTE_MEMBERS:
            return x.NW.string(x.t['8EI309']);
        case b.Plq.DEAFEN_MEMBERS:
            return x.NW.string(x.t['9L47Fh']);
        case b.Plq.MOVE_MEMBERS:
            return x.NW.string(x.t.YtjJPT);
        case b.Plq.USE_VAD:
            return x.NW.string(x.t['08zAV1']);
        case b.Plq.PRIORITY_SPEAKER:
            return x.NW.string(x.t.BVK71t);
        case b.Plq.STREAM:
            return x.NW.string(x.t.FlNoSU);
        case b.Plq.REQUEST_TO_SPEAK:
            return x.NW.string(x.t['5kicT0']);
        case b.Plq.CREATE_EVENTS:
            return x.NW.string(x.t.qyjZub);
        case b.Plq.MANAGE_EVENTS:
            return x.NW.string(x.t.HIgA5e);
        case b.Plq.CREATE_PUBLIC_THREADS:
            return x.NW.string(x.t['25rKnZ']);
        case b.Plq.CREATE_PRIVATE_THREADS:
            return x.NW.string(x.t.QwbTSU);
        case b.Plq.SEND_MESSAGES_IN_THREADS:
            return x.NW.string(x.t.fTE74u);
        case b.Plq.MANAGE_THREADS:
            return x.NW.string(x.t.kEqgr6);
        case b.Plq.MODERATE_MEMBERS:
            return x.NW.string(x.t['+RL6p6']);
        case b.Plq.USE_CLYDE_AI:
            return x.NW.string(x.t['8eeEZm']);
        case b.Plq.SET_VOICE_CHANNEL_STATUS:
            return x.NW.string(x.t.VBwkUV);
        case b.Plq.SEND_POLLS:
            return x.NW.string(x.t.UMQ7W1);
        case b.Plq.USE_EXTERNAL_APPS:
            return x.NW.string(x.t.TtA5rK);
    }
    return null;
}
function eR(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = (function (e, t) {
                    switch (e.targetType) {
                        case b.KFR.GUILD:
                        case b.KFR.GUILD_HOME:
                        case b.KFR.GUILD_PROFILE:
                            return t;
                        case b.KFR.CHANNEL:
                        case b.KFR.CHANNEL_OVERWRITE:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => p.Z.getChannel(e),
                                (e) => (0, d.F6)(e, U.default, h.Z, !0)
                            );
                        case b.KFR.USER:
                            return eU(
                                e,
                                b.zUn.NICK,
                                (e) => U.default.getUser(e),
                                (e) => e
                            );
                        case b.KFR.ROLE:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => S.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case b.KFR.ONBOARDING_PROMPT:
                            let n = eU(
                                e,
                                b.zUn.ID,
                                (e) => I.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? x.NW.string(x.t.ZNQyiY) : n;
                        case b.KFR.GUILD_ONBOARDING:
                        case b.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case b.KFR.INVITE:
                            return eU(e, b.zUn.CODE, b.VqG);
                        case b.KFR.INTEGRATION:
                            return eU(
                                e,
                                b.zUn.TYPE,
                                (e) => M.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.WEBHOOK:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => M.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.EMOJI:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => T.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.STICKER:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => f.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case b.KFR.STAGE_INSTANCE:
                            return eU(
                                e,
                                b.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(g.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case b.KFR.GUILD_SCHEDULED_EVENT:
                        case b.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => M.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.THREAD:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => M.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = M.Z.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => M.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === _.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case b.KFR.AUTO_MODERATION_RULE:
                            return eU(
                                e,
                                b.zUn.NAME,
                                (e) => M.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.GUILD_SOUNDBOARD:
                            return eU(e, b.zUn.NAME, b.VqG);
                        case b.KFR.HOME_SETTINGS:
                            return eU(
                                e,
                                b.zUn.GUILD_ID,
                                (e) => O.Z.getSettings(e),
                                () => x.NW.string(x.t.VbpLyc),
                                t.id
                            );
                        case b.KFR.VOICE_CHANNEL_STATUS:
                            return eU(
                                e,
                                b.zUn.STATUS,
                                (e) => p.Z.getChannel(e),
                                (e) => (0, d.F6)(e, U.default, h.Z, !0)
                            );
                        default:
                            return F.warn('Unknown targetType for log', e), null;
                    }
                })(e, t),
                a = U.default.getUser(e.userId);
            if (null != r || [b.rsA.MEMBER_PRUNE, b.rsA.MEMBER_DISCONNECT, b.rsA.MEMBER_MOVE, b.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, b.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', a)).set('target', r)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let n = j({}, e.options);
                                switch (e.options.type) {
                                    case b.jwA.USER:
                                        n.subtarget = eD(
                                            e.options.id,
                                            (e) => U.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case b.jwA.ROLE:
                                        n.subtarget = eD(e.options.role_name, b.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = eU(
                                            e,
                                            '',
                                            (e) => p.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let r = M.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find((t) => t.event_exception_id === e.options.event_exception_id);
                                    n.subtarget = (0, D.vc)(s()(m.default.extractTimestamp(null != (t = null == l ? void 0 : l.event_exception_id) ? t : '0')), 'LL');
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
                            if (t.action === b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case b.ecB.ROLE:
                                        e.subtarget = eD(
                                            t.id,
                                            (e) => S.Z.getRole(n.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case b.ecB.USER:
                                        e.subtarget = eD(
                                            t.id,
                                            (e) => U.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case b.ecB.CHANNEL:
                                        t.id === l()(n.id).subtract(1).toString()
                                            ? (e.subtarget = x.NW.string(x.t.MSYhgo))
                                            : (e.subtarget = eD(
                                                  t.id,
                                                  (e) => p.Z.getChannel(e),
                                                  (e) => (0, d.F6)(e, U.default, h.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case b.zUn.OWNER_ID:
                                    return eh(e, (e) => U.default.getUser(e));
                                case b.zUn.CHANNEL_ID:
                                case b.zUn.AFK_CHANNEL_ID:
                                case b.zUn.SYSTEM_CHANNEL_ID:
                                case b.zUn.RULES_CHANNEL_ID:
                                case b.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eh(
                                        e,
                                        (e) => p.Z.getChannel(e),
                                        (e) => (0, d.F6)(e, U.default, h.Z, !0)
                                    );
                                case b.zUn.AFK_TIMEOUT:
                                    return eh(e, (e) => e / 60);
                                case b.zUn.BITRATE:
                                    return eh(e, (e) => e / 1000);
                                case b.zUn.COLOR:
                                    return eh(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case b.zUn.THEME_COLORS:
                                    return eh(e, (e) => ''.concat((0, c.Rf)(e[0]).toUpperCase(), ', ').concat((0, c.Rf)(e[1]).toUpperCase()));
                                case b.zUn.MAX_AGE:
                                    return eh(e, (e) => {
                                        let t = C.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case b.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = ep(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new R.ms(b.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new R.ms(b.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case b.zUn.PERMISSIONS_GRANTED:
                                case b.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = ep(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new R.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new R.ms(b.zUn.PERMISSIONS_RESET, r, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case b.zUn.FLAGS: {
                                    let t = [],
                                        { added: n, removed: r } = (function (e, t) {
                                            let n = 'number' == typeof e ? e : 0,
                                                r = 'number' == typeof t ? t : 0,
                                                l = L.Ge(r, n),
                                                a = L.Ge(n, r),
                                                s = [],
                                                i = [];
                                            for (let e in v.zZ) {
                                                let t = v.zZ[e];
                                                L.yE(l, t) && s.push(t), L.yE(a, t) && i.push(t);
                                            }
                                            return {
                                                added: s,
                                                removed: i
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new R.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let n = new R.ms(e.key, r, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case b.zUn.PREFERRED_LOCALE:
                                    return eh(e, (e) => {
                                        let t = (0, x.u5)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case b.zUn.VIDEO_QUALITY_MODE:
                                    return eh(e, (e) => (e === b.Ucd.FULL ? x.NW.string(x.t['7jOoJC']) : x.NW.string(x.t.jjKYpq)));
                                case b.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let r = {
                                            [b.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [b.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [b.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [b.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                        },
                                        a = [];
                                    return (
                                        Object.values(b.xmn).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                l = (e.newValue & t) === t;
                                            if (n === l) return;
                                            let s = new R.ms(r[t], !n, !l);
                                            a.push(s);
                                        }),
                                        a
                                    );
                                case b.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE)
                                        return eh(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(N.ZF).join(', ')
                                        );
                                    break;
                                case b.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eh(e, N.YN);
                                    break;
                                case b.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eh(e, N.Ar);
                                    break;
                                case b.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eh(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? x.NW.formatToMarkdownString(x.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case b.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case b.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case b.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case b.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case b.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case b.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eh(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case b.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE)
                                        return eh(
                                            e,
                                            (e) =>
                                                e
                                                    .map(p.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, d.F6)(e, U.default, h.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : x.NW.string(x.t['K/EdV1']))
                                        );
                                    break;
                                case b.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE)
                                        return eh(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => S.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : x.NW.string(x.t['K/EdV1']))
                                        );
                                    break;
                                case b.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: t, newValue: n } = e,
                                            r = Array.isArray(t) ? t : [],
                                            l = Array.isArray(n) ? n : [];
                                        if (0 === r.length && 0 === l.length) return e;
                                        let a = {},
                                            s = {};
                                        if (
                                            (r.forEach((e) => {
                                                a[e.id] = e;
                                            }),
                                            l.forEach((e) => {
                                                s[e.id] = e;
                                            }),
                                            r.length < l.length)
                                        ) {
                                            for (let e in s) if (null == a[e]) return new R.ms(b.zUn.AVAILABLE_TAG_ADD, null, eS(s[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in a) if (null == s[e]) return new R.ms(b.zUn.AVAILABLE_TAG_DELETE, null, eS(a[e]));
                                        }
                                        for (let e in a) {
                                            let t = a[e],
                                                n = s[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new R.ms(b.zUn.AVAILABLE_TAG_EDIT, eS(t), eS(n));
                                        }
                                        return e;
                                    })(e);
                                case b.zUn.SCHEDULED_START_TIME:
                                case b.zUn.SCHEDULED_END_TIME:
                                    return eh(e, (e) => (0, D.vc)(s()(new Date(e)), 'LLLL'));
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
function ep(e, t) {
    let n = E.vB('string' == typeof e ? e : 0),
        r = E.vB('string' == typeof t ? t : 0),
        l = E.Od(r, n),
        a = E.Od(n, r),
        s = [],
        i = [];
    for (let e in b.Plq) {
        let t = b.Plq[e];
        E.e$(l, t) && s.push(t), E.e$(a, t) && i.push(t);
    }
    return {
        added: s,
        removed: i
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
function eh(e, t, n) {
    let r = e.newValue,
        l = e.oldValue;
    return null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))), null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))), new R.ms(e.key, l || e.oldValue, r || e.newValue);
}
function eU(e, t, n, r, l) {
    let a = null,
        s = n((l = null != l ? l : e.targetId));
    if ((null != s && null != r && (a = r(s)), null == a)) {
        let t = M.Z.deletedTargets[e.targetType];
        null != t && null != t[l] && (a = t[l]);
    }
    if (null == a && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (a = n.newValue || n.oldValue);
    }
    return null != a ? a : l;
}
function eD(e, t, n) {
    let r = e,
        l = t(e);
    return null != l && null != n && (r = n(l)), r;
}
function eL(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eC(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function em(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function eM(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eb(e) {
    return (t) => e[t.newValue];
}
function ev(e, t) {
    return (n) => {
        var r;
        return null != (r = e[n.newValue]) ? r : t;
    };
}
