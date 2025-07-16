(n.d(t, {
    Bq: () => X,
    C0: () => ei,
    C2: () => $,
    EN: () => K,
    F1: () => ea,
    HE: () => H,
    HN: () => q,
    Iv: () => ec,
    J5: () => eI,
    JA: () => es,
    K: () => Q,
    ML: () => F,
    N$: () => J,
    N5: () => eg,
    QM: () => eT,
    V$: () => eE,
    _$: () => eN,
    cT: () => ef,
    em: () => em,
    hQ: () => eO,
    hx: () => W,
    lR: () => Y,
    lU: () => V,
    nm: () => e_,
    oD: () => k,
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
    E = n(379649),
    d = n(911969),
    _ = n(933557),
    A = n(710845),
    T = n(339085),
    I = n(236413),
    g = n(45966),
    m = n(563534),
    f = n(427679),
    O = n(926491),
    N = n(387667),
    h = n(592125),
    R = n(485386),
    p = n(699516),
    S = n(594174),
    C = n(55935),
    b = n(630388),
    D = n(971130),
    v = n(709054),
    U = n(987707),
    L = n(981631),
    M = n(176505),
    x = n(273504),
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
    z = [E.J6.DAYS, E.J6.HOURS, E.J6.MINUTES, E.J6.SECONDS],
    B = () => ({ [L.zUn.REASON]: () => j.t['2IW3Cw'] }),
    Z = () =>
        y(
            {
                [L.zUn.NAME]: () => j.t.CkDiND,
                [L.zUn.DESCRIPTION]: eD(j.t.RP3Ey8, j.t.QAVj1d),
                [L.zUn.ICON_HASH]: () => j.t.iLZ8Q0,
                [L.zUn.SPLASH_HASH]: () => j.t['4VV6dn'],
                [L.zUn.DISCOVERY_SPLASH_HASH]: () => j.t['2pds6u'],
                [L.zUn.BANNER_HASH]: eD(j.t.Cxq4zM, j.t['H7eE//']),
                [L.zUn.OWNER_ID]: () => j.t['8ltsLS'],
                [L.zUn.REGION]: () => j.t.X9r5KS,
                [L.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDQ,
                [L.zUn.AFK_CHANNEL_ID]: eD(j.t.ClBuAw, j.t['ms+xtL']),
                [L.zUn.AFK_TIMEOUT]: () => j.t.q21fHR,
                [L.zUn.SYSTEM_CHANNEL_ID]: eD(j.t.H1VXaW, j.t.XhtmxM),
                [L.zUn.RULES_CHANNEL_ID]: eD(j.t.OI6MGx, j.t.lik3tL),
                [L.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eD(j.t.YxBKra, j.t.Ehsnio),
                [L.zUn.MFA_LEVEL]: eL({
                    [L.BpS.NONE]: j.t.voaCCQ,
                    [L.BpS.ELEVATED]: j.t.pRNVw8
                }),
                [L.zUn.WIDGET_ENABLED]: eU(j.t.ADIty8, j.t.nf58VV),
                [L.zUn.WIDGET_CHANNEL_ID]: eD(j.t['6SBsDQ'], j.t.deQ5wM),
                [L.zUn.VERIFICATION_LEVEL]: eL({
                    [L.sFg.NONE]: j.t.W27rsb,
                    [L.sFg.LOW]: j.t['V8P+Pz'],
                    [L.sFg.MEDIUM]: j.t.ERQFam,
                    [L.sFg.HIGH]: j.t['83fN0t'],
                    [L.sFg.VERY_HIGH]: j.t.PnkQJC
                }),
                [L.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eL({
                    [L.bL.ALL_MESSAGES]: j.t.LDi76O,
                    [L.bL.ONLY_MENTIONS]: j.t['6K83bW']
                }),
                [L.zUn.VANITY_URL_CODE]: eD(j.t.Zplsoq, j.t.u6cArq),
                [L.zUn.EXPLICIT_CONTENT_FILTER]: eL({
                    [L.lxg.DISABLED]: j.t.fmOeLy,
                    [L.lxg.MEMBERS_WITHOUT_ROLES]: j.t['4FghY2'],
                    [L.lxg.ALL_MEMBERS]: j.t.olyrSk
                }),
                [L.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eU(j.t.rBT0sr, j.t['gc+te3']),
                [L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
                [L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjI,
                [L.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t['+fQAen'],
                [L.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4u,
                [L.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSE
            },
            B()
        ),
    F = () => ({
        [L.zUn.NAME]: eb(j.t.f8Rh0d, j.t.ebD4Qk),
        [L.zUn.POSITION]: eb(j.t.isS8tb, j.t.t5uBio),
        [L.zUn.TOPIC]: ev(j.t.esQcxs, j.t['m+veAg'], j.t['ws/1FB']),
        [L.zUn.BITRATE]: eb(j.t.fw81am, j.t.MFNlgY),
        [L.zUn.RTC_REGION_OVERRIDE]: ev(j.t['6kajx8'], j.t.eGOlmZ, j.t['0JMZd3']),
        [L.zUn.USER_LIMIT]: eb(j.t.wk5t7u, j.t.XgjCEh),
        [L.zUn.RATE_LIMIT_PER_USER]: eb(j.t['7lirhI'], j.t.j4CCJS),
        [L.zUn.PERMISSIONS_RESET]: () => j.t['+vSBFR'],
        [L.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv7,
        [L.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5e,
        [L.zUn.REASON]: () => j.t['2IW3Cw'],
        [L.zUn.NSFW]: eU(j.t.H8Ri2d, j.t.WW6cJy),
        [L.zUn.TYPE]: eb(j.t.Vn5zn5, j.t.aq4uWF),
        [L.zUn.VIDEO_QUALITY_MODE]: eb(j.t.e68fAQ, j.t.djbES0),
        [L.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eb(j.t.nYz2mp, j.t.oczvRE),
        [L.zUn.FLAGS]: () => j.t.ImCQkp,
        [L.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
        [L.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzlp,
        [L.zUn.AVAILABLE_TAG_DELETE]: () => j.t['8QOsen'],
        [L.zUn.LINKED_LOBBY]: eD(j.t['+/3TkJ'], j.t['5kDYS0'])
    }),
    V = () =>
        y(
            {
                [L.zUn.NICK]: ev(j.t.qXDsHh, j.t['m+qur6'], j.t.DvLvjI),
                [L.zUn.DEAF]: eU(j.t.mArLlZ, j.t.ddvVYG),
                [L.zUn.MUTE]: eU(j.t['bxs/lZ'], j.t.FjecQE),
                [L.zUn.ROLES_REMOVE]: () => j.t['+2SDWV'],
                [L.zUn.ROLES_ADD]: () => j.t['B3/3IC'],
                [L.zUn.PRUNE_DELETE_DAYS]: () => j.t['+Cvc+P'],
                [L.zUn.COMMUNICATION_DISABLED_UNTIL]: ev(j.t.LXTQr6, j.t.LXTQr6, j.t.ULSdnJ),
                [L.zUn.BYPASSES_VERIFICATION]: eU(j.t.NBPBur, j.t.zATosr),
                [L.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB
            },
            B()
        ),
    H = () =>
        y(
            {
                [L.zUn.NAME]: eb(j.t.QBmlaG, j.t.Lfs4r6),
                [L.zUn.DESCRIPTION]: eb(j.t.XeYKWF, j.t.PSfeIi),
                [L.zUn.PERMISSIONS_GRANTED]: () => j.t['9i/DvL'],
                [L.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVl,
                [L.zUn.COLOR]: eM({ '#000000': j.t.TK6E1N }, j.t['2FQFi4']),
                [L.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? j.t.U44ttr : j.t.WnSwLy),
                [L.zUn.HOIST]: eU(j.t.gWfe29, j.t['+tb8kJ']),
                [L.zUn.MENTIONABLE]: eU(j.t.LL8VFB, j.t.Z7xzmJ),
                [L.zUn.ICON_HASH]: () => j.t['iEE79/'],
                [L.zUn.UNICODE_EMOJI]: () => j.t.KiLMMz
            },
            B()
        ),
    k = () =>
        w(y({}, B()), {
            [L.zUn.TITLE]: eb(j.t.sNpuy8, j.t['3Ukc/v']),
            [L.zUn.DESCRIPTION]: eb(j.t.PP1q09, j.t.z7pYLi),
            [L.zUn.OPTIONS]: () => j.t['3G5C9/'],
            [L.zUn.SINGLE_SELECT]: eU(j.t.v4WnR0, j.t['6Qg3uL']),
            [L.zUn.REQUIRED]: eU(j.t['0MPAMz'], j.t.pwsXio)
        }),
    K = () =>
        w(y({}, B()), {
            [L.zUn.DEFAULT_CHANNEL_IDS]: () => j.t['8M+D2t'],
            [L.zUn.ENABLE_DEFAULT_CHANNELS]: eU(j.t['EYd/lp'], j.t['36OZeX']),
            [L.zUn.ENABLE_ONBOARDING_PROMPTS]: eU(j.t.V3u8PT, j.t.r66lc3),
            [L.zUn.ENABLED]: eU(j.t.SODVIi, j.t.u8HY5e)
        }),
    W = () =>
        w(y({}, B()), {
            [L.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xc,
            [L.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUInp,
            [L.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mp
        }),
    q = () =>
        y(
            {
                [L.zUn.CODE]: () => j.t.rrRHgY,
                [L.zUn.CHANNEL_ID]: () => j.t.Q1vd5u,
                [L.zUn.MAX_USES]: eM({ 0: j.t.Yx8LNj }, j.t['3ygnwc']),
                [L.zUn.MAX_AGE]: eM({ [j.intl.string(j.t.PqEzn5)]: j.t.uWrLv7 }, j.t['Q+5kcH']),
                [L.zUn.TEMPORARY]: eU(j.t.MWp6Hx, j.t.omiqTE),
                [L.zUn.FLAGS]: eL({ [o.$.IS_GUEST_INVITE]: j.t.XYZMbG })
            },
            B()
        ),
    Y = () => ({
        [L.zUn.CHANNEL_ID]: eb(j.t.jhPpra, j.t.ar4qYG),
        [L.zUn.NAME]: eb(j.t.ZVGrzc, j.t.tywdZW),
        [L.zUn.AVATAR_HASH]: () => j.t.KB52Ul,
        [L.zUn.REASON]: () => j.t['2IW3Cw']
    }),
    J = () => y({ [L.zUn.NAME]: eb(j.t.ahU1o6, j.t['wxs+vb']) }, B()),
    X = () =>
        y(
            {
                [L.zUn.NAME]: eb(j.t.cdl0Ym, j.t.o3W2l5),
                [L.zUn.TAGS]: eb(j.t['zwL+S0'], j.t.VYfKAw),
                [L.zUn.DESCRIPTION]: eb(j.t.XeYKWF, j.t.PSfeIi)
            },
            B()
        ),
    Q = () =>
        y(
            {
                [L.zUn.ENABLE_EMOTICONS]: eU(j.t['FI0m5+'], j.t.olpKCw),
                [L.zUn.EXPIRE_BEHAVIOR]: eL({
                    0: j.t['1Bb1+v'],
                    1: j.t.vjlW6u
                }),
                [L.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMT
            },
            B()
        ),
    $ = () =>
        y(
            {
                [L.zUn.TOPIC]: eb(j.t['m+veAg'], j.t.esQcxs),
                [L.zUn.PRIVACY_LEVEL]: eL({
                    [P.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [P.j8.PUBLIC]: j.t['pK/WGx']
                })
            },
            B()
        ),
    ee = () =>
        y(
            {
                [L.zUn.NAME]: () => j.t['21EXHR'],
                [L.zUn.DESCRIPTION]: () => j.t.Vm1of3,
                [L.zUn.PRIVACY_LEVEL]: eL({
                    [P.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [P.j8.PUBLIC]: j.t['pK/WGx']
                }),
                [L.zUn.STATUS]: eL({
                    [P.p1.SCHEDULED]: j.t.hXKDgo,
                    [P.p1.ACTIVE]: j.t.lRX1n5,
                    [P.p1.COMPLETED]: j.t['/eFIho'],
                    [P.p1.CANCELED]: j.t.NWIYho
                }),
                [L.zUn.ENTITY_TYPE]: eL({
                    [P.WX.NONE]: j.t['6sO3Sk'],
                    [P.WX.STAGE_INSTANCE]: j.t['Wo+s19'],
                    [P.WX.VOICE]: j.t.XCVaIC,
                    [P.WX.EXTERNAL]: j.t.IvhAj4
                }),
                [L.zUn.CHANNEL_ID]: eD(j.t.yJBIcX, j.t['+PqSsr']),
                [L.zUn.LOCATION]: eD(j.t.GaMBHx, j.t.PsICk5),
                [L.zUn.IMAGE_HASH]: eD(j.t.S3vcRE, j.t.KQu47O)
            },
            B()
        ),
    et = () =>
        y(
            {
                [L.zUn.SCHEDULED_START_TIME]: eD(j.t.zMIYVl, j.t.fzF8GR),
                [L.zUn.SCHEDULED_END_TIME]: eD(j.t.vONSQE, j.t.IlIti4),
                [L.zUn.IS_CANCELED]: (e) => {
                    if (null != e.oldValue || !0 === e.newValue) {
                        if (!e.oldValue && e.newValue) return j.t['7RkicX'];
                        else if (e.oldValue && !e.newValue) return j.t.dRNTWV;
                    }
                }
            },
            B()
        ),
    en = () =>
        y(
            {
                [L.zUn.NAME]: eb(j.t.tUKRzc, j.t.kPCHOD),
                [L.zUn.ARCHIVED]: eU(j.t.jDi9FB, j.t.F6dvbW),
                [L.zUn.LOCKED]: eU(j.t.JSy1QU, j.t.C7Jgo6),
                [L.zUn.INVITABLE]: eU(j.t.dxNUs7, j.t.biJvYG),
                [L.zUn.AUTO_ARCHIVE_DURATION]: eb(j.t.LuaG39, j.t['18d9qq']),
                [L.zUn.RATE_LIMIT_PER_USER]: eb(j.t['7lirhI'], j.t.j4CCJS),
                [L.zUn.FLAGS]: () => j.t.sSAQtr
            },
            B()
        ),
    er = (e) => {
        let t = y({}, B());
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
                [L.zUn.NAME]: () => j.t.XwxAJS,
                [L.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pys,
                [L.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t['46Y+Ly'],
                [L.zUn.AUTO_MODERATION_ACTIONS]: () => j.t['8efxfn'],
                [L.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji;
                },
                [L.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nz,
                [L.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLC,
                [L.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t['h/lM6+'],
                [L.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t['9V2yaG'],
                [L.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t['4Qe9n5'],
                [L.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxs,
                [L.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadX,
                [L.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t['FvvR+P'],
                [L.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSv7
            },
            B()
        ),
    ei = () =>
        y(
            {
                [L.zUn.NAME]: eb(j.t.VOtRSE, j.t.OK7B8P),
                [L.zUn.VOLUME]: eb(j.t.igrDBw, j.t.L5lDFB),
                [L.zUn.EMOJI_NAME]: ev(j.t.IIanaW, j.t.z4w4U1, j.t.V8Tfyc),
                [L.zUn.EMOJI_ID]: ev(j.t.ainxMD, j.t['2NPsYm'], j.t['8crtnp'])
            },
            B()
        ),
    es = () =>
        y(
            {
                [L.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ),
                [L.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVV : j.t.WxyOtr)
            },
            B()
        ),
    ea = () => y({ [L.zUn.STATUS]: () => j.t.HyCSnJ }, B()),
    eo = () => ({
        [L.zUn.DESCRIPTION]: () => j.t.nsUZKS,
        [L.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgI,
        [L.zUn.CUSTOM_BANNER_HASH]: () => j.t['04b5KC'],
        [L.zUn.TRAITS]: () => j.t.dEy9WF,
        [L.zUn.GAME_APPLICATION_IDS]: () => j.t['8BOT39'],
        [L.zUn.VISIBILITY]: () => j.t.bCl1Eh,
        [L.zUn.SERVER_TAG]: eD(j.t.ix1dnZ, j.t['4LKpKS'])
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
            label: j.intl.string(j.t.QxEVcn),
            valueLabel: j.intl.string(j.t.an9Ry8)
        },
        {
            value: L.rsA.GUILD_UPDATE,
            label: j.intl.string(j.t['5INZa2'])
        },
        {
            value: L.rsA.CHANNEL_CREATE,
            label: j.intl.string(j.t['2uh4vL'])
        },
        {
            value: L.rsA.CHANNEL_UPDATE,
            label: j.intl.string(j.t.mGsBLS)
        },
        {
            value: L.rsA.CHANNEL_DELETE,
            label: j.intl.string(j.t.hCHzAg)
        },
        {
            value: L.rsA.CHANNEL_OVERWRITE_CREATE,
            label: j.intl.string(j.t['8TnAMD'])
        },
        {
            value: L.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: j.intl.string(j.t.Jqx0Bg)
        },
        {
            value: L.rsA.CHANNEL_OVERWRITE_DELETE,
            label: j.intl.string(j.t.gBXOr6)
        },
        {
            value: L.rsA.MEMBER_KICK,
            label: j.intl.string(j.t['Q1/hNz'])
        },
        {
            value: L.rsA.MEMBER_PRUNE,
            label: j.intl.string(j.t.tOTTjY)
        },
        {
            value: L.rsA.MEMBER_BAN_ADD,
            label: j.intl.string(j.t['NfPn+f'])
        },
        {
            value: L.rsA.MEMBER_BAN_REMOVE,
            label: j.intl.string(j.t.XCsGfH)
        },
        {
            value: L.rsA.MEMBER_UPDATE,
            label: j.intl.string(j.t['F/jmND'])
        },
        {
            value: L.rsA.MEMBER_ROLE_UPDATE,
            label: j.intl.string(j.t.zAveSE)
        },
        {
            value: L.rsA.MEMBER_MOVE,
            label: j.intl.string(j.t.QshteX)
        },
        {
            value: L.rsA.MEMBER_DISCONNECT,
            label: j.intl.string(j.t.Z45os7)
        },
        {
            value: L.rsA.BOT_ADD,
            label: j.intl.string(j.t.vuH24e)
        },
        {
            value: L.rsA.THREAD_CREATE,
            label: j.intl.string(j.t['+zl0DA'])
        },
        {
            value: L.rsA.THREAD_UPDATE,
            label: j.intl.string(j.t.rbIry8)
        },
        {
            value: L.rsA.THREAD_DELETE,
            label: j.intl.string(j.t.hFjNEB)
        },
        {
            value: L.rsA.ROLE_CREATE,
            label: j.intl.string(j.t.AbxKtr)
        },
        {
            value: L.rsA.ROLE_UPDATE,
            label: j.intl.string(j.t.t3Z6sb)
        },
        {
            value: L.rsA.ROLE_DELETE,
            label: j.intl.string(j.t.YsFpa2)
        },
        {
            value: L.rsA.ONBOARDING_PROMPT_CREATE,
            label: j.intl.string(j.t.ZV9tqa)
        },
        {
            value: L.rsA.ONBOARDING_PROMPT_UPDATE,
            label: j.intl.string(j.t.PcOdvb)
        },
        {
            value: L.rsA.ONBOARDING_PROMPT_DELETE,
            label: j.intl.string(j.t['+r33NT'])
        },
        {
            value: L.rsA.ONBOARDING_CREATE,
            label: j.intl.string(j.t.uDADdX)
        },
        {
            value: L.rsA.ONBOARDING_UPDATE,
            label: j.intl.string(j.t.J1H1ws)
        },
        {
            value: L.rsA.HOME_SETTINGS_CREATE,
            label: j.intl.string(j.t.Di4cvL)
        },
        {
            value: L.rsA.HOME_SETTINGS_UPDATE,
            label: j.intl.string(j.t.tzyrJC)
        },
        {
            value: L.rsA.INVITE_CREATE,
            label: j.intl.string(j.t['0BNJdX'])
        },
        {
            value: L.rsA.INVITE_UPDATE,
            label: j.intl.string(j.t['o++obW'])
        },
        {
            value: L.rsA.INVITE_DELETE,
            label: j.intl.string(j.t.iP40Aw)
        },
        {
            value: L.rsA.WEBHOOK_CREATE,
            label: j.intl.string(j.t['tBF4+f'])
        },
        {
            value: L.rsA.WEBHOOK_UPDATE,
            label: j.intl.string(j.t.eV3McH)
        },
        {
            value: L.rsA.WEBHOOK_DELETE,
            label: j.intl.string(j.t.AAL3Ky)
        },
        {
            value: L.rsA.EMOJI_CREATE,
            label: j.intl.string(j.t.RuWm0d)
        },
        {
            value: L.rsA.EMOJI_UPDATE,
            label: j.intl.string(j.t.WzdUY2)
        },
        {
            value: L.rsA.EMOJI_DELETE,
            label: j.intl.string(j.t.c3dK2N)
        },
        {
            value: L.rsA.MESSAGE_DELETE,
            label: j.intl.string(j.t.daTfXl)
        },
        {
            value: L.rsA.MESSAGE_BULK_DELETE,
            label: j.intl.string(j.t.nrBxen)
        },
        {
            value: L.rsA.MESSAGE_PIN,
            label: j.intl.string(j.t.MUldyM)
        },
        {
            value: L.rsA.MESSAGE_UNPIN,
            label: j.intl.string(j.t.n4zKhI)
        },
        {
            value: L.rsA.INTEGRATION_CREATE,
            label: j.intl.string(j.t['deNm8/'])
        },
        {
            value: L.rsA.INTEGRATION_UPDATE,
            label: j.intl.string(j.t.HT7Sfn)
        },
        {
            value: L.rsA.INTEGRATION_DELETE,
            label: j.intl.string(j.t['+kJ09v'])
        },
        {
            value: L.rsA.STICKER_CREATE,
            label: j.intl.string(j.t['3DzNjY'])
        },
        {
            value: L.rsA.STICKER_UPDATE,
            label: j.intl.string(j.t.tdhW5e)
        },
        {
            value: L.rsA.STICKER_DELETE,
            label: j.intl.string(j.t['+ZhGOj'])
        },
        {
            value: L.rsA.STAGE_INSTANCE_CREATE,
            label: j.intl.string(j.t.sPbjAw)
        },
        {
            value: L.rsA.STAGE_INSTANCE_UPDATE,
            label: j.intl.string(j.t.cW9LfH)
        },
        {
            value: L.rsA.STAGE_INSTANCE_DELETE,
            label: j.intl.string(j.t['U1r+yM'])
        },
        {
            value: L.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: j.intl.string(j.t.H81Zy8)
        },
        {
            value: L.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: j.intl.string(j.t.FM69l5)
        },
        {
            value: L.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: j.intl.string(j.t.Rq28Bg)
        },
        {
            value: L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: j.intl.string(j.t.iPdFOj)
        },
        {
            value: L.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: j.intl.string(j.t.gNq5z8)
        },
        {
            value: L.rsA.AUTO_MODERATION_RULE_CREATE,
            label: j.intl.string(j.t.f72Zqa)
        },
        {
            value: L.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: j.intl.string(j.t.XeqIio)
        },
        {
            value: L.rsA.AUTO_MODERATION_RULE_DELETE,
            label: j.intl.string(j.t.syAApa)
        },
        {
            value: L.rsA.GUILD_HOME_FEATURE_ITEM,
            label: j.intl.string(j.t.lhG5KC)
        },
        {
            value: L.rsA.GUILD_HOME_REMOVE_ITEM,
            label: j.intl.string(j.t.lRPRwc)
        },
        {
            value: L.rsA.SOUNDBOARD_SOUND_CREATE,
            label: j.intl.string(j.t.yoRi5u)
        },
        {
            value: L.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: j.intl.string(j.t.uKlG0d)
        },
        {
            value: L.rsA.SOUNDBOARD_SOUND_DELETE,
            label: j.intl.string(j.t.gq0iCQ)
        },
        {
            value: L.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: j.intl.string(j.t.rGr0YG)
        },
        {
            value: L.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: j.intl.string(j.t.V9PEQ0)
        }
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
    return null != eE(L.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [E.J6.SECONDS]: (e) => j.intl.formatToPlainString(j.t.geSp4O, { seconds: e }),
    [E.J6.MINUTES]: (e) => j.intl.formatToPlainString(j.t.iXLF9f, { minutes: e }),
    [E.J6.HOURS]: (e) => j.intl.formatToPlainString(j.t.xCjYxM, { hours: e }),
    [E.J6.DAYS]: (e) => j.intl.formatToPlainString(j.t.k2UNz8, { days: e })
};
function eT(e) {
    let t = eE(L.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = ed(L.zUn.ROLES_ADD, e).length > 0,
        r = ed(L.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - v.default.extractTimestamp(e.id),
                r = Math.round(n / 1000 / 60),
                l = (0, E.CI)(r, z);
            if (null == l.unit || null == l.time) return null;
            if (l.unit in eA) {
                let e = l.unit,
                    t = l.unit === E.J6.SECONDS ? Math.round(n / 1000) : l.time;
                return eA[e](t);
            }
        } else if ((null == t ? void 0 : t.oldValue) != null) return j.intl.string(j.t.MA1ltr);
    } else if (n && r) return j.intl.string(j.t.RdMMe3);
    else if (n) return j.intl.string(j.t['4GQqs7']);
    else if (r) return j.intl.string(j.t['8mQ6x8']);
    return null;
}
function eI(e) {
    let t = ed(L.zUn.ROLES_ADD, e),
        n = ed(L.zUn.ROLES_REMOVE, e),
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
function eg(e) {
    switch (e.action) {
        case L.rsA.GUILD_UPDATE:
            return j.t.LjZO39;
        case L.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === L.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case L.d4z.GUILD_STAGE_VOICE:
                    return j.t['OKp4+v'];
                case L.d4z.GUILD_VOICE:
                    return j.t.NPOy4O;
                case L.d4z.GUILD_CATEGORY:
                    return j.t.T3KIj4;
                default:
                    return j.t.wrYNGx;
            }
        case L.rsA.CHANNEL_UPDATE:
            return j.t.nTYk6O;
        case L.rsA.CHANNEL_DELETE:
            return j.t.ynfvkp;
        case L.rsA.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1d;
        case L.rsA.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNT;
        case L.rsA.CHANNEL_OVERWRITE_DELETE:
            return j.t['HASt//'];
        case L.rsA.MEMBER_KICK:
            return j.t.B5hDZW;
        case L.rsA.MEMBER_PRUNE:
            return j.t.qKOZTE;
        case L.rsA.MEMBER_BAN_ADD:
            return j.t.XklUm5;
        case L.rsA.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HB;
        case L.rsA.MEMBER_UPDATE:
            return j.t.pznhLC;
        case L.rsA.MEMBER_ROLE_UPDATE:
            return j.t.VngfiY;
        case L.rsA.MEMBER_MOVE:
            return j.t.Yt6NkZ;
        case L.rsA.MEMBER_DISCONNECT:
            return j.t.K4eCZ2;
        case L.rsA.BOT_ADD:
            return j.t.fWvX0N;
        case L.rsA.ROLE_CREATE:
            return j.t.UTLTx8;
        case L.rsA.ROLE_UPDATE:
            return j.t.NRbN19;
        case L.rsA.ROLE_DELETE:
            return j.t['4s63tb'];
        case L.rsA.INVITE_CREATE:
            return j.t.YHOXW1;
        case L.rsA.INVITE_UPDATE:
            return j.t.ja3kGR;
        case L.rsA.INVITE_DELETE:
            return j.t['3n/iWl'];
        case L.rsA.WEBHOOK_CREATE:
            return j.t.MhYhio;
        case L.rsA.WEBHOOK_UPDATE:
            return j.t['6GTlWF'];
        case L.rsA.WEBHOOK_DELETE:
            return j.t.in0VjY;
        case L.rsA.EMOJI_CREATE:
            return j.t['7vekRE'];
        case L.rsA.EMOJI_UPDATE:
            return j.t.IsCKfn;
        case L.rsA.EMOJI_DELETE:
            return j.t.JnUaVF;
        case L.rsA.STICKER_CREATE:
            return j.t.DRZifn;
        case L.rsA.STICKER_UPDATE:
            return j.t.bhujGR;
        case L.rsA.STICKER_DELETE:
            return j.t.rGEP9f;
        case L.rsA.MESSAGE_DELETE:
            return j.t['HPkD+P'];
        case L.rsA.MESSAGE_BULK_DELETE:
            return j.t['3RIvLC'];
        case L.rsA.MESSAGE_PIN:
            return j.t.Yna7Ex;
        case L.rsA.MESSAGE_UNPIN:
            return j.t.NCxXUV;
        case L.rsA.INTEGRATION_CREATE:
            return j.t.HYvCb2;
        case L.rsA.INTEGRATION_UPDATE:
            return j.t.ibCCOT;
        case L.rsA.INTEGRATION_DELETE:
            return j.t['8zScWV'];
        case L.rsA.STAGE_INSTANCE_CREATE:
            return j.t['n7x/DA'];
        case L.rsA.STAGE_INSTANCE_UPDATE:
            return j.t['0hQYU1'];
        case L.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t['Oi/in5'];
            return j.t['7ZIFm5'];
        case L.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52t;
        case L.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK19;
        case L.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t['/ARPKS'];
        case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t['8qCI39'];
        case L.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2dX;
        case L.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === L.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case L.d4z.PRIVATE_THREAD:
                    return j.t['Br0y5+'];
                case L.d4z.ANNOUNCEMENT_THREAD:
                    return j.t['6uaMmJ'];
                default:
                    return j.t['2cxQ7O'];
            }
        case L.rsA.THREAD_UPDATE:
            return j.t.PSsy4u;
        case L.rsA.THREAD_DELETE:
            return j.t.s3Khn5;
        case L.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBg;
        case L.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2N;
        case L.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === x.fX.USER_PROFILE.toString()) return j.t.YQsjen;
            return j.t.SD0PwM;
        case L.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4Twc;
        case L.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return j.t['/W5u5u'];
        case L.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWys;
        case L.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t.ryGLk5;
        case L.rsA.AUTO_MODERATION_RULE_CREATE:
            return j.t.NKljj4;
        case L.rsA.AUTO_MODERATION_RULE_UPDATE:
            return j.t['3wEA9v'];
        case L.rsA.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3t;
        case L.rsA.ONBOARDING_PROMPT_CREATE:
            return j.t['/8A1g4'];
        case L.rsA.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWF;
        case L.rsA.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTam;
        case L.rsA.ONBOARDING_CREATE:
            return j.t.wDaq39;
        case L.rsA.ONBOARDING_UPDATE:
            return j.t['yONu/v'];
        case L.rsA.HOME_SETTINGS_CREATE:
            return j.t.dSdCjI;
        case L.rsA.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qq;
        case L.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === L.zUn.ENTITY_TYPE) : null;
            if (null == l) return j.t['UZ+U3N'];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return j.t['PyEa+P'];
                case a.w.FORUM_POST:
                    return j.t.hCuAb2;
                default:
                    return j.t['UZ+U3N'];
            }
        case L.rsA.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReur;
        case L.rsA.SOUNDBOARD_SOUND_CREATE:
            return j.t['0PD83d'];
        case L.rsA.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n19;
        case L.rsA.SOUNDBOARD_SOUND_DELETE:
            return j.t['kVz4//'];
        case L.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU1;
        case L.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case L.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t.NUKUb2;
        case L.rsA.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hFx;
        case L.rsA.GUILD_MIGRATE_PIN_PERMISSION:
            return j.t['3Ne7MD'];
        default:
            return null;
    }
}
function em(e) {
    switch (e) {
        case M.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t['5G8ZDw']);
        case M.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t['4YLtzM']);
        case M.zZ.PINNED:
            return j.intl.string(j.t['1QLRYW']);
    }
    return null;
}
function ef(e) {
    switch (e) {
        case M.zZ.GUILD_FEED_REMOVED:
            return j.intl.string(j.t.S5kuWV);
        case M.zZ.ACTIVE_CHANNELS_REMOVED:
            return j.intl.string(j.t['8qpgc3']);
        case M.zZ.PINNED:
            return j.intl.string(j.t.CMweGB);
    }
    return null;
}
function eO(e, t) {
    switch (e) {
        case L.Plq.CREATE_INSTANT_INVITE:
            return j.intl.string(j.t.zJrgTE);
        case L.Plq.KICK_MEMBERS:
            return j.intl.string(j.t.pBNv6u);
        case L.Plq.BAN_MEMBERS:
            return j.intl.string(j.t.oTBA7O);
        case L.Plq.ADMINISTRATOR:
            return j.intl.string(j.t.PGvZqa);
        case L.Plq.MANAGE_CHANNELS:
            if (t.targetType === L.KFR.CHANNEL || t.targetType === L.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15O);
            return j.intl.string(j.t['9qLtWl']);
        case L.Plq.MANAGE_GUILD:
            return j.intl.string(j.t.QZRcfH);
        case L.Plq.VIEW_GUILD_ANALYTICS:
            return j.intl.string(j.t.rQJBEx);
        case L.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.intl.string(j.t['0lTLTk']);
        case L.Plq.CHANGE_NICKNAME:
            return j.intl.string(j.t.dilOFx);
        case L.Plq.MANAGE_NICKNAMES:
            return j.intl.string(j.t['t+Ct5+']);
        case L.Plq.MANAGE_ROLES:
            return j.intl.string(j.t['C8d+oK']);
        case L.Plq.MANAGE_WEBHOOKS:
            return j.intl.string(j.t['/ADKmJ']);
        case L.Plq.CREATE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.HarVuL);
        case L.Plq.MANAGE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.bbuXIi);
        case L.Plq.VIEW_AUDIT_LOG:
            return j.intl.string(j.t.fZgLpK);
        case L.Plq.VIEW_CHANNEL:
            if (t.targetType === L.KFR.CHANNEL || t.targetType === L.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t['W/A4Qk']);
            return j.intl.string(j.t.uV83ys);
        case L.Plq.SEND_MESSAGES:
            return j.intl.string(j.t.T32rkJ);
        case L.Plq.SEND_TTS_MESSAGES:
            return j.intl.string(j.t.Mg7bkp);
        case L.Plq.USE_APPLICATION_COMMANDS:
            return j.intl.string(j.t.shbR1d);
        case L.Plq.MANAGE_MESSAGES:
            return j.intl.string(j.t['6lU9xM']);
        case L.Plq.EMBED_LINKS:
            return j.intl.string(j.t['969dEB']);
        case L.Plq.ATTACH_FILES:
            return j.intl.string(j.t['3AS4UF']);
        case L.Plq.READ_MESSAGE_HISTORY:
            return j.intl.string(j.t.l9ufaW);
        case L.Plq.MENTION_EVERYONE:
            return j.intl.string(j.t.Y78KGB);
        case L.Plq.USE_EXTERNAL_EMOJIS:
            return j.intl.string(j.t.BpBGZW);
        case L.Plq.USE_EXTERNAL_STICKERS:
            return j.intl.string(j.t['UeRs+f']);
        case L.Plq.ADD_REACTIONS:
            return j.intl.string(j.t.yEoJAg);
        case L.Plq.CONNECT:
            return j.intl.string(j.t.S0W8Z2);
        case L.Plq.SPEAK:
            return j.intl.string(j.t['8w1tIS']);
        case L.Plq.MUTE_MEMBERS:
            return j.intl.string(j.t['8EI309']);
        case L.Plq.DEAFEN_MEMBERS:
            return j.intl.string(j.t['9L47Fh']);
        case L.Plq.MOVE_MEMBERS:
            return j.intl.string(j.t.YtjJPT);
        case L.Plq.USE_VAD:
            return j.intl.string(j.t['08zAV1']);
        case L.Plq.PRIORITY_SPEAKER:
            return j.intl.string(j.t.BVK71t);
        case L.Plq.STREAM:
            return j.intl.string(j.t.FlNoSU);
        case L.Plq.REQUEST_TO_SPEAK:
            return j.intl.string(j.t['5kicT0']);
        case L.Plq.CREATE_EVENTS:
            return j.intl.string(j.t.qyjZub);
        case L.Plq.MANAGE_EVENTS:
            return j.intl.string(j.t.HIgA5e);
        case L.Plq.CREATE_PUBLIC_THREADS:
            return j.intl.string(j.t['25rKnZ']);
        case L.Plq.CREATE_PRIVATE_THREADS:
            return j.intl.string(j.t.QwbTSU);
        case L.Plq.SEND_MESSAGES_IN_THREADS:
            return j.intl.string(j.t.fTE74u);
        case L.Plq.MANAGE_THREADS:
            return j.intl.string(j.t.kEqgr6);
        case L.Plq.MODERATE_MEMBERS:
            return j.intl.string(j.t['+RL6p6']);
        case L.Plq.SET_VOICE_CHANNEL_STATUS:
            return j.intl.string(j.t.VBwkUV);
        case L.Plq.SEND_POLLS:
            return j.intl.string(j.t.UMQ7W1);
        case L.Plq.USE_EXTERNAL_APPS:
            return j.intl.string(j.t.TtA5rK);
        case L.Plq.PIN_MESSAGES:
            return j.intl.string(j.t.Y5BI39);
    }
    return null;
}
function eN(e, t) {
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
                                (e) => h.Z.getChannel(e),
                                (e) => (0, _.F6)(e, S.default, p.Z, !0)
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
                                (e) => R.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case L.KFR.ONBOARDING_PROMPT:
                            let n = eS(
                                e,
                                L.zUn.ID,
                                (e) => g.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? j.intl.string(j.t.ZNQyiY) : n;
                        case L.KFR.GUILD_ONBOARDING:
                        case L.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case L.KFR.INVITE:
                            return eS(e, L.zUn.CODE, L.VqG);
                        case L.KFR.INTEGRATION:
                            return eS(
                                e,
                                L.zUn.TYPE,
                                (e) => U.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.WEBHOOK:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => U.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.EMOJI:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => T.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.STICKER:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => O.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case L.KFR.STAGE_INSTANCE:
                            return eS(
                                e,
                                L.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(f.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case L.KFR.GUILD_SCHEDULED_EVENT:
                        case L.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => U.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.THREAD:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => U.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = U.Z.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => U.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === d.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case L.KFR.AUTO_MODERATION_RULE:
                            return eS(
                                e,
                                L.zUn.NAME,
                                (e) => U.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case L.KFR.GUILD_SOUNDBOARD:
                            return eS(e, L.zUn.NAME, L.VqG);
                        case L.KFR.HOME_SETTINGS:
                            return eS(
                                e,
                                L.zUn.GUILD_ID,
                                (e) => m.Z.getSettings(e),
                                () => j.intl.string(j.t.VbpLyc),
                                t.id
                            );
                        case L.KFR.VOICE_CHANNEL_STATUS:
                            return eS(
                                e,
                                L.zUn.STATUS,
                                (e) => h.Z.getChannel(e),
                                (e) => (0, _.F6)(e, S.default, p.Z, !0)
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
                                            (e) => h.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let r = U.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find((t) => t.event_exception_id === e.options.event_exception_id);
                                    n.subtarget = (0, C.vc)(s()(v.default.extractTimestamp(null != (t = null == l ? void 0 : l.event_exception_id) ? t : '0')), 'LL');
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
                                            (e) => R.Z.getRole(n.id, e),
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
                                            ? (e.subtarget = j.intl.string(j.t.MSYhgo))
                                            : (e.subtarget = eC(
                                                  t.id,
                                                  (e) => h.Z.getChannel(e),
                                                  (e) => (0, _.F6)(e, S.default, p.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case L.zUn.OWNER_ID:
                                    return ep(e, (e) => S.default.getUser(e));
                                case L.zUn.CHANNEL_ID:
                                case L.zUn.AFK_CHANNEL_ID:
                                case L.zUn.SYSTEM_CHANNEL_ID:
                                case L.zUn.RULES_CHANNEL_ID:
                                case L.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ep(
                                        e,
                                        (e) => h.Z.getChannel(e),
                                        (e) => (0, _.F6)(e, S.default, p.Z, !0)
                                    );
                                case L.zUn.AFK_TIMEOUT:
                                    return ep(e, (e) => e / 60);
                                case L.zUn.BITRATE:
                                    return ep(e, (e) => e / 1000);
                                case L.zUn.COLOR:
                                    return ep(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case L.zUn.THEME_COLORS:
                                    return ep(e, (e) => ''.concat((0, c.Rf)(e[0]).toUpperCase(), ', ').concat((0, c.Rf)(e[1]).toUpperCase()));
                                case L.zUn.MAX_AGE:
                                    return ep(e, (e) => {
                                        let t = D.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case L.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = eh(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new N.ms(L.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new N.ms(L.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case L.zUn.PERMISSIONS_GRANTED:
                                case L.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = eh(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new N.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new N.ms(L.zUn.PERMISSIONS_RESET, r, r);
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
                                        let r = new N.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let n = new N.ms(e.key, r, null);
                                        t.push(n);
                                    }
                                    return t;
                                }
                                case L.zUn.PREFERRED_LOCALE:
                                    return ep(e, (e) => {
                                        let t = (0, j.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case L.zUn.VIDEO_QUALITY_MODE:
                                    return ep(e, (e) => (e === L.Ucd.FULL ? j.intl.string(j.t['7jOoJC']) : j.intl.string(j.t.jjKYpq)));
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
                                            let s = new N.ms(r[t], !n, !l);
                                            i.push(s);
                                        }),
                                        i
                                    );
                                case L.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(I.ZF).join(', ')
                                        );
                                    break;
                                case L.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, I.YN);
                                    break;
                                case L.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, I.Ar);
                                    break;
                                case L.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case L.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case L.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case L.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case L.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case L.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case L.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE) return ep(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case L.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) =>
                                                e
                                                    .map(h.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, _.F6)(e, S.default, p.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.intl.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case L.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === L.KFR.AUTO_MODERATION_RULE)
                                        return ep(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => R.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.intl.string(j.t['K/EdV1']))
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
                                            for (let e in s) if (null == i[e]) return new N.ms(L.zUn.AVAILABLE_TAG_ADD, null, eR(s[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in i) if (null == s[e]) return new N.ms(L.zUn.AVAILABLE_TAG_DELETE, null, eR(i[e]));
                                        }
                                        for (let e in i) {
                                            let t = i[e],
                                                n = s[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new N.ms(L.zUn.AVAILABLE_TAG_EDIT, eR(t), eR(n));
                                        }
                                        return e;
                                    })(e);
                                case L.zUn.SCHEDULED_START_TIME:
                                case L.zUn.SCHEDULED_END_TIME:
                                    return ep(e, (e) => (0, C.vc)(s()(new Date(e)), 'LLLL'));
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
function eh(e, t) {
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
function eR(e) {
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
    return (null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))), null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))), new N.ms(e.key, l || e.oldValue, r || e.newValue));
}
function eS(e, t, n, r, l) {
    let i = null,
        s = n((l = null != l ? l : e.targetId));
    if ((null != s && null != r && (i = r(s)), null == i)) {
        let t = U.Z.deletedTargets[e.targetType];
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
function eD(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function ev(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function eU(e, t) {
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
