a.d(e, { HM: () => C, aQ: () => f, pv: () => g });
var n = a(713608),
    t = a(918715),
    i = a(433492),
    d = a(877784),
    o = a(369606),
    r = a(106983),
    s = a(171251),
    c = a(704796);
let u = {
        [r.C.Kill]: n.q,
        [r.C.MultiKill]: n.q,
        [r.C.Ace]: n.q,
        [r.C.Assist]: n.q,
        [r.C.Death]: t.V,
        [r.C.BombPlant]: i.K,
        [r.C.BombDefused]: i.K,
        [r.C.BombExploded]: i.K,
        [r.C.RoundStart]: null,
        [r.C.RoundEnd]: null,
        [r.C.PlayStateChange]: null,
        [r.C.RoundWinningKill]: d.q,
        [r.C.GameWinningKill]: o.TrophyIcon,
        [r.C.InMatchChange]: null,
    },
    h = {
        [r.C.Kill]: 10,
        [r.C.MultiKill]: 11,
        [r.C.Ace]: 15,
        [r.C.Assist]: 9,
        [r.C.Death]: 1,
        [r.C.BombPlant]: 9,
        [r.C.BombDefused]: 9,
        [r.C.BombExploded]: 9,
        [r.C.RoundStart]: 0,
        [r.C.RoundEnd]: 0,
        [r.C.PlayStateChange]: 0,
        [r.C.RoundWinningKill]: 12,
        [r.C.GameWinningKill]: 12,
        [r.C.InMatchChange]: 0,
    },
    m = {
        [r.C.Kill]: c.default["3U5H62"],
        [r.C.MultiKill]: c.default.mnZiTO,
        [r.C.Ace]: c.default.CWgKMS,
        [r.C.Assist]: c.default.qhZmhU,
        [r.C.Death]: c.default.ejnmIP,
        [r.C.BombPlant]: c.default.bdMG43,
        [r.C.BombDefused]: c.default.IptBJr,
        [r.C.BombExploded]: c.default.tAXn5v,
        [r.C.RoundStart]: null,
        [r.C.RoundEnd]: null,
        [r.C.PlayStateChange]: null,
        [r.C.RoundWinningKill]: c.default.Ce0ZBI,
        [r.C.GameWinningKill]: c.default.b0i6PM,
        [r.C.InMatchChange]: null,
    };
function g() {
    return Object.fromEntries(s.l.map((l) => [l, u]));
}
function f() {
    return Object.fromEntries(s.l.map((l) => [l, m]));
}
function C() {
    return Object.fromEntries(s.l.map((l) => [l, h]));
}
