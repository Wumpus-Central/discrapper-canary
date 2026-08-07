i.d(t, { Ny: () => d, aU: () => u, ox: () => s, y0: () => c });
var n = i(593673),
    l = i(754674);
let a = "draft:",
    r = 0;
function s(e, t) {
    let i = { id: `${a}${r++}`, position: { column: l.FT, order: 0 }, requires_hydration: !1, default_title: t };
    switch (e) {
        case n.a.IMAGE_TEXT:
            return { ...i, type: e, config: { type: e, title: null, image_hash: null, text: null } };
        case n.a.LEADERBOARD:
        case n.a.WHITEBOARD:
        case n.a.POPULAR_MUSIC:
        case n.a.LIVE_ACTIVITY:
            return { ...i, type: e, config: { type: e } };
    }
}
function d(e) {
    return e.startsWith(a);
}
function u(e, t) {
    let i = new Map();
    for (let e of t) i.set(e.type, (i.get(e.type) ?? 0) + 1);
    return e.filter((e) => (i.get(e.type) ?? 0) < e.max_instances);
}
function c(e) {
    if (e.type === n.a.IMAGE_TEXT) {
        let t = { type: e.type, text: e.text, title: e.title };
        return void 0 !== e.image && (t.image = e.image), t;
    }
    return e;
}
