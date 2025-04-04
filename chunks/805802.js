n.d(t, { S: () => f });
var r = n(146150),
    i = n(812975),
    o = n(531171),
    a = n(695170),
    s = n(686942),
    l = n(200734),
    c = {
        dtstart: null,
        cache: !1,
        unfold: !1,
        forceset: !1,
        compatible: !1,
        tzid: null
    };
function u(e, t) {
    var n = [],
        r = [],
        i = [],
        o = [],
        a = (0, l.o)(e),
        s = a.dtstart,
        c = a.tzid;
    return (
        g(e, t.unfold).forEach(function (e) {
            if (e) {
                var t,
                    a = m(e),
                    s = a.name,
                    u = a.parms,
                    d = a.value;
                switch (s.toUpperCase()) {
                    case 'RRULE':
                        if (u.length) throw Error('unsupported RRULE parm: '.concat(u.join(',')));
                        n.push((0, l.B)(e));
                        break;
                    case 'RDATE':
                        var f = null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [],
                            _ = f[1];
                        _ && !c && (c = _), (r = r.concat(b(d, u)));
                        break;
                    case 'EXRULE':
                        if (u.length) throw Error('unsupported EXRULE parm: '.concat(u.join(',')));
                        i.push((0, l.B)(d));
                        break;
                    case 'EXDATE':
                        o = o.concat(b(d, u));
                        break;
                    case 'DTSTART':
                        break;
                    default:
                        throw Error('unsupported property: ' + s);
                }
            }
        }),
        {
            dtstart: s,
            tzid: c,
            rrulevals: n,
            rdatevals: r,
            exrulevals: i,
            exdatevals: o
        }
    );
}
function d(e, t) {
    var n = u(e, t),
        r = n.rrulevals,
        a = n.rdatevals,
        s = n.exrulevals,
        l = n.exdatevals,
        c = n.dtstart,
        d = n.tzid,
        f = !1 === t.cache;
    if ((t.compatible && ((t.forceset = !0), (t.unfold = !0)), t.forceset || r.length > 1 || a.length || s.length || l.length)) {
        var p = new o.p(f);
        return (
            p.dtstart(c),
            p.tzid(d || void 0),
            r.forEach(function (e) {
                p.rrule(new i.Ci(_(e, c, d), f));
            }),
            a.forEach(function (e) {
                p.rdate(e);
            }),
            s.forEach(function (e) {
                p.exrule(new i.Ci(_(e, c, d), f));
            }),
            l.forEach(function (e) {
                p.exdate(e);
            }),
            t.compatible && t.dtstart && p.rdate(c),
            p
        );
    }
    var h = r[0] || {};
    return new i.Ci(_(h, h.dtstart || t.dtstart || c, h.tzid || t.tzid || d), f);
}
function f(e, t) {
    return void 0 === t && (t = {}), d(e, p(t));
}
function _(e, t, n) {
    return (0, r.pi)((0, r.pi)({}, e), {
        dtstart: t,
        tzid: n
    });
}
function p(e) {
    var t = [],
        n = Object.keys(e),
        i = Object.keys(c);
    if (
        (n.forEach(function (e) {
            (0, s.q9)(i, e) || t.push(e);
        }),
        t.length)
    )
        throw Error('Invalid options: ' + t.join(', '));
    return (0, r.pi)((0, r.pi)({}, c), e);
}
function h(e) {
    if (-1 === e.indexOf(':'))
        return {
            name: 'RRULE',
            value: e
        };
    var t = (0, s.Vl)(e, ':', 1);
    return {
        name: t[0],
        value: t[1]
    };
}
function m(e) {
    var t = h(e),
        n = t.name,
        r = t.value,
        i = n.split(';');
    if (!i) throw Error('empty property name');
    return {
        name: i[0].toUpperCase(),
        parms: i.slice(1),
        value: r
    };
}
function g(e, t) {
    if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error('Invalid empty string');
    if (!t) return e.split(/\s/);
    for (var n = e.split('\n'), r = 0; r < n.length; ) {
        var i = (n[r] = n[r].replace(/\s+$/g, ''));
        i ? (r > 0 && ' ' === i[0] ? ((n[r - 1] += i.slice(1)), n.splice(r, 1)) : (r += 1)) : n.splice(r, 1);
    }
    return n;
}
function E(e) {
    e.forEach(function (e) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error('unsupported RDATE/EXDATE parm: ' + e);
    });
}
function b(e, t) {
    return (
        E(t),
        e.split(',').map(function (e) {
            return (0, a.gE)(e);
        })
    );
}
