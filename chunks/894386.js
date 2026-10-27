n.d(t, { openQuestBarPreview: () => r });
var a = n(252313),
    s = n(845890),
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
                        n.e("245420"),
                        n.e("216870"),
                        n.e("974119"),
                        n.e("651585"),
                        n.e("174777"),
                        n.e("340363"),
                        n.e("125043"),
                        n.e("955628"),
                        n.e("324732"),
                        n.e("634225"),
                        n.e("255563"),
                        n.e("60955"),
                        n.e("264236"),
                        n.e("110116"),
                        n.e("809915"),
                        n.e("935715"),
                        n.e("621624"),
                        n.e("643612"),
                        n.e("398793"),
                        n.e("592731"),
                        n.e("132191"),
                        n.e("784103"),
                        n.e("53374"),
                        n.e("482815"),
                        n.e("256616"),
                        n.e("170653"),
                        n.e("817852"),
                        n.e("133179"),
                        n.e("614784"),
                        n.e("538887"),
                        n.e("334127"),
                        n.e("8563"),
                        n.e("912773"),
                        n.e("710638"),
                        n.e("539319"),
                        n.e("653849"),
                        n.e("753589"),
                        n.e("603808"),
                        n.e("424265"),
                        n.e("602078"),
                        n.e("954180"),
                        n.e("258427"),
                        n.e("182045"),
                        n.e("157153"),
                    ]).then(n.bind(n, 589451));
                    return (n) => (0, o.jsx)(e, { ...n, bounty: t, sourceQuestContent: a });
                },
                { modalKey: "BOUNTY_VIDEO_MODAL" },
            );
        })({ bounty: t, sourceQuestContent: u.uF.QUEST_BAR_V2 });
}
