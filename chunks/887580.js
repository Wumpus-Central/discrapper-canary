n.d(t, {
    $2: () => h,
    sZ: () => E,
    vF: () => y
}),
    n(413496),
    n(433524),
    n(35282),
    n(953529);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(594174),
    l = n(572004),
    c = n(499533),
    u = n(492435),
    d = n(389494),
    f = n(353926),
    _ = n(405548);
let p = RegExp('^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$', 'i');
function h(e) {
    return p.test(e);
}
function m(e) {
    let t = e.match(p);
    return null == t || t.length < 2 ? null : t[1];
}
function g(e) {
    let t = e.match(p);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function E(e, t) {
    return null != t ? 'dev://experiment/'.concat(e, '/').concat(t) : 'dev://experiment/'.concat(e);
}
function b(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, l.JG)(t) &&
                (0, a.showToast)({
                    id: 'experiment-link-copied',
                    message: 'Copied experiment link',
                    type: a.ToastType.SUCCESS
                });
        }, [t]);
    return (0, r.jsx)(a.P3F, {
        className: _.copyLinkButton,
        onClick: n,
        children: (0, r.jsx)(a.xPt, {
            size: 'sm',
            color: 'currentColor'
        })
    });
}
function y(e) {
    let { url: t } = e,
        n = m(t),
        i = g(t),
        l = (0, o.e7)([f.Z], () => f.Z.getRegisteredExperiments()),
        p = (0, o.e7)([f.Z], () => (null == n ? null : f.Z.getLoadedUserExperiment(n))),
        h = (0, o.cj)([f.Z], () => f.Z.getAllExperimentOverrideDescriptors()),
        E = (0, o.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n) return null;
    let y = l[n],
        v = h[n];
    if (null == y) return null;
    let O = (0, d.a)(y.buckets, y.description).find((e) => e.value === i),
        I = +(null != O),
        S = null != v && null != O && v.bucket === O.value,
        T = () => {
            null != O && (S ? (0, u.rX)(n, null) : (0, u.rX)(n, O.value));
        },
        N = (0, r.jsx)(b, { url: t }),
        A = null;
    return (1 === I && null != O
        ? (A = (0, r.jsx)(a.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: O.label
          }))
        : null != p &&
          (A = (0, r.jsxs)(a.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: ['Server Config: ', c.Z.getExperimentBucketName(p.bucket)]
          })),
    E)
        ? (0, r.jsxs)('div', {
              className: _.root,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('div', {
                          className: _.header,
                          children: (0, r.jsxs)(a.Kqy, {
                              direction: 'horizontal',
                              align: 'start',
                              gap: 8,
                              children: [
                                  (0, r.jsx)(a.Che, { size: 'lg' }),
                                  (0, r.jsxs)(a.Kqy, {
                                      direction: 'vertical',
                                      gap: 0,
                                      children: [
                                          (0, r.jsx)(a.Text, {
                                              variant: 'text-md/semibold',
                                              children: y.title
                                          }),
                                          A
                                      ]
                                  }),
                                  N
                              ]
                          })
                      })
                  }),
                  (0, r.jsx)(a.Kqy, {
                      direction: 'horizontal',
                      align: 'center',
                      gap: 4,
                      justify: 'space-between',
                      children:
                          null != O
                              ? (0, r.jsx)(a.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    justify: 'end',
                                    children: (0, r.jsx)(a.zxk, {
                                        fullWidth: !0,
                                        onClick: T,
                                        color: S ? a.zxk.Colors.RED : a.zxk.Colors.BRAND,
                                        children: S ? 'Clear Treatment '.concat(O.value) : 'Apply Treatment '.concat(O.value)
                                    })
                                })
                              : (0, r.jsx)('div', {
                                    className: _.experimentOverride,
                                    children: (0, r.jsx)(d.y, {
                                        experiment: y,
                                        experimentId: n,
                                        overrideDescriptor: v
                                    })
                                })
                  })
              ]
          })
        : null;
}
