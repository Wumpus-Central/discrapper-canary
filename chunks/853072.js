r.d(t, { Z: () => o }), r(388685);
var n = r(442837),
    i = r(567409),
    a = r(594174),
    l = r(823379);
function o(e) {
    let t = (0, i.N)(e);
    return (0, n.Wu)([a.default], () => {
        let e = a.default.getCurrentUser(),
            r = new Set();
        return (
            t.forEach((e) => {
                r.add(e.author_id),
                    e.participants.forEach((e) => {
                        r.add(e);
                    });
            }),
            Array.from(r)
                .filter((t) => t !== (null == e ? void 0 : e.id))
                .map((e) => a.default.getUser(e))
                .filter(l.lm)
        );
    }, [t]);
}
