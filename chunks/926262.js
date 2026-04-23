n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(827734),
    s = n(462887),
    r = n(305866),
    o = n(834730),
    c = n(821609),
    d = n(885574),
    u = n(58149),
    h = n(544028),
    m = n(954571),
    A = n(652215),
    g = n(985018),
    _ = n(636801),
    p = n(992595);
function f(e) {
    let { onClose: t, onConfirm: f, onCancel: E, channel: C, analyticsType: x, popoutText: S, animation: I } = e;
    l.useEffect(() => {
        m.default.track(A.HAw.OPEN_POPOUT, { type: x, ...(0, u.dI)(C) });
    }, [x, C]);
    let v = l.useCallback(() => {
            f?.(), t();
        }, [f, t]),
        N = l.useCallback(() => {
            E?.(), t();
        }, [E, t]),
        T = l.useRef(null);
    return (
        l.useEffect(() => {
            let e,
                t = h.A.theme,
                i = !1;
            return (
                null != I &&
                    (async () => {
                        let [{ default: l }, a] = await Promise.all([
                            n.e("96382").then(n.t.bind(n, 883885, 23)),
                            (0, s.M)(t) ? I.dark() : I.light(),
                        ]);
                        i ||
                            null == T.current ||
                            (e = l.loadAnimation({
                                container: T.current,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: a,
                            }));
                    })(),
                () => {
                    (i = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [I]),
        (0, i.jsx)(r.l, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, i.jsxs)("form", {
                className: _.$,
                onSubmit: v,
                children: [
                    (0, i.jsxs)("div", {
                        className: _.rf,
                        children: [
                            null != I && (0, i.jsx)("div", { className: _.lY, ref: T }),
                            (0, i.jsxs)("div", {
                                className: _.Qs,
                                children: [
                                    (0, i.jsx)("div", { className: _.wx, children: g.intl.string(g.t.mY3Y38) }),
                                    (0, i.jsx)(o.E, {
                                        id: "content-warning-popout-label",
                                        className: p.PT,
                                        variant: "text-sm/normal",
                                        children: S.body,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: _._o,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: _.UD,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: _.x6,
                                                        children: (0, i.jsx)(c.$, {
                                                            variant: "secondary",
                                                            onClick: N,
                                                            text: g.intl.string(g.t.fsBWmS),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: _.uK,
                                                        children: g.intl.format(g.t["0LzVPZ"], {}),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: _.UD,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: _.x6,
                                                        children: (0, i.jsx)(c.$, {
                                                            variant: "primary",
                                                            onClick: v,
                                                            text: g.intl.string(g.t.KJnHq3),
                                                            autoFocus: !0,
                                                        }),
                                                    }),
                                                    (0, i.jsx)(o.E, {
                                                        variant: "text-xs/normal",
                                                        className: _.uK,
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
                    null != S.footer && "" !== S.footer
                        ? (0, i.jsxs)("div", {
                              className: _.qr,
                              children: [
                                  (0, i.jsx)(d.m, {
                                      size: "xs",
                                      color: a.A.unsafe_rawColors.PRIMARY_400.css,
                                      className: _.Kk,
                                  }),
                                  (0, i.jsx)(o.E, { variant: "text-sm/normal", children: S.footer }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
