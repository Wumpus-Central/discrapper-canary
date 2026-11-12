var l = n(620632),
    i = n(627784),
    r = n(593673);
n(754674);
let a = "draft:",
    s = 0;
function o(e, t, n) {
    let l = {
        id: `${a}${s++}`,
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
let u = [[r.a.LEADERBOARD, r.a.WHITEBOARD], [r.a.POPULAR_GAMES]];
n.d(
    t,
    {},
    {
        Ac: function (e) {
            return u.flatMap((t, n) =>
                t
                    .flatMap((t) => {
                        let n = e.find((e) => e.type === t);
                        return null == n ? [] : [n];
                    })
                    .map((e, t) => ({ ...o(e.type, e.name, e.locked), position: { column: n, order: t } })),
            );
        },
        GE: function (e, t) {
            if (e instanceof l.oh)
                for (let [n, l] of Object.entries(new i.LG({ status: e.status, body: e.body }).getAllFieldErrors())) {
                    let [e, i] = n.split(".");
                    if ("widgets" !== e) continue;
                    let r = Number(i),
                        a = Number.isInteger(r) ? t[r] : void 0,
                        s = l[0]?.message;
                    if (null != a && null != s) return { type: a.type, message: s };
                }
        },
        Ny: function (e) {
            return e.startsWith(a);
        },
        aU: function (e, t) {
            let n = new Map();
            for (let e of t) n.set(e.type, (n.get(e.type) ?? 0) + 1);
            return e.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
        },
        ox: o,
        y0: function (e) {
            if (e.type === r.a.IMAGE_TEXT) {
                let t = { type: e.type, text: e.text, title: e.title };
                return (void 0 !== e.image && (t.image = e.image), t);
            }
            return e;
        },
    },
);
