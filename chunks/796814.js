n.d(t, { Z: () => u });
var r = n(73800),
    i = n(442837),
    l = n(80932),
    s = n(110924),
    a = n(471613),
    o = n(889564);
let c = [];
function u(e) {
    let { revision: t, emojis: n } = (0, i.cj)([a.Z], () => ({
            revision: a.Z.getEmojiRevision(e),
            emojis: a.Z.getEmojis(e)
        })),
        u = (0, s.Z)(t);
    return (
        r.useEffect(() => {
            (0, l.OQ)(e);
        }, [e]),
        r.useEffect(() => {
            null != u && u < t && (0, l.OQ)(e);
        }, [t, u, e]),
        r.useMemo(() => (null == n ? c : n.filter((t) => (0, o.Kt)(t, e))), [n, e])
    );
}
