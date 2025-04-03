n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    p = n(17894),
    g = n(108427),
    h = n(626135),
    f = n(981631),
    m = n(388032),
    _ = n(726401),
    b = n(20493);
function x(e) {
    n.g.location.assign(e);
}
function N(e) {
    let { location: t, transitionTo: o = x } = e,
        [l, N] = i.useState('submitting'),
        v = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, g.e)('verify_email');
        let e = (0, u.Z)(t);
        if (null == e) return void N('failed');
        (async () => {
            try {
                let t = await s.Z.verify(e);
                N('succeeded'), (v.current = t);
            } catch (e) {
                N('failed');
            }
        })();
    });
    let E = i.useCallback(() => {
            o(f.Z5c.LOGIN);
        }, [o]),
        I = i.useCallback(() => {
            h.default.track(f.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: v.current }), (0, p.Z)('verify_email');
        }, []);
    return 'failed' === l
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: a()(_.image, b.marginBottom20)
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: b.marginBottom8,
                      children: m.NW.string(m.t.PCgG39)
                  }),
                  (0, r.jsx)(d.DK, {
                      className: b.marginBottom40,
                      children: m.NW.string(m.t.tQpeAw)
                  }),
                  (0, r.jsx)(d.zx, {
                      onClick: E,
                      children: m.NW.string(m.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === l
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: a()(_.image, b.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: b.marginBottom40,
                        children: m.NW.string(m.t.dAfGb2)
                    }),
                    (0, r.jsx)(d.zx, {
                        onClick: I,
                        children: m.NW.string(m.t.uJWIj4)
                    })
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(892235),
                        className: a()(_.image, b.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: b.marginBottom8,
                        children: m.NW.string(m.t['0c8+5u'])
                    }),
                    (0, r.jsx)(d.DK, {
                        className: b.marginBottom40,
                        children: m.NW.string(m.t.ULTCBA)
                    }),
                    (0, r.jsx)(d.zx, {
                        submitting: !0,
                        color: d.zx.Colors.PRIMARY
                    })
                ]
            });
}
l.ZP.initialize();
