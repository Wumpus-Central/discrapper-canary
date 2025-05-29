n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    g = n(108427),
    p = n(626135),
    m = n(981631),
    f = n(388032),
    _ = n(726401),
    x = n(20493);
function E(e) {
    n.g.location.assign(e);
}
function b(e) {
    let { location: t, transitionTo: l = E } = e,
        [a, b] = i.useState('submitting'),
        v = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, g.e)('verify_email');
        let e = (0, u.Z)(t);
        if (null == e) return void b('failed');
        (async () => {
            try {
                let t = await s.Z.verify(e);
                b('succeeded'), (v.current = t);
            } catch (e) {
                b('failed');
            }
        })();
    });
    let I = i.useCallback(() => {
            l(m.Z5c.LOGIN, { source: 'verify_email' });
        }, [l]),
        O = i.useCallback(() => {
            p.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: v.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === a
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: o()(_.image, x.marginBottom20)
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: x.marginBottom8,
                      children: f.intl.string(f.t.PCgG39)
                  }),
                  (0, r.jsx)(d.DK, {
                      className: x.marginBottom40,
                      children: f.intl.string(f.t.tQpeAw)
                  }),
                  (0, r.jsx)(d.zx, {
                      onClick: I,
                      children: f.intl.string(f.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === a
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: o()(_.image, x.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom40,
                        children: f.intl.string(f.t.dAfGb2)
                    }),
                    (0, r.jsx)(d.zx, {
                        onClick: O,
                        children: f.intl.string(f.t.uJWIj4)
                    })
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(892235),
                        className: o()(_.image, x.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom8,
                        children: f.intl.string(f.t['0c8+5u'])
                    }),
                    (0, r.jsx)(d.DK, {
                        className: x.marginBottom40,
                        children: f.intl.string(f.t.ULTCBA)
                    }),
                    (0, r.jsx)(d.zx, {
                        submitting: !0,
                        color: d.zx.Colors.PRIMARY
                    })
                ]
            });
}
a.ZP.initialize();
