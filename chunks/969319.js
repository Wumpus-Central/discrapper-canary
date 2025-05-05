r.d(t, { U: () => a });
var n = {},
    o = function (e, t, r, n) {
        if ('undefined' == typeof document && !n) return null;
        var o = n ? new n() : document.createElement('canvas');
        (o.width = 2 * r), (o.height = 2 * r);
        var a = o.getContext('2d');
        return a ? ((a.fillStyle = e), a.fillRect(0, 0, o.width, o.height), (a.fillStyle = t), a.fillRect(0, 0, r, r), a.translate(r, r), a.fillRect(0, 0, r, r), o.toDataURL()) : null;
    },
    a = function (e, t, r, a) {
        var i = e + '-' + t + '-' + r + (a ? '-server' : '');
        if (n[i]) return n[i];
        var l = o(e, t, r, a);
        return (n[i] = l), l;
    };
