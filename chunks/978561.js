"use strict";
n.d(t, { J: () => o });
var l = n(258363),
    i = n(392054),
    s = n(609136),
    a = n(73510),
    r = n(985018);
function o(e) {
    let { option: t, content: n, guildId: o, channelId: c, allowEmptyValues: u, commandOrigin: d = i.iw.CHAT } = e,
        h = null != n ? (0, l.getString)({ content: n }, "content").trim() : "",
        m = t.required;
    if (null == n) return m ? { success: !1, error: r.intl.string(r.t.JZJQL2) } : { success: !0 };
    if ("" === h)
        return u
            ? { success: !0 }
            : m
              ? { success: !1, error: r.intl.string(r.t.JZJQL2) }
              : { success: !1, error: (0, a.tE)(t) };
    let p = n.length > 1 ? { type: "text", text: h } : n[0],
        f = s.A[t.type](p, t, c, o, d);
    return f.success || null != f.error || (f.error = (0, a.tE)(t)), f;
}
