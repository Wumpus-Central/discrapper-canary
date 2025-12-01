n.d(t, { f: () => c }), n(388685);
var r = n(243814),
    i = n(616022),
    l = n(509212),
    a = n(996106),
    s = n(452426),
    o = n(981631);
let c = {
    [o.zMe.QUEST_ENROLLMENT_STATUS_UPDATE]: {
        scope: r.x.IDENTIFY,
        validation: (e) => (0, s.Z)(e).required().keys({ quest_id: e.string().required() }),
        handler: function (e) {
            let {
                    args: { quest_id: t },
                    socket: n,
                } = e,
                r = i.Z.getQuest(t),
                s = (0, l.nY)(r);
            if (null == r || null == s || s !== n.application.id)
                throw new a.Z({ errorCode: o.lTL.INVALID_COMMAND }, "Quest not found: ".concat(t));
        },
    },
};
