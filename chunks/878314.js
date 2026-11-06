var n = s(477900),
    a = s(582128),
    i = s(559106),
    r = s(834730),
    l = s(999470),
    c = s(906471);
s.d(
    t,
    {},
    {
        A: function (e) {
            let { icon: t, message: s, onClick: o, autoFocus: d, isSlideReady: u } = e,
                m = a.useRef(null);
            return (
                a.useEffect(() => {
                    !0 === d && !0 === u && m.current?.focus({ preventScroll: !0 });
                }, [d, u]),
                (0, n.jsx)(i.vN, {
                    children: (0, n.jsxs)("button", {
                        ref: m,
                        className: l.kL,
                        onClick: o,
                        autoFocus: null == u && d,
                        children: [
                            (0, n.jsx)("img", { className: l.Kk, alt: "", src: t }),
                            (0, n.jsx)(r.E, { className: l.Qq, variant: "body-md/semibold", children: s }),
                            (0, n.jsx)("img", { className: l.UE, alt: "", src: c }),
                        ],
                    }),
                })
            );
        },
    },
);
