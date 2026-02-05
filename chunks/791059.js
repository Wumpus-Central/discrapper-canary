"use strict";
n.d(t, { A: () => r });
let r = {
    makeMemoizer: function (e) {
        let t = new Map();
        return (n) => {
            let r = t.get(n);
            return void 0 === r && ((r = e(n)), t.set(n, r)), r;
        };
    },
};
