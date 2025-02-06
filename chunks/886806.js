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
    p = n(981631),
    m = n(388032),
    f = n(823793),
    x = n(232186);
function E(e) {
    n.g.location.assign(e);
}
function I(e) {
    let { location: t, transitionTo: l = E } = e,
        [o, I] = r.useState('submitting'),
        v = r.useRef(void 0);
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
                I('succeeded'), (v.current = t);
            } catch (e) {
                I('failed');
            }
        })();
    });
    let N = r.useCallback(() => {
            l(p.Z5c.LOGIN);
        }, [l]),
        b = r.useCallback(() => {
            g.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: v.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === o
        ? (0, i.jsxs)(u.ZP, {
              children: [
                  (0, i.jsx)(u.Ee, {
                      src: n(375673),
                      className: a()(f.image, x.marginBottom20)
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: x.marginBottom8,
                      children: m.intl.string(m.t.PCgG39)
                  }),
                  (0, i.jsx)(u.DK, {
                      className: x.marginBottom40,
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
                        className: a()(f.image, x.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: x.marginBottom40,
                        children: m.intl.string(m.t.dAfGb2)
                    }),
                    (0, i.jsx)(u.zx, {
                        onClick: b,
                        children: m.intl.string(m.t.uJWIj4)
                    })
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Ee, {
                        src: n(892235),
                        className: a()(f.image, x.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: m.intl.string(m.t['0c8+5u'])
                    }),
                    (0, i.jsx)(u.DK, {
                        className: x.marginBottom40,
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
