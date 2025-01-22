function r(e, n, r) {
    let i = 0,
        a = e.length;
    for (; a > 0; ) {
        let o = (a / 2) | 0,
            s = i + o;
        0 >= r(e[s], n) ? ((i = ++s), (a -= o + 1)) : (a = o);
    }
    return i;
}
Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = r);
