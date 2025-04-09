r.d(t, { Z: () => i });
var n = r(245315),
    l = r(368859);
function i(e) {
    var t;
    return !((0, n.cp)(e) || ((0, l.Z)(e) && (null == (t = e.messageReference) ? void 0 : t.guild_id) != null)) && (null == e.interaction || 'SENDING' !== e.state);
}
