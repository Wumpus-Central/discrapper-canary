n.d(e, { h: () => I });
var i = n(54381),
    l = n(793030),
    s = n(442837),
    u = n(846027),
    r = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(518596),
    S = n(595373),
    T = n(981631),
    E = n(388032),
    g = n(53179);
let I = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)],
    usePredicate: S.J,
    Component: function () {
        let t = (0, s.e7)([o.Z], () => {
                let { shortcut: t } = o.Z.getModeOptions();
                return t;
            }),
            e = E.intl.format(E.t.HVvn5T, {
                onClick: () => (0, d.openUserSettings)(c.n.KEYBINDS_PANEL, { section: T.oAB.KEYBINDS }),
            });
        return (0, i.jsx)(l.gNt, {
            label: E.intl.string(E.t["o+BJQR"]),
            description: e,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: g.keybindContainer,
                children: (0, i.jsx)(r.Z, {
                    defaultValue: t,
                    onChange: (t) => u.Z.setMode(T.pM4.PUSH_TO_TALK, { shortcut: t }),
                }),
            }),
        });
    },
});
