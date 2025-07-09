n.d(t, { i: () => s });
var r = n(73800),
    l = n(442837),
    i = n(19780),
    u = n(959457),
    a = n(630759);
function s(e) {
    let { channelId: t, userId: n, nickname: s, onAlertOpen: c } = e,
        o = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([i.Z, u.Z], () => (0, a.UB)(t, [i.Z, u.Z]));
        })({ userId: n }),
        d = r.useRef(null);
    r.useEffect(() => {
        o && null == d.current
            ? (d.current = setTimeout(() => {
                  (c(),
                      (0, a.lg)({
                          userId: n,
                          channelId: t,
                          nickname: s
                      }));
              }, 1000))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, o, s, c, n]);
}
