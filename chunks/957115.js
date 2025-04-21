n.d(t, { B: () => a }), n(539854);
var r = n(392711),
    l = n.n(r);
let a = (e, t) => {
    let n = l().shuffle(e),
        r = n.findIndex((e) => e.value === t);
    if (r > -1) {
        let e = n[r];
        n.splice(r, 1), n.push(e);
    }
    return n;
};
