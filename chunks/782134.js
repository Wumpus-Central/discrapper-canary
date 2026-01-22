n.d(e, { q: () => _ });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(442837),
    r = n(846027),
    a = n(509613),
    o = n(131951),
    T = n(313789),
    S = n(269876),
    c = n(65154),
    E = n(388032),
    d = n(130081);
let _ = (0, a.ON)(T.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [E.intl.string(E.t["sqUm+k"]), E.intl.string(E.t.I1Zuq0), E.intl.string(E.t.nuFtHH)],
    usePredicate: () => (0, u.e7)([o.Z], () => o.Z.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: t, disabled: e } = (0, u.cj)([o.Z], () => ({
                autoThreshold: o.Z.getModeOptions().autoThreshold,
                disabled: o.Z.getMode() !== c.pM.VOICE_ACTIVITY,
            })),
            n = l.useCallback((t) => {
                let e = o.Z.getMode(),
                    { threshold: n } = o.Z.getModeOptions();
                r.Z.setMode(e, {
                    autoThreshold: t,
                    threshold: n,
                });
            }, []),
            a = (0, u.e7)([o.Z], () => o.Z.supports(c.AN.AUTOMATIC_VAD)),
            { volume: T, isSpeaking: _ } = (0, S.Kq)(),
            g = (0, u.e7)([o.Z], () => o.Z.isEnabled()),
            I = l.useMemo(
                () =>
                    !g &&
                    (0, i.jsx)("div", {
                        className: d.noInputDevicesDetectedWarning,
                        children: (0, i.jsx)(s.M14, {
                            type: "warning",
                            children: E.intl.format(E.t["O13I+O"], { onEnableClick: () => r.Z.enable(!0) }),
                        }),
                    }),
                [g],
            ),
            A = l.useMemo(() => (t ? E.intl.string(E.t.JsbzjA) : E.intl.string(E.t.MLmyMY)), [t]),
            N = l.useId(),
            O = l.useId();
        return a
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": O,
                  children: [
                      (0, i.jsx)(s.nn4, {
                          tag: "legend",
                          id: N,
                          children: E.intl.string(E.t.GByLar),
                      }),
                      (0, i.jsx)(s.nn4, {
                          id: O,
                          children: A,
                      }),
                      (0, i.jsxs)(s.Kqy, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, i.jsx)(s.rsf, {
                                  disabled: e,
                                  label: E.intl.string(E.t.lY6j47),
                                  description: A,
                                  checked: t,
                                  onChange: n,
                              }),
                              t
                                  ? (0, i.jsx)(S.NP, {
                                        isSpeaking: _,
                                        className: d.autoThresholdSlider,
                                        ariaDescribedBy: O,
                                        ariaLabelledBy: N,
                                        disabled: e,
                                    })
                                  : (0, i.jsx)(S.t8, {
                                        volume: T,
                                        ariaDescribedBy: O,
                                        ariaLabelledBy: N,
                                        disabled: e,
                                    }),
                              I,
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
                          description: A,
                          layout: "vertical",
                          children: (n) =>
                              t
                                  ? (0, i.jsx)(S.NP, {
                                        isSpeaking: _,
                                        className: d.autoThresholdSlider,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: e,
                                    })
                                  : (0, i.jsx)(S.t8, {
                                        volume: T,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: e,
                                    }),
                      }),
                      I,
                  ],
              });
    },
});
