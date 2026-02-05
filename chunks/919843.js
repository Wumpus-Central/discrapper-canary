n.d(t, { b: () => r });
var i = n(73153),
    l = n(308528),
    a = n(95701);
let s = new Set();
async function r(e) {
    if (!s.has(e)) {
        s.add(e);
        try {
            let t = await l.A.fetchChannel(e),
                n = (0, a.UE)(t);
            i.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let s = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != s) return void l.A.preload(s, n.id);
        } catch {}
    }
}
