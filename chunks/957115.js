n.d(t, { B: () => a }), n(539854);
var l = n(392711),
    r = n.n(l);
let a = (e, t) => {
    let n = r().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        n.splice(l, 1), n.push(e);
    }
    return n;
};
