n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(203143),
    o = n(615669),
    a = n(388032);
let c = {
    [o.z.END_EARLY]: (e) =>
        (0, r.jsx)(i.sNh, {
            id: "end-poll-early",
            label: a.intl.string(a.t.grdwwt),
            icon: i.e0C,
            action: () => {
                l.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id,
                });
            },
            iconProps: { color: "currentColor" },
        }),
};
function s(e) {
    let t = (0, o.Z)(e);
    return 0 === t.length ? null : (0, r.jsx)(r.Fragment, { children: t.map((t) => c[t](e)) });
}
