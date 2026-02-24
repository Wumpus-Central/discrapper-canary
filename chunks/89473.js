n.d(t, { default: () => v });
var r = n(627968),
    s = n(64700),
    l = n(158954),
    i = n(73939),
    a = n(36525),
    o = n(732955),
    d = n(421380),
    c = n(397927),
    u = n(915089),
    m = n(60175),
    h = n(890620),
    x = n(338724),
    f = n(29697),
    g = n(260197),
    _ = n(985018),
    j = n(684335);
let p = () =>
        (0, r.jsx)(a.A, {
            submitting: !1,
            message: _.intl.string(_.t["8g514U"]),
            onReset: () => {
                (0, h.C7)(!1);
            },
            onResetText: _.intl.string(_.t["ETE/oC"]),
            onSave: () => {
                (0, h.C7)(!1), (0, c.OoC)(g.LC);
            },
            onSaveText: _.intl.string(_.t["Xt+Uab"]),
            onSaveButtonColor: d.XD.RED,
        }),
    v = (e) => {
        let { transitionState: t, guildId: n, onClose: a, onComplete: d, inviteKey: g, isPreview: _ = !1 } = e,
            v = (0, h.YN)((e) => e.shouldShowWarning),
            { verificationForm: b, hasFetched: C } = (0, x.$x)(n, _, g),
            N = (0, u.GV)();
        return (s.useEffect(() => {
            C && b === m.U && a();
        }, [C, a, b]),
        b === m.U)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(l.dWK, {
                          transitionState: t,
                          "aria-labelledby": N,
                          size: "xxl",
                          onClose: a,
                          children: [
                              (0, r.jsx)("div", {
                                  className: j.b,
                                  children: (0, r.jsx)(o.JnF, { onClick: () => a(!1) }),
                              }),
                              (0, r.jsx)("div", {
                                  className: j.kL,
                                  children: (0, r.jsx)(f.A, {
                                      verificationForm: b,
                                      headerId: N,
                                      guildId: n,
                                      onClose: a,
                                      onComplete: d,
                                      isPreview: _,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)(i.F, {
                          children: !0 === v && (0, r.jsx)(c.FQk, { className: j.lm, children: (0, r.jsx)(p, {}) }),
                      }),
                  ],
              });
    };
