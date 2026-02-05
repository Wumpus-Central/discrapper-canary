i.d(e, { t: () => c });
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(311907),
    u = i(397927),
    o = i(97260),
    d = i(117178),
    T = i(419954),
    A = i(532624),
    S = i(780964),
    E = i(652215),
    g = i(985018),
    _ = i(280973);
let c = (0, T.E2)(S.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
    Component: () => {
        let t = (0, a.bG)([A.Ay], () => A.Ay.getKeybindForAction(E.hCu.SAVE_CLIP, !0));
        r()(null != t, "Save clip keybind unset");
        let e = l.useCallback(
            (e) => {
                o.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        );
        return (0, n.jsx)(u.D0$, {
            label: g.intl.string(g.t.pf54EU),
            description: g.intl.string(g.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: _.g,
                children: (0, n.jsx)(d.A, { defaultValue: t.shortcut, onChange: e }),
            }),
        });
    },
});
