(n.d(t, { Z: () => u }), n(388685));
var r = n(73800),
    i = n(442837),
    l = n(479531),
    s = n(601964),
    a = n(430824),
    o = n(594174),
    c = n(53365),
    d = n(223892);
function u(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
        [u, m] = r.useState(),
        [g, p] = r.useState(!1),
        f = (0, d.Ob)(n);
    return {
        canSubmitAcceptance: (0, i.e7)(
            [o.default],
            () => {
                let e = o.default.getCurrentUser();
                return null != n && (0, s.eM)(n, e);
            },
            [n]
        ),
        error: u,
        loading: g,
        submitAcceptTermsRequest: r.useCallback(async () => {
            if (null != e && (f || null != t)) {
                (p(!0), m(void 0));
                try {
                    null != t ? await c.wE(e, t) : await c.zo(e);
                } catch (e) {
                    m(new l.Z(e));
                } finally {
                    p(!1);
                }
            }
        }, [e, t, f])
    };
}
