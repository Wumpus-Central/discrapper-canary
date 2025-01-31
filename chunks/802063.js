n.d(t, { i: () => a });
var r = n(192379),
    l = n(442837),
    i = n(19780),
    u = n(959457),
    s = n(630759);
function a(e) {
    let { channelId: t, userId: n, nickname: a, onAlertOpen: o } = e,
        c = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([i.Z, u.Z], () => (0, s.UB)(t, [i.Z, u.Z]));
        })({ userId: n }),
        d = r.useRef(null);
    r.useEffect(() => {
        c && null == d.current
            ? (d.current = setTimeout(() => {
                  o(),
                      (0, s.lg)({
                          userId: n,
                          channelId: t,
                          nickname: a
                      });
              }, 1000))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, c, a, o, n]);
}
