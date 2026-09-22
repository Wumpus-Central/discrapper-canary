n.d(t, { A: () => g });
var r = n(477900),
    l = n(582128),
    i = n(778712),
    s = n(97808),
    a = n(834730),
    o = n(854627),
    c = n(286320),
    u = n(375708),
    d = n(896423);
function g() {
    let e = (0, c.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: g } = (0, o.A)({ userId: t?.id, size: i._3.SIZE_24, animateOnHover: !0 });
    function m(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let h = l.useMemo(
        () =>
            e.length >= 2
                ? u.intl.formatToPlainString(u.t.c7ETJH, { username: m(e[0]) })
                : 1 === e.length
                  ? u.intl.formatToPlainString(u.t.dpjXPL, { username: m(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.kL,
              children: [
                  (0, r.jsx)(s.eu, {
                      className: d.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: i._3.SIZE_24,
                      ...g,
                  }),
                  (0, r.jsx)(a.E, {
                      className: d.Qq,
                      variant: "text-sm/normal",
                      color: "text-overlay-light",
                      children: h,
                  }),
              ],
          });
}
