r.d(t, { i: () => a });
var n = r(473749),
    l = r(442837),
    u = r(19780),
    i = r(959457),
    c = r(630759);
function a(e) {
    let { channelId: t, userId: r, nickname: a, onAlertOpen: o } = e,
        s = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([u.Z, i.Z], () => (0, c.UB)(t, [u.Z, i.Z]));
        })({ userId: r }),
        f = n.useRef(null);
    n.useEffect(() => {
        s && null == f.current
            ? (f.current = setTimeout(() => {
                  o(),
                      (0, c.lg)({
                          userId: r,
                          channelId: t,
                          nickname: a,
                      });
              }, 1000))
            : (clearTimeout(f.current), (f.current = null));
        let e = f.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, s, a, o, r]);
}
