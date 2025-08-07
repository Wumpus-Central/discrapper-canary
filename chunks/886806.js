n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    p = n(108427),
    f = n(626135),
    m = n(981631),
    g = n(388032),
    _ = n(726401),
    x = n(20493);
function b(e) {
    n.g.location.assign(e);
}
function E(e) {
    let { location: t, transitionTo: l = b } = e,
        [s, E] = i.useState("submitting"),
        v = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, p.e)("verify_email");
        let e = (0, u.Z)(t);
        if (null == e) return void E("failed");
        (async () => {
            try {
                let t = await a.Z.verify(e);
                E("succeeded"), (v.current = t);
            } catch (e) {
                E("failed");
            }
        })();
    });
    let j = i.useCallback(() => {
            l(m.Z5c.LOGIN, { source: "verify_email" });
        }, [l]),
        I = i.useCallback(() => {
            f.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: v.current }),
                (0, h.Z)("verify_email");
        }, []);
    return "failed" === s
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: o()(_.image, x.marginBottom20),
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: x.marginBottom8,
                      children: g.intl.string(g.t.PCgG39),
                  }),
                  (0, r.jsx)(d.DK, {
                      className: x.marginBottom40,
                      children: g.intl.string(g.t.tQpeAw),
                  }),
                  (0, r.jsx)(d.zx, {
                      onClick: j,
                      children: g.intl.string(g.t.dKhVQE),
                  }),
              ],
          })
        : "succeeded" === s
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: o()(_.image, x.marginBottom20),
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom40,
                        children: g.intl.string(g.t.dAfGb2),
                    }),
                    (0, r.jsx)(d.zx, {
                        onClick: I,
                        children: g.intl.string(g.t.uJWIj4),
                    }),
                ],
            })
          : (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(892235),
                        className: o()(_.image, x.marginBottom20),
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom8,
                        children: g.intl.string(g.t["0c8+5u"]),
                    }),
                    (0, r.jsx)(d.DK, {
                        className: x.marginBottom40,
                        children: g.intl.string(g.t.ULTCBA),
                    }),
                    (0, r.jsx)(d.zx, {
                        submitting: !0,
                        color: d.zx.Colors.PRIMARY,
                    }),
                ],
            });
}
s.ZP.initialize();
