r.d(n, {
    N3: function () {
        return T;
    },
    OV: function () {
        return L;
    },
    P$: function () {
        return x;
    },
    RM: function () {
        return C;
    }
});
var i = r(927521),
    a = r(697),
    s = r(328199),
    o = r(495484),
    l = r(165352),
    u = r(781988),
    c = r(239700),
    d = r(192379),
    f = r(133886);
function _(e, n, r) {
    return null != e && ((null != n && 0 > e.compare(n)) || (null != r && e.compare(r) > 0));
}
let h = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    },
    p = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
function m(e, n) {
    var r;
    e = {
        ...(n.shouldForceLeadingZeros ? p : h),
        ...e
    };
    let i = n.granularity || 'minute',
        a = Object.keys(e),
        s = a.indexOf(null !== (r = n.maxGranularity) && void 0 !== r ? r : 'year');
    s < 0 && (s = 0);
    let o = a.indexOf(i);
    if ((o < 0 && (o = 2), s > o)) throw Error('maxGranularity must be greater than granularity');
    let l = a.slice(s, o + 1).reduce((n, r) => ((n[r] = e[r]), n), {});
    return null != n.hourCycle && (l.hour12 = 12 === n.hourCycle), (l.timeZone = n.timeZone || 'UTC'), ('hour' === i || 'minute' === i || 'second' === i) && n.timeZone && !n.hideTimeZone && (l.timeZoneName = 'short'), n.showEra && 0 === s && (l.era = 'short'), l;
}
function g(e) {
    return e && 'hour' in e ? e : new i.qp();
}
function E(e, n) {
    return null === e ? null : e ? (0, a.Mw)(e, n) : void 0;
}
function v(e, n, r, i) {
    if (e) return E(e, r);
    let o = (0, a.Mw)(
        (0, s.zO)(i).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        r
    );
    return 'year' === n || 'month' === n || 'day' === n ? (0, a.WG)(o) : i ? o : (0, a.IO)(o);
}
function I(e, n) {
    let r = e && 'timeZone' in e ? e.timeZone : void 0,
        i = e && 'minute' in e ? 'minute' : 'day';
    if (e && n && !(n in e)) throw Error('Invalid granularity ' + n + ' for value ' + e.toString());
    let [a, s] = (0, d.useState)([i, r]);
    return e && (a[0] !== i || a[1] !== r) && s([i, r]), !n && (n = e ? i : a[0]), [n, e ? r : a[1]];
}
function T(e) {
    var n, r;
    let i = (0, u.d)(e),
        [s, l] = (0, c.zk)(e.value, e.defaultValue || null, e.onChange),
        f = s || e.placeholderValue,
        [h, p] = I(f, e.granularity),
        E = null != s ? s.toDate(null != p ? p : 'UTC') : null,
        v = 'hour' === h || 'minute' === h || 'second' === h,
        T = null === (r = e.shouldCloseOnSelect) || void 0 === r || r,
        [b, y] = (0, d.useState)(null),
        [S, A] = (0, d.useState)(null);
    if ((s && ((b = s), 'hour' in s && (S = s)), f && !(h in f))) throw Error('Invalid granularity ' + h + ' for value ' + f.toString());
    let N = (e, n) => {
            l('timeZone' in n ? n.set((0, a.WG)(e)) : (0, a.IO)(e, n)), y(null), A(null);
        },
        C = (n) => {
            let r = 'function' == typeof T ? T() : T;
            v ? (S || r ? N(n, S || g(e.placeholderValue)) : y(n)) : l(n), r && i.setOpen(!1);
        },
        R = (e) => {
            b && e ? N(b, e) : A(e);
        },
        O = e.isInvalid || 'invalid' === e.validationState || _(s, e.minValue, e.maxValue) || (s && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, s))),
        D = e.validationState || (O ? 'invalid' : null);
    return {
        value: s,
        setValue: l,
        dateValue: b,
        timeValue: S,
        setDateValue: C,
        setTimeValue: R,
        granularity: h,
        hasTime: v,
        ...i,
        setOpen(n) {
            !n && !s && b && v && N(b, S || g(e.placeholderValue)), i.setOpen(n);
        },
        validationState: D,
        isInvalid: O,
        formatValue(n, r) {
            if (!E) return '';
            let i = m(r, {
                granularity: h,
                timeZone: p,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                showEra: 'gregory' === s.calendar.identifier && 'BC' === s.era
            });
            return new o.C(n, i).format(E);
        }
    };
}
let b = new f.J(
    {
        ach: {
            year: 'mwaka',
            month: 'dwe',
            day: 'nino'
        },
        af: {
            year: 'jjjj',
            month: 'mm',
            day: 'dd'
        },
        am: {
            year: 'ዓዓዓዓ',
            month: 'ሚሜ',
            day: 'ቀቀ'
        },
        an: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        ar: {
            year: 'سنة',
            month: 'شهر',
            day: 'يوم'
        },
        ast: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        az: {
            year: 'iiii',
            month: 'aa',
            day: 'gg'
        },
        be: {
            year: 'гггг',
            month: 'мм',
            day: 'дд'
        },
        bg: {
            year: 'гггг',
            month: 'мм',
            day: 'дд'
        },
        bn: {
            year: 'yyyy',
            month: 'মিমি',
            day: 'dd'
        },
        br: {
            year: 'bbbb',
            month: 'mm',
            day: 'dd'
        },
        bs: {
            year: 'gggg',
            month: 'mm',
            day: 'dd'
        },
        ca: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        cak: {
            year: 'jjjj',
            month: 'ii',
            day: "q'q'"
        },
        ckb: {
            year: 'ساڵ',
            month: 'مانگ',
            day: 'ڕۆژ'
        },
        cs: {
            year: 'rrrr',
            month: 'mm',
            day: 'dd'
        },
        cy: {
            year: 'bbbb',
            month: 'mm',
            day: 'dd'
        },
        da: {
            year: 'åååå',
            month: 'mm',
            day: 'dd'
        },
        de: {
            year: 'jjjj',
            month: 'mm',
            day: 'tt'
        },
        dsb: {
            year: 'llll',
            month: 'mm',
            day: 'źź'
        },
        el: {
            year: 'εεεε',
            month: 'μμ',
            day: 'ηη'
        },
        en: {
            year: 'yyyy',
            month: 'mm',
            day: 'dd'
        },
        eo: {
            year: 'jjjj',
            month: 'mm',
            day: 'tt'
        },
        es: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        et: {
            year: 'aaaa',
            month: 'kk',
            day: 'pp'
        },
        eu: {
            year: 'uuuu',
            month: 'hh',
            day: 'ee'
        },
        fa: {
            year: 'سال',
            month: 'ماه',
            day: 'روز'
        },
        ff: {
            year: 'hhhh',
            month: 'll',
            day: 'ññ'
        },
        fi: {
            year: 'vvvv',
            month: 'kk',
            day: 'pp'
        },
        fr: {
            year: 'aaaa',
            month: 'mm',
            day: 'jj'
        },
        fy: {
            year: 'jjjj',
            month: 'mm',
            day: 'dd'
        },
        ga: {
            year: 'bbbb',
            month: 'mm',
            day: 'll'
        },
        gd: {
            year: 'bbbb',
            month: 'mm',
            day: 'll'
        },
        gl: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        he: {
            year: 'שנה',
            month: 'חודש',
            day: 'יום'
        },
        hr: {
            year: 'gggg',
            month: 'mm',
            day: 'dd'
        },
        hsb: {
            year: 'llll',
            month: 'mm',
            day: 'dd'
        },
        hu: {
            year: 'éééé',
            month: 'hh',
            day: 'nn'
        },
        ia: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        id: {
            year: 'tttt',
            month: 'bb',
            day: 'hh'
        },
        it: {
            year: 'aaaa',
            month: 'mm',
            day: 'gg'
        },
        ja: {
            year: ' 年 ',
            month: '月',
            day: '日'
        },
        ka: {
            year: 'წწწწ',
            month: 'თთ',
            day: 'რრ'
        },
        kk: {
            year: 'жжжж',
            month: 'аа',
            day: 'кк'
        },
        kn: {
            year: 'ವವವವ',
            month: 'ಮಿಮೀ',
            day: 'ದಿದಿ'
        },
        ko: {
            year: '연도',
            month: '월',
            day: '일'
        },
        lb: {
            year: 'jjjj',
            month: 'mm',
            day: 'dd'
        },
        lo: {
            year: 'ປປປປ',
            month: 'ດດ',
            day: 'ວວ'
        },
        lt: {
            year: 'mmmm',
            month: 'mm',
            day: 'dd'
        },
        lv: {
            year: 'gggg',
            month: 'mm',
            day: 'dd'
        },
        meh: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        ml: {
            year: 'വർഷം',
            month: 'മാസം',
            day: 'തീയതി'
        },
        ms: {
            year: 'tttt',
            month: 'mm',
            day: 'hh'
        },
        nl: {
            year: 'jjjj',
            month: 'mm',
            day: 'dd'
        },
        nn: {
            year: 'åååå',
            month: 'mm',
            day: 'dd'
        },
        no: {
            year: 'åååå',
            month: 'mm',
            day: 'dd'
        },
        oc: {
            year: 'aaaa',
            month: 'mm',
            day: 'jj'
        },
        pl: {
            year: 'rrrr',
            month: 'mm',
            day: 'dd'
        },
        pt: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        rm: {
            year: 'oooo',
            month: 'mm',
            day: 'dd'
        },
        ro: {
            year: 'aaaa',
            month: 'll',
            day: 'zz'
        },
        ru: {
            year: 'гггг',
            month: 'мм',
            day: 'дд'
        },
        sc: {
            year: 'aaaa',
            month: 'mm',
            day: 'dd'
        },
        scn: {
            year: 'aaaa',
            month: 'mm',
            day: 'jj'
        },
        sk: {
            year: 'rrrr',
            month: 'mm',
            day: 'dd'
        },
        sl: {
            year: 'llll',
            month: 'mm',
            day: 'dd'
        },
        sr: {
            year: 'гггг',
            month: 'мм',
            day: 'дд'
        },
        sv: {
            year: 'åååå',
            month: 'mm',
            day: 'dd'
        },
        szl: {
            year: 'rrrr',
            month: 'mm',
            day: 'dd'
        },
        tg: {
            year: 'сссс',
            month: 'мм',
            day: 'рр'
        },
        th: {
            year: 'ปปปป',
            month: 'ดด',
            day: 'วว'
        },
        tr: {
            year: 'yyyy',
            month: 'aa',
            day: 'gg'
        },
        uk: {
            year: 'рррр',
            month: 'мм',
            day: 'дд'
        },
        'zh-CN': {
            year: '年',
            month: '月',
            day: '日'
        },
        'zh-TW': {
            year: '年',
            month: '月',
            day: '日'
        }
    },
    'en'
);
function y(e, n, r) {
    return 'era' === e || 'dayPeriod' === e ? n : 'year' === e || 'month' === e || 'day' === e ? b.getStringForLocale(e, r) : '\u2013\u2013';
}
let S = {
        year: !0,
        month: !0,
        day: !0,
        hour: !0,
        minute: !0,
        second: !0,
        dayPeriod: !0,
        era: !0
    },
    A = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15
    },
    N = { dayperiod: 'dayPeriod' };
