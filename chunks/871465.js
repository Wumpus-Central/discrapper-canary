n.d(t, {
    CZ: () => a,
    LB: () => l,
    O5: () => s,
    YC: () => o
}),
    n(47120),
    n(653041);
var r = n(433517),
    i = n(388032),
    o = (function (e) {
        return (e.CLASSIC = 'classic'), (e.RETRO = 'retro'), (e.BUBBLE = 'bop'), (e.DUCKY = 'ducky'), (e.LOFI = 'lofi'), (e.ASMR = 'asmr'), (e.DISCODO = 'discodo'), (e.HALLOWEEN = 'halloween'), (e.WINTER_HOLIDAY = 'winter_holiday'), e;
    })({});
let a = 'custom_notification_sounds_asmr',
    s = 'custom_notification_sounds_discodo';
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = c(e);
    return [
        {
            value: 'classic',
            label: i.NW.string(i.t.p3Hg5e),
            description: i.NW.string(i.t['4iA55u']),
            requirePremium: !1
        },
        {
            value: 'retro',
            label: i.NW.string(i.t.Rrwrnp),
            description: i.NW.string(i.t['zKG+ur']),
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: i.NW.string(i.t.aEsrnp),
            description: i.NW.string(i.t.fMUEj4),
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: i.NW.string(i.t['4TOv0t']),
            description: i.NW.string(i.t['1kbe6e']),
            requirePremium: !0
        },
        {
            value: 'bop',
            label: i.NW.string(i.t.s5Qo8P),
            description: i.NW.string(i.t.I39onp),
            requirePremium: !0
        },
        ...t
    ];
}
function c(e) {
    if (!e) return [];
    let t = [];
    return (
        r.K.get(s, !1) &&
            t.push({
                value: 'discodo',
                label: 'DISCODO',
                description: '๑(\u25D5‿\u25D5)๑',
                requirePremium: !0
            }),
        r.K.get(a, !1) &&
            t.push({
                value: 'asmr',
                label: i.NW.string(i.t['3SJZKC']),
                description: i.NW.formatToMarkdownString(i.t.MZlgQE, {}),
                requirePremium: !0
            }),
        t
    );
}
