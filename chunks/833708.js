"use strict";
n.d(t, { p: () => c });
var r = n(875565),
    i = n(826476);
function o(e, t) {
    (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
        (e.mechanism = {
            ...e.mechanism,
            ...("AggregateError" === e.type && { is_exception_group: !0 }),
            exception_id: t,
        });
}
function a(e, t, n, r) {
    (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
        (e.mechanism = { ...e.mechanism, type: "chained", source: t, exception_id: n, parent_id: r });
}
var s = n(688331),
    l = n(297458);
let c = (0, s._C)((e = {}) => {
    let t = e.limit || 5,
        n = e.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(e, s, c) {
            let u = c.getOptions();
            !(function (e, t, n = 250, s, l, c, u) {
                var d, p;
                if (!c.exception || !c.exception.values || !u || !(0, r.tH)(u.originalException, Error)) return;
                let h = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
                h &&
                    (c.exception.values =
                        ((d = (function e(t, n, i, s, l, c, u, d) {
                            if (c.length >= i + 1) return c;
                            let p = [...c];
                            if ((0, r.tH)(s[l], Error)) {
                                o(u, d);
                                let r = t(n, s[l]),
                                    c = p.length;
                                a(r, l, c, d), (p = e(t, n, i, s[l], l, [r, ...p], r, c));
                            }
                            return (
                                Array.isArray(s.errors) &&
                                    s.errors.forEach((s, c) => {
                                        if ((0, r.tH)(s, Error)) {
                                            o(u, d);
                                            let r = t(n, s),
                                                h = p.length;
                                            a(r, `errors[${c}]`, h, d), (p = e(t, n, i, s, l, [r, ...p], r, h));
                                        }
                                    }),
                                p
                            );
                        })(e, t, l, u.originalException, s, c.exception.values, h, 0)),
                        (p = n),
                        d.map((e) => (e.value && (e.value = (0, i.xv)(e.value, p)), e))));
            })(l.K8, u.stackParser, u.maxValueLength, n, t, e, s);
        },
    };
});
