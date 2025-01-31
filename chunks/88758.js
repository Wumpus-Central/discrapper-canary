n.d(t, { T: () => i });
var i = function (e, t, n, i, r) {
    var a = r.clientWidth,
        s = r.clientHeight,
        o = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
        l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
        u = o - (r.getBoundingClientRect().left + window.pageXOffset),
        c = l - (r.getBoundingClientRect().top + window.pageYOffset);
    if ('vertical' === n) {
        var d = void 0;
        if (((d = c < 0 ? 0 : c > s ? 1 : Math.round((100 * c) / s) / 100), t.a !== d))
            return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: d,
                source: 'rgb'
            };
    } else {
        var f = void 0;
        if (i !== (f = u < 0 ? 0 : u > a ? 1 : Math.round((100 * u) / a) / 100))
            return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: f,
                source: 'rgb'
            };
    }
    return null;
};
