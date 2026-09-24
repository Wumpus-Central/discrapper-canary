l.d(n, { A: () => g });
var e = l(477900),
    i = l(582128),
    r = l(834730),
    a = l(396583),
    s = l(927813);
let u = (0, l(945810).mj)({
    name: "2026-09-invite-expiring-soon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var o = l(330936),
    c = l(375708);
let m = s.A.Millis.MINUTE;
function d(t) {
    let { parts: n, location: l } = t,
        { enabled: i } = u.useConfig({ location: l });
    return i
        ? (0, e.jsx)(r.E, {
              tag: "span",
              variant: "text-sm/normal",
              color: "text-muted",
              children: (function (t) {
                  let { unit: n, value: l } = t;
                  switch (n) {
                      case "days":
                          return c.intl.formatToPlainString(c.t.l7PkYW, { numDays: l });
                      case "hours":
                          return c.intl.formatToPlainString(c.t.Ifgxdy, { numHours: l });
                      case "minutes":
                          return c.intl.formatToPlainString(c.t["5fXjSj"], { numMinutes: l });
                  }
              })(n),
          })
        : null;
}
function g(t) {
    var n;
    let { invite: l, location: r } = t,
        [s, u] = i.useState(() => Date.now()),
        c = ((n = o.TA), l?.guild != null && null == l.target_application && l.guild.id !== n)
            ? (function (t, n) {
                  if (null == t || "" === t) return null;
                  let l = Date.parse(t);
                  if (Number.isNaN(l)) return null;
                  let e = l - n;
                  if (e <= 0 || e > 6048e5) return null;
                  let i = Math.floor(e / 6e4);
                  return i >= 1440
                      ? { unit: "days", value: Math.floor(i / 1440) }
                      : i >= 60
                        ? { unit: "hours", value: Math.floor(i / 60) }
                        : { unit: "minutes", value: Math.max(1, i) };
              })(l?.expires_at, s)
            : null;
    return ((0, a.A)(() => u(Date.now()), null == c ? null : m), null == r || null == c)
        ? null
        : (0, e.jsx)(d, { parts: c, location: r });
}
