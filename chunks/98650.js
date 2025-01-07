r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(237617),
    a = r(493773);
function s(e) {
    let n = (0, i.Z)(e);
    (0, a.Z)(() => {
        function e() {
            var i;
            null === (i = n.current) || void 0 === i || i.call(n), (r = requestAnimationFrame(e));
        }
        let r = requestAnimationFrame(e);
        return () => cancelAnimationFrame(r);
    });
}
