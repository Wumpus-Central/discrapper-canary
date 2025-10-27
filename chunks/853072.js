n.d(t, { Z: () => c }), n(388685);
var r = n(442837),
    i = n(567409),
    a = n(594174),
    l = n(823379),
    o = n(652853);
function c(e) {
    let { userId: t } = (0, o.z)(),
        n = (0, i.N)(e);
    return (0, r.Wu)([a.default], () => {
        let e = a.default.getCurrentUser(),
            r = new Set();
        return (
            n.forEach((e) => {
                r.add(e.author_id),
                    e.participants.forEach((e) => {
                        r.add(e);
                    });
            }),
            Array.from(r)
                .filter((n) => n !== (null == e ? void 0 : e.id) && n !== t)
                .map((e) => a.default.getUser(e))
                .filter(l.lm)
        );
    }, [n, t]);
}
