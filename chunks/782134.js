n.d(e, { Z: () => g });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    s = n(442837),
    u = n(846027),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(269876),
    E = n(65154),
    S = n(388032),
    T = n(670302);
function I() {
    let t = (0, s.e7)([o.Z], () => o.Z.getModeOptions().autoThreshold),
        e = r.useCallback((t) => {
            let e = o.Z.getMode(),
                { threshold: n } = o.Z.getModeOptions();
            u.Z.setMode(e, {
                autoThreshold: t,
                threshold: n,
            });
        }, []),
        n = (0, s.e7)([o.Z], () => o.Z.supports(E.AN.AUTOMATIC_VAD)),
        { volume: a, isSpeaking: c } = (0, d.Kq)(),
        I = (0, s.e7)([o.Z], () => o.Z.isEnabled()),
        g = r.useMemo(
            () =>
                !I &&
                (0, i.jsx)("div", {
                    className: T.noInputDevicesDetectedWarning,
                    children: (0, i.jsx)(l.M14, {
                        type: "warning",
                        children: S.intl.format(S.t["O13I+O"], { onEnableClick: () => u.Z.enable(!0) }),
                    }),
                }),
            [I],
        ),
        O = r.useMemo(() => (t ? S.intl.string(S.t.JsbzjA) : S.intl.string(S.t.MLmyMY)), [t]),
        _ = r.useId(),
        N = r.useId();
    return n
        ? (0, i.jsxs)("fieldset", {
              "aria-describedby": N,
              children: [
                  (0, i.jsx)(l.nn4, {
                      tag: "legend",
                      id: _,
                      children: S.intl.string(S.t.GByLar),
                  }),
                  (0, i.jsx)(l.nn4, {
                      id: N,
                      children: O,
                  }),
                  (0, i.jsxs)(l.Kqy, {
                      direction: "vertical",
                      gap: 4,
                      children: [
                          (0, i.jsx)(l.rsf, {
                              label: S.intl.string(S.t["sqUm+k"]),
                              description: O,
                              checked: t,
                              onChange: e,
                          }),
                          t
                              ? (0, i.jsx)(d.NP, {
                                    isSpeaking: c,
                                    className: T.autoThresholdSlider,
                                    ariaDescribedBy: N,
                                    ariaLabelledBy: _,
                                })
                              : (0, i.jsx)(d.t8, {
                                    volume: a,
                                    ariaDescribedBy: N,
                                    ariaLabelledBy: _,
                                }),
                          g,
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(l.Kqy, {
              direction: "vertical",
              gap: 8,
              children: [
                  (0, i.jsx)(l.gNt, {
                      label: S.intl.string(S.t["sqUm+k"]),
                      description: O,
                      layout: "vertical",
                      children: (e) =>
                          t
                              ? (0, i.jsx)(d.NP, {
                                    isSpeaking: c,
                                    className: T.autoThresholdSlider,
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
    useSearchTerms: () => [S.intl.string(S.t["sqUm+k"]), S.intl.string(S.t.I1Zuq0), S.intl.string(S.t.nuFtHH)],
    usePredicate: () =>
        (0, s.e7)([o.Z], () => {
            let t = o.Z.getMode(),
                e = o.Z.isInputProfileCustom();
            return t === E.pM.VOICE_ACTIVITY && e;
        }),
    render: () => (0, i.jsx)(I, {}),
});
