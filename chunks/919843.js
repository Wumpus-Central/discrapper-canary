n.d(t, { b: () => l });
var i = n(73153),
    r = n(308528),
    a = n(95701);
let s = new Set();
async function l(e) {
    if (!s.has(e)) {
        s.add(e);
        try {
            let t = await r.A.fetchChannel(e),
                n = (0, a.UE)(t);
            i.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let s = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != s) return void r.A.preload(s, n.id);
        } catch {}
    }
}
