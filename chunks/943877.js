r.d(n, {
    N3: function () {
        return b;
    },
    OV: function () {
        return L;
    },
    P$: function () {
        return x;
    },
    RM: function () {
        return N;
    }
});
var i = r(927521),
    a = r(697),
    o = r(328199),
    s = r(495484),
    l = r(165352),
    u = r(781988),
    c = r(239700),
    d = r(192379),
    f = r(133886);
function p(e, n, r) {
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
    _ = {
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
        ...(n.shouldForceLeadingZeros ? _ : h),
        ...e
    };
    let i = n.granularity || 'minute',
        a = Object.keys(e),
        o = a.indexOf(null !== (r = n.maxGranularity) && void 0 !== r ? r : 'year');
    o < 0 && (o = 0);
    let s = a.indexOf(i);
    if ((s < 0 && (s = 2), o > s)) throw Error('maxGranularity must be greater than granularity');
    let l = a.slice(o, s + 1).reduce((n, r) => ((n[r] = e[r]), n), {});
    return null != n.hourCycle && (l.hour12 = 12 === n.hourCycle), (l.timeZone = n.timeZone || 'UTC'), ('hour' === i || 'minute' === i || 'second' === i) && n.timeZone && !n.hideTimeZone && (l.timeZoneName = 'short'), n.showEra && 0 === o && (l.era = 'short'), l;
}
function g(e) {
    return e && 'hour' in e ? e : new i.qp();
}
function E(e, n) {
    return null === e ? null : e ? (0, a.Mw)(e, n) : void 0;
}
function v(e, n, r, i) {
    if (e) return E(e, r);
    let s = (0, a.Mw)(
        (0, o.zO)(i).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        r
    );
    return 'year' === n || 'month' === n || 'day' === n ? (0, a.WG)(s) : i ? s : (0, a.IO)(s);
}
function y(e, n) {
    let r = e && 'timeZone' in e ? e.timeZone : void 0,
        i = e && 'minute' in e ? 'minute' : 'day';
    if (e && n && !(n in e)) throw Error('Invalid granularity ' + n + ' for value ' + e.toString());
    let [a, o] = (0, d.useState)([i, r]);
    return e && (a[0] !== i || a[1] !== r) && o([i, r]), !n && (n = e ? i : a[0]), [n, e ? r : a[1]];
}
function b(e) {
    var n, r;
    let i = (0, u.d)(e),
        [o, l] = (0, c.zk)(e.value, e.defaultValue || null, e.onChange),
        f = o || e.placeholderValue,
        [h, _] = y(f, e.granularity),
        E = null != o ? o.toDate(null != _ ? _ : 'UTC') : null,
        v = 'hour' === h || 'minute' === h || 'second' === h,
        b = null === (r = e.shouldCloseOnSelect) || void 0 === r || r,
        [I, T] = (0, d.useState)(null),
        [S, A] = (0, d.useState)(null);
    if ((o && ((I = o), 'hour' in o && (S = o)), f && !(h in f))) throw Error('Invalid granularity ' + h + ' for value ' + f.toString());
    let C = (e, n) => {
            l('timeZone' in n ? n.set((0, a.WG)(e)) : (0, a.IO)(e, n)), T(null), A(null);
        },
        N = (n) => {
            let r = 'function' == typeof b ? b() : b;
            v ? (S || r ? C(n, S || g(e.placeholderValue)) : T(n)) : l(n), r && i.setOpen(!1);
        },
        R = (e) => {
            I && e ? C(I, e) : A(e);
        },
        O = e.isInvalid || 'invalid' === e.validationState || p(o, e.minValue, e.maxValue) || (o && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, o))),
        D = e.validationState || (O ? 'invalid' : null);
    return {
        value: o,
        setValue: l,
        dateValue: I,
        timeValue: S,
        setDateValue: N,
        setTimeValue: R,
        granularity: h,
        hasTime: v,
        ...i,
        setOpen(n) {
            !n && !o && I && v && C(I, S || g(e.placeholderValue)), i.setOpen(n);
        },
        validationState: D,
        isInvalid: O,
        formatValue(n, r) {
            if (!E) return '';
            let i = m(r, {
                granularity: h,
                timeZone: _,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                showEra: 'gregory' === o.calendar.identifier && 'BC' === o.era
            });
            return new s.C(n, i).format(E);
        }
    };
}
let I = new f.J(
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
function T(e, n, r) {
    return 'era' === e || 'dayPeriod' === e ? n : 'year' === e || 'month' === e || 'day' === e ? I.getStringForLocale(e, r) : '\u2013\u2013';
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
    C = { dayperiod: 'dayPeriod' };
function N(e) {
    var n, r;
    let { locale: i, createCalendar: o, hideTimeZone: u, isDisabled: f, isReadOnly: h, isRequired: _ } = e,
        g = e.value || e.defaultValue || e.placeholderValue,
        [b, I] = y(g, e.granularity),
        N = I || 'UTC';
    if (g && !(b in g)) throw Error('Invalid granularity ' + b + ' for value ' + g.toString());
    let L = (0, d.useMemo)(() => new s.C(i), [i]),
        x = (0, d.useMemo)(() => o(L.resolvedOptions().calendar), [o, L]),
        [w, P] = (0, c.zk)(e.value, e.defaultValue, e.onChange),
        M = (0, d.useMemo)(() => E(w, x), [w, x]),
        [k, U] = (0, d.useState)(() => v(e.placeholderValue, b, x, I)),
        B = M || k,
        G = 'gregory' === x.identifier && 'BC' === B.era,
        Z = (0, d.useMemo)(
            () => ({
                granularity: b,
                maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : 'year',
                timeZone: I,
                hideTimeZone: u,
                hourCycle: e.hourCycle,
                showEra: G,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }),
            [e.maxGranularity, b, e.hourCycle, e.shouldForceLeadingZeros, I, u, G]
        ),
        F = (0, d.useMemo)(() => m({}, Z), [Z]),
        V = (0, d.useMemo)(() => new s.C(i, F), [i, F]),
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
        x.identifier !== z.current && ((z.current = x.identifier), U((n) => (Object.keys(Y).length > 0 ? (0, a.Mw)(n, x) : v(e.placeholderValue, b, x, I))));
    }, [x, b, Y, I, e.placeholderValue]),
        w && Object.keys(Y).length < Object.keys(H).length && W((Y = { ...H })),
        null == w && Object.keys(Y).length === Object.keys(H).length && (W((Y = {})), U(v(e.placeholderValue, b, x, I)));
    let q = M && Object.keys(Y).length >= Object.keys(H).length ? M : k,
        Q = (n) => {
            if (e.isDisabled || e.isReadOnly) return;
            let r = Object.keys(Y),
                i = Object.keys(H);
            null == n ? (P(null), U(v(e.placeholderValue, b, x, I)), W({})) : r.length >= i.length || (r.length === i.length - 1 && H.dayPeriod && !Y.dayPeriod && 'dayPeriod' !== K.current) ? P((n = (0, a.Mw)(n, (null == g ? void 0 : g.calendar) || new l.IQ()))) : U(n), (K.current = null);
        },
        X = (0, d.useMemo)(() => q.toDate(N), [q, N]),
        J = (0, d.useMemo)(
            () =>
                V.formatToParts(X).map((e) => {
                    let n = S[e.type];
                    'era' === e.type && 1 === x.getEras().length && (n = !1);
                    let r = S[e.type] && !Y[e.type],
                        a = S[e.type] ? T(e.type, e.value, i) : null;
                    return {
                        type: C[e.type] || e.type,
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
        et = e.isInvalid || 'invalid' === e.validationState || p(M, e.minValue, e.maxValue);
    return {
        value: M,
        dateValue: X,
        calendar: x,
        setValue: Q,
        segments: J,
        dateFormatter: V,
        validationState: e.validationState || (et ? 'invalid' : null),
        isInvalid: et,
        granularity: b,
        maxGranularity: null !== (r = e.maxGranularity) && void 0 !== r ? r : 'year',
        isDisabled: f,
        isReadOnly: h,
        isRequired: _,
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
            let r = v(e.placeholderValue, b, x, I),
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
            return new s.C(i, n).format(X);
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
                minValue: (0, o.jx)(e),
                maxValue: e.calendar.getMonthsInYear(e)
            };
        case 'day':
            return {
                value: e.day,
                minValue: (0, o.PA)(e),
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
    let o = (0, u.d)(e),
        [l, f] = (0, c.zk)(e.value, e.defaultValue || null, e.onChange),
        [h, _] = (0, d.useState)(
            () =>
                l || {
                    start: null,
                    end: null
                }
        );
    null == l &&
        h.start &&
        h.end &&
        _(
            (h = {
                start: null,
                end: null
            })
        );
    let E = l || h,
        v = (e) => {
            _(e), (null == e ? void 0 : e.start) && e.end ? f(e) : f(null);
        },
        [b] = y((null == E ? void 0 : E.start) || (null == E ? void 0 : E.end) || e.placeholderValue, e.granularity),
        I = 'hour' === b || 'minute' === b || 'second' === b,
        T = null === (i = e.shouldCloseOnSelect) || void 0 === i || i,
        [S, A] = (0, d.useState)(null),
        [C, N] = (0, d.useState)(null);
    E && E.start && E.end && ((S = E), 'hour' in E.start && (C = E));
    let R = (e, n) => {
            v({
                start: 'timeZone' in n.start ? n.start.set((0, a.WG)(e.start)) : (0, a.IO)(e.start, n.start),
                end: 'timeZone' in n.end ? n.end.set((0, a.WG)(e.end)) : (0, a.IO)(e.end, n.end)
            }),
                A(null),
                N(null);
        },
        O = (n) => {
            let r = 'function' == typeof T ? T() : T;
            I
                ? r || (n.start && n.end && (null == C ? void 0 : C.start) && (null == C ? void 0 : C.end))
                    ? R(n, {
                          start: (null == C ? void 0 : C.start) || g(e.placeholderValue),
                          end: (null == C ? void 0 : C.end) || g(e.placeholderValue)
                      })
                    : A(n)
                : n.start && n.end
                  ? v(n)
                  : A(n),
                r && o.setOpen(!1);
        },
        D = (e) => {
            (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && e.start && e.end ? R(S, e) : N(e);
        },
        L = e.isInvalid || 'invalid' === e.validationState || (null != E && (p(E.start, e.minValue, e.maxValue) || p(E.end, e.minValue, e.maxValue) || (null != E.end && null != E.start && 0 > E.end.compare(E.start)) || ((null == E ? void 0 : E.start) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, E.start))) || ((null == E ? void 0 : E.end) && (null === (r = e.isDateUnavailable) || void 0 === r ? void 0 : r.call(e, E.end))))),
        x = e.validationState || (L ? 'invalid' : null);
    return {
        value: E,
        setValue: v,
        dateRange: S,
        timeRange: C,
        granularity: b,
        hasTime: I,
        setDate(e, n) {
            O({
                ...S,
                [e]: n
            });
        },
        setTime(e, n) {
            D({
                ...C,
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
        ...o,
        setOpen(n) {
            !n &&
                !((null == E ? void 0 : E.start) && (null == E ? void 0 : E.end)) &&
                (null == S ? void 0 : S.start) &&
                (null == S ? void 0 : S.end) &&
                I &&
                R(S, {
                    start: (null == C ? void 0 : C.start) || g(e.placeholderValue),
                    end: (null == C ? void 0 : C.end) || g(e.placeholderValue)
                }),
                o.setOpen(n);
        },
        validationState: x,
        isInvalid: L,
        formatValue(n, r) {
            let i;
            if (!E || !E.start || !E.end) return null;
            let a = 'timeZone' in E.start ? E.start.timeZone : void 0,
                o = e.granularity || (E.start && 'minute' in E.start ? 'minute' : 'day'),
                l = 'timeZone' in E.end ? E.end.timeZone : void 0,
                u = e.granularity || (E.end && 'minute' in E.end ? 'minute' : 'day'),
                c = m(r, {
                    granularity: o,
                    timeZone: a,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: ('gregory' === E.start.calendar.identifier && 'BC' === E.start.era) || ('gregory' === E.end.calendar.identifier && 'BC' === E.end.era)
                }),
                d = E.start.toDate(a || 'UTC'),
                f = E.end.toDate(l || 'UTC'),
                p = new s.C(n, c);
            if (a === l && o === u && 0 !== E.start.compare(E.end)) {
                try {
                    let e = p.formatRangeToParts(d, f),
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
                i = p;
            } else {
                let a = m(r, {
                    granularity: u,
                    timeZone: l,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle
                });
                i = new s.C(n, a);
            }
            return {
                start: p.format(d),
                end: i.format(f)
            };
        }
    };
}
function x(e) {
    let { placeholderValue: n = new i.qp(), minValue: r, maxValue: o, granularity: s } = e,
        [u, f] = (0, c.zk)(e.value, e.defaultValue, e.onChange),
        p = u || n,
        h = p && 'day' in p ? p : void 0,
        _ = e.defaultValue && 'timeZone' in e.defaultValue ? e.defaultValue.timeZone : void 0,
        m = (0, d.useMemo)(() => {
            let e = p && 'timeZone' in p ? p.timeZone : void 0;
            return (e || _) && n ? (0, a.fW)(w(n), e || _) : w(n);
        }, [n, p, _]),
        g = (0, d.useMemo)(() => w(r, h), [r, h]),
        E = (0, d.useMemo)(() => w(o, h), [o, h]),
        v = (0, d.useMemo)(() => (u && 'day' in u ? (0, a.ZB)(u) : u), [u]),
        y = (0, d.useMemo)(() => (null == u ? null : w(u)), [u]),
        b = (e) => {
            f(h || _ ? e : e && (0, a.ZB)(e));
        };
    return {
        ...N({
            ...e,
            value: y,
            defaultValue: void 0,
            minValue: g,
            maxValue: E,
            onChange: b,
            granularity: s || 'minute',
            maxGranularity: 'hour',
            placeholderValue: m,
            createCalendar: () => new l.IQ()
        }),
        timeValue: v
    };
}
function w(e, n = (0, o.Lg)((0, o.iT)())) {
    return e ? ('day' in e ? e : (0, a.IO)(n, e)) : null;
}
