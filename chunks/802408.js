n.d(t, { Z: () => d }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(907862),
    s = n(780384),
    l = n(410030),
    c = n(607070),
    u = n(921944);
function d(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: d, config: f, children: p } = e,
        _ = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        m = (0, l.ZP)(),
        h = i.useRef(null),
        g = i.useRef(null),
        [E, b] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = h.current,
                    t = g.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                b(n.left + n.width / 2 - (r.left + r.width / 2));
            },
            t = new ResizeObserver(e),
            n = h.current,
            r = g.current;
        return null != n && t.observe(n), null != r && (t.observe(r), e()), () => t.disconnect();
    }, []);
    let y = {
            text: f.cta(),
            onClick: () => {
                n(), t(), d(u.L.TAKE_ACTION);
            },
        },
        O = () => {
            t(), d(u.L.USER_DISMISS);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: h,
                children: p,
            }),
            (0, r.jsx)(o.Mb, {
                targetElementRef: h,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: f.title(),
                body: f.description(),
                assetUrl: f.getImageUrl((0, s.wj)(m), _),
                action: y,
                caretConfig: {
                    align: "custom",
                    customOffset: E,
                },
                onRequestClose: O,
                popoverRef: g,
            }),
        ],
    });
}
