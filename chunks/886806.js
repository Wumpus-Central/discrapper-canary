n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(893776),
    c = n(493773),
    d = n(129293),
    u = n(388905),
    h = n(17894),
    _ = n(108427),
    m = n(626135),
    g = n(981631),
    p = n(388032),
    f = n(657822),
    x = n(483938);
function E(e) {
    n.g.location.assign(e);
}
function I(e) {
    let { location: t, transitionTo: a = E } = e,
        [s, I] = r.useState('submitting'),
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
                let t = await o.Z.verify(e);
                I('succeeded'), (v.current = t);
            } catch (e) {
                I('failed');
            }
        })();
    });
    let C = r.useCallback(() => {
            a(g.Z5c.LOGIN);
        }, [a]),
        N = r.useCallback(() => {
            m.default.track(g.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: v.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === s
        ? (0, i.jsxs)(u.ZP, {
              children: [
                  (0, i.jsx)(u.Ee, {
                      src: n(375673),
                      className: l()(f.image, x.marginBottom20)
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: x.marginBottom8,
                      children: p.intl.string(p.t.PCgG39)
                  }),
                  (0, i.jsx)(u.DK, {
                      className: x.marginBottom40,
                      children: p.intl.string(p.t.tQpeAw)
                  }),
                  (0, i.jsx)(u.zx, {
                      onClick: C,
                      children: p.intl.string(p.t.dKhVQE)
                  })
              ]
          })
        : 'succeeded' === s
          ? (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Ee, {
                        src: n(73962),
                        className: l()(f.image, x.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: x.marginBottom40,
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
                        className: l()(f.image, x.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: x.marginBottom8,
                        children: p.intl.string(p.t['0c8+5u'])
                    }),
                    (0, i.jsx)(u.DK, {
                        className: x.marginBottom40,
                        children: p.intl.string(p.t.ULTCBA)
                    }),
                    (0, i.jsx)(u.zx, {
                        submitting: !0,
                        color: u.zx.Colors.PRIMARY
                    })
                ]
            });
}
s.ZP.initialize();
