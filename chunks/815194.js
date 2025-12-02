n.d(e, { Z: () => _ });
var i = n(54381),
    l = n(793030),
    s = n(442837),
    r = n(846027),
    u = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(518596),
    E = n(595373),
    S = n(981631),
    I = n(388032),
    T = n(53179);
function g() {
    let t = (0, s.e7)([o.Z], () => {
            let { shortcut: t } = o.Z.getModeOptions();
            return t;
        }),
        e = I.intl.format(I.t.HVvn5T, {
            onClick: () => (0, d.openUserSettings)(c.n.KEYBINDS_PANEL, { section: S.oAB.KEYBINDS }),
        });
    return (0, i.jsx)(l.gNt, {
        label: I.intl.string(I.t["o+BJQR"]),
        description: e,
        layout: "horizontal-responsive",
        children: (0, i.jsx)("div", {
            className: T.keybindContainer,
            children: (0, i.jsx)(u.Z, {
                defaultValue: t,
                onChange: (t) => r.Z.setMode(S.pM4.PUSH_TO_TALK, { shortcut: t }),
            }),
        }),
    });
}
let _ = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    usePredicate: E.J,
    render: () => (0, i.jsx)(g, {}),
    useSearchTerms: () => [I.intl.string(I.t["pS+K2L"]), I.intl.string(I.t.nuFtHH)],
});
