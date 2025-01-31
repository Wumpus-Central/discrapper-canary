n.d(t, {
    JE: () => a,
    ab: () => s,
    iG: () => o,
    lL: () => u,
    rC: () => d
});
var i = n(293810),
    l = n(474936),
    r = n(388032);
function s(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    return r.intl.format(
        (function (e) {
            switch (e) {
                case l.rV.DAY:
                    return r.t['3rUmPT'];
                case l.rV.MONTH:
                    return r.t['zuN54+'];
                case l.rV.YEAR:
                    return r.t.cuSp8f;
            }
        })(t),
        { count: n }
    );
}
function o(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case l.rV.DAY:
            if (n > 0 && n % 7 == 0) return r.intl.formatToPlainString(r.t.iVZYys, { weeks: n / 7 });
            return r.intl.formatToPlainString(r.t.jzH70d, { days: n });
        case l.rV.MONTH:
            return r.intl.formatToPlainString(r.t.erUSmJ, { months: n });
        case l.rV.YEAR:
            return r.intl.formatToPlainString(r.t.IfYQVF, { years: n });
    }
}
function d(e) {
    return e.ref_type === i.Qs.CHANNEL;
}
function u(e) {
    return e.ref_type === i.Qs.INTANGIBLE;
}
