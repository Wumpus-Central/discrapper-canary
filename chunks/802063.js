r.d(t, { i: () => s });
var n = r(647438),
    l = r(442837),
    u = r(19780),
    i = r(959457),
    a = r(630759);
function s(e) {
    let { channelId: t, userId: r, nickname: s, onAlertOpen: c } = e,
        o = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([u.Z, i.Z], () => (0, a.UB)(t, [u.Z, i.Z]));
        })({ userId: r }),
        f = n.useRef(null);
    n.useEffect(() => {
        o && null == f.current
            ? (f.current = setTimeout(() => {
                  c(),
                      (0, a.lg)({
                          userId: r,
                          channelId: t,
                          nickname: s,
                      });
              }, 1000))
            : (clearTimeout(f.current), (f.current = null));
        let e = f.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, o, s, c, r]);
}
