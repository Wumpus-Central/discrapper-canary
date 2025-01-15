n.d(t, {
    I: function () {
        return o;
    },
    c: function () {
        return l;
    }
});
var i = n(399606),
    s = n(594174),
    r = n(914788),
    a = n(880257);
let l = () => {
        let e = (0, a.Z)();
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
