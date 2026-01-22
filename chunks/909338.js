n.d(t, { N: () => i });
var r = n(998218);
function i(e) {
    var t, n, i;
    let a = r.A.toURLSafe(e),
        s = null != (t = null == a ? void 0 : a.searchParams.get("referrer_id")) ? t : void 0;
    return {
        referrerId: s,
        customId: null != (n = null == a ? void 0 : a.searchParams.get("custom_id")) ? n : void 0,
        linkId: null != (i = null == a ? void 0 : a.searchParams.get("link_id")) ? i : void 0,
    };
}
