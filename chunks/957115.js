n.d(t, { B: () => o }), n(539854);
var r = n(392711),
    a = n.n(r);
let o = (e, t) => {
    let n = a().shuffle(e),
        r = n.findIndex((e) => e.value === t);
    if (r > -1) {
        let e = n[r];
        n.splice(r, 1), n.push(e);
    }
    return n;
};
