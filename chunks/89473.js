"use strict";
r.d(t, { default: () => E });
var i = r(627968),
    a = r(64700),
    n = r(224640),
    s = r(73939),
    l = r(36525),
    o = r(815021),
    c = r(862482),
    d = r(192308),
    _ = r(871682),
    u = r(915089),
    p = r(60175),
    m = r(890620),
    h = r(338724),
    g = r(29697),
    f = r(260197),
    b = r(985018),
    x = r(944970);
let v = () =>
        (0, i.jsx)(l.A, {
            submitting: !1,
            message: b.intl.string(b.t["8g514U"]),
            onReset: () => {
                (0, m.C7)(!1);
            },
            onResetText: b.intl.string(b.t["ETE/oC"]),
            onSave: () => {
                (0, m.C7)(!1), (0, d.closeModal)(f.LC);
            },
            onSaveText: b.intl.string(b.t["Xt+Uab"]),
            onSaveButtonColor: c.XD.RED,
        }),
    E = (e) => {
        let { transitionState: t, guildId: r, onClose: l, onComplete: c, inviteKey: d, isPreview: f = !1 } = e,
            b = (0, m.YN)((e) => e.shouldShowWarning),
            { verificationForm: E, hasFetched: S } = (0, h.$x)(r, f, d),
            I = (0, u.GV)();
        return (a.useEffect(() => {
            S && E === p.U && l();
        }, [S, l, E]),
        E === p.U)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(n.d, {
                          transitionState: t,
                          "aria-labelledby": I,
                          size: "xxl",
                          onClose: l,
                          children: [
                              (0, i.jsx)("div", {
                                  className: x.b,
                                  children: (0, i.jsx)(o.J, { onClick: () => l(!1) }),
                              }),
                              (0, i.jsx)("div", {
                                  className: x.kL,
                                  children: (0, i.jsx)(g.A, {
                                      verificationForm: E,
                                      headerId: I,
                                      guildId: r,
                                      onClose: l,
                                      onComplete: c,
                                      isPreview: f,
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)(s.F, {
                          children: !0 === b && (0, i.jsx)(_.F, { className: x.lm, children: (0, i.jsx)(v, {}) }),
                      }),
                  ],
              });
    };
