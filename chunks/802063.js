r.d(t, { i: () => s });
var n = r(73800),
    l = r(442837),
    o = r(19780),
    c = r(959457),
    i = r(630759);
function s(e) {
    let { channelId: t, userId: r, nickname: s, onAlertOpen: a } = e,
        u = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([o.Z, c.Z], () => (0, i.UB)(t, [o.Z, c.Z]));
        })({ userId: r }),
        d = n.useRef(null);
    n.useEffect(() => {
        u && null == d.current
            ? (d.current = setTimeout(() => {
                  a(),
                      (0, i.lg)({
                          userId: r,
                          channelId: t,
                          nickname: s,
                      });
              }, 1000))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, u, s, a, r]);
}
