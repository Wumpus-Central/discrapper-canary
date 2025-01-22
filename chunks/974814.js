var i = r(67867),
    a = r(414629),
    o = r(732116).CONSTRUCTOR,
    s = r(197859),
    l = r(294377),
    u = r(735471),
    c = r(691244),
    d = s && s.prototype;
if (
    (i(
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
    !a && u(s))
) {
    var f = l('Promise').prototype.catch;
    d.catch !== f && c(d, 'catch', f, { unsafe: !0 });
}
