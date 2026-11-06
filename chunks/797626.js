n.d(t, { default: () => k });
var e = n(477900),
    i = n(582128),
    a = n(855986),
    r = n(189213),
    s = n(331322),
    u = n(143129),
    c = n(834730),
    d = n(858899),
    o = n(95477),
    p = n(821609),
    g = n(957565),
    h = n(233470),
    f = n(260498),
    j = n(951178);
n(938796);
var x = n(191850),
    C = n(792996);
function k(l) {
    let { projectId: t, transitionState: n, onClose: d } = l,
        o = (0, a.bG)([f.Ay], () => f.Ay.getProject(t) ?? null, [t]),
        [p, g] = i.useState(null),
        [k, v] = i.useState(!1),
        m = i.useCallback(
            async (l) => {
                let t =
                    null == o
                        ? null
                        : (function (l, t) {
                              let { flags: n } = l;
                              return null == n ? null : t ? n | j.Zh.PUBLIC : n & ~j.Zh.PUBLIC;
                          })(o, l);
                if (null != o && null != t) {
                    (g(l), v(!1));
                    try {
                        await (0, h.CW)(o.id, { flags: t });
                    } catch {
                        v(!0);
                    }
                    g(null);
                }
            },
            [o],
        ),
        w = null != o && (0, f.PV)(o),
        y = null != o && w && (0, j.IU)(o),
        L = p ?? (null != o && (0, j.XE)(o));
    return (0, e.jsx)(r.a, {
        transitionState: n,
        onClose: d,
        title: C.intl.string(C.t.RDE0Sc),
        size: "md",
        actions: [{ text: C.intl.string(C.t.i4jeWR), variant: "primary", onClick: d }],
        children:
            null == o
                ? null
                : (0, e.jsxs)(s.B, {
                      gap: 16,
                      children: [
                          (0, e.jsx)(u.d, {
                              label: C.intl.string(x.default.ujIxRm),
                              description: C.intl.string(w ? x.default.gT8zk1 : x.default.WLBlI4),
                              checked: L,
                              disabled: !y || null != p,
                              onChange: m,
                          }),
                          k
                              ? (0, e.jsx)(c.E, {
                                    variant: "body-sm/normal",
                                    color: "text-feedback-critical",
                                    children: C.intl.string(x.default.wzqQPR),
                                })
                              : null,
                          L && null == p ? (0, e.jsx)(b, { project: o }) : null,
                      ],
                  }),
    });
}
function b(l) {
    var t, n;
    let a,
        { project: r } = l,
        u =
            ((t = r.application_id),
            (n = r.name),
            `https://${window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "conjure.town" : "conjure.city"}/${t}/${
                "" ===
                (a = n
                    .normalize("NFKD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .slice(0, 48)
                    .replace(/^-+|-+$/g, ""))
                    ? "app"
                    : a
            }`),
        c = i.useCallback(() => {
            (0, g.C)(
                u,
                () => (0, d.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                () => (0, d.P0)({ text: C.intl.string(x.default["8m6QAX"]), variant: "critical" }),
            );
        }, [u]);
    return (0, e.jsxs)(s.B, {
        direction: "horizontal",
        gap: 8,
        align: "end",
        children: [
            (0, e.jsx)(o.k, { label: C.intl.string(x.default.IPmhvk), value: u, readOnly: !0, fullWidth: !0 }),
            (0, e.jsx)(p.$, { variant: "secondary", text: C.intl.string(C.t.OpuAlK), onClick: c }),
        ],
    });
}
