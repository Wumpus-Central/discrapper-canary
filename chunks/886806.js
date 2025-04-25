n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    p = n(108427),
    g = n(626135),
    f = n(981631),
    m = n(388032),
    _ = n(726401),
    x = n(20493);
function E(e) {
    n.g.location.assign(e);
}
function b(e) {
    let { location: t, transitionTo: l = E } = e,
        [o, b] = i.useState('submitting'),
        v = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, p.e)('verify_email');
        let e = (0, u.Z)(t);
        if (null == e) return void b('failed');
        (async () => {
            try {
                let t = await a.Z.verify(e);
                b('succeeded'), (v.current = t);
            } catch (e) {
                b('failed');
            }
        })();
    });
    let j = i.useCallback(() => {
            l(f.Z5c.LOGIN, { source: 'verify_email' });
        }, [l]),
        I = i.useCallback(() => {
            g.default.track(f.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: v.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === o
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: s()(_.image, x.marginBottom20)
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: x.marginBottom8,
                      children: m.intl.string(m.t.PCgG39)
                  }),
                  (0, r.jsx)(d.DK, {
                      className: x.marginBottom40,
                      children: m.intl.string(m.t.tQpeAw)
                  }),
                  (0, r.jsx)(d.zx, {
                      onClick: j,
                      children: m.intl.string(m.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === o
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: s()(_.image, x.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom40,
                        children: m.intl.string(m.t.dAfGb2)
                    }),
                    (0, r.jsx)(d.zx, {
                        onClick: I,
                        children: m.intl.string(m.t.uJWIj4)
                    })
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(892235),
                        className: s()(_.image, x.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: x.marginBottom8,
                        children: m.intl.string(m.t['0c8+5u'])
                    }),
                    (0, r.jsx)(d.DK, {
                        className: x.marginBottom40,
                        children: m.intl.string(m.t.ULTCBA)
                    }),
                    (0, r.jsx)(d.zx, {
                        submitting: !0,
                        color: d.zx.Colors.PRIMARY
                    })
                ]
            });
}
o.ZP.initialize();
