n.r(t),
    n.d(t, {
        CalendarPicker: () => p,
        default: () => _,
    });
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(77967),
    l = n.n(o),
    c = n(311907),
    u = n(11057),
    d = n(773669),
    f = n(731880);
function p(e) {
    var t, n;
    let {
            value: a = s()().local(),
            minDate: o,
            maxDate: p,
            onSelect: _,
            calendarClassName: h,
            autoFocus: m,
            onClickOutside: g,
        } = e,
        E = i.useCallback(
            (e, t) => {
                null == _ || _(s()(e), t);
            },
            [_],
        ),
        b = i.useMemo(() => a.toDate(), [a]),
        y = i.useMemo(() => (null == p ? void 0 : p.toDate()), [p]),
        O = i.useMemo(() => (null == o ? void 0 : o.toDate()), [o]),
        A = (0, c.bG)([d.default], () => d.default.locale),
        v = (0, u.QO)(),
        S = i.useRef(null),
        I = i.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    var e, n;
                    if (null == (e = S.current) ? void 0 : e.contains(t)) return;
                    let r = null == (n = S.current) ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != r && r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)("div", {
        ref: S,
        className: f.Xn,
        children: (0, r.jsx)(l(), {
            calendarClassName: h,
            selected: b,
            onChange: E,
            autoFocus: m,
            fixedHeight: !0,
            inline: !0,
            locale: A,
            calendarStartDay: null != (t = null == (n = v.options) ? void 0 : n.weekStartsOn) ? t : 0,
            maxDate: y,
            minDate: O,
            onKeyDown: I,
            onClickOutside: g,
        }),
    });
}
let _ = p;
