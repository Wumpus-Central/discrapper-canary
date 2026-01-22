n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(827734),
    a = n(582754),
    s = n(397927),
    o = n(58149),
    c = n(544028),
    u = n(954571),
    d = n(652215),
    f = n(985018),
    p = n(887008),
    h = n(206314);
function b(e) {
    let { onClose: t, onConfirm: b, onCancel: g, channel: m, analyticsType: A, popoutText: y, animation: O } = e;
    l.useEffect(() => {
        u.default.track(
            d.HAw.OPEN_POPOUT,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({ type: A }, (0, o.dI)(m)),
        );
    }, [A, m]);
    let j = l.useCallback(() => {
            null == b || b(), t();
        }, [b, t]),
        v = l.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        x = l.useRef(null);
    return (
        l.useEffect(() => {
            let e,
                t = c.A.theme,
                r = !1;
            return (
                null != O &&
                    (async () => {
                        let [{ default: l }, i] = await Promise.all([
                            Promise.resolve().then(n.t.bind(n, 883885, 23)),
                            (0, a.Mw)(t) ? O.dark() : O.light(),
                        ]);
                        r ||
                            null == x.current ||
                            (e = l.loadAnimation({
                                container: x.current,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: i,
                            }));
                    })(),
                () => {
                    (r = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [O]),
        (0, r.jsx)(s.lGe, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, r.jsxs)("form", {
                className: p.$,
                onSubmit: j,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.rf,
                        children: [
                            null != O &&
                                (0, r.jsx)("div", {
                                    className: p.lY,
                                    ref: x,
                                }),
                            (0, r.jsxs)("div", {
                                className: p.Qs,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: p.wx,
                                        children: f.intl.string(f.t.mY3Y38),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        id: "content-warning-popout-label",
                                        className: h.PT,
                                        variant: "text-sm/normal",
                                        children: y.body,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: p._o,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: p.UD,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: p.x6,
                                                        children: (0, r.jsx)(s.Button, {
                                                            variant: "secondary",
                                                            onClick: v,
                                                            text: f.intl.string(f.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(s.Text, {
                                                        variant: "text-xs/normal",
                                                        className: p.uK,
                                                        children: f.intl.format(f.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: p.UD,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: p.x6,
                                                        children: (0, r.jsx)(s.Button, {
                                                            variant: "primary",
                                                            onClick: j,
                                                            text: f.intl.string(f.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(s.Text, {
                                                        variant: "text-xs/normal",
                                                        className: p.uK,
                                                        children: f.intl.format(f.t.khjqdH, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != y.footer && "" !== y.footer
                        ? (0, r.jsxs)("div", {
                              className: p.qr,
                              children: [
                                  (0, r.jsx)(s.mir, {
                                      size: "xs",
                                      color: i.A.unsafe_rawColors.PRIMARY_400.css,
                                      className: p.Kk,
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      children: y.footer,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
