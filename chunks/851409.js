Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = function (e, t, n) {
        let r = 0,
            i = e.length;
        for (; i > 0; ) {
            let a = (i / 2) | 0,
                o = r + a;
            0 >= n(e[o], t) ? ((r = ++o), (i -= a + 1)) : (i = a);
        }
        return r;
    });
