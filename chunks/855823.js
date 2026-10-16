n.d(t, { GE: () => f, Ny: () => u, aU: () => d, ox: () => o, y0: () => c });
var l = n(636537),
    a = n(913122),
    r = n(593673);
n(754674);
let i = "draft:",
    s = 0;
function o(e, t, n) {
    let l = {
        id: `${i}${s++}`,
        position: { column: 0, order: 0 },
        requires_hydration: !1,
        default_title: t,
        locked: n,
    };
    switch (e) {
        case r.a.IMAGE_TEXT:
            return { ...l, type: e, config: { type: e, title: null, image_hash: null, text: null } };
        case r.a.LEADERBOARD:
        case r.a.WHITEBOARD:
        case r.a.POPULAR_MUSIC:
        case r.a.POPULAR_GAMES:
            return { ...l, type: e, config: { type: e } };
    }
}
function u(e) {
    return e.startsWith(i);
}
function d(e, t) {
    let n = new Map();
    for (let e of t) n.set(e.type, (n.get(e.type) ?? 0) + 1);
    return e.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
}
function c(e) {
    if (e.type === r.a.IMAGE_TEXT) {
        let t = { type: e.type, text: e.text, title: e.title };
        return (void 0 !== e.image && (t.image = e.image), t);
    }
    return e;
}
function f(e, t) {
    if (e instanceof l.oh)
        for (let [n, l] of Object.entries(new a.LG({ status: e.status, body: e.body }).getAllFieldErrors())) {
            let [e, a] = n.split(".");
            if ("widgets" !== e) continue;
            let r = Number(a),
                i = Number.isInteger(r) ? t[r] : void 0,
                s = l[0]?.message;
            if (null != i && null != s) return { type: i.type, message: s };
        }
}
