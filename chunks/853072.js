r.d(t, { Z: () => c }), r(388685);
var n = r(442837),
    i = r(567409),
    o = r(594174),
    a = r(823379),
    l = r(652853);
function c(e) {
    let { userId: t } = (0, l.z)(),
        r = (0, i.N)(e);
    return (0, n.Wu)([o.default], () => {
        let e = o.default.getCurrentUser(),
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
                .map((e) => o.default.getUser(e))
                .filter(a.lm)
        );
    }, [r, t]);
}
