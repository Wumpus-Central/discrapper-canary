a.r(l), a.d(l, { CalendarPicker: () => p, default: () => m });
var t = a(627968),
    o = a(64700),
    n = a(989349),
    i = a.n(n),
    r = a(77967),
    s = a.n(r),
    d = a(17928),
    u = a(724066),
    c = a(773669),
    b = a(223765);
function p(e) {
    let {
            value: l = i()().local(),
            minDate: a,
            maxDate: n,
            onSelect: r,
            calendarClassName: p,
            autoFocus: m,
            onClickOutside: h,
        } = e,
        x = o.useCallback(
            (e, l) => {
                r?.(i()(e), l);
            },
            [r],
        ),
        v = o.useMemo(() => l.toDate(), [l]),
        f = o.useMemo(() => n?.toDate(), [n]),
        g = o.useMemo(() => a?.toDate(), [a]),
        y = (0, d.bG)([c.default], () => c.default.locale),
        C = (0, u.QO)(),
        j = o.useRef(null),
        V = o.useCallback((e) => {
            let l = e.currentTarget;
            l.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    if (j.current?.contains(l)) return;
                    let e = j.current?.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != e && e.focus();
                }, 100);
        }, []);
    return (0, t.jsx)("div", {
        ref: j,
        className: b.Xn,
        children: (0, t.jsx)(s(), {
            calendarClassName: p,
            selected: v,
            onChange: x,
            autoFocus: m,
            fixedHeight: !0,
            inline: !0,
            locale: y,
            calendarStartDay: C.options?.weekStartsOn ?? 0,
            maxDate: f,
            minDate: g,
            onKeyDown: V,
            onClickOutside: h,
        }),
    });
}
let m = p;
