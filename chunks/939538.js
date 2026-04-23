n.r(t), n.d(t, { CalendarPicker: () => m, default: () => A });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    s = n.n(a),
    r = n(77967),
    o = n.n(r),
    c = n(311907),
    d = n(11057),
    u = n(773669),
    h = n(223765);
function m(e) {
    let {
            value: t = s()().local(),
            minDate: n,
            maxDate: a,
            onSelect: r,
            calendarClassName: m,
            autoFocus: A,
            onClickOutside: g,
        } = e,
        _ = l.useCallback(
            (e, t) => {
                r?.(s()(e), t);
            },
            [r],
        ),
        p = l.useMemo(() => t.toDate(), [t]),
        f = l.useMemo(() => a?.toDate(), [a]),
        E = l.useMemo(() => n?.toDate(), [n]),
        C = (0, c.bG)([u.default], () => u.default.locale),
        x = (0, d.QO)(),
        S = l.useRef(null),
        I = l.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    if (S.current?.contains(t)) return;
                    let e = S.current?.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != e && e.focus();
                }, 100);
        }, []);
    return (0, i.jsx)("div", {
        ref: S,
        className: h.Xn,
        children: (0, i.jsx)(o(), {
            calendarClassName: m,
            selected: p,
            onChange: _,
            autoFocus: A,
            fixedHeight: !0,
            inline: !0,
            locale: C,
            calendarStartDay: x.options?.weekStartsOn ?? 0,
            maxDate: f,
            minDate: E,
            onKeyDown: I,
            onClickOutside: g,
        }),
    });
}
let A = m;
