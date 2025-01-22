r.d(n, {
    d: function () {
        return p;
    },
    e: function () {
        return l;
    }
});
let i = new Map(),
    a = !1;
try {
    a = 'exceptZero' === new Intl.NumberFormat('de-DE', { signDisplay: 'exceptZero' }).resolvedOptions().signDisplay;
} catch (e) {}
let o = !1;
try {
    o =
        'unit' ===
        new Intl.NumberFormat('de-DE', {
            style: 'unit',
            unit: 'degree'
        }).resolvedOptions().style;
} catch (e) {}
let s = {
    degree: {
        narrow: {
            default: '\xB0',
            'ja-JP': ' 度',
            'zh-TW': '度',
            'sl-SI': ' \xB0'
        }
    }
};
class l {
    format(e) {
        let n = '';
        if (((n = a || null == this.options.signDisplay ? this.numberFormatter.format(e) : c(this.numberFormatter, this.options.signDisplay, e)), 'unit' === this.options.style && !o)) {
            var r;
            let { unit: e, unitDisplay: i = 'short', locale: a } = this.resolvedOptions();
            if (!e) return n;
            let o = null === (r = s[e]) || void 0 === r ? void 0 : r[i];
            n += o[a] || o.default;
        }
        return n;
    }
    formatToParts(e) {
        return this.numberFormatter.formatToParts(e);
    }
    formatRange(e, n) {
        if ('function' == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, n);
        if (n < e) throw RangeError('End date must be >= start date');
        return `${this.format(e)} \u{2013} ${this.format(n)}`;
    }
    formatRangeToParts(e, n) {
        if ('function' == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(e, n);
        if (n < e) throw RangeError('End date must be >= start date');
        let r = this.numberFormatter.formatToParts(e),
            i = this.numberFormatter.formatToParts(n);
        return [
            ...r.map((e) => ({
                ...e,
                source: 'startRange'
            })),
            {
                type: 'literal',
                value: ' \u2013 ',
                source: 'shared'
            },
            ...i.map((e) => ({
                ...e,
                source: 'endRange'
            }))
        ];
    }
    resolvedOptions() {
        let e = this.numberFormatter.resolvedOptions();
        return (
            !a &&
                null != this.options.signDisplay &&
                (e = {
                    ...e,
                    signDisplay: this.options.signDisplay
                }),
            !o &&
                'unit' === this.options.style &&
                (e = {
                    ...e,
                    style: 'unit',
                    unit: this.options.unit,
                    unitDisplay: this.options.unitDisplay
                }),
            e
        );
    }
    constructor(e, n = {}) {
        (this.numberFormatter = u(e, n)), (this.options = n);
    }
}
function u(e, n = {}) {
    let { numberingSystem: r } = n;
    if ((r && e.includes('-nu-') && (!e.includes('-u-') && (e += '-u-'), (e += `-nu-${r}`)), 'unit' === n.style && !o)) {
        var a;
        let { unit: e, unitDisplay: r = 'short' } = n;
        if (!e) throw Error('unit option must be provided with style: "unit"');
        if (!(null === (a = s[e]) || void 0 === a ? void 0 : a[r])) throw Error(`Unsupported unit ${e} with unitDisplay = ${r}`);
        n = {
            ...n,
            style: 'decimal'
        };
    }
    let l =
        e +
        (n
            ? Object.entries(n)
                  .sort((e, n) => (e[0] < n[0] ? -1 : 1))
                  .join()
            : '');
    if (i.has(l)) return i.get(l);
    let u = new Intl.NumberFormat(e, n);
    return i.set(l, u), u;
}
function c(e, n, r) {
    if ('auto' === n) return e.format(r);
    {
        if ('never' === n) return e.format(Math.abs(r));
        let i = !1;
        if (('always' === n ? (i = r > 0 || Object.is(r, 0)) : 'exceptZero' === n && (Object.is(r, -0) || Object.is(r, 0) ? (r = Math.abs(r)) : (i = r > 0)), !i)) return e.format(r);
        {
            let n = e.format(-r),
                i = e.format(r),
                a = n.replace(i, '').replace(/\u200e|\u061C/, '');
            return 1 != [...a].length && console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case'), n.replace(i, '!!!').replace(a, '+').replace('!!!', i);
        }
    }
}
let d = RegExp('^.*\\(.*\\).*$'),
    f = ['latn', 'arab', 'hanidec'];
class p {
    parse(e) {
        return _(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, n, r) {
        return _(this.locale, this.options, e).isValidPartialNumber(e, n, r);
    }
    getNumberingSystem(e) {
        return _(this.locale, this.options, e).options.numberingSystem;
    }
    constructor(e, n = {}) {
        (this.locale = e), (this.options = n);
    }
}
let h = new Map();
function _(e, n, r) {
    let i = m(e, n);
    if (!e.includes('-nu-') && !i.isValidPartialNumber(r)) {
        for (let a of f)
            if (a !== i.options.numberingSystem) {
                let i = m(e + (e.includes('-u-') ? '-nu-' : '-u-nu-') + a, n);
                if (i.isValidPartialNumber(r)) return i;
            }
    }
    return i;
}
function m(e, n) {
    let r =
            e +
            (n
                ? Object.entries(n)
                      .sort((e, n) => (e[0] < n[0] ? -1 : 1))
                      .join()
                : ''),
        i = h.get(r);
    return !i && ((i = new g(e, n)), h.set(r, i)), i;
}
class g {
    parse(e) {
        let n = this.sanitize(e);
        if ((this.symbols.group && (n = b(n, this.symbols.group, '')), this.symbols.decimal && (n = n.replace(this.symbols.decimal, '.')), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, '-')), (n = n.replace(this.symbols.numeral, this.symbols.index)), 'percent' === this.options.style)) {
            let e = n.indexOf('-'),
                r = (n = n.replace('-', '')).indexOf('.');
            -1 === r && (r = n.length), (n = n.replace('.', '')), (n = r - 2 == 0 ? `0.${n}` : r - 2 == -1 ? `0.0${n}` : r - 2 == -2 ? '0.00' : `${n.slice(0, r - 2)}.${n.slice(r - 2)}`), e > -1 && (n = `-${n}`);
        }
        let r = n ? +n : NaN;
        if (isNaN(r)) return NaN;
        if ('percent' === this.options.style) {
            let e = {
                ...this.options,
                style: 'decimal',
                minimumFractionDigits: Math.min(this.options.minimumFractionDigits + 2, 20),
                maximumFractionDigits: Math.min(this.options.maximumFractionDigits + 2, 20)
            };
            return new p(this.locale, e).parse(new l(this.locale, e).format(r));
        }
        return 'accounting' === this.options.currencySign && d.test(e) && (r *= -1), r;
    }
    sanitize(e) {
        return (e = e.replace(this.symbols.literals, '')), this.symbols.minusSign && (e = e.replace('-', this.symbols.minusSign)), 'arab' === this.options.numberingSystem && (this.symbols.decimal && (e = (e = e.replace(',', this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal)), this.symbols.group && (e = b(e, '.', this.symbols.group))), 'fr-FR' === this.options.locale && (e = b(e, '.', String.fromCharCode(8239))), e;
    }
    isValidPartialNumber(e, n = -1 / 0, r = 1 / 0) {
        return (e = this.sanitize(e)), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && n < 0 ? (e = e.slice(this.symbols.minusSign.length)) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && r > 0 && (e = e.slice(this.symbols.plusSign.length)), !((this.symbols.group && e.startsWith(this.symbols.group)) || (this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && 0 === this.options.maximumFractionDigits)) && (this.symbols.group && (e = b(e, this.symbols.group, '')), (e = e.replace(this.symbols.numeral, '')), this.symbols.decimal && (e = e.replace(this.symbols.decimal, '')), 0 === e.length);
    }
    constructor(e, n = {}) {
        var r, i;
        (this.locale = e), (this.formatter = new Intl.NumberFormat(e, n)), (this.options = this.formatter.resolvedOptions()), (this.symbols = y(e, this.formatter, this.options, n)), 'percent' === this.options.style && ((null !== (r = this.options.minimumFractionDigits) && void 0 !== r ? r : 0) > 18 || (null !== (i = this.options.maximumFractionDigits) && void 0 !== i ? i : 0) > 18) && console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
    }
}
let E = new Set(['decimal', 'fraction', 'integer', 'minusSign', 'plusSign', 'group']),
    v = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function y(e, n, r, i) {
    var a, o, s, l, u;
    let c = new Intl.NumberFormat(e, {
            ...r,
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 21
        }),
        d = c.formatToParts(-10000.111),
        f = c.formatToParts(10000.111),
        p = v.map((e) => c.formatToParts(e)),
        h = null !== (u = null === (a = d.find((e) => 'minusSign' === e.type)) || void 0 === a ? void 0 : a.value) && void 0 !== u ? u : '-',
        _ = null === (o = f.find((e) => 'plusSign' === e.type)) || void 0 === o ? void 0 : o.value;
    !_ && ((null == i ? void 0 : i.signDisplay) === 'exceptZero' || (null == i ? void 0 : i.signDisplay) === 'always') && (_ = '+');
    let m =
            null ===
                (s = new Intl.NumberFormat(e, {
                    ...r,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
                    .formatToParts(0.001)
                    .find((e) => 'decimal' === e.type)) || void 0 === s
                ? void 0
                : s.value,
        g = null === (l = d.find((e) => 'group' === e.type)) || void 0 === l ? void 0 : l.value,
        y = [...new Set([...d.filter((e) => !E.has(e.type)).map((e) => I(e.value)), ...p.flatMap((e) => e.filter((e) => !E.has(e.type)).map((e) => I(e.value)))])].sort((e, n) => n.length - e.length),
        b = 0 === y.length ? RegExp('[\\p{White_Space}]', 'gu') : RegExp(`${y.join('|')}|[\\p{White_Space}]`, 'gu'),
        T = [...new Intl.NumberFormat(r.locale, { useGrouping: !1 }).format(9876543210)].reverse(),
        S = new Map(T.map((e, n) => [e, n]));
    return {
        minusSign: h,
        plusSign: _,
        decimal: m,
        group: g,
        literals: b,
        numeral: RegExp(`[${T.join('')}]`, 'g'),
        index: (e) => String(S.get(e))
    };
}
function b(e, n, r) {
    return e.replaceAll ? e.replaceAll(n, r) : e.split(n).join(r);
}
function I(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
