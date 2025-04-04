n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(479412),
    a = n(736622),
    s = n(481060),
    l = n(40851),
    c = n(912811);
function u(e) {
    let { buffer: t, autoplay: n = !0, className: o, fit: l, alignment: u, style: f, eventTargetRef: _ } = e,
        p = i.useContext(s.Sfi),
        h = d(),
        [m, g] = i.useState(void 0),
        { rive: E, RiveComponent: b } = (0, a.useRive)({
            eventTarget: null == _ ? void 0 : _.current,
            buffer: t,
            autoplay: n,
            stateMachines: m,
            layout: new a.Layout({
                fit: null != l ? c.L[l] : a.Fit.Cover,
                alignment: null != u ? c.E[u] : a.Alignment.Center
            })
        });
    i.useEffect(() => {
        null != E &&
            null == m &&
            (g(E.stateMachineNames),
            E.reset({
                stateMachines: E.stateMachineNames,
                autoplay: n
            }),
            E.setupRiveListeners());
    }, [E, n, m]);
    let y = i.useRef(0);
    i.useEffect(() => {
        if (null == E) return;
        E.play();
        let e = (t) => {
            null != t.data && 'number' == typeof t.data && ((y.current = t.data), t.data > 0 && (p.reducedMotion.enabled && E.isPlaying && E.pause(), E.off(a.EventType.Advance, e)));
        };
        return (
            E.on(a.EventType.Advance, e),
            () => {
                E.off(a.EventType.Advance, e);
            }
        );
    }, [E, p.reducedMotion.enabled]);
    let v = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != E)
                return (
                    !h && v.current && E.isPlaying && y.current > 0 ? E.pause() : h && !E.isPlaying && v.current && E.play(),
                    () => {
                        null != E && h && (v.current = null != E.frameRequestId);
                    }
                );
        }, [E, h]),
        (0, r.jsx)(b, {
            className: o,
            style: f
        })
    );
}
function d() {
    let { renderWindow: e } = i.useContext(l.ZP),
        [t, n] = i.useState(e.document.hasFocus());
    return (
        i.useEffect(() => {
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener('focus', t),
                e.addEventListener('blur', r),
                () => {
                    e.removeEventListener('focus', t), e.removeEventListener('blur', r);
                }
            );
        }, [e]),
        t
    );
}
a.RuntimeLoader.setWasmUrl(o);
