n.d(t, { openQuestBarPreview: () => i });
var a = n(252313),
    u = n(695323),
    s = n(738822),
    o = n(477900);
n(582128);
var c = n(192308);
async function i(e) {
    let t = await (0, u.hh)(e, a.p.DESKTOP_ACCOUNT_PANEL_AREA);
    null != t &&
        (function (e) {
            let { bounty: t, sourceQuestContent: a } = e;
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("501675").then(n.bind(n, 502182));
                    return (n) => (0, o.jsx)(e, { ...n, bounty: t, sourceQuestContent: a });
                },
                { modalKey: "BOUNTY_VIDEO_MODAL" },
            );
        })({ bounty: t, sourceQuestContent: s.uF.QUEST_BAR_V2 });
}
