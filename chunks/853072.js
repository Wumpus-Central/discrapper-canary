n.d(t, { Z: () => a }), n(388685);
var r = n(442837),
    i = n(567409),
    l = n(594174),
    o = n(823379);
function a(e) {
    let t = (0, i.N)(e);
    return (0, r.Wu)([l.default], () => {
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
                .filter(o.lm)
        );
    }, [t]);
}
