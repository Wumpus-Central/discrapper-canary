n.d(t, { A: () => C });
var l = n(627968),
    i = n(64700),
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
    p = n(375708),
    A = n(636801),
    f = n(992595);
function C(e) {
    let { onClose: t, onConfirm: C, onCancel: x, channel: E, analyticsType: S, popoutText: _, animation: I } = e;
    i.useEffect(() => {
        m.default.track(g.HAw.OPEN_POPOUT, { type: S, ...(0, u.dI)(E) });
    }, [S, E]);
    let j = i.useCallback(() => {
            C?.(), t();
        }, [C, t]),
        y = i.useCallback(() => {
            x?.(), t();
        }, [x, t]),
        N = i.useRef(null);
    return (
        i.useEffect(() => {
            let e,
                t = h.A.theme,
                l = !1;
            return (
                null != I &&
                    (async () => {
                        let [{ default: i }, s] = await Promise.all([
                            n.e("96382").then(n.t.bind(n, 883885, 23)),
                            (0, a.M)(t) ? I.dark() : I.light(),
                        ]);
                        l ||
                            null == N.current ||
                            (e = i.loadAnimation({
                                container: N.current,
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
        }, [I]),
        (0, l.jsx)(r.l, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, l.jsxs)("form", {
                className: A.$,
                onSubmit: j,
                children: [
                    (0, l.jsxs)("div", {
                        className: A.rf,
                        children: [
                            null != I && (0, l.jsx)("div", { className: A.lY, ref: N }),
                            (0, l.jsxs)("div", {
                                className: A.Qs,
                                children: [
                                    (0, l.jsx)("div", { className: A.wx, children: p.intl.string(p.t.mY3Y38) }),
                                    (0, l.jsx)(o.E, {
                                        id: "content-warning-popout-label",
                                        className: f.PT,
                                        variant: "text-sm/normal",
                                        children: _.body,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: A._o,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: A.UD,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: A.x6,
                                                        children: (0, l.jsx)(c.$, {
                                                            variant: "secondary",
                                                            onClick: y,
                                                            text: p.intl.string(p.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, l.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: A.uK,
                                                        children: p.intl.format(p.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: A.UD,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: A.x6,
                                                        children: (0, l.jsx)(c.$, {
                                                            variant: "primary",
                                                            onClick: j,
                                                            text: p.intl.string(p.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, l.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: A.uK,
                                                        children: p.intl.format(p.t.khjqdH, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != _.footer && "" !== _.footer
                        ? (0, l.jsxs)("div", {
                              className: A.qr,
                              children: [
                                  (0, l.jsx)(d.m, {
                                      size: "xs",
                                      color: s.A.unsafe_rawColors.PRIMARY_400.css,
                                      className: A.Kk,
                                  }),
                                  (0, l.jsx)(o.E, { variant: "text-sm/normal", children: _.footer }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
