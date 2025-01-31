function i(e, t) {
    let n = 0,
        i = Math.min(e.length, t.length);
    for (let r = 0; r < i; r++) n |= e.charCodeAt(r) ^ t.charCodeAt(r);
    return 0 === n && e.length === t.length;
}
n.d(t, { y: () => i });
