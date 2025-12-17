n.d(e, { q: () => g });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    u = n(442837),
    r = n(846027),
    a = n(509613),
    o = n(131951),
    S = n(313789),
    T = n(269876),
    c = n(65154),
    E = n(388032),
    d = n(130081);
let g = (0, a.ON)(S.n.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [E.intl.string(E.t["sqUm+k"]), E.intl.string(E.t.I1Zuq0), E.intl.string(E.t.nuFtHH)],
    usePredicate: () =>
        (0, u.e7)([o.Z], () => {
            let t = o.Z.getMode(),
                e = o.Z.isInputProfileCustom();
            return t === c.pM.VOICE_ACTIVITY && e;
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
            n = (0, u.e7)([o.Z], () => o.Z.supports(c.AN.AUTOMATIC_VAD)),
            { volume: a, isSpeaking: S } = (0, T.Kq)(),
            g = (0, u.e7)([o.Z], () => o.Z.isEnabled()),
            _ = l.useMemo(
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
            I = l.useMemo(() => (t ? E.intl.string(E.t.JsbzjA) : E.intl.string(E.t.MLmyMY)), [t]),
            N = l.useId(),
            A = l.useId();
        return n
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": A,
                  children: [
                      (0, i.jsx)(s.nn4, {
                          tag: "legend",
                          id: N,
                          children: E.intl.string(E.t.GByLar),
                      }),
                      (0, i.jsx)(s.nn4, {
                          id: A,
                          children: I,
                      }),
                      (0, i.jsxs)(s.Kqy, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, i.jsx)(s.rsf, {
                                  label: E.intl.string(E.t.lY6j47),
                                  description: I,
                                  checked: t,
                                  onChange: e,
                              }),
                              t
                                  ? (0, i.jsx)(T.NP, {
                                        isSpeaking: S,
                                        className: d.autoThresholdSlider,
                                        ariaDescribedBy: A,
                                        ariaLabelledBy: N,
                                    })
                                  : (0, i.jsx)(T.t8, {
                                        volume: a,
                                        ariaDescribedBy: A,
                                        ariaLabelledBy: N,
                                    }),
                              _,
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
                          description: I,
                          layout: "vertical",
                          children: (e) =>
                              t
                                  ? (0, i.jsx)(T.NP, {
                                        isSpeaking: S,
                                        className: d.autoThresholdSlider,
                                        id: e.controlId,
                                        ariaDescribedBy: e.describedById,
                                        ariaLabelledBy: e.labelId,
                                    })
                                  : (0, i.jsx)(T.t8, {
                                        volume: a,
                                        id: e.controlId,
                                        ariaDescribedBy: e.describedById,
                                        ariaLabelledBy: e.labelId,
                                    }),
                      }),
                      _,
                  ],
              });
    },
});
