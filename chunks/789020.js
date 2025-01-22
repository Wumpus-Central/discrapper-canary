var i = r(161581),
    a = r(325008),
    o = r(4340),
    s = r(572609),
    l = r(936940),
    u = i.RegExp,
    c = u.prototype;
a &&
    l(function () {
        var e = !0;
        try {
            u('.', 'd');
        } catch (n) {
            e = !1;
        }
        var n = {},
            r = '',
            i = e ? 'dgimsy' : 'gimsy',
            a = function (e, i) {
                Object.defineProperty(n, e, {
                    get: function () {
                        return (r += i), !0;
                    }
                });
            },
            o = {
                dotAll: 's',
                global: 'g',
                ignoreCase: 'i',
                multiline: 'm',
                sticky: 'y'
            };
        for (var s in (e && (o.hasIndices = 'd'), o)) a(s, o[s]);
        return Object.getOwnPropertyDescriptor(c, 'flags').get.call(n) !== i || r !== i;
    }) &&
    o(c, 'flags', {
        configurable: !0,
        get: s
    });
