t.d(r, { GF: () => o, Yw: () => n, gG: () => a }),
    t(508300),
    t(393431),
    t(532706),
    t(42231),
    t(232424),
    t(949626),
    t(767709),
    t(65162);
let n = 1;
function o(e) {
    try {
        let r = e.replace(/-/g, "+").replace(/_/g, "/"),
            t = r.padEnd(4 * Math.ceil(r.length / 4), "="),
            n = atob(t),
            o = Uint8Array.from(n, (e) => e.charCodeAt(0)),
            a = new TextDecoder().decode(o),
            c = JSON.parse(a);
        if ("string" != typeof c.name || "string" != typeof c.game_id) return null;
        return c;
    } catch {
        return null;
    }
}
function a(e) {
    return `${location.protocol}//${location.host}/game-servers/share/${(function (e) {
        let r = JSON.stringify(e),
            t = new TextEncoder().encode(r),
            n = "";
        for (let e of t) n += String.fromCharCode(e);
        return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    })(e)}`;
}
