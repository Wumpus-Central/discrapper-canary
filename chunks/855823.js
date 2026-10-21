n.d(t, { Ac: () => u, GE: () => g, Ny: () => d, aU: () => h, ox: () => o, y0: () => m });
var i = n(636537),
    l = n(913122),
    s = n(593673);
n(754674);
let r = "draft:",
    a = 0;
function o(e, t, n) {
    let i = {
        id: `${r}${a++}`,
        position: { column: 0, order: 0 },
        requires_hydration: !1,
        default_title: t,
        locked: n,
    };
    switch (e) {
        case s.a.IMAGE_TEXT:
            return { ...i, type: e, config: { type: e, title: null, image_hash: null, text: null } };
        case s.a.LEADERBOARD:
        case s.a.WHITEBOARD:
        case s.a.POPULAR_MUSIC:
        case s.a.POPULAR_GAMES:
            return { ...i, type: e, config: { type: e } };
    }
}
let c = [s.a.POPULAR_MUSIC, s.a.LEADERBOARD];
function u(e) {
    return c.flatMap((t, n) => {
        let i = e.find((e) => e.type === t);
        return null == i ? [] : [{ ...o(t, i.name, i.locked), position: { column: 0, order: n } }];
    });
}
function d(e) {
    return e.startsWith(r);
}
function h(e, t) {
    let n = new Map();
    for (let e of t) n.set(e.type, (n.get(e.type) ?? 0) + 1);
    return e.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
}
function m(e) {
    if (e.type === s.a.IMAGE_TEXT) {
        let t = { type: e.type, text: e.text, title: e.title };
        return (void 0 !== e.image && (t.image = e.image), t);
    }
    return e;
}
function g(e, t) {
    if (e instanceof i.oh)
        for (let [n, i] of Object.entries(new l.LG({ status: e.status, body: e.body }).getAllFieldErrors())) {
            let [e, l] = n.split(".");
            if ("widgets" !== e) continue;
            let s = Number(l),
                r = Number.isInteger(s) ? t[s] : void 0,
                a = i[0]?.message;
            if (null != r && null != a) return { type: r.type, message: a };
        }
}
