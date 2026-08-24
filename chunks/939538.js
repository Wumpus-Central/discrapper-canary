"use strict";
n.r(t), n.d(t, { CalendarPicker: () => E, default: () => A });
var i = n(477900),
    r = n(582128),
    a = n(536637),
    s = n.n(a),
    l = n(7467),
    o = n.n(l),
    d = n(17928),
    c = n(724066),
    u = n(773669),
    _ = n(163950);
function E(e) {
    let {
            value: t = s()().local(),
            minDate: n,
            maxDate: a,
            onSelect: l,
            calendarClassName: E,
            autoFocus: A,
            onClickOutside: h,
        } = e,
        I = r.useCallback(
            (e, t) => {
                l?.(s()(e), t);
            },
            [l],
        ),
        f = r.useMemo(() => t.toDate(), [t]),
        p = r.useMemo(() => a?.toDate(), [a]),
        T = r.useMemo(() => n?.toDate(), [n]),
        m = (0, d.bG)([u.default], () => u.default.locale),
        g = (0, c.QO)(),
        S = r.useRef(null),
        N = r.useCallback((e) => {
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
        className: _.Xn,
        children: (0, i.jsx)(o(), {
            calendarClassName: E,
            selected: f,
            onChange: I,
            autoFocus: A,
            fixedHeight: !0,
            inline: !0,
            locale: m,
            calendarStartDay: g.options?.weekStartsOn ?? 0,
            maxDate: p,
            minDate: T,
            onKeyDown: N,
            onClickOutside: h,
        }),
    });
}
let A = E;
