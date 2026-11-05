l(582128);
var r = l(318254),
    n = l(278416),
    u = l(403581);
let a = { ORBS: r.C, TAG: n.TagIcon, NITRO: u.t },
    i = "{value}";
l.d(
    e,
    {},
    {
        Ew: function (t, e) {
            return null == t ? null : t.includes(i) ? (null == e ? null : t.replaceAll(i, String(e))) : t;
        },
        LZ: function (t) {
            return null != t ? a[t] : void 0;
        },
        RD: function (t) {
            return null != t ? new Date(t) : null;
        },
    },
);
