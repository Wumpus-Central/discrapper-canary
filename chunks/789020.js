var i = n(161581),
    r = n(325008),
    a = n(4340),
    s = n(572609),
    o = n(936940),
    l = i.RegExp,
    u = l.prototype;
r &&
    o(function () {
        var e = !0;
        try {
            l('.', 'd');
        } catch (t) {
            e = !1;
        }
        var t = {},
            n = '',
            i = e ? 'dgimsy' : 'gimsy',
            r = function (e, i) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return (n += i), !0;
                    }
                });
            },
            a = {
                dotAll: 's',
                global: 'g',
                ignoreCase: 'i',
                multiline: 'm',
                sticky: 'y'
            };
        for (var s in (e && (a.hasIndices = 'd'), a)) r(s, a[s]);
        return Object.getOwnPropertyDescriptor(u, 'flags').get.call(t) !== i || n !== i;
    }) &&
    a(u, 'flags', {
        configurable: !0,
        get: s
    });
