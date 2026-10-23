n.d(t, { D: () => r, N: () => a });
var i = n(998218);
function r(e) {
    return e?.searchParams.get("channel_id") ?? void 0;
}
function a(e) {
    let t = i.A.toURLSafe(e),
        n = t?.searchParams.get("referrer_id") ?? void 0;
    return {
        referrerId: n,
        customId: t?.searchParams.get("custom_id") ?? void 0,
        linkId: t?.searchParams.get("link_id") ?? void 0,
        channelId: r(t),
    };
}
