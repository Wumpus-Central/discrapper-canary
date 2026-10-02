n.d(e, { A: () => m });
var r = n(477900),
    i = n(582128),
    l = n(778712),
    a = n(97808),
    s = n(834730),
    o = n(854627),
    c = n(286320),
    g = n(375708),
    u = n(896423);
function m() {
    let t = (0, c.b)().slice(0, 3),
        e = t[0],
        { avatarSrc: n, eventHandlers: m } = (0, o.A)({ userId: e?.id, size: l._3.SIZE_24, animateOnHover: !0 });
    function d(t) {
        return null != t.globalName ? t.globalName : t.username;
    }
    let x = i.useMemo(
        () =>
            t.length >= 2
                ? g.intl.formatToPlainString(g.t.c7ETJH, { username: d(t[0]) })
                : 1 === t.length
                  ? g.intl.formatToPlainString(g.t.dpjXPL, { username: d(t[0]) })
                  : "",
        [t],
    );
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, r.jsx)(a.eu, {
                      className: u.__invalid_icon,
                      src: n,
                      "aria-label": e.username,
                      size: l._3.SIZE_24,
                      ...m,
                  }),
                  (0, r.jsx)(s.E, {
                      className: u.Qq,
                      variant: "text-sm/normal",
                      color: "text-overlay-light",
                      children: x,
                  }),
              ],
          });
}
