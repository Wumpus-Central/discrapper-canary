n.d(t, { HF: () => o, f8: () => E, zF: () => c, c: () => l });
var i = n(945810),
    r = n(731699),
    a = n(17928);
let s = "hide_icymi_tab",
    _ = (0, i.mj)({
        name: "2026-04-icymi-staff-only",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l(e) {
    let t = (0, a.bG)([r.A], () => r.A.get(s), [s]),
        { enabled: n } = _.useConfig({ location: e }),
        i = d.useConfig({ location: e });
    return !t && n && i.icymiDesktopEnabled;
}
function o(e) {
    let t = r.A.get(s),
        { enabled: n } = _.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: i } = d.getConfig({ location: e });
        return !t && n && i;
    }
}
let E = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    }),
    c = (0, i.mj)({
        name: "2026-03-icymi-sunset-banner",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
