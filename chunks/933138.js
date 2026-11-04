var r = n(272469),
    i = n(690094),
    o = n(978862),
    a = n(873326);
function s() {
    "console" in o.O &&
        r.Ow.forEach(function (e) {
            e in o.O.console &&
                (0, i.GS)(o.O.console, e, function (t) {
                    return (
                        (r.Z9[e] = t),
                        function (...t) {
                            (0, a.aj)("console", { args: t, level: e });
                            let n = r.Z9[e];
                            n && n.apply(o.O.console, t);
                        }
                    );
                });
        });
}
n.d(
    t,
    {},
    {
        P: function (e) {
            let t = "console";
            ((0, a.s5)(t, e), (0, a.AS)(t, s));
        },
    },
);
