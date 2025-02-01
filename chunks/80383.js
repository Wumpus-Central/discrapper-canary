n.d(t, { Z: () => r });
var i = n(119352);
let r = {
    y: function (e, t) {
        var n = e.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
        return (0, i.Z)('yy' === t ? r % 100 : r, t.length);
    },
    M: function (e, t) {
        var n = e.getUTCMonth();
        return 'M' === t ? String(n + 1) : (0, i.Z)(n + 1, 2);
    },
    d: function (e, t) {
        return (0, i.Z)(e.getUTCDate(), t.length);
    },
    a: function (e, t) {
        var n = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch (t) {
            case 'a':
            case 'aa':
                return n.toUpperCase();
            case 'aaa':
                return n;
            case 'aaaaa':
                return n[0];
            default:
                return 'am' === n ? 'a.m.' : 'p.m.';
        }
    },
    h: function (e, t) {
        return (0, i.Z)(e.getUTCHours() % 12 || 12, t.length);
    },
    H: function (e, t) {
        return (0, i.Z)(e.getUTCHours(), t.length);
    },
    m: function (e, t) {
        return (0, i.Z)(e.getUTCMinutes(), t.length);
    },
    s: function (e, t) {
        return (0, i.Z)(e.getUTCSeconds(), t.length);
    },
    S: function (e, t) {
        var n = t.length,
            r = Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3));
        return (0, i.Z)(r, t.length);
    }
};
