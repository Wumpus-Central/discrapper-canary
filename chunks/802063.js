r.d(t, { i: () => a });
var n = r(192379),
    l = r(442837),
    i = r(19780),
    u = r(959457),
    s = r(630759);
function a(e) {
    let { channelId: t, userId: r, nickname: a, onAlertOpen: o } = e,
        c = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([i.Z, u.Z], () => (0, s.UB)(t, [i.Z, u.Z]));
        })({ userId: r }),
        d = n.useRef(null);
    n.useEffect(() => {
        c && null == d.current
            ? (d.current = setTimeout(() => {
                  o(),
                      (0, s.lg)({
                          userId: r,
                          channelId: t,
                          nickname: a
                      });
              }, 1000))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, c, a, o, r]);
}
