"use strict";
n.d(t, { K: () => a, t: () => s });
let i = { resolve: (e) => {} },
    r = new Promise((e, t) => {
        i.resolve = e;
    });
function s(e) {
    r.then(() => {
        e();
    });
}
function a() {
    i.resolve(null);
}