function C(e) {
    var n, r;
    let { locale: i, createCalendar: s, hideTimeZone: u, isDisabled: f, isReadOnly: h, isRequired: p } = e,
        g = e.value || e.defaultValue || e.placeholderValue,
        [T, b] = I(g, e.granularity),
        C = b || 'UTC';
    if (g && !(T in g)) throw Error('Invalid granularity ' + T + ' for value ' + g.toString());
    let L = (0, d.useMemo)(() => new o.C(i), [i]),
        x = (0, d.useMemo)(() => s(L.resolvedOptions().calendar), [s, L]),
        [w, P] = (0, c.zk)(e.value, e.defaultValue, e.onChange),
        M = (0, d.useMemo)(() => E(w, x), [w, x]),
        [k, U] = (0, d.useState)(() => v(e.placeholderValue, T, x, b)),
        B = M || k,
        G = 'gregory' === x.identifier && 'BC' === B.era,
        Z = (0, d.useMemo)(
            () => ({
                granularity: T,
                maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : 'year',
                timeZone: b,
                hideTimeZone: u,
                hourCycle: e.hourCycle,
                showEra: G,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }),
            [e.maxGranularity, T, e.hourCycle, e.shouldForceLeadingZeros, b, u, G]
        ),
        F = (0, d.useMemo)(() => m({}, Z), [Z]),
        V = (0, d.useMemo)(() => new o.C(i, F), [i, F]),
        j = (0, d.useMemo)(() => V.resolvedOptions(), [V]),
        H = (0, d.useMemo)(
            () =>
                V.formatToParts(new Date())
                    .filter((e) => S[e.type])
                    .reduce((e, n) => ((e[n.type] = !0), e), {}),
            [V]
        ),
        [Y, W] = (0, d.useState)(() => (e.value || e.defaultValue ? { ...H } : {})),
        K = (0, d.useRef)(),
        z = (0, d.useRef)(x.identifier);
    (0, d.useEffect)(() => {
        x.identifier !== z.current && ((z.current = x.identifier), U((n) => (Object.keys(Y).length > 0 ? (0, a.Mw)(n, x) : v(e.placeholderValue, T, x, b))));
    }, [x, T, Y, b, e.placeholderValue]),
        w && Object.keys(Y).length < Object.keys(H).length && W((Y = { ...H })),
        null == w && Object.keys(Y).length === Object.keys(H).length && (W((Y = {})), U(v(e.placeholderValue, T, x, b)));
    let q = M && Object.keys(Y).length >= Object.keys(H).length ? M : k,
        Q = (n) => {
            if (e.isDisabled || e.isReadOnly) return;
            let r = Object.keys(Y),
                i = Object.keys(H);
            null == n ? (P(null), U(v(e.placeholderValue, T, x, b)), W({})) : r.length >= i.length || (r.length === i.length - 1 && H.dayPeriod && !Y.dayPeriod && 'dayPeriod' !== K.current) ? P((n = (0, a.Mw)(n, (null == g ? void 0 : g.calendar) || new l.IQ()))) : U(n), (K.current = null);
        },
        X = (0, d.useMemo)(() => q.toDate(C), [q, C]),
        J = (0, d.useMemo)(
            () =>
                V.formatToParts(X).map((e) => {
                    let n = S[e.type];
                    'era' === e.type && 1 === x.getEras().length && (n = !1);
                    let r = S[e.type] && !Y[e.type],
                        a = S[e.type] ? y(e.type, e.value, i) : null;
                    return {
                        type: N[e.type] || e.type,
                        text: r ? a : e.value,
                        ...R(q, e.type, j),
                        isPlaceholder: r,
                        placeholder: a,
                        isEditable: n
                    };
                }),
            [X, Y, V, j, q, x, i]
        );
    H.era && Y.year && !Y.era ? ((Y.era = !0), W({ ...Y })) : !H.era && Y.era && (delete Y.era, W({ ...Y }));
    let $ = (e) => {
            (Y[e] = !0), 'year' === e && H.era && (Y.era = !0), W({ ...Y });
        },
        ee = (e, n) => {
            if (Y[e]) Q(O(q, e, n, j));
            else {
                $(e);
                let n = Object.keys(Y),
                    r = Object.keys(H);
                (n.length >= r.length || (n.length === r.length - 1 && H.dayPeriod && !Y.dayPeriod)) && Q(q);
            }
        },
        et = e.isInvalid || 'invalid' === e.validationState || _(M, e.minValue, e.maxValue);
    return {
        value: M,
        dateValue: X,
        calendar: x,
        setValue: Q,
        segments: J,
        dateFormatter: V,
        validationState: e.validationState || (et ? 'invalid' : null),
        isInvalid: et,
        granularity: T,
        maxGranularity: null !== (r = e.maxGranularity) && void 0 !== r ? r : 'year',
        isDisabled: f,
        isReadOnly: h,
        isRequired: p,
        increment(e) {
            ee(e, 1);
        },
        decrement(e) {
            ee(e, -1);
        },
        incrementPage(e) {
            ee(e, A[e] || 1);
        },
        decrementPage(e) {
            ee(e, -(A[e] || 1));
        },
        setSegment(e, n) {
            $(e), Q(D(q, e, n, j));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(Y),
                r = Object.keys(H);
            n.length === r.length - 1 && H.dayPeriod && !Y.dayPeriod && (W((Y = { ...H })), Q(q.copy()));
        },
        clearSegment(n) {
            delete Y[n], (K.current = n), W({ ...Y });
            let r = v(e.placeholderValue, T, x, b),
                i = q;
            if ('dayPeriod' === n && 'hour' in q && 'hour' in r) {
                let e = q.hour >= 12,
                    n = r.hour >= 12;
                e && !n ? (i = q.set({ hour: q.hour - 12 })) : !e && n && (i = q.set({ hour: q.hour + 12 }));
            } else n in q && (i = q.set({ [n]: r[n] }));
            P(null), Q(i);
        },
        formatValue(e) {
            if (!M) return '';
            let n = m(e, Z);
            return new o.C(i, n).format(X);
        }
    };
}
function R(e, n, r) {
    switch (n) {
        case 'era': {
            let n = e.calendar.getEras();
            return {
                value: n.indexOf(e.era),
                minValue: 0,
                maxValue: n.length - 1
            };
        }
        case 'year':
            return {
                value: e.year,
                minValue: 1,
                maxValue: e.calendar.getYearsInEra(e)
            };
        case 'month':
            return {
                value: e.month,
                minValue: (0, s.jx)(e),
                maxValue: e.calendar.getMonthsInYear(e)
            };
        case 'day':
            return {
                value: e.day,
                minValue: (0, s.PA)(e),
                maxValue: e.calendar.getDaysInMonth(e)
            };
    }
    if ('hour' in e)
        switch (n) {
            case 'dayPeriod':
                return {
                    value: e.hour >= 12 ? 12 : 0,
                    minValue: 0,
                    maxValue: 12
                };
            case 'hour':
                if (r.hour12) {
                    let n = e.hour >= 12;
                    return {
                        value: e.hour,
                        minValue: n ? 12 : 0,
                        maxValue: n ? 23 : 11
                    };
                }
                return {
                    value: e.hour,
                    minValue: 0,
                    maxValue: 23
                };
            case 'minute':
                return {
                    value: e.minute,
                    minValue: 0,
                    maxValue: 59
                };
            case 'second':
                return {
                    value: e.second,
                    minValue: 0,
                    maxValue: 59
                };
        }
    return {};
}
function O(e, n, r, i) {
    switch (n) {
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return e.cycle(n, r, { round: 'year' === n });
    }
    if ('hour' in e)
        switch (n) {
            case 'dayPeriod': {
                let n = e.hour,
                    r = n >= 12;
                return e.set({ hour: r ? n - 12 : n + 12 });
            }
            case 'hour':
            case 'minute':
            case 'second':
                return e.cycle(n, r, {
                    round: 'hour' !== n,
                    hourCycle: i.hour12 ? 12 : 24
                });
        }
}
function D(e, n, r, i) {
    switch (n) {
        case 'day':
        case 'month':
        case 'year':
        case 'era':
            return e.set({ [n]: r });
    }
    if ('hour' in e)
        switch (n) {
            case 'dayPeriod': {
                let n = e.hour,
                    i = n >= 12;
                if (r >= 12 === i) return e;
                return e.set({ hour: i ? n - 12 : n + 12 });
            }
            case 'hour':
                if (i.hour12) {
                    let n = e.hour >= 12;
                    !n && 12 === r && (r = 0), n && r < 12 && (r += 12);
                }
            case 'minute':
            case 'second':
                return e.set({ [n]: r });
        }
}
function L(e) {
    var n, r, i;
    let s = (0, u.d)(e),
        [l, f] = (0, c.zk)(e.value, e.defaultValue || null, e.onChange),
        [h, p] = (0, d.useState)(
            () =>
                l || {
                    start: null,
                    end: null
                }
        );
    null == l &&
        h.start &&
        h.end &&
        p(
            (h = {
                start: null,
                end: null
            })
        );
    let E = l || h,
        v = (e) => {
            p(e), (null == e ? void 0 : e.start) && e.end ? f(e) : f(null);
        },
        [T] = I((null == E ? void 0 : E.start) || (null == E ? void 0 : E.end) || e.placeholderValue, e.granularity),
        b = 'hour' === T || 'minute' === T || 'second' === T,
        y = null === (i = e.shouldCloseOnSelect) || void 0 === i || i,
        [S, A] = (0, d.useState)(null),
        [N, C] = (0, d.useState)(null);
    E && E.start && E.end && ((S = E), 'hour' in E.start && (N = E));
    let R = (e, n) => {
            v({
                start: 'timeZone' in n.start ? n.start.set((0, a.WG)(e.start)) : (0, a.IO)(e.start, n.start),
                end: 'timeZone' in n.end ? n.end.set((0, a.WG)(e.end)) : (0, a.IO)(e.end, n.end)
            }),
                A(null),
                C(null);
        },
        O = (n) => {
            let r = 'function' == typeof y ? y() : y;
            b
                ? r || (n.start && n.end && (null == N ? void 0 : N.start) && (null == N ? void 0 : N.end))
                    ? R(n, {
                          start: (null == N ? void 0 : N.start) || g(e.placeholderValue),
                          end: (null == N ? void 0 : N.end) || g(e.placeholderValue)
                      })
                    : A(n)
                : n.start && n.end
                  ? v(n)
                  : A(n),
                r && s.setOpen(!1);
        },
        D = (e) => {
            (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && e.start && e.end ? R(S, e) : C(e);
        },
        L = e.isInvalid || 'invalid' === e.validationState || (null != E && (_(E.start, e.minValue, e.maxValue) || _(E.end, e.minValue, e.maxValue) || (null != E.end && null != E.start && 0 > E.end.compare(E.start)) || ((null == E ? void 0 : E.start) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, E.start))) || ((null == E ? void 0 : E.end) && (null === (r = e.isDateUnavailable) || void 0 === r ? void 0 : r.call(e, E.end))))),
        x = e.validationState || (L ? 'invalid' : null);
    return {
        value: E,
        setValue: v,
        dateRange: S,
        timeRange: N,
        granularity: T,
        hasTime: b,
        setDate(e, n) {
            O({
                ...S,
                [e]: n
            });
        },
        setTime(e, n) {
            D({
                ...N,
                [e]: n
            });
        },
        setDateTime(e, n) {
            v({
                ...E,
                [e]: n
            });
        },
        setDateRange: O,
        setTimeRange: D,
        ...s,
        setOpen(n) {
            !n &&
                !((null == E ? void 0 : E.start) && (null == E ? void 0 : E.end)) &&
                (null == S ? void 0 : S.start) &&
                (null == S ? void 0 : S.end) &&
                b &&
                R(S, {
                    start: (null == N ? void 0 : N.start) || g(e.placeholderValue),
                    end: (null == N ? void 0 : N.end) || g(e.placeholderValue)
                }),
                s.setOpen(n);
        },
        validationState: x,
        isInvalid: L,
        formatValue(n, r) {
            let i;
            if (!E || !E.start || !E.end) return null;
            let a = 'timeZone' in E.start ? E.start.timeZone : void 0,
                s = e.granularity || (E.start && 'minute' in E.start ? 'minute' : 'day'),
                l = 'timeZone' in E.end ? E.end.timeZone : void 0,
                u = e.granularity || (E.end && 'minute' in E.end ? 'minute' : 'day'),
                c = m(r, {
                    granularity: s,
                    timeZone: a,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: ('gregory' === E.start.calendar.identifier && 'BC' === E.start.era) || ('gregory' === E.end.calendar.identifier && 'BC' === E.end.era)
                }),
                d = E.start.toDate(a || 'UTC'),
                f = E.end.toDate(l || 'UTC'),
                _ = new o.C(n, c);
            if (a === l && s === u && 0 !== E.start.compare(E.end)) {
                try {
                    let e = _.formatRangeToParts(d, f),
                        n = -1;
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if ('shared' === i.source && 'literal' === i.type) n = r;
                        else if ('endRange' === i.source) break;
                    }
                    let r = '',
                        i = '';
                    for (let a = 0; a < e.length; a++) a < n ? (r += e[a].value) : a > n && (i += e[a].value);
                    return {
                        start: r,
                        end: i
                    };
                } catch (e) {}
                i = _;
            } else {
                let a = m(r, {
                    granularity: u,
                    timeZone: l,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle
                });
                i = new o.C(n, a);
            }
            return {
                start: _.format(d),
                end: i.format(f)
            };
        }
    };
}
function x(e) {
    let { placeholderValue: n = new i.qp(), minValue: r, maxValue: s, granularity: o } = e,
        [u, f] = (0, c.zk)(e.value, e.defaultValue, e.onChange),
        _ = u || n,
        h = _ && 'day' in _ ? _ : void 0,
        p = e.defaultValue && 'timeZone' in e.defaultValue ? e.defaultValue.timeZone : void 0,
        m = (0, d.useMemo)(() => {
            let e = _ && 'timeZone' in _ ? _.timeZone : void 0;
            return (e || p) && n ? (0, a.fW)(w(n), e || p) : w(n);
        }, [n, _, p]),
        g = (0, d.useMemo)(() => w(r, h), [r, h]),
        E = (0, d.useMemo)(() => w(s, h), [s, h]),
        v = (0, d.useMemo)(() => (u && 'day' in u ? (0, a.ZB)(u) : u), [u]),
        I = (0, d.useMemo)(() => (null == u ? null : w(u)), [u]),
        T = (e) => {
            f(h || p ? e : e && (0, a.ZB)(e));
        };
    return {
        ...C({
            ...e,
            value: I,
            defaultValue: void 0,
            minValue: g,
            maxValue: E,
            onChange: T,
            granularity: o || 'minute',
            maxGranularity: 'hour',
            placeholderValue: m,
            createCalendar: () => new l.IQ()
        }),
        timeValue: v
    };
}
function w(e, n = (0, s.Lg)((0, s.iT)())) {
    return e ? ('day' in e ? e : (0, a.IO)(n, e)) : null;
}
