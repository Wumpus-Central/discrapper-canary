var n = a(713608),
    t = a(918715),
    i = a(433492),
    o = a(877784),
    d = a(369606),
    c = a(106983),
    r = a(171251),
    s = a(683825);
let u = {
        [c.C.Kill]: n.ModerationIcon,
        [c.C.MultiKill]: n.ModerationIcon,
        [c.C.Ace]: n.ModerationIcon,
        [c.C.Assist]: n.ModerationIcon,
        [c.C.Death]: t.SkullIcon,
        [c.C.BombPlant]: i.AchievementsIcon,
        [c.C.BombDefused]: i.AchievementsIcon,
        [c.C.BombExploded]: i.AchievementsIcon,
        [c.C.RoundStart]: null,
        [c.C.RoundEnd]: null,
        [c.C.PlayStateChange]: null,
        [c.C.RoundWinningKill]: o.RibbonIcon,
        [c.C.GameWinningKill]: d.TrophyIcon,
        [c.C.InMatchChange]: null,
    },
    h = {
        [c.C.Kill]: 10,
        [c.C.MultiKill]: 11,
        [c.C.Ace]: 15,
        [c.C.Assist]: 9,
        [c.C.Death]: 1,
        [c.C.BombPlant]: 9,
        [c.C.BombDefused]: 9,
        [c.C.BombExploded]: 9,
        [c.C.RoundStart]: 0,
        [c.C.RoundEnd]: 0,
        [c.C.PlayStateChange]: 0,
        [c.C.RoundWinningKill]: 12,
        [c.C.GameWinningKill]: 12,
        [c.C.InMatchChange]: 0,
    },
    m = {
        [c.C.Kill]: s.default["3U5H62"],
        [c.C.MultiKill]: s.default.mnZiTO,
        [c.C.Ace]: s.default.CWgKMS,
        [c.C.Assist]: s.default.qhZmhU,
        [c.C.Death]: s.default.ejnmIP,
        [c.C.BombPlant]: s.default.bdMG43,
        [c.C.BombDefused]: s.default.IptBJr,
        [c.C.BombExploded]: s.default.tAXn5v,
        [c.C.RoundStart]: null,
        [c.C.RoundEnd]: null,
        [c.C.PlayStateChange]: null,
        [c.C.RoundWinningKill]: s.default.Ce0ZBI,
        [c.C.GameWinningKill]: s.default.b0i6PM,
        [c.C.InMatchChange]: null,
    };
a.d(
    l,
    {},
    {
        HM: function () {
            return Object.fromEntries(r.l.map((e) => [e, h]));
        },
        aQ: function () {
            return Object.fromEntries(r.l.map((e) => [e, m]));
        },
        pv: function () {
            return Object.fromEntries(r.l.map((e) => [e, u]));
        },
    },
);
