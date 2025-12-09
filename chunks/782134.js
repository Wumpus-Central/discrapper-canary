n.d(e, { q: () => g });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(442837),
    u = n(846027),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(269876),
    T = n(65154),
    E = n(388032),
    S = n(670302);
function I() {
    let t = (0, r.e7)([o.Z], () => o.Z.getModeOptions().autoThreshold),
        e = l.useCallback((t) => {
            let e = o.Z.getMode(),
                { threshold: n } = o.Z.getModeOptions();
            u.Z.setMode(e, {
                autoThreshold: t,
                threshold: n,
            });
        }, []),
        n = (0, r.e7)([o.Z], () => o.Z.supports(T.AN.AUTOMATIC_VAD)),
        { volume: a, isSpeaking: c } = (0, d.Kq)(),
        I = (0, r.e7)([o.Z], () => o.Z.isEnabled()),
        g = l.useMemo(
            () =>
                !I &&
                (0, i.jsx)("div", {
                    className: S.noInputDevicesDetectedWarning,
                    children: (0, i.jsx)(s.M14, {
                        type: "warning",
                        children: E.intl.format(E.t["O13I+O"], { onEnableClick: () => u.Z.enable(!0) }),
                    }),
                }),
            [I],
        ),
        _ = l.useMemo(() => (t ? E.intl.string(E.t.JsbzjA) : E.intl.string(E.t.MLmyMY)), [t]),
        O = l.useId(),
        N = l.useId();
    return n
        ? (0, i.jsxs)("fieldset", {
              "aria-describedby": N,
              children: [
                  (0, i.jsx)(s.nn4, {
                      tag: "legend",
                      id: O,
                      children: E.intl.string(E.t.GByLar),
                  }),
                  (0, i.jsx)(s.nn4, {
                      id: N,
                      children: _,
                  }),
                  (0, i.jsxs)(s.Kqy, {
                      direction: "vertical",
                      gap: 8,
                      children: [
                          (0, i.jsx)(s.rsf, {
                              label: E.intl.string(E.t.lY6j47),
                              description: _,
                              checked: t,
                              onChange: e,
                          }),
                          t
                              ? (0, i.jsx)(d.NP, {
                                    isSpeaking: c,
                                    className: S.autoThresholdSlider,
                                    ariaDescribedBy: N,
                                    ariaLabelledBy: O,
                                })
                              : (0, i.jsx)(d.t8, {
                                    volume: a,
                                    ariaDescribedBy: N,
                                    ariaLabelledBy: O,
                                }),
                          g,
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(s.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [
                  (0, i.jsx)(s.gNt, {
                      label: E.intl.string(E.t["sqUm+k"]),
                      description: _,
                      layout: "vertical",
                      children: (e) =>
                          t
                              ? (0, i.jsx)(d.NP, {
                                    isSpeaking: c,
                                    className: S.autoThresholdSlider,
                                    id: e.controlId,
                                    ariaDescribedBy: e.describedById,
                                    ariaLabelledBy: e.labelId,
                                })
                              : (0, i.jsx)(d.t8, {
                                    volume: a,
                                    id: e.controlId,
                                    ariaDescribedBy: e.describedById,
                                    ariaLabelledBy: e.labelId,
                                }),
                  }),
                  g,
              ],
          });
}
let g = (0, a.ON)(c.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [E.intl.string(E.t["sqUm+k"]), E.intl.string(E.t.I1Zuq0), E.intl.string(E.t.nuFtHH)],
    usePredicate: () =>
        (0, r.e7)([o.Z], () => {
            let t = o.Z.getMode(),
                e = o.Z.isInputProfileCustom();
            return t === T.pM.VOICE_ACTIVITY && e;
        }),
    render: () => (0, i.jsx)(I, {}),
});
