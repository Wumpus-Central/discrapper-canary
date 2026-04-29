s.d(t, { K: () => i, t: () => a });
let r = { resolve: (e) => {} },
    n = new Promise((e, t) => {
        r.resolve = e;
    });
function a(e) {
    n.then(() => {
        e();
    });
}
function i() {
    r.resolve(null);
}
