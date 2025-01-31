n.d(t, { Z: () => x }), n(47120);
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
    p = n(981631),
    m = n(388032),
    f = n(823793),
    E = n(232186);
function I(e) {
    n.g.location.assign(e);
}
function x(e) {
    let { location: t, transitionTo: l = I } = e,
        [o, x] = r.useState('submitting'),
        C = r.useRef(void 0);
    (0, c.Z)(() => {
        (0, _.e)('verify_email');
        let e = (0, d.Z)(t);
        if (null == e) {
            x('failed');
            return;
        }
        (async () => {
            try {
                let t = await s.Z.verify(e);
                x('succeeded'), (C.current = t);
            } catch (e) {
                x('failed');
            }
        })();
    });
    let N = r.useCallback(() => {
            l(p.Z5c.LOGIN);
        }, [l]),
        v = r.useCallback(() => {
            g.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: C.current }), (0, h.Z)('verify_email');
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
                      children: m.intl.string(m.t.PCgG39)
                  }),
                  (0, i.jsx)(u.DK, {
                      className: E.marginBottom40,
                      children: m.intl.string(m.t.tQpeAw)
                  }),
                  (0, i.jsx)(u.zx, {
                      onClick: N,
                      children: m.intl.string(m.t.dKhVQE)
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
                        children: m.intl.string(m.t.dAfGb2)
                    }),
                    (0, i.jsx)(u.zx, {
                        onClick: v,
                        children: m.intl.string(m.t.uJWIj4)
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
                        children: m.intl.string(m.t['0c8+5u'])
                    }),
                    (0, i.jsx)(u.DK, {
                        className: E.marginBottom40,
                        children: m.intl.string(m.t.ULTCBA)
                    }),
                    (0, i.jsx)(u.zx, {
                        submitting: !0,
                        color: u.zx.Colors.PRIMARY
                    })
                ]
            });
}
o.ZP.initialize();
