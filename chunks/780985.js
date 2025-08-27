n.d(t, {
    $r: () => u,
    In: () => c,
    cz: () => l,
});
var r = n(399606),
    i = n(594174),
    o = n(473007),
    a = n(914788),
    s = n(880257);
let l = () => {
        let e = (0, s.Z)();
        return (0, r.e7)([a.Z, i.default], () => {
            if (!e) return i.default.getCurrentUser();
            let t = a.Z.getSelectedTeenId();
            if (null !== t) return i.default.getUser(t);
        });
    },
    c = (e) =>
        (0, r.e7)([i.default], () => {
            let t = i.default.getUser(e);
            if (null != t) return t;
        }),
    u = () => {
        let e = a.Z.getSelectedTeenId(),
            { hasLoadedSettings: t, isLoading: n } = (0, r.cj)([o.Z], () => ({
                hasLoadedSettings: null != e && o.Z.hasSettingsForUser(e),
                isLoading: o.Z.isLoading,
            }));
        return null !== e && !t && !n;
    };
