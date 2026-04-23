s.d(t, { A: () => f }), s(323874), s(14289), s(35956), s(321073);
var n = s(627968),
    l = s(64700),
    a = s(873263),
    r = s(311907),
    i = s(73153),
    o = s(829219),
    c = s(859703),
    u = s(890687),
    d = s(306190),
    _ = s(607976),
    m = s(886217),
    h = s(652215);
function x(e) {
    return new URLSearchParams(e).get(u.L1.QUEST_ID);
}
let f = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: f } = (function (e) {
            let t = (0, a.W6)(),
                [s, n] = l.useState(e),
                { search: r } = (0, a.zy)();
            return (
                l.useEffect(() => {
                    let t = x(r);
                    null != t ? n(t) : null != e && n(e);
                }, [e, r]),
                l.useEffect(() => {
                    if (null == s || x(r) === s) return;
                    let e = new URLSearchParams();
                    e.set(u.L1.TAB, u.NC.PREVIEW_TOOL),
                        e.set(u.L1.QUEST_ID, s),
                        t.push(`${h.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, r]),
                { questId: s, setQuestId: n }
            );
        })(t),
        E = (0, r.bG)([c.A], () => (null != s ? c.A.getQuest(s) : void 0), [s]),
        p = (0, r.bG)([c.A], () => (null != s ? c.A.getQuestLoadedViaPreview(s) : null), [s]);
    l.useEffect(() => {
        null != s &&
            (0, o.dQ)(s).then(() => {
                (0, o.Gt)(s);
            });
    }, [s]),
        l.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, o.dQ)(s);
            };
            return (
                i.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    i.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [g, A] = l.useState([]);
    return (0, n.jsx)(_.A, {
        controls: (0, n.jsx)(d.A, {
            questId: s,
            setQuestId: f,
            quest: E,
            refreshQuest: () => {
                null != s && (0, o.dQ)(s);
            },
        }),
        selectedSections: g,
        onSectionSelect: (e) => {
            "all" === e ? A([]) : A([e]);
        },
        children: p?.id != null ? (0, n.jsx)(m.Ok, { questId: p?.id, selectedSections: g }) : null,
    });
};
