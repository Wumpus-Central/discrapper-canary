r.d(t, { Z: () => o }), r(388685);
var n = r(442837),
    i = r(567409),
    a = r(594174),
    l = r(823379);
function o(e) {
    let t = (0, i.N)(e);
    return (0, n.Wu)([a.default], () => {
        let e = new Set();
        return (
            t.forEach((t) => {
                e.add(t.author_id),
                    t.participants.forEach((t) => {
                        e.add(t);
                    });
            }),
            Array.from(e)
                .map((e) => a.default.getUser(e))
                .filter(l.lm)
        );
    }, [t]);
}
