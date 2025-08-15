n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    p = n(108427),
    m = n(626135),
    g = n(981631),
    f = n(388032),
    _ = n(767307),
    x = n(197571);
function b(e) {
    n.g.location.assign(e);
}
function v(e) {
    let { location: t, transitionTo: l = b } = e,
        [s, v] = i.useState("submitting"),
        E = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, p.e)("verify_email");
        let e = (0, u.Z)(t);
        if (null == e) return void v("failed");
        (async () => {
            try {
                let t = await o.Z.verify(e);
                v("succeeded"), (E.current = t);
            } catch (e) {
                v("failed");
            }
        })();
    });
    let j = i.useCallback(() => {
            l(g.Z5c.LOGIN, { source: "verify_email" });
        }, [l]),
        I = i.useCallback(() => {
            m.default.track(g.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: E.current }),
                (0, h.Z)("verify_email");
        }, []);
    return "failed" === s
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: a()(_.image, x.marginBottom20),
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: x.marginBottom8,
                      children: f.intl.string(f.t.PCgG39),
                  }),
                  (0, r.jsx)(d.DK, {
                      className: x.marginBottom40,
                      children: f.intl.string(f.t.tQpeAw),
                  }),
                  (0, r.jsx)(d.zx, {
                      onClick: j,
                      children: f.intl.string(f.t.dKhVQE),
                  }),
              ],
          })
        : "succeeded" === s
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: a()(_.image, x.marginBottom20),
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom40,
                        children: f.intl.string(f.t.dAfGb2),
                    }),
                    (0, r.jsx)(d.zx, {
                        onClick: I,
                        children: f.intl.string(f.t.uJWIj4),
                    }),
                ],
            })
          : (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(892235),
                        className: a()(_.image, x.marginBottom20),
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom8,
                        children: f.intl.string(f.t["0c8+5u"]),
                    }),
                    (0, r.jsx)(d.DK, {
                        className: x.marginBottom40,
                        children: f.intl.string(f.t.ULTCBA),
                    }),
                    (0, r.jsx)(d.zx, {
                        submitting: !0,
                        color: d.zx.Colors.PRIMARY,
                    }),
                ],
            });
}
s.ZP.initialize();
