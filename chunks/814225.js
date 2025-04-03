r.d(t, {
    P3: () => p,
    ZK: () => d,
    en: () => m
}),
    r(757143),
    r(301563),
    r(47120);
var n = r(913527),
    a = r.n(n);
if (12633 == r.j) var o = r(512969);
r(358085), r(73346);
var i = r(981631),
    l = r(388032);
let s = {},
    c = {},
    u = Object.freeze(
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({ ALL: -1 }, i.EKQ)
    );
function d(e) {
    let t = (0, o.LX)(e, { path: i.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug') });
    return null != t ? t.params.skuId : null;
}
function p(e) {
    switch (e) {
        case i.EKQ.ACTION:
            return l.NW.string(l.t['1o2/IC']);
        case i.EKQ.ACTION_RPG:
            return l.NW.string(l.t.e9Yo4O);
        case i.EKQ.BRAWLER:
            return l.NW.string(l.t.WCkEjY);
        case i.EKQ.HACK_AND_SLASH:
            return l.NW.string(l.t.xQ4VmJ);
        case i.EKQ.PLATFORMER:
            return l.NW.string(l.t['WA318/']);
        case i.EKQ.STEALTH:
            return l.NW.string(l.t['6UPFd3']);
        case i.EKQ.SURVIVAL:
            return l.NW.string(l.t.SVPCt7);
        case i.EKQ.ADVENTURE:
            return l.NW.string(l.t['15p8oq']);
        case i.EKQ.ACTION_ADVENTURE:
            return l.NW.string(l.t.AxkUBg);
        case i.EKQ.METROIDVANIA:
            return l.NW.string(l.t.Iwr38v);
        case i.EKQ.OPEN_WORLD:
            return l.NW.string(l.t['2HRHJC']);
        case i.EKQ.PSYCHOLOGICAL_HORROR:
            return l.NW.string(l.t['/IwK3t']);
        case i.EKQ.SANDBOX:
            return l.NW.string(l.t['2+Vu4e']);
        case i.EKQ.SURVIVAL_HORROR:
            return l.NW.string(l.t.CCzRiI);
        case i.EKQ.VISUAL_NOVEL:
            return l.NW.string(l.t.FE7rnp);
        case i.EKQ.DRIVING_RACING:
            return l.NW.string(l.t.ErzgcX);
        case i.EKQ.VEHICULAR_COMBAT:
            return l.NW.string(l.t.YQHhoq);
        case i.EKQ.MASSIVELY_MULTIPLAYER:
            return l.NW.string(l.t['5CNg1t']);
        case i.EKQ.MMORPG:
            return l.NW.string(l.t.c4NuOz);
        case i.EKQ.ROLE_PLAYING:
            return l.NW.string(l.t.yayVgo);
        case i.EKQ.DUNGEON_CRAWLER:
            return l.NW.string(l.t.qicemZ);
        case i.EKQ.ROGUELIKE:
            return l.NW.string(l.t.zWzaCg);
        case i.EKQ.SHOOTER:
            return l.NW.string(l.t['+pk6sb']);
        case i.EKQ.LIGHT_GUN:
            return l.NW.string(l.t['TDS96+']);
        case i.EKQ.SHOOT_EM_UP:
            return l.NW.string(l.t.wltDUF);
        case i.EKQ.FPS:
            return l.NW.string(l.t.olTaq6);
        case i.EKQ.DUAL_JOYSTICK_SHOOTER:
            return l.NW.string(l.t['SN+NS0']);
        case i.EKQ.SIMULATION:
            return l.NW.string(l.t.sxMPdn);
        case i.EKQ.FLIGHT_SIMULATOR:
            return l.NW.string(l.t.Q7msr6);
        case i.EKQ.TRAIN_SIMULATOR:
            return l.NW.string(l.t.ZtECf3);
        case i.EKQ.LIFE_SIMULATOR:
            return l.NW.string(l.t.byt5Fh);
        case i.EKQ.FISHING:
            return l.NW.string(l.t.BKwiwc);
        case i.EKQ.SPORTS:
            return l.NW.string(l.t.O0B7XF);
        case i.EKQ.BASEBALL:
            return l.NW.string(l.t['jPYb//']);
        case i.EKQ.BASKETBALL:
            return l.NW.string(l.t['o+D1Bg']);
        case i.EKQ.BILLIARDS:
            return l.NW.string(l.t.PJ5o4O);
        case i.EKQ.BOWLING:
            return l.NW.string(l.t['82afJy']);
        case i.EKQ.BOXING:
            return l.NW.string(l.t.DQvfen);
        case i.EKQ.FOOTBALL:
            return l.NW.string(l.t.slOYkp);
        case i.EKQ.GOLF:
            return l.NW.string(l.t.aeQPlJ);
        case i.EKQ.HOCKEY:
            return l.NW.string(l.t.g7oe5e);
        case i.EKQ.SKATEBOARDING_SKATING:
            return l.NW.string(l.t.yBDEPz);
        case i.EKQ.SNOWBOARDING_SKIING:
            return l.NW.string(l.t.GVaAcn);
        case i.EKQ.SOCCER:
            return l.NW.string(l.t.KPznxs);
        case i.EKQ.TRACK_FIELD:
            return l.NW.string(l.t.hJ62Q0);
        case i.EKQ.SURFING_WAKEBOARDING:
            return l.NW.string(l.t.PSh0CQ);
        case i.EKQ.WRESTLING:
            return l.NW.string(l.t['3y9hAQ']);
        case i.EKQ.STRATEGY:
            return l.NW.string(l.t.KovTDw);
        case i.EKQ.FOUR_X:
            return l.NW.string(l.t['19h4dX']);
        case i.EKQ.ARTILLERY:
            return l.NW.string(l.t.sBqLsL);
        case i.EKQ.RTS:
            return l.NW.string(l.t.yS4ddn);
        case i.EKQ.TOWER_DEFENSE:
            return l.NW.string(l.t.SULyIC);
        case i.EKQ.TURN_BASED_STRATEGY:
            return l.NW.string(l.t.VDsbrq);
        case i.EKQ.WARGAME:
            return l.NW.string(l.t.YDCIrK);
        case i.EKQ.MOBA:
            return l.NW.string(l.t.i1m1t7);
        case i.EKQ.FIGHTING:
            return l.NW.string(l.t.KepcSE);
        case i.EKQ.PUZZLE:
            return l.NW.string(l.t.rm7Ggo);
        case i.EKQ.CARD_GAME:
            return l.NW.string(l.t.kX85v7);
        case i.EKQ.EDUCATION:
            return l.NW.string(l.t['klIi6+']);
        case i.EKQ.FITNESS:
            return l.NW.string(l.t.GOaaFR);
        case i.EKQ.GAMBLING:
            return l.NW.string(l.t['X8/Ee3']);
        case i.EKQ.MUSIC_RHYTHM:
            return l.NW.string(l.t.qPgrg4);
        case i.EKQ.PARTY_MINI_GAME:
            return l.NW.string(l.t.diBclJ);
        case i.EKQ.PINBALL:
            return l.NW.string(l.t['1+ott7']);
        case i.EKQ.TRIVIA_BOARD_GAME:
            return l.NW.string(l.t.aLlxjI);
        case i.EKQ.TACTICAL:
            return l.NW.string(l.t.LRPgbm);
        case i.EKQ.INDIE:
            return l.NW.string(l.t.hz9Xvr);
        case i.EKQ.ARCADE:
            return l.NW.string(l.t.Sbxows);
        case i.EKQ.POINT_AND_CLICK:
            return l.NW.string(l.t.vcerEh);
        default:
            return l.NW.string(l.t['9b4eUl']);
    }
}
Object.keys(u).forEach((e) => {
    let t = e.toLowerCase().replace(/_/g, '-'),
        r = u[e];
    (s[t] = r), (c[r] = t);
});
let f = [
    ['YYYY-MM-DD', 'MMMM DD, Y'],
    ['YYYY-MM', 'MMMM Y'],
    ['MM-DD', 'MMMM DD'],
    ['MM', 'MMMM'],
    ['YYYY', 'Y']
];
function m(e) {
    let { preorderReleaseAt: t, preorderApproximateReleaseDate: r } = e;
    if (null != t) return t.format('MMMM DD');
    if (null == r) return null;
    for (let e = 0; e < f.length; e++) {
        let [t, n] = f[e],
            o = a()(r, t, !0);
        if (o.isValid()) return o.format(n);
    }
    return r;
}
