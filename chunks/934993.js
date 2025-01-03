n(47120);
var i = n(570140),
    r = n(996106),
    l = n(452426),
    a = n(186901),
    s = n(981631);
t.Z = {
    [s.Etm.SET_CONFIG]: {
        scope: a.wE,
        validation: (e) => (0, l.Z)(e).required().keys({ use_interactive_pip: e.boolean() }),
        handler(e) {
            let {
                socket: t,
                args: { use_interactive_pip: n }
            } = e;
            if (t.transport !== a.He.POST_MESSAGE) throw new r.Z({ errorCode: s.lTL.INVALID_COMMAND }, 'command not available from "'.concat(t.transport, ' transport'));
            if (null == t.application.id) throw new r.Z({ errorCode: s.lTL.INVALID_COMMAND }, 'invalid application');
            return (
                i.Z.dispatch({
                    type: 'EMBEDDED_ACTIVITY_SET_CONFIG',
                    applicationId: t.application.id,
                    config: { useInteractivePIP: n }
                }),
                Promise.resolve({ use_interactive_pip: n })
            );
        }
    }
};
