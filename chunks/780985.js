n.d(t, {
    I: () => l,
    c: () => s,
});
var r = n(399606),
    i = n(594174),
    a = n(914788),
    o = n(880257);
let s = () => {
        let e = (0, o.Z)();
        return (0, r.e7)([a.Z, i.default], () => {
            if (!e) return i.default.getCurrentUser();
            let t = a.Z.getSelectedTeenId();
            if (null !== t) return i.default.getUser(t);
        });
    },
    l = (e) =>
        (0, r.e7)([i.default], () => {
            let t = i.default.getUser(e);
            if (null != t) return t;
        });
