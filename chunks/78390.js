n.d(t, { Q: () => r, f: () => a });
var i = n(375708);
function r(e) {
    switch (e) {
        case "home":
        case "guide":
            return i.intl.string(i.t.VbpLyU);
        case "browse":
            return i.intl.string(i.t.et6wav);
        case "customize":
            return i.intl.string(i.t.h9mGOP);
        case "linked-roles":
            return i.intl.string(i.t.ghtnss);
    }
    return null;
}
function a(e, t, n, i) {
    if ("linked-roles" === t) {
        if (null == i) return null;
        let t = e.getRole(i, n);
        return null == t || t.tags?.guild_connections !== null ? null : t.name;
    }
    return null;
}
