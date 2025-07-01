(n.d(t, {
    Bq: () => X,
    C0: () => ei,
    C2: () => $,
    EN: () => K,
    F1: () => ea,
    HE: () => V,
    HN: () => q,
    Iv: () => ec,
    J5: () => eT,
    JA: () => es,
    K: () => Q,
    ML: () => z,
    N$: () => J,
    N5: () => ef,
    QM: () => em,
    V$: () => ed,
    _$: () => eO,
    cT: () => eI,
    em: () => eg,
    hQ: () => eh,
    hx: () => W,
    lR: () => Y,
    lU: () => B,
    nm: () => e_,
    oD: () => H,
    pA: () => en,
    pY: () => Z,
    pi: () => et,
    rK: () => el,
    uB: () => ee,
    vc: () => eu,
    vm: () => er,
    zT: () => eo
}),
    n(415506),
    n(539854),
    n(49124));
var r = n(654861),
    l = n.n(r),
    i = n(913527),
    s = n.n(i),
    a = n(536402),
    o = n(533800),
    u = n(149765),
    c = n(866442),
    d = n(379649),
    E = n(911969),
    _ = n(933557),
    A = n(710845),
    m = n(339085),
    T = n(236413),
    f = n(45966),
    g = n(563534),
    I = n(427679),
    h = n(926491),
    O = n(387667),
    N = n(592125),
    p = n(485386),
    R = n(699516),
    S = n(594174),
    C = n(55935),
    b = n(630388),
    v = n(971130),
    D = n(709054),
    x = n(987707),
    M = n(981631),
    L = n(176505),
    U = n(273504),
    P = n(765305),
    j = n(388032);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function w(e, t) {
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
let G = new A.Z('AuditLogUtils'),
    k = [d.J6.DAYS, d.J6.HOURS, d.J6.MINUTES, d.J6.SECONDS],
    F = () => ({ [M.zUn.REASON]: () => j.t['2IW3Cw'] }),
    Z = () =>
        y(
            {
                [M.zUn.NAME]: () => j.t.CkDiND,
                [M.zUn.DESCRIPTION]: ev(j.t.RP3Ey8, j.t.QAVj1d),
                [M.zUn.ICON_HASH]: () => j.t.iLZ8Q0,
                [M.zUn.SPLASH_HASH]: () => j.t['4VV6dn'],
                [M.zUn.DISCOVERY_SPLASH_HASH]: () => j.t['2pds6u'],
                [M.zUn.BANNER_HASH]: ev(j.t.Cxq4zM, j.t['H7eE//']),
                [M.zUn.OWNER_ID]: () => j.t['8ltsLS'],
                [M.zUn.REGION]: () => j.t.X9r5KS,
                [M.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDQ,
                [M.zUn.AFK_CHANNEL_ID]: ev(j.t.ClBuAw, j.t['ms+xtL']),
                [M.zUn.AFK_TIMEOUT]: () => j.t.q21fHR,
                [M.zUn.SYSTEM_CHANNEL_ID]: ev(j.t.H1VXaW, j.t.XhtmxM),
                [M.zUn.RULES_CHANNEL_ID]: ev(j.t.OI6MGx, j.t.lik3tL),
                [M.zUn.PUBLIC_UPDATES_CHANNEL_ID]: ev(j.t.YxBKra, j.t.Ehsnio),
                [M.zUn.MFA_LEVEL]: eM({
                    [M.BpS.NONE]: j.t.voaCCQ,
                    [M.BpS.ELEVATED]: j.t.pRNVw8
                }),
                [M.zUn.WIDGET_ENABLED]: ex(j.t.ADIty8, j.t.nf58VV),
                [M.zUn.WIDGET_CHANNEL_ID]: ev(j.t['6SBsDQ'], j.t.deQ5wM),
                [M.zUn.VERIFICATION_LEVEL]: eM({
                    [M.sFg.NONE]: j.t.W27rsb,
                    [M.sFg.LOW]: j.t['V8P+Pz'],
                    [M.sFg.MEDIUM]: j.t.ERQFam,
                    [M.sFg.HIGH]: j.t['83fN0t'],
                    [M.sFg.VERY_HIGH]: j.t.PnkQJC
                }),
                [M.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eM({
                    [M.bL.ALL_MESSAGES]: j.t.LDi76O,
                    [M.bL.ONLY_MENTIONS]: j.t['6K83bW']
                }),
                [M.zUn.VANITY_URL_CODE]: ev(j.t.Zplsoq, j.t.u6cArq),
                [M.zUn.EXPLICIT_CONTENT_FILTER]: eM({
                    [M.lxg.DISABLED]: j.t.fmOeLy,
                    [M.lxg.MEMBERS_WITHOUT_ROLES]: j.t['4FghY2'],
                    [M.lxg.ALL_MEMBERS]: j.t.olyrSk
                }),
                [M.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: ex(j.t.rBT0sr, j.t['gc+te3']),
                [M.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
                [M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjI,
                [M.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t['+fQAen'],
                [M.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4u,
                [M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSE
            },
            F()
        ),
    z = () => ({
        [M.zUn.NAME]: eb(j.t.f8Rh0d, j.t.ebD4Qk),
        [M.zUn.POSITION]: eb(j.t.isS8tb, j.t.t5uBio),
        [M.zUn.TOPIC]: eD(j.t.esQcxs, j.t['m+veAg'], j.t['ws/1FB']),
        [M.zUn.BITRATE]: eb(j.t.fw81am, j.t.MFNlgY),
        [M.zUn.RTC_REGION_OVERRIDE]: eD(j.t['6kajx8'], j.t.eGOlmZ, j.t['0JMZd3']),
        [M.zUn.USER_LIMIT]: eb(j.t.wk5t7u, j.t.XgjCEh),
        [M.zUn.RATE_LIMIT_PER_USER]: eb(j.t['7lirhI'], j.t.j4CCJS),
        [M.zUn.PERMISSIONS_RESET]: () => j.t['+vSBFR'],
        [M.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv7,
        [M.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5e,
        [M.zUn.REASON]: () => j.t['2IW3Cw'],
        [M.zUn.NSFW]: ex(j.t.H8Ri2d, j.t.WW6cJy),
        [M.zUn.TYPE]: eb(j.t.Vn5zn5, j.t.aq4uWF),
        [M.zUn.VIDEO_QUALITY_MODE]: eb(j.t.e68fAQ, j.t.djbES0),
        [M.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eb(j.t.nYz2mp, j.t.oczvRE),
        [M.zUn.FLAGS]: () => j.t.ImCQkp,
        [M.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
        [M.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzlp,
        [M.zUn.AVAILABLE_TAG_DELETE]: () => j.t['8QOsen'],
        [M.zUn.LINKED_LOBBY]: ev(j.t['+/3TkJ'], j.t['5kDYS0'])
    }),
    B = () =>
        y(
            {
                [M.zUn.NICK]: eD(j.t.qXDsHh, j.t['m+qur6'], j.t.DvLvjI),
                [M.zUn.DEAF]: ex(j.t.mArLlZ, j.t.ddvVYG),
                [M.zUn.MUTE]: ex(j.t['bxs/lZ'], j.t.FjecQE),
                [M.zUn.ROLES_REMOVE]: () => j.t['+2SDWV'],
                [M.zUn.ROLES_ADD]: () => j.t['B3/3IC'],
                [M.zUn.PRUNE_DELETE_DAYS]: () => j.t['+Cvc+P'],
                [M.zUn.COMMUNICATION_DISABLED_UNTIL]: eD(j.t.LXTQr6, j.t.LXTQr6, j.t.ULSdnJ),
                [M.zUn.BYPASSES_VERIFICATION]: ex(j.t.NBPBur, j.t.zATosr),
                [M.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB
            },
            F()
        ),
    V = () =>
        y(
            {
                [M.zUn.NAME]: eb(j.t.QBmlaG, j.t.Lfs4r6),
                [M.zUn.DESCRIPTION]: eb(j.t.XeYKWF, j.t.PSfeIi),
                [M.zUn.PERMISSIONS_GRANTED]: () => j.t['9i/DvL'],
                [M.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVl,
                [M.zUn.COLOR]: eL({ '#000000': j.t.TK6E1N }, j.t['2FQFi4']),
                [M.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? j.t.U44ttr : j.t.WnSwLy),
                [M.zUn.HOIST]: ex(j.t.gWfe29, j.t['+tb8kJ']),
                [M.zUn.MENTIONABLE]: ex(j.t.LL8VFB, j.t.Z7xzmJ),
                [M.zUn.ICON_HASH]: () => j.t['iEE79/'],
                [M.zUn.UNICODE_EMOJI]: () => j.t.KiLMMz
            },
            F()
        ),
    H = () =>
        w(y({}, F()), {
            [M.zUn.TITLE]: eb(j.t.sNpuy8, j.t['3Ukc/v']),
            [M.zUn.DESCRIPTION]: eb(j.t.PP1q09, j.t.z7pYLi),
            [M.zUn.OPTIONS]: () => j.t['3G5C9/'],
            [M.zUn.SINGLE_SELECT]: ex(j.t.v4WnR0, j.t['6Qg3uL']),
            [M.zUn.REQUIRED]: ex(j.t['0MPAMz'], j.t.pwsXio)
        }),
    K = () =>
        w(y({}, F()), {
            [M.zUn.DEFAULT_CHANNEL_IDS]: () => j.t['8M+D2t'],
            [M.zUn.ENABLE_DEFAULT_CHANNELS]: ex(j.t['EYd/lp'], j.t['36OZeX']),
            [M.zUn.ENABLE_ONBOARDING_PROMPTS]: ex(j.t.V3u8PT, j.t.r66lc3),
            [M.zUn.ENABLED]: ex(j.t.SODVIi, j.t.u8HY5e)
        }),
    W = () =>
        w(y({}, F()), {
            [M.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xc,
            [M.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUInp,
            [M.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mp
        }),
    q = () =>
        y(
            {
                [M.zUn.CODE]: () => j.t.rrRHgY,
                [M.zUn.CHANNEL_ID]: () => j.t.Q1vd5u,
                [M.zUn.MAX_USES]: eL({ 0: j.t.Yx8LNj }, j.t['3ygnwc']),
                [M.zUn.MAX_AGE]: eL({ [j.intl.string(j.t.PqEzn5)]: j.t.uWrLv7 }, j.t['Q+5kcH']),
                [M.zUn.TEMPORARY]: ex(j.t.MWp6Hx, j.t.omiqTE),
                [M.zUn.FLAGS]: eM({ [o.$.IS_GUEST_INVITE]: j.t.XYZMbG })
            },
            F()
        ),
    Y = () => ({
        [M.zUn.CHANNEL_ID]: eb(j.t.jhPpra, j.t.ar4qYG),
        [M.zUn.NAME]: eb(j.t.ZVGrzc, j.t.tywdZW),
        [M.zUn.AVATAR_HASH]: () => j.t.KB52Ul,
        [M.zUn.REASON]: () => j.t['2IW3Cw']
    }),
    J = () => y({ [M.zUn.NAME]: eb(j.t.ahU1o6, j.t['wxs+vb']) }, F()),
    X = () =>
        y(
            {
                [M.zUn.NAME]: eb(j.t.cdl0Ym, j.t.o3W2l5),
                [M.zUn.TAGS]: eb(j.t['zwL+S0'], j.t.VYfKAw),
                [M.zUn.DESCRIPTION]: eb(j.t.XeYKWF, j.t.PSfeIi)
            },
            F()
        ),
    Q = () =>
        y(
            {
                [M.zUn.ENABLE_EMOTICONS]: ex(j.t['FI0m5+'], j.t.olpKCw),
                [M.zUn.EXPIRE_BEHAVIOR]: eM({
                    0: j.t['1Bb1+v'],
                    1: j.t.vjlW6u
                }),
                [M.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMT
            },
            F()
        ),
    $ = () =>
        y(
            {
                [M.zUn.TOPIC]: eb(j.t['m+veAg'], j.t.esQcxs),
                [M.zUn.PRIVACY_LEVEL]: eM({
                    [P.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [P.j8.PUBLIC]: j.t['pK/WGx']
                })
            },
            F()
        ),
    ee = () =>
        y(
            {
                [M.zUn.NAME]: () => j.t['21EXHR'],
                [M.zUn.DESCRIPTION]: () => j.t.Vm1of3,
                [M.zUn.PRIVACY_LEVEL]: eM({
                    [P.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [P.j8.PUBLIC]: j.t['pK/WGx']
                }),
                [M.zUn.STATUS]: eM({
                    [P.p1.SCHEDULED]: j.t.hXKDgo,
                    [P.p1.ACTIVE]: j.t.lRX1n5,
                    [P.p1.COMPLETED]: j.t['/eFIho'],
                    [P.p1.CANCELED]: j.t.NWIYho
                }),
                [M.zUn.ENTITY_TYPE]: eM({
                    [P.WX.NONE]: j.t['6sO3Sk'],
                    [P.WX.STAGE_INSTANCE]: j.t['Wo+s19'],
                    [P.WX.VOICE]: j.t.XCVaIC,
                    [P.WX.EXTERNAL]: j.t.IvhAj4
                }),
                [M.zUn.CHANNEL_ID]: ev(j.t.yJBIcX, j.t['+PqSsr']),
                [M.zUn.LOCATION]: ev(j.t.GaMBHx, j.t.PsICk5),
                [M.zUn.IMAGE_HASH]: ev(j.t.S3vcRE, j.t.KQu47O)
            },
            F()
        ),
    et = () =>
        y(
            {
                [M.zUn.SCHEDULED_START_TIME]: ev(j.t.zMIYVl, j.t.fzF8GR),
                [M.zUn.SCHEDULED_END_TIME]: ev(j.t.vONSQE, j.t.IlIti4),
                [M.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return j.t['7RkicX'];
                        else if (e.oldValue && !e.newValue) return j.t.dRNTWV;
                    }
                }
            },
            F()
        ),
    en = () =>
        y(
            {
                [M.zUn.NAME]: eb(j.t.tUKRzc, j.t.kPCHOD),
                [M.zUn.ARCHIVED]: ex(j.t.jDi9FB, j.t.F6dvbW),
                [M.zUn.LOCKED]: ex(j.t.JSy1QU, j.t.C7Jgo6),
                [M.zUn.INVITABLE]: ex(j.t.dxNUs7, j.t.biJvYG),
                [M.zUn.AUTO_ARCHIVE_DURATION]: eb(j.t.LuaG39, j.t['18d9qq']),
                [M.zUn.RATE_LIMIT_PER_USER]: eb(j.t['7lirhI'], j.t.j4CCJS),
                [M.zUn.FLAGS]: () => j.t.sSAQtr
            },
            F()
        ),
    er = (e) => {
        let t = y({}, F());
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
                [M.zUn.NAME]: () => j.t.XwxAJS,
                [M.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pys,
                [M.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t['46Y+Ly'],
                [M.zUn.AUTO_MODERATION_ACTIONS]: () => j.t['8efxfn'],
                [M.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji;
                },
                [M.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nz,
                [M.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLC,
                [M.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t['h/lM6+'],
                [M.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t['9V2yaG'],
                [M.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t['4Qe9n5'],
                [M.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxs,
                [M.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadX,
                [M.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t['FvvR+P'],
                [M.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSv7
            },
            F()
        ),
    ei = () =>
        y(
            {
                [M.zUn.NAME]: eb(j.t.VOtRSE, j.t.OK7B8P),
                [M.zUn.VOLUME]: eb(j.t.igrDBw, j.t.L5lDFB),
                [M.zUn.EMOJI_NAME]: eD(j.t.IIanaW, j.t.z4w4U1, j.t.V8Tfyc),
                [M.zUn.EMOJI_ID]: eD(j.t.ainxMD, j.t['2NPsYm'], j.t['8crtnp'])
            },
            F()
        ),
    es = () =>
        y(
            {
                [M.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ),
                [M.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVV : j.t.WxyOtr)
            },
            F()
        ),
    ea = () => y({ [M.zUn.STATUS]: () => j.t.HyCSnJ }, F()),
    eo = () => ({
        [M.zUn.DESCRIPTION]: () => j.t.nsUZKS,
        [M.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgI,
        [M.zUn.CUSTOM_BANNER_HASH]: () => j.t['04b5KC'],
        [M.zUn.TRAITS]: () => j.t.dEy9WF,
        [M.zUn.GAME_APPLICATION_IDS]: () => j.t['8BOT39'],
        [M.zUn.VISIBILITY]: () => j.t.bCl1Eh,
        [M.zUn.SERVER_TAG]: ev(j.t.ix1dnZ, j.t['4LKpKS'])
    }),
    eu = {
        [M.KFR.CHANNEL]: {
            [M.zUn.ID]: !0,
            [M.zUn.PERMISSION_OVERWRITES]: !0
        },
        [M.KFR.CHANNEL_OVERWRITE]: {
            [M.zUn.TYPE]: !0,
            [M.zUn.ID]: !0,
            [M.zUn.PERMISSION_OVERWRITES]: !0
        },
        [M.KFR.INVITE]: {
            [M.zUn.INVITER_ID]: !0,
            [M.zUn.USES]: !0
        },
        [M.KFR.WEBHOOK]: {
            [M.zUn.TYPE]: !0,
            [M.zUn.APPLICATION_ID]: !0
        },
        [M.KFR.INTEGRATION]: { [M.zUn.TYPE]: !0 },
        [M.KFR.THREAD]: {
            [M.zUn.ID]: !0,
            [M.zUn.TYPE]: !0
        },
        [M.KFR.STICKER]: {
            [M.zUn.ID]: !0,
            [M.zUn.TYPE]: !0,
            [M.zUn.ASSET]: !0,
            [M.zUn.FORMAT_TYPE]: !0,
            [M.zUn.AVAILABLE]: !0,
            [M.zUn.GUILD_ID]: !0
        },
        [M.KFR.GUILD_HOME]: { [M.zUn.ENTITY_TYPE]: !0 },
        [M.KFR.GUILD_ONBOARDING]: { [M.zUn.PROMPTS]: !0 },
        [M.KFR.GUILD_SOUNDBOARD]: {
            [M.zUn.ID]: !0,
            [M.zUn.SOUND_ID]: !0
        }
    },
    ec = () => [
        {
            value: M.rsA.ALL,
            label: j.intl.string(j.t.QxEVcn),
            valueLabel: j.intl.string(j.t.an9Ry8)
        },
        {
            value: M.rsA.GUILD_UPDATE,
            label: j.intl.string(j.t['5INZa2'])
        },
        {
            value: M.rsA.CHANNEL_CREATE,
            label: j.intl.string(j.t['2uh4vL'])
        },
        {
            value: M.rsA.CHANNEL_UPDATE,
            label: j.intl.string(j.t.mGsBLS)
        },
        {
            value: M.rsA.CHANNEL_DELETE,
            label: j.intl.string(j.t.hCHzAg)
        },
        {
            value: M.rsA.CHANNEL_OVERWRITE_CREATE,
            label: j.intl.string(j.t['8TnAMD'])
        },
        {
            value: M.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: j.intl.string(j.t.Jqx0Bg)
        },
        {
            value: M.rsA.CHANNEL_OVERWRITE_DELETE,
            label: j.intl.string(j.t.gBXOr6)
        },
        {
            value: M.rsA.MEMBER_KICK,
            label: j.intl.string(j.t['Q1/hNz'])
        },
        {
            value: M.rsA.MEMBER_PRUNE,
            label: j.intl.string(j.t.tOTTjY)
        },
        {
            value: M.rsA.MEMBER_BAN_ADD,
            label: j.intl.string(j.t['NfPn+f'])
        },
        {
            value: M.rsA.MEMBER_BAN_REMOVE,
            label: j.intl.string(j.t.XCsGfH)
        },
        {
            value: M.rsA.MEMBER_UPDATE,
            label: j.intl.string(j.t['F/jmND'])
        },
        {
            value: M.rsA.MEMBER_ROLE_UPDATE,
            label: j.intl.string(j.t.zAveSE)
        },
        {
            value: M.rsA.MEMBER_MOVE,
            label: j.intl.string(j.t.QshteX)
        },
        {
            value: M.rsA.MEMBER_DISCONNECT,
            label: j.intl.string(j.t.Z45os7)
        },
        {
            value: M.rsA.BOT_ADD,
            label: j.intl.string(j.t.vuH24e)
        },
        {
            value: M.rsA.THREAD_CREATE,
            label: j.intl.string(j.t['+zl0DA'])
        },
        {
            value: M.rsA.THREAD_UPDATE,
            label: j.intl.string(j.t.rbIry8)
        },
        {
            value: M.rsA.THREAD_DELETE,
            label: j.intl.string(j.t.hFjNEB)
        },
        {
            value: M.rsA.ROLE_CREATE,
            label: j.intl.string(j.t.AbxKtr)
        },
        {
            value: M.rsA.ROLE_UPDATE,
            label: j.intl.string(j.t.t3Z6sb)
        },
        {
            value: M.rsA.ROLE_DELETE,
            label: j.intl.string(j.t.YsFpa2)
        },
        {
            value: M.rsA.ONBOARDING_PROMPT_CREATE,
            label: j.intl.string(j.t.ZV9tqa)
        },
        {
            value: M.rsA.ONBOARDING_PROMPT_UPDATE,
            label: j.intl.string(j.t.PcOdvb)
        },
        {
            value: M.rsA.ONBOARDING_PROMPT_DELETE,
            label: j.intl.string(j.t['+r33NT'])
        },
        {
            value: M.rsA.ONBOARDING_CREATE,
            label: j.intl.string(j.t.uDADdX)
        },
        {
            value: M.rsA.ONBOARDING_UPDATE,
            label: j.intl.string(j.t.J1H1ws)
        },
        {
            value: M.rsA.HOME_SETTINGS_CREATE,
            label: j.intl.string(j.t.Di4cvL)
        },
        {
            value: M.rsA.HOME_SETTINGS_UPDATE,
            label: j.intl.string(j.t.tzyrJC)
        },
        {
            value: M.rsA.INVITE_CREATE,
            label: j.intl.string(j.t['0BNJdX'])
        },
        {
            value: M.rsA.INVITE_UPDATE,
            label: j.intl.string(j.t['o++obW'])
        },
        {
            value: M.rsA.INVITE_DELETE,
            label: j.intl.string(j.t.iP40Aw)
        },
        {
            value: M.rsA.WEBHOOK_CREATE,
            label: j.intl.string(j.t['tBF4+f'])
        },
        {
            value: M.rsA.WEBHOOK_UPDATE,
            label: j.intl.string(j.t.eV3McH)
        },
        {
            value: M.rsA.WEBHOOK_DELETE,
            label: j.intl.string(j.t.AAL3Ky)
        },
        {
            value: M.rsA.EMOJI_CREATE,
            label: j.intl.string(j.t.RuWm0d)
        },
        {
            value: M.rsA.EMOJI_UPDATE,
            label: j.intl.string(j.t.WzdUY2)
        },
        {
            value: M.rsA.EMOJI_DELETE,
            label: j.intl.string(j.t.c3dK2N)
        },
        {
            value: M.rsA.MESSAGE_DELETE,
            label: j.intl.string(j.t.daTfXl)
        },
        {
            value: M.rsA.MESSAGE_BULK_DELETE,
            label: j.intl.string(j.t.nrBxen)
        },
        {
            value: M.rsA.MESSAGE_PIN,
            label: j.intl.string(j.t.MUldyM)
        },
        {
            value: M.rsA.MESSAGE_UNPIN,
            label: j.intl.string(j.t.n4zKhI)
        },
        {
            value: M.rsA.INTEGRATION_CREATE,
            label: j.intl.string(j.t['deNm8/'])
        },
        {
            value: M.rsA.INTEGRATION_UPDATE,
            label: j.intl.string(j.t.HT7Sfn)
        },
        {
            value: M.rsA.INTEGRATION_DELETE,
            label: j.intl.string(j.t['+kJ09v'])
        },
        {
            value: M.rsA.STICKER_CREATE,
            label: j.intl.string(j.t['3DzNjY'])
        },
        {
            value: M.rsA.STICKER_UPDATE,
            label: j.intl.string(j.t.tdhW5e)
        },
        {
            value: M.rsA.STICKER_DELETE,
            label: j.intl.string(j.t['+ZhGOj'])
        },
        {
            value: M.rsA.STAGE_INSTANCE_CREATE,
            label: j.intl.string(j.t.sPbjAw)
        },
        {
            value: M.rsA.STAGE_INSTANCE_UPDATE,
            label: j.intl.string(j.t.cW9LfH)
        },
        {
            value: M.rsA.STAGE_INSTANCE_DELETE,
            label: j.intl.string(j.t['U1r+yM'])
        },
        {
            value: M.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: j.intl.string(j.t.H81Zy8)
        },
        {
            value: M.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: j.intl.string(j.t.FM69l5)
        },
        {
            value: M.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: j.intl.string(j.t.Rq28Bg)
        },
        {
            value: M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: j.intl.string(j.t.iPdFOj)
        },
        {
            value: M.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: j.intl.string(j.t.gNq5z8)
        },
        {
            value: M.rsA.AUTO_MODERATION_RULE_CREATE,
            label: j.intl.string(j.t.f72Zqa)
        },
        {
            value: M.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: j.intl.string(j.t.XeqIio)
        },
        {
            value: M.rsA.AUTO_MODERATION_RULE_DELETE,
            label: j.intl.string(j.t.syAApa)
        },
        {
            value: M.rsA.GUILD_HOME_FEATURE_ITEM,
            label: j.intl.string(j.t.lhG5KC)
        },
        {
            value: M.rsA.GUILD_HOME_REMOVE_ITEM,
            label: j.intl.string(j.t.lRPRwc)
        },
        {
            value: M.rsA.SOUNDBOARD_SOUND_CREATE,
            label: j.intl.string(j.t.yoRi5u)
        },
        {
            value: M.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: j.intl.string(j.t.uKlG0d)
        },
        {
            value: M.rsA.SOUNDBOARD_SOUND_DELETE,
            label: j.intl.string(j.t.gq0iCQ)
        },
        {
            value: M.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: j.intl.string(j.t.rGr0YG)
        },
        {
            value: M.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: j.intl.string(j.t.V9PEQ0)
        }
    ];
function ed(e, t) {
    return null != t.changes ? t.changes.find((t) => t.key === e) : null;
}
function eE(e, t) {
    return null != t.changes ? t.changes.filter((t) => t.key === e) : [];
}
function e_(e) {
    var t;
    let n = ec().find((t) => t.value === e.action);
    return null != ed(M.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [d.J6.SECONDS]: (e) => j.intl.formatToPlainString(j.t.geSp4O, { seconds: e }),
    [d.J6.MINUTES]: (e) => j.intl.formatToPlainString(j.t.iXLF9f, { minutes: e }),
    [d.J6.HOURS]: (e) => j.intl.formatToPlainString(j.t.xCjYxM, { hours: e }),
    [d.J6.DAYS]: (e) => j.intl.formatToPlainString(j.t.k2UNz8, { days: e })
};
function em(e) {
    let t = ed(M.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = eE(M.zUn.ROLES_ADD, e).length > 0,
        r = eE(M.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - D.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, d.CI)(r, k);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in eA) {
                let e = l.unit,
                    t = l.unit === d.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return eA[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return j.intl.string(j.t.MA1ltr);
    } else if (n && r) return j.intl.string(j.t.RdMMe3);
    else if (n) return j.intl.string(j.t['4GQqs7']);
    else if (r) return j.intl.string(j.t['8mQ6x8']);
    return null;
}
function eT(e) {
    let t = eE(M.zUn.ROLES_ADD, e),
        n = eE(M.zUn.ROLES_REMOVE, e),
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
        ? j.intl.formatToPlainString(j.t.tZw1ER, {
              roleNamesAdded: r,
              roleNamesRemoved: l
          })
        : t.length > 0
          ? j.intl.formatToPlainString(j.t['/mTqt7'], { roleNames: r })
          : n.length > 0
            ? j.intl.formatToPlainString(j.t.Wk4pAA, { roleNames: l })
            : null;
}
function ef(e) {
    switch (e.action) {
        case M.rsA.GUILD_UPDATE:
            return j.t.LjZO39;
        case M.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === M.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case M.d4z.GUILD_STAGE_VOICE:
                    return j.t['OKp4+v'];
                case M.d4z.GUILD_VOICE:
                    return j.t.NPOy4O;
                case M.d4z.GUILD_CATEGORY:
                    return j.t.T3KIj4;
                default:
                    return j.t.wrYNGx;
            }
        case M.rsA.CHANNEL_UPDATE:
            return j.t.nTYk6O;
        case M.rsA.CHANNEL_DELETE:
            return j.t.ynfvkp;
        case M.rsA.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1d;
        case M.rsA.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNT;
        case M.rsA.CHANNEL_OVERWRITE_DELETE:
            return j.t['HASt//'];
        case M.rsA.MEMBER_KICK:
            return j.t.B5hDZW;
        case M.rsA.MEMBER_PRUNE:
            return j.t.qKOZTE;
        case M.rsA.MEMBER_BAN_ADD:
            return j.t.XklUm5;
        case M.rsA.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HB;
        case M.rsA.MEMBER_UPDATE:
            return j.t.pznhLC;
        case M.rsA.MEMBER_ROLE_UPDATE:
            return j.t.VngfiY;
        case M.rsA.MEMBER_MOVE:
            return j.t.Yt6NkZ;
        case M.rsA.MEMBER_DISCONNECT:
            return j.t.K4eCZ2;
        case M.rsA.BOT_ADD:
            return j.t.fWvX0N;
        case M.rsA.ROLE_CREATE:
            return j.t.UTLTx8;
        case M.rsA.ROLE_UPDATE:
            return j.t.NRbN19;
        case M.rsA.ROLE_DELETE:
            return j.t['4s63tb'];
        case M.rsA.INVITE_CREATE:
            return j.t.YHOXW1;
        case M.rsA.INVITE_UPDATE:
            return j.t.ja3kGR;
        case M.rsA.INVITE_DELETE:
            return j.t['3n/iWl'];
        case M.rsA.WEBHOOK_CREATE:
            return j.t.MhYhio;
        case M.rsA.WEBHOOK_UPDATE:
            return j.t['6GTlWF'];
        case M.rsA.WEBHOOK_DELETE:
            return j.t.in0VjY;
        case M.rsA.EMOJI_CREATE:
            return j.t['7vekRE'];
        case M.rsA.EMOJI_UPDATE:
            return j.t.IsCKfn;
        case M.rsA.EMOJI_DELETE:
            return j.t.JnUaVF;
        case M.rsA.STICKER_CREATE:
            return j.t.DRZifn;
        case M.rsA.STICKER_UPDATE:
            return j.t.bhujGR;
        case M.rsA.STICKER_DELETE:
            return j.t.rGEP9f;
        case M.rsA.MESSAGE_DELETE:
            return j.t['HPkD+P'];
        case M.rsA.MESSAGE_BULK_DELETE:
            return j.t['3RIvLC'];
        case M.rsA.MESSAGE_PIN:
            return j.t.Yna7Ex;
        case M.rsA.MESSAGE_UNPIN:
            return j.t.NCxXUV;
        case M.rsA.INTEGRATION_CREATE:
            return j.t.HYvCb2;
        case M.rsA.INTEGRATION_UPDATE:
            return j.t.ibCCOT;
        case M.rsA.INTEGRATION_DELETE:
            return j.t['8zScWV'];
        case M.rsA.STAGE_INSTANCE_CREATE:
            return j.t['n7x/DA'];
        case M.rsA.STAGE_INSTANCE_UPDATE:
            return j.t['0hQYU1'];
        case M.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t['Oi/in5'];
            return j.t['7ZIFm5'];
        case M.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52t;
        case M.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK19;
        case M.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t['/ARPKS'];
        case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t['8qCI39'];
        case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2dX;
        case M.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === M.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case M.d4z.PRIVATE_THREAD:
                    return j.t['Br0y5+'];
                case M.d4z.ANNOUNCEMENT_THREAD:
                    return j.t['6uaMmJ'];
                default:
                    return j.t['2cxQ7O'];
            }
        case M.rsA.THREAD_UPDATE:
            return j.t.PSsy4u;
        case M.rsA.THREAD_DELETE:
            return j.t.s3Khn5;
        case M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBg;
        case M.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2N;
        case M.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === U.fX.USER_PROFILE.toString()) return j.t.YQsjen;
            return j.t.SD0PwM;
        case M.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4Twc;
        case M.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return j.t['/W5u5u'];
        case M.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWys;
        case M.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t.ryGLk5;
        case M.rsA.AUTO_MODERATION_RULE_CREATE:
            return j.t.NKljj4;
        case M.rsA.AUTO_MODERATION_RULE_UPDATE:
            return j.t['3wEA9v'];
        case M.rsA.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3t;
        case M.rsA.ONBOARDING_PROMPT_CREATE:
            return j.t['/8A1g4'];
        case M.rsA.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWF;
        case M.rsA.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTam;
        case M.rsA.ONBOARDING_CREATE:
            return j.t.wDaq39;
        case M.rsA.ONBOARDING_UPDATE:
            return j.t['yONu/v'];
        case M.rsA.HOME_SETTINGS_CREATE:
            return j.t.dSdCjI;
        case M.rsA.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qq;
        case M.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === M.zUn.ENTITY_TYPE) : null;
            if (null == l) return j.t['UZ+U3N'];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return j.t['PyEa+P'];
                case a.w.FORUM_POST:
                    return j.t.hCuAb2;
                default:
                    return j.t['UZ+U3N'];
            }
        case M.rsA.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReur;
        case M.rsA.SOUNDBOARD_SOUND_CREATE:
            return j.t['0PD83d'];
        case M.rsA.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n19;
        case M.rsA.SOUNDBOARD_SOUND_DELETE:
            return j.t['kVz4//'];
        case M.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU1;
        case M.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case M.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t.NUKUb2;
        case M.rsA.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hFx;
        default:
            return null;
    }
}
function eg(e) {
    switch (e) {
        case L.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t['5G8ZDw']);
        case L.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t['4YLtzM']);
        case L.zZ.PINNED:
            return j.intl.string(j.t['1QLRYW']);
    }
    return null;
}
function eI(e) {
    switch (e) {
        case L.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t.S5kuWV);
        case L.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t['8qpgc3']);
        case L.zZ.PINNED:
            return j.intl.string(j.t.CMweGB);
    }
    return null;
}
function eh(e, t) {
    switch (e) {
        case M.Plq.CREATE_INSTANT_INVITE:
            return j.intl.string(j.t.zJrgTE);
        case M.Plq.KICK_MEMBERS:
            return j.intl.string(j.t.pBNv6u);
        case M.Plq.BAN_MEMBERS:
            return j.intl.string(j.t.oTBA7O);
        case M.Plq.ADMINISTRATOR:
            return j.intl.string(j.t.PGvZqa);
        case M.Plq.MANAGE_CHANNELS:
            if (t.targetType === M.KFR.CHANNEL || t.targetType === M.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15O);
            return j.intl.string(j.t['9qLtWl']);
        case M.Plq.MANAGE_GUILD:
            return j.intl.string(j.t.QZRcfH);
        case M.Plq.VIEW_GUILD_ANALYTICS:
            return j.intl.string(j.t.rQJBEx);
        case M.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.intl.string(j.t['0lTLTk']);
        case M.Plq.CHANGE_NICKNAME:
            return j.intl.string(j.t.dilOFx);
        case M.Plq.MANAGE_NICKNAMES:
            return j.intl.string(j.t['t+Ct5+']);
        case M.Plq.MANAGE_ROLES:
            return j.intl.string(j.t['C8d+oK']);
        case M.Plq.MANAGE_WEBHOOKS:
            return j.intl.string(j.t['/ADKmJ']);
        case M.Plq.CREATE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.HarVuL);
        case M.Plq.MANAGE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.bbuXIi);
        case M.Plq.VIEW_AUDIT_LOG:
            return j.intl.string(j.t.fZgLpK);
        case M.Plq.VIEW_CHANNEL:
            if (t.targetType === M.KFR.CHANNEL || t.targetType === M.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t['W/A4Qk']);
            return j.intl.string(j.t.uV83ys);
        case M.Plq.SEND_MESSAGES:
            return j.intl.string(j.t.T32rkJ);
        case M.Plq.SEND_TTS_MESSAGES:
            return j.intl.string(j.t.Mg7bkp);
        case M.Plq.USE_APPLICATION_COMMANDS:
            return j.intl.string(j.t.shbR1d);
        case M.Plq.MANAGE_MESSAGES:
            return j.intl.string(j.t['6lU9xM']);
        case M.Plq.EMBED_LINKS:
            return j.intl.string(j.t['969dEB']);
        case M.Plq.ATTACH_FILES:
            return j.intl.string(j.t['3AS4UF']);
        case M.Plq.READ_MESSAGE_HISTORY:
            return j.intl.string(j.t.l9ufaW);
        case M.Plq.MENTION_EVERYONE:
            return j.intl.string(j.t.Y78KGB);
        case M.Plq.USE_EXTERNAL_EMOJIS:
            return j.intl.string(j.t.BpBGZW);
        case M.Plq.USE_EXTERNAL_STICKERS:
            return j.intl.string(j.t['UeRs+f']);
        case M.Plq.ADD_REACTIONS:
            return j.intl.string(j.t.yEoJAg);
        case M.Plq.CONNECT:
            return j.intl.string(j.t.S0W8Z2);
        case M.Plq.SPEAK:
            return j.intl.string(j.t['8w1tIS']);
        case M.Plq.MUTE_MEMBERS:
            return j.intl.string(j.t['8EI309']);
        case M.Plq.DEAFEN_MEMBERS:
            return j.intl.string(j.t['9L47Fh']);
        case M.Plq.MOVE_MEMBERS:
            return j.intl.string(j.t.YtjJPT);
        case M.Plq.USE_VAD:
            return j.intl.string(j.t['08zAV1']);
        case M.Plq.PRIORITY_SPEAKER:
            return j.intl.string(j.t.BVK71t);
        case M.Plq.STREAM:
            return j.intl.string(j.t.FlNoSU);
        case M.Plq.REQUEST_TO_SPEAK:
            return j.intl.string(j.t['5kicT0']);
        case M.Plq.CREATE_EVENTS:
            return j.intl.string(j.t.qyjZub);
        case M.Plq.MANAGE_EVENTS:
            return j.intl.string(j.t.HIgA5e);
        case M.Plq.CREATE_PUBLIC_THREADS:
            return j.intl.string(j.t['25rKnZ']);
        case M.Plq.CREATE_PRIVATE_THREADS:
            return j.intl.string(j.t.QwbTSU);
        case M.Plq.SEND_MESSAGES_IN_THREADS:
            return j.intl.string(j.t.fTE74u);
        case M.Plq.MANAGE_THREADS:
            return j.intl.string(j.t.kEqgr6);
        case M.Plq.MODERATE_MEMBERS:
            return j.intl.string(j.t['+RL6p6']);
        case M.Plq.SET_VOICE_CHANNEL_STATUS:
            return j.intl.string(j.t.VBwkUV);
        case M.Plq.SEND_POLLS:
            return j.intl.string(j.t.UMQ7W1);
        case M.Plq.USE_EXTERNAL_APPS:
            return j.intl.string(j.t.TtA5rK);
    }
    return null;
}
function eO(e, t) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = (function (e, t) {
                    switch (e.targetType) {
                        case M.KFR.GUILD:
                        case M.KFR.GUILD_HOME:
                        case M.KFR.GUILD_PROFILE:
                            return t;
                        case M.KFR.CHANNEL:
                        case M.KFR.CHANNEL_OVERWRITE:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => N.Z.getChannel(e),
                                (e) => (0, _.F6)(e, S.default, R.Z, !0)
                            );
                        case M.KFR.USER:
                            return eS(
                                e,
                                M.zUn.NICK,
                                (e) => S.default.getUser(e),
                                (e) => e
                            );
                        case M.KFR.ROLE:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => p.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case M.KFR.ONBOARDING_PROMPT:
                            let n = eS(
                                e,
                                M.zUn.ID,
                                (e) => f.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? j.intl.string(j.t.ZNQyiY) : n;
                        case M.KFR.GUILD_ONBOARDING:
                        case M.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case M.KFR.INVITE:
                            return eS(e, M.zUn.CODE, M.VqG);
                        case M.KFR.INTEGRATION:
                            return eS(
                                e,
                                M.zUn.TYPE,
                                (e) => x.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case M.KFR.WEBHOOK:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => x.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case M.KFR.EMOJI:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => m.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case M.KFR.STICKER:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => h.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case M.KFR.STAGE_INSTANCE:
                            return eS(
                                e,
                                M.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(I.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case M.KFR.GUILD_SCHEDULED_EVENT:
                        case M.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => x.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case M.KFR.THREAD:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => x.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case M.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = x.Z.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => x.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === E.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case M.KFR.AUTO_MODERATION_RULE:
                            return eS(
                                e,
                                M.zUn.NAME,
                                (e) => x.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case M.KFR.GUILD_SOUNDBOARD:
                            return eS(e, M.zUn.NAME, M.VqG);
                        case M.KFR.HOME_SETTINGS:
                            return eS(
                                e,
                                M.zUn.GUILD_ID,
                                (e) => g.Z.getSettings(e),
                                () => j.intl.string(j.t.VbpLyc),
                                t.id
                            );
                        case M.KFR.VOICE_CHANNEL_STATUS:
                            return eS(
                                e,
                                M.zUn.STATUS,
                                (e) => N.Z.getChannel(e),
                                (e) => (0, _.F6)(e, S.default, R.Z, !0)
                            );
                        default:
                            return (G.warn('Unknown targetType for log', e), null);
                    }
                })(e, t),
                i = S.default.getUser(e.userId);
            if (null != r || [M.rsA.MEMBER_PRUNE, M.rsA.MEMBER_DISCONNECT, M.rsA.MEMBER_MOVE, M.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, M.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', i)).set('target', r)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let n = y({}, e.options);
                                switch (e.options.type) {
                                    case M.jwA.USER:
                                        n.subtarget = eC(
                                            e.options.id,
                                            (e) => S.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case M.jwA.ROLE:
                                        n.subtarget = eC(e.options.role_name, M.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = eS(
                                            e,
                                            '',
                                            (e) => N.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let r = x.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find((t) => t.event_exception_id === e.options.event_exception_id);
                                    n.subtarget = (0, C.vc)(s()(D.default.extractTimestamp(null != (t = null == l ? void 0 : l.event_exception_id) ? t : '0')), 'LL');
                                }
                                return n;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let n = [];
                    (e.changes.forEach((r) => {
                        let i = (function (e, t, n) {
                            if (t.action === M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case M.ecB.ROLE:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => p.Z.getRole(n.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case M.ecB.USER:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => S.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case M.ecB.CHANNEL:
                                        t.id === l()(n.id).subtract(1).toString()
                                            ? (e.subtarget = j.intl.string(j.t.MSYhgo))
                                            : (e.subtarget = eC(
                                                  t.id,
                                                  (e) => N.Z.getChannel(e),
                                                  (e) => (0, _.F6)(e, S.default, R.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case M.zUn.OWNER_ID:
                                    return eR(e, (e) => S.default.getUser(e));
                                case M.zUn.CHANNEL_ID:
                                case M.zUn.AFK_CHANNEL_ID:
                                case M.zUn.SYSTEM_CHANNEL_ID:
                                case M.zUn.RULES_CHANNEL_ID:
                                case M.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eR(
                                        e,
                                        (e) => N.Z.getChannel(e),
                                        (e) => (0, _.F6)(e, S.default, R.Z, !0)
                                    );
                                case M.zUn.AFK_TIMEOUT:
                                    return eR(e, (e) => e / 60);
                                case M.zUn.BITRATE:
                                    return eR(e, (e) => e / 1000);
                                case M.zUn.COLOR:
                                    return eR(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case M.zUn.THEME_COLORS:
                                    return eR(e, (e) => ''.concat((0, c.Rf)(e[0]).toUpperCase(), ', ').concat((0, c.Rf)(e[1]).toUpperCase()));
                                case M.zUn.MAX_AGE:
                                    return eR(e, (e) => {
                                        let t = v.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case M.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = eN(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new O.ms(M.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new O.ms(M.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case M.zUn.PERMISSIONS_GRANTED:
                                case M.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = eN(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new O.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new O.ms(M.zUn.PERMISSIONS_RESET, r, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case M.zUn.FLAGS: {
                                    let t = [],
                                        { added: n, removed: r } = (function (e, t) {
                                            let n = 'number' == typeof e ? e : 0,
                                                r = 'number' == typeof t ? t : 0,
                                                l = b.Ge(r, n),
                                                i = b.Ge(n, r),
                                                s = [],
                                                a = [];
                                            for (let e in L.zZ) {
                                                let t = L.zZ[e];
                                                (b.yE(l, t) && s.push(t), b.yE(i, t) && a.push(t));
                                            }
                                            return {
                                                added: s,
                                                removed: a
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
                                case M.zUn.PREFERRED_LOCALE:
                                    return eR(e, (e) => {
                                        let t = (0, j.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case M.zUn.VIDEO_QUALITY_MODE:
                                    return eR(e, (e) => (e === M.Ucd.FULL ? j.intl.string(j.t['7jOoJC']) : j.intl.string(j.t.jjKYpq)));
                                case M.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let r = {
                                            [M.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [M.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: M.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [M.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: M.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [M.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                        },
                                        i = [];
                                    return (
                                        Object.values(M.xmn).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                l = (e.newValue & t) === t;
                                            if (n === l) return;
                                            let s = new O.ms(r[t], !n, !l);
                                            i.push(s);
                                        }),
                                        i
                                    );
                                case M.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE)
                                        return eR(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(T.ZF).join(', ')
                                        );
                                    break;
                                case M.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, T.YN);
                                    break;
                                case M.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, T.Ar);
                                    break;
                                case M.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case M.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case M.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case M.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case M.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case M.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case M.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case M.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE)
                                        return eR(
                                            e,
                                            (e) =>
                                                e
                                                    .map(N.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, _.F6)(e, S.default, R.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.intl.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case M.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE)
                                        return eR(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => p.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.intl.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case M.zUn.AVAILABLE_TAGS:
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
                                            for (let e in s) if (null == i[e]) return new O.ms(M.zUn.AVAILABLE_TAG_ADD, null, ep(s[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in i) if (null == s[e]) return new O.ms(M.zUn.AVAILABLE_TAG_DELETE, null, ep(i[e]));
                                        }
                                        for (let e in i) {
                                            let t = i[e],
                                                n = s[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new O.ms(M.zUn.AVAILABLE_TAG_EDIT, ep(t), ep(n));
                                        }
                                        return e;
                                    })(e);
                                case M.zUn.SCHEDULED_START_TIME:
                                case M.zUn.SCHEDULED_END_TIME:
                                    return eR(e, (e) => (0, C.vc)(s()(new Date(e)), 'LLLL'));
                            }
                            return e;
                        })(r, e, t);
                        Array.isArray(i) ? i.forEach((e) => n.push(e)) : n.push(i);
                    }),
                        (e = e.set('changes', n)));
                }
                n.push(e);
            }
        }),
        n
    );
}
function eN(e, t) {
    let n = u.vB('string' == typeof e ? e : 0),
        r = u.vB('string' == typeof t ? t : 0),
        l = u.Od(r, n),
        i = u.Od(n, r),
        s = [],
        a = [];
    for (let e in M.Plq) {
        let t = M.Plq[e];
        (u.e$(l, t) && s.push(t), u.e$(i, t) && a.push(t));
    }
    return {
        added: s,
        removed: a
    };
}
function ep(e) {
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
function eR(e, t, n) {
    let r = e.newValue,
        l = e.oldValue;
    return (null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))), null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))), new O.ms(e.key, l || e.oldValue, r || e.newValue));
}
function eS(e, t, n, r, l) {
    let i = null,
        s = n((l = null != l ? l : e.targetId));
    if ((null != s && null != r && (i = r(s)), null == i)) {
        let t = x.Z.deletedTargets[e.targetType];
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
    return (null != l && null != n && (r = n(l)), r);
}
function eb(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function ev(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eD(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function ex(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eM(e) {
    return (t) => e[t.newValue];
}
function eL(e, t) {
    return (n) => {
        var r;
        return null != (r = e[n.newValue]) ? r : t;
    };
}
