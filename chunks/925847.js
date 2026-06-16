"use strict";
n.d(t, { A: () => r });
var i = n(492462);
let r = () => {
    let { load_id: e } = (0, i.parse)(window.location.search);
    return Array.isArray(e) ? e[0] : e;
};
