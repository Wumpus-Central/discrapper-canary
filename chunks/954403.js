t.d(n, { G: () => a, z: () => u });
var l = t(477900),
    r = t(582128),
    i = t(738768);
let a = r.createContext(null);
function u(e) {
    let { text: n } = e,
        t = r.useContext(a),
        u = null != t ? (0, i.q$)(n, t) : null;
    return null == u
        ? n
        : u.map((e, n) => {
              let { text: t, highlight: i } = e;
              return (0, l.jsx)(
                  r.Fragment,
                  { children: i ? (0, l.jsx)("span", { className: "highlight", children: t }) : t },
                  n,
              );
          });
}
