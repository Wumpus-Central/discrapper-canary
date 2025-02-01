var i = n(67867),
    r = n(611345),
    a = n(474883),
    s = n(520078),
    o = n(741674),
    l = n(821819)(function () {
        return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }),
    u = function () {
        try {
            Object.defineProperty([], 'length', { writable: !1 }).push();
        } catch (e) {
            return e instanceof TypeError;
        }
    };
i(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: l || !u()
    },
    {
        push: function (e) {
            var t = r(this),
                n = a(t),
                i = arguments.length;
            o(n + i);
            for (var l = 0; l < i; l++) (t[n] = arguments[l]), n++;
            return s(t, n), n;
        }
    }
);
