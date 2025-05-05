n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(260630),
    o = n(898517),
    s = n(481060),
    l = n(40851),
    c = n(912811);
function u(e) {
    let { buffer: t, autoplay: n = !0, className: a, fit: l, alignment: u, style: f, eventTargetRef: _ } = e,
        p = i.useContext(s.Sfi),
        h = d(),
        [m, g] = i.useState(void 0),
        { rive: E, RiveComponent: b } = (0, o.useRive)({
            eventTarget: null == _ ? void 0 : _.current,
            buffer: t,
            autoplay: n,
            stateMachines: m,
            layout: new o.Layout({
                fit: null != l ? c.L[l] : o.Fit.Cover,
                alignment: null != u ? c.E[u] : o.Alignment.Center
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
            null != t.data && 'number' == typeof t.data && ((y.current = t.data), t.data > 0 && (p.reducedMotion.enabled && E.isPlaying && E.pause(), E.off(o.EventType.Advance, e)));
        };
        return (
            E.on(o.EventType.Advance, e),
            () => {
                E.off(o.EventType.Advance, e);
            }
        );
    }, [E, p.reducedMotion.enabled]);
    let O = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != E)
                return (
                    !h && O.current && E.isPlaying && y.current > 0 ? E.pause() : h && !E.isPlaying && O.current && E.play(),
                    () => {
                        null != E && h && (O.current = null != E.frameRequestId);
                    }
                );
        }, [E, h]),
        (0, r.jsx)(b, {
            className: a,
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
o.RuntimeLoader.setWasmUrl(a);
