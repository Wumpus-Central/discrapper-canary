n.d(t, { Z: () => a }), n(388685);
var r = n(442837),
    l = n(567409),
    o = n(594174),
    i = n(823379);
function a(e) {
    let t = (0, l.N)(e);
    return (0, r.Wu)([o.default], () => {
        let e = new Set();
        return (
            t.forEach((t) => {
                e.add(t.author_id),
                    t.participants.forEach((t) => {
                        e.add(t);
                    });
            }),
            Array.from(e)
                .map((e) => o.default.getUser(e))
                .filter(i.lm)
        );
    }, [t]);
}
