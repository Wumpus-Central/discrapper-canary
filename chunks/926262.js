var l = n(477900),
    i = n(582128),
    s = n(646514),
    a = n(462887),
    r = n(305866),
    o = n(834730),
    c = n(821609),
    d = n(885574),
    u = n(149468),
    h = n(413599),
    m = n(129230),
    g = n(652215),
    p = n(792996),
    A = n(548426),
    f = n(165648);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                onClose: t,
                onConfirm: C,
                onCancel: E,
                channel: x,
                analyticsType: I,
                popoutText: S,
                animation: y,
            } = e;
            i.useEffect(() => {
                m.default.track(g.HAw.OPEN_POPOUT, { type: I, ...(0, u.dI)(x) });
            }, [I, x]);
            let b = i.useCallback(() => {
                    (C?.(), t());
                }, [C, t]),
                _ = i.useCallback(() => {
                    (E?.(), t());
                }, [E, t]),
                j = i.useRef(null);
            return (
                i.useEffect(() => {
                    let e,
                        t = h.A.theme,
                        l = !1;
                    return (
                        null != y &&
                            (async () => {
                                let [{ default: i }, s] = await Promise.all([
                                    n.e(996382).then(n.t.bind(n, 883885, 23)),
                                    (0, a.M)(t) ? y.dark() : y.light(),
                                ]);
                                l ||
                                    null == j.current ||
                                    (e = i.loadAnimation({
                                        container: j.current,
                                        renderer: "svg",
                                        loop: !0,
                                        autoplay: !0,
                                        animationData: s,
                                    }));
                            })(),
                        () => {
                            ((l = !0), null != e && (e.destroy(), (e = void 0)));
                        }
                    );
                }, [y]),
                (0, l.jsx)(r.l, {
                    "aria-labelledby": "content-warning-popout-label",
                    children: (0, l.jsxs)("form", {
                        className: A.$,
                        onSubmit: b,
                        children: [
                            (0, l.jsxs)("div", {
                                className: A.rf,
                                children: [
                                    null != y && (0, l.jsx)("div", { className: A.lY, ref: j }),
                                    (0, l.jsxs)("div", {
                                        className: A.Qs,
                                        children: [
                                            (0, l.jsx)("div", { className: A.wx, children: p.intl.string(p.t.mY3Y38) }),
                                            (0, l.jsx)(o.E, {
                                                id: "content-warning-popout-label",
                                                className: f.PT,
                                                variant: "body-sm/normal",
                                                children: S.body,
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
                                                                    onClick: _,
                                                                    text: p.intl.string(p.t.fsBWmS),
                                                                }),
                                                            }),
                                                            (0, l.jsx)(o.E, {
                                                                variant: "body-xs/normal",
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
                                                                    onClick: b,
                                                                    text: p.intl.string(p.t.KJnHq3),
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                            (0, l.jsx)(o.E, {
                                                                variant: "body-xs/normal",
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
                            null != S.footer && "" !== S.footer
                                ? (0, l.jsxs)("div", {
                                      className: A.qr,
                                      children: [
                                          (0, l.jsx)(d.CircleInformationIcon, {
                                              size: "xs",
                                              color: s.A.unsafe_rawColors.PRIMARY_400.css,
                                              className: A.Kk,
                                          }),
                                          (0, l.jsx)(o.E, { variant: "body-sm/normal", children: S.footer }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                })
            );
        },
    },
);
