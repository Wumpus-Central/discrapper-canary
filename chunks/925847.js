n.d(t, { A: () => r });
var o = n(492462);
let r = () => {
    let { load_id: e } = (0, o.parse)(window.location.search);
    return Array.isArray(e) ? e[0] : e;
};
