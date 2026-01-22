n.d(t, {
    A: () => g,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(960488),
    a = n(311907),
    s = n(73153),
    o = n(829219),
    c = n(859703),
    u = n(890687),
    d = n(306190),
    p = n(607976),
    f = n(886217),
    h = n(652215);

function A(e) {
    return new URLSearchParams(e).get(u.L1.QUEST_ID);
}
let g = function (e) {
    let { questId: t } = e,
        { questId: n, setQuestId: g } = (function (e) {
            let t = (0, l.W6)(),
                [n, r] = i.useState(e),
                { search: a } = (0, l.zy)();
            return (
                i.useEffect(() => {
                    let t = A(a);
                    null != t ? r(t) : null != e && r(e);
                }, [e, a]),
                i.useEffect(() => {
                    if (null == n || A(a) === n) return;
                    let e = new URLSearchParams();
                    e.set(u.L1.TAB, u.NC.PREVIEW_TOOL),
                        e.set(u.L1.QUEST_ID, n),
                        t.push("".concat(h.BVt.QUEST_HOME_V2, "?").concat(e.toString()));
                }, [n, t, a]),
                {
                    questId: n,
                    setQuestId: r,
                }
            );
        })(t),
        m = (0, a.bG)([c.A], () => (null != n ? c.A.getQuest(n) : void 0), [n]),
        b = (0, a.bG)([c.A], () => (null != n ? c.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, o.dQ)(n).then(() => {
                (0, o.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, o.dQ)(n);
            };
            return (
                s.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    s.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [_, E] = i.useState([]);
    return (0, r.jsx)(p.A, {
        controls: (0, r.jsx)(d.A, {
            questId: n,
            setQuestId: g,
            quest: m,
            refreshQuest: () => {
                null != n && (0, o.dQ)(n);
            },
        }),
        selectedSections: _,
        onSectionSelect: (e) => {
            "all" === e ? E([]) : E([e]);
        },
        children:
            (null == b ? void 0 : b.id) != null
                ? (0, r.jsx)(f.Ok, {
                      questId: null == b ? void 0 : b.id,
                      selectedSections: _,
                  })
                : null,
    });
};
