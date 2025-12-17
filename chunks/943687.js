n.d(t, { f: () => c }), n(388685);
var r = n(243814),
    i = n(616022),
    l = n(254579),
    a = n(996106),
    o = n(452426),
    s = n(981631);
let c = {
    [s.zMe.QUEST_ENROLLMENT_STATUS_UPDATE]: {
        scope: r.x.IDENTIFY,
        validation: (e) => (0, o.Z)(e).required().keys({ quest_id: e.string().required() }),
        handler: function (e) {
            let {
                    args: { quest_id: t },
                    socket: n,
                } = e,
                r = i.Z.getQuest(t),
                o = (0, l.nY)(r);
            if (null == r || null == o || o !== n.application.id)
                throw new a.Z({ errorCode: s.lTL.INVALID_COMMAND }, "Quest not found: ".concat(t));
        },
    },
};
