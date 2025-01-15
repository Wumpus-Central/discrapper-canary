var n = i(200651);
i(192379);
var a = i(481060),
    l = i(570140),
    s = i(103879),
    o = i(800530);
t.Z = {
    open(e) {
        (0, a.openModalLazy)(
            async () => {
                l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN' });
                let { default: e } = await i.e('82961').then(i.bind(i, 751744));
                return (t) => (0, n.jsx)(e, { ...t });
            },
            { onCloseCallback: e }
        );
    },
    close() {
        l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE' });
    },
    success() {
        l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS' });
    },
    start_verification_check() {
        l.Z.dispatch({ type: 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL' }), setTimeout(() => (0, s._w)(), o.TX);
    }
};
