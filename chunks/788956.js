t.d(n, { d: () => r });
var l = t(647438),
    i = t(442837),
    a = t(457330),
    o = t(553795);
function r(e) {
    let n = (0, i.e7)([o.Z], () => (null != e ? o.Z.getAccount(null, e) : null)),
        t = (0, i.e7)([o.Z], () => o.Z.isFetching()),
        r = null != n && !n.revoked;
    return {
        loading: t,
        hasConnection: r,
        canConnect: null != e,
        startConnection: l.useCallback(
            async (n) => {
                if (null == e) return { success: !1 };
                try {
                    var t;
                    let l = await a.Z.authorize(e, { location: null != n ? n : "Account Linking" });
                    if (l.ok && (null == (t = l.body) ? void 0 : t.url) != null)
                        return {
                            success: !0,
                            url: l.body.url,
                        };
                    return { success: !1 };
                } catch (e) {
                    return { success: !1 };
                }
            },
            [e],
        ),
        account: n,
    };
}
