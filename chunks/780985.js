n.d(t, {
    I: function () {
        return o;
    },
    c: function () {
        return l;
    }
});
var i = n(399606),
    r = n(594174),
    s = n(914788),
    a = n(880257);
let l = () => {
        let e = (0, a.Z)();
        return (0, i.e7)([s.Z, r.default], () => {
            if (!e) return r.default.getCurrentUser();
            let t = s.Z.getSelectedTeenId();
            if (null !== t) return r.default.getUser(t);
        });
    },
    o = (e) =>
        (0, i.e7)([r.default], () => {
            let t = r.default.getUser(e);
            if (null != t) return t;
        });
