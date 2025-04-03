r.d(t, { q: () => c }), r(653041);
var n = r(442837),
    s = r(146085),
    l = r(984933),
    i = r(496675);
function c(e) {
    var t;
    let r = null != (t = null == e ? void 0 : e.id) ? t : null;
    return (0, n.Wu)(
        [l.ZP, i.Z],
        () =>
            l.ZP.getChannels(r)[l.Zb].reduce((e, t) => {
                let r = t.channel;
                return (
                    r.isGuildStageVoice() &&
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                            return !!e.isGuildStageVoice() && t.can(s.yP, e);
                        })(t.channel, i.Z) &&
                        e.push(r),
                    e
                );
            }, []),
        [r]
    );
}
