n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    p = n(108427),
    m = n(626135),
    g = n(981631),
    f = n(388032),
    _ = n(726401),
    x = n(20493);
function E(e) {
    n.g.location.assign(e);
}
function b(e) {
    let { location: t, transitionTo: l = E } = e,
        [o, b] = i.useState('submitting'),
        I = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, p.e)('verify_email');
        let e = (0, u.Z)(t);
        if (null == e) return void b('failed');
        (async () => {
            try {
                let t = await s.Z.verify(e);
                b('succeeded'), (I.current = t);
            } catch (e) {
                b('failed');
            }
        })();
    });
    let v = i.useCallback(() => {
            l(g.Z5c.LOGIN, { source: 'verify_email' });
        }, [l]),
        O = i.useCallback(() => {
            m.default.track(g.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: I.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === o
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: a()(_.image, x.marginBottom20)
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
                      onClick: v,
                      children: f.intl.string(f.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === o
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: a()(_.image, x.marginBottom20)
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
                        className: a()(_.image, x.marginBottom20)
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
o.ZP.initialize();
