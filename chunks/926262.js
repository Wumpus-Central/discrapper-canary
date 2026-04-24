n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(661531),
    a = n(462887),
    r = n(305866),
    o = n(834730),
    c = n(821609),
    d = n(885574),
    u = n(58149),
    h = n(363195),
    m = n(954571),
    p = n(652215),
    g = n(985018),
    A = n(636801),
    f = n(992595);
function _(e) {
    let { onClose: t, onConfirm: _, onCancel: E, channel: C, analyticsType: x, popoutText: b, animation: S } = e;
    l.useEffect(() => {
        m.default.track(p.HAw.OPEN_POPOUT, { type: x, ...(0, u.dI)(C) });
    }, [x, C]);
    let I = l.useCallback(() => {
            _?.(), t();
        }, [_, t]),
        y = l.useCallback(() => {
            E?.(), t();
        }, [E, t]),
        T = l.useRef(null);
    return (
        l.useEffect(() => {
            let e,
                t = h.A.theme,
                i = !1;
            return (
                null != S &&
                    (async () => {
                        let [{ default: l }, s] = await Promise.all([
                            n.e("96382").then(n.t.bind(n, 883885, 23)),
                            (0, a.M)(t) ? S.dark() : S.light(),
                        ]);
                        i ||
                            null == T.current ||
                            (e = l.loadAnimation({
                                container: T.current,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: s,
                            }));
                    })(),
                () => {
                    (i = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [S]),
        (0, i.jsx)(r.l, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, i.jsxs)("form", {
                className: A.$,
                onSubmit: I,
                children: [
                    (0, i.jsxs)("div", {
                        className: A.rf,
                        children: [
                            null != S && (0, i.jsx)("div", { className: A.lY, ref: T }),
                            (0, i.jsxs)("div", {
                                className: A.Qs,
                                children: [
                                    (0, i.jsx)("div", { className: A.wx, children: g.intl.string(g.t.mY3Y38) }),
                                    (0, i.jsx)(o.E, {
                                        id: "content-warning-popout-label",
                                        className: f.PT,
                                        variant: "text-sm/normal",
                                        children: b.body,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: A._o,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: A.UD,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: A.x6,
                                                        children: (0, i.jsx)(c.$, {
                                                            variant: "secondary",
                                                            onClick: y,
                                                            text: g.intl.string(g.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: A.uK,
                                                        children: g.intl.format(g.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: A.UD,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: A.x6,
                                                        children: (0, i.jsx)(c.$, {
                                                            variant: "primary",
                                                            onClick: I,
                                                            text: g.intl.string(g.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, i.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: A.uK,
                                                        children: g.intl.format(g.t.khjqdH, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != b.footer && "" !== b.footer
                        ? (0, i.jsxs)("div", {
                              className: A.qr,
                              children: [
                                  (0, i.jsx)(d.m, {
                                      size: "xs",
                                      color: s.A.unsafe_rawColors.PRIMARY_400.css,
                                      className: A.Kk,
                                  }),
                                  (0, i.jsx)(o.E, { variant: "text-sm/normal", children: b.footer }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
