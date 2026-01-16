n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(907862),
    o = n(688766),
    s = n(921944),
    l = n(388032);
function c(e) {
    var t, n;
    let { onComplete: c, onCheckItOutClick: u, markAsDismissed: d, coachmarkConfig: f, children: p } = e,
        _ = (0, o.Y)(null == f ? void 0 : f.asset),
        h = i.useRef(null),
        m = i.useRef(null),
        [g, E] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = h.current,
                    t = m.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                E(n.left + n.width / 2 - (r.left + r.width / 2));
            },
            t = new ResizeObserver(e),
            n = h.current,
            r = m.current;
        return null != n && t.observe(n), null != r && (t.observe(r), e()), () => t.disconnect();
    }, []);
    let b = {
            text: l.intl.string(l.t.RzWDqY),
            onClick: () => {
                u(), c(), d(s.L.TAKE_ACTION);
            },
        },
        y = () => {
            c(), d(s.L.USER_DISMISS);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: h,
                children: p,
            }),
            (0, r.jsx)(a.Mb, {
                targetElementRef: h,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: null != (t = null == f ? void 0 : f.header) ? t : "",
                body: null != (n = null == f ? void 0 : f.body) ? n : "",
                assetUrl: null != _ ? _ : "",
                action: b,
                caretConfig: {
                    align: "custom",
                    customOffset: g,
                },
                onRequestClose: y,
                popoverRef: m,
            }),
        ],
    });
}
