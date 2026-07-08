function r(n) {
    if (n.length < 2) return null;
    let l = 0;
    for (let t of n) t && l++;
    let t = n.length - l;
    return 0 === l || 0 === t || l === t ? null : l > t ? "mark-optional" : "mark-required";
}
function u(n, l) {
    return n ? ("mark-optional" === n ? (l ? null : "optional") : l ? "required" : null) : null;
}
t.d(l, { n: () => r, t: () => u });
