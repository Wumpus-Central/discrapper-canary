n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
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
    N = n(20493);
function x(e) {
    n.g.location.assign(e);
}
function b(e) {
    let { location: t, transitionTo: s = x } = e,
        [o, b] = i.useState('submitting'),
        E = i.useRef(void 0);
    (0, c.ZP)(() => {
        (0, p.e)('verify_email');
        let e = (0, u.Z)(t);
        if (null == e) return void b('failed');
        (async () => {
            try {
                let t = await a.Z.verify(e);
                b('succeeded'), (E.current = t);
            } catch (e) {
                b('failed');
            }
        })();
    });
    let v = i.useCallback(() => {
            s(f.Z5c.LOGIN, { source: 'verify_email' });
        }, [s]),
        j = i.useCallback(() => {
            g.default.track(f.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: E.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === o
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)(d.Ee, {
                      src: n(375673),
                      className: l()(_.image, N.marginBottom20)
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: N.marginBottom8,
                      children: m.NW.string(m.t.PCgG39)
                  }),
                  (0, r.jsx)(d.DK, {
                      className: N.marginBottom40,
                      children: m.NW.string(m.t.tQpeAw)
                  }),
                  (0, r.jsx)(d.zx, {
                      onClick: v,
                      children: m.NW.string(m.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === o
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(73962),
                        className: l()(_.image, N.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: N.marginBottom40,
                        children: m.NW.string(m.t.dAfGb2)
                    }),
                    (0, r.jsx)(d.zx, {
                        onClick: j,
                        children: m.NW.string(m.t.uJWIj4)
                    })
                ]
            })
          : (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)(d.Ee, {
                        src: n(892235),
                        className: l()(_.image, N.marginBottom20)
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: N.marginBottom8,
                        children: m.NW.string(m.t['0c8+5u'])
                    }),
                    (0, r.jsx)(d.DK, {
                        className: N.marginBottom40,
                        children: m.NW.string(m.t.ULTCBA)
                    }),
                    (0, r.jsx)(d.zx, {
                        submitting: !0,
                        color: d.zx.Colors.PRIMARY
                    })
                ]
            });
}
o.ZP.initialize();
