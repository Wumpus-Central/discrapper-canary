n.d(t, { GE: () => f, Ny: () => c, aU: () => d, ox: () => s, y0: () => o });
var l = n(636537),
    r = n(913122),
    i = n(593673);
n(754674);
let a = "draft:",
    u = 0;
function s(e, t, n) {
    let l = {
        id: `${a}${u++}`,
        position: { column: 0, order: 0 },
        requires_hydration: !1,
        default_title: t,
        locked: n,
    };
    switch (e) {
        case i.a.IMAGE_TEXT:
            return { ...l, type: e, config: { type: e, title: null, image_hash: null, text: null } };
        case i.a.LEADERBOARD:
        case i.a.WHITEBOARD:
        case i.a.POPULAR_MUSIC:
        case i.a.LIVE_ACTIVITY:
            return { ...l, type: e, config: { type: e } };
    }
}
function c(e) {
    return e.startsWith(a);
}
function d(e, t) {
    let n = new Map();
    for (let e of t) n.set(e.type, (n.get(e.type) ?? 0) + 1);
    return e.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
}
function o(e) {
    if (e.type === i.a.IMAGE_TEXT) {
        let t = { type: e.type, text: e.text, title: e.title };
        return (void 0 !== e.image && (t.image = e.image), t);
    }
    return e;
}
function f(e, t) {
    if (e instanceof l.oh)
        for (let [n, l] of Object.entries(new r.LG({ status: e.status, body: e.body }).getAllFieldErrors())) {
            let [e, r] = n.split(".");
            if ("widgets" !== e) continue;
            let i = Number(r),
                a = Number.isInteger(i) ? t[i] : void 0,
                u = l[0]?.message;
            if (null != a && null != u) return { type: a.type, message: u };
        }
}
