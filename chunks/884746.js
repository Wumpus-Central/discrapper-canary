r.d(t, { q: () => c }), r(539854);
var n = r(442837),
    l = r(146085),
    s = r(984933),
    i = r(496675);
function c(e) {
    var t;
    let r = null != (t = null == e ? void 0 : e.id) ? t : null;
    return (0, n.Wu)(
        [s.ZP, i.Z],
        () =>
            s.ZP.getChannels(r)[s.Zb].reduce((e, t) => {
                let r = t.channel;
                return (
                    r.isGuildStageVoice() &&
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                            return !!e.isGuildStageVoice() && t.can(l.yP, e);
                        })(t.channel, i.Z) &&
                        e.push(r),
                    e
                );
            }, []),
        [r]
    );
}
