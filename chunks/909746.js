(n.d(t, {
    Bq: () => X,
    C0: () => ei,
    C2: () => $,
    EN: () => K,
    F1: () => ea,
    HE: () => H,
    HN: () => W,
    Iv: () => ec,
    J5: () => eI,
    JA: () => es,
    K: () => Q,
    ML: () => V,
    N$: () => J,
    N5: () => eg,
    QM: () => eT,
    V$: () => eE,
    _$: () => ef,
    cT: () => eN,
    em: () => em,
    hQ: () => eO,
    hx: () => q,
    lR: () => Y,
    lU: () => Z,
    nm: () => e_,
    oD: () => k,
    pA: () => en,
    pY: () => z,
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
    N = n(427679),
    O = n(926491),
    f = n(387667),
    R = n(592125),
    S = n(485386),
    C = n(699516),
    h = n(594174),
    p = n(55935),
    D = n(630388),
    U = n(971130),
    L = n(709054),
    v = n(987707),
    b = n(981631),
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
let w = new A.Z('AuditLogUtils'),
    F = [E.J6.DAYS, E.J6.HOURS, E.J6.MINUTES, E.J6.SECONDS],
    B = () => ({ [b.zUn.REASON]: () => j.t['2IW3Cw'] }),
    z = () =>
        y(
            {
                [b.zUn.NAME]: () => j.t.CkDiND,
                [b.zUn.DESCRIPTION]: eU(j.t.RP3Ey8, j.t.QAVj1d),
                [b.zUn.ICON_HASH]: () => j.t.iLZ8Q0,
                [b.zUn.SPLASH_HASH]: () => j.t['4VV6dn'],
                [b.zUn.DISCOVERY_SPLASH_HASH]: () => j.t['2pds6u'],
                [b.zUn.BANNER_HASH]: eU(j.t.Cxq4zM, j.t['H7eE//']),
                [b.zUn.OWNER_ID]: () => j.t['8ltsLS'],
                [b.zUn.REGION]: () => j.t.X9r5KS,
                [b.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDQ,
                [b.zUn.AFK_CHANNEL_ID]: eU(j.t.ClBuAw, j.t['ms+xtL']),
                [b.zUn.AFK_TIMEOUT]: () => j.t.q21fHR,
                [b.zUn.SYSTEM_CHANNEL_ID]: eU(j.t.H1VXaW, j.t.XhtmxM),
                [b.zUn.RULES_CHANNEL_ID]: eU(j.t.OI6MGx, j.t.lik3tL),
                [b.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eU(j.t.YxBKra, j.t.Ehsnio),
                [b.zUn.MFA_LEVEL]: eb({
                    [b.BpS.NONE]: j.t.voaCCQ,
                    [b.BpS.ELEVATED]: j.t.pRNVw8
                }),
                [b.zUn.WIDGET_ENABLED]: ev(j.t.ADIty8, j.t.nf58VV),
                [b.zUn.WIDGET_CHANNEL_ID]: eU(j.t['6SBsDQ'], j.t.deQ5wM),
                [b.zUn.VERIFICATION_LEVEL]: eb({
                    [b.sFg.NONE]: j.t.W27rsb,
                    [b.sFg.LOW]: j.t['V8P+Pz'],
                    [b.sFg.MEDIUM]: j.t.ERQFam,
                    [b.sFg.HIGH]: j.t['83fN0t'],
                    [b.sFg.VERY_HIGH]: j.t.PnkQJC
                }),
                [b.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eb({
                    [b.bL.ALL_MESSAGES]: j.t.LDi76O,
                    [b.bL.ONLY_MENTIONS]: j.t['6K83bW']
                }),
                [b.zUn.VANITY_URL_CODE]: eU(j.t.Zplsoq, j.t.u6cArq),
                [b.zUn.EXPLICIT_CONTENT_FILTER]: eb({
                    [b.lxg.DISABLED]: j.t.fmOeLy,
                    [b.lxg.MEMBERS_WITHOUT_ROLES]: j.t['4FghY2'],
                    [b.lxg.ALL_MEMBERS]: j.t.olyrSk
                }),
                [b.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: ev(j.t.rBT0sr, j.t['gc+te3']),
                [b.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB,
                [b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjI,
                [b.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t['+fQAen'],
                [b.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4u,
                [b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSE
            },
            B()
        ),
    V = () => ({
        [b.zUn.NAME]: eD(j.t.f8Rh0d, j.t.ebD4Qk),
        [b.zUn.POSITION]: eD(j.t.isS8tb, j.t.t5uBio),
        [b.zUn.TOPIC]: eL(j.t.esQcxs, j.t['m+veAg'], j.t['ws/1FB']),
        [b.zUn.BITRATE]: eD(j.t.fw81am, j.t.MFNlgY),
        [b.zUn.RTC_REGION_OVERRIDE]: eL(j.t['6kajx8'], j.t.eGOlmZ, j.t['0JMZd3']),
        [b.zUn.USER_LIMIT]: eD(j.t.wk5t7u, j.t.XgjCEh),
        [b.zUn.RATE_LIMIT_PER_USER]: eD(j.t['7lirhI'], j.t.j4CCJS),
        [b.zUn.PERMISSIONS_RESET]: () => j.t['+vSBFR'],
        [b.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv7,
        [b.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5e,
        [b.zUn.REASON]: () => j.t['2IW3Cw'],
        [b.zUn.NSFW]: ev(j.t.H8Ri2d, j.t.WW6cJy),
        [b.zUn.TYPE]: eD(j.t.Vn5zn5, j.t.aq4uWF),
        [b.zUn.VIDEO_QUALITY_MODE]: eD(j.t.e68fAQ, j.t.djbES0),
        [b.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(j.t.nYz2mp, j.t.oczvRE),
        [b.zUn.FLAGS]: () => j.t.ImCQkp,
        [b.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
        [b.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzlp,
        [b.zUn.AVAILABLE_TAG_DELETE]: () => j.t['8QOsen'],
        [b.zUn.LINKED_LOBBY]: eU(j.t['+/3TkJ'], j.t['5kDYS0'])
    }),
    Z = () =>
        y(
            {
                [b.zUn.NICK]: eL(j.t.qXDsHh, j.t['m+qur6'], j.t.DvLvjI),
                [b.zUn.DEAF]: ev(j.t.mArLlZ, j.t.ddvVYG),
                [b.zUn.MUTE]: ev(j.t['bxs/lZ'], j.t.FjecQE),
                [b.zUn.ROLES_REMOVE]: () => j.t['+2SDWV'],
                [b.zUn.ROLES_ADD]: () => j.t['B3/3IC'],
                [b.zUn.PRUNE_DELETE_DAYS]: () => j.t['+Cvc+P'],
                [b.zUn.COMMUNICATION_DISABLED_UNTIL]: eL(j.t.LXTQr6, j.t.LXTQr6, j.t.ULSdnJ),
                [b.zUn.BYPASSES_VERIFICATION]: ev(j.t.NBPBur, j.t.zATosr),
                [b.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFB
            },
            B()
        ),
    H = () =>
        y(
            {
                [b.zUn.NAME]: eD(j.t.QBmlaG, j.t.Lfs4r6),
                [b.zUn.DESCRIPTION]: eD(j.t.XeYKWF, j.t.PSfeIi),
                [b.zUn.PERMISSIONS_GRANTED]: () => j.t['9i/DvL'],
                [b.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVl,
                [b.zUn.COLOR]: eM({ '#000000': j.t.TK6E1N }, j.t['2FQFi4']),
                [b.zUn.COLORS]: (e) => (null == e.newValue.secondary_color ? j.t.U44ttr : j.t.WnSwLy),
                [b.zUn.HOIST]: ev(j.t.gWfe29, j.t['+tb8kJ']),
                [b.zUn.MENTIONABLE]: ev(j.t.LL8VFB, j.t.Z7xzmJ),
                [b.zUn.ICON_HASH]: () => j.t['iEE79/'],
                [b.zUn.UNICODE_EMOJI]: () => j.t.KiLMMz
            },
            B()
        ),
    k = () =>
        G(y({}, B()), {
            [b.zUn.TITLE]: eD(j.t.sNpuy8, j.t['3Ukc/v']),
            [b.zUn.DESCRIPTION]: eD(j.t.PP1q09, j.t.z7pYLi),
            [b.zUn.OPTIONS]: () => j.t['3G5C9/'],
            [b.zUn.SINGLE_SELECT]: ev(j.t.v4WnR0, j.t['6Qg3uL']),
            [b.zUn.REQUIRED]: ev(j.t['0MPAMz'], j.t.pwsXio)
        }),
    K = () =>
        G(y({}, B()), {
            [b.zUn.DEFAULT_CHANNEL_IDS]: () => j.t['8M+D2t'],
            [b.zUn.ENABLE_DEFAULT_CHANNELS]: ev(j.t['EYd/lp'], j.t['36OZeX']),
            [b.zUn.ENABLE_ONBOARDING_PROMPTS]: ev(j.t.V3u8PT, j.t.r66lc3),
            [b.zUn.ENABLED]: ev(j.t.SODVIi, j.t.u8HY5e)
        }),
    q = () =>
        G(y({}, B()), {
            [b.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xc,
            [b.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUInp,
            [b.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mp
        }),
    W = () =>
        y(
            {
                [b.zUn.CODE]: () => j.t.rrRHgY,
                [b.zUn.CHANNEL_ID]: () => j.t.Q1vd5u,
                [b.zUn.MAX_USES]: eM({ 0: j.t.Yx8LNj }, j.t['3ygnwc']),
                [b.zUn.MAX_AGE]: eM({ [j.intl.string(j.t.PqEzn5)]: j.t.uWrLv7 }, j.t['Q+5kcH']),
                [b.zUn.TEMPORARY]: ev(j.t.MWp6Hx, j.t.omiqTE),
                [b.zUn.FLAGS]: eb({ [o.$.IS_GUEST_INVITE]: j.t.XYZMbG })
            },
            B()
        ),
    Y = () => ({
        [b.zUn.CHANNEL_ID]: eD(j.t.jhPpra, j.t.ar4qYG),
        [b.zUn.NAME]: eD(j.t.ZVGrzc, j.t.tywdZW),
        [b.zUn.AVATAR_HASH]: () => j.t.KB52Ul,
        [b.zUn.REASON]: () => j.t['2IW3Cw']
    }),
    J = () => y({ [b.zUn.NAME]: eD(j.t.ahU1o6, j.t['wxs+vb']) }, B()),
    X = () =>
        y(
            {
                [b.zUn.NAME]: eD(j.t.cdl0Ym, j.t.o3W2l5),
                [b.zUn.TAGS]: eD(j.t['zwL+S0'], j.t.VYfKAw),
                [b.zUn.DESCRIPTION]: eD(j.t.XeYKWF, j.t.PSfeIi)
            },
            B()
        ),
    Q = () =>
        y(
            {
                [b.zUn.ENABLE_EMOTICONS]: ev(j.t['FI0m5+'], j.t.olpKCw),
                [b.zUn.EXPIRE_BEHAVIOR]: eb({
                    0: j.t['1Bb1+v'],
                    1: j.t.vjlW6u
                }),
                [b.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMT
            },
            B()
        ),
    $ = () =>
        y(
            {
                [b.zUn.TOPIC]: eD(j.t['m+veAg'], j.t.esQcxs),
                [b.zUn.PRIVACY_LEVEL]: eb({
                    [P.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [P.j8.PUBLIC]: j.t['pK/WGx']
                })
            },
            B()
        ),
    ee = () =>
        y(
            {
                [b.zUn.NAME]: () => j.t['21EXHR'],
                [b.zUn.DESCRIPTION]: () => j.t.Vm1of3,
                [b.zUn.PRIVACY_LEVEL]: eb({
                    [P.j8.GUILD_ONLY]: j.t['EC+CDg'],
                    [P.j8.PUBLIC]: j.t['pK/WGx']
                }),
                [b.zUn.STATUS]: eb({
                    [P.p1.SCHEDULED]: j.t.hXKDgo,
                    [P.p1.ACTIVE]: j.t.lRX1n5,
                    [P.p1.COMPLETED]: j.t['/eFIho'],
                    [P.p1.CANCELED]: j.t.NWIYho
                }),
                [b.zUn.ENTITY_TYPE]: eb({
                    [P.WX.NONE]: j.t['6sO3Sk'],
                    [P.WX.STAGE_INSTANCE]: j.t['Wo+s19'],
                    [P.WX.VOICE]: j.t.XCVaIC,
                    [P.WX.EXTERNAL]: j.t.IvhAj4
                }),
                [b.zUn.CHANNEL_ID]: eU(j.t.yJBIcX, j.t['+PqSsr']),
                [b.zUn.LOCATION]: eU(j.t.GaMBHx, j.t.PsICk5),
                [b.zUn.IMAGE_HASH]: eU(j.t.S3vcRE, j.t.KQu47O)
            },
            B()
        ),
    et = () =>
        y(
            {
                [b.zUn.SCHEDULED_START_TIME]: eU(j.t.zMIYVl, j.t.fzF8GR),
                [b.zUn.SCHEDULED_END_TIME]: eU(j.t.vONSQE, j.t.IlIti4),
                [b.zUn.IS_CANCELED]: (e) => {
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
                [b.zUn.NAME]: eD(j.t.tUKRzc, j.t.kPCHOD),
                [b.zUn.ARCHIVED]: ev(j.t.jDi9FB, j.t.F6dvbW),
                [b.zUn.LOCKED]: ev(j.t.JSy1QU, j.t.C7Jgo6),
                [b.zUn.INVITABLE]: ev(j.t.dxNUs7, j.t.biJvYG),
                [b.zUn.AUTO_ARCHIVE_DURATION]: eD(j.t.LuaG39, j.t['18d9qq']),
                [b.zUn.RATE_LIMIT_PER_USER]: eD(j.t['7lirhI'], j.t.j4CCJS),
                [b.zUn.FLAGS]: () => j.t.sSAQtr
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
                [b.zUn.NAME]: () => j.t.XwxAJS,
                [b.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pys,
                [b.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t['46Y+Ly'],
                [b.zUn.AUTO_MODERATION_ACTIONS]: () => j.t['8efxfn'],
                [b.zUn.AUTO_MODERATION_ENABLED]: (e) => {
                    var t;
                    return !0 === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji;
                },
                [b.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nz,
                [b.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLC,
                [b.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t['h/lM6+'],
                [b.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t['9V2yaG'],
                [b.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t['4Qe9n5'],
                [b.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxs,
                [b.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadX,
                [b.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t['FvvR+P'],
                [b.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSv7
            },
            B()
        ),
    ei = () =>
        y(
            {
                [b.zUn.NAME]: eD(j.t.VOtRSE, j.t.OK7B8P),
                [b.zUn.VOLUME]: eD(j.t.igrDBw, j.t.L5lDFB),
                [b.zUn.EMOJI_NAME]: eL(j.t.IIanaW, j.t.z4w4U1, j.t.V8Tfyc),
                [b.zUn.EMOJI_ID]: eL(j.t.ainxMD, j.t['2NPsYm'], j.t['8crtnp'])
            },
            B()
        ),
    es = () =>
        y(
            {
                [b.zUn.VERIFICATION_ENABLED]: (e) => (!0 === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ),
                [b.zUn.MANUAL_APPROVAL_ENABLED]: (e) => (!0 === e.newValue ? j.t.jzSvVV : j.t.WxyOtr)
            },
            B()
        ),
    ea = () => y({ [b.zUn.STATUS]: () => j.t.HyCSnJ }, B()),
    eo = () => ({
        [b.zUn.DESCRIPTION]: () => j.t.nsUZKS,
        [b.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgI,
        [b.zUn.CUSTOM_BANNER_HASH]: () => j.t['04b5KC'],
        [b.zUn.TRAITS]: () => j.t.dEy9WF,
        [b.zUn.GAME_APPLICATION_IDS]: () => j.t['8BOT39'],
        [b.zUn.VISIBILITY]: () => j.t.bCl1Eh,
        [b.zUn.SERVER_TAG]: eU(j.t.ix1dnZ, j.t['4LKpKS'])
    }),
    eu = {
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
            label: j.intl.string(j.t.QxEVcn),
            valueLabel: j.intl.string(j.t.an9Ry8)
        },
        {
            value: b.rsA.GUILD_UPDATE,
            label: j.intl.string(j.t['5INZa2'])
        },
        {
            value: b.rsA.CHANNEL_CREATE,
            label: j.intl.string(j.t['2uh4vL'])
        },
        {
            value: b.rsA.CHANNEL_UPDATE,
            label: j.intl.string(j.t.mGsBLS)
        },
        {
            value: b.rsA.CHANNEL_DELETE,
            label: j.intl.string(j.t.hCHzAg)
        },
        {
            value: b.rsA.CHANNEL_OVERWRITE_CREATE,
            label: j.intl.string(j.t['8TnAMD'])
        },
        {
            value: b.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: j.intl.string(j.t.Jqx0Bg)
        },
        {
            value: b.rsA.CHANNEL_OVERWRITE_DELETE,
            label: j.intl.string(j.t.gBXOr6)
        },
        {
            value: b.rsA.MEMBER_KICK,
            label: j.intl.string(j.t['Q1/hNz'])
        },
        {
            value: b.rsA.MEMBER_PRUNE,
            label: j.intl.string(j.t.tOTTjY)
        },
        {
            value: b.rsA.MEMBER_BAN_ADD,
            label: j.intl.string(j.t['NfPn+f'])
        },
        {
            value: b.rsA.MEMBER_BAN_REMOVE,
            label: j.intl.string(j.t.XCsGfH)
        },
        {
            value: b.rsA.MEMBER_UPDATE,
            label: j.intl.string(j.t['F/jmND'])
        },
        {
            value: b.rsA.MEMBER_ROLE_UPDATE,
            label: j.intl.string(j.t.zAveSE)
        },
        {
            value: b.rsA.MEMBER_MOVE,
            label: j.intl.string(j.t.QshteX)
        },
        {
            value: b.rsA.MEMBER_DISCONNECT,
            label: j.intl.string(j.t.Z45os7)
        },
        {
            value: b.rsA.BOT_ADD,
            label: j.intl.string(j.t.vuH24e)
        },
        {
            value: b.rsA.THREAD_CREATE,
            label: j.intl.string(j.t['+zl0DA'])
        },
        {
            value: b.rsA.THREAD_UPDATE,
            label: j.intl.string(j.t.rbIry8)
        },
        {
            value: b.rsA.THREAD_DELETE,
            label: j.intl.string(j.t.hFjNEB)
        },
        {
            value: b.rsA.ROLE_CREATE,
            label: j.intl.string(j.t.AbxKtr)
        },
        {
            value: b.rsA.ROLE_UPDATE,
            label: j.intl.string(j.t.t3Z6sb)
        },
        {
            value: b.rsA.ROLE_DELETE,
            label: j.intl.string(j.t.YsFpa2)
        },
        {
            value: b.rsA.ONBOARDING_PROMPT_CREATE,
            label: j.intl.string(j.t.ZV9tqa)
        },
        {
            value: b.rsA.ONBOARDING_PROMPT_UPDATE,
            label: j.intl.string(j.t.PcOdvb)
        },
        {
            value: b.rsA.ONBOARDING_PROMPT_DELETE,
            label: j.intl.string(j.t['+r33NT'])
        },
        {
            value: b.rsA.ONBOARDING_CREATE,
            label: j.intl.string(j.t.uDADdX)
        },
        {
            value: b.rsA.ONBOARDING_UPDATE,
            label: j.intl.string(j.t.J1H1ws)
        },
        {
            value: b.rsA.HOME_SETTINGS_CREATE,
            label: j.intl.string(j.t.Di4cvL)
        },
        {
            value: b.rsA.HOME_SETTINGS_UPDATE,
            label: j.intl.string(j.t.tzyrJC)
        },
        {
            value: b.rsA.INVITE_CREATE,
            label: j.intl.string(j.t['0BNJdX'])
        },
        {
            value: b.rsA.INVITE_UPDATE,
            label: j.intl.string(j.t['o++obW'])
        },
        {
            value: b.rsA.INVITE_DELETE,
            label: j.intl.string(j.t.iP40Aw)
        },
        {
            value: b.rsA.WEBHOOK_CREATE,
            label: j.intl.string(j.t['tBF4+f'])
        },
        {
            value: b.rsA.WEBHOOK_UPDATE,
            label: j.intl.string(j.t.eV3McH)
        },
        {
            value: b.rsA.WEBHOOK_DELETE,
            label: j.intl.string(j.t.AAL3Ky)
        },
        {
            value: b.rsA.EMOJI_CREATE,
            label: j.intl.string(j.t.RuWm0d)
        },
        {
            value: b.rsA.EMOJI_UPDATE,
            label: j.intl.string(j.t.WzdUY2)
        },
        {
            value: b.rsA.EMOJI_DELETE,
            label: j.intl.string(j.t.c3dK2N)
        },
        {
            value: b.rsA.MESSAGE_DELETE,
            label: j.intl.string(j.t.daTfXl)
        },
        {
            value: b.rsA.MESSAGE_BULK_DELETE,
            label: j.intl.string(j.t.nrBxen)
        },
        {
            value: b.rsA.MESSAGE_PIN,
            label: j.intl.string(j.t.MUldyM)
        },
        {
            value: b.rsA.MESSAGE_UNPIN,
            label: j.intl.string(j.t.n4zKhI)
        },
        {
            value: b.rsA.INTEGRATION_CREATE,
            label: j.intl.string(j.t['deNm8/'])
        },
        {
            value: b.rsA.INTEGRATION_UPDATE,
            label: j.intl.string(j.t.HT7Sfn)
        },
        {
            value: b.rsA.INTEGRATION_DELETE,
            label: j.intl.string(j.t['+kJ09v'])
        },
        {
            value: b.rsA.STICKER_CREATE,
            label: j.intl.string(j.t['3DzNjY'])
        },
        {
            value: b.rsA.STICKER_UPDATE,
            label: j.intl.string(j.t.tdhW5e)
        },
        {
            value: b.rsA.STICKER_DELETE,
            label: j.intl.string(j.t['+ZhGOj'])
        },
        {
            value: b.rsA.STAGE_INSTANCE_CREATE,
            label: j.intl.string(j.t.sPbjAw)
        },
        {
            value: b.rsA.STAGE_INSTANCE_UPDATE,
            label: j.intl.string(j.t.cW9LfH)
        },
        {
            value: b.rsA.STAGE_INSTANCE_DELETE,
            label: j.intl.string(j.t['U1r+yM'])
        },
        {
            value: b.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: j.intl.string(j.t.H81Zy8)
        },
        {
            value: b.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: j.intl.string(j.t.FM69l5)
        },
        {
            value: b.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: j.intl.string(j.t.Rq28Bg)
        },
        {
            value: b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: j.intl.string(j.t.iPdFOj)
        },
        {
            value: b.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: j.intl.string(j.t.gNq5z8)
        },
        {
            value: b.rsA.AUTO_MODERATION_RULE_CREATE,
            label: j.intl.string(j.t.f72Zqa)
        },
        {
            value: b.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: j.intl.string(j.t.XeqIio)
        },
        {
            value: b.rsA.AUTO_MODERATION_RULE_DELETE,
            label: j.intl.string(j.t.syAApa)
        },
        {
            value: b.rsA.GUILD_HOME_FEATURE_ITEM,
            label: j.intl.string(j.t.lhG5KC)
        },
        {
            value: b.rsA.GUILD_HOME_REMOVE_ITEM,
            label: j.intl.string(j.t.lRPRwc)
        },
        {
            value: b.rsA.SOUNDBOARD_SOUND_CREATE,
            label: j.intl.string(j.t.yoRi5u)
        },
        {
            value: b.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: j.intl.string(j.t.uKlG0d)
        },
        {
            value: b.rsA.SOUNDBOARD_SOUND_DELETE,
            label: j.intl.string(j.t.gq0iCQ)
        },
        {
            value: b.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: j.intl.string(j.t.rGr0YG)
        },
        {
            value: b.rsA.VOICE_CHANNEL_STATUS_DELETE,
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
    return null != eE(b.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj4) : null != (t = null == n ? void 0 : n.label) ? t : null;
}
let eA = {
    [E.J6.SECONDS]: (e) => j.intl.formatToPlainString(j.t.geSp4O, { seconds: e }),
    [E.J6.MINUTES]: (e) => j.intl.formatToPlainString(j.t.iXLF9f, { minutes: e }),
    [E.J6.HOURS]: (e) => j.intl.formatToPlainString(j.t.xCjYxM, { hours: e }),
    [E.J6.DAYS]: (e) => j.intl.formatToPlainString(j.t.k2UNz8, { days: e })
};
function eT(e) {
    let t = eE(b.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        n = ed(b.zUn.ROLES_ADD, e).length > 0,
        r = ed(b.zUn.ROLES_REMOVE, e).length > 0;
    if (null != t) {
        if ((null == t ? void 0 : t.newValue) != null) {
            let n = new Date(null == t ? void 0 : t.newValue).getTime() - L.default.extractTimestamp(e.id),
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
    else if (n) return j.intl.string(j.t['4GQqs7']);
    else if (r) return j.intl.string(j.t['8mQ6x8']);
    return null;
}
function eI(e) {
    let t = ed(b.zUn.ROLES_ADD, e),
        n = ed(b.zUn.ROLES_REMOVE, e),
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
        case b.rsA.GUILD_UPDATE:
            return j.t.LjZO39;
        case b.rsA.CHANNEL_CREATE:
            let t = null != e.changes ? e.changes.find((e) => e.key === b.zUn.TYPE) : null;
            if (null == t) throw Error('[AuditLog] Could not find type change for channel create');
            switch (t.newValue) {
                case b.d4z.GUILD_STAGE_VOICE:
                    return j.t['OKp4+v'];
                case b.d4z.GUILD_VOICE:
                    return j.t.NPOy4O;
                case b.d4z.GUILD_CATEGORY:
                    return j.t.T3KIj4;
                default:
                    return j.t.wrYNGx;
            }
        case b.rsA.CHANNEL_UPDATE:
            return j.t.nTYk6O;
        case b.rsA.CHANNEL_DELETE:
            return j.t.ynfvkp;
        case b.rsA.CHANNEL_OVERWRITE_CREATE:
            return j.t.l5Cu1d;
        case b.rsA.CHANNEL_OVERWRITE_UPDATE:
            return j.t.uhtbNT;
        case b.rsA.CHANNEL_OVERWRITE_DELETE:
            return j.t['HASt//'];
        case b.rsA.MEMBER_KICK:
            return j.t.B5hDZW;
        case b.rsA.MEMBER_PRUNE:
            return j.t.qKOZTE;
        case b.rsA.MEMBER_BAN_ADD:
            return j.t.XklUm5;
        case b.rsA.MEMBER_BAN_REMOVE:
            return j.t.o3Y6HB;
        case b.rsA.MEMBER_UPDATE:
            return j.t.pznhLC;
        case b.rsA.MEMBER_ROLE_UPDATE:
            return j.t.VngfiY;
        case b.rsA.MEMBER_MOVE:
            return j.t.Yt6NkZ;
        case b.rsA.MEMBER_DISCONNECT:
            return j.t.K4eCZ2;
        case b.rsA.BOT_ADD:
            return j.t.fWvX0N;
        case b.rsA.ROLE_CREATE:
            return j.t.UTLTx8;
        case b.rsA.ROLE_UPDATE:
            return j.t.NRbN19;
        case b.rsA.ROLE_DELETE:
            return j.t['4s63tb'];
        case b.rsA.INVITE_CREATE:
            return j.t.YHOXW1;
        case b.rsA.INVITE_UPDATE:
            return j.t.ja3kGR;
        case b.rsA.INVITE_DELETE:
            return j.t['3n/iWl'];
        case b.rsA.WEBHOOK_CREATE:
            return j.t.MhYhio;
        case b.rsA.WEBHOOK_UPDATE:
            return j.t['6GTlWF'];
        case b.rsA.WEBHOOK_DELETE:
            return j.t.in0VjY;
        case b.rsA.EMOJI_CREATE:
            return j.t['7vekRE'];
        case b.rsA.EMOJI_UPDATE:
            return j.t.IsCKfn;
        case b.rsA.EMOJI_DELETE:
            return j.t.JnUaVF;
        case b.rsA.STICKER_CREATE:
            return j.t.DRZifn;
        case b.rsA.STICKER_UPDATE:
            return j.t.bhujGR;
        case b.rsA.STICKER_DELETE:
            return j.t.rGEP9f;
        case b.rsA.MESSAGE_DELETE:
            return j.t['HPkD+P'];
        case b.rsA.MESSAGE_BULK_DELETE:
            return j.t['3RIvLC'];
        case b.rsA.MESSAGE_PIN:
            return j.t.Yna7Ex;
        case b.rsA.MESSAGE_UNPIN:
            return j.t.NCxXUV;
        case b.rsA.INTEGRATION_CREATE:
            return j.t.HYvCb2;
        case b.rsA.INTEGRATION_UPDATE:
            return j.t.ibCCOT;
        case b.rsA.INTEGRATION_DELETE:
            return j.t['8zScWV'];
        case b.rsA.STAGE_INSTANCE_CREATE:
            return j.t['n7x/DA'];
        case b.rsA.STAGE_INSTANCE_UPDATE:
            return j.t['0hQYU1'];
        case b.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return j.t['Oi/in5'];
            return j.t['7ZIFm5'];
        case b.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return j.t.S7k52t;
        case b.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return j.t.ebTK19;
        case b.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return j.t['/ARPKS'];
        case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return j.t['8qCI39'];
        case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return j.t.zYb2dX;
        case b.rsA.THREAD_CREATE:
            let n = null != e.changes ? e.changes.find((e) => e.key === b.zUn.TYPE) : null;
            if (null == n) throw Error('[AuditLog] Could not find type change for thread create');
            switch (n.newValue) {
                case b.d4z.PRIVATE_THREAD:
                    return j.t['Br0y5+'];
                case b.d4z.ANNOUNCEMENT_THREAD:
                    return j.t['6uaMmJ'];
                default:
                    return j.t['2cxQ7O'];
            }
        case b.rsA.THREAD_UPDATE:
            return j.t.PSsy4u;
        case b.rsA.THREAD_DELETE:
            return j.t.s3Khn5;
        case b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return j.t.uzCqBg;
        case b.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return j.t.NqWv2N;
        case b.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var r;
            if ((null == (r = e.options) ? void 0 : r.auto_moderation_rule_trigger_type) === x.fX.USER_PROFILE.toString()) return j.t.YQsjen;
            return j.t.SD0PwM;
        case b.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return j.t.Vk4Twc;
        case b.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return j.t['/W5u5u'];
        case b.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return j.t.ONvWys;
        case b.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return j.t.ryGLk5;
        case b.rsA.AUTO_MODERATION_RULE_CREATE:
            return j.t.NKljj4;
        case b.rsA.AUTO_MODERATION_RULE_UPDATE:
            return j.t['3wEA9v'];
        case b.rsA.AUTO_MODERATION_RULE_DELETE:
            return j.t.umua3t;
        case b.rsA.ONBOARDING_PROMPT_CREATE:
            return j.t['/8A1g4'];
        case b.rsA.ONBOARDING_PROMPT_UPDATE:
            return j.t.ArIrWF;
        case b.rsA.ONBOARDING_PROMPT_DELETE:
            return j.t.IuBTam;
        case b.rsA.ONBOARDING_CREATE:
            return j.t.wDaq39;
        case b.rsA.ONBOARDING_UPDATE:
            return j.t['yONu/v'];
        case b.rsA.HOME_SETTINGS_CREATE:
            return j.t.dSdCjI;
        case b.rsA.HOME_SETTINGS_UPDATE:
            return j.t.XHE8qq;
        case b.rsA.GUILD_HOME_FEATURE_ITEM:
            let l = null != e.changes ? e.changes.find((e) => e.key === b.zUn.ENTITY_TYPE) : null;
            if (null == l) return j.t['UZ+U3N'];
            switch (l.newValue) {
                case a.w.MESSAGE:
                    return j.t['PyEa+P'];
                case a.w.FORUM_POST:
                    return j.t.hCuAb2;
                default:
                    return j.t['UZ+U3N'];
            }
        case b.rsA.GUILD_HOME_REMOVE_ITEM:
            return j.t.kPReur;
        case b.rsA.SOUNDBOARD_SOUND_CREATE:
            return j.t['0PD83d'];
        case b.rsA.SOUNDBOARD_SOUND_UPDATE:
            return j.t.CM8n19;
        case b.rsA.SOUNDBOARD_SOUND_DELETE:
            return j.t['kVz4//'];
        case b.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return j.t.MWjnU1;
        case b.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return j.t.aS8Krq;
        case b.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
            return j.t.NUKUb2;
        case b.rsA.GUILD_PROFILE_UPDATE:
            return j.t.Ed6hFx;
        case b.rsA.GUILD_MIGRATE_PIN_PERMISSION:
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
function eN(e) {
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
        case b.Plq.CREATE_INSTANT_INVITE:
            return j.intl.string(j.t.zJrgTE);
        case b.Plq.KICK_MEMBERS:
            return j.intl.string(j.t.pBNv6u);
        case b.Plq.BAN_MEMBERS:
            return j.intl.string(j.t.oTBA7O);
        case b.Plq.ADMINISTRATOR:
            return j.intl.string(j.t.PGvZqa);
        case b.Plq.MANAGE_CHANNELS:
            if (t.targetType === b.KFR.CHANNEL || t.targetType === b.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15O);
            return j.intl.string(j.t['9qLtWl']);
        case b.Plq.MANAGE_GUILD:
            return j.intl.string(j.t.QZRcfH);
        case b.Plq.VIEW_GUILD_ANALYTICS:
            return j.intl.string(j.t.rQJBEx);
        case b.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return j.intl.string(j.t['0lTLTk']);
        case b.Plq.CHANGE_NICKNAME:
            return j.intl.string(j.t.dilOFx);
        case b.Plq.MANAGE_NICKNAMES:
            return j.intl.string(j.t['t+Ct5+']);
        case b.Plq.MANAGE_ROLES:
            return j.intl.string(j.t['C8d+oK']);
        case b.Plq.MANAGE_WEBHOOKS:
            return j.intl.string(j.t['/ADKmJ']);
        case b.Plq.CREATE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.HarVuL);
        case b.Plq.MANAGE_GUILD_EXPRESSIONS:
            return j.intl.string(j.t.bbuXIi);
        case b.Plq.VIEW_AUDIT_LOG:
            return j.intl.string(j.t.fZgLpK);
        case b.Plq.VIEW_CHANNEL:
            if (t.targetType === b.KFR.CHANNEL || t.targetType === b.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t['W/A4Qk']);
            return j.intl.string(j.t.uV83ys);
        case b.Plq.SEND_MESSAGES:
            return j.intl.string(j.t.T32rkJ);
        case b.Plq.SEND_TTS_MESSAGES:
            return j.intl.string(j.t.Mg7bkp);
        case b.Plq.USE_APPLICATION_COMMANDS:
            return j.intl.string(j.t.shbR1d);
        case b.Plq.MANAGE_MESSAGES:
            return j.intl.string(j.t['6lU9xM']);
        case b.Plq.EMBED_LINKS:
            return j.intl.string(j.t['969dEB']);
        case b.Plq.ATTACH_FILES:
            return j.intl.string(j.t['3AS4UF']);
        case b.Plq.READ_MESSAGE_HISTORY:
            return j.intl.string(j.t.l9ufaW);
        case b.Plq.MENTION_EVERYONE:
            return j.intl.string(j.t.Y78KGB);
        case b.Plq.USE_EXTERNAL_EMOJIS:
            return j.intl.string(j.t.BpBGZW);
        case b.Plq.USE_EXTERNAL_STICKERS:
            return j.intl.string(j.t['UeRs+f']);
        case b.Plq.ADD_REACTIONS:
            return j.intl.string(j.t.yEoJAg);
        case b.Plq.CONNECT:
            return j.intl.string(j.t.S0W8Z2);
        case b.Plq.SPEAK:
            return j.intl.string(j.t['8w1tIS']);
        case b.Plq.MUTE_MEMBERS:
            return j.intl.string(j.t['8EI309']);
        case b.Plq.DEAFEN_MEMBERS:
            return j.intl.string(j.t['9L47Fh']);
        case b.Plq.MOVE_MEMBERS:
            return j.intl.string(j.t.YtjJPT);
        case b.Plq.USE_VAD:
            return j.intl.string(j.t['08zAV1']);
        case b.Plq.PRIORITY_SPEAKER:
            return j.intl.string(j.t.BVK71t);
        case b.Plq.STREAM:
            return j.intl.string(j.t.FlNoSU);
        case b.Plq.REQUEST_TO_SPEAK:
            return j.intl.string(j.t['5kicT0']);
        case b.Plq.CREATE_EVENTS:
            return j.intl.string(j.t.qyjZub);
        case b.Plq.MANAGE_EVENTS:
            return j.intl.string(j.t.HIgA5e);
        case b.Plq.CREATE_PUBLIC_THREADS:
            return j.intl.string(j.t['25rKnZ']);
        case b.Plq.CREATE_PRIVATE_THREADS:
            return j.intl.string(j.t.QwbTSU);
        case b.Plq.SEND_MESSAGES_IN_THREADS:
            return j.intl.string(j.t.fTE74u);
        case b.Plq.MANAGE_THREADS:
            return j.intl.string(j.t.kEqgr6);
        case b.Plq.MODERATE_MEMBERS:
            return j.intl.string(j.t['+RL6p6']);
        case b.Plq.SET_VOICE_CHANNEL_STATUS:
            return j.intl.string(j.t.VBwkUV);
        case b.Plq.SEND_POLLS:
            return j.intl.string(j.t.UMQ7W1);
        case b.Plq.USE_EXTERNAL_APPS:
            return j.intl.string(j.t.TtA5rK);
        case b.Plq.PIN_MESSAGES:
            return j.intl.string(j.t.Y5BI39);
    }
    return null;
}
function ef(e, t) {
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
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => R.Z.getChannel(e),
                                (e) => (0, _.F6)(e, h.default, C.Z, !0)
                            );
                        case b.KFR.USER:
                            return eh(
                                e,
                                b.zUn.NICK,
                                (e) => h.default.getUser(e),
                                (e) => e
                            );
                        case b.KFR.ROLE:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => S.Z.getRole(t.id, e),
                                (e) => e.name
                            );
                        case b.KFR.ONBOARDING_PROMPT:
                            let n = eh(
                                e,
                                b.zUn.ID,
                                (e) => g.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null == n || '' === n ? j.intl.string(j.t.ZNQyiY) : n;
                        case b.KFR.GUILD_ONBOARDING:
                        case b.KFR.GUILD_MEMBER_VERIFICATION:
                            return t;
                        case b.KFR.INVITE:
                            return eh(e, b.zUn.CODE, b.VqG);
                        case b.KFR.INTEGRATION:
                            return eh(
                                e,
                                b.zUn.TYPE,
                                (e) => v.Z.integrations.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.WEBHOOK:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => v.Z.webhooks.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.EMOJI:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => T.ZP.getGuildEmoji(t.id).find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.STICKER:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => O.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case b.KFR.STAGE_INSTANCE:
                            return eh(
                                e,
                                b.zUn.TOPIC,
                                (e) => {
                                    var n;
                                    return null == (n = Object.values(N.Z.getStageInstancesByGuild(t.id))) ? void 0 : n.find((t) => t.id === e);
                                },
                                (e) => e.topic
                            );
                        case b.KFR.GUILD_SCHEDULED_EVENT:
                        case b.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => v.Z.guildScheduledEvents.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.THREAD:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => v.Z.threads.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let t = v.Z.integrations.find((t) => {
                                    var n;
                                    return (null == (n = t.application) ? void 0 : n.id) === e.targetId;
                                });
                                if (null != t) return t.name;
                                return e.targetId;
                            }
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => v.Z.applicationCommands.find((t) => t.id === e),
                                (e) => {
                                    let t = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === d.yU.CHAT ? '/\u2060'.concat(t) : t;
                                }
                            );
                        case b.KFR.AUTO_MODERATION_RULE:
                            return eh(
                                e,
                                b.zUn.NAME,
                                (e) => v.Z.automodRules.find((t) => t.id === e),
                                (e) => e.name
                            );
                        case b.KFR.GUILD_SOUNDBOARD:
                            return eh(e, b.zUn.NAME, b.VqG);
                        case b.KFR.HOME_SETTINGS:
                            return eh(
                                e,
                                b.zUn.GUILD_ID,
                                (e) => m.Z.getSettings(e),
                                () => j.intl.string(j.t.VbpLyc),
                                t.id
                            );
                        case b.KFR.VOICE_CHANNEL_STATUS:
                            return eh(
                                e,
                                b.zUn.STATUS,
                                (e) => R.Z.getChannel(e),
                                (e) => (0, _.F6)(e, h.default, C.Z, !0)
                            );
                        default:
                            return (w.warn('Unknown targetType for log', e), null);
                    }
                })(e, t),
                i = h.default.getUser(e.userId);
            if (null != r || [b.rsA.MEMBER_PRUNE, b.rsA.MEMBER_DISCONNECT, b.rsA.MEMBER_MOVE, b.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, b.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', i)).set('target', r)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let n = y({}, e.options);
                                switch (e.options.type) {
                                    case b.jwA.USER:
                                        n.subtarget = ep(
                                            e.options.id,
                                            (e) => h.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case b.jwA.ROLE:
                                        n.subtarget = ep(e.options.role_name, b.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (n.channel = eh(
                                            e,
                                            '',
                                            (e) => R.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var t;
                                    let r = v.Z.guildScheduledEvents.find((t) => t.id === e.targetId),
                                        l = null == r ? void 0 : r.guild_scheduled_event_exceptions.find((t) => t.event_exception_id === e.options.event_exception_id);
                                    n.subtarget = (0, p.vc)(s()(L.default.extractTimestamp(null != (t = null == l ? void 0 : l.event_exception_id) ? t : '0')), 'LL');
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
                            if (t.action === b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let t = e.newValue || e.oldValue;
                                switch (t.type) {
                                    case b.ecB.ROLE:
                                        e.subtarget = ep(
                                            t.id,
                                            (e) => S.Z.getRole(n.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case b.ecB.USER:
                                        e.subtarget = ep(
                                            t.id,
                                            (e) => h.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case b.ecB.CHANNEL:
                                        t.id === l()(n.id).subtract(1).toString()
                                            ? (e.subtarget = j.intl.string(j.t.MSYhgo))
                                            : (e.subtarget = ep(
                                                  t.id,
                                                  (e) => R.Z.getChannel(e),
                                                  (e) => (0, _.F6)(e, h.default, C.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case b.zUn.OWNER_ID:
                                    return eC(e, (e) => h.default.getUser(e));
                                case b.zUn.CHANNEL_ID:
                                case b.zUn.AFK_CHANNEL_ID:
                                case b.zUn.SYSTEM_CHANNEL_ID:
                                case b.zUn.RULES_CHANNEL_ID:
                                case b.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eC(
                                        e,
                                        (e) => R.Z.getChannel(e),
                                        (e) => (0, _.F6)(e, h.default, C.Z, !0)
                                    );
                                case b.zUn.AFK_TIMEOUT:
                                    return eC(e, (e) => e / 60);
                                case b.zUn.BITRATE:
                                    return eC(e, (e) => e / 1000);
                                case b.zUn.COLOR:
                                    return eC(e, (e) => (0, c.Rf)(e).toUpperCase());
                                case b.zUn.THEME_COLORS:
                                    return eC(e, (e) => ''.concat((0, c.Rf)(e[0]).toUpperCase(), ', ').concat((0, c.Rf)(e[1]).toUpperCase()));
                                case b.zUn.MAX_AGE:
                                    return eC(e, (e) => {
                                        let t = U.ZP.getMaxAgeOptions.find((t) => {
                                            let { value: n } = t;
                                            return e === n;
                                        });
                                        return t ? t.label : e;
                                    });
                                case b.zUn.PERMISSIONS: {
                                    let t = [],
                                        { added: n, removed: r } = eR(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let e = new f.ms(b.zUn.PERMISSIONS_GRANTED, null, n);
                                        t.push(e);
                                    }
                                    if (r.length > 0) {
                                        let e = new f.ms(b.zUn.PERMISSIONS_DENIED, null, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case b.zUn.PERMISSIONS_GRANTED:
                                case b.zUn.PERMISSIONS_DENIED: {
                                    let t = [],
                                        { added: n, removed: r } = eR(e.oldValue, e.newValue);
                                    if (n.length > 0) {
                                        let r = new f.ms(e.key, null, n);
                                        t.push(r);
                                    }
                                    if (r.length > 0) {
                                        let e = new f.ms(b.zUn.PERMISSIONS_RESET, r, r);
                                        t.push(e);
                                    }
                                    return t;
                                }
                                case b.zUn.FLAGS: {
                                    let t = [],
                                        { added: n, removed: r } = (function (e, t) {
                                            let n = 'number' == typeof e ? e : 0,
                                                r = 'number' == typeof t ? t : 0,
                                                l = D.Ge(r, n),
                                                i = D.Ge(n, r),
                                                s = [],
                                                a = [];
                                            for (let e in M.zZ) {
                                                let t = M.zZ[e];
                                                (D.yE(l, t) && s.push(t), D.yE(i, t) && a.push(t));
                                            }
                                            return {
                                                added: s,
                                                removed: a
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
                                case b.zUn.PREFERRED_LOCALE:
                                    return eC(e, (e) => {
                                        let t = (0, j.getAvailableLocales)().find((t) => t.value === e);
                                        return null != t ? t.name : null;
                                    });
                                case b.zUn.VIDEO_QUALITY_MODE:
                                    return eC(e, (e) => (e === b.Ucd.FULL ? j.intl.string(j.t['7jOoJC']) : j.intl.string(j.t.jjKYpq)));
                                case b.zUn.SYSTEM_CHANNEL_FLAGS:
                                    let r = {
                                            [b.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                            [b.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                            [b.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                            [b.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                        },
                                        i = [];
                                    return (
                                        Object.values(b.xmn).forEach((t) => {
                                            let n = (e.oldValue & t) === t,
                                                l = (e.newValue & t) === t;
                                            if (n === l) return;
                                            let s = new f.ms(r[t], !n, !l);
                                            i.push(s);
                                        }),
                                        i
                                    );
                                case b.zUn.AUTO_MODERATION_ACTIONS:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE)
                                        return eC(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(I.ZF).join(', ')
                                        );
                                    break;
                                case b.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eC(e, I.YN);
                                    break;
                                case b.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eC(e, I.Ar);
                                    break;
                                case b.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eC(e, (e) => (null != e && 'object' == typeof e ? (null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, { newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e)) : e));
                                    break;
                                case b.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case b.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case b.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case b.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case b.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case b.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eC(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case b.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE)
                                        return eC(
                                            e,
                                            (e) =>
                                                e
                                                    .map(R.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, _.F6)(e, h.default, C.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.intl.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case b.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (t.targetType === b.KFR.AUTO_MODERATION_RULE)
                                        return eC(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => S.Z.getRole(n.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : j.intl.string(j.t['K/EdV1']))
                                        );
                                    break;
                                case b.zUn.AVAILABLE_TAGS:
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
                                            for (let e in s) if (null == i[e]) return new f.ms(b.zUn.AVAILABLE_TAG_ADD, null, eS(s[e]));
                                        }
                                        if (r.length > l.length) {
                                            for (let e in i) if (null == s[e]) return new f.ms(b.zUn.AVAILABLE_TAG_DELETE, null, eS(i[e]));
                                        }
                                        for (let e in i) {
                                            let t = i[e],
                                                n = s[e];
                                            if ((null == n ? void 0 : n.name) !== t.name || (null == n ? void 0 : n.emoji_id) !== t.emoji_id || (null == n ? void 0 : n.emoji_name) !== t.emoji_name) return new f.ms(b.zUn.AVAILABLE_TAG_EDIT, eS(t), eS(n));
                                        }
                                        return e;
                                    })(e);
                                case b.zUn.SCHEDULED_START_TIME:
                                case b.zUn.SCHEDULED_END_TIME:
                                    return eC(e, (e) => (0, p.vc)(s()(new Date(e)), 'LLLL'));
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
function eR(e, t) {
    let n = u.vB('string' == typeof e ? e : 0),
        r = u.vB('string' == typeof t ? t : 0),
        l = u.Od(r, n),
        i = u.Od(n, r),
        s = [],
        a = [];
    for (let e in b.Plq) {
        let t = b.Plq[e];
        (u.e$(l, t) && s.push(t), u.e$(i, t) && a.push(t));
    }
    return {
        added: s,
        removed: a
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
function eC(e, t, n) {
    let r = e.newValue,
        l = e.oldValue;
    return (null != e.newValue && ((r = t(e.newValue)), null != n && null != r && (r = n(r))), null != e.oldValue && ((l = t(e.oldValue)), null != n && null != l && (l = n(l))), new f.ms(e.key, l || e.oldValue, r || e.newValue));
}
function eh(e, t, n, r, l) {
    let i = null,
        s = n((l = null != l ? l : e.targetId));
    if ((null != s && null != r && (i = r(s)), null == i)) {
        let t = v.Z.deletedTargets[e.targetType];
        null != t && null != t[l] && (i = t[l]);
    }
    if (null == i && null != e.changes) {
        let n = e.changes.find((e) => e.key === t);
        null != n && (i = n.newValue || n.oldValue);
    }
    return null != i ? i : l;
}
function ep(e, t, n) {
    let r = e,
        l = t(e);
    return (null != l && null != n && (r = n(l)), r);
}
function eD(e, t) {
    return (n) => (null == n.oldValue ? e : t);
}
function eU(e, t) {
    return (n) => (null == n.newValue ? e : t);
}
function eL(e, t, n, r) {
    return (l) => (null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r);
}
function ev(e, t) {
    return (n) => (n.newValue ? e : t);
}
function eb(e) {
    return (t) => e[t.newValue];
}
function eM(e, t) {
    return (n) => {
        var r;
        return null != (r = e[n.newValue]) ? r : t;
    };
}
