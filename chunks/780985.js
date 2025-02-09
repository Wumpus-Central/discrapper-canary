n.d(t, {
    I: () => o,
    c: () => l
});
var i = n(399606),
    r = n(594174),
    a = n(914788),
    s = n(880257);
let l = () => {
        let e = (0, s.Z)();
        return (0, i.e7)([a.Z, r.default], () => {
            if (!e) return r.default.getCurrentUser();
            let t = a.Z.getSelectedTeenId();
            if (null !== t) return r.default.getUser(t);
        });
    },
    o = (e) =>
        (0, i.e7)([r.default], () => {
            let t = r.default.getUser(e);
            if (null != t) return t;
        });
