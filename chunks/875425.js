n.d(t, {
    Df: () => s,
    FO: () => a,
    Q9: () => c,
    pS: () => u,
    s0: () => o,
    wS: () => l
});
var r = n(231338),
    i = n(388032);
let o = 128,
    a = Object.freeze({
        MINUTES_30: 1800000,
        HOURS_1: 3600000,
        HOURS_4: 14400000,
        TODAY: 'TODAY',
        DONT_CLEAR: 'DONT_CLEAR'
    }),
    s = [
        {
            value: r.Sk.ONLINE,
            label: () => i.NW.string(i.t.WbGtnJ)
        },
        {
            value: r.Sk.IDLE,
            label: () => i.NW.string(i.t.qWbtVV)
        },
        {
            value: r.Sk.DND,
            label: () => i.NW.string(i.t.jaNpQE)
        },
        {
            value: r.Sk.INVISIBLE,
            label: () => i.NW.string(i.t.bg24HB)
        }
    ],
    l = [
        {
            value: a.TODAY,
            label: () => i.NW.string(i.t.GQmLra)
        },
        {
            value: a.HOURS_4,
            label: () => i.NW.formatToPlainString(i.t.Rea2gY, { hours: 4 })
        },
        {
            value: a.HOURS_1,
            label: () => i.NW.formatToPlainString(i.t.Rea2gY, { hours: 1 })
        },
        {
            value: a.MINUTES_30,
            label: () => i.NW.formatToPlainString(i.t.TS3eJS, { minutes: 30 })
        },
        {
            value: a.DONT_CLEAR,
            label: () => i.NW.string(i.t.bRn8cn)
        }
    ],
    c = [
        {
            value: a.TODAY,
            label: () => i.NW.string(i.t.TOEOaW)
        },
        {
            value: a.HOURS_4,
            label: () => i.NW.formatToPlainString(i.t.Yizuvb, { hours: 4 })
        },
        {
            value: a.HOURS_1,
            label: () => i.NW.formatToPlainString(i.t.Yizuvb, { hours: 1 })
        },
        {
            value: a.MINUTES_30,
            label: () => i.NW.formatToPlainString(i.t['/XUoq6'], { minutes: 30 })
        },
        {
            value: a.DONT_CLEAR,
            label: () => i.NW.string(i.t.bRn8cn)
        }
    ],
    u = [
        {
            value: 'PLAYING',
            label: () => i.NW.string(i.t.r5TNm5)
        },
        {
            value: 'LISTENING_TO',
            label: () => i.NW.string(i.t.ylzor6)
        },
        {
            value: 'WATCHING',
            label: () => i.NW.string(i.t.pzz9iI)
        },
        {
            value: 'CURRENT_OBSESSION',
            label: () => i.NW.string(i.t.ZStIVl)
        },
        {
            value: 'SHOWER_THOUGHT',
            label: () => i.NW.string(i.t.Wf8fxM)
        },
        {
            value: 'TODAY_I_LEARNED',
            label: () => i.NW.string(i.t.pycKi4)
        },
        {
            value: 'HOT_TAKE',
            label: () => i.NW.string(i.t.l3pZcn)
        },
        {
            value: 'DAD_JOKE',
            label: () => i.NW.string(i.t['3XVZ0t'])
        },
        {
            value: 'EMOJI_DAY',
            label: () => i.NW.string(i.t['4U+EJC'])
        },
        {
            value: 'USELESS_TALENT',
            label: () => i.NW.string(i.t['Z3Vn/f'])
        },
        {
            value: 'VIDEO_GAME_ITEM',
            label: () => i.NW.string(i.t.PiepBg)
        },
        {
            value: 'READING',
            label: () => i.NW.string(i.t.pYQRnJ)
        },
        {
            value: 'SONG_STUCK',
            label: () => i.NW.string(i.t.S7UJ0t)
        },
        {
            value: 'MOST_USED_EMOJI',
            label: () => i.NW.string(i.t['1TlHw8'])
        },
        {
            value: 'BEST_FOOD',
            label: () => i.NW.string(i.t.ZPjue3)
        },
        {
            value: 'FICTIONAL_WORLD',
            label: () => i.NW.string(i.t.lyOeXF)
        },
        {
            value: 'USERNAME_ORIGIN',
            label: () => i.NW.string(i.t.l6Yb3d)
        },
        {
            value: 'THEME_SONG',
            label: () => i.NW.string(i.t.Vok4QU)
        },
        {
            value: 'FAVORITE_COLLECTIBLE',
            label: () => i.NW.string(i.t.T24um5)
        },
        {
            value: 'GAME_MECHANIC',
            label: () => i.NW.string(i.t.kzToEh)
        },
        {
            value: 'NPC_COMPANION',
            label: () => i.NW.string(i.t['/Zm5VV'])
        },
        {
            value: 'FOOD_CRAVING',
            label: () => i.NW.string(i.t.ujnXur)
        },
        {
            value: 'MYTHICAL_PET',
            label: () => i.NW.string(i.t['45r7ub'])
        },
        {
            value: 'LATEST_HOBBY',
            label: () => i.NW.string(i.t.SluNa2)
        },
        {
            value: 'FAVORITE_ANIME',
            label: () => i.NW.string(i.t.R1f9RU)
        },
        {
            value: 'RANKED_UP',
            label: () => i.NW.string(i.t.nXJgjo)
        },
        {
            value: 'CHARACTER_CLASS',
            label: () => i.NW.string(i.t.SWVxPD)
        },
        {
            value: 'HIGH_SCORE',
            label: () => i.NW.string(i.t.gbUeX1)
        },
        {
            value: 'FINISHED_PLAYING',
            label: () => i.NW.string(i.t.bIrdLi)
        },
        {
            value: 'FINISHED_READING',
            label: () => i.NW.string(i.t['tcQn+P'])
        },
        {
            value: 'CANT_WAIT',
            label: () => i.NW.string(i.t['40gTj4'])
        }
    ];
