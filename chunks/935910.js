r.d(t, { Z: () => l });
var n = r(245315),
    i = r(368859);
function l(e) {
    var t;
    return !((0, n.cp)(e) || ((0, i.Z)(e) && (null == (t = e.messageReference) ? void 0 : t.guild_id) != null)) && (null == e.interaction || 'SENDING' !== e.state);
}
