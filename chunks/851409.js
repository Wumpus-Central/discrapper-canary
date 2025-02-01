function n(e, t, n) {
    let i = 0,
        r = e.length;
    for (; r > 0; ) {
        let a = (r / 2) | 0,
            s = i + a;
        0 >= n(e[s], t) ? ((i = ++s), (r -= a + 1)) : (r = a);
    }
    return i;
}
Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
