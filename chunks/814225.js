r.d(t, {
    P3: () => p,
    ZK: () => d,
    en: () => f
}),
    r(757143),
    r(301563),
    r(47120);
var n = r(913527),
    a = r.n(n);
if (12633 == r.j) var o = r(512969);
r(358085), r(73346);
var i = r(981631),
    s = r(388032);
let l = {},
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
            return s.NW.string(s.t['1o2/IC']);
        case i.EKQ.ACTION_RPG:
            return s.NW.string(s.t.e9Yo4O);
        case i.EKQ.BRAWLER:
            return s.NW.string(s.t.WCkEjY);
        case i.EKQ.HACK_AND_SLASH:
            return s.NW.string(s.t.xQ4VmJ);
        case i.EKQ.PLATFORMER:
            return s.NW.string(s.t['WA318/']);
        case i.EKQ.STEALTH:
            return s.NW.string(s.t['6UPFd3']);
        case i.EKQ.SURVIVAL:
            return s.NW.string(s.t.SVPCt7);
        case i.EKQ.ADVENTURE:
            return s.NW.string(s.t['15p8oq']);
        case i.EKQ.ACTION_ADVENTURE:
            return s.NW.string(s.t.AxkUBg);
        case i.EKQ.METROIDVANIA:
            return s.NW.string(s.t.Iwr38v);
        case i.EKQ.OPEN_WORLD:
            return s.NW.string(s.t['2HRHJC']);
        case i.EKQ.PSYCHOLOGICAL_HORROR:
            return s.NW.string(s.t['/IwK3t']);
        case i.EKQ.SANDBOX:
            return s.NW.string(s.t['2+Vu4e']);
        case i.EKQ.SURVIVAL_HORROR:
            return s.NW.string(s.t.CCzRiI);
        case i.EKQ.VISUAL_NOVEL:
            return s.NW.string(s.t.FE7rnp);
        case i.EKQ.DRIVING_RACING:
            return s.NW.string(s.t.ErzgcX);
        case i.EKQ.VEHICULAR_COMBAT:
            return s.NW.string(s.t.YQHhoq);
        case i.EKQ.MASSIVELY_MULTIPLAYER:
            return s.NW.string(s.t['5CNg1t']);
        case i.EKQ.MMORPG:
            return s.NW.string(s.t.c4NuOz);
        case i.EKQ.ROLE_PLAYING:
            return s.NW.string(s.t.yayVgo);
        case i.EKQ.DUNGEON_CRAWLER:
            return s.NW.string(s.t.qicemZ);
        case i.EKQ.ROGUELIKE:
            return s.NW.string(s.t.zWzaCg);
        case i.EKQ.SHOOTER:
            return s.NW.string(s.t['+pk6sb']);
        case i.EKQ.LIGHT_GUN:
            return s.NW.string(s.t['TDS96+']);
        case i.EKQ.SHOOT_EM_UP:
            return s.NW.string(s.t.wltDUF);
        case i.EKQ.FPS:
            return s.NW.string(s.t.olTaq6);
        case i.EKQ.DUAL_JOYSTICK_SHOOTER:
            return s.NW.string(s.t['SN+NS0']);
        case i.EKQ.SIMULATION:
            return s.NW.string(s.t.sxMPdn);
        case i.EKQ.FLIGHT_SIMULATOR:
            return s.NW.string(s.t.Q7msr6);
        case i.EKQ.TRAIN_SIMULATOR:
            return s.NW.string(s.t.ZtECf3);
        case i.EKQ.LIFE_SIMULATOR:
            return s.NW.string(s.t.byt5Fh);
        case i.EKQ.FISHING:
            return s.NW.string(s.t.BKwiwc);
        case i.EKQ.SPORTS:
            return s.NW.string(s.t.O0B7XF);
        case i.EKQ.BASEBALL:
            return s.NW.string(s.t['jPYb//']);
        case i.EKQ.BASKETBALL:
            return s.NW.string(s.t['o+D1Bg']);
        case i.EKQ.BILLIARDS:
            return s.NW.string(s.t.PJ5o4O);
        case i.EKQ.BOWLING:
            return s.NW.string(s.t['82afJy']);
        case i.EKQ.BOXING:
            return s.NW.string(s.t.DQvfen);
        case i.EKQ.FOOTBALL:
            return s.NW.string(s.t.slOYkp);
        case i.EKQ.GOLF:
            return s.NW.string(s.t.aeQPlJ);
        case i.EKQ.HOCKEY:
            return s.NW.string(s.t.g7oe5e);
        case i.EKQ.SKATEBOARDING_SKATING:
            return s.NW.string(s.t.yBDEPz);
        case i.EKQ.SNOWBOARDING_SKIING:
            return s.NW.string(s.t.GVaAcn);
        case i.EKQ.SOCCER:
            return s.NW.string(s.t.KPznxs);
        case i.EKQ.TRACK_FIELD:
            return s.NW.string(s.t.hJ62Q0);
        case i.EKQ.SURFING_WAKEBOARDING:
            return s.NW.string(s.t.PSh0CQ);
        case i.EKQ.WRESTLING:
            return s.NW.string(s.t['3y9hAQ']);
        case i.EKQ.STRATEGY:
            return s.NW.string(s.t.KovTDw);
        case i.EKQ.FOUR_X:
            return s.NW.string(s.t['19h4dX']);
        case i.EKQ.ARTILLERY:
            return s.NW.string(s.t.sBqLsL);
        case i.EKQ.RTS:
            return s.NW.string(s.t.yS4ddn);
        case i.EKQ.TOWER_DEFENSE:
            return s.NW.string(s.t.SULyIC);
        case i.EKQ.TURN_BASED_STRATEGY:
            return s.NW.string(s.t.VDsbrq);
        case i.EKQ.WARGAME:
            return s.NW.string(s.t.YDCIrK);
        case i.EKQ.MOBA:
            return s.NW.string(s.t.i1m1t7);
        case i.EKQ.FIGHTING:
            return s.NW.string(s.t.KepcSE);
        case i.EKQ.PUZZLE:
            return s.NW.string(s.t.rm7Ggo);
        case i.EKQ.CARD_GAME:
            return s.NW.string(s.t.kX85v7);
        case i.EKQ.EDUCATION:
            return s.NW.string(s.t['klIi6+']);
        case i.EKQ.FITNESS:
            return s.NW.string(s.t.GOaaFR);
        case i.EKQ.GAMBLING:
            return s.NW.string(s.t['X8/Ee3']);
        case i.EKQ.MUSIC_RHYTHM:
            return s.NW.string(s.t.qPgrg4);
        case i.EKQ.PARTY_MINI_GAME:
            return s.NW.string(s.t.diBclJ);
        case i.EKQ.PINBALL:
            return s.NW.string(s.t['1+ott7']);
        case i.EKQ.TRIVIA_BOARD_GAME:
            return s.NW.string(s.t.aLlxjI);
        case i.EKQ.TACTICAL:
            return s.NW.string(s.t.LRPgbm);
        case i.EKQ.INDIE:
            return s.NW.string(s.t.hz9Xvr);
        case i.EKQ.ARCADE:
            return s.NW.string(s.t.Sbxows);
        case i.EKQ.POINT_AND_CLICK:
            return s.NW.string(s.t.vcerEh);
        default:
            return s.NW.string(s.t['9b4eUl']);
    }
}
Object.keys(u).forEach((e) => {
    let t = e.toLowerCase().replace(/_/g, '-'),
        r = u[e];
    (l[t] = r), (c[r] = t);
});
let m = [
    ['YYYY-MM-DD', 'MMMM DD, Y'],
    ['YYYY-MM', 'MMMM Y'],
    ['MM-DD', 'MMMM DD'],
    ['MM', 'MMMM'],
    ['YYYY', 'Y']
];
function f(e) {
    let { preorderReleaseAt: t, preorderApproximateReleaseDate: r } = e;
    if (null != t) return t.format('MMMM DD');
    if (null == r) return null;
    for (let e = 0; e < m.length; e++) {
        let [t, n] = m[e],
            o = a()(r, t, !0);
        if (o.isValid()) return o.format(n);
    }
    return r;
}
