let r = /\s+/g;
class i {
    constructor(e, t) {
        if (((t = o(t)), e instanceof i))
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            else return new i(e.raw, t);
        if (e instanceof s) return (this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this;
        if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e.trim().replace(r, ' ')),
            (this.set = this.raw
                .split('||')
                .map((e) => this.parseRange(e.trim()))
                .filter((e) => e.length)),
            !this.set.length)
        )
            throw TypeError(`Invalid SemVer Range: ${this.raw}`);
        if (this.set.length > 1) {
            let e = this.set[0];
            if (((this.set = this.set.filter((e) => !g(e[0]))), 0 === this.set.length)) this.set = [e];
            else if (this.set.length > 1) {
                for (let e of this.set)
                    if (1 === e.length && E(e[0])) {
                        this.set = [e];
                        break;
                    }
            }
        }
        this.formatted = void 0;
    }
    get range() {
        if (void 0 === this.formatted) {
            this.formatted = '';
            for (let e = 0; e < this.set.length; e++) {
                e > 0 && (this.formatted += '||');
                let t = this.set[e];
                for (let e = 0; e < t.length; e++) e > 0 && (this.formatted += ' '), (this.formatted += t[e].toString().trim());
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(e) {
        let t = ((this.options.includePrerelease && h) | (this.options.loose && m)) + ':' + e,
            n = a.get(t);
        if (n) return n;
        let r = this.options.loose,
            i = r ? u[d.HYPHENRANGELOOSE] : u[d.HYPHENRANGE];
        l('hyphen replace', (e = e.replace(i, P(this.options.includePrerelease)))), l('comparator trim', (e = e.replace(u[d.COMPARATORTRIM], f))), l('tilde trim', (e = e.replace(u[d.TILDETRIM], _))), l('caret trim', (e = e.replace(u[d.CARETTRIM], p)));
        let o = e
            .split(' ')
            .map((e) => y(e, this.options))
            .join(' ')
            .split(/\s+/)
            .map((e) => R(e, this.options));
        r && (o = o.filter((e) => (l('loose invalid filter', e, this.options), !!e.match(u[d.COMPARATORLOOSE])))), l('range list', o);
        let c = new Map();
        for (let e of o.map((e) => new s(e, this.options))) {
            if (g(e)) return [e];
            c.set(e.value, e);
        }
        c.size > 1 && c.has('') && c.delete('');
        let E = [...c.values()];
        return a.set(t, E), E;
    }
    intersects(e, t) {
        if (!(e instanceof i)) throw TypeError('a Range is required');
        return this.set.some((n) => b(n, t) && e.set.some((e) => b(e, t) && n.every((n) => e.every((e) => n.intersects(e, t)))));
    }
    test(e) {
        if (!e) return !1;
        if ('string' == typeof e)
            try {
                e = new c(e, this.options);
            } catch (e) {
                return !1;
            }
        for (let t = 0; t < this.set.length; t++) if (w(this.set[t], e, this.options)) return !0;
        return !1;
    }
}
e.exports = i;
let a = new (n(147567))(),
    o = n(498994),
    s = n(721919),
    l = n(13556),
    c = n(40231),
    { safeRe: u, t: d, comparatorTrimReplace: f, tildeTrimReplace: _, caretTrimReplace: p } = n(646664),
    { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: m } = n(942177),
    g = (e) => '<0.0.0-0' === e.value,
    E = (e) => '' === e.value,
    b = (e, t) => {
        let n = !0,
            r = e.slice(),
            i = r.pop();
        for (; n && r.length; ) (n = r.every((e) => i.intersects(e, t))), (i = r.pop());
        return n;
    },
    y = (e, t) => (l('comp', e, t), l('caret', (e = S(e, t))), l('tildes', (e = v(e, t))), l('xrange', (e = A(e, t))), l('stars', (e = C(e, t))), e),
    O = (e) => !e || 'x' === e.toLowerCase() || '*' === e,
    v = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => I(e, t))
            .join(' '),
    I = (e, t) => {
        let n = t.loose ? u[d.TILDELOOSE] : u[d.TILDE];
        return e.replace(n, (t, n, r, i, a) => {
            let o;
            return l('tilde', e, t, n, r, i, a), O(n) ? (o = '') : O(r) ? (o = `>=${n}.0.0 <${+n + 1}.0.0-0`) : O(i) ? (o = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`) : a ? (l('replaceTilde pr', a), (o = `>=${n}.${r}.${i}-${a} <${n}.${+r + 1}.0-0`)) : (o = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`), l('tilde return', o), o;
        });
    },
    S = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => T(e, t))
            .join(' '),
    T = (e, t) => {
        l('caret', e, t);
        let n = t.loose ? u[d.CARETLOOSE] : u[d.CARET],
            r = t.includePrerelease ? '-0' : '';
        return e.replace(n, (t, n, i, a, o) => {
            let s;
            return l('caret', e, t, n, i, a, o), O(n) ? (s = '') : O(i) ? (s = `>=${n}.0.0${r} <${+n + 1}.0.0-0`) : O(a) ? (s = '0' === n ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0`) : o ? (l('replaceCaret pr', o), (s = '0' === n ? ('0' === i ? `>=${n}.${i}.${a}-${o} <${n}.${i}.${+a + 1}-0` : `>=${n}.${i}.${a}-${o} <${n}.${+i + 1}.0-0`) : `>=${n}.${i}.${a}-${o} <${+n + 1}.0.0-0`)) : (l('no pr'), (s = '0' === n ? ('0' === i ? `>=${n}.${i}.${a}${r} <${n}.${i}.${+a + 1}-0` : `>=${n}.${i}.${a}${r} <${n}.${+i + 1}.0-0`) : `>=${n}.${i}.${a} <${+n + 1}.0.0-0`)), l('caret return', s), s;
        });
    },
    A = (e, t) => (
        l('replaceXRanges', e, t),
        e
            .split(/\s+/)
            .map((e) => N(e, t))
            .join(' ')
    ),
    N = (e, t) => {
        e = e.trim();
        let n = t.loose ? u[d.XRANGELOOSE] : u[d.XRANGE];
        return e.replace(n, (n, r, i, a, o, s) => {
            l('xRange', e, n, r, i, a, o, s);
            let c = O(i),
                u = c || O(a),
                d = u || O(o),
                f = d;
            return '=' === r && f && (r = ''), (s = t.includePrerelease ? '-0' : ''), c ? (n = '>' === r || '<' === r ? '<0.0.0-0' : '*') : r && f ? (u && (a = 0), (o = 0), '>' === r ? ((r = '>='), u ? ((i = +i + 1), (a = 0)) : (a = +a + 1), (o = 0)) : '<=' === r && ((r = '<'), u ? (i = +i + 1) : (a = +a + 1)), '<' === r && (s = '-0'), (n = `${r + i}.${a}.${o}${s}`)) : u ? (n = `>=${i}.0.0${s} <${+i + 1}.0.0-0`) : d && (n = `>=${i}.${a}.0${s} <${i}.${+a + 1}.0-0`), l('xRange return', n), n;
        });
    },
    C = (e, t) => (l('replaceStars', e, t), e.trim().replace(u[d.STAR], '')),
    R = (e, t) => (l('replaceGTE0', e, t), e.trim().replace(u[t.includePrerelease ? d.GTE0PRE : d.GTE0], '')),
    P = (e) => (t, n, r, i, a, o, s, l, c, u, d, f) => ((n = O(r) ? '' : O(i) ? `>=${r}.0.0${e ? '-0' : ''}` : O(a) ? `>=${r}.${i}.0${e ? '-0' : ''}` : o ? `>=${n}` : `>=${n}${e ? '-0' : ''}`), (l = O(c) ? '' : O(u) ? `<${+c + 1}.0.0-0` : O(d) ? `<${c}.${+u + 1}.0-0` : f ? `<=${c}.${u}.${d}-${f}` : e ? `<${c}.${u}.${+d + 1}-0` : `<=${l}`), `${n} ${l}`.trim()),
    w = (e, t, n) => {
        for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let n = 0; n < e.length; n++)
                if ((l(e[n].semver), e[n].semver !== s.ANY && e[n].semver.prerelease.length > 0)) {
                    let r = e[n].semver;
                    if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0;
                }
            return !1;
        }
        return !0;
    };
