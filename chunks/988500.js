n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(203143),
    a = n(615669),
    o = n(388032);
let s = {
    [a.z.END_EARLY]: (e) =>
        (0, r.jsx)(i.sNh, {
            id: 'end-poll-early',
            label: o.NW.string(o.t.grdwws),
            icon: i.e0C,
            action: () => {
                l.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id
                });
            },
            iconProps: { color: 'currentColor' }
        })
};
function c(e) {
    let t = (0, a.Z)(e);
    return 0 === t.length ? null : (0, r.jsx)(r.Fragment, { children: t.map((t) => s[t](e)) });
}
