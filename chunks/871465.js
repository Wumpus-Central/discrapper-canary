n.d(t, {
    CZ: () => s,
    LB: () => l,
    O5: () => o,
    YC: () => a
}),
    n(47120),
    n(653041);
var i = n(433517),
    r = n(388032),
    a = (function (e) {
        return (e.CLASSIC = 'classic'), (e.RETRO = 'retro'), (e.BUBBLE = 'bop'), (e.DUCKY = 'ducky'), (e.LOFI = 'lofi'), (e.ASMR = 'asmr'), (e.DISCODO = 'discodo'), (e.HALLOWEEN = 'halloween'), (e.WINTER_HOLIDAY = 'winter_holiday'), e;
    })({});
let s = 'custom_notification_sounds_asmr',
    o = 'custom_notification_sounds_discodo';
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u(e);
    return [
        {
            value: 'classic',
            label: r.intl.string(r.t.p3Hg5e),
            description: r.intl.string(r.t['4iA55u']),
            requirePremium: !1
        },
        {
            value: 'retro',
            label: r.intl.string(r.t.Rrwrnp),
            description: r.intl.string(r.t['zKG+ur']),
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: r.intl.string(r.t.aEsrnp),
            description: r.intl.string(r.t.fMUEj4),
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: r.intl.string(r.t['4TOv0t']),
            description: r.intl.string(r.t['1kbe6e']),
            requirePremium: !0
        },
        {
            value: 'bop',
            label: r.intl.string(r.t.s5Qo8P),
            description: r.intl.string(r.t.I39onp),
            requirePremium: !0
        },
        ...t
    ];
}
function u(e) {
    if (!e) return [];
    let t = [];
    return (
        i.K.get(o, !1) &&
            t.push({
                value: 'discodo',
                label: 'DISCODO',
                description: '๑(\u25D5‿\u25D5)๑',
                requirePremium: !0
            }),
        i.K.get(s, !1) &&
            t.push({
                value: 'asmr',
                label: r.intl.string(r.t['3SJZKC']),
                description: r.intl.formatToMarkdownString(r.t.MZlgQE, {}),
                requirePremium: !0
            }),
        t
    );
}
