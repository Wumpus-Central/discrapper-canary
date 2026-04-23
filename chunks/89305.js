n.d(t, { A: () => l });
var r = n(64700),
    i = n(621466);
function l(e) {
    let { targetRef: t, onShouldClose: n, topThreshold: l = 40, bottomThreshold: s = 60, enabled: a = !0 } = e;
    r.useEffect(() => {
        if (!a || t?.current == null) return;
        let e = null,
            r = (r) => {
                if (t?.current == null || !(0, i.vq)(r.target, HTMLElement)) return;
                let a = r.target;
                if (!a.contains(t.current)) return;
                let o = a.scrollTop;
                if (null === e) {
                    e = o;
                    return;
                }
                let d = o - e,
                    u = Math.abs(d);
                ((d < 0 && u > l) || (d > 0 && u > s)) && n();
            };
        return (
            document.addEventListener("scroll", r, { passive: !0, capture: !0 }),
            () => {
                document.removeEventListener("scroll", r, { capture: !0 });
            }
        );
    }, [a, t, n, l, s]);
}
