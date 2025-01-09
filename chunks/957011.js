n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(479531),
    s = n(430824),
    a = n(594174),
    o = n(53365),
    c = n(223892);
function d(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getGuild(e)),
        [d, u] = i.useState(),
        [m, h] = i.useState(!1),
        g = (0, c.Ob)(n),
        x = (0, r.e7)(
            [a.default],
            () => {
                let e = a.default.getCurrentUser();
                return (null == n ? void 0 : n.isOwner(e)) === !0;
            },
            [n]
        );
    return {
        canSubmitAcceptance: x,
        error: d,
        loading: m,
        submitAcceptTermsRequest: i.useCallback(async () => {
            if (null != e && (g || null != t)) {
                h(!0), u(void 0);
                try {
                    null != t ? await o.wE(e, t) : await o.zo(e);
                } catch (e) {
                    u(new l.Z(e));
                } finally {
                    h(!1);
                }
            }
        }, [e, t, g])
    };
}
