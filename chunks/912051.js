let l;
function s() {
    return void 0 === l && (l = void 0 === Intl?.Segmenter ? null : new Intl.Segmenter()), l;
}
function a(e) {
    let t = s();
    if (null == t) return e.length;
    let n = t.segment(e),
        l = 0;
    for (let e of n) l += 1;
    return l;
}
function r(e) {
    let t = s();
    return null == t ? Array.from(e) : Array.from(t.segment(e), (e) => e.segment);
}
n.d(t, { W: () => a, p: () => r });
