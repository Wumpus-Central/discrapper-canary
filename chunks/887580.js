n.d(t, {
    $2: () => E,
    sZ: () => O,
    vF: () => I,
}),
    n(413496),
    n(433524),
    n(35282);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(314897),
    l = n(594174),
    c = n(572004),
    u = n(499533),
    d = n(492435),
    f = n(389494),
    _ = n(667344),
    p = n(453032),
    h = n(493075),
    m = n(941189);
let g = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
function E(e) {
    return g.test(e);
}
function b(e) {
    let t = e.match(g);
    return null == t || t.length < 2 ? null : t[1];
}
function y(e) {
    let t = e.match(g);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function O(e, t) {
    return null != t ? "dev://experiment/".concat(e, "/").concat(t) : "dev://experiment/".concat(e);
}
function v(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, c.JG)(t, () =>
                (0, o.showToast)({
                    id: "experiment-link-copied",
                    message: "Copied experiment link",
                    type: o.ToastType.SUCCESS,
                }),
            );
        }, [t]);
    return (0, r.jsx)(o.P3F, {
        className: m.copyLinkButton,
        onClick: n,
        children: (0, r.jsx)(o.xPt, {
            size: "sm",
            color: "currentColor",
        }),
    });
}
function I(e) {
    let { url: t } = e,
        n = b(t),
        c = y(t),
        { experiments: g, overridesInfo: E } = (0, h.s)(),
        { experiments: O, overridesInfo: I } = (0, _.Q)(),
        T = i.useMemo(() => (null == n ? null : null != g[n] ? g[n] : O[n]), [g, O, n]),
        S = i.useMemo(() => {
            if (null == n);
            else if (null != E[n]) return E[n];
            else if (null != I[n]) return I[n];
        }, [E, I, n]),
        A = s.default.getId(),
        C = (0, p.a)(T, A),
        N = i.useMemo(
            () =>
                null == C || null == T
                    ? null
                    : T.system === d.I.LEGACY
                      ? u.Z.getExperimentBucketName(C.bucket)
                      : T.system === d.I.APEX
                        ? "Variant ".concat(C.variantId)
                        : null,
            [C, T],
        ),
        R = (0, a.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n || null == T) return null;
    let P = (0, f.a)(T).find((e) => e.value === c),
        w = +(null != P),
        D = null != S && null != P && S.variantId === P.value,
        x = () => {
            null != P && (D ? (0, d.rX)(T.system, n, null) : (0, d.rX)(T.system, n, P.value));
        },
        L = (0, r.jsx)(v, { url: t }),
        M = null;
    return (1 === w && null != P
        ? (M = (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: P.label,
          }))
        : null != C &&
          (M = (0, r.jsxs)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Server Config: ", N],
          })),
    R)
        ? (0, r.jsxs)("div", {
              className: m.root,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("div", {
                          className: m.header,
                          children: (0, r.jsxs)(o.Kqy, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, r.jsxs)(o.Kqy, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, r.jsx)(o.Che, { size: "lg" }),
                                          (0, r.jsxs)(o.Kqy, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-md/semibold",
                                                      children: T.title,
                                                  }),
                                                  M,
                                              ],
                                          }),
                                      ],
                                  }),
                                  L,
                              ],
                          }),
                      }),
                  }),
                  null != P
                      ? (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            variant: D ? "critical-primary" : "primary",
                            text: D ? "Clear Treatment ".concat(P.value) : "Apply Treatment ".concat(P.value),
                            onClick: x,
                        })
                      : (0, r.jsx)("div", {
                            className: m.experimentOverride,
                            children: (0, r.jsx)(f.y, {
                                experiment: T,
                                experimentId: n,
                                overrideInfo: S,
                            }),
                        }),
              ],
          })
        : null;
}
