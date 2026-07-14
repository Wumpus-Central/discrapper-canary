n.d(t, { K: () => l, t: () => r });
let i = { resolve: (e) => {} },
    s = new Promise((e, t) => {
        i.resolve = e;
    });
function r(e) {
    s.then(() => {
        e();
    });
}
function l() {
    i.resolve(null);
}
