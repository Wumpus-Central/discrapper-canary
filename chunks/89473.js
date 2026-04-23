r.d(t, { default: () => I });
var n = r(627968),
    i = r(64700),
    l = r(224640),
    a = r(73939),
    s = r(36525),
    o = r(815021),
    d = r(862482),
    c = r(192308),
    u = r(871682),
    _ = r(915089),
    m = r(60175),
    h = r(890620),
    E = r(338724),
    f = r(29697),
    p = r(260197),
    x = r(985018),
    g = r(944970);
let v = () =>
        (0, n.jsx)(s.A, {
            submitting: !1,
            message: x.intl.string(x.t["8g514U"]),
            onReset: () => {
                (0, h.C7)(!1);
            },
            onResetText: x.intl.string(x.t["ETE/oC"]),
            onSave: () => {
                (0, h.C7)(!1), (0, c.closeModal)(p.LC);
            },
            onSaveText: x.intl.string(x.t["Xt+Uab"]),
            onSaveButtonColor: d.XD.RED,
        }),
    I = (e) => {
        let { transitionState: t, guildId: r, onClose: s, onComplete: d, inviteKey: c, isPreview: p = !1 } = e,
            x = (0, h.YN)((e) => e.shouldShowWarning),
            { verificationForm: I, hasFetched: S } = (0, E.$x)(r, p, c),
            N = (0, _.GV)();
        return (i.useEffect(() => {
            S && I === m.U && s();
        }, [S, s, I]),
        I === m.U)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(l.d, {
                          transitionState: t,
                          "aria-labelledby": N,
                          size: "xxl",
                          onClose: s,
                          children: [
                              (0, n.jsx)("div", {
                                  className: g.b,
                                  children: (0, n.jsx)(o.J, { onClick: () => s(!1) }),
                              }),
                              (0, n.jsx)("div", {
                                  className: g.kL,
                                  children: (0, n.jsx)(f.A, {
                                      verificationForm: I,
                                      headerId: N,
                                      guildId: r,
                                      onClose: s,
                                      onComplete: d,
                                      isPreview: p,
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(a.F, {
                          children: !0 === x && (0, n.jsx)(u.F, { className: g.lm, children: (0, n.jsx)(v, {}) }),
                      }),
                  ],
              });
    };
