n.d(t, {
    JE: () => a,
    ab: () => o,
    iG: () => s,
    lL: () => c,
    rC: () => u
});
var r = n(293810),
    i = n(474936),
    l = n(388032);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    return l.NW.format(
        (function (e) {
            switch (e) {
                case i.rV.DAY:
                    return l.t['3rUmPT'];
                case i.rV.MONTH:
                    return l.t['zuN54+'];
                case i.rV.YEAR:
                    return l.t.cuSp8f;
            }
        })(t),
        { count: n }
    );
}
function s(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case i.rV.DAY:
            if (n > 0 && n % 7 == 0) return l.NW.formatToPlainString(l.t.iVZYys, { weeks: n / 7 });
            return l.NW.formatToPlainString(l.t.jzH70d, { days: n });
        case i.rV.MONTH:
            return l.NW.formatToPlainString(l.t.erUSmJ, { months: n });
        case i.rV.YEAR:
            return l.NW.formatToPlainString(l.t.IfYQVF, { years: n });
    }
}
function u(e) {
    return e.ref_type === r.Qs.CHANNEL;
}
function c(e) {
    return e.ref_type === r.Qs.INTANGIBLE;
}
