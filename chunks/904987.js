"use strict";
n.d(t, { A: () => d });
var r = n(719442),
    i = n(374803),
    a = n(968011),
    s = n(399777),
    o = n(253932),
    l = n(711371);
let u = "line",
    c = [];
function d(e, t, n, d) {
    let { enabled: _, highlightDesign: f } = (0, a.sA)("decorateMentionSuggestion", { autoTrackExposure: !1 }),
        p = e.selection,
        { currentAutocompleteType: h } = d,
        m = null !== h && h !== i.DB.MENTION_SUGGESTIONS;
    if (
        !_ ||
        n.isDM() ||
        m ||
        l.VW.areStylesDisabled(e) ||
        !e.chatInputType.autocomplete?.mentionSuggestions ||
        !o.ng.getSetting() ||
        null == p ||
        l.ZF.isExpanded(p)
    )
        return c;
    let [g, E] = t;
    if (!l.l5.isText(g)) return c;
    let [A] = l.VW.node(e, l.PW.parent(E));
    if (!l.AS.isType(A, u) || !r.Q6.includes(l.VW.range(e, E), p.anchor)) return c;
    let I = p.anchor.offset,
        {
            results: { suggestions: T, queryInfo: y },
        } = (0, s.W)(n, g.text, I, d);
    return 0 === T.length
        ? c
        : [
              {
                  anchor: { path: E, offset: y.startIndex },
                  focus: { path: E, offset: y.startIndex + y.query.length },
                  mentionSuggestion: !0,
                  mentionSuggestionSimpleColorVariant: "simple" === f,
              },
          ];
}
