n.d(t, { O: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(205693),
    d = n(451988),
    u = n(827734),
    c = n(106236),
    g = n(683071),
    m = n(140735),
    _ = n(331322),
    A = n(243721),
    h = n(452027),
    p = n(827343),
    x = n(915089),
    E = n(419954),
    T = n(430452),
    S = n(780964),
    f = n(731854),
    b = n(985018),
    C = n(34604),
    v = n(266655);
let N = (0, x.Ld)();
function I(e) {
    let { isSpeaking: t, className: n, id: s, ariaDescribedBy: l, ariaLabelledBy: r, disabled: o } = e;
    return (0, i.jsx)("div", {
        role: "meter",
        className: a()(C.$I, n),
        id: s,
        "aria-describedby": l,
        "aria-labelledby": r,
        "aria-valuenow": t && !o ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !o ? b.intl.string(b.t.haLKZ0) : b.intl.string(b.t.X2hJL7),
        children: (0, i.jsx)("div", { className: a()(C.Jx, C.NU, { [C.zY]: t && !o, [C.r9]: o }) }),
    });
}
function y(e) {
    let { volume: t, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: o } = e,
        { threshold: d, autoThreshold: g } = (0, r.cf)([T.Ay], () => ({
            threshold: T.Ay.getModeOptions().threshold,
            autoThreshold: T.Ay.getModeOptions().autoThreshold,
        })),
        m = (0, r.bG)([T.Ay], () => T.Ay.getMode());
    return (0, i.jsx)("section", {
        className: a()(C.Mo, C.jW),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        children: (0, i.jsx)(c.A, {
            initialValue: d + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void p.A.setMode(m, { threshold: t, autoThreshold: g });
            },
            barStyles: { background: u.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: u.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": N,
            disabled: o,
            children: (0, i.jsxs)("div", {
                className: a()(C.NU, C.TL, C.Jx, v.bar),
                children: [
                    (0, i.jsx)("div", { className: a()(C.GS, C.SH), style: { width: o ? 0 : t + 100 + "%" } }),
                    (0, i.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let j = (0, E.E2)(S.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [b.intl.string(b.t["sqUm+k"]), b.intl.string(b.t.I1Zuq0), b.intl.string(b.t.nuFtHH)],
    usePredicate: () => (0, r.bG)([T.Ay], () => T.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, r.cf)([T.Ay], () => ({
                autoThreshold: T.Ay.getModeOptions().autoThreshold,
                disabled: T.Ay.getMode() !== f.TB.VOICE_ACTIVITY,
            })),
            n = s.useCallback((e) => {
                let t = T.Ay.getMode(),
                    { threshold: n } = T.Ay.getModeOptions();
                p.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            l = (0, r.bG)([T.Ay], () => T.Ay.supports(f.O5.AUTOMATIC_VAD)),
            { volume: a, isSpeaking: u } = (function () {
                let [e, t] = s.useState(-100),
                    [n, i] = s.useState(!1);
                function l(e, n) {
                    t(e), i((n & f.ME.VOICE) === f.ME.VOICE);
                }
                return (
                    s.useEffect(() => {
                        let e = new d.Ep();
                        return (
                            e.start(1e3, () => {
                                T.Ay.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                T.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            c = (0, r.bG)([T.Ay], () => T.Ay.isEnabled()),
            x = s.useMemo(
                () =>
                    !c &&
                    (0, i.jsx)("div", {
                        className: C.B4,
                        children: (0, i.jsx)(g.w, {
                            type: "warning",
                            children: b.intl.format(b.t["O13I+O"], { onEnableClick: () => p.A.enable(!0) }),
                        }),
                    }),
                [c],
            ),
            E = s.useMemo(() => (e ? b.intl.string(b.t.JsbzjA) : b.intl.string(b.t.MLmyMY)), [e]),
            S = s.useId(),
            v = s.useId();
        return l
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": v,
                  children: [
                      (0, i.jsx)(m.A, { tag: "legend", id: S, children: b.intl.string(b.t.GByLar) }),
                      (0, i.jsx)(m.A, { id: v, children: E }),
                      (0, i.jsxs)(_.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, i.jsx)(A.d, {
                                  disabled: t,
                                  label: b.intl.string(b.t.lY6j47),
                                  description: E,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, i.jsx)(I, {
                                        isSpeaking: u,
                                        className: C.UJ,
                                        ariaDescribedBy: v,
                                        ariaLabelledBy: S,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(y, { volume: a, ariaDescribedBy: v, ariaLabelledBy: S, disabled: t }),
                              x,
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(h.D, {
                          label: b.intl.string(b.t["sqUm+k"]),
                          description: E,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, i.jsx)(I, {
                                        isSpeaking: u,
                                        className: C.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(y, {
                                        volume: a,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    }),
                      }),
                      x,
                  ],
              });
    },
});
