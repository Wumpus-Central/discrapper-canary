(n.d(t, { Lj: () => h, OG: () => c, Qu: () => A, S$: () => _, gg: () => E, l$: () => u }), n(321073));
var i = n(582128),
    r = n(17928),
    a = n(287809),
    s = n(427262),
    l = n(503275);
let o = /<@!?(\d+)>/g,
    d = /(^|\s)@([\w.]+)/g;
function c(e, t) {
    let n = /(?:^|\s)@([\w.]*)$/.exec(e.slice(0, t));
    return null == n ? null : { start: t - n[1].length - 1, end: t, text: n[1] };
}
function u(e, t) {
    let n = t.toLowerCase();
    return e
        .filter(
            (e) =>
                !!("" === n || e.username.toLowerCase().startsWith(n)) ||
                (0, s.mG)(e)
                    .toLowerCase()
                    .split(/\s+/)
                    .some((e) => e.startsWith(n)),
        )
        .slice(0, 8);
}
function _(e, t, n) {
    let i = `@${n.username} `;
    return { value: e.slice(0, t.start) + i + e.slice(t.end), caret: t.start + i.length };
}
function E(e, t) {
    if (0 === t.length) return e;
    let n = new Map(t.map((e) => [e.username.toLowerCase(), e.id]));
    return e.replace(d, (e, t, i) => {
        let r = i.replace(/\.+$/, ""),
            a = n.get(r.toLowerCase());
        return null == a ? e : `${t}<@${a}>${i.slice(r.length)}`;
    });
}
function A(e) {
    let t = i.useMemo(
        () => [
            ...new Set(
                (function (e) {
                    let t = [],
                        n = 0;
                    for (let i of e.matchAll(o)) {
                        let r = i.index ?? 0;
                        (r > n && t.push({ kind: "text", text: e.slice(n, r) }),
                            t.push({ kind: "mention", userId: i[1] }),
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
            for (let e of t) (0, l.Y_)(e);
        }, [t]),
        (0, r.bG)([a.default], () => t.filter((e) => null != a.default.getUser(e)).length, [t])
    );
}
function h(e) {
    var t;
    return (
        (t = (e) => a.default.getUser(e)),
        e.replace(o, (e, n) => {
            let i = t(n);
            return null == i ? e : `@${(0, s.mG)(i)}`;
        })
    );
}
