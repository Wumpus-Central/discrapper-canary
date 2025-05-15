n.d(t, {
    DA: () => s,
    Db: () => u,
    RQ: () => d,
    WG: () => f,
    ZL: () => c,
    ie: () => a,
    jg: () => o,
    kT: () => _,
    n8: () => l
});
var r = n(250327),
    i = n(25487);
function o(e, t) {
    return e
        ? {
              value: t(e.value),
              rest: e.rest
          }
        : e;
}
function a(e, t) {
    var n = t.match(e);
    return n
        ? {
              value: parseInt(n[0], 10),
              rest: t.slice(n[0].length)
          }
        : null;
}
function s(e, t) {
    var n = t.match(e);
    if (!n) return null;
    if ('Z' === n[0])
        return {
            value: 0,
            rest: t.slice(1)
        };
    var i = '+' === n[1] ? 1 : -1,
        o = n[2] ? parseInt(n[2], 10) : 0,
        a = n[3] ? parseInt(n[3], 10) : 0,
        s = n[5] ? parseInt(n[5], 10) : 0;
    return {
        value: i * (o * r.vh + a * r.yJ + s * r.qk),
        rest: t.slice(n[0].length)
    };
}
function l(e) {
    return a(i.z.anyDigitsSigned, e);
}
function c(e, t) {
    switch (e) {
        case 1:
            return a(i.z.singleDigit, t);
        case 2:
            return a(i.z.twoDigits, t);
        case 3:
            return a(i.z.threeDigits, t);
        case 4:
            return a(i.z.fourDigits, t);
        default:
            return a(RegExp('^\\d{1,' + e + '}'), t);
    }
}
function u(e, t) {
    switch (e) {
        case 1:
            return a(i.z.singleDigitSigned, t);
        case 2:
            return a(i.z.twoDigitsSigned, t);
        case 3:
            return a(i.z.threeDigitsSigned, t);
        case 4:
            return a(i.z.fourDigitsSigned, t);
        default:
            return a(RegExp('^-?\\d{1,' + e + '}'), t);
    }
}
function d(e) {
    switch (e) {
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        default:
            return 0;
    }
}
function f(e, t) {
    var n,
        r = t > 0,
        i = r ? t : 1 - t;
    if (i <= 50) n = e || 100;
    else {
        var o = i + 50,
            a = 100 * Math.floor(o / 100),
            s = e >= o % 100;
        n = e + a - 100 * !!s;
    }
    return r ? n : 1 - n;
}
function _(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
