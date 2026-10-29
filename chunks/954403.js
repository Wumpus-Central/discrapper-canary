t.d(n, { G: () => i, z: () => s });
var l = t(477900),
    r = t(582128),
    a = t(738768);
let i = r.createContext(null);
function s(e) {
    let { text: n } = e,
        t = r.useContext(i),
        s = null != t ? (0, a.q$)(n, t) : null;
    return null == s
        ? n
        : s.map((e, n) => {
              let { text: t, highlight: a } = e;
              return (0, l.jsx)(
                  r.Fragment,
                  { children: a ? (0, l.jsx)("span", { className: "highlight", children: t }) : t },
                  n,
              );
          });
}
