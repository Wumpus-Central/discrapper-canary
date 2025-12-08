n.d(t, { q: () => s }), n(539854);
var l = n(442837),
    r = n(146085),
    i = n(984933),
    a = n(496675);
function s(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : null;
    return (0, l.Wu)(
        [i.ZP, a.Z],
        () =>
            i.ZP.getChannels(n)[i.Zb].reduce((e, t) => {
                let n = t.channel;
                return (
                    n.isGuildStageVoice() &&
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
                            return !!e.isGuildStageVoice() && t.can(r.yP, e);
                        })(t.channel, a.Z) &&
                        e.push(n),
                    e
                );
            }, []),
        [n],
    );
}
