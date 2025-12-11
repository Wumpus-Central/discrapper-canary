n.d(e, { h: () => I });
var i = n(54381),
    l = n(793030),
    s = n(442837),
    r = n(846027),
    u = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(518596),
    S = n(595373),
    g = n(981631),
    T = n(388032),
    E = n(318120);
let I = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
    usePredicate: S.J,
    Component: function () {
        let t = (0, s.e7)([o.Z], () => {
                let { shortcut: t } = o.Z.getModeOptions();
                return t;
            }),
            e = T.intl.format(T.t.HVvn5T, {
                onClick: () => (0, d.openUserSettings)(c.n.KEYBINDS_PANEL, { section: g.oAB.KEYBINDS }),
            });
        return (0, i.jsx)(l.gNt, {
            label: T.intl.string(T.t["o+BJQR"]),
            description: e,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: E.keybindContainer,
                children: (0, i.jsx)(u.Z, {
                    defaultValue: t,
                    onChange: (t) => r.Z.setMode(g.pM4.PUSH_TO_TALK, { shortcut: t }),
                }),
            }),
        });
    },
});
