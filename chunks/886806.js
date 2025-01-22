n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(893776),
    c = n(493773),
    d = n(129293),
    u = n(388905),
    h = n(17894),
    g = n(108427),
    f = n(626135),
    m = n(981631),
    p = n(388032),
    x = n(823793),
    _ = n(232186);
function E(e) {
    n.g.location.assign(e);
}
function I(e) {
    let { location: t, transitionTo: s = E } = e,
        [o, I] = r.useState('submitting'),
        N = r.useRef(void 0);
    (0, c.Z)(() => {
        (0, g.e)('verify_email');
        let e = (0, d.Z)(t);
        if (null == e) {
            I('failed');
            return;
        }
        (async () => {
            try {
                let t = await a.Z.verify(e);
                I('succeeded'), (N.current = t);
            } catch (e) {
                I('failed');
            }
        })();
    });
    let v = r.useCallback(() => {
            s(m.Z5c.LOGIN);
        }, [s]),
        C = r.useCallback(() => {
            f.default.track(m.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: N.current }), (0, h.Z)('verify_email');
        }, []);
    return 'failed' === o
        ? (0, i.jsxs)(u.ZP, {
              children: [
                  (0, i.jsx)(u.Ee, {
                      src: n(375673),
                      className: l()(x.image, _.marginBottom20)
                  }),
                  (0, i.jsx)(u.Dx, {
                      className: _.marginBottom8,
                      children: p.intl.string(p.t.PCgG39)
                  }),
                  (0, i.jsx)(u.DK, {
                      className: _.marginBottom40,
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
                        className: l()(x.image, _.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: _.marginBottom40,
                        children: p.intl.string(p.t.dAfGb2)
                    }),
                    (0, i.jsx)(u.zx, {
                        onClick: C,
                        children: p.intl.string(p.t.uJWIj4)
                    })
                ]
            })
          : (0, i.jsxs)(u.ZP, {
                children: [
                    (0, i.jsx)(u.Ee, {
                        src: n(892235),
                        className: l()(x.image, _.marginBottom20)
                    }),
                    (0, i.jsx)(u.Dx, {
                        className: _.marginBottom8,
                        children: p.intl.string(p.t['0c8+5u'])
                    }),
                    (0, i.jsx)(u.DK, {
                        className: _.marginBottom40,
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
