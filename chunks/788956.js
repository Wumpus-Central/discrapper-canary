n.d(t, { d: () => o });
var r = n(473749),
    i = n(442837),
    a = n(457330),
    l = n(553795);
function o(e) {
    let t = (0, i.e7)([l.Z], () => (null != e ? l.Z.getAccount(null, e) : null)),
        n = (0, i.e7)([l.Z], () => l.Z.isFetching()),
        o = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: o,
        canConnect: null != e,
        startConnection: r.useCallback(
            async (t) => {
                if (null == e) return { success: !1 };
                try {
                    var n;
                    let r = await a.Z.authorize(e, { location: null != t ? t : "Account Linking" });
                    if (r.ok && (null == (n = r.body) ? void 0 : n.url) != null)
                        return {
                            success: !0,
                            url: r.body.url,
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
