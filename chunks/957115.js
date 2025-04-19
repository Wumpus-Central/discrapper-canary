n.d(t, { B: () => i }), n(539854);
var o = n(392711),
    a = n.n(o);
let i = (e, t) => {
    let n = a().shuffle(e),
        o = n.findIndex((e) => e.value === t);
    if (o > -1) {
        let e = n[o];
        n.splice(o, 1), n.push(e);
    }
    return n;
};
