n.d(t, { B: () => s }), n(539854);
var a = n(392711),
    l = n.n(a);
let s = (e, t) => {
    let n = l().shuffle(e),
        a = n.findIndex((e) => e.value === t);
    if (a > -1) {
        let e = n[a];
        n.splice(a, 1), n.push(e);
    }
    return n;
};
