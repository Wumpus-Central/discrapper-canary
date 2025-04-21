n.d(t, {
    CZ: () => o,
    LB: () => l,
    O5: () => s,
    YC: () => a
}),
    n(388685),
    n(539854);
var r = n(433517),
    i = n(388032),
    a = (function (e) {
        return (e.CLASSIC = 'classic'), (e.RETRO = 'retro'), (e.BUBBLE = 'bop'), (e.DUCKY = 'ducky'), (e.LOFI = 'lofi'), (e.ASMR = 'asmr'), (e.DISCODO = 'discodo'), (e.HALLOWEEN = 'halloween'), (e.WINTER_HOLIDAY = 'winter_holiday'), e;
    })({});
let o = 'custom_notification_sounds_asmr',
    s = 'custom_notification_sounds_discodo';
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = c(e);
    return [
        {
            value: 'classic',
            label: i.intl.string(i.t.p3Hg5e),
            description: i.intl.string(i.t['4iA55u']),
            requirePremium: !1
        },
        {
            value: 'retro',
            label: i.intl.string(i.t.Rrwrnp),
            description: i.intl.string(i.t['zKG+ur']),
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: i.intl.string(i.t.aEsrnp),
            description: i.intl.string(i.t.fMUEj4),
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: i.intl.string(i.t['4TOv0t']),
            description: i.intl.string(i.t['1kbe6e']),
            requirePremium: !0
        },
        {
            value: 'bop',
            label: i.intl.string(i.t.s5Qo8P),
            description: i.intl.string(i.t.I39onp),
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
        r.K.get(o, !1) &&
            t.push({
                value: 'asmr',
                label: i.intl.string(i.t['3SJZKC']),
                description: i.intl.formatToMarkdownString(i.t.MZlgQE, {}),
                requirePremium: !0
            }),
        t
    );
}
