n.d(t, {
    $r: () => u,
    In: () => c,
    cz: () => l,
});
var r = n(399606),
    i = n(594174),
    a = n(473007),
    o = n(914788),
    s = n(880257);
let l = () => {
        let e = (0, s.Z)();
        return (0, r.e7)([o.Z, i.default], () => {
            if (!e) return i.default.getCurrentUser();
            let t = o.Z.getSelectedTeenId();
            if (null !== t) return i.default.getUser(t);
        });
    },
    c = (e) =>
        (0, r.e7)([i.default], () => {
            let t = i.default.getUser(e);
            if (null != t) return t;
        }),
    u = () => {
        let e = o.Z.getSelectedTeenId(),
            { hasLoadedSettings: t, isLoading: n } = (0, r.cj)([a.Z], () => ({
                hasLoadedSettings: null != e && a.Z.hasSettingsForUser(e),
                isLoading: a.Z.isLoading,
            }));
        return null !== e && !t && !n;
    };
