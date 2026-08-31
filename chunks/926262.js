n.d(t, { A: () => C });
var l = n(477900),
    i = n(582128),
    s = n(661531),
    a = n(462887),
    r = n(305866),
    o = n(834730),
    c = n(821609),
    d = n(885574),
    u = n(95561),
    h = n(363195),
    m = n(174459),
    g = n(652215),
    A = n(375708),
    p = n(548426),
    f = n(165648);
function C(e) {
    let { onClose: t, onConfirm: C, onCancel: x, channel: E, analyticsType: S, popoutText: I, animation: _ } = e;
    i.useEffect(() => {
        m.default.track(g.HAw.OPEN_POPOUT, { type: S, ...(0, u.dI)(E) });
    }, [S, E]);
    let j = i.useCallback(() => {
            C?.(), t();
        }, [C, t]),
        y = i.useCallback(() => {
            x?.(), t();
        }, [x, t]),
        b = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                t = h.A.theme,
                l = !1;
            return (
                null != _ &&
                    (async () => {
                        let [{ default: i }, s] = await Promise.all([
                            n.e("996382").then(n.t.bind(n, 883885, 23)),
                            (0, a.M)(t) ? _.dark() : _.light(),
                        ]);
                        l ||
                            null == b.current ||
                            (e = i.loadAnimation({
                                container: b.current,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: s,
                            }));
                    })(),
                () => {
                    (l = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [_]),
        (0, l.jsx)(r.l, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, l.jsxs)("form", {
                className: p.$,
                onSubmit: j,
                children: [
                    (0, l.jsxs)("div", {
                        className: p.rf,
                        children: [
                            null != _ && (0, l.jsx)("div", { className: p.lY, ref: b }),
                            (0, l.jsxs)("div", {
                                className: p.Qs,
                                children: [
                                    (0, l.jsx)("div", { className: p.wx, children: A.intl.string(A.t.mY3Y38) }),
                                    (0, l.jsx)(o.E, {
                                        id: "content-warning-popout-label",
                                        className: f.PT,
                                        variant: "text-sm/normal",
                                        children: I.body,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: p._o,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: p.UD,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: p.x6,
                                                        children: (0, l.jsx)(c.$, {
                                                            variant: "secondary",
                                                            onClick: y,
                                                            text: A.intl.string(A.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, l.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: p.uK,
                                                        children: A.intl.format(A.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: p.UD,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: p.x6,
                                                        children: (0, l.jsx)(c.$, {
                                                            variant: "primary",
                                                            onClick: j,
                                                            text: A.intl.string(A.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, l.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: p.uK,
                                                        children: A.intl.format(A.t.khjqdH, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != I.footer && "" !== I.footer
                        ? (0, l.jsxs)("div", {
                              className: p.qr,
                              children: [
                                  (0, l.jsx)(d.CircleInformationIcon, {
                                      size: "xs",
                                      color: s.A.unsafe_rawColors.PRIMARY_400.css,
                                      className: p.Kk,
                                  }),
                                  (0, l.jsx)(o.E, { variant: "text-sm/normal", children: I.footer }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
