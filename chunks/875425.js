n.d(t, {
    Df: () => l,
    FO: () => s,
    HO: () => d,
    Q9: () => u,
    pS: () => f,
    s0: () => a,
    wS: () => c
});
var r = n(51144),
    i = n(231338),
    o = n(388032);
let a = 128,
    s = Object.freeze({
        MINUTES_30: 1800000,
        HOURS_1: 3600000,
        HOURS_4: 14400000,
        TODAY: 'TODAY',
        DONT_CLEAR: 'DONT_CLEAR'
    }),
    l = [
        {
            value: i.Sk.ONLINE,
            label: () => (0, r.u5)(i.Sk.ONLINE)
        },
        {
            value: i.Sk.IDLE,
            label: () => (0, r.u5)(i.Sk.IDLE)
        },
        {
            value: i.Sk.DND,
            label: () => (0, r.u5)(i.Sk.DND)
        },
        {
            value: i.Sk.INVISIBLE,
            label: () => (0, r.u5)(i.Sk.INVISIBLE)
        }
    ],
    c = [
        {
            value: s.TODAY,
            label: () => o.NW.string(o.t.GQmLra)
        },
        {
            value: s.HOURS_4,
            label: () => o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 })
        },
        {
            value: s.HOURS_1,
            label: () => o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 })
        },
        {
            value: s.MINUTES_30,
            label: () => o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 })
        },
        {
            value: s.DONT_CLEAR,
            label: () => o.NW.string(o.t.bRn8cn)
        }
    ],
    u = [
        {
            value: s.TODAY,
            label: () => o.NW.string(o.t.TOEOaW)
        },
        {
            value: s.HOURS_4,
            label: () => o.NW.formatToPlainString(o.t.Yizuvb, { hours: 4 })
        },
        {
            value: s.HOURS_1,
            label: () => o.NW.formatToPlainString(o.t.Yizuvb, { hours: 1 })
        },
        {
            value: s.MINUTES_30,
            label: () => o.NW.formatToPlainString(o.t['/XUoq6'], { minutes: 30 })
        },
        {
            value: s.DONT_CLEAR,
            label: () => o.NW.string(o.t.bRn8cn)
        }
    ];
