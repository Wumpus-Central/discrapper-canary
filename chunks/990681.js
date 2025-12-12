function r(e) {
    let t,
        n = e[0],
        r = 1;
    for (; r < e.length; ) {
        let i = e[r],
            a = e[r + 1];
        if (((r += 2), ("optionalAccess" === i || "optionalCall" === i) && null == n)) return;
        "access" === i || "optionalAccess" === i
            ? ((t = n), (n = a(n)))
            : ("call" === i || "optionalCall" === i) && ((n = a((...e) => n.call(t, ...e))), (t = void 0));
    }
    return n;
}
n.d(t, { x: () => r });
