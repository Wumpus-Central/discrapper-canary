n.d(t, { Z: () => a });
var i = n(237617),
    r = n(493773);
function a(e) {
    let t = (0, i.Z)(e);
    (0, r.ZP)(() => {
        function e() {
            var i;
            null === (i = t.current) || void 0 === i || i.call(t), (n = requestAnimationFrame(e));
        }
        let n = requestAnimationFrame(e);
        return () => cancelAnimationFrame(n);
    });
}
