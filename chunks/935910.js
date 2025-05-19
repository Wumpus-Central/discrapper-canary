n.d(t, { Z: () => l });
var r = n(245315),
    i = n(368859);
function l(e) {
    var t;
    return !((0, r.cp)(e) || ((0, i.Z)(e) && (null == (t = e.messageReference) ? void 0 : t.guild_id) != null)) && (null == e.interaction || 'SENDING' !== e.state);
}
