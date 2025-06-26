var n = r(127849),
    i = r(507604),
    s = r(573078),
    a = r(503463),
    o = r(621523),
    u = n.RegExp,
    h = u.prototype;
i &&
    o(function () {
        var t = !0;
        try {
            u('.', 'd');
        } catch (e) {
            t = !1;
        }
        var e = {},
            r = '',
            n = t ? 'dgimsy' : 'gimsy',
            i = function (t, n) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return (r += n), !0;
                    }
                });
            },
            s = {
                dotAll: 's',
                global: 'g',
                ignoreCase: 'i',
                multiline: 'm',
                sticky: 'y'
            };
        for (var a in (t && (s.hasIndices = 'd'), s)) i(a, s[a]);
        return Object.getOwnPropertyDescriptor(h, 'flags').get.call(e) !== n || r !== n;
    }) &&
    s(h, 'flags', {
        configurable: !0,
        get: a
    });
