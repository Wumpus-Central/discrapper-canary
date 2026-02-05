n.d(t, { A: () => i });
var r = n(64700),
    l = n(621466);
function i(e) {
    let { targetRef: t, onShouldClose: n, topThreshold: i = 40, bottomThreshold: s = 60, enabled: o = !0 } = e;
    r.useEffect(() => {
        if (!o || t?.current == null) return;
        let e = null,
            r = (r) => {
                if (t?.current == null || !(0, l.vq)(r.target, HTMLElement)) return;
                let o = r.target;
                if (!o.contains(t.current)) return;
                let a = o.scrollTop;
                if (null === e) {
                    e = a;
                    return;
                }
                let u = a - e,
                    d = Math.abs(u);
                ((u < 0 && d > i) || (u > 0 && d > s)) && n();
            };
        return (
            document.addEventListener("scroll", r, { passive: !0, capture: !0 }),
            () => {
                document.removeEventListener("scroll", r, { capture: !0 });
            }
        );
    }, [o, t, n, i, s]);
}
