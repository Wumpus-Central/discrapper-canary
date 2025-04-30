n.d(t, { Z: () => o });
var r = n(237617),
    i = n(493773);
function o(e) {
    let t = (0, r.Z)(e);
    (0, i.ZP)(() => {
        function e() {
            var r;
            null == (r = t.current) || r.call(t), (n = requestAnimationFrame(e));
        }
        let n = requestAnimationFrame(e);
        return () => cancelAnimationFrame(n);
    });
}
