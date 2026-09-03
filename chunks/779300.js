n.d(t, { CZ: () => r, Hx: () => s, eq: () => o, rr: () => a });
var l = n(894279),
    i = n(620632);
function s(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return l ? { status: "skeleton" } : { status: "hidden" };
    let r = t(e.fields.text, [i.o.STRING, i.o.NUMBER]),
        a = s ? null : t(e.fields.label, [i.o.STRING, i.o.NUMBER]);
    if (null == r && null == a) return { status: "skeleton" };
    let o = t(e.fields.icon, [i.o.MEDIA]),
        u = null == a || "" === a.value ? "" : `${"number" == typeof a.value ? n.format(a.value) : a.value}: `,
        c = null == r || "" === r.value ? "\u2013" : "number" == typeof r.value ? n.format(r.value) : r.value;
    return { status: "value", text: `${u}${c}`, icon: o?.media ?? null };
}
function r(e, t, n, s) {
    let r,
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return a ? { value: { status: "skeleton" }, label: { status: "skeleton" } } : null;
    let o = t(e.fields.value, [i.o.STRING, i.o.NUMBER]),
        u = t(e.fields.label, [i.o.STRING]),
        c = t(e.fields.icon, [i.o.MEDIA]);
    if (null == o) r = { status: "skeleton" };
    else
        r = {
            status: "value",
            text:
                o.type === i.o.STRING ? o.value : o.presentationType === l.P.DURATION ? s(o.value) : n.format(o.value),
            icon: c?.media ?? null,
        };
    return {
        value: r,
        label:
            null == e.fields.label
                ? { status: "hidden" }
                : null == u
                  ? { status: "skeleton" }
                  : { status: "value", text: u.value },
    };
}
function a(e) {
    return isNaN(e) ? 0 : Math.min(Math.max(Math.round(100 * e), 0), 100);
}
function o(e, t) {
    return null == e ? 0 : null == t ? a(e.value) : 0 === t.value ? 0 : a(e.value / t.value);
}
