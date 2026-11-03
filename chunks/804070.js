e.d(l, { A: () => g });
var t = e(477900),
    i = e(582128),
    r = e(834730),
    a = e(396583),
    s = e(927813);
let u = (0, e(945810).mj)({
    name: "2026-09-invite-expiring-soon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var o = e(330936),
    c = e(105292);
let d = s.A.Millis.MINUTE;
function m(n) {
    let { parts: l, location: e } = n,
        { enabled: i } = u.useConfig({ location: e });
    return i
        ? (0, t.jsx)(r.E, {
              tag: "span",
              variant: "body-sm/normal",
              color: "text-muted",
              children: (function (n) {
                  let { unit: l, value: e } = n;
                  switch (l) {
                      case "days":
                          return c.intl.formatToPlainString(c.t.l7PkYW, { numDays: e });
                      case "hours":
                          return c.intl.formatToPlainString(c.t.Ifgxdy, { numHours: e });
                      case "minutes":
                          return c.intl.formatToPlainString(c.t["5fXjSj"], { numMinutes: e });
                  }
              })(l),
          })
        : null;
}
function g(n) {
    var l;
    let { invite: e, location: r } = n,
        [s, u] = i.useState(() => Date.now()),
        c = ((l = o.TA), e?.guild != null && null == e.target_application && e.guild.id !== l)
            ? (function (n, l) {
                  if (null == n || "" === n) return null;
                  let e = Date.parse(n);
                  if (Number.isNaN(e)) return null;
                  let t = e - l;
                  if (t <= 0 || t > 6048e5) return null;
                  let i = Math.floor(t / 6e4);
                  return i >= 1440
                      ? { unit: "days", value: Math.floor(i / 1440) }
                      : i >= 60
                        ? { unit: "hours", value: Math.floor(i / 60) }
                        : { unit: "minutes", value: Math.max(1, i) };
              })(e?.expires_at, s)
            : null;
    return ((0, a.A)(() => u(Date.now()), null == c ? null : d), null == r || null == c)
        ? null
        : (0, t.jsx)(m, { parts: c, location: r });
}
