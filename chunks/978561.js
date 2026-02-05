"use strict";
n.d(t, { J: () => l });
var r = n(258363),
    i = n(392054),
    a = n(609136),
    s = n(73510),
    o = n(985018);
function l(e) {
    let { option: t, content: n, guildId: l, channelId: u, allowEmptyValues: c, commandOrigin: d = i.iw.CHAT } = e,
        _ = null != n ? (0, r.getString)({ content: n }, "content").trim() : "",
        f = t.required,
        p = "" === _;
    if (null == n) return f ? { success: !1, error: o.intl.string(o.t.JZJQL2) } : { success: !0 };
    if (p)
        return c
            ? { success: !0 }
            : f
              ? { success: !1, error: o.intl.string(o.t.JZJQL2) }
              : { success: !1, error: (0, s.tE)(t) };
    let h = n.length > 1 ? { type: "text", text: _ } : n[0],
        m = a.A[t.type](h, t, u, l, d);
    return m.success || null != m.error || (m.error = (0, s.tE)(t)), m;
}
