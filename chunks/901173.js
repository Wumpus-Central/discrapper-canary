n(321073);
var i = n(582128),
    r = n(855986),
    a = n(287809),
    s = n(427262),
    l = n(183011),
    o = n(932111),
    d = n(503275),
    c = n(258576),
    u = n(792996);
let _ = /<@!?(\d+)>|<file:(\d{16}-[a-z0-9]{6})>/g,
    E = /```[\s\S]*?```|`[^`\n]*`|(^|[\s(])@/g;
n.d(
    t,
    {},
    {
        Lj: function (e) {
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
        },
        OG: function (e, t) {
            let n = /(?:^|[\s(])@([\p{L}\p{M}\p{N}_.-]*)$/u.exec(e.slice(0, t));
            return null == n ? null : { start: t - n[1].length - 1, end: t, text: n[1] };
        },
        Qu: function (e) {
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
                                        null != i[1]
                                            ? { kind: "mention", userId: i[1] }
                                            : { kind: "file", attachmentId: i[2] },
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
        },
        l$: function (e, t, n) {
            return [
                ...e.slice(0, 8).map((e) => ({ kind: "user", user: e })),
                ...(0, o.dG)(t, n)
                    .slice(0, 8)
                    .map((e) => ({ kind: "file", file: e })),
            ];
        },
        mO: function (e, t, n) {
            return (
                !!("" === t || e.username.toLowerCase().startsWith(t)) ||
                [(0, s.mG)(e), n ?? ""]
                    .join(" ")
                    .toLowerCase()
                    .split(/\s+/)
                    .some((e) => e.startsWith(t))
            );
        },
        wl: function (e, t) {
            let n = "",
                i = 0;
            for (let r of e.matchAll(E)) {
                if (null == r[1] || r.index < i) continue;
                let a = r.index + r[0].length,
                    s = e.slice(a),
                    l = t
                        .filter((e) => {
                            let { username: t } = e;
                            return s.slice(0, t.length).toLowerCase() === t.toLowerCase();
                        })
                        .sort((e, t) =>
                            t.username.length !== e.username.length
                                ? t.username.length - e.username.length
                                : Number(s.startsWith(t.username)) - Number(s.startsWith(e.username)),
                        )[0];
                null != l && ((n += `${e.slice(i, a - 1)}<@${l.id}>`), (i = a + l.username.length));
            }
            return n + e.slice(i);
        },
    },
);
