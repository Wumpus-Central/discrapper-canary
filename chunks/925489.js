n.d(t, { T: () => i });
var i = function (e, t, n, i) {
    var r = i.clientWidth,
        a = i.clientHeight,
        s = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
        o = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
        l = s - (i.getBoundingClientRect().left + window.pageXOffset),
        u = o - (i.getBoundingClientRect().top + window.pageYOffset);
    if ('vertical' === t) {
        var c = void 0;
        if (((c = u < 0 ? 359 : u > a ? 0 : (360 * (-((100 * u) / a) + 100)) / 100), n.h !== c))
            return {
                h: c,
                s: n.s,
                l: n.l,
                a: n.a,
                source: 'hsl'
            };
    } else {
        var d = void 0;
        if (((d = l < 0 ? 0 : l > r ? 359 : (((100 * l) / r) * 360) / 100), n.h !== d))
            return {
                h: d,
                s: n.s,
                l: n.l,
                a: n.a,
                source: 'hsl'
            };
    }
    return null;
};
