r.d(t, { Z: () => c }), r(388685);
var n = r(442837),
    i = r(567409),
    l = r(594174),
    a = r(823379),
    o = r(652853);
function c(e) {
    let { userId: t } = (0, o.z)(),
        r = (0, i.N)(e);
    return (0, n.Wu)([l.default], () => {
        let e = l.default.getCurrentUser(),
            n = new Set();
        return (
            r.forEach((e) => {
                n.add(e.author_id),
                    e.participants.forEach((e) => {
                        n.add(e);
                    });
            }),
            Array.from(n)
                .filter((r) => r !== (null == e ? void 0 : e.id) && r !== t)
                .map((e) => l.default.getUser(e))
                .filter(a.lm)
        );
    }, [r, t]);
}
