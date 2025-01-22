let i = /\s+/g;
class a {
    constructor(e, n) {
        if (((n = s(n)), e instanceof a)) {
            if (!!n.loose === e.loose && !!n.includePrerelease === e.includePrerelease) return e;
            return new a(e.raw, n);
        }
        if (e instanceof l) return (this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this;
        if (
            ((this.options = n),
            (this.loose = !!n.loose),
            (this.includePrerelease = !!n.includePrerelease),
            (this.raw = e.trim().replace(i, ' ')),
            (this.set = this.raw
                .split('||')
                .map((e) => this.parseRange(e.trim()))
                .filter((e) => e.length)),
            !this.set.length)
        )
            throw TypeError(`Invalid SemVer Range: ${this.raw}`);
        if (this.set.length > 1) {
            let e = this.set[0];
            if (((this.set = this.set.filter((e) => !E(e[0]))), 0 === this.set.length)) this.set = [e];
            else if (this.set.length > 1) {
                for (let e of this.set)
                    if (1 === e.length && v(e[0])) {
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
                let n = this.set[e];
                for (let e = 0; e < n.length; e++) e > 0 && (this.formatted += ' '), (this.formatted += n[e].toString().trim());
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
        let n = ((this.options.includePrerelease && m) | (this.options.loose && g)) + ':' + e,
            r = o.get(n);
        if (r) return r;
        let i = this.options.loose,
            a = i ? d[f.HYPHENRANGELOOSE] : d[f.HYPHENRANGE];
        u('hyphen replace', (e = e.replace(a, L(this.options.includePrerelease)))), u('comparator trim', (e = e.replace(d[f.COMPARATORTRIM], p))), u('tilde trim', (e = e.replace(d[f.TILDETRIM], h))), u('caret trim', (e = e.replace(d[f.CARETTRIM], _)));
        let s = e
            .split(' ')
            .map((e) => b(e, this.options))
            .join(' ')
            .split(/\s+/)
            .map((e) => D(e, this.options));
        i && (s = s.filter((e) => (u('loose invalid filter', e, this.options), !!e.match(d[f.COMPARATORLOOSE])))), u('range list', s);
        let c = new Map();
        for (let e of s.map((e) => new l(e, this.options))) {
            if (E(e)) return [e];
            c.set(e.value, e);
        }
        c.size > 1 && c.has('') && c.delete('');
        let v = [...c.values()];
        return o.set(n, v), v;
    }
    intersects(e, n) {
        if (!(e instanceof a)) throw TypeError('a Range is required');
        return this.set.some((r) => y(r, n) && e.set.some((e) => y(e, n) && r.every((r) => e.every((e) => r.intersects(e, n)))));
    }
    test(e) {
        if (!e) return !1;
        if ('string' == typeof e)
            try {
                e = new c(e, this.options);
            } catch (e) {
                return !1;
            }
        for (let n = 0; n < this.set.length; n++) if (x(this.set[n], e, this.options)) return !0;
        return !1;
    }
}
e.exports = a;
let o = new (r(147567))(),
    s = r(498994),
    l = r(721919),
    u = r(13556),
    c = r(40231),
    { safeRe: d, t: f, comparatorTrimReplace: p, tildeTrimReplace: h, caretTrimReplace: _ } = r(646664),
    { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: g } = r(942177),
    E = (e) => '<0.0.0-0' === e.value,
    v = (e) => '' === e.value,
    y = (e, n) => {
        let r = !0,
            i = e.slice(),
            a = i.pop();
        for (; r && i.length; ) (r = i.every((e) => a.intersects(e, n))), (a = i.pop());
        return r;
    },
    b = (e, n) => (u('comp', e, n), u('caret', (e = A(e, n))), u('tildes', (e = T(e, n))), u('xrange', (e = N(e, n))), u('stars', (e = O(e, n))), e),
    I = (e) => !e || 'x' === e.toLowerCase() || '*' === e,
    T = (e, n) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => S(e, n))
            .join(' '),
    S = (e, n) => {
        let r = n.loose ? d[f.TILDELOOSE] : d[f.TILDE];
        return e.replace(r, (n, r, i, a, o) => {
            let s;
            return u('tilde', e, n, r, i, a, o), I(r) ? (s = '') : I(i) ? (s = `>=${r}.0.0 <${+r + 1}.0.0-0`) : I(a) ? (s = `>=${r}.${i}.0 <${r}.${+i + 1}.0-0`) : o ? (u('replaceTilde pr', o), (s = `>=${r}.${i}.${a}-${o} <${r}.${+i + 1}.0-0`)) : (s = `>=${r}.${i}.${a} <${r}.${+i + 1}.0-0`), u('tilde return', s), s;
        });
    },
    A = (e, n) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => C(e, n))
            .join(' '),
    C = (e, n) => {
        u('caret', e, n);
        let r = n.loose ? d[f.CARETLOOSE] : d[f.CARET],
            i = n.includePrerelease ? '-0' : '';
        return e.replace(r, (n, r, a, o, s) => {
            let l;
            return u('caret', e, n, r, a, o, s), I(r) ? (l = '') : I(a) ? (l = `>=${r}.0.0${i} <${+r + 1}.0.0-0`) : I(o) ? (l = '0' === r ? `>=${r}.${a}.0${i} <${r}.${+a + 1}.0-0` : `>=${r}.${a}.0${i} <${+r + 1}.0.0-0`) : s ? (u('replaceCaret pr', s), (l = '0' === r ? ('0' === a ? `>=${r}.${a}.${o}-${s} <${r}.${a}.${+o + 1}-0` : `>=${r}.${a}.${o}-${s} <${r}.${+a + 1}.0-0`) : `>=${r}.${a}.${o}-${s} <${+r + 1}.0.0-0`)) : (u('no pr'), (l = '0' === r ? ('0' === a ? `>=${r}.${a}.${o}${i} <${r}.${a}.${+o + 1}-0` : `>=${r}.${a}.${o}${i} <${r}.${+a + 1}.0-0`) : `>=${r}.${a}.${o} <${+r + 1}.0.0-0`)), u('caret return', l), l;
        });
    },
    N = (e, n) => (
        u('replaceXRanges', e, n),
        e
            .split(/\s+/)
            .map((e) => R(e, n))
            .join(' ')
    ),
    R = (e, n) => {
        e = e.trim();
        let r = n.loose ? d[f.XRANGELOOSE] : d[f.XRANGE];
        return e.replace(r, (r, i, a, o, s, l) => {
            u('xRange', e, r, i, a, o, s, l);
            let c = I(a),
                d = c || I(o),
                f = d || I(s),
                p = f;
            return '=' === i && p && (i = ''), (l = n.includePrerelease ? '-0' : ''), c ? (r = '>' === i || '<' === i ? '<0.0.0-0' : '*') : i && p ? (d && (o = 0), (s = 0), '>' === i ? ((i = '>='), d ? ((a = +a + 1), (o = 0)) : (o = +o + 1), (s = 0)) : '<=' === i && ((i = '<'), d ? (a = +a + 1) : (o = +o + 1)), '<' === i && (l = '-0'), (r = `${i + a}.${o}.${s}${l}`)) : d ? (r = `>=${a}.0.0${l} <${+a + 1}.0.0-0`) : f && (r = `>=${a}.${o}.0${l} <${a}.${+o + 1}.0-0`), u('xRange return', r), r;
        });
    },
    O = (e, n) => (u('replaceStars', e, n), e.trim().replace(d[f.STAR], '')),
    D = (e, n) => (u('replaceGTE0', e, n), e.trim().replace(d[n.includePrerelease ? f.GTE0PRE : f.GTE0], '')),
    L = (e) => (n, r, i, a, o, s, l, u, c, d, f, p) => ((r = I(i) ? '' : I(a) ? `>=${i}.0.0${e ? '-0' : ''}` : I(o) ? `>=${i}.${a}.0${e ? '-0' : ''}` : s ? `>=${r}` : `>=${r}${e ? '-0' : ''}`), (u = I(c) ? '' : I(d) ? `<${+c + 1}.0.0-0` : I(f) ? `<${c}.${+d + 1}.0-0` : p ? `<=${c}.${d}.${f}-${p}` : e ? `<${c}.${d}.${+f + 1}-0` : `<=${u}`), `${r} ${u}`.trim()),
    x = (e, n, r) => {
        for (let r = 0; r < e.length; r++) if (!e[r].test(n)) return !1;
        if (n.prerelease.length && !r.includePrerelease) {
            for (let r = 0; r < e.length; r++) {
                if ((u(e[r].semver), e[r].semver !== l.ANY)) {
                    if (e[r].semver.prerelease.length > 0) {
                        let i = e[r].semver;
                        if (i.major === n.major && i.minor === n.minor && i.patch === n.patch) return !0;
                    }
                }
            }
            return !1;
        }
        return !0;
    };
