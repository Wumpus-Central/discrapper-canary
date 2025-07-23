(n.d(t, {
    $2: () => b,
    sZ: () => v,
    vF: () => T
}),
    n(413496),
    n(433524),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(314897),
    c = n(594174),
    u = n(572004),
    d = n(499533),
    _ = n(492435),
    f = n(389494),
    p = n(667344),
    h = n(453032),
    m = n(493075),
    g = n(405548);
let E = RegExp('^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$', 'i');
function b(e) {
    return E.test(e);
}
function y(e) {
    let t = e.match(E);
    return null == t || t.length < 2 ? null : t[1];
}
function O(e) {
    let t = e.match(E);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function v(e, t) {
    return null != t ? 'dev://experiment/'.concat(e, '/').concat(t) : 'dev://experiment/'.concat(e);
}
function I(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, u.JG)(t, () =>
                (0, s.showToast)({
                    id: 'experiment-link-copied',
                    message: 'Copied experiment link',
                    type: s.ToastType.SUCCESS
                })
            );
        }, [t]);
    return (0, r.jsx)(s.P3F, {
        className: g.copyLinkButton,
        onClick: n,
        children: (0, r.jsx)(s.xPt, {
            size: 'sm',
            color: 'currentColor'
        })
    });
}
function T(e) {
    let { url: t } = e,
        n = y(t),
        u = O(t),
        { experiments: E, overridesInfo: b } = (0, m.s)(),
        { experiments: v, overridesInfo: T } = (0, p.Q)(),
        S = i.useMemo(() => (null == n ? null : null != E[n] ? E[n] : v[n]), [E, v, n]),
        A = i.useMemo(() => {
            if (null == n);
            else if (null != b[n]) return b[n];
            else if (null != T[n]) return T[n];
        }, [b, T, n]),
        N = l.default.getId(),
        C = (0, h.a)(S, N),
        R = i.useMemo(() => (null == C || null == S ? null : S.system === _.I.LEGACY ? d.Z.getExperimentBucketName(C.bucket) : S.system === _.I.APEX ? 'Variant '.concat(C.variantId) : null), [C, S]),
        P = (0, a.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n || null == S) return null;
    let w = (0, f.a)(S.variants).find((e) => e.value === u),
        D = +(null != w),
        L = null != A && null != w && A.variantId === w.value,
        x = () => {
            null != w && (L ? (0, _.rX)(S.system, n, null) : (0, _.rX)(S.system, n, w.value));
        },
        M = (0, r.jsx)(I, { url: t }),
        k = null;
    return (1 === D && null != w
        ? (k = (0, r.jsx)(s.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: w.label
          }))
        : null != C &&
          (k = (0, r.jsxs)(s.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: ['Server Config: ', R]
          })),
    P)
        ? (0, r.jsxs)('div', {
              className: g.root,
              children: [
                  (0, r.jsx)('div', {
                      children: (0, r.jsx)('div', {
                          className: g.header,
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
                                              children: S.title
                                          }),
                                          k
                                      ]
                                  }),
                                  M
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
                          null != w
                              ? (0, r.jsx)(s.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    justify: 'end',
                                    children: (0, r.jsx)(o.zx, {
                                        fullWidth: !0,
                                        onClick: x,
                                        color: L ? o.zx.Colors.RED : o.zx.Colors.BRAND,
                                        children: L ? 'Clear Treatment '.concat(w.value) : 'Apply Treatment '.concat(w.value)
                                    })
                                })
                              : (0, r.jsx)('div', {
                                    className: g.experimentOverride,
                                    children: (0, r.jsx)(f.y, {
                                        experiment: S,
                                        experimentId: n,
                                        overrideInfo: A
                                    })
                                })
                  })
              ]
          })
        : null;
}
