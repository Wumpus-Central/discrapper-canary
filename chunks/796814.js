n.d(t, { Z: () => d });
var r = n(473749),
    i = n(442837),
    l = n(80932),
    a = n(110924),
    s = n(471613),
    o = n(889564);
let c = [];
function d(e) {
    let { revision: t, emojis: n } = (0, i.cj)([s.Z], () => ({
            revision: s.Z.getEmojiRevision(e),
            emojis: s.Z.getEmojis(e),
        })),
        d = (0, a.Z)(t);
    return (
        r.useEffect(() => {
            (0, l.OQ)(e);
        }, [e]),
        r.useEffect(() => {
            null != d && d < t && (0, l.OQ)(e);
        }, [t, d, e]),
        r.useMemo(() => (null == n ? c : n.filter((t) => (0, o.Kt)(t, e))), [n, e])
    );
}
