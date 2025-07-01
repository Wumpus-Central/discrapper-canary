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
    j = n(765305),
    P = n(388032);
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
    F = () => ({ [M.zUn.REASON]: () => P.t['2IW3Cw'] }),
    Z = () =>
        y(
            {
                [M.zUn.NAME]: () => P.t.CkDiND,
                [M.zUn.DESCRIPTION]: ev(P.t.RP3Ey8, P.t.QAVj1d),
                [M.zUn.ICON_HASH]: () => P.t.iLZ8Q0,
                [M.zUn.SPLASH_HASH]: () => P.t['4VV6dn'],
                [M.zUn.DISCOVERY_SPLASH_HASH]: () => P.t['2pds6u'],
                [M.zUn.BANNER_HASH]: ev(P.t.Cxq4zM, P.t['H7eE//']),
                [M.zUn.OWNER_ID]: () => P.t['8ltsLS'],
                [M.zUn.REGION]: () => P.t.X9r5KS,
                [M.zUn.PREFERRED_LOCALE]: () => P.t.UnXuDQ,
                [M.zUn.AFK_CHANNEL_ID]: ev(P.t.ClBuAw, P.t['ms+xtL']),
                [M.zUn.AFK_TIMEOUT]: () => P.t.q21fHR,
                [M.zUn.SYSTEM_CHANNEL_ID]: ev(P.t.H1VXaW, P.t.XhtmxM),
                [M.zUn.RULES_CHANNEL_ID]: ev(P.t.OI6MGx, P.t.lik3tL),
                [M.zUn.PUBLIC_UPDATES_CHANNEL_ID]: ev(P.t.YxBKra, P.t.Ehsnio),
                [M.zUn.MFA_LEVEL]: eM({
                    [M.BpS.NONE]: P.t.voaCCQ,
                    [M.BpS.ELEVATED]: P.t.pRNVw8
                }),
                [M.zUn.WIDGET_ENABLED]: ex(P.t.ADIty8, P.t.nf58VV),
                [M.zUn.WIDGET_CHANNEL_ID]: ev(P.t['6SBsDQ'], P.t.deQ5wM),
                [M.zUn.VERIFICATION_LEVEL]: eM({
                    [M.sFg.NONE]: P.t.W27rsb,
                    [M.sFg.LOW]: P.t['V8P+Pz'],
                    [M.sFg.MEDIUM]: P.t.ERQFam,
                    [M.sFg.HIGH]: P.t['83fN0t'],
                    [M.sFg.VERY_HIGH]: P.t.PnkQJC
                }),
                [M.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eM({
                    [M.bL.ALL_MESSAGES]: P.t.LDi76O,
                    [M.bL.ONLY_MENTIONS]: P.t['6K83bW']
                }),
                [M.zUn.VANITY_URL_CODE]: ev(P.t.Zplsoq, P.t.u6cArq),
                [M.zUn.EXPLICIT_CONTENT_FILTER]: eM({
                    [M.lxg.DISABLED]: P.t.fmOeLy,
                    [M.lxg.MEMBERS_WITHOUT_ROLES]: P.t['4FghY2'],
                    [M.lxg.ALL_MEMBERS]: P.t.olyrSk
                }),
                [M.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: ex(P.t.rBT0sr, P.t['gc+te3']),
                [M.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => P.t.YbouFB,
                [M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => P.t.g3DMjI,
                [M.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => P.t['+fQAen'],
                [M.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => P.t.E1fc4u,
                [M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => P.t.XbwtSE
            },
            F()
        ),
    z = () => ({
        [M.zUn.NAME]: eb(P.t.f8Rh0d, P.t.ebD4Qk),
        [M.zUn.POSITION]: eb(P.t.isS8tb, P.t.t5uBio),
        [M.zUn.TOPIC]: eD(P.t.esQcxs, P.t['m+veAg'], P.t['ws/1FB']),
        [M.zUn.BITRATE]: eb(P.t.fw81am, P.t.MFNlgY),
        [M.zUn.RTC_REGION_OVERRIDE]: eD(P.t['6kajx8'], P.t.eGOlmZ, P.t['0JMZd3']),
        [M.zUn.USER_LIMIT]: eb(P.t.wk5t7u, P.t.XgjCEh),
        [M.zUn.RATE_LIMIT_PER_USER]: eb(P.t['7lirhI'], P.t.j4CCJS),
        [M.zUn.PERMISSIONS_RESET]: () => P.t['+vSBFR'],
        [M.zUn.PERMISSIONS_GRANTED]: () => P.t.EKLJv7,
        [M.zUn.PERMISSIONS_DENIED]: () => P.t.U3rO5e,
        [M.zUn.REASON]: () => P.t['2IW3Cw'],
        [M.zUn.NSFW]: ex(P.t.H8Ri2d, P.t.WW6cJy),
        [M.zUn.TYPE]: eb(P.t.Vn5zn5, P.t.aq4uWF),
        [M.zUn.VIDEO_QUALITY_MODE]: eb(P.t.e68fAQ, P.t.djbES0),
        [M.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eb(P.t.nYz2mp, P.t.oczvRE),
        [M.zUn.FLAGS]: () => P.t.ImCQkp,
        [M.zUn.AVAILABLE_TAG_ADD]: () => P.t.H86QQU,
        [M.zUn.AVAILABLE_TAG_EDIT]: () => P.t.YtUzlp,
        [M.zUn.AVAILABLE_TAG_DELETE]: () => P.t['8QOsen'],
        [M.zUn.LINKED_LOBBY]: ev(P.t['+/3TkJ'], P.t['5kDYS0'])
    }),
    B = () =>
        y(
            {
                [M.zUn.NICK]: eD(P.t.qXDsHh, P.t['m+qur6'], P.t.DvLvjI),
                [M.zUn.DEAF]: ex(P.t.mArLlZ, P.t.ddvVYG),
                [M.zUn.MUTE]: ex(P.t['bxs/lZ'], P.t.FjecQE),
                [M.zUn.ROLES_REMOVE]: () => P.t['+2SDWV'],
                [M.zUn.ROLES_ADD]: () => P.t['B3/3IC'],
                [M.zUn.PRUNE_DELETE_DAYS]: () => P.t['+Cvc+P'],
                [M.zUn.COMMUNICATION_DISABLED_UNTIL]: eD(P.t.LXTQr6, P.t.LXTQr6, P.t.ULSdnJ),
                [M.zUn.BYPASSES_VERIFICATION]: ex(P.t.NBPBur, P.t.zATosr),
                [M.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => P.t.YbouFB
            },
            F()
        ),
    V = () =>
        y(
            {
                [M.zUn.NAME]: eb(P.t.QBmlaG, P.t.Lfs4r6),
                [M.zUn.DESCRIPTION]: eb(P.t.XeYKWF, P.t.PSfeIi),
                [M.zUn.PERMISSIONS_GRANTED]: () => P.t['9i/DvL'],
                [M.zUn.PERMISSIONS_DENIED]: () => P.t.pa1ZVl,
                [M.zUn.COLOR]: eL({ '#000000': P.t.TK6E1N }, P.t['2FQFi4']),
                [M.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? P.t.U44ttr : P.t.WnSwLy),
                [M.zUn.HOIST]: ex(P.t.gWfe29, P.t['+tb8kJ']),
                [M.zUn.MENTIONABLE]: ex(P.t.LL8VFB, P.t.Z7xzmJ),
                [M.zUn.ICON_HASH]: () => P.t['iEE79/'],
                [M.zUn.UNICODE_EMOJI]: () => P.t.KiLMMz
            },
            F()
        ),
    H = () =>
        w(y({}, F()), {
            [M.zUn.TITLE]: eb(P.t.sNpuy8, P.t['3Ukc/v']),
            [M.zUn.DESCRIPTION]: eb(P.t.PP1q09, P.t.z7pYLi),
            [M.zUn.OPTIONS]: () => P.t['3G5C9/'],
            [M.zUn.SINGLE_SELECT]: ex(P.t.v4WnR0, P.t['6Qg3uL']),
            [M.zUn.REQUIRED]: ex(P.t['0MPAMz'], P.t.pwsXio)
        }),
    K = () =>
        w(y({}, F()), {
            [M.zUn.DEFAULT_CHANNEL_IDS]: () => P.t['8M+D2t'],
            [M.zUn.ENABLE_DEFAULT_CHANNELS]: ex(P.t['EYd/lp'], P.t['36OZeX']),
            [M.zUn.ENABLE_ONBOARDING_PROMPTS]: ex(P.t.V3u8PT, P.t.r66lc3),
            [M.zUn.ENABLED]: ex(P.t.SODVIi, P.t.u8HY5e)
        }),
    W = () =>
        w(y({}, F()), {
            [M.zUn.WELCOME_MESSAGE]: () => P.t.dKQ1xc,
            [M.zUn.NEW_MEMBER_ACTIONS]: () => P.t.jDUInp,
            [M.zUn.RESOURCE_CHANNELS]: () => P.t.SIX0mp
        }),
    q = () =>
        y(
            {
                [M.zUn.CODE]: () => P.t.rrRHgY,
                [M.zUn.CHANNEL_ID]: () => P.t.Q1vd5u,
                [M.zUn.MAX_USES]: eL({ 0: P.t.Yx8LNj }, P.t['3ygnwc']),
                [M.zUn.MAX_AGE]: eL({ [P.intl.string(P.t.PqEzn5)]: P.t.uWrLv7 }, P.t['Q+5kcH']),
                [M.zUn.TEMPORARY]: ex(P.t.MWp6Hx, P.t.omiqTE),
                [M.zUn.FLAGS]: eM({ [o.$.IS_GUEST_INVITE]: P.t.XYZMbG })
            },
            F()
        ),
    Y = () => ({
        [M.zUn.CHANNEL_ID]: eb(P.t.jhPpra, P.t.ar4qYG),
        [M.zUn.NAME]: eb(P.t.ZVGrzc, P.t.tywdZW),
        [M.zUn.AVATAR_HASH]: () => P.t.KB52Ul,
        [M.zUn.REASON]: () => P.t['2IW3Cw']
    }),
    J = () => y({ [M.zUn.NAME]: eb(P.t.ahU1o6, P.t['wxs+vb']) }, F()),
    X = () =>
        y(
            {
                [M.zUn.NAME]: eb(P.t.cdl0Ym, P.t.o3W2l5),
                [M.zUn.TAGS]: eb(P.t['zwL+S0'], P.t.VYfKAw),
                [M.zUn.DESCRIPTION]: eb(P.t.XeYKWF, P.t.PSfeIi)
            },
            F()
        ),
    Q = () =>
        y(
            {
                [M.zUn.ENABLE_EMOTICONS]: ex(P.t['FI0m5+'], P.t.olpKCw),
                [M.zUn.EXPIRE_BEHAVIOR]: eM({
                    0: P.t['1Bb1+v'],
                    1: P.t.vjlW6u
                }),
                [M.zUn.EXPIRE_GRACE_PERIOD]: () => P.t.iovXMT
            },
            F()
        ),
    $ = () =>
        y(
            {
                [M.zUn.TOPIC]: eb(P.t['m+veAg'], P.t.esQcxs),
                [M.zUn.PRIVACY_LEVEL]: eM({
                    [j.j8.GUILD_ONLY]: P.t['EC+CDg'],
                    [j.j8.PUBLIC]: P.t['pK/WGx']
                })
            },
            F()
        ),
    ee = () =>
        y(
            {
                [M.zUn.NAME]: () => P.t['21EXHR'],
                [M.zUn.DESCRIPTION]: () => P.t.Vm1of3,
                [M.zUn.PRIVACY_LEVEL]: eM({
                    [j.j8.GUILD_ONLY]: P.t['EC+CDg'],
                    [j.j8.PUBLIC]: P.t['pK/WGx']
                }),
                [M.zUn.STATUS]: eM({
                    [j.p1.SCHEDULED]: P.t.hXKDgo,
                    [j.p1.ACTIVE]: P.t.lRX1n5,
                    [j.p1.COMPLETED]: P.t['/eFIho'],
                    [j.p1.CANCELED]: P.t.NWIYho
                }),
                [M.zUn.ENTITY_TYPE]: eM({
                    [j.WX.NONE]: P.t['6sO3Sk'],
                    [j.WX.STAGE_INSTANCE]: P.t['Wo+s19'],
                    [j.WX.VOICE]: P.t.XCVaIC,
                    [j.WX.EXTERNAL]: P.t.IvhAj4
                }),
                [M.zUn.CHANNEL_ID]: ev(P.t.yJBIcX, P.t['+PqSsr']),
                [M.zUn.LOCATION]: ev(P.t.GaMBHx, P.t.PsICk5),
                [M.zUn.IMAGE_HASH]: ev(P.t.S3vcRE, P.t.KQu47O)
            },
            F()
        ),
    et = () =>
        y(
            {
                [M.zUn.SCHEDULED_START_TIME]: ev(P.t.zMIYVl, P.t.fzF8GR),
                [M.zUn.SCHEDULED_END_TIME]: ev(P.t.vONSQE, P.t.IlIti4),
                [M.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return P.t['7RkicX'];
                        else if (e.oldValue && !e.newValue) return P.t.dRNTWV;
                    }
                }
            },
            F()
        ),
    en = () =>
        y(
            {
                [M.zUn.NAME]: eb(P.t.tUKRzc, P.t.kPCHOD),
                [M.zUn.ARCHIVED]: ex(P.t.jDi9FB, P.t.F6dvbW),
                [M.zUn.LOCKED]: ex(P.t.JSy1QU, P.t.C7Jgo6),
                [M.zUn.INVITABLE]: ex(P.t.dxNUs7, P.t.biJvYG),
                [M.zUn.AUTO_ARCHIVE_DURATION]: eb(P.t.LuaG39, P.t['18d9qq']),
                [M.zUn.RATE_LIMIT_PER_USER]: eb(P.t['7lirhI'], P.t.j4CCJS),
                [M.zUn.FLAGS]: () => P.t.sSAQtr
            },
            F()
        ),
    er = (e) => {
        let t = y({}, F());
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (t[e.key] = () => P.t['JH+89P']) : (t[e.key] = () => P.t.HUrFDg)) : (t[e.key] = () => P.t.vynxnZ);
                }),
            t
        );
    },
    el = () =>
        y(
            {
                [M.zUn.NAME]: () => P.t.XwxAJS,
                [M.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => P.t.fx0pys,
                [M.zUn.AUTO_MODERATION_EVENT_TYPE]: () => P.t['46Y+Ly'],
                [M.zUn.AUTO_MODERATION_ACTIONS]: () => P.t['8efxfn'],
                [M.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? P.t.fCmxCw : P.t.Wrg9Ji;
                },
                [M.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => P.t.TRb7Nz,
                [M.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => P.t.mzitLC,
                [M.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => P.t['h/lM6+'],
                [M.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => P.t['9V2yaG'],
                [M.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => P.t['4Qe9n5'],
                [M.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => P.t.GyZtxs,
                [M.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => P.t.OQDadX,
                [M.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => P.t['FvvR+P'],
                [M.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => P.t.p5nSv7
            },
            F()
        ),
    ei = () =>
        y(
            {
                [M.zUn.NAME]: eb(P.t.VOtRSE, P.t.OK7B8P),
                [M.zUn.VOLUME]: eb(P.t.igrDBw, P.t.L5lDFB),
                [M.zUn.EMOJI_NAME]: eD(P.t.IIanaW, P.t.z4w4U1, P.t.V8Tfyc),
                [M.zUn.EMOJI_ID]: eD(P.t.ainxMD, P.t['2NPsYm'], P.t['8crtnp'])
            },
            F()
        ),
    es = () =>
        y(
            {
                [M.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? P.t.fnkzDQ : P.t.WYT6kZ),
                [M.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? P.t.jzSvVV : P.t.WxyOtr)
            },
            F()
        ),
    ea = () => y({ [M.zUn.STATUS]: () => P.t.HyCSnJ }, F()),
    eo = () => ({
        [M.zUn.DESCRIPTION]: () => P.t.nsUZKS,
        [M.zUn.BRAND_COLOR_PRIMARY]: () => P.t.qe9mgI,
        [M.zUn.CUSTOM_BANNER_HASH]: () => P.t['04b5KC'],
        [M.zUn.TRAITS]: () => P.t.dEy9WF,
        [M.zUn.GAME_APPLICATION_IDS]: () => P.t['8BOT39'],
        [M.zUn.VISIBILITY]: () => P.t.bCl1Eh,
        [M.zUn.SERVER_TAG]: ev(P.t.ix1dnZ, P.t['4LKpKS'])
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
            label: P.intl.string(P.t.QxEVcn),
            valueLabel: P.intl.string(P.t.an9Ry8)
        },
        {
            value: M.rsA.GUILD_UPDATE,
            label: P.intl.string(P.t['5INZa2'])
        },
        {
            value: M.rsA.CHANNEL_CREATE,
            label: P.intl.string(P.t['2uh4vL'])
        },
        {
            value: M.rsA.CHANNEL_UPDATE,
            label: P.intl.string(P.t.mGsBLS)
        },
        {
            value: M.rsA.CHANNEL_DELETE,
            label: P.intl.string(P.t.hCHzAg)
        },
        {
            value: M.rsA.CHANNEL_OVERWRITE_CREATE,
            label: P.intl.string(P.t['8TnAMD'])
        },
        {
            value: M.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: P.intl.string(P.t.Jqx0Bg)
        },
        {
            value: M.rsA.CHANNEL_OVERWRITE_DELETE,
            label: P.intl.string(P.t.gBXOr6)
        },
        {
            value: M.rsA.MEMBER_KICK,
            label: P.intl.string(P.t['Q1/hNz'])
        },
        {
            value: M.rsA.MEMBER_PRUNE,
            label: P.intl.string(P.t.tOTTjY)
        },
        {
            value: M.rsA.MEMBER_BAN_ADD,
            label: P.intl.string(P.t['NfPn+f'])
        },
        {
            value: M.rsA.MEMBER_BAN_REMOVE,
            label: P.intl.string(P.t.XCsGfH)
        },
        {
            value: M.rsA.MEMBER_UPDATE,
            label: P.intl.string(P.t['F/jmND'])
        },
        {
            value: M.rsA.MEMBER_ROLE_UPDATE,
            label: P.intl.string(P.t.zAveSE)
        },
        {
            value: M.rsA.MEMBER_MOVE,
            label: P.intl.string(P.t.QshteX)
        },
        {
            value: M.rsA.MEMBER_DISCONNECT,
            label: P.intl.string(P.t.Z45os7)
        },
        {
            value: M.rsA.BOT_ADD,
            label: P.intl.string(P.t.vuH24e)
        },
        {
            value: M.rsA.THREAD_CREATE,
            label: P.intl.string(P.t['+zl0DA'])
        },
        {
            value: M.rsA.THREAD_UPDATE,
            label: P.intl.string(P.t.rbIry8)
        },
        {
            value: M.rsA.THREAD_DELETE,
            label: P.intl.string(P.t.hFjNEB)
        },
        {
            value: M.rsA.ROLE_CREATE,
            label: P.intl.string(P.t.AbxKtr)
        },
        {
            value: M.rsA.ROLE_UPDATE,
            label: P.intl.string(P.t.t3Z6sb)
        },
        {
            value: M.rsA.ROLE_DELETE,
            label: P.intl.string(P.t.YsFpa2)
        },
        {
            value: M.rsA.ONBOARDING_PROMPT_CREATE,
            label: P.intl.string(P.t.ZV9tqa)
        },
        {
            value: M.rsA.ONBOARDING_PROMPT_UPDATE,
            label: P.intl.string(P.t.PcOdvb)
        },
        {
            value: M.rsA.ONBOARDING_PROMPT_DELETE,
            label: P.intl.string(P.t['+r33NT'])
        },
        {
            value: M.rsA.ONBOARDING_CREATE,
            label: P.intl.string(P.t.uDADdX)
        },
        {
            value: M.rsA.ONBOARDING_UPDATE,
            label: P.intl.string(P.t.J1H1ws)
        },
        {
            value: M.rsA.HOME_SETTINGS_CREATE,
            label: P.intl.string(P.t.Di4cvL)
        },
        {
            value: M.rsA.HOME_SETTINGS_UPDATE,
            label: P.intl.string(P.t.tzyrJC)
        },
        {
            value: M.rsA.INVITE_CREATE,
            label: P.intl.string(P.t['0BNJdX'])
        },
        {
            value: M.rsA.INVITE_UPDATE,
            label: P.intl.string(P.t['o++obW'])
        },
        {
            value: M.rsA.INVITE_DELETE,
            label: P.intl.string(P.t.iP40Aw)
        },
        {
            value: M.rsA.WEBHOOK_CREATE,
            label: P.intl.string(P.t['tBF4+f'])
        },
        {
            value: M.rsA.WEBHOOK_UPDATE,
            label: P.intl.string(P.t.eV3McH)
        },
        {
            value: M.rsA.WEBHOOK_DELETE,
            label: P.intl.string(P.t.AAL3Ky)
        },
        {
            value: M.rsA.EMOJI_CREATE,
            label: P.intl.string(P.t.RuWm0d)
        },
        {
            value: M.rsA.EMOJI_UPDATE,
            label: P.intl.string(P.t.WzdUY2)
        },
        {
            value: M.rsA.EMOJI_DELETE,
            label: P.intl.string(P.t.c3dK2N)
        },
        {
            value: M.rsA.MESSAGE_DELETE,
            label: P.intl.string(P.t.daTfXl)
        },
        {
            value: M.rsA.MESSAGE_BULK_DELETE,
            label: P.intl.string(P.t.nrBxen)
        },
        {
            value: M.rsA.MESSAGE_PIN,
            label: P.intl.string(P.t.MUldyM)
        },
        {
            value: M.rsA.MESSAGE_UNPIN,
            label: P.intl.string(P.t.n4zKhI)
        },
        {
            value: M.rsA.INTEGRATION_CREATE,
            label: P.intl.string(P.t['deNm8/'])
        },
        {
            value: M.rsA.INTEGRATION_UPDATE,
            label: P.intl.string(P.t.HT7Sfn)
        },
        {
            value: M.rsA.INTEGRATION_DELETE,
            label: P.intl.string(P.t['+kJ09v'])
        },
        {
            value: M.rsA.STICKER_CREATE,
            label: P.intl.string(P.t['3DzNjY'])
        },
        {
            value: M.rsA.STICKER_UPDATE,
            label: P.intl.string(P.t.tdhW5e)
        },
        {
            value: M.rsA.STICKER_DELETE,
            label: P.intl.string(P.t['+ZhGOj'])
        },
        {
            value: M.rsA.STAGE_INSTANCE_CREATE,
            label: P.intl.string(P.t.sPbjAw)
        },
        {
            value: M.rsA.STAGE_INSTANCE_UPDATE,
            label: P.intl.string(P.t.cW9LfH)
        },
        {
            value: M.rsA.STAGE_INSTANCE_DELETE,
            label: P.intl.string(P.t['U1r+yM'])
        },
        {
            value: M.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: P.intl.string(P.t.H81Zy8)
        },
        {
            value: M.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: P.intl.string(P.t.FM69l5)
        },
        {
            value: M.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: P.intl.string(P.t.Rq28Bg)
        },
        {
            value: M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: P.intl.string(P.t.iPdFOj)
        },
        {
            value: M.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: P.intl.string(P.t.gNq5z8)
        },
        {
            value: M.rsA.AUTO_MODERATION_RULE_CREATE,
            label: P.intl.string(P.t.f72Zqa)
        },
        {
            value: M.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: P.intl.string(P.t.XeqIio)
        },
        {
            value: M.rsA.AUTO_MODERATION_RULE_DELETE,
            label: P.intl.string(P.t.syAApa)
        },
        {
            value: M.rsA.GUILD_HOME_FEATURE_ITEM,
            label: P.intl.string(P.t.lhG5KC)
        },
        {
            value: M.rsA.GUILD_HOME_REMOVE_ITEM,
            label: P.intl.string(P.t.lRPRwc)
        },
        {
            value: M.rsA.SOUNDBOARD_SOUND_CREATE,
            label: P.intl.string(P.t.yoRi5u)
        },
        {
            value: M.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: P.intl.string(P.t.uKlG0d)
        },
        {
            value: M.rsA.SOUNDBOARD_SOUND_DELETE,
            label: P.intl.string(P.t.gq0iCQ)
        },
        {
            value: M.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: P.intl.string(P.t.rGr0YG)
        },
        {
            value: M.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: P.intl.string(P.t.V9PEQ0)
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
    return null != ed(M.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? P.intl.string(P.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [d.J6.SECONDS]: (e) => P.intl.formatToPlainString(P.t.geSp4O, { seconds: e }),
    [d.J6.MINUTES]: (e) => P.intl.formatToPlainString(P.t.iXLF9f, { minutes: e }),
    [d.J6.HOURS]: (e) => P.intl.formatToPlainString(P.t.xCjYxM, { hours: e }),
    [d.J6.DAYS]: (e) => P.intl.formatToPlainString(P.t.k2UNz8, { days: e })
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
        } else if ((null == t ? void 0 : t.oldValue) != null) return P.intl.string(P.t.MA1ltr);
    } else if (n && r) return P.intl.string(P.t.RdMMe3);
    else if (n) return P.intl.string(P.t['4GQqs7']);
    else if (r) return P.intl.string(P.t['8mQ6x8']);
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
        ? P.intl.formatToPlainString(P.t.tZw1ER, {
              roleNamesAdded: r,
              roleNamesRemoved: l
          })
        : t.length > 0
          ? P.intl.formatToPlainString(P.t['/mTqt7'], { roleNames: r })
          : n.length > 0
            ? P.intl.formatToPlainString(P.t.Wk4pAA, { roleNames: l })
            : null;
}
function ef(e) {
    switch (e.action) {
        case M.rsA.GUILD_UPDATE:
            return P.t.LjZO39;
        case M.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === M.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case M.d4z.GUILD_STAGE_VOICE:
                    return P.t['OKp4+v'];
                case M.d4z.GUILD_VOICE:
                    return P.t.NPOy4O;
                case M.d4z.GUILD_CATEGORY:
                    return P.t.T3KIj4;
                default:
                    return P.t.wrYNGx;
            }
        case M.rsA.CHANNEL_UPDATE:
            return P.t.nTYk6O;
        case M.rsA.CHANNEL_DELETE:
            return P.t.ynfvkp;
        case M.rsA.CHANNEL_OVERWRITE_CREATE:
            return P.t.l5Cu1d;
        case M.rsA.CHANNEL_OVERWRITE_UPDATE:
            return P.t.uhtbNT;
        case M.rsA.CHANNEL_OVERWRITE_DELETE:
            return P.t['HASt//'];
        case M.rsA.MEMBER_KICK:
            return P.t.B5hDZW;
        case M.rsA.MEMBER_PRUNE:
            return P.t.qKOZTE;
        case M.rsA.MEMBER_BAN_ADD:
            return P.t.XklUm5;
        case M.rsA.MEMBER_BAN_REMOVE:
            return P.t.o3Y6HB;
        case M.rsA.MEMBER_UPDATE:
            return P.t.pznhLC;
        case M.rsA.MEMBER_ROLE_UPDATE:
            return P.t.VngfiY;
        case M.rsA.MEMBER_MOVE:
            return P.t.Yt6NkZ;
        case M.rsA.MEMBER_DISCONNECT:
            return P.t.K4eCZ2;
        case M.rsA.BOT_ADD:
            return P.t.fWvX0N;
        case M.rsA.ROLE_CREATE:
            return P.t.UTLTx8;
        case M.rsA.ROLE_UPDATE:
            return P.t.NRbN19;
        case M.rsA.ROLE_DELETE:
            return P.t['4s63tb'];
        case M.rsA.INVITE_CREATE:
            return P.t.YHOXW1;
        case M.rsA.INVITE_UPDATE:
            return P.t.ja3kGR;
        case M.rsA.INVITE_DELETE:
            return P.t['3n/iWl'];
        case M.rsA.WEBHOOK_CREATE:
            return P.t.MhYhio;
        case M.rsA.WEBHOOK_UPDATE:
            return P.t['6GTlWF'];
        case M.rsA.WEBHOOK_DELETE:
            return P.t.in0VjY;
        case M.rsA.EMOJI_CREATE:
            return P.t['7vekRE'];
        case M.rsA.EMOJI_UPDATE:
            return P.t.IsCKfn;
        case M.rsA.EMOJI_DELETE:
            return P.t.JnUaVF;
        case M.rsA.STICKER_CREATE:
            return P.t.DRZifn;
        case M.rsA.STICKER_UPDATE:
            return P.t.bhujGR;
        case M.rsA.STICKER_DELETE:
            return P.t.rGEP9f;
        case M.rsA.MESSAGE_DELETE:
            return P.t['HPkD+P'];
        case M.rsA.MESSAGE_BULK_DELETE:
            return P.t['3RIvLC'];
        case M.rsA.MESSAGE_PIN:
            return P.t.Yna7Ex;
        case M.rsA.MESSAGE_UNPIN:
            return P.t.NCxXUV;
        case M.rsA.INTEGRATION_CREATE:
            return P.t.HYvCb2;
        case M.rsA.INTEGRATION_UPDATE:
            return P.t.ibCCOT;
        case M.rsA.INTEGRATION_DELETE:
            return P.t['8zScWV'];
        case M.rsA.STAGE_INSTANCE_CREATE:
            return P.t['n7x/DA'];
        case M.rsA.STAGE_INSTANCE_UPDATE:
            return P.t['0hQYU1'];
        case M.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return P.t['Oi/in5'];
            return P.t['7ZIFm5'];
        case M.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return P.t.S7k52t;
        case M.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return P.t.ebTK19;
        case M.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return P.t['/ARPKS'];
        case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return P.t['8qCI39'];
        case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return P.t.zYb2dX;
        case M.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === M.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case M.d4z.PRIVATE_THREAD:
                    return P.t['Br0y5+'];
                case M.d4z.ANNOUNCEMENT_THREAD:
                    return P.t['6uaMmJ'];
                default:
                    return P.t['2cxQ7O'];
            }
        case M.rsA.THREAD_UPDATE:
            return P.t.PSsy4u;
        case M.rsA.THREAD_DELETE:
            return P.t.s3Khn5;
        case M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return P.t.uzCqBg;
        case M.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return P.t.NqWv2N;
        case M.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === U.fX.USER_PROFILE.toString()) return P.t.YQsjen;
            return P.t.SD0PwM;
        case M.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return P.t.Vk4Twc;
        case M.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return P.t['/W5u5u'];
        case M.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return P.t.ONvWys;
        case M.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return P.t.ryGLk5;
        case M.rsA.AUTO_MODERATION_RULE_CREATE:
            return P.t.NKljj4;
        case M.rsA.AUTO_MODERATION_RULE_UPDATE:
            return P.t['3wEA9v'];
        case M.rsA.AUTO_MODERATION_RULE_DELETE:
            return P.t.umua3t;
        case M.rsA.ONBOARDING_PROMPT_CREATE:
            return P.t['/8A1g4'];
        case M.rsA.ONBOARDING_PROMPT_UPDATE:
            return P.t.ArIrWF;
        case M.rsA.ONBOARDING_PROMPT_DELETE:
            return P.t.IuBTam;
        case M.rsA.ONBOARDING_CREATE:
            return P.t.wDaq39;
        case M.rsA.ONBOARDING_UPDATE:
            return P.t['yONu/v'];
        case M.rsA.HOME_SETTINGS_CREATE:
            return P.t.dSdCjI;
        case M.rsA.HOME_SETTINGS_UPDATE:
            return P.t.XHE8qq;
        case M.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === M.zUn.ENTITY_TYPE) : null;
            if (null == l) return P.t['UZ+U3N'];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return P.t['PyEa+P'];
                case a.w.FORUM_POST:
                    return P.t.hCuAb2;
                default:
                    return P.t['UZ+U3N'];
            }
        case M.rsA.GUILD_HOME_REMOVE_ITEM:
            return P.t.kPReur;
        case M.rsA.SOUNDBOARD_SOUND_CREATE:
            return P.t['0PD83d'];
        case M.rsA.SOUNDBOARD_SOUND_UPDATE:
            return P.t.CM8n19;
        case M.rsA.SOUNDBOARD_SOUND_DELETE:
            return P.t['kVz4//'];
        case M.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return P.t.MWjnU1;
        case M.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return P.t.aS8Krq;
        case M.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return P.t.NUKUb2;
        case M.rsA.GUILD_PROFILE_UPDATE:
            return P.t.Ed6hFx;
        default:
            return null;
    }
}
function eg(e) {
    switch (e) {
        case L.zZ.GUILD_FEED_REMOVED:
            return P.intl.string(P.t['5G8ZDw']);
        case L.zZ.ACTIVE_CHANNELS_REMOVED:
            return P.intl.string(P.t['4YLtzM']);
        case L.zZ.PINNED:
            return P.intl.string(P.t['1QLRYW']);
    }
    return null;
}
function eI(e) {
    switch (e) {
        case L.zZ.GUILD_FEED_REMOVED:
            return P.intl.string(P.t.S5kuWV);
        case L.zZ.ACTIVE_CHANNELS_REMOVED:
            return P.intl.string(P.t['8qpgc3']);
        case L.zZ.PINNED:
            return P.intl.string(P.t.CMweGB);
    }
    return null;
}
function eh(e, t) {
    switch (e) {
        case M.Plq.CREATE_INSTANT_INVITE:
            return P.intl.string(P.t.zJrgTE);
        case M.Plq.KICK_MEMBERS:
            return P.intl.string(P.t.pBNv6u);
        case M.Plq.BAN_MEMBERS:
            return P.intl.string(P.t.oTBA7O);
        case M.Plq.ADMINISTRATOR:
            return P.intl.string(P.t.PGvZqa);
        case M.Plq.MANAGE_CHANNELS:
            if (t.targetType === M.KFR.CHANNEL || t.targetType === M.KFR.CHANNEL_OVERWRITE) return P.intl.string(P.t.nAw15O);
            return P.intl.string(P.t['9qLtWl']);
        case M.Plq.MANAGE_GUILD:
            return P.intl.string(P.t.QZRcfH);
        case M.Plq.VIEW_GUILD_ANALYTICS:
            return P.intl.string(P.t.rQJBEx);
        case M.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return P.intl.string(P.t['0lTLTk']);
        case M.Plq.CHANGE_NICKNAME:
            return P.intl.string(P.t.dilOFx);
        case M.Plq.MANAGE_NICKNAMES:
            return P.intl.string(P.t['t+Ct5+']);
        case M.Plq.MANAGE_ROLES:
            return P.intl.string(P.t['C8d+oK']);
        case M.Plq.MANAGE_WEBHOOKS:
            return P.intl.string(P.t['/ADKmJ']);
        case M.Plq.CREATE_GUILD_EXPRESSIONS:
            return P.intl.string(P.t.HarVuL);
        case M.Plq.MANAGE_GUILD_EXPRESSIONS:
            return P.intl.string(P.t.bbuXIi);
        case M.Plq.VIEW_AUDIT_LOG:
            return P.intl.string(P.t.fZgLpK);
        case M.Plq.VIEW_CHANNEL:
            if (t.targetType === M.KFR.CHANNEL || t.targetType === M.KFR.CHANNEL_OVERWRITE) return P.intl.string(P.t['W/A4Qk']);
            return P.intl.string(P.t.uV83ys);
        case M.Plq.SEND_MESSAGES:
            return P.intl.string(P.t.T32rkJ);
        case M.Plq.SEND_TTS_MESSAGES:
            return P.intl.string(P.t.Mg7bkp);
        case M.Plq.USE_APPLICATION_COMMANDS:
            return P.intl.string(P.t.shbR1d);
        case M.Plq.MANAGE_MESSAGES:
            return P.intl.string(P.t['6lU9xM']);
        case M.Plq.EMBED_LINKS:
            return P.intl.string(P.t['969dEB']);
        case M.Plq.ATTACH_FILES:
            return P.intl.string(P.t['3AS4UF']);
        case M.Plq.READ_MESSAGE_HISTORY:
            return P.intl.string(P.t.l9ufaW);
        case M.Plq.MENTION_EVERYONE:
            return P.intl.string(P.t.Y78KGB);
        case M.Plq.USE_EXTERNAL_EMOJIS:
            return P.intl.string(P.t.BpBGZW);
        case M.Plq.USE_EXTERNAL_STICKERS:
            return P.intl.string(P.t['UeRs+f']);
        case M.Plq.ADD_REACTIONS:
            return P.intl.string(P.t.yEoJAg);
        case M.Plq.CONNECT:
            return P.intl.string(P.t.S0W8Z2);
        case M.Plq.SPEAK:
            return P.intl.string(P.t['8w1tIS']);
        case M.Plq.MUTE_MEMBERS:
            return P.intl.string(P.t['8EI309']);
        case M.Plq.DEAFEN_MEMBERS:
            return P.intl.string(P.t['9L47Fh']);
        case M.Plq.MOVE_MEMBERS:
            return P.intl.string(P.t.YtjJPT);
        case M.Plq.USE_VAD:
            return P.intl.string(P.t['08zAV1']);
        case M.Plq.PRIORITY_SPEAKER:
            return P.intl.string(P.t.BVK71t);
        case M.Plq.STREAM:
            return P.intl.string(P.t.FlNoSU);
        case M.Plq.REQUEST_TO_SPEAK:
            return P.intl.string(P.t['5kicT0']);
        case M.Plq.CREATE_EVENTS:
            return P.intl.string(P.t.qyjZub);
        case M.Plq.MANAGE_EVENTS:
            return P.intl.string(P.t.HIgA5e);
        case M.Plq.CREATE_PUBLIC_THREADS:
            return P.intl.string(P.t['25rKnZ']);
        case M.Plq.CREATE_PRIVATE_THREADS:
            return P.intl.string(P.t.QwbTSU);
        case M.Plq.SEND_MESSAGES_IN_THREADS:
            return P.intl.string(P.t.fTE74u);
        case M.Plq.MANAGE_THREADS:
            return P.intl.string(P.t.kEqgr6);
        case M.Plq.MODERATE_MEMBERS:
            return P.intl.string(P.t['+RL6p6']);
        case M.Plq.SET_VOICE_CHANNEL_STATUS:
            return P.intl.string(P.t.VBwkUV);
        case M.Plq.SEND_POLLS:
            return P.intl.string(P.t.UMQ7W1);
        case M.Plq.USE_EXTERNAL_APPS:
            return P.intl.string(P.t.TtA5rK);
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
                            return null == n || '' === n ? P.intl.string(P.t.ZNQyiY) : n;
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
                                () => P.intl.string(P.t.VbpLyc),
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
                                            ? (e.subtarget = P.intl.string(P.t.MSYhgo))
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
                                        let t = (0, P.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case M.zUn.VIDEO_QUALITY_MODE:
                                    return eR(e, (e) => (e === M.Ucd.FULL ? P.intl.string(P.t['7jOoJC']) : P.intl.string(P.t.jjKYpq)));
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
                                    if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? P.intl.formatToMarkdownString(P.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
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
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : P.intl.string(P.t['K/EdV1']))
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
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : P.intl.string(P.t['K/EdV1']))
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
