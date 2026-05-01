t.r(a), t.d(a, { CalendarPicker: () => p, default: () => f });
var n = t(627968),
    l = t(64700),
    c = t(989349),
    s = t.n(c),
    r = t(77967),
    u = t.n(r),
    i = t(17928),
    o = t(724066),
    d = t(773669),
    k = t(223765);
function p(e) {
    let {
            value: a = s()().local(),
            minDate: t,
            maxDate: c,
            onSelect: r,
            calendarClassName: p,
            autoFocus: f,
            onClickOutside: h,
        } = e,
        m = l.useCallback(
            (e, a) => {
                r?.(s()(e), a);
            },
            [r],
        ),
        C = l.useMemo(() => a.toDate(), [a]),
        D = l.useMemo(() => c?.toDate(), [c]),
        b = l.useMemo(() => t?.toDate(), [t]),
        _ = (0, i.bG)([d.default], () => d.default.locale),
        x = (0, o.QO)(),
        y = l.useRef(null),
        w = l.useCallback((e) => {
            let a = e.currentTarget;
            a.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    if (y.current?.contains(a)) return;
                    let e = y.current?.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != e && e.focus();
                }, 100);
        }, []);
    return (0, n.jsx)("div", {
        ref: y,
        className: k.Xn,
        children: (0, n.jsx)(u(), {
            calendarClassName: p,
            selected: C,
            onChange: m,
            autoFocus: f,
            fixedHeight: !0,
            inline: !0,
            locale: _,
            calendarStartDay: x.options?.weekStartsOn ?? 0,
            maxDate: D,
            minDate: b,
            onKeyDown: w,
            onClickOutside: h,
        }),
    });
}
let f = p;
