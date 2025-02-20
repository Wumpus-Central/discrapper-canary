var r = n(67867),
    i = n(414629),
    o = n(732116).CONSTRUCTOR,
    a = n(197859),
    s = n(294377),
    l = n(735471),
    c = n(691244),
    u = a && a.prototype;
if (
    (r(
        {
            target: 'Promise',
            proto: !0,
            forced: o,
            real: !0
        },
        {
            catch: function (e) {
                return this.then(void 0, e);
            }
        }
    ),
    !i && l(a))
) {
    var d = s('Promise').prototype.catch;
    u.catch !== d && c(u, 'catch', d, { unsafe: !0 });
}
