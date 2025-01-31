n.d(t, {
    U5: () => i,
    qR: () => l
});
var r = n(273504);
function l(e) {
    let t = i();
    return Array.from(e.defaultActionTypes).map((e) => t[e]);
}
function i() {
    return {
        [r.jj.BLOCK_MESSAGE]: {
            type: r.jj.BLOCK_MESSAGE,
            metadata: { customMessage: void 0 }
        },
        [r.jj.FLAG_TO_CHANNEL]: {
            type: r.jj.FLAG_TO_CHANNEL,
            metadata: { channelId: void 0 }
        },
        [r.jj.USER_COMMUNICATION_DISABLED]: {
            type: r.jj.USER_COMMUNICATION_DISABLED,
            metadata: { durationSeconds: 60 }
        },
        [r.jj.QUARANTINE_USER]: {
            type: r.jj.QUARANTINE_USER,
            metadata: {}
        }
    };
}
