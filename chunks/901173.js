(n.d(t, { Lj: () => f, OG: () => E, Qu: () => h, l$: () => A }), n(321073));
var i = n(582128),
    r = n(17928),
    a = n(287809),
    s = n(427262),
    l = n(183011),
    o = n(932111),
    d = n(503275),
    c = n(809526),
    u = n(105292);
let _ = /<@!?(\d+)>|<file:(\d{16}-[a-z0-9]{6})>/g;
function E(e, t) {
    let n = /(?:^|\s)@([\w.-]*)$/.exec(e.slice(0, t));
    return null == n ? null : { start: t - n[1].length - 1, end: t, text: n[1] };
}
function A(e, t, n) {
    let i = n.toLowerCase();
    return [
        ...e
            .filter(
                (e) =>
                    !!("" === i || e.username.toLowerCase().startsWith(i)) ||
                    (0, s.mG)(e)
                        .toLowerCase()
                        .split(/\s+/)
                        .some((e) => e.startsWith(i)),
            )
            .slice(0, 8)
            .map((e) => ({ kind: "user", user: e })),
        ...(0, o.dG)(t, n)
            .slice(0, 8)
            .map((e) => ({ kind: "file", file: e })),
    ];
}
function h(e) {
    let t = i.useMemo(
        () => [
            ...new Set(
                (function (e) {
                    let t = [],
                        n = 0;
                    for (let i of e.matchAll(_)) {
                        let r = i.index ?? 0;
                        (r > n && t.push({ kind: "text", text: e.slice(n, r) }),
                            t.push(
                                null != i[1] ? { kind: "mention", userId: i[1] } : { kind: "file", attachmentId: i[2] },
                            ),
                            (n = r + i[0].length));
                    }
                    return (n < e.length && t.push({ kind: "text", text: e.slice(n) }), t);
                })(e).flatMap((e) => ("mention" === e.kind ? [e.userId] : [])),
            ),
        ],
        [e],
    );
    return (
        i.useEffect(() => {
            for (let e of t) (0, d.Y_)(e);
        }, [t]),
        (0, r.bG)([a.default], () => t.filter((e) => null != a.default.getUser(e)).length, [t])
    );
}
function f(e) {
    var t, n;
    return (
        (t = (e) => a.default.getUser(e)),
        (n = (e) => l.A.getAttachment(e)),
        e.replace(_, (e, i, r) => {
            if (null == i) return `@${n(r ?? "")?.name ?? u.intl.string(c.default.ff9Q4C)}`;
            let a = t(i);
            return null == a ? e : `@${(0, s.mG)(a)}`;
        })
    );
}
