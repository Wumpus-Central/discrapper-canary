n.d(t, { B: () => o }), n(653041);
var i = n(392711),
    l = n.n(i);
let o = (e, t) => {
    let n = l().shuffle(e),
        i = n.findIndex((e) => e.value === t);
    if (i > -1) {
        let e = n[i];
        n.splice(i, 1), n.push(e);
    }
    return n;
};
