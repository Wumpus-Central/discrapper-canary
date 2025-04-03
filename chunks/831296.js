var e = n(67867),
    o = n(611345),
    i = n(474883),
    u = n(520078),
    s = n(741674);
e(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            n(821819)(function () {
                return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
            }) ||
            !(function () {
                try {
                    Object.defineProperty([], 'length', { writable: !1 }).push();
                } catch (t) {
                    return t instanceof TypeError;
                }
            })()
    },
    {
        push: function (t) {
            var r = o(this),
                n = i(r),
                e = arguments.length;
            s(n + e);
            for (var c = 0; c < e; c++) (r[n] = arguments[c]), n++;
            return u(r, n), n;
        }
    }
);
