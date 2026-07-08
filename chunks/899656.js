i.d(t, { r: () => c, i: () => l, t: () => u, a: () => s, n: () => d, o: () => o });
var r = i(248702),
    n = i(295985);
function o(e, t = {}) {
    let { autoLoad: i = !0, manageLifecycle: n = !0 } = t,
        [a] = (0, r.p)(e),
        [s, l] = (0, r.p)(() => a.getState());
    return (
        (0, r._)(() => {
            let e = a.subscribe(l);
            return (
                n && i && a.load && a.load(),
                () => {
                    e(), n && a.stop?.();
                }
            );
        }, [a, i, n]),
        [s, a]
    );
}
i(209688), i(588233);
var a = null;
function s() {
    let [e, t] = (0, r.p)(!1);
    return (
        (0, r._)(() => {
            let e = (a ||= (0, n.lh)(new n._S(), (0, n.l3)()));
            return (
                t(e.isLandscapeMobile),
                e.subscribe((e) => {
                    (0, r.s)(() => t(e));
                })
            );
        }, []),
        { isLandscapeMobile: e }
    );
}
function l(e, t) {
    let [i, n] = (0, r.p)(!1);
    return (
        (0, r._)(() => {
            let t = e.current;
            if (!t) return;
            let i = () => n(t.scrollHeight > t.clientHeight);
            i();
            let r = new ResizeObserver(i);
            return r.observe(t), () => r.disconnect();
        }, [t, e]),
        i
    );
}
function c() {
    return (function (e) {
        let [t, i] = (0, r.p)(() => "u" > typeof window && window.matchMedia(e).matches);
        return (
            (0, r._)(() => {
                if (typeof window > "u") return;
                let t = window.matchMedia(e),
                    r = () => i(t.matches);
                return t.addEventListener("change", r), () => t.removeEventListener("change", r);
            }, [e]),
            t
        );
    })("(max-width: 767px)");
}
function d(e, t) {
    (0, r._)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t]);
}
function u(e, t) {
    (0, r._)(() => {
        let i = e.current;
        if (!i || typeof ResizeObserver > "u") return void t();
        t();
        let r = new ResizeObserver(t);
        return r.observe(i), () => r.disconnect();
    }, [e, t]);
}
