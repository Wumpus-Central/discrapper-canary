n.d(t, { S: () => f });
var i = n(146150),
    r = n(812975),
    a = n(531171),
    s = n(695170),
    o = n(686942),
    l = n(200734),
    u = {
        dtstart: null,
        cache: !1,
        unfold: !1,
        forceset: !1,
        compatible: !1,
        tzid: null
    };
function c(e, t) {
    var n = [],
        i = [],
        r = [],
        a = [],
        s = (0, l.o)(e),
        o = s.dtstart,
        u = s.tzid;
    return (
        g(e, t.unfold).forEach(function (e) {
            if (e) {
                var t,
                    s = m(e),
                    o = s.name,
                    c = s.parms,
                    d = s.value;
                switch (o.toUpperCase()) {
                    case 'RRULE':
                        if (c.length) throw Error('unsupported RRULE parm: '.concat(c.join(',')));
                        n.push((0, l.B)(e));
                        break;
                    case 'RDATE':
                        var f = null !== (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) && void 0 !== t ? t : [],
                            _ = f[1];
                        _ && !u && (u = _), (i = i.concat(v(d, c)));
                        break;
                    case 'EXRULE':
                        if (c.length) throw Error('unsupported EXRULE parm: '.concat(c.join(',')));
                        r.push((0, l.B)(d));
                        break;
                    case 'EXDATE':
                        a = a.concat(v(d, c));
                        break;
                    case 'DTSTART':
                        break;
                    default:
                        throw Error('unsupported property: ' + o);
                }
            }
        }),
        {
            dtstart: o,
            tzid: u,
            rrulevals: n,
            rdatevals: i,
            exrulevals: r,
            exdatevals: a
        }
    );
}
function d(e, t) {
    var n = c(e, t),
        i = n.rrulevals,
        s = n.rdatevals,
        o = n.exrulevals,
        l = n.exdatevals,
        u = n.dtstart,
        d = n.tzid,
        f = !1 === t.cache;
    if ((t.compatible && ((t.forceset = !0), (t.unfold = !0)), t.forceset || i.length > 1 || s.length || o.length || l.length)) {
        var p = new a.p(f);
        return (
            p.dtstart(u),
            p.tzid(d || void 0),
            i.forEach(function (e) {
                p.rrule(new r.Ci(_(e, u, d), f));
            }),
            s.forEach(function (e) {
                p.rdate(e);
            }),
            o.forEach(function (e) {
                p.exrule(new r.Ci(_(e, u, d), f));
            }),
            l.forEach(function (e) {
                p.exdate(e);
            }),
            t.compatible && t.dtstart && p.rdate(u),
            p
        );
    }
    var h = i[0] || {};
    return new r.Ci(_(h, h.dtstart || t.dtstart || u, h.tzid || t.tzid || d), f);
}
function f(e, t) {
    return void 0 === t && (t = {}), d(e, p(t));
}
function _(e, t, n) {
    return (0, i.pi)((0, i.pi)({}, e), {
        dtstart: t,
        tzid: n
    });
}
function p(e) {
    var t = [],
        n = Object.keys(e),
        r = Object.keys(u);
    if (
        (n.forEach(function (e) {
            (0, o.q9)(r, e) || t.push(e);
        }),
        t.length)
    )
        throw Error('Invalid options: ' + t.join(', '));
    return (0, i.pi)((0, i.pi)({}, u), e);
}
function h(e) {
    if (-1 === e.indexOf(':'))
        return {
            name: 'RRULE',
            value: e
        };
    var t = (0, o.Vl)(e, ':', 1);
    return {
        name: t[0],
        value: t[1]
    };
}
function m(e) {
    var t = h(e),
        n = t.name,
        i = t.value,
        r = n.split(';');
    if (!r) throw Error('empty property name');
    return {
        name: r[0].toUpperCase(),
        parms: r.slice(1),
        value: i
    };
}
function g(e, t) {
    if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error('Invalid empty string');
    if (!t) return e.split(/\s/);
    for (var n = e.split('\n'), i = 0; i < n.length; ) {
        var r = (n[i] = n[i].replace(/\s+$/g, ''));
        r ? (i > 0 && ' ' === r[0] ? ((n[i - 1] += r.slice(1)), n.splice(i, 1)) : (i += 1)) : n.splice(i, 1);
    }
    return n;
}
function E(e) {
    e.forEach(function (e) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error('unsupported RDATE/EXDATE parm: ' + e);
    });
}
function v(e, t) {
    return (
        E(t),
        e.split(',').map(function (e) {
            return (0, s.gE)(e);
        })
    );
}
