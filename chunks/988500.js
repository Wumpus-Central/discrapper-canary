n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(203143),
    s = n(615669),
    r = n(388032);
let o = {
    [s.z.END_EARLY]: (e) =>
        (0, i.jsx)(l.sNh, {
            id: 'end-poll-early',
            label: r.intl.string(r.t.grdwws),
            icon: l.e0C,
            action: () => {
                a.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id
                });
            },
            iconProps: { color: 'currentColor' }
        })
};
function d(e) {
    let t = (0, s.Z)(e);
    return 0 === t.length ? null : (0, i.jsx)(i.Fragment, { children: t.map((t) => o[t](e)) });
}
