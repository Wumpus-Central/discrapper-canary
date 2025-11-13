n.d(e, { Z: () => O });
var i = n(951288),
    l = n(793030),
    u = n(442837),
    r = n(846027),
    s = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    E = n(595373),
    S = n(981631),
    d = n(388032),
    T = n(53179);
function I() {
    let t = (0, u.e7)([o.Z], () => {
        let { shortcut: t } = o.Z.getModeOptions();
        return t;
    });
    return (0, i.jsx)(l.gNt, {
        label: d.intl.string(d.t["o+BJQR"]),
        layout: "horizontal",
        children: (0, i.jsx)("div", {
            className: T.keybindContainer,
            children: (0, i.jsx)(s.Z, {
                defaultValue: t,
                onChange: (t) => r.Z.setMode(S.pM4.PUSH_TO_TALK, { shortcut: t }),
            }),
        }),
    });
}
let O = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    usePredicate: E.p,
    render: () => (0, i.jsx)(I, {}),
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
});
