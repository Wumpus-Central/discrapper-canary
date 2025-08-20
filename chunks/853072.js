r.d(t, { Z: () => c }), r(388685);
var n = r(442837),
    l = r(567409),
    i = r(594174),
    a = r(823379);
function c(e) {
    let t = (0, l.N)(e);
    return (0, n.Wu)([i.default], () => {
        let e = new Set();
        return (
            t.forEach((t) => {
                e.add(t.author_id),
                    t.participants.forEach((t) => {
                        e.add(t);
                    });
            }),
            Array.from(e)
                .map((e) => i.default.getUser(e))
                .filter(a.lm)
        );
    }, [t]);
}
