"use strict";
n.r(t), n.d(t, { CalendarPicker: () => f, default: () => p });
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(77967),
    l = n.n(o),
    u = n(311907),
    c = n(11057),
    d = n(773669),
    _ = n(731880);
function f(e) {
    let {
            value: t = s()().local(),
            minDate: n,
            maxDate: a,
            onSelect: o,
            calendarClassName: f,
            autoFocus: p,
            onClickOutside: h,
        } = e,
        m = i.useCallback(
            (e, t) => {
                o?.(s()(e), t);
            },
            [o],
        ),
        g = i.useMemo(() => t.toDate(), [t]),
        E = i.useMemo(() => a?.toDate(), [a]),
        A = i.useMemo(() => n?.toDate(), [n]),
        I = (0, u.bG)([d.default], () => d.default.locale),
        T = (0, c.QO)(),
        y = i.useRef(null),
        S = i.useCallback((e) => {
            let t = e.currentTarget;
            t.classList.contains("react-datepicker__day") &&
                setTimeout(() => {
                    if (y.current?.contains(t)) return;
                    let e = y.current?.querySelector('.react-datepicker__day[tabindex="0"]');
                    null != e && e.focus();
                }, 100);
        }, []);
    return (0, r.jsx)("div", {
        ref: y,
        className: _.Xn,
        children: (0, r.jsx)(l(), {
            calendarClassName: f,
            selected: g,
            onChange: m,
            autoFocus: p,
            fixedHeight: !0,
            inline: !0,
            locale: I,
            calendarStartDay: T.options?.weekStartsOn ?? 0,
            maxDate: E,
            minDate: A,
            onKeyDown: S,
            onClickOutside: h,
        }),
    });
}
let p = f;
