(n.d(t, { C: () => l }), n(388685));
var r = n(73800);
let l = () => {
    let [e, t] = (0, r.useState)(new Set());
    return {
        filterSettings: e,
        onChange: (e, n) => {
            t((t) => {
                let r = new Set(t);
                return (n ? r.add(e) : r.delete(e), r);
            });
        }
    };
};
