n.d(t, { Hr: () => s }), n(592125);
var i = n(650774),
    r = n(981631);
let a = 10000;
function s(e) {
    var t;
    let n = null !== (t = i.Z.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
    return null != e && e.type !== r.d4z.DM && e.type !== r.d4z.GROUP_DM && n >= a;
}
