n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    r = n(314897),
    l = n(131951),
    a = n(979651);
function s(e) {
    return (0, i.cj)(
        [a.Z, l.Z, r.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    o = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
                };
            })(e, a.Z, l.Z, r.default),
        [e]
    );
}
