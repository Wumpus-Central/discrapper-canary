"use strict";
n.d(t, { A: () => l });
var i = n(582128),
    r = n(795816),
    a = n(170148),
    s = n(641703);
function l(e, t) {
    let n = (0, a.z)(),
        l = (0, s.A)(t),
        o = (null != e && "" !== e) || l;
    return (
        i.useEffect(() => {
            o && n && (0, r.LV)({ guildId: e });
        }, [e, n, o]),
        o && n
    );
}
