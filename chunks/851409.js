Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = function (e, t, n) {
        let r = 0,
            i = e.length;
        for (; i > 0; ) {
            let o = (i / 2) | 0,
                a = r + o;
            0 >= n(e[a], t) ? ((r = ++a), (i -= o + 1)) : (i = o);
        }
        return r;
    });
