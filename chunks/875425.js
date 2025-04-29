n.d(t, {
    Df: () => c,
    FO: () => l,
    HO: () => d,
    Ub: () => _,
    pS: () => f,
    s0: () => s,
    wS: () => u
});
var r = n(134632),
    i = n(51144),
    o = n(231338),
    a = n(388032);
let s = 128,
    l = Object.freeze({
        MINUTES_30: 1800000,
        HOURS_1: 3600000,
        HOURS_4: 14400000,
        TODAY: 'TODAY',
        DONT_CLEAR: 'DONT_CLEAR'
    }),
    c = [
        {
            value: o.Sk.ONLINE,
            label: () => (0, i.u5)(o.Sk.ONLINE)
        },
        {
            value: o.Sk.IDLE,
            label: () => (0, i.u5)(o.Sk.IDLE)
        },
        {
            value: o.Sk.DND,
            label: () => (0, i.u5)(o.Sk.DND)
        },
        {
            value: o.Sk.INVISIBLE,
            label: () => (0, i.u5)(o.Sk.INVISIBLE)
        }
    ],
    u = [l.TODAY, l.HOURS_4, l.HOURS_1, l.MINUTES_30, l.DONT_CLEAR];
var d = (function (e) {
    return (e.PLAYING = 'PLAYING'), (e.LISTENING_TO = 'LISTENING_TO'), (e.WATCHING = 'WATCHING'), (e.CURRENT_OBSESSION = 'CURRENT_OBSESSION'), (e.SHOWER_THOUGHT = 'SHOWER_THOUGHT'), (e.TODAY_I_LEARNED = 'TODAY_I_LEARNED'), (e.HOT_TAKE = 'HOT_TAKE'), (e.DAD_JOKE = 'DAD_JOKE'), (e.EMOJI_DAY = 'EMOJI_DAY'), (e.USELESS_TALENT = 'USELESS_TALENT'), (e.VIDEO_GAME_ITEM = 'VIDEO_GAME_ITEM'), (e.READING = 'READING'), (e.SONG_STUCK = 'SONG_STUCK'), (e.MOST_USED_EMOJI = 'MOST_USED_EMOJI'), (e.BEST_FOOD = 'BEST_FOOD'), (e.FICTIONAL_WORLD = 'FICTIONAL_WORLD'), (e.USERNAME_ORIGIN = 'USERNAME_ORIGIN'), (e.THEME_SONG = 'THEME_SONG'), (e.FAVORITE_COLLECTIBLE = 'FAVORITE_COLLECTIBLE'), (e.GAME_MECHANIC = 'GAME_MECHANIC'), (e.NPC_COMPANION = 'NPC_COMPANION'), (e.FOOD_CRAVING = 'FOOD_CRAVING'), (e.MYTHICAL_PET = 'MYTHICAL_PET'), (e.LATEST_HOBBY = 'LATEST_HOBBY'), (e.FAVORITE_ANIME = 'FAVORITE_ANIME'), (e.RANKED_UP = 'RANKED_UP'), (e.CHARACTER_CLASS = 'CHARACTER_CLASS'), (e.HIGH_SCORE = 'HIGH_SCORE'), (e.FINISHED_PLAYING = 'FINISHED_PLAYING'), (e.FINISHED_READING = 'FINISHED_READING'), (e.CANT_WAIT = 'CANT_WAIT'), (e.ADD_STATUS = 'ADD_STATUS'), (e.WHATS_ON_YOUR_MIND = 'WHATS_ON_YOUR_MIND'), e;
})({});
let f = [
        {
            value: 'PLAYING',
            label: () => a.intl.string(a.t.r5TNm5)
        },
        {
            value: 'LISTENING_TO',
            label: () => a.intl.string(a.t.ylzor6)
        },
        {
            value: 'WATCHING',
            label: () => a.intl.string(a.t.pzz9iI)
        },
        {
            value: 'CURRENT_OBSESSION',
            label: () => a.intl.string(a.t.ZStIVl)
        },
        {
            value: 'SHOWER_THOUGHT',
            label: () => a.intl.string(a.t.Wf8fxM)
        },
        {
            value: 'TODAY_I_LEARNED',
            label: () => a.intl.string(a.t.pycKi4)
        },
        {
            value: 'HOT_TAKE',
            label: () => a.intl.string(a.t.l3pZcn)
        },
        {
            value: 'DAD_JOKE',
            label: () => a.intl.string(a.t['3XVZ0t'])
        },
        {
            value: 'EMOJI_DAY',
            label: () => a.intl.string(a.t['4U+EJC'])
        },
        {
            value: 'USELESS_TALENT',
            label: () => a.intl.string(a.t['Z3Vn/f'])
        },
        {
            value: 'VIDEO_GAME_ITEM',
            label: () => a.intl.string(a.t.PiepBg)
        },
        {
            value: 'READING',
            label: () => a.intl.string(a.t.pYQRnJ)
        },
        {
            value: 'SONG_STUCK',
            label: () => a.intl.string(a.t.S7UJ0t)
        },
        {
            value: 'MOST_USED_EMOJI',
            label: () => a.intl.string(a.t['1TlHw8'])
        },
        {
            value: 'BEST_FOOD',
            label: () => a.intl.string(a.t.ZPjue3)
        },
        {
            value: 'FICTIONAL_WORLD',
            label: () => a.intl.string(a.t.lyOeXF)
        },
        {
            value: 'USERNAME_ORIGIN',
            label: () => a.intl.string(a.t.l6Yb3d)
        },
        {
            value: 'THEME_SONG',
            label: () => a.intl.string(a.t.Vok4QU)
        },
        {
            value: 'FAVORITE_COLLECTIBLE',
            label: () => a.intl.string(a.t.T24um5)
        },
        {
            value: 'GAME_MECHANIC',
            label: () => a.intl.string(a.t.kzToEh)
        },
        {
            value: 'NPC_COMPANION',
            label: () => a.intl.string(a.t['/Zm5VV'])
        },
        {
            value: 'FOOD_CRAVING',
            label: () => a.intl.string(a.t.ujnXur)
        },
        {
            value: 'MYTHICAL_PET',
            label: () => a.intl.string(a.t['45r7ub'])
        },
        {
            value: 'LATEST_HOBBY',
            label: () => a.intl.string(a.t.SluNa2)
        },
        {
            value: 'FAVORITE_ANIME',
            label: () => a.intl.string(a.t.R1f9RU)
        },
        {
            value: 'RANKED_UP',
            label: () => a.intl.string(a.t.nXJgjo)
        },
        {
            value: 'CHARACTER_CLASS',
            label: () => a.intl.string(a.t.SWVxPD)
        },
        {
            value: 'HIGH_SCORE',
            label: () => a.intl.string(a.t.gbUeX1)
        },
        {
            value: 'FINISHED_PLAYING',
            label: () => a.intl.string(a.t.bIrdLi)
        },
        {
            value: 'FINISHED_READING',
            label: () => a.intl.string(a.t['tcQn+P'])
        },
        {
            value: 'CANT_WAIT',
            label: () => a.intl.string(a.t['40gTj4'])
        },
        {
            value: 'ADD_STATUS',
            label: () => a.intl.string(a.t.Vq4UmZ)
        },
        {
            value: 'WHATS_ON_YOUR_MIND',
            label: () => a.intl.string(a.t['xod36+'])
        }
    ],
    _ = [{ value: r.w.LISTEN }, { value: r.w.WATCH }, { value: r.w.PLAY }, { value: r.w.THINK }, { value: r.w.LOVE }];
