n.d(e, { Z: () => g });
var i = n(54381),
    l = n(793030),
    r = n(442837),
    u = n(846027),
    s = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    E = n(518596),
    d = n(595373),
    S = n(981631),
    T = n(388032),
    I = n(53179);
function O() {
    let t = (0, r.e7)([o.Z], () => {
            let { shortcut: t } = o.Z.getModeOptions();
            return t;
        }),
        e = T.intl.format(T.t.HVvn5T, {
            onClick: () => (0, E.openUserSettings)(c.n.KEYBINDS_PANEL, { section: S.oAB.KEYBINDS }),
        });
    return (0, i.jsx)(l.gNt, {
        label: T.intl.string(T.t["o+BJQR"]),
        description: e,
        layout: "horizontal-responsive",
        children: (0, i.jsx)("div", {
            className: I.keybindContainer,
            children: (0, i.jsx)(s.Z, {
                defaultValue: t,
                onChange: (t) => u.Z.setMode(S.pM4.PUSH_TO_TALK, { shortcut: t }),
            }),
        }),
    });
}
let g = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    usePredicate: d.J,
    render: () => (0, i.jsx)(O, {}),
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
});
