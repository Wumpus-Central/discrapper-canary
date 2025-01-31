let i = /\s+/g;
class r {
    constructor(e, t) {
        if (((t = s(t)), e instanceof r)) {
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            return new r(e.raw, t);
        }
        if (e instanceof o) return (this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this;
        if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
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
        let i = this.options.loose,
            r = i ? c[d.HYPHENRANGELOOSE] : c[d.HYPHENRANGE];
        l('hyphen replace', (e = e.replace(r, D(this.options.includePrerelease)))), l('comparator trim', (e = e.replace(c[d.COMPARATORTRIM], f))), l('tilde trim', (e = e.replace(c[d.TILDETRIM], _))), l('caret trim', (e = e.replace(c[d.CARETTRIM], p)));
        let s = e
            .split(' ')
            .map((e) => y(e, this.options))
            .join(' ')
            .split(/\s+/)
            .map((e) => O(e, this.options));
        i && (s = s.filter((e) => (l('loose invalid filter', e, this.options), !!e.match(c[d.COMPARATORLOOSE])))), l('range list', s);
        let u = new Map();
        for (let e of s.map((e) => new o(e, this.options))) {
            if (g(e)) return [e];
            u.set(e.value, e);
        }
        u.size > 1 && u.has('') && u.delete('');
        let E = [...u.values()];
        return a.set(t, E), E;
    }
    intersects(e, t) {
        if (!(e instanceof r)) throw TypeError('a Range is required');
        return this.set.some((n) => v(n, t) && e.set.some((e) => v(e, t) && n.every((n) => e.every((e) => n.intersects(e, t)))));
    }
    test(e) {
        if (!e) return !1;
        if ('string' == typeof e)
            try {
                e = new u(e, this.options);
            } catch (e) {
                return !1;
            }
        for (let t = 0; t < this.set.length; t++) if (x(this.set[t], e, this.options)) return !0;
        return !1;
    }
}
e.exports = r;
let a = new (n(147567))(),
    s = n(498994),
    o = n(721919),
    l = n(13556),
    u = n(40231),
    { safeRe: c, t: d, comparatorTrimReplace: f, tildeTrimReplace: _, caretTrimReplace: p } = n(646664),
    { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: m } = n(942177),
    g = (e) => '<0.0.0-0' === e.value,
    E = (e) => '' === e.value,
    v = (e, t) => {
        let n = !0,
            i = e.slice(),
            r = i.pop();
        for (; n && i.length; ) (n = i.every((e) => r.intersects(e, t))), (r = i.pop());
        return n;
    },
    y = (e, t) => (l('comp', e, t), l('caret', (e = S(e, t))), l('tildes', (e = b(e, t))), l('xrange', (e = N(e, t))), l('stars', (e = R(e, t))), e),
    I = (e) => !e || 'x' === e.toLowerCase() || '*' === e,
    b = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => T(e, t))
            .join(' '),
    T = (e, t) => {
        let n = t.loose ? c[d.TILDELOOSE] : c[d.TILDE];
        return e.replace(n, (t, n, i, r, a) => {
            let s;
            return l('tilde', e, t, n, i, r, a), I(n) ? (s = '') : I(i) ? (s = `>=${n}.0.0 <${+n + 1}.0.0-0`) : I(r) ? (s = `>=${n}.${i}.0 <${n}.${+i + 1}.0-0`) : a ? (l('replaceTilde pr', a), (s = `>=${n}.${i}.${r}-${a} <${n}.${+i + 1}.0-0`)) : (s = `>=${n}.${i}.${r} <${n}.${+i + 1}.0-0`), l('tilde return', s), s;
        });
    },
    S = (e, t) =>
        e
            .trim()
            .split(/\s+/)
            .map((e) => A(e, t))
            .join(' '),
    A = (e, t) => {
        l('caret', e, t);
        let n = t.loose ? c[d.CARETLOOSE] : c[d.CARET],
            i = t.includePrerelease ? '-0' : '';
        return e.replace(n, (t, n, r, a, s) => {
            let o;
            return l('caret', e, t, n, r, a, s), I(n) ? (o = '') : I(r) ? (o = `>=${n}.0.0${i} <${+n + 1}.0.0-0`) : I(a) ? (o = '0' === n ? `>=${n}.${r}.0${i} <${n}.${+r + 1}.0-0` : `>=${n}.${r}.0${i} <${+n + 1}.0.0-0`) : s ? (l('replaceCaret pr', s), (o = '0' === n ? ('0' === r ? `>=${n}.${r}.${a}-${s} <${n}.${r}.${+a + 1}-0` : `>=${n}.${r}.${a}-${s} <${n}.${+r + 1}.0-0`) : `>=${n}.${r}.${a}-${s} <${+n + 1}.0.0-0`)) : (l('no pr'), (o = '0' === n ? ('0' === r ? `>=${n}.${r}.${a}${i} <${n}.${r}.${+a + 1}-0` : `>=${n}.${r}.${a}${i} <${n}.${+r + 1}.0-0`) : `>=${n}.${r}.${a} <${+n + 1}.0.0-0`)), l('caret return', o), o;
        });
    },
    N = (e, t) => (
        l('replaceXRanges', e, t),
        e
            .split(/\s+/)
            .map((e) => C(e, t))
            .join(' ')
    ),
    C = (e, t) => {
        e = e.trim();
        let n = t.loose ? c[d.XRANGELOOSE] : c[d.XRANGE];
        return e.replace(n, (n, i, r, a, s, o) => {
            l('xRange', e, n, i, r, a, s, o);
            let u = I(r),
                c = u || I(a),
                d = c || I(s),
                f = d;
            return '=' === i && f && (i = ''), (o = t.includePrerelease ? '-0' : ''), u ? (n = '>' === i || '<' === i ? '<0.0.0-0' : '*') : i && f ? (c && (a = 0), (s = 0), '>' === i ? ((i = '>='), c ? ((r = +r + 1), (a = 0)) : (a = +a + 1), (s = 0)) : '<=' === i && ((i = '<'), c ? (r = +r + 1) : (a = +a + 1)), '<' === i && (o = '-0'), (n = `${i + r}.${a}.${s}${o}`)) : c ? (n = `>=${r}.0.0${o} <${+r + 1}.0.0-0`) : d && (n = `>=${r}.${a}.0${o} <${r}.${+a + 1}.0-0`), l('xRange return', n), n;
        });
    },
    R = (e, t) => (l('replaceStars', e, t), e.trim().replace(c[d.STAR], '')),
    O = (e, t) => (l('replaceGTE0', e, t), e.trim().replace(c[t.includePrerelease ? d.GTE0PRE : d.GTE0], '')),
    D = (e) => (t, n, i, r, a, s, o, l, u, c, d, f) => ((n = I(i) ? '' : I(r) ? `>=${i}.0.0${e ? '-0' : ''}` : I(a) ? `>=${i}.${r}.0${e ? '-0' : ''}` : s ? `>=${n}` : `>=${n}${e ? '-0' : ''}`), (l = I(u) ? '' : I(c) ? `<${+u + 1}.0.0-0` : I(d) ? `<${u}.${+c + 1}.0-0` : f ? `<=${u}.${c}.${d}-${f}` : e ? `<${u}.${c}.${+d + 1}-0` : `<=${l}`), `${n} ${l}`.trim()),
    x = (e, t, n) => {
        for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let n = 0; n < e.length; n++)
                if ((l(e[n].semver), e[n].semver !== o.ANY && e[n].semver.prerelease.length > 0)) {
                    let i = e[n].semver;
                    if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0;
                }
            return !1;
        }
        return !0;
    };
