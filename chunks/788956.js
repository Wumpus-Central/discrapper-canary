n.d(t, { d: () => a });
var l = n(473749),
    i = n(442837),
    r = n(457330),
    o = n(553795);
function a(e) {
    let t = (0, i.e7)([o.Z], () => (null != e ? o.Z.getAccount(null, e) : null)),
        n = (0, i.e7)([o.Z], () => o.Z.isFetching()),
        a = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: a,
        canConnect: null != e,
        startConnection: l.useCallback(
            async (t) => {
                if (null == e) return { success: !1 };
                try {
                    var n;
                    let l = await r.Z.authorize(e, { location: null != t ? t : "Account Linking" });
                    if (l.ok && (null == (n = l.body) ? void 0 : n.url) != null)
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
        account: t,
    };
}
