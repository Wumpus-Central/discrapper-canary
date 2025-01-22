var i = r(67867),
    a = r(611345),
    o = r(474883),
    s = r(520078),
    l = r(741674),
    u = r(821819)(function () {
        return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }),
    c = function () {
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
        forced: u || !c()
    },
    {
        push: function (e) {
            var n = a(this),
                r = o(n),
                i = arguments.length;
            l(r + i);
            for (var u = 0; u < i; u++) (n[r] = arguments[u]), r++;
            return s(n, r), r;
        }
    }
);
