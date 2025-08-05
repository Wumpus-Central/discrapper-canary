n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(203143),
    o = n(615669),
    s = n(388032);
let l = {
    [o.z.END_EARLY]: (e) =>
        (0, r.jsx)(i.sNh, {
            id: 'end-poll-early',
            label: s.intl.string(s.t.grdwws),
            icon: i.e0C,
            action: () => {
                a.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id
                });
            },
            iconProps: { color: 'currentColor' }
        })
};
function c(e) {
    let t = (0, o.Z)(e);
    return 0 === t.length ? null : (0, r.jsx)(r.Fragment, { children: t.map((t) => l[t](e)) });
}
