(n.d(t, {
    Bq: () => X,
    C0: () => ei,
    C2: () => $,
    EN: () => K,
    F1: () => ea,
    HE: () => V,
    HN: () => q,
    Iv: () => ec,
    J5: () => ef,
    JA: () => es,
    K: () => Q,
    ML: () => z,
    N$: () => J,
    N5: () => eT,
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
    f = n(236413),
    T = n(45966),
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
    L = n(981631),
    M = n(176505),
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
    F = () => ({ [L.zUn.REASON]: () => P.t['2IW3Cw'] }),
    Z = () =>
        y(
            {
                [L.zUn.NAME]: () => P.t.CkDiND,
                [L.zUn.DESCRIPTION]: ev(P.t.RP3Ey8, P.t.QAVj1d),
                [L.zUn.ICON_HASH]: () => P.t.iLZ8Q0,
                [L.zUn.SPLASH_HASH]: () => P.t['4VV6dn'],
                [L.zUn.DISCOVERY_SPLASH_HASH]: () => P.t['2pds6u'],
                [L.zUn.BANNER_HASH]: ev(P.t.Cxq4zM, P.t['H7eE//']),
                [L.zUn.OWNER_ID]: () => P.t['8ltsLS'],
                [L.zUn.REGION]: () => P.t.X9r5KS,
                [L.zUn.PREFERRED_LOCALE]: () => P.t.UnXuDQ,
                [L.zUn.AFK_CHANNEL_ID]: ev(P.t.ClBuAw, P.t['ms+xtL']),
                [L.zUn.AFK_TIMEOUT]: () => P.t.q21fHR,
                [L.zUn.SYSTEM_CHANNEL_ID]: ev(P.t.H1VXaW, P.t.XhtmxM),
                [L.zUn.RULES_CHANNEL_ID]: ev(P.t.OI6MGx, P.t.lik3tL),
                [L.zUn.PUBLIC_UPDATES_CHANNEL_ID]: ev(P.t.YxBKra, P.t.Ehsnio),
                [L.zUn.MFA_LEVEL]: eL({
                    [L.BpS.NONE]: P.t.voaCCQ,
                    [L.BpS.ELEVATED]: P.t.pRNVw8
                }),
                [L.zUn.WIDGET_ENABLED]: ex(P.t.ADIty8, P.t.nf58VV),
                [L.zUn.WIDGET_CHANNEL_ID]: ev(P.t['6SBsDQ'], P.t.deQ5wM),
                [L.zUn.VERIFICATION_LEVEL]: eL({
                    [L.sFg.NONE]: P.t.W27rsb,
                    [L.sFg.LOW]: P.t['V8P+Pz'],
                    [L.sFg.MEDIUM]: P.t.ERQFam,
                    [L.sFg.HIGH]: P.t['83fN0t'],
                    [L.sFg.VERY_HIGH]: P.t.PnkQJC
                }),
                [L.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eL({
                    [L.bL.ALL_MESSAGES]: P.t.LDi76O,
                    [L.bL.ONLY_MENTIONS]: P.t['6K83bW']
                }),
                [L.zUn.VANITY_URL_CODE]: ev(P.t.Zplsoq, P.t.u6cArq),
                [L.zUn.EXPLICIT_CONTENT_FILTER]: eL({
                    [L.lxg.DISABLED]: P.t.fmOeLy,
                    [L.lxg.MEMBERS_WITHOUT_ROLES]: P.t['4FghY2'],
                    [L.lxg.ALL_MEMBERS]: P.t.olyrSk
                }),
                [L.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: ex(P.t.rBT0sr, P.t['gc+te3']),
                [L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => P.t.YbouFB,
                [L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => P.t.g3DMjI,
                [L.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => P.t['+fQAen'],
                [L.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => P.t.E1fc4u,
                [L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => P.t.XbwtSE
            },
            F()
        ),
    z = () => ({
        [L.zUn.NAME]: eb(P.t.f8Rh0d, P.t.ebD4Qk),
        [L.zUn.POSITION]: eb(P.t.isS8tb, P.t.t5uBio),
        [L.zUn.TOPIC]: eD(P.t.esQcxs, P.t['m+veAg'], P.t['ws/1FB']),
        [L.zUn.BITRATE]: eb(P.t.fw81am, P.t.MFNlgY),
        [L.zUn.RTC_REGION_OVERRIDE]: eD(P.t['6kajx8'], P.t.eGOlmZ, P.t['0JMZd3']),
        [L.zUn.USER_LIMIT]: eb(P.t.wk5t7u, P.t.XgjCEh),
        [L.zUn.RATE_LIMIT_PER_USER]: eb(P.t['7lirhI'], P.t.j4CCJS),
        [L.zUn.PERMISSIONS_RESET]: () => P.t['+vSBFR'],
        [L.zUn.PERMISSIONS_GRANTED]: () => P.t.EKLJv7,
        [L.zUn.PERMISSIONS_DENIED]: () => P.t.U3rO5e,
        [L.zUn.REASON]: () => P.t['2IW3Cw'],
        [L.zUn.NSFW]: ex(P.t.H8Ri2d, P.t.WW6cJy),
        [L.zUn.TYPE]: eb(P.t.Vn5zn5, P.t.aq4uWF),
        [L.zUn.VIDEO_QUALITY_MODE]: eb(P.t.e68fAQ, P.t.djbES0),
        [L.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eb(P.t.nYz2mp, P.t.oczvRE),
        [L.zUn.FLAGS]: () => P.t.ImCQkp,
        [L.zUn.AVAILABLE_TAG_ADD]: () => P.t.H86QQU,
        [L.zUn.AVAILABLE_TAG_EDIT]: () => P.t.YtUzlp,
        [L.zUn.AVAILABLE_TAG_DELETE]: () => P.t['8QOsen'],
        [L.zUn.LINKED_LOBBY]: ev(P.t['+/3TkJ'], P.t['5kDYS0'])
    }),
    B = () =>
        y(
            {
                [L.zUn.NICK]: eD(P.t.qXDsHh, P.t['m+qur6'], P.t.DvLvjI),
                [L.zUn.DEAF]: ex(P.t.mArLlZ, P.t.ddvVYG),
                [L.zUn.MUTE]: ex(P.t['bxs/lZ'], P.t.FjecQE),
                [L.zUn.ROLES_REMOVE]: () => P.t['+2SDWV'],
                [L.zUn.ROLES_ADD]: () => P.t['B3/3IC'],
                [L.zUn.PRUNE_DELETE_DAYS]: () => P.t['+Cvc+P'],
                [L.zUn.COMMUNICATION_DISABLED_UNTIL]: eD(P.t.LXTQr6, P.t.LXTQr6, P.t.ULSdnJ),
                [L.zUn.BYPASSES_VERIFICATION]: ex(P.t.NBPBur, P.t.zATosr),
                [L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => P.t.YbouFB
            },
            F()
        ),
    V = () =>
        y(
            {
                [L.zUn.NAME]: eb(P.t.QBmlaG, P.t.Lfs4r6),
                [L.zUn.DESCRIPTION]: eb(P.t.XeYKWF, P.t.PSfeIi),
                [L.zUn.PERMISSIONS_GRANTED]: () => P.t['9i/DvL'],
                [L.zUn.PERMISSIONS_DENIED]: () => P.t.pa1ZVl,
                [L.zUn.COLOR]: eM({ '#000000': P.t.TK6E1N }, P.t['2FQFi4']),
                [L.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? P.t.U44ttr : P.t.WnSwLy),
                [L.zUn.HOIST]: ex(P.t.gWfe29, P.t['+tb8kJ']),
                [L.zUn.MENTIONABLE]: ex(P.t.LL8VFB, P.t.Z7xzmJ),
                [L.zUn.ICON_HASH]: () => P.t['iEE79/'],
                [L.zUn.UNICODE_EMOJI]: () => P.t.KiLMMz
            },
            F()
        ),
    H = () =>
        w(y({}, F()), {
            [L.zUn.TITLE]: eb(P.t.sNpuy8, P.t['3Ukc/v']),
            [L.zUn.DESCRIPTION]: eb(P.t.PP1q09, P.t.z7pYLi),
            [L.zUn.OPTIONS]: () => P.t['3G5C9/'],
            [L.zUn.SINGLE_SELECT]: ex(P.t.v4WnR0, P.t['6Qg3uL']),
            [L.zUn.REQUIRED]: ex(P.t['0MPAMz'], P.t.pwsXio)
        }),
    K = () =>
        w(y({}, F()), {
            [L.zUn.DEFAULT_CHANNEL_IDS]: () => P.t['8M+D2t'],
            [L.zUn.ENABLE_DEFAULT_CHANNELS]: ex(P.t['EYd/lp'], P.t['36OZeX']),
            [L.zUn.ENABLE_ONBOARDING_PROMPTS]: ex(P.t.V3u8PT, P.t.r66lc3),
            [L.zUn.ENABLED]: ex(P.t.SODVIi, P.t.u8HY5e)
        }),
    W = () =>
        w(y({}, F()), {
            [L.zUn.WELCOME_MESSAGE]: () => P.t.dKQ1xc,
            [L.zUn.NEW_MEMBER_ACTIONS]: () => P.t.jDUInp,
            [L.zUn.RESOURCE_CHANNELS]: () => P.t.SIX0mp
        }),
    q = () =>
        y(
            {
                [L.zUn.CODE]: () => P.t.rrRHgY,
                [L.zUn.CHANNEL_ID]: () => P.t.Q1vd5u,
                [L.zUn.MAX_USES]: eM({ 0: P.t.Yx8LNj }, P.t['3ygnwc']),
                [L.zUn.MAX_AGE]: eM({ [P.intl.string(P.t.PqEzn5)]: P.t.uWrLv7 }, P.t['Q+5kcH']),
                [L.zUn.TEMPORARY]: ex(P.t.MWp6Hx, P.t.omiqTE),
                [L.zUn.FLAGS]: eL({ [o.$.IS_GUEST_INVITE]: P.t.XYZMbG })
            },
            F()
        ),
    Y = () => ({
        [L.zUn.CHANNEL_ID]: eb(P.t.jhPpra, P.t.ar4qYG),
        [L.zUn.NAME]: eb(P.t.ZVGrzc, P.t.tywdZW),
        [L.zUn.AVATAR_HASH]: () => P.t.KB52Ul,
        [L.zUn.REASON]: () => P.t['2IW3Cw']
    }),
    J = () => y({ [L.zUn.NAME]: eb(P.t.ahU1o6, P.t['wxs+vb']) }, F()),
    X = () =>
        y(
            {
                [L.zUn.NAME]: eb(P.t.cdl0Ym, P.t.o3W2l5),
                [L.zUn.TAGS]: eb(P.t['zwL+S0'], P.t.VYfKAw),
                [L.zUn.DESCRIPTION]: eb(P.t.XeYKWF, P.t.PSfeIi)
            },
            F()
        ),
    Q = () =>
        y(
            {
                [L.zUn.ENABLE_EMOTICONS]: ex(P.t['FI0m5+'], P.t.olpKCw),
                [L.zUn.EXPIRE_BEHAVIOR]: eL({
                    0: P.t['1Bb1+v'],
                    1: P.t.vjlW6u
                }),
                [L.zUn.EXPIRE_GRACE_PERIOD]: () => P.t.iovXMT
            },
            F()
        ),
    $ = () =>
        y(
            {
                [L.zUn.TOPIC]: eb(P.t['m+veAg'], P.t.esQcxs),
                [L.zUn.PRIVACY_LEVEL]: eL({
                    [j.j8.GUILD_ONLY]: P.t['EC+CDg'],
                    [j.j8.PUBLIC]: P.t['pK/WGx']
                })
            },
            F()
        ),
    ee = () =>
        y(
            {
                [L.zUn.NAME]: () => P.t['21EXHR'],
                [L.zUn.DESCRIPTION]: () => P.t.Vm1of3,
                [L.zUn.PRIVACY_LEVEL]: eL({
                    [j.j8.GUILD_ONLY]: P.t['EC+CDg'],
                    [j.j8.PUBLIC]: P.t['pK/WGx']
                }),
                [L.zUn.STATUS]: eL({
                    [j.p1.SCHEDULED]: P.t.hXKDgo,
                    [j.p1.ACTIVE]: P.t.lRX1n5,
                    [j.p1.COMPLETED]: P.t['/eFIho'],
                    [j.p1.CANCELED]: P.t.NWIYho
                }),
                [L.zUn.ENTITY_TYPE]: eL({
                    [j.WX.NONE]: P.t['6sO3Sk'],
                    [j.WX.STAGE_INSTANCE]: P.t['Wo+s19'],
                    [j.WX.VOICE]: P.t.XCVaIC,
                    [j.WX.EXTERNAL]: P.t.IvhAj4
                }),
                [L.zUn.CHANNEL_ID]: ev(P.t.yJBIcX, P.t['+PqSsr']),
                [L.zUn.LOCATION]: ev(P.t.GaMBHx, P.t.PsICk5),
                [L.zUn.IMAGE_HASH]: ev(P.t.S3vcRE, P.t.KQu47O)
            },
            F()
        ),
    et = () =>
        y(
            {
                [L.zUn.SCHEDULED_START_TIME]: ev(P.t.zMIYVl, P.t.fzF8GR),
                [L.zUn.SCHEDULED_END_TIME]: ev(P.t.vONSQE, P.t.IlIti4),
                [L.zUn.IS_CANCELED]: (e) => {
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
                [L.zUn.NAME]: eb(P.t.tUKRzc, P.t.kPCHOD),
                [L.zUn.ARCHIVED]: ex(P.t.jDi9FB, P.t.F6dvbW),
                [L.zUn.LOCKED]: ex(P.t.JSy1QU, P.t.C7Jgo6),
                [L.zUn.INVITABLE]: ex(P.t.dxNUs7, P.t.biJvYG),
                [L.zUn.AUTO_ARCHIVE_DURATION]: eb(P.t.LuaG39, P.t['18d9qq']),
                [L.zUn.RATE_LIMIT_PER_USER]: eb(P.t['7lirhI'], P.t.j4CCJS),
                [L.zUn.FLAGS]: () => P.t.sSAQtr
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
                [L.zUn.NAME]: () => P.t.XwxAJS,
                [L.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => P.t.fx0pys,
                [L.zUn.AUTO_MODERATION_EVENT_TYPE]: () => P.t['46Y+Ly'],
                [L.zUn.AUTO_MODERATION_ACTIONS]: () => P.t['8efxfn'],
                [L.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? P.t.fCmxCw : P.t.Wrg9Ji;
                },
                [L.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => P.t.TRb7Nz,
                [L.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => P.t.mzitLC,
                [L.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => P.t['h/lM6+'],
                [L.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => P.t['9V2yaG'],
                [L.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => P.t['4Qe9n5'],
                [L.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => P.t.GyZtxs,
                [L.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => P.t.OQDadX,
                [L.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => P.t['FvvR+P'],
                [L.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => P.t.p5nSv7
            },
            F()
        ),
    ei = () =>
        y(
            {
                [L.zUn.NAME]: eb(P.t.VOtRSE, P.t.OK7B8P),
                [L.zUn.VOLUME]: eb(P.t.igrDBw, P.t.L5lDFB),
                [L.zUn.EMOJI_NAME]: eD(P.t.IIanaW, P.t.z4w4U1, P.t.V8Tfyc),
                [L.zUn.EMOJI_ID]: eD(P.t.ainxMD, P.t['2NPsYm'], P.t['8crtnp'])
            },
            F()
        ),
    es = () =>
        y(
            {
                [L.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? P.t.fnkzDQ : P.t.WYT6kZ),
                [L.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? P.t.jzSvVV : P.t.WxyOtr)
            },
            F()
        ),
    ea = () => y({ [L.zUn.STATUS]: () => P.t.HyCSnJ }, F()),
    eo = () => ({
        [L.zUn.DESCRIPTION]: () => P.t.nsUZKS,
        [L.zUn.BRAND_COLOR_PRIMARY]: () => P.t.qe9mgI,
        [L.zUn.CUSTOM_BANNER_HASH]: () => P.t['04b5KC'],
        [L.zUn.TRAITS]: () => P.t.dEy9WF,
        [L.zUn.GAME_APPLICATION_IDS]: () => P.t['8BOT39'],
        [L.zUn.VISIBILITY]: () => P.t.bCl1Eh,
        [L.zUn.SERVER_TAG]: ev(P.t.ix1dnZ, P.t['4LKpKS'])
    }),
    eu = {
        [L.KFR.CHANNEL]: {
            [L.zUn.ID]: !0,
            [L.zUn.PERMISSION_OVERWRITES]: !0
        },
        [L.KFR.CHANNEL_OVERWRITE]: {
            [L.zUn.TYPE]: !0,
            [L.zUn.ID]: !0,
            [L.zUn.PERMISSION_OVERWRITES]: !0
        },
        [L.KFR.INVITE]: {
            [L.zUn.INVITER_ID]: !0,
            [L.zUn.USES]: !0
        },
        [L.KFR.WEBHOOK]: {
            [L.zUn.TYPE]: !0,
            [L.zUn.APPLICATION_ID]: !0
        },
        [L.KFR.INTEGRATION]: { [L.zUn.TYPE]: !0 },
        [L.KFR.THREAD]: {
            [L.zUn.ID]: !0,
            [L.zUn.TYPE]: !0
        },
        [L.KFR.STICKER]: {
            [L.zUn.ID]: !0,
            [L.zUn.TYPE]: !0,
            [L.zUn.ASSET]: !0,
            [L.zUn.FORMAT_TYPE]: !0,
            [L.zUn.AVAILABLE]: !0,
            [L.zUn.GUILD_ID]: !0
        },
        [L.KFR.GUILD_HOME]: { [L.zUn.ENTITY_TYPE]: !0 },
        [L.KFR.GUILD_ONBOARDING]: { [L.zUn.PROMPTS]: !0 },
        [L.KFR.GUILD_SOUNDBOARD]: {
            [L.zUn.ID]: !0,
            [L.zUn.SOUND_ID]: !0
        }
    },
    ec = () => [
        {
            value: L.rsA.ALL,
            label: P.intl.string(P.t.QxEVcn),
            valueLabel: P.intl.string(P.t.an9Ry8)
        },
        {
            value: L.rsA.GUILD_UPDATE,
            label: P.intl.string(P.t['5INZa2'])
        },
        {
            value: L.rsA.CHANNEL_CREATE,
            label: P.intl.string(P.t['2uh4vL'])
        },
        {
            value: L.rsA.CHANNEL_UPDATE,
            label: P.intl.string(P.t.mGsBLS)
        },
        {
            value: L.rsA.CHANNEL_DELETE,
            label: P.intl.string(P.t.hCHzAg)
        },
        {
            value: L.rsA.CHANNEL_OVERWRITE_CREATE,
            label: P.intl.string(P.t['8TnAMD'])
        },
        {
            value: L.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: P.intl.string(P.t.Jqx0Bg)
        },
        {
            value: L.rsA.CHANNEL_OVERWRITE_DELETE,
            label: P.intl.string(P.t.gBXOr6)
        },
        {
            value: L.rsA.MEMBER_KICK,
            label: P.intl.string(P.t['Q1/hNz'])
        },
        {
            value: L.rsA.MEMBER_PRUNE,
            label: P.intl.string(P.t.tOTTjY)
        },
        {
            value: L.rsA.MEMBER_BAN_ADD,
            label: P.intl.string(P.t['NfPn+f'])
        },
        {
            value: L.rsA.MEMBER_BAN_REMOVE,
            label: P.intl.string(P.t.XCsGfH)
        },
        {
            value: L.rsA.MEMBER_UPDATE,
            label: P.intl.string(P.t['F/jmND'])
        },
        {
            value: L.rsA.MEMBER_ROLE_UPDATE,
            label: P.intl.string(P.t.zAveSE)
        },
        {
            value: L.rsA.MEMBER_MOVE,
            label: P.intl.string(P.t.QshteX)
        },
        {
            value: L.rsA.MEMBER_DISCONNECT,
            label: P.intl.string(P.t.Z45os7)
        },
        {
            value: L.rsA.BOT_ADD,
            label: P.intl.string(P.t.vuH24e)
        },
        {
            value: L.rsA.THREAD_CREATE,
            label: P.intl.string(P.t['+zl0DA'])
        },
        {
            value: L.rsA.THREAD_UPDATE,
            label: P.intl.string(P.t.rbIry8)
        },
        {
            value: L.rsA.THREAD_DELETE,
            label: P.intl.string(P.t.hFjNEB)
        },
        {
            value: L.rsA.ROLE_CREATE,
            label: P.intl.string(P.t.AbxKtr)
        },
        {
            value: L.rsA.ROLE_UPDATE,
            label: P.intl.string(P.t.t3Z6sb)
        },
        {
            value: L.rsA.ROLE_DELETE,
            label: P.intl.string(P.t.YsFpa2)
        },
        {
            value: L.rsA.ONBOARDING_PROMPT_CREATE,
            label: P.intl.string(P.t.ZV9tqa)
        },
        {
            value: L.rsA.ONBOARDING_PROMPT_UPDATE,
            label: P.intl.string(P.t.PcOdvb)
        },
        {
            value: L.rsA.ONBOARDING_PROMPT_DELETE,
            label: P.intl.string(P.t['+r33NT'])
        },
        {
            value: L.rsA.ONBOARDING_CREATE,
            label: P.intl.string(P.t.uDADdX)
        },
        {
            value: L.rsA.ONBOARDING_UPDATE,
            label: P.intl.string(P.t.J1H1ws)
        },
        {
            value: L.rsA.HOME_SETTINGS_CREATE,
            label: P.intl.string(P.t.Di4cvL)
        },
        {
            value: L.rsA.HOME_SETTINGS_UPDATE,
            label: P.intl.string(P.t.tzyrJC)
        },
        {
            value: L.rsA.INVITE_CREATE,
            label: P.intl.string(P.t['0BNJdX'])
        },
        {
            value: L.rsA.INVITE_UPDATE,
            label: P.intl.string(P.t['o++obW'])
        },
        {
            value: L.rsA.INVITE_DELETE,
            label: P.intl.string(P.t.iP40Aw)
        },
        {
            value: L.rsA.WEBHOOK_CREATE,
            label: P.intl.string(P.t['tBF4+f'])
        },
        {
            value: L.rsA.WEBHOOK_UPDATE,
            label: P.intl.string(P.t.eV3McH)
        },
        {
            value: L.rsA.WEBHOOK_DELETE,
            label: P.intl.string(P.t.AAL3Ky)
        },
        {
            value: L.rsA.EMOJI_CREATE,
            label: P.intl.string(P.t.RuWm0d)
        },
        {
            value: L.rsA.EMOJI_UPDATE,
            label: P.intl.string(P.t.WzdUY2)
        },
        {
            value: L.rsA.EMOJI_DELETE,
            label: P.intl.string(P.t.c3dK2N)
        },
        {
            value: L.rsA.MESSAGE_DELETE,
            label: P.intl.string(P.t.daTfXl)
        },
        {
            value: L.rsA.MESSAGE_BULK_DELETE,
            label: P.intl.string(P.t.nrBxen)
        },
        {
            value: L.rsA.MESSAGE_PIN,
            label: P.intl.string(P.t.MUldyM)
        },
        {
            value: L.rsA.MESSAGE_UNPIN,
            label: P.intl.string(P.t.n4zKhI)
        },
        {
            value: L.rsA.INTEGRATION_CREATE,
            label: P.intl.string(P.t['deNm8/'])
        },
        {
            value: L.rsA.INTEGRATION_UPDATE,
            label: P.intl.string(P.t.HT7Sfn)
        },
        {
            value: L.rsA.INTEGRATION_DELETE,
            label: P.intl.string(P.t['+kJ09v'])
        },
        {
            value: L.rsA.STICKER_CREATE,
            label: P.intl.string(P.t['3DzNjY'])
        },
        {
            value: L.rsA.STICKER_UPDATE,
            label: P.intl.string(P.t.tdhW5e)
        },
        {
            value: L.rsA.STICKER_DELETE,
            label: P.intl.string(P.t['+ZhGOj'])
        },
        {
            value: L.rsA.STAGE_INSTANCE_CREATE,
            label: P.intl.string(P.t.sPbjAw)
        },
        {
            value: L.rsA.STAGE_INSTANCE_UPDATE,
            label: P.intl.string(P.t.cW9LfH)
        },
        {
            value: L.rsA.STAGE_INSTANCE_DELETE,
            label: P.intl.string(P.t['U1r+yM'])
        },
        {
            value: L.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: P.intl.string(P.t.H81Zy8)
        },
        {
            value: L.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: P.intl.string(P.t.FM69l5)
        },
        {
            value: L.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: P.intl.string(P.t.Rq28Bg)
        },
        {
            value: L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: P.intl.string(P.t.iPdFOj)
        },
        {
            value: L.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: P.intl.string(P.t.gNq5z8)
        },
        {
            value: L.rsA.AUTO_MODERATION_RULE_CREATE,
            label: P.intl.string(P.t.f72Zqa)
        },
        {
            value: L.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: P.intl.string(P.t.XeqIio)
        },
        {
            value: L.rsA.AUTO_MODERATION_RULE_DELETE,
            label: P.intl.string(P.t.syAApa)
        },
        {
            value: L.rsA.GUILD_HOME_FEATURE_ITEM,
            label: P.intl.string(P.t.lhG5KC)
        },
        {
            value: L.rsA.GUILD_HOME_REMOVE_ITEM,
            label: P.intl.string(P.t.lRPRwc)
        },
        {
            value: L.rsA.SOUNDBOARD_SOUND_CREATE,
            label: P.intl.string(P.t.yoRi5u)
        },
        {
            value: L.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: P.intl.string(P.t.uKlG0d)
        },
        {
            value: L.rsA.SOUNDBOARD_SOUND_DELETE,
            label: P.intl.string(P.t.gq0iCQ)
        },
        {
            value: L.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: P.intl.string(P.t.rGr0YG)
        },
        {
            value: L.rsA.VOICE_CHANNEL_STATUS_DELETE,
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
    return null != ed(L.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? P.intl.string(P.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [d.J6.SECONDS]: (e) => P.intl.formatToPlainString(P.t.geSp4O, { seconds: e }),
    [d.J6.MINUTES]: (e) => P.intl.formatToPlainString(P.t.iXLF9f, { minutes: e }),
    [d.J6.HOURS]: (e) => P.intl.formatToPlainString(P.t.xCjYxM, { hours: e }),
    [d.J6.DAYS]: (e) => P.intl.formatToPlainString(P.t.k2UNz8, { days: e })
};
function em(e) {
    let t = ed(L.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = eE(L.zUn.ROLES_ADD, e).length > 0,
        r = eE(L.zUn.ROLES_REMOVE, e).length > 0;
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
function ef(e) {
    let t = eE(L.zUn.ROLES_ADD, e),
        n = eE(L.zUn.ROLES_REMOVE, e),
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
function eT(e) {
    switch (e.action) {
        case L.rsA.GUILD_UPDATE:
            return P.t.LjZO39;
        case L.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === L.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case L.d4z.GUILD_STAGE_VOICE:
                    return P.t['OKp4+v'];
                case L.d4z.GUILD_VOICE:
                    return P.t.NPOy4O;
                case L.d4z.GUILD_CATEGORY:
                    return P.t.T3KIj4;
                default:
                    return P.t.wrYNGx;
            }
        case L.rsA.CHANNEL_UPDATE:
            return P.t.nTYk6O;
        case L.rsA.CHANNEL_DELETE:
            return P.t.ynfvkp;
        case L.rsA.CHANNEL_OVERWRITE_CREATE:
            return P.t.l5Cu1d;
        case L.rsA.CHANNEL_OVERWRITE_UPDATE:
            return P.t.uhtbNT;
        case L.rsA.CHANNEL_OVERWRITE_DELETE:
            return P.t['HASt//'];
        case L.rsA.MEMBER_KICK:
            return P.t.B5hDZW;
        case L.rsA.MEMBER_PRUNE:
            return P.t.qKOZTE;
        case L.rsA.MEMBER_BAN_ADD:
            return P.t.XklUm5;
        case L.rsA.MEMBER_BAN_REMOVE:
            return P.t.o3Y6HB;
        case L.rsA.MEMBER_UPDATE:
            return P.t.pznhLC;
        case L.rsA.MEMBER_ROLE_UPDATE:
            return P.t.VngfiY;
        case L.rsA.MEMBER_MOVE:
            return P.t.Yt6NkZ;
        case L.rsA.MEMBER_DISCONNECT:
            return P.t.K4eCZ2;
        case L.rsA.BOT_ADD:
            return P.t.fWvX0N;
        case L.rsA.ROLE_CREATE:
            return P.t.UTLTx8;
        case L.rsA.ROLE_UPDATE:
            return P.t.NRbN19;
        case L.rsA.ROLE_DELETE:
            return P.t['4s63tb'];
        case L.rsA.INVITE_CREATE:
            return P.t.YHOXW1;
        case L.rsA.INVITE_UPDATE:
            return P.t.ja3kGR;
        case L.rsA.INVITE_DELETE:
            return P.t['3n/iWl'];
        case L.rsA.WEBHOOK_CREATE:
            return P.t.MhYhio;
        case L.rsA.WEBHOOK_UPDATE:
            return P.t['6GTlWF'];
        case L.rsA.WEBHOOK_DELETE:
            return P.t.in0VjY;
        case L.rsA.EMOJI_CREATE:
            return P.t['7vekRE'];
        case L.rsA.EMOJI_UPDATE:
            return P.t.IsCKfn;
        case L.rsA.EMOJI_DELETE:
            return P.t.JnUaVF;
        case L.rsA.STICKER_CREATE:
            return P.t.DRZifn;
        case L.rsA.STICKER_UPDATE:
            return P.t.bhujGR;
        case L.rsA.STICKER_DELETE:
            return P.t.rGEP9f;
        case L.rsA.MESSAGE_DELETE:
            return P.t['HPkD+P'];
        case L.rsA.MESSAGE_BULK_DELETE:
            return P.t['3RIvLC'];
        case L.rsA.MESSAGE_PIN:
            return P.t.Yna7Ex;
        case L.rsA.MESSAGE_UNPIN:
            return P.t.NCxXUV;
        case L.rsA.INTEGRATION_CREATE:
            return P.t.HYvCb2;
        case L.rsA.INTEGRATION_UPDATE:
            return P.t.ibCCOT;
        case L.rsA.INTEGRATION_DELETE:
            return P.t['8zScWV'];
        case L.rsA.STAGE_INSTANCE_CREATE:
            return P.t['n7x/DA'];
        case L.rsA.STAGE_INSTANCE_UPDATE:
            return P.t['0hQYU1'];
        case L.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return P.t['Oi/in5'];
            return P.t['7ZIFm5'];
        case L.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return P.t.S7k52t;
        case L.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return P.t.ebTK19;
        case L.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return P.t['/ARPKS'];
        case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return P.t['8qCI39'];
        case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return P.t.zYb2dX;
        case L.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === L.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case L.d4z.PRIVATE_THREAD:
                    return P.t['Br0y5+'];
                case L.d4z.ANNOUNCEMENT_THREAD:
                    return P.t['6uaMmJ'];
                default:
                    return P.t['2cxQ7O'];
            }
        case L.rsA.THREAD_UPDATE:
            return P.t.PSsy4u;
        case L.rsA.THREAD_DELETE:
            return P.t.s3Khn5;
        case L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return P.t.uzCqBg;
        case L.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return P.t.NqWv2N;
        case L.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === U.fX.USER_PROFILE.toString()) return P.t.YQsjen;
            return P.t.SD0PwM;
        case L.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return P.t.Vk4Twc;
        case L.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return P.t['/W5u5u'];
        case L.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return P.t.ONvWys;
        case L.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return P.t.ryGLk5;
        case L.rsA.AUTO_MODERATION_RULE_CREATE:
            return P.t.NKljj4;
        case L.rsA.AUTO_MODERATION_RULE_UPDATE:
            return P.t['3wEA9v'];
        case L.rsA.AUTO_MODERATION_RULE_DELETE:
            return P.t.umua3t;
        case L.rsA.ONBOARDING_PROMPT_CREATE:
            return P.t['/8A1g4'];
        case L.rsA.ONBOARDING_PROMPT_UPDATE:
            return P.t.ArIrWF;
        case L.rsA.ONBOARDING_PROMPT_DELETE:
            return P.t.IuBTam;
        case L.rsA.ONBOARDING_CREATE:
            return P.t.wDaq39;
        case L.rsA.ONBOARDING_UPDATE:
            return P.t['yONu/v'];
        case L.rsA.HOME_SETTINGS_CREATE:
            return P.t.dSdCjI;
        case L.rsA.HOME_SETTINGS_UPDATE:
            return P.t.XHE8qq;
        case L.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === L.zUn.ENTITY_TYPE) : null;
            if (null == l) return P.t['UZ+U3N'];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return P.t['PyEa+P'];
                case a.w.FORUM_POST:
                    return P.t.hCuAb2;
                default:
                    return P.t['UZ+U3N'];
            }
        case L.rsA.GUILD_HOME_REMOVE_ITEM:
            return P.t.kPReur;
        case L.rsA.SOUNDBOARD_SOUND_CREATE:
            return P.t['0PD83d'];
        case L.rsA.SOUNDBOARD_SOUND_UPDATE:
            return P.t.CM8n19;
        case L.rsA.SOUNDBOARD_SOUND_DELETE:
            return P.t['kVz4//'];
        case L.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return P.t.MWjnU1;
        case L.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return P.t.aS8Krq;
        case L.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return P.t.NUKUb2;
        case L.rsA.GUILD_PROFILE_UPDATE:
            return P.t.Ed6hFx;
        default:
            return null;
    }
}
function eg(e) {
    switch (e) {
        case M.zZ.GUILD_FEED_REMOVED:
            return P.intl.string(P.t['5G8ZDw']);
        case M.zZ.ACTIVE_CHANNELS_REMOVED:
            return P.intl.string(P.t['4YLtzM']);
        case M.zZ.PINNED:
            return P.intl.string(P.t['1QLRYW']);
    }
    return null;
}
function eI(e) {
    switch (e) {
        case M.zZ.GUILD_FEED_REMOVED:
            return P.intl.string(P.t.S5kuWV);
        case M.zZ.ACTIVE_CHANNELS_REMOVED:
            return P.intl.string(P.t['8qpgc3']);
        case M.zZ.PINNED:
            return P.intl.string(P.t.CMweGB);
    }
    return null;
}
function eh(e, t) {
    switch (e) {
        case L.Plq.CREATE_INSTANT_INVITE:
            return P.intl.string(P.t.zJrgTE);
        case L.Plq.KICK_MEMBERS:
            return P.intl.string(P.t.pBNv6u);
        case L.Plq.BAN_MEMBERS:
            return P.intl.string(P.t.oTBA7O);
        case L.Plq.ADMINISTRATOR:
            return P.intl.string(P.t.PGvZqa);
        case L.Plq.MANAGE_CHANNELS:
            if (t.targetType === L.KFR.CHANNEL || t.targetType === L.KFR.CHANNEL_OVERWRITE) return P.intl.string(P.t.nAw15O);
            return P.intl.string(P.t['9qLtWl']);
        case L.Plq.MANAGE_GUILD:
            return P.intl.string(P.t.QZRcfH);
        case L.Plq.VIEW_GUILD_ANALYTICS:
            return P.intl.string(P.t.rQJBEx);
        case L.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return P.intl.string(P.t['0lTLTk']);
        case L.Plq.CHANGE_NICKNAME:
            return P.intl.string(P.t.dilOFx);
        case L.Plq.MANAGE_NICKNAMES:
            return P.intl.string(P.t['t+Ct5+']);
        case L.Plq.MANAGE_ROLES:
            return P.intl.string(P.t['C8d+oK']);
        case L.Plq.MANAGE_WEBHOOKS:
            return P.intl.string(P.t['/ADKmJ']);
        case L.Plq.CREATE_GUILD_EXPRESSIONS:
            return P.intl.string(P.t.HarVuL);
        case L.Plq.MANAGE_GUILD_EXPRESSIONS:
            return P.intl.string(P.t.bbuXIi);
        case L.Plq.VIEW_AUDIT_LOG:
            return P.intl.string(P.t.fZgLpK);
        case L.Plq.VIEW_CHANNEL:
            if (t.targetType === L.KFR.CHANNEL || t.targetType === L.KFR.CHANNEL_OVERWRITE) return P.intl.string(P.t['W/A4Qk']);
            return P.intl.string(P.t.uV83ys);
        case L.Plq.SEND_MESSAGES:
            return P.intl.string(P.t.T32rkJ);
        case L.Plq.SEND_TTS_MESSAGES:
            return P.intl.string(P.t.Mg7bkp);
        case L.Plq.USE_APPLICATION_COMMANDS:
            return P.intl.string(P.t.shbR1d);
        case L.Plq.MANAGE_MESSAGES:
            return P.intl.string(P.t['6lU9xM']);
        case L.Plq.EMBED_LINKS:
            return P.intl.string(P.t['969dEB']);
        case L.Plq.ATTACH_FILES:
            return P.intl.string(P.t['3AS4UF']);
        case L.Plq.READ_MESSAGE_HISTORY:
            return P.intl.string(P.t.l9ufaW);
        case L.Plq.MENTION_EVERYONE:
            return P.intl.string(P.t.Y78KGB);
        case L.Plq.USE_EXTERNAL_EMOJIS:
            return P.intl.string(P.t.BpBGZW);
        case L.Plq.USE_EXTERNAL_STICKERS:
            return P.intl.string(P.t['UeRs+f']);
        case L.Plq.ADD_REACTIONS:
            return P.intl.string(P.t.yEoJAg);
        case L.Plq.CONNECT:
            return P.intl.string(P.t.S0W8Z2);
        case L.Plq.SPEAK:
            return P.intl.string(P.t['8w1tIS']);
        case L.Plq.MUTE_MEMBERS:
            return P.intl.string(P.t['8EI309']);
        case L.Plq.DEAFEN_MEMBERS:
            return P.intl.string(P.t['9L47Fh']);
        case L.Plq.MOVE_MEMBERS:
            return P.intl.string(P.t.YtjJPT);
        case L.Plq.USE_VAD:
            return P.intl.string(P.t['08zAV1']);
        case L.Plq.PRIORITY_SPEAKER:
            return P.intl.string(P.t.BVK71t);
        case L.Plq.STREAM:
            return P.intl.string(P.t.FlNoSU);
        case L.Plq.REQUEST_TO_SPEAK:
            return P.intl.string(P.t['5kicT0']);
        case L.Plq.CREATE_EVENTS:
            return P.intl.string(P.t.qyjZub);
        case L.Plq.MANAGE_EVENTS:
            return P.intl.string(P.t.HIgA5e);
        case L.Plq.CREATE_PUBLIC_THREADS:
            return P.intl.string(P.t['25rKnZ']);
        case L.Plq.CREATE_PRIVATE_THREADS:
            return P.intl.string(P.t.QwbTSU);
        case L.Plq.SEND_MESSAGES_IN_THREADS:
            return P.intl.string(P.t.fTE74u);
        case L.Plq.MANAGE_THREADS:
            return P.intl.string(P.t.kEqgr6);
        case L.Plq.MODERATE_MEMBERS:
            return P.intl.string(P.t['+RL6p6']);
        case L.Plq.SET_VOICE_CHANNEL_STATUS:
            return P.intl.string(P.t.VBwkUV);
        case L.Plq.SEND_POLLS:
            return P.intl.string(P.t.UMQ7W1);
        case L.Plq.USE_EXTERNAL_APPS:
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
                        case L.KFR.GUILD:
                        case L.KFR.GUILD_HOME:
                        case L.KFR.GUILD_PROFILE:
                            return t;
                        case L.KFR.CHANNEL:
                        case L.KFR.CHANNEL_OVERWRITE:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => N.Z.getChannel(e),
                                (e) => (0, _.F6)(e, S.default, R.Z, !0)
                            );
                        case L.KFR.USER:
                            return eS(
                                e,
                                L.zUn.NICK,
                                (e) => S.default.getUser(e),
                                (e) => e
                            );
                        case L.KFR.ROLE:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => p.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case L.KFR.ONBOARDING_PROMPT:
                            let n = eS(
                                e,
                                L.zUn.ID,
                                (e) => T.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? P.intl.string(P.t.ZNQyiY) : n;
                        case L.KFR.GUILD_ONBOARDING:
                        case L.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case L.KFR.INVITE:
                            return eS(e, L.zUn.CODE, L.VqG);
                        case L.KFR.INTEGRATION:
                            return eS(
                                e,
                                L.zUn.TYPE,
                                (e) => x.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.WEBHOOK:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => x.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.EMOJI:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => m.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.STICKER:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => h.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case L.KFR.STAGE_INSTANCE:
                            return eS(
                                e,
                                L.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(I.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case L.KFR.GUILD_SCHEDULED_EVENT:
                        case L.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => x.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.THREAD:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => x.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.APPLICATION_COMMAND:
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
                                L.zUn.NAME,
                                (e) => x.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === E.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case L.KFR.AUTO_MODERATION_RULE:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => x.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.GUILD_SOUNDBOARD:
                            return eS(e, L.zUn.NAME, L.VqG);
                        case L.KFR.HOME_SETTINGS:
                            return eS(
                                e,
                                L.zUn.GUILD_ID,
                                (e) => g.Z.getSettings(e),
                                () => P.intl.string(P.t.VbpLyc),
                                t.id
                            );
                        case L.KFR.VOICE_CHANNEL_STATUS:
                            return eS(
                                e,
                                L.zUn.STATUS,
                                (e) => N.Z.getChannel(e),
                                (e) => (0, _.F6)(e, S.default, R.Z, !0)
                            );
                        default:
                            return (G.warn('Unknown targetType for log', e), null);
                    }
                })(e, t),
                i = S.default.getUser(e.userId);
            if (null != r || [L.rsA.MEMBER_PRUNE, L.rsA.MEMBER_DISCONNECT, L.rsA.MEMBER_MOVE, L.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, L.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', i)).set('target', r)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let n = y({}, e.options);
                                switch (e.options.type) {
                                    case L.jwA.USER:
                                        n.subtarget = eC(
                                            e.options.id,
                                            (e) => S.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case L.jwA.ROLE:
                                        n.subtarget = eC(e.options.role_name, L.VqG);
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
                            if (t.action === L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case L.ecB.ROLE:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => p.Z.getRole(n.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case L.ecB.USER:
                                        e.subtarget = eC(
                                            t.id,
                                            (e) => S.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case L.ecB.CHANNEL:
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
                                case L.zUn.OWNER_ID:
                                    return eR(e, (e) => S.default.getUser(e));
                                case L.zUn.CHANNEL_ID:
                                case L.zUn.AFK_CHANNEL_ID:
                                case L.zUn.SYSTEM_CHANNEL_ID:
                                case L.zUn.RULES_CHANNEL_ID:
                                case L.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eR(
                                        e,
                                        (e) => N.Z.getChannel(e),
                                        (e) => (0, _.F6)(e, S.default, R.Z, !0)
                                    );
                                case L.zUn.AFK_TIMEOUT:
                                    return eR(e, (e) => e / 60);
                                case L.zUn.BITRATE:
                                    return eR(e, (e) => e / 1000);
                                case L.zUn.COLOR:
                                    return eR(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case L.zUn.THEME_COLORS:
                                    return eR(e, (e) => ''.concat((0, c.Rf)(e[0]).toUpperCase(), ', ').concat((0, c.Rf)(e[1]).toUpperCase()));
                                case L.zUn.MAX_AGE:
                                    return eR(e, (e) => {
                                        let t = v.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case L.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = eN(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new O.ms(L.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new O.ms(L.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case L.zUn.PERMISSIONS_GRANTED:
                                case L.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = eN(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new O.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new O.ms(L.zUn.PERMISSIONS_RESET, r, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case L.zUn.FLAGS: {
                                    let t = [],
                                        { added: n, removed: r } = (function (e, t) {
                                            let n = 'number' == typeof e ? e : 0,
                                                r = 'number' == typeof t ? t : 0,
                                                l = b.Ge(r, n),
                                                i = b.Ge(n, r),
                                                s = [],
                                                a = [];
                                            for (let e in M.zZ) {
                                                let t = M.zZ[e];
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
                                case L.zUn.PREFERRED_LOCALE:
                                    return eR(e, (e) => {
                                        let t = (0, P.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case L.zUn.VIDEO_QUALITY_MODE:
                                    return eR(e, (e) => (e === L.Ucd.FULL ? P.intl.string(P.t['7jOoJC']) : P.intl.string(P.t.jjKYpq)));
                                case L.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let r = {
                                            [L.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [L.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: L.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [L.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: L.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [L.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                        },
                                        i = [];
                                    return (
                                        Object.values(L.xmn).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                l = (e.newValue & t) === t;
                                            if (n === l) return;
                                            let s = new O.ms(r[t], !n, !l);
                                            i.push(s);
                                        }),
                                        i
                                    );
                                case L.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE)
                                        return eR(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(f.ZF).join(', ')
                                        );
                                    break;
                                case L.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return eR(e, f.YN);
                                    break;
                                case L.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return eR(e, f.Ar);
                                    break;
                                case L.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return eR(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? P.intl.formatToMarkdownString(P.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case L.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case L.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case L.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case L.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case L.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case L.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return eR(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case L.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE)
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
                                case L.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE)
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
                                case L.zUn.AVAILABLE_TAGS:
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
                                            for (let e in s) if (null == i[e]) return new O.ms(L.zUn.AVAILABLE_TAG_ADD, null, ep(s[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in i) if (null == s[e]) return new O.ms(L.zUn.AVAILABLE_TAG_DELETE, null, ep(i[e]));
                                        }
                                        for (let e in i) {
                                            let t = i[e],
                                                n = s[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new O.ms(L.zUn.AVAILABLE_TAG_EDIT, ep(t), ep(n));
                                        }
                                        return e;
                                    })(e);
                                case L.zUn.SCHEDULED_START_TIME:
                                case L.zUn.SCHEDULED_END_TIME:
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
    for (let e in L.Plq) {
        let t = L.Plq[e];
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
function eL(e) {
    return (t) => e[t.newValue];
}
function eM(e, t) {
    return (n) => {
        var r;
        return null != (r = e[n.newValue]) ? r : t;
    };
}
