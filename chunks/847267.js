"use strict";
n.d(t, {
    A: () =>
        function e(t) {
            return ["html", "body", "#document"].indexOf((0, s.A)(t)) >= 0
                ? t.ownerDocument.body
                : (0, a.sb)(t) && (0, i.A)(t)
                  ? t
                  : e((0, r.A)(t));
        },
});
var r = n(543894),
    i = n(324049),
    s = n(619881),
    a = n(444746);
