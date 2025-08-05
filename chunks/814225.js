(n.d(t, {
    P3: () => _,
    ZK: () => f,
    en: () => h
}),
    n(704826),
    n(35282),
    n(388685));
var r = n(913527),
    i = n.n(r),
    a = n(114858);
(n(358085), n(73346));
var o = n(981631),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    u = {},
    d = Object.freeze(
        (function (e) {
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
                        l(e, t, n[t]);
                    }));
            }
            return e;
        })({ ALL: -1 }, o.EKQ)
    );
function f(e) {
    let t = (0, a.LX)(e, { path: o.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug') });
    return null != t ? t.params.skuId : null;
}
function _(e) {
    switch (e) {
        case o.EKQ.ACTION:
            return s.intl.string(s.t['1o2/IC']);
        case o.EKQ.ACTION_RPG:
            return s.intl.string(s.t.e9Yo4O);
        case o.EKQ.BRAWLER:
            return s.intl.string(s.t.WCkEjY);
        case o.EKQ.HACK_AND_SLASH:
            return s.intl.string(s.t.xQ4VmJ);
        case o.EKQ.PLATFORMER:
            return s.intl.string(s.t['WA318/']);
        case o.EKQ.STEALTH:
            return s.intl.string(s.t['6UPFd3']);
        case o.EKQ.SURVIVAL:
            return s.intl.string(s.t.SVPCt7);
        case o.EKQ.ADVENTURE:
            return s.intl.string(s.t['15p8oq']);
        case o.EKQ.ACTION_ADVENTURE:
            return s.intl.string(s.t.AxkUBg);
        case o.EKQ.METROIDVANIA:
            return s.intl.string(s.t.Iwr38v);
        case o.EKQ.OPEN_WORLD:
            return s.intl.string(s.t['2HRHJC']);
        case o.EKQ.PSYCHOLOGICAL_HORROR:
            return s.intl.string(s.t['/IwK3t']);
        case o.EKQ.SANDBOX:
            return s.intl.string(s.t['2+Vu4e']);
        case o.EKQ.SURVIVAL_HORROR:
            return s.intl.string(s.t.CCzRiI);
        case o.EKQ.VISUAL_NOVEL:
            return s.intl.string(s.t.FE7rnp);
        case o.EKQ.DRIVING_RACING:
            return s.intl.string(s.t.ErzgcX);
        case o.EKQ.VEHICULAR_COMBAT:
            return s.intl.string(s.t.YQHhoq);
        case o.EKQ.MASSIVELY_MULTIPLAYER:
            return s.intl.string(s.t['5CNg1t']);
        case o.EKQ.MMORPG:
            return s.intl.string(s.t.c4NuOz);
        case o.EKQ.ROLE_PLAYING:
            return s.intl.string(s.t.yayVgo);
        case o.EKQ.DUNGEON_CRAWLER:
            return s.intl.string(s.t.qicemZ);
        case o.EKQ.ROGUELIKE:
            return s.intl.string(s.t.zWzaCg);
        case o.EKQ.SHOOTER:
            return s.intl.string(s.t['+pk6sb']);
        case o.EKQ.LIGHT_GUN:
            return s.intl.string(s.t['TDS96+']);
        case o.EKQ.SHOOT_EM_UP:
            return s.intl.string(s.t.wltDUF);
        case o.EKQ.FPS:
            return s.intl.string(s.t.olTaq6);
        case o.EKQ.DUAL_JOYSTICK_SHOOTER:
            return s.intl.string(s.t['SN+NS0']);
        case o.EKQ.SIMULATION:
            return s.intl.string(s.t.sxMPdn);
        case o.EKQ.FLIGHT_SIMULATOR:
            return s.intl.string(s.t.Q7msr6);
        case o.EKQ.TRAIN_SIMULATOR:
            return s.intl.string(s.t.ZtECf3);
        case o.EKQ.LIFE_SIMULATOR:
            return s.intl.string(s.t.byt5Fh);
        case o.EKQ.FISHING:
            return s.intl.string(s.t.BKwiwc);
        case o.EKQ.SPORTS:
            return s.intl.string(s.t.O0B7XF);
        case o.EKQ.BASEBALL:
            return s.intl.string(s.t['jPYb//']);
        case o.EKQ.BASKETBALL:
            return s.intl.string(s.t['o+D1Bg']);
        case o.EKQ.BILLIARDS:
            return s.intl.string(s.t.PJ5o4O);
        case o.EKQ.BOWLING:
            return s.intl.string(s.t['82afJy']);
        case o.EKQ.BOXING:
            return s.intl.string(s.t.DQvfen);
        case o.EKQ.FOOTBALL:
            return s.intl.string(s.t.slOYkp);
        case o.EKQ.GOLF:
            return s.intl.string(s.t.aeQPlJ);
        case o.EKQ.HOCKEY:
            return s.intl.string(s.t.g7oe5e);
        case o.EKQ.SKATEBOARDING_SKATING:
            return s.intl.string(s.t.yBDEPz);
        case o.EKQ.SNOWBOARDING_SKIING:
            return s.intl.string(s.t.GVaAcn);
        case o.EKQ.SOCCER:
            return s.intl.string(s.t.KPznxs);
        case o.EKQ.TRACK_FIELD:
            return s.intl.string(s.t.hJ62Q0);
        case o.EKQ.SURFING_WAKEBOARDING:
            return s.intl.string(s.t.PSh0CQ);
        case o.EKQ.WRESTLING:
            return s.intl.string(s.t['3y9hAQ']);
        case o.EKQ.STRATEGY:
            return s.intl.string(s.t.KovTDw);
        case o.EKQ.FOUR_X:
            return s.intl.string(s.t['19h4dX']);
        case o.EKQ.ARTILLERY:
            return s.intl.string(s.t.sBqLsL);
        case o.EKQ.RTS:
            return s.intl.string(s.t.yS4ddn);
        case o.EKQ.TOWER_DEFENSE:
            return s.intl.string(s.t.SULyIC);
        case o.EKQ.TURN_BASED_STRATEGY:
            return s.intl.string(s.t.VDsbrq);
        case o.EKQ.WARGAME:
            return s.intl.string(s.t.YDCIrK);
        case o.EKQ.MOBA:
            return s.intl.string(s.t.i1m1t7);
        case o.EKQ.FIGHTING:
            return s.intl.string(s.t.KepcSE);
        case o.EKQ.PUZZLE:
            return s.intl.string(s.t.rm7Ggo);
        case o.EKQ.CARD_GAME:
            return s.intl.string(s.t.kX85v7);
        case o.EKQ.EDUCATION:
            return s.intl.string(s.t['klIi6+']);
        case o.EKQ.FITNESS:
            return s.intl.string(s.t.GOaaFR);
        case o.EKQ.GAMBLING:
            return s.intl.string(s.t['X8/Ee3']);
        case o.EKQ.MUSIC_RHYTHM:
            return s.intl.string(s.t.qPgrg4);
        case o.EKQ.PARTY_MINI_GAME:
            return s.intl.string(s.t.diBclJ);
        case o.EKQ.PINBALL:
            return s.intl.string(s.t['1+ott7']);
        case o.EKQ.TRIVIA_BOARD_GAME:
            return s.intl.string(s.t.aLlxjI);
        case o.EKQ.TACTICAL:
            return s.intl.string(s.t.LRPgbm);
        case o.EKQ.INDIE:
            return s.intl.string(s.t.hz9Xvr);
        case o.EKQ.ARCADE:
            return s.intl.string(s.t.Sbxows);
        case o.EKQ.POINT_AND_CLICK:
            return s.intl.string(s.t.vcerEh);
        default:
            return s.intl.string(s.t['9b4eUl']);
    }
}
Object.keys(d).forEach((e) => {
    let t = e.toLowerCase().replace(/_/g, '-'),
        n = d[e];
    ((c[t] = n), (u[n] = t));
});
let p = [
    ['YYYY-MM-DD', 'MMMM DD, Y'],
    ['YYYY-MM', 'MMMM Y'],
    ['MM-DD', 'MMMM DD'],
    ['MM', 'MMMM'],
    ['YYYY', 'Y']
];
function h(e) {
    let { preorderReleaseAt: t, preorderApproximateReleaseDate: n } = e;
    if (null != t) return t.format('MMMM DD');
    if (null == n) return null;
    for (let e = 0; e < p.length; e++) {
        let [t, r] = p[e],
            a = i()(n, t, !0);
        if (a.isValid()) return a.format(r);
    }
    return n;
}
