n.d(e, { Z: () => T });
var i = n(951288),
    l = n(442837),
    u = n(846027),
    r = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(269876),
    c = n(65154),
    E = n(388032);
let S = (0, r.ON)(a.n.VOICE_INPUT_SENSITIVITY_SLIDER, {
        useSearchTerms: () => [E.intl.string(E.t["sqUm+k"]), E.intl.string(E.t.nuFtHH)],
        render: () => (0, i.jsx)(o.B, {}),
    }),
    d = (0, r.qs)(a.n.VOICE_INPUT_AUTO_SENSITIVITY_SETTING, {
        useTitle: () => E.intl.string(E.t.I1Zuq0),
        useSearchTerms: () => [E.intl.string(E.t.I1Zuq0), E.intl.string(E.t.nuFtHH)],
        useValue: () =>
            (0, l.e7)([s.Z], () => {
                let { autoThreshold: t } = s.Z.getModeOptions();
                return t;
            }),
        setValue: (t) => {
            let e = s.Z.getMode(),
                { threshold: n } = s.Z.getModeOptions();
            u.Z.setMode(e, {
                autoThreshold: t,
                threshold: n,
            });
        },
        usePredicate: () => (0, l.e7)([s.Z], () => s.Z.supports(c.AN.AUTOMATIC_VAD)),
    }),
    T = (0, r.Uc)(a.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
        useTitle: () => E.intl.string(E.t["sqUm+k"]),
        usePredicate: () =>
            (0, l.e7)([s.Z], () => {
                let t = s.Z.getMode(),
                    e = s.Z.isInputProfileCustom();
                return t === c.pM.VOICE_ACTIVITY && e;
            }),
        buildLayout: () => [d, S],
    });
