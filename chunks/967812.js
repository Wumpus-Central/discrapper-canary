"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(795816),
    s = n(170148),
    a = n(641703);
function o(e, t) {
    let n = (0, s.z)(),
        o = (0, a.A)(t),
        l = (null != e && "" !== e) || o;
    return (
        i.useEffect(() => {
            l && n && (0, r.LV)({ guildId: e });
        }, [e, n, l]),
        l && n
    );
}
