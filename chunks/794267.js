n.d(e, { default: () => p });
var i = n(477900),
    s = n(582128),
    a = n(189213),
    c = n(95561),
    d = n(845625),
    o = n(615550),
    l = n(995786),
    r = n(652215),
    C = n(375708);
function p(t) {
    let { automodDecision: e, transitionState: n, onClose: p } = t,
        k = s.useCallback(() => {
            ((0, c.zV)(r.HAw.GUILD_AUTOMOD_FEEDBACK, {
                feedback_type: o.Gb.BUG,
                decision_id: e.decisionId,
                message_id: e.messageId,
                content: e.messageContent,
            }),
                (0, l.E5)(e.messageId, e.channel, d.G.SUBMIT_FEEDBACK),
                p());
        }, [e, p]);
    return (0, i.jsx)(a.a, {
        onClose: p,
        transitionState: n,
        title: C.intl.string(C.t["7bdzNo"]),
        subtitle: C.intl.string(C.t.Lbpk6m),
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), onClick: p, variant: "secondary" },
            { text: C.intl.string(C.t.p89ACt), onClick: k },
        ],
    });
}
