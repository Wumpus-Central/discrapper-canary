n.d(i, { Z: () => c });
var o = n(757490),
    t = {
        masculine: 'ostatni',
        feminine: 'ostatnia'
    },
    a = {
        masculine: 'ten',
        feminine: 'ta'
    },
    r = {
        masculine: 'następny',
        feminine: 'następna'
    },
    u = {
        0: 'feminine',
        1: 'masculine',
        2: 'masculine',
        3: 'feminine',
        4: 'masculine',
        5: 'masculine',
        6: 'feminine'
    };
function d(e, i, n, d) {
    if ((0, o.Z)(i, n, d)) s = a;
    else if ('lastWeek' === e) s = t;
    else if ('nextWeek' === e) s = r;
    else throw Error('Cannot determine adjectives for token '.concat(e));
    var s,
        c = s[u[i.getUTCDay()]];
    return "'".concat(c, "' eeee 'o' p");
}
var s = {
    lastWeek: d,
    yesterday: "'wczoraj o' p",
    today: "'dzisiaj o' p",
    tomorrow: "'jutro o' p",
    nextWeek: d,
    other: 'P'
};
let c = function (e, i, n, o) {
    var t = s[e];
    return 'function' == typeof t ? t(e, i, n, o) : t;
};
