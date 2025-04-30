var r = n(127849),
    i = n(507604),
    a = n(573078),
    o = n(503463),
    s = n(621523),
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
            a = {
                dotAll: 's',
                global: 'g',
                ignoreCase: 'i',
                multiline: 'm',
                sticky: 'y'
            };
        for (var o in (e && (a.hasIndices = 'd'), a)) i(o, a[o]);
        return Object.getOwnPropertyDescriptor(c, 'flags').get.call(t) !== r || n !== r;
    }) &&
    a(c, 'flags', {
        configurable: !0,
        get: o
    });
