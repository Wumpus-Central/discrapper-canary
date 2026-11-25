var i = n(620632),
    r = n(627784),
    a = n(593673);
n(754674);
let l = "draft:",
    s = 0;
function d(e, t, n) {
    let i = {
        id: `${l}${s++}`,
        position: { column: 0, order: 0 },
        requires_hydration: !1,
        default_title: t,
        locked: n,
    };
    switch (e) {
        case a.a.IMAGE_TEXT:
            return { ...i, type: e, config: { type: e, title: null, image_hash: null, text: null } };
        case a.a.LEADERBOARD:
        case a.a.WHITEBOARD:
        case a.a.POPULAR_MUSIC:
        case a.a.POPULAR_GAMES:
            return { ...i, type: e, config: { type: e } };
    }
}
let u = [[a.a.LEADERBOARD, a.a.WHITEBOARD], [a.a.POPULAR_GAMES]];
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
                    .map((e, t) => ({ ...d(e.type, e.name, e.locked), position: { column: n, order: t } })),
            );
        },
        GE: function (e, t) {
            if (e instanceof i.oh)
                for (let [n, i] of Object.entries(new r.LG({ status: e.status, body: e.body }).getAllFieldErrors())) {
                    let [e, r] = n.split(".");
                    if ("widgets" !== e) continue;
                    let a = Number(r),
                        l = Number.isInteger(a) ? t[a] : void 0,
                        s = i[0]?.message;
                    if (null != l && null != s) return { type: l.type, message: s };
                }
        },
        Ny: function (e) {
            return e.startsWith(l);
        },
        aU: function (e, t) {
            let n = new Map();
            for (let e of t) n.set(e.type, (n.get(e.type) ?? 0) + 1);
            return e.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
        },
        ox: d,
        y0: function (e) {
            if (e.type === a.a.IMAGE_TEXT) {
                let t = { type: e.type, text: e.text, title: e.title };
                return (void 0 !== e.image && (t.image = e.image), t);
            }
            return e;
        },
    },
);
