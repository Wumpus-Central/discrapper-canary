"use strict";
n.d(t, { A: () => i });
var r = n(492462);
let i = () => {
    let { load_id: e } = (0, r.parse)(window.location.search);
    return Array.isArray(e) ? e[0] : e;
};
