n.d(e, { h: () => g });
var i = n(54381),
    l = n(793030),
    s = n(442837),
    u = n(846027),
    r = n(825209),
    a = n(509613),
    o = n(131951),
    T = n(313789),
    S = n(518596),
    c = n(595373),
    E = n(981631),
    d = n(388032),
    _ = n(318120);
let g = (0, a.ON)(T.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
    usePredicate: c.J,
    Component: function () {
        let t = (0, s.e7)([o.Z], () => {
                let { shortcut: t } = o.Z.getModeOptions();
                return t;
            }),
            e = d.intl.format(d.t.HVvn5T, {
                onClick: () => (0, S.openUserSettings)(T.n.KEYBINDS_PANEL, { section: E.oAB.KEYBINDS }),
            });
        return (0, i.jsx)(l.gNt, {
            label: d.intl.string(d.t["o+BJQR"]),
            description: e,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: _.keybindContainer,
                children: (0, i.jsx)(r.Z, {
                    defaultValue: t,
                    onChange: (t) => u.Z.setMode(E.pM4.PUSH_TO_TALK, { shortcut: t }),
                }),
            }),
        });
    },
});
