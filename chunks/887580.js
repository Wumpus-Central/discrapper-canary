(n.d(t, {
    $2: () => m,
    sZ: () => b,
    vF: () => O
}),
    n(413496),
    n(433524),
    n(35282),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(594174),
    c = n(572004),
    u = n(499533),
    d = n(492435),
    f = n(389494),
    _ = n(353926),
    p = n(405548);
let h = RegExp('^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$', 'i');
function m(e) {
    return h.test(e);
}
function g(e) {
    let t = e.match(h);
    return null == t || t.length < 2 ? null : t[1];
}
function E(e) {
    let t = e.match(h);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function b(e, t) {
    return null != t ? 'dev://experiment/'.concat(e, '/').concat(t) : 'dev://experiment/'.concat(e);
}
function y(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, c.JG)(t, () =>
                (0, s.showToast)({
                    id: 'experiment-link-copied',
                    message: 'Copied experiment link',
                    type: s.ToastType.SUCCESS
                })
            );
        }, [t]);
    return (0, r.jsx)(s.P3F, {
        className: p.copyLinkButton,
        onClick: n,
        children: (0, r.jsx)(s.xPt, {
            size: 'sm',
            color: 'currentColor'
        })
    });
}
function O(e) {
    let { url: t } = e,
        n = g(t),
        i = E(t),
        c = (0, a.e7)([_.Z], () => _.Z.getRegisteredExperiments()),
        h = (0, a.e7)([_.Z], () => (null == n ? null : _.Z.getLoadedUserExperiment(n))),
        m = (0, a.cj)([_.Z], () => _.Z.getAllExperimentOverrideDescriptors()),
        b = (0, a.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n) return null;
    let O = c[n],
        v = m[n];
    if (null == O) return null;
    let I = (0, f.a)(O.buckets, O.description).find((e) => e.value === i),
        T = +(null != I),
        S = null != v && null != I && v.bucket === I.value,
        A = () => {
            null != I && (S ? (0, d.rX)(n, null) : (0, d.rX)(n, I.value));
        },
        N = (0, r.jsx)(y, { url: t }),
        C = null;
    return (1 === T && null != I
        ? (C = (0, r.jsx)(s.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: I.label
          }))
        : null != h &&
          (C = (0, r.jsxs)(s.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: ['Server Config: ', u.Z.getExperimentBucketName(h.bucket)]
          })),
    b)
        ? (0, r.jsxs)('div', {
              className: p.root,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('div', {
                          className: p.header,
                          children: (0, r.jsxs)(s.Kqy, {
                              direction: 'horizontal',
                              align: 'start',
                              gap: 8,
                              children: [
                                  (0, r.jsx)(s.Che, { size: 'lg' }),
                                  (0, r.jsxs)(s.Kqy, {
                                      direction: 'vertical',
                                      gap: 0,
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-md/semibold',
                                              children: O.title
                                          }),
                                          C
                                      ]
                                  }),
                                  N
                              ]
                          })
                      })
                  }),
                  (0, r.jsx)(s.Kqy, {
                      direction: 'horizontal',
                      align: 'center',
                      gap: 4,
                      justify: 'space-between',
                      children:
                          null != I
                              ? (0, r.jsx)(s.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    justify: 'end',
                                    children: (0, r.jsx)(o.zx, {
                                        fullWidth: !0,
                                        onClick: A,
                                        color: S ? o.zx.Colors.RED : o.zx.Colors.BRAND,
                                        children: S ? 'Clear Treatment '.concat(I.value) : 'Apply Treatment '.concat(I.value)
                                    })
                                })
                              : (0, r.jsx)('div', {
                                    className: p.experimentOverride,
                                    children: (0, r.jsx)(f.y, {
                                        experiment: O,
                                        experimentId: n,
                                        overrideDescriptor: v
                                    })
                                })
                  })
              ]
          })
        : null;
}
