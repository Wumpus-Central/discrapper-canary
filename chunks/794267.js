n.d(e, { default: () => p });
var i = n(627968),
    s = n(64700),
    a = n(158954),
    d = n(58149),
    o = n(845625),
    c = n(615550),
    l = n(137207),
    r = n(652215),
    C = n(985018);
function p(t) {
    let { automodDecision: e, transitionState: n, onClose: p } = t,
        k = s.useCallback(() => {
            (0, d.zV)(r.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: c.Gb.BUG,
                decision_id: e.decisionId,
                message_id: e.messageId,
                content: e.messageContent,
            }),
                (0, l.E5)(e.messageId, e.channel, o.G.SUBMIT_FEEDBACK),
                p();
        }, [e, p]);
    return (0, i.jsx)(a.Modal, {
        onClose: p,
        transitionState: n,
        title: C.intl.string(C.t["7bdzNo"]),
        subtitle: C.intl.string(C.t.Lbpk6m),
        actions: [
            {
                text: C.intl.string(C.t["ETE/oC"]),
                onClick: p,
                variant: "secondary",
            },
            {
                text: C.intl.string(C.t.p89ACt),
                onClick: k,
            },
        ],
    });
}
