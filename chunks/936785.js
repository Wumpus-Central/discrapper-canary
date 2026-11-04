l(582128);
var n = l(318254),
    r = l(278416),
    u = l(403581);
let o = { ORBS: n.C, TAG: r.TagIcon, NITRO: u.t },
    i = "{value}";
l.d(
    e,
    {},
    {
        Ew: function (t, e) {
            return null == t ? null : t.includes(i) ? (null == e ? null : t.replaceAll(i, String(e))) : t;
        },
        LZ: function (t) {
            return null != t ? o[t] : void 0;
        },
        RD: function (t) {
            return null != t ? new Date(t) : null;
        },
    },
);
