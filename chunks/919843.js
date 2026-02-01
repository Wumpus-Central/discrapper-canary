n.d(t, {
    b: () => s,
}),
    n(896048);
var i = n(73153),
    r = n(308528),
    l = n(95701);
let a = new Set();
async function s(e) {
    if (!a.has(e)) {
        a.add(e);
        try {
            var t, n, s;
            let a = await r.A.fetchChannel(e),
                o = (0, l.UE)(a);
            i.h.dispatch({
                type: "CHANNEL_CREATE",
                channel: o,
            });
            let u =
                null != (t = null != (n = null == (s = o.getGuildId) ? void 0 : s.call(o)) ? n : o.guild_id) ? t : null;
            if (null != u) return void r.A.preload(u, o.id);
        } catch (e) {}
    }
}
