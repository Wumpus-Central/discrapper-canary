n.d(t, { f: () => o }), n(388685);
var r = n(243814),
    i = n(569984),
    l = n(996106),
    a = n(452426),
    s = n(981631);
let o = {
    [s.zMe.QUEST_ENROLLMENT_STATUS_UPDATE]: {
        scope: r.x.IDENTIFY,
        validation: (e) => (0, a.Z)(e).required().keys({ quest_id: e.string().required() }),
        handler: function (e) {
            let {
                    args: { quest_id: t },
                    socket: n,
                } = e,
                r = i.Z.getQuest(t);
            if (null == r || r.config.application.id !== n.application.id)
                throw new l.Z({ errorCode: s.lTL.INVALID_COMMAND }, "Quest not found: ".concat(t));
        },
    },
};
