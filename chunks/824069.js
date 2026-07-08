n.d(t, { K: () => u });
var l = n(627968);
n(64700);
var r = n(877624),
    i = n(834730),
    a = n(549996),
    o = n(807098),
    s = n(985216);
function u() {
    let e = (0, a.c)(r.C.PLAN_SELECT_CARD_BANNER),
        t =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        n = (0, o.T)(t?.asset);
    return null == t || "" === t.body
        ? null
        : (0, l.jsxs)("div", {
              className: s.kL,
              children: [
                  null != n && (0, l.jsx)("img", { alt: "", className: s.Sl, src: n }),
                  (0, l.jsx)(i.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: s.rf,
                      children: t.body,
                  }),
              ],
          });
}
