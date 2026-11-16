var r = t(477900),
    l = t(582128),
    i = t(697530);
let a = l.createContext(null);
t.d(
    n,
    {},
    {
        G: a,
        z: function (e) {
            let { text: n } = e,
                t = l.useContext(a),
                u = null != t ? (0, i.q$)(n, t) : null;
            return null == u
                ? n
                : u.map((e, n) => {
                      let { text: t, highlight: i } = e;
                      return (0, r.jsx)(
                          l.Fragment,
                          { children: i ? (0, r.jsx)("span", { className: "highlight", children: t }) : t },
                          n,
                      );
                  });
        },
    },
);
