l.d(t, { CZ: () => i, Hx: () => s, eq: () => o, rr: () => r });
var n = l(894279),
    a = l(620632);
function s(e, t, l) {
    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return n ? { status: "skeleton" } : { status: "hidden" };
    let i = t(e.fields.text, [a.o.STRING, a.o.NUMBER]),
        r = s ? null : t(e.fields.label, [a.o.STRING, a.o.NUMBER]);
    if (null == i && null == r) return { status: "skeleton" };
    let o = t(e.fields.icon, [a.o.MEDIA]),
        u = null == r || "" === r.value ? "" : `${"number" == typeof r.value ? l.format(r.value) : r.value}: `,
        c = null == i || "" === i.value ? "\u2013" : "number" == typeof i.value ? l.format(i.value) : i.value;
    return { status: "value", text: `${u}${c}`, icon: o?.media ?? null };
}
function i(e, t, l, s) {
    let i,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return r ? { value: { status: "skeleton" }, label: { status: "skeleton" } } : null;
    let o = t(e.fields.value, [a.o.STRING, a.o.NUMBER]),
        u = t(e.fields.label, [a.o.STRING]),
        c = t(e.fields.icon, [a.o.MEDIA]);
    if (null == o) i = { status: "skeleton" };
    else
        i = {
            status: "value",
            text:
                o.type === a.o.STRING ? o.value : o.presentationType === n.P.DURATION ? s(o.value) : l.format(o.value),
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
}
function r(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function o(e, t) {
    return null == e ? 0 : null == t ? r(e.value) : 0 === t.value ? 0 : r(e.value / t.value);
}
