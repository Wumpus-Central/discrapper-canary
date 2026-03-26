n.d(t, { default: () => v });
var r = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(73939),
    a = n(36525),
    o = n(732955),
    d = n(421380),
    c = n(397927),
    u = n(915089),
    _ = n(60175),
    h = n(890620),
    m = n(338724),
    f = n(29697),
    x = n(260197),
    E = n(985018),
    p = n(356698);
let g = () =>
        (0, r.jsx)(a.A, {
            submitting: !1,
            message: E.intl.string(E.t["8g514U"]),
            onReset: () => {
                (0, h.C7)(!1);
            },
            onResetText: E.intl.string(E.t["ETE/oC"]),
            onSave: () => {
                (0, h.C7)(!1), (0, c.OoC)(x.LC);
            },
            onSaveText: E.intl.string(E.t["Xt+Uab"]),
            onSaveButtonColor: d.XD.RED,
        }),
    v = (e) => {
        let { transitionState: t, guildId: n, onClose: a, onComplete: d, inviteKey: x, isPreview: E = !1 } = e,
            v = (0, h.YN)((e) => e.shouldShowWarning),
            { verificationForm: N, hasFetched: j } = (0, m.$x)(n, E, x),
            I = (0, u.GV)();
        return (s.useEffect(() => {
            j && N === _.U && a();
        }, [j, a, N]),
        N === _.U)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(i.dWK, {
                          transitionState: t,
                          "aria-labelledby": I,
                          size: "xxl",
                          onClose: a,
                          children: [
                              (0, r.jsx)("div", {
                                  className: p.b,
                                  children: (0, r.jsx)(o.JnF, { onClick: () => a(!1) }),
                              }),
                              (0, r.jsx)("div", {
                                  className: p.kL,
                                  children: (0, r.jsx)(f.A, {
                                      verificationForm: N,
                                      headerId: I,
                                      guildId: n,
                                      onClose: a,
                                      onComplete: d,
                                      isPreview: E,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)(l.F, {
                          children: !0 === v && (0, r.jsx)(c.FQk, { className: p.lm, children: (0, r.jsx)(g, {}) }),
                      }),
                  ],
              });
    };
