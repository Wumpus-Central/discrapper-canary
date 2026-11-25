var l = t(894279),
    s = t(398251);
function a(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
t.d(
    n,
    {},
    {
        CZ: function (e, n, t, a) {
            let i,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return r ? { value: { status: "skeleton" }, label: { status: "skeleton" } } : null;
            let o = n(e.fields.value, [s.o.STRING, s.o.NUMBER]),
                u = n(e.fields.label, [s.o.STRING]),
                c = n(e.fields.icon, [s.o.MEDIA]);
            if (null == o) i = { status: "skeleton" };
            else
                i = {
                    status: "value",
                    text:
                        o.type === s.o.STRING
                            ? o.value
                            : o.presentationType === l.P.DURATION
                              ? a(o.value)
                              : t.format(o.value),
                    icon: c?.media ?? null,
                };
            return {
                value: i,
                label:
                    null == e.fields.label
                        ? { status: "hidden" }
                        : null == u
                          ? { status: "skeleton" }
                          : { status: "value", text: u.value },
            };
        },
        Hx: function (e, n, t) {
            let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return l ? { status: "skeleton" } : { status: "hidden" };
            let i = n(e.fields.text, [s.o.STRING, s.o.NUMBER]),
                r = a ? null : n(e.fields.label, [s.o.STRING, s.o.NUMBER]);
            if (null == i && null == r) return { status: "skeleton" };
            let o = n(e.fields.icon, [s.o.MEDIA]),
                u = null == r || "" === r.value ? "" : `${"number" == typeof r.value ? t.format(r.value) : r.value}: `,
                c = null == i || "" === i.value ? "\u2013" : "number" == typeof i.value ? t.format(i.value) : i.value;
            return { status: "value", text: `${u}${c}`, icon: o?.media ?? null };
        },
        eq: function (e, n) {
            return null == e ? 0 : null == n ? a(e.value) : 0 === n.value ? 0 : a(e.value / n.value);
        },
        rr: a,
    },
);
