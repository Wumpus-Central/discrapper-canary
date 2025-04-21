n.d(t, { Z: () => d }), n(388685);
var r = n(192379),
    i = n(442837),
    l = n(479531),
    s = n(430824),
    a = n(594174),
    o = n(53365),
    c = n(223892);
function d(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
        [d, u] = r.useState(),
        [m, g] = r.useState(!1),
        p = (0, c.Ob)(n);
    return {
        canSubmitAcceptance: (0, i.e7)(
            [a.default],
            () => {
                let e = a.default.getCurrentUser();
                return (null == n ? void 0 : n.isOwner(e)) === !0;
            },
            [n]
        ),
        error: d,
        loading: m,
        submitAcceptTermsRequest: r.useCallback(async () => {
            if (null != e && (p || null != t)) {
                g(!0), u(void 0);
                try {
                    null != t ? await o.wE(e, t) : await o.zo(e);
                } catch (e) {
                    u(new l.Z(e));
                } finally {
                    g(!1);
                }
            }
        }, [e, t, p])
    };
}
