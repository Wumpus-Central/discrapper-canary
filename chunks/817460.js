r.d(t, {
    JE: () => l,
    ab: () => o,
    iG: () => a,
    lL: () => h,
    rC: () => c
});
var n = r(293810),
    i = r(474936),
    s = r(388032);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function l(e) {
    let { interval: t, interval_count: r } = e;
    return s.NW.format(
        (function (e) {
            switch (e) {
                case i.rV.DAY:
                    return s.t['3rUmPT'];
                case i.rV.MONTH:
                    return s.t['zuN54+'];
                case i.rV.YEAR:
                    return s.t.cuSp8f;
            }
        })(t),
        { count: r }
    );
}
function a(e) {
    let { interval: t, interval_count: r } = e;
    switch (t) {
        case i.rV.DAY:
            if (r > 0 && r % 7 == 0) return s.NW.formatToPlainString(s.t.iVZYys, { weeks: r / 7 });
            return s.NW.formatToPlainString(s.t.jzH70d, { days: r });
        case i.rV.MONTH:
            return s.NW.formatToPlainString(s.t.erUSmJ, { months: r });
        case i.rV.YEAR:
            return s.NW.formatToPlainString(s.t.IfYQVF, { years: r });
    }
}
function c(e) {
    return e.ref_type === n.Qs.CHANNEL;
}
function h(e) {
    return e.ref_type === n.Qs.INTANGIBLE;
}
