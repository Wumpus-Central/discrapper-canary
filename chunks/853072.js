r.d(t, { Z: () => o }), r(388685);
var n = r(442837),
    i = r(567409),
    l = r(594174),
    a = r(823379);
function o(e) {
    let t = (0, i.N)(e);
    return (0, n.Wu)([l.default], () => {
        let e = new Set();
        return (
            t.forEach((t) => {
                e.add(t.author_id),
                    t.participants.forEach((t) => {
                        e.add(t);
                    });
            }),
            Array.from(e)
                .map((e) => l.default.getUser(e))
                .filter(a.lm)
        );
    }, [t]);
}
