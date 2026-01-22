n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(719442),
    i = n(374803),
    a = n(968011),
    s = n(399777),
    o = n(253932),
    l = n(711371);
let c = "line",
    u = [];

function d(e, t, n, d) {
    var f;
    let { enabled: p, highlightDesign: _ } = (0, a.sA)("decorateMentionSuggestion", {
            autoTrackExposure: !1,
        }),
        h = e.selection,
        { currentAutocompleteType: m } = d,
        g = null !== m && m !== i.DB.MENTION_SUGGESTIONS;
    if (
        !p ||
        n.isDM() ||
        g ||
        l.VW.areStylesDisabled(e) ||
        !(null == (f = e.chatInputType.autocomplete) ? void 0 : f.mentionSuggestions) ||
        !o.ng.getSetting() ||
        null == h ||
        l.ZF.isExpanded(h)
    )
        return u;
    let [E, b] = t;
    if (!l.l5.isText(E)) return u;
    let [y] = l.VW.node(e, l.PW.parent(b));
    if (!l.AS.isType(y, c) || !r.Q6.includes(l.VW.range(e, b), h.anchor)) return u;
    let O = h.anchor.offset,
        {
            results: { suggestions: A, queryInfo: v },
        } = (0, s.W)(n, E.text, O, d);
    return 0 === A.length
        ? u
        : [
              {
                  anchor: {
                      path: b,
                      offset: v.startIndex,
                  },
                  focus: {
                      path: b,
                      offset: v.startIndex + v.query.length,
                  },
                  mentionSuggestion: !0,
                  mentionSuggestionSimpleColorVariant: "simple" === _,
              },
          ];
}
