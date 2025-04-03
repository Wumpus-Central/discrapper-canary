r.d(t, {
    JE: () => l,
    ab: () => i,
    iG: () => o,
    lL: () => s,
    rC: () => a
});
var n = r(293810),
    h = r(474936),
    v = r(388032);
function i(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function l(e) {
    let { interval: t, interval_count: r } = e;
    return v.NW.format(
        (function (e) {
            switch (e) {
                case h.rV.DAY:
                    return v.t['3rUmPT'];
                case h.rV.MONTH:
                    return v.t['zuN54+'];
                case h.rV.YEAR:
                    return v.t.cuSp8f;
            }
        })(t),
        { count: r }
    );
}
function o(e) {
    let { interval: t, interval_count: r } = e;
    switch (t) {
        case h.rV.DAY:
            if (r > 0 && r % 7 == 0) return v.NW.formatToPlainString(v.t.iVZYys, { weeks: r / 7 });
            return v.NW.formatToPlainString(v.t.jzH70d, { days: r });
        case h.rV.MONTH:
            return v.NW.formatToPlainString(v.t.erUSmJ, { months: r });
        case h.rV.YEAR:
            return v.NW.formatToPlainString(v.t.IfYQVF, { years: r });
    }
}
function a(e) {
    return e.ref_type === n.Qs.CHANNEL;
}
function s(e) {
    return e.ref_type === n.Qs.INTANGIBLE;
}
