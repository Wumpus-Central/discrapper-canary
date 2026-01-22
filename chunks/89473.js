l.d(t, { default: () => p });
var n = l(627968),
    r = l(64700),
    s = l(158954),
    i = l(73939),
    a = l(36525),
    o = l(732955),
    c = l(421380),
    d = l(397927),
    u = l(915089),
    f = l(60175),
    m = l(890620),
    x = l(338724),
    b = l(29697),
    h = l(260197),
    v = l(985018),
    g = l(70645);
let j = () =>
        (0, n.jsx)(a.A, {
            submitting: !1,
            message: v.intl.string(v.t["8g514U"]),
            onReset: () => {
                (0, m.C7)(!1);
            },
            onResetText: v.intl.string(v.t["ETE/oC"]),
            onSave: () => {
                (0, m.C7)(!1), (0, d.OoC)(h.LC);
            },
            onSaveText: v.intl.string(v.t["Xt+Uab"]),
            onSaveButtonColor: c.XD.RED,
        }),
    p = (e) => {
        let { transitionState: t, guildId: l, onClose: a, onComplete: c, inviteKey: h, isPreview: v = !1 } = e,
            p = (0, m.YN)((e) => e.shouldShowWarning),
            { verificationForm: C, hasFetched: O } = (0, x.$x)(l, v, h),
            y = (0, u.GV)();
        return (r.useEffect(() => {
            O && C === f.U && a();
        }, [O, a, C]),
        C === f.U)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(s.dWK, {
                          transitionState: t,
                          "aria-labelledby": y,
                          size: "xxl",
                          onClose: a,
                          children: [
                              (0, n.jsx)("div", {
                                  className: g.b,
                                  children: (0, n.jsx)(o.JnF, { onClick: () => a(!1) }),
                              }),
                              (0, n.jsx)("div", {
                                  className: g.kL,
                                  children: (0, n.jsx)(b.A, {
                                      verificationForm: C,
                                      headerId: y,
                                      guildId: l,
                                      onClose: a,
                                      onComplete: c,
                                      isPreview: v,
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(i.F, {
                          children:
                              !0 === p &&
                              (0, n.jsx)(d.FQk, {
                                  className: g.lm,
                                  children: (0, n.jsx)(j, {}),
                              }),
                      }),
                  ],
              });
    };
