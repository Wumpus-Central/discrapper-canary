l(582128);
var r = l(318254),
    n = l(278416),
    u = l(403581);
let o = { ORBS: r.OrbsIcon, TAG: n.TagIcon, NITRO: u.NitroWheelIcon },
    a = "{value}";
l.d(
    e,
    {},
    {
        Ew: function (t, e) {
            return null == t ? null : t.includes(a) ? (null == e ? null : t.replaceAll(a, String(e))) : t;
        },
        LZ: function (t) {
            return null != t ? o[t] : void 0;
        },
        RD: function (t) {
            return null != t ? new Date(t) : null;
        },
    },
);
