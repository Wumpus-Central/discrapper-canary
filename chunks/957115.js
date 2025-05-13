n.d(t, { B: () => a }), n(539854);
var i = n(392711),
    o = n.n(i);
let a = (e, t) => {
    let n = o().shuffle(e),
        i = n.findIndex((e) => e.value === t);
    if (i > -1) {
        let e = n[i];
        n.splice(i, 1), n.push(e);
    }
    return n;
};
