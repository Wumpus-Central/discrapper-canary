r.d(t, { i: () => s });
var n = r(73800),
    l = r(442837),
    i = r(19780),
    u = r(959457),
    a = r(630759);
function s(e) {
    let { channelId: t, userId: r, nickname: s, onAlertOpen: o } = e,
        c = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([i.Z, u.Z], () => (0, a.UB)(t, [i.Z, u.Z]));
        })({ userId: r }),
        d = n.useRef(null);
    n.useEffect(() => {
        c && null == d.current
            ? (d.current = setTimeout(() => {
                  (o(),
                      (0, a.lg)({
                          userId: r,
                          channelId: t,
                          nickname: s
                      }));
              }, 1000))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, c, s, o, r]);
}
