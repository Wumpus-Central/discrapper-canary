n.d(t, { HF: () => d, f8: () => c, zF: () => E, c: () => o });
var i = n(945810),
    a = n(731699),
    r = n(17928);
let s = "hide_icymi_tab",
    l = (0, i.mj)({
        name: "2026-04-icymi-staff-only",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function o(e) {
    let t = (0, r.bG)([a.A], () => a.A.get(s), [s]),
        { enabled: n } = l.useConfig({ location: e }),
        i = _.useConfig({ location: e });
    return !t && n && i.icymiDesktopEnabled;
}
function d(e) {
    let t = a.A.get(s),
        { enabled: n } = l.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: i } = _.getConfig({ location: e });
        return !t && n && i;
    }
}
let c = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    _ = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    }),
    E = (0, i.mj)({
        name: "2026-03-icymi-sunset-banner",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
