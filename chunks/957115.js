n.d(t, { B: () => l }), n(539854);
var r = n(392711),
    a = n.n(r);
let l = (e, t) => {
    let n = a().shuffle(e),
        r = n.findIndex((e) => e.value === t);
    if (r > -1) {
        let e = n[r];
        n.splice(r, 1), n.push(e);
    }
    return n;
};
