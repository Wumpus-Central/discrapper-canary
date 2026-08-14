"use strict";
n.d(t, { K: () => s, t: () => a });
let i = { resolve: (e) => {} },
    r = new Promise((e, t) => {
        i.resolve = e;
    });
function a(e) {
    r.then(() => {
        e();
    });
}
function s() {
    i.resolve(null);
}
