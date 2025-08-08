n.d(t, { Z: () => a }), n(388685);
var r = n(442837),
    l = n(567409),
    i = n(594174),
    o = n(823379);
function a(e) {
    let t = (0, l.N)(e);
    return (0, r.Wu)([i.default], () => {
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
                .filter(o.lm)
        );
    }, [t]);
}
