n.d(e, { q: () => g });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(442837),
    r = n(846027),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(269876),
    S = n(65154),
    T = n(388032),
    E = n(670302);
let g = (0, a.ON)(c.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [T.intl.string(T.t["sqUm+k"]), T.intl.string(T.t.I1Zuq0), T.intl.string(T.t.nuFtHH)],
    usePredicate: () =>
        (0, u.e7)([o.Z], () => {
            let t = o.Z.getMode(),
                e = o.Z.isInputProfileCustom();
            return t === S.pM.VOICE_ACTIVITY && e;
        }),
    Component: function () {
        let t = (0, u.e7)([o.Z], () => o.Z.getModeOptions().autoThreshold),
            e = l.useCallback((t) => {
                let e = o.Z.getMode(),
                    { threshold: n } = o.Z.getModeOptions();
                r.Z.setMode(e, {
                    autoThreshold: t,
                    threshold: n,
                });
            }, []),
            n = (0, u.e7)([o.Z], () => o.Z.supports(S.AN.AUTOMATIC_VAD)),
            { volume: a, isSpeaking: c } = (0, d.Kq)(),
            g = (0, u.e7)([o.Z], () => o.Z.isEnabled()),
            I = l.useMemo(
                () =>
                    !g &&
                    (0, i.jsx)("div", {
                        className: E.noInputDevicesDetectedWarning,
                        children: (0, i.jsx)(s.M14, {
                            type: "warning",
                            children: T.intl.format(T.t["O13I+O"], { onEnableClick: () => r.Z.enable(!0) }),
                        }),
                    }),
                [g],
            ),
            _ = l.useMemo(() => (t ? T.intl.string(T.t.JsbzjA) : T.intl.string(T.t.MLmyMY)), [t]),
            O = l.useId(),
            N = l.useId();
        return n
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": N,
                  children: [
                      (0, i.jsx)(s.nn4, {
                          tag: "legend",
                          id: O,
                          children: T.intl.string(T.t.GByLar),
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
                                  label: T.intl.string(T.t.lY6j47),
                                  description: _,
                                  checked: t,
                                  onChange: e,
                              }),
                              t
                                  ? (0, i.jsx)(d.NP, {
                                        isSpeaking: c,
                                        className: E.autoThresholdSlider,
                                        ariaDescribedBy: N,
                                        ariaLabelledBy: O,
                                    })
                                  : (0, i.jsx)(d.t8, {
                                        volume: a,
                                        ariaDescribedBy: N,
                                        ariaLabelledBy: O,
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
                          label: T.intl.string(T.t["sqUm+k"]),
                          description: _,
                          layout: "vertical",
                          children: (e) =>
                              t
                                  ? (0, i.jsx)(d.NP, {
                                        isSpeaking: c,
                                        className: E.autoThresholdSlider,
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
                      I,
                  ],
              });
    },
});
