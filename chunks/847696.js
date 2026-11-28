var a = n(713608),
    t = n(918715),
    i = n(433492),
    o = n(877784),
    r = n(369606),
    d = n(106983),
    c = n(171251),
    s = n(636107);
let u = {
        [d.C.Kill]: a.ModerationIcon,
        [d.C.MultiKill]: a.ModerationIcon,
        [d.C.Ace]: a.ModerationIcon,
        [d.C.Assist]: a.ModerationIcon,
        [d.C.Death]: t.SkullIcon,
        [d.C.BombPlant]: i.AchievementsIcon,
        [d.C.BombDefused]: i.AchievementsIcon,
        [d.C.BombExploded]: i.AchievementsIcon,
        [d.C.RoundStart]: null,
        [d.C.RoundEnd]: null,
        [d.C.PlayStateChange]: null,
        [d.C.RoundWinningKill]: o.RibbonIcon,
        [d.C.GameWinningKill]: r.TrophyIcon,
        [d.C.InMatchChange]: null,
    },
    h = {
        [d.C.Kill]: 10,
        [d.C.MultiKill]: 11,
        [d.C.Ace]: 15,
        [d.C.Assist]: 9,
        [d.C.Death]: 1,
        [d.C.BombPlant]: 9,
        [d.C.BombDefused]: 9,
        [d.C.BombExploded]: 9,
        [d.C.RoundStart]: 0,
        [d.C.RoundEnd]: 0,
        [d.C.PlayStateChange]: 0,
        [d.C.RoundWinningKill]: 12,
        [d.C.GameWinningKill]: 12,
        [d.C.InMatchChange]: 0,
    },
    m = {
        [d.C.Kill]: s.default["3U5H62"],
        [d.C.MultiKill]: s.default.mnZiTO,
        [d.C.Ace]: s.default.CWgKMS,
        [d.C.Assist]: s.default.qhZmhU,
        [d.C.Death]: s.default.ejnmIP,
        [d.C.BombPlant]: s.default.bdMG43,
        [d.C.BombDefused]: s.default.IptBJr,
        [d.C.BombExploded]: s.default.tAXn5v,
        [d.C.RoundStart]: null,
        [d.C.RoundEnd]: null,
        [d.C.PlayStateChange]: null,
        [d.C.RoundWinningKill]: s.default.Ce0ZBI,
        [d.C.GameWinningKill]: s.default.b0i6PM,
        [d.C.InMatchChange]: null,
    };
n.d(
    l,
    {},
    {
        HM: function () {
            return Object.fromEntries(c.l.map((e) => [e, h]));
        },
        aQ: function () {
            return Object.fromEntries(c.l.map((e) => [e, m]));
        },
        pv: function () {
            return Object.fromEntries(c.l.map((e) => [e, u]));
        },
    },
);
