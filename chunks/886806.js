n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(893776),
    c = n(493773),
    d = n(129293),
    u = n(388905),
    h = n(17894),
    _ = n(108427),
    g = n(626135),
    m = n(981631),
    p = n(388032),
    f = n(657822),
    E = n(483938);
function x(e) {
    n.g.location.assign(e);
}
function I(e) {
    let { location: t, transitionTo: l = x } = e,
        [o, I] = r.useState('submitting'),
        C = r.useRef(void 0);
    (0, c.ZP)(() => {
        (0, _.e)('verify_email');
        let e = (0, d.Z)(t);
        if (null == e) {
            I('failed');
            return;
        }
        (async () => {
            try {
                let t = await s.Z.verify(e);
                I('succeeded'), (C.current = t);
            } catch (e) {
                I('failed');
            }
        })();
    });
    let v = r.useCallback(() => {
            l(m.Z5c.LOGIN);
        }, [l]),
        N = r.useCallback(() => {
            g.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: C.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === o
        ? (0, i.jsxs)(u.ZP, {
              children: [
                  (0, i.jsx)(u.Ee, {
                      src: n(375673),
                      className: a()(f.image, E.marginBottom20)
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: E.marginBottom8,
                      children: p.intl.string(p.t.PCgG39)
                  }),
                  (0, i.jsx)(u.DK, {
                      className: E.marginBottom40,
                      children: p.intl.string(p.t.tQpeAw)
                  }),
                  (0, i.jsx)(u.zx, {
                      onClick: v,
                      children: p.intl.string(p.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === o
          ? (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Ee, {
                        src: n(73962),
                        className: a()(f.image, E.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: E.marginBottom40,
                        children: p.intl.string(p.t.dAfGb2)
                    }),
                    (0, i.jsx)(u.zx, {
                        onClick: N,
                        children: p.intl.string(p.t.uJWIj4)
                    })
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Ee, {
                        src: n(892235),
                        className: a()(f.image, E.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: E.marginBottom8,
                        children: p.intl.string(p.t['0c8+5u'])
                    }),
                    (0, i.jsx)(u.DK, {
                        className: E.marginBottom40,
                        children: p.intl.string(p.t.ULTCBA)
                    }),
                    (0, i.jsx)(u.zx, {
                        submitting: !0,
                        color: u.zx.Colors.PRIMARY
                    })
                ]
            });
}
o.ZP.initialize();
