var i = n(67867),
    r = n(414629),
    a = n(732116).CONSTRUCTOR,
    s = n(197859),
    o = n(294377),
    l = n(735471),
    u = n(691244),
    c = s && s.prototype;
if (
    (i(
        {
            target: 'Promise',
            proto: !0,
            forced: a,
            real: !0
        },
        {
            catch: function (e) {
                return this.then(void 0, e);
            }
        }
    ),
    !r && l(s))
) {
    var d = o('Promise').prototype.catch;
    c.catch !== d && u(c, 'catch', d, { unsafe: !0 });
}
