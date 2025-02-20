var r = n(161581),
    i = n(325008),
    o = n(4340),
    a = n(572609),
    s = n(936940),
    l = r.RegExp,
    c = l.prototype;
i &&
    s(function () {
        var e = !0;
        try {
            l('.', 'd');
        } catch (t) {
            e = !1;
        }
        var t = {},
            n = '',
            r = e ? 'dgimsy' : 'gimsy',
            i = function (e, r) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return (n += r), !0;
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
        for (var a in (e && (o.hasIndices = 'd'), o)) i(a, o[a]);
        return Object.getOwnPropertyDescriptor(c, 'flags').get.call(t) !== r || n !== r;
    }) &&
    o(c, 'flags', {
        configurable: !0,
        get: a
    });
