var a = l(894279),
    n = l(398251);
function s(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
l.d(
    t,
    {},
    {
        CZ: function (e, t, l, s) {
            let i,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return r ? { value: { status: "skeleton" }, label: { status: "skeleton" } } : null;
            let o = t(e.fields.value, [n.o.STRING, n.o.NUMBER]),
                u = t(e.fields.label, [n.o.STRING]),
                c = t(e.fields.icon, [n.o.MEDIA]);
            if (null == o) i = { status: "skeleton" };
            else
                i = {
                    status: "value",
                    text:
                        o.type === n.o.STRING
                            ? o.value
                            : o.presentationType === a.P.DURATION
                              ? s(o.value)
                              : l.format(o.value),
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
        Hx: function (e, t, l) {
            let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return a ? { status: "skeleton" } : { status: "hidden" };
            let i = t(e.fields.text, [n.o.STRING, n.o.NUMBER]),
                r = s ? null : t(e.fields.label, [n.o.STRING, n.o.NUMBER]);
            if (null == i && null == r) return { status: "skeleton" };
            let o = t(e.fields.icon, [n.o.MEDIA]),
                u = null == r || "" === r.value ? "" : `${"number" == typeof r.value ? l.format(r.value) : r.value}: `,
                c = null == i || "" === i.value ? "\u2013" : "number" == typeof i.value ? l.format(i.value) : i.value;
            return { status: "value", text: `${u}${c}`, icon: o?.media ?? null };
        },
        eq: function (e, t) {
            return null == e ? 0 : null == t ? s(e.value) : 0 === t.value ? 0 : s(e.value / t.value);
        },
        rr: s,
    },
);
