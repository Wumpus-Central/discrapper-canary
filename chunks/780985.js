n.d(t, {
    I: () => o,
    c: () => a
});
var i = n(399606),
    s = n(594174),
    r = n(914788),
    l = n(880257);
let a = () => {
        let e = (0, l.Z)();
        return (0, i.e7)([r.Z, s.default], () => {
            if (!e) return s.default.getCurrentUser();
            let t = r.Z.getSelectedTeenId();
            if (null !== t) return s.default.getUser(t);
        });
    },
    o = (e) =>
        (0, i.e7)([s.default], () => {
            let t = s.default.getUser(e);
            if (null != t) return t;
        });
