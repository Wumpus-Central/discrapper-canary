n.d(t, { openQuestBarPreview: () => r });
var a = n(252313),
    s = n(695323),
    u = n(738822),
    o = n(477900);
n(582128);
var i = n(192308);
async function r(e) {
    let t = await (0, s.hh)(e, a.p.DESKTOP_ACCOUNT_PANEL_AREA);
    null != t &&
        (function (e) {
            let { bounty: t, sourceQuestContent: a } = e;
            (0, i.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("974119"),
                        n.e("245420"),
                        n.e("882297"),
                        n.e("324732"),
                        n.e("634225"),
                        n.e("312287"),
                        n.e("60955"),
                        n.e("264236"),
                        n.e("935715"),
                        n.e("482815"),
                        n.e("132191"),
                        n.e("538887"),
                        n.e("8563"),
                        n.e("170653"),
                        n.e("603808"),
                        n.e("424265"),
                        n.e("182045"),
                        n.e("535658"),
                    ]).then(n.bind(n, 240881));
                    return (n) => (0, o.jsx)(e, { ...n, bounty: t, sourceQuestContent: a });
                },
                { modalKey: "BOUNTY_VIDEO_MODAL" },
            );
        })({ bounty: t, sourceQuestContent: u.uF.QUEST_BAR_V2 });
}