var d = (function (e) {
    return (e.PLAYING = 'PLAYING'), (e.LISTENING_TO = 'LISTENING_TO'), (e.WATCHING = 'WATCHING'), (e.CURRENT_OBSESSION = 'CURRENT_OBSESSION'), (e.SHOWER_THOUGHT = 'SHOWER_THOUGHT'), (e.TODAY_I_LEARNED = 'TODAY_I_LEARNED'), (e.HOT_TAKE = 'HOT_TAKE'), (e.DAD_JOKE = 'DAD_JOKE'), (e.EMOJI_DAY = 'EMOJI_DAY'), (e.USELESS_TALENT = 'USELESS_TALENT'), (e.VIDEO_GAME_ITEM = 'VIDEO_GAME_ITEM'), (e.READING = 'READING'), (e.SONG_STUCK = 'SONG_STUCK'), (e.MOST_USED_EMOJI = 'MOST_USED_EMOJI'), (e.BEST_FOOD = 'BEST_FOOD'), (e.FICTIONAL_WORLD = 'FICTIONAL_WORLD'), (e.USERNAME_ORIGIN = 'USERNAME_ORIGIN'), (e.THEME_SONG = 'THEME_SONG'), (e.FAVORITE_COLLECTIBLE = 'FAVORITE_COLLECTIBLE'), (e.GAME_MECHANIC = 'GAME_MECHANIC'), (e.NPC_COMPANION = 'NPC_COMPANION'), (e.FOOD_CRAVING = 'FOOD_CRAVING'), (e.MYTHICAL_PET = 'MYTHICAL_PET'), (e.LATEST_HOBBY = 'LATEST_HOBBY'), (e.FAVORITE_ANIME = 'FAVORITE_ANIME'), (e.RANKED_UP = 'RANKED_UP'), (e.CHARACTER_CLASS = 'CHARACTER_CLASS'), (e.HIGH_SCORE = 'HIGH_SCORE'), (e.FINISHED_PLAYING = 'FINISHED_PLAYING'), (e.FINISHED_READING = 'FINISHED_READING'), (e.CANT_WAIT = 'CANT_WAIT'), (e.ADD_STATUS = 'ADD_STATUS'), (e.WHATS_ON_YOUR_MIND = 'WHATS_ON_YOUR_MIND'), e;
})({});
let f = [
    {
        value: 'PLAYING',
        label: () => o.NW.string(o.t.r5TNm5)
    },
    {
        value: 'LISTENING_TO',
        label: () => o.NW.string(o.t.ylzor6)
    },
    {
        value: 'WATCHING',
        label: () => o.NW.string(o.t.pzz9iI)
    },
    {
        value: 'CURRENT_OBSESSION',
        label: () => o.NW.string(o.t.ZStIVl)
    },
    {
        value: 'SHOWER_THOUGHT',
        label: () => o.NW.string(o.t.Wf8fxM)
    },
    {
        value: 'TODAY_I_LEARNED',
        label: () => o.NW.string(o.t.pycKi4)
    },
    {
        value: 'HOT_TAKE',
        label: () => o.NW.string(o.t.l3pZcn)
    },
    {
        value: 'DAD_JOKE',
        label: () => o.NW.string(o.t['3XVZ0t'])
    },
    {
        value: 'EMOJI_DAY',
        label: () => o.NW.string(o.t['4U+EJC'])
    },
    {
        value: 'USELESS_TALENT',
        label: () => o.NW.string(o.t['Z3Vn/f'])
    },
    {
        value: 'VIDEO_GAME_ITEM',
        label: () => o.NW.string(o.t.PiepBg)
    },
    {
        value: 'READING',
        label: () => o.NW.string(o.t.pYQRnJ)
    },
    {
        value: 'SONG_STUCK',
        label: () => o.NW.string(o.t.S7UJ0t)
    },
    {
        value: 'MOST_USED_EMOJI',
        label: () => o.NW.string(o.t['1TlHw8'])
    },
    {
        value: 'BEST_FOOD',
        label: () => o.NW.string(o.t.ZPjue3)
    },
    {
        value: 'FICTIONAL_WORLD',
        label: () => o.NW.string(o.t.lyOeXF)
    },
    {
        value: 'USERNAME_ORIGIN',
        label: () => o.NW.string(o.t.l6Yb3d)
    },
    {
        value: 'THEME_SONG',
        label: () => o.NW.string(o.t.Vok4QU)
    },
    {
        value: 'FAVORITE_COLLECTIBLE',
        label: () => o.NW.string(o.t.T24um5)
    },
    {
        value: 'GAME_MECHANIC',
        label: () => o.NW.string(o.t.kzToEh)
    },
    {
        value: 'NPC_COMPANION',
        label: () => o.NW.string(o.t['/Zm5VV'])
    },
    {
        value: 'FOOD_CRAVING',
        label: () => o.NW.string(o.t.ujnXur)
    },
    {
        value: 'MYTHICAL_PET',
        label: () => o.NW.string(o.t['45r7ub'])
    },
    {
        value: 'LATEST_HOBBY',
        label: () => o.NW.string(o.t.SluNa2)
    },
    {
        value: 'FAVORITE_ANIME',
        label: () => o.NW.string(o.t.R1f9RU)
    },
    {
        value: 'RANKED_UP',
        label: () => o.NW.string(o.t.nXJgjo)
    },
    {
        value: 'CHARACTER_CLASS',
        label: () => o.NW.string(o.t.SWVxPD)
    },
    {
        value: 'HIGH_SCORE',
        label: () => o.NW.string(o.t.gbUeX1)
    },
    {
        value: 'FINISHED_PLAYING',
        label: () => o.NW.string(o.t.bIrdLi)
    },
    {
        value: 'FINISHED_READING',
        label: () => o.NW.string(o.t['tcQn+P'])
    },
    {
        value: 'CANT_WAIT',
        label: () => o.NW.string(o.t['40gTj4'])
    },
    {
        value: 'ADD_STATUS',
        label: () => o.NW.string(o.t.Vq4UmZ)
    },
    {
        value: 'WHATS_ON_YOUR_MIND',
        label: () => o.NW.string(o.t['xod36+'])
    }
];
